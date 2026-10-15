'use client'

import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

import { ProductCard } from '@/domains/product/components/ProductCard'
import { getDeviceTypes, getProducts, getSortOptions } from '@/shared/api'
import { useFetch } from '@/shared/lib/useFetch'
import { Typography } from '@/shared/ui/Typography'

import { ProductFilters } from './ProductFilters'

interface ProductListProps {
  categoryId: string
}

export function ProductList({ categoryId }: ProductListProps) {
  const searchParams = useSearchParams()

  const deviceTypeIds = searchParams.getAll('deviceTypeIds').map(Number)
  const sort = searchParams.get('sort')
    ? Number(searchParams.get('sort'))
    : undefined
  const search = searchParams.get('search') ?? undefined

  const { data: sortOptions } = useFetch(getSortOptions, [])
  const { data: deviceTypes } = useFetch(getDeviceTypes, [])
  const {
    data: products,
    error,
    loading,
  } = useFetch(
    () =>
      getProducts({
        deviceTypeIds,
        folderId: categoryId === '0' ? undefined : categoryId,
        search,
        sort,
      }),
    [categoryId, searchParams.toString()],
  )
  const categoryName =
    categoryId === '0'
      ? 'Все товары'
      : (products?.[0]?.folderName ?? 'Все товары')

  const [mobilePanel, setMobilePanel] = useState<'deviceTypes' | 'sort' | null>(
    null,
  )

  return (
    <div className='mt-[32px] flex flex-col gap-[32px] md:mt-[65px] md:flex-row md:gap-[50px]'>
      <div className='hidden w-[250px] md:block'>
        <ProductFilters
          categoryId={categoryId}
          deviceTypes={deviceTypes ?? []}
          sortOptions={sortOptions ?? []}
        />
      </div>
      <div className='flex gap-2 md:hidden'>
        <button onClick={() => setMobilePanel('deviceTypes')}>
          <Typography className='text-primary-blue' tag='p' variant='p1'>
            Тип
          </Typography>
        </button>
        <Typography className='text-primary-blue' tag='p' variant='p1'>
          |
        </Typography>
        <button onClick={() => setMobilePanel('sort')}>
          <Typography className='text-primary-blue' tag='p' variant='p1'>
            Сортировка
          </Typography>
        </button>
      </div>
      {mobilePanel && (
        <div
          className='fixed inset-0 z-50 flex items-end md:hidden'
          onClick={() => setMobilePanel(null)}>
          <div
            className='w-full rounded-t-[16px] bg-white px-[24px] pt-[24px] pb-[48px]'
            onClick={e => e.stopPropagation()}>
            <div className='mb-[24px] flex items-center justify-between'>
              <Typography
                className='text-primary-blue'
                tag='p'
                variant='p1-highlight'>
                {mobilePanel === 'deviceTypes' ? 'Тип' : 'Сортировка'}
              </Typography>
              <button
                className='text-primary-grey text-[24px] leading-none'
                onClick={() => setMobilePanel(null)}>
                ×
              </button>
            </div>
            <ProductFilters
              categoryId={categoryId}
              deviceTypes={deviceTypes ?? []}
              mobileSection={mobilePanel}
              onClose={() => setMobilePanel(null)}
              sortOptions={sortOptions ?? []}
            />
          </div>
        </div>
      )}
      <div className='flex-1'>
        <Typography className='text-primary-grey' tag='p' variant='h3'>
          {categoryName}
        </Typography>
        {loading ? (
          <div className='mt-[20px] grid grid-cols-2 gap-1 md:mt-[40px] md:gap-2 lg:grid-cols-3'>
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                className='aspect-[3/4] animate-pulse rounded-[6px] bg-gray-100'
                key={i}
              />
            ))}
          </div>
        ) : error ? (
          <Typography
            className='text-primary-grey mt-[65px]'
            tag='p'
            variant='p1'>
            Не удалось загрузить товары. Попробуйте позже.
          </Typography>
        ) : (
          <div className='mt-[20px] grid grid-cols-2 gap-1 sm:grid-cols-3 md:mt-[40px] md:gap-2 lg:grid-cols-4'>
            {products!.map(product => (
              <ProductCard
                hoverImageUrl={
                  product.hoverImageUrl
                    ? `${process.env.NEXT_PUBLIC_API_URL}${product.hoverImageUrl}`
                    : null
                }
                id={product.id}
                key={product.id}
                mainImageUrl={
                  product.mainImageUrl
                    ? `${process.env.NEXT_PUBLIC_API_URL}${product.mainImageUrl}`
                    : null
                }
                name={product.name}
                price={product.price}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

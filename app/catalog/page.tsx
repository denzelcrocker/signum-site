import type { Metadata } from 'next'

import Image from 'next/image'
import Link from 'next/link'

import { getCatalogTree } from '@/shared/api'
import { ConsultationBanner } from '@/shared/components/ConsultationBanner'
import { isRokada } from '@/shared/constants'
import { Breadcrumbs } from '@/shared/ui/Breadcrumbs'
import { CatalogSearchInput } from '@/shared/ui/CatalogSearchInput'
import { Typography } from '@/shared/ui/Typography'

export const metadata: Metadata = {
  title: 'Каталог',
}

export default async function CatalogPage() {
  const catalog = await getCatalogTree()

  catalog?.children.push(
    isRokada
      ? {
          children: [],
          id: 0,
          imageUrl:
            '/uploads/products/525d3d7b-369b-4d54-8880-8da69f263b49.png',
          name: 'Все товары',
        }
      : {
          children: [],
          id: 0,
          imageUrl:
            '/uploads/products/6afc236b-2d28-412f-9557-f59df3e5803c.png',
          name: 'Все товары',
        },
  )

  return (
    <div className='container'>
      <div className='mt-[24px] flex flex-col justify-between gap-4 md:flex-row md:items-center'>
        <Breadcrumbs
          items={[
            { href: '/', label: 'Главная' },
            { href: '/catalog', label: 'Каталог' },
          ]}
        />
        <CatalogSearchInput />
      </div>
      <div className='mt-[64px]'>
        <Typography className='text-primary-grey' tag='h2' variant='h3'>
          Категории товаров
        </Typography>
        {!catalog ? (
          <Typography
            className='text-primary-grey mt-[64px]'
            tag='p'
            variant='p1'>
            Не удалось загрузить каталог. Попробуйте позже.
          </Typography>
        ) : (
          <div className='mt-[64px] flex gap-2'>
            <div className='hidden gap-2 md:flex'>
              {catalog.children.map(category => (
                <Link
                  className='border-primary-blue group relative hidden h-[260px] flex-[1] cursor-pointer flex-col overflow-hidden rounded-[6px] border transition-all duration-500 hover:flex-[2] md:flex md:h-[480px]'
                  href={'/catalog/products/' + category.id}
                  key={category.id}>
                  <div className='p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                    <Typography
                      className='text-primary-black'
                      tag='span'
                      variant='h3'>
                      {category.name}
                    </Typography>
                  </div>
                  <Image
                    alt={category.name}
                    className='absolute -right-[40px] -bottom-[140px] min-h-[505px] min-w-[495px] object-contain'
                    height={505}
                    src={`${process.env.API_URL}${category.imageUrl}`}
                    width={495}
                  />
                </Link>
              ))}
            </div>

            <div className='grid grid-cols-2 gap-2 md:hidden'>
              {catalog.children.map(category => (
                <Link
                  className='border-primary-blue group relative flex h-[263px] cursor-pointer flex-col overflow-hidden rounded-[6px] border transition-all duration-500 md:hidden'
                  href={'/catalog/products/' + category.id}
                  key={category.id}>
                  <div className='p-2'>
                    <Typography
                      className='text-primary-black'
                      tag='span'
                      variant='h3'>
                      {category.name}
                    </Typography>
                  </div>
                  <Image
                    alt={category.name}
                    className='absolute right-0 -bottom-[90px] left-0 min-h-[230px] min-w-[241px] object-contain'
                    height={230}
                    src={`${process.env.API_URL}${category.imageUrl}`}
                    width={241}
                  />
                </Link>
              ))}
            </div>
          </div>
        )}
        <ConsultationBanner className='mt-[136px]' />
      </div>
    </div>
  )
}

import type { Metadata } from 'next'

import Image from 'next/image'
import Link from 'next/link'

import { AskQuestionButton } from '@/domains/product/components/AskQuestionButton'
import { ProductCard } from '@/domains/product/components/ProductCard'
import { ProductImageGallery } from '@/domains/product/components/ProductImageGallery'
import { ProductTabs } from '@/domains/product/components/ProductTabs'
import { getProduct } from '@/shared/api'
import { Breadcrumbs } from '@/shared/ui/Breadcrumbs'
import { Button } from '@/shared/ui/Button'
import { CatalogSearchInput } from '@/shared/ui/CatalogSearchInput'
import { Typography } from '@/shared/ui/Typography'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const product = await getProduct(id)
  return {
    description: product?.description ?? 'Описание товара',
    title: product?.name ?? 'Товар',
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = await getProduct(id)

  if (!product) {
    return (
      <div className='container'>
        <Typography
          className='text-primary-grey mt-[88px]'
          tag='p'
          variant='p1'>
          Не удалось загрузить товар. Попробуйте позже.
        </Typography>
      </div>
    )
  }

  const images = product.images.map(img => ({
    ...img,
    url: `${process.env.API_URL}${img.url}`,
  }))

  const documents = product.documents.map(doc => ({
    ...doc,
    url: `${process.env.API_URL}${doc.url}`,
  }))

  return (
    <div>
      <div className='container'>
        <div className='mt-[24px] flex flex-col justify-between gap-4 md:flex-row md:items-center'>
          <Breadcrumbs
            items={[
              { href: '/', label: 'Главная' },
              { href: '/catalog', label: 'Каталог' },
              { href: '#', label: product.folderName },
            ]}
          />
          <CatalogSearchInput />
        </div>
      </div>
      <div className='container'>
        <Typography
          className='text-primary-grey mt-[32px] md:mt-[64px]'
          tag='h1'
          variant='h2'>
          {product.name}
        </Typography>
        <div className='mt-[32px] flex flex-col items-start gap-8 md:mt-[64px] md:flex-row md:gap-8'>
          <ProductImageGallery images={images} />
          <div className='max-w-[490px] flex-1'>
            <Typography className='text-primary-black' tag='p' variant='h2'>
              {product.price.toLocaleString('ru-RU')} ₽
            </Typography>
            <Typography
              className='text-primary-black mt-6'
              tag='p'
              variant='p1'>
              {product.description}
            </Typography>

            <AskQuestionButton className='mt-[32px]' />
            {product.features.length > 0 && (
              <div className='mt-4 flex flex-wrap gap-4 md:mt-8'>
                {product.features
                  .sort((a, b) => a.sortOrder - b.sortOrder)
                  .map(feature => (
                    <div key={feature.id}>
                      <Image
                        alt={feature.title}
                        height={50}
                        src={`${process.env.API_URL}${feature.iconUrl}`}
                        width={50}
                      />
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <ProductTabs
        content={product.content}
        documents={documents}
        properties={product.properties}
      />
      <div className='mt-[64px]'>
        <div className='container'>
          <Typography className='mb-[32px]' tag='h3' variant='h3'>
            Сопутствующие товары
          </Typography>
          {product.relatedProducts.length === 0 ? (
            <Typography className='text-primary-grey' tag='p' variant='p1'>
              Сопутствующие товары отсутствуют
            </Typography>
          ) : (
            <div className='grid grid-cols-2 gap-1 sm:grid-cols-3 md:mt-[40px] md:gap-2 lg:grid-cols-4'>
              {product.relatedProducts.map(related => (
                <ProductCard
                  hoverImageUrl={
                    related.hoverImageUrl
                      ? `${process.env.API_URL}${related.hoverImageUrl}`
                      : null
                  }
                  id={related.id}
                  key={related.id}
                  mainImageUrl={
                    related.mainImageUrl
                      ? `${process.env.API_URL}${related.mainImageUrl}`
                      : null
                  }
                  name={related.name}
                  price={related.price}
                />
              ))}
              <Link className='mt-auto' href='/catalog'>
                <Button>Смотреть все</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

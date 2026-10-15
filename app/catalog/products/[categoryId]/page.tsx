import type { Metadata } from 'next'

import { ConsultationBanner } from '@/shared/components/ConsultationBanner'
import { Breadcrumbs } from '@/shared/ui/Breadcrumbs'
import { CatalogSearchInput } from '@/shared/ui/CatalogSearchInput'

import { ProductList } from './ProductList'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoryId: string }>
}): Promise<Metadata> {
  const { categoryId } = await params
  return { title: await getCategoryName(categoryId) }
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ categoryId: string }>
}) {
  const { categoryId } = await params
  const categoryName = await getCategoryName(categoryId)

  return (
    <div className='container'>
      <div className='mt-[24px] flex flex-col justify-between gap-4 md:flex-row md:items-center'>
        <Breadcrumbs
          items={[
            { href: '/', label: 'Главная' },
            { href: '/catalog', label: 'Каталог' },
            { href: `/catalog/products/${categoryId}`, label: categoryName },
          ]}
        />
        <CatalogSearchInput />
      </div>
      <ProductList categoryId={categoryId} />
      <ConsultationBanner className='mt-[32px] md:mt-[136px]' />
    </div>
  )
}

async function getCategoryName(categoryId: string): Promise<string> {
  if (categoryId === '0') return 'Все товары'
  const { getProducts } = await import('@/shared/api')
  const products = await getProducts({ folderId: categoryId })
  return products?.[0]?.folderName ?? 'Каталог'
}

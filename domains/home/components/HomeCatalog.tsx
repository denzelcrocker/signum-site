import Link from 'next/link'

import { ProductCard } from '@/domains/product/components/ProductCard'
import { getProducts } from '@/shared/api'
import { Button } from '@/shared/ui/Button'
import { Typography } from '@/shared/ui/Typography'

export const HomeCatalog = async () => {
  const allProducts = await getProducts({})
  const products = allProducts?.slice(0, 4) ?? []

  return (
    <div className='container'>
      <div className='flex items-center justify-between gap-4'>
        <Typography className='text-primary-grey' tag='p' variant='h2'>
          Выберите оптимальное решение
        </Typography>
        <Link className='shrink-0' href='/catalog'>
          <Button>Перейти в каталог</Button>
        </Link>
      </div>
      <div className='mt-[32px] grid grid-cols-2 gap-[16px] lg:grid-cols-4'>
        {products.map(product => (
          <ProductCard
            hoverImageUrl={
              product.hoverImageUrl
                ? `${process.env.API_URL}${product.hoverImageUrl}`
                : null
            }
            id={product.id}
            key={product.id}
            mainImageUrl={
              product.mainImageUrl
                ? `${process.env.API_URL}${product.mainImageUrl}`
                : null
            }
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  )
}

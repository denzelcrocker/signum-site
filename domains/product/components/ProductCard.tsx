import Image from 'next/image'
import Link from 'next/link'

import { Typography } from '@/shared/ui/Typography'

interface ProductCardProps {
  hoverImageUrl?: null | string
  id?: number
  mainImageUrl?: null | string
  name?: string
  price?: number
}

export const ProductCard = ({
  hoverImageUrl,
  id,
  mainImageUrl,
  name,
  price,
}: ProductCardProps) => {
  const inner = (
    <>
      <div className='relative aspect-square overflow-hidden rounded-[6px] bg-[#fff]'>
        {mainImageUrl && (
          <Image
            alt={name ?? ''}
            className='scale-75 object-cover transition-opacity duration-300 group-hover:opacity-0'
            fill
            sizes='(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw'
            src={mainImageUrl}
          />
        )}
        {hoverImageUrl && (
          <Image
            alt={name ?? ''}
            className='object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100'
            fill
            sizes='(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw'
            src={hoverImageUrl}
          />
        )}
      </div>
      {name && (
        <Typography className='text-primary-blue' variant='p2'>
          {name}
        </Typography>
      )}
      {price !== undefined && (
        <Typography className='text-primary-blue mt-auto' variant='p2'>
          {price.toLocaleString('ru-RU')} ₽
        </Typography>
      )}
    </>
  )

  if (id === undefined) {
    return <div className='rounded-[6px] bg-[#F4F4F4] p-[8px]'>{inner}</div>
  }

  return (
    <Link
      className='group flex flex-col gap-2 rounded-[6px] bg-[#F4F4F4] p-[8px] transition-all duration-300 hover:shadow-[0px_4px_13px_0px_#727F9F4D]'
      href={'/catalog/product/' + id}>
      {inner}
    </Link>
  )
}

import Image from 'next/image'
import Link from 'next/link'

import type { HomeData } from '@/shared/api/types'

import { Button } from '@/shared/ui/Button'
import { Typography } from '@/shared/ui/Typography'

interface HomeFeaturedProps {
  featured: HomeData['featured']
}

export const HomeFeatured = ({ featured }: HomeFeaturedProps) => {
  return (
    <div className='container'>
      <div className='flex flex-col items-start gap-[86px] md:flex-row'>
        <div className='mt-[16px] max-w-[500px]'>
          <Typography className='text-primary-orange' tag='h2' variant='h2'>
            {featured.title}
          </Typography>
          <div className='flex items-start gap-4 md:block'>
            <Link href={`/catalog/product/${featured.productId}`}>
              <Button className='mt-[23px]'>Подробнее</Button>
            </Link>
            <Image
              alt={featured.title}
              className='mt-[10px] rotate-[5deg] md:hidden'
              height={166}
              src={`${process.env.API_URL}${featured.mediaUrl}`}
              width={150}
            />
          </div>
        </div>
        <Image
          alt={featured.title}
          className='hidden rotate-[5deg] md:block'
          height={370}
          src={`${process.env.API_URL}${featured.mediaUrl}`}
          width={340}
        />
      </div>
    </div>
  )
}

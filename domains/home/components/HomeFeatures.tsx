import Image from 'next/image'
import Link from 'next/link'

import { isRokada } from '@/shared/constants'
import { Button } from '@/shared/ui/Button'
import { Typography } from '@/shared/ui/Typography'

export const HomeFeatures = () => {
  return (
    <div className='container'>
      <div className='flex flex-col gap-4'>
        <div className='grid grid-cols-1 gap-4 md:h-[232px] md:grid-cols-2'>
          <div className='grid h-[148px] grid-cols-2 gap-4 md:h-auto'>
            {/* Временно скрыто: карточка «10+ объектов оборудовано». */}
            <div className='bg-primary-orange col-span-2 flex flex-col gap-2 rounded-[8px] p-[24px]'>
              <Typography className='text-white' variant='h1'>
                {isRokada ? '5' : '8'}
              </Typography>
              <Typography className='text-white' variant='p1'>
                лет гарантии
              </Typography>
            </div>
          </div>
          <Image
            alt={
              isRokada
                ? 'Оборудование оповещения: громкоговорители и панели управления ROKADA'
                : 'Оборудование пожарной сигнализации: извещатели и ручные пожарные извещатели'
            }
            className='bg-primary-green h-[147px] w-full rounded-[8px] object-cover md:h-full'
            height={232}
            src={
              isRokada
                ? '/images/rokada/home/1.jpg'
                : '/images/signum/home/1.jpg'
            }
            width={601}
          />
        </div>
        <div className='grid grid-cols-1 gap-4 md:h-[346px] md:grid-cols-2'>
          <Image
            alt={
              isRokada
                ? 'Монтаж громкоговорителя ROKADA на стену'
                : 'Монтаж пожарного извещателя на потолке'
            }
            className='h-[222px] w-full rounded-[8px] object-cover md:h-full'
            height={346}
            src={
              isRokada
                ? '/images/rokada/home/2.jpg'
                : '/images/signum/home/2.jpg'
            }
            width={592}
          />
          <div className="flex h-[222px] flex-col gap-6 rounded-[8px] bg-[url('/images/signum/home/3.png')] bg-cover bg-center px-[24px] py-[60px] md:h-full">
            <Typography className='text-primary-black' variant='h2'>
              Реализуем комплексные решения в области пожарной безопасности
            </Typography>
            <Link href='/contacts'>
              <Button variant='blue'>Связаться с нами</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

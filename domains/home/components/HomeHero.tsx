import Link from 'next/link'

import { isRokada } from '@/shared/constants'
import { Button } from '@/shared/ui/Button'
import { Typography } from '@/shared/ui/Typography'

export const HomeHero = () => {
  return (
    <div
      className={`relative h-[650px] bg-cover bg-center md:h-[1100px] ${
        isRokada
          ? "bg-[url('/images/rokada/hero-bg.jpg')]"
          : "bg-[url('/images/signum/hero-bg.jpg')]"
      }`}>
      <div className='absolute inset-0 bg-[#35384380]'></div>
      <div className='relative container'>
        <div className='mt-[162px] w-full max-w-[830px]'>
          <Typography
            className='text-balance text-[#EDEDED]'
            tag='h1'
            variant='h1'>
            {isRokada
              ? 'Надёжные системы связи и оповещения для объектов любого масштаба'
              : 'Российские адресные и неадресные системы пожарной сигнализации            СИГНУМ'}
          </Typography>
          <Link href={'/catalog'}>
            <Button className='mt-8'>Каталог продукции</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

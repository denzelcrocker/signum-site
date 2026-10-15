import Image from 'next/image'

import { ConsultationTrigger } from '@/domains/consultation/components/ConsultationTrigger'
import { cn } from '@/shared/lib/cn'
import { Typography } from '@/shared/ui/Typography'

import { isRokada } from '../constants'

interface ConsultationBannerProps {
  className?: string
}

export const ConsultationBanner = ({ className }: ConsultationBannerProps) => {
  return (
    <div
      className={cn(
        'relative flex h-[240px] flex-col items-start overflow-hidden rounded-[6px] p-[32px] md:flex-row md:justify-between',
        className,
      )}>
      <Image
        alt=''
        aria-hidden
        className='z-0 mt-[90px] object-cover md:mt-0'
        fill
        src={
          isRokada ? '/images/rokada/form-bg.png' : '/images/signum/form-bg.png'
        }
      />
      <div className='relative z-10'>
        <Typography className='text-primary-black' tag='p' variant='h2'>
          Остались вопросы?
        </Typography>
        <Typography
          className='text-primary-black mt-2 max-w-[340px]'
          tag='p'
          variant='p2'>
          Отправьте заявку на консультацию, и мы свяжемся с вами в ближайшее
          время
        </Typography>
      </div>
      <div className='relative z-10 mt-[16px] md:mt-[30px]'>
        <ConsultationTrigger />
      </div>
    </div>
  )
}

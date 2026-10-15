import { Typography } from '@/shared/ui/Typography'

interface StepCardProps {
  step: string
  title: string
  description: string
}

export const StepCard = ({ step, title, description }: StepCardProps) => {
  return (
    <div className='bg-secondary-card rounded-[6px] p-[24px]'>
      <Typography className='text-primary-orange' tag='p' variant='p1'>
        {step}
      </Typography>
      <Typography className='text-primary-black mt-[48px]' tag='h3' variant='h3'>
        {title}
      </Typography>
      <Typography className='text-primary-grey mt-[24px]' tag='p' variant='p1'>
        {description}
      </Typography>
    </div>
  )
}

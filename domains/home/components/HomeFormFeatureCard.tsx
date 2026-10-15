import { Typography } from '@/shared/ui/Typography'

export const HomeFormFeatureCard = ({
  description,
  icon,
  title,
}: {
  description: string
  icon: React.ReactNode
  title: string
}) => {
  return (
    <div className='border-secondary-gray-50 flex items-start gap-2 rounded-[10px] border-[1px] bg-[#D9D9D92B] p-4'>
      <div className='shrink-0'>{icon}</div>

      <div>
        <Typography className='text-white' variant='p2'>
          {title}
        </Typography>
        <Typography className='mt-2 text-[#FEFEFE99]' variant='p2'>
          {description}
        </Typography>
      </div>
    </div>
  )
}

import Link from 'next/link'

import { Typography } from '@/shared/ui/Typography'

interface BreadcrumbItem {
  href: string
  label: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

const Separator = () => (
  <svg
    className='shrink-0'
    fill='none'
    height='10'
    viewBox='0 0 9 10'
    width='9'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M0.5 9.16026L7.625 5.04663C7.79167 4.95041 7.79167 4.70985 7.625 4.61362L0.5 0.5'
      stroke='#35415B'
      strokeLinecap='round'
    />
  </svg>
)

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <div className='flex flex-wrap items-center gap-2'>
      {items.map((item, index) => (
        <div className='flex shrink-0 items-center gap-2' key={item.href}>
          {index > 0 && <Separator />}
          <Link href={item.href}>
            <Typography tag='span' variant='p1'>
              {item.label}
            </Typography>
          </Link>
        </div>
      ))}
    </div>
  )
}

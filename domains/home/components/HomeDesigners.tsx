import Link from 'next/link'

import type { DesignerSection } from '@/shared/api/types'

import { DesignerCard } from '@/domains/designer/components/DesignerCard'
import { Button } from '@/shared/ui/Button'
import { Typography } from '@/shared/ui/Typography'

interface HomeDesignersProps {
  sections: DesignerSection[]
}

export const HomeDesigners = ({ sections }: HomeDesignersProps) => {
  return (
    <div className='container'>
      <div className='flex items-center justify-between gap-4'>
        <Typography className='text-primary-grey' tag='p' variant='h2'>
          Поддержка
        </Typography>
        <Link className='hidden md:block' href='/designers'>
          <Button>Смотреть все</Button>
        </Link>
      </div>
      <div className='mt-[16px] grid grid-cols-2 gap-4 md:mt-[32px] md:grid-cols-3 lg:grid-cols-4'>
        {sections.splice(0, 4).map(section => (
          <DesignerCard
            files={section.files}
            imageUrl={`${process.env.API_URL}${section.imageUrl}`}
            key={section.id}
            title={section.name}
          />
        ))}
      </div>
      <Link className='mt-[16px] block md:hidden' href='/designers'>
        <Button>Смотреть все</Button>
      </Link>
    </div>
  )
}

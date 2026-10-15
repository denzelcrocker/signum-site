import { type Metadata } from 'next'

import { DesignerCard } from '@/domains/designer/components/DesignerCard'
import { getDesignerSections } from '@/shared/api'
import { ConsultationBanner } from '@/shared/components/ConsultationBanner'
import { Breadcrumbs } from '@/shared/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Поддержка',
}

export default async function DesignersPage() {
  const sections = await getDesignerSections()

  return (
    <div className='container'>
      <div className='mt-[24px]'>
        <Breadcrumbs
          items={[
            { href: '/', label: 'Главная' },
            { href: '/designers', label: 'Поддержка' },
          ]}
        />
      </div>
      <div className='mt-[32px] grid grid-cols-2 gap-4 md:mt-[100px] md:grid-cols-3 lg:grid-cols-4'>
        {sections.map(section => (
          <DesignerCard
            files={section.files}
            imageUrl={`${process.env.API_URL}${section.imageUrl}`}
            key={section.id}
            title={section.name}
          />
        ))}
      </div>
      <ConsultationBanner className='mt-[32px] md:mt-[130px]' />
    </div>
  )
}

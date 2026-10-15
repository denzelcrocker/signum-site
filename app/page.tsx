import type { Metadata } from 'next'

import { HomeCatalog } from '@/domains/home/components/HomeCatalog'
import { HomeDesigners } from '@/domains/home/components/HomeDesigners'
import { HomeFeatures } from '@/domains/home/components/HomeFeatures'
import { HomeForm } from '@/domains/home/components/HomeForm'
import { HomeHero } from '@/domains/home/components/HomeHero'
import { HomeInfo } from '@/domains/home/components/HomeInfo'
import { HomeSteps } from '@/domains/home/components/HomeSteps'
import { getDesignerSections } from '@/shared/api'

export const metadata: Metadata = {
  title: 'Главная',
}

export default async function Home() {
  const designerSections = await getDesignerSections()

  return (
    <div>
      <div className='-mt-[96px] flex flex-col gap-[60px] md:gap-[130px]'>
        <HomeHero />
        <HomeFeatures />
        <HomeCatalog />
        <HomeSteps />
        <HomeForm />
        <HomeInfo />
        {/* Временно скрыто: отображение карты на главной странице. */}
        <HomeDesigners sections={designerSections} />
      </div>
    </div>
  )
}

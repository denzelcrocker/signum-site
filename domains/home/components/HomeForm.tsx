import { ConsultationForm } from '@/domains/consultation/components/ConsultationForm'
import { isRokada } from '@/shared/constants'
import { IconHomeFormConsultation } from '@/shared/icons/IconHomeFormConsultation'
import { IconHomeFormSolution } from '@/shared/icons/IconHomeFormSolution'
import { IconHomeFormSpecification } from '@/shared/icons/IconHomeFormSpecification'
import { Typography } from '@/shared/ui/Typography'

import { HomeFormFeatureCard } from './HomeFormFeatureCard'

const FEATURES = [
  {
    description: 'С учётом площади, норм и стадии проекта',
    icon: <IconHomeFormSolution />,
    title: 'Подбор решения',
  },
  {
    description: 'Подготовим состав оборудования и документы',
    icon: <IconHomeFormSpecification />,
    title: 'Спецификация',
  },
  {
    description: 'Ответим на вопросы по монтажу и запуску',
    icon: <IconHomeFormConsultation />,
    title: 'Консультация',
  },
]

export const HomeForm = () => {
  return (
    <div
      className='relative'
      style={{
        background: isRokada
          ? 'linear-gradient(100.76deg, #BB1E1C -57.25%, #0C132B 14.95%, #0B132B 57.9%, #BB1E1C 132.84%)'
          : 'linear-gradient(100.76deg, #DB4004 -57.25%, #0C132B 14.95%, #0B132B 57.9%, #DB4004 132.84%)',
      }}>
      <div className='container'>
        <div className='relative z-10 flex flex-col gap-[48px] py-[32px] md:flex-row md:justify-between md:py-[64px] lg:gap-[42px]'>
          <div className='flex flex-col gap-[24px]'>
            <Typography className='text-white' tag='p' variant='h2'>
              Поможем подобрать решение под ваш объект
            </Typography>
            <Typography className='text-[#FFFFFFA6]' tag='p' variant='p1'>
              Специалист уточнит задачу, посоветует состав системы связи и
              оповещения и подскажет, какие решения лучше подойдут под условия
              объекта
            </Typography>
            <div className='mt-auto grid grid-cols-1 gap-4 lg:grid-cols-3'>
              {FEATURES.map(feature => (
                <HomeFormFeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
          <div className='md:min-w-[390px]'>
            <div className='h-auto rounded-[20px] bg-white p-[24px]'>
              <ConsultationForm bordered />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

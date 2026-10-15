import { Mail, MapPin } from 'lucide-react'
import { type Metadata } from 'next'
import Link from 'next/link'

import { ConsultationForm } from '@/domains/consultation/components/ConsultationForm'
import { EMAIL } from '@/shared/constants'
import { Breadcrumbs } from '@/shared/ui/Breadcrumbs'
import { Typography } from '@/shared/ui/Typography'

export const metadata: Metadata = {
  title: 'Контакты',
}

export default function ContactsPage() {
  return (
    <div className='container'>
      <div className='mt-[24px]'>
        <Breadcrumbs
          items={[
            { href: '/', label: 'Главная' },
            { href: '/contacts', label: 'Контакты' },
          ]}
        />
      </div>
      <div className='mt-[32px] md:mt-[130px]'>
        <div className='flex flex-col gap-4'>
          {/* Временно скрыто: номер телефона в контактах. */}
          <Link
            className='border-secondary-gray-50 flex flex-col items-start gap-4 rounded-[20px] border-[1px] p-[24px]'
            href={`mailto:${EMAIL}`}>
            <Typography variant='h3'>{EMAIL}</Typography>
            <div className='flex items-center gap-1'>
              <Mail color='#DB4004' size={20} />
              <Typography className='text-primary-orange' variant='p1'>
                Написать
              </Typography>
            </div>
          </Link>
          <Link
            className='border-secondary-gray-50 flex flex-col items-start gap-4 rounded-[20px] border-[1px] p-[24px]'
            href='https://maps.google.com/?q=Нижний+Новгород,+ул.+Композиторская+1'>
            <Typography variant='h3'>
              603073, г. Нижний Новгород, ул. Композиторская, д. 1, офис 1
            </Typography>
            <div className='flex items-center gap-1'>
              <MapPin color='#DB4004' size={20} />
              <Typography className='text-primary-orange' variant='p1'>
                Построить маршрут
              </Typography>
            </div>
          </Link>
        </div>
        <div className='mt-[48px] flex flex-col justify-between gap-[48px] md:mt-[64px] md:flex-row md:gap-3'>
          <div className='flex-1 md:max-w-[360px]'>
            <ConsultationForm bordered />
          </div>
          <div className='flex flex-1 shrink flex-col gap-[24px] md:max-w-[400px]'>
            <Typography className='text-primary-black' tag='h3' variant='h3'>
              Офис и отделы
            </Typography>
            <div className='border-secondary-gray-50 flex flex-col items-start gap-1 rounded-[20px] border-[1px] p-[24px]'>
              <Typography className='text-primary-black' variant='h3'>
                Коммерческий отдел
              </Typography>
              <Typography className='text-primary-grey' variant='p1'>
                Запрос КП и наличие
              </Typography>
            </div>
            <div className='border-secondary-gray-50 flex flex-col items-start gap-1 rounded-[20px] border-[1px] p-[24px]'>
              <Typography className='text-primary-black' variant='h3'>
                Техническая поддержка
              </Typography>
              <Typography className='text-primary-grey' variant='p1'>
                Подбор и совместимость
              </Typography>
            </div>
            <div className='border-secondary-gray-50 flex flex-col items-start gap-1 rounded-[20px] border-[1px] p-[24px]'>
              <Typography className='text-primary-black' variant='h3'>
                Документация
              </Typography>
              <Typography className='text-primary-grey' variant='p1'>
                Паспорта и сертификаты
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

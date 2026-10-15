import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

import { EMAIL, isRokada } from '../constants'
import { IconLogo } from '../icons/IconLogo'
import { IconLogoRokada } from '../icons/IconLogoRokada'
import { Typography } from '../ui/Typography'
import { UnicornBackground } from './UnicornBackground'

const NAV_LINKS = [
  { href: '/', name: 'Главная' },
  { href: '/catalog', name: 'Каталог' },
  { href: '/designers', name: 'Поддержка' },
  // Временно скрыто: страница проектов/объектов.
  // { href: '/objects', name: 'Проекты' },
  { href: '/about', name: 'О нас' },
  { href: '/contacts', name: 'Контакты' },
]

export const Footer = () => {
  return (
    <footer className='bg-primary-black relative isolate mt-[64px] overflow-hidden rounded-t-[20px] pt-[32px] pb-[60px] md:mt-[130px] md:pt-[96px] md:pb-[96px]'>
      <UnicornBackground />

      <div className='relative z-10 container flex flex-col'>
        <div className='flex flex-col justify-between gap-[32px] md:flex-row md:gap-[30px]'>
          <Link href='/'>
            <span className='block md:hidden'>
              {isRokada ? (
                <IconLogoRokada height={25} width={92} />
              ) : (
                <IconLogo height={42} width={92} />
              )}
            </span>
            <span className='hidden md:block'>
              {isRokada ? (
                <IconLogoRokada height={50} width={183} />
              ) : (
                <IconLogo height={85} width={186} />
              )}
            </span>
          </Link>
          <div className='grid grid-flow-col auto-rows-min grid-rows-2 justify-start justify-items-start gap-x-[34px] gap-y-4 self-start md:mt-[30px]'>
            {NAV_LINKS.map(link => (
              <Link
                className='hover:text-primary-orange transition-colors duration-200'
                href={link.href}
                key={link.href}>
                <Typography
                  className='hover:text-primary-orange text-white transition-colors duration-200'
                  variant='p1'>
                  {link.name}
                </Typography>
              </Link>
            ))}
          </div>
          <div className='flex max-w-[288px] flex-col gap-4 md:mt-[30px]'>
            <div className='flex items-center gap-2'>
              <Phone className='shrink-0' color='#DB4004' />

              <Typography className='text-white' tag='p' variant='p1'>
                Пн–Пт: 9:00–18:00
              </Typography>
            </div>
            <Link
              className='hover:text-primary-orange flex items-center gap-2 transition-colors duration-200'
              href={`mailto:${EMAIL}`}>
              <Mail className='shrink-0' color='#DB4004' />

              <Typography
                className='hover:text-primary-orange text-white transition-colors duration-200'
                variant='p1'>
                {EMAIL}
              </Typography>
            </Link>
            <Link
              className='hover:text-primary-orange flex items-center gap-2 transition-colors duration-200'
              href='https://maps.google.com/?q=Нижний+Новгород,+ул.+Композиторская+1'
              target='_blank'>
              <MapPin className='shrink-0' color='#DB4004' />

              <Typography
                className='hover:text-primary-orange text-white transition-colors duration-200'
                variant='p1'>
                г. Нижний Новгород, ул. Композиторская 1, офис 1
              </Typography>
            </Link>
          </div>
        </div>
        <div className='justify-between md:gap-[30px]'>
          <div className='hidden h-[1px] w-full bg-[#FEFEFE] md:mt-[64px] md:mb-[16px] md:block'></div>

          <Typography className='mt-[32px] text-white md:mt-[0px]' variant='p1'>
            ©2026. Все права защищены.
          </Typography>
        </div>
      </div>
    </footer>
  )
}

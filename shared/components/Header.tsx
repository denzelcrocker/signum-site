'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { EMAIL, isRokada } from '../constants'
import { IconLogo } from '../icons/IconLogo'
import { IconLogoRokada } from '../icons/IconLogoRokada'
import { cn } from '../lib/cn'
import { MenuBurger } from './MenuBurger'

export const LINKS = [
  {
    href: '/catalog',
    name: 'Каталог',
  },
  {
    href: '/designers',
    name: 'Поддержка',
  },
  // Временно скрыто: страница проектов/объектов.
  // {
  //   href: '/objects',
  //   name: 'Проекты',
  // },
  {
    href: '/about',
    name: 'О нас',
  },
  {
    href: '/contacts',
    name: 'Контакты',
  },
]

export const Header = () => {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isTransparentHero = pathname === '/' && !isScrolled

  return (
    <>
      <div
        className={cn(
          'fixed z-20 w-full py-[20px] transition-colors duration-200',
          isScrolled ? 'bg-[#F7F7F766] backdrop-blur-[10px]' : 'bg-transparent',
        )}>
        <nav className='container flex items-center justify-between'>
          <Link href={'/'}>
            {isRokada ? (
              <IconLogoRokada />
            ) : (
              <IconLogo color={isTransparentHero ? '#FFFFFF' : undefined} />
            )}
          </Link>
          <div className='hidden gap-[8px] md:flex lg:gap-[16px]'>
            <div
              className={cn(
                'flex items-center justify-center gap-[32px] rounded-[4px] border-[0.5px] px-[8px] py-[8px] transition-colors duration-200 lg:px-[16px]',
                isTransparentHero ? 'border-white' : 'border-primary-black',
              )}>
              {LINKS.map(link => (
                <Link
                  className={cn(
                    'hover:text-primary-orange text-[16px] leading-[120%] transition-colors duration-200',
                    isTransparentHero ? 'text-white' : 'text-primary-black',
                    {
                      'text-primary-orange': pathname.includes(link.href),
                    },
                  )}
                  href={link.href}
                  key={link.href}>
                  {link.name}
                </Link>
              ))}
            </div>
            <div
              className={cn(
                'flex items-center justify-center gap-[32px] rounded-[4px] border-[0.5px] px-[8px] py-[8px] transition-colors duration-200 lg:px-[16px]',
                isTransparentHero ? 'border-white' : 'border-primary-black',
              )}>
              <Link
                className={cn(
                  'hover:text-primary-orange text-[16px] leading-[120%] transition-colors duration-200',
                  isTransparentHero ? 'text-white' : 'text-primary-black',
                )}
                href={`mailto:${EMAIL}`}>
                {EMAIL}
              </Link>
            </div>
          </div>
          <MenuBurger isTransparentHero={isTransparentHero} />
        </nav>
      </div>
      <div className='h-[96px]'></div>
    </>
  )
}

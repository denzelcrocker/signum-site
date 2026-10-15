'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { EMAIL } from '../constants'
import { IconBurger } from '../icons/IconBurger'
import { IconClose } from '../icons/IconClose'
import { cn } from '../lib/cn'
import { Typography } from '../ui/Typography'
import { LINKS } from './Header'

export const MenuBurger = ({
  isTransparentHero,
}: {
  isTransparentHero?: boolean
}) => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      {!open && (
        <button className='block md:hidden' onClick={() => setOpen(true)}>
          <IconBurger color={isTransparentHero ? '#FFFFFF' : undefined} />
        </button>
      )}
      {open && (
        <>
          <div
            className='fixed inset-0 z-40 bg-black/40 md:hidden'
            onClick={() => setOpen(false)}
          />
          <div className='absolute top-0 left-0 z-50 block w-screen bg-white p-4 md:hidden'>
            <div className='container'>
              <div className='flex items-start justify-between gap-3 py-[20px]'>
                <div>
                  <div className='border-primary-black flex flex-col gap-2 rounded-[4px] border-[0.5px] px-2 py-1'>
                    {LINKS.map(link => (
                      <Link
                        className={cn(
                          'text-primary-black hover:text-primary-orange text-[11px] leading-[120%] transition-colors duration-200',
                          {
                            'text-primary-orange': pathname.includes(link.href),
                          },
                        )}
                        href={link.href}
                        key={link.href}
                        onClick={() => setOpen(false)}>
                        {link.name}
                      </Link>
                    ))}
                  </div>
                  <div className='border-primary-black mt-4 rounded-[4px] border-[0.5px] px-2 py-1'>
                    <Link href={`mailto:${EMAIL}`} onClick={() => setOpen(false)}>
                      <Typography
                        className='text-primary-black text-[11px]'
                        tag='p'
                        variant='h3'>
                       {EMAIL}
                      </Typography>
                    </Link>
                  </div>
                </div>
                <button onClick={() => setOpen(false)}>
                  <IconClose />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

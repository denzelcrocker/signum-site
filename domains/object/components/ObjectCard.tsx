'use client'

import Image from 'next/image'
import { useState } from 'react'

import { InstallationListItem } from '@/shared/api/types'
import { Typography } from '@/shared/ui/Typography'

import { ObjectDescriptionModal } from './ObjectDescriptionModal'

export const ObjectCard = ({
  installation,
}: {
  installation: InstallationListItem
}) => {
  const [open, setOpen] = useState(false)

  const mainImage = installation.images.find(i => i.type === 1)
  const hoverImage = installation.images.find(i => i.type === 2)

  return (
    <>
      <button
        className='bg-secondary-card group rounded-[6px] p-2 text-left'
        onClick={() => setOpen(true)}>
        <div className='relative aspect-[424/250] overflow-hidden rounded-[8px]'>
          {mainImage && (
            <Image
              alt={installation.name}
              className='object-cover transition-opacity duration-300 group-hover:opacity-0'
              fill
              src={`${process.env.NEXT_PUBLIC_API_URL}${mainImage.url}`}
            />
          )}
          {hoverImage && (
            <Image
              alt={installation.name}
              className='object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100'
              fill
              src={`${process.env.NEXT_PUBLIC_API_URL}${hoverImage.url}`}
            />
          )}
        </div>
        <Typography className='text-primary-blue mt-2' tag='h3' variant='p1'>
          {installation.name}
        </Typography>
        <div>
          <Typography className='text-primary-blue mt-4' tag='p' variant='p2'>
            {installation.address}
          </Typography>
          <Typography className='text-primary-blue mt-2' tag='p' variant='p2'>
            {installation.area.toLocaleString('ru-RU')} м<sup>2</sup>
          </Typography>
        </div>
      </button>
      {open && (
        <ObjectDescriptionModal
          description={installation.description}
          onClose={() => setOpen(false)}
          title={installation.name}
        />
      )}
    </>
  )
}

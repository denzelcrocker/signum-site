'use client'

import Image from 'next/image'
import { useState } from 'react'

import type { DesignerSectionFile } from '@/shared/api/types'

import { Typography } from '@/shared/ui/Typography'

import { DesignerFilesModal } from './DesignerFilesModal'

interface DesignerCardProps {
  files: DesignerSectionFile[]
  imageUrl: string
  title: string
}

export function DesignerCard({ files, imageUrl, title }: DesignerCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        className='bg-secondary-card flex flex-col items-center justify-start rounded-[10px] px-[16px] py-[26px] text-center transition-opacity hover:opacity-80 md:px-[24px] md:py-[30px]'
        onClick={() => setOpen(true)}>
        <div className='relative h-[52px] w-[63px] md:h-[79px] md:w-[96px] lg:h-[110px] lg:w-[133px]'>
          <Image alt={title} className='object-contain' fill src={imageUrl} />
        </div>
        <Typography
          className='mt-[24px] text-[20px] md:text-[26px]'
          variant='h3'>
          {title}
        </Typography>
      </button>
      {open && (
        <DesignerFilesModal
          files={files}
          onClose={() => setOpen(false)}
          title={title}
        />
      )}
    </>
  )
}

'use client'

import type { DesignerSectionFile } from '@/shared/api/types'

import { Modal } from '@/shared/components/Modal'
import { IconClose } from '@/shared/icons/IconClose'
import { IconFile } from '@/shared/icons/IconFile'
import { Typography } from '@/shared/ui/Typography'

interface DesignerFilesModalProps {
  files: DesignerSectionFile[]
  onClose: () => void
  title: string
}

export function DesignerFilesModal({ files, onClose, title }: DesignerFilesModalProps) {
  return (
    <Modal
      className='bg-background w-full max-w-[560px] rounded-[16px] p-[32px]'
      onClose={onClose}
      open={true}>
      <div className='mb-[24px] flex items-center justify-between gap-4'>
        <Typography className='text-primary-blue' tag='h3' variant='h3'>
          {title}
        </Typography>
        <button className='shrink-0' onClick={onClose}>
          <IconClose />
        </button>
      </div>
      {files.length === 0 ? (
        <Typography className='text-primary-grey' variant='p1'>
          Файлы отсутствуют
        </Typography>
      ) : (
        <div className='flex flex-col gap-[20px]'>
          {files.map(file => (
            <a
              className='flex items-center gap-[16px]'
              href={`${process.env.NEXT_PUBLIC_API_URL}${file.fileUrl}`}
              key={file.id}
              rel='noopener noreferrer'
              target='_blank'>
              <div className='mt-[2px] shrink-0'>
                <IconFile />
              </div>
              <Typography className='text-primary-orange hover:underline' variant='p1'>
                {file.title}
              </Typography>
            </a>
          ))}
        </div>
      )}
    </Modal>
  )
}

'use client'

import { Modal } from '@/shared/components/Modal'
import { IconClose } from '@/shared/icons/IconClose'
import { Typography } from '@/shared/ui/Typography'

interface ObjectDescriptionModalProps {
  description: string
  onClose: () => void
  title: string
}

export function ObjectDescriptionModal({
  description,
  onClose,
  title,
}: ObjectDescriptionModalProps) {
  return (
    <Modal
      className='bg-background flex max-h-[85vh] w-full max-w-[560px] flex-col rounded-[16px] p-[32px]'
      onClose={onClose}
      open={true}>
      <div className='mb-[24px] flex shrink-0 items-center justify-between gap-4'>
        <Typography className='text-primary-blue' tag='h3' variant='h3'>
          {title}
        </Typography>
        <button className='shrink-0' onClick={onClose}>
          <IconClose />
        </button>
      </div>
      <div className='scrollbar-hide overflow-y-auto'>
        <Typography className='text-primary-blue whitespace-pre-line' variant='p1'>
          {description}
        </Typography>
      </div>
    </Modal>
  )
}

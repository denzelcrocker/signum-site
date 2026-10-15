'use client'

import { Modal } from '@/shared/components/Modal'
import { IconConsultationArrow } from '@/shared/icons/IconConsultationArrow'

import { ConsultationForm } from './ConsultationForm'

interface ConsultationModalProps {
  onClose: () => void
  open: boolean
}

export function ConsultationModal({ onClose, open }: ConsultationModalProps) {
  return (
    <Modal
      className='bg-background flex w-full max-w-[360px] flex-row justify-center gap-32 rounded-[6px] p-4 lg:max-w-[1200px] lg:px-25 lg:py-16'
      onClose={onClose}
      open={open}>
      <button
        aria-label='Закрыть'
        className='text-primary-grey hover:text-primary-black absolute top-2 right-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-colors lg:top-6 lg:right-6'
        onClick={onClose}>
        <svg fill='none' height='16' viewBox='0 0 16 16' width='16'>
          <path
            d='M1 1L15 15M15 1L1 15'
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth='2'
          />
        </svg>
      </button>
      <div className='hidden items-end lg:flex'>
        <IconConsultationArrow />
      </div>
      <div className='flex-1'>
        <ConsultationForm bordered />
      </div>
    </Modal>
  )
}

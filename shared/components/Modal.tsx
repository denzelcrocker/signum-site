'use client'

import { useEffect, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

import { cn } from '../lib/cn'

interface ModalProps {
  open: boolean
  onClose: () => void
  children: ReactNode
  className?: string
}

export function Modal({ open, onClose, children, className }: ModalProps) {
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKey)
    }
  }, [open, onClose])

  if (!open || typeof document === 'undefined') return null

  return createPortal(
    <div
      aria-modal='true'
      className='fixed inset-0 z-50 flex items-center justify-center p-4'
      role='dialog'>
      <div className='absolute inset-0 bg-black/40' onClick={onClose} />
      <div className={cn('relative', className)}>{children}</div>
    </div>,
    document.body,
  )
}

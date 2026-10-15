'use client'

import { useState } from 'react'

import { Button } from '@/shared/ui/Button'

import { ConsultationModal } from './ConsultationModal'

export function ConsultationTrigger() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Отправить заявку</Button>
      <ConsultationModal onClose={() => setOpen(false)} open={open} />
    </>
  )
}

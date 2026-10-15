'use client'

import { useState } from 'react'

import { ConsultationModal } from '@/domains/consultation/components/ConsultationModal'
import { Button } from '@/shared/ui/Button'

export function AskQuestionButton({ className }: { className?: string }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button className={className} onClick={() => setOpen(true)}>
        Задать вопрос
      </Button>
      <ConsultationModal onClose={() => setOpen(false)} open={open} />
    </>
  )
}

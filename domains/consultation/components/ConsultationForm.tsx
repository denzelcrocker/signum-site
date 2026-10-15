'use client'

import { useState } from 'react'

import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import { Textarea } from '@/shared/ui/Textarea'
import { Typography } from '@/shared/ui/Typography'

const API_URL = process.env.NEXT_PUBLIC_API_URL

const DEPARTMENTS = [
  { label: 'Отдел продаж', value: '1' },
  { label: 'Технический отдел', value: '2' },
]

interface ConsultationFormProps {
  bordered?: boolean
  onSuccess?: () => void
}

interface FormErrors {
  department?: string
  email?: string
  name?: string
  phone?: string
  question?: string
}

interface FormValues {
  department: string
  email: string
  name: string
  phone: string
  question: string
}

export function ConsultationForm({
  bordered,
  onSuccess,
}: ConsultationFormProps) {
  const variant = bordered ? 'bordered' : 'default'
  const labelClassName = bordered ? undefined : 'text-white'

  const [values, setValues] = useState<FormValues>({
    department: DEPARTMENTS[0].value,
    email: '',
    name: '',
    phone: '',
    question: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const initialValues: FormValues = {
    department: DEPARTMENTS[0].value,
    email: '',
    name: '',
    phone: '',
    question: '',
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validate(values)
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    setSubmitting(true)
    try {
      const res = await fetch(`${API_URL}/api/contact-request`, {
        body: JSON.stringify({
          agreement: true,
          department: Number(values.department),
          email: values.email,
          name: values.name,
          phone: values.phone,
          question: values.question,
        }),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
      })
      if (res.ok) {
        setValues(initialValues)
        setErrors({})
        setSuccess(true)
        onSuccess?.()
      }
    } finally {
      setSubmitting(false)
    }
  }

  if (success) {
    return (
      <div className='flex flex-col gap-4'>
        <Typography className={'text-primary-black'} variant='p1'>
          Заявка на консультацию
        </Typography>
        <Typography className={labelClassName} variant='p1'>
          Заявка отправлена. Мы свяжемся с вами в ближайшее время.
        </Typography>
      </div>
    )
  }

  return (
    <form className='flex flex-col gap-[24px]' onSubmit={handleSubmit}>
      <div>
        <Typography className={'text-primary-black'} variant='p1'>
          Заявка на консультацию
        </Typography>
        <Typography className={'text-primary-grey mt-1'} variant='p2'>
          Ответим и уточним детали проекта
        </Typography>
      </div>
      <div className='flex flex-col gap-3'>
        <Input
          error={errors.name}
          onChange={e => setValues({ ...values, name: e.target.value })}
          placeholder='Ваше имя'
          value={values.name}
          variant={variant}
        />
        <Input
          error={errors.phone}
          onChange={e => setValues({ ...values, phone: e.target.value })}
          placeholder='Телефон'
          value={values.phone}
          variant={variant}
        />
        <Input
          error={errors.email}
          onChange={e => setValues({ ...values, email: e.target.value })}
          placeholder='E-mail'
          value={values.email}
          variant={variant}
        />
        <Textarea
          error={errors.question}
          onChange={e => setValues({ ...values, question: e.target.value })}
          placeholder='Опишите задачу'
          value={values.question}
          variant={variant}
        />
      </div>
      <div className='flex items-center gap-2'>
        <Button disabled={submitting} type='submit'>
          {submitting ? 'Отправка...' : 'Отправить заявку'}
        </Button>
        <div className='text-primary-grey max-w-[150px] text-[10px] leading-[1.1]'>
          Нажимая на кнопку, вы соглашаетесь с обработкой персональных данных
        </div>
      </div>
    </form>
  )
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}
  if (!values.name.trim()) errors.name = 'Введите ваше имя'
  if (!values.phone.trim()) errors.phone = 'Введите телефон'
  if (!values.email.trim()) {
    errors.email = 'Введите e-mail'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Введите корректный e-mail'
  }
  if (!values.question.trim()) errors.question = 'Задайте вопрос'
  if (!values.department) errors.department = 'Выберите отдел'
  return errors
}

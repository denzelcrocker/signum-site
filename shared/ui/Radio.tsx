'use client'

import { useState } from 'react'

import { cn } from '@/shared/lib/cn'

import { Typography } from './Typography'

interface RadioProps {
  checked?: boolean
  className?: string
  classNameTypography?: string
  id?: string
  label?: string
  name?: string
  onChange?: (checked: boolean) => void
  value?: string
  variant?: 'bordered' | 'default'
}

export const Radio = ({
  checked,
  className,
  classNameTypography,
  id,
  label,
  name,
  onChange,
  value,
  variant = 'default',
}: RadioProps) => {
  const [internalChecked, setInternalChecked] = useState(false)

  const isChecked = checked !== undefined ? checked : internalChecked

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (checked === undefined) setInternalChecked(e.target.checked)
    onChange?.(e.target.checked)
  }

  return (
    <label
      className={cn('flex cursor-pointer items-center gap-[8px]', className)}
      htmlFor={id}>
      <div className='relative h-[23px] w-[23px] shrink-0'>
        <input
          checked={isChecked}
          className='absolute inset-0 h-full w-full cursor-pointer opacity-0'
          id={id}
          name={name}
          onChange={handleChange}
          type='radio'
          value={value}
        />
        <div
          className={cn(
            'bg-background flex h-[23px] w-[23px] items-center justify-center rounded-full border-[0.5px] transition-colors duration-200',
            isChecked
              ? 'border-primary-orange'
              : variant === 'bordered'
                ? 'border-[#35415B]'
                : 'border-transparent',
          )}>
          {isChecked && (
            <div className='bg-primary-orange h-[11px] w-[11px] rounded-full' />
          )}
        </div>
      </div>
      {label && (
        <Typography className={classNameTypography} variant='p2'>
          {label}
        </Typography>
      )}
    </label>
  )
}

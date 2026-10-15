'use client'

import { useState } from 'react'

import { cn } from '@/shared/lib/cn'

import { Typography } from './Typography'

interface CheckboxProps {
  checked?: boolean
  className?: string
  classNameTypography?: string
  id?: string
  label?: string
  onChange?: (checked: boolean) => void
  variant?: 'bordered' | 'default'
}

export const Checkbox = ({
  checked,
  className,
  classNameTypography,
  id,
  label,
  onChange,
  variant = 'default',
}: CheckboxProps) => {
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
          onChange={handleChange}
          type='checkbox'
        />
        <div
          className={cn(
            'bg-background flex h-[23px] w-[23px] items-center justify-center rounded-[4px] border-[0.5px] transition-colors duration-200',
            isChecked
              ? 'border-primary-orange'
              : variant === 'bordered'
                ? 'border-[#35415B]'
                : 'border-transparent',
          )}>
          {isChecked && (
            <svg fill='none' height='10' viewBox='0 0 13 10' width='13'>
              <path
                d='M1 5L5 9L12 1'
                stroke='#DB4004'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
              />
            </svg>
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

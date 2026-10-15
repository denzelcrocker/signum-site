import { cn } from '@/shared/lib/cn'

import { Typography } from './Typography'

interface SelectOption {
  label: string
  value: string
}

interface SelectProps {
  className?: string
  classNameLabel?: string
  error?: string
  id?: string
  label?: string
  name?: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: SelectOption[]
  value?: string
  variant?: 'bordered' | 'default'
}

export const Select = ({
  className,
  classNameLabel,
  error,
  id,
  label,
  name,
  onChange,
  options,
  value,
  variant = 'default',
}: SelectProps) => {
  return (
    <div className='flex flex-col gap-2'>
      {label && (
        <Typography className={classNameLabel} tag='p' variant='p2'>
          {label}
        </Typography>
      )}
      <div className='relative w-full'>
        <select
          className={cn(
            'bg-background focus:border-primary-orange w-full appearance-none rounded-[4px] border-[0.5px] p-[10px] transition-colors duration-200 outline-none',
            'font-wix-madefor text-primary-black text-[16px] leading-[120%] font-normal',
            error ? 'border-red-500' : variant === 'bordered' ? 'border-[#35415B]' : 'border-transparent',
            className,
          )}
          id={id}
          name={name}
          onChange={onChange}
          value={value}>
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className='pointer-events-none absolute top-1/2 right-[10px] -translate-y-1/2'>
          <svg
            fill='none'
            height='12'
            viewBox='0 0 13 12'
            width='13'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M6.5 11.2583L0 0H13L6.5 11.2583Z' fill='#727F9F' />
          </svg>
        </div>
      </div>
      {error && (
        <span className='text-[12px] leading-[120%] text-red-500'>{error}</span>
      )}
    </div>
  )
}

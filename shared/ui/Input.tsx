import { cn } from '@/shared/lib/cn'

interface InputProps {
  className?: string
  error?: string
  id?: string
  name?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  rightIcon?: React.ReactNode
  type?: string
  value?: string
  variant?: 'bordered' | 'default'
}

export const Input = ({
  className,
  error,
  id,
  name,
  onChange,
  placeholder,
  rightIcon,
  type = 'text',
  value,
  variant = 'default',
}: InputProps) => {
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <div className='relative'>
        <input
          className={cn(
            'bg-background focus:border-primary-orange w-full rounded-[4px] border-[0.5px] p-[10px] transition-colors duration-200 outline-none',
            'font-wix-madefor text-primary-black text-[16px] leading-[120%] font-normal',
            'placeholder:text-[16px] placeholder:leading-[120%] placeholder:font-normal placeholder:text-[#727F9F]',
            error
              ? 'border-red-500'
              : variant === 'bordered'
                ? 'border-primary-grey'
                : 'border-transparent',
            rightIcon && 'pr-10',
          )}
          id={id}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          value={value}
        />
        {rightIcon && (
          <div className='pointer-events-none absolute top-1/2 right-4 flex -translate-y-1/2 items-center'>
            {rightIcon}
          </div>
        )}
      </div>
      {error && (
        <span className='text-[12px] leading-[120%] text-red-500'>{error}</span>
      )}
    </div>
  )
}

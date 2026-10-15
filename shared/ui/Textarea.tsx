import { cn } from '@/shared/lib/cn'

interface TextareaProps {
  className?: string
  error?: string
  id?: string
  name?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  value?: string
  variant?: 'bordered' | 'default'
}

export const Textarea = ({
  className,
  error,
  id,
  name,
  onChange,
  placeholder,
  value,
  variant = 'default',
}: TextareaProps) => {
  return (
    <div className='flex flex-col gap-1'>
      <textarea
        className={cn(
          'bg-background focus:border-primary-orange h-[67px] w-full resize-none gap-[10px] rounded-[4px] border-[0.5px] p-[10px] transition-colors duration-200 outline-none',
          'font-wix-madefor text-primary-black text-[16px] leading-[120%] font-normal',
          'placeholder:text-[16px] placeholder:leading-[120%] placeholder:font-normal placeholder:text-[#727F9F]',
          error
            ? 'border-red-500'
            : variant === 'bordered'
              ? 'border-primary-grey'
              : 'border-transparent',
          className,
        )}
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
      {error && (
        <span className='text-[12px] leading-[120%] text-red-500'>{error}</span>
      )}
    </div>
  )
}

import { type ComponentProps } from 'react'

import { cn } from '@/shared/lib/cn'

const variantStyles = {
  blue: 'bg-primary-blue',
  orange: 'bg-primary-orange',
}

interface ButtonProps extends ComponentProps<'button'> {
  children?: React.ReactNode
  className?: string
  onClick?: () => void
  variant?: keyof typeof variantStyles
}

export const Button = ({
  children,
  className,
  onClick,
  variant = 'orange',
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      className={cn(
        'flex cursor-pointer items-center justify-center rounded-[4px] border-none px-[10px] py-[10px] text-[16px] leading-[120%] text-white transition-[filter] duration-200 hover:brightness-90 md:px-[16px]',
        variantStyles[variant],
        className,
      )}
      onClick={onClick}>
      {children}
    </button>
  )
}

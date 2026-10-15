import { cn } from '@/shared/lib/cn'

const variantStyles = {
  h1: 'font-normal text-[32px] md:text-[64px] leading-[100%]',
  h2: 'font-normal text-[24px] md:text-[32px] leading-[100%]',
  h3: 'font-normal text-[20px] md:text-[24px] leading-[100%]',
  p1: 'font-normal text-[16px] md:text-[20px] leading-[104%]',
  'p1-highlight': 'font-medium text-[16px] md:text-[18px] leading-[104%]',
  p2: 'font-normal text-[16px] leading-[120%]',
}

interface TypographyProps {
  children?: React.ReactNode
  className?: string
  tag?:
    | 'button'
    | 'div'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'label'
    | 'p'
    | 'span'
  variant?: keyof typeof variantStyles
}

export const Typography = ({
  children,
  className,
  tag = 'p',
  variant,
}: TypographyProps) => {
  const Element = tag

  return (
    <Element
      className={cn(
        variant && variantStyles[variant],
        'text-primary-black',
        className,
      )}>
      {children}
    </Element>
  )
}

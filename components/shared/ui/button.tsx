import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from 'react'
import cn from 'clsx'

type Variants = 'red' | 'green' | 'blue'
type Sizes = 'normal' | 'big' | 'small'

const SIZES_MAP: { [key in Sizes]: string } = {
  normal: 'text-base px-4 py-2',
  big: 'text-xl px-8 py-4',
  small: 'text-xs px-2 py-1',
}

const VARIANTS_MAP: { [key in Variants]: string } = {
  blue: 'bg-blue-500 hover:bg-blue-600',
  red: 'bg-red-500 hover:bg-red-600',
  green: 'bg-green-500 hover:bg-green-600',
}

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

type ButtonOptions = {
  variant?: Variants
  size?: Sizes
  pulse?: boolean
}

type Props = ButtonOptions & ButtonProps

const defaultStyle =
  'text-white rounded-sm focus:outline-none focus-visible:outline-none outline-none active:transform active:scale-110 duration-200 focus-visible:ring-red-400 focus-visible:ring-2'

export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    variant = 'blue',
    size = 'normal',
    pulse = false,
    className,
    ...rest
  } = props

  return (
    <button
      ref={ref}
      className={cn(
        defaultStyle,
        VARIANTS_MAP[variant],
        SIZES_MAP[size],
        className,
        { 'animate-pulse': pulse },
      )}
      {...rest}
    />
  )
})

Button.displayName = 'Button'

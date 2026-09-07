import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 tactile-btn',
  {
    variants: {
      variant: {
        default: 'bg-foreground text-background font-semibold hover:bg-muted shadow-lg shadow-white/5',
        destructive: 'bg-red-500/90 text-white hover:bg-red-600',
        outline: 'border border-border/80 bg-transparent text-foreground hover:bg-white/5 hover:border-white/20',
        secondary: 'bg-[#18181B] text-foreground hover:bg-[#27272A] border border-white/5',
        ghost: 'hover:bg-white/5 text-muted-dark hover:text-foreground',
        link: 'text-foreground underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11 px-6 py-2.5 rounded-full',
        sm: 'h-9 px-4 rounded-full text-xs',
        lg: 'h-14 px-8 rounded-full text-base',
        icon: 'h-10 w-10 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }

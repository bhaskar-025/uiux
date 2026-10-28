import * as React from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-md font-medium text-base whitespace-nowrap transition-all duration-200 outline-none select-none cursor-pointer focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-b from-white via-zinc-100 to-zinc-200 text-black hover:from-zinc-100 hover:to-zinc-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] border border-white/90",
        outline:
          "border border-zinc-800 bg-gradient-to-b from-zinc-950 to-black text-white hover:border-zinc-500 hover:bg-zinc-900/80 hover:shadow-[0_0_15px_rgba(255,255,255,0.08)]",
        secondary:
          "border border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950 text-zinc-100 hover:bg-zinc-800 hover:border-zinc-700",
        ghost:
          "text-zinc-400 hover:text-white hover:bg-zinc-900/60",
        destructive:
          "border border-red-500/40 bg-red-950/40 text-red-300 hover:bg-red-900/60 hover:text-white",
        link: "text-white underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 gap-2 px-5 py-2 text-base",
        xs: "h-7 gap-1 rounded px-2.5 text-xs",
        sm: "h-9 gap-1.5 rounded px-3.5 text-sm",
        lg: "h-12 gap-2.5 rounded-md px-6 text-base font-medium",
        icon: "size-10",
        "icon-xs": "size-7 rounded",
        "icon-sm": "size-8 rounded",
        "icon-lg": "size-11 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, children, ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string }>
      return React.cloneElement(child, {
        className: cn(buttonVariants({ variant, size, className }), child.props.className),
        ...props,
      })
    }

    return (
      <ButtonPrimitive
        ref={ref}
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </ButtonPrimitive>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

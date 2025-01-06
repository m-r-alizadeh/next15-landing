import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"


const buttonVariants = cva(
    "border  rounded-full  font-medium transition ease-in-out duration-100 items-center justify-center",
    {
        variants: {
            variant: {
                default:
                    "bg-red-600 border-red-600 text-neutral-50  hover:bg-red-500 hover:border-red-500",
                secondary:
                    "border-white/15 text-white bg-transparent hover:bg-white/5 hover:border-white/25",

            },
            size: {
                default: "h-12 px-6",
                sm: "h-8 px-4",
                lg: "h-16 px-8",
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
    VariantProps<typeof buttonVariants> { }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {

        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)

Button.displayName = "Button"
export { Button, buttonVariants }
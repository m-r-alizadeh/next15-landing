import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

const Key = ({ className, children, ...props }: HTMLAttributes<HTMLElement>) => {
    return (
        <div
            className={cn('size-14 bg-neutral-300 inline-flex items-center justify-center rounded-2xl text-xl text-neutral-950 font-medium', className)} {...props}>
            {children}
        </div>
    )
}

export default Key
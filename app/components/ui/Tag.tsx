import { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"


const Tag = ({ className, children, ...props }: HTMLAttributes<HTMLElement>) => {
    return (
        <div
            className={cn('inline-flex border border-red-500 gap-2 text-red-500 px-3 py-1 rounded-full items-center', className)}
            {...props}>
            <span>&#10038;</span>
            <span className="text-sm">{children}</span>
        </div>
    )
}

export default Tag
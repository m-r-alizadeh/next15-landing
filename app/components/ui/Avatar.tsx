import { cn } from '@/lib/utils'

import { HTMLAttributes } from 'react'

const Avatar = ({ className, children, ...props }: HTMLAttributes<HTMLElement>) => {
    return (
        <div className={cn('rounded-full overflow-hidden size-20 border-4 border-red-400 p-1 bg-neutral-900', className)} {...props}>
            {children}
        </div>
    )
}

export default Avatar
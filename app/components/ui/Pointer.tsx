import { cn } from "@/lib/utils"

interface Props {
    name: string;
    color: string;
}
const Pointer = ({ name, color }: Props) => {
    return (
        <div className="relative">

            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-mouse-pointer text-white size-5">
                <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>
            </svg>
            <div className="absolute top-full left-full">
                <div
                    className={cn('inline-flex rounded-full font-bold text-sm px-2 rounded-tl-none',color)}
                // className="inline-flex rounded-full font-bold text-sm bg-blue-500 px-2 rounded-tl-none"
                >{name}</div>
            </div>
        </div>
    )
}

export default Pointer
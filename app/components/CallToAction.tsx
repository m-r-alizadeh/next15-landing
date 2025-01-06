'use client'
import { AnimationPlaybackControls, motion, useAnimate } from "motion/react"
import { useEffect, useRef } from "react";
import {useTranslations} from 'next-intl';

const CallToAction = () => {
    const animation = useRef<AnimationPlaybackControls | null>(null)
    const [scope, animate] = useAnimate();
    const t = useTranslations('CallToAction');

    useEffect(() => {
        animation.current = animate(scope.current, { x: '-50%' }, { repeat: Infinity, duration: 60, ease: 'linear' })

    }, [animate, scope])

    return (
        <div className="py-24 px-4 ">
            <div className="overflow-x-clip p-4 flex" dir="ltr">
                <motion.a
                    href="tel:+989123415993"
                    ref={scope}
                    className="flex flex-none gap-16 pr-16 text-7xl m:text-8xl font-medium group"
                    onMouseEnter={() => animation.current?.pause()}
                    onMouseLeave={() => animation.current?.play()}>
                    {Array.from({ length: 10 }).map((_, i) => (
                        <span className="flex items-center gap-16" key={i}>
                            <span className="text-red-400 text-7xl">&#10038;</span>
                            <span className="group-hover:text-red-400 transition duration-150">{t('tryForFree')}</span>
                        </span>
                    ))}
                </motion.a>
            </div>
        </div>
    )
}

export default CallToAction
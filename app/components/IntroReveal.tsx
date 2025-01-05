'use client'
import { useEffect, useRef, useState } from "react";
import Tag from "./ui/Tag";
import { useScroll, useTransform } from 'motion/react'
import { cn } from "@/lib/utils";

const text = ' I’ve written a few thousand words on why traditional “semantic class names” are the reason CSS is hard to maintain, but the truth is you’re never going to believe me until you actually try it. If you can suppress the urge to retch long enough to give it a chance.';
const words = text.split(' ');

const IntroReveal = () => {
    const scrollTarget = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ['start end', 'end end']
    });
    const [currentWord, setCurrentWord] = useState(0);
    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

    useEffect(() => {
        wordIndex.on('change', (latest) => setCurrentWord(latest))
    }, [wordIndex])

    //useMotionValueEvent(scrollYProgress, 'change', (latest) => console.log(latest, currentWord, wordIndex.get()))

    return (
        <div className="py-24 px-4">
            <div className="container max-w-7xl mx-auto">
                <div className="sticky md:20 md:top-28 lg:top-36">
                    <div className="text-center flex flex-col gap-10">
                        <div className="flex justify-center">
                            <Tag>Introducing Our App</Tag>
                        </div>
                        <div className="text-4xl md:text-6xl lg:text-7xl font-medium">
                            <span>You deserve better Apps.</span>
                            <span className="text-white/15">
                                {
                                    words.map((word, index) => (
                                        <span key={index} className={cn('transition duration-500 text-white/15',index < currentWord && 'text-white')}>
                                            {`${word} `}
                                        </span>
                                    ))
                                }</span>
                            <span className="text-red-400 block">Thats why we are here</span>
                        </div>
                    </div>
                </div>
                <div className=" h-[150vh]" ref={scrollTarget}>

                </div>
            </div>
        </div>
    )
}

export default IntroReveal
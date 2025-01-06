'use client'
import { useEffect, useRef, useState } from "react";
import Tag from "./ui/Tag";
import { useScroll, useTransform } from 'motion/react'
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";



const IntroReveal = () => {
    const t = useTranslations('IntroReveal');
    const scrollTarget = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ['start end', 'end end']
    });
    const text = t("text");
    const words = text.split(' ');
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
                            <Tag>{t('tag')}</Tag>
                        </div>
                        <div className="text-4xl md:text-6xl lg:text-7xl font-medium rtl:font-bold ">
                            <span>{t("lead")}</span>
                            <span className="text-white/15 ">
                                {
                                    words.map((word, index) => (
                                        <span key={index} className={cn('transition duration-500 text-white/15', index < currentWord && 'text-white')}>
                                            {`${word} `}
                                        </span>
                                    ))
                                }</span>
                            <span className="text-red-400 block">{t("tail")}</span>
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
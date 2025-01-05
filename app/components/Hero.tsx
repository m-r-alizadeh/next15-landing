"use client";
import { ChevronRight } from "lucide-react"
import { Button } from "./ui/Button"
import watermelon from '@/public/watermelon.png'
import pomegranate from '@/public/pomegranate.png'
import Image from "next/image"
import Pointer from "./ui/Pointer"
import { motion, useAnimate } from "motion/react";
import { useEffect } from "react"
import cursorImage from '@/public/cursor-you.svg'


const Hero = () => {
    const [lefItemScope, lefItemAnimate] = useAnimate()
    const [lefPointerScope, lefPointerAnimate] = useAnimate()
    const [rightItemScope, rightItemAnimate] = useAnimate()
    const [rightPointerScope, rightPointerAnimate] = useAnimate()

    useEffect(() => {
        lefItemAnimate([
            [lefItemScope.current, { opacity: [0, 1] }, { duration: 0.5 }],
            [lefItemScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ])
        lefPointerAnimate([
            [lefPointerScope.current, { opacity: [0, 1] }, { duration: 0.5 }],
            [lefPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [lefPointerScope.current, { y: [0, 16, 0], x: 0 }, { duration: 0.5, ease: 'easeInOut' }],
        ])
        rightItemAnimate([
            [rightItemScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
            [rightItemScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ])
        rightPointerAnimate([
            [rightPointerScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
            [rightPointerScope.current, { y: 0, x: 150 }, { duration: 0.5 }],
            [rightPointerScope.current, { y: [0, 20, 0], x: 0 }, { duration: 0.5, ease: 'easeInOut' }],
        ])

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="py-24 overflow-x-clip"
            style={{ cursor: `url(${cursorImage.src}), auto` }}>
            <div className="container mx-auto max-w-5xl relative" >
                <motion.div
                    className="absolute -left-34 top-36 hidden lg:block"
                    ref={lefItemScope}
                    drag
                    initial={{ opacity: 0, y: 100, x: -100 }}
                >
                    <Image src={watermelon} alt="w" width={250} draggable="false" />
                </motion.div>
                <motion.div
                    className="absolute left-56 top-96 hidden lg:block"
                    ref={lefPointerScope}
                    initial={{ opacity: 0, y: 90, x: -200 }}
                >
                    <Pointer color="bg-blue-500" name="Yalda" />
                </motion.div>

                <motion.div
                    className="absolute -right-24 -top-16 hidden lg:block"
                    ref={rightItemScope}
                    drag
                    initial={{ opacity: 0, y: 100, x: 100 }}
                >
                    <Image src={pomegranate} alt="w" width={250} draggable="false" />
                </motion.div>

                <motion.div
                    className="absolute right-48 -top-15 hidden lg:block"
                    ref={rightPointerScope}
                    initial={{ opacity: 0, y: 100, x: 250 }}
                >
                    <Pointer color="bg-red-500" name="Night" />
                </motion.div>

                <div className="flex justify-center flex-col  gap-6 px-7 pb-8 text-center items-center md:px-10">
                    <div
                        className="inline-flex py-1 px-3 rounded-full items-center cursor-default
                        bg-gradient-to-r from-red-600 to-purple-600 text-neutral-50 font-semibold">
                        ✨
                        <div className="shrink-0 bg-border w-px mx-2 h-4"></div>
                        Best UI Practice
                        <ChevronRight className="ml-1 h-4 w-4 text-muted-foreground" />
                    </div>

                    <h1 className="text-4xl lg:text-6xl text-center "> UI library for<br />Design Engineers</h1>
                    <p className="max-w-2xl text-balance  tracking-tight font-medium text-white text-center text-lg ">
                        50+ free and open-source animated components built with React, Typescript, Tailwind CSS, and Framer Motion.
                        Perfect companion for shadcn/ui.</p>
                    <form className="flex border border-white/15 rounded-full p-2 justify-between max-w-fit">
                        <input type="email" placeholder="Enter your email"
                            className="bg-transparent outline-none px-4 flex-grow" />
                        <Button variant='default' size='sm' className="text-nowrap">Sign Up</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Hero
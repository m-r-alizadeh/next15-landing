'use client'
import FeatureCard from "./ui/FeatureCard"
import Tag from "./ui/Tag"
import avtar1 from '@/public/avatar/1.jpg'
import avtar2 from '@/public/avatar/2.jpg'
import avtar3 from '@/public/avatar/3.jpg'
import avtar4 from '@/public/avatar/4.jpg'

import Image from "next/image"
import Avatar from "./ui/Avatar"
import Key from "./ui/Key"
import { useTranslations } from "next-intl"

const features = [
    "AssetLibrary",
    "CodePreview",
    "FlowMode",
    "SmartSync",
    "AutoLayout",
    "FastSearch",
    "SmartGuides",
];


const Features = () => {
    const t = useTranslations('Features');


    return (
        <>
            <span id="features" />

            <div className="py-24 px-4">

                <div className="container max-w-7xl mx-auto">
                    <div className="text-center flex flex-col gap-8">
                        <div className="flex justify-center">
                            <Tag>{t("tag")}</Tag>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-medium">
                            {t.rich('heading', { br: () => <br /> })}
                            <span className="text-red-400">{t("headingHighlight")}</span>
                        </h2>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-3">
                            <FeatureCard
                                title={t("card1.title")}
                                description={t("card1.description")}
                                className="md:col-span-2 lg:col-span-1 group">
                                <div dir="ltr" className="flex aspect-video items-center justify-center ">
                                    <Avatar className="z-40">
                                        <Image src={avtar1} alt="av1" className="rounded-full" />
                                    </Avatar>
                                    <Avatar className="-ml-6 border-indigo-400 z-30">
                                        <Image src={avtar2} alt="av2" className="rounded-full" />
                                    </Avatar>
                                    <Avatar className="-ml-6 border-amber-400 z-20">
                                        <Image src={avtar3} alt="av3" className="rounded-full" />
                                    </Avatar>
                                    <Avatar  className="-ml-6 border-transparent group-hover:border-teal-400">
                                        <div  className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1 relative">
                                            <Image src={avtar4} alt="av4"
                                                className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition" />
                                            {Array.from({ length: 3 }).map((_, i) => (
                                                <span key={i} className="size-1.5 rounded-full bg-white inline-flex"></span>
                                            ))}
                                        </div>
                                    </Avatar>

                                </div>
                            </FeatureCard>
                            <FeatureCard
                                title={t("card2.title")}
                                description={t("card2.description")}
                                className="md:col-span-2 lg:col-span-1 group">
                                <div className="aspect-video flex items-center justify-center">
                                    <p className="text-4xl font-extrabold text-white/20 text-center">
                                    {t("card2.head1")}
                                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent flex justify-center mx-1 relative">
                                            <span>{t("card2.head2")}</span>
                                            <video src='/videos/clip.mp4' autoPlay loop muted playsInline
                                                className="absolute bottom-full max-w-80 mix-blend-color-dodge  left-1/2 -translate-x-1/2 rounded-2xl shadow-sm opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500" />
                                        </span>
                                        {t("card2.head3")}
                                    </p>
                                </div>
                            </FeatureCard>
                            <FeatureCard
                                title={t("card3.title")}
                                description={t("card3.description")}
                                className="md:col-span-2  lg:col-span-1 md:col-start-2 lg:col-start-auto group">
                                <div className="aspect-video flex items-center justify-center gap-4" dir="ltr">
                                    <Key className="w-28 outline outline-2 outline-offset-4 outline-transparent 
                                group-hover:outline-sky-400 group-hover:translate-y-1 transition-all duration-500
                                delay-0">Shift</Key>
                                    <Key className="outline outline-2 outline-offset-4 outline-transparent 
                                group-hover:outline-sky-400 group-hover:translate-y-1 transition-all duration-500
                                delay-150">alt</Key>
                                    <Key className="outline outline-2 outline-offset-4 outline-transparent 
                                group-hover:outline-sky-400 group-hover:translate-y-1 transition-all duration-500
                                delay-300">c</Key>
                                </div>
                            </FeatureCard>

                        </div>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {features.map((feature, index) => (
                                <div key={index}
                                    className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center 
                                hover:scale-105 transition duration-500 cursor-default group">
                                    <span className="bg-red-600 text-neutral-50 size-5 rounded-full inline-flex items-center 
                                justify-center text-xl  group-hover:rotate-45 group-hover:rtl:-rotate-45 transition duration-500">&#10038;</span>
                                    <span className="font-medium md:text-lg md:rtl:text-base">
                                        {t(`subFeatures.${feature}`)}

                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features
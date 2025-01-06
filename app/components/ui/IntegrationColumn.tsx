'use client'
import Image from "next/image"
import { IntegrationsType } from "../Marquee"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { Fragment } from "react"
import { useTranslations } from "next-intl"

const IntegrationColumn = ({ integrations, className, reverse }: { integrations: IntegrationsType[], className?: string, reverse?: boolean }) => {

    const t = useTranslations('Marquee');

    return (
        <motion.div
            initial={{ y: reverse ? '-50%' : '0%', }}
            animate={{ y: reverse ? '0' : '-50%', }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className={cn('flex flex-col gap-4 pb-4', className)}>
            {Array.from({ length: 2 }).map((_, index) => (
                <Fragment key={index}>
                    {integrations.map((item, index) =>
                        <div key={index} className="bg-neutral-900 border border-white/10 rounded-3xl p-6">
                            <div className="flex justify-center">
                                <Image src={item.icon} alt={item.key} className="size-24" />
                            </div>
                            <h3 className="text-3xl text-center mt-6">{t(`integrations.${item.key}.name`)}</h3>
                            <p className="text-center text-white/50 mt-2">{t(`integrations.${item.key}.description`)}</p>
                        </div>
                    )}
                </Fragment>
            ))}

        </motion.div>
    )
}

export default IntegrationColumn
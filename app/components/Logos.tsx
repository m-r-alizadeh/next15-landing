"use client"
import quantumLogo from "@/public/logos/quantum.svg";
import acmeLogo from "@/public/logos/acme-corp.svg";
import echoValleyLogo from "@/public/logos/echo-valley.svg";
import pulseLogo from "@/public/logos/pulse.svg";
import outsideLogo from "@/public/logos/outside.svg";
import apexLogo from "@/public/logos/apex.svg";
import celestialLogo from "@/public/logos/celestial.svg";
import twiceLogo from "@/public/logos/twice.svg";
import Image from "next/image";
import { Fragment } from "react";
import { motion } from "motion/react";

const logoList = [
    { name: "Quantum", image: quantumLogo },
    { name: "Acme Corp", image: acmeLogo },
    { name: "Echo Valley", image: echoValleyLogo },
    { name: "Pulse", image: pulseLogo },
    { name: "Outside", image: outsideLogo },
    { name: "Apex", image: apexLogo },
    { name: "Celestial", image: celestialLogo },
    { name: "Twice", image: twiceLogo },
];

const Logos = () => {
    return (
        <div className="py-24 px-4 overflow-clip">
            <div className="container max-w-7xl mx-auto">
                <h3 className="text-center text-white/85 text-xl">Trusted by some of the biggest names on the web</h3>
                <div className="flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <motion.div
                        animate={{ x: "-50%" }}
                        transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
                        className="flex flex-none gap-24 pr-24">
                        {Array.from({ length: 2 }).map((_, i) => (
                            <Fragment key={i}>
                                {
                                    logoList.map((logo, index) => (
                                        <Image src={logo.image} alt={logo.name} key={index} />
                                    ))
                                }
                            </Fragment>
                        ))}

                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Logos
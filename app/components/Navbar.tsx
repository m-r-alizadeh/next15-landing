"use client";
import Image from "next/image";
import LogoImage from '@/public/logo.svg';
import { Button } from "./ui/Button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";


const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleResize = () => setIsOpen(false);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className="py-4 px-4 lg:py-8 fixed w-full top-0 z-50">
                <div className="container mx-auto max-w-5xl">
                    <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur">
                        <div className="grid grid-cols-2 lg:grid-cols-3   py-2 px-4 md:pr-2 items-center ">
                            <div className="flex items-center gap-1">
                                <Image src={LogoImage} alt="logo" width={48} priority={false} className="h-9 w-auto m:h-auto" />
                                <h2 className="space-y-0 text-2xl cursor-default select-none">
                                    Landing
                                    <strong className="bg-clip-text text-transparent bg-gradient-to-r from-[#377565] to-[#d9d730] ">App</strong>
                                </h2>
                            </div>
                            <div className="lg:flex justify-center hidden">
                                <nav className="flex gap-6 font-medium ">
                                    {navLinks.map((link, index) => (
                                        <a href={link.href} key={index} className="nav-link">{link.label}</a>
                                    ))}
                                </nav>
                            </div>
                            <div className="flex justify-end gap-3 ">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-menu md:hidden cursor-pointer"
                                    onClick={() => setIsOpen(!isOpen)}>
                                    <line x1="3" y1="6" x2="21" y2="6" className={cn("origin-left transition", isOpen && "rotate-45 -translate-y-1")}></line>
                                    <line x1="3" y1="12" x2="21" y2="12" className={cn("transition", isOpen && "opacity-0")}></line>
                                    <line x1="3" y1="18" x2="21" y2="18" className={cn("origin-left transition", isOpen && "-rotate-45 translate-y-1")}></line>
                                </svg>
                                <Button variant='secondary' className="hidden md:inline-flex">Log in</Button>
                                <Button variant='default' className="hidden md:inline-flex">Sign up</Button>
                            </div>
                        </div>
                        <AnimatePresence>
                            {isOpen &&
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: 'auto' }}
                                    exit={{ height: 0 }}
                                    className=" overflow-hidden">
                                    <div className="flex items-center flex-col gap-4 py-4">
                                        {navLinks.map((link, index) => (
                                            <a href={link.href} key={index}>{link.label}</a>
                                        ))}


                                        <Button variant='secondary'>Log in</Button>
                                        <Button variant='default'>Sign up</Button>

                                    </div>
                                </motion.div>
                            }
                        </AnimatePresence>
                    </div>
                </div>
            </div>
            <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]"></div>
        </>
    )
}

export default Navbar
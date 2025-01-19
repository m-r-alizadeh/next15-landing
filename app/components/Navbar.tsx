"use client";
import Image from "next/image";
import LogoImage from '@/public/logo.svg';
import { Button } from "./ui/Button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from 'next/navigation';

const navLinks = [
    { key: "Home", href: "#" },
    { key: "Features", href: "#features" },
    { key: "Integrations", href: "#integrations" },
    { key: "FAQs", href: "#faqs" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleResize = () => setIsOpen(false);
    const t = useTranslations('Navbar');
    const locale = useLocale();
    const router = useRouter();


    const handleLanguageToggle = () => {
        const newLocale = locale === 'en' ? 'fa' : 'en';
        router.push(`/${newLocale}`);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className="py-4 px-4 lg:py-8 fixed w-full top-0 z-50">
                <div className="container mx-auto max-w-5xl">
                    <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur">
                        <div className="grid grid-cols-2 lg:grid-cols-3   py-2 px-4 md:pe-2 items-center ">
                            <div className="flex items-center gap-1">
                                <Image src={LogoImage} alt="logo" width={48} priority={false} className="h-9 w-auto m:h-auto" />
                                <h2 className="space-y-0 text-2xl cursor-default select-none flex gap-1">
                                    <span>{t('logoText1')}</span>
                                    <strong className="bg-clip-text text-transparent bg-gradient-to-r from-[#377565] to-[#d9d730] ">
                                        {t('logoText2')}
                                    </strong>
                                </h2>
                            </div>
                            <div className="lg:flex justify-center hidden">
                                <nav className="flex gap-6 font-medium ">
                                    {navLinks.map((link, index) => (
                                        <a href={link.href} key={index} className="nav-link">
                                            {t(`links.${link.key}`)}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            <div className="flex justify-end gap-2 ">
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
                                <Button variant='secondary' className="hidden md:inline-flex">{t('logIn')}</Button>
                                <Button
                                    variant='default'
                                    className="hidden md:inline-flex"
                                    onClick={handleLanguageToggle}
                                >
                                    {t('lang')}
                                </Button>
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
                                            <a href={link.href} key={index}>{t(`links.${link.key}`)}</a>
                                        ))}


                                        <Button variant='secondary'>{t('logIn')}</Button>
                                        <Button variant='default'>{t('signUp')}</Button>

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

import LogoImage from '@/public/logo.svg';
import Image from "next/image";

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

const Footer = () => {
    return (
        <div className="py-16 px-4">
            <div className="container max-w-7xl mx-auto">
                <div className='flex flex-col md:flex-row md:justify-between items-center gap-6'>
                    <div className='flex items-center gap-2'>
                        <Image src={LogoImage} alt="logo" width={48} priority={false} className="h-9 w-auto m:h-auto" />
                        <h6 className='text-white/50'>Design by m.r.alizade</h6>
                    </div>
                    <div className='flex gap-6'>
                        {footerLinks.map((item, index) => (
                            <a href={item.href} key={index} className='text-white/50 text-sm'>
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
import Tag from "./ui/Tag"
import figmaLogo from "@/public/brands/figma-logo.svg"
import notionLogo from "@/public/brands/notion-logo.svg"
import slackLogo from "@/public/brands/slack-logo.svg"
import relumeLogo from "@/public/brands/relume-logo.svg"
import framerLogo from "@/public/brands/framer-logo.svg"
import githubLogo from "@/public/brands/github-logo.svg"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import IntegrationColumn from "./ui/IntegrationColumn"
import { useTranslations } from "next-intl"

export type IntegrationsType = {
    key: string;
    icon: string | StaticImport;
};

const integrations: IntegrationsType[] = [
    { key: "Figma", icon: figmaLogo, },
    { key: "Notion", icon: notionLogo, },
    { key: "Slack", icon: slackLogo, },
    { key: "Relume", icon: relumeLogo, },
    { key: "Framer", icon: framerLogo, },
    { key: "GitHub", icon: githubLogo, },
];


const Marquee = () => {
    const t = useTranslations('Marquee');
    return (
        <>
            <span id="integrations" />

            <div className="py-24 px-4 overflow-hidden">

                <div className="container max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                        <div className=" flex flex-col gap-8">
                            <div className="flex justify-start">
                                <Tag>{t("tag")}</Tag>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-medium">{t("heading1")} <span className="text-red-400 block">{t("heading2")}</span></h2>
                            <p className="text-white/50 text-lg">
                                {t("description")}
                            </p>
                        </div>
                        <div>
                            <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                                <IntegrationColumn integrations={integrations} />
                                <IntegrationColumn integrations={integrations.slice().reverse()} className="hidden md:flex" reverse={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Marquee
import Tag from "./ui/Tag"
import figmaLogo from "@/public/brands/figma-logo.svg"
import notionLogo from "@/public/brands/notion-logo.svg"
import slackLogo from "@/public/brands/slack-logo.svg"
import relumeLogo from "@/public/brands/relume-logo.svg"
import framerLogo from "@/public/brands/framer-logo.svg"
import githubLogo from "@/public/brands/github-logo.svg"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import IntegrationColumn from "./ui/IntegrationColumn"

export type IntegrationsType = {
    name: string;
    icon: string | StaticImport;
    description: string;
};

const integrations: IntegrationsType[] = [
    { name: "Figma", icon: figmaLogo, description: "Figma is a collaborative interface design tool." },
    { name: "Notion", icon: notionLogo, description: "Notion is an all-in-one workspace for notes and docs." },
    { name: "Slack", icon: slackLogo, description: "Slack is a powerful team communication platform." },
    { name: "Relume", icon: relumeLogo, description: "Relume is a no-code website builder and design system." },
    { name: "Framer", icon: framerLogo, description: "Framer is a professional website prototyping tool." },
    { name: "GitHub", icon: githubLogo, description: "GitHub is the leading platform for code collaboration." },
];


const Marquee = () => {
    return (
        <>
            <span id="integrations" />

            <div className="py-24 px-4 overflow-hidden">

                <div className="container max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                        <div className=" flex flex-col gap-8">
                            <div className="flex justify-start">
                                <Tag>Integrations</Tag>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-medium">Built on a <span className="text-red-400 block">foundation of fast</span></h2>
                            <p className="text-white/50 text-lg">
                                Everything you need to build great products on the web.
                                quality web applications with the power of React components.
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
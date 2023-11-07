import Image from "next/image";
import Hero from "./components/hero";
import CTA from "C/CTA";
import designBranding from "media/lp-three/design-branding.png"
import Portfolios from "./components/portfolios";
import Packages from "./components/packages";

const Page = () => {
    return (
        <main>
            <Hero />
            <section>
                <div className="py-[50px] lg:py-[100px]">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
                            <div>
                                <h2 className="text-[30px] lg:text-[35px] xl:text-[40px] text-[#2f323a] font-poppins font-bold leading-tight">
                                    Logo <span className="text-[#dd1e4b]">Design & Branding</span> <br /> In Detail
                                </h2>
                                <span className="block w-[20%] h-[4px] bg-[#dd1e4b] mt-3 mb-3"></span>
                                <p className="text-[13px] sm:text-[14px] lg:text-[16px] leading-[24px] text-[#6f6f6f] font-poppins font-normal text-justify lg:text-left">
                                    Your company’s logo design and branding is your identity. At Paramount Logos, we understand that well. Our designers make sure to deliver customized, professional logo design as per the nature of your business and target audience. Our in-depth process starts from brainstorming, goes through conceptualization & sketching, and concludes with a logo design that you are delighted with.
                                </p>
                                <div className="flex items-center flex-wrap sm:flex-nowrap gap-3 mt-5 relative z-10">
                                    <CTA
                                        text="Start Live Chat"
                                        href="javascript:$zopim.livechat.window.show();"
                                        bg="bg-[#000000]"
                                        icon="/icons/chat.svg"
                                        css="hover:bg-light-yellow  font-poppins"
                                        rounded="rounded-[5px]"
                                    />
                                    <CTA
                                        text="(855) 666-6675"
                                        href="tel:8556666675"
                                        bg="bg-[#dd1e4b]"
                                        css="hover:bg-light-yellow font-poppins"
                                        rounded="rounded-[5px]"
                                    />
                                </div>
                            </div>
                            <div>
                                <Image src={designBranding} alt="designBranding" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Portfolios />
            <Packages />
        </main>
    )
}

export default Page;
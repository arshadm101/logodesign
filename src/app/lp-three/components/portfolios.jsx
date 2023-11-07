"use client"
import { useState } from "react";
// Imports Components
import Image from "next/image";
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import data from "../portfolio";
import CTA from "C/CTA";

const Portfolios = () => {
    const [activeTab, setActiveTab] = useState(String(data[0].value));
    return (
        <section>
            <div className="py-[50px] lg:py-[100px] bg-[#eeeeee]">
                <div className="container">
                    <div className="text-center mb-10">
                        <h2 className="text-[30px] lg:text-[35px] xl:text-[40px] text-[#2f323a] font-poppins font-bold leading-tight">
                            Logo Design <span className="text-[#dd1e4b]">Portfolio</span>
                        </h2>
                        <span className="block w-[10%] h-[4px] bg-[#dd1e4b] mt-3 mb-3 m-auto"></span>
                        <p className="text-[13px] sm:text-[14px] lg:text-[16px] leading-[24px] text-[#6f6f6f] font-poppins font-normal">
                            Check the level of creativity, Our team has achieved with collaborative teamwork.
                        </p>
                    </div>
                    <Tabs value={activeTab} className="block">
                        <TabsHeader
                            indicatorProps={{ className: "hidden" }}
                            className="bg-transparent p-0 flex justify-center gap-3  flex-wrap lg:flex-nowrap mb-10"
                        >
                            {
                                data.map(({ value, label }) => {
                                    return (
                                        <Tab value={value} key={value} onClick={() => setActiveTab(value)}
                                            className={`${activeTab === value ? " text-white bg-[#dd1e4b] border-[#dd1e4b]" : "border-[#6f6f6f] text-[#6f6f6f]"} font-poppins font-medium text-[16px] w-max py-[0.5rem] px-[0.8rem] rounded-none border-[1px] capitalize transition-all`}>
                                            {label}
                                        </Tab>
                                    );
                                })
                            }
                        </TabsHeader>
                        <TabsBody>
                            {data.map(({ value, images }) => (
                                <TabPanel key={value} value={value} className="p-0">
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-3">
                                        {images.map((e, i) => (
                                            <Image
                                                src={e}
                                                alt="logos"
                                                width="0"
                                                height="0"
                                                sizes="100vw"
                                                className="w-full h-[100px] md:h-auto"
                                                key={i}
                                            />
                                        ))}
                                    </div>
                                </TabPanel>
                            ))}
                        </TabsBody>
                    </Tabs>
                    <div className="flex items-center justify-center flex-wrap sm:flex-nowrap gap-3 mt-10 relative z-10">
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
            </div>
        </section>
    );
}

export default Portfolios;
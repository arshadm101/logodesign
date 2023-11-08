"use client"
import { useState } from "react";
// Imports Components
import Image from "next/image";
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
// Import Images
// import CTA from "C/CTA";

const Folio = ({ content }) => {
    const { title, desc, tabs } = content;
    const [activeTab, setActiveTab] = useState(String(tabs[0].value));

    const sectionStyle2 = {
        backgroundImage: `url('../logodesignnew/port_bg.webp')`, // Adjust the path to your image
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        // You can also set other background properties here, like background-color.
      };
    return (

        <section className="font-poppins" style={sectionStyle2}>
            <div className="py-[40px] md:py-[40px]">
                <div className="container max-w-6xl">
                    <div className="text-center mb-10">
                        <div className="text-center">
                            <div className="container md:max-w-6xl lg:max-w-6xl mb-5">
                                <div className="grid grid-flow-row grid-cols-1 items-center gap-x-3">
                                    <h2 className="text-[30px] text-center pt-10 text-[#060f32] font-[700]">Have a Look at What we have Designed Throughout the years</h2>

                <p className="text-[16px] text-[#74767d]">We take an integrated approach to creating highly engaging digital properties & brand focused creative solutions. We believe in providing highly creative and exclusive logo designs that give an edge over your competitors.</p>
                                </div>
                            </div>
                        </div>
                    </div>
             
                    <Tabs value={activeTab} className="block">
                        {/* <TabsHeader indicatorProps={{ className: "hidden" }} className="font-poppins bg-transparent p-0 flex justify-center gap-3  flex-wrap md:flex-nowrap mb-10">
                            {
                                tabs.map(({ value, label }) => {
                                    return (
                                        <Tab value={value} key={value} onClick={() => setActiveTab(value)}
                                            className={`${activeTab === value ? " border-[#f73600] text-[#f73600]" : "border-black text-black"}  border-b-2 font-poppins font-medium text-[18px] w-max py-[0.5rem] px-[0.8rem] rounded-none capitalize`}>
                                            {label}
                                        </Tab>
                                    );
                                })
                            }
                        </TabsHeader> */}
                        <TabsBody>
                            {tabs.map(({ value, images }) => (
                                <TabPanel key={value} value={value} className="p-0">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-3">
                                        {images.map((e, i) => {
                                            return <div key={i}>
                                                <Image src={e} alt={i} width={800} height={300} className="block m-auto" />
                                            </div>
                                        })}
                                    </div>
                                </TabPanel>
                            ))}
                        </TabsBody>
                    </Tabs>
                    <div className="flex items-center gap-3 justify-center mt-10 relative z-10">
                        {/* <CTA
                            text="Start Live Chat"
                            href="javascript:$zopim.livechat.window.show();"
                            bg="bg-black"
                            icon="/icons/chat.svg"
                            css="hover:bg-light-yellow"
                        />
                        <CTA
                            text="(347) 607-3636"
                            href="tel:3476073636"
                            bg="bg-red"
                            css="hover:bg-light-yellow"
                        /> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Folio;
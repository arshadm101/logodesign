"use client"
import Image from "next/image";
import styles from "../page.module.css";
import Input from "C/Input";
import Button from "C/Button";
import Textarea from "C/Textarea";

const Hero = () => {
    let list = [
        {
            icon: "/lp-three/checkCircle.png",
            text: "4 Custom Logo Concepts"
        },
        {
            icon: "/lp-three/checkCircle.png",
            text: "FREE Revisions"
        },
        {
            icon: "/lp-three/checkCircle.png",
            text: "FREE File Formats"
        },
        {
            icon: "/lp-three/checkCircle.png",
            text: "100% Money Back Guarantee"
        }
    ]
    let logos = [
        "/lp-three/hero/logos/1.png",
        "/lp-three/hero/logos/2.png",
        "/lp-three/hero/logos/3.png",
        "/lp-three/hero/logos/4.png",
        "/lp-three/hero/logos/5.png",
        "/lp-three/hero/logos/6.png"
    ]
    return (
        <section>
            <div className="bg-[#3e180d] pt-[100px] pb-[50px] bg-[url('../../public/lp-three/hero/texture-bg-2.png')] bg-cover bg-no-repeat">
                <div className="container">
                    <div className="text-center">
                        <p className="text-[#dd1e4b] text-[16px] lg:text-[20px] leading-tight font-poppins font-medium">
                            PROFESSIONAL LOGO DESIGN SERVICE
                        </p>
                        <h1 className="text-[30px] md:text-[40px] text-white font-megat font-extrabold leading-tight mt-2 mb-3">
                            LOGO DESIGN STARTS FROM <span className={`text-[#dd1e4b] ${styles.blink}`}>$35</span>
                        </h1>
                        <p className="text-white text-[13px] sm:text-[14px] lg:text-[20px] leading-tight font-poppins font-normal mb-10 sm:mb-0">
                            YOUR CUSTOM LOGO DESIGN BY PROFESSIONAL LOGO DESIGN <br className="sm:block md:hidden" /> AGENCY IS JUST A CLICK AWAY!
                        </p>
                    </div>
                    <div className="hidden sm:grid grid-cols-2 md:flex justify-center gap-2 lg:gap-10 my-10">
                        {
                            list && list.map((e, i) => (
                                <div key={i}>
                                    <div className="flex justify-center gap-1 lg:gap-2 items-center" >
                                        <Image src={e.icon} width={18} height={18} alt="icon" />
                                        <p className="text-white font-poppins font-medium leading-tight text-[11px] sm:text-[14px]">{e.text}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                        <div>
                            <div className="grid grid-cols-3">
                                {
                                    logos && logos.map((e, i) => (
                                        <Image
                                            src={e}
                                            alt="logos"
                                            width="0"
                                            height="0"
                                            sizes="100vw"
                                            className="w-full h-[100px] md:h-auto"
                                            key={i}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                        <div>
                            <div className="bg-[#2c0f09cc] p-5 lg:w-[90%] xl:w-[80%] m-auto border-t-4 border-[#dd1e4b]">
                                <h2 className="text-white text-center text-[30px] font-megat font-extrabold leading-tight mb-5">
                                    Fill The Form To <br className="block" />
                                    <span className="text-[#dd1e4b] font-poppins">Avail 70%</span> Off
                                </h2>
                                <form autoComplete="off" spellCheck="false" className="grid grid-cols-2 gap-5">
                                    <div>
                                        <Input
                                            type="text"
                                            name="name"
                                            border="border-none"
                                            padding="px-2"
                                            color="text-white"
                                            placeholderColor="placeholder:text-[#614c47]"
                                            bg="bg-[#2b0e08]"
                                            placeholder="Full Name *"
                                            css="font-poppins"
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            type="email"
                                            name="email"
                                            border="border-none"
                                            padding="px-2"
                                            color="text-white"
                                            placeholderColor="placeholder:text-[#614c47]"
                                            bg="bg-[#2b0e08]"
                                            placeholder="Email Address *"
                                            css="font-poppins"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <Input
                                            type="phone"
                                            name="phone"
                                            border="border-none"
                                            padding="px-2"
                                            color="text-white"
                                            placeholderColor="placeholder:text-[#614c47]"
                                            bg="bg-[#2b0e08]"
                                            placeholder="Phone No. *"
                                            css="font-poppins"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <Textarea
                                            name="message"
                                            border="border-none"
                                            padding="p-2"
                                            color="text-white"
                                            placeholderColor="placeholder:text-[#614c47]"
                                            bg="bg-[#2b0e08]"
                                            placeholder="To help us understand better, enter a brief description about your project."
                                            css="font-poppins"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <div className="w-[250px] m-auto">
                                            <Button
                                                text="Activate Your Coupon"
                                                border="border-2 border-[#dd1e4b]"
                                                color="text-white"
                                                bg="bg-[#dd1e4b]"
                                                rounded="rounded-[5px]"
                                                css="font-poppins hover:bg-transparent"
                                                fontWeight="font-medium"
                                            />
                                        </div>
                                    </div>
                                </form>
                                <p className="text-[14px] lg:text-[16px] text-[#614c47] leading-tight font-poppins font-normal mt-5 text-center">
                                    Any Confusion? <span dangerouslySetInnerHTML={{ __html: '<a href="javascript:$zopim.livechat.window.show();" class="text-white font-medium">Why not discuss your idea?</a>' }} />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
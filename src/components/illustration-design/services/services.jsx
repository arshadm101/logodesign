// Import Components
import Image from "next/image";
import Button from "@/components/button/button";
// Import Images
import screens from "media/illustration-design/services/screens.png";
import CTA from "C/CTA";

const Services = () => {
    return (
        <section>
            <div className="pb-[60px] md:pb-[100px]">
                <div className="container">
                    <div className="lg:w-2/3 mb-10">
                        <span className="text-base font-normal text-red">Custom Illustration Agency</span>
                        <h2 className="text-[20px] sm:text-[25px] xl:text-[35px] font-megat font-extrabold leading-tight text-black mb-2">
                            High-Quality Illustration Designs by
                            Our Professional Illustrators
                        </h2>
                        <p className="text-base text-black font-normal">Hire illustrators to breathe life into your products, services, and any other offerings.
                            We create visuals that capture attention and convey your message uniquely.</p>
                    </div>
                    <div className="flex items-center flex-col sm:flex-row gap-3 sm:gap-5 mt-5">
                        <CTA
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
                        />
                    </div>
                    <Image src={screens} alt="screens" className="block m-auto mt-10" />
                </div>
            </div>
        </section>
    )
}

export default Services;
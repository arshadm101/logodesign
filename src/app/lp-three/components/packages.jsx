"use client"
import Button from "@/components/Button";
// Import Packages
import data from "../packages";
import { useEffect, useRef } from "react";
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

const Packages = () => {
    const swiperRef = useRef(null);
    useEffect(() => {
        register();
        const params = {
            slidesPerView: 3,
            spaceBetween: 20,
            pagination: true,
            breakpoints: {
                300: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                1300: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
            },
            injectStyles: [`
                .swiper-pagination-bullet-active {
                    background: #ea0122 !important;
                }
            `],
            pagination: {
                clickable: true,
            },
        };
        // Assign it to swiper element
        Object.assign(swiperRef.current, params);
        // initialize swiper
        swiperRef.current.initialize();
    }, []);
    return (
        <section>
            <div className="py-[50px] lg:py-[100px]">
                <div className="container">
                    <div className="text-center mb-10">
                        <h2 className="text-[25px] sm:text-[30px] xl:text-[35px] font-megat font-extrabold leading-tight text-black mb-3">
                            Our Affordable <span className="text-[#ea0122]">Pricing</span> Plans
                        </h2>
                        <p className="text-[14px] xl:text-[16px] leading-[24px] xl:leading-[26px] text-[#565656] font-normal lg:w-2/3 lg:m-auto">
                            Tailor-made Packages To Fulfill Your Business Needs
                        </p>
                    </div>
                    <swiper-container ref={swiperRef} init={false}>
                        {data[0].packages.map((e, i) => (
                            <swiper-slide key={i} class="pb-[80px]">
                                <div className="bg-white xl:w-[90%] cursor-pointer m-auto hover:bg-[#173d6b] group py-5 rounded-lg border-[1px] border-[#b4b8bd] hover:border-[#173d6b] relative">
                                    <div className="px-3">
                                        <div>
                                            <h4 className="text-[22px] leading-tight group-hover:text-white font-megat">
                                                {e.name}
                                            </h4>
                                        </div>
                                        <div className="my-3">
                                            <span className="text-[18px] block leading-tight text-[#b4b8bd]">
                                                <del>{e.originalPrice}</del>
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <h4 className="text-[22px] leading-tight text-[#ea0122] group-hover:text-white font-megat">
                                                {e.discountedPrice}
                                            </h4>
                                            <h4 className="text-[22px] leading-tight text-[#ea0122] group-hover:text-white font-megat">
                                                USD
                                            </h4>
                                        </div>
                                        <div>
                                            <ul className="grid grid-cols-1 gap-2 my-3 overflow-y-auto h-60">
                                                {
                                                    e.list && e.list.map((e, i) => (
                                                        <li key={i} className="text-black group-hover:text-white text-[13px] xl:text-[14px] leading-[22px]">
                                                            - {e}.
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="border-t-[1px] border-[#b4b8bd] group-hover:border-white divide-x-[1px] grid grid-cols-2 divide-[#b4b8bd] group-hover:divide-white">
                                        <div className="text-center py-3">
                                            <div dangerouslySetInnerHTML={{ __html: `<span class="text-[#ea0122] text-[14px] leading-tight block group-hover:text-white">Speak with us</span><a href="tel:8556666675" class="text-[#3c3d3e] text-[14px] leading-tight block group-hover:text-white">(855) 666-6675</a>` }} />
                                        </div>
                                        <div className="text-center py-3">
                                            <div dangerouslySetInnerHTML={{ __html: `<span class="text-[#ea0122] text-[14px] leading-tight block group-hover:text-white">Want to discuss?</span><a href="javascript:$zopim.livechat.window.show();" class="text-[#3c3d3e] text-[14px] leading-tight block group-hover:text-white">Live Chat</a>` }} />
                                        </div>
                                    </div>
                                    <div className="w-[200px] absolute bottom-[-21px] left-0 right-0 m-auto">
                                        <Button
                                            text="Place Order"
                                            border="border-none"
                                            color="text-white"
                                            bg="bg-[#ea0122]"
                                        />
                                    </div>
                                </div>
                            </swiper-slide>
                        ))}
                    </swiper-container>
                </div>
            </div>
        </section>
    )
}

export default Packages;
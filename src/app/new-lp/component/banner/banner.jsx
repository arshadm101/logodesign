"use client"

import Image from "next/image";
import Link from "next/link";
import styles from '../banner/banner.module.css'
import 'swiper/css';
import 'swiper/css/navigation';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import One from "media/new-lp/homeslider/1.webp";

import { EffectFade, Navigation, Pagination } from 'swiper/modules';


const Banner = () => {

    const [slidesPerView, setSlidesPerView] = useState(3);


    useEffect(() => {
        const handleResize = () => {
            const isMobileView = window.innerWidth < 768; // Adjust the breakpoint as needed
            setSlidesPerView(isMobileView ? 1 : 1);
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        const slides = document.getElementsByClassName('swiper-slide');

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    const slides = [
        {
            avatar: '../new-lp/homeslider/1.webp',

        },
        {
            avatar: '../new-lp/homeslider/2.webp',

        },
        {
            avatar: '../new-lp/homeslider/3.webp',

        }
    ];


    return (
        <>
            <section className={`${styles.banner}  font-poppins pt-36 pb-20`}>
                <div class="container mx-auto">
                    <div class="grid grid-cols-2 pt-4">

                        <div>
                            <h2 className="text-[25px] font-medium text-[#153b6b]">Premiumly Crafted</h2>
                            <h1 className="text-[65px] font-bold leading-[70px] py-3"> <span className="text-[#dd1920]">Custom Logo</span> <br></br>
                                <span className="text-[#153b6b] text-[56px]">Design Services</span> </h1>
                            <p className="pt-3 text-[17px] leading-[26px] font-normal text-[#49658a]">We shape your brand with innovative Logo Designs to give your <br></br> Brand a truly remarkable & professional look.</p>
                            <h4 className='text-[25px] leading-[30px] py-5 pb-10 font-[600] text-[#153b6b]'>SIGN UP NOW AND GET UP TO <span className="text-[#dd1920]">70% OFF</span> </h4>
                            <div className="relative" >
                                <input type="text" className="placeholder:text-[#757b81] bg-transparent border-gray-400 w-10/12 h-16 py-7 rounded-full px-6 border" name="name" placeholder="Enter Your Name" required="" />
                                <div className="absolute right-[7.5rem] top-1.5   bg-[#dd1920] text-[#fff] py-3   text-center md:rounded-full text-[16px] font-medium w-1/5 hover:bg-[#ffff] hover:border-[1px] hover:border-[#dd1920]  hover:text-[#dd1920]">
                                    <input type="submit" value='Next' className="text-[18px]" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <Swiper
                                spaceBetween={30}
                                effect={'fade'}
                                autoplay={true}
                                loop={true}
                                modules={[EffectFade, Navigation, Pagination]}
                                className="mySwiper"
                            >
                                {slides.map((testimonial, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="card testimonialscard">
                                            <img className="ml-auto" src={testimonial.avatar} alt={testimonial.name} />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;
"use client"
import Image from "next/image";
import Link from "next/link";
import styles from '../works/works.module.css'
import logo1 from 'media/new-lp/works/new.svg'
import logo2 from 'media/new-lp/works/new1.svg'
import logo3 from 'media/new-lp/works/new2.svg'
import { useState, useEffect  } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";



const Works = () => {

    const [isMobile, setIsMobile] = useState(false);


    const sliderSettings = {
        dots: false,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth < 991)
            {
                setIsMobile(true);
            }
            else{
                setIsMobile(false);
            }
        };
        handleResize();

        window.addEventListener('resize', handleResize);


        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);












    return (
        <>
            <section className={`${styles.works} bg-[#fbfbfb] font-poppins lg:py-[80px] md:py-[80px] sm:py-[80px] py-[50px]`}>
                <div class="container mx-auto">
                    <div class="grid grid-cols-1">
                        <h2 className="lg:text-[66px] md:text-[35px] sm:text-[35px] text-[23px] font-[700] text-center lg:mb-28 md:mb-28 sm:mb-28 mb-10">How It <span className="border-2 border-slate-700 px-3 py-0">Works</span> </h2>
                    </div>


                    {isMobile ? (
                        <Slider {...sliderSettings}>
                            
                                <div className="hover:bg-[#de182a] hover:text-[#ffff] p-[20px] rounded-2xl hover:transition-none">
                                    <div className={styles.box}>
                                        <Image src={logo1} className="w-[80px] block m-auto" />
                                    </div>
                                    <h3 className="lg:text-[28px] md:text-[28px] sm:text-[28px] text-[20px] font-[500] text-center">Details</h3>
                                    <p className="xl:text-[17px] lg:text-[14px] md:text-[17px] sm:text-[17px] text-[15px] font-[400] text-center">Answer a few questions about your <br></br> business, your industry and your <br></br> audience and we’ll take it from there.</p>
                                </div>
                                <div className="hover:bg-[#de182a] hover:text-[#ffff] p-[20px] rounded-2xl hover:transition-none">
                                    <div className={styles.box}>
                                        <Image src={logo2} className="w-[80px] block m-auto" />
                                    </div>
                                    <h3 className="lg:text-[28px] md:text-[28px] sm:text-[28px] text-[20px] font-[500] text-center">Design</h3>
                                    <p className="xl:text-[17px] lg:text-[14px] md:text-[17px] sm:text-[17px] text-[15px] font-[400] text-center">Our design team gets involved and<br></br> we start crafting unique logo options <br></br> to reflect your business.</p>
                                </div>
                                <div className="hover:bg-[#de182a] hover:text-[#ffff] p-[20px] rounded-2xl hover:transition-none">
                                    <div className={styles.box}>
                                        <Image src={logo3} className="w-[80px] block m-auto" />
                                    </div>
                                    <h3 className="lg:text-[28px] md:text-[28px] sm:text-[28px] text-[20px] font-[500] text-center">Delivery</h3>
                                    <p className="xl:text-[17px] lg:text-[14px] md:text-[17px] sm:text-[17px] text-[15px] font-[400] text-center">As soon as your new logo designs <br></br> are completed, we'll send them <br></br> straight to your inbox.</p>
                                </div>

                        </Slider>
                    ) : (
                        <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-10">
                            <div className="hover:bg-[#de182a] hover:text-[#ffff] p-[20px] rounded-2xl hover:transition-none">
                                <div className={styles.box}>
                                    <Image src={logo1} className="w-[80px] block m-auto" />
                                </div>
                                <h3 className="lg:text-[28px] md:text-[28px] sm:text-[28px] text-[20px] font-[500] text-center">Details</h3>
                                <p className="xl:text-[17px] lg:text-[14px] md:text-[17px] sm:text-[17px] text-[15px] font-[400] text-center">Answer a few questions about your <br></br> business, your industry and your <br></br> audience and we’ll take it from there.</p>
                            </div>
                            <div className="hover:bg-[#de182a] hover:text-[#ffff] p-[20px] rounded-2xl hover:transition-none">
                                <div className={styles.box}>
                                    <Image src={logo2} className="w-[80px] block m-auto" />
                                </div>
                                <h3 className="lg:text-[28px] md:text-[28px] sm:text-[28px] text-[20px] font-[500] text-center">Design</h3>
                                <p className="xl:text-[17px] lg:text-[14px] md:text-[17px] sm:text-[17px] text-[15px] font-[400] text-center">Our design team gets involved and<br></br> we start crafting unique logo options <br></br> to reflect your business.</p>
                            </div>
                            <div className="hover:bg-[#de182a] hover:text-[#ffff] p-[20px] rounded-2xl hover:transition-none">
                                <div className={styles.box}>
                                    <Image src={logo3} className="w-[80px] block m-auto" />
                                </div>
                                <h3 className="lg:text-[28px] md:text-[28px] sm:text-[28px] text-[20px] font-[500] text-center">Delivery</h3>
                                <p className="xl:text-[17px] lg:text-[14px] md:text-[17px] sm:text-[17px] text-[15px] font-[400] text-center">As soon as your new logo designs <br></br> are completed, we'll send them <br></br> straight to your inbox.</p>
                            </div>

                        </div>
                    )}



                </div>
            </section>
        </>
    )
}

export default Works;
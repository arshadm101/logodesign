"use client"
import Image from "next/image";
import Link from "next/link";
import styles from '../happy/happy.module.css'
import logo1 from 'media/new-lp/happy/1.webp'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import logo11 from 'media/new-lp/happy/arr1.PNG'
import logo2 from 'media/new-lp/happy/arr2.PNG'

const Happy = () => {



    var settings = {

        dots: false,
        arrows: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <Image src={logo11} className='img-fluid' />,
        prevArrow: <Image src={logo2} className='img-fluid' />
    };



    return (
        <>
            <section className={`${styles.happy} bg-[#fbfbfb] font-poppins py-[80px]`}>
                <div class="container mx-auto">
                    <div class="grid grid-cols-1">
                        <div className={styles.longa}>
                            <h2 className="text-[66px] font-[700] text-center mb-10 text-[#ffff]">Words from Happy Clients </h2>

                        </div>
                        <Slider {...settings}  className={`${styles.limpo} newarrr`}>

                            <div>

                                <div className="flex flex-col items-center">
                                    <Image src={logo1} className="" />

                                    <p className="text-[22px] text-[#ffff] max-w-[850px] m-auto mb-5 mt-5 text-center">“I needed a logo and they provided great service over and beyond. They made sure
                                        everything was what I wanted and more. The customer service is great, and they followed
                                        up with calls, emails and text messages.”</p>

                                    <h4 className="text-[20px] text-[#ffff] font-[600]">Cheryl Tawana</h4>
                                </div>
                            </div>

                            <div>

                                <div className="flex flex-col items-center">
                                    <Image src={logo1} className="" />

                                    <p className="text-[22px] text-[#ffff] max-w-[850px] m-auto mb-5 mt-5 text-center">“I needed a logo and they provided great service over and beyond. They made sure
                                        everything was what I wanted and more. The customer service is great, and they followed
                                        up with calls, emails and text messages.”</p>

                                    <h4 className="text-[20px] text-[#ffff] font-[600]">Cheryl Tawana</h4>
                                </div>
                            </div>

                        </Slider>

                    </div>


                </div>
            </section>
        </>
    )
}

export default Happy;
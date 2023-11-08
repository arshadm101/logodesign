"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "next/image";
import Link from "next/link";
import styles from '../slider/slider.module.css'

import One1 from "media/new-lp/slider/1.webp";
import One2 from "media/new-lp/slider/2.webp";
import One3 from "media/new-lp/slider/3.webp";
import One4 from "media/new-lp/slider/4.webp";
import One5 from "media/new-lp/slider/5.webp";
import One6 from "media/new-lp/slider/6.webp";
import One7 from "media/new-lp/slider/7.webp";


const Sliderban = () => {





    var settings = {
      
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        pauseOnHover: false,
        cssEase: 'linear',
        slidesToShow: 7,
        slidesToScroll: 1,
    };

    return (
        <>
            <section className={`${styles.banner}  font-poppins py-3`}>
                <Slider {...settings} >

                    <div>
                        <Image src={One1} alt="profile" className="" width={50} height={50} />
                    </div>

                    <div>
                        <Image src={One2} alt="profile" className="" width={50} height={50} />
                    </div>

                    <div>
                        <Image src={One3} alt="profile" className="" width={50} height={50} />
                    </div>

                    <div>
                        <Image src={One4} alt="profile" className="" width={50} height={50} />
                    </div>

                    <div>
                        <Image src={One5} alt="profile" className="" width={50} height={50} />
                    </div>

                    <div>
                        <Image src={One6} alt="profile" className="" width={50} height={50} />
                    </div>

                    <div>
                        <Image src={One7} alt="profile" className="" width={50} height={50} />
                    </div>
                    <div>
                        <Image src={One6} alt="profile" className="" width={50} height={50} />
                    </div>

                    <div>
                        <Image src={One7} alt="profile" className="" width={50} height={50} />
                    </div>






                </Slider>

            </section>
        </>
    )
}

export default Sliderban;
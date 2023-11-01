"use client"
// Next Components
import Image from "next/image";
// Images
import Awards from "media/awards/three.svg";
import One from "media/lp-one/hero/slides/1.png";
import Two from "media/lp-one/hero/slides/2.png";
import Three from "media/lp-one/hero/slides/3.png";
import Four from "media/lp-one/hero/slides/4.png";
import Five from "media/lp-one/hero/slides/5.png";
// Components
import CTA from "C/CTA";
import Form from "./form/form";
// Import Css
import Input from "@/components/Input";
import Button from "@/components/Button";
// Swiper
import { register } from 'swiper/element/bundle';
import { useEffect, useRef, useState } from "react";
import styles from "./hero.module.css";
import { usePathname } from "next/navigation";
import Axios from "axios";

const Hero = ({ content }) => {
    const { subtitle, title, desc, img, form, page } = content;
    const swiperRef = useRef(null);
    useEffect(() => {
        register();
        const params = {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 5,
                stretch: 0,
                depth: 250,
                modifier: 2,
                slideShadows: false
            },
        };
        // Assign it to swiper element
        Object.assign(swiperRef.current, params);
        // initialize swiper
        swiperRef.current.initialize();
    }, []);
    const [ip, setIP] = useState('');
    //creating function to load ip address from the API
    const getIPData = async () => {
        const res = await Axios.get('https://geolocation-db.com/json/');
        setIP(res.data);
    }
    useEffect(() => {
        getIPData()
    }, [])
    // For Page
    let pageCurrent = usePathname();
    const [data, setData] = useState({
        email: "",
        pageURL: pageCurrent,
    });
    const handleDataChange = (e) => {
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
    const [formStatus, setFormStatus] = useState("Submit");
    const [errors, setErrors] = useState({});
    const formValidateHandle = () => {
        let errors = {};
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email.match(emailRegex)) {
            errors.email = 'Valid email is required';
        }
        return errors;
    };
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setFormStatus("Processing...");

        const errors = formValidateHandle();
        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            let headersList = {
                "Accept": "*/*",
                "Content-Type": "application/json"
            }

            let bodyContent = JSON.stringify(data);
            let reqOptions = {
                url: "/api/email",
                method: "POST",
                headers: headersList,
                data: bodyContent,
            }
            await Axios.request(reqOptions);
        } else {
            setFormStatus("Failed...");
        }

        if (Object.keys(errors).length === 0) {
            // For Date
            let newDate = new Date();
            let date = newDate.getDate();
            let month = newDate.getMonth() + 1;
            let year = newDate.getFullYear();
            // For Time
            let today = new Date();
            let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

            let headersList = {
                "Accept": "*/*",
                "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
                "Content-Type": "application/json"
            }

            let bodyContent = JSON.stringify({
                "IP": `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
                "Brand": "Creative Logo Designs",
                "Page": `${page}`,
                "Date": `${month < 10 ? `0${month}` : `${month}`}-${date}-${year}`,
                "Time": time,
                "JSON": data
            });
            let reqOptions = {
                url: "https://sheetdb.io/api/v1/1ownp6p7a9xpi",
                method: "POST",
                headers: headersList,
                data: bodyContent,
            }
            await Axios.request(reqOptions);
            window.location.href = "/thank-you";
        }
    }
    return (
        <section>
            <div className="pt-[150px] md:pt-[200px] lg:pb-[50px]">
                <div className="container">
                    <div className="flex items-center justify-between flex-wrap lg:flex-nowrap gap-x-5 gap-y-10 lg:gap-y-0">
                        <div className="basis-full lg:basis-1/2 relative">
                            <span className="text-[16px] text-red leading-none block font-bold mb-2">
                                {subtitle}
                            </span>
                            <h1 className="text-[25px] sm:text-[35px] xl:text-[45px] font-megat font-extrabold leading-tight text-black mb-5 hover:text-red transition-all">
                                {title}
                            </h1>
                            <p className="text-[14px] xl:text-[16px] leading-[24px] xl:leading-[26px] text-black font-normal mb-5 text-justify sm:text-left">
                                {desc}
                            </p>
                            <div className="mb-5">
                                <p className="text-[16px] lg:text-[20px] leading-tight text-black font-normal mb-5 text-justify sm:text-left">
                                    Fill The Form To <span className="text-red">Avail 70% Off</span>
                                </p>
                                <form autoComplete="off" spellCheck="false" className="flex gap-2 md:gap-5">
                                    <div className="basis-[70%]">
                                        <Input
                                            name="email"
                                            type="email"
                                            placeholder="Enter Your Email"
                                            border="border-2 border-gray-500 rounded-full"
                                            padding="px-3"
                                            color="text-black"
                                            handle={handleDataChange}
                                        />
                                    </div>
                                    <div className="basis-[30%]">
                                        <Button
                                            text={formStatus}
                                            border="border-none"
                                            color="text-white"
                                            bg="bg-red"
                                            handle={handleFormSubmit}
                                        />
                                    </div>
                                </form>
                            </div>
                            <Image src={Awards} alt="awards" priority={true} />
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
                            <Image src="/lp-one/hero/badge.png" alt="hero" proprity="true" className="absolute top-[-50px] right-[50px] hidden md:block" width={145} height={139} />
                        </div>
                        <div className="basis-full lg:basis-1/2 overflow-hidden">
                            <swiper-container
                                init={false}
                                ref={swiperRef}
                                autoplay-delay="2500"
                                autoplay-disable-on-interaction="false"
                            >
                                <swiper-slide class={`${styles.swiperSlides}`}>
                                    <Image src={One} alt="slides" className="w-full h-full" />
                                </swiper-slide>
                                <swiper-slide class={`${styles.swiperSlides}`}>
                                    <Image src={Two} alt="slides" className="w-full h-full" />
                                </swiper-slide>
                                <swiper-slide class={`${styles.swiperSlides}`}>
                                    <Image src={Three} alt="slides" className="w-full h-full" />
                                </swiper-slide>
                                <swiper-slide class={`${styles.swiperSlides}`}>
                                    <Image src={Four} alt="slides" className="w-full h-full" />
                                </swiper-slide>
                                <swiper-slide class={`${styles.swiperSlides}`}>
                                    <Image src={Five} alt="slides" className="w-full h-full" />
                                </swiper-slide>
                            </swiper-container>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
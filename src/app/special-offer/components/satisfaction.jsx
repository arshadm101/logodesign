"use client"
// Components
import Image from "next/image";
import { useEffect, useRef } from "react";
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

const Satisfaction = () => {
    let data = [
        {
            icon: {
                src: "/lp-two/hero/icons/1.png",
                width: 29,
                height: 42
            },
            title: "100% Original \n Designs"
        },
        {
            icon: {
                src: "/lp-two/hero/icons/2.png",
                width: 53,
                height: 37
            },
            title: "360 Design \n Consultancy"
        },
        {
            icon: {
                src: "/lp-two/hero/icons/3.png",
                width: 52,
                height: 39
            },
            title: "Complete Customer \n Satisfaction"
        },
        {
            icon: {
                src: "/lp-two/hero/icons/4.png",
                width: 47,
                height: 42
            },
            title: "100% Money-Back \n Guarantee"
        },
        {
            icon: {
                src: "/lp-two/hero/icons/5.png",
                width: 37,
                height: 42
            },
            title: "Market-Recognized \n Designers"
        }
    ]
    const swiperRef = useRef(null);
    useEffect(() => {
        register();
        const params = {
            slidesPerView: 5,
            spaceBetween: 20,
            breakpoints: {
                300: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                },
                1300: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
            },
        };
        // Assign it to swiper element
        Object.assign(swiperRef.current, params);
        // initialize swiper
        swiperRef.current.initialize();
    }, []);
    return (
        <section>
            <div className="py-[50px]">
                <div className="container">
                    <swiper-container ref={swiperRef}>
                        {
                            data && data.map((e, i) => (
                                <swiper-slide key={i}>
                                    <Image
                                        src={e.icon.src}
                                        width={e.icon.width}
                                        height={e.icon.height}
                                        alt="icons"
                                        className="block m-auto"
                                    />
                                    <h3
                                        dangerouslySetInnerHTML={{ __html: e.title.replace(/\n/g, "<br class='block' />") }}
                                        className="text-[16px] text-black leading-tight mt-3 text-center"
                                    />
                                </swiper-slide>
                            ))
                        }
                    </swiper-container>
                </div>
            </div>
        </section>
    )
}

export default Satisfaction;
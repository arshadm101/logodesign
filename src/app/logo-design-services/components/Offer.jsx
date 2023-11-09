// Next Components
"use client"
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
// Images
import Parterns from "public/logodesignnew/parterns_google.webp";
import beforeImg from "public/logodesignnew/form_before_tab.webp";
import formbefore from "public/logodesignnew/form_before.webp";
import formafter from "public/logodesignnew/form_after.webp";
import Modal from "./Model";
// Components
import CTA from "C/CTA";
import Form from "C/hero/form/form";

const Offer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
    const [isSliderActive, setIsSliderActive] = useState(true);
    const sliderSettings1 = {
        
         dots: true,
         arrows: false,
         infinite: true,
         speed: 500,
         slidesToShow: 4,
         slidesToScroll: 1,
         responsive: [
           {
             breakpoint: 1024,
             settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
             }
           },
           {
             breakpoint: 600,
             settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
             }
           },
           {
             breakpoint: 480,
             settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
             }
           }
         ]
       };
    useEffect(() => {
         // Check the window width and disable the slider on desktop
         const handleResize = () => {
           if (window.innerWidth >= 1024) {
             setIsSliderActive(false);
           } else {
             setIsSliderActive(true);
           }
         };
     
         // Initial check on component mount
         handleResize();
     
         // Listen for window resize events
         window.addEventListener('resize', handleResize);
     
         // Remove the event listener when the component unmounts
         return () => {
           window.removeEventListener('resize', handleResize);
         };
       }, []);
 

    return (
        <>
          <section className="font-poppins">
            <div className="">
                <div className="container md:max-w-6xl lg:max-w-6xl 2xl:max-w-7xl">
                    <div className="grid grid-flow-row grid-cols-1 items-center py-16 pb-0">
                        <div className="border-[#f73600] border-l-[13px] border-solid">
                           <div className="px-4">
                            <h4 className="text-3xl md:text-2xl lg:text-2xl xl:text-2xl leading-9 text-[#212529]">A WIDE RANGE OF</h4>
                            <h2 className="text-[30px] md:text-[50px] lg:text-[50px] xl:text-[50px] font-bold leading-tight text-[#212529]">Logo Designs We Offer</h2>
                            <p className="text-[#212529]">Select the most appropriate category of Logo Designs that compliments your brand.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="font-poppins py-5 cusmslide">
            <div className=" py-5">
                <div className="container md:max-w-6xl lg:max-w-6xl 2xl:max-w-7xl">
                    
                    <div className="grid grid-flow-row grid-cols-1 items-center gap-4">
                    <Slider {...sliderSettings1}>
                        <div className="bg-[#23bbc8] hover:bg-[#f73600] px-[23px] py-[23px] block">
                            <span className="flex">
                                <Image src="/logodesignnew/layer.webp" alt="T" className="w-[57px] h-[56px]" width={56} height={57}/>
                                <h4 className="text-[#fff] font-semibold text-[18px] pl-4">ICONIC <br className="block"/> LOGO</h4>
                               
                            </span>
                            <p className="text-[#fff] text-[13px] py-5">Get a perfect visual representation for your brand. Our designers shape an iconic logo that signifies your brand’s personality

</p>
                        </div>
                        <div className="bg-[#23bbc8] hover:bg-[#f73600] px-[23px] py-[23px] block">
                            <span className="flex ">
                                <Image src="/logodesignnew/a.webp" alt="T" className="w-[57px] h-[56px]" width={56} height={57}/>
                                <h4 className="text-[#fff] font-semibold text-[18px] pl-4">TYPOGRAPHIC <br className="block"/> LOGO</h4>
                               
                            </span>
                            <p className="text-[#fff] text-[13px] py-5">Get a perfect visual representation for your brand. Our designers shape an iconic logo that signifies your brand’s personality

</p>
                        </div>
                        <div className="bg-[#23bbc8] hover:bg-[#f73600] px-[23px] py-[23px] block">
                            <span className="flex ">
                                <Image src="/logodesignnew/design.webp" alt="T" className="w-[57px] h-[50px]" width={56} height={50}/>
                                <h4 className="text-[#fff] font-semibold text-[18px] pl-4">ILLUSTRATIVE <br className="block"/> LOGO</h4>
                               
                            </span>
                            <p className="text-[#fff] text-[13px] py-5">Get a perfect visual representation for your brand. Our designers shape an iconic logo that signifies your brand’s personality

</p>
                        </div>
                        <div className="bg-[#23bbc8] hover:bg-[#f73600] px-[23px] py-[23px] ">
                            <span className="flex ">
                                <Image src="/logodesignnew/illustration.webp" alt="T" className="w-[57px] h-[50px]" width={56} height={57}/>
                                <h4 className="text-[#fff] font-semibold text-[18px] pl-4">ANIMATED <br className="block" /> LOGO</h4>
                               
                            </span>
                            <p className="text-[#fff] text-[13px] py-5">Get a perfect visual representation for your brand. Our designers shape an iconic logo that signifies your brand’s personality

</p>
                        </div>
                        </Slider>
                    </div>
             
                </div>
            </div>
            <div className="text-center flex justify-center items-center py-5">
            <button onClick={openModal} type="button" className="bg-[#f73600] hover:bg-[#060f32] duration-300 ease-in-out uppercase text-[#fff] flex items-center gap-3 justify-center text-[16px] w-[280px] py-3 rounded-full transition-all"><span className="text-[16px] font-medium"> REQUEST A QUOTE</span></button>
            </div>
        </section>
        <hr />
        <Modal isOpen={isModalOpen} onClose={closeModal} />
        </>
    )
}

export default Offer;
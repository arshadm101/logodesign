"use client"
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Imports Components
import Image from "next/image";

// Images
import Parterns from "public/logodesignnew/parterns_google.webp";
import beforeImg from "public/logodesignnew/form_before_tab.webp";
import formbefore from "public/logodesignnew/form_before.webp";
import formafter from "public/logodesignnew/form_after.webp";
// Components
import CTA from "C/CTA";
import Form from "C/hero/form/form";

const Expe = () => {

     const [isSliderActive, setIsSliderActive] = useState(true);
     const sliderSettings = {
     
          dots: true,
          arrows: false,
          infinite: true,
          speed: 500,
          slidesToShow: 6,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
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
            if (window.innerWidth >= 1080) {
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
     <section className="font-poppins bg-[#f73600] text-white">
        <div className="">
            <div className="container md:max-w-6xl lg:max-w-6xl 2xl:max-w-7xl">
          
                <div className="grid grid-flow-row grid-cols-1  items-center gap-x-3 h-[115px] ">
                <Slider {...sliderSettings}> 
                   <span className="border-gray-100 border-r-[1px] py-4 h-[115px] text-[15px] pr-3"> <h4>More than a Decade of Experience in the Online Design Industry</h4></span>
                   <span className=" text-center border-gray-100 border-r-[1px] py-4 h-[115px]"> 
                        <h4 className="text-[27px] font-[700]">9000+</h4> <p>Wordmark Logos</p>
                   </span>
                   <span className="text-center border-gray-100 border-r-[1px] py-4 h-[115px]"> 
                        <h4 className="text-[27px] font-[700]">4800+</h4> <p className="px-2">Iconic/Symbolic Logos
</p>
                   </span>
                   <span className="text-center  border-gray-100 border-r-[1px] py-4 h-[115px]"> 
                        <h4 className="text-[27px] font-[700]">7000+</h4> <p>2D Logos</p>
                   </span>
                   <span className="text-center  border-gray-100 border-r-[1px] py-4 h-[115px]"> 
                        <h4 className="text-[27px] font-[700]">3700+</h4> <p>3D Logos</p>
                   </span>
                   <span className="text-center py-4 h-[115px]"> 
                        <h4 className="text-[27px] font-[700]">4200+</h4> <p>Illustrative Logos</p>
                   </span>
                   </Slider> 
                </div>
          
            </div>
        </div>
     </section>   
    )
}

export default Expe;
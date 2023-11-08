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

// Components
import CTA from "C/CTA";
import Form from "C/hero/form/form";

const Testimonial = () => {
    const [isSliderActive, setIsSliderActive] = useState(true);
   
    const sliderSettings1 = {
         dots: true,
         arrows: false,
         infinite: true,
         speed: 500,
         slidesToShow: 3,
         slidesToScroll: 1,
         responsive: [
           {
             breakpoint: 1024,
             settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
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
        <section className="font-poppins py-5 testimonials">
                <div className="container md:max-w-6xl lg:max-w-6xl">
                    <div class="grid grid-flow-row grid-cols-1 items-center gap-x-3 mb-10">
                        <h2 class="text-[30px] text-center pt-10 text-[#060f32] font-bold">Our Valued Clients Are Our Asset
</h2><p class="text-[16px] text-[#74767d] text-center">Our relationship with clients are more than just about the work that we do, they are a huge part of who we are. At The Creative Logo Design, we consider the success of our clients as a barometer of how successful we are. Have a look at some of our customer reviews below.

</p>
                   
                    </div>
                    <div className="grid grid-flow-row grid-cols-1 items-center gap-5 py-0 relative pb-10">
                      <Slider {...sliderSettings1}>
                        <div className="text-center bg-[#f7f7f7] p-4 relative top-[50px]">
                            <Image  src="/logodesignnew/client1.webp" width={134} height={118} className="mt-[-80px] w-[134px] h-[118px] mx-auto"/>
                            <div className="py-5">
                                    <p className="text-[#8e9095] text-[15px] font-roboto font-[400]"> 
                                        <em>The team at The Creative Logo Design is really marvelous, they have helped me improve my online business and my only contribution was to contact them. Thanks to The Creative Logo Design Team and Good Luck for future.
</em></p>
                                    <h4 className="font-semibold pt-5  pb-5 text-[18px] text-[#161e3f]">Sarah Parker</h4>
                            </div>
                        </div>
                        <div className="text-center bg-[#f7f7f7] p-4 relative top-[50px]">
                            <Image  src="/logodesignnew/client2.webp" width={134} height={118} className=" mt-[-80px] w-[134px] h-[118px] mx-auto"/>
                            <div className="py-5">
                                    <p className="text-[#8e9095] text-[15px] font-roboto font-[400]"> 
                                        <em>I’m impressed by The Creative Logo Design Design service and the designs they delivered to me. As it was my first experience with them, I did not know about their service at that time but now I recommend them to everyone.
</em></p><h4 className="font-semibold pt-5 pb-5 text-[18px] text-[#161e3f]">Mark Andrews
</h4>
                            </div>
                        </div>
                        <div className="text-center bg-[#f7f7f7] p-4 relative top-[50px]">
                            <Image  src="/logodesignnew/client3.webp" width={134} height={118} className="mt-[-80px] w-[134px] h-[118px] mx-auto"/>
                            <div className="py-5">
                                    <p className="text-[#8e9095] text-[15px] font-roboto font-[400]"> 
                                        <em>Most amazing company ever, very quick with my design, always happy to help and all round kind people. I for sure will always uses these guys, I will recommend them to everyone. thank you for everything The Creative Logo Design Design.</em>
                                    </p>
                                    <h4 className="font-semibold pt-5 pb-5 text-[18px] text-[#161e3f]">Julia Schmidt
</h4>
                            </div>
                        </div>
                      </Slider>
                    </div>
                </div>   
        </section>
        </>
    )
}

export default Testimonial;
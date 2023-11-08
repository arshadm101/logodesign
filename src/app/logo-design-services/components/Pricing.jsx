"use client"
import { useState } from "react";
// Imports Components
import Image from "next/image";
import Axios from "axios";
import CTA from "./CTA";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "./Model";

// Import Theme
// import theme from "../pricingAndPackages/theme";
// Import Images
// Import Packages

// import checkCircle from "media/packages/checkCircle.png";
import dataPackages from "../components/data";
import Link from "next/link";

const Pricing = ({content}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
    const packageData = dataPackages[content.key];

    if (!packageData || !packageData.packages || !Array.isArray(packageData.packages)) {
        return <div>No valid data found for the given key.</div>;
      }

    const sectionStyle3 = {
        backgroundImage: `url('../logodesignnew/packages_bg.webp')`, // Adjust the path to your image
        backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'top',
        // You can also set other background properties here, like background-color.
      };
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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
      const settings123 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
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
    return (
<>
            <section className="font-poppins" style={sectionStyle3}>
                <div className="py-[40px] md:py-[40px]">
                    <div className="container">
                        <div className="text-center mb-10">
                            <div className="text-center">
                                <div className="container md:max-w-6xl lg:max-w-6xl mb-5">
                                    <div className="grid grid-cols-1 items-center gap-x-3">
                                        <h2 className="text-[30px] text-center pt-10 text-[#fff] font-[700] mb-3">Logo Pricing Simplified</h2>
                                            <p className="text-[16px] text-[#fff] ">The Design Verse has proudly catered unique logo design solutions with affordable packages <br/> to meet your business requirements.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-10 md:pb-20">
                    <div className="container max-w-6xl">
                     <div className="customgap grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-x-4  gap-4 gap-y-4 text-[#060f32]">
                     <Slider {...settings}> {packageData.packages.map((e, i) => {
                                return <div key={i} className="bg-[#fff] transition-colors duration-100 ease-in-out hover:bg-[#060f32] hover:text-[#fff] rounded-xl px-3 border-2 border-[#f3f3f3]">
                                    <div className="text-center pt-3 pb-1 mt-5 font-semibold">
                                        <h4 className="font-poppins font-[13px] border-[#3fd6e4] border-2 w-[200px] mx-auto p-1">{e.name}</h4>
                                    </div>
                                    <div className="text-center py-2 px-5">
                                        <h4 className="font-roboto font-semibold text-xl">{e.namex}</h4>
                                    </div>
                                    <p className="text-sm font-normal leading-[24px] text-center">
                                        {e.note}
                                    </p>
                                    <h5 className="font-sans text-center font-bold text-[72px]">
                                   {e.discountedPrice} <sup className="opacity-50 text-4xl font-sans"><del>{e.originalPrice}</del></sup>
                                    </h5>
                                    <hr className="mx-3" />
                                    <div className="px-4 mt-10">
                                        <ul className="overflow-y-auto bgx h-52 mb-5">
                                            {e.list.map((e, i) => {
                                                return (
                                                    <li className="text-[15px] font-roboto font-normal flex items-start gap-2 leading-[24px] mb-3" key={i}> 
                                                        <span>{e}</span>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                    <div className="flex items-center justify-center mb-2">
     <button onClick={openModal} type="button" class="flex items-center gap-3 sm:w-[auto] px-10 justify-center h-[45px] text-[16px] rounded-[5px] font-medium transition-all bg_gr text-white text-lg py-4  uppercase"><span className="text-[16px]">Ordaer Now</span>
                    </button>

                                    </div>
                                    <div className="flex items-center justify-center mb-5">
     <Link href='javascript:$zopim.livechat.window.show();' class=" flex items-center gap-3 sm:w-[auto] px-5 justify-center h-[40px] text-[16px] font-medium transition-all text-[#23bbc8]  text-lg py-1 rounded-sm"><span className="text-md font-[400]">Chat With Us</span>
                    </Link>

                                    </div>
                                   
                                </div>
                            })}      
                      </Slider>    
                        </div>
                    </div>
                </div>
                <div className="pb-10 md:pb-20 ">
                    <div className="container max-w-6xl relative">
                        <div className="bg-[#0c1623]  px-7 pb-10 text-[#fff] relative">
                        <div className="absolute content-[''] top-0 left-[0px]">
                                    <Image src="/logodesignnew/limiteds.webp" width={100} height={100} alt="pkgbanner" className="h-[150px] w-[150px]"/>
                        </div>

                        <Slider {...settings123}>
                               {/* 1 */}
                               <div className="">
                                <div className="customgap block flex-row gap-x-4 gap-4 gap-y-4 md:flex lg:flex xl:flex">
                                    <div className="basis-[100%] md:basis-[70%] lg:basis-[70%] xl:basis-[70%]">
                                    <h2 className="py-10 px-10 text-center font-[700] text-[25px] md:text-[50px] lg:text-[50px] xl:text-[50px]">Logo Infinity</h2>
                                        <div className="block justify-between md:flex xl:flex lg:flex">
                                            <ul className="py-5 combolist">
                                                    <li> Unlimited Original Logo Concepts</li>
                                                    <li> 8 Dedicated Logo Designer (Industry Specific)</li>
                                                    <li> Unlimited Revisions</li>
                                                    <li> 3 Page Basic Website</li>
                                                    <li> Stationery Design (Business Card, Letterhead, Envelope)</li>
                                                    <li> Brand Book</li>
                                                    <li> 500 Business Cards </li>
                                                    <li> 500 Letterheads</li>
                                                    <li> Email Signature Design</li>
                                                    <li> Social Media Designs (Facebook, Twitter, Instagram)</li>
                                            </ul>
                                            <ul className="combolist py-5">
                                                    <li> 2 Sided Flyer OR Bi-Fold Brochure Design</li>
                                                    <li> With Grey Scale Format</li>
                                                    <li> Free Icon Design</li>
                                                    <li> Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG</li>
                                                    <li> 24 - 48 Hours Turn Around Time</li>
                                                    <li class="features">MORE FEATURES</li>
                                                    <li> 100% Satisfaction</li>
                                                    <li> 100% Ownership Rights</li>
                                                    <li> Money Back Guarantee</li>
                                                    <li> Dedicated Account Manager</li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <div className="py-5">
                                        
                                    </div> */}
                                    <div className="py-10 text-center">
                                    <div className="">
                                        <h3 class="del">
                                            <span class="inner"></span>
                                            <del className="text-[40px] font-semibold border-red-500">$2663</del>
                                        </h3>
                                        <h1 class="font-semibold text-[2em]">$799</h1>
                                        <button onClick={openModal} type="button" class="bg-[#fdc400] hover:bg-[#f73600] duration-300 ease-in-out  flex items-center mx-auto gap-3 justify-center h-[45px] text-[13px]  rounded-full transition-all w-[250px] xl:w-[160px] lg:w-[160px] md:w-[160px]"><span class="text-[14px] font-medium "> Order Now</span></button>
                                        <div className="mx-auto hidden text-center items-center justify-center mt-5 xl:flex lg:flex">
                                            <Image src="/logodesignnew/awards.webp" alt="awards" width={257} height={470} className="h-[auto] w-[257px]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 2 */}
                            <div className="">
                                <div className="customgap block flex-row gap-x-4 gap-4 gap-y-4 md:flex lg:flex xl:flex">
                                    <div className="basis-[100%] md:basis-[70%] lg:basis-[70%] xl:basis-[70%]">
                                    <h2 className="py-10 px-10 text-center font-[700] text-[25px] md:text-[50px] lg:text-[50px] xl:text-[50px]">Logo Combo</h2>
                                        <div className="block justify-between md:flex xl:flex lg:flex">
                                            <ul className="py-5 combolist">
                                                    <li> Unlimited Original Logo Concepts</li>
                                                    <li> 8 Dedicated Logo Designer (Industry Specific)</li>
                                                    <li> Unlimited Revisions</li>
                                                    <li> 3 Page Basic Website</li>
                                                    <li> Stationery Design (Business Card, Letterhead, Envelope)</li>
                                                    <li> Brand Book</li>
                                                    <li> 500 Business Cards </li>
                                                    <li> 500 Letterheads</li>
                                                    <li> Email Signature Design</li>
                                                    <li> Social Media Designs (Facebook, Twitter, Instagram)</li>
                                            </ul>
                                            <ul className="combolist py-5">
                                                    <li> 2 Sided Flyer OR Bi-Fold Brochure Design</li>
                                                    <li> With Grey Scale Format</li>
                                                    <li> Free Icon Design</li>
                                                    <li> Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG</li>
                                                    <li> 24 - 48 Hours Turn Around Time</li>
                                                    <li class="features">MORE FEATURES</li>
                                                    <li> 100% Satisfaction</li>
                                                    <li> 100% Ownership Rights</li>
                                                    <li> Money Back Guarantee</li>
                                                    <li> Dedicated Account Manager</li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <div className="py-5">
                                        
                                    </div> */}
                                    <div className="py-10 text-center">
                                    <div className="">
                                        <h3 class="del">
                                            <span class="inner"></span>
                                            <del className="text-[40px] font-semibold ">$3330</del>
                                        </h3>
                                        <h1 class="font-semibold text-[2em]">$999</h1>
                                        <button onClick={openModal} type="button" class="bg-[#fdc400] hover:bg-[#f73600] duration-300 ease-in-out flex items-center mx-auto gap-3 w-[150px] xl:[160px] lg:w-[160px] md:w-[160px] justify-center h-[45px] text-[13px]  rounded-full transition-all"><span class="text-[14px] font-medium"> Order Now</span></button>
                                        <div className="mx-auto hidden text-center items-center justify-center mt-5 xl:flex lg:flex">
                                            <Image src="/logodesignnew/awards.webp" alt="awards" width={257} height={470} className="h-[auto] w-[257px]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Slider>  
                        </div>
                    </div>
                </div>
            </section>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
}

export default Pricing;
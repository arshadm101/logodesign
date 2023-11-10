"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "next/image";
import Link from "next/link";
import styles from '../logocombo/logocombo.module.css'
import logo1 from 'media/new-lp/logocombo/packagecombo1.png'
import logo2 from 'media/new-lp/logocombo/packagecombo2.png'
import { useState } from "react";
import Modal from "../modal/modal";



const Logocombo = () => {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: function (i) {
          return (
            <div className="custom-dot">
              
            </div>
          );
        },
      };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <>
            <section className={`${styles.logocombo} bg-[#fbfbfb] font-poppins py-[80px] newloop`}>
                <div class="container mx-auto">
                    <div class="grid grid-cols-1">
                        <Slider {...settings} className="newtown">
                            <div>
                                <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 sm:gap-10 gap-10">
                                    <div>
                                        <h2 className="lg:text-[30px] md:text-[30px] sm:text-[30px] text-[23px] font-[700] text-[#ffff] capitalize">Logo Infinite</h2>
                                        <h4 className="text-[20px] font-[600] text-[#ffff] mt-4 mb-5">Crafting your brand to completion!</h4>
                                        <div className="flex lg:gap-5 md:gap-5 lg:flex-row md:flex-row sm:flex-col flex-col sm:gap-0 gap-0">
                                            <ul class="">
                                                <li className="sm:text-[13px] text-[15px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Unlimited Original Logo Concepts</li>
                                                <li className="sm:text-[13px] text-[15px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> 8 Dedicated Logo Designer (Industry Specific)</li>
                                                <li className="sm:text-[13px] text-[15px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Unlimited Revisions</li>
                                                <li className="sm:text-[13px] text-[15px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> 3 Page Basic Website</li>
                                                <li className="sm:text-[13px] text-[15px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Stationery Design (Business Card, Letterhead, Envelope)</li>
                                                <li className="sm:text-[13px] text-[15px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Brand Book</li>
                                                <li className="sm:text-[13px] text-[15px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> 500 Business Cards </li>
                                                <li className="sm:text-[13px] text-[15px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> 500 Letterheads</li>
                                                <li className="sm:text-[13px] text-[15px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Email Signature Design</li>
                                            </ul>
                                            <ul>
                                                <li className="sm:text-[13px] text-[15px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Social Media Designs (Facebook, Twitter, Instagram)</li>
                                                <li className="sm:text-[13px] text-[15px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> 2 Sided Flyer OR Bi-Fold Brochure Design</li>
                                                <li className="sm:text-[13px] text-[15px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> With Grey Scale Format</li>
                                                <li className="sm:text-[13px] text-[15px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Free Icon Design</li>
                                                <li className="sm:text-[13px] text-[15px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG</li>
                                                <li className="sm:text-[13px] text-[15px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> 24 - 48 Hours Turn Around Time</li>
                                                <li className="sm:text-[13px] text-[15px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> MORE FEATURES</li>
                                                <li className="sm:text-[13px] text-[15px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> 100% Satisfaction</li>
                                                <li className="sm:text-[13px] text-[15px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> 100% Ownership Rights</li>
                                                <li className="sm:text-[13px] text-[15px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Money Back Guarantee</li>
                                                <li className="sm:text-[13px] text-[15px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Dedicated Account Manager</li>
                                            </ul>
                                        </div>


                                    </div>
                                    <div className="flex flex-col items-center">
                                        <Image src={logo1} />
                                        <div className="md:mt-0 sm:mt-5 mt-10">
                                            <Link onClick={openModal} class="bg-[#dd1920] text-[#fff] py-4 px-14 md:rounded-[10px] text-[16px] font-[400] block text-center" href='#'>Order Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                            <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 sm:gap-10 gap-10">
                                    <div>
                                        <h2 className="lg:text-[30px] md:text-[30px] sm:text-[30px] text-[23px] font-[700] text-[#ffff] capitalize">Logo Combo</h2>
                                        <h4 className="text-[20px] font-[600] text-[#ffff] mt-4 mb-5">Crafting your brand to completion!
                                        </h4>
                                        <div className="flex lg:gap-5 md:gap-5 lg:flex-row md:flex-row sm:flex-col flex-col sm:gap-0 gap-0">
                                            <ul class="">

                                                <li className="sm:text-[13px] text-[15px]  font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]">Unlimited Original Logo Concepts </li>
                                                <li className="sm:text-[13px] text-[15px]  font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]">12 Dedicated Logo Designer (Industry Specific) </li>
                                                <li className="sm:text-[13px] text-[15px]  font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]">Unlimited Revisions </li>
                                                <li className="sm:text-[13px] text-[15px]  font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]">7 Page Informative Website </li>
                                                <li className="sm:text-[13px] text-[15px]  font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]">Stationery Design (Business Card, Letterhead, Envelope) </li>
                                                <li className="sm:text-[13px] text-[15px]  font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]">Brand Book</li>
                                                <li className="sm:text-[13px] text-[15px]  font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]">500 Business Cards</li>
                                                <li className="sm:text-[13px] text-[15px]  font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]">500 Letterheads</li>
                                                <li className="sm:text-[13px] text-[15px]  font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]">Email Signature Design</li>
                                            </ul>
                                            <ul>
                                                <li className="sm:text-[13px] text-[15px]  font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]">Social Media Designs (Facebook, Twitter, Instagram)</li>
                                                <li className="sm:text-[13px] text-[15px]  font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]">2 Sided Flyer OR Bi-Fold Brochure Design</li>
                                                <li className="sm:text-[13px] text-[15px]  font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]">With Grey Scale Format </li>
                                                <li className="sm:text-[13px] text-[15px]  font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]">Free Icon Design </li>
                                                <li className="sm:text-[13px] text-[15px]  font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]">Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG</li>
                                                <li className="sm:text-[13px] text-[15px]  font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]">24 - 48 Hours Turn Around Time</li>
                                                <li className="sm:text-[13px] text-[15px]  font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"><span>MORE FEATURES</span></li>
                                                <li className="sm:text-[13px] text-[15px]  font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]">100% Satisfaction </li>
                                                <li className="sm:text-[13px] text-[15px]  font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]">100% Ownership Rights </li>
                                                <li className="sm:text-[13px] text-[15px]  font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]">Money Back Guarantee </li>
                                                <li className="sm:text-[13px] text-[15px]  font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]">Dedicated Account Manager </li>

                                            </ul>
                                        </div>


                                    </div>
                                    <div className="flex flex-col items-center">
                                        <Image src={logo2} />
                                        <div className="md:mt-0 sm:mt-5 mt-10">
                                            <Link onClick={openModal} class="bg-[#dd1920] text-[#fff] py-4 px-14 md:rounded-[10px] text-[16px] font-[400] block text-center" href='#'>Order Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         
                        </Slider>
                    </div>


                </div>
            </section>

            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </>
    )
}

export default Logocombo;
"use client"
// Import Components
import { Collapse, IconButton, MobileNav, Navbar } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button/button";
import { usePathname } from "next/navigation";
import CTA from "./CTA";
// Import Images
import logo from "media/logo.png";
import logow from "media/logodesignnew/logo-w.png"
import logoDesign from "media/menu/logoDesign.png";
import creativeCopywriting from "media/menu/creativeCopywriting.png";
import digitalMarketing from "media/menu/digitalMarketing.png";
import ecommerce from "media/menu/ecommerce.png";
import illustrationDesign from "media/menu/illustrationDesign.png";
import marketingCollateral from "media/menu/marketingCollateral.png";
import mobileApplication from "media/menu/mobileApplication.png";
import motionGraphics from "media/menu/motionGraphics.png";
import seoServices from "media/menu/seoServices.png";
import websiteDevelopment from "media/menu/websiteDevelopment.png";
import down from "media/menu/down.png";
import { useState } from "react";
import Modal from "./Model";

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    const [openNav, setOpenNav] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(false);
  
    const router = usePathname();
    const navList = (
        <ul className="font-roboto sm:block md:block lg:hidden  xl:hidden lg:items-center gap-6 lg:h-full rounded-2xl bg-black lg:bg-transparent lg:rounded-none py-5 lg:py-0 px-5 lg:px-0">
                      
                      <Link href='javascript:$zopim.livechat.window.show();' className="flex items-center mx-auto gap-x-2 sm:w-[150px] justify-center h-[45px] text-[18px] font-medium rounded-full transition-all" >
                   <Image src="/logodesignnew/chat.svg" alt="Messgae" width={20} height={21} />
                    <span className="text-sm xl:text-lg font-medium"> Live Chat</span>
                  
            </Link>
                    <Link href='tel:8556666675' className="flex items-center gap-x-2 sm:w-[290px] mx-auto justify-center h-[45px] text-[18px] font-medium rounded-full transition-all" >
                    <Image src="/logodesignnew/call.png" alt="call"  width={20} height={21} />
                        <span className="text-sm xl:text-lg font-medium"> Call Us: (855) 251-3020</span>
                    
                    </Link>
                    <button  type="button" onClick={openModal} className="bg-[#f73600] hover:bg-[#fdc400] duration-300 ease-in-out flex items-center gap-3 w-full justify-center h-[45px] text-[13px] rounded-full transition-all" >
                        <span className="text-[14px] font-medium" > View Pricing</span>
                    </button> 
        </ul>
    );
    return (
        <>
        <header className="">
            <Navbar className="left-0 right-0 font-roboto px-0 py-0 absolute top-0 z-[40] rounded-none bg-transparent shadow-none backdrop-saturate-100 backdrop-blur-none border-none max-w-screen-1xl">
                <div className="container max-w-6xl mx-auto  2xl:max-w-7xl">
                    <div className="flex items-center h-24 font-roboto">
                        <Link href="/">
                            <Image src={logow} alt="logo" />
                        </Link>
                        <div className="hidden lg:flex xl:flex ml-auto xl:m-auto h-full items-center">
                            {navList}
                        </div>
                        <div className="hidden lg:flex xl:flex items-center gap-0 text-white">
                            <Link href='javascript:$zopim.livechat.window.show();' className="flex items-center gap-x-2 sm:w-[140px] justify-center h-[45px] text-[18px] font-medium rounded-full transition-all" >
                   <Image src="/logodesignnew/chat.svg" alt="Messgae" width={20} height={21} />
                    <span className="text-sm xl:text-lg font-medium "> Live Chat</span>
                  
                </Link>
                <span className="w-[1px] h-auto bg-white text-transparent">|</span>
                    <Link href='tel:8556666675' className="flex items-center gap-x-2 sm:w-[270px] justify-center h-[45px] text-[18px] font-medium rounded-full transition-all pr-6" >
                    <Image src="/logodesignnew/call.png" alt="call"  width={20} height={21} />
                        <span className="text-sm xl:text-lg font-medium "> Call Us: (855) 666-6675</span>
                    
                    </Link>
                    <button  type="button" onClick={openModal} className="bg-[#f73600] hover:bg-[#fdc400] duration-300 ease-in-out flex items-center gap-3 sm:w-[150px] justify-center h-[45px] text-[13px] rounded-full transition-all" >
                        <span className="text-[14px] font-medium"  > View Pricing</span>
                    </button>
                <div>
                    </div>
                        </div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)} >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#fff"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                        fill="#fff"
                                        color="#fff"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="#fff"
                                    stroke="currentColor"
                                    strokeWidth={2} >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="#fff"
                                        d="M4 6h16M4 12h16M4 18h16"
                                        color="#fff"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <Collapse open={openNav} className="block xl:hidden">
                    <div className="container mx-auto">
                        {navList}
                    </div>
                </Collapse>
            </Navbar>
        </header>

        <Modal isOpen={isModalOpen} onClose={closeModal} />

       
</>

    );
}

export default Header;
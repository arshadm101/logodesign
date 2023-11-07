"use client"
// Import Components
import { Navbar } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import CTA from "C/CTA";
// Import Images
import logo from "media/logo-light.png";

const Header = () => {
    return (
        <header>
            <Navbar className="max-w-none px-0 py-0 absolute top-0 left-0 z-[9999] rounded-none bg-transparent shadow-none backdrop-saturate-100 backdrop-blur-none border-none">
                <div className="container">
                    <div className="flex items-center h-24 justify-center md:justify-between">
                        <Link href="/">
                            <Image src={logo} alt="logo" />
                        </Link>
                        <div className="hidden md:flex items-center gap-3">
                            <CTA
                                text="Start Live Chat"
                                href="javascript:$zopim.livechat.window.show();"
                                bg="bg-light-yellow"
                                icon="/icons/chat.svg"
                                css="hover:bg-black"
                            />
                            <CTA
                                text="(855) 666-6675"
                                href="tel:8556666675"
                                bg="bg-[#ea0122]"
                                css="hover:bg-light-yellow"
                            />
                        </div>
                    </div>
                </div>
            </Navbar>
        </header>
    );
}

export default Header;
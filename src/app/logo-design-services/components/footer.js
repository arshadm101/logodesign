"use client"
// Imports Components
import Image from "next/image";
import Link from "next/link";
// import Sidebuttons from "";
import { usePathname } from "next/navigation";
// Import Images
import logo from "media/logo-light.png";
import mapmarker from "media/mapmarker.svg";
import telephone from "media/telephone.svg";
import envelope from "media/envelope.svg";
import facebook from "media/social/facebook.svg";
import twitter from "media/social/twitter.svg";
import instagram from "media/social/instagram.svg";
import linkedin from "media/social/linkedin.svg";
import cards from "media/footer/cards.svg";
import certification from "media/footer/certification.svg";

const Footer = () => {
    const path = usePathname();
    const quickLinks = [
        {
            text: "Home",
            link: "/"
        },
        {
            text: "About",
            link: "/about-us"
        },
        {
            text: "Blogs",
            link: "/contact-us"
        },
        {
            text: "Pricing/Packages",
            link: "/pricing"
        },
        {
            text: "Contact",
            link: "/contact-us"
        },
        {
            text: "Privacy Policy",
            link: "/privacy-policy"
        },
        {
            text: "Terms & Conditions",
            link: "/terms-and-conditions"
        },
    ];
    const servicesLinks = [
        {
            text: "Logo Design",
            link: "/logo-design-company"
        },
        {
            text: "Creative Copywriting",
            link: "/creative-copywriting-company"
        },

        {
            text: "Digital Marketing",
            link: "/digital-marketing-company"
        },

        {
            text: "Ecommerce Web Solutions",
            link: "/ecommerce-solutions"
        },

        {
            text: "Website Development",
            link: "/website-development-company"
        },
        {
            text: "Motion Graphics",
            link: "/motion-graphic-design-company"
        },
        {
            text: "Illustration Design",
            link: "/illustration-design-company"
        },
        {
            text: "Marketing Collateral",
            link: "/marketing-collateral-company"
        },
        {
            text: "App Design",
            link: "/mobile-app-design-company"
        },
        {
            text: "SEO Services",
            link: "/seo-company"
        },
    ];
    const contactLinks = [
        {
            text: "One World Trade Center, Suite 8500, New York, New York, 10007, United States",
            link: "/contact-us",
            icon: mapmarker
        },
        {
            text: "(347) 607-3636",
            link: "tel:3476073636",
            icon: telephone
        },
        {
            text: "info@creativelogodesigns.io",
            link: "mailto:info@creativelogodesigns.io",
            icon: envelope
        },
    ];
    const socialLinks = [
        {
            icon: facebook,
            link: "/contact-us"
        },
        {
            icon: twitter,
            link: "/contact-us"
        },
        {
            icon: instagram,
            link: "/contact-us"
        },
        {
            icon: linkedin,
            link: "/contact-us"
        },
    ]
    return (
        <footer className="font-poppins">
            <div className="bg-[#060f32] text-white pt-10 pb-5">
                <div className="container max-w-6xl">
                    <div className="grid grid-flow-row lg:grid-cols-3 xl:grid-cols-3 items-center gap-x-3 mb-7 pb-4 border-[#aeaeae] border-b-[2px] border-solid grid-cols-1 text-center justify-center">
                        <div className="text-[14px] font-semibold px-8">
                           <Link href="/terms-and-conditions/" className="px-2 hover:text-[#f73600]">Terms & Conditions</Link> <span className="h-[50px] w-1 border-solid border-l-2 border-[#fff]"></span> <Link href="/privacy-policy/"  className="px-3 hover:text-[#f73600]">Privacy Policy</Link>
                        </div>
                        <div className="text-white text-[12px] font-roboto">
                            <p>Copyright © 2023 The Creative Logo Designs | All rights reserved.</p>
                        </div>
                        <div className="">
                            <Image src="/logodesignnew/footer-card-icon.webp" height={77} width={334} className="w-[334] h-[77] mx-auto"/>
                        </div>
                    </div>
                    <div className="text-center border-top-2">
                        <h4 className="font-semibold text-[18px] pb-3 text-[#f73600]">Disclaimer:
</h4>
                        <p className="text-[11px] font-roboto">The logo, name and graphics of The Creative Logo Design and its products & services are the trademarks of The Creative Logo Design. All other company names, brand names, trademarks and logos mentioned on this website are the property of their respective owners and do not constitute or imply endorsement, sponsorship or recommendation thereof by The Creative Logo Design vand do not constitute or imply endorsement, sponsorship or recommendation of The Creative Logo Design by the respective trademark owner.

</p>
                    </div>
                       
                </div>
            </div>
            {/* <Sidebuttons /> */}
        </footer>
    );
}

export default Footer;
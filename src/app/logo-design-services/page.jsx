// Import Page Components
import Hero from "./components/hero";

import Experience from "../logo-design-services/components/experience";
import Folio from "../logo-design-services/components/Folio";
import Pricing from "../logo-design-services/components/Pricing";
import Offer from "./components/Offer";
import Testimonials from "./components/Testimonial";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
import Letstalk from "@/components/letstalk/letstalk";
import Packages from "@/components/packages/packages";
import Header from "./components/header";
import Footer from "./components/footer";
import Script from "next/script";


const Page = ({content}) => {
    // Array for Hero Component Props
    const hero = {
        page: "logoDesign",
        subtitle: "Activate Your Coupon Now",
        title: "Custom",
        desc: "At Creative Logo Designs, we employ the best logo designers and illustrators to make creative logos for big companies and small businesses. As an affordable logo design company, we promise to create a logo that delivers impressive outcomes for your brand.",
        img: {
            src: "/logo-design/hero/hero.png",
            width: "508",
            height: "818",
        },
        form: true
    };
    // Array for Small Banner Component Props
    const smallbanner = {
        page: "logoDesign",
        title: "Let us develop a responsive website to help you attract more visitors",
        desc: "Our professional web development team is at your service, dedicated to design and develop dynamic websites that urges visitors to take your desired action on the website.",
        img: {
            src: "/logo-design/smallBanner.png",
            width: "565",
            height: "428",
        },
    };
    // Array for Portfolio Component Props
    const portfolio = {
        title: "",
        desc: "",
        tabs: [
            {
                value: "combination",
                label: "Combination",
                images: [
                    "/portfolios/logo-design/combination/1.png",
                    "/portfolios/logo-design/combination/2.png",
                    "/portfolios/logo-design/combination/3.png",
                    "/portfolios/logo-design/combination/4.png",
                    "/portfolios/logo-design/emblem/1.png",
                    "/portfolios/logo-design/emblem/2.png",
                    "/portfolios/logo-design/emblem/3.png",
                    "/portfolios/logo-design/emblem/4.png",
                    "/portfolios/logo-design/mascot/1.png",
                    "/portfolios/logo-design/mascot/2.png",
                    "/portfolios/logo-design/mascot/3.png",
                    "/portfolios/logo-design/mascot/4.png",
                    "/portfolios/logo-design/typography/1.png",
                    "/portfolios/logo-design/typography/2.png",
                    "/portfolios/logo-design/typography/3.png",
                    "/portfolios/logo-design/typography/4.png",
                ],
            },
            // {
            //     value: "emblem",
            //     label: "Emblem",
            //     images: [
            //         "/portfolios/logo-design/emblem/1.png",
            //         "/portfolios/logo-design/emblem/2.png",
            //         "/portfolios/logo-design/emblem/3.png",
            //         "/portfolios/logo-design/emblem/4.png",
            //         "/portfolios/logo-design/emblem/5.png",
            //         "/portfolios/logo-design/emblem/6.png",
            //         "/portfolios/logo-design/emblem/7.png",
            //         "/portfolios/logo-design/emblem/8.png",
            //     ],
            // },
            // {
            //     value: "mascot",
            //     label: "Mascot",
            //     images: [
            //         "/portfolios/logo-design/mascot/1.png",
            //         "/portfolios/logo-design/mascot/2.png",
            //         "/portfolios/logo-design/mascot/3.png",
            //         "/portfolios/logo-design/mascot/4.png",
            //         "/portfolios/logo-design/mascot/5.png",
            //         "/portfolios/logo-design/mascot/6.png",
            //         "/portfolios/logo-design/mascot/7.png",
            //         "/portfolios/logo-design/mascot/8.png",
            //     ],
            // },
            // {
            //     value: "typography",
            //     label: "Typography",
            //     images: [
            //         "/portfolios/logo-design/typography/1.png",
            //         "/portfolios/logo-design/typography/2.png",
            //         "/portfolios/logo-design/typography/3.png",
            //         "/portfolios/logo-design/typography/4.png",
            //         "/portfolios/logo-design/typography/5.png",
            //         "/portfolios/logo-design/typography/6.png",
            //         "/portfolios/logo-design/typography/7.png",
            //         "/portfolios/logo-design/typography/8.png",
            //     ],
            // }
        ]
    };
    // Array for Packages Component Props
    const packages = {
        subtitle: "Logo Design Packages",
        title: "Gain the Upper Hand with <span class='text-red'>Our Creative Logo</span> Designs",
        desc: "Our top logo design service packages are thoughtfully customized to match your brand's voice and budget, giving you a competitive edge in the market.",
        key: 0,
        name: "logo-design"
    }
    // Array for Letstalk Component Props
    const letstalk = {
        title: "Design Consultation",
        desc: "Contact us for a free consultation, and let's design your captivating logo, website, and mobile app together!"
    }
    // Array for Reviews Component Props
    const reviews = [
        {
            message: "Creative Logo Designs created a special and eye-catching custom logo design that perfectly shows what our financial consulting firm is about. Our team and clients love it, thanks to their amazing logo design skills.",
            name: "Jennifer Mitchell",
            jd: "Senior Financial Advisor",
            profile: "/logo-design/reviews/1.png"
        },
        {
            message: "Their UI/UX web design service has significantly improved the visual appeal and functionality of our ecommerce website across devices. The user engagement on our website has increased a lot as well. Creative Logo Designs is the best web design company I have ever worked with.",
            name: "Sarah Johnson",
            jd: "E-commerce Manager",
            profile: "/logo-design/reviews/2.png"
        },
        {
            message: "Hiring Creative Logo Designs for our tech startup web design and development has been one of the best decisions. It's not just about aesthetics; the functionality and user experience they delivered are nothing short of exceptional.",
            name: "Emily Parker",
            jd: "Co-founder",
            profile: "/logo-design/reviews/3.png"
        },

    ]
    return (
        <>
            <main>
                <Header />
                <Hero content={hero} />
                <Experience></Experience>
                <Folio content={portfolio} />
                <Pricing content={packages}></Pricing>
                <Offer></Offer>
                <Testimonials></Testimonials>
                <Footer />
                <Script id="general-schema" type="application/ld+json">
                    {`
                        {
                            "@context": "http://schema.org/",
                            "@type": "Product",
                            "name": "Custom Logo Design Services By Creative Logo Designs",
                            "description": "Creative Logo Designs is a leading Custom Logo Design Company. Our skilled designers create impactful logos to elevate your brand. Partner with us for standout branding.",
                            "brand": {
                                "@type": "brand",
                                "name": "Creative Logo Designs"
                            },
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.9",
                                "ratingCount": "450"
                            }
                        }
                    `}
                </Script>
            </main>
        </>
    );
}

export default Page;
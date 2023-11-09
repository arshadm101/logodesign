
"use client"
import Image from "next/image";
// Images
import Parterns from "public/logodesignnew/parterns_google.webp";
import beforeImg from "public/logodesignnew/form_before_tab.webp";
import formbefore from "public/logodesignnew/form_before.webp";
import formafter from "public/logodesignnew/form_after.webp";
import Timer from '../components/Counter';
// import CountdownTimer from "./CountdownTimer";
import { useState, useEffect } from 'react';
import Axios from "axios";
import { usePathname } from "next/navigation";
// Components
import CTA from "C/CTA";
import Form from "C/hero/form/form";

const Hero = ({ content }) => {
    const [ip, setIP] = useState('');
    //creating function to load ip address from the API
    const getIPData = async () => {
        const res = await Axios.get('https://geolocation-db.com/json/');
        setIP(res.data);
    }
    useEffect(() => {
        getIPData()
    }, [])
    // For Page
    let page = usePathname();
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        services: "Not Selected",
        message: "",
        pageURL: page,
    });
    const handleDataChange = (e) => {
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
    const [formStatus, setFormStatus] = useState("Get A Free Quote");
    const [errors, setErrors] = useState({});
    const [isDisabled, setIsDisabled] = useState(false);
    const formValidateHandle = () => {
        let errors = {};
        // Name validation
        if (!data.name.trim()) {
            errors.name = 'Name is required';
        }
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email.match(emailRegex)) {
            errors.email = 'Valid email is required';
        }
        // Phone validation
        const phoneRegex = /[0-9]/i;
        if (!data.phone.match(phoneRegex)) {
            errors.phone = 'Valid phone is required';
        }
        return errors;
    };
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsDisabled(true);
        setFormStatus("Processing...");

        const errors = formValidateHandle();
        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            let headersList = {
                "Accept": "*/*",
                "Content-Type": "application/json"
            }

            let bodyContent = JSON.stringify(data);
            let reqOptions = {
                url: "/api/email",
                method: "POST",
                headers: headersList,
                data: bodyContent,
            }
            await Axios.request(reqOptions);
        } else {
            setFormStatus("Failed...");
        }

        if (Object.keys(errors).length === 0) {
            // For Date
            let newDate = new Date();
            let date = newDate.getDate();
            let month = newDate.getMonth() + 1;
            let year = newDate.getFullYear();
            // For Time
            let today = new Date();
            let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

            let headersList = {
                "Accept": "*/*",
                "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
                "Content-Type": "application/json"
            }

            let bodyContent = JSON.stringify({
                "IP": `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
                "Brand": "Creative Logo Designs",
                "Page": `${page}`,
                "Date": `${month < 10 ? `0${month}` : `${month}`}-${date}-${year}`,
                "Time": time,
                "JSON": data
            });
            let reqOptions = {
                url: "https://sheetdb.io/api/v1/1ownp6p7a9xpi",
                method: "POST",
                headers: headersList,
                data: bodyContent,
            }
            await Axios.request(reqOptions);
            window.location.href = "/thank-you";
        }
    }

    const { subtitle, title, desc, img, form } = content;

    const sectionStyle = {
        backgroundImage: `url('../logodesignnew/main_banner_res.webp')`, // Adjust the path to your image
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        // You can also set other background properties here, like background-color.
      };

      const sectionStyle1 = {
        backgroundImage: `url('../logodesignnew/form_after.webp')`, // Adjust the path to your image
        // You can also set other background properties here, like background-color.
      };

   
    return (
    <section style={sectionStyle} className="font-poppins text-white pb-12">
        <div className="pt-[120px]">
            <div className="container md:max-w-6xl lg:max-w-6xl xl:max-w-6xl 2xl:max-w-7xl">
                    
                <div className="block pt-5 gap-x-5 md:flex lg:flex xl:flex mx-auto text-center md:text-left xl:text-left lg:text-left ">
                   
                    <div className="basis-[100%] sm:basis-[100%] md:basis-[40%] lg:basis-[40%] xl:basis-[40%]">
                        <Timer  className="mt-10 justify-center xl:justify-left lg:justify-left md:justify-left"></Timer>
                     
                        <h4 className="text-[22px] leading-8 font-samibold pt-3  md:text-[30px] lg:text-[30px] xl:text-[30px]">Activate Your Coupon <br /> Now</h4>
                        <div className="block mx-auto justify-center items-center md:flex lg:flex xl:flex md:justify-start lg:justify-start xl:justify-start">
                            <h1 className="mr-1 mt-[1rem] mb-[1rem] md:mt-[2rem] md:mb-[2rem]  lg:mt-[2rem] lg:mb-[2rem] xl:mt-[2rem] xl:mb-[2rem]">
                                <span className=" font-bold leading-9 text-[40px] md:text-[57px] lg:text-[57px] xl:text-[57px]">Custom</span> <br />
                                <span className="text-[#23bbc8] mt-[1rem] font-regular text-[27px] md:text-[38px] lg:text-[38px] xl:text-[38px]">Logo Design
                                </span>
                            </h1>
                            <div className="items-center mx-auto w-[128px] h-[86px] bg-[#f73600] rounded-lg font-[700] pt-1 pb-1 px-2 raduis-[5px] md:mx-0 lg:mx-0 xl:mx-0">
                                <p className="text-[16px]  w-[107px] text-center font-normal leading-0">FOR JUST</p>
                                <p className="text-[54px] text-center font-[900] leading-10">$35</p>
                            </div>
                        </div>
                        <h5 className="text-[20px] md:text-[25px] lg:text-[25px] xl:text-[25px] ">Get your custom logo designed, <br /> from the <span
                                className="font-bold">#1 Design
                                Company</span></h5>
                        <Image src={Parterns} alt="awards" className="py-12 md:mx-0 lg:mx-0 xl:mx-0 mx-auto" priority={true} />
                    </div>
                   
                   
                    <div className="basis-[100%] md:basis-[60%] lg:basis-[60%] xl:basis-[60%] relative">
                        <div className="grid grid-rows-1 grid-flow-col gap-4 justify-center md:justify-end lg:justify-end xl:justify-end">
                            <div className="absolute top-[1px] -left-24  before:content-[''] before:absolute hidden xl:block lg:block">
                                <Image src={beforeImg} alt="form" className="" />
                            </div>
                            <div className="relative w-[350px] custom-shadow rounded-3xl">
                                <div
                                    className="border-solid border-white border-t-2 border-r-2 border-l-2 border-bottom-0 bg-[#f73600] bg-red-700 rounded-t-3xl text-center font-bold shadow-md">
                                    <h2 className=" text-white text-[40px] py-2">70% DISCOUNT</h2>
                                </div>
                                <div className="relative bg-red-700 rounded-t-3xl text-center font-semibold shadow-md ">
                                    <div
                                        className="absolute -left-[15px] -top-[16px] inset-0 before:content-[''] before:absolute ">
                                        <Image src={formbefore} width={16} height={88} alt="form" className="" />
                                    </div>
                                    <div
                                        className="bg-[#23bbc8] uppercase text-bold leading-7 pt-[9px] pb-[9px] text-white text-[25px] relative">
                                        <h3>
                                            <span className="text-[16px]">Let’s start your project,</span><br />
                                            Drop us your details!
                                        </h3>
                                    </div>
                                    <div className="absolute -right-[15px] -top-[16px] after:content-[''] before:absolute ">
                                        <Image src={formafter} width={16} height={88} alt="form" className="" />
                                    </div>
                                </div>
                                <div className="bg-blue-gray-50 pb-5 pt-4 px-3 rounded-b-3xl ">
                                    <form  className="" method="POST" autoComplete="off">
                                        <div className="w-full">
                                            <input  onChange={handleDataChange} type="text" placeholder="Enter Your Name" name="name" 
                                                className="placeholder:text-[#6e6e6e] placeholder:pl-[10px] w-full px-4 py-3 my-3 border border-gray-400 rounded-3xl focus:outline-none text-[#000] focus:ring focus:border-gray-800 font-roboto" required/>
                                         {
                                errors.name && <span className="text-[12px] block p-2 font-medium text-red">
                                    {errors.name}
                                </span>
                            }
                                        </div>
                                        <div className="w-full">
                                            <input onChange={handleDataChange} type="email" placeholder="Enter Your Email" name="email"   className="placeholder:text-[#6e6e6e] placeholder:pl-[10px] w-full px-4 py-3 my-3 border border-gray-400 rounded-3xl focus:outline-none text-[#000] focus:ring focus:border-blue-300 font-roboto" required/>
                                            {
                                errors.email && <span className="text-[12px] block p-2 font-medium text-red">
                                    {errors.email}
                                </span>
                            }
                                        </div>
                                        <div className="w-full">
                                            <input  onChange={handleDataChange} type="number" placeholder="Enter Your Phone" name="phone"  className="placeholder:text-[#6e6e6e] placeholder:pl-[10px] w-full px-4 py-3 my-3 border border-gray-400 rounded-3xl focus:outline-none text-[#000] focus:ring focus:border-blue-300 font-roboto" required/>
                                            {
                                errors.phone && <span className="text-[12px] block p-2 font-medium text-red">
                                    {errors.phone}
                                </span>
                            }
                                        </div>
                                        <div className="w-full">
                                            <button onClick={handleFormSubmit} className="bg_gr text-[18px] text-white font-semibold text-lg py-4 rounded-full uppercase w-full" id="signupBtn" type="submit" value={formStatus} disabled={isDisabled}>   Submit your Request
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </section>
       
    )
}

export default Hero;
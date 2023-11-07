"use client"
import Input from "C/Input";
import Select from "C/Select";
import Button from "C/Button";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Axios from "axios";

const Contact = () => {
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
        setFormStatus("Processing...");
        setIsDisabled(true);

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
    let servicesArray = [
        "Web Design Development",
        "Logo Design",
        "SEO",
        "PPC Marketing",
        "Social Media Management",
        "Reputation Management",
        "Content Marketing",
        "Other"
    ];
    return (
        <section>
            <div className="py-[50px] lg:py-[100px]">
                <div className="container">
                    <div className="flex gap-10 lg:gap-0 lg:justify-center text-center flex-wrap  lg:flex-nowrap">
                        <div className="basis-full lg:basis-[60%] xl:basis-[55%]">
                            <h2 className="text-2xl sm:text-3xl xl:text-4xl font-megat text-black font-normal leading-tight mb-3">
                                Get Free Consultancy
                            </h2>
                            <p className="text-[14px] xl:text-[16px] leading-[24px] xl:leading-[26px] text-black font-normal">Ready to discuss your project? Fill in your relevant details. <br className="hidden md:block" />We will get back to you as soon as we can.</p>
                            <form autoComplete="off" spellCheck="false" className="grid gap-5 grid-cols-1 mt-10">
                                <div className="border-b-2 border-red relative">
                                    <span className="text-[15px] font-medium text-black absolute top-0 left-0 bottom-0 flex items-center">Hi, my name is</span>
                                    <Input
                                        name="name"
                                        border="border-none"
                                        padding="pl-[110px] pr-5"
                                        color="text-black"
                                        handle={handleDataChange}
                                    />
                                </div>
                                {
                                    errors.name && <span className="text-[12px] block p-2 font-medium text-black">
                                        {errors.name}
                                    </span>
                                }
                                <div className="border-b-2 border-red relative">
                                    <span className="text-[15px] font-medium text-black absolute top-0 left-0 bottom-0 flex items-center">You can contact me at</span>
                                    <Input
                                        name="phone"
                                        type="tel"
                                        border="border-none"
                                        padding="pl-[165px] pr-5"
                                        color="text-black"
                                        handle={handleDataChange}
                                    />
                                </div>
                                {
                                    errors.phone && <span className="text-[12px] block p-2 font-medium text-black">
                                        {errors.phone}
                                    </span>
                                }
                                <div className="border-b-2 border-red relative">
                                    <span className="text-[15px] font-medium text-black absolute top-0 left-0 bottom-0 flex items-center">or by email at</span>
                                    <Input
                                        name="email"
                                        type="email"
                                        border="border-none"
                                        padding="pl-[100px] pr-5"
                                        color="text-black"
                                        handle={handleDataChange}
                                    />
                                </div>
                                {
                                    errors.email && <span className="text-[12px] block p-2 font-medium text-black">
                                        {errors.email}
                                    </span>
                                }
                                <div className="border-b-2 border-red relative">
                                    <span className="text-[15px] font-medium text-black absolute top-0 left-0 bottom-0 flex items-center">Interested in</span>
                                    <Select
                                        options={servicesArray}
                                        name="services"
                                        border="border-none"
                                        padding="pl-[100px] pr-5"
                                        color="text-black"
                                        handle={handleDataChange}
                                    />
                                </div>
                                <Button
                                    text={formStatus}
                                    border="border-none"
                                    bg="bg-red"
                                    color="text-white"
                                    handle={handleFormSubmit}
                                    disabled={isDisabled}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
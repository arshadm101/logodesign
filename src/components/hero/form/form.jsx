"use client"
import Image from "next/image";
import Input from "C/Input";
import Select from "C/Select";
import Button from "C/Button";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Axios from "axios";

const Form = () => {
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        services: "",
        message: "",
        pageURL: usePathname()
    });
    const handleDataChange = (e) => {
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
    // const [formStatus, setFormStatus] = useState("Submit Form");
    const [errors, setErrors] = useState({});
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
        // setFormStatus("Processing...");

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
            window.location.href = "/thank-you";
        } else {
            // setFormStatus("Failed...");
        }
    }
    let servicesArray = ["Web Design Development", "Logo Design", "SEO", "PPC Marketing", "Social Media Management", "Reputation Management", "Content Marketing", "Other"];
    return (
        <section>
            <div className="container">
                <div className="bg-red h-[150px] lg:h-[200px] flex items-center justify-center text-center rotate-[2deg] relative mt-[50px] lg:mt-0">
                    <h2 className="text-[25px] md:text-[30px] xl:text-[45px] font-megat font-extrabold leading-tight text-white">
                        Arrange a Meeting Anytime <br /> at Your Convenience
                    </h2>
                    <Image src="/icons/bannerArrow.png" width={112} height={91} alt="arrow" className="absolute left-[18%] top-[100px] hidden lg:block" />
                </div>
                <form autoComplete="off" spellCheck="false" className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 mb-[100px] xl:mb-[150px]">
                    <div>
                        <div className="border-b-2 border-[#00000054] relative">
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
                            errors.name && <span className="text-[12px] p-2 font-medium text-red block">
                                {errors.name}
                            </span>
                        }
                    </div>
                    <div>
                        <div className="border-b-2 border-[#00000054] relative">
                            <span className="text-[15px] font-medium text-black absolute top-0 left-0 bottom-0 flex items-center">You can contact me at</span>
                            <Input
                                name="phone"
                                type="phone"
                                border="border-none"
                                padding="pl-[165px] pr-5"
                                color="text-black"
                                handle={handleDataChange}
                            />
                        </div>
                        {
                            errors.phone && <span className="text-[12px] block p-2 font-medium text-red">
                                {errors.phone}
                            </span>
                        }
                    </div>
                    <div>
                        <div className="border-b-2 border-[#00000054] relative">
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
                            errors.email && <span className="text-[12px] block p-2 font-medium text-red">
                                {errors.email}
                            </span>
                        }
                    </div>
                    <div className="border-b-2 border-[#00000054] relative">
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
                    <div className="border-b-2 border-[#00000054] relative">
                        <span className="text-[15px] font-medium text-black absolute top-0 left-0 bottom-0 flex items-center">Tell Us your story</span>
                        <Input
                            name="message"
                            type="test"
                            border="border-none"
                            padding="pl-[130px] pr-5"
                            color="text-black"
                            handle={handleDataChange}
                        />
                    </div>
                    <Button
                        text="Get A Free Quote"
                        border="border-none"
                        color="text-white"
                        bg="bg-red"
                        handle={handleFormSubmit}
                    />
                </form>
            </div>
        </section>
    )
}

export default Form;
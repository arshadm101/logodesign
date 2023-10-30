"use client"
import Input from "C/Input";
import Select from "C/Select";
import Button from "C/Button";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Axios from "axios";

const Contact = () => {
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
            <div className="py-[50px] lg:py-[100px] bg-red">
                <div className="container">
                    <div className="flex gap-10 lg:gap-0 lg:justify-between flex-wrap  lg:flex-nowrap">
                        <div className="basis-full lg:basis-[60%] xl:basis-[55%]">
                            <h2 className="text-2xl sm:text-3xl xl:text-4xl font-megat text-white font-normal leading-tight mb-3">
                                Arrange a Meeting Anytime <br className="hidden md:block" /> at Your Convenience
                            </h2>
                            <p className="text-[14px] xl:text-[16px] leading-[24px] xl:leading-[26px] text-white font-normal">We understand the value of time! That’s why we let you set the schedule and arrange <br className="hidden md:block" /> the meeting at your convenience with us. </p>
                            <form autoComplete="off" spellCheck="false" className="grid gap-5 grid-cols-1 mt-10">
                                <div className="border-b-2 border-[#ffffff33] relative">
                                    <span className="text-[15px] font-medium text-white absolute top-0 left-0 bottom-0 flex items-center">Hi, my name is</span>
                                    <Input
                                        name="name"
                                        border="border-none"
                                        padding="pl-[110px] pr-5"
                                        handle={handleDataChange}
                                    />
                                </div>
                                {
                                    errors.name && <span className="text-[12px] block p-2 font-medium text-white">
                                        {errors.name}
                                    </span>
                                }
                                <div className="border-b-2 border-[#ffffff33] relative">
                                    <span className="text-[15px] font-medium text-white absolute top-0 left-0 bottom-0 flex items-center">You can contact me at</span>
                                    <Input
                                        name="phone"
                                        type="tel"
                                        border="border-none"
                                        padding="pl-[165px] pr-5"
                                        handle={handleDataChange}
                                    />
                                </div>
                                {
                                    errors.phone && <span className="text-[12px] block p-2 font-medium text-white">
                                        {errors.phone}
                                    </span>
                                }
                                <div className="border-b-2 border-[#ffffff33] relative">
                                    <span className="text-[15px] font-medium text-white absolute top-0 left-0 bottom-0 flex items-center">or by email at</span>
                                    <Input
                                        name="email"
                                        type="email"
                                        border="border-none"
                                        padding="pl-[100px] pr-5"
                                        handle={handleDataChange}
                                    />
                                </div>
                                {
                                    errors.email && <span className="text-[12px] block p-2 font-medium text-white">
                                        {errors.email}
                                    </span>
                                }
                                <div className="border-b-2 border-[#ffffff33] relative">
                                    <span className="text-[15px] font-medium text-white absolute top-0 left-0 bottom-0 flex items-center">Interested in</span>
                                    <Select
                                        options={servicesArray}
                                        name="services"
                                        border="border-none"
                                        padding="pl-[100px] pr-5"
                                        handle={handleDataChange}
                                    />
                                </div>
                                <Button
                                    text="Get A Free Quote"
                                    border="border-none"
                                    color="text-red"
                                    handle={handleFormSubmit}
                                />
                            </form>
                        </div>
                        <div className="basis-full lg:basis-[35%] xl:basis-[40%]">
                            <div className="grid grid-cols-1 gap-10">
                                <div>
                                    <h2 className="text-xl sm:text-2xl font-megat text-white font-normal leading-none mb-3">
                                        GIVE US A CALL!
                                    </h2>
                                    <div dangerouslySetInnerHTML={{ __html: `<a href="tel:3476073636" class="text-[18px] font-medium text-[#ffffffc4]">(347) 607-3636</a>` }} />
                                </div>
                                <div>
                                    <h2 className="text-xl sm:text-2xl font-megat text-white font-normal leading-none mb-3">
                                        WRITE TO US!
                                    </h2>
                                    <div dangerouslySetInnerHTML={{ __html: `<a href="mailto:info@creativelogodesigns.io" class="text-[18px] font-medium text-[#ffffffc4]">Info@creativelogodesigns.io</a>` }} />
                                </div>
                                <div>
                                    <h2 className="text-xl sm:text-2xl font-megat text-white font-normal leading-none mb-3">
                                        COME AND SEE US!
                                    </h2>
                                    <div dangerouslySetInnerHTML={{ __html: `<a href="javascript:;" class="text-[18px] font-medium text-[#ffffffc4]">One World Trade Center, Suite 8500, <br /> New York, New York, 10007,<br /> United States</a>` }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
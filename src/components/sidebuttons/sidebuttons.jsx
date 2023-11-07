"use client"
// Import Components
import Image from "next/image";
import Link from "next/link";
import { Input, ThemeProvider } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Axios from "axios";

const Sidebuttons = () => {
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
    const theme = {
        input: {
            defaultProps: {
                color: "white",
                size: "lg",
                variant: "outlined",
            },
            styles: {
                variants: {
                    outlined: {
                        base: {
                            input: {
                                borderWidth: "border-2 placeholder-shown:border-2",
                                borderColor: "placeholder-shown:border-white placeholder-shown:border-t-white",
                                floated: {
                                    borderWidth: "border-2 focus:border-2",
                                    borderColor: "border-t-transparent focus:border-t-transparent",
                                },
                                bg: "bg-[#06050538]"
                            },
                            label: {
                                before: {
                                    floated: {
                                        bt: "before:border-t-2 peer-focus:before:border-t-2",
                                        bl: "before:border-l-2 peer-focus:before:border-l-2",
                                    },
                                },
                                after: {
                                    floated: {
                                        bt: "after:border-t-2 peer-focus:after:border-t-2",
                                        br: "after:border-r-2 peer-focus:after:border-r-2",
                                    },
                                },
                            },
                        }
                    }
                }
            }
        }
    }
    return (
        <>
            <div className="translate-x-[75%] hover:translate-x-[1%] bg-[#cab99a] rounded-bl-[50px] rounded-tl-[50px] fixed top-[23%] right-0 z-50" dangerouslySetInnerHTML={{
                __html: `<a href="javascript:$zopim.livechat.window.show();" class="cursor-pointer hidden lg:flex items-center py-2 px-4 gap-4">
                <img src="/chatIcon.svg" alt="chat" />
                <span class="text-white font-semibold text-lg block">Start Live Chat</span>
            </a>`}} />
            <div className="translate-x-[75%] hover:translate-x-[1%] bg-[#cab99a] rounded-tl-[50px] rounded-bl-[50px] fixed top-[33%] right-0 z-50" dangerouslySetInnerHTML={{
                __html: `<a href="tel:8556666675" class="cursor-pointer hidden lg:flex items-center py-2 px-4 gap-4">
                <img src="/callIcon.svg" alt="call" />
                <span class="text-white font-semibold text-lg">(855) 666-6675</span>
            </a>`}} />
            <div className="cursor-pointer hidden lg:flex items-center translate-x-[100%] hover:translate-x-[1%] fixed top-[43%] right-0 z-50">
                <span className="text-white font-normal text-lg bg-[#cab99a] tracking-wide rotate-[-90deg] absolute top-[45%] left-[-137px] rounded-tr-[30px] rounded-tl-[30px] py-2 px-3 ">60% off on all services</span>
                <ThemeProvider value={theme}>
                    <form className="w-[400px] p-4 bg-black" autoComplete="off">
                        <div className="mb-2">
                            <Input label="Name" type="text" onChange={handleDataChange} name="name" />
                            {
                                errors.name && <span className="text-[12px] block p-2 font-medium text-red">
                                    {errors.name}
                                </span>
                            }
                        </div>
                        <div className="mb-2">
                            <Input label="Telephone Number" type="tel" onChange={handleDataChange} name="phone" />
                            {
                                errors.phone && <span className="text-[12px] block p-2 font-medium text-red">
                                    {errors.phone}
                                </span>
                            }
                        </div>
                        <div className="mb-2">
                            <Input label="Email" type="email" onChange={handleDataChange} name="email" />
                            {
                                errors.email && <span className="text-[12px] block p-2 font-medium text-red">
                                    {errors.email}
                                </span>
                            }
                        </div>
                        <div className="mb-2">
                            <Input label="leave your message" type="text" onChange={handleDataChange} name="message" />
                        </div>
                        <input type="button" onClick={handleFormSubmit} className="cursor-pointer  text-lg font-medium pr-8 pl-8 h-11 rounded-md bg-red w-full text-white hover:bg-[#cab99a]" value={formStatus} disabled={isDisabled} />
                    </form>
                </ThemeProvider>
            </div>
        </>
    );
}

export default Sidebuttons;
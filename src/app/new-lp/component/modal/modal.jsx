// components/Modal.js
"use client"
import React from 'react';
import Axios from "axios";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from '../modal/modal.module.css'






const Modal = ({ isOpen, onClose }) => {
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
        // services: "Not Selected",
        // message: "",
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
    if (!isOpen) return null;
    const modalClasses = isOpen ? 'fixed inset-0 flex items-center justify-center z-50 modelbg' : 'show';
    return (
        <section className={styles.black}>
        <div className={modalClasses}  id={styles.black}>
            <div className=" p-6 rounded-lg">
                <div className="border-[1px] relative w-[400px] xl:w-[400px] lg:w-[400px] md:w-[400px] custom-shadow rounded-3xl">
                    <button onClick={onClose} className="font-poppins px-4 mt-2 font-[800]  text-[#fff] rounded-full text-[28px] w-[37px] h-[37px] absolute right-[10px] top-25px" > x </button>
                    <div
                        className="bg-[#dd1920] bg-red-700 rounded-t-3xl text-center font-bold shadow-md">
                        <h2 class=" text-white text-[30px] py-2 font-poppins text-shadow">PLACE YOUR ORDER
                        </h2>
                    </div>
                    <div class="font-poppins relative bg-red-700 rounded-t-3xl text-center font-semibold shadow-md ">
                        <div
                            class="bg-[#000] uppercase text-bold leading-7 pt-[16px] pb-[9px] text-black text-[25px] relative">
                            <h3 className={styles.rix}>
                                <span className='bg-[#000] text-[#dd1920] font-[700] text-[22px]'>SIGN UP NOW AND GET UP TO</span><br /> <span className='text-[#fff] text-[22px] font-[700]'>70% OFF</span> <br />
                                <span className="text-[11px] font-[400] text-[#fff]">Fill out this form and we will get  <span className='font-[700]'>  BACK TO YOU.</span>
                                </span><br />
                            </h3>
                        </div>
                    </div>
                    <div className="bg-[#000] pb-5 pt-1 px-3 rounded-b-3xl ">
                        <form className={`${styles.omn} px-4`}>
                            <div class="w-full">
                                <input onChange={handleDataChange} type="text" placeholder="Your Name" name="name" required
                                    className="placeholder:text-[#6E6E6E] placeholder:pl-[10px] w-full px-4 py-3 my-[5px] border border-gray-400 rounded-md focus:outline-none text-[#000] focus:ring focus:border-gray-800 placeholder:font-poppins" />
                                {
                                    errors.name && <span className="text-[12px] block p-2 font-medium text-red">
                                        {errors.name}
                                    </span>
                                }
                            </div>
                            <div class="w-full">
                                <input onChange={handleDataChange} type="email" placeholder="Your Email" name="email" required
                                    className="placeholder:text-[#6E6E6E] placeholder:pl-[10px] w-full px-4 py-3 my-[5px] border border-gray-400 rounded-md focus:outline-none text-[#000] focus:ring focus:border-blue-300 placeholder:font-poppins" />
                                {
                                    errors.email && <span className="text-[12px] block p-2 font-medium text-red">
                                        {errors.email}
                                    </span>
                                }
                            </div>
                            <div class="w-full">
                                <input onChange={handleDataChange} type="number" placeholder="Your Phone" name="phone" required
                                    className="placeholder:text-[#6E6E6E] placeholder:pl-[10px] w-full px-4 py-3 my-[5px] border border-gray-400 rounded-md focus:outline-none text-[#000] focus:ring focus:border-blue-300 placeholder:font-poppins" />
                                {
                                    errors.phone && <span className="text-[12px] block p-2 font-medium text-red">
                                        {errors.phone}
                                    </span>
                                }
                            </div>
                            <div class="w-full text-center mt-4">
                                <button onClick={handleFormSubmit}
                                    className="bg-[#dd1920] text-[16px] text-white font-[600] text-center py-[10px] rounded-[50px] font-poppins uppercase w-[210px]"
                                    id="signupBtn" type="submit" value={formStatus} disabled={isDisabled}>
                                    Place Your Order
                                </button>
                            </div>
                        </form>
                    </div>
                  
                </div>
            </div>
        </div>
        </section>
    );
};
export default Modal;













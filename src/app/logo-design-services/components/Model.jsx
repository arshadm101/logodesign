// components/Modal.js
import React from 'react';
import Axios from "axios";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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
    <div className={modalClasses}>
      <div className=" p-6 rounded-lg">
        
      <div className="relative w-[450px] custom-shadow rounded-3xl">
      <button onClick={onClose} className="font-poppins px-4 mt-3 bg-[#23bbc8] text-[#fff] rounded-full w-[37px] h-[37px] absolute right-[10px] top-30px hover:bg-gray-400" > x </button>
                                <div
                                    className="bg-[#f73600] bg-red-700 rounded-t-3xl text-center font-bold shadow-md">
                                    <h2 class=" text-white text-[30px] py-2 font-poppins text-shadow">UP TO 70% DISCOUNT
</h2>
                                </div>
                                <div class="font-poppins relative bg-red-700 rounded-t-3xl text-center font-semibold shadow-md ">
                                   
                                    <div
                                        class="bg-[#fff] uppercase text-bold leading-7 pt-[9px] pb-[9px] text-black text-[25px] relative">
                                        <h3>
                                       <span className='text-[#f73600]'>70% OFF</span> TILL MIDNIGHT<br/>
                                            <span className="text-[12px] font-[400]">Fill out this brief form to get your <span className='font-[700]'> DISCOUNT RESERVED.</span>

</span><br />
                                           
                                        </h3>
                                    </div>
                                   
                                </div>
                                <div className="bg-white pb-5 pt-4 px-3 rounded-b-3xl ">
                                    <form className="px-4">
                                        <div class="w-full">
                                            <input onChange={handleDataChange} type="text" placeholder="Enter Your Name" name="name" required
                                                className="placeholder:text-[#6e6e6e] placeholder:pl-[10px] w-full px-4 py-3 my-3 border border-gray-400 rounded-md focus:outline-none text-[#000] focus:ring focus:border-gray-800 font-roboto" />
                                         {
                                errors.name && <span className="text-[12px] block p-2 font-medium text-red">
                                    {errors.name}
                                </span>
                            }
                                        </div>
                                        <div class="w-full">
                                            <input onChange={handleDataChange} type="email" placeholder="Enter Your Email" name="email" required
                                                className="placeholder:text-[#6e6e6e] placeholder:pl-[10px] w-full px-4 py-3 my-3 border border-gray-400 rounded-md focus:outline-none text-[#000] focus:ring focus:border-blue-300 font-roboto" />
                            {
                                errors.email && <span className="text-[12px] block p-2 font-medium text-red">
                                    {errors.email}
                                </span>
                            }
                                        </div>
                                        <div class="w-full">
                                            <input onChange={handleDataChange} type="number" placeholder="Enter Your Phone" name="phone" required
                                                className="placeholder:text-[#6e6e6e] placeholder:pl-[10px] w-full px-4 py-3 my-3 border border-gray-400 rounded-md focus:outline-none text-[#000] focus:ring focus:border-blue-300 font-roboto" />
                                                {
                                errors.phone && <span className="text-[12px] block p-2 font-medium text-red">
                                    {errors.phone}
                                </span>
                            }
                                        </div>
                                        <div class="w-full text-center mt-4">
                                            <button onClick={handleFormSubmit}
                                                className="bg-[#23bbc8] text-[18px] text-white font-semibold text-center py-3 rounded-md font-poppins uppercase w-[250px]"
                                                id="signupBtn" type="submit" value={formStatus} disabled={isDisabled}>
                                                Place Your Order
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="mt-4 flex justify-end">
         
        </div>
                            </div>

       
      </div>
    </div>
  );
};

export default Modal;

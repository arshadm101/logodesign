"use client"
import Image from "next/image";
import Link from "next/link";
import styles from '../../../new-lp/component/contact/contact.module.css'
import logo1 from 'media/new-lp/contact/new1.png'


const Contact = () => {







    return (
        <>
            <section className={`${styles.contact} font-poppins py-[80px]`}>
                <div class="container mx-auto">
                    <div class="grid grid-cols-2 justify-items-end items-center">
                        <div>
                            <div className={`${styles.longa}`}>
                                <h2 className="text-[66px] font-[700] mb-5">Contact Us</h2>
                            </div>

                            <input type="text" class="placeholder:text-[#6c757d] bg-transparent border-[#ced4da] w-full h-14 py-7 rounded-[20px] px-6 border" placeholder="Enter Your Name" name="name"></input>
                            <input type="text" class="placeholder:text-[#6c757d] bg-transparent border-[#ced4da] w-full h-14 py-7 rounded-[20px] px-6 border mt-4" placeholder="Enter Your Email" name="name"></input>
                            <input type="number" class="placeholder:text-[#6c757d] bg-transparent border-[#ced4da] w-full h-14 py-7 rounded-[20px] px-6 border mt-4" placeholder="Phone Number" name="name"></input>
                            <input type="text" class="placeholder:text-[#6c757d] bg-transparent border-[#ced4da] w-full h-20 py-7 pt-0 rounded-2xl px-6 border mt-4" placeholder="Enter Message Here" name="name"></input>
                            <input type="submit" class="bg-[#dd1920] text-[#fff] py-3 px-6  md:rounded-full text-[16px] font-[400] mt-5 hover:bg-[#ffff] hover:border-[1px] hover:border-[#dd1920]  hover:text-[#dd1920]" value='SUBMIT NOW' />
                        </div>
                        <div>
                            <Image src={logo1} />
                        </div>



                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;
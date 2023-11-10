"use client"
import Image from "next/image";
import Link from "next/link";
import styles from '../../../new-lp/component/contact/contact.module.css'
import logo1 from 'media/new-lp/contact/new1.png'


const Contact = () => {







    return (
        <>
            <section className={`${styles.contact} font-poppins lg:py-[80px] md:py-[80px] sm:py-[80px] py-[50px]`}>
                <div class="container mx-auto">
                    <div class="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:justify-items-end md:justify-items-start items-center">
                        <div>
                            <div className={`${styles.longa}`}>
                                <h2 className="lg:text-[66px] md:text-[35px] sm:text-[35px] text-[23px] font-[700] mb-5">Contact Us</h2>
                            </div>
                            <form method="POST">
                                <input type="text" required class="placeholder:text-[#6c757d] bg-transparent border-[#ced4da] w-full h-14 py-7 rounded-[20px] px-6 border" placeholder="Enter Your Name" name="name"></input>
                                <input type="text" required class="placeholder:text-[#6c757d] bg-transparent border-[#ced4da] w-full h-14 py-7 rounded-[20px] px-6 border mt-4" placeholder="Enter Your Email" name="name"></input>
                                <input type="number" required class="placeholder:text-[#6c757d] bg-transparent border-[#ced4da] w-full h-14 py-7 rounded-[20px] px-6 border mt-4" placeholder="Phone Number" name="name"></input>
                                <input type="text" required class="placeholder:text-[#6c757d] bg-transparent border-[#ced4da] w-full h-20 py-7 pt-0 rounded-2xl px-6 border mt-4" placeholder="Enter Message Here" name="name"></input>
                                <input type="submit" class="bg-[#dd1920] text-[#fff] py-3 px-6  rounded-full text-[16px] font-[400] mt-5 hover:bg-[#ffff] hover:border-[1px] hover:border-[#dd1920]  hover:text-[#dd1920]" value='SUBMIT NOW' />
                            </form>
                        </div>
                        <div className="lg:mt-0 md:mt-8 mt-8">
                            <Image src={logo1} />
                        </div>



                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;
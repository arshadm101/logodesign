"use client"
import Image from "next/image";
import Link from "next/link";
import styles from '../logos/logos.module.css'
import onep from 'media/new-lp/logo/loop.png'
import { useState } from "react";
import Modal from "../modal/modal";




const Logos = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
      setIsModalOpen(true);
    };
    const closeModal = () => {
      setIsModalOpen(false);
    };




    return (
        <>
            <section className={`${styles.logos}  font-poppins lg:py-[100px] md:py-[50px] sm:py-[50px] py-[50px]`}>
                <div className="container mx-auto">


                    <div className="grid ld:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-10 items-center">
                        <div className="...">
                            <Image src={onep} />
                        </div>
                        <div className="col-span-2 ...">
                            <div className="... max-w-[750px]" >
                                <div>
                                <div className={`${styles.longa}`}>
                                    <h2 className="lg:text-[32px] md:lg:text-[32px] sm:lg:text-[32px] text-[23px] font-bold leading-[38px] text-[#00142d]">IMPRESSIVE LOGOS, CREATING EVERLASTING IMPRESSION ON YOUR TARGET AUDIENCE.</h2>
                                    </div>
                                    <p className="text-[17px] font-[400] text-[#506b8f] font-poppins mt-3">Goto Logo Experts is a digital agency that not only strives to provide its customers with top-notch logo design services, but also the best customer service that they have experienced. Comprising of a team of dedicated professionals, the team has to its credit thousands of completed project deliveries and more.</p>
                                    <div className="sm:mt-5 mt-7 flex gap-x-5">
                                        <Link className="bg-[#dd1920] text-[#fff] py-3 lg:px-11 md:px-11 sm:px-11 px-6   rounded-full text-[16px] font-medium hover:bg-[#ffff] hover:border-[1px] hover:border-[#dd1920]  hover:text-[#dd1920]" href="#">Live Chat</Link>
                                        <Link onClick={openModal} className="bg-[#dd1920] text-[#fff] py-3 lg:px-11 md:px-11 sm:px-11 px-6  rounded-full text-[16px] font-medium hover:bg-[#ffff] hover:border-[1px] hover:border-[#dd1920]  hover:text-[#dd1920]" href="#">Get Quote</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Modal isOpen={isModalOpen} onClose={closeModal} />

        </>
    )
}

export default Logos;
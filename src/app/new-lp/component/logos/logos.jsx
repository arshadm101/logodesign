"use client"
import Image from "next/image";
import Link from "next/link";
import styles from '../logos/logos.module.css'
import onep from 'media/new-lp/logo/loop.PNG'


const Logos = () => {


    return (
        <>
            <section className={`${styles.logos}  font-poppins py-[100px]`}>
                <div className="container mx-auto">


                    <div className="grid grid-cols-3 gap-10 items-center">
                        <div className="...">
                            <Image src={onep} />
                        </div>
                        <div className="col-span-2 ...">
                            <div className="... max-w-[750px]" >
                                <div>
                                <div className={`${styles.longa}`}>
                                    <h2 className="text-[32px] font-bold leading-[38px] text-[#00142d]">IMPRESSIVE LOGOS, CREATING EVERLASTING IMPRESSION ON YOUR TARGET AUDIENCE.</h2>
                                    </div>
                                    <p className="text-[17px] font-[400] text-[#506b8f] font-poppins mt-3">Goto Logo Experts is a digital agency that not only strives to provide its customers with top-notch logo design services, but also the best customer service that they have experienced. Comprising of a team of dedicated professionals, the team has to its credit thousands of completed project deliveries and more.</p>
                                    <div className="mt-5 flex gap-x-5">
                                        <Link className="bg-[#dd1920] text-[#fff] py-3 px-11  md:rounded-full text-[16px] font-medium" href="#">Live Chat</Link>
                                        <Link className="bg-[#dd1920] text-[#fff] py-3 px-11  md:rounded-full text-[16px] font-medium" href="#">Get Quote</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Logos;
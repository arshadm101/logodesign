"use client"
import Image from "next/image";
import Link from "next/link";
import styles from '../works/works.module.css'
import logo1 from 'media/new-lp/works/new.svg'
import logo2 from 'media/new-lp/works/new1.svg'
import logo3 from 'media/new-lp/works/new2.svg'


const Works = () => {







    return (
        <>
            <section className={`${styles.works} bg-[#fbfbfb] font-poppins py-[80px]`}>
                <div class="container mx-auto">
                    <div class="grid grid-cols-1">
                        <h2 className="text-[66px] font-[700] text-center mb-28">How It <span className="border-2 border-slate-700 px-3 py-0">Works</span> </h2>
                    </div>

                    <div class="grid grid-cols-3 gap-10">
                        <div className="hover:bg-[#de182a] hover:text-[#ffff] p-[20px] rounded-2xl hover:transition-none">
                            <div className={styles.box}>
                                <Image src={logo1} className="w-[80px] block m-auto" />
                            </div>
                            <h3 className="text-[28px] font-[500] text-center">Details</h3>
                            <p className="text-[17px] font-[400] text-center">Answer a few questions about your <br></br> business, your industry and your <br></br> audience and we’ll take it from there.</p>
                        </div>
                        <div className="hover:bg-[#de182a] hover:text-[#ffff] p-[20px] rounded-2xl hover:transition-none">
                        <div className={styles.box}>
                                <Image src={logo2} className="w-[80px] block m-auto" />
                            </div>
                            <h3 className="text-[28px] font-[500] text-center">Design</h3>
                            <p className="text-[17px] font-[400] text-center">Our design team gets involved and<br></br> we start crafting unique logo options <br></br> to reflect your business.</p>
                        </div>
                        <div className="hover:bg-[#de182a] hover:text-[#ffff] p-[20px] rounded-2xl hover:transition-none">
                        <div className={styles.box}>
                                <Image src={logo3} className="w-[80px] block m-auto" />
                            </div>
                            <h3 className="text-[28px] font-[500] text-center">Delivery</h3>
                            <p className="text-[17px] font-[400] text-center">As soon as your new logo designs <br></br> are completed, we'll send them <br></br> straight to your inbox.</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Works;
"use client"
import Image from "next/image";
import Link from "next/link";
import styles from '../footer/footer.module.css'
import logo1 from 'media/new-lp/footer/cards.webp'


const Footer = () => {







    return (
        <>
            <section className={`${styles.footer} bg-[#134068] font-poppins py-[20px]`}>
                <div class="container mx-auto">
                    <div class="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 items-center border-b-[1px] pb-4 lg:gap-0 md:gap-3 sm:gap-3 gap-3">
                        <div className="text-[#ffff] lg:text-left md:text-center sm:text-center text-center">
                            <Link className="text-[14px] font-[500] text-[#ffff]" href='#'>Terms & Conditions</Link> | <Link className="text-[14px] font-[500] text-[#ffff]" href='#'>Privacy Policy</Link>
                        </div>
                        <div>
                            <p className="text-[12px] font-[600] text-[#ffff] text-center">Copyright © 2023 Goto Logo Experts | All rights reserved.</p>
                        </div>
                        <div className="flex lg:justify-end md:justify-center sm:justify-center justify-center">
                            <Image src={logo1} />
                        </div>
                    </div>
                    <div class="grid grid-cols-1 pt-4">

                        <p className="text-[12px] font-[600] text-[#ffff] text-center lg:px-20 md:px-20 sm:px-0 px-0"> <span className="text-[16px] font-[800]">Disclaimer:</span> The logo, name and graphics of Goto Logo Experts and its products & services are the Goto Logo Experts of Goto Logo Experts. All other company names, brand names, Goto Logo Experts and logos mentioned on this website are the property of their respective owners and do not constitute or imply endorsement, sponsorship or recommendation by Goto Logo Experts.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;
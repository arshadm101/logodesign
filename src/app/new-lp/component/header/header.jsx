"use client"
// Imports Components
import Image from "next/image";
// Import Images
import One from "media/new-lp/logo.png";
import Link from "next/link";
import styles from '../header/header.module.css'



const Header = () => {


 

    return (
        <>
            <section className={`${styles.post} font-poppins relative`}>
                <div class="container mx-auto lg:py-5 font-secondary">
                    <div class="grid grid-cols-2 justify-between items-center">
                        <Image src={One} class='w-48' />

                        <div class='flex gap-8 items-center justify-end'>
                            <Link href='tel:(855) 535-2384' className="text-[#000000] font-medium text-[15px]"> <span className="font-bold">Call Us:</span> (855) 535-2384</Link>
                            <Link class='bg-[#dd1920] text-[#fff] py-3 px-7  md:rounded-full text-[16px] font-medium hover:bg-[#ffff] hover:border-[1px] hover:border-[#dd1920]  hover:text-[#dd1920]' href='#'>Talk To Us</Link>
                        </div>

                    </div>
                </div>
            </section>

            
        </>
    )
}

export default Header;
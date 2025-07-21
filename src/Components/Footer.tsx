import Image from 'next/image'
import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-[#073937] p-6 md:p-20'>
            <div className="pt-10 ">
                <Image
                    src="/assets/Logo.png"
                    width={124}
                    height={124}
                    alt="Logo"
                    className='brightness-0 invert'
                />
            </div>
            <div className='flex flex-col md:flex-row gap-8 md:gap-0'>
                <div className='text-white text[22px]  leading-8'>
                    <h6 className='text-[12px] text-[#a7b8af] font-extrabold pt-10 '>COMPANY</h6>
                    <nav className='pt-3 '>
                        <ul>
                            <li>About Us</li>
                            <li>News</li>
                            <li>Careers</li>
                            <li>Press</li>
                            <li>Business and Groups</li>
                            <li>Real Estate</li>
                            <li>Corporate Responsibility</li>
                            <li>Investor Relations</li>
                            <li>Modern Slavery Act</li>
                            <li>Biometrics Policy</li>
                        </ul>
                    </nav>
                </div>
                <div className='text-white text[22px] md:pl-15  leading-normal'>
                    <h6 className='text-[12px] text-[#a7b8af] font-extrabold pt-10 md:pl-3 uppercase '>Support</h6>
                    <nav className='pt-3 md:pl-4'>
                        <ul>
                            <li>Help Center</li>

                        </ul>
                    </nav>
                </div>
                <div className='text-white text[22px] md:pl-15  leading-normal'>
                    <h6 className='text-[12px] text-[#a7b8af] font-extrabold pt-10 md:pl-3 uppercase '>Social</h6>
                    <div className='flex flex-row justify-start md:justify-between gap-4 pt-3'>

                    <FaFacebookSquare />
                    <FaSquareInstagram />
                    <FaXTwitter />
                    </div>
                </div>
                <div className='text-white text[22px] md:pl-15  leading-normal'>
                    <h6 className='text-[12px] text-[#a7b8af] font-extrabold pt-10 md:pl-3 uppercase '>Language</h6>
                    <div>
                    <button className="border-white border-2 cursor-pointer text-white px-5 py-2 rounded-full text-lg mt-2 ">
                        English (US)
                    </button>   
                    </div>
                    <h6 className='text-[12px] text-[#a7b8af] font-extrabold pt-10 md:pl-3 uppercase '>Currency</h6>
                    <div>
                        <button className="border-white border-2 cursor-pointer text-white px-5 py-2 rounded-full text-lg mt-2 ">
                        Currency (USD)
                    </button>  
                    </div>
                    
                </div>
            </div>
            <div className='text-white text[22px] leading-normal flex flex-col md:flex-row gap-4 md:gap-100 pt-10'>
                <div>Ⓒ 2025 Sonder Holdings Inc. All rights reserved.</div>
                <div className='flex flex-col md:flex-row gap-4 md:gap-10'>
                    <p>+1 617-300-0956
                    </p>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    </div>
            </div>
        </div>
    )
}

export default Footer
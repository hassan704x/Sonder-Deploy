import React from 'react'
import { GoChecklist } from "react-icons/go";
import { CiMobile4 } from "react-icons/ci";
import { TbMessages } from "react-icons/tb";
import { GoClock } from "react-icons/go";
import Image from 'next/image';
import { Fullscreen } from 'lucide-react';

const TempleteArea = () => {
    return (
        <div>
            <section>

                <div className=' bg-[#ebede4] flex flex-row'>
                    <div className='p-6 max-w-[700] '>
                        <div className='pl-5'>
                            <h1 className='text-[48px] text-[#073836] font-serif  pl-7 pt-8 pr-40 leading-12'>Everything you need is just a tap away</h1>
                            <p className='text-[18px] mt-8  text-[#073836] pl-5 pr-60'>Customize your stay or connect with our digital concierge. The Sonder app puts you in control.</p>

                        </div>
                        <div className="grid grid-cols-2 grid-rows-2 mt-8 gap-y-4 gap-x-[-18] items-center justify-center px-10  ">
                            <div className="flex  items-center gap-4">
                                <GoChecklist
                                    size={50}
                                    className='text-[#073836] '
                                />
                                <div className='text-[16px] text-[#073836] font-[400] pl-3 '>Check in online</div>
                            </div>
                            <div className="flex  items-center">
                                <CiMobile4
                                    size={90}
                                    className='text-[#073836] '
                                />
                                <div className='text-[16px] text-[#073836] font-[400] pl-3  pr-30'>Access your mobile key</div>
                            </div>
                            <div className="flex  items-center">
                                <TbMessages
                                    size={50}
                                    className='text-[#073836] '
                                />
                                <div className='text-[16px] text-[#073836] font-[400] pl-3 '>Chat with us 24/7</div>
                            </div>
                            <div className="flex  items-center">
                                <GoClock
                                    size={90}
                                    className='text-[#073836] '
                                />
                                <div className='text-[16px] text-[#073836] font-[400] pl-3 pr-30 '>Choose your checkout time</div>
                            </div>
                        </div>
                        <div className='flex flex-row justify-center gap-10'>
                            <Image
                                src="/icons/playstore.png"
                                alt='google review'
                                width={150}
                                height={150}

                            />
                            <Image
                                src="/icons/appstore.png"
                                alt='appstore review'
                                width={150}
                                height={150}

                            />
                        </div>
                    </div>

                    <div>
                        <div className='absolute right-55 top-[266%] '>
                            <video
                                src="/video/temp-video.mp4"
                                className=" w-[350px] h-[78vh]*/ h-fit object-cover"
                                controls
                                autoPlay
                                muted
                                loop
                                playsInline
                            ></video>
                        </div>
                        <div className="absolute top-[263%]  w-[76%] h-[60%] z-20 rounded-[20px] ">
                            <Image
                                src="/assets/mob-temp.png"
                                width={800}
                                height={800}
                                alt='template-video'
                                className=''


                            />
                        </div>
                    </div>

                </div>
                <div className='bg-[#ebede4] relative z-1 p-10'>
                    <div className="w-[70&] h-px bg-black my-6" />
                    <div className='flex flex-row justify-center gap-30 items-center mt-15 pb-15'>
                        <Image
                            src="/icons/reviews.png"
                            alt='review'
                            width={100}
                            height={100}

                        />
                        <Image
                            src="/icons/google_reviews.svg"
                            alt='review'
                            width={100}
                            height={100}

                        />
                        <Image
                            src="/icons/3rd review.png"
                            alt='review'
                            width={100}
                            height={100}

                        />

                    </div>
                </div>
            </section>
            <section>
                <div className='flex flex-row justify-center items-center gap-11 mt-20  mb-10 mx-28 py-6 bg-[#ebede4] fill rounded-[25px]'>
                    <div>
                        <Image
                            src="/icons/down-section-logo.png"
                            width={170}
                            height={170}
                            alt='down-section-logo'
                        />
                    </div>
                    <div>
                        <h3 className='font-serif text-2xl font-[500]'>Join Marriott Bonvoy <sup>®</sup> and earn points toward free nights for your stays.</h3>
                    </div>
                    <div>
                        <button className='border-2 cursor-pointer border-black rounded-full px-8 py-3 hover:bg-[#fcf5eb]'>
                            Join Today!
                        </button>
                    </div>
                </div>
            </section>


        </div>

    )
}

export default TempleteArea
import React from 'react'
import { GoChecklist } from "react-icons/go";
import { CiMobile4 } from "react-icons/ci";
import { TbMessages } from "react-icons/tb";
import { GoClock } from "react-icons/go";
import Image from "next/image";

const TemplateArea = () => {
    return (
        <div>
            <section className="bg-[#eaece2] relative overflow-hidden">
                <div className="flex flex-row min-h-screen">
                    {/* Left Content Area */}
                    <div className="flex-1 p-8 lg:p-12 max-w-2xl">
                        <div className="pt-12 pb-8">
                            <h1 className="text-4xl lg:text-5xl text-teal-900 font-serif leading-tight mb-6">
                                Everything you need is just a tap away
                            </h1>
                            <p className="text-lg text-teal-900 leading-relaxed max-w-md">
                                Customize your stay or connect with our digital concierge. The Sonder app puts you in control.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-lg">
                            <div className="flex items-center gap-4">
                                <GoChecklist size={40} className="text-teal-900 flex-shrink-0" />
                                <span className="text-teal-900 font-medium">Check in online</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <CiMobile4 size={40} className="text-teal-900 flex-shrink-0" />
                                <span className="text-teal-900 font-medium">Access your mobile key</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <TbMessages size={40} className="text-teal-900 flex-shrink-0" />
                                <span className="text-teal-900 font-medium">Chat with us 24/7</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <GoClock size={40} className="text-teal-900 flex-shrink-0" />
                                <span className="text-teal-900 font-medium">Choose your checkout time</span>
                            </div>
                        </div>

                        {/* App Store Buttons */}
                        <div className="flex gap-4">
                            <div className="relative w-35 h-12">
                                <Image
                                    src="/icons/playstore.png"
                                    alt="Download on Google Play"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="relative w-35 h-12">
                                <Image
                                    src="/icons/appstore.png"
                                    alt="Download on App Store"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Phone Mockup Area */}
                    <div className="flex-1 relative flex items-center justify-center lg:justify-end">
                        <div className="relative">
                            {/* Phone mockup image */}
                            <div className="right-[-3] relative z-20">
                                <Image
                                    src="/assets/mob-temp.png"
                                    alt="mockup"
                                    width={800}
                                    height={850}
                                />
                            </div>

                            {/* Video positioned inside phone screen */}
                            <div className="absolute top-[4%] left-[28%] w-[45%] h-[1] z-10 rounded-[1.5rem] overflow-hidden bg-black">
                                <video
                                    src="/video/temp-video.mp4"
                                    className="w-full h-full object-cover"
                                    controls={false}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#eaece2] relative z-30 -mt-12">
                    <div className="">
                        <div className=" py-8 pt-20">
                            <div className='border-t border-teal-900 border-opacity-20 w-[70%] mx-auto' />
                        <div className="flex justify-center items-center gap-22 flex-wrap pb-8 pt-12">
                            <div className="relative w-25 h-31">
                                <Image
                                    src="/icons/reviews.png"
                                    alt="TripAdvisor reviews"
                                    fill
                                    className="object-contain opacity-80"
                                />
                            </div>
                            <div className="relative w-20 h-16">
                                <Image
                                    src="/icons/google.png"
                                    alt="Google reviews"
                                    fill
                                    className="object-contain opacity-80"
                                />
                            </div>
                            <div className="relative w-20 h-16">
                                <Image
                                    src="/icons/3rd review.png"
                                    alt="Other reviews"
                                    fill
                                    className="object-contain opacity-80"
                                />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Marriott Bonvoy Section */}
           <section className="py-12 px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-row items-center justify-center gap-8 bg-[#eaece2] rounded-3xl p-8">
                        <div className=" flex items-center justify-center">
                            <div className=" w-24 h-24">
                                <Image
                                    src="/icons/down-section-logo.png"
                                    width={100}
                                    height={100}
                                    alt="Marriott Bonvoy logo"
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <div className="flex-1 text-center lg:text-left">
                            <h3 className="font-serif text-xl lg:text-2xl font-medium text-teal-900 whitespace-nowrap">
                                Join Marriott Bonvoy<sup>®</sup> and earn points toward free nights for your stays.
                            </h3>
                        </div>
                        <div className="flex-shrink-0">
                            <button className="border-2 border-teal-900 text-teal-900 rounded-full px-8 py-3 font-medium hover:bg-teal-900 hover:text-white transition-colors duration-200 whitespace-nowrap">
                                Join Today!
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TemplateArea
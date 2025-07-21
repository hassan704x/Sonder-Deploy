"use client";
import { IoLocationOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const HeaderSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Sample images - using placeholder images for demo
    const images = [
        {
            src: "/assets/slider-img-1.jpg",
            alt: "Luxury Hotel Room",
            captions: "Sonder One Platt | New York City",
        },
        {
            src: "/assets/slider-img-2.jpg",
            alt: "Resort Pool",
            captions: "Sonder Business Bay | Dubai",
        },
        {
            src: "/assets/slider-img-3.jpeg",
            alt: "Hotel Lobby",
            captions: "Sonder Business Bay | Dubai",
        },
        {
            src: "/assets/slider-img-4.jpg",
            alt: "Restaurant",
            captions: "Sonder Park House | Amsterdam",
        },
    ];

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval);
    }, [currentIndex, isAutoPlaying, images.length]);

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const handleMouseEnter = () => {
        setIsAutoPlaying(false);
    };

    const handleMouseLeave = () => {
        setIsAutoPlaying(true);
    };

    return (
        <div className="w-screen h-[80vh] max-w-full mx-auto mt-0">
            <div
                className="relative w-full h-full overflow-hidden shadow-lg group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* Main Image Container */}
                <div
                    className="flex transition-transform duration-500 ease-in-out h-[100%]"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="w-full h-full flex-shrink-0 relative">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Gradient Overlay with Heading */}
                
                <div className=" absolute  inset-0 bg-gradient-to-r from-[#f7f7f7ea] via-40% to-transparent z-10">
                    <div className="flex items-center h-full px-8 md:px-16 lg:px-20 absolute top-[-60]">
                        <div className="max-w-2xl">
                            <h1 className="text-[48px] md:text-[72px] leading-[1] tracking-[0.15px] font-serif font-[500] text-[#073836] mb-4">
                                A better way<br></br>
                                to stay

                            </h1>
                            <p className=" font-sans text-[16px] md:text-[18px]  text-[#073836] font-[300] my-4 mb-8 leading-relaxed max-w-xl">
                                A choice of stays in the cities you love,<br className="hidden md:block"></br> powered by an
                                app that puts you in<br className="hidden md:block"></br> control. Now part of Marriott Bonvoy
                            </p>
                        </div>
                    </div>

                    {/* Caption Overlay - Now inside gradient layer */}
                    <div className="absolute bottom-20 left-13 right-0 to-transparent p-6">
                        <h3 className="text-[#073836] text-[14px] md:text-[16px] font-[300] flex flex-row items-center gap-2"><IoLocationOutline
                            size={20} />{images[currentIndex].captions}</h3>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
                    suppressHydrationWarning={true}
                >
                    <ChevronLeft size={28} />
                </button>

                <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
                    suppressHydrationWarning={true}
                >
                    <ChevronRight size={28} />
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-4 h-4 rounded-full transition-all duration-300 ${index === currentIndex
                                ? "bg-white scale-110 shadow-lg"
                                : "bg-white/50 hover:bg-white/75"
                                }`}
                            suppressHydrationWarning={true}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeaderSlider;
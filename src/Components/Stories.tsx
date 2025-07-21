"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const SonderStories = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const storySlides = [
        [
            {
                id: 1,
                image: "/assets/story-slider-1.jpg",
                title: "Craving Barcelona: meet Pedro at INSOLENT",
                link: "#"
            },
            {
                id: 2,
                image: "/assets/story-slider-2.jpg",
                title: "Five scene-stealing day trips in the French Riviera",
                link: "#"
            },
            {
                id: 3,
                image: "/assets/story-slider-3.jpg",
                title: "Passport to Pride: Our top picks for the season",
                link: "#"
            },
            {
                id: 4,
                image: "/assets/story-slider-4.jpg",
                title: "The Sonder secret to 24 hours in Florence",
                link: "#"
            }
        ],
    ];

    const goToSlide = (index:number) => {
        setCurrentSlide(index);
    };

    return (
        <div className="bg-orange-50 py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-6 leading-tight">
                        Sonder stories
                    </h2>
                    <p className="text-gray-800 text-lg md:text-xl leading-relaxed max-w-3xl">
                        From the latest news to travel inspiration, learn more about the world of Sonder.
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative mb-12">
                    {/* Stories Grid */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {storySlides.map((slide, slideIndex) => (
                                <div key={slideIndex} className="w-full flex-shrink-0">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                                        {slide.map((story) => (
                                            <div key={story.id} className="group cursor-pointer">
                                                <div className="relative overflow-hidden mb-6 h-48 md:h-56">
                                                    <Image
                                                        src={story.image}
                                                        alt={story.title}
                                                        fill
                                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                                    />
                                                </div>
                                                <div className="space-y-4">
                                                    <h3 className="text-base md:text-lg font-normal text-teal-900 leading-snug">
                                                        {story.title}
                                                    </h3>
                                                    <a
                                                        href={story.link}
                                                        className="inline-block text-base md:text-lg text-teal-900 underline hover:text-teal-700 transition-colors"
                                                    >
                                                        Continue reading
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center items-center space-x-3 mb-16">
                    {storySlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-2 h-2 rounded-full transition-colors cursor-pointer duration-200 ${
                                index === currentSlide ? 'bg-gray-600' : 'bg-gray-300'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Read the Blog Button */}
                <div className="text-center">
                    <button className="bg-teal-800 hover:bg-teal-900 cursor-pointer text-white px-10 py-4 rounded-full text-lg font-medium transition-colors duration-200 shadow-sm hover:shadow-md">
                        Read the blog
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SonderStories;
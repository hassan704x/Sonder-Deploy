"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      text: "Beautiful stay and was blown away by the thoughtful design and detail of the apartment. Can't wait to visit other Sonders in the future.",
      author: "Sarah",
      location: "London",
      bgColor: "bg-gray-200",
      roundedCorner: "rounded-tl-[50px]"
    },
    {
      text: "Absolutely perfect for a stay whether you're a solo traveler, couple or a family.",
      author: "Joanne",
      location: "Rome",
      bgColor: "bg-yellow-200",
      roundedCorner: "rounded-br-[50px]"
    },
    {
      text: "Love the app! It works seamlessly and all the information is super clear to make the experience so easy.",
      author: "Jimena",
      location: "Miami",
      bgColor: "bg-orange-200",
      roundedCorner: "rounded-tr-[50px]"
    },
    {
      text: "The location was incredible and the space was modern, clean, and comfortable. Would definitely stay again!",
      author: "Marcus",
      location: "Barcelona",
      bgColor: "bg-blue-200",
      roundedCorner: "rounded-bl-[50px]"
    },
    {
      text: "Everything was exactly as described and the check-in process was so smooth. Highly recommend!",
      author: "Elena",
      location: "Paris",
      bgColor: "bg-green-200",
      roundedCorner: "rounded-tl-[50px]"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % testimonials.length;
      visible.push({ ...testimonials[index], index });
    }
    return visible;
  };

  return (
    <div className="w-full 7xl mx-auto px-4 py-16 bg" >
      {/* Header */}
      <div className="mb-12 ml-20">
        <h2 className="text-4xl md:text-5xl font-serif text-[#073836] mb-4">
          Every stay has a story
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          But don`t just take our word for it — see what our guests have to say.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        {/* White gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>
        
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>

        {/* Testimonial Cards */}
        <div 
          className="flex transition-transform duration-500 ease-in-out gap-8 px-16"
          style={{
            transform: `translateX(-${currentSlide * (100 / 2.5)}%)`,
            width: `${(testimonials.length * 100) / 2.5}%`
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${testimonial.bgColor} ${testimonial.roundedCorner} p-10 h-96 flex flex-col justify-between transition-all duration-500 flex-shrink-0`}
              style={{ width: `${100 / testimonials.length}%`, minWidth: '400px' }}
            >
              <div>
                <p className="text-xl md:text-2xl leading-relaxed text-gray-800 font-medium">
                  {testimonial.text}
                </p>
              </div>
              
              <div className="mt-6">
                <p className="font-semibold text-gray-800 text-xl">
                  {testimonial.author}
                </p>
                <p className="text-gray-600 text-lg">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full  cursor-pointer transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-gray-800' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
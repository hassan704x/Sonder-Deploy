"use client"
import Image from 'next/image';
import React from 'react'

const Locations = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20 mt-10">
      {/* Header Section */}
      <div className='px-20 mb-12'>
        <h1 className='text-[48px] leading-[1] tracking-[0.15px] font-serif font-[500] text-[#073836] mb-6'>
          A world of choice
        </h1>
        <p className='font-sans text-[18px] text-[#073836] font-[400] leading-relaxed max-w-xl'>
          Space just for you, or your entire crew. Choose from apartments and boutique hotels in over 40 cities around the world.
        </p>
      </div>

      {/* Grid Section */}
      <div className="px-4 lg:px-20">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 h-[600px]">
            {/* Left Column */}
            <div className="flex flex-col gap-6">
              {/* London */}
              <div className="flex-1 flex flex-col min-h-0">
                <div className="flex-1 relative overflow-hidden  shadow-lg">
                  <Image
                    src="/assets/1.jpg"
                    alt="London luxury restaurant interior"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h2 className="font-serif text-4xl font-medium mt-3 text-[#073836]">London</h2>
              </div>

              {/* Dubai */}
              <div className="flex-1 flex flex-col min-h-0">
                <div className="flex-1 relative overflow-hidden  shadow-lg">
                  <Image
                    src="/assets/3.jpg"
                    alt="Dubai luxury pool"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h2 className="font-serif text-4xl font-medium mt-3 text-[#073836]">Dubai</h2>
              </div>
            </div>

            {/* Center Column - New York City */}
            <div className="flex flex-col min-h-0">
              <div className="flex-1 relative overflow-hidden  shadow-lg">
                <Image
                  src="/assets/5.png"
                  alt="New York City skyline at sunset"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300 rounded-tr-[80px]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h2 className="font-serif text-4xl font-medium mt-3 text-[#073836]">New York City</h2>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6">
              {/* Los Angeles */}
              <div className="flex-1 flex flex-col min-h-0">
                <div className="flex-1 relative overflow-hidden  shadow-lg">
                  <Image
                    src="/assets/2.jpg"
                    alt="Los Angeles luxury pool"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h2 className="font-serif text-4xl font-medium mt-3 text-[#073836]">Los Angeles</h2>
              </div>

              {/* Montreal */}
              <div className="flex-1 flex flex-col min-h-0">
                <div className="flex-1 relative overflow-hidden  shadow-lg">
                  <Image
                    src="/assets/4.jpg"
                    alt="Montreal luxury hotel entrance"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h1 className="font-serif text-4xl font-medium mt-3 text-[#073836]">Montreal</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center py-12">
          <button className="bg-[#073836] hover:bg-[#0a4c49] cursor-pointer text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
            View all cities
          </button>
        </div>
      </div>
    </div>
  )
}

export default Locations
"use client";

import { IoSearchOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const HeaderTop = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenHeight = window.innerHeight;
      
      // Show search bar and button when scrolled down past screen height
      setIsScrolled(scrollPosition > screenHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center min-h-[35px] bg-white m-3 gap-6 ml-10">
          <Image src="/assets/Logo.png" width={124} height={124} alt="Logo" className="ml-10" />
          
          
          <div className={`relative transition-all duration-300 ${
            isScrolled ? 'block' : 'lg:hidden xl:hidden'
          }`}>
            <input
              type="text"
              placeholder="Select a City"
              className="peer bg-[#fcf5eb] py-2 px-10 rounded-full text-[#073937] pl-15 pr-4 focus:bg-[#073937] focus:text-white focus:placeholder-white gap-2"
            />
            <IoSearchOutline
              className="absolute left-5 top-0 mr-3 mt-3 text-[#073937] items-center peer-focus:text-white"
              size={20}
            />
          </div>
          
          {/* Search button - hidden on lg/xl screens, visible on smaller screens or when scrolled */}
          <button className={`border bg-[#073937] cursor-pointer text-white py-2 px-7 rounded-full text-[18px] hover:bg-[rgb(11,115,111)] transition-all duration-300 ${
            isScrolled ? 'block' : 'lg:hidden xl:hidden'
          }`}>
            Search
          </button>
        </div>
               
        <div className="flex flex-row items-center gap-2 mr-10">
          <div className="hover:bg-orange-100 rounded-full hidden md:block">
            <select className="text-gray-900 text-[18px] appearance-none border-none bg-transparent py-2 px-5 rounded-full focus:outline-none cursor-pointer" name="currency"
              id="currency"
            >
              <option value="USD ($)">USD ($)</option>
              <option value="EUR">EUR</option>
              <option value="ADE">ADE</option>
              <option value="CAD">CAD</option>
              <option value="GBP">GBP</option>
              <option value="MXN">MXN</option>
            </select>
          </div>
                 
          <div className="hover:bg-orange-100 rounded-full hidden md:block">
            <select className="text-gray-900 text-[18px] appearance-none border-none bg-transparent py-2 px-5 rounded-full focus:outline-none cursor-pointer"
              name="language"
              id="language"
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
              <option value="Italian">Italian</option>
              <option value="Portuguese">Portuguese</option>
            </select>
          </div>
                 
          <div className="text-gray-900 text-[18px] py-2 px-5 hover:bg-orange-100 rounded-full cursor-pointer whitespace-nowrap hidden md:block">
            Find my stays
          </div>
                 
          <div className="text-gray-900 text-[18px] py-2 px-5 hover:bg-orange-100 rounded-full cursor-pointer whitespace-nowrap hidden md:block">
            Log in
          </div>
                 
          <div className="p-2 hover:bg-orange-100 rounded-full cursor-pointer">
            <IoMenu 
             className="text-gray-900"
             size={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
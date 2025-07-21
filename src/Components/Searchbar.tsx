"use client";

import React, { useState } from 'react';
import { Search, Calendar, Users, Plus, Minus, MapPin, ArrowRight } from 'lucide-react';

const HotelSearchComponent = () => {
  const [city, setCity] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const popularCities = [
    'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
    'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'
  ];

  const filteredCities = popularCities.filter(cityName =>
    cityName.toLowerCase().includes(city.toLowerCase())
  );

  const handleCitySelect = (selectedCity: string) => {
    setCity(selectedCity);
    setShowCityDropdown(false);
  };

  const incrementGuests = () => {
    setGuests(prev => Math.min(prev + 1, 10));
  };

  const decrementGuests = () => {
    setGuests(prev => Math.max(prev - 1, 1));
  };

  const handleSearch = () => {
    console.log('Search params:', { city, checkIn, checkOut, guests });
    // Handle search logic here
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric'
    });
  };

  return (
    <div className="absolute top-133 left-1/2 transform -translate-x-1/2 w-full max-w-6xl  z-50 bg-white py-8 px-5 rounded-full ">
      <div className="rounded-full shadow-lg border-2 border-[#b8b7b7] p-6 bg-[#fcf5eb] hover:bg-white hover:bg-opacity-70 transition-colors duration-200 rounded-l-full ">
        <div className="flex items-stretch gap-0 divide-x divide-gray-200 h-6  ">
          {/* City Selection */}
          <div className="relative flex-1 min-w-0 h-full flex items-center ">
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#777777]">
                <MapPin size={20} />
              </div>
              <input
                type="text"
                placeholder="Select a city"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                  setShowCityDropdown(true);
                }}
                onFocus={() => setShowCityDropdown(true)}
                className="w-full pl-12 pr-4 py-3 border-0 focus:ring-0 focus:outline-none text-gray-800 placeholder-gray-500 bg-transparent text-base"
              />
              {showCityDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto">
                  {filteredCities.map((cityName, index) => (
                    <div
                      key={index}
                      className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-150 border-b border-gray-100 last:border-b-0"
                      onClick={() => handleCitySelect(cityName)}
                    >
                      <div className="flex items-center">
                        <MapPin size={16} className="text-gray-400 mr-3" />
                        <span className="text-gray-800">{cityName}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Combined Date Selection */}
          <div className="relative flex-1 min-w-0 px-4 h-full flex items-center hover:bg-white hover:bg-opacity-70 transition-colors duration-200">
            <div 
              className="flex items-center gap-3 w-full cursor-pointer py-3"
              onClick={() => setShowDatePicker(!showDatePicker)}
            >
              <Calendar size={20} className="text-gray-400" />
              <div className="flex items-center gap-2">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500">Check-in</span>
                  <span className="text-gray-800 font-medium text-base">
                    {checkIn ? formatDate(checkIn) : ''}
                  </span>
                </div>
                <ArrowRight size={16} className="text-gray-400 mx-2" />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500">Check-out</span>
                  <span className="text-gray-800 font-medium text-base">
                    {checkOut ? formatDate(checkOut) : ''}
                  </span>
                </div>
              </div>
            </div>
            
            {showDatePicker && (
              <div className="absolute top-full left-4 right-4 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-50 p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm"
                    />
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => setShowDatePicker(false)}
                    className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200 text-sm font-medium"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Guests Counter */}
          <div className="relative px-4 h-full flex items-center hover:bg-white hover:bg-opacity-70 transition-colors duration-200">
            <div className="flex items-center gap-3 py-3 min-w-[200px]">
              <Users size={20} className="text-gray-400" />
              <span className="text-xs text-gray-500">Guests</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={decrementGuests}
                  className="w-6 h-6 rounded-full  cursor-pointer border border-gray-300 flex items-center justify-center hover:border-teal-500 transition-colors duration-200"
                  disabled={guests <= 1}
                >
                  <Minus size={14} className={guests <= 1 ? 'text-gray-300' : 'text-gray-600'} />
                </button>
                <span className="w-6 text-center font-medium text-gray-800 text-base">{guests}</span>
                <button
                  onClick={incrementGuests}
                  className="w-6 h-6 rounded-full cursor-pointer border border-gray-300 flex items-center justify-center hover:border-teal-500 transition-colors duration-200"
                  disabled={guests >= 10}
                >
                  <Plus size={14} className={guests >= 10 ? 'text-gray-300' : 'text-gray-600'} />
                </button>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div className="h-full flex items-center hover:bg-white hover:bg-opacity-70 transition-colors duration-200 rounded-r-full">
            <button
              onClick={handleSearch}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg h-full text-base"
            >
              <Search size={20} />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelSearchComponent;
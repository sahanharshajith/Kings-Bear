import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import banner1 from "../assets/main_banner_bg2.jpg"; 
import banner2 from "../assets/main_banner_bg.jpg";    
import banner3 from "../assets/main_banner_bg1.jpg";    
import banner1Sm from "../assets/main_banner_bg_sm.jpg"; 
import banner2Sm from "../assets/main_banner_bg_sm1.jpg"; 

import white_arrow_icon from "../assets/white_arrow_icon.svg";
import black_arrow_icon from "../assets/black_arrow_icon.svg";

const MainBanner = () => {
  const slides = [
    {
      desktop: banner1,
      mobile: banner1Sm,
      title: "Indulge in the Finest Chocolates – Sweet Moments Await!",
    },
    {
      desktop: banner2,
      mobile: banner2Sm,
      title: "Discover Cuddly Teddy Bears That Warm Every Heart!",
    },
    {
      desktop: banner3,
      mobile: banner1Sm,
      title: "Make Every Occasion Magical with Surprise Event Teddies!",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative overflow-hidden h-[400px] md:h-[450px] w-full max-w-[100vw] mt-16">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div key={index}>
          {/* Desktop Image */}
          <img
            src={slide.desktop}
            alt={`banner-desktop-${index}`}
            className={`w-full h-full object-cover hidden md:block absolute top-0 left-0 transition-opacity duration-1000 rounded-lg ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ width: '100%', objectPosition: 'center' }}
          />
          {/* Mobile Image */}
          <img
            src={slide.mobile}
            alt={`banner-mobile-${index}`}
            className={`w-full h-full object-cover md:hidden absolute top-0 left-0 transition-opacity duration-1000 rounded-lg ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ width: '100%', objectPosition: 'center' }}
          />
        </div>
      ))}

      {/* Dark Overlay for text readability - adjusted to not cover full width */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent rounded-lg" />

      {/* Dynamic Text (changes per slide) - adjusted padding */}
      <div className="absolute inset-0 flex flex-col justify-end md:justify-center items-center md:items-start pb-20 md:pb-0 px-4 md:px-8 lg:px-12">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15 text-white drop-shadow-lg transition-opacity duration-700">
          {slides[currentSlide].title}
        </h1>

        <div className="flex items-center mt-6 font-medium">
          <Link
            to="/products"
            className="cursor-pointer px-6 py-2 bg-primary hover:bg-primary/90 transition text-white rounded font-medium shadow-lg hover:shadow-primary/30"
          >
            Shop Now
            <img
              className="md:hidden transition group-focus:translate-x-1"
              src={white_arrow_icon}
              alt="arrow"
            />
          </Link>

          <Link
            to="/products"
            className="group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer text-white"
          >
            Explore deals
            <img
              className="transition group-hover:translate-x-1"
              src={black_arrow_icon}
              alt="arrow"
            />
          </Link>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white text-2xl p-2 md:p-3 rounded-full transition"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white text-2xl p-2 md:p-3 rounded-full transition"
      >
        ›
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125 shadow-lg"
                : "bg-gray-400 hover:bg-gray-200"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default MainBanner;
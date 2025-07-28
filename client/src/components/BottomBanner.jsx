import React from 'react';
import { Link } from 'react-router-dom';
import bottom_banner from '../assets/bottom_banner.png';

const BottomBanner = () => {
  return (
    <div className="relative py-16 px-6 md:px-12 lg:px-24 ">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 font-serif tracking-wide relative inline-block">
                    <span className="relative z-10">
                        Kings <span className="text-primary">Bear</span> Collection
                    </span>
                </h2>
            </div>

            <div className="mb-10">
                <div className="relative rounded-xl overflow-hidden">
                    <img 
                      src={bottom_banner} 
                      alt="Premium handmade teddy bear" 
                      className="w-full h-auto object-cover"
                    />
                </div>
            </div>
            <div className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 mx-auto max-w-3xl space-y-4">
                <p>
                  Each Kings Bear is meticulously handcrafted using only the finest materials, designed to become lifelong companions.
                  Our artisans pour love into every stitch, creating heirloom-quality teddy bears that spark joy for generations.
                  Limited edition designs ensure your bear remains a unique treasure.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/products" onClick={() => scrollTo(0,0)}
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-primary/30"

                >
                  SHOP OUR BEARS
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
                <Link 
                  to="/products" onClick={() => scrollTo(0,0)}
                  className="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary/10 font-medium py-3 px-8 rounded-full transition-all duration-300"
                >
                  VIEW COLLECTIONS
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
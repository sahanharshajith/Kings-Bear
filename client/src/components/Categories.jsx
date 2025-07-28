import React, { useRef, useState, useEffect } from 'react';
import { categories } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
    const navigate = useNavigate();
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [autoScroll, setAutoScroll] = useState(true);
    const scrollSpeed = 5;

    const loopedCategories = [...categories, ...categories];

    // Auto-scroll effect
    useEffect(() => {
        if (!autoScroll) return;

        const scrollContainer = scrollRef.current;
        let animationFrameId;

        const scroll = () => {
            if (!scrollContainer) return;

            scrollContainer.scrollLeft += scrollSpeed;

            // Reset when halfway (end of first set)
            if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                scrollContainer.scrollLeft = 0;
            }

            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(animationFrameId);
    }, [autoScroll]);

    // Hover controls (Pause only)
    const handleMouseEnterCategory = () => {
        setAutoScroll(false); // Stop scrolling on hover
    };

    const handleMouseLeaveCategory = () => {
        setAutoScroll(true); // Resume scrolling (same speed)
    };

    // Manual drag
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setAutoScroll(false);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        setAutoScroll(true);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        setAutoScroll(true);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const scrollManual = (direction) => {
        setAutoScroll(false);
        const container = scrollRef.current;
        const scrollAmount = container.clientWidth * 0.8;

        container.scrollTo({
            left: container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount),
            behavior: 'smooth'
        });

        // Resume after 5s
        setTimeout(() => setAutoScroll(true), 5000);
    };

    return (
        <div className="mt-16 px-4 relative">
            {/* Title */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 font-serif tracking-wide">
                    Our <span className="text-primary">Teddy Bear</span> Collection
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Handcrafted with love, each bear tells its own special story
                </p>
            </div>

            {/* Navigation Buttons */}
            <div className="relative">
                <button
                    onClick={() => scrollManual('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                    aria-label="Scroll left"
                >
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={() => scrollManual('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                    aria-label="Scroll right"
                >
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Categories Carousel */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto px-6 py-8 scrollbar-hide select-none cursor-grab active:cursor-grabbing"
                    style={{ scrollBehavior: "smooth" }}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    {loopedCategories.map((category, index) => (
                        <div
                            key={index}
                            onMouseEnter={handleMouseEnterCategory}
                            onMouseLeave={handleMouseLeaveCategory}
                            className="group flex-shrink-0 cursor-pointer w-56 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            style={{
                                background: `linear-gradient(135deg, ${category.bgColor} 0%, ${lightenColor(category.bgColor, 30)} 100%)`,
                                border: `1px solid ${lightenColor(category.bgColor, 20)}`
                            }}
                            onClick={() => {
                                navigate(`/products/category/${category.category.toLowerCase()}`);
                                scrollTo(0, 0);
                            }}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden rounded-full p-4 mb-4 w-32 h-32 flex items-center justify-center bg-white/90 shadow-inner">
                                <img
                                    src={category.image_name}
                                    alt={category.name}
                                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                            </div>

                            {/* Info */}
                            <h3 className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">
                                {category.name}
                            </h3>
                            <p className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full mb-2 duration-300">
                                Explore Collection
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Helper: Lighten a HEX color for gradient effects
function lightenColor(color, percent) {
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return `#${(
        0x1000000 +
        (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
        (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
        (B < 255 ? (B < 1 ? 0 : B) : 255)
    ).toString(16).slice(1)}`;
}

export default Categories;

import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
            {/* Hero Section */}
            <div className="relative text-gray-800 py-12">
                <div className="relative max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
                        The <span className="text-primary">Kings Bear</span> Legacy
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Crafting memories, one teddy bear at a time since our humble beginnings
                    </p>
                </div>
            </div>

            {/* Our Story Section - Now comes after showing what you do */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-rows-1 lg:grid-rows-1 items-center">
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-serif">
                            Our <span className="text-primary">Story</span> Begins
                        </h2>
                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>
                                Founded in a small workshop in London, Kings Bear began with a simple mission: 
                                to create teddy bears that would become lifelong companions. What started as 
                                a passion project between two childhood friends has grown into a beloved brand 
                                known for exceptional craftsmanship.
                            </p>
                            <p>
                                Each Kings Bear is still handmade by our team of master crafters, continuing 
                                the traditions that made our first bears so special. We believe every stitch 
                                should tell a story of love, care, and attention to detail.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link 
                                to="/products" 
                                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                Explore Our Collection
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <Link 
                                to="/contact" 
                                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white hover:bg-gray-50 text-gray-800 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border border-gray-200"
                            >
                                Meet Our Artisans
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Materials Section - Moved to top as it's fundamental */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="space-y-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-serif">
                        Only the <span className="text-primary">Finest Materials</span>
                    </h2>
                    <div className="space-y-6 text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
                        <p>
                            We source our materials from the world's most reputable suppliers, 
                            ensuring every Kings Bear meets our exacting standards for quality 
                            and safety.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            { icon: "🧸", title: "Premium mohair and alpaca wool", desc: "for the softest fur" },
                            { icon: "🛡️", title: "Hypoallergenic stuffing", desc: "that maintains its shape" },
                            { icon: "🌱", title: "Eco-friendly packaging", desc: "materials" },
                            { icon: "✨", title: "Non-toxic dyes", desc: "safe for all ages" }
                        ].map((item, index) => (
                            <div key={index} className="group p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/20">
                                <div className="text-center">
                                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300 block mb-4">{item.icon}</span>
                                    <h4 className="font-semibold text-gray-800 group-hover:text-primary transition-colors mb-2">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-gray-500">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Craftsmanship Section - Next as it builds on materials */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="space-y-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold font-serif">
                            The Art of <span className="text-primary">Teddy Making</span>
                        </h2>
                        <div className="space-y-6 text-gray-200 text-lg leading-relaxed max-w-4xl mx-auto">
                            <p>
                                Our bears are created using techniques passed down through generations 
                                of toy makers. Each bear takes approximately 12-15 hours to complete, 
                                with every step performed by hand.
                            </p>
                            <p>
                                From carefully selecting the finest materials to hand-stitching 
                                each seam and embroidering those perfect little noses, our artisans pour 
                                their hearts into every creation.
                            </p>
                        </div>
                        <div className="flex items-center justify-center gap-8 text-primary">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-primary rounded-full animate-pulse"></span>
                                <span className="font-medium">12-15 hours per bear</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-primary rounded-full animate-pulse"></span>
                                <span className="font-medium">100% handmade</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Section - Added as a new concluding section */}
            <div className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-serif text-center mb-12">
                        Our <span className="text-primary">Core Values</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Quality Craftsmanship",
                                description: "Every stitch matters in our pursuit of perfection",
                                icon: "✂️"
                            },
                            {
                                title: "Ethical Sourcing",
                                description: "Sustainable materials from trusted suppliers",
                                icon: "🌍"
                            },
                            {
                                title: "Timeless Designs",
                                description: "Creating heirlooms for generations to cherish",
                                icon: "⏳"
                            }
                        ].map((value, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                                <span className="text-4xl mb-4 inline-block">{value.icon}</span>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
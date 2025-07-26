import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactUs = () => {
    return (
        <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
            {/* Hero Section */}
            <div className="text-gray-800 py-12">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
                        Get In <span className="text-primary">Touch</span>
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We'd love to hear from you and help you find the perfect teddy bear companion
                    </p>
                </div>
            </div>

            {/* Contact Grid */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-800 font-serif mb-4">
                                Send Us a <span className="text-primary">Message</span>
                            </h2>
                            <p className="text-gray-600">We'll get back to you within 24 hours</p>
                        </div>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-semibold text-gray-700 mb-2">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="first-name"
                                        className="w-full border-2 border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                                        placeholder="Enter your first name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="last-name"
                                        className="w-full border-2 border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                                        placeholder="Enter your last name"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full border-2 border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full border-2 border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                                    placeholder="+44 20 1234 5678"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full border-2 border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                                    placeholder="Tell us about your inquiry or custom bear request..."
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-primary to-primary-dull text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/30"
                                >
                                    Send Message
                                    <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl font-bold text-gray-800 font-serif mb-4">
                                Contact <span className="text-primary">Information</span>
                            </h2>
                            <p className="text-gray-600">
                                Find us at our cozy workshop or reach out through any of these channels
                            </p>
                        </div>
                        
                        <div className="space-y-6">
                            {/* Address */}
                            <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/20">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                            <FaMapMarkerAlt className="h-6 w-6 text-primary" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors">
                                            Our Workshop
                                        </h3>
                                        <p className="mt-2 text-gray-600 leading-relaxed">
                                            123 Teddy Bear Lane<br />
                                            London, UK NW1 8AB
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/20">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                            <FaPhone className="h-6 w-6 text-primary" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors">
                                            Call Us
                                        </h3>
                                        <p className="mt-2 text-gray-600 leading-relaxed">
                                            +44 20 1234 5678<br />
                                            <span className="text-sm text-gray-500">Mon-Fri: 9am-5pm</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/20">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                            <FaEnvelope className="h-6 w-6 text-primary" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors">
                                            Email Us
                                        </h3>
                                        <p className="mt-2 text-gray-600 leading-relaxed">
                                            hello@kingsbear.com<br />
                                            <span className="text-sm text-gray-500">We typically reply within 24 hours</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/20">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                            <FaClock className="h-6 w-6 text-primary" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors">
                                            Workshop Hours
                                        </h3>
                                        <div className="mt-2 text-gray-600 leading-relaxed space-y-1">
                                            <p>Monday-Friday: 9am-5pm</p>
                                            <p>Saturday: 10am-4pm</p>
                                            <p>Sunday: Closed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Location Section */}
            <div className="bg-gradient-to-r text-gray-800 py-20">
                <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif">
                        Visit Our <span className="text-primary">Workshop</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Come see where the magic happens! Our workshop doors are always open for 
                        visitors who want to see how we craft each teddy bear with love and care.
                    </p>
                    <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 max-w-4xl mx-auto backdrop-blur-sm border border-white/20">
                        <div className="flex items-center justify-center space-y-4 text-center">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                                <p className="text-gray-600 mb-4">123 Teddy Bear Lane, London, UK NW1 8AB</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                                        <FaMapMarkerAlt className="w-4 h-4" />
                                        Get Directions
                                    </a>
                                    <a href="#" className="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary/10 font-medium py-3 px-8 rounded-full transition-all duration-300">
                                        <FaPhone className="w-4 h-4" />
                                        Call Before Visit
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
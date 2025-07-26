import React from 'react';
import logo from '../assets/kingsbearlogo.png';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-200 w-full">
            <div className="w-full px-6 md:px-8 lg:px-12 py-16">
                {/* Grid Layout */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
                        {/* Brand Column */}
                        <div className="md:col-span-3 lg:col-span-1 space-y-6">
                            <img src={logo} alt="Kings Bear Logo" className="h-20" />
                            <p className="text-white text-sm leading-relaxed">
                                Kings Bear offers exquisite handmade teddy bears crafted with premium materials and exceptional attention to detail.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                            <ul className="space-y-3">
                                {['Home', 'Best Sellers', 'New Arrivals', 'Collections', 'Gift Cards'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-white hover:text-primary transition-colors text-sm">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white">Support</h3>
                            <ul className="space-y-3">
                                {['Shipping Policy', 'Returns & Exchanges', 'FAQ', 'Privacy Policy', 'Contact Us'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-white hover:text-primary transition-colors text-sm">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white">Stay Inspired</h3>
                            <p className="text-white text-sm">
                                Subscribe to receive updates, access to exclusive deals, and more.
                            </p>
                            <form className="mt-4 space-y-3">
                                <div className="relative">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="w-full px-4 py-3 text-sm text-white bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder-gray-400"
                                    />
                                    <button
                                        type="submit"
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary hover:text-primary-dull"
                                    >
                                        <svg className="w-5 h-5 text-white hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </button>
                                </div>
                                <p className="text-xs text-gray-400">
                                    We respect your privacy. Unsubscribe at any time.
                                </p>
                            </form>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="w-full pt-8 border-t border-gray-700">
                        <div className="flex flex-col md:flex-row justify-between items-center">

                            <p className="text-white text-sm">
                                © {new Date().getFullYear()} Kings Bear. All rights reserved.
                            </p>

                            <div className="flex items-center gap-4">
                                <a href="#">
                                    <svg className="w-6 h-6 text-white hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM4.5 7.75A3.25 3.25 0 017.75 4.5h8.5a3.25 3.25 0 013.25 3.25v8.5a3.25 3.25 0 01-3.25 3.25h-8.5a3.25 3.25 0 01-3.25-3.25v-8.5zm9.5 1a4 4 0 11-4 4 4 4 0 014-4zm0 1.5a2.5 2.5 0 102.5 2.5 2.5 2.5 0 00-2.5-2.5zm3.5-.75a.75.75 0 11.75-.75.75.75 0 01-.75.75z" />
                                    </svg>
                                </a>
                                {/* Facebook */}
                                <a href="#">
                                    <svg className="w-6 h-6 text-white hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M13.5 9H15V6.5h-1.5c-1.933 0-3.5 1.567-3.5 3.5v1.5H8v3h2.5V21h3v-7.5H16l.5-3h-3z" />
                                    </svg>
                                </a>
                                {/* Twitter */}
                                <a href="#">
                                    <svg className="w-6 h-6 text-white hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22 5.92a8.2 8.2 0 01-2.36.65A4.1 4.1 0 0021.4 4a8.27 8.27 0 01-2.6 1A4.14 4.14 0 0016 4a4.15 4.15 0 00-4.15 4.15c0 .32.04.64.1.94a11.75 11.75 0 01-8.52-4.32 4.14 4.14 0 001.29 5.54A4.1 4.1 0 013 10v.05a4.15 4.15 0 003.33 4.07 4.12 4.12 0 01-1.87.07 4.16 4.16 0 003.88 2.89A8.33 8.33 0 012 19.56a11.72 11.72 0 006.29 1.84c7.55 0 11.68-6.25 11.68-11.67 0-.18 0-.35-.01-.53A8.18 8.18 0 0022 5.92z" />
                                    </svg>
                                </a>
                                {/* LinkedIn */}
                                <a href="#">
                                    <svg className="w-6 h-6 text-white hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48c0 1.1.88 1.98 1.98 1.98h.02c1.1 0 1.98-.88 1.98-1.98C6.98 4.38 6.1 3.5 4.98 3.5zM3 8.75h3.96V21H3V8.75zm6.25 0h3.8v1.68h.05c.53-.98 1.82-2.02 3.75-2.02 4.01 0 4.75 2.64 4.75 6.07V21H17v-5.63c0-1.34-.03-3.07-1.88-3.07-1.88 0-2.17 1.47-2.17 2.98V21H9.25V8.75z" />
                                    </svg>
                                </a>
                            </div>

                            <div className="flex items-center gap-6 mt-4 md:mt-0">
                                {['Terms', 'Privacy', 'Cookies', 'Accessibility'].map((item) => (
                                    <a key={item} href="#" className="text-white hover:text-primary text-sm transition-colors">
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
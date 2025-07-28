import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/kingsbearlogo.png';
import search_icon from '../assets/search_icon.svg';
import menu_icon from '../assets/menu_icon.svg';
import { useAppContext } from '../context/AppContext.jsx';
import profile_icon from '../assets/profile_icon.png';
import { useEffect } from 'react';

function NavBar() {
    const [open, setOpen] = React.useState(false);
        const { user, setUser, setShowUserLogin, searchQuery, setSearchQuery, getCartCount, navigate, favorites } = useAppContext();

    const logout = async () => {
        setUser(null);
        navigate('/');
        setShowUserLogin(false);
    };

    useEffect(() => {
        if (searchQuery.length > 0) {
            navigate('/products');
        }
    }, [searchQuery]);

    const handleLoginClick = () => {
        setShowUserLogin(true);
    };

    return (
        <nav className="flex items-center justify-between px-4 md:px-8 lg:px-12 py-3 bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg">
            {/* Logo */}
            <NavLink to="/" onClick={() => setOpen(false)} className="flex items-center">
                <img src={logo} alt="Logo" className="w-18 h-auto object-contain" />
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8 text-lg">
                <NavLink 
                    to='/' 
                    className={({isActive}) => `text-white hover:text-primary transition px-2 py-1 rounded-md hover:underline decoration-2 underline-offset-4 ${isActive ? "text-primary font-medium underline" : ""}`}
                >
                    Home
                </NavLink>
                <NavLink 
                    to='/products' 
                    className={({isActive}) => `text-white hover:text-primary transition px-2 py-1 rounded-md hover:underline decoration-2 underline-offset-4 ${isActive ? "text-primary font-medium underline" : ""}`}
                >
                    All Products
                </NavLink>
                <NavLink 
                    to='/about' 
                    className={({isActive}) => `text-white hover:text-primary transition px-2 py-1 rounded-md hover:underline decoration-2 underline-offset-4 ${isActive ? "text-primary font-medium underline" : ""}`}
                >
                    About Us
                </NavLink>
                <NavLink 
                    to='/contact' 
                    className={({isActive}) => `text-white hover:text-primary transition px-2 py-1 rounded-md hover:underline decoration-2 underline-offset-4 ${isActive ? "text-primary font-medium underline" : ""}`}
                >
                    Contact Us
                </NavLink>

                {/* Search Bar */}
                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-600 px-4 py-2 rounded-full bg-gray-700/50 backdrop-blur-sm">
                    <input 
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="py-1 w-40 bg-transparent outline-none placeholder-gray-400 text-white" 
                        type="text" 
                        placeholder="Search products..." 
                    />
                    <img src={search_icon} alt="search" className='w-5 h-5 opacity-80 hover:opacity-100 transition' />
                </div>

                {/* Favorites Icon */}
                <div 
                    onClick={() => navigate("/favorites")} 
                    className="relative cursor-pointer p-2 hover:bg-gray-700/50 rounded-full transition"
                >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                        />
                    </svg>
                    {favorites.length > 0 && (
                        <span className="absolute -top-1 -right-1 text-xs text-white bg-primary w-5 h-5 rounded-full flex items-center justify-center font-medium">
                            {favorites.length}
                        </span>
                    )}
                </div>

                {/* Cart Icon */}
                <div 
                    onClick={() => navigate("/cart")} 
                    className="relative cursor-pointer p-2 hover:bg-gray-700/50 rounded-full transition"
                >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                        />
                    </svg>
                    {getCartCount() > 0 && (
                        <span className="absolute -top-1 -right-1 text-xs text-white bg-primary w-5 h-5 rounded-full flex items-center justify-center font-medium">
                            {getCartCount()}
                        </span>
                    )}
                </div>

                {/* User Auth Section */}
                {!user ? (
                    <button 
                        onClick={handleLoginClick} 
                        className="cursor-pointer px-6 py-2 bg-primary hover:bg-primary/90 transition text-white rounded font-medium shadow-lg hover:shadow-primary/30"
                    >
                        Login
                    </button>
                ) : (
                    <div className="relative group">
                        <div className="flex items-center gap-2 cursor-pointer p-1 pr-2 rounded-full hover:bg-gray-700/50 transition">
                            <img src={profile_icon} alt="Profile" className="w-8 h-8 rounded-full" />
                            <span className="text-white text-sm hidden lg:inline">Hi, {user.name}</span>
                        </div>
                        <div className="hidden group-hover:block absolute right-0 top-12 bg-gray-800 shadow-xl border border-gray-700 py-2 rounded-lg z-40 w-48 text-sm overflow-hidden">
                            <div 
                                onClick={() => navigate("my-orders")} 
                                className="px-4 py-2.5 hover:bg-gray-700 cursor-pointer transition text-white flex items-center gap-2"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                My Orders
                            </div>
                            <div className="px-4 py-2.5 hover:bg-gray-700 cursor-pointer transition text-white flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                Account
                            </div>
                            <div 
                                onClick={logout}
                                className="px-4 py-2.5 hover:bg-gray-700 cursor-pointer transition text-red-400 flex items-center gap-2 border-t border-gray-700"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                                Logout
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Mobile Menu Button */}
            <button 
                onClick={() => setOpen(!open)} 
                className="sm:hidden p-2 rounded-md hover:bg-gray-700/50 transition"
                aria-label="Menu"
            >
                <img src={menu_icon} alt="menu" className="w-6 h-6" />
            </button>

            {/* Mobile Menu Dropdown */}
            {open && (
                <div className="absolute top-full left-0 w-full bg-gray-800 shadow-xl py-3 flex flex-col items-start gap-1 px-4 text-sm md:hidden z-50">
                    <NavLink 
                        to='/' 
                        onClick={() => setOpen(false)} 
                        className="w-full px-4 py-3 hover:bg-gray-700 rounded-md transition text-white hover:underline decoration-2 underline-offset-4"
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to='/products' 
                        onClick={() => setOpen(false)} 
                        className="w-full px-4 py-3 hover:bg-gray-700 rounded-md transition text-white hover:underline decoration-2 underline-offset-4"
                    >
                        All Products
                    </NavLink>
                    <NavLink 
                        to='/favorites' 
                        onClick={() => setOpen(false)} 
                        className="w-full px-4 py-3 hover:bg-gray-700 rounded-md transition text-white hover:underline decoration-2 underline-offset-4 flex items-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        Favorites
                        {favorites.length > 0 && (
                            <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full">
                                {favorites.length}
                            </span>
                        )}
                    </NavLink>
                    {user && (
                        <NavLink 
                            to='/my-orders' 
                            onClick={() => setOpen(false)} 
                            className="w-full px-4 py-3 hover:bg-gray-700 rounded-md transition text-white hover:underline decoration-2 underline-offset-4"
                        >
                            My Orders
                        </NavLink>
                    )}
                    <NavLink 
                        to='/about' 
                        onClick={() => setOpen(false)} 
                        className="w-full px-4 py-3 hover:bg-gray-700 rounded-md transition text-white hover:underline decoration-2 underline-offset-4"
                    >
                        About Us
                    </NavLink>
                    <NavLink 
                        to='/contact' 
                        onClick={() => setOpen(false)} 
                        className="w-full px-4 py-3 hover:bg-gray-700 rounded-md transition text-white hover:underline decoration-2 underline-offset-4"
                    >
                        Contact Us
                    </NavLink>

                    <div className="w-full px-4 py-3">
                        {!user ? (
                            <button
                                onClick={() => { 
                                    setOpen(false); 
                                    setShowUserLogin(true); 
                                }}
                                className="w-full px-4 py-2 bg-primary hover:bg-primary/90 transition text-white rounded-full font-medium"
                            >
                                Login
                            </button>
                        ) : (
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-3 text-white px-2 py-1">
                                    <img src={profile_icon} alt="Profile" className="w-8 h-8 rounded-full" />
                                    <span className="text-sm">Hi, {user.name}</span>
                                </div>
                                <button
                                    onClick={logout}
                                    className="w-full px-4 py-2 bg-red-600/20 hover:bg-red-600/30 transition text-red-400 rounded-md font-medium flex items-center justify-center gap-2 border border-red-600/30"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default NavBar;
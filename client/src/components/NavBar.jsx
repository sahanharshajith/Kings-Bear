import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/kingsbearlogo.png';
import search_icon from '../assets/search_icon.svg';
import nav_cart_icon from '../assets/nav_cart_icon.svg';
import menu_icon from '../assets/menu_icon.svg';
import { useAppContext } from '../context/AppContext.jsx';
import profile_icon from '../assets/profile_icon.png';

function NavBar() {
    const [open, setOpen] = React.useState(false);
    const { user, setUser, setShowUserLogin, navigate } = useAppContext();

    const logout = async () => {
        setUser(null);
        navigate('/');
        setShowUserLogin(false);
    };

    const handleLoginClick = () => {
        setShowUserLogin(true);
    };

    return (
        <nav className="flex items-center justify-between px-4 md:px-8 lg:px-12 py-2 border-b border-gray-300 bg-gray-500 relative transition-all">
            {/* Logo */}
            <NavLink to="/" onClick={() => setOpen(false)} className="pl-0">
                <img src={logo} alt="Logo" className="w-40 h-15 object-contain" />
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-6 text-xl">
                <NavLink to='/' className="hover:text-primary transition">Home</NavLink>
                <NavLink to='/products' className="hover:text-primary transition">All Products</NavLink>
                <NavLink to='/about' className="hover:text-primary transition">About Us</NavLink>
                <NavLink to='/' className="hover:text-primary transition">Contact Us</NavLink>

                {/* Search Bar */}
                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full bg-white/10">
                    <input 
                        className="py-1.5 w-full outline-none placeholder-gray-200 text-white" 
                        type="text" 
                        placeholder="Search products" 
                    />
                    <img src={search_icon} alt="search" className='w-4 h-4' />
                </div>

                {/* Cart Icon */}
                <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
                    <img src={nav_cart_icon} alt="cart" className='w-6 h-6 opacity-100' />
                    <span className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full flex items-center justify-center">3</span>
                </div>

                {/* User Auth Section */}
                {!user ? (
                    <button 
                        onClick={handleLoginClick} 
                        className="cursor-pointer px-6 py-1.5 bg-primary hover:bg-primary/80 transition text-white rounded-full"
                    >
                        Login
                    </button>
                ) : (
                    <div className="relative group pr-0">
                        <img src={profile_icon} alt="Profile" className="w-8 h-8 cursor-pointer" />
                        <ul className="hidden group-hover:block absolute right-0 top-10 bg-white shadow-lg border border-gray-200 py-2 rounded-md z-40 w-40 text-sm">
                            <li 
                                onClick={() => navigate("my-orders")} 
                                className="px-4 py-1.5 hover:bg-gray-100 cursor-pointer transition"
                            >
                                My Orders
                            </li>
                            <li className="px-1 py-1">
                                <div className="relative overflow-hidden rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 p-[1.5px] animate-[spin_3s_linear_infinite]">
                                    <button 
                                        onClick={logout}
                                        className="w-full px-4 py-1 rounded-full bg-gray-900/90 backdrop-blur-sm text-white hover:bg-gray-800 transition"
                                    >
                                        Logout
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

            {/* Mobile Menu Button */}
            <button 
                onClick={() => setOpen(!open)} 
                className="sm:hidden p-2 rounded-md hover:bg-white/10 transition"
            >
                <img src={menu_icon} alt="menu" className="w-6 h-6" />
            </button>

            {/* Mobile Menu Dropdown */}
            {open && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg py-3 flex flex-col items-start gap-3 px-5 text-sm md:hidden z-30">
                    <NavLink 
                        to='/' 
                        onClick={() => setOpen(false)} 
                        className="w-full px-3 py-2 hover:bg-gray-100 rounded-md transition"
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to='/products' 
                        onClick={() => setOpen(false)} 
                        className="w-full px-3 py-2 hover:bg-gray-100 rounded-md transition"
                    >
                        All Products
                    </NavLink>
                    {user && (
                        <NavLink 
                            to='/my-orders' 
                            onClick={() => setOpen(false)} 
                            className="w-full px-3 py-2 hover:bg-gray-100 rounded-md transition"
                        >
                            My Orders
                        </NavLink>
                    )}
                    <NavLink 
                        to='/about' 
                        onClick={() => setOpen(false)} 
                        className="w-full px-3 py-2 hover:bg-gray-100 rounded-md transition"
                    >
                        About Us
                    </NavLink>
                    <NavLink 
                        to='/' 
                        onClick={() => setOpen(false)} 
                        className="w-full px-3 py-2 hover:bg-gray-100 rounded-md transition"
                    >
                        Contact Us
                    </NavLink>

                    {!user ? (
                        <button
                            onClick={() => { 
                                setOpen(false); 
                                setShowUserLogin(true); 
                            }}
                            className="w-full px-4 py-2 mt-1 bg-primary hover:bg-primary/80 transition text-white rounded-full"
                        >
                            Login
                        </button>
                    ) : (
                        <div className="w-full relative overflow-hidden rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 p-[1.5px] animate-[spin_3s_linear_infinite]">
                            <button
                                onClick={logout}
                                className="w-full px-4 py-2 rounded-full bg-gray-900/90 backdrop-blur-sm text-white hover:bg-gray-800 transition"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
}

export default NavBar;
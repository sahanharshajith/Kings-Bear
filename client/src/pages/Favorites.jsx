import React from 'react';
import { useAppContext } from '../context/AppContext';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

const Favorites = () => {
    const { favorites, products, navigate } = useAppContext();

    // Get favorite products
    const favoriteProducts = products.filter(product => favorites.includes(product._id));

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="text-white py-6">
                <div className="px-6 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 text-gray-800">
                        Your <span className="text-primary">Favorite</span> Bears
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Your collection of handpicked teddy bears that captured your heart
                    </p>
                </div>
            </div>

            {/* Favorites Content */}
            <div className="px-6 py-20">
                <div className="max-w-7xl mx-auto">
                    {favoriteProducts.length > 0 ? (
                        <>
                            {/* Stats */}
                            <div className="text-center mb-12">
                                <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-100">
                                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                    <span className="text-gray-700 font-medium">
                                        {favoriteProducts.length} {favoriteProducts.length === 1 ? 'Favorite' : 'Favorites'}
                                    </span>
                                </div>
                            </div>

                            {/* Products Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                                {favoriteProducts.map((product) => (
                                    <ProductCard key={product._id} product={product} />
                                ))}
                            </div>

                            {/* Continue Shopping */}
                            <div className="text-center mt-16">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                    Looking for more bears?
                                </h3>
                                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                                    Discover more adorable teddy bears and add them to your collection
                                </p>
                                <button 
                                    onClick={() => { navigate('/products'); scrollTo(0, 0); }}
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                    Browse All Products
                                </button>
                            </div>
                        </>
                    ) : (
                        /* Empty State */
                        <div className="text-center py-20">
                            <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md mx-auto">
                                {/* Empty Heart Icon */}
                                <div className="relative mx-auto w-24 h-24 mb-6">
                                    <svg className="w-24 h-24 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="1.5" 
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-8 h-0.5 bg-gray-300 rotate-45"></div>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-800 mb-4">No Favorites Yet</h3>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    You haven't added any teddy bears to your favorites yet. 
                                    Start browsing and click the heart icon on products you love!
                                </p>

                                <div className="space-y-4">
                                    <Link 
                                        to="/products"
                                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                        Start Shopping
                                    </Link>

                                    <div className="text-center">
                                        <Link 
                                            to="/"
                                            className="text-primary hover:text-primary/80 font-medium transition-colors"
                                        >
                                            Return to Home
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* How it Works Section */}
            <div className="bg-white py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">How Favorites Work</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Click the Heart</h3>
                            <p className="text-gray-600">
                                Browse our products and click the heart icon on any teddy bear you love
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Save for Later</h3>
                            <p className="text-gray-600">
                                Your favorite items are saved here for easy access whenever you return
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Shop When Ready</h3>
                            <p className="text-gray-600">
                                When you're ready to purchase, easily add your favorites to your cart
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Favorites;

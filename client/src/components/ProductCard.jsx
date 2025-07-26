import React from 'react';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';

const ProductCard = ({ product }) => {
    const [count, setCount] = React.useState(0);
    const [isFavorite, setIsFavorite] = React.useState(false);
    const {currency, addToCart, updateCartItem, removeCartItem, cartItems, navigate} = useAppContext();

    const toggleFavorite = (e) => {
        e.stopPropagation();
        setIsFavorite(!isFavorite);
        // Here you can add logic to save to favorites in context/backend
    };

    return product && (
        <div className="border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white w-full max-w-xs group">
            {/* Product Image with Hover Effect */}
            <div 
                className="relative overflow-hidden cursor-pointer h-48 bg-gray-100 flex items-center justify-center"
                onClick={() => navigate(`/product/${product._id}`)}
            >
                <img 
                    className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-500 p-4" 
                    src={product.image[0]} 
                    alt={product.name} 
                />
                
                {/* Favorite Icon */}
                <button
                    onClick={toggleFavorite}
                    className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-110 hover:shadow-primary/70"
                >
                    <svg 
                        className={`w-4 h-4 transition-colors duration-300 ${
                            isFavorite 
                                ? 'text-primary fill-current' 
                                : 'text-gray-400 hover:text-primary'
                        }`}
                        fill={isFavorite ? 'currentColor' : 'none'}
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                        />
                    </svg>
                </button>
                
                {/* Quick View Badge */}
                <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Quick View
                </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
                {/* Category Tag */}
                <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full mb-2">
                    {product.category}
                </span>
                
                {/* Product Name */}
                <h3 
                    className="text-gray-800 font-semibold text-lg mb-1 hover:text-primary transition-colors cursor-pointer line-clamp-2"
                    onClick={() => navigate(`/product/${product._id}`)}
                >
                    {product.name}
                </h3>
                
                {/* Ratings */}
                <div className="flex items-center gap-1 mb-3">
                    <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <svg 
                                key={star}
                                className={`w-4 h-4 ${star <= 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <span className="text-gray-500 text-xs">(4)</span>
                </div>
                
                {/* Price and Add to Cart */}
                <div className="flex items-center justify-between mt-4">
                    <div className="flex flex-col">
                        <span className="text-xl font-bold text-gray-900">
                            {currency}${product.offerPrice}
                        </span>
                        {product.offerPrice < product.price && (
                            <span className="text-sm text-gray-500 line-through">
                                {currency}${product.price}
                            </span>
                        )}
                    </div>
                    
                    <div onClick={(e) => e.stopPropagation()}>
                        {!cartItems[product._id] ? (
                            <button 
                                className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-full transition-colors shadow-md hover:shadow-lg hover:shadow-primary/70"
                                onClick={() => addToCart(product._id)}
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="text-sm">Add</span>
                            </button>
                        ) : (
                            <div className="flex items-center justify-between bg-primary/10 rounded-full px-2 py-1">
                                <button 
                                    onClick={() => removeCartItem(product._id)} 
                                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-primary/20 transition-colors text-primary"
                                >
                                    -
                                </button>
                                <span className="mx-2 font-medium text-primary">{cartItems[product._id]}</span>
                                <button 
                                    onClick={() => addToCart(product._id)} 
                                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-primary/20 transition-colors  text-primary"
                                >
                                    +
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
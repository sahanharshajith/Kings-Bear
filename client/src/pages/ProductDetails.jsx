import React from 'react';
import { useAppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const ProductDetails = () => {

    const {products, navigate, currency, addToCart} = useAppContext();
    const {id} = useParams();
    const [relatedProducts, setRelatedProducts] = React.useState([]);
    const [thumbnail, setThumbnail] = React.useState(null);
    const [quantity, setQuantity] = React.useState(1);
    const [isAddingToCart, setIsAddingToCart] = React.useState(false);

    const product = products.find((item) => item._id === id);

    useEffect(() => {
        if (products.length > 0 && product) {
            let productCopy = products.slice();
            productCopy = productCopy.filter((item) => 
                product.category === item.category && item._id !== product._id
            );
            setRelatedProducts(productCopy.slice(0, 5));
        }
    }, [products, product]);

    useEffect(() => {
        setThumbnail(product?.image[0] ? product.image[0] : null);
    }, [product]);

    // Enhanced add to cart function
    const handleAddToCart = async () => {
        setIsAddingToCart(true);
        
        // Add multiple items based on quantity
        for (let i = 0; i < quantity; i++) {
            await addToCart(product._id);
        }
        
        setIsAddingToCart(false);
    };

    // Enhanced buy now function
    const handleBuyNow = async () => {
        setIsAddingToCart(true);
        
        // Add items to cart first
        for (let i = 0; i < quantity; i++) {
            await addToCart(product._id);
        }
        
        setIsAddingToCart(false);
        navigate('/cart');
    };

    return product ? (
        <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
            {/* Breadcrumb */}
            <div className="px-6 pt-8 pb-4">
                <nav className="flex items-center space-x-2 text-sm text-gray-600">
                    <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                    <span>/</span>
                    <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
                    <span>/</span>
                    <Link to={`/products/category/${product.category.toLowerCase()}`} className="hover:text-primary transition-colors capitalize">
                        {product.category}
                    </Link>
                    <span>/</span>
                    <span className="text-primary font-medium">{product.name}</span>
                </nav>
            </div>

            {/* Product Details Section */}
            <div className="px-6 py-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Product Images */}
                        <div className="flex-1 flex gap-4">
                            <div className="flex flex-col gap-3">
                                {product.image.map((image, index) => (
                                    <div 
                                        key={index} 
                                        onClick={() => setThumbnail(image)} 
                                        className="w-20 h-20 border-2 border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:border-primary transition-colors shadow-sm hover:shadow-md"
                                    >
                                        <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>

                            <div className="flex-1 max-w-lg">
                                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                                    <img src={thumbnail} alt="Selected product" className="w-full h-96 object-cover" />
                                </div>
                            </div>
                        </div>

                        {/* Product Information */}
                        <div className="flex-1 max-w-lg">
                            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                                <h1 className="text-xl lg:text-xl font-bold text-gray-800 mb-4">{product.name}</h1>

                                <div className="flex items-center gap-2 mb-6">
                                    <div className="flex items-center gap-1">
                                        {Array(5).fill('').map((_, i) => (
                                            <svg 
                                                key={i} 
                                                className={`w-5 h-5 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} 
                                                fill="currentColor" 
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="text-gray-600 text-sm">(4.0) • 24 reviews</span>
                                </div>

                                <div className="mb-8">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-3xl font-bold text-primary">{currency}{product.offerPrice}</span>
                                        <span className="text-xl text-gray-500 line-through">{currency}{product.price}</span>
                                        <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full mb-2">
                                            {Math.round(((product.price - product.offerPrice) / product.price) * 100)}% OFF
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600">(inclusive of all taxes)</p>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-3">About This Product</h3>
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <ul className="space-y-2">
                                            {product.description.map((desc, index) => (
                                                <li key={index} className="flex items-start gap-2 text-gray-700">
                                                    <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    {desc}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Quantity Selector */}
                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Quantity</h3>
                                    <div className="flex items-center gap-3">
                                        <button 
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                                            disabled={quantity <= 1}
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                                            </svg>
                                        </button>
                                        <span className="text-xl font-semibold text-gray-800 min-w-[2rem] text-center">{quantity}</span>
                                        <button 
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button 
                                        onClick={handleAddToCart}
                                        disabled={isAddingToCart}
                                        className="flex-1 py-4 px-6 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-xl transition-all duration-300 border border-gray-200 hover:border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isAddingToCart ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-800" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Adding...
                                            </>
                                        ) : (
                                            <>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                                Add to Cart
                                            </>
                                        )}
                                    </button>
                                    <button 
                                        onClick={handleBuyNow}
                                        disabled={isAddingToCart}
                                        className="flex-1 py-4 px-6 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                                    >
                                        {isAddingToCart ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Processing...
                                            </>
                                        ) : (
                                            <>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                                Buy Now
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Related Products Section */}
            <div className="px-6 py-16 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Related Products</h2>
                        <div className="w-24 h-1 bg-primary rounded-full mx-auto"></div>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            Discover more handcrafted teddy bears from our {product.category} collection
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {relatedProducts.filter((product) => product.inStock).map((product, index)=>(
                            <ProductCard key={index} product={product}/>
                        ))}
                    </div>
                    
                    <div className="text-center mt-12">
                        <button 
                            onClick={() => { navigate('/products'); scrollTo(0, 0); }} 
                            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                            Explore All Products
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
            <div className="text-center">
                <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md mx-auto">
                    <svg className="w-16 h-16 mx-auto text-gray-400 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Product Not Found</h3>
                    <p className="text-gray-600 mb-6">
                        The product you're looking for doesn't exist or may have been removed.
                    </p>
                    <Link 
                        to="/products" 
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Browse All Products
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
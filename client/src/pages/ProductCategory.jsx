import React from 'react';
import { useAppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';
import { categories } from '../assets/assets';
import ProductCard from '../components/ProductCard';

const ProductCategory = () => {

    const { products } = useAppContext();
    const { category } = useParams();

    // Add safety check for category parameter
    if (!category) {
        return (
            <div className="min-h-screen">
                <div className="text-center py-20">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Category Not Found</h1>
                    <p className="text-gray-600">The requested category could not be found.</p>
                </div>
            </div>
        );
    }

    const searchCategory = categories.find((item) => item.path?.toLowerCase() === category.toLowerCase());
    const filteredProducts = products.filter((product) => product.category?.toLowerCase() === category.toLowerCase());

  return (
    <div className="min-h-screen">
        {/* Hero Section */}
        <div className="text-white py-20">
            <div className="px-6 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 text-gray-800">
                    {searchCategory ? (
                        <>
                            <span className="text-primary">{searchCategory.text}</span> Collection
                        </>
                    ) : (
                        <>
                            <span className="text-primary">{category}</span> Bears
                        </>
                    )}
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Discover our handcrafted teddy bears in the {searchCategory?.text || category} category
                </p>
            </div>
        </div>

        {/* Products Section */}
        <div className="px-6 py-12">
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md mx-auto">
                        <svg className="w-16 h-16 mx-auto text-gray-400 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.469.898-6.058 2.375l-.756-.756A9.004 9.004 0 0112 13a9.004 9.004 0 016.814 3.619l-.756.756A7.962 7.962 0 0115.618 16.5M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">No Bears Found</h3>
                        <p className="text-gray-600 mb-6">
                            We couldn't find any teddy bears in the {searchCategory?.text || category} category at the moment.
                        </p>
                        <a 
                            href="/products" 
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Browse All Products
                        </a>
                    </div>
                </div>
            )}
        </div>
    </div>
  );
};

export default ProductCategory;
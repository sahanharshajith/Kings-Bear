import React from 'react';
import ProductCard from './ProductCard';
import { useAppContext } from '../context/AppContext';

const BestSeller = () => {
    const { products } = useAppContext();

    return (
        <section className="mt-16 py-12 px-4 md:px-8">
            {/* Enhanced Title Section */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 font-serif tracking-wide relative inline-block">
                    <span className="relative z-10">
                        Best <span className="text-primary">Seller</span> Products
                    </span>
                    {/* Removed underline */}
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Discover our most loved products, handpicked just for you
                </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12 max-w-7xl mx-auto">
                {products
                    .filter((product) => product.inStock)
                    .slice(0, 5)
                    .map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
            </div>
        </section>
    );
};

export default BestSeller;
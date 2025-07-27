import React from 'react';
import { useAppContext } from '../context/appContext';
import { useEffect } from 'react'; 
import ProductCard from '../components/ProductCard';

const AllProducts = () => {

    const { products, searchQuery, setSearchQuery } = useAppContext();
    const [filteredProducts, setFilteredProducts] = React.useState([]);

    useEffect(() => {
        if (searchQuery.length > 0) {
            const filtered = products.filter(product =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(products);
        }
    }, [searchQuery, products]);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
        {/* Hero Section */}
        <div className="text-white py-12">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h1 className="text-4xl text-gray-800 md:text-5xl lg:text-6xl font-bold font-serif mb-6">
                    Our <span className="text-primary"> Collection</span>
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Discover every handcrafted Kings Bear, each one waiting to become your perfect companion
                </p>
            </div>
        </div>

        {/* Products Section */}
        <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5">
                {filteredProducts.filter((product) => product.inStock).map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>

    </div>
  );
};

export default AllProducts;
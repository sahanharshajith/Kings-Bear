import React from 'react';
import { useAppContext } from '../context/appContext';
import { useEffect } from 'react'; 
import ProductCard from '../components/ProductCard';

const AllProducts = () => {

    const { products, searchQuery, setSearchQuery } = useAppContext();
    const [filteredProducts, setFilteredProducts] = React.useState([]);
    const [sortBy, setSortBy] = React.useState('name-asc');
    const [priceRange, setPriceRange] = React.useState({ min: 0, max: 1000 });
    const [minPrice, setMinPrice] = React.useState(0);
    const [maxPrice, setMaxPrice] = React.useState(1000);
    const [selectedCategories, setSelectedCategories] = React.useState([]);
    const [categories, setCategories] = React.useState([]);

    // Calculate price range from products and extract categories
    React.useEffect(() => {
        if (products.length > 0) {
            const prices = products.map(p => p.price);
            const min = Math.floor(Math.min(...prices));
            const max = Math.ceil(Math.max(...prices));
            setMinPrice(min);
            setMaxPrice(max);
            setPriceRange({ min, max });

            // Extract unique categories
            const uniqueCategories = [...new Set(products.map(p => p.category).filter(Boolean))];
            setCategories(uniqueCategories);
        }
    }, [products]);

    useEffect(() => {
        let filtered = [...products];

        // Filter by search query (name)
        if (searchQuery.length > 0) {
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Filter by price range
        if (priceRange.min !== minPrice || priceRange.max !== maxPrice) {
            filtered = filtered.filter(product => 
                product.price >= priceRange.min && product.price <= priceRange.max
            );
        }

        // Filter by categories
        if (selectedCategories.length > 0) {
            filtered = filtered.filter(product => 
                selectedCategories.includes(product.category)
            );
        }

        // Sort products
        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'name-asc':
                    return a.name.localeCompare(b.name);
                case 'name-desc':
                    return b.name.localeCompare(a.name);
                case 'price-low':
                    return a.price - b.price;
                case 'price-high':
                    return b.price - a.price;
                default:
                    return 0;
            }
        });

        setFilteredProducts(filtered);
    }, [searchQuery, products, sortBy, priceRange, minPrice, maxPrice, selectedCategories]);

    const handlePriceRangeChange = (min, max) => {
        setPriceRange({ min, max });
    };

    const handleCategoryChange = (category) => {
        setSelectedCategories(prev => 
            prev.includes(category) 
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const clearFilters = () => {
        setSearchQuery('');
        setPriceRange({ min: minPrice, max: maxPrice });
        setSortBy('name-asc');
        setSelectedCategories([]);
    };

  return (
    <>
        <style>{`
          .range-slider::-webkit-slider-thumb {
            appearance: none;
            height: 18px;
            width: 18px;
            border-radius: 50%;
            background: #3b82f6;
            cursor: pointer;
            border: 3px solid #ffffff;
            box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
            transition: all 0.2s ease;
          }
          
          .range-slider::-webkit-slider-thumb:hover {
            transform: scale(1.1);
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
          }
          
          .range-slider::-moz-range-thumb {
            height: 18px;
            width: 18px;
            border-radius: 50%;
            background: #3b82f6;
            cursor: pointer;
            border: 3px solid #ffffff;
            box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
            transition: all 0.2s ease;
          }
          
          .range-slider::-webkit-slider-track {
            background: transparent;
          }
          
          .range-slider::-moz-range-track {
            background: transparent;
          }
        `}</style>
        <div className="min-h-screen w-full">
        {/* Hero Section */}
        <div className="text-white py-12">
            <div className="px-6 text-center">
                <h1 className="text-4xl text-gray-800 md:text-5xl lg:text-6xl font-bold font-serif mb-6">
                    Our <span className="text-primary"> Collection</span>
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Discover every handcrafted Kings Bear, each one waiting to become your perfect companion
                </p>
            </div>
        </div>

        {/* Main Content Area */}
        <div className="px-2 py-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Left Sidebar - Filters */}
                <div className="lg:col-span-1 lg:max-w-xs">
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 sticky top-6">
                        <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                            </svg>
                            Filter Products
                        </h3>

                        {/* Search Filter */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                                Search by Name
                            </label>
                            <input
                                type="text"
                                placeholder="Search teddy bears..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full border-2 border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                            />
                        </div>

                        {/* Price Range Slider */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                                Price Range
                            </label>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-gray-600">${priceRange.min}</span>
                                    <span className="text-sm font-medium text-gray-600">${priceRange.max}</span>
                                </div>
                                
                                {/* Improved Range Slider */}
                                <div className="relative px-2">
                                    <div className="relative h-2 bg-gray-200 rounded-full">
                                        <div 
                                            className="absolute h-2 bg-gradient-to-r from-primary to-primary-dull rounded-full"
                                            style={{
                                                left: `${((priceRange.min - minPrice) / (maxPrice - minPrice)) * 100}%`,
                                                width: `${((priceRange.max - priceRange.min) / (maxPrice - minPrice)) * 100}%`
                                            }}
                                        ></div>
                                    </div>
                                    <input
                                        type="range"
                                        min={minPrice}
                                        max={maxPrice}
                                        value={priceRange.min}
                                        onChange={(e) => handlePriceRangeChange(Math.min(parseInt(e.target.value), priceRange.max - 10), priceRange.max)}
                                        className="absolute top-0 left-0 w-full h-2 bg-transparent appearance-none cursor-pointer range-slider"
                                        style={{ zIndex: 1 }}
                                    />
                                    <input
                                        type="range"
                                        min={minPrice}
                                        max={maxPrice}
                                        value={priceRange.max}
                                        onChange={(e) => handlePriceRangeChange(priceRange.min, Math.max(parseInt(e.target.value), priceRange.min + 10))}
                                        className="absolute top-0 left-0 w-full h-2 bg-transparent appearance-none cursor-pointer range-slider"
                                        style={{ zIndex: 2 }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Category Filter */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                                Categories
                            </label>
                            <div className="space-y-3 max-h-48 overflow-y-auto">
                                {categories.map((category, index) => (
                                    <label key={index} className="flex items-center space-x-3 cursor-pointer group">
                                        <div className="relative">
                                            <input
                                                type="checkbox"
                                                checked={selectedCategories.includes(category)}
                                                onChange={() => handleCategoryChange(category)}
                                                className="sr-only"
                                            />
                                            <div className={`w-5 h-5 border-2 rounded-md transition-all duration-200 ${
                                                selectedCategories.includes(category) 
                                                    ? 'bg-primary border-primary' 
                                                    : 'border-gray-300 group-hover:border-primary'
                                            }`}>
                                                {selectedCategories.includes(category) && (
                                                    <svg className="w-3 h-3 text-white absolute top-0.5 left-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                )}
                                            </div>
                                        </div>
                                        <span className="text-sm text-gray-700 group-hover:text-primary transition-colors capitalize">
                                            {category}
                                        </span>
                                        <span className="text-xs text-gray-400 ml-auto">
                                            ({products.filter(p => p.category === category && p.inStock).length})
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Sort Options */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                                Sort By
                            </label>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="w-full border-2 border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                            >
                                <option value="name-asc">Name (A-Z)</option>
                                <option value="name-desc">Name (Z-A)</option>
                                <option value="price-low">Price (Low to High)</option>
                                <option value="price-high">Price (High to Low)</option>
                            </select>
                        </div>

                        {/* Filter Summary */}
                        <div className="border-t border-gray-200 pt-4">
                            <div className="text-sm text-gray-600 mb-3">
                                Showing <span className="font-semibold text-primary">{filteredProducts.filter(p => p.inStock).length}</span> of {products.filter(p => p.inStock).length} products
                            </div>
                            <button
                                onClick={clearFilters}
                                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-white bg-primary border border-gray-200 rounded-xl transition-all font-medium cursor-pointer hover:bg-primary-dull"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                Reset Filters
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Content Area - Products */}
                <div className="lg:col-span-3">
                    {filteredProducts.filter((product) => product.inStock).length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {filteredProducts.filter((product) => product.inStock).map((product, index) => (
                                <ProductCard key={index} product={product} />
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
                                    We couldn't find any teddy bears matching your search criteria. 
                                    Try adjusting your filters or search terms.
                                </p>
                                <button
                                    onClick={clearFilters}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                    Reset Filters
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

        </div>
    </>
  );
};

export default AllProducts;
import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { dummyProducts } from '../assets/assets';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';


export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const currency = import.meta.VITE_CURRENCY;

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isSeller, setIsSeller] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false);
    const [products, setProducts] = useState([]);

    const [cartItems, setCartItems] = useState({});
    const [favorites, setFavorites] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const fetchProducts = async () => {
        setProducts(dummyProducts);
    }

        //Add product to cart
    const addToCart = (itemId) => {

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            cartData[itemId] += 1;
        } else {
            cartData[itemId] = 1;
        }
        setCartItems(cartData);
        
        // Find product name for better toast message
        const product = products.find(p => p._id === itemId);
        const productName = product ? product.name : 'Product';
        
        toast.success(`${productName} added to cart!`, {
            icon: '🛒',
        });
    };

    const updateCartItem = (itemId, quantity) => {
        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            cartData[itemId] += quantity;
        }
        setCartItems(cartData);
        toast.success('Cart updated successfully!');
    };

    const removeCartItem = (itemId) => {
        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            cartData[itemId] -= 1;
            if (cartData[itemId] === 0) {
                delete cartData[itemId];
            }
        }
        setCartItems(cartData);
        toast.success('Product removed from cart successfully!');
    };

    // Get total cart count
    const getCartCount = () => {
        let totalCount = 0;
        for (const itemId in cartItems) {
            totalCount += cartItems[itemId];
        }
        return totalCount;
    };

    // Add product to favorites
    const addToFavorites = (itemId) => {
        if (!favorites.includes(itemId)) {
            const newFavorites = [...favorites, itemId];
            setFavorites(newFavorites);
            
            const product = products.find(p => p._id === itemId);
            const productName = product ? product.name : 'Product';
            
            toast.success(`${productName} added to favorites!`, {
                icon: '💙',
            });
        }
    };

    // Remove product from favorites
    const removeFromFavorites = (itemId) => {
        const newFavorites = favorites.filter(id => id !== itemId);
        setFavorites(newFavorites);
        
        const product = products.find(p => p._id === itemId);
        const productName = product ? product.name : 'Product';
        
        toast.success(`${productName} removed from favorites!`, {
            icon: '❤️',
        });
    };

    // Toggle favorite status
    const toggleFavorite = (itemId) => {
        if (favorites.includes(itemId)) {
            removeFromFavorites(itemId);
        } else {
            addToFavorites(itemId);
        }
    };

    // Check if product is in favorites
    const isFavorite = (itemId) => {
        return favorites.includes(itemId);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const value = {
        navigate, 
        user, 
        setUser, 
        isSeller, 
        setIsSeller, 
        showUserLogin, 
        setShowUserLogin,
        products,
        currency,
        addToCart,
        updateCartItem,
        removeCartItem,
        cartItems,
        getCartCount,
        favorites,
        addToFavorites,
        removeFromFavorites,
        toggleFavorite,
        isFavorite,
        searchQuery,
        setSearchQuery
    };

    return <AppContext.Provider value={value}>
        {children}  
    </AppContext.Provider>;
}

export const useAppContext = () => {
    return useContext(AppContext);
}
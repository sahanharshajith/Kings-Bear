import React from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import { useAppContext } from './context/AppContext.jsx';
import Login from './components/Login.jsx';
import AllProducts from './pages/AllProducts.jsx';
import ProductCategory from './pages/ProductCategory.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Favorites from './pages/Favorites.jsx';
import { Toaster } from 'react-hot-toast';


const App = () => {

  const isSellerPath = useLocation().pathname.includes('/seller');
  const {showUserLogin} = useAppContext();

  return (
    <div>
    {isSellerPath ? null : <NavBar />}
    {showUserLogin ? <Login /> : null}
      <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/category/:category" element={<ProductCategory />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          {/* Add other routes here as needed */}
        </Routes>
      </div>
      {!isSellerPath && <Footer />}
      
      {/* Toast Notifications */}
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#fff',
            color: '#333',
            borderRadius: '12px',
            border: '1px solid #e5e7eb',
            padding: '16px',
            fontSize: '14px',
            fontWeight: '500',
            boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
    </div>
  );
};

export default App;
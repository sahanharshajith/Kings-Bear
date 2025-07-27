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
        </Routes>
      </div>
      {!isSellerPath && <Footer />}
    </div>
  );
};

export default App;
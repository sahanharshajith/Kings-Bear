import React from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const App = () => {

  const isSellerPath = useLocation().pathname.includes('/seller');

  return (
    <div>
    {isSellerPath ? null : <NavBar />}
      <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
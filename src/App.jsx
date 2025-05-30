import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './pages/components/navbar';
import Footer from './pages/components/footer';
import Home from './pages/home'

const App = () => {
  return (
    <div className="bg-cust-white">
      <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;

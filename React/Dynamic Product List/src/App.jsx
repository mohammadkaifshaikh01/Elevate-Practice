import React from "react";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import FavCart from "./components/FavCart";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={  <ProductCard />} />
        <Route path="fav" element={<FavCart/>}/>
      </Routes>
    
    </div>
  );
};

export default App;

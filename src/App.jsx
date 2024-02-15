import React, { useState } from "react";
import Home from "./components/Home.jsx"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Categories from './components/Categories.jsx'
import MonthProduct from "./components/MonthProduct.jsx";
import OurProducts from "./components/OurProducts.jsx";
import img1 from './assets/banner1.jpg'
import img2 from './assets/banner2.jpg'

function App() {
  const images = [img1, img2]
  return (
    <div className="App">
      <Header/>
      <Home images={images}/>
      <Categories/>
      <MonthProduct/>
      <OurProducts/>
      <Footer/>
    </div>
  );
}

export default App;

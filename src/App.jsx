import React, { useState } from "react";
import Home from "./components/Home.jsx"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Categories from './components/Categories.jsx'
import MonthProduct from "./components/MonthProduct.jsx";
import img1 from './assets/9a14b8b2c9494052fab98e31e76bb929.jpg'
import img2 from './assets/pexels-pixabay-36717.jpg'

function App() {
  const images = [img1, img2]
  return (
    <div className="App">
      <Header/>
      <Home images={images}/>
      <Categories/>
      <MonthProduct/>
      <Footer/>
    </div>
  );
}

export default App;

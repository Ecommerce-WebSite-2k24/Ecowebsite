
import React, { useState } from "react";
import Home from "./components/Home.jsx"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"

import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import ClientSide from './components/ClientSide';
import Product from './components/Product.jsx';


function App() {

  return (
    <div className="App">

      <Header/>
      <Footer/>

      <header>

        <Product/>
        {/* <a href="/editprofil">Client</a> */}
<BrowserRouter>
<Routes>
{/* <Route path='/Product' element={<Product/>}/> */}
  {/* <Route path='editprofil' element={<ClientSide/>}/> */}
</Routes>
</BrowserRouter>
      </header>

    </div>
  );
}

export default App;

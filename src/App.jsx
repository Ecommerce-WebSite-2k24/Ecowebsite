import React,{useState,useEffect} from "react";
// import Home from "./components/Home.jsx"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"



import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ClientSide from './components/ClientSide';
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import Cart from "./components/Cart.jsx";
import WhishList from "./components/WhishList.jsx";
import Admin from "./components/Admin/Admin.jsx";
import ClientInfo from "./components/Admin/ClientInfo.jsx";
import SellerInfo from "./components/Admin/SellerInfo.jsx";
import ProductInfo from "./components/Admin/ProductInfo.jsx";
import Home from "./components/Home.jsx"
import Product from './components/Product.jsx';
import ProductDetails from "./components/ProductDetails.jsx";




function App() {


  return (
    <div className="App">

       <Header/>
    


      <header>

        <Product/>
        {/* <a href="/editprofil">Client</a> */}
<BrowserRouter>
<Routes>

  <Route path='/' element={<Home/>}/>
  <Route path='/editprofil' element={<ClientSide/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/whishList' element={<WhishList/>}/>
  <Route path="Details" element={<ProductDetails/>} />
  {/* <Route path='/categpries' element={<Categories/>}/> */}
 
  


  <Route path="/admin" element={<Admin/>}/>
  <Route path='/admin/clientInfo' element={<ClientInfo/>}/> 
  <Route path="/admin/sellerInfo" element={<SellerInfo/>}/> 
  <Route path="/admin/productInfo" element={<ProductInfo/>}/>
</Routes>
</BrowserRouter>
      </header>
      <Footer/>

    </div>
  );
}

export default App;

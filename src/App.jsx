import React,{useState} from "react";
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ClientSide from './components/ClientSide';
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import Cart from "./components/Cart.jsx";
import WhishList from "./components/WhishList.jsx";
import Admin from "./components/Admin/Admin.jsx";
import ClientInfo from "./components/Admin/ClientInfo.jsx";
import SellerInfo from "./components/Admin/SellerInfo.jsx";
import ProductInfo from "./components/Admin/ProductInfo.jsx";
import Home from "./components/Home.jsx";
import axios from "axios";
import Product from './components/Product.jsx';
import ProductDetails from "./components/ProductDetails.jsx";

function App() {


const [clients,setClients]=useState([])
const[users,setUsers]=useState([])
const[prods,setProds]=useState([])
const[categories,setCategories]=useState([])

useEffect(()=>{
  axios.get('http://localhost:3000/client/getAll')
  .then((res)=>{console.log(res.data);setClients(res.data)})
  .catch((error)=>{console.log("error")})
  axios.get('http://localhost:3000/user/getAll')
  .then((res)=>{console.log(res.data,"useerssssssssss");setUsers(res.data)})
  .catch((error)=>{console.log("error")})
  axios.get('http://localhost:3000/api/product')
  .then((res)=>{console.log(res.data,"prods");setProds(res.data)})
  .catch((error)=>{console.log("error")})
  axios.get('http://localhost:3000/category/getAll')
  .then((res)=>{console.log(res.data,"categoy");setCategories(res.data)})
  .catch((error)=>{console.log("error")})
},[])
 

 

  
      
     
  
  return (
    <div className="App">

       <Header/>

      <header>
        {/* <div style={{"display":"flex","gap":"1rem"}}>
        <a href="/editprofil">Client</a>
        <a href="/cart">cart</a>
        <a href="/wishList">whishlist</a>
        </div> */}
<Cont.Provider value={{users:users,prods:prods,categories:categories}}>       

<BrowserRouter>
<Routes>
  <Route path='editprofil' element={<ClientSide/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/login" element={<Login/>}/>

  <Route path='/' element={<Home changeprod={changeprod}/>}/>
  <Route path='/editprofil' element={<ClientSide/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/whishList' element={<WhishList/>}/>
  <Route path="/admin" element={<Admin clients={clients}/>}/>
  <Route path='/whishList' element={<WhishList/>}/> 
   <Route path='/Details' element={<ProductDetails OneProduct={OneProduct}/>}/>
  <Route path='/Product' element={<Product  />}/>

  <Route path='/admin/clientInfo' element={<ClientInfo/>}/> 
  <Route path="/admin/sellerInfo" element={<SellerInfo/>}/> 
  <Route path="/admin/productInfo" element={<ProductInfo prods={prods}/>}/>
  <Route path="/chart" element={<Charts/>} />
</Routes>
</BrowserRouter>
</Cont.Provider>   

      </header>

      <Footer/>

    </div>
  );
}

export default App;

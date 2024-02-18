import React,{useEffect,useState,createContext} from "react";
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ClientSide from './components/ClientSide';
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Contact from "./components/NavLinks/Contact.jsx";
import About from "./components/NavLinks/About.jsx";
// import Cart from "./components/Cart.jsx";
import WhishList from "./components/WhishList.jsx";
import Admin from "./components/Admin/Admin.jsx";
import ClientInfo from "./components/Admin/ClientInfo.jsx";
import SellerInfo from "./components/Admin/SellerInfo.jsx";
import ProductInfo from "./components/Admin/ProductInfo.jsx";
import Home from "./components/HomePage/Home.jsx";
import axios from "axios";
import Cont from "./components/Context/Cont.jsx";
import Charts from "./components/Admin/Charts.jsx";
import CartProduct from "./components/HomePage/CartProduct.jsx";
import Inbox from "./components/Admin/Inbox.jsx";
import Seller from "./components/Seller/Seller.jsx"
import Seller2 from "./components/Seller/Seller2.jsx"
import Overview from "./components/Admin/Overview.jsx";
import Product from "./components/Product.jsx";
function App() {


const[users,setUsers]=useState([])
const[prods,setProds]=useState([])
const[categories,setCategories]=useState([])
const[refresh,setRefresh]=useState(false)


useEffect(()=>{
  axios.get('http://localhost:3000/user/getAll')
  .then((res)=>{console.log(res.data,"useerssssssssss");setUsers(res.data)})
  .catch((error)=>{console.log("error")})
  axios.get('http://localhost:3000/api/product')
  .then((res)=>{console.log(res.data,"prods");setProds(res.data)})
  .catch((error)=>{console.log("error")})
  axios.get('http://localhost:3000/category/getAll')
  .then((res)=>{console.log(res.data,"categoy");setCategories(res.data)})
  .catch((error)=>{console.log("error")})
 
},[!refresh])
 
// const getSelProd=(userUserId)=>{
//   axios.get(`http://localhost:3000/api/findproduct/${userUserId}`)
//   .then((res)=>{console.log("sellerprods")})
//   .catch((error)=>{console.log("error")})
// }

// const [single,setSingle]=useState({})

// const getOneProd =(prodId)=>{
//   axios.get(`http://localhost:3000/api/product/${prodId}`)
//   .then((res)=>{setSingle(res.data);console.log(res.data,"signle")})
//   .catch((error)=>{console.log("error")})
// }  


 

  
      
     
  
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
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>

  <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<Signup/>}/>
  {/* <Route path='editprofil' element={<ClientSide/>}/> */}
  <Route path='/editprofil' element={<ClientSide/>}/>

  {/* <Route path='/cart' element={<Cart/>}/> */}

  <Route path='/whishList' element={<WhishList/>}/>
  <Route path="/cartProduct" element={<CartProduct/>}/>
  
  <Route path='/seller' element={<Seller2/>}/>
  <Route path="/prods" element={<Product/>}/>
  
  <Route path="/admin" element={<Admin />}/>
  <Route path="/admin/userlist" element={<Overview/>}/>
  <Route path='/admin/clientInfo' element={<ClientInfo/>}/> 
  <Route path="/admin/sellerInfo" element={<SellerInfo/>}/> 
  <Route path="/admin/productInfo" element={<ProductInfo prods={prods}/>}/>
  <Route path="/admin/inbox" element={<Inbox/>}/>
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
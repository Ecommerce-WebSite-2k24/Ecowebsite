import React,{useState,useEffect} from "react";
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ClientSide from './components/ClientSide';
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Contact from "./components/NavLinks/Contact.jsx";
import About from "./components/NavLinks/About.jsx";
import Admin from "./components/Admin/Admin.jsx";
import ClientInfo from "./components/Admin/ClientInfo.jsx";
import SellerInfo from "./components/Admin/SellerInfo.jsx";
import ProductInfo from "./components/Admin/ProductInfo.jsx";
import Home from "./components/HomePage/Home.jsx";
import axios from "axios";
import Product from './components/Product.jsx';
import ProductDetails from "./components/ProductDetails.jsx";
import Charts from "../src/components/Admin/Charts/Chartt.jsx";
import Cloud from "./components/Cloud.jsx";
import CategoryProd from "./components/CategoryProd.jsx";
import AboutUS from "./components/AboutUS.jsx";
import WhishList from "./components/WhishList.jsx";
import Cont from "./components/Context/Cont.jsx";
import CartProduct from "./components/HomePage/CartProduct.jsx";
import Inbox from "./components/Admin/Inbox.jsx";
import Seller2 from "./components/Seller/Seller2.jsx"
import Overview from "./components/Admin/Overview.jsx";
function App() {


// const [clients,setClients]=useState([])
const[users,setUsers]=useState([])
const[prods,setProds]=useState([])
const[categories,setCategories]=useState([])
const[refresh,setRefresh]=useState(false)


const [OneProduct,setOneProduct] = useState({})

  
     const changeprod=(x)=>{
       setOneProduct(x)}

      const changeCat =(y)=>{
        setCategories(y)
        console.log('cat');
      }  




useEffect(()=>{
  axios.get('http://localhost:3000/client/getAll')
  .then((res)=>{console.log(res.data,"useerssssssssss");setUsers(res.data)})
  .catch((error)=>{console.log("error")})
  axios.get('http://localhost:3000/api/product')
  .then((res)=>{console.log(res.data,"prods");setProds(res.data)})
  .catch((error)=>{console.log("error")})
  axios.get('http://localhost:3000/category/getAll')
  .then((res)=>{console.log(res.data,"categoy");setCategories(res.data)})
  .catch((error)=>{console.log("error")})
 
},[!refresh])
 



 

  
      
     
  
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
<Route path='/' element={<Home changeprod={changeprod} changeCat={changeCat} />}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>

  <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path='/editprofil' element={<ClientSide/>}/>

  <Route path="/admin" element={<Admin />}/>
  <Route path="/admin/inbox" element={<Inbox/>}/>
  <Route path="/admin/userlist" element={<Overview/>}/>
  <Route path='/admin/clientInfo' element={<ClientInfo/>}/> 
  <Route path="/admin/sellerInfo" element={<SellerInfo/>}/> 
  <Route path="/admin/productInfo" element={<ProductInfo prods={prods}/>}/>

  <Route path='/seller' element={<Seller2/>}/>
  <Route path="/prods" element={<Product/>}/>
  <Route path="/cartProduct" element={<CartProduct/>}/>

  <Route path='/whishList' element={<WhishList/>}/> 
   <Route path='/Details' element={<ProductDetails OneProduct={OneProduct}/>}/>
  <Route path='/Product' element={<Product  />}/>
  <Route path="/CategoryProd" element={<CategoryProd categories={categories} />} />


  <Route path="/aboutUS" element={<AboutUS/>}/>

  <Route path="/chart" element={<Charts/>} />
  



</Routes>
</BrowserRouter>
</Cont.Provider>
      </header>
      {/* <Cloud/> */}
      <Footer/>

    </div>
  );
}

export default App;

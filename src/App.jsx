import React from "react";
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



function App() {

  return (
    <div className="App">

      <Header/>



      <header>
        <a href="/editprofil">Client</a>
<BrowserRouter>
<Routes>
  <Route path='editprofil' element={<ClientSide/>}/>
  <Route path='About' element={<About/>}/>
  <Route path='Contact' element={<Contact/>}/>
  <Route path='Cart' element={<Cart/>}/>
  <Route path='WhishList' element={<WhishList/>}/>
  <Route path="Admin" element={<Admin/>}/>

</Routes>
</BrowserRouter>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
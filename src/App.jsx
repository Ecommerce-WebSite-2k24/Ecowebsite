
import React, { useState } from "react";
import Home from "./components/Home.jsx"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ClientSide from './components/ClientSide';
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";

function App() {

  return (
    <div className="App">

      <Header/>
   

      <header>
        <a href="/editprofil">Client</a>
<BrowserRouter>
<Routes>
  <Route path='editprofil' element={<ClientSide/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/login" element={<Login/>}/>
</Routes>
</BrowserRouter>
      </header>
      <Footer/>
    </div>
  );
}

export default App;

import "./App.css";
import React from 'react'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { Routes,Route } from "react-router-dom";
import ProductStore from "./pages/ProductStore/ProductStore"
import {ProductDetail} from "./pages/ProductDetail/ProductDetail";
import WishList from "./pages/WishListPage/WishList";
import CartPage  from "./pages/CartListPage/CartList";



const App = () => {
  
  return (
    <div className="App">
    <div> <Header /></div>
    <div>  <Navbar/></div>
   

  <Routes>
   <Route path="/" element={<Home />} /> 
   <Route path="/ProductStore" element={<ProductStore />}/>
   <Route path="/ProductDetail/:productId" element={<ProductDetail />}/>
   <Route path="/WishList" element={<WishList/>}/>
   <Route path="/CartPage" element={<CartPage/>}/>
  </Routes>
   
   <div><Footer/></div>

    </div>
  )
}

export default App

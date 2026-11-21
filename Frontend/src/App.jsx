import { useState } from 'react'
import { BrowserRouter as Router,  Routes, Route , Navigate } from "react-router-dom";
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import HeaderAndFooter from './Components/Global/HeaderAndFooter';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ShopCatalogPage from './pages/ShopCatalog';
import Cart from './pages/Cart';
import CheckoutPage from './pages/CheckoutPage';
import { useAuthStore } from '../Store/useAuthStore';
import { useEffect } from 'react';


function App() {
    const { user ,  authCheck } = useAuthStore();

    useEffect(()=>{
        authCheck();
    },[authCheck]);
  
  return (
    <Router>
      <Routes>
        <Route element={<HeaderAndFooter/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop/:id" element={<ProductDetails/>}/>
          <Route path="/create-account" element={ !user ? <SignUp/> : <Navigate to="/" />}/>
          <Route path="/login" element={!user ? <Login/> : <Navigate to="/" />}/>
          <Route path="/shop" element={<ShopCatalogPage/>}/>
          <Route path="/cart" element={ user ? <Cart/> : <Navigate to="/" />}/>
          <Route path="/checkout" element={<CheckoutPage/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App

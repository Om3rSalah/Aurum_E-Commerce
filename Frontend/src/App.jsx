import { useState } from 'react'
import { BrowserRouter as Router,  Routes, Route  } from "react-router-dom";
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import HeaderAndFooter from './Components/Global/HeaderAndFooter';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ShopCatalogPage from './pages/ShopCatalog';
import Cart from './pages/Cart';
import CheckoutPage from './pages/CheckoutPage';


function App() {
  
  return (
    <Router>
      <Routes>
        <Route element={<HeaderAndFooter/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop/:id" element={<ProductDetails/>}/>
          <Route path="/create-account" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/shop" element={<ShopCatalogPage/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<CheckoutPage/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App

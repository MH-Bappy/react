import React, { useState } from 'react'
import Naver from './component/naver/Naver'

import { Route, Routes }from'react-router-dom';
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeOrder/PlaceOrder'
import Footer from './component/footer/Footer';
import Login from './component/login/Login';
function App() {
  const [login,setLogin]=useState(false)
  return (
    <>
    {
      login?<Login setLogin={setLogin}/>:<></>
    }
    <div className='app'>
      
      <Naver setLogin={setLogin} />
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/placeOrder" element={<PlaceOrder/>}/>
      </Routes>
    </div>
    <Footer/></>
  )
}

export default App
 
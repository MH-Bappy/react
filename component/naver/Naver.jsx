import React, { useContext, useState } from 'react'

import style from './naver.module.css'
import {assets} from '../../assets/assets'
import {Link } from "react-router-dom";
import { Storecontex } from '../contex/Storecontex';
function Naver({setLogin}) {
    const [menu,setMenu]=useState("Home")
    const {getTotal}=useContext(Storecontex)
  return (
    <div className={style.naver}>
    <Link to={'/'}> <img className={style.naverLOgo} src={assets.logo} alt="" /></Link> 
      <ul className={style.naverMenu}>
            <Link to="/" onClick={()=>setMenu("Home")} className={menu==="Home"?style.active:""}>Home</Link>
            <a href='#exploeMenu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?style.active:""}>Menu</a>
            <a href='#appDownlod' onClick={()=>setMenu("Mobile App")} className={menu==="Mobile App"?style.active:""}>Mobile App</a>
            <a href='#footer' onClick={()=>setMenu("Contuct Us")} className={menu==="Contuct Us"?style.active:""}>Contuct Us</a>
      </ul>
      <div className={style.naverR}>
        <img src={assets.search_icon} alt="" />
        <div className={style.naverC_icon}>
            <Link to={"/Cart"}><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotal()?"dot":""}> </div>
        </div>
        
      </div>
      <button onClick={()=>setLogin(true)}>Sign in</button>
    </div>
  )
}

export default Naver

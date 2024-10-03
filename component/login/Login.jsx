import React, { useState } from 'react'

import style from './login.module.css'
import { assets } from '../../assets/assets'
function Login({setLogin}) {
    const [curret,setCurret]=useState("Login")
  return (
    <div className={style.login}>
      <form className={style.loginCon} >
        <div className={style.title}>
            <h2>{curret}</h2>
            <img onClick={()=>setLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className={style.loginInput}>
            {
                curret==="Login"?<></>:<input type="text " placeholder='your name' required />
            }
            
            <input type="email " placeholder='your email' required />
            <input type="password" placeholder='password' required />
        </div>
        <button type="submit">{
                curret==="singup"?"creat account":"Login"
            }</button>
            <div className={style.logCondi}>
                <input type="checkbox" required />
                <p>Lorem ipsum dolor sit.</p>
            </div>
            {
                curret==="Login"?<p>creat a new acoount? <span onClick={()=>setCurret("singup")}>Click hear</span></p>:<p>Allready have an account? <span onClick={()=>setCurret("Login")}>Login</span></p>
            }
            
            
      </form>
    </div>
  )
}

export default Login

import React, { useContext } from 'react'

import style from './placeOrder.module.css'

import { Storecontex } from '../../component/contex/Storecontex'
function PlaceOrder() {
  const{getTotal} =useContext(Storecontex)
  return (
    <form className={style.plceOrder}>
      <div className={style.plcL}>
        <p>Delivery Information</p>
        <div className={style.Mlf}>
          <input type="text" placeholder='Frist name'/>
          <input type="text" placeholder='Last name'/>
        </div>
        <input type='text' placeholder='Email Address'/>
        <input type='text' placeholder='Street'/>
        <div className={style.Mlf}>
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
        </div>
        <div className={style.Mlf}>
          <input type="text" placeholder='Zip code'/>
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone'/>
      </div>




      <div className={style.plcR}>
      <div className={style.cartTotal}>
            <h2>Cart Total</h2>
            <div>
              <div className={style.cartTDeta}>
                <p>Subtotal</p>
                <p>${getTotal()}</p>
              </div>
              <hr />
              <div className={style.cartTDeta}>
                <p>Delivery Fee</p>
                <p>${2}</p>
                
              </div>
              <hr />
              <div className={style.cartTDeta}>
                <b>Total</b>
                <b>${getTotal()+2}</b>
              </div>
              
            </div>
            <button >PROCEET TO Payment</button>
            </div>

      </div>
    </form>
  )
}

export default PlaceOrder

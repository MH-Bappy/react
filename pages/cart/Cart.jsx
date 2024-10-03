import React, { useContext } from 'react'
import style from './cart.module.css'
import { Storecontex } from '../../component/contex/Storecontex'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const {cardItem,food_list,removeFromcard ,getTotal }=useContext(Storecontex)
  const navigate=useNavigate()
  return (
    <div className={style.cart}>
      <div className={style.cartItems}>
        <div className={style.cartItemsTitle}>
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <br /> <hr />
        {
          food_list.map((x,index)=>{
            if(cardItem[x._id]>0){
              return(
                <div>
                  <div key={index} className={style.cartItemsTitleitem}>
                    <img src={x.image} alt="" />
                    <p>{x.name}</p>
                    <p>${x.price}</p>
                    <p>{cardItem[x._id]}</p>
                    <p>${x.price*cardItem[x._id]}</p>
                    <p className={style.p} 
                    onClick={()=>removeFromcard(x._id)}>X</p>
                </div>
                <hr />
                </div>
              )
            }
          })
        }
      </div>

          <div className={style.cartBottom}>
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
            <button onClick={()=>navigate('/placeOrder')}>PROCEET TO CHECKOUT</button>
            </div>


            <div className={style.cardPromo}>
              <div >
                <p>If you have a promo code,Enter it Here</p>
                <div className={style.cardPromoInput}>
                  <input type="text" placeholder='Promo code' />
                  <button>Submit</button>
                </div>
              </div>
            </div>
          </div>


    </div>
  )
}

export default Cart

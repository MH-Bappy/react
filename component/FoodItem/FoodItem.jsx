import React, { useContext} from 'react'
import style from './fooditem.module.css'
import { assets } from '../../assets/assets'
import { Storecontex } from '../contex/Storecontex'
function FoodItem({item}) {
    const { _id, name, price, description,image }=item
    const{cardItem,addtoCart,removeFromcard}=useContext(Storecontex)

   
    
  return (
    <div className={style.foodItem}>
      <div className={style.fiImageCon}>
        <img className={style.fiImage} src={image} alt="" /> 
        {
          !cardItem[_id]
          ? <img className={style.add} onClick={()=>addtoCart(_id)} src={assets.add_icon_white}/> : <div className={style.fiCounter}>
              <img onClick={()=>removeFromcard(_id)} src={assets.remove_icon_red} alt="" />
              <p>{cardItem[_id]}</p>
              <img onClick={()=>addtoCart(_id)} src={assets.add_icon_green} alt="" />
          </div>
        }
      </div>
      <div className={style.fiInfo}>
        <div className={style.finRating}>
            <p >{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className={style.fIdes}>
            {description}
        </p>
        <p className={style.fIprice}>
            $ {price}
        </p>

      </div>
    </div>
  )
}

export default FoodItem

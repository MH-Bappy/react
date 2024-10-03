import React, { useContext } from 'react'

import style from './foodDes.module.css'
import { Storecontex } from '../contex/Storecontex'
import FoodItem from '../FoodItem/FoodItem'
function FoodDes({catagory}) {
    const{food_list}=useContext(Storecontex)
  return (
    <div className={style.foodDes} id='foodDes'>
      <h2> Top dishes near you</h2>
      <div className={style.fdList}>
          {
            food_list.map((item,index)=>{
              if(catagory=== "All" || catagory===item.category)
               { return<FoodItem key={index} item={item}/>} 
            })
          }
      </div>
    </div>
  )
}

export default FoodDes

import React from 'react'

import style from './exploeMenu.module.css'
import {menu_list} from '../../assets/assets'
function ExploreMenu({setCatagory,catagory}) {
  return (
    <div className={style.exploeMenu} id='exploeMenu'>
        <h1 >Explore Our Menu</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt provident maxime, unde quo harum id?</p>
       <div className={style.emList}>
            {
                menu_list.map((x,index)=>{
                    return(
                        <div onClick={()=>setCatagory(prev=>prev===x.menu_name?"All":x.menu_name)} key={index} className={style.emLitem}>
                            <img className={catagory===x.menu_name?style.active:"" } src={x.menu_image} alt="" />
                            <p>{x.menu_name}</p>
                        </div>
                    )
                })
            }
       </div>
       <hr />
    </div>
  )
}

export default ExploreMenu




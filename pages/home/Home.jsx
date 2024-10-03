import React, { useState } from 'react'

import style from './home.module.css'
import Header from '../../component/header/Header'
import ExploreMenu from '../../component/exploreMenu/ExploreMenu'
import FoodDes from '../../component/foodDesplay/FoodDes'
import AppDownlod from '../../component/appDownlod/AppDownlod'
function Home() {
  const [catagory,setCatagory]=useState("All")
  return (
    <div>
      <Header/>
      <ExploreMenu catagory={catagory} setCatagory={setCatagory}/>
      <FoodDes catagory={catagory}/>
      <AppDownlod/>
    </div>
  )
}

export default Home

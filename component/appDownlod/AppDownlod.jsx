import React from 'react'

import style from './appD.module.css'

import { assets } from '../../assets/assets'
function AppDownlod() {
  return (
    <div className={style.AppDownlod} id='appDownlod' >
        <p>For Better Experience Download <br /> Tomato App </p>
        <div className={style.appDPlatFrom}>
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownlod

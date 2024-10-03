import React from 'react'
import style from './footer.module.css'

import {assets} from '../../assets/assets'
function Footer() {
  return (
    <div className={style.footer} id='footer'>
      <div className={style.footerCon}>
        <div className={style.footerL}>
        <img src={assets.logo} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quisquam quae autem labore quis, voluptatibus, dicta totam dignissimos aliquid odio voluptatem velit facilis similique dolore tempora ad rem fugiat dolorum?</p>
        <div className={style.fcIcon}>
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
        </div>
        </div>
        <div className={style.footerC}>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy</li>
            </ul>
        </div>
        <div className={style.footerR}>
                <h2>
                    GET IN TOUCH
                </h2>
                <ul>
                    <li>+2345</li>
                    <li>abcd@gmail.com</li>
                </ul>
        </div>

      </div>
      <hr />
      <p className={style.footrtc}>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
    </div>
  )
}

export default Footer

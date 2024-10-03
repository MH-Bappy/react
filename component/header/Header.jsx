import React from 'react'

import style from './header.module.css'
function Header() {
  return (
    <div className={style.header}>
      <div className={style.headerCon}>
        <h2>Order Your Favourie food here</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam porro, omnis dicta voluptatem ipsum deserunt magnam</p>
          <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header

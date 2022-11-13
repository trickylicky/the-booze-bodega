import React from 'react'
import { NavLink } from 'react-router-dom'
import LiquorCtaegory from './LiquorCategory'

function Home({products}) {

  return (
    <div className='component home'>
      <p className='first'>Discover Our Range</p>
      <p className='second'>Categories</p>
      <div className='categories'>
        <NavLink to="/wine">
          <img src="../wines.jpeg" alt='wines' width="180px" height="120px" /> <br /><br />
           WINES
        </NavLink>
        <NavLink to="/gin">
          <img src="../gins.jpeg" alt='gins' width="180px" height="120px" /> <br /><br />
           GINS
        </NavLink>
        <NavLink to="/vodka">
          <img src="../vodkas.jpg" alt='vodkas' width="180px" height="120px"  /> <br /><br />
           VODKAS
        </NavLink>
        <NavLink to="/whiskey">
          <img src="../whiskeys.jpeg" alt='whiskeys' width="180px" height="120px" /> <br /><br />
           WHISKEYS
        </NavLink>
      </div>
      <div>
        <LiquorCtaegory props={products} />
      </div>
    </div>
  )
}

export default Home
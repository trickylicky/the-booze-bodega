import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../services/app-context'
import LiquorCategory from './LiquorCategory'

function Home() {
  const { liquors } = useContext(AppContext)
  
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
      <p className='second'>All Products</p>
      <div>
        <LiquorCategory props={liquors} />
      </div>
    </div>
  )
}

export default Home
import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar" id='nav'>
        <h1 className="navh1">Booze Bodega</h1>
        <div className="navlinks">
          <NavLink to='/' > HOME </NavLink>
          <NavLink to='/whiskey' > WHISKEY </NavLink>
          <NavLink to='/gin' > GIN </NavLink>
          <NavLink to='/vodka' > VODKA </NavLink>
          <NavLink to='/wine' > WINE </NavLink>
          <NavLink to='/blog' > BLOG </NavLink>
          <NavLink to='/cart' id='cart_icon'> <i className="fa-solid fa-cart-shopping"></i> </NavLink>

        </div>
    </nav>
  )
}

export default NavBar
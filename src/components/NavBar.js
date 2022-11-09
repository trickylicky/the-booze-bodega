import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar">
            <h1 className="navh1">Booze Bodega</h1>
            <div className="navlinks">
              <NavLink to='/' >
                  HOME
              </NavLink>
              <NavLink to='/liquor' >
                  LIQUORS
              </NavLink>
              <NavLink to='/blog' >
                  BLOG
              </NavLink>
            </div>
        </nav>
  )
}

export default NavBar
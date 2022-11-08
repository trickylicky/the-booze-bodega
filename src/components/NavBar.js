import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar">
            <h1 className="navh1">Booze Boodega</h1>
            <div className="navlinks">
              <NavLink to='/' >
                  HOME
              </NavLink>
              <NavLink to='/whiskey' >
                  WHISKEY
              </NavLink>
              <NavLink to='/vodka' >
                  VODKA
              </NavLink>
              <NavLink to='/wine' >
                  WINE
              </NavLink>
              <NavLink to='/gin' >
                  GIN
              </NavLink>
            </div>
        </nav>
  )
}

export default NavBar
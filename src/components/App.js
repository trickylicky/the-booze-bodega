import React, { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar'
import {Routes, Route} from "react-router-dom"
import Home from "./Home"
import Footer from "./Footer"
import Blog from './Blog'
import Whiskey from './Whiskey'
import Gin from './Gin'
import Vodka from './Vodka'
import Wine from './Wine'
import Search from './Search'
import Cart from './Cart'

function App() {

  return (
    <div>
      <NavBar />
      <Search />
      <Routes>
        <Route exact path='/' element={<Home /> } />
        <Route path='/whiskey' element={<Whiskey />} />
        <Route path='/gin' element={<Gin />} />
        <Route path='/vodka' element={<Vodka />} />
        <Route path='/wine' element={<Wine />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
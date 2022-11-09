import React from 'react'
import NavBar from './NavBar'
import {Routes, Route} from "react-router-dom"
import Home from "./Home"
import Whiskey from "./Whiskey"
import Vodka from "./Vodka"
import Wine from "./Wine"
import Gin from "./Gin"
import Footer from "./Footer"

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/whiskey' element={<Whiskey />} />
        <Route path='/vodka' element={<Vodka />} />
        <Route path='/wine' element={<Wine />} />
        <Route path='/gin' element={<Gin />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
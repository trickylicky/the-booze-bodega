import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import {Routes, Route} from "react-router-dom"
import Home from "./Home"
import Footer from "./Footer"
import Blog from './Blog'
import Whiskey from './Whiskey'
import Gin from './Gin'
import Vodka from './Vodka'
import Wine from './Wine'

function App() {
  const [liquors, setLiquors] = useState([])

  const API = "https://liquor-data.herokuapp.com/liquor"

  useEffect(() => {
    fetch(API).then(res=> res.json()).then(data => setLiquors(data)).catch(console.log)
  }, [])

  const wines = liquors.filter(liquor => liquor.category === "Wines")
  const whiskeys = liquors.filter(liquor => liquor.category === "Whiskey")
  const vodkas = liquors.filter(liquor => liquor.category === "Vodka")
  const gins = liquors.filter(liquor => liquor.category === "Gin")

  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home liquors = {liquors} />} />
        <Route path='/whiskey' element={<Whiskey whiskeys = {whiskeys} />} />
        <Route path='/gin' element={<Gin gins= {gins} />} />
        <Route path='/vodka' element={<Vodka vodkas = {vodkas} />} />
        <Route path='/wine' element={<Wine wines = {wines} />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>      
      <Footer />
    </div>
  )
}

export default App
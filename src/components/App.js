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
import Search from './Search'

function App() {
  const [liquors, setLiquors] = useState([])
  const [searchInput , setSearchInput] = useState([])

  const API = "http://localhost:9292/liquors"

  // const API = "https://liquor-data.herokuapp.com/liquor"


  function getLiqour(){
    fetch(API).then(res=>res.json()).then(data=> setLiquors(data))
  }

  useEffect(() => {
    if (searchInput.length > 0){
      setLiquors(prevItems => prevItems.filter((liquor) => liquor.title.toLowerCase().includes(searchInput.toLowerCase())));
    } else {
      getLiqour()
    } 
  },[searchInput])
  
  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  }

 useEffect(() => {
    fetch(API).then(res=> res.json()).then(data => setLiquors(data)).catch(console.log)
  }, [])

  const wines = liquors.filter(liquor => liquor.category === "Wines" && liquor.price !== null)
  const whiskeys = liquors.filter(liquor => liquor.category === "Whiskey" && liquor.price !== null)
  const vodkas = liquors.filter(liquor => liquor.category === "Vodka" && liquor.price !== null)
  const gins = liquors.filter(liquor => liquor.category === "Gin" && liquor.price !== null)


  return (
    <div>
      <NavBar /> <br /><br />
      <Search handleSearch ={handleSearch}/>
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
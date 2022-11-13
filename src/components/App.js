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
import Cart from './Cart'

function App() {

  const [liquors, setLiquors] = useState([])
  const [searchInput , setSearchInput] = useState([])
  const [reviews, setReviews] = useState([])
  const [cart, setCart] = useState([]);


  const liquorsApi = "http://localhost:9292/liquors"
  const reviewsApi = "http://localhost:9292/reviews"

  // const API = "https://liquor-data.herokuapp.com/liquor" json-api

  useEffect(() => {
    fetch(reviewsApi).then(res=> res.json()).then(data => setReviews(data)).catch(console.log)

    if (searchInput.length > 0){
      setLiquors(prevItems => prevItems.filter(liquor => liquor.title.toLowerCase().includes(searchInput.toLowerCase())));
    } else {
      fetch(liquorsApi).then(res=> res.json()).then(data => setLiquors(data)).catch(console.log)
    } 
   }, [reviews, searchInput])
  
  const wines = liquors.filter( liquor => liquor.category === "Wines" )
  const whiskeys = liquors.filter( liquor => liquor.category === "Whiskey" )
  const vodkas = liquors.filter( liquor => liquor.category === "Vodka" )
  const gins = liquors.filter( liquor => liquor.category === "Gin" )

  const handleSearch = e => setSearchInput(e.target.value)

  // function addToCart(liquor) {
  //   if (!cart.includes(liquor)) {
  //     setCart([...cart, liquor])
  //     fetch("http://localhost:9292/cart", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(liquor)
  //     })
  //   }
  // }

  // const handleDelete = e => {
  //   fetch(reviewsApi+`/${e.target.id}`,{
  //     method: "DELETE",
  //     headers : {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //     }
  //   })
  // }


  return (
    <div>
      <NavBar />
      <Search handleSearch ={handleSearch}/>
      <Routes>
        <Route exact path='/' element={<Home products={liquors}/> } />
        <Route path='/whiskey' element={<Whiskey whiskeys = {whiskeys} />} />
        <Route path='/gin' element={<Gin gins= {gins} />} />
        <Route path='/vodka' element={<Vodka vodkas = {vodkas} />} />
        <Route path='/wine' element={<Wine wines = {wines} />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
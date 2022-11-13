import React, { useContext } from 'react'
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
import { AppContext } from '../services/app-context'

function App() {

  const { handleSearch, liquors, cart } = useContext(AppContext);
  // const API = "https://liquor-data.herokuapp.com/liquor" json-api

  

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
        <Route exact path='/' element={<Home products={liquors} /> } />
        <Route path='/whiskey' element={<Whiskey />} />
        <Route path='/gin' element={<Gin />} />
        <Route path='/vodka' element={<Vodka />} />
        <Route path='/wine' element={<Wine />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/cart' element={<Cart savedItems ={cart} />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
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
import { CartItem } from '../models/cart-item'

function App() {

  const [liquors, setLiquors] = useState([])
  const [searchInput , setSearchInput] = useState('')
  const [reviews, setReviews] = useState([])
  const [cart, setCart] = useState([]);


  const liquorsApi = "http://localhost:9292/liquors"
  const reviewsApi = "http://localhost:9292/reviews"

  // const API = "https://liquor-data.herokuapp.com/liquor" json-api

  const getCartHandler = async () => {
    const parsedCart = localStorage.getItem('cart');
    if(!parsedCart) {
     const stringedCart = await JSON.stringify([]);
     localStorage.setItem('cart', stringedCart); 
     setCart([]);
    }
    else {
      const parsed = await JSON.parse(parsedCart);
      setCart(parsed);
    }
  }

  useEffect(() => {
    getCartHandler();
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    addToCart();
  }, [cart])

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

  async function addToCart(liquor, method) {
    const foundItem = cart.find((item) => item.id === liquor.id);
    let cartToParse = cart;
    if(!foundItem) {
        const newCartItem = new CartItem(liquor.id, liquor.title, 1, liquor.price, liquor.price);
        cartToParse = [...cart, newCartItem];
        setCart(prevCart => [...prevCart, newCartItem]);
    }
    else if(foundItem) {
        if(method === 'increase') {
            const foundItemIndex = cart.findIndex((item) => item.id === foundItem.id);
            const updatedCartItem = { ...foundItem, totalAmount: foundItem.totalAmount + foundItem.price, quantity: foundItem.quantity++ };
            const updatedCart = cart;
            updatedCart[foundItemIndex] = updatedCartItem;
            cartToParse = updatedCart;
            setCart(updatedCart);
        } else if(method === 'decrease') {
            if(foundItem.quantity === 1) {
                cartToParse = cart.filter(cItem => cItem.id !== foundItem.id);
                setCart(prevCart => prevCart.filter((cartItem) => cartItem.id !== foundItem.id));
            } else if(foundItem.quantity > 1) {
                const foundItemIndex = cart.findIndex((item) => item.id === foundItem.id);
                const updatedCartItem = { ...foundItem, totalAmount: foundItem.totalAmount - foundItem.price, quantity: foundItem.quantity-- };
                const updatedCart = cart;
                cartToParse = updatedCart;
                updatedCart[foundItemIndex] = updatedCartItem;
            }

        }
    }
    const stringCart = await JSON.stringify(cartToParse);
    localStorage.setItem('cart', stringCart);
}

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
        <Route 
          exact path='/' 
          element={<Home products={liquors} reviews={reviews} addToCart={addToCart} /> }
        />
        <Route 
          path='/whiskey' 
          element={<Whiskey whiskeys = {whiskeys} reviews={reviews} addToCart={addToCart}  />} 
        />
        <Route 
          path='/gin' 
          element={<Gin gins= {gins} reviews={reviews} addToCart={addToCart}  />} 
        />
        <Route 
          path='/vodka' 
          element={<Vodka vodkas = {vodkas} reviews={reviews} addToCart={addToCart}  />} 
        />
        <Route 
          path='/wine' 
          element={<Wine wines = {wines} reviews={reviews} addToCart={addToCart}  />} 
        />
        <Route 
          path='/blog' 
          element={<Blog />} 
        />
        <Route 
          path='/cart' 
          element={<Cart savedItems ={cart} />} 
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
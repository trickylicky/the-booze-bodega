import { createContext, useEffect, useState } from "react";
import { CartItem } from "../models/cart-item";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [liquors, setLiquors] = useState([])
  const [searchInput , setSearchInput] = useState('')
  const [reviews, setReviews] = useState([])
  const [cart, setCart] = useState([]);
  const [name, setName] = useState('');


  // Our Hosted backend APIs.

  const liquorsApi = "https://fierce-gorge-06316.herokuapp.com/liquors"
  
  const reviewsApi = "https://fierce-gorge-06316.herokuapp.com/reviews"
  

  const getCartHandler = async () => {
    const parsedCart = localStorage.getItem('cart')
    if(!parsedCart) {
     const stringedCart = await JSON.stringify([])
     localStorage.setItem('cart', stringedCart)
     setCart([])
    }
    else {
      const parsed = await JSON.parse(parsedCart)
      setCart(parsed)
    }
  }

  // const getUserName = () => {
  //   const foundUser = localStorage.getItem('user')
  //   if(!foundUser) return false
  //   if(foundUser) {
  //     setName(foundUser)
  //     return true
  //   }
  // }

  useEffect(() => {
    getCartHandler()
    //eslint-disable-next-line
  }, []);


  useEffect(() => {

    if (searchInput.length > 0){
      setLiquors(prevItems => prevItems.filter(liquor => liquor.title.toLowerCase().includes(searchInput.toLowerCase())));
    } else {
      fetch(liquorsApi).then(res=> res.json()).then(data => setLiquors(data)).catch(console.log)
      fetch(reviewsApi).then(res=> res.json()).then(data => setReviews(data)).catch(console.log)
    } 
   }, [searchInput, reviews])
  
  const wines = liquors.filter( liquor => liquor.category === "Wines" )
  const whiskeys = liquors.filter( liquor => liquor.category === "Whiskey" )
  const vodkas = liquors.filter( liquor => liquor.category === "Vodka" )
  const gins = liquors.filter( liquor => liquor.category === "Gin" )

  const handleSearch = e => setSearchInput(e.target.value)

  const handleDelete = e => {
    fetch(reviewsApi+`/${e.target.id}`,{
      method: "DELETE",
    })
    setReviews(reviews)
  }

  async function addToCart(liquor, method) {
    const foundItem = cart.find(item => item.id === liquor.id)
    let cartToParse = cart
    if(!foundItem) {
        const newCartItem = new CartItem(liquor.id, liquor.title, 1, liquor["image_url"], liquor.price, liquor.price )
        cartToParse = [...cart, newCartItem]
        setCart(prevCart => [...prevCart, newCartItem])
    }
    else if(foundItem) {
        if(method === 'increase') {
            const foundItemIndex = cart.findIndex((item) => item.id === foundItem.id)
            const updatedCartItem = { ...foundItem, totalAmount: foundItem.totalAmount + foundItem.price, quantity: foundItem.quantity + 1 }
            const updatedCart = cart
            updatedCart[foundItemIndex] = updatedCartItem
            cartToParse = updatedCart
            setCart(updatedCart)
        } else if(method === 'decrease') {
            if(foundItem.quantity === 1) {
                cartToParse = cart.filter(cItem => cItem.id !== foundItem.id)
                setCart(prevCart => prevCart.filter((cartItem) => cartItem.id !== foundItem.id))
            } else if(foundItem.quantity > 1) {
                const foundItemIndex = cart.findIndex((item) => item.id === foundItem.id)
                const updatedCartItem = { ...foundItem, totalAmount: foundItem.totalAmount - foundItem.price, quantity: foundItem.quantity - 1 }
                const updatedCart = cart
                cartToParse = updatedCart
                updatedCart[foundItemIndex] = updatedCartItem
            }
        }
    }
    const stringCart = await JSON.stringify(cartToParse)
    localStorage.setItem('cart', stringCart)
}
    const value = { name, setName, wines, cart, liquors, handleSearch, handleDelete, reviews, addToCart, whiskeys, gins, vodkas }
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppContextProvider;
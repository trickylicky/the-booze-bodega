import React, { useContext } from 'react'
import { AppContext } from '../services/app-context'
import LiquorCategory from './LiquorCategory'

function Cart() {
  const { cart, addToCart } = useContext(AppContext)

  console.log(cart);

  return (
    <div className='component cart'>
        <p className='first'> Here is a list of your saved items.</p>
        <LiquorCategory props={cart} addToCart={addToCart} />
    </div>
  )
}

export default Cart
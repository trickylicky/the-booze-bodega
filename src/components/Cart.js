import React, { useContext } from 'react'
import { AppContext } from '../services/app-context'

function Cart() {
  const { savedItems } = useContext(AppContext)

  console.log(savedItems)
  return (
    <div className='component cart'>
        <p className='first'> View Saved Items</p>
    </div>
  )
}

export default Cart
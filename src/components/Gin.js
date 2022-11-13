import React, { useContext } from 'react'
import { AppContext } from '../services/app-context'
import LiquorCategory from './LiquorCategory'


function Gin() {
  const { gins, addToCart } = useContext(AppContext)
  return (
    <div className='component gin'>
        <p className='first'>Gin</p>
        <p className='second'>There are {gins.length} products.</p>
        <LiquorCategory props={gins} addToCart={addToCart} />
    </div>
  )
}

export default Gin
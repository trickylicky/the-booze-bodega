import React, { useContext } from 'react'
import { AppContext } from '../services/app-context'
import LiquorCategory from './LiquorCategory'

function Vodka() {
  const { vodkas, addToCart } = useContext(AppContext)
  return (
    <div className='component vodka'>
        <p className='first'>Vodka</p>
        <p className='second'>There are {vodkas.length} products.</p>
        <LiquorCategory props={vodkas} addToCart={addToCart} /> 
    </div>
  )
}

export default Vodka
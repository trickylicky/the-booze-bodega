import React, { useContext } from 'react'
import { AppContext } from '../services/app-context'
import LiquorCategory from './LiquorCategory'

function Wine() {
  const { wines, addToCart } = useContext(AppContext);
  return (
    <div className='component wine'>
        <p className='first'>Wine</p>
        <p className='second'>There are {wines.length} products</p>
        <LiquorCategory props={wines} addToCart={addToCart} />
    </div>
  )
}

export default Wine
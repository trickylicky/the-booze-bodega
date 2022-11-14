import React, { useContext } from 'react'
import { AppContext } from '../services/app-context';
import LiquorCategory from './LiquorCategory'

function Whiskey() {
  const { whiskeys, addToCart } = useContext(AppContext);
  return (
    <div className='component whiskey'>
        <p className='first'>Whiskey</p>
        <p className='second'>There are {whiskeys.length} products.</p>
        <LiquorCategory props={whiskeys} addToCart={addToCart} />
    </div>
  )
}

export default Whiskey;
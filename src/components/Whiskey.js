import React from 'react'
import Liquor from './Liquor'

function Whiskey( {whiskeys}) {
  return (
    <div className='component whiskey'>
        <p className='first'>Whiskey</p>
        <p className='second'>There are {whiskeys.length} products.</p>
        <Liquor props = {whiskeys} />
    </div>
  )
}

export default Whiskey
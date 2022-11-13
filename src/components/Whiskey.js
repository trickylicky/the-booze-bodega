import React from 'react'
import LiquorCtaegory from './LiquorCategory'

function Whiskey( {whiskeys}) {
  return (
    <div className='component whiskey'>
        <p className='first'>Whiskey</p>
        <p className='second'>There are {whiskeys.length} products.</p>
        <LiquorCtaegory props = {whiskeys} />
    </div>
  )
}

export default Whiskey
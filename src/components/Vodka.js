import React from 'react'
import Liquor from './Liquor'

function Vodka( {vodkas} ) {
  return (
    <div className='component vodka'>
        <p className='first'>Vodka</p>
        <p className='second'>There are {vodkas.length} products.</p>
        <Liquor props = {vodkas} />
    </div>
  )
}

export default Vodka
import React from 'react'
import LiquorCtaegory from './LiquorCategory'

function Vodka( {vodkas} ) {
  return (
    <div className='component vodka'>
        <p className='first'>Vodka</p>
        <p className='second'>There are {vodkas.length} products.</p>
        <LiquorCtaegory props = {vodkas} />
    </div>
  )
}

export default Vodka
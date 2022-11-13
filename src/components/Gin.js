import React from 'react'
import Liquor from './Liquor'


function Gin( {gins} ) {
  return (
    <div className='component gin'>
        <p className='first'>Gin</p>
        <p className='second'>There are {gins.length} products.</p>
        <Liquor props = {gins} />
    </div>
  )
}

export default Gin
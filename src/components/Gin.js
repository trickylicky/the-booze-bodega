import React from 'react'
import LiquorCategory from './LiquorCategory'


function Gin( {gins} ) {
  return (
    <div className='component gin'>
        <p className='first'>Gin</p>
        <p className='second'>There are {gins.length} products.</p>
        <LiquorCategory props = {gins} />
    </div>
  )
}

export default Gin
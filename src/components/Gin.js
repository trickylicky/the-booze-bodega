import React from 'react'
import Liquor from './Liquor'

function Gin( {gins} ) {
  return (
    <div className='component blog'>
        <p className='first'>Gin</p>
        <p>There are {gins.length} products.</p>
        <Liquor props = {gins} />
    </div>
  )
}

export default Gin
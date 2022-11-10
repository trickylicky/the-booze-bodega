import React from 'react'
import Liquor from './Liquor'

function Wine( {wines} ) {
  return (
    <div className='component blog'>
        <p className='first'>Wine</p>
        <p className='second'>There are {wines.length} products</p>
        <Liquor props = {wines} />
    </div>
  )
}

export default Wine
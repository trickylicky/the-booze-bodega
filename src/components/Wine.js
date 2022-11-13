import React from 'react'
import LiquorCtaegory from './LiquorCategory'

function Wine( {wines} ) {
  return (
    <div className='component wine'>
        <p className='first'>Wine</p>
        <p className='second'>There are {wines.length} products</p>
        <LiquorCtaegory props = {wines} />
    </div>
  )
}

export default Wine
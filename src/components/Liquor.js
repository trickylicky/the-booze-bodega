import React from 'react'
import { NavLink } from 'react-router-dom'

function LiquorCategory({props}) {

  return (
    <div className='component liquors'>
        {
          props.map(obj => (
    
            <main id='liquor' key={obj.id}>
                <img src={obj.image_url} alt={obj.title} />
                <p className='liquor_details'> 
                  <b>{obj.title}</b><br /><br />
                  {obj.description} <br /><br />
                  <span style={{color:'red', fontSize: 'large'}}>KSh. {obj.price}</span> <br /> <br />
                  <NavLink to='/addreview'>
                    <button className='submit' type='click'>Add review</button>
                  </NavLink>
                </p>
            </main>
            )
          ) 
        }
    </div>
  )
}

export default LiquorCategory
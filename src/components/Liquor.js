import React from 'react'
import Popup from 'reactjs-popup'

function LiquorCategory({props, reviews}) {

  return (
    <div className='component liquors'>
        {
          props.map(obj => (
    
            <main id='liquor' key={obj.id}>
                <img src={obj.image_url} alt={obj.title} />
                <p className='liquor_details'> 
                  <b>{obj.title}</b>
                </p> <br /> &emsp;
                <Popup trigger={<button className='popup'> more details</button>} position="center center">
                  <img src={obj.image_url} alt={obj.title} />
                  <p> 
                    <b>{obj.title}</b><br /><br />
                    {obj.description} <br /><br />
                    <span style={{color:'red', fontSize: 'large'}}>KSh. {obj.price}</span> <br /> <br />
                  </p>
                  <p>reviews</p>
                </Popup> &emsp; &emsp; &emsp; &emsp;
                <button className='popup'>add to cart</button>
            </main>
            )
          ) 
        }
    </div>
  )
}

export default LiquorCategory
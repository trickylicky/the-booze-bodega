import React from 'react'

function LiquorCategory({props}) {

  return (
    <div className='component liquors'>
        {
          props.map(obj => (
    
            <main id='liquor' key={obj.id}>
                <img src={obj.image} alt={obj.title} />
                <p> 
                  <b>{obj.title}</b><br /><br />
                  {obj.description} <br /><br />
                  <span style={{color:'red', fontSize: 'large'}}>Ksh. {obj.price}</span> <br /> <br />
                  <button className='submit' type='submit'>Add to cart</button>
                </p>
            </main>
            )
          ) 
        }
    </div>
  )
}

export default LiquorCategory
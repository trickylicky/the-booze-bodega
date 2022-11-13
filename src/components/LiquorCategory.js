import React, { useContext } from 'react'
import Popup from 'reactjs-popup'
import { AppContext } from '../services/app-context'

function LiquorCategory( {props} ) {

  const { reviews, addToCart } = useContext(AppContext);

  return (
    <div className='component liquors'>
        {
          props.map(obj => {

            return(
    
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
                    Price : &nbsp; <span style={{color:'red', fontSize: 'large'}}> Ksh. {obj.price}</span> <br /> <br />
                  </p>
                  <ul>
                  <h3>Users Reviews</h3>
                    {
                      reviews.filter(review => review.liquor_id === obj.id)
                      .map(review => review.length === 0 ? <li>There are no reviews added yet</li> : 
                        <li key={review.id}>{review.comment}</li>
                      )
                    }
                  </ul>
                </Popup> &emsp; &emsp;
                <button 
                  className='click' 
                  onClick={ e => {
                    alert ("Item added to cart")
                    addToCart(obj, 'increase')}
                  }
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>  &emsp; &emsp;
                <button>
                  <i className="fa-solid fa-pen" style={{color: "blue"}}></i>               
                </button>
              </main>
            )}
          ) 
        }
    </div>
  )
}

export default LiquorCategory
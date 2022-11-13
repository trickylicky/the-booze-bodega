import React, { useContext, useState } from 'react'
import Popup from 'reactjs-popup'
import { AppContext } from '../services/app-context'

function LiquorCategory( {props} ) {
  const [form, setForm] = useState({
    name: "",
    comment: ""
  })

  const { reviews, addToCart, name } = useContext(AppContext);

  const handleChange = e => setForm({...form, [e.target.name] : e.target.value})

  const handleSubmit = (e, id) => {
    e.preventDefault()
    const updatedForm = {
      name: name,
      review_data: {
        rating: 4,
        comment: form.comment,
        liquor_id: id
      },
    }
    console.log(updatedForm);
    fetch("http://localhost:9292/reviews", {
      method: "POST",
      headers : {"Content-Type": "application/json"},
      body : JSON.stringify(updatedForm)
    })
    setForm({
      name: '',
      comment: ""
    })
  }

  return (
    <div className='component liquors'>
        {
          props.map(obj => {

            return(
    
              <main id='liquor' key={obj.id}>
                <img src={obj.image_url} alt={obj.title} />
                <p className='liquor_details'> 
                  <b>{obj.title}</b>
                </p> <br />
                <div className='popup_buttons'>

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
                  </Popup>
                  <button 
                    className='click' 
                    onClick={ e => {
                      alert ("Item added to cart")
                      addToCart(obj, 'increase')}
                    }
                  >
                    <i className="fa-solid fa-cart-shopping"></i>
                  </button> 

                  <Popup trigger={<button className='popup'> <i className="fa-sharp fa-solid fa-feather-pointed"></i>
                  </button>} position="left bottom">
                    <br />
                    <form onSubmit={e => handleSubmit(e, obj.id)}>
                      <label for="reviews"> New review(s): <br /> <br />
                        <textarea 
                          name="comment" 
                          onChange={e => handleChange(e)} 
                          placeholder='add text' 
                          style={{height: '100px', width: "200px"}}
                        >
                        </textarea>
                      </label><br /> <br />
                      <input type='submit' value='post' />
                    </form><br /> <br />
                  </Popup>
                </div>
              </main>
            )}
          ) 
        }
    </div>
  )
}

export default LiquorCategory
import React, { useContext, useState } from 'react'
import Popup from 'reactjs-popup'
import { AppContext } from '../services/app-context'

function LiquorCategory( {props} ) {

  const [form, setForm] = useState({
    name: '',
    review_data: {
      rating: '',
      comment: '',
      liquor_id: ''
    }
  })

  const { reviews, handleDelete, addToCart, setReviews } = useContext(AppContext);

  const handleChange = e => setForm({...form, [e.target.name] : e.target.value})

  const handleSubmit = (e, id) => {

    e.preventDefault()

    const updatedForm = {
      name: form.username,
      review_data: {
        rating: Math.ceil(Math.random()*5),
        comment: form.comment,
        liquor_id: id
      },
    }

    fetch("http://localhost:9292/reviews", {
      method: "POST",
      headers : {"Content-Type": "application/json"},
      body : JSON.stringify(updatedForm)
    })

    setReviews(reviews)
    setForm({
      name: '',
      review_data: {
        comment: '',
      }
    })
  }

  return (
    <div className='component liquors'>
      {
        props.map(obj => {

          return(
  
            <main id='liquor' key={obj.id}>
              <img src={obj.image_url} alt={obj.title} />
              <p className='liquor_details'> <b>{obj.title}</b> </p> <br />
              <div className='popup_buttons'>

                <Popup 
                  trigger={<button className='popup'><i className="fa-solid fa-info"></i></button>} 
                  position="center center"
                >
                  <img src={obj.image_url} alt={obj.title} />
                  <p> 
                    <b>{obj.title}</b>  <br /><br />
                    {obj.description}   <br /><br />
                    Price : &nbsp; <span style={{color:'red', fontSize: 'large'}}> Ksh. {obj.price}</span> 
                  </p>
                  <ul>
                    <h3>Users Reviews</h3> <hr />
                    {
                      reviews.filter(review => review.liquor_id === obj.id)
                      .map(review =>  review.length === 0 ? <h4>There are no reviews yet.</h4> : 
                      <li key={review.id}>
                        {review.comment}  &emsp;
                        <button type='click' id={review.id} onClick={e => handleDelete(e)} style={{color:"black", background:"red"}}>
                          X
                        </button>
                      </li>
                      )
                    }
                  </ul> <br /> <br />
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

                <Popup 
                  trigger={<button className='popup'> <i className="fa-sharp fa-solid fa-feather-pointed"></i>
                  </button>} 
                  position="left bottom"
                  >  <br />
                  <form onSubmit={e => handleSubmit(e, obj.id)} >
                    <label> Add your name: <br /><br />
                      <input required type='text' name="username" onChange={e => handleChange(e)}/>
                    </label> <br /> <br />
                    <label for="reviews"> Leave a review(s) <br /> <br />
                      <textarea 
                        name="comment"
                        required
                        minLength="3"
                        onChange={e => handleChange(e)} 
                        placeholder='Share your thoughts on this liquor...' 
                        style={{height: '100px', width: "200px"}}
                      >
                      </textarea>
                    </label>  <br /> <br />
                    <input type='submit' className='click' value='add' />
                  </form> <br /> <br />
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
import React, { useState } from 'react'

function AddReview( {setReviews, reviewsApi} ) {

    const [form, setForm] = useState({
        rating: null,
        comment: "",
        })

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value})

    const handleSubmit = e => {

        e.preventDefault()

        const updatedForm = {
          rating: form.rating,
          comment: form.comment,
        }

        fetch(reviewsApi, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(updatedForm)
          })
          .then(res => res.json()).then(data => setReviews(data))
          .catch(console.log)

        setForm({
            rating: null,
            comment: "",
        })
    }
      
  return (
    <div>
        <p className='first'>New Reviews</p> <br />
        <form>
            <legend> Review </legend>
            <textarea placeholder='Share our thoughts on this product...' name='comment' required></textarea> <br /> <br />
            <label style={{color:'pink'}}> On a scale of 1-5, how do you rate this product? &nbsp;
                <input 
                    type="number" 
                    name='rating' 
                    max="5" 
                    min='0' 
                    required 
                    onChange={e => handleChange(e)}/>
            </label><br /><br /><br />
            <input 
              type='submit' 
              value='submit' 
              onSubmit={e => handleSubmit(e)}/>
        </form>
    </div>
  )
}

export default AddReview
import React, { useState } from 'react'

function AddReview( {liquors, setReviews, reviewsApi} ) {

    const [form, setForm] = useState({
        rating: null,
        comment: "",
        user_id: null,
        liquor_id: null
    })

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value})

    const handlSubmit = e => {

        e.preventDefault()

        const updatedForm = {
          rating: form.rating,
          comment: form.text,
          user_id: 1000*Math.random(),
          liquor_id: liquors.filter(liquor => liquor.title.toLowerCase() === form.liquorname.toLowerCase() )[0].id
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
            user_id: null,
            liquor_id: null
        })
    }
      
  return (
    <div>
        <p className='first'>New Reviews</p>
        <form>
            <legend> Review </legend>
            <label style={{color:'pink'}}> Exact Beverage name as indicated? &nbsp;
                <input 
                    type="text" 
                    name='liquorname' 
                    required
                    handleChange={e => handleChange(e)}/>
            </label><br /><br /><br />
            <textarea placeholder='your thoughts on this liquor...' name='text' required></textarea> <br />
            <label style={{color:'pink'}}> On a scale of 1-5, how do you rate this product? &nbsp;
                <input 
                    type="number" 
                    name='rating' 
                    max="5" 
                    min='0' 
                    required 
                    handleChange={e => handleChange(e)}/>
            </label><br /><br /><br />
            <input type='submit' value='submit' name='submit' handlSubmit= {e => handlSubmit(e)}/>
        </form>
    </div>
  )
}

export default AddReview
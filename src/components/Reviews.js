import React from 'react'

function Reviews( {reviews} ) {
    console.log(reviews);
  return (
    <div className='reviews'>
        <h2 className='second' style={{textAlign: "center"}}>Customer Reviews</h2>
        {reviews.map(review => (
            <div  >
                <ul className="second" >
                    <li key={review.id} className="ul" >{review.comment} </li>
                </ul>
            </div>
        ))}
    </div>
    )
}

export default Reviews
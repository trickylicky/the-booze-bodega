import React from 'react'

function Reviews( {reviews, handleDelete} ) {
  return (
    <div className='reviews'>
        <h2 className='second' style={{textAlign: "center"}}>Customer Reviews</h2>
        {reviews.map(review => (
            <div>
                <ul className="second" >
                    <li key={review.id} className="ul" >
                        {review.comment} &emsp;
                        <button  id={review.id} type='click' onClick={e => handleDelete(e)}> X </button>
                    </li>
                </ul>
            </div>
        ))}
    </div>
    )
}

export default Reviews
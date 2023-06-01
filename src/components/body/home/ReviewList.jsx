import { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard.jsx';

import { fetchReviews } from '../../../api/reviews.js'

function ReviewList () {

    const [ reviewList, setReviewList ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect( () => {
        fetchReviews().then( reviews => {
            setReviewList(reviews)
            setIsLoading(false)
        }) 
    }, [])

    if(isLoading){
        return <p>Loading...</p>
    }
    return (
        <section>
            <h3>Reviews</h3>
            <section>
                { reviewList.map( review => {
                    return (
                        <ReviewCard key={review.review_id} review={review}/>
                    )
                })}
            </section>
        </section>
    )
}

export default ReviewList;
import { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard.jsx';
import Loader from '../Loader.jsx';

import { fetchReviews } from '../../../api/reviews.js'

function ReviewList ( { sortParameters }) {

    const [ reviewList, setReviewList ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect( () => {
        fetchReviews(sortParameters).then( reviews => {
            setReviewList(reviews)
            setIsLoading(false)
        }) 
    }, [sortParameters])

    if(isLoading){
        return <Loader/>
    }
    return (
        <section id="reviewsList">
                { reviewList.map( review => {
                    return <ReviewCard key={review.review_id} review={review}/>
                })}
        </section>
    )
}

export default ReviewList;
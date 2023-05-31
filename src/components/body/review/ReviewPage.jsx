import Review from './Review.jsx';
import LikeBar from './LikeBar.jsx';
import Comments from './comment/Comments.jsx'

import { fetchReviewsById } from '../../../api/reviews.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ReviewPage () {

    const [ review, setReview ] = useState( [] )
    const [ isLoading, setIsLoading ] = useState( [] )
    const { review_id } = useParams();

    useEffect( () => {
        fetchReviewsById(review_id).
        then( review => {
            setReview(review)
            setIsLoading(false)
        })
    }, [])

    if( isLoading ) {
        return (
            <section>
                <p>Loading Review Page...</p>
            </section>
        )
    }

    return (
        <section>
            <h2>""Review Page""</h2>
            <Review review={review}/>
            <LikeBar votes={review.votes}/>
            <Comments review_id={review.review_id}/>
        </section>
    )
}

export default ReviewPage;
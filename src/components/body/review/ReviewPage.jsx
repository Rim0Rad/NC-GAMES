import Review from './Review.jsx';
import LikeBar from './LikeBar.jsx';
import Comments from './comment/Comments.jsx'
import Loader from '../Loader.jsx';

import { fetchReviewsById } from '../../../api/reviews.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ReviewPage ( { logedIn } ) {

    const [ review, setReview ] = useState( [] )
    const [ isLoading, setIsLoading ] = useState( [] )
    const { review_id } = useParams();

    useEffect( () => {
        fetchReviewsById( review_id ).
        then( review => {
            setReview( review )
            setIsLoading( false )
        })
    }, [])

    if( isLoading ) {
        return (
            <section>
                <Loader/>
            </section>
        )
    }
    if(review){
        return (
            <section id="reviewPage">
                <Review review={review}/>
                <LikeBar review={review} logedIn={logedIn}/>
                <Comments review_id={review.review_id} logedIn={logedIn}/>
            </section>
        )
    }else{
        return (
            <section>
                <h2>Sorry, review could not be foud... :(</h2>
            </section>
        )
    }
    
}

export default ReviewPage;
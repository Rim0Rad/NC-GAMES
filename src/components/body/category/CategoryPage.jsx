import { useState, useEffect } from 'react';
import { fetchReviews } from '../../../api/reviews';
import ReviewCard from '../home/ReviewCard';

function CategoryPage ( {category} ) {

    const [ reviewList, setReviewList ] = useState( [] )

    useEffect( () => {
        fetchReviews(category.slug)
        .then( reviews => {
            setReviewList(reviews)
        })
    }, [])

    return (
        <section>
            <h3>{category.slug}</h3>
            <p>{category.description}</p>
            <section>
                {reviewList.map( review => {
                    return <ReviewCard key={review.review_id} review={review}/>
                })}
            </section>
        </section>
    )
}

export default CategoryPage;
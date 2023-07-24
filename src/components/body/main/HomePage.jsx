import { useState, useEffect } from 'react';
import { fetchReviews } from '../../../api/reviews.js'
import Loader from '../Loader.jsx'

function HomePage () {

    const [ reviewList, setReviewList ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true)
    useEffect( () => {
        fetchReviews().then( reviews => {
            setReviewList(reviews)
            setIsLoading(false)
        }) 
    }, [])


    return  isLoading? 
    ( <Loader/>)
    :
    (
        <section id="homePage">
            <h1 id="welcomeMessage">Boardgame Reviews</h1>
            { reviewList.map( (review, index) => {
                return <img key={index} src={review.review_img_url} className='backgroundImg'/>
            })}
        </section>
    )
} 

export default HomePage;
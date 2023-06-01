import axios from 'axios';

export const fetchReviews = (category) => {

    let url = 'https://nc-games-x7ut.onrender.com/api/reviews'
    if(category){
        url += `?category=${category}`
    }
    return axios.get(url).
    then( response => response.data.reviews)
}

export const fetchReviewsById = (review_id) => {

    return axios.get(`https://nc-games-x7ut.onrender.com/api/reviews/${review_id}`).
    then( response => response.data.review)
}


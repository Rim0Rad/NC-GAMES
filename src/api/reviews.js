
import instance from "./axiosInstance.js"

export const fetchReviews = (category ="") => {
    let url = `/reviews?category=${category}`
    return instance.get(url).
    then( response => response.data.reviews)
}

export const fetchReviewsById = (review_id) => {

    return instance.get(`/reviews/${review_id}`).
    then( response => response.data.review)
}


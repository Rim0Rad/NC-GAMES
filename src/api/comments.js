import axios from 'axios';

export const fetchCommentsByReview = (review_id) => {
    console.log("id", review_id)
    return axios.get(`https://nc-games-x7ut.onrender.com/api/reviews/${review_id}/comments`).
    then( result => result.data.comments)
}
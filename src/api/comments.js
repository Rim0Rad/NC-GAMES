import axios from 'axios';

export const fetchCommentsByReview = (review_id) => {
    return axios.get(`https://nc-games-x7ut.onrender.com/api/reviews/${review_id}/comments`).
    then( result => result.data.comments)
}

export const postNewComment = (newComment, review_id) => {
    return axios.post(`https://nc-games-x7ut.onrender.com/api/reviews/${review_id}/comments`, newComment)
}
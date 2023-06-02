import instance from "./axiosInstance.js"

export const fetchCommentsByReview = (review_id) => {
    return instance.get(`/reviews/${review_id}/comments`).
    then( result => result.data.comments)
}

export const postNewComment = (newComment, review_id) => {
    return instance.post(`/reviews/${review_id}/comments`, newComment)
}

export const deleteComment = (comment_id) => {
    return instance.delete(`/comments/${comment_id}`)
}
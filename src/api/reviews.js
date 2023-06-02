
import instance from "./axiosInstance.js"

export const fetchReviews = (query = "", category = "") => {

    const queryStr = parseQuery(query)
    let url = `/reviews?${queryStr}&category=${category}`

    return instance.get(url)
    .then( response => response.data.reviews )
    .then( reviews => {

        //comment_count is not part of db, therefore is sorted on clinet side
        if(query.sort_by === 'comment_count'){
            reviews.sort( (a, b) => {
                if(query.order === 'DESC')  return b.comment_count -  a.comment_count;
                else return a.comment_count - b.comment_count;
            })
            return reviews
        }
        return reviews
    })
    
}

export const fetchReviewsById = (review_id) => {
    return instance.get(`/reviews/${review_id}`)
    .then( response => response.data.review)
    .catch( err => {
        console.log(err)
        return false
    })
}


function parseQuery (query) {
    let str = ""
    if(query){
        if(query.sort_by !== "comment_count"){
            str += `sort_by=${query.sort_by}`
        }
        if(str !== ''){
            str += '&'
        }
        str += `order=${query.order}`;
        return str;
    }
}   

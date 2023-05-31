import axios from 'axios';

export const fetchReviews = () => {

    return axios.get('https://nc-games-x7ut.onrender.com/api/reviews').
    then( response => {
        return response.data.reviews
    } )

}


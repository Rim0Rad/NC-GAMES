import axios from 'axios'

export const fetchCategories = () => {

    return axios.get(`https://nc-games-x7ut.onrender.com/api/categories`)
    .then( result => result.data.categories)
} 
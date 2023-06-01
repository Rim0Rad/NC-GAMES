import axios from 'axios';

export const fetchUsers = () => {
    return axios.get(`https://nc-games-x7ut.onrender.com/api/users`)
    .then( result => result.data.users)
}
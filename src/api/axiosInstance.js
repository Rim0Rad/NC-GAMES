import axios from "axios"

const instance = axios.create({
    baseURL: 'https://nc-games-x7ut.onrender.com/api',
    timeout: 1000
})

export default instance;
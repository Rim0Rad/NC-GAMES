import instance from "./axiosInstance.js"

export const fetchUsers = () => {
    return instance.get(`/users`)
    .then( result => result.data.users)
}
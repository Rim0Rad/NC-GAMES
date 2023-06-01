import instance from "./axiosInstance.js"

export const fetchCategories = () => {

    return instance.get(`/categories`)
    .then( result => result.data.categories)
} 
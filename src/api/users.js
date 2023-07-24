import instance from "./axiosInstance.js"

export const fetchUsers = ( querry, value ) => {

    const q = {[querry]: [value]};

    if(querry === undefined){
        return instance.get(`/users`)
        .then( result => {
            return result.data.users
        })
    }else{
        return instance.get(`/users`, {[querry]: value})
        .then( result => {
            return result.data.users;
        })
    }
}
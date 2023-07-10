import instance from "./axiosInstance.js"

export const fetchUsers = ( querry, value ) => {

    const q = {[querry]: [value]};
    console.log(q)

    if(querry === undefined){
        return instance.get(`/users`)
        .then( result => result.data.users)
    }else{
        instance.get(`/users`, {[querry]: value})
        .then( result => {
            console.log(result.data)
        })
    }
}
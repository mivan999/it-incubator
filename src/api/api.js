import axios from "axios";
import {setCurrentPage} from "../redux/users-reducer";

const instance=axios.create({
    withCredentials:true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY":"061180f8-35f1-47f3-a76b-f5b0c6efcb15"
    },
})

    export const usersAPI={
        getUsers(currentPage=1,pageSize=10){
            return instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response=>{
                    return response.data
                });
        },
        follow(userId){
            return instance.post(`follow/${userId}`)
                .then(response=>{
                    return response.data
                });
        },
        unfollow(userId){
            return instance.delete(`follow/${userId}`)
                .then(response=>{
                    return response.data
                });
        }

    }
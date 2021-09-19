import axios from "axios";
import { getLocalStorage } from "@src/util";

export const PUT = (url, data={}, headers={}) => {
    return new Promise((resolve,reject)=>{
        axios.put(url,data,{
            headers:{
                Authorization:getLocalStorage("token"),
                ...headers
            }
        })
        .then(resolve)
        .catch(reject)
    });
}

export const POST = (url, data = {}, headers = {}) => {
    return new Promise((resolve, reject) => {
        axios.post(url, data, {
            headers: {
                Authorization: getLocalStorage("token"),
                ...headers
            }
        })
            .then(resolve)
            .catch(reject)
    });
}


export const GET_Auth = (url, headers={}) => {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            headers: {
                Authorization: getLocalStorage("token"),
                ...headers
            }
        })
            .then(resolve)
            .catch(reject)
    });
}
export const GET = (url, headers={}) => {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            headers: {
                ...headers
            }
        })
            .then(resolve)
            .catch(reject)
    });
}
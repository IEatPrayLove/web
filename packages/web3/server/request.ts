import axios from "axios";
import {apiMethods} from "../utils"

interface apiOptions {
    method: apiMethods,
    url: string,
    data?: any,
    headers?: any,
    params?: any
}

const defaultOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
}

function $api(options: apiOptions) {
    const url = location.protocol + "//" + location.host + "/web3" + options.url
    const configOptions: apiOptions = {
        ...defaultOptions,
        ...options,
        url
    }
    return new Promise((resolve, reject) => {
        axios({
            ...configOptions
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}

export default $api;
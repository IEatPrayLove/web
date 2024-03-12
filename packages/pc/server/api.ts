import $api from "./request";
import {apiMethods} from "../utils";

/*
* 获取用户信息
* */
async function getUserInfo() {
    const res = await $api({
        url: "/api/getUserInfo",
        method: apiMethods.GET,
        params: {
            phone: '13175540123'
        }
    })
    return res
}

export {
    getUserInfo
}
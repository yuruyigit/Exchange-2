import axios from "axios";
import { lStore } from "../TollClass/func";
import ENV from "./ENV";
const baseApi = ENV.getENV().httpApi;
const baseApi1 = ENV.getENV().httpApi1;
const Post = function(options) {
    // console.log(Store.commit("SET_USERINFO", {}));
    let params = options.data ? options.data.params : "";
    return new Promise((resolve, reject) => {
        axios({
            headers: {
                "Content-Type": "application/json"
            },
            url: options.url,
            method: "post",
            baseURL: baseApi,
            timeout: 5000,
            data: params
        })
            .then(response => {
                if (response.status === 200) {
                    let res = response.data;
                    resolve(res);
                    console.log(res, options.name);
                } else {
                    reject(response.data);
                }
            })
            .catch(err => {
                console.log(err);
                reject(err.response);
            });
    });
};
const Get = function(options) {
    // console.log(Store.commit("SET_USERINFO", {}));
    let params = options.data ? options.data : "";
    return new Promise((resolve, reject) => {
        axios({
            url: options.url,
            method: "get",
            baseURL: options.pro ? baseApi1 : baseApi,
            timeout: 5000,
            params: params
        })
            .then(response => {
                if (response.status === 200) {
                    let res = response.data;
                    resolve(res);
                    console.log(res, options.name);
                } else {
                    reject(response);
                }
            })
            .catch(err => {
                console.log(err);
                reject(err.response);
            });
    });
};

export { Post, Get };

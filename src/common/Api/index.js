import axios from "axios";
import { lStore } from "../TollClass/func";
import ENV from "./ENV";
import { Toast } from "vant";
const baseApi = ENV.getENV().httpApi;
const uploadAPI = ENV.getENV().uploadApi;

//公共函数
const comFunc = function(options) {
    let params = options.data ? options.data : "",
        headers = {
            "Content-Type": "application/json",
            Authorization: "Bearer " + (lStore.get("token") || "")
        },
        axiosData = {
            headers: headers,
            url: options.url,
            method: options.method,
            baseURL: baseApi,
            timeout: 5000
        };
    if (options.baseApi == "upload") {
        axiosData.baseURL = uploadAPI;
    }
    if (options.method == "get") {
        axiosData.params = params;
    } else {
        axiosData.data = params;
    }
    return axiosData;
};

const http = function(options) {
    return new Promise((resolve, reject) => {
        axios(comFunc(options))
            .then(response => {
                if (response.status === 200) {
                    let res = response.data;
                    resolve(res);
                    console.log(res, options.url);
                } else {
                    reject(response);
                }
            })
            .catch(err => {
                let errData = err.response;
                // if (errData.data) {
                //     Toast(errData.data.message);
                // }
                console.log("ERROR:", errData, options.url);
                reject(errData);
            });
    });
};

const Post = function(options) {
    let params = options.data ? options.data : "",
        headers = {
            "Content-Type": "application/json",
            Authorization: "Bearer " + (lStore.get("token") || "")
        };
    return new Promise((resolve, reject) => {
        axios({
            headers: headers,
            url: options.url,
            method: "post",
            baseURL: options.pro ? baseApi : httpApiTest,
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
    let params = options.data ? options.data : "",
        headers = {
            "Content-Type": "application/json",
            Authorization: "Bearer " + (lStore.get("token") || "")
        };
    return new Promise((resolve, reject) => {
        axios({
            headers: headers,
            url: options.url,
            method: "get",
            baseURL: options.pro ? baseApi : httpApiTest,
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

export { Post, Get, http };

//axios基础的封装
import axios from 'axios';

//创建axios实例
const service = axios.create({
    baseURL: 'https://pcapi-xiaotuxian-front-devtest.itheima.net', //基础url
    timeout: 5000 //请求超时时间
});

//请求拦截器
service.interceptors.request.use(
    config => {
        //在发送请求之前做些什么
        return config;
    },
    error => {
        //请求错误时做些什么
        console.log(error);
        return Promise.reject(error);
    }
);

//响应拦截器
service.interceptors.response.use(
    response => {
        //对响应数据做些什么
        return response.data;
    },
    error => {
        //响应错误时做些什么
        console.log(error);
        return Promise.reject(error);
    }
);

export default service;

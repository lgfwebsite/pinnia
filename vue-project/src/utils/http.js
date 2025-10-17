//axios基础的封装
import axios from 'axios';
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useUserstore } from '@/stores/user'
import router from '@/router'
//创建axios实例
const service = axios.create({
    baseURL: 'https://pcapi-xiaotuxian-front-devtest.itheima.net', //基础url
    timeout: 50000 //请求超时时间
});

//请求拦截器
service.interceptors.request.use(
    config => {
        const userStore = useUserstore();
        const token = userStore.token;
        if (token) {
             config.headers.Authorization= `Bearer ${token}`
        }
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
        ElMessage({
            message: error.response.data.message,
            type: 'error',
        })
        //清除本地数据和token
        //跳转登录页面
        if (error.response.status === 401) {
          userStore.clearUserInfo();
          router.push('/login');

        }
        return Promise.reject(error);
    }
);

export default service;

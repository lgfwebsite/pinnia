//管理用户数据相关
import { defineStore } from 'pinia'
//模块名，逻辑代码
import { loginApi } from '@/apis/user'
import { ref } from 'vue'
export const useUserstore=defineStore('user',()=> {
  //1.定义用户管理数据
  const userInfo=ref({})
  //2.定义获取接口数据的action函数
  const getUserInfo=async({account, password})=>{
    const res=await loginApi({account, password})
    userInfo.value=res.data

  }
  //3.以对象的格式把action和state return出去
  return {
    userInfo,
    getUserInfo
  }
})

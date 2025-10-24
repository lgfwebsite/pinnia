//管理用户数据相关
//模块名，逻辑代码
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginApi } from '@/apis/user'

export const useUserstore=defineStore('user',()=> {
  //1.定义用户管理数据
  const userInfo=ref({})
  //2.定义获取接口数据的action函数
  const getUserInfo=async({account, password})=>{
    const res=await loginApi({account, password})
    userInfo.value=res.result
    console.log('我拿到了数据')

  }

  //清除用户信息
  const clearUserInfo=()=>{
    userInfo.value={}
  }
  //3.以对象的格式把action和state return出去
  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }
},
// 配置持久化插件
{
  persist: true
}
)

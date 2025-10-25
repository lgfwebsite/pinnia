//管理用户数据相关
//模块名，逻辑代码
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginApi } from '@/apis/user'
import {useCartStore} from './cartstore'
import {mergeCartApi,getNewCartApi} from '@/apis/cart'
export const useUserstore=defineStore('user',()=> {
  const cartStore=useCartStore()
  //1.定义用户管理数据
  const userInfo=ref({})
  //2.定义获取接口数据的action函数
  const getUserInfo=async({account, password})=>{
    const res=await loginApi({account, password})
    userInfo.value=res.result
    //合并购物车数据
    await mergeCartApi(cartStore.cartList.map(item=>{
      return {
        skuId:item.skuId,
        count:item.count,
        selected:item.selected
      }
  }))
  //获取新的购物车数据
   const ress = await getNewCartApi() // 加 await，否则 res 是 Promise
    cartStore.cartList.value = ress.result
    console.log('我拿到了数据', cartStore.cartList.value)

  }

  //清除用户信息
  const clearUserInfo=()=>{
    userInfo.value={}
    //清除购物车数据
    cartStore.clearCart()

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

import httpinstance from "@/utils/http.js";
export const loginApi=({account,password})=>{
   return httpinstance({
    url:'/login',
    method:'post',
    data:{
      account,
      password
    }
   })
}

//获取用户信息
// 获取喜欢列表API
export const getLikeListAPI = ({ limit = 4 }) => {
    return httpinstance({
        url: '/goods/relevant',
        params: {
            limit
        }
    })
}

import httpinstance from "@/utils/http.js";
export const loginApi=(account,password)=>{
   return httpinstance({
    url:'/login',
    method:'post',
    data:{
      account,
      password
    }
   })
}

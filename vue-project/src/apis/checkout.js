import request from '@/utils/http' //引入封装好的axios
export const checkoutaApi=()=>{
  return request({
    url:'/member/order/pre',
  }
  )
}

import request from '@/utils/http' //引入封装好的axios
export const checkoutaApi=()=>{
  return request({
    url:'/member/order/pre',
    method:'get'
  }
  )
}
//创建订单
export const createOrderApi=(data)=>{
  return request({
    url:'/member/order',
    method:'post',
    data
  })


}


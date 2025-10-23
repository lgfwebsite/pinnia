import request from '@/utils/http'

export const insertCartApi=({skuId,count})=>{
  return request({
    url:'/member/cart',
    method:'post',
    data:{
      skuId,
      count
    }
  })
}

//获取购物车列表最新
export const getNewCartApi=()=>{
  return request({
    url:'/member/cart'
  })
}

//封装购物车模块
import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useCartStore = defineStore('cart', ()=>{
  // 1.定义state
  const cartList = ref([])
  // 2.定义action
  const addCart=(goods)=>{
    console.log('addCart')
    //添加购物车操作
    //通过skuid判断商品是否在购物车已经存在
    const item = cartList.value.find(item => goods.skuId === item.skuId)
    //找到了
  // 1.数量+1
  if(item){
    item.count++
  }
  //没找到
  else{
    cartList.value.push({
      goods
    })
  }
  }

  //删除购物车
  const dlCart=(skuId)=>{
    console.log('skuId')
    //找到删除项的索引
    //使用数组的过滤方法
    const index=cartList.value.findIndex(item => skuId === item.skuId)
    //删除
    cartList.value.splice(index,1)
  }
  // 3.定义getters
   return {
    cartList,
    addCart,
    dlCart
}
},{
  persist: true
}
)

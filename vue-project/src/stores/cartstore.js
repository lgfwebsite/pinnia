//封装购物车模块
import { computed, ref } from 'vue'
import {useUserstore} from './user'
import { defineStore } from 'pinia'
import { insertCartApi, getNewCartApi, deleteCartApi } from '@/apis/cart'

export const useCartStore = defineStore('cart', ()=>{
  // const userStore =computed(()=>{
  //   return useUserstore()
  // })
  // console.log(userStore,'111')
  const isLogin = computed(()=>{
    const userStore = useUserstore()
     return userStore.userInfo?.token

  })
  // 1.定义state
  const cartList = ref([])
  // 2.定义action
  const addCart= async(goods)=>{
    const {skuId, count} = goods
    if(isLogin.value){
      await insertCartApi({skuId, count})
      //获取最新购物车列表
      cartList.value = await getNewCartApi()

    }
    else{
       console.log('addCartnoLogin')
    //添加购物车操作
    //通过skuid判断商品是否在购物车已经存在
    const item = cartList.value.find(item => goods.skuId === item.goods.skuId)
    //找到了
  // 1.数量+1
  if(item){
    item.goods.count++
  }
  //没找到
  else{
    cartList.value.push({
      goods
    })
  }
  }
    }


  //删除购物车
  const dlCart=async(skuId)=>{
    if(isLogin.value){
     await deleteCartApi(skuId)
      //获取最新购物车列表
      cartList.value = await getNewCartApi()
      console.log('dlCart')

    }
    else{
    console.log('skuId')
    //找到删除项的索引
    //使用数组的过滤方法
    const index=cartList.value.findIndex(item => skuId === item.skuId)
    //删除
    cartList.value.splice(index,1)
    console.log('dlCartno')
    }

  }

  // 总数量（修复版）
const allCount = computed(() => {
   console.log('allCount',cartList.value)
  return cartList?.value.result.reduce((a, c) => {
    return a + c.count; // 必须添加 return
  }, 0);
});

// 总价（修复版）
const allPrice = computed(() => {

  return cartList?.value.result.reduce((a, c) => {
    return a + c.price * c.count; // 必须添加 return
  }, 0);
});
//选中 单选功能
const selectCheck = (skuId, selected) => {
  const item=cartList.value.result.find(item => skuId === item.goods.skuId )
  item.selected=selected

}
//是否全选
const isAll= computed(()=>{
  return cartList.value.result.every(item=>item.selected)
})

//全选功能
const AllCheck = (selected) => {
  cartList.value.cartList.forEach(item=>{
    item.selected=selected
  })
}

//已选择数量
const selectedCount = computed(() => {
  return cartList.value.result.filter(item=>item.selected).reduce((a,c)=>{
    return a+c.count
  },0)
})

//已选择商品合计
const selectedPrice = computed(() =>
    cartList.value.result.filter(item=>item.selected).reduce((a,c)=>{
    return a+c.price*c.count
    },0)
)
//显示写法去掉{}和return

  // 3.定义getters
   return {
    cartList,
    allCount,
    allPrice,
    isAll,
    selectedPrice,
    selectedCount,
    addCart,
    dlCart,
    selectCheck,
    AllCheck

}
},{
  persist: true
}
)

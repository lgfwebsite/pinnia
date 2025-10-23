//封装购物车模块
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
export const useCartStore = defineStore('cart', ()=>{
  // 1.定义state
  const cartList = ref([])
  // 2.定义action
  const addCart=(goods)=>{
    console.log('addCart')
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

  //删除购物车
  const dlCart=(skuId)=>{
    console.log('skuId')
    //找到删除项的索引
    //使用数组的过滤方法
    const index=cartList.value.findIndex(item => skuId === item.skuId)
    //删除
    cartList.value.splice(index,1)
  }

  // 总数量（修复版）
const allCount = computed(() => {
  return cartList.value.reduce((a, c) => {
    return a + c.goods.count; // 必须添加 return
  }, 0);
});

// 总价（修复版）
const allPrice = computed(() => {
  return cartList.value.reduce((a, c) => {
    return a + c.goods.price * c.goods.count; // 必须添加 return
  }, 0);
});
//选中 单选功能
const selectCheck = (skuId, selected) => {
  const item=cartList.value.find(item => skuId === item.goods.skuId )
  item.selected=selected

}
//是否全选
const isAll= computed(()=>{
  return cartList.value.every(item=>item.selected)
})

//全选功能
const AllCheck = (selected) => {
  cartList.value.forEach(item=>{
    item.selected=selected
  })
}

//已选择数量
const selectedCount = computed(() => {
  return cartList.value.filter(item=>item.selected).reduce((a,c)=>{
    return a+c.goods.count
  },0)
})

//已选择商品合计
const selectedPrice = computed(() => {
   return cartList.value.filter(item=>item.selected).reduce((a,c)=>{
    return a+c.goods.price*c.goods.count
    },0)
})

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

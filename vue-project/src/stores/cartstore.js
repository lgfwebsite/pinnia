//封装购物车模块
import { computed, ref } from 'vue'
import { useUserstore } from './user'
import { defineStore } from 'pinia'
import { insertCartApi, getNewCartApi, deleteCartApi } from '@/apis/cart'

export const useCartStore = defineStore('cart', () => {
  const isLogin = computed(() => {
    const userStore = useUserstore()
    return userStore.userInfo?.token
  })

  // 1. 初始化确保是数组，避免非数组类型
  const cartList = ref([])

  // 2. 定义action
  const addCart = async (goods) => {
    const { skuId, count } = goods
    if (isLogin.value) {
      await insertCartApi({ skuId, count })
      // 接口返回容错：确保取到数组
      const res = await getNewCartApi()
      cartList.value = res.result
    } else {
      console.log('已经存在')
      const item = cartList.value.find(item => goods.skuId === item.skuId)
      if (item) {
        item.count++
      } else {
        console.log('goods入库', goods)
        cartList.value.push(goods)
      }
    }
  }

  // 删除购物车（修复：getNewCartApi 加 await + 结果容错）
  const dlCart = async (skuId) => {
    if (isLogin.value) {
      await deleteCartApi([skuId])
      const res = await getNewCartApi() // 加 await，否则 res 是 Promise
      cartList.value = Array.isArray(res?.result) ? res.result : []
      console.log('dlCart')
    } else {
      console.log('skuId')
      // 修复：找索引时匹配 item.goods.skuId（和添加逻辑一致）
      const index = cartList.value.findIndex(item => skuId === item.skuId)
      if (index !== -1) { // 容错：避免 index 为 -1 时 splice 报错
        cartList.value.splice(index, 1)
      }
      console.log('dlCartno')
    }
  }

  // 总数量
 const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))

  // 总价（同理修复）
  const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))


//清除购物车
  const clearCart=()=>{
    cartList.value=[]

  }
      // 单选功能
    const selectCheck = (skuId, selected) => {
        // 通过skuId找到要修改的那一项 然后把它的selected修改为传过来的selected
        const item = cartList.value.find((item) => item.skuId == skuId)
        item.selected = selected
    }

  // 是否全选（容错：空数组时返回 false）
  const isAll = computed(() => {
    if (!Array.isArray(cartList.value) || cartList.value.length === 0) return false
    return cartList.value.every(item => item.selected)
  })

  // 全选功能（修复：遍历 cartList.value 而非 cartList.value.cartList）
  const AllCheck = (selected) => {
    if (Array.isArray(cartList.value)) {
      cartList.value.forEach(item => {
        item.selected = selected
      })
    }
  }


   // 3. 已选择数量
    const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
    // 4. 已选择商品价格合计
  const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))


  return {
    cartList,
    allCount,
    allPrice,
    isAll,
    selectedPrice,
    selectedCount,
    clearCart,
    addCart,
    dlCart,
    selectCheck,
    AllCheck
  }
}, {
  persist: true
})

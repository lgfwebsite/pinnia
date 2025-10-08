import httpinstance from "@/utils/http.js";

export function getCategoryList(id) {
  return httpinstance({
    url: "/category",
     params: {
            id
        }
  })
}


//获取二级分类列表数据
export function getCateList(id) {
  return httpinstance({
    url: "/category/sub/filter",
    params: {
      id
    }
  })
}


//获取二级分类商品列表数据
export function getSubCategoryApi(data){
   return httpinstance({
    url:"/category/goods/temporary",
    method:'post',
    data
   })
}

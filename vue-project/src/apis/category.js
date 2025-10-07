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


//获取二级分类导航数据
export function getSubCategoryNav(){
   return httpinstance({
    url:"category/sub/nav"
   })
}

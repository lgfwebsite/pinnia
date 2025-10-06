import httpinstance from "@/utils/http.js";
console.log(httpinstance);
export function getHomeList(params = {}) {
    // 默认为1 商品为2
    const { distributionSite = '1' } = params
    return httpinstance({
        url: '/home/banner',
        params: {
            distributionSite
        }
    })
}



//获取新鲜好物
export function getNewGoods() {
    return httpinstance({
        url: "/home/new",
        method: "get"
    });
}

//人气推荐
export function getNewHots(){
  return httpinstance({
    url:"/home/hot",
    method:"get"
  })
}

//商品列表
export function getHomeGoods(){
  return httpinstance({
    url:"/home/goods",
    method:"get"
  })
}

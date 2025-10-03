import httpinstance from "@/utils/http.js";
console.log(httpinstance);
function getHomeList() {
    return httpinstance({
        url: "/home/banner",
        method: "get"
    });
}
export default getHomeList;

//获取新鲜好物
export function getNewGoods() {
    return httpinstance({
        url: "/home/new",
        method: "get"
    });
}

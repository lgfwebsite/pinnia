import httpinstance from "@/utils/http.js";
console.log(httpinstance);
function getHomeList() {
    return httpinstance({
        url: "/home/banner",
        method: "get"
    });
}
export default getHomeList;

import httpinstance from "@/utils/http.js";
console.log(httpinstance);
function getcategoryList() {
    return httpinstance({
        url: "/home/category/head",
        method: "get"
    });
}
export default getcategoryList;

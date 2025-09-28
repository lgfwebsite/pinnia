import service from "@/utils/http";

export function getTestData() {
    return service({
        url: 'home/category/head', //请求路径
        method: 'get' //请求方法
    });
}

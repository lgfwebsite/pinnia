import request from '@/utils/http'
export const getDetailApi = (id) => {
    return request({
        url: '/goods',
        params: {
            id
        }
    })
}


// id 商品id
// type 1 日热门 2 周热门
// limit 返回条数
export const getHotGoodsApi = ({id,type,limit}) => {
    return request({
        url: '/goods/hot',
        params: {
            id,
            type,
            limit
        }
    })
}





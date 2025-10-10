<script setup>
import HomePanel from './homepannel.vue'
import { onMounted, ref } from 'vue'
import {getNewGoods} from '@/apis/home.js'
const newList = ref([])
const fetchNewGoods = async () => {
    const res = await getNewGoods()
    newList.value = res.result
    console.log(newList.value);
}
onMounted(() => {
    fetchNewGoods()
})

</script>

<template>
    <HomePanel title="新鲜好物" subtitle="新鲜出炉 品质靠谱">
        <ul class="goods-list">
            <li v-for="value in newList" :key="value.id">
                <RouterLink :to="`/detail/${value.id}`">
                    <img :src="value.picture" alt="" />
                    <p> {{ value.name}}</p>
                    <p class="price">&yen;{{ value.price }}</p>
                </RouterLink>
            </li>
        </ul>
    </HomePanel>
</template>


<style scoped lang='scss'>
.goods-list {
    display: flex;
    justify-content: space-between;
    height: 406px;

    li {
        width: 306px;
        height: 406px;

        background: #f0f9f4;
        transition: all .5s;

        &:hover {
            transform: translate3d(0, -3px, 0);
            box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
        }

        img {
            width: 306px;
            height: 306px;
        }

        p {
            font-size: 22px;
            padding-top: 12px;
            text-align: center;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }

        .price {
            color: $priceColor;
        }
    }
}
</style>

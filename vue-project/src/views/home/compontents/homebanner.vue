<template>
    <div class="home-banner">
        <el-carousel height="500px">
            <el-carousel-item v-for="item in bannerList " :key="item.id" >
                <img alt="" :src="item.imgUrl" />
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import getbanner from '@/apis/home.js';
const bannerList = ref([]);
const getbannerlist = async () => {
    const res = await getbanner();
    bannerList.value = res.result;
    console.log(res);
}
onMounted(() => {
    getbannerlist();
});
</script>

<style scoped lang='scss'>
.home-banner {
    width: 1240px;
    height: 500px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 98;

    img {
        width: 100%;
        height: 500px;
    }
}
</style>

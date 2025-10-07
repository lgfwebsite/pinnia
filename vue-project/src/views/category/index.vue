<script setup>
import { onBeforeUpdate, onMounted, onUpdated, watchEffect } from 'vue';
import {getCategoryList} from '@/apis/category.js';
import { ref } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import {getHomeList} from '@/apis/home.js';
import GoodsItem from '@/views/home/compontents/gooditem.vue';
import {useBanner} from '../category/composables/useBanner';
import {useCategory} from '../category/composables/useCategory';
const {bannerList}= useBanner();
const {catelist} = useCategory();
// const catelist = ref([]);
// const route = useRoute();
// const getcateList = async (id=route.params.id)=>{
//   const res=await getCategoryList(id);
//   catelist.value =res.result
//   console.log(res,1111);
// }
// onMounted(()=>{
//   getcateList()
// })
// watchEffect(()=>{
//   getcateList()
// })

//获取banner
// const bannerList = ref([]);
// const getbannerlist = async () => {
//     console.log('执行', 1111111); // 先看是否打印
//     // 传入参数distributionSite: '2' 来获取分类页的banner 数据
//     const res = await getHomeList({distributionSite:'2'});
//     // 注释掉有问题的打印
//     // console.log(distributionSi
//     bannerList.value = res.result;
//     console.log('执行', 22222222); // 现在看是否打印
//   }
// onMounted(() => {
//     getbannerlist();
// });

//路由变化 分类接口重新发送
// onBeforeRouteUpdate((to) => {
//   // console.log('beforeUpdate');
//   console.log(to,'to');
//   getcateList(to.params.id);
// });
</script>

<template>
    <div class="top-category">
        <div class="container m-top-20">
            <!-- 面包屑 -->
            <div class="bread-container">
                <el-breadcrumb separator=">">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item> {{ catelist.name }}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <!-- 轮播图 -->
              <div class="home-banner">
        <el-carousel height="500px">
            <el-carousel-item v-for="item in bannerList " :key="item.id" >
                <img alt="" :src="item.imgUrl" />
            </el-carousel-item>
        </el-carousel>
    </div>
     <div class="sub-list">
                <h3>全部分类</h3>
                <ul>
                    <li v-for="i in catelist.children" :key="i.id">
                        <!-- 配置路由关系 -->
                        <RouterLink :to="`/category/sub/${i.id}`">
                            <img :src="i.picture" />
                            <p>{{ i.name }}</p>
                        </RouterLink>
                    </li>
                </ul>
            </div>
            <div class="ref-goods" v-for="item in catelist.children" :key="item.id">
                <div class="head">
                    <h3>- {{ item.name }}-</h3>
                </div>
                <div class="body">
                    <GoodsItem v-for="good in item.goods" :good="good" :key="good.id" />
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
.home-banner {
    width: 1240px;
    height: 500px;
    margin: 0 auto;
    z-index: 98;

    img {
        width: 100%;
        height: 500px;
    }
}

.top-category {
    h3 {
        font-size: 28px;
        color: #666;
        font-weight: normal;
        text-align: center;
        line-height: 100px;
    }

    .sub-list {
        margin-top: 20px;
        background-color: #fff;

        ul {
            display: flex;
            padding: 0 32px;
            flex-wrap: wrap;

            li {
                width: 168px;
                height: 160px;


                a {
                    text-align: center;
                    display: block;
                    font-size: 16px;

                    img {
                        width: 100px;
                        height: 100px;
                    }

                    p {
                        line-height: 40px;
                    }

                    &:hover {
                        color: $xtxColor;
                    }
                }
            }
        }
    }

    .ref-goods {
        background-color: #fff;
        margin-top: 20px;
        position: relative;

        .head {
            .xtx-more {
                position: absolute;
                top: 20px;
                right: 20px;
            }

            .tag {
                text-align: center;
                color: #999;
                font-size: 20px;
                position: relative;
                top: -20px;
            }
        }

        .body {
            display: flex;
            justify-content: space-around;
            padding: 0 40px 30px;
        }
    }

    .bread-container {
        padding: 25px 0;
    }
}

.home-banner {
    width: 1240px;
    height: 500px;
    margin: 0 auto;


    img {
        width: 100%;
        height: 500px;
    }
}
</style>

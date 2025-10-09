<script setup>
import {getCateList} from '@/apis/category.js';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import {getSubCategoryApi} from '@/apis/category'
import gooditem from '../home/compontents/gooditem.vue';
const route=useRoute();
const catelist = ref({});
const getcateListApi=async(id=route.params.id)=>{
  const res=await getCateList(id)
  catelist.value =res.result
  console.log(res);
}
onMounted(()=>{
  getcateListApi()
})
//基础列表渲染
const goodlist=ref([])
const resData=ref({categoryId: route.params.id,
    page: 1,
    pageSize: 20,
    sortField: 'publishTime'})
const getGoodlist=async ()=>{
  const res=await getSubCategoryApi(resData.value)
  goodlist.value =res.result.items
  console.log(res)
}
onMounted(()=>{
  getGoodlist()
})
//tab切换回调
//切换更多
const disabled=ref(false)
const tabChange=()=>{
  console.log("tab切换了",resData.value.sortField)
  resData.value.page=1
  getGoodlist()
}
//列表更多加载
const load= async()=>{
  console.log('加载更多数据了')

  //获取下一页数据
  resData.value.page++
  const res= await getSubCategoryApi(resData.value)
  goodlist.value=[...goodlist.value,...res.result.items]

  //加载完毕 停止监听
  if(res.result.items.length===0){
    disabled.value = true
  }
}
</script>

<template>
    <div class="container ">
        <!-- 面包屑 -->
        <div class="bread-container">
            <el-breadcrumb separator=">">
                <el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{path:`/category/${catelist.parentId}`}">{{ catelist.parentName }}</el-breadcrumb-item>
                <el-breadcrumb-item>{{ catelist.name }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="sub-container">
            <el-tabs v-model="resData.sortField" @tab-change="tabChange">
                <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
                <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
                <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
            </el-tabs>
            <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
                <!-- 商品列表-->
               <gooditem v-for="good in goodlist" :key="good.id" :good="good"></gooditem>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.bread-container {
    padding: 25px 0;
    color: #666;
}

.sub-container {
    padding: 20px 10px;
    background-color: #fff;

    .body {
        display: flex;
        flex-wrap: wrap;
        padding: 0 10px;
    }

    .goods-item {
        display: block;
        width: 220px;
        margin-right: 20px;
        padding: 20px 30px;
        text-align: center;

        img {
            width: 160px;
            height: 160px;
        }

        p {
            padding-top: 10px;
        }

        .name {
            font-size: 16px;
        }

        .desc {
            color: #999;
            height: 29px;
        }

        .price {
            color: $priceColor;
            font-size: 20px;
        }
    }

    .pagination-container {
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }


}
</style>

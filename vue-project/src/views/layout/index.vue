<script setup>
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutNav from './components/LayoutNav.vue';
import LayoutFixed from './components/LayoutFixed.vue';
import { onMounted } from 'vue';
// import getcategoryApi from '@/apis/layout.js';
import { useCategoryStore } from '@/stores/category.js';
const categoryStore = useCategoryStore()
//父组件调用一次action，子组件共享数据
onMounted(() => {
    categoryStore.getCategory()
})

</script>
<template>
  <div>
     <LayoutFixed />
    <!-- 我是首页 -->
    <LayoutNav />
    <LayoutHeader />
     <!-- 二级路由 -->
    <router-view></router-view>
    <LayoutFooter />

  </div>
</template>

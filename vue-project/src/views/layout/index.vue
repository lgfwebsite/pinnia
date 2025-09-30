<script setup>
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutNav from './components/LayoutNav.vue';
import LayoutFixed from './components/LayoutFixed.vue';
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

<script setup>
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutNav from './components/LayoutNav.vue';
</script>
<template>
  <div>
    <!-- 我是首页 -->
    <LayoutNav />
    <LayoutHeader />
     <!-- 二级路由 -->
    <router-view></router-view>
    <LayoutFooter />

  </div>
</template>

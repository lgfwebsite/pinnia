<script setup></script>

<template>
  <h1>You did it!</h1>
  <!-- roter-view 一级路由出口-->
  <router-view></router-view>
  <div class="priceColor">
    <p>测试scss变量</p>
  </div>
</template>

<style scoped lang="scss">
// 使用scss变量
// 变量定义在src/styles/var.scss中
// 通过vite.config.js中配置的additionalData全局引入
// 变量名$priceColor
.priceColor {
  color: $priceColor;
}
</style>

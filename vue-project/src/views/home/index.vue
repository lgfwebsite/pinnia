<template>
  <!-- <div>
    我是home页面
  </div> -->
  <div class="container">
    <Homecategory></Homecategory>
    <HomeBanner></HomeBanner>
  </div>
  <Homenew></Homenew>
  <HomeProduct></HomeProduct>
  <HomeProduct></HomeProduct>

</template>
<script setup lang="ts">
import HomeBanner from './compontents/homebanner.vue'
import HomeCategory from './compontents/homecategory.vue'
import HomeNew from './compontents/homenew.vue'
import HomeHot from './compontents/homehot.vue'
import HomeProduct from './compontents/homeproduct.vue'
import Homecategory from './compontents/homecategory.vue'
import Homenew from './compontents/homenew.vue'
</script>

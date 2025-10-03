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
  <homepannel title="新鲜好物" subtitle="新鲜好物 好多商品">
    <!-- <div>我是新鲜好物的插槽</div> -->

  </homepannel>
  <homepannel title="人气推荐" subtitle="人气推荐 好多商品">

    <!-- <div>我是人气推荐的插槽</div> -->
  </homepannel>


</template>
<script setup lang="ts">
import HomeBanner from './compontents/homebanner.vue'
import HomeCategory from './compontents/homecategory.vue'
import HomeNew from './compontents/homenew.vue'
import HomeHot from './compontents/homehot.vue'
import HomeProduct from './compontents/homeproduct.vue'
import Homecategory from './compontents/homecategory.vue'
import Homenew from './compontents/homenew.vue'
import homepannel from './compontents/homepannel.vue'

</script>

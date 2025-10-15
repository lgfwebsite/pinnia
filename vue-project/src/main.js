import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { lazyPlugin } from '@/directives'
import { useIntersectionObserver } from '@vueuse/core'
import piniaPLuginPersist from 'pinia-plugin-persistedstate'
//引入初始化样式文件
import '@/styles/common.scss'

//图片和commoncss没有引入

// //测试接口函数
// import { getTestData } from "@/apis/testAPI";
// getTestData().then(res => {
//     console.log(res);
// })
const pinia= createPinia()
//注册持久化插件
pinia.use(piniaPLuginPersist)
const app = createApp(App)

app.use(pinia)
app.use(router)
//懒加载插件
//引入懒加载插件
app.use(lazyPlugin)
app.mount('#app')
// //全局指令
// app.directive('img-lazy', {
//     //当指令与元素成功绑定时
//     // el指令所绑定的元素
//     // binding指令相关的信息
//     mounted(el,binding) {
//         //创建一个观察对象
//         console.log('ellll',binding.value);

//         useIntersectionObserver(el, ([{ isIntersecting }]) => {

//             if (isIntersecting) {
//                 //进入视图区域
//                 console.log('进入视图区域',isIntersecting);
//                 el.src = binding.value

//       }
//     })
//   }})

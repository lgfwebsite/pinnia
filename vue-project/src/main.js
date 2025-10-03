import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { useIntersectionObserver } from '@vueuse/core'
//引入初始化样式文件
import '@/styles/common.scss'

//图片和commoncss没有引入

// //测试接口函数
// import { getTestData } from "@/apis/testAPI";
// getTestData().then(res => {
//     console.log(res);
// })

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
//全局指令
app.directive('img-lazy', {
    //当指令与元素成功绑定时
    // el指令所绑定的元素
    // binding指令相关的信息
    mounted(el,binding) {
        //创建一个观察对象
        console.log('ellll',binding.value);

        useIntersectionObserver(el, ([{ isIntersecting }]) => {

            if (isIntersecting) {
                //进入视图区域
                console.log('进入视图区域',isIntersecting);
                el.src = binding.value

      }
    })
  }})

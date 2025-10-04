// 懒加载插件
import { useIntersectionObserver } from '@vueuse/core'
export const lazyPlugin = {
  install(app) {
    // 1. 创建一个指令
   //全局指令
app.directive('img-lazy', {
    //当指令与元素成功绑定时
    // el指令所绑定的元素
    // binding指令相关的信息
    mounted(el,binding) {
        //创建一个观察对象
        console.log('ellll',binding.value);

       const {stop} =useIntersectionObserver(el, ([{ isIntersecting }]) => {
                //  debugger
            if (isIntersecting) {
                //进入视图区域
                console.log('进入视图区域',isIntersecting);
                el.src = binding.value
                console.log('el',el);
                stop()

      }
    })
  }})
  }
  }

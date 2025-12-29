//封装倒计时的逻辑函数
import { ref,computed, onMounted, onUnmounted} from 'vue'
import dayjs from 'dayjs'

export const useCountDown = () => {
  //1.响应式的数据
  const time = ref(0)
    //格式化时间
  const formateTime= computed(() =>


        dayjs.unix(time.value).format('mm分ss秒')
  )


  //2.倒计时逻辑
  //开启倒计时的函数
  const start = (current) => {
    //开始倒计时的逻辑
    //每间隔一秒就减1
    time.value = current
    timer= setInterval(() => {
        time.value--
        console.log(formateTime.value)
    },1000)


    //当倒计时结束的时候，清除定时器
    onUnmounted(() => {

        timer&&clearInterval(timer)

    })

  }
  //3.返回
  return {
    formateTime,
    start
  }


}

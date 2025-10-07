//封装轮播图相关的业务代码
import { ref, onMounted } from 'vue';
import { getHomeList} from '@/apis/home.js';
// 轮播图数据

export function useBanner() {
const bannerList = ref([]);
const getbannerlist = async () => {
    console.log('执行', 1111111); // 先看是否打印
    // 传入参数distributionSite: '2' 来获取分类页的banner 数据
    const res = await getHomeList({distributionSite:'2'});
    // 注释掉有问题的打印
    // console.log(distributionSi
    bannerList.value = res.result;
    console.log('执行', 22222222); // 现在看是否打印
  }
onMounted(() => {
    getbannerlist();
});
   return bannerList
}

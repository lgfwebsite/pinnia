//封装分类数据的业务代码
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { getCategoryList} from '@/apis/category.js';
export function useCategory(){
const catelist = ref([]);
const route = useRoute();
const getcateList = async (id=route.params.id)=>{
  const res=await getCategoryList(id);
  catelist.value =res.result
  console.log(res,1111);
}
onMounted(()=>{
  getcateList()
})
onBeforeRouteUpdate((to) => {
  // console.log('beforeUpdate');
  console.log(to,'to');
  getcateList(to.params.id);
});
  return {catelist}
}


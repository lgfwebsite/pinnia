import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/login/index.vue'
import layout from '../views/layout/index.vue'
import home from '../views/home/index.vue'
import category from '../views/category/index.vue'
import subcategory  from '../views/subcategory/index.vue'
import detail from '../views/detail/index.vue'
import cartList from '../views/cartList/index.vue'
import checkout from '../views/checkout/index.vue'
import pay  from '../views/pay/index.vue'
import payback from '@/views/pay/payback.vue'
import member from '../views/member/index.vue'
import userInfo from '@/views/member/compoments/userInfo.vue'
import userOrder from '@/views/member/compoments/userOrder.vue'
//createRouter函数：创建路由实例
//createWebHistory函数：创建基于HTML5 History API的路由模式
//import.meta.env.BASE_URL：获取应用的基础路径，通常在开发环境中是'/'，在生产环境中可能是'/your-repo-name/'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //paths and components
  //route配置
  routes: [
    {
      path:'/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'layout',
      component: layout,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/home.vue')
      //嵌套路由
      //布局组件的子路由
      //布局组件中要有一个<router-view></router-view>，作为子路由的出口
      //子路由的path不需要加/，加了/就变成了一级路由
      //访问子路由时，父路由的组件会一直存在，子路由的组件会根据路径变化而变化
      //默认子路由：子路由的path为空字符串''
      //当访问父路由时，会自动渲染默认子路由
      children:[
        {
          //子路由
          path: '',  //默认子路由
          name: 'home',
          component: home
        },
        {
           path: 'category/:id',//动态路由
           name: 'category',
            component: category
        },

        {
          path: 'category/sub/:id',
          name: 'subcategory',
          component: subcategory
        },
        {
          path:'detail/:id',
          name:'detail',
          component: detail
        },{
          path: 'cartList',
          name: 'cartList',
          component: cartList
        },

        {
          path:'checkout',
          name:'checkout',
          component: checkout
        },
        {
          path:'pay',
          name:'pay',
          component:pay
        },
        {
          path:'payback',
          name:'payback',
          component: payback
        },
        {
          path:'member',
          name:'member',
          component: member,
          children:[
            {
              path: '',  //默认子路由
              name: 'user',
              component: userInfo
            },
            {
              path: 'order',
              name: 'order',
              component: userOrder
            }
          ]

        }

       ]
    }
  ],
  //路由滚动行为控制
  scrollBehavior(){
    return {
      top:0
    }
  }

})

export default router

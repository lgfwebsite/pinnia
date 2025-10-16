<script setup>
import router from '@/router'
import {  useUserstore } from '@/stores/user'
const userStore =  useUserstore()
const confirm=()=>{
  console.log('退出登录')
  //清除用户信息 触发action
   userStore.clearUserInfo()
  //跳转到登录页面
  router.push('/login')
}
//退出登录逻辑实现

</script>
<template>
  <nav class="app-topnav">
   <div class="container">
    <ul class="nav">
      <!-- 区别登录与非登录的状态 -->
       <!-- 登录时显示第一个 非登录时显示第二个 -->
      <template v-if="userStore.userInfo.token">
        <li><a href="javascript:void(0)"><i class="iconfont icon-user">
          {{ userStore.userInfo.account }}
        </i></a></li>
        <li>
          <el-popconfirm
            title="确定要退出登录吗？"
            icon="el-icon-warning"
            icon-color="red"
            confirm-button-text="确定"
            cancel-button-text="取消"
            @confirm="confirm"

          >
            <template #reference>
              <a href="javascript:void(0)">退出登录</a>
            </template>
          </el-popconfirm>
        </li>
        <li><a href="javascript:void(0)">我的订单</a></li>
        <li><a href="javascript:void(0)">会员中心</a></li>
      </template>
      <template v-else>
        <li><a href="javascript:void(0);;" @click="$router.push('/login')">请先登录</a></li>
        <li><a href="javascript:void(0)">帮助中心</a></li>
        <li><a href="javascript:void(0)">关于我们</a></li>
      </template>

    </ul>
   </div>

  </nav>

</template>
<style lang="scss">
.app-topnav {
    background: #333;

    ul {
        display: flex;
        height: 53px;
        justify-content: flex-end;
        align-items: center;

        li {
            a {
                padding: 0 15px;
                color: #cdcdcd;
                line-height: 1;
                display: inline-block;

                i {
                    font-size: 14px;
                    margin-right: 2px;
                }

                &:hover {
                    color: $xtxColor;
                }
            }

            ~li {
                a {
                    border-left: 2px solid #666;
                }
            }
        }
    }
}

</style>

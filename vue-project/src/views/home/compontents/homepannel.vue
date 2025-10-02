<script setup>
defineProps({
    title: {
        type: String,
        default: '默认标题'
    },
    subtitle: {
        type: String,
        default: '默认副标题'
    }
});
// 定义props 接收父组件传递的标题和副标题
// 主要是不变的模块和简单的模块 不涉及接口处理

</script>


<template>
    <div class="home-panel">
        <div class="container">
            <div class="head">
                <!-- 主标题和副标题 -->
                <h3>
                   {{ title }}
                    <small>{{ subtitle }}</small>
                </h3>
            </div>
            <!-- 主体内容区域 -->
             <div>
              <!-- 插槽 -->
               <!-- 插槽内容 -->
                <slot></slot>
             </div>
        </div>
    </div>
</template>

<style scoped lang='scss'>
.home-panel {
    background-color: #fff;

    .head {
        padding: 40px 0;
        display: flex;
        align-items: flex-end;

        h3 {
            flex: 1;
            font-size: 32px;
            font-weight: normal;
            margin-left: 6px;
            height: 35px;
            line-height: 35px;

            small {
                font-size: 16px;
                color: #999;
                margin-left: 20px;
            }
        }
    }
}
</style>

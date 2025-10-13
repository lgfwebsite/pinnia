const { install } = require("element-plus");
import imageView from '@/components/ImageView/index.vue'
import xtx from '@/components/XtxSku/index.vue'
//组件全局化注册
const complugin={
    install(app){
        app.component('imageView',()=>import('imageView'))
        app.component('xtx',()=>import('xtx'))
    }
}

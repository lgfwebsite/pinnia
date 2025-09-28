import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    //配置element-plus实现按需引入
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({

      //配置element-plus实现按需引入
      resolvers: [
        //配置elment-plus采用sass样式
      ElementPlusResolver({ importStyle: 'sass' }),
      //或者配置为less样式
      ElementPlusResolver({ importStyle: 'less' }),
      //或者配置为css样式
      // ElementPlusResolver({ importStyle: 'css' }],
      ]
    }),
  ],
  resolve: {
    alias: {
      //别名实现
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        //引入element-plus的scss变量
        //自动导入覆盖掉默认样式
        additionalData: `@use "@/styles/element/index.scss" as *;`
      }
    }
  }
      })

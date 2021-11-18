import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
const pathResolve = (dir: string): string => resolve(__dirname, '.', dir)
// https://vitejs.dev/config/
export default defineConfig({
   plugins: [
      vue(),
      styleImport({
         libs: [
            {
               libraryName: 'element-plus',
               esModule: true,
               ensureStyleFile: true,
               resolveStyle: (name) => {
                  name = name.slice(3)
                  return `element-plus/packages/theme-chalk/src/${name}.scss`
               },
               resolveComponent: (name) => {
                  return `element-plus/lib/${name}`
               },
            },
         ],
      }),
   ],
   server: {
      host: "0.0.0.0",
      open: true
   },
   resolve: {
      alias: [
         { find: '@', replacement: pathResolve('src') },
         // 解决警告You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle.
         {
            find: 'vue-i18n',
            replacement: 'vue-i18n/dist/vue-i18n.cjs.js'
         }
      ]
   },
})


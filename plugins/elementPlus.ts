import ElementPlus from 'element-plus'

import "element-plus/dist/index.css";
import '~/assets/css/global.scss';

export default defineNuxtPlugin((app) => {
  app.vueApp.use(ElementPlus)
})
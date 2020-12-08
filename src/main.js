import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vant from 'vant'
import 'vant/lib/index.css'
// 如果模块里是分开导出了很多个属性或者方法，这里导入的时候需要使用 * as 就会把所有导出的属性方法放入ajax对象
import * as ajax from './request'

import 'amfe-flexible'

Vue.prototype.$http = ajax

Vue.use(vant)

Vue.config.productionTip = false

// 全局混入：mixin里面的每一个选项都会混入到每一个组件里，也就是说这里定义的东西每个组件都可以用
Vue.mixin({
  filters: {
    over99 (v) {
      return v > 99 ? '99+' : v
    },
    toFix2 (v) {
      return v.toFixed(2)
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

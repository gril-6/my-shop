import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // 头部处理
  const { isBackShow, title } = to.meta
  store.commit('changeIsBackShowAndTitle', { isBackShow, title })

  // 判断待切换到的页面是否需要登录权限
  if (to.meta && to.meta.isPermission) { // 需要
    if (store.state.user.token) { // 有用户登录的 token 数据，则直接下一步
      next()
    } else { // 未登录，转到登录页面
      next({ name: 'Login', params: { to } })
    }
  } else {
    next()
  }
})

export default router

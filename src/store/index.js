import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import state from './state'
import mutations from './mutations'
import getters from './getters'
import userModule from './modules/user'

Vue.use(Vuex)

// 插件：每当mutaion被提交插件代码就会执行
const cartPlugin = store => {
  store.subscribe((mutation, state) => {
    // console.log('提交 Mutation.....', mutation, state)
    // 每当有mutaion被提交了，就会执行这个方法
    // 把state.cart存入localStorage
    localStorage.setItem('cart', JSON.stringify(state.cart))
  })
}

const userPlugin = store => {
  store.subscribe(({ type }, state) => {
    switch (type) {
      case 'user/LOGIN_SUCCESS':
        localStorage.setItem('token', state.user.token)
        localStorage.setItem('username', state.user.username)
        localStorage.setItem('avatarUrl', state.user.avatarUrl)
        break
    }
  })
}

export default new Store({
  plugins: [cartPlugin, userPlugin],
  state,
  mutations,
  getters,
  modules: {
    user: userModule
  }
})

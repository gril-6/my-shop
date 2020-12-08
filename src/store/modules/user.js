import { login } from '../../request'

const username = localStorage.getItem('username')
const avatarUrl = localStorage.getItem('avatarUrl')
const token = localStorage.getItem('token')

export default {
  namespaced: true, // 启用命名空间
  state: {
    username,
    avatarUrl,
    token
  },
  getters: {},
  mutations: {
    // 登录成功，更新状态
    LOGIN_SUCCESS (state, { username, avatarUrl, token }) {
      console.log('修改 user 状态：', username, avatarUrl, token)
      state.username = username
      state.avatarUrl = avatarUrl
      state.token = token
    }
  },
  actions: {
    // 异步登录
    loginAsync (store, { username, password }) {
      return login(username, password)
        .then(res => {
          console.log('登录处理：', res)
          const { username, avatarUrl, token } = res.data
          // 提交 mutation
          store.commit('LOGIN_SUCCESS', { username, avatarUrl, token })
          return {
            status: 200
          }
        })
        .catch(err => {
          console.log('异常：', err)
        })
    }
  }
}

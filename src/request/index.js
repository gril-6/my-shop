import axios from 'axios'
import { Toast } from 'vant'

const ajax = axios.create({
  baseURL: '/api'
})
// 请求拦截
ajax.interceptors.request.use(config => {
  // 带上所有接口都会用到的公共参数或者头信息
  // config.headers.token = 'fghuoides;g'
  // 显示加载图标
  Toast({
    type: 'loading',
    message: '加载中...',
    duration: 0
  })
  return config
})

// 响应拦截
ajax.interceptors.response.use(resp => {
  // 隐藏loading
  Toast.clear()
  // 做一些公共错误处理，前提条件是所有接口返回的数据结构要都相同
  if (resp.status === 200) {
    if (resp.data.code === 200) {
      return resp.data.data
    }
  }
  return {
    code: 0,
    msg: 'fail'
  }
})

// 获取所有商品分类
export const getTabs = () => ajax.get('/tabs')
// 根据id获取某一个分类商品列表，start就是数据获取起始索引
export const getCategory = (id, start) => ajax.get(`/tab/${id}?start=${start}`)
// 根据id获取商品详情信息
export const getDetail = id => ajax.get(`/detail?id=${id}`)
// 用户登录：利用计时器模拟用户登录
export const login = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'admin' && password === 'test') { // 模拟登录成功
        resolve({
          code: 200,
          data: {
            username,
            avatarUrl: 'http://localhost:8080/xxx.png',
            token: 'oui1947128934oiuasdfojasdlfoqiwerujalsdfkj'
          }
        })
      } else { // 失败
        reject(new Error('用户名或密码错误'))
      }
    }, 1000)
  })
}

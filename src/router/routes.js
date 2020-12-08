import Home from '@/views/Home'
import WsFooter from '@/components/WsFooter'

const Mall = () => import('@/views/Mall')
const WsCategory = () => import('@/components/WsCategory')
const Cart = () => import('@/views/Cart')
const Mine = () => import('@/views/Mine')
const Detail = () => import('@/views/Detail')
const Login = () => import('@/views/Login')
const Confirm = () => import('@/views/Confirm')

const routes = [
  {
    path: '/',
    redirect: '/home',
    meta: {
      isTabbar: false,
      isBackShow: false,
      title: '首页'
    }
  },
  {
    path: '/home',
    name: 'Home',
    components: {
      default: Home,
      'ws-footer': WsFooter
    },
    meta: {
      isTabbar: true,
      title: '首页',
      icon: 'home-o',
      isBackShow: false
    }
  },
  {
    path: '/mall',
    name: 'Mall',
    components: {
      default: Mall,
      'ws-footer': WsFooter
    },
    meta: {
      isTabbar: true,
      title: '商城',
      icon: 'shop-o',
      isBackShow: false
    },
    children: [
      {
        path: ':id',
        component: WsCategory,
        meta: {
          isBackShow: false,
          title: '商城'
        }
      }
    ]
  },
  {
    path: '/cart',
    name: 'Cart',
    components: {
      default: Cart
    },
    meta: {
      isTabbar: true,
      title: '购物车',
      icon: 'shopping-cart-o',
      isBackShow: false
    }
  },
  {
    path: '/mine',
    name: 'Mine',
    components: {
      default: Mine,
      'ws-footer': WsFooter
    },
    meta: {
      isTabbar: true,
      title: '我的',
      icon: 'friends-o',
      isBackShow: false,
      isPermission: true // 需要登录权限（登录后才能访问）
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
    meta: {
      isTabbar: false,
      isBackShow: true,
      title: '详情页'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      isTabbar: false,
      isBackShow: true,
      title: '登录'
    }
  },
  {
    path: '/confirm',
    name: 'Confirm',
    component: Confirm,
    meta: {
      isTabbar: false,
      isBackShow: true,
      title: '确认订单',
      isPermission: true
    }
  }
]

export default routes

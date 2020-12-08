<template>
  <div class="ws-footer">
    <van-tabbar route v-model="tabIndex">
      <van-tabbar-item
        v-for="(tabbar, index) in tabbars"
        :key="tabbar.name"
        :to="tabbar.path"
        :icon="tabbar.meta.icon"
        :class="{ 'van-tabbar-item--active': index === tabIndex }"
        :badge="tabbar.name === 'Cart' ? totalCount : ''"
      >
        {{tabbar.meta.title}}
        <!-- <span class="badge" v-if="tabbar.name === 'Cart'">{{totalCount | over99}}</span> -->
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import routes from '@/router/routes'
export default {
  name: 'WsFooter',
  data () {
    return {
      tabIndex: 0
    }
  },
  computed: {
    ...mapGetters(['totalCount']),
    // 底部导航根据routes来渲染，方便以后维护升级
    tabbars () {
      return routes.filter(route => route.meta.isTabbar)
    }
  },
  created () {
    this.tabbars.forEach((tab, index) => {
      // tabIndex修改为当前路由所在的索引，不能默认为0否则一刷新就回到首页高亮了
      // 从tabbars里去根据路由path去匹配修改tabIndex的默认值
      if (tab.path === '/' + this.$route.path.split('/')[1]) {
        this.tabIndex = index
      }
    })
  }
}
</script>

<style>
.van-tabbar-item {
  position: relative;
}
.badge {
  position: absolute;
  padding: 1px 4px;
  border-radius: 10px;
  left: 55px;
  top: 3px;
  background-color: red;
  color: #fff;
}
</style>

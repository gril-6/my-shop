<template>
  <div class="mall">
    <div class="mall-sidebar">
      <van-sidebar v-model="cateIndex">
        <van-sidebar-item
          v-for="tab in tabs"
          :key="`tab-${tab.id}`"
          :to="`/mall/${tab.id}`"
          :title="tab.name"
        />
      </van-sidebar>
    </div>
    <div class="mall-section">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mall',
  data () {
    return {
      tabs: [],
      cateIndex: 0
    }
  },
  created () {
    this.$http.getTabs()
      .then(resp => {
        this.tabs = resp.list
        // 默认跳到第0条数据所对应的路由
        // 但是如果是在当前其他数据组件刷新的时候不跳转的
        const { id } = this.$route.params
        if (id) {
          // 如果id已存在，说明是在刷新，那就不跳转，但是需要修改cateIndex
          this.tabs.forEach((tab, index) => {
            if (tab.id === parseInt(id)) this.cateIndex = index
          })
        } else {
          // id不存在说明是从别的组件过来的，那就重定向
          this.$router.push(`/mall/${this.tabs[0].id}`)
        }
      })
  },
  beforeRouteUpdate (to, from, next) {
    // 如果已经处于分类组件再去点击tabbar下面的mall，那就不跳转
    if (to.name !== 'Mall') {
      next()
    }
  }
}
</script>

<style lang="scss" scoped>
.mall {
  display: flex;
  height: 100%;
  &-sidebar {
    overflow-x: hidden;
    .van-sidebar-item--select::before {
      background-color: #1989fa;
    }
  }
  &-section {
    flex: 1;
    overflow-x: hidden;
    background-color: #eee;
  }
}
</style>

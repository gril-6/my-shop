<template>
  <div class="cate">
    <!-- 数据处理尽量扁平化，所以数据都展开一个一个传这样更合理 -->
    <van-list
      v-model="loading"
      :finished="isEnd"
      finished-text="没有更多了"
      @load="getData"
    >
      <van-cell
        v-for="shop in cateList"
        :key="`shop-${shop.id}`"
      >
        <template #title>
          <WsCateItem
            :id="shop.id"
            :title="shop.title"
            :image="shop.image"
            :price="shop.price"
            :saleNum="shop.saleNum"
            :type="shop.type"
          />
        </template>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import WsCateItem from './WsCateItem'
export default {
  name: 'Category',
  data () {
    return {
      id: '',
      cateList: [],
      // 请求数据起始索引
      start: 0,
      // 是否加载完成
      isEnd: false,
      // 是否正在加载，如果正在加载不允许发送重复的请求
      loading: false
    }
  },
  components: {
    WsCateItem
  },
  created () {
    this.id = this.$route.params.id
    // 因为我们使用的van-list组件会默认发一次请求，所以我们在这里就不用发了
    // this.getData()
  },
  beforeRouteUpdate (to, from, next) {
    this.id = to.params.id
    next()
    // 先把start重置为0，cateList清空
    this.start = 0
    this.cateList = []
    this.getData()
  },
  methods: {
    getData () {
      console.log('getData')
      this.$http.getCategory(this.id, this.start)
        .then(resp => {
          const { list, nextIndex, isEnd } = resp.items
          // this.cateList.push(...list)
          this.cateList = this.cateList.concat(list)
          // this.cateList = [...this.cateList, ...list]
          this.start = nextIndex
          this.isEnd = isEnd
          this.loading = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.cate {
  .van-list {
    display: flex;
    flex-wrap: wrap;
  }
  .van-cell {
    width: 46%;
    margin: 2%;
    padding: 2%;
    font-size: 12px;
    line-height: 2;
    color: #666;
    background-color: #fff;
    border-radius: 1%;
  }
  .van-cell__title {
    width: 100%;
  }
}
</style>

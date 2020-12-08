<template>
  <router-link
    :to="`/detail?id=${id}`"
    class="cate-item"
    tag="div"
    :event="type === 1 ? 'click' : ''"
  >
    <div class="cate-item-img">
      <img :src="image" alt="">
    </div>
    <div v-if="type === 1">
      <p class="cate-item-title">{{title}}</p>
      <p class="cate-item-intro">
        <span>￥{{price | toFix2}}</span>
        <span>销量：{{saleNum}}</span>
      </p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'WsCateItem',
  props: ['id', 'title', 'image', 'price', 'saleNum', 'type']
}
</script>

<style lang="scss" scoped>
.cate-item {
    &-img {
      width: 100%;
      img {
        width: 100%;
      }
    }
    &-title {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    &-intro {
      display: flex;
      justify-content: space-between;
      align-items: center;
      span:first-child {
        color: #ee0a24;
        font-size: 14px;
      }
    }
  }
</style>

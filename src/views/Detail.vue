<template>
  <div class="detail">
    <div class="detail-swipe">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="url in detail.photo" :key="url.id">
          <img :src="url.url" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="detail-intro">
      <h3>{{detail.title}}</h3>
      <div class="detail-info">
        <span>
          ￥{{detail.price}}
          <del>原价：{{detail.originPrice}}</del>
        </span>
        <span>{{detail.couponValue}}</span>
      </div>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
      <van-goods-action-icon icon="cart-o" to="/cart" text="购物车" />
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
      <van-goods-action-button type="warning" text="加入购物车" @click="addToCart({ detail })" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import {
  mapMutations
} from 'vuex'
export default {
  data () {
    return {
      id: '',
      detail: {}
    }
  },
  created () {
    this.id = this.$route.query.id
    this.$http.getDetail(this.id)
      .then(resp => {
        console.log(resp)
        const {
          id,
          couponValue,
          photo,
          title,
          price,
          originPrice,
          descContentList
        } = resp.detail
        this.detail = {
          id,
          couponValue,
          photo,
          title,
          price,
          originPrice,
          descContentList
        }
      })
  },
  methods: {
    ...mapMutations(['addToCart'])
  }
}
</script>

<style lang="scss" scoped>
.detail {
  line-height: 2;
  &-swipe {
    img {
      width: 100%;
    }
  }
  h3 {
    font-size: 14px;
    color: #43240c;
  }
  &-intro {
    padding: 0 10px;
  }
  &-info {
    display: flex;
    justify-content: space-between;
    span:first-child {
      font-size: 16px;
      color: #ee0a24;
      del {
        padding-left: 10px;
        color: #999;
      }
    }
    span:last-child {
      font-size: 12px;
      color: #999;
    }
  }
}
</style>

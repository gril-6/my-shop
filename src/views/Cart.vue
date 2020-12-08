<template>
  <div class="cart">
    <div class="cart-main" v-if="cart.length === 0">
      <h3>购物车空空如也</h3>
    </div>
    <div class="cart-main" v-else>
      <van-swipe-cell
        v-for="shop in cart"
        :key="`shop-${shop.id}`"
      >
        <WsCartItem
          :id="shop.id"
          :title="shop.title"
          :price="shop.price"
          :photo="shop.photo"
          :check="shop.check"
          :count="shop.count"
        />
        <template #right>
          <van-button @click="delShop({ id: shop.id })" square text="删除" type="danger" class="delete-button" />
        </template>
      </van-swipe-cell>
    </div>
    <div class="cart-footer">
      <van-submit-bar :price="totalMoney * 100" button-text="提交订单" @submit="onSubmit">
        <van-checkbox :value="isAllCheck" @click="toggelAllCheck({ isAllCheck })">全选</van-checkbox>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapMutations
} from 'vuex'
import WsCartItem from '@/components/WsCartItem'
export default {
  name: 'Cart',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['totalMoney', 'isAllCheck'])
  },
  methods: {
    ...mapMutations(['delShop', 'toggelAllCheck']),
    onSubmit () {
      console.log('提交订单...')
      this.$router.push('/confirm')
    }
  },
  components: {
    WsCartItem
  }
}
</script>

<style lang="scss" scoped>
.cart {
  height: 100%;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  &-main {
    padding: 0 10px;
    flex: 1;
  }
  .van-submit-bar {
    position: static;
  }

}
.delete-button {
  height: 100%;
}
</style>

<template>
  <div class="cart-item">
    <div class="cart-item-left">
      <label>
        <input type="checkbox" :checked="check" @change="toggleCheck({ id })">
        <span></span>
      </label>
      <img :src="photo[0].url" alt="">
    </div>
    <div class="cart-item-info">
      <h4>
      {{title}}
      </h4>
      <p>
        <span>￥{{price | toFix2}}</span>
        <van-stepper :value="count" @change="countChange" />
      </p>
    </div>
  </div>
</template>

<script>
import {
  mapMutations
} from 'vuex'
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    photo: {
      type: Array,
      required: true
    },
    check: {
      type: Boolean,
      required: true
    },
    count: {
      type: Number,
      required: true
    }
  },
  methods: {
    ...mapMutations(['toggleCheck']),
    countChange (num) {
      // 提交一个mutation传入num和id来修改count
      this.$store.commit('changeCountById', { id: this.id, num })
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  margin: 10px 0;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  &-left {
    display: flex;
    align-items: center;
    padding-right: 10px;
    label {
      margin-right: 5px;
    }
    input {
      display: none;
      + span {
        display: block;
        position: relative;
        width: 14px;
        height: 14px;
        border: 1px solid #999;
        border-radius: 50%;
      }
      &:checked + span {
        background-color: #1989fa;
        border-color: #1989fa;
        &::after {
          content: '';
          position: absolute;
          top: 2px;
          left: 2px;
          width: 8px;
          height: 4px;
          border: 2px solid #fff;
          border-width: 0 0 2px 2px;
          transform: rotate(-45deg);
        }
      }
    }
    img {
      width: 80px;
    }
  }
  &-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h4 {
      font-size: 12px;
      color: #43240c;
    }
    p {
      display: flex;
      justify-content: space-between;
      span {
        color: #ee0a24
      }
    }
  }
}
</style>

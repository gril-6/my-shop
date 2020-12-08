<template>
  <div class="home">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          v-for="banner in banners"
          :key="`banner-${banner.id}`"
          class="swiper-slide"
        >
          <img :src="banner.imageUrl" :title="banner.title">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/swiper.scss'
export default {
  name: 'Home',
  data () {
    return {
      banners: []
    }
  },
  created () {
    this.$http.getCategory(1)
      .then(resp => {
        console.log(resp)
        this.banners = resp.banners
        // nextTick,当数据改变以后要等到DOM元素根据新的数据渲染完成才能写轮播图
        this.$nextTick().then(() => {
          this.initSwiper()
        })
      })
  },
  methods: {
    initSwiper () {
      // eslint-disable-next-line
      new Swiper('.swiper-container', {
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      })
    }
  },
  deactivated () {
    console.log('deactivated')
  },
  activated () {
    console.log('activated')
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 0;
  padding-top: 378 / 1008 * 100%;
  position: relative;
  .swiper-wrapper {
    position: absolute;
    left: 0;
    top: 0;
  }
  img {
    width: 100%;
  }
}
</style>

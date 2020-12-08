<template>
  <div class="app">
    <div class="header">
      <van-nav-bar v-if="isBackShow" :title="title" left-text="返回" @click-left="$router.back()" left-arrow>
        <template #right>
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>
      <van-nav-bar v-else :title="title">
        <template #right>
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>
    </div>
    <div class="main">
      <keep-alive include="Home">
        <router-view />
      </keep-alive>
    </div>
    <div class="footer">
      <router-view name="ws-footer" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['isBackShow', 'title'])
  }
}
</script>

<style lang="scss">
html,
body,
p,
ol,
ul,
li,
dl,
dt,
dd,
figure,
fieldset,
legend,
textarea,
hr,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}

ul,
ol {
  list-style: none;
}

button,
input,
select,
textarea {
  margin: 0;
}

*, *::before, *::after {
  box-sizing: inherit;
}

// img,
// video {
//   height: auto;
//   max-width: 100%;
// }

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
}

td:not([align]),
th:not([align]) {
  text-align: left;
}

a {
  text-decoration: none;
  outline: none;
}

html,
body,
.app {
  height: 100%;
}
.app {
  display: flex;
  flex-direction: column;
}
.header {
  width: 750px;
  .van-nav-bar {
    background-color: #1989fa;
  }
  .van-nav-bar__text,
  .van-nav-bar .van-icon,
  .van-nav-bar__title {
    color: #fff;
  }
}
.main {
  flex: 1;
  overflow-x: hidden;
}
.footer {
  height: 50px;
}
</style>

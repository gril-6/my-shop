<template>
  <div class="login">
    <!-- {{ token }} -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      username: 'admin',
      password: 'test'
    }
  },
  computed: {
    ...mapState('user', ['token'])
  },
  created () {
    console.log('created: ', this.token)
  },
  beforeUpdate () {
    console.log('beforeUpdate: ', this.token)
  },
  updated () {
    console.log('updated: ', this.token)
  },
  methods: {
    // ...mapActions(['user/loginAsync']),
    ...mapActions('user', ['loginAsync']),
    onSubmit (e) {
      console.log(e)
      // 调用 store 中的 action 处理方法，实现登录
      // 这是去触发 user 命名空间下 loginAsync 这个 action 方法的调用
      // this.$store.dispatch('user/loginAsync', e)
      // this['user/loginAsync'](e)
      const result = this.loginAsync(e)
      console.log('登录：', result)
      result.then(res => {
        if (res.status === 200) {
          const { to = '/mine' } = this.$route.params
          // 登录成功，跳转页面
          this.$router.push(to)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

<template>
  <div class="mine">
    我的
    <div>{{ username }}</div>
    <div>{{ avatarUrl }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Mine',
  computed: {
    ...mapState('user', ['username', 'avatarUrl'])
  }
}
</script>

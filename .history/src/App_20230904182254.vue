<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<script>
import { getListAPI } from '@/api'
import { ref, reactive, onMounted } from 'vue'
export default {
  setup () {
    onMounted(async () => {
      const res = await getListAPI()
console.log('res')
    })
  }
}
</script>
<style lang="less">
</style>

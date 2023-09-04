<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<script>
import { getListAPI } from '@/api'
export default {

}
</script>
<style lang="less">
</style>

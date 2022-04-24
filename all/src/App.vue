<template>
  <div id="app">
    <Header />
    <router-view/>

  </div>
</template>

<script>

import Header from '@/components/header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style >
a{
  text-decoration: none;
  color: #666;
}
</style>

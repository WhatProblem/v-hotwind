<template>
  <div id="app">
    <router-view/>
    <Tabbar class="tabbar"></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/tabbar'
export default {
  name: 'App',
  components: {
    Tabbar
  }
}
</script>

<style lang="scss" scoped>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
.tabbar {
  width: 100%;
  height: 110px;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>

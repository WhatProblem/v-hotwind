<template>
  <div id="app" :class="{showtab: tabHide}">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <Tabbar class="tabbar" v-if="tabHide"></Tabbar>
  </div>
</template>

<script>
import Tabbar from "@/components/tabbar";
export default {
  name: "App",
  components: {
    Tabbar
  },
  data() {
    return {
      tabHide: true
    };
  },
  computed: {},
  created() {
    this.tabStatus();
  },
  mounted() {},
  methods: {
    tabStatus() {
      let curRoute = this.$route.fullPath;
      let routeArr = ["/home", "/sorts", "/cart", "/profile"];
      if (routeArr.includes(curRoute)) {
        this.tabHide = true;
      } else {
        this.tabHide = false;
      }
    }
  },
  watch: {
    $route(to, from) {
      this.tabStatus();
    }
  }
};
</script>

<style lang="scss" scoped>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
.showtab {
  padding-bottom: 110px;
}
.tabbar {
  width: 100%;
  height: 110px;
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>

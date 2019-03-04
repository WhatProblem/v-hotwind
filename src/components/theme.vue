<template>
  <div class="theme">
    <div class="thtitle ignore" v-for="(item,i) in themeData" :key="i">
      <img v-lazy="item.picurl" alt>
    </div>
  </div>
</template>
<script>
export default {
  name: "Theme",
  props: ['themeData'],
  data() {
    return {};
  },
  mounted () {
    // console.log(this.themeData)
  }
};
</script>
<style lang="scss" scoped>
.theme {
  width: 100%;
  height: 130px;
  margin: 0 0 8px 0;
  padding: 10px;
  background: #fff;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .thtitle {
    width: 25%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .ignore {
    padding-right: 1px;
  }
}
</style>

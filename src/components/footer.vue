<template>
  <div class="footer">
    <div class="listItem" v-for="(item,i) in footer" :key="i">
      <img v-lazy="item.picurl" alt>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  props: ["footer"],
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.footer {
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  box-sizing: border-box;
  background: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .listItem {
    width: 33.3%;
    overflow: hidden;
    &:nth-child(2) {
      padding: 0 10px;
    }
    img {
      width: 100%;
    }
  }
}
</style>

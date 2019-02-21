<template>
  <div class="theme">
    <div class="thtitle ignore">
      <img src="../assets/img/theme/theme_1.png" alt>
    </div>
    <div class="thtitle ignore">
      <img src="../assets/img/theme/theme_2.png" alt>
    </div>
    <div class="thtitle ignore">
      <img src="../assets/img/theme/theme_3.png" alt>
    </div>
    <div class="thtitle ignore">
      <img src="../assets/img/theme/theme_4.png" alt>
    </div>
  </div>
</template>
<script>
export default {
  name: "Theme",
  data() {
    return {};
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

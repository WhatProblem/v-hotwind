<template>
  <div class="welfare">
    <div class="wealTtitel ignore">
      优惠福利
      <i class="v-hot icon-arrow_r"></i>
    </div>
    <div class="introImg">
      <img class="showImg" v-lazy="picUrl" alt>
    </div>
  </div>
</template>
<script>
export default {
  name: "Welfare",
  data() {
    return {
      picUrl: "../../static/img/welfare/welfare.jpg"
    };
  }
};
</script>
<style lang="scss" scoped>
.welfare {
  width: 100%;
  background: #fff;
  margin-top: 10px;
  .wealTtitel {
    width: 100%;
    height: 85px;
    line-height: 85px;
    text-align: center;
    font-size: 34px;
    color: #000;
    font-weight: bold;
    position: relative;
    i {
      width: 84px;
      height: 84px;
      position: absolute;
      top: 0;
      right: 0;
      font-size: 34px;
      text-align: center;
      line-height: 84px;
      color: rgb(218, 218, 218);
      font-weight: normal;
    }
  }
  .ignore {
    border-bottom: 1px solid rgb(243, 243, 243);
  }
  .introImg {
    width: 100%;
    overflow: hidden;
    .showImg {
      width: 100%;
    }
  }
}
</style>

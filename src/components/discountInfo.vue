<template>
  <div class="discountInfo">
    <div class="disList" v-for="(item,index) in discount" :key="index">
      <img v-lazy="item.picurl" alt>
    </div>
  </div>
</template>
<script>
export default {
  name: "DiscountInfo",
  props: ["discount"],
  data() {
    return {
      
    };
  }
};
</script>
<style lang="scss" scoped>
.discountInfo {
  width: 100%;
  height: 390px;
  background: #fff;
  padding: 10px 10px 10px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  .disList {
    width: 33.3%;
    height: 370px;
    padding-left: 10px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
}
</style>

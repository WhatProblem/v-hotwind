<template>
  <div class="shopSale">
    <div class="saleTitle ignore">
      {{shopSale[0]['sale_name']}}
      <i class="v-hot icon-arrow_r"></i>
    </div>
    <div class="saleDetail">
      <div class="leftPic" v-for="(item,i) in shopSale" :key="i" v-if="item.sale_type_order=='0'">
        <img class="leftImg" v-lazy="item.picurl" alt>
      </div>
      <div class="rightPic">
        <div class="topPic" v-for="(item,i) in shopSale" :key="i" v-if="item.sale_type_order=='1'">
          <img class="topImg" v-lazy="item.picurl" alt>
        </div>
        <div class="botPic" v-for="(item,i) in shopSale" :key="i" v-if="item.sale_type_order=='2'">
          <img class="botImg" v-lazy="item.picurl" alt>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ShopSale",
  props: ["shopSale"],
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.shopSale {
  width: 100%;
  background: #fff;
  margin-top: 10px;
  .saleTitle {
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

  .saleDetail {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    .leftPic {
      width: 286px;
      height: 450px;
      float: left;
      overflow: hidden;
      .leftImg {
        height: 100%;
      }
    }
    .rightPic {
      overflow: hidden;
      height: 450px;
      padding-left: 10px;
      .topPic {
        width: 100%;
        height: 220px;
        padding-bottom: 10px;
        overflow: hidden;
        .topImg {
          width: 100%;
        }
      }
      .botPic {
        width: 100%;
        height: 220px;
        overflow: hidden;
        .botImg {
          width: 100%;
        }
      }
    }
  }
}
</style>

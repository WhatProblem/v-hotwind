<template>
  <div class="hotSale">
    <div class="hotTitle ignore">
      商城热销款
      <i class="v-hot icon-arrow_r"></i>
    </div>
    <div class="hotDetail">
      <div class="hotList" v-for="(item,index) in dataList" :key="index">
        <div class="showImg">
          <img class="hotImg" v-lazy="item.picUrl" alt>
        </div>
        <div class="showPrice">￥{{item.price}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HotSale",
  data() {
    return {
      dataList: [
        { picUrl: "../../static/img/hotSale/hotSale_1.jpg", price: "109.00" },
        { picUrl: "../../static/img/hotSale/hotSale_2.jpg", price: "119.00" },
        { picUrl: "../../static/img/hotSale/hotSale_3.jpg", price: "129.00" },
        { picUrl: "../../static/img/hotSale/hotSale_4.jpg", price: "119.00" },
        { picUrl: "../../static/img/hotSale/hotSale_5.jpg", price: "169.00" },
        { picUrl: "../../static/img/hotSale/hotSale_6.jpg", price: "199.00" },
        { picUrl: "../../static/img/hotSale/hotSale_7.jpg", price: "209.00" },
        { picUrl: "../../static/img/hotSale/hotSale_8.jpg", price: "409.00" },
        { picUrl: "../../static/img/hotSale/hotSale_9.jpg", price: "109.00" }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.hotSale {
  width: 100%;
  background: #fff;
  margin-top: 10px;
  .hotTitle {
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
  .hotDetail {
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    &::after {
      content: "";
      clear: both;
      display: block;
    }
    .hotList {
      width: 236px;
      height: 394px;
      padding-right: 10px;
      float: left;
      &:nth-child(3n) {
        padding-right: 0;
      }
      .showImg {
        width: 100%;
        height: 320px;
        overflow: hidden;
        .hotImg {
          height: 100%;
        }
      }
      .showPrice {
        width: 100%;
        height: 74px;
        line-height: 74px;
        text-align: left;
        font-size: 30px;
        color: #000;
        font-weight: bold;
      }
    }
  }
}
</style>

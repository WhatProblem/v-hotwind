<template>
  <div class="girl">
    <div class="girlTtitel ignore">
      女装专区
      <i class="v-hot icon-arrow_r"></i>
    </div>
    <div class="girlDetail">
      <div class="list" v-for="(item,index) in listData" :key="index">
        <div class="listItem">
          <div class="listPic">
            <img v-lazy="item.picUrl" alt>
          </div>
          <div class="listTitle">￥{{item.price}}</div>
        </div>
      </div>
    </div>
    <div class="showMore">
      <div class="showTxt">查看更多</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Girl",
  data() {
    return {
      listData: [
        { picUrl: "../../static/img/girl/girl_1.jpg", price: "109.00" },
        { picUrl: "../../static/img/girl/girl_2.jpg", price: "119.00" },
        { picUrl: "../../static/img/girl/girl_3.jpg", price: "169.00" },
        { picUrl: "../../static/img/girl/girl_4.jpg", price: "108.00" },
        { picUrl: "../../static/img/girl/girl_5.jpg", price: "209.00" }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.girl {
  width: 100%;
  margin-top: 10px;
  background: #fff;
  .girlTtitel {
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
  .girlDetail {
    width: 100%;
    padding-top: 10px;
    &::after {
      content: "";
      clear: both;
      display: block;
    }
    .list {
      width: 50%;
      height: 564px;
      padding-bottom: 10px;
      float: left;
      .listItem {
        width: 100%;
        height: 564px;
        padding: 0 2px;
        box-sizing: border-box;
        .listPic {
          width: 100%;
          height: 492px;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
        .listTitle {
          width: 99%;
          height: 72px;
          line-height: 72px;
          font-size: 30px;
          font-weight: bold;
          color: #000;
          border: 1px solid #ebecee;
          border-top: none;
        }
      }
    }
  }
  .showMore {
    width: 100%;
    height: 94px;
    display: flex;
    justify-content: center;
    align-items: center;
    .showTxt {
      width: 258px;
      height: 64px;
      border: 1px solid #000;
      text-align: center;
      line-height: 64px;
      font-weight: bold;
    }
  }
}
</style>

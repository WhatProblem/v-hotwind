<template>
  <div class="goodList">
    <div class="filterArea ignore">
      <div class="filterTitle orders">
        默认排序
        <i class="v-hot icon-arrow_down"></i>
      </div>
      <div class="filterTitle sales">销量</div>
      <div class="filterTitle price">
        价格
        <i class="v-hot icon-arrow_down"></i>
      </div>
      <div class="filterTitle sorts">
        分类
        <i class="v-hot icon-arrow_down"></i>
      </div>
    </div>
    <div class="listArea">
      <div class="list" v-for="(item,i) in arr" :key="i">
        <div class="img">
          <img v-lazy="item.picurl" alt>
        </div>
        <div class="listTitle">
          <div class="topTitle">{{item.title}}</div>
          <div class="botPrice">
            <div class="leftPrice">{{item.price}}</div>
            <div class="cutIcon">立减</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodList",
  data() {
    return {
      arr: [
        {
          picurl: "../../../static/goodList/0_001.jpg",
          title: "三福2019夏装新品女印花卫衣 韩版休闲宽松长袖上衣女",
          price: "￥139.00",
          cut_now: 1
        },
        {
          picurl: "../../../static/goodList/0_002.jpg",
          title: "三福2019夏装新品女印花卫衣 韩版休闲宽松长袖上衣女",
          price: "￥139.00",
          cut_now: 1
        },
        {
          picurl: "../../../static/goodList/0_003.jpg",
          title: "三福2019夏装新品女印花卫衣 韩版休闲宽松长袖上衣女",
          price: "￥139.00",
          cut_now: 1
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.goodList {
  width: 100%;
  background: #ffffff;
  .filterArea {
    width: 100%;
    height: 84px;
    display: flex;
    .filterTitle {
      width: 25%;
      height: 84px;
      line-height: 84px;
      text-align: center;
      font-size: 30px;
      i {
        font-size: 28px;
      }
    }
  }
  .ignore {
    border-bottom: 1px solid #f1f1f1;
  }
  .listArea {
    width: 100%;
    padding: 0 10px;
    background: rgb(245, 245, 245);
    box-sizing: border-box;
    &::after {
      content: "";
      display: block;
      clear: both;
    }
    .list {
      width: 50%;
      max-height: 612px;
      // height: 612px;
      margin-top: 8px;
      padding: 0 4px;
      box-sizing: border-box;
      float: left;
      .img {
        width: 100%;
        max-height: 572px;
        overflow: hidden;
        background: #fff;
        img {
          width: 100%;
        }
      }
      .listTitle {
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        background: #fff;
        &::after {
          content: "";
          display: block;
          clear: both;
        }
        .topTitle {
          width: 100%;
          height: 36px;
          line-height: 36px;
          font-size: 26px;
          color: #505050;
          font-weight: bold;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .botPrice {
          width: 100%;
          padding: 10px 0;
          .leftPrice {
            height: 100%;
            line-height: 100%;
            font-size: 34px;
            font-weight: bold;
            color: red;
            float: left;
          }
          .cutIcon {
            width: 64px;
            height: 32px;
            border-radius: 10px;
            border: 1px solid red;
            line-height: 32px;
            text-align: center;
            font-size: 24px;
            color: red;
            float: right;
          }
        }
      }
    }
  }
}
</style>

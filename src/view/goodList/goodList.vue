<template>
  <div class="goodList">
    <div class="filter">
      <div class="filterArea ignore">
        <div class="filterTitle orders" @click="changeOrder">
          默认排序
          <i :class="['v-hot',defaultOrder ? 'icon-arrow_up' : 'icon-arrow_down']"></i>
        </div>
        <div class="filterTitle sales">销量</div>
        <div class="filterTitle price" @click="changePrice">
          价格
          <i :class="['v-hot',defaultPrice ? 'icon-arrow_up' : 'icon-arrow_down']"></i>
        </div>
        <div class="filterTitle sorts" @click="changeSort">
          分类
          <i :class="['v-hot',defaultSort ? 'icon-arrow_up' : 'icon-arrow_down']"></i>
        </div>
      </div>
      <div class="filterType" v-if="defaultOrder">
        <div class="filterList ignore">综合排序</div>
        <div class="filterList ignore">新品排序</div>
      </div>
      <div class="filterSort ignore" v-if="defaultSort">
        <div class="sortList">开衫卫衣</div>
        <div class="sortList">套头卫衣</div>
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
      defaultOrder: false,
      defaultSort: false,
      defaultPrice: false,
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
        },
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
  },
  created () {
    this.init();
  },
  mounted () {
    
  },
  methods: {
    init() {
      let querys = this.$route.query;
      console.log(querys)
    },
    changeOrder() {
      this.defaultOrder = !this.defaultOrder;
    },
    changeSort() {
      this.defaultSort = !this.defaultSort;
    },
    changePrice() {
      this.defaultPrice = !this.defaultPrice;
    }
  }
};
</script>
<style lang="scss" scoped>
.goodList {
  width: 100%;
  background: #ffffff;
  .filter {
    width: 100%;
    position: relative;
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
    .filterType {
      width: 100%;
      position: absolute;
      left: 0;
      top: 84px;
      background: #fff;
      .filterList {
        width: 100%;
        height: 88px;
        padding: 24px 34px;
        box-sizing: border-box;
        font-size: 28px;
        line-height: 40px;
        color: #474747;
      }
      .ignore {
        border-top: 1px solid #f1f1f1;
      }
    }
    .filterSort {
      width: 100%;
      min-height: 134px;
      position: absolute;
      left: 0;
      top: 84px;
      background: #fff;
      padding: 24px;
      box-sizing: border-box;
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      .sortList {
        height: 84px;
        line-height: 84px;
        vertical-align: middle;
        font-size: 30px;
        color: #474747;
        float: left;
        margin-right: 50px;
      }
    }
    .ignore {
      border-top: 1px solid #f1f1f1;
    }
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

<template>
  <div class="sortArea">
    <div class="sortTitile ignore">
      {{sorts[0]['sort_title']}}
      <i class="v-hot icon-arrow_r"></i>
    </div>
    <div class="sortList">
      <div class="sortItem" v-for="(item,index) in sorts" :key="index" @click="navGoodList(item)">
        <div class="sortImg">
          <img class="poster" v-lazy="item.picurl" alt>
          <div class="itemTitle">{{item.sort_name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SortArea",
  props: ["sorts"],
  data() {
    return {};
  },
  methods: {
    navGoodList(item) {
      console.log(item);
      this.$router.push({
        path: "goodList",
        query: { sort_navid: item.sort_navid, sort_type: item.sort_type }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.sortArea {
  width: 100%;
  min-height: 84px;
  background: #fff;
  .sortTitile {
    position: relative;
    width: 100%;
    height: 84px;
    padding: 14px 10px;
    line-height: 56px;
    font-size: 34px;
    text-align: center;
    font-weight: bold;
    color: #000;
    box-sizing: border-box;
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
  .sortList {
    width: 100%;
    padding-top: 25px;
    &::after {
      content: "";
      clear: both;
      display: block;
    }
    .sortItem {
      width: 25%;
      height: 160px;
      text-align: center;
      float: left;
      .sortImg {
        width: 100%;
        height: 100%;
        img {
          height: 100px;
          margin: auto;
        }
        .itemTitle {
          width: 100%;
          height: 30px;
          line-height: 30px;
          text-align: center;
          font-size: 24px;
        }
      }
    }
  }
}
</style>

<template>
  <div class="sortArea">
    <div class="sortTitile ignore">
      Girls-热门分类
      <i class="v-hot icon-arrow_r"></i>
    </div>
    <div class="sortList">
      <div class="sortItem">
        <div class="sortImg">
          <img src="../assets/img/sortTitle/girl_sort_1.jpg" alt>
          <div class="itemTitle">分类名称</div>
        </div>
      </div>
      <div class="sortItem">
        <div class="sortImg">
          <img src="../assets/img/sortTitle/girl_sort_2.jpg" alt>
          <div class="itemTitle">分类名称</div>
        </div>
      </div>
      <div class="sortItem">
        <div class="sortImg">
          <img src="../assets/img/sortTitle/girl_sort_3.jpg" alt>
          <div class="itemTitle">分类名称</div>
        </div>
      </div>
      <div class="sortItem">
        <div class="sortImg">
          <img src="../assets/img/sortTitle/girl_sort_4.jpg" alt>
          <div class="itemTitle">分类名称</div>
        </div>
      </div>
      <div class="sortItem">
        <div class="sortImg">
          <img src="../assets/img/sortTitle/girl_sort_5.jpg" alt>
          <div class="itemTitle">分类名称</div>
        </div>
      </div>
      <div class="sortItem">
        <div class="sortImg">
          <img src="../assets/img/sortTitle/girl_sort_6.jpg" alt>
          <div class="itemTitle">分类名称</div>
        </div>
      </div>
      <div class="sortItem">
        <div class="sortImg">
          <img src="../assets/img/sortTitle/girl_sort_7.jpg" alt>
          <div class="itemTitle">分类名称</div>
        </div>
      </div>
      <div class="sortItem">
        <div class="sortImg">
          <img src="../assets/img/sortTitle/girl_sort_8.jpg" alt>
          <div class="itemTitle">分类名称</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SortArea",
  data() {
    return {};
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
      img {
          width: 100px;
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
</style>

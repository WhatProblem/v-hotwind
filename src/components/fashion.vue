<template>
  <div class="fashion">
    <div class="popTtitel ignore">
      流行时尚
      <i class="v-hot icon-arrow_r"></i>
    </div>
    <div class="popDetail">
      <div class="topLeft">
        <div class="l_topImg" v-for="(item,i) in fashion" :key="i" v-if="item.pic_position=='left_top'">
          <img class="lt_img" v-lazy="item['picurl']" alt>
        </div>
        <div class="l_botImg" v-for="(item,i) in fashion" :key="i" v-if="item.pic_position=='left_bottom'">
          <img class="lb_img" v-lazy="item['picurl']" alt>
        </div>
      </div>
      <div class="topRight">
        <div class="r_topImg" v-for="(item,i) in fashion" :key="i" v-if="item.pic_position=='right_top'">
          <img class="rt_img" v-lazy="item['picurl']" alt>
        </div>
        <div class="r_botImg" v-for="(item,i) in fashion" :key="i" v-if="item.pic_position=='right_bottom'">
          <img class="rb_img" v-lazy="item['picurl']" alt>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Fashion",
  props: ['fashion'],
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.fashion {
  width: 100%;
  background: #fff;
  margin-top: 10px;
  .popTtitel {
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
  .popDetail {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    &::after {
      content: "";
      clear: both;
      display: block;
    }
    .topLeft {
      float: left;
      width: 50%;
      padding-right: 5px;
      box-sizing: border-box;
      .l_topImg {
        width: 100%;
        height: 556px;
        padding-bottom: 10px;
        overflow: hidden;
        .lt_img {
          height: 556px;
        }
      }
      .l_botImg {
        width: 100%;
        height: 370px;
        overflow: hidden;
        .lb_img {
          height: 370px;
        }
      }
    }
    .topRight {
      float: left;
      width: 50%;
      padding-left: 5px;
      box-sizing: border-box;
      .r_topImg {
        width: 100%;
        height: 370px;
        padding-bottom: 10px;
        overflow: hidden;
        .rt_img {
          height: 370px;
        }
      }
      .r_botImg {
        width: 100%;
        height: 556px;
        overflow: hidden;
        .lb_img {
          height: 556px;
        }
      }
    }
  }
}
</style>

<template>
  <div class="banner">
    <!-- swiper -->
    <swiper :options="swiperOption">
      <swiper-slide class="slideItem" v-for="(item,i) in bannerData" :key="i">
        <div class="posterImg">
          <img :src="item.picurl" alt>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  props: ["bannerData"],
  data() {
    return {
      datas: null,
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false // 解决手动滑动后无法自动轮播的问题
        },
        loop: true,
        on: {
          click: function(e) {
            console.log(this.activeIndex);
          }
        }
      }
    };
  },
  created() {},
  mounted() {
    // console.log(this.bannerData);
  },
  methods: {
    testClick() {
      console.log(234423424);
    }
  }
};
</script>
<style lang="scss" scoped>
.banner {
  width: 100%;
  .slideItem {
    //   width: 750px;
    width: 100%;
    height: 370px;
    .posterImg {
      width: 100%;
      height: 100%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

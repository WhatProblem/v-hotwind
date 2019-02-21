<template>
  <div class="banner">
    <!-- swiper -->
    <swiper :options="swiperOption">
      <swiper-slide class="slideItem">
        <div class="posterImg">
          <img src="../assets/img/banner/banner_1.jpg" alt>
        </div>
      </swiper-slide>
      <swiper-slide class="slideItem">
        <div class="posterImg">
          <img src="../assets/img/banner/banner_2.jpg" alt>
        </div>
      </swiper-slide>
      <swiper-slide class="slideItem">
        <div class="posterImg">
          <img src="../assets/img/banner/banner_3.jpg" alt>
        </div>
      </swiper-slide>
      <swiper-slide class="slideItem">
        <div class="posterImg">
          <img src="../assets/img/banner/banner_4.jpg" alt>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
            console.log(this.activeIndex)
          }
        }
      }
    };
  },
  created() {},
  mounted() {},
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

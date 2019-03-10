<template>
  <div class="home">
    <div class="homeSec" v-if="homeData">
      <Banner :bannerData="homeData.banner"></Banner>
      <Theme :themeData="homeData.theme"></Theme>
      <SortArea :sorts="homeData.girlSort"></SortArea>
      <SortArea :sorts="homeData.boySort"></SortArea>
      <DiscountInfo :discount="homeData.discount"></DiscountInfo>
      <ShopSale :shopSale="homeData.shopSale"></ShopSale>
      <HotSale :hotSale="homeData.hotSale"></HotSale>
      <Welfare :welfare="homeData.welfare"></Welfare>
      <Fashion :fashion="homeData.fashion"></Fashion>
      <Combine :combine="homeData.fashionSeason"></Combine>
      <SpecialArea :SpecialArea="homeData.girls" :titles="'女装专区'"></SpecialArea>
      <SpecialArea :SpecialArea="homeData.boys" :titles="'男装专区'"></SpecialArea>
      <SpecialArea :SpecialArea="homeData.shoesBag" :titles="'鞋包专区'"></SpecialArea>
      <Footer :footer="homeData.footer"></Footer>
    </div>
  </div>
</template>
<script>
import Banner from "@/components/banner";
import Theme from "@/components/theme";
import SortArea from "@/components/sortArea";
import DiscountInfo from "@/components/discountInfo";
import ShopSale from "@/components/shopSale";
import HotSale from "@/components/hotSale";
import Welfare from "@/components/welfare";
import Fashion from "@/components/fashion";
import Combine from "@/components/combine";
import SpecialArea from "@/components/specialArea";
import Footer from "@/components/footer";
// const DiscountInfo = () => ({
// // 需要加载的组件 (应该是一个 `Promise` 对象)
// component: import('@/components/discountInfo'),
// // 异步组件加载时使用的组件
// // loading: LoadingComponent,
// // 加载失败时使用的组件
// // error: ErrorComponent,
// // 展示加载时组件的延时时间。默认值是 200 (毫秒)
// delay: 9000,
// // 如果提供了超时时间且组件加载也超时了，
// // 则使用加载失败时使用的组件。默认值是：`Infinity`
// timeout: 10000
// })
// const DiscountInfo = Vue.component("DiscountInfo", resolve => {
//   setTimeout(() => {
//     require(["@/components/discountInfo"], resolve);
//   }, 5000);
// });
export default {
  name: "Home",
  components: {
    Banner,
    Theme,
    SortArea,
    DiscountInfo,
    ShopSale,
    HotSale,
    Welfare,
    Fashion,
    Combine,
    SpecialArea,
    Footer
  },
  data() {
    return {
      homeData: null
    };
  },
  created() {
    this.init();
  },
  mounted() {},
  methods: {
    init() {
      this.$http.get("home").then(res => {
        if (res.data.code == 200) {
          this.homeData = res.data.data;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.homeTitle {
  width: 100%;
  height: 50px;
  font-size: 32px;
  line-height: 50px;
  color: #666;
}
.loading {

}
</style>

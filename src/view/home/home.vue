<template>
  <div class="home">
    <Banner></Banner>
    <Theme></Theme>
    <SortArea :propData="sortGirl"></SortArea>
    <SortArea :propData="sortBoy"></SortArea>
    <DiscountInfo></DiscountInfo>
    <ShopSale></ShopSale>
    <HotSale></HotSale>
    <Welfare></Welfare>
    <Fashion></Fashion>
    <div class="homeTitle">home部分</div>
    <router-link to="/goodList">跳转到goodlist</router-link>
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
    Fashion
  },
  data() {
    return {
      sortGirl: {
        title: "Girls-热门分类",
        sortList: [
          {
            picUrl: "../../static/img/sortTitle/girl_sort_1.jpg",
            sortName: "分类名称"
          },
          {
            picUrl: "../../static/img/sortTitle/girl_sort_2.jpg",
            sortName: "分类名称"
          },
          {
            picUrl: "../../static/img/sortTitle/girl_sort_3.jpg",
            sortName: "分类名称"
          },
          {
            picUrl: "../../static/img/sortTitle/girl_sort_4.jpg",
            sortName: "分类名称"
          },
          {
            picUrl: "../../static/img/sortTitle/girl_sort_5.jpg",
            sortName: "分类名称"
          },
          {
            picUrl: "../../static/img/sortTitle/girl_sort_6.jpg",
            sortName: "分类名称"
          },
          {
            picUrl: "../../static/img/sortTitle/girl_sort_7.jpg",
            sortName: "分类名称"
          },
          {
            picUrl: "../../static/img/sortTitle/girl_sort_8.jpg",
            sortName: "分类名称"
          }
        ]
      },
      sortBoy: {
        title: "Girls-热门分类",
        sortList: [
          {
            picUrl: "../../static/img/sortTitle/girl_sort_1.jpg",
            sortName: "分类名称"
          },
          {
            picUrl: "../../static/img/sortTitle/girl_sort_2.jpg",
            sortName: "分类名称"
          },
          {
            picUrl: "../../static/img/sortTitle/girl_sort_3.jpg",
            sortName: "分类名称"
          },
          {
            picUrl: "../../static/img/sortTitle/girl_sort_4.jpg",
            sortName: "分类名称"
          },
          {
            picUrl: "../../static/img/sortTitle/girl_sort_5.jpg",
            sortName: "分类名称"
          },
          {
            picUrl: "../../static/img/sortTitle/girl_sort_6.jpg",
            sortName: "分类名称"
          },
          {
            picUrl: "../../static/img/sortTitle/girl_sort_7.jpg",
            sortName: "分类名称"
          },
          {
            picUrl: "../../static/img/sortTitle/girl_sort_8.jpg",
            sortName: "分类名称"
          }
        ]
      }
    };
  },
  created() {}
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
</style>

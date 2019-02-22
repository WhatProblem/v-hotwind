<template>
  <div class="home">
    <Banner></Banner>
    <Theme></Theme>
    <SortArea :propData="sortGirl"></SortArea>
    <SortArea :propData="sortBoy"></SortArea>
    <div class="homeTitle">home部分</div>
    <router-link to="/goodList">跳转到goodlist</router-link>
  </div>
</template>
<script>
import Banner from "@/components/banner";
import Theme from "@/components/theme";
import SortArea from "@/components/sortArea";
export default {
  name: "Home",
  components: {
    Banner,
    Theme,
    SortArea
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

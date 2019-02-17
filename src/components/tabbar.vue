<template>
  <div class="tabbar ignore">
    <div class="home">
      <router-link tag="div" class="navbar" to="/home">
        <div>
          <i class="v-hot icon-home"></i>
          <div class="navTitle">首页</div>
        </div>
      </router-link>
    </div>
    <div class="sorts">
      <router-link tag="div" class="navbar" to="/sorts">
        <div>
          <i class="v-hot icon-sorts"></i>
          <div class="navTitle">分类</div>
        </div>
      </router-link>
    </div>
    <div class="cart">
      <router-link tag="div" class="navbar" to="/cart">
        <div>
          <i class="v-hot icon-cart"></i>
          <div class="navTitle">购物车</div>
        </div>
      </router-link>
    </div>
    <div class="profile">
      <router-link tag="div" class="navbar" to="/profile">
        <div>
          <i class="v-hot icon-profile"></i>
          <div class="navTitle">个人中心</div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {}
};
</script>
<style lang="scss" scoped>
.tabbar {
  width: 100%;
  height: 109px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  line-height: 109px;
}
.ignore {
  border-top: 1px solid #e4e5e9;
}
.home,
.sorts,
.cart,
.profile {
  width: 25%;
  height: 109px;
  font-size: 28px;
  text-align: center;
  color: #333;
}
i {
  display: block;
  width: 100%;
  height: 50%;
  font-size: 28px;
}
.navTitle {
  width: 100%;
  height: 50%;
  line-height: 30px;
  font-size: 28px;
}
</style>

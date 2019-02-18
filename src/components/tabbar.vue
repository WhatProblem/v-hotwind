<template>
  <div class="tabbar ignore">
    <div class="home">
      <router-link tag="div" class="navbar" to="/home">
        <i class="v-hot icon-home"></i>
        <div class="navTitle">首页</div>
      </router-link>
    </div>
    <div class="sorts">
      <router-link tag="div" class="navbar" to="/sorts">
        <i class="v-hot icon-sorts"></i>
        <div class="navTitle">分类</div>
      </router-link>
    </div>
    <div class="cart">
      <router-link tag="div" class="navbar" to="/cart">
        <i class="v-hot icon-cart"></i>
        <div class="navTitle">购物车</div>
      </router-link>
    </div>
    <div class="profile">
      <router-link tag="div" class="navbar" to="/profile">
        <i class="v-hot icon-profile"></i>
        <div class="navTitle">个人中心</div>
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
  :active {
    background: #fff;
  }
}

i {
  display: block;
  width: 100%;
  height: 48px;
  line-height: 48px;
  font-size: 36px;
}
.navTitle {
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 28px;
}
</style>

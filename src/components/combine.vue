<template>
  <div class="combine">
    <div class="content">
      <div class="l_content" v-for="(item,i) in combine" :key="i" v-if="item.pic_position=='left'">
        <img v-lazy="item.picurl" alt>
      </div>
      <div class="r_content" v-for="(item,i) in combine" :key="i" v-if="item.pic_position=='right'">
        <img v-lazy="item.picurl" alt>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Combine",
  props: ["combine"],
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.combine {
  width: 100%;
  margin-top: 10px;
  background: #fff;
  .content {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    .l_content {
      width: 50%;
      height: 188px;
      padding-right: 5px;
      overflow: hidden;
    }
    .r_content {
      width: 50%;
      height: 188px;
      padding-left: 5px;
      overflow: hidden;
    }
    img {
      width: 100%;
    }
  }
}
</style>

<template>
    <div class="home">
        <Banner></Banner>
        <div class="homeTitle">home部分</div>
        <router-link to="/goodList">跳转到goodlist</router-link>
    </div>
</template>
<script>
import Banner from '@/components/banner'
export default {
    name: 'Home',
    components: {
        Banner
    },
    data () {
        return {
            
        }
    },
    created () {
        
    }
}
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

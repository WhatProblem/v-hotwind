<template>
    <div class="home">
        <Banner></Banner>
        <Theme></Theme>
        <SortArea></SortArea>
        <SortArea></SortArea>
        <div class="homeTitle">home部分</div>
        <router-link to="/goodList">跳转到goodlist</router-link>
    </div>
</template>
<script>
import Banner from '@/components/banner'
import Theme from '@/components/theme'
import SortArea from '@/components/sortArea'
export default {
    name: 'Home',
    components: {
        Banner,
        Theme,
        SortArea
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

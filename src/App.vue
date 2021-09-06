<template>
  <div id="app">
    

    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o"><router-link to="/news">个人情况</router-link></van-tabbar-item>
      <van-tabbar-item icon="search" ><router-link to="/books">计划制定</router-link></van-tabbar-item>
      <van-tabbar-item icon="friends-o"><router-link to="/video">排行榜</router-link></van-tabbar-item>
      <van-tabbar-item icon="setting-o">设置</van-tabbar-item>
    </van-tabbar>

    <router-link to="/news"></router-link>
    <router-link to="/books"></router-link>
    <router-link to="/video"></router-link>
    

    <router-view></router-view>

  </div>
</template>

<script>


export default {
  data() {
    //ccy 标签栏
    return {
      
    };
  },
  methods: {
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

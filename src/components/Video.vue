<template>
    <div>
        <!-- 图片轮播功能 -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
        </van-swipe>
        <!-- 列表 -->
        <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        >
        <van-cell v-for="item in list" :key="item" :title="item" />
        </van-list>
        <!-- 页码功能 -->
        <!-- <van-pagination v-model="currentPage" :total-items="24" :items-per-page="5" /> -->
        <!-- 分享功能 -->
        <!-- <van-cell title="转发" @click="showShare = true" style="background-color:#39a9ed;width:20%;margin-left:40%;border-radius:50px;color:white"/>
        <van-share-sheet
        v-model="showShare"
        title="立即分享给好友"
        :options="options"
        @select="onSelect"
        /> -->
    </div>
</template>

<script>
export default {
    data() {
    return {
        // 分享功能
    //   showShare: false,
    //   options: [
    //     { name: '微信', icon: 'wechat' },
    //     { name: '微博', icon: 'weibo' },
    //     { name: '复制链接', icon: 'link' },
    //     { name: '分享海报', icon: 'poster' },
    //     { name: '二维码', icon: 'qrcode' },
    //   ],
    //   列表
    list: [],
      loading: false,
      finished: false,
    //   页码功能
    //   currentPage: 1,
    };
  },
  methods: {
    //   分享功能
    // onSelect(option) {
    //   Toast(option.name);
    //   this.showShare = false;
    // },
    // 列表
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
  },
}
</script>

<style>
/* 轮播效果 */
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
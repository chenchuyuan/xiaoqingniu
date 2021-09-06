<template>
  <div id="app">
    <!-- 标签页 -->
    <van-tabs v-model="activeName">
      <van-tab title="互动版" name="a">
        <!-- 计划安排周一 -->
          <van-field
            v-model="fieldValue_1"
            is-link
            readonly
            label="星期一"
            placeholder="请选择计划"
            @click="show_1 = true"
          />
          
          <van-popup v-model="show_1" round position="bottom">
            <van-cascader
              v-model="cascaderValue_1"
              title="请选择计划"
              :options="options"
              @close="show_1 = false"
              @finish="onFinish_1"
            />
          </van-popup>
          <!-- 计划安排周二 -->
          <van-field
            v-model="fieldValue_2"
            is-link
            readonly
            label="星期二"
            placeholder="请选择计划"
            @click="show_2 = true"
          />
          
          <van-popup v-model="show_2" round position="bottom">
            <van-cascader
              v-model="cascaderValue_2"
              title="请选择计划"
              :options="options"
              @close="show_2 = false"
              @finish="onFinish_2"
            />
          </van-popup>
          <!-- 计划安排周三 -->
          <van-field
            v-model="fieldValue_3"
            is-link
            readonly
            label="星期三"
            placeholder="请选择计划"
            @click="show_3 = true"
          />
          
          <van-popup v-model="show_3" round position="bottom">
            <van-cascader
              v-model="cascaderValue_3"
              title="请选择计划"
              :options="options"
              @close="show_3 = false"
              @finish="onFinish_3"
            />
          </van-popup>
          <!-- 计划安排周四 -->
          <van-field
            v-model="fieldValue_4"
            is-link
            readonly
            label="星期四"
            placeholder="请选择计划"
            @click="show_4 = true"
          />
          
          <van-popup v-model="show_4" round position="bottom">
            <van-cascader
              v-model="cascaderValue_4"
              title="请选择计划"
              :options="options"
              @close="show_4 = false"
              @finish="onFinish_4"
            />
          </van-popup>
          <!-- 计划安排周五 -->
          <van-field
            v-model="fieldValue_5"
            is-link
            readonly
            label="星期五"
            placeholder="请选择计划"
            @click="show_5 = true"
          />
          
          <van-popup v-model="show_5" round position="bottom">
            <van-cascader
              v-model="cascaderValue_5"
              title="请选择计划"
              :options="options"
              @close="show_5 = false"
              @finish="onFinish_5"
            />
          </van-popup>
          <!-- 计划安排周六 -->
          <van-field
            v-model="fieldValue_6"
            is-link
            readonly
            label="星期六"
            placeholder="请选择计划"
            @click="show_6 = true"
          />
          
          <van-popup v-model="show_6" round position="bottom">
            <van-cascader
              v-model="cascaderValue_6"
              title="请选择计划"
              :options="options"
              @close="show_6 = false"
              @finish="onFinish_6"
            />
          </van-popup>
          <!-- 计划安排周日 -->
          <van-field
            v-model="fieldValue_7"
            is-link
            readonly
            label="星期日"
            placeholder="请选择计划"
            @click="show_7 = true"
          />
          
          <van-popup v-model="show_7" round position="bottom">
            <van-cascader
              v-model="cascaderValue_7"
              title="请选择计划"
              :options="options"
              @close="show_7 = false"
              @finish="onFinish_7"
            />
          </van-popup>
        <!-- 目标约定、奖励、惩罚 -->
          <van-field
          v-model="value_target"
          label="目标制定"
          placeholder="输入框内容右对齐"
          input-align="right"
          />

        <!-- 奖励与惩罚 -->
          <van-field
          v-model="value_reward"
          label="奖励与惩罚"
          placeholder="输入框内容右对齐"
          input-align="right"
          />

        <!-- 家长自我留言 -->
          <van-field
          v-model="message"
          rows="2"
          autosize
          label="家长留言"
          type="textarea"
          maxlength="50"
          placeholder="请输入留言"
          show-word-limit
        />
      </van-tab>


    
      <van-tab title="非互动版" name="b">
        <!-- 通知栏 -->
        <van-notice-bar
        left-icon="volume-o"
        text="拍照上传进行数据读取"
        />
        <!-- 获取数据的框 -->
        <van-cell-group>
          <van-field v-model="value_date1" label="星期一" placeholder="所读取数据" />
          <van-field v-model="value_date2" label="星期二" placeholder="所读取数据" />
          <van-field v-model="value_date3" label="星期三" placeholder="所读取数据" />
          <van-field v-model="value_date4" label="星期四" placeholder="所读取数据" />
          <van-field v-model="value_date5" label="星期五" placeholder="所读取数据" />
          <van-field v-model="value_date6" label="星期六" placeholder="所读取数据" />
          <van-field v-model="value_date7" label="目标制定" placeholder="所读取数据" />
          <van-field v-model="value_dateReward" label="奖励与惩罚" placeholder="所读取数据" />
          
        </van-cell-group>
        <!-- 图片上传按钮 -->
        <van-uploader :after-read="afterRead" />
        <p>此处拍照上传</p>
        
      </van-tab>


        <!-- 积分情况 -->
      <van-tab title="积分情况" name="c">
        <!-- 选择单个日期 -->
        <van-cell title="选择单个日期" :value="date_day" @click="show_day = true" />
        <van-calendar v-model="show_day" @confirm="onConfirm_one" />
        <!-- 图片数据区域 -->
        <p>数据可视化图片</p>
        <van-image
        width="200"
        height="100"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <!-- 选择日期区间 -->
        <van-cell title="选择日期区间" :value="date_days" @click="show_days = true" />
        <van-calendar v-model="show_days" type="range" @confirm="onConfirm_more" />
        <!-- 图片数据区域 -->
        <p>数据可视化图片</p>
        <van-image
        width="200"
        height="100"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <!-- 分享功能 -->
        <van-cell title="分享" @click="showShare = true" style="background-color:#39a9ed;width:20%;margin-left:40%;border-radius:50px;color:white"/>
        <van-share-sheet
        v-model="showShare"
        title="立即分享给好友"
        :options="options_share"
        @select="onSelect"
        />
      </van-tab>
    </van-tabs>

    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o"><router-link to="/news">个人情况</router-link></van-tabbar-item>
      <van-tabbar-item icon="search" ><router-link to="/books">计划制定</router-link></van-tabbar-item>
      <van-tabbar-item icon="friends-o"><router-link to="/video">排行榜</router-link></van-tabbar-item>
      <van-tabbar-item icon="setting-o">设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>


export default {
  data() {
    //ccy 标签栏
    return {
      active: 0,
      
      //选择年月
      //  minDate: new Date(2020, 0, 1),
      // maxDate: new Date(2025, 10, 1),
      // currentDate: new Date(),

      //标签页
      activeName: 'a',

      //计划选择
      show_1: false,
      fieldValue_1: '',
      cascaderValue_1: '',

      show_2: false,
      fieldValue_2: '',
      cascaderValue_2: '',

      show_3: false,
      fieldValue_3: '',
      cascaderValue_3: '',

      show_4: false,
      fieldValue_4: '',
      cascaderValue_4: '',

      show_5: false,
      fieldValue_5: '',
      cascaderValue_5: '',

      show_6: false,
      fieldValue_6: '',
      cascaderValue_6: '',

      show_7: false,
      fieldValue_7: '',
      cascaderValue_7: '',
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          text: '家务类',
          value: '330000',
          children: [{ text: '洗衣服', value: '330100' }],
        },
        {
          text: '学习类',
          value: '320000',
          children: [{ text: '读书一小时', value: '320100' }],
        },
      ],

      //目标约定、奖励、惩罚
      value_target:'',
      value_reward:'',
      //家长自我留言
      message:'',
      //非互动版获取数据的框
      value_date1:'',
      value_date2:'',
      value_date3:'',
      value_date4:'',
      value_date5:'',
      value_date6:'',
      value_date7:'',
      value_dateReward:'',
      // 分享功能
      showShare: false,
      options_share: [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        // { name: '二维码', icon: 'qrcode' },
      ],
      //选择单个日期
      date_day: '',
      show_day: false,
      //选择日期区间
      date_days: '',
      show_days: false,
    };
  },
  //选择日期
  methods: {
    // formatDate(date_day) {
    //   return `${date_day.getMonth() + 1}/${date_day.getDate()}`;
    // },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
    //选择年月
    // formatter(type, val) {
    //   if (type === 'year') {
    //     return `${val}年`;
    //   } else if (type === 'month') {
    //     return `${val}月`;
    //   }
    //   return val;
    // },
    //计划选择
    onFinish_1({ selectedOptions }) {
      this.show_1 = false;
      this.fieldValue_1 = selectedOptions.map((option) => option.text).join('/');
    },
    onFinish_2({ selectedOptions }) {
      this.show_2 = false;
      this.fieldValue_2 = selectedOptions.map((option) => option.text).join('/');
    },
    onFinish_3({ selectedOptions }) {
      this.show_3 = false;
      this.fieldValue_3 = selectedOptions.map((option) => option.text).join('/');
    },
    onFinish_4({ selectedOptions }) {
      this.show_4 = false;
      this.fieldValue_4 = selectedOptions.map((option) => option.text).join('/');
    },
    onFinish_5({ selectedOptions }) {
      this.show_5 = false;
      this.fieldValue_5 = selectedOptions.map((option) => option.text).join('/');
    },
    onFinish_6({ selectedOptions }) {
      this.show_6= false;
      this.fieldValue_6 = selectedOptions.map((option) => option.text).join('/');
    },
    onFinish_7({ selectedOptions }) {
      this.show_7= false;
      this.fieldValue_7 = selectedOptions.map((option) => option.text).join('/');
    },
    //选择单个日期
    formatDate(date_day) {
      return `${date_day.getMonth() + 1}/${date_day.getDate()}`;
    },
    onConfirm_one(date_day) {
      this.show_day = false;
      this.date_day = this.formatDate(date_day);
    },
    //选择日期区间
    formatDate_days(date_days) {
      return `${date_days.getMonth() + 1}/${date_days.getDate()}`;
    },
    onConfirm_more(date_days) {
      const [start, end] = date_days;
      this.show_days = false;
      this.date_days = `${this.formatDate_days(start)} - ${this.formatDate_days(end)}`;
    },
    //图片上传按钮
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
  },
  name: 'App',
  components: {
    
  }
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

<template>
    <div>
        <!-- 标签页 -->
        <van-tabs v-model="activeName">
            <!-- 推荐计划 -->
            <van-tab title="推荐计划" name="a">
                <!-- 用户信息表单 -->
                <van-form @submit="onSubmit">
                    <van-field
                    v-model="username"
                    name="用户名"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                    />
                    <van-field
                    v-model="age"
                    type="password"
                    name="年龄"
                    label="年龄"
                    placeholder="年龄"
                    :rules="[{ required: true, message: '请填写年龄' }]"
                    />
                    <!-- 日历选择 -->
                    <van-field
                    readonly
                    clickable
                    name="calendar"
                    :value="value_days"
                    label="计划开始时间"
                    placeholder="点击选择日期"
                    @click="showCalendar = true"
                    />
                    <van-calendar v-model="showCalendar" @confirm="onConfirm" />
                    <!-- 级联选择计划目标 -->
                    <van-field
                    v-model="fieldValue"
                    is-link
                    readonly
                    label="目标"
                    placeholder="请选择达成目标"
                    @click="show = true"
                    />
                    <van-popup v-model="show" round position="bottom">
                    <van-cascader
                    v-model="cascaderValue"
                    title="请选择达成目标"
                    :options="options"
                    @close="show = false"
                    @finish="onFinish"
                    />
                    </van-popup>
                    <!-- 表单信息提交按钮 -->
                    <div style="margin: 16px;">
                    <van-button round block type="info" native-type="submit">生成计划</van-button>
                    </div>
                </van-form>
            </van-tab>

            <!-- 自定义计划 -->
            <van-tab title="自定义计划" name="b">
                <!-- 输入框 -->
                <!-- Field 是基于 Cell 实现的，可以使用 CellGroup 作为容器来提供外边框。 -->
                <van-cell-group>
                    <van-field v-model="value_name" label="姓名" placeholder="请输入孩子名字" />
                    <van-field v-model="value_age" label="年龄" placeholder="请输入孩子年龄" />
                    <van-field v-model="value_time" label="计划时间" placeholder="请输入计划的起止时间" />
                    <van-field v-model="value_target" label="达成目标" placeholder="请输入计划目标" />
                    <van-field v-model="value_reward" label="奖励与惩罚" placeholder="请输入奖惩" />
                    <!-- 提交按钮 -->
                    <div style="margin: 16px;">
                    <van-button round block type="info" native-type="submit">生成计划</van-button>
                    </div>
                </van-cell-group>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
    data() {
    return {
    // 标签栏
      activeName: 'a',
    //表单信息   
      username: '',
      age: '',
    // 日历选择
      value_days: '',
      showCalendar: false,
      // 级联选择目标
      show: false,
      fieldValue: '',
      cascaderValue: '',
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          text: '目标1',
          value: '330000',
          children: [{ text: '目标11', value: '330100' }],
        },
        {
          text: '目标2',
          value: '320000',
          children: [{ text: '目标22', value: '320100' }],
        },
      ],
        //输入框
        value_name: '',
        value_age: '',
        value_time: '',
        value_target: '',
        value_reward: '',
    };
  },
  methods: {
    // 表单方法
    onSubmit(values) {
      console.log('submit', values);
    },
    // 日历选择
    onConfirm(date) {
      this.value_days = `${date.getMonth() + 1}/${date.getDate()}`;
      this.showCalendar = false;
    },
    // 级联选择
     // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ selectedOptions }) {
      this.show = false;
      this.fieldValue = selectedOptions.map((option) => option.text).join('/');
    },
  },
}
</script>
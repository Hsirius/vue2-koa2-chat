<template>
  <div class="index">
    <h1>vue-koa2-chat</h1>
    <group class="group">
      <x-input
        title="账号"
        novalidate
        v-model="nickname"
        :icon-type="isUserNameCorrect"
        :show-clear="false"
        placeholder-align="right"
      ></x-input>
      <x-input
        title="密码"
        novalidate
        v-model="pwd"
        @keyup.enter.native="login"
        :icon-type="isPwdCorrect"
        :show-clear="false"
        placeholder-align="right"
      ></x-input>
    </group>
    <!-- <group class="group marTop5" title="请选择您的身份">
      <radio :options="roleList" :value="this.role" @on-change="changeRole"></radio>
    </group> -->
    <x-button class="group marTop5" type="primary" @click.native="login"
      >登录</x-button
    >
  </div>
</template>

<script>
import { Radio, Group, XInput, XButton } from "vux";
import { mapMutations } from "vuex";

export default {
  name: "home",
  components: { Group, XInput, XButton },
  data() {
    return {
      nickname: "",
      pwd: "",
      // roleList: [
      //   { key: "1", value: "牛人" },
      //   { key: "0", value: "Boss" }
      // ],
      // role: "1",
      isUserNameCorrect: "",
      isPwdCorrect: ""
    };
  },
  methods: {
    ...mapMutations(["DATA_SET_USERID"]),
    login() {
      this.$http
        .post("/getUser", {
          username: this.nickname,
          password: this.pwd,
          role: this.role
        })
        .then(res => {
          this.DATA_SET_USERID(res.data.id);
          //1跳转到牛人首页
          if (res.data.role === 1) {
            this.$router.push("/niup");
          } else {
            this.$router.push("/boss");
          }
        });
    }
    // changeRole(value, label) {
    //   this.role = value;
    // }
  }
};
</script>

<style lang="less" scoped>
.index {
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;

  h1 {
    color: red;
    text-align: center;
    font-size: 0.26rem;
    margin: 1rem auto 0;
  }
  .group {
    width: 75%;
    margin: 0.5rem auto 0;
  }
  .marTop5 {
    margin-top: 0.5rem;
  }
  .vux-x-icon {
    fill: #f70968;
  }
  .cell-x-icon {
    display: block;
    fill: green;
  }
}
</style>

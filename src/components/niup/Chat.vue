<template>
  <div class="box">
    <x-header>chat with {{ this.id }}</x-header>
    <div class="content">123</div>
    <group>
      <x-input>
        <x-icon slot="label" type="ios-ionic-outline" class="icon-red"></x-icon>
        <x-icon
          slot="right-full-height"
          type="ios-heart-outline"
          class="icon-red"
        ></x-icon>
      </x-input>
    </group>
  </div>
</template>

<script>
import { XHeader, XInput, Group } from "vux";
export default {
  name: "chat",
  components: {
    XHeader,
    XInput,
    Group
  },
  data() {
    return {
      id: -1
    };
  },
  mounted() {
    this.getUserId();
  },
  methods: {
    getUserId() {
      this.id = this.$route.params.id;
    }
  }
};
</script>

<style lang="less">
.weui-cells {
  margin-top: 0;
}
.weui-input {
  border: 1px solid #e3e3e3;
  height: 0.3rem;
}
</style>
<style scoped lang="less">
.box {
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  .content {
    flex: 1;
    background: #f5f5f5;
  }
}
</style>

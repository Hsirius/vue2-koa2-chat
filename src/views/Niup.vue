<template>
  <div class="box">
    <x-header :left-options="{ showBack: false }">vue-koa2-chat</x-header>
    <router-view></router-view>
    <tabbar v-model="selectedIndex">
      <tabbar-item v-for="(item, index) in tabList" :key="index">
        <span slot="label">
          <router-link :to="item.path" replace class="link">{{item.name}}</router-link>
        </span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { XHeader, Tabbar, TabbarItem } from 'vux'

export default {
  components: {
    XHeader,
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      selectedIndex: 0,
      tabList: [
        { name: '首页', path: '/niup/keyboard' },
        { name: '消息', path: '/niup/news' },
      ]
    }
  },
  created () {
    this.selectedIndex = this.$route.path === "/niup/keyboard" ? 0 : 1
  },
}
</script>

<style lang="less" scoped>
.box {
  display: flex;
  height: 100vh;
  flex-flow: column nowrap;
  .link {
    color: inherit;
  }
}
</style>

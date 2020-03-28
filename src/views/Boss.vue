<template>
  <div class="box">
    <panel :list="list" :type="type"></panel>
    <x-button type="primary" @click.native="releaseNews">发布消息</x-button>
  </div>
</template>
<script>
import { XButton, Panel } from "vux";

export default {
  components: {
    XButton,
    Panel
  },
  data() {
    return {
      type: "5",
      list: [
        {
          title: "标题一",
          desc:
            "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
        },
        {
          title: "标题二",
          desc:
            "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。",
          meta: {
            source: "来源信息",
            date: "时间",
            other: "其他信息"
          }
        }
      ]
    };
  },
  methods: {
    releaseNews() {
      this.$router.push("/boss/releaseNews");
    }
  }
};
</script>

<style lang="less" scoped></style>

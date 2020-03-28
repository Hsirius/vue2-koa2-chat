<template>
  <div>
    <panel :list="list" type="5" @on-click-item="chatWithBoss"></panel>
  </div>
</template>

<script>
import { Panel } from "vux";

export default {
  components: {
    Panel
  },
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.getBossReleaseNews();
  },
  methods: {
    getBossReleaseNews() {
      this.$http.get("/getBossReleaseNews").then(res => {
        res.data.forEach(item => {
          this.list.push({
            title: item.title,
            desc: item.content,
            meta: {
              source: "来源信息",
              date: item.time,
              other: "其他信息"
            },
            user_id: item.user_id
          });
        });
      });
    },
    chatWithBoss(item) {
      this.$router.push(`/niup/chat/${item.user_id}`);
    }
  }
};
</script>

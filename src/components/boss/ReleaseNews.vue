<template>
  <div class="box">
    <group>
      <x-input class="textarea" placeholder="标题" v-model="title"></x-input>
      <x-textarea
        class="textarea"
        :max="50"
         v-model="content"
        placeholder="随便写点什么"
      ></x-textarea>
    </group>
    <x-button type="primary" @click.native="releaseNews">发布消息</x-button>
  </div>
</template>

<script>
import { Group, XInput, XButton, XTextarea } from "vux";
import { mapState } from "vuex";

export default {
  components: {
    Group,
    XInput,
    XButton,
    XTextarea
  },
  data(){
    return {
      title: '',
      content: ''
    }
  },
  computed: {
    ...mapState({
      userId: state => state.userId.userId
    })
  },

  methods: {
    releaseNews() {
      this.$http.post('/bossReleaseNews', {
        user_id: this.userId,
        title: this.title,
        content: this.content
      })
    }
  }
};
</script>

<style lang="less" scoped>
.box {
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  .textarea {
    font-size: 0.2rem;
  }
}
</style>

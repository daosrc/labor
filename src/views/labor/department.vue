<template>
  <section class="p-4 main">
    <div class="_article">
      <div class="header">
        <div class="_title">单位简介</div>
        <a-button type="primary"> 返回</a-button>
      </div>
      <div class="context" v-html="_context"></div>
      <!-- <section>
      <Editor />
    </section> -->
    </div>
  </section>
</template>
<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  // import Editor from './components/Editor.vue';
  const _context = ref<string>();
  onMounted(() => {
    _context.value = '这里是单位简介具体内容';
  });
</script>
<style lang="less" scoped>
  .main {
    display: flex;
    // align-items: center;
    justify-content: center;
    // flex-direction: column;
    width: 100%;
    height: 100%;
    padding-top: 35px;

    ._article {
      display: flex;
      // align-items: center;
      flex-direction: column;
      min-width: 950px;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      ._title {
        align-self: center;
        font-size: 18px;
        font-weight: 700;
      }
    }

    .context {
      margin-top: 35px;
    }
  }
</style>

<template>
  <section class="p-4 main">
    <section class="btns">
      <div class="title"> 仲裁指引</div>
      <div class="contain">
        <a-button class="btn" type="primary">单位简介</a-button>
        <a-button class="btn" type="primary">院内导航</a-button>
        <a-button class="btn" type="primary">仲裁人员</a-button>
        <a-button class="btn" type="primary">开庭信息</a-button>
      </div>
    </section>
    <section class="btns">
      <div class="title"> 信息查询</div>
      <div class="contain">
        <a-button class="btn" type="primary">立案流程</a-button>
        <a-button class="btn" type="primary">文书样式</a-button>
        <a-button class="btn" type="primary">法律法规</a-button>
        <a-button class="btn" type="primary">相关机构</a-button>
      </div>
    </section>
    <section class="btns">
      <div class="title"> 便民服务</div>
      <div class="contain">
        <a-button class="btn" type="primary">预约申请</a-button>
        <a-button class="btn" type="primary">扫码申请</a-button>
        <a-button class="btn" type="primary">个人证件</a-button>
        <a-button class="btn" type="primary">企业执照</a-button>
      </div>
    </section>
    <!-- <section>
      <Editor />
    </section> -->
  </section>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  // import Editor from './components/Editor.vue';

  const loading = ref(true);

  setTimeout(() => {
    loading.value = false;
  }, 1500);
</script>
<style lang="less">
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-top: 35px;
    background-image: url('/@/assets/images/bg.jpg');
    background-size: cover;
    color: white;
  }

  .btns {
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    gap: 35px;

    .title {
      display: flex;
      justify-content: center;
      margin-top: 35px;
    }

    .contain {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      gap: 60px;
    }

    .btn {
      height: 60px;
      border-radius: 10rem;
    }
  }
</style>

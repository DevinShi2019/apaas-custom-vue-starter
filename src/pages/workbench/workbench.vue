<!--
 * @Author: keene
 * @Date: 2020-12-11 10:39:55
 * @LastEditTime: 2020-12-11 09:27:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /x-product-workspace/packages/x-project-app/src/pages/workbench/Workbench.vue
-->
<template>
  <div class="workbench">
    <div class="workbench-container">
      我是工作台
    </div>
  </div>
</template>

<script>

export default {
  name: 'Workbench',
  data() {
    return {}
  },
  methods: {
  }
}
</script>

<style lang="scss">
.workbench {
  .workbench-container {
    width: 1100px;
    margin: 16px auto 0 auto;
    height: calc(100vh - 96px);
    overflow-y: auto;
  }
}
</style>

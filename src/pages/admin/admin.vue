<!--
 * @Author: your name
 * @Date: 2020-05-26 10:39:17
 * @LastEditTime: 2020-05-26 10:47:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /x-product-workspace/packages/x-project-app/src/pages/admin/Admin.vue
-->
<template>
  <div class="admin">
    <div class="admin__container">
      <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
.admin {
  height: 100%;
  .admin__container {
    height: 100%;
  }
}
</style>

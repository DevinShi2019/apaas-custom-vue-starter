<template>
  <div class="app-engine-page">
    自开布局页面
    <div>
      {{ $route.fullPath }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="scss">
.app-engine-page {
  background: #fff;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
}
</style>

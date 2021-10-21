<!--
 * @Author: Devin
 * @Date: 2021-07-30 16:50:47
 * @LastEditTime: 2021-07-30 17:03:19
 * @LastEditors: Devin
 * @Description:
 * email: das.devin@outlook.com
-->
<template>
  <x-drawer
    :append-to-body="true"
    :destroy-on-close="true"
    :drawerVisible.sync="visible"
    :wrapper-class="'detail-draw'"
    :title="'自开发详情页'"
    width="calc(50% + 32px)"
    v-on="$listeners"
  >
  </x-drawer>
</template>

<script>
export default {
  name: 'DetailDrawer',
  data() {
    return {
      visible: false
    }
  },
  created() {},
  methods: {
    showDrawer() {
      this.visible = true
    },
    closeDrawer() {
      this.visible = false
    }
  }
}
</script>

<style></style>

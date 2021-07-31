<!--
 * @Author: Devin
 * @Date: 2021-07-30 16:50:47
 * @LastEditTime: 2021-07-31 13:48:51
 * @LastEditors: Devin
 * @Description:
 * email: das.devin@outlook.com
-->
<template>
  <x-modal
    :append-to-body="true"
    :destroy-on-close="true"
    :modalVisible.sync="visible"
    :wrapper-class="'edit-modal'"
    :title="'自开发编辑页'"
    width="calc(50% + 32px)"
    v-on="$listeners"
  >
    <div style="height: 60vh"></div>
  </x-modal>
</template>

<script>
export default {
  name: 'EditModal',
  data() {
    return {
      visible: false
    }
  },
  created() {},
  methods: {
    showModal() {
      this.visible = true
    },
    closeModal() {
      this.visible = false
    }
  }
}
</script>

<style></style>

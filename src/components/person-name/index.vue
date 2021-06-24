<!--
 * @Author: your name
 * @Date: 2020-05-26 17:59:30
 * @LastEditTime: 2020-05-27 18:48:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /x-product-workspace/packages/x-project-app/src/components/person-name/index.vue
-->
<template>
  <div class="person-name">
    <div class="icon">
      {{ displayName }}
    </div>
    <div v-if="showTag" class="real-name">
      {{ name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonName',
  props: {
    name: {
      type: String,
      required: true
    },
    showTag: {
      type: Boolean,
      default: function () {
        return true
      }
    }
  },
  computed: {
    displayName: function () {
      if (this.name) {
        return this.name.slice(this.name.length - 2, this.name.length)
      }
      return ''
    }
  }
}
</script>

<style lang="scss">
.person-name {
  display: flex;
  align-items: center;
  position: relative;
  .icon {
    position: absolute;
    left: -4px;
    padding: 2px;
    @include circleShape(24px);
    @include fontSize(10px);
    background-color: $--app-primary-color;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $--app-light-color;
  }
  .real-name {
    padding: 0 8px;
    height: 24px;
    padding-left: 32px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: $--app-info-color;
  }
}
</style>

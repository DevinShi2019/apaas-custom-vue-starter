<template>
  <div :class="className">
    <span class="base-status-tag__text">{{ status === 'ENABLED' ? enableText : disableText }}</span>
  </div>
</template>

<script>
export default {
  name: 'BaseStatusTag',
  props: {
    status: String,
    enableText: {
      type: String,
      default: '启用'
    },
    disableText: {
      type: String,
      default: '未启用'
    }
  },
  computed: {
    className() {
      return `base-status-tag ${this.status ? 'is-enable' : 'is-disable'}`
    }
  }
}
</script>

<style lang="scss">
.base-status-tag {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 24px;
  border-radius: 12px;
  .base-status-tag__text {
    font-size: $--app-font-size;
    color: $--app-light-color;
  }
  &.is-enable {
    background-color: $--app-active-color;
  }
  &.is-disable {
    background-color: $--app-notice-color;
  }
}
</style>

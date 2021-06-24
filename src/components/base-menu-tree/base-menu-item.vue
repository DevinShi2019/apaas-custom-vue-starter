<template>
  <el-menu-item
    v-bind="$attrs"
    class="base-menu-item"
    v-on="$listeners"
  >
    <x-svg-icon class="base-menu-item__icon" :name="icon"></x-svg-icon>
    <span class="base-menu-item__name">{{ name }}</span>
  </el-menu-item>
</template>

<script>
export default {
  name: 'BaseMenuItem',
  props: {
    icon: String,
    name: String
  }
}
</script>

<style lang="scss">
.el-menu-item.base-menu-item {
  display: flex;
  height: 44px;
  line-height: 44px;
  &.is-active {
    background-color: $--app-selected-color;
  }
  &:hover, &:focus {
    color: $--app-primary-color;
    font-weight: $--app-font-weight;
    background-color: $--app-info-color;
  }
  .base-menu-item__icon {
    margin-right: 12px;
    color: inherit;
  }
  .base-menu-item__name {
    font-size: $--app-title-fontSize;
  }
}
</style>

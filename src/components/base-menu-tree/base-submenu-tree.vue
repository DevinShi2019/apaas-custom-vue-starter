<template>
  <el-submenu
    v-bind="$attrs"
    class="base-submenu-tree"
    v-on="$listeners"
  >
    <template v-slot:title>
      <div class="base-submenu-tree__title">
        <x-svg-icon class="base-submenu-tree__icon" :name="icon"></x-svg-icon>
        <span class="base-submenu-tree__name">{{ name }}</span>
      </div>
    </template>
    <template v-for="menu in menuData">
      <template v-if="menu.children && menu.children.length > 0">
        <base-submenu-tree
          :key="menu.index"
          :index="menu.index"
          :icon="menu.icon"
          :name="menu.name"
          :menuData="menu.children"
          :popper-append-to-body="false"
        ></base-submenu-tree>
      </template>
      <template v-else>
        <base-menu-item
          :key="menu.index"
          :index="menu.index"
          :icon="menu.icon"
          :name="menu.name"
        ></base-menu-item>
      </template>
    </template>
  </el-submenu>
</template>

<script>
import BaseMenuItem from './base-menu-item'

export default {
  name: 'BaseSubmenuTree',
  components: {
    BaseMenuItem
  },
  props: {
    icon: String,
    name: String,
    menuData: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss">
.el-submenu.base-submenu-tree {
  line-height: 44px;
  .el-submenu__title {
    height: 44px;
    line-height: 44px;
  }
  .base-submenu-tree__title {
    display: flex;
    height: 100%;
    .base-submenu-tree__icon {
      margin-right: 12px;
      color: inherit;
    }
    .base-submenu-tree__name {
      font-size: $--app-title-fontSize;
    }
  }
}
</style>

<template>
  <el-menu
    class="base-menu-tree"
    v-bind="$attrs"
    v-on="$listeners"
  >
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
  </el-menu>
</template>

<script>
import BaseSubmenuTree from './base-submenu-tree'
import BaseMenuItem from './base-menu-item'

export default {
  name: 'BaseMenuTree',
  components: {
    BaseMenuItem,
    BaseSubmenuTree
  },
  props: {
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
.el-menu.base-menu-tree {
  border-right: 0;
  padding: 16px 0;
  background-color: $--app-light-color;
  box-shadow: $--app-box-shadow;
  &:not(.el-menu--collapse) {
    width: 220px;
  }
}
</style>

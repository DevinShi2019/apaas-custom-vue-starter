<template>
  <div class="menutree">
    <label v-for="menu in menuData" :key="menu.id">
      <el-submenu v-if="menu.menuType === 'GROUP'" class="menu-item" :index="menu.id">
        <template slot="title">
          <div class="menu-item-div">
            <div
              slot="title"
              class="route-link router-link-parent"
              :class="collapse ? 'route-link-min route-link-min-parent' : 'route-link-max'"
            >
              <template v-if="collapse">
                <el-tooltip effect="dark" :content="menu.menuName" placement="top-start">
                  <x-svg-icon class="menu-icon" :name="menu.menuIcon"></x-svg-icon>
                </el-tooltip>
              </template>
              <template v-else>
                <x-svg-icon class="menu-icon" :name="menu.menuIcon"></x-svg-icon>
              </template>
              <div class="menu-title" :style="{ 'display' : collapse ? 'none' : 'flex' }">
                <x-ellipsis :label="menu.menuName" mode="origin" :max-lines="1"></x-ellipsis>
              </div>
            </div>
          </div>
        </template>
        <label>
          <menu-tree
            class="child-menu"
            :menuData="menu.submenus"
            :isChild="true"
            @click-add-button="showAddModal"
          ></menu-tree>
        </label>
      </el-submenu>
      <el-menu-item v-else class="menu-item" :index="menu.id">
        <div class="menu-item-div" :class="isChild ? 'is-child' : ''">
          <div
            slot="title"
            class="route-link"
            :class="collapse ? 'route-link-min' : 'route-link-max'"
            @click="toRouter(menu)"
          >
            <template v-if="collapse">
              <el-tooltip effect="dark" :content="menu.menuName" placement="top-start">
                <x-svg-icon class="menu-icon" :name="menu.menuIcon"></x-svg-icon>
              </el-tooltip>
            </template>
            <template v-else>
              <x-svg-icon class="menu-icon" :name="menu.menuIcon"></x-svg-icon>
            </template>
            <div class="menu-title" :style="{ 'display' : collapse ? 'none' : 'flex' }">
              <x-ellipsis :label="menu.menuName" mode="origin" :max-lines="1"></x-ellipsis>
            </div>
            <template v-if="menu.menuType === 'MENU' && menu.canAddStatus">
              <div class="add-icon" @click.prevent="clickAddButton($event, menu)">
                <x-svg-icon name="menu-add-form" class="pointer"></x-svg-icon>
              </div>
            </template>
          </div>
        </div>
      </el-menu-item>
    </label>
  </div>
</template>
<script>
import MenuTree from '@/components/menus-tree/index'
export default {
  name: 'MenuTree',
  components: {
    MenuTree
  },
  props: {
    menuData: {
      type: Array,
      default: function() {
        return []
      }
    },
    collapse: {
      type: Boolean,
      default: false
    },
    isChild: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      menu_data: {}
    }
  },
  methods: {
    clickAddButton(event, data) {
      event.stopPropagation()
      this.$emit('click-add-button', data)
    },
    showAddModal(data) {
      this.$emit('click-add-button', data)
    },
    timestamp() {
      return new Date().getTime()
    },
    toRouter(menu) {
      // 路由参数t没有意义，只是为了做点菜单刷新路由的目的，实现的需求是点击当前菜单也刷新页面
      if (menu.menuType === 'MENU') {
        this.$router.push({ name: 'app-page', query: { appId: menu.appId, formId: menu.formId, title: menu.menuName, currentMenu: menu.id, t: this.timestamp() } })
      } else {
        this.$router.push({ name: 'report-page', query: { appId: menu.appId, formId: menu.formId, title: menu.menuName, currentMenu: menu.id, t: this.timestamp() } })
      }
    }
  }
}
</script>
<style lang="scss">
.menutree {
  .el-menu-item {
    padding: 0 !important;
    height: 44px!important;
    line-height: 44px!important;
  }
  .is-child {
    .route-link {
      padding-left: 46px !important;
    }
  }
  .menu-item {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    .menu-item-div {
      width: 100%;
      .el-tooltip {
        justify-content: center;
        align-items: center;
      }
      .router-link-parent {
        padding-left: 0 !important;
      }
      .route-link {
        display: flex;
        align-items: center;
        width: 100%;
        padding-left: 20px;
        padding-right: 40px !important;
        box-sizing: border-box;
        color: unset;
        .add-icon {
          color: $--app-notice-color;
          position: absolute;
          right: 20px;
          display: none;
        }
        .arrow-down-icon {
          .svg-arrow-down-icon {
            position: absolute;
            right: 20px;
            transform: scale(0.81);
            color: $--app-description-color;
          }
        }
      }
      .route-link-min-parent {
        padding-left: 28px !important;
      }
      .route-link-min {
        height: 44px;
        justify-content: center;
        padding-left: 40px;
      }
      .route-link-max {
        height: 44px;
        padding-left: 20px;
      }
      .route-link:hover {
        .add-icon {
          display: block !important;
        }
      }
    }
    .el-menu {
      &.el-menu--inline {
        width: 100% !important;
      }
    }
  }
  .menu-title {
    max-width: 80%;
    margin-left: 12px;
    white-space: normal;
    font-size: $--app-title-fontSize;
    .x-ellipsis {
      max-width: 100%;
      line-height: normal;
    }
  }
  .menu-icon {
    width: 14px;
    height: 14px;
  }
  .x-svg-icon {
    display: flex;
    align-items: center;
  }
  .el-submenu__title {
    width: 100%;
    height: 44px;
    line-height: 44px;
    .el-submenu__icon-arrow {
      right: 26px;
    }
  }
  .child-menu {
    .menu-item {
      padding-left: 24px;
    }
  }
}
</style>

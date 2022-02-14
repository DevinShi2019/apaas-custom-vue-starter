<template>
  <div class="default-layout">
    <base-header>
      <template v-slot:append>
        <div class="app-workbench__icon" @click="toWorkbench">
          <x-svg-icon name="workbench-icon"></x-svg-icon>
        </div>
      </template>
    </base-header>
    <div class="admin__container">
      <div class="admin__menu">
        <base-menu-tree
          :collapse="isCollapse"
          :default-active="defaultActive"
          :menuData="menuData"
          @select="handleSelect"
        ></base-menu-tree>
        <div class="app-menu__switch" @click="handleMenuCollapse">
          <template v-if="isCollapse">
            <x-svg-icon name="arrow-right-icon"></x-svg-icon>
          </template>
          <template v-else>
            <x-svg-icon name="arrow-left-icon"></x-svg-icon>
          </template>
        </div>
      </div>
      <div class="admin__main">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import BaseHeader from '@/components/base-header'
import BaseMenuTree from '@/components/base-menu-tree'
import { mapGetters } from 'vuex'

export default {
  name: 'DefaultLayout',
  components: {
    BaseHeader,
    BaseMenuTree
  },
  data() {
    return {
      defaultActive: '',
      isCollapse: false,
      menuData: [
        {
          index: 'config-manage',
          name: '配置管理',
          icon: 'peizhiguanli',
          children: [
            {
              index: 'main-data-field',
              name: '主数据域管理',
              icon: 'zhushujuyuguanli'
            },
            {
              index: 'org-manage',
              name: '组织管理',
              icon: 'zuzhiguanli'
            },
            {
              index: 'role-manage',
              name: '角色管理',
              icon: 'jiaoseguanli'
            },
            {
              index: 'user-role',
              name: '用户角色',
              icon: 'yonghujiaose'
            },
            {
              index: 'org-access',
              name: '组织访问',
              icon: 'zuzhifangwen'
            },
            {
              index: 'user-manage',
              name: '用户管理',
              icon: 'yonghuguanli'
            }
          ]
        },
        {
          index: 'config-zikaifa',
          name: '自开发',
          icon: 'peizhiguanli',
          children: []
        },
        {
          index: 'config-zikaifa-list-view',
          name: '自开发列表视图',
          icon: 'peizhiguanli',
          children: []
        },
        {
          index: 'app',
          name: '自开发布局',
          icon: 'yonghuguanli'
        }
      ]
    }
  },
  computed: {
    ...mapGetters('menuModule', {
      customMenuList: 'customMenuList',
      customListViewList: 'customListViewList'
    })
  },
  watch: {
    '$route.name': {
      handler(val, oldVal) {
        this.defaultActive = val
      },
      immediate: true
    }
  },
  created() {
    debugger
    this.menuData.forEach((menu) => {
      if (menu.index === 'config-zikaifa') {
        menu.children = [...this.customMenuList]
      }
      if (menu.index === 'config-zikaifa-list-view') {
        menu.children = [...this.customListViewList]
      }
    })
  },
  methods: {
    toWorkbench() {
      this.$router.push({ name: 'workbench' })
    },
    handleSelect(index) {
      if (!index.includes('app-list-view')) {
        this.$router.push({ name: index, query: { t: new Date().getTime() } })
      } else {
        const menuIndex = parseInt(index.replace('app-list-view', ''))
        const menuConfig = this.customListViewList[menuIndex]
        this.$router.push({ name: 'app-list-view', query: { t: new Date().getTime(), componentName: menuConfig.name, renderLogic: menuConfig.renderLogic } })
      }
    },
    handleMenuCollapse() {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="scss" scoped>
.default-layout {
  .admin__container {
    display: flex;
    height: calc(100vh - 64px);
    margin: 0 auto;
    overflow: hidden;
  }
  .admin__menu {
    position: relative;
    z-index: 100;
    .base-menu-tree {
      height: 100%;
    }
  }
  .admin__main {
    flex: 1;
    // padding-left: 20px;
    overflow: hidden;
  }

  .admin-sechma-table__ops {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    .el-dropdown {
      cursor: pointer;
    }
  }
}
</style>

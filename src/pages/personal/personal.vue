<!--
 * @Author: your name
 * @Date: 2020-05-26 18:50:20
 * @LastEditTime: 2020-05-27 15:45:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /x-product-workspace/packages/x-project-app/src/pages/personal/personal.vue
-->
<template>
  <div class="personal">
    <base-header>
      <template v-slot:append>
        <div class="app-workbench__icon" @click="toWorkbench">
          <x-svg-icon name="workbench-icon"></x-svg-icon>
        </div>
      </template>
    </base-header>
    <div class="personal__container">
      <div class="personal__menu">
        <base-menu-tree
          :default-active="defaultActive"
          :menuData="menuData"
          @select="handleSelect"
        ></base-menu-tree>
      </div>
      <div class="personal__main">
        <router-view :key="$route.fullPath"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import BaseHeader from '@/components/base-header'
import BaseMenuTree from '@/components/base-menu-tree'

export default {
  components: {
    BaseHeader,
    BaseMenuTree
  },
  data() {
    return {
      defaultActive: '',
      menuData: [
        {
          index: 'personal-info',
          name: '个人信息',
          icon: 'personal-info'
        },
        {
          index: 'account-security',
          name: '账号安全',
          icon: 'account-security'
        }
      ]
    }
  },
  watch: {
    '$route.name': {
      handler(val, oldVal) {
        this.defaultActive = val
      },
      immediate: true
    }
  },
  methods: {
    toWorkbench() {
      this.$router.push({ name: 'workbench' })
    },
    handleSelect(index) {
      this.$router.push({ name: index, query: { t: new Date().getTime() } })
    }
  }
}
</script>

<style lang="scss">
.personal {
  .personal__container {
    display: flex;
    width: 1100px;
    height: calc(100vh - 104px);
    margin: 20px auto;
    overflow-y: auto;
  }
  .personal__main {
    flex: 1;
    padding-left: 20px;
  }
}
</style>

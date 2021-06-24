<!--
 * @Author: your name
 * @Date: 2020-05-26 10:06:34
 * @LastEditTime: 2020-05-26 17:05:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /x-product-workspace/packages/x-project-app/src/App.vue
-->
<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { SET_USER_INFO } from '@/store/auth.store'

import BlackLayout from '@/layouts/black.layout'
import DefaultLayout from '@/layouts/default.layout'
import NoSidebarLayout from '@/layouts/no-sidebar.layout'

export default {
  components: {
    BlackLayout,
    DefaultLayout,
    NoSidebarLayout
  },
  data() {
    return {
    }
  },
  computed: {
    layout() {
      return this.$route.meta.layout || 'DefaultLayout'
    }
  },
  created() {
    this.setUserInfo({
      'loginName': 'admin',
      'id': '1',
      'phone': '17729389320',
      'email': '17728389320@163.com',
      'enableStatus': 'ENABLED',
      'headPortrait': null,
      'userName': '赵站洋',
      'credentialNo': '110101199003076675',
      'gender': 'male'
    })
  },
  methods: {
    ...mapMutations('authModule', {
      setUserInfo: SET_USER_INFO
    })
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $--app-font-color;
  background-color: $--app-bg-Color;
}
</style>

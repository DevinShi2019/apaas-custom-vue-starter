<template>
  <div class="app-engine-home">
    <component
      :is="layoutComponentName"
      :layoutEngine="layoutEngine"
      @menu-add-click="showAddModal"
    >
      <template v-slot:appPage>
        <keep-alive v-if="keepAliveRouter">
          <router-view
            :key="$route.fullPath"
          ></router-view>
        </keep-alive>
        <router-view
          v-else
          :key="$route.fullPath"
        ></router-view>
      </template>
    </component>
  </div>
</template>
<script>
import { LayoutLogicMixin } from '@x-apaas/x-dcloud-page-engine'
import { getMenuById } from '@x-apaas/x-dcloud-page-engine/lib/page-util'

export default {
  name: 'AppEngineHome',
  mixins: [LayoutLogicMixin],
  data() {
    return {
    }
  },
  computed: {
    menuConfig() {
      return (this.layoutEngine && this.layoutEngine.layoutDataControl && this.layoutEngine.layoutDataControl.menuConfig) || {
        menu: [],
        defaultActive: null,
        menuTreeData: []
      }
    },
    appInfo() {
      return (this.layoutEngine && this.layoutEngine.layoutDataControl && this.layoutEngine.layoutDataControl.appInfo) || {}
    },
    keepAliveRouter() {
      console.log(this.layoutEngine && this.layoutEngine.layoutConfig && this.layoutEngine.layoutConfig.keepAliveRouter)
      return (this.layoutEngine && this.layoutEngine.layoutConfig && this.layoutEngine.layoutConfig.keepAliveRouter) || false
    },
    keepAliveComps() {
      return (this.layoutEngine && this.layoutEngine.layoutConfig && this.layoutEngine.layoutConfig.keepAliveComps) || {}
    }
  },
  created() {
  },
  methods: {
    refreshPage() {
      const currentMenu = getMenuById(
        this.menuConfig.menuTreeData,
        this.$route.query.currentMenu
      )
      this.layoutEngine.actionControl.executeActionWithSync('TO_ROUTER', { currentMenu })
    },
    showAddModal(data) {
      console.log('menu-add-click', data)
      this.$message({
        message: 'menu-add-click',
        type: 'success'
      })
    }
  }
}
</script>
<style lang="scss">
.app-engine-home {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  // .loading-mask {
  //   position: absolute;
  //   width: 100%;
  //   height: 100%;
  //   top: 0px;
  //   bottom: 0;
  //   z-index: 999;
  //   background: #ffffff;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  // }
}
</style>

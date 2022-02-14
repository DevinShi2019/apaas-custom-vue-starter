<template>
  <div ref="appListView" class="app-list-view">
    <div class="title"></div>
    <component
      :is="$route.query.componentName"
      :listEngine="listEngine"
    ></component>
  </div>
</template>
<script>
import { ListLogicMixin } from '@x-apaas/x-dcloud-page-engine'
export default {
  name: 'AppListView',
  mixins: [ListLogicMixin],
  props: {
    queryParams: {
      type: Object,
      default: () => {
        return {
          formId: '62072ccb06768341b0b95fde',
          appId: '255655735302553600',
          tabId: '62072ccb06768341b0b95fe0',
          title: '自开发列表'
        }
      }
    }
  },
  data() {
    return {
      // queryParams: {
      //   formId: '61ad88298b004e5b92275ead',
      //   appId: '255655735302553600',
      //   tabId: '61ad88298b004e5b92275eaf',
      //   title: '项目信息'
      // }
    }
  },
  computed: {
    renderLogic() {
      return this.$route.query.renderLogic
    }
  },
  created() {
    console.log(this.$route)
    this.listEngine.actionControl.registerAction('LIST_CALC_TABLE_HEIGHT', this.calcTableMaxHeight)
  },
  methods: {
    calcTableMaxHeight(engine, event) {
      let calcStatus = false
      try {
        debugger
        const tableConfig = engine.listDataControl.tableConfig
        const searchPanelConfig = engine.listDataControl.searchPanelConfig || {}
        const subHeight = (event && event.subHeight) || (68 + 60 + 20 + 40)
        const appEnginePageDomHeight = this.$refs.appListView.offsetHeight
        const headerDom = engine.actionControl.executeActionWithSync('GET_LIST_HEADER_DOM')
        const searchDom = engine.actionControl.executeActionWithSync('GET_LIST_SEARCH_DOM')
        const listHeaderHeight = (headerDom && headerDom.offsetHeight) || 0
        const listSearchHeight = (searchDom && searchDom.offsetHeight) || 0
        if (searchPanelConfig.retract) {
          tableConfig.maxHeight =
            appEnginePageDomHeight - subHeight - listHeaderHeight
        } else {
          tableConfig.maxHeight =
            appEnginePageDomHeight -
            listHeaderHeight -
            listSearchHeight -
            subHeight
        }
        if (engine.engineContext.instance.viewType === 'TREE_VIEW') {
          tableConfig.maxHeight = tableConfig.maxHeight - 40
        }
        this.$nextTick(() => {
          // 刷新表格列配置
          engine.actionControl.executeActionWithSync('REFRESH_TABLE_COLUMN_CONFIG')
          calcStatus = true
        })
      } catch (e) {
        console.error(e)
      }
      return calcStatus
    }
  }
}
</script>
<style lang="scss">
.app-list-view {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-flow: column;
  position: relative;
  .title {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 56px;
    min-height: 56px;
    background: #ffffff;
    border-bottom: 1px solid #ebeef5;
    overflow: auto;
  }
}
</style>

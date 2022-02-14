import Vue from 'vue'
import { ListEngine, FormEngine } from '@x-apaas/x-dcloud-page-engine'
import CollapseTransition from 'xx-element-ui/lib/transitions/collapse-transition.js'
import {
  XListView,
  XListHeader,
  ListHeaderButton,
  XListTable,
  CustomModule,
  ListPanel,
  ListDesignSearchComponents,
  AdvanceSearchList,
  XListSearch,
  PageHeaderOptDrawer,
  XListHeaderDrawer,
  XHttpBlockTable,
  XTableStatisticalCell
} from '@x-apaas/x-dcloud-page-web'
import apis from '@/api'
import axios from 'axios'

FormEngine.registerGlobalRequest({
  request: Vue.prototype.$request,
  upload: Vue.prototype.$upload,
  cancelToken: axios.CancelToken,
  apis
})

Vue.use(XListView)
Vue.use(XListHeader)
Vue.use(ListHeaderButton)
Vue.use(XListTable)
Vue.use(CustomModule)
Vue.use(ListPanel)
Vue.use(ListDesignSearchComponents)
Vue.use(AdvanceSearchList)
Vue.use(XListSearch)
Vue.use(PageHeaderOptDrawer)
Vue.use(XListHeaderDrawer)
Vue.use(XHttpBlockTable)
Vue.use(XTableStatisticalCell)
Vue.component(CollapseTransition.name, CollapseTransition)

Object.defineProperty(Vue, 'ListEngine', {
  value: ListEngine,
  configurable: false,
  writable: false,
  enumerable: false
})

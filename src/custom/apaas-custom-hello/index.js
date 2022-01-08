import ApaasCustom{{ModuleName}} from './custom-page/page.vue'
import { customFormComponentList } from './custom-component/form-component'
import { widgetConfigList } from './custom-component/form-config'
import ApaasCustomLayout from './custom-layout/custom-layout.vue'

const install = function(Vue, opts) {
  // 安装{{ModuleName}}模块, 此处的和apaas.json定义的路由，必须一致
  Vue.component('apaas-custom-{{moduleName}}', ApaasCustom{{ModuleName}})
  // 安装表单部件
  // 注册自开发表单组件
  if (
    customFormComponentList && Array.isArray(customFormComponentList)
  ) {
    customFormComponentList.forEach((comp) => {
      Vue.component(comp.name, comp)
    })
  }
  // 表单引擎注册自开发组件配置
  if (
    widgetConfigList && Array.isArray(widgetConfigList)
  ) {
    widgetConfigList.forEach((widgetConfig) => {
      const compConfig = {
        widgetConfig
      }
      Vue.FormEngine && Vue.FormEngine.registerCustomComponentConfig(compConfig)
    })
  }

  // 安装自定义布局组件
  // 注册自定义布局组件
  if (Vue.LayoutEngine) {
    const layoutEngine = Vue.LayoutEngine.getInstance(Vue.LayoutEngine.currentLayoutId)
    layoutEngine.registerLayoutComponent(ApaasCustomLayout)
    // 开启路由缓存
    layoutEngine.layoutConfig.keepAliveRouter = true
  }
}

const {{ModuleName}}CustomPlugin = {
  install: install
}

export default {{ModuleName}}CustomPlugin

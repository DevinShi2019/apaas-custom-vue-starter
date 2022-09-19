import ApaasCustom{{ModuleName}} from './custom-page/page.vue'
import { customFormComponentList, customFormConfigList } from './custom-component/form-component'
import { widgetConfigList, editorConfigList } from './custom-component/form-config'

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
  // 注册自开发组件配置
  if (
    customFormConfigList && Array.isArray(customFormConfigList)
  ) {
    customFormConfigList.forEach((comp) => {
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
      // 如果自开发组件要注册到自开发组件分组里，使用如下代码
      // Vue.FormEngine && Vue.FormEngine.registerCustomGroupWidgetConfig(compConfig)
    })
  }

  // 表单引擎注册自开发组件配置
  if (
    editorConfigList && Array.isArray(editorConfigList)
  ) {
    editorConfigList.forEach((editorConfig) => {
      Vue.FormEngine && Vue.FormEngine.registerCustomEditorConfig(editorConfig)
    })
  }
}

const {{ModuleName}}CustomPlugin = {
  install: install
}

export default {{ModuleName}}CustomPlugin

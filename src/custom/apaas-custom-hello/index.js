import ApaasCustom{{ModuleName}} from './page.vue'

const install = function(Vue, opts) {
  // 安装{{ModuleName}}模块, 此处的和apaas.json定义的路由，必须一致
  Vue.component('apaas-custom-{{moduleName}}', ApaasCustom{{ModuleName}})
  // 安装组件
}

const {{ModuleName}}CustomPlugin = {
  install: install
}

export default {{ModuleName}}CustomPlugin

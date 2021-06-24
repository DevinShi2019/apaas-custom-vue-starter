import Hello from './hello.vue'

const install = function(Vue, opts) {
  // 安装Hello模块, 此处的和apaas.json定义的路由，必须一致
  Vue.component('apaas-custom-hello', Hello)
  // 安装组件
}

const HelloCustomPlugin = {
  install: install
}

export default HelloCustomPlugin

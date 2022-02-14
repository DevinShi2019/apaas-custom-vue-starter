import CustomListViewDemo from './custom-list/custom-list-view.vue'

const install = function(Vue, opts) {
  Vue.component('apaas-custom-list-view-demo', CustomListViewDemo)
}

const ListDemoCustomPlugin = {
  install: install
}

export default ListDemoCustomPlugin

export const ADD_CUSTOM_MENU_ROUTER = 'ADD_CUSTOM_MENU_ROUTER'
export const ADD_CUSTOM_LIST_VIEW_ROUTER = 'ADD_CUSTOM_LIST_VIEW_ROUTER'

export const menuStore = {
  namespaced: true,
  state: {
    customMenuMap: {},
    customListViewMap: {}
  },
  mutations: {
    [ADD_CUSTOM_MENU_ROUTER](state, routerConfig) {
      state.customMenuMap[routerConfig.name] = {
        index: routerConfig.name,
        name: (routerConfig.meta && routerConfig.meta.title) || '自开发菜单',
        icon: 'peizhiguanli'
      }
    },
    [ADD_CUSTOM_LIST_VIEW_ROUTER](state, routerConfig) {
      state.customListViewMap[routerConfig.name] = {
        ...routerConfig,
        index: routerConfig.name,
        name: (routerConfig.meta && routerConfig.meta.title) || '自开发列表视图',
        // name: '自开发列表视图',
        icon: 'peizhiguanli'
      }
    }
  },
  actions: {},
  getters: {
    customMenuList: (state) => {
      return Object.values(state.customMenuMap)
    },
    customListViewList: (state) => {
      return Object.values(state.customListViewMap)
    }
  }
}

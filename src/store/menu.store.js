export const ADD_CUSTOM_MENU_ROUTER = 'ADD_CUSTOM_MENU_ROUTER'

export const menuStore = {
  namespaced: true,
  state: {
    customMenuMap: {}
  },
  mutations: {
    [ADD_CUSTOM_MENU_ROUTER](state, routerConfig) {
      state.customMenuMap[routerConfig.name] = {
        index: routerConfig.name,
        name: (routerConfig.meta && routerConfig.meta.title) || '自开发菜单',
        icon: 'peizhiguanli'
      }
    }
  },
  actions: {},
  getters: {
    customMenuList: (state) => {
      return Object.values(state.customMenuMap)
    }
  }
}

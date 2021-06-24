/*
 * @Author: your name
 * @Date: 2020-05-30 15:57:57
 * @LastEditTime: 2020-06-11 16:48:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /x-product-workspace/packages/x-project-app/src/store/auth.store.js
 */
export const SET_CURRENT_ORG = 'SET_CURRENT_ORG'
export const CLEAR_TENANT_STORE = 'CLEAR_TENANT_STORE'
// export const SET_CURRENT_DEPARTMENT = 'SET_CURRENT_DEPARTMENT'
export const SET_ONLINE_STATUS = 'SET_ONLINE_STATUS'
export const SET_DAPTENAT_VERSION = 'SET_DAPTENAT_VERSION'

export const tenantStore = {
  namespaced: true,
  state: {
    isOnLine: true,
    currentOrg: {},
    department: {},
    xdaptenantversion: ''
  },
  mutations: {
    [SET_CURRENT_ORG](state, org) {
      state.currentOrg = org
    },
    [CLEAR_TENANT_STORE](state) {
      if (!state.isOnLine) {
        state.currentOrg = {}
        state.department = {}
      }
    },
    // [SET_CURRENT_DEPARTMENT](state, department) {
    //   state.department = department || {}
    // },
    [SET_ONLINE_STATUS](state, status) {
      state.isOnLine = status
    },
    [SET_DAPTENAT_VERSION](state, id) {
      state.xdaptenantversion = id || ''
    }
  },
  actions: {},
  getters: {}
}

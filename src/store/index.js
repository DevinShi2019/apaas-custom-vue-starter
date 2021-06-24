import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import { authStore } from './auth.store'
import { themeStore } from './theme.store'
import { tenantStore } from './tenant.store'
import { menuStore } from './menu.store'

const keyPrefix = '__vuex__'

const vuexLocal = new VuexPersistence({
  key: `${keyPrefix}local`,
  storage: window.localStorage,
  modules: ['authModule'], // only save user module
  filter: mutation => {
    return true
  }
})

const vuexSession = new VuexPersistence({
  key: `${keyPrefix}session`,
  storage: window.sessionStorage,
  modules: ['themeModule', 'tenantModule', 'menuModule'], // only save user module
  filter: mutation => {
    return true
  }
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    authModule: authStore,
    tenantModule: tenantStore,
    themeModule: themeStore,
    menuModule: menuStore
  },
  plugins: [vuexLocal.plugin, vuexSession.plugin]
})

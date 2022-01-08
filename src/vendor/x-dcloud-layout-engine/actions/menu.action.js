import router from '@/router'
// import store from '@/store'
// import { CLEAR_AUTH_STORE } from '@/store/auth.store.js'
// import { CLEAR_ADMIN_STORE } from '@/store/admin.store.js'
import Vue from 'vue'
// import apis from '@/api'
// import { getSsoLogoutUrl } from '@/vendor/sso.config.js'
// import { ExtensionEngine } from 'x-extension'
// import i18n from '@/locale'
export const GLOABL_MENU_ACTION = {
  TO_ROUTER: (engine, event) => {
    debugger
    const { menu } = event
    let needRefresh = true
    if (engine.layoutConfig.keepAliveRouter) {
      engine.addKeepAliveComps(menu)
      needRefresh = false
    }
    // 路由参数t没有意义，只是为了做点菜单刷新路由的目的，实现的需求是点击当前菜单也刷新页面
    if (menu.menuType === 'MENU' || menu.menuType === 'MODEL' || menu.menuType === 'QUOTE') {
      router.push({
        name: 'app-page',
        query: {
          appId: menu.appId,
          formId: menu.formId,
          title: menu.menuName,
          currentMenu: menu.id,
          t: needRefresh ? timestamp() : undefined
        }
      })
    } else if (menu.menuType === 'TODO_MANAGE') {
      router.push({
        name: 'todo-manage-page',
        query: {
          appId: menu.appId,
          title: menu.menuName,
          currentMenu: menu.id,
          t: needRefresh ? timestamp() : undefined
        }
      })
    } else if (menu.menuType === 'TODO') {
      router.push({
        name: 'todo-page',
        query: {
          appId: menu.appId,
          title: menu.menuName,
          currentMenu: menu.id,
          t: needRefresh ? timestamp() : undefined
        }
      })
    } else if (menu.menuType === 'TO_CHECK') {
      router.push({
        name: 'toread-page',
        query: {
          appId: menu.appId,
          title: menu.menuName,
          currentMenu: menu.id,
          t: needRefresh ? timestamp() : undefined
        }
      })
    } else if (menu.menuType === 'PROC_AUTH') {
      router.push({
        name: 'process-authorize-page',
        query: {
          appId: menu.appId,
          title: menu.menuName,
          currentMenu: menu.id,
          t: needRefresh ? timestamp() : undefined
        }
      })
    } else if (menu.menuType === 'MY_SUBMIT') {
      router.push({
        name: 'mysubmit-page',
        query: {
          appId: menu.appId,
          title: menu.menuName,
          currentMenu: menu.id,
          t: needRefresh ? timestamp() : undefined
        }
      })
    } else if (menu.menuType === 'MY_PARTICIPATE') {
      router.push({
        name: 'todoed-page',
        query: {
          appId: menu.appId,
          title: menu.menuName,
          currentMenu: menu.id,
          t: needRefresh ? timestamp() : undefined
        }
      })
    } else if (menu.menuType === 'EXTERNAL_LINK') {
      if (menu.newWindowStatus === 'ENABLE') {
        window.open(menu.linkUrl, '_blank')
      } else {
        router.push({
          name: 'external-page',
          query: {
            appId: menu.appId,
            url: menu.linkUrl,
            title: menu.menuName,
            currentMenu: menu.id,
            newWindowStatus: menu.newWindowStatus,
            t: needRefresh ? timestamp() : undefined
          }
        })
      }
    } else if (menu.menuType === 'CUSTOM') {
      router.push({
        name: 'custom-page',
        query: {
          appId: menu.appId,
          url: menu.linkUrl,
          title: menu.menuName,
          currentMenu: menu.id,
          t: needRefresh ? timestamp() : undefined
        },
        params: {
          orgId: engine.engineContext.queryParams.tenantId,
          customPath: menu.linkUrl
        }
      })
    } else if (menu.menuType === 'MENU_TYPE_COMBINE') {
      router.push({
        name: 'combine-page',
        query: {
          appId: menu.appId,
          formId: menu.formId,
          title: menu.menuName,
          currentMenu: menu.id,
          t: needRefresh ? timestamp() : undefined
        }
      })
    } else {
      router.push({
        name: 'report-page',
        query: {
          appId: menu.appId,
          formId: menu.formId,
          title: menu.menuName,
          currentMenu: menu.id,
          t: needRefresh ? timestamp() : undefined
        }
      })
    }
  },
  OPEN_CURRENT_FORM_DETAIL: (engine, event) => {
    const { routeQuery } = event
    const queryParam = Vue.prototype.$lodash.cloneDeep(routeQuery)
    if (queryParam.documentId) {
      Vue.prototype.$formDataOptEvent.showModalWithFormParam({
        formId: queryParam.formId,
        rowDocumentId: queryParam.documentId,
        title: '',
        type: 'DETAIL_FORM',
        remoteParams: true,
        innerType: queryParam.innerType,
        callback: (key, proxy) => {
          if (
            proxy.proxyEvent === 'DO_APPROVE' ||
            proxy.proxyEvent === 'DO_REJECT' ||
            proxy.proxyEvent === 'DO_WITHDRAW' ||
            proxy.proxyEvent === 'DO_RESTART' ||
            proxy.proxyEvent === 'DO_DELETE' ||
            proxy.proxyEvent === 'DO_INQUIRE' ||
            proxy.proxyEvent === 'DO_REASSIGN' ||
            proxy.proxyEvent === 'DO_ADDONE' ||
            proxy.proxyEvent === 'DO_REPLY'
          ) {
            Vue.prototype.$formDataOptEvent.destroyEditModalWithKey(key)
          }
        }
      })
    }
  },
  GO_LOGOUT: (engine, event) => {
    console.log(event)
    Vue.prototype.$message({
      message: '点击退出登录',
      type: 'success'
    })
    // Vue.prototype.$modalOptEvent.showGlobalModal({
    //   visible: true,
    //   title: i18n.t('theHeader.personal.logout'),
    //   message: i18n.t('theHeader.personal.confirmLogout'),
    //   okConfig: {
    //     title: i18n.t('common.confirm'),
    //     onOk: () => {
    //       const isSingleApp = ExtensionEngine.getInstance().validateBlock('SINGLE_APP', 'SingleAppConfig')
    //       if (Vue.GLOBAL_ENV.VUE_APP_NEED_SSO === 'ENABLE') {
    //         try {
    //           // 清空vuex数据
    //           store.commit(`authModule/${CLEAR_AUTH_STORE}`)
    //           store.commit(`authModule/${CLEAR_ADMIN_STORE}`)
    //         } catch (error) {
    //           console.error(error)
    //         }
    //         window.location.replace(getSsoLogoutUrl())
    //       } else {
    //         if (!isSingleApp) {
    //           const request = { ...apis.SING_OUT }
    //           Vue.prototype.$request(request)
    //             .asyncThen(
    //               (resp) => {},
    //               (error) => {
    //                 console.error(error)
    //               }
    //             )
    //             .asyncErrorCatch((error) => {
    //               console.error(error)
    //             })
    //         }
    //         try {
    //           // 清空vuex数据
    //           store.commit(`authModule/${CLEAR_AUTH_STORE}`)
    //           store.commit(`authModule/${CLEAR_ADMIN_STORE}`)

    //           if (isSingleApp) {
    //             router.replace({
    //               path: Vue.GLOBAL_ENV.VUE_APP_DEFAULT_LOGOUT_URL
    //             })
    //           }
    //         } catch (error) {
    //           console.error(error)
    //         }
    //       }
    //       return false
    //     }
    //   },
    //   cancelConfig: {
    //     title: i18n.t('common.cancel')
    //   }
    // })
  },
  FILTER_TREE: (engine, event) => {
    const { value, menuTreeData } = event
    return filterTree(value, menuTreeData)
  }
}

function timestamp() {
  return new Date().getTime()
}

function filterTree (val, arr) {
  if (val === '') return arr
  let newArr = []
  arr.forEach(item => {
    if (String(item.menuName).toLowerCase().indexOf(val.toLowerCase()) > -1) {
      newArr.push(item)
    } else {
      if (item.submenus && item.submenus.length > 0) {
        let list = filterTree(val, item.submenus)
        if (list.length > 0) {
          let obj = {
            ...item,
            submenus: list
          }
          newArr.push(obj)
        }
      }
    }
  })
  return newArr
}

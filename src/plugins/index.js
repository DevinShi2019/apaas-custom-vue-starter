import Vue from 'vue'

import XDateFormatPlugin from './dayjs/x-date-format'
import XLodashPlugin from './lodash/x-lodash'
import XBomeventPlugin from './bomevent/x-bomevent'
import XRequestPlugin from './request/x-request'

import { SET_TOKEN } from '../store/auth.store'
import store from '../store'

const plugins = [XDateFormatPlugin, XLodashPlugin, XBomeventPlugin]

plugins.forEach((plugin) => {
  Vue.use(plugin)
})

Vue.use(XRequestPlugin, {
  baseURL: process.env.VUE_APP_BASE_DOMAIN,
  headers: {
    'Accept-Language': 'zh-CN'
  },
  needShowMessage: true,
  businessErrorCatch: function(failRes, response, needShowMessage) {
    // 通用业务错误处理
    // console.log(failRes, response, needShowMessage)
    if (failRes.code === 'error' && needShowMessage) {
      Vue.prototype.$message({
        message: failRes.message,
        type: 'error'
      })
    }
  },
  errorCatch: function(err, needShowMessage) {
    console.error(err)
  }
})

// 添加request拦截器
Vue.addInterceptorsRequest('REQUEST_PARAMS_INTERCEPTOR', (e) => {
  e.headers['xdaptimestamp'] = new Date().getTime()

  const authStore = store.state.authModule
  if (authStore.token) {
    e.headers['xdaptoken'] = authStore.token
  }
  e.headers['xdaptenantid'] = process.env.VUE_APP_TENANT_ID

  return e
})

// 添加response拦截器
Vue.addInterceptorsResponse('RESPONSE_SUCCESS_MSG_INTERCEPTOR', (e) => {
  const token = e && e.headers && e.headers.xdaptoken
  if (token) {
    store.commit(`authModule/${SET_TOKEN}`, token)
  }
  if (e && e.status === 200 && e.data.code === 'ok' && !e.config.disableSuccessMsg) {
    if (e.data.interval) {
      Vue.prototype.$message({
        message: e.data.message,
        type: 'success',
        durationTime: e.data.interval
      })
    } else {
      Vue.prototype.$message({
        message: e.data.message,
        type: 'success'
      })
    }
  }
  return e
})

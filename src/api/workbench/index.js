/*
 * @Author: your name
 * @Date: 2020-05-30 16:15:05
 * LastEditTime: 2020-09-22 11:11:01
 * LastEditors: Mosuzi
 * @Description: In User Settings Edit
 * @FilePath: /x-product-workspace/packages/x-project-app/src/api/workbench/index.js
 */
export default {
  QUERY_MY_TENANT_LIST: {
    url: '/xdap-admin/tenant/query/myTenantList',
    method: 'get',
    disableSuccessMsg: true
  },
  // 查询首页应用
  QUERY_HOME_LIST: {
    url: '/xdap-app/app/query/workspaceHome',
    method: 'get',
    disableSuccessMsg: true
  },
  QUERY_TENANT_LIST_BY_USER: {
    url: '/xdap-admin/tenant/query/tenantListByUser',
    method: 'get',
    disableSuccessMsg: true
  },
  QUERY_USER_TENANT_INFO: {
    url: '/xdap-admin/tenant/query/userTenantInfo',
    method: 'get',
    disableSuccessMsg: true
  },
  USER_APP_CONFIG_UPDATE: {
    url: '/xdap-app/user/config/update',
    method: 'post',
    disableSuccessMsg: true
  }
}

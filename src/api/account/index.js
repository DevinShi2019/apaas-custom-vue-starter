/*
 * @Author: your name
 * @Date: 2020-05-30 16:05:14
 * @LastEditTime: 2020-05-30 19:20:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /x-product-workspace/packages/x-project-app/src/api/account/index.js
 */
export default {
  'USER_LOGIN': { // 用户登录
    url: '/xdap-admin/user/login',
    method: 'post'
  },
  'USER_REGISTER': { // 用户注册
    url: '/xdap-admin/user/register',
    method: 'post'
  },
  'USER_MODIFY_PASSWORD_BY_PHONE': { // 通过手机号修改密码
    url: '/xdap-admin/user/find/password',
    method: 'post'
  },
  'CREATE_ORG': { // 创建组织
    url: '/xdap-admin/tenant/add/newTenant',
    method: 'post'
  },
  'JOIN_ORG': {
    url: '/xdap-admin/tenant/join/tenant',
    method: 'get'
  },
  'SING_OUT': {
    url: '/xdap-admin/user/signOut',
    method: 'get'
  },
  'UPDATE_USER_PHONE': {
    url: '/xdap-admin/user/update/userPhone',
    method: 'post'
  },
  'UPDATE_USER_EMAIL': {
    url: '/xdap-admin/user/update/userEmail',
    method: 'post'
  },
  'IS_BELONG_TO_TENANT': {
    url: '/xdap-admin/tenant/query/isBelongToTenant',
    method: 'get'
  }
}

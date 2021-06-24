/*
 * @Author: your name
 * @Date: 2020-05-30 10:07:21
 * @LastEditTime: 2020-06-06 12:27:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /x-product-workspace/packages/x-project-app/src/api/personal-center/index.js
 */
export default {
  QUERY_USER_INFO: {
    url: '/xdap-admin/user/query/userInfo',
    method: 'post',
    disableSuccessMsg: true
  },
  UPDATE_USER_INFO: {
    url: '/xdap-admin/user/update/userInfo',
    method: 'post'
  },
  QUERY_ACCOUNT_INFO: {
    url: '/xdap-admin/user/query/accountInfo',
    method: 'get',
    disableSuccessMsg: true
  },
  // 查询用户绑定第三方账号信息
  QUERY_ACCOUNT_BIND: {
    url: '/xdap-admin/user/query/userBind',
    method: 'get',
    disableSuccessMsg: true
  },
  QUIT_TENANT: {
    url: '/xdap-admin/tenant/quit/tenant',
    method: 'post'
  },
  UPDATE_USER_PASSWORD: {
    url: '/xdap-admin/user/update/userPassword',
    method: 'post'
  },
  UPLOAD_USER_AVATAR: {
    url: '/xdap-admin/user/upload/userAvatar',
    method: 'post',
    disableSuccessMsg: true
  },
  // 绑定微信
  BIND_OPNE_WECHAT: {
    url: '/xdap-admin/user/bind/openWechat',
    method: 'post'
  },
  // 解绑第三方账号
  UNBIND_THIRD_PLATFORM: {
    url: '/xdap-admin/user/unbind/userThirdPlatform',
    method: 'post'
  }
}

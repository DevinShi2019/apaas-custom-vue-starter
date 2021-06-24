/*
 * @Author: your name
 * @Date: 2020-05-30 16:05:14
 * @LastEditTime: 2020-05-30 20:13:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /x-product-workspace/packages/x-project-app/src/api/common.js
 */
export default {
  'SEND_PHONE_CODE': { // 发送手机验证码
    url: '/xdap-admin/user/send/smsCode',
    method: 'post'
  },
  'SEND_EMAIL_CODE': { // 发送邮箱验证码
    url: '/xdap-admin/user/send/emailCode',
    method: 'post'
  },
  // 切换租户保存租户信息
  'SAVE_ORG_ID_BY_CHANGE': {
    url: '/xdap-admin/tenant/switch/tenant',
    method: 'post',
    disableSuccessMsg: true
  }
}

export default {
  // 获取组织列表
  QUERY_ORG_LIST_BY_NAME: {
    url: '/xdap-app/department/query/departmentListByName',
    method: 'post',
    disableSuccessMsg: true
  },
  // 组织树
  QUERY_ORG_TREE: {
    url: '/xdap-app/department/query/departmentTree',
    method: 'post',
    disableSuccessMsg: true
  },
  // 新增部门
  ADD_AND_EDIT_ORG: {
    url: '/xdap-app/department/edit/department',
    method: 'post'
  },
  // 删除部门
  DELETE_ORG: {
    url: '/xdap-app/department/remove/department',
    method: 'post'
  },
  // 根据节点查询成员
  QUERY_MEMBER_BY_ORG_ID: {
    url: '/xdap-app/department/query/departmentMembers',
    method: 'post',
    disableSuccessMsg: true
  },
  QUERY_ALL_MEMBER_BY_ORG_ID: {
    url: '/xdap-app/department/queryAll/departmentMembers',
    method: 'post',
    disableSuccessMsg: true
  },
  // 上级部门值列表
  QUERY_DEPARTMENT_LIST: {
    url: '/xdap-app/department/query/departmentList',
    method: 'post',
    disableSuccessMsg: true
  },
  // 人员移出部门
  REMOVE_USER_FORM_ORG: {
    url: '/xdap-app/department/remove/departmentMember',
    method: 'post'
  },
  // 批量移出zu
  ALL_REMOVE_USER_FORM_ORG: {
    url: '/xdap-app/department/batchRemove/departmentMember',
    method: 'post'
  },
  // 人员移出组织
  REMOVE_USER_FORM_TENANT: {
    url: '/xdap-app/department/remove/tenantMember',
    method: 'post'
  },
  // 批量移出组织
  ALL_REMOVE_USER_FORM_TENANT: {
    url: '/xdap-app/department/batchRemove/tenantMember',
    method: 'post'
  },
  // 修改在职/离职
  CHANGE_WORK_STATUS: {
    url: '/xdap-app/department/update/memberWorkStatus',
    method: 'post'
  },
  // 批量修改在职/离职
  ALL_CHANGE_WORK_STATUS: {
    url: '/xdap-app/department/batchUpdate/memberWorkStatus',
    method: 'post'
  },
  // 邀请部分接口
  QUERY_DATA_INVITE: {
    url: '/xdap-app/invitation/get/invitationCodeInfo',
    method: 'post',
    disableSuccessMsg: true
  },
  // 重新生成邀请码
  RELOAD_DATA_INVITE: {
    url: '/xdap-app/invitation/generate/invitationCode',
    method: 'post'
  },
  SAVE_INVITE_CONFIG: {
    url: '/xdap-app/invitation/modify/invitationCode',
    method: 'post',
    disableSuccessMsg: true
  },
  // 设置是否启用邀请码
  SHOW_INVITE_BY_STATUS: {
    url: '/xdap-app/invitation/update/invitationCodeStatus',
    method: 'post',
    disableSuccessMsg: true
  },
  // 组织树拖拽
  TREE_NODE_MOVE: {
    url: '/xdap-app/department/queue/departmentTree',
    method: 'post',
    disableSuccessMsg: true
  },
  // 获取待审核条数
  GET_AUDIT_COUNT: {
    url: '/xdap-app/invitation/count/approvingUsers',
    method: 'post',
    disableSuccessMsg: true
  },
  // 获取待审核成员信息
  QUERY_AUDIT_TABLE_DATA: {
    url: '/xdap-app/invitation/query/approvingUsers',
    method: 'post',
    disableSuccessMsg: true
  },
  // 拒绝
  REFUSE_ADD_USER: {
    url: '/xdap-app/invitation/refuse/approvingUser',
    method: 'post'
  },
  // 同意
  AGREE_ADD_USER: {
    url: '/xdap-app/invitation/agree/approvingUser',
    method: 'post'
  },
  // 批量同意
  ALL_AGREE_ADD_USER: {
    url: '/xdap-app/invitation/batchAgree/approvingUser',
    method: 'post'
  },
  // 批量拒绝
  ALL_REFUSE_ADD_USER: {
    url: '/xdap-app/invitation/batchRefuse/approvingUser',
    method: 'post'
  },
  // 编辑成员信息
  EDIT_USER_DATA: {
    url: '/xdap-app/department/update/memberInfo',
    method: 'post'
  },
  DEPARTMENT_ADD_USERS: {
    url: '/xdap-app/department/add/departmentMember',
    method: 'post'
  },
  // 查询短信条数
  QUERY_SMS_DATA_LIST: {
    url: '/xdap-app/noticeHistory/query/smsLogHistoryList',
    method: 'post',
    disableSuccessMsg: true
  },
  // 查询邮件发送记录
  QUERY_EMAIL_DATA_LIST: {
    url: '/xdap-app/noticeHistory/query/emailLogHistoryList',
    method: 'post',
    disableSuccessMsg: true
  },
  // 导出短信发送记录
  EXPORT_LIST_SMS_DATA: {
    url: '/xdap-app/noticeHistory/export/smsLogHistory',
    method: 'get'
  },
  // 导出邮件发送记录
  EXPORT_LIST_EMAIL_DATA: {
    url: '/xdap-app/noticeHistory/export/emailLogHistory',
    method: 'get'
  },
  // 员工工作的转交
  TRANSFER_USER_WORK: {
    url: '/xdap-app/work/update/workTransfer',
    method: 'post'
  }
}

/**
 * @Author: your name
 * @Date: 2020-06-12 12:19:21
 * @LastEditTime: 2020-06-13 17:19:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /x-project-app/src/api/app-page/index.js
 */
export default {
  QUERY_LIST_PAGE_CONFIG_BY_ID: {
    url: '/xdap-app/form/query/listPageConfigById',
    method: 'get',
    disableSuccessMsg: true
  },
  QUERY_LIST_PAGE_CONFIG_BY_TAB_ID: {
    url: '/xdap-app/form/query/listPageViewDetail',
    method: 'get',
    disableSuccessMsg: true
  },
  QUERY_LIST_BUSINESS_DATA: {
    url: '/xdap-app/business/query/listPageBusinessData',
    method: 'post',
    disableSuccessMsg: true
  },
  QUERY_CALC_LIST_BUSINESS_DATA: {
    url: '/xdap-app/business/query/virtualBusinessData',
    method: 'post',
    disableSuccessMsg: true
  },
  QUERY_LIST_PAGE_BUTTON: {
    url: '/xdap-app/form/query/listPageButton',
    method: 'get',
    disableSuccessMsg: true
  },
  // 数据导出
  EXPORT_LIST_TO_EXCEL: {
    url: 'xdap-app/excel/export/excelData',
    method: 'post',
    disableSuccessMsg: true
  },
  // 统计接口
  STATISTICAL_TABLE: {
    url: '/xdap-app/business/query/calAggregate',
    method: 'post',
    disableSuccessMsg: true
  },
  // 数据导入下载模板接口
  EXPORT_TEMPLATE_TO_EXCEL: {
    url: '/xdap-app/excel/export/excelTemplate',
    method: 'get',
    disableSuccessMsg: true
  },
  // 数据导入上传接口
  IMPORT_EXCEL_DATA: {
    url: '/xdap-app/excel/importExcelData',
    method: 'post',
    disableSuccessMsg: true
  },
  // 异常数据查询
  EXCEL_IMPORT_LOGS: {
    url: '/xdap-app/excel/query/excelImportLogs',
    method: 'get',
    disableSuccessMsg: true
  },
  ADD_MENU_COLLECT: {
    url: '/xdap-app/menu/add/star',
    method: 'post'
  },
  REMOVE_MENU_COLLECT: {
    url: '/xdap-app/menu/remove/star',
    method: 'post'
  },
  HAS_MENU_COLLECT: {
    url: '/xdap-app/menu/has/menuStar',
    method: 'post',
    disableSuccessMsg: true
  },
  // 批量删除接口
  BATCH_DELETE_DATA: {
    url: '/xdap-app/business/delete/batchDocument',
    method: 'post',
    timeout: 1000 * 60 * 1
  },
  // 批量同意接口
  BATCH_AGREE_DATA: {
    url: '/xdap-app/process/batch/approve',
    method: 'post',
    timeout: 1000 * 600 * 1
  },
  // 批量拒绝接口
  BATCH_REJECT_DATA: {
    url: '/xdap-app/process/batch/reject',
    method: 'post',
    timeout: 1000 * 600 * 1
  },
  QUERY_STATISTICS_VALUE_COLUME: {
    url: '/xdap-app/business/query/dataStatisticValue',
    method: 'post',
    disableSuccessMsg: true
  },
  QUERY_TREE_VIEW_TREE_NODE: {
    url: '/xdap-app/business/query/treeNodeBusinessData',
    method: 'post',
    disableSuccessMsg: true
  },
  QUERY_TREE_VIEW_TREE_TABLE_DATA: {
    url: '/xdap-app/business/query/childNodeListBusinessData',
    method: 'post',
    disableSuccessMsg: true
  },
  QUERY_OPERATION_COLUMN: {
    url: '/xdap-app/form/query/listButton',
    method: 'post',
    disableSuccessMsg: true
  },
  // 查询聚合表列表配置
  QUERY_COMBINE_LIST_PAGE_VIEW: {
    url: '/xdap-app/query/combineListPageView',
    method: 'get',
    disableSuccessMsg: true
  },
  // 聚合表查询数据接口
  QUERY_COMBINE_LIST_BUSINESSDATA: {
    url: '/xdap-app/query/queryCombineListBusinessData',
    method: 'post',
    disableSuccessMsg: true
  },
  // 查询聚合表组件
  QUERY_COMBINE_COMPONENT: {
    url: '/xdap-app/query/combineComponent',
    method: 'post',
    disableSuccessMsg: true
  },
  // 聚合表按钮查询
  QUERY_COMBINE_LISTBUTTON: {
    url: '/xdap-app/query/combineListButton',
    method: 'get',
    disableSuccessMsg: true
  },
  QUERY_ADVANCE_SEARCH: {
    url: '/xdap-app/dataFilter/query/dataFilter',
    method: 'get',
    disableSuccessMsg: true
  },
  // * 新的表单字段查询接口
  QUERY_FORM_FIELD_ALL_IN_ONE: {
    url: '/xdap-app/form/query/formComponent',
    method: 'post',
    disableSuccessMsg: true
  },
}

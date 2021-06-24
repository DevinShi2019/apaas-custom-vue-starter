/*
 * @Author: your name
 * @Date: 2020-05-30 09:41:36
 * LastEditTime: 2020-09-18 10:10:08
 * LastEditors: Mosuzi
 * @Description: In User Settings Edit
 * @FilePath: /x-product-workspace/packages/x-project-app/src/api/index.js
 */
import CommonApi from './common'
import AccountApi from './account'
import AdminApi from './admin'
import PersonalApi from './personal'
import WorkbenchApi from './workbench'

export default {
  ...CommonApi,
  ...AccountApi,
  ...AdminApi,
  ...PersonalApi,
  ...WorkbenchApi
}

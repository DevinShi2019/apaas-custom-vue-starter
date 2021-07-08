/*
 * @Author: your name
 * @Date: 2021-07-06 12:00:52
 * @LastEditTime: 2021-07-08 16:06:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /apaas-custom-vue-starter/src/custom/apaas-custom-hello/form-components/form-widget/index.js
 */
import ideFormComponentList from './ide'
import editFormComponentList from './edit'
import readFormComponentList from './read'

const customFormComponentList = [
  ...ideFormComponentList,
  ...editFormComponentList,
  ...readFormComponentList
]

export default customFormComponentList

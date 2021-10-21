/*
 * @Author: Devin
 * @Date: 2021-07-29 11:57:53
 * @LastEditTime: 2021-07-29 16:50:01
 * @LastEditors: Devin
 * @Description: 
 * email: das.devin@outlook.com
 */
/*
 * @Author: your name
 * @Date: 2020-05-29 12:07:07
 * @LastEditTime: 2021-07-06 19:28:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \x-project-app\src\vendor\x-lib-ui.js
 */
import Vue from 'vue'

/**
 * x-dcloud-ui替换x-lib-ui
 */

import {
  XSvgIcon,
  XModal,
  XPersonTag,
  XPersonPopover,
  XPersonModal,
  XEllipsis,
  XMoneyInput,
  XNumberInput,
  XRichText,
  XTagGroup,
  XDepartmentModal,
  XDepartmentTag,
  XRoleModal,
  XResizeable,
  XPersonAvatar,
  XDrawer,
  XLoading,
  XEmptyPage,
  XDate,
  XBlockForm,
  XBlockTable,
  XVxeTable,
  XSelect,
  XEditor
} from '@x-ui/x-dcloud-ui'
import XEventOutside from '@x-ui/x-dcloud-ui/lib/x-event-outside'
import XBomeventPluign from '@x-ui/x-dcloud-ui/lib/x-bomevent-plugin'
import XLodashPlugin from '@x-ui/x-dcloud-ui/lib/x-lodash-plugin'
import XDateFormatPlugin from '@x-ui/x-dcloud-ui/lib/x-dateformat-plugin'
import XRequestPlugin from '@x-ui/x-dcloud-ui/lib/x-request-plugin'

import 'xe-utils'
import VXETable from 'xx-vxe-table'
import 'xx-vxe-table/lib/style.css'

Vue.use(VXETable)

// import './form-schema-config/index'

/**
 * x-dcloud-ui替换x-lib-ui
 */
Vue.use(XSvgIcon)
Vue.use(XBlockTable)
Vue.use(XModal)
Vue.use(XDrawer)
Vue.use(XEllipsis)
Vue.use(XMoneyInput)
Vue.use(XNumberInput)
Vue.use(XRichText)
Vue.use(XResizeable)
Vue.use(XPersonTag)
Vue.use(XPersonAvatar)
Vue.use(XPersonModal)
Vue.use(XDepartmentModal)
Vue.use(XPersonPopover)
Vue.use(XLoading)
Vue.use(XEmptyPage)
Vue.use(XDate)
Vue.use(XTagGroup)
Vue.use(XSelect)
Vue.use(XRoleModal)
Vue.use(XVxeTable)
Vue.use(XEditor)
Vue.use(XDepartmentTag)
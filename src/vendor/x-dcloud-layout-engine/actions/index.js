import { LayoutEngine } from '@x-apaas/x-dcloud-page-engine'
import { GLOABL_MENU_ACTION } from './menu.action'
import { GLOABL_HEADER_ACTION } from './header.action'

Object.keys(GLOABL_MENU_ACTION).map((actionCode) => {
  LayoutEngine.ActionControl.registerGlobalAction(actionCode, GLOABL_MENU_ACTION[actionCode])
})

Object.keys(GLOABL_HEADER_ACTION).map((actionCode) => {
  LayoutEngine.ActionControl.registerGlobalAction(actionCode, GLOABL_HEADER_ACTION[actionCode])
})

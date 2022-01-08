import Vue from 'vue'
import { LayoutEngine } from '@x-apaas/x-dcloud-page-engine'
import {
  XAppMenu,
  XAppLayout,
  XAppHeader,
  XOrgLogo,
  XLayoutPersonAvatar,
  XAppLogo,
  MenusTree,
  AppLogo,
  OrgLogo
} from '@x-apaas/x-dcloud-page-web'

import './actions'

import AppLayout from '@/components/app-layout/app-layout'

Vue.use(XAppMenu)
Vue.use(XAppLayout)
Vue.use(XAppHeader)
Vue.use(XOrgLogo)
Vue.use(XLayoutPersonAvatar)
Vue.use(XAppLogo)
Vue.use(MenusTree)
Vue.use(AppLogo)
Vue.use(OrgLogo)

const layoutEngine = LayoutEngine.getInstance(LayoutEngine.currentLayoutId)
layoutEngine.registerLayoutComponent(AppLayout)
layoutEngine.layoutConfig.keepAliveRouter = false

const tenantModule = {
  'id': '170113763830136833',
  'name': '得帆演示',
  'roleName': '组织管理员',
  'role': 'ADMIN',
  'logoUrl': 'http://39.99.176.43:30607/xdap-admin/attachments/downloadFile?file=62d9952f-f6fa-4e5b-9823-64d807d8874f',
  'logo': '244470897530896384',
  'owner': '100169864200816951296',
  'activeFlag': false,
  'userDepartment': {
    'owner': '100208899914644586496',
    'createdBy': '100208899914644586496',
    'lastUpdatedBy': '100208899914644586496',
    'creationDate': '2021-12-28 18:19:02',
    'lastUpdateDate': '2021-12-28 18:19:02',
    'objectVersionNumber': 1,
    'tenantId': '170113763830136833',
    'id': '101263732559337226240',
    'name': '5',
    'parentId': '101263731923103252480',
    'status': 'ENABLE',
    'manager': '100172670696655159296',
    'structureCode': '101263731409170989056·101263731923103252480·101263732559337226240',
    'structureName': '1·3·5',
    'level': 3,
    'departmentOrder': 1,
    'departmentCode': '5'
  },
  'userDepartmentList': [
    {
      'owner': '100172383539612876800',
      'createdBy': '100172383539612876800',
      'lastUpdatedBy': '100172743378851594240',
      'creationDate': '2021-05-25 05:06:03',
      'lastUpdateDate': '2021-09-23 16:27:12',
      'objectVersionNumber': 5,
      'tenantId': '170113763830136833',
      'id': '101185091126493970432',
      'name': '倒带测试导入部门222222222',
      'status': 'ENABLE',
      'structureCode': '101185091126493970432',
      'structureName': '倒带测试导入部门222222222',
      'level': 1,
      'departmentOrder': 5,
      'departmentCode': 'dept101185091126493970432'
    },
    {
      'owner': '100208899914644586496',
      'createdBy': '100208899914644586496',
      'lastUpdatedBy': '100208899914644586496',
      'creationDate': '2021-12-28 18:19:02',
      'lastUpdateDate': '2021-12-28 18:19:02',
      'objectVersionNumber': 1,
      'tenantId': '170113763830136833',
      'id': '101263732559337226240',
      'name': '5',
      'parentId': '101263731923103252480',
      'status': 'ENABLE',
      'manager': '100172670696655159296',
      'structureCode': '101263731409170989056·101263731923103252480·101263732559337226240',
      'structureName': '1·3·5',
      'level': 3,
      'departmentOrder': 1,
      'departmentCode': '5'
    }
  ],
  'limitId': '172382860840271872',
  'orgLogoUrl': 'http://39.99.176.43:30607/xdap-admin/attachments/downloadFile?file=44458881-5376-4d88-95c2-287567d3567c',
  'orgLogoUrlId': '244471104087785472',
  'appAdminFlag': true,
  'allowRelease': true,
  'tenantType': 'NORMAL',
  'tenantCode': 'afbfdjkfd'
}
var authModule = {
  'userInfo': {
    'id': '100179537490791628800',
    'username': '管理员',
    'registerTime': '2021-05-09',
    'phone': '13699999999',
    'email': '123@qq.com',
    'account': '13699999999',
    'tenant': {
      'id': '170113763830136833',
      'name': '得帆演示',
      'roleName': '组织管理员',
      'role': 'ADMIN',
      'logoUrl': '/xdap-app/attachments/downloadFile?file=62d9952f-f6fa-4e5b-9823-64d807d8874f',
      'logo': '244470897530896384',
      'activeFlag': false,
      'userDepartment': {
        'owner': '100208899914644586496',
        'createdBy': '100208899914644586496',
        'lastUpdatedBy': '100208899914644586496',
        'creationDate': '2021-12-28 18:19:02',
        'lastUpdateDate': '2021-12-28 18:19:02',
        'objectVersionNumber': 1,
        'tenantId': '170113763830136833',
        'id': '101263732559337226240',
        'name': '5',
        'parentId': '101263731923103252480',
        'status': 'ENABLE',
        'manager': '100172670696655159296',
        'structureCode': '101263731409170989056·101263731923103252480·101263732559337226240',
        'structureName': '1·3·5',
        'level': 3,
        'departmentOrder': 1,
        'departmentCode': '5'
      },
      'userDepartmentList': [
        {
          'structureCode': '101185091126493970432',
          'departmentOrder': 5,
          'level': 1,
          'structureName': '倒带测试导入部门222222222',
          'departmentCode': 'dept101185091126493970432',
          'name': '倒带测试导入部门222222222',
          'id': '101185091126493970432',
          'status': 'ENABLE'
        },
        {
          'structureCode': '101263731409170989056·101263731923103252480·101263732559337226240',
          'departmentOrder': 1,
          'manager': '100172670696655159296',
          'level': 3,
          'structureName': '1·3·5',
          'departmentCode': '5',
          'name': '5',
          'id': '101263732559337226240',
          'parentId': '101263731923103252480',
          'status': 'ENABLE'
        }
      ],
      'tenantBasicInfo': {
        'id': '170113763830136833',
        'name': '得帆演示',
        'logoUrl': 'http://39.99.176.43:30607/xdap-admin/attachments/downloadFile?file=62d9952f-f6fa-4e5b-9823-64d807d8874f',
        'logo': '244470897530896384',
        'creationDate': '2021-04-20',
        'ownerName': 'sven',
        'memberNumActual': 4246,
        'appNumActual': 268,
        'introduce': 'aPaaS私有化版本组1211',
        'orgLogoUrl': '44458881-5376-4d88-95c2-287567d3567c',
        'orgLogoUrlId': '244471104087785472',
        'workBenchUrl': 'http://dcloud-dev.definesys.cn:30201/workbench/',
        'mobileLoginUrl': 'http://dcloud-dev.definesys.cn:30201/m/',
        'tenantType': 'NORMAL',
        'allowRelease': true,
        'tenantCode': 'afbfdjkfd'
      },
      'orgLogoUrl': '/xdap-app/attachments/downloadFile?file=44458881-5376-4d88-95c2-287567d3567c',
      'orgLogoUrlId': '244471104087785472',
      'appAdminFlag': false,
      'allowRelease': true,
      'tenantType': 'NORMAL'
    }
  },
  'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2NDE1NzE2NDMsImlhdCI6MTY0MTU2NDQ0MywieGRhcHVzZXJpZCI6IjEwMDE3OTUzNzQ5MDc5MTYyODgwMCJ9.C-bqkjpY_bYsd0A2_X3740fcRolTzvc25syCFfsWOo5uD-6J_xx0KaGnxExiiFPmtbKvKWyhSMDw4Ub_7L_Z7A',
  'orgs': [],
  'wxInfo': null,
  'weComInfo': null
}

var fontModule = {
  'fontConfig': [
    {
      'id': null,
      'fontSize': null
    },
    {
      'id': '100179537490791628800_183246181311184896',
      'fontSize': 'small'
    }
  ]
}
layoutEngine.layoutDataControl.updateTenantModule(tenantModule)
layoutEngine.layoutDataControl.updateAuthModule(authModule)
layoutEngine.layoutDataControl.updateFontModule(fontModule)

Object.defineProperty(Vue, 'LayoutEngine', {
  value: LayoutEngine,
  configurable: false,
  writable: false,
  enumerable: false
})

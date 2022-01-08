// import { _isFeishuClient, _redirectUrlOfSelf } from '@/util/platform.util'
// import { addClass, removeClass } from '@/util/dom.util.js'
import Vue from 'vue'
// import router from '@/router'
// import store from '@/store'
export const GLOABL_HEADER_ACTION = {
  GO_PRODUCT: (engine, event) => {
    console.log(event)
    Vue.prototype.$message({
      message: '点击跳转产品中心',
      type: 'success'
    })
    // const { isSingleApp, isSingleWorkbench } = event
    // let url = `${window.location.origin}/`
    // if (_isFeishuClient() || isSingleApp || isSingleWorkbench) {
    //   // this._redirectUrlOfSelf(url)
    // } else {
    //   window.open(url)
    // }
  },
  GO_PERSONAL: (engine, event) => {
    console.log(event)
    Vue.prototype.$message({
      message: '点击跳转个人中心',
      type: 'success'
    })
    // const routes = router.resolve({
    //   path: '/personal/personalInfo'
    // })
    // const url = routes.href
    // if (_isFeishuClient()) {
    //   _redirectUrlOfSelf(url)
    // } else {
    //   window.open(url, '_blank')
    // }
  },
  GO_UPGRADE: (engine, event) => {
    console.log(event)
    Vue.prototype.$message({
      message: '点击跳转系统升级',
      type: 'success'
    })
  },
  GO_HELPER: (engine, event) => {
    console.log(event)
    Vue.prototype.$message({
      message: '点击跳转帮助文档',
      type: 'success'
    })
  },
  FONT_SIZE_SELECTED: (engine, event) => {
    console.log(event)
    Vue.prototype.$message({
      message: '点击字体切换',
      type: 'success'
    })
    // const { configInfo, checkUaid } = event
    // if (checkUaid) {
    //   store.commit('fontModule/SET_APP_FONT_SIZE', configInfo)
    // } else {
    //   store.commit('fontModule/ADD_APP_FONT_SIZE', configInfo)
    // }
  },
  FONT_SIZE_CLASS_CHAGE: (engine, event) => {
    // const { value } = event
    // let currentClass = `${value}-zoom`
    // // 兼容ie
    // // document.body.classList = []
    // removeClass(document.body, 'large-zoom middle-zoom small-zoom')
    // addClass(document.body, currentClass)
  },
  INIT_APP_INFO_ACTION: (engine, event) => {
    return new Promise((resolve, reject) => {
      resolve({
        'code': 'ok',
        'message': '操作成功',
        'data': {
          'owner': '100226351515915255808',
          'createdBy': '100226351515915255808',
          'lastUpdatedBy': '100198475653706678272',
          'creationDate': '2021-09-29 17:03:47',
          'lastUpdateDate': '2022-01-05 14:13:45',
          'objectVersionNumber': 37,
          'tenantId': '230371400630665217',
          'id': '226357201436934144',
          'appCode': 'RD001-ITE001',
          'appName': '得帆云研发团队',
          'appKey': '3eb646b0-3809-4626-a610-02bce0c3d7a5',
          'appSecret': 'f5b6291d-184e-4329-8ec4-32a97df2db65',
          'status': 'RUNNING',
          'appTheme': '#027AFF',
          'port': 30984,
          'accessUrl': 'http://dcloud-demo.definesys.cn:30984/app/',
          'backendUrl': 'http://dcloud-demo.definesys.cn:30984',
          'customIconStatus': 'DISABLE',
          'innerIcon': 'userInfo',
          'saveStatus': true,
          'oauthStatus': 'DISABLE',
          'oauthScope': 'user_info',
          'oauthRedirectUrl': 'http://dcloud-demo.definesys.cn:30984/app/callback/oauth/app/index.html',
          'appAdmins': [
            {
              'id': '100226351515915255808',
              'appId': '226357201436934144',
              'username': '管理员',
              'account': '185555'
            }
          ],
          'roles': [
            {
              'owner': '100226351515915255808',
              'createdBy': '100226351515915255808',
              'lastUpdatedBy': '100226351515915255808',
              'creationDate': '2021-09-29 17:07:37',
              'lastUpdateDate': '2021-09-29 17:07:37',
              'objectVersionNumber': 1,
              'id': '231099678878334976',
              'roleCode': 'RD_front',
              'roleName': '前端研发人员',
              'roleType': 'TENANT',
              'status': 'ENABLE',
              'enableGroupParam': 'DISABLE'
            },
            {
              'owner': '100198475653706678272',
              'createdBy': '100198475653706678272',
              'lastUpdatedBy': '100198475653706678272',
              'creationDate': '2021-10-15 17:02:06',
              'lastUpdateDate': '2021-10-15 17:02:06',
              'objectVersionNumber': 1,
              'id': '236896494072889344',
              'roleCode': 'RD_aPaaS_Client',
              'roleName': 'RD_前端',
              'roleType': 'TENANT',
              'status': 'ENABLE',
              'enableGroupParam': 'DISABLE'
            },
            {
              'owner': '100210349114515259392',
              'createdBy': '100210349114515259392',
              'lastUpdatedBy': '100198475653706678272',
              'creationDate': '2021-11-18 12:16:57',
              'lastUpdateDate': '2021-11-24 22:34:16',
              'objectVersionNumber': 3,
              'id': '249145923987308544',
              'roleCode': 'TL',
              'roleName': '技术负责人',
              'roleType': 'TENANT',
              'status': 'ENABLE',
              'enableGroupParam': 'DISABLE'
            }
          ],
          'currentStoreVersion': '0.0.0',
          'accessMobileUrl': 'http://dcloud-demo.definesys.cn:30984/m/',
          'modalDefaultStyle': 'small',
          'drawerDefaultStyle': 'small',
          'installType': 'INSTALL_PKG',
          'customThemeButton': 'DISABLE',
          'customThemeColor': '#027AFF'
        }
      })
    })
  },
  INIT_MENU_TREE_ACTION: (engine, event) => {
    return new Promise((resolve, reject) => {
      resolve({
        'code': 'ok',
        'message': '查询成功',
        'data': [
          {
            'owner': '100226351515915255808',
            'createdBy': '100226351515915255808',
            'lastUpdatedBy': '100198475653706678272',
            'creationDate': '2021-09-29 17:03:48',
            'lastUpdateDate': '2021-12-02 16:48:39',
            'objectVersionNumber': 17,
            'id': '226357350263422976',
            'appId': '226357201436934144',
            'menuName': '迭代管理',
            'menuIcon': 'daka',
            'menuType': 'MODEL',
            'menuModelType': 'DATABASE',
            'menuOrder': 1,
            'formId': '6142ed93df4743397628ef8c',
            'datasourceId': '230371418548731904',
            'datasourceCode': 'DEFAULT_DATASOURCE'
          },
          {
            'owner': '100226351515915255808',
            'createdBy': '100226351515915255808',
            'lastUpdatedBy': '100198475653706678272',
            'creationDate': '2021-09-29 17:03:48',
            'lastUpdateDate': '2021-12-02 16:48:39',
            'objectVersionNumber': 17,
            'id': '226371930733674496',
            'appId': '226357201436934144',
            'menuName': '需求管理',
            'menuIcon': 'danju',
            'menuType': 'MODEL',
            'menuModelType': 'DATABASE',
            'menuOrder': 2,
            'formId': '6142fa3ddf4743397628efa7',
            'datasourceId': '230371418548731904',
            'datasourceCode': 'DEFAULT_DATASOURCE'
          },
          {
            'owner': '100226351515915255808',
            'createdBy': '100226351515915255808',
            'lastUpdatedBy': '100198475653706678272',
            'creationDate': '2021-09-29 17:03:48',
            'lastUpdateDate': '2021-12-02 16:48:39',
            'objectVersionNumber': 17,
            'id': '226723813608390656',
            'appId': '226357201436934144',
            'menuName': '缺陷管理',
            'menuIcon': 'mokuai',
            'menuType': 'MODEL',
            'menuModelType': 'DATABASE',
            'menuOrder': 3,
            'formId': '61444277df4743397628f014',
            'datasourceId': '230371418548731904',
            'datasourceCode': 'DEFAULT_DATASOURCE'
          },
          {
            'owner': '100198475653706678272',
            'createdBy': '100198475653706678272',
            'lastUpdatedBy': '100198475653706678272',
            'creationDate': '2021-11-16 16:14:12',
            'lastUpdateDate': '2021-12-02 16:48:39',
            'objectVersionNumber': 6,
            'id': '248480855272456192',
            'appId': '226357201436934144',
            'submenus': [
              {
                'owner': '100198475653706678272',
                'createdBy': '100198475653706678272',
                'lastUpdatedBy': '100198475653706678272',
                'creationDate': '2021-11-02 15:39:14',
                'lastUpdateDate': '2021-12-02 16:48:39',
                'objectVersionNumber': 8,
                'id': '243398623629410304',
                'appId': '226357201436934144',
                'parentId': '248480855272456192',
                'menuName': '版本发布日历',
                'menuIcon': 'rili',
                'menuType': 'REPORT',
                'menuModelType': 'DATABASE',
                'menuOrder': -1,
                'formId': '6180eb4ade0ada4565a87bb4',
                'cusIconStatus': 'DISABLE'
              },
              {
                'owner': '100226351515915255808',
                'createdBy': '100226351515915255808',
                'lastUpdatedBy': '100198475653706678272',
                'creationDate': '2021-09-29 17:03:48',
                'lastUpdateDate': '2021-12-02 16:48:39',
                'objectVersionNumber': 19,
                'id': '229190200314560512',
                'appId': '226357201436934144',
                'parentId': '248480855272456192',
                'menuName': '版本发布计划',
                'menuIcon': 'kucun',
                'menuType': 'MODEL',
                'menuModelType': 'DATABASE',
                'menuOrder': 0,
                'formId': '614d3b432557dc0f129308a3',
                'datasourceId': '230371418548731904',
                'datasourceCode': 'DEFAULT_DATASOURCE',
                'cusIconStatus': 'DISABLE'
              }
            ],
            'menuName': '版本管理',
            'menuIcon': 'userInfo',
            'menuType': 'GROUP',
            'menuModelType': 'DATABASE',
            'menuOrder': 4,
            'cusIconStatus': 'DISABLE'
          },
          {
            'owner': '100198475653706678272',
            'createdBy': '100198475653706678272',
            'lastUpdatedBy': '100198475653706678272',
            'creationDate': '2021-12-02 16:48:24',
            'lastUpdateDate': '2021-12-02 16:48:39',
            'objectVersionNumber': 3,
            'id': '254287665057234944',
            'appId': '226357201436934144',
            'submenus': [
              {
                'owner': '100226351515915255808',
                'createdBy': '100226351515915255808',
                'lastUpdatedBy': '100198475653706678272',
                'creationDate': '2021-09-29 17:03:48',
                'lastUpdateDate': '2021-12-02 16:48:39',
                'objectVersionNumber': 17,
                'id': '226738597372362752',
                'appId': '226357201436934144',
                'parentId': '254287665057234944',
                'menuName': 'Pluto任务表',
                'menuIcon': 'rili',
                'menuType': 'MODEL',
                'menuModelType': 'DATABASE',
                'menuOrder': -1,
                'formId': '61444f83df4743397628f060',
                'datasourceId': '230371418548731904',
                'datasourceCode': 'DEFAULT_DATASOURCE'
              }
            ],
            'menuName': '任务管理',
            'menuIcon': 'userInfo',
            'menuType': 'GROUP',
            'menuModelType': 'DATABASE',
            'menuOrder': 5,
            'cusIconStatus': 'DISABLE'
          },
          {
            'owner': '100226351515915255808',
            'createdBy': '100226351515915255808',
            'lastUpdatedBy': '100198475653706678272',
            'creationDate': '2021-09-29 17:03:48',
            'lastUpdateDate': '2021-12-02 16:48:39',
            'objectVersionNumber': 17,
            'id': '228480931982213120',
            'appId': '226357201436934144',
            'menuName': '迭代SQL脚本',
            'menuIcon': 'xiangmu',
            'menuType': 'MODEL',
            'menuModelType': 'DATABASE',
            'menuOrder': 6,
            'formId': '614aa7c48ee537243b6f9092',
            'datasourceId': '230371418548731904',
            'datasourceCode': 'DEFAULT_DATASOURCE'
          },
          {
            'owner': '100226351515915255808',
            'createdBy': '100226351515915255808',
            'lastUpdatedBy': '100198475653706678272',
            'creationDate': '2021-09-29 17:03:48',
            'lastUpdateDate': '2021-12-02 16:48:39',
            'objectVersionNumber': 17,
            'id': '228530587437105152',
            'appId': '226357201436934144',
            'menuName': '私有化部署版本管理',
            'menuIcon': 'shuju',
            'menuType': 'MODEL',
            'menuModelType': 'DATABASE',
            'menuOrder': 7,
            'formId': '614ad63f2557dc0f1293073b',
            'datasourceId': '230371418548731904',
            'datasourceCode': 'DEFAULT_DATASOURCE'
          },
          {
            'owner': '100226351515915255808',
            'createdBy': '100226351515915255808',
            'lastUpdatedBy': '100198475653706678272',
            'creationDate': '2021-09-29 17:03:48',
            'lastUpdateDate': '2021-12-02 16:48:39',
            'objectVersionNumber': 17,
            'id': '228535935426363392',
            'appId': '226357201436934144',
            'menuName': '迭代后端配置文件',
            'menuIcon': 'yingyong',
            'menuType': 'MODEL',
            'menuModelType': 'DATABASE',
            'menuOrder': 8,
            'formId': '614ad9762557dc0f12930747',
            'datasourceId': '230371418548731904',
            'datasourceCode': 'DEFAULT_DATASOURCE'
          },
          {
            'owner': '100210349114515259392',
            'createdBy': '100210349114515259392',
            'lastUpdatedBy': '100198475653706678272',
            'creationDate': '2021-11-16 10:13:58',
            'lastUpdateDate': '2021-12-02 16:48:39',
            'objectVersionNumber': 6,
            'id': '248390198256205824',
            'appId': '226357201436934144',
            'menuName': '分支管理',
            'menuIcon': 'gongzuotai',
            'menuType': 'MODEL',
            'menuModelType': 'DATABASE',
            'menuOrder': 10,
            'formId': '619329da74a32004646fe510',
            'processId': '61baa727a3e76d2f5b3452a0',
            'datasourceId': '230371418548731904',
            'cusIconStatus': 'DISABLE'
          },
          {
            'owner': '100198475653706678272',
            'createdBy': '100198475653706678272',
            'lastUpdatedBy': '100198475653706678272',
            'creationDate': '2021-11-27 16:13:45',
            'lastUpdateDate': '2021-12-02 16:48:39',
            'objectVersionNumber': 3,
            'id': '252467005955768320',
            'appId': '226357201436934144',
            'menuName': '分析页面',
            'menuIcon': 'userInfo',
            'menuType': 'REPORT',
            'menuModelType': 'DATABASE',
            'menuOrder': 11,
            'formId': '61a1e95f67ade25c239a698a',
            'cusIconStatus': 'DISABLE'
          },
          {
            'owner': '100169876816012509184',
            'createdBy': '100169876816012509184',
            'lastUpdatedBy': '100169876816012509184',
            'creationDate': '2021-12-17 12:28:09',
            'lastUpdateDate': '2021-12-17 12:28:09',
            'objectVersionNumber': 1,
            'id': '259657991123369984',
            'appId': '226357201436934144',
            'submenus': [
              {
                'owner': '100169876816012509184',
                'createdBy': '100169876816012509184',
                'lastUpdatedBy': '100169876816012509184',
                'creationDate': '2021-12-17 12:28:33',
                'lastUpdateDate': '2021-12-17 12:28:33',
                'objectVersionNumber': 1,
                'id': '259658088770961408',
                'appId': '226357201436934144',
                'parentId': '259657991123369984',
                'menuName': '缺陷统计',
                'menuIcon': 'userInfo',
                'menuType': 'REPORT',
                'menuModelType': 'DATABASE',
                'menuOrder': 0,
                'formId': '61bc13671fbcd04922c9fce9',
                'cusIconStatus': 'DISABLE'
              }
            ],
            'menuName': 'miss统计用',
            'menuIcon': 'userInfo',
            'menuType': 'GROUP',
            'menuModelType': 'DATABASE',
            'menuOrder': 14,
            'cusIconStatus': 'DISABLE'
          }
        ]
      })
    })
  },
  QUERY_MENU_PERMISSION_ACTION: (engine, event) => {
    return new Promise((resolve, reject) => {
      resolve({
        'code': 'ok',
        'message': '操作成功',
        'data': [
          {
            'id': '226357350263422976',
            'addPermission': true
          },
          {
            'id': '226371930733674496',
            'addPermission': true
          },
          {
            'id': '226723813608390656',
            'addPermission': true
          },
          {
            'id': '228480931982213120',
            'addPermission': true
          },
          {
            'id': '228530587437105152',
            'addPermission': true
          },
          {
            'id': '228535935426363392',
            'addPermission': true
          },
          {
            'id': '229190200314560512',
            'addPermission': true
          },
          {
            'id': '226738597372362752',
            'addPermission': true
          },
          {
            'id': '248390198256205824',
            'addPermission': true
          },
          {
            'id': '254280937083240448',
            'addPermission': true
          },
          {
            'id': '256472791535058944',
            'addPermission': false
          },
          {
            'id': '235544409557434328',
            'addPermission': false
          },
          {
            'id': '226357201457905664',
            'addPermission': false
          },
          {
            'id': '259657991123369984',
            'addPermission': false
          },
          {
            'id': '259658088770961408',
            'addPermission': false
          },
          {
            'id': '226357201512431616',
            'addPermission': false
          },
          {
            'id': '252467005955768320',
            'addPermission': false
          },
          {
            'id': '254287665057234944',
            'addPermission': false
          },
          {
            'id': '226357201436934143',
            'addPermission': false
          },
          {
            'id': '226357201487265792',
            'addPermission': false
          },
          {
            'id': '243398623629410304',
            'addPermission': false
          },
          {
            'id': '248480855272456192',
            'addPermission': false
          },
          {
            'id': '226357201529208832',
            'addPermission': false
          },
          {
            'id': '235419566354726912',
            'addPermission': false
          },
          {
            'id': '241298406243303424',
            'addPermission': false
          }
        ]
      })
    })
  },
  QUERY_HELP_URL: (engine, event) => {
    return new Promise((resolve, reject) => {
      resolve({
        'code': 'ok',
        'message': '操作成功',
        'data': 'https://definesys.cn/'
      })
    })
  }
}

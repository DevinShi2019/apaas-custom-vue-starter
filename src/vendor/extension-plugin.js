import { ExtensionEngine, ExtensionPlugin } from 'x-extension'

import SingleAppExtension from '../extensions/single-app/extension'
import SingleWorkbenchExtension from '../extensions/single-workbench/extension'

import Vue from 'vue'

const engineVersion = '0.0.1'
Vue.use(ExtensionPlugin, {
  version: engineVersion
})

// ExtensionEngine.getInstance(engineVersion)
ExtensionEngine.getInstance().initGlobalConfig({
  versions: [
    {
      code: 'TRIAL_EDITION',
      name: '试用版',
      level: 'LV_1',
      desc: '试用版',
      endDate: undefined
    },
    {
      code: 'TEAM_EDITION',
      name: '团队版',
      level: 'LV_2',
      desc: '团队版',
      endDate: undefined
    },
    {
      code: 'STANDARD_EDITION',
      name: '标准版',
      level: 'LV_3',
      desc: '标准版',
      endDate: undefined
    },
    {
      code: 'PREMIUM_EDITION',
      name: '高级版',
      level: 'LV_4',
      desc: '高级版',
      endDate: undefined
    }
  ],
  blackExtensions: [],
  whiteExtensions: []
})
// 设置当前租户版本，默认为试用版
ExtensionEngine.getInstance().setCurrentVersion('TRIAL_EDITION')

ExtensionEngine.getInstance().registerExtensionConfig(SingleAppExtension)
ExtensionEngine.getInstance().registerExtensionConfig(SingleWorkbenchExtension)

// TODO： 设置插件
// const extensions = [
//   WeComExtension,
//   BusinessEventExtension,
//   RecordCommentExtension,
//   RecordLogExtension,
//   FeishuExtension,
//   OcrComponentExtension,
//   FeishuClientExtension,
//   CustomLogoExtension,
//   SingleAppExtension
// ]

// const ExtensionPluginMixin = {
//   install(Vue, options) {
//     const extensions = options.extensions || []
//     extensions.forEach(extension => {
//       ExtensionEngine.getInstance().registerExtensionConfig(extension)
//     });
//   }
// }

// Vue.use(ExtensionPluginMixin, {
//   extensions: extensions
// })

let initPlugins = []
initPlugins = 'SINGLE_APP'.split(',')
ExtensionEngine.getInstance().setGlobalWhiteExtensions(initPlugins)

let initBlackPlugins = []
initBlackPlugins = 'SINGLE_WORKBENCH'.split(',')
initBlackPlugins = initBlackPlugins.map((plugin) => {
  return {
    extensionCode: plugin
  }
})
ExtensionEngine.getInstance().setGlobalBlackExtensions(initBlackPlugins)

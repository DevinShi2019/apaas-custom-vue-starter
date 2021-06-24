/**
 * Element UI 懒加载插件，由于我们需要使用懒加载scss动态编译主题，所以不使用
 */
// eslint-disable-next-line no-unused-vars
const elementUIComponentPlugin = [
  'component',
  {
    libraryName: 'element-ui',
    styleLibraryName: '../packages/theme-chalk/src',
    ext: '.scss'
  },
  'element-ui'
]

const XLibComponentPlugin = [
  'component',
  {
    libraryName: '@x-ui/x-dcloud-ui',
    styleLibrary: {
      base: false,
      name: 'theme-chalk/theme'
    },
    ext: '.scss'
  },
  '@x-ui/x-dcloud-ui'
]

module.exports = {
  presets: [
    [
      '@vue/cli-plugin-babel/preset',
      {
        useBuiltIns: 'entry'
      }
    ]
  ],
  plugins: [
    elementUIComponentPlugin,
    XLibComponentPlugin
  ]
}

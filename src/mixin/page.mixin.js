export default {
  data() {
    return {
      __pageName: '',
      __moduleName: ''
    }
  },
  provide() {
    return {
      getPageName: this.getPageNameFunc,
      getModuleName: this.getModuleNameFunc
    }
  },
  created() {
    // eslint-disable-next-line
    const $__file = this.$options.__file

    // eslint-disable-next-line
    if (!$__file) {
      return
    }
    // 截取页面模块,
    if ($__file.startsWith('src/pages/')) {
      const modulePath = $__file.replace('src/pages/', '')
      const moduleArray = modulePath.split('/')
      if (moduleArray.length === 1) {
        // 1. 如果在pages目录下的页面，存入 GLOBAL 模块下
        this.__moduleName = 'GLOBAL'
        this.__pageName = moduleArray[0].replace('.vue', '').toUpperCase()
      } else if (moduleArray.length > 1) {
        // 2. 如果在pages目录下其他目录的页面，则取pages下目录的名称作为模块
        this.__moduleName = moduleArray[0].toUpperCase()
        // 3. 取文件名为页面名称
        this.__pageName = moduleArray[moduleArray.length - 1].replace('.vue', '').toUpperCase()
      }
    }
  },
  methods: {
    getPageNameFunc() {
      return this.__pageName
    },
    getModuleNameFunc() {
      return this.__moduleName
    }
  }
}

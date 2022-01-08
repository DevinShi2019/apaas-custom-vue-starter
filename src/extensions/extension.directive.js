import ExtensionEngine from './extension.engine'
const checkExtension = function(el, binding, vnode, oldVnode) {
  // 获取配置，验证
  const { value } = binding
  const extensionScope =
    (vnode.componentInstance && vnode.componentInstance.$attrs['extension-scope']) ||
    vnode.data.attrs['extension-scope']

  if (!extensionScope) {
    console.error(`此组件配置不完全，无法全局适配插件，请配置完extension-scope后再尝试`)
  }
  const extensionCode = extensionScope.extension
  const blockCode = extensionScope.block

  if (!extensionCode) {
    console.error(`此组件配置不完全，无法全局适配插件，请配置完extension-scope后再尝试`)
  }

  let result = false
  if (value) {
    result = ExtensionEngine.getInstance().validateFun(extensionCode, blockCode, value)
  } else {
    result = ExtensionEngine.getInstance().validateBlock(extensionCode, blockCode)
  }

  if (!result) {
    el.parentNode && el.parentNode.removeChild(el)
  }
}

const ExtensionDirective = {
  name: 'extension',
  bind: function(el, binding, vnode) {},

  inserted: function(el, binding, vnode) {
    // 指令的定义
    checkExtension(el, binding, vnode)
  },

  update: function(el, binding, vnode, oldVnode) {
    // 此处比较指令参数，若不一致则更新, 更新逻辑 (1. 删除DOM元素，2. 代理禁用部分插件方法, )
    checkExtension(el, binding, vnode, oldVnode)
  },

  componentUpdated: function(el, binding, vnode, oldVnode) {},

  unbind: function(el, binding, vnode) {}
}

export default ExtensionDirective

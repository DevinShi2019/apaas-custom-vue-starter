/**
 * 初始化事件
 */
const install = function(Vue, opts) {
  const bomListenerMap = {}
  var addBomEventListener = function(eventName, listener) {
    if (!bomListenerMap[eventName] || bomListenerMap[eventName].length === 0) {
      bomListenerMap[eventName] = [listener]
    } else {
      console.warn('已经存在一个相同名称的bom监听事件，建议先remove之前的再添加')
      bomListenerMap[eventName].push(listener)
    }
    if (window) {
      window.addEventListener(eventName, listener)
    }
  }

  var removeBomEventListener = function(eventName, listener) {
    if (!listener) {
      bomListenerMap[eventName].forEach((lis) => {
        if (window) {
          window.removeEventListener(eventName, lis)
        }
      })
      bomListenerMap[eventName] = []
    } else {
      bomListenerMap[eventName] = bomListenerMap[eventName].filter((lis) => {
        if (lis === listener) {
          window.removeEventListener(eventName, lis)
        }
        return lis !== listener
      })
    }
  }

  Vue.prototype.$bomEventPlugin = {
    addBomEventListener: addBomEventListener,
    removeBomEventListener: removeBomEventListener
  }
}

const BomEventPlugin = {
  install: install
}

export default BomEventPlugin

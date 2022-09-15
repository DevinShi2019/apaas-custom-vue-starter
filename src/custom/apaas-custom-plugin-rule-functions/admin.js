import customFuncs from './custom-functions/index'
const install = function({ RuleEngine }, hookManager, definition) {
  Object.keys(customFuncs).forEach((funcKey) => {
    const func = customFuncs[funcKey]
    if (func && func.name && func.executeFunction && func.executeFunction instanceof Function) {
      if (func.name.indexOf('custom') !== 0) {
        console.error(`自定义函数-${func.name} 名称有误，请以custom开头`)
        return
      }
      RuleEngine.getInstance().registerContextMethod(
        func.name,
        func
      )
    } else {
      console.error(`请检查${func && func.name}的规则函数定义`)
    }
  })
}

export default { install }

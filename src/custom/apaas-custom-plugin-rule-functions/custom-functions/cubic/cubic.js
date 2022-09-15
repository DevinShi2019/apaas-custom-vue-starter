/*
* cubic函数
* 求三次方
* 接收一个数字类型的参数，并求其三次方并返回
 */
export default {
  // 函数名必须以custom开头，否则无法被解析
  name: 'customcubic',
  // 校验函数，用于函数保存前的校验, 可以对参数的个数及类型做限制
  mockFunction(...args) {
    if (!(args && args.length === 1)) {
      throw new Error('参数长度必须是1个')
    }
    if (isNaN(parseFloat(args[0])) || !isFinite(args[0])) {
      throw new Error('参数类型必须是数字')
    }
  },
  // 执行函数, 接收到参数后的处理方法，必须有返回值
  executeFunction(...args) {
    if (!(args && args.length === 1)) {
      throw new Error('参数长度必须是1个')
    }
    if (isNaN(parseFloat(args[0])) || !isFinite(args[0])) {
      throw new Error('参数类型必须是数字')
    }
    return args[0] * args[0] * args[0]
  }
}

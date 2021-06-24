/*
 * @Author: Trevor
 * @Email: wei.tang@definesys.com
 * @Date: 2020-03-20 10:47:55
 * @LastEditTime: 2020-05-27 09:26:45
 * @LastEditors: Please set LastEditors
 * @Description: file content
 */
const req = require.context('../assets/icon', true, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)

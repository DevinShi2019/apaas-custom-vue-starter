import dayjs from 'dayjs'

const install = function(Vue, opts) {
  Vue.dayjs = dayjs
  Vue.prototype.$dayjs = dayjs
}

const DateFormatPlugin = {
  install: install,
  dayjs: dayjs
}

export default DateFormatPlugin

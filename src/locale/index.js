
import Vue from 'vue'
import VueI18n from 'vue-i18n'

import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

import xlibZhCNLocale from '@x-ui/x-dcloud-ui/lib/locale/zh-CN'
import xlibEnLocale from '@x-ui/x-dcloud-ui/lib/locale/en'

import enLocaleApp from '@/locale/lang/en'
import zhLocaleApp from '@/locale/lang/zh-CN/index.js'

import ElementLocale from 'element-ui/lib/locale'

Vue.use(VueI18n)

const messages = {
  'en': {
    ...enLocaleApp,
    ...enLocale, // 或者用 Object.assign({ message: 'hello' }, enLocale)
    ...xlibEnLocale
  },
  'zh-CN': {
    ...zhLocaleApp,
    ...zhLocale, // 或者用 Object.assign({ message: '您好' }, zhLocale)
    ...xlibZhCNLocale
  }
}
// Create VueI18n instance with optionsc
const i18n = new VueI18n({
  locale: 'zh-CN', // set locale
  messages // set locale messages
})

ElementLocale.i18n((key, value) => i18n.t(key, value))

export default i18n

import personal from '@/pages/personal/personal.vue'
import personalInfo from './personal-info/personal-info.vue'
import accountSecurity from './account-security/account-security.vue'

export default {
  path: '/personal',
  name: 'personal',
  component: personal,
  redirect: '/personal/personal-info',
  children: [
    {
      path: 'personal-info',
      name: 'personal-info',
      component: personalInfo
    },
    {
      path: 'account-security',
      name: 'account-security',
      component: accountSecurity
    }
  ]
}

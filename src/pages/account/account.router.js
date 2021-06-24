import account from '@/pages/account/account.vue'
import login from '@/pages/account/login/login.vue'
import register from '@/pages/account/register/register.vue'
import forgetPassword from '@/pages/account/forget-password/forget-password.vue'

export default {
  path: '/account',
  name: 'account',
  component: account,
  redirect: '/account/login',
  children: [
    {
      path: 'login',
      name: 'login',
      component: login,
      meta: {
        layout: 'BlackLayout'
      }
    },
    {
      path: 'register',
      name: 'register',
      component: register,
      meta: {
        layout: 'BlackLayout'
      }
    },
    {
      path: 'forget-password',
      name: 'forgetPassword',
      component: forgetPassword,
      meta: {
        layout: 'BlackLayout'
      }
    }
  ]
}

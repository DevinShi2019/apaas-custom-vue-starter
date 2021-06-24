
import router from './index'
import store from '@/store'

router.beforeEach((to, from, next) => {
  const token = store.state.authModule.token
  if (token || to.path.startsWith('/account')) {
    next()
  } else {
    next({ path: '/account/login' })
  }
})

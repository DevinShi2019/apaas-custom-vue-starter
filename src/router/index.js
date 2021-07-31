/*
 * @Author: your name
 * @Date: 2020-05-26 10:06:34
 * @LastEditTime: 2020-05-27 11:29:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /x-product-workspace/packages/x-project-app/src/router/index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import WorkbenchRouter from '@/pages/workbench/workbench.router'
import AdminRouter from '@/pages/admin/admin.router'
import PersonalRouter from '@/pages/personal/personal.router'
import AccountRouter from '@/pages/account/account.router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/admin'
  },
  WorkbenchRouter,
  AdminRouter,
  PersonalRouter,
  AccountRouter
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_PUBLIC_PATH,
  routes
})

export default router

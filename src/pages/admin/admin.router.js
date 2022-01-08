import mainDataField from './main-data-field/main-data-field.vue'
import orgAccess from './org-access/org-access.vue'
import orgManage from './org-manage/org-manage.vue'
import roleManage from './role-manage/role-manage.vue'
import userManage from './user-manage/user-manage.vue'
import userRole from './user-role/user-role.vue'
import admin from '@/pages/admin/admin.vue'
import AppEngineHome from './app-engine-home/app-engine-home.vue'
import AppEnginePage from './app-engine-home/app-engine-page/app-engine-page.vue'

export default {
  path: '/admin',
  name: 'admin',
  component: admin,
  redirect: '/admin/main-data-field',
  children: [
    {
      path: 'main-data-field',
      name: 'main-data-field',
      component: mainDataField,
      meta: {
        layout: 'DefaultLayout'
      }
    },
    {
      path: 'org-access',
      name: 'org-access',
      component: orgAccess,
      meta: {
        layout: 'DefaultLayout'
      }
    },
    {
      path: 'org-manage',
      name: 'org-manage',
      component: orgManage,
      meta: {
        layout: 'DefaultLayout'
      }
    },
    {
      path: 'role-manage',
      name: 'role-manage',
      component: roleManage,
      meta: {
        layout: 'DefaultLayout'
      }
    },
    {
      path: 'user-manage',
      name: 'user-manage',
      component: userManage,
      meta: {
        layout: 'DefaultLayout'
      }
    },
    {
      path: 'user-role',
      name: 'user-role',
      component: userRole,
      meta: {
        layout: 'DefaultLayout'
      }
    },
    {
      path: 'app',
      name: 'app',
      component: AppEngineHome,
      meta: {
        layout: 'DefaultLayout'
      },
      children: [
        {
          path: 'app-page',
          name: 'app-page',
          component: AppEnginePage,
          meta: {
            layout: 'DefaultLayout'
          }
        },
        {
          path: 'report-page',
          name: 'report-page',
          component: AppEnginePage,
          meta: {
            layout: 'DefaultLayout'
          }
        },
        {
          path: 'todo-manage-page',
          name: 'todo-manage-page',
          component: AppEnginePage,
          meta: {
            layout: 'DefaultLayout'
          }
        },
        {
          path: 'todo-page',
          name: 'todo-page',
          component: AppEnginePage,
          meta: {
            layout: 'DefaultLayout'
          }
        },
        {
          path: 'toread-page',
          name: 'toread-page',
          component: AppEnginePage,
          meta: {
            layout: 'DefaultLayout'
          }
        },
        {
          path: 'process-authorize-page',
          name: 'process-authorize-page',
          component: AppEnginePage,
          meta: {
            layout: 'DefaultLayout'
          }
        },
        {
          path: 'todoed-page',
          name: 'todoed-page',
          component: AppEnginePage,
          meta: {
            layout: 'DefaultLayout'
          }
        },
        {
          path: 'mysubmit-page',
          name: 'mysubmit-page',
          component: AppEnginePage,
          meta: {
            layout: 'DefaultLayout'
          }
        },
        {
          path: 'external-page',
          name: 'external-page',
          component: AppEnginePage,
          meta: {
            layout: 'DefaultLayout'
          }
        },
        {
          path: 'custom-page/:customPath',
          name: 'custom-page',
          component: AppEnginePage,
          meta: {
            layout: 'DefaultLayout'
          }
        },
        {
          path: 'combine-page',
          name: 'combine-page',
          component: AppEnginePage,
          meta: {
            layout: 'DefaultLayout'
          }
        }
      ]
    }
  ]
}

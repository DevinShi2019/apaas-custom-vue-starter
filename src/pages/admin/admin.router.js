import mainDataField from './main-data-field/main-data-field.vue'
import orgAccess from './org-access/org-access.vue'
import orgManage from './org-manage/org-manage.vue'
import roleManage from './role-manage/role-manage.vue'
import userManage from './user-manage/user-manage.vue'
import userRole from './user-role/user-role.vue'
import admin from '@/pages/admin/admin.vue'

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
    }
  ]
}

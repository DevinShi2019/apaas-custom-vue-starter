const apis = {
  QUERY_CUSTOM_PAGE_PERMISSIONS: {
    url: '/xdap-app/appSelfDevPermission/listPermAccesses/byMenuIdAndUserId',
    method: 'get',
    disableSuccessMsg: true
  }
}
export default {
  data() {
    return {
      customPagePermissions: []
    }
  },
  computed: {
    // 查询用户在该页面是否有某个权限
    permissionStatus() {
      return function(permCode) {
        if (!permCode) {
          return false
        }
        const permArr = this.customPagePermissions && this.customPagePermissions.filter(item => permCode === item.permissionCode)
        if (permArr && permArr.length > 0) {
          return true
        }
        return false
      }
    }
  },
  created() {
    this.queryUserCustomPagePermissions()
  },
  methods: {
    // 查询用户在该页面拥有的权限
    queryUserCustomPagePermissions() {
      const request = {
        ...apis.QUERY_CUSTOM_PAGE_PERMISSIONS,
        params: {
          menuId: this.$route.query.currentMenu
        }
      }
      this.$request(request).asyncThen(resp => {
        if (resp.code === 'ok') {
          this.customPagePermissions = resp.data && resp.data.map((item) => {
            if (item.selfDevPermission) {
              return item.selfDevPermission
            }
          })
        }
      }, (err) => {
        console.error(err)
      }).asyncErrorCatch((err) => {
        console.error(err)
      })
    }
  }
}

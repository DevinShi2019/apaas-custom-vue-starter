<template>
  <div class="account-page login">
    <account-modal :height="532">
      <!-- 登录页中第三方登录隐藏-已开启微信 -->
      <!-- <account-modal :height="438"> -->
      <div class="login-form">
        <component
          :is="loginType"
          :wxInfo="wxInfo"
          @login-type-change="handleLoginTypeChange"
          @forget-password="handleForgetPassword"
          @register="handleRegister"
          @login="handleLogin"
          @keyup.enter="handleLogin"
        ></component>
      </div>
      <!-- 登录页中第三方登录隐藏-已开启微信 -->
    </account-modal>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import DefaultLogin from './default/default.vue'
import PhoneLogin from './phone/phone.vue'
import WxLogin from './wx/wx.vue'
import AccountModal from '../account-modal/account-modal.vue'
import {
  SET_MODAL_OFFSET_TOP
} from '@/store/theme.store.js'
import {
  SET_USER_INFO,
  SET_TOKEN,
  SET_WX_INFO
} from '@/store/auth.store.js'
import {
  // SET_CURRENT_DEPARTMENT,
  CLEAR_TENANT_STORE,
  SET_ONLINE_STATUS,
  SET_DAPTENAT_VERSION
} from '@/store/tenant.store.js'
import apis from '@/api'

const LOGIN_COMPNENTS = {
  'default-login': DefaultLogin,
  'phone-login': PhoneLogin,
  'wx-login': WxLogin
}

export default {
  components: {
    ...LOGIN_COMPNENTS,
    'account-modal': AccountModal
  },
  data() {
    return {
      loginType: 'default-login'
    }
  },
  computed: {
    ...mapState({
      wxInfo: (state) => state.authModule.wxInfo
    })
  },
  created() {
    this.$bomEventPlugin.addBomEventListener('beforeunload', (e) => {
      // 关闭浏览器或者刷新页面要清空veux中的wxInfo微信信息
      this.setWxInfo(null)
    })
    this.clearTenantStore()
    this.setOnLineStatus(true)
  },
  beforeDestroy() {
    this.$bomEventPlugin.removeBomEventListener('beforeunload')
    // 登陆成功要清空veux中的wxInfo微信信息
    if (!this.$route || this.$route.name !== 'register') {
      this.setWxInfo(null)
    }
  },
  mounted() {
    this.$nextTick(() => {
      let offsetTop = (document.body.clientHeight - 532) / 2
      this.setModalOffsetTop(offsetTop)
    })
  },
  methods: {
    ...mapMutations('themeModule', {
      setModalOffsetTop: SET_MODAL_OFFSET_TOP
    }),
    ...mapMutations('authModule', {
      setUserInfo: SET_USER_INFO,
      setToken: SET_TOKEN,
      setWxInfo: SET_WX_INFO
    }),
    ...mapMutations('tenantModule', {
      clearTenantStore: CLEAR_TENANT_STORE,
      setOnLineStatus: SET_ONLINE_STATUS,
      // setCurrentDepartment: SET_CURRENT_DEPARTMENT,
      setDaptenatVersion: SET_DAPTENAT_VERSION
    }),
    handlerWxLogin() {
      this.handleLoginTypeChange('wx-login')
    },
    handleLoginTypeChange(componentName) {
      if (componentName in LOGIN_COMPNENTS) {
        this.loginType = componentName
      } else {
        this.loginType = 'default-login'
      }
    },
    handleForgetPassword() {
      this.$router.push('/account/forget-password')
    },
    handleRegister() {
      this.$router.push('/account/register')
    },
    handleLogin({ type, data, callback }) {
      if (type === 'phone') {
        data.account = data.phone
        delete data.phone
      }
      // 登陆要带上微信的信息
      if (this.wxInfo) {
        data.wxOpenId = this.wxInfo.wxOpenId
        data.wxUnionId = this.wxInfo.wxUnionId
        data.wxAccount = this.wxInfo.wxAccount
      }
      const request = {
        ...apis.USER_LOGIN,
        params: {
          type,
          ...data
        }
      }
      this.$request(request)
        .asyncThen(
          (resp) => {
            callback()
            this.setToken(resp.data.token)
            this.setUserInfo({ // 保证多Tab页用户信息的一致
              ...resp.data.user,
              tenant: resp.data.userDefaultTenant,
              department: resp.data.userDepartment
            })
            this.setDaptenatVersion(resp.data.userDefaultTenant &&
              resp.data.userDefaultTenant.tenantBasicInfo && resp.data.userDefaultTenant.tenantBasicInfo.limitId)
            this.$router.push({ name: 'workbench', params: { orgId: resp.data.tenantId } })
          },
          (err) => {
            callback(err)
          }
        )
        .asyncErrorCatch((err) => {
          callback(err)
        })
    }
  }
}
</script>

<style lang="scss">
.login {
  .login-form {
    margin-bottom: 20px;
    .forget-password {
      line-height: $--app-title-fontSize;
      margin-bottom: 20px;
      text-align: right;
      cursor: pointer;
      user-select: none;
      span {
        font-size: $--app-title-fontSize;
        color: $--app-notice-color;
      }
    }
    .login-btn {
      border: 0;
      width: 100%;
      margin-bottom: 20px;
    }
    .form-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      user-select: none;
      span {
        color: $--app-primary-color;
        font-size: $--app-title-fontSize;
        cursor: pointer;
      }
      .register {
        font-size: $--app-title-fontSize;
        color: $--app-notice-color;
      }
    }
  }
  .login-split {
    line-height: $--app-title-fontSize;
    display: flex;
    align-items: center;
    .split-line {
      flex: 1;
      border-top: 1px solid $--app-split-color;
    }
    .split-name {
      flex: 0 0 48px;
      padding: 0 14px;
      box-sizing: border-box;
      color: $--app-notice-color;
      font-size: $--app-title-fontSize;
    }
  }
  .login-footer {
    position: absolute;
    bottom: 40px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    &.wx-error {
      font-size: 14px;
      color: $--app-notice-color;
      margin-bottom: 10px;
      flex-direction: column;
      >span {
        display: block;
      }
    }
    .login-item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      margin-right: 46px;
      cursor: pointer;
      &:last-child {
        margin-right: 0;
      }
      &:focus,
      &:hover {
        box-shadow: 0 0 8px 0 $--app-split-color;
        border-radius: 50%;
      }
    }
  }
}
</style>

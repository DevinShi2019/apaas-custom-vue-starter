<template>
  <div class="default-login">
    <el-form ref="loginForm" :model="loginForm" :rules="rules">
      <el-form-item prop="account">
        <el-input
          v-model="loginForm.account"
          type="text"
          autocomplete="off"
          :placeholder="$t('account.login.default.accountPlaceholder')"
          @keyup.enter.native="handleLogin"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <input-password v-model="loginForm.password" :placeholder="$t('account.login.default.passwordPlaceholder')" @keyup.enter.native="handleLogin"></input-password>
      </el-form-item>
      <div class="forget-password">
        <span @click="handleForgetPassword">{{ $t('account.login.forgetPasswordText') }}</span>
      </div>
      <el-button
        v-if="wxInfo"
        class="login-btn"
        type="primary"
        :loading="loading"
        @click="handleLogin"
      >
        {{ $t('account.login.loginAndBind') }}
      </el-button>
      <el-button
        v-else
        class="login-btn"
        type="primary"
        :loading="loading"
        @click="handleLogin"
      >
        {{ $t('account.login.loginText') }}
      </el-button>
      <div class="form-footer">
        <span @click="handleClick">{{ $t('account.login.default.phoneLoginText') }}</span>
        <div class="register" @click="handleRegister">
          {{ $t('account.login.registerText.prefix') }}
          <span>{{ $t('account.login.registerText.suffix') }}</span>
        </div>
      </div>
    </el-form>
    <other-login
      :wxInfo="wxInfo"
      @wx-login="handlerWxLogin"
    ></other-login>
  </div>
</template>

<script>
import InputPassword from '@/components/input-password'
import OtherLogin from '../other/other.vue'
import { generateValidator } from '@/utils'

export default {
  components: {
    'input-password': InputPassword,
    'other-login': OtherLogin
  },
  props: {
    wxInfo: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      loading: false,
      loginForm: {
        account: '',
        password: ''
      },
      rules: {
        account: [generateValidator('required', this.$t('account.formValidate.account.required'))],
        password: [generateValidator('required', this.$t('account.formValidate.password.login.required'))]
      }
    }
  },
  created() {
    if (this.$route.query.account) {
      this.loginForm.account = this.$route.query.account
    }
  },
  methods: {
    handleClick() {
      this.$emit('login-type-change', 'phone-login')
    },
    handleForgetPassword() {
      this.$emit('forget-password')
    },
    handleRegister() {
      this.$emit('register')
    },
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true
          this.$emit('login', {
            type: 'account',
            data: this.$lodash.cloneDeep(this.loginForm),
            callback: () => {
              this.loading = false
            }
          })
        } else {
          return false
        }
      })
    },
    handlerWxLogin(e) {
      this.$emit('login-type-change', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.default-login {
  margin-top: 60px;
}
</style>

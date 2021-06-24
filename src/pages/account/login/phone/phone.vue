<template>
  <div class="phone-login">
    <el-form ref="loginForm" :model="loginForm" :rules="rules" class="phone-login-form" @validate="handleValidate">
      <el-form-item prop="phone">
        <el-input v-model="loginForm.phone" type="text" autocomplete="off" :placeholder="$t('account.phonePlaceholder')" :maxlength="11"></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <input-code v-model="loginForm.code" :disabled="!canInputCode" @verify-success="handleVerifySuccess"></input-code>
      </el-form-item>
      <div class="forget-password">
        <span @click="handleForgetPassword">{{ $t('account.login.forgetPasswordText') }}</span>
      </div>
      <el-button v-if="wxInfo" class="login-btn" type="primary" :loading="loading" @click="handleLogin">
        {{ $t('account.login.loginAndBind') }}
      </el-button>
      <el-button v-else class="login-btn" type="primary" :loading="loading" @click="handleLogin">
        {{ $t('account.login.loginText') }}
      </el-button>
      <div class="form-footer">
        <span @click="handleClick">{{ $t('account.login.phone.accountLoginText') }}</span>
        <div class="register" @click="handleRegister">
          {{ $t('account.login.registerText.prefix') }}<span>{{ $t('account.login.registerText.suffix') }}</span>
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
import InputCode from '@/components/input-code'
import OtherLogin from '../other/other.vue'
import { PhoneValidator, CodeValidator, generateValidator } from '@/utils'
import apis from '@/api'

export default {
  components: {
    'input-code': InputCode,
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
      canInputCode: false,
      loginForm: {
        phone: '',
        code: ''
      },
      rules: {
        phone: [
          generateValidator('required', this.$t('account.formValidate.phone.required')),
          generateValidator(PhoneValidator(this.$t('account.formValidate.phone.format')))
        ],
        code: [
          generateValidator('required', this.$t('account.formValidate.code.required')),
          generateValidator(CodeValidator(this.$t('account.formValidate.code.format')))
        ]
      }
    }
  },
  methods: {
    handleVerifySuccess(callback) {
      if (this.loginForm.phone) {
        const request = {
          ...apis.SEND_PHONE_CODE,
          params: {
            type: 'login',
            phone: this.loginForm.phone
          }
        }
        this.$request(request).asyncThen(resp => {
          if (resp.code === 'ok') {
            callback()
          }
        }, () => {
          // callback(false)
        }).asyncErrorCatch(() => {
          // callback(false)
        })
      }
    },
    handleValidate(prop, isRight, errMsg) {
      if (prop === 'phone') {
        this.canInputCode = isRight
      }
    },
    handleClick() {
      this.$emit('login-type-change', 'default-login')
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
            type: 'phone',
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

<style lang="scss">
.phone-login {
  margin-top: 60px;
  .phone-login-form {
    .el-input__suffix {
      right: 0;
    }
  }
}
</style>

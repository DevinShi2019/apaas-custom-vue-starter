<template>
  <div class="account-page register">
    <account-modal :height="524">
      <div class="register-form">
        <el-form ref="registerForm" :model="registerForm" :rules="rules" @validate="handleValidate">
          <el-form-item prop="phone">
            <el-input v-model="registerForm.phone" type="text" autocomplete="off" :placeholder="$t('account.phonePlaceholder')" :maxlength="11"></el-input>
          </el-form-item>
          <el-form-item prop="code">
            <input-code v-model="registerForm.code" :disabled="!canInputCode" @verify-success="handleVerifySuccess"></input-code>
          </el-form-item>
          <el-form-item prop="password">
            <input-password v-model="registerForm.password" autocomplete="new-password"></input-password>
          </el-form-item>
          <el-form-item prop="username">
            <el-input v-model="registerForm.username" type="text" autocomplete="off" :placeholder="$t('account.register.namePlaceholder')"></el-input>
          </el-form-item>
          <div class="terms-of-use">
            {{ $t('account.register.termsOfuseText.prefix') }}<span @click="handleTermsOfUse">{{ $t('account.register.termsOfuseText.suffix') }}</span>
          </div>
          <el-button v-if="wxInfo" class="register-btn" type="primary" :loading="loading" @click="handleRegister">
            {{ $t('account.register.registerAndBind') }}
          </el-button>
          <el-button v-else class="register-btn" type="primary" :loading="loading" @click="handleRegister">
            {{ $t('account.register.registerText') }}
          </el-button>
          <div class="form-footer">
            <div class="login" @click="handleClick">
              {{ $t('account.loginText.prefix') }}<span>{{ $t('account.loginText.suffix') }}</span>
            </div>
          </div>
        </el-form>
      </div>
    </account-modal>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AccountModal from '../account-modal/account-modal.vue'
import InputCode from '@/components/input-code'
import InputPassword from '@/components/input-password'
import { PhoneValidator, CodeValidator, PasswordValidator, MaxLengthValidator, generateValidator } from '@/utils'
import {
  SET_MODAL_OFFSET_TOP
} from '@/store/theme.store.js'
import {
  SET_USER_INFO,
  SET_TOKEN
} from '@/store/auth.store.js'
import apis from '@/api'

export default {
  components: {
    'account-modal': AccountModal,
    'input-password': InputPassword,
    'input-code': InputCode
  },
  data() {
    return {
      loading: false,
      canInputCode: false,
      registerForm: {
        phone: '',
        code: '',
        password: '',
        username: ''
      },
      rules: {
        phone: [
          generateValidator('required', this.$t('account.formValidate.phone.required')),
          generateValidator(PhoneValidator(this.$t('account.formValidate.phone.format')))
        ],
        code: [
          generateValidator('required', this.$t('account.formValidate.code.required')),
          generateValidator(CodeValidator(this.$t('account.formValidate.code.format')))
        ],
        password: [
          generateValidator('required', this.$t('account.formValidate.password.required')),
          generateValidator(PasswordValidator(this.$t('account.formValidate.password.format'))),
          generateValidator(MaxLengthValidator(32, this.$t('account.formValidate.password.maxlength')))
        ],
        username: [
          generateValidator('required', this.$t('account.formValidate.username.required')),
          generateValidator(MaxLengthValidator(32, this.$t('account.formValidate.username.maxlength')))
        ]
      }
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
  },
  beforeDestroy() {
    this.$bomEventPlugin.removeBomEventListener('beforeunload')
    // 登陆成功要清空veux中的wxInfo微信信息
    if (!this.$route || this.$route.name !== 'login') {
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
      setToken: SET_TOKEN
    }),
    handleVerifySuccess(callback) {
      if (this.registerForm.phone) {
        const request = {
          ...apis.SEND_PHONE_CODE,
          params: {
            type: 'register',
            phone: this.registerForm.phone
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
    handleClick() {
      this.$router.push('/account/login')
    },
    handleValidate(prop, isRight, errMsg) {
      if (prop === 'phone') {
        this.canInputCode = isRight
      }
    },
    handleRegister() {
      this.$refs.registerForm.validate((valid) => {
        if (valid) {
          // 登陆要带上微信的信息
          const wxParams = {}
          if (this.wxInfo) {
            wxParams.wxOpenId = this.wxInfo.wxOpenId
            wxParams.wxUnionId = this.wxInfo.wxUnionId
            wxParams.wxAccount = this.wxInfo.wxAccount
          }
          const request = {
            ...apis.USER_REGISTER,
            params: {
              ...this.registerForm,
              ...wxParams
            }
          }
          this.loading = true
          this.$request(request).asyncThen(resp => {
            if (resp.code === 'ok') {
              this.loading = false
              this.setToken(resp.data.token)
              this.setUserInfo(resp.data.user)
            }
          }, () => {
            this.loading = false
          }).asyncErrorCatch(() => {
            this.loading = false
          })
        } else {
          return false
        }
      })
    },
    handleTermsOfUse() {
      window.open(`${window.location.origin}/terms-of-use/`)
    }
  }
}
</script>

<style lang="scss">
.register {
  user-select: none;
  .el-input__suffix {
    right: 0;
  }
  .register-form {
    margin-top: 60px;
    .terms-of-use {
      color: $--app-notice-color;
      line-height: $--app-title-fontSize;
      margin-bottom: 20px;
      font-size: $--app-title-fontSize;
      cursor: pointer;
      span {
        color: $--app-primary-color;
      }
    }
    .register-btn {
      border: 0;
      width: 100%;
      margin-bottom: 20px;
    }
    .form-footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      span {
        color: $--app-primary-color;
        font-size: $--app-title-fontSize;
        cursor: pointer;
      }
      .login {
        color: $--app-notice-color;
        font-size: $--app-title-fontSize;
      }
    }
  }
}
</style>

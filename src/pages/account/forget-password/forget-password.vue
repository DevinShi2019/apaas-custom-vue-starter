<template>
  <div class="account-page forget-password">
    <account-modal :height="432">
      <div class="forget-password-form">
        <el-form ref="forgetPasswordForm" :model="forgetPasswordForm" :rules="rules" @validate="handleValidate">
          <el-form-item prop="phone">
            <el-input v-model="forgetPasswordForm.phone" type="text" autocomplete="off" :placeholder="$t('account.phonePlaceholder')" :maxlength="11"></el-input>
          </el-form-item>
          <el-form-item prop="code">
            <input-code v-model="forgetPasswordForm.code" :disabled="!canInputCode" @verify-success="handleVerifySuccess"></input-code>
          </el-form-item>
          <el-form-item prop="password">
            <input-password v-model="forgetPasswordForm.password" autocomplete="new-password"></input-password>
          </el-form-item>
          <el-button class="update-password-btn" type="primary" :loading="loading" @click="handleUpdatePassword">
            {{ $t('account.forgetPassword.updatePasswordText') }}
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
import AccountModal from '../account-modal/account-modal.vue'
import InputPassword from '@/components/input-password'
import InputCode from '@/components/input-code'
import { PhoneValidator, CodeValidator, PasswordValidator, MaxLengthValidator, generateValidator } from '@/utils'
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
      forgetPasswordForm: {
        phone: '',
        code: '',
        password: ''
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
        ]
      }
    }
  },
  methods: {
    handleVerifySuccess(callback) {
      if (this.forgetPasswordForm.phone) {
        const request = {
          ...apis.SEND_PHONE_CODE,
          params: {
            type: 'forgetPassword',
            phone: this.forgetPasswordForm.phone
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
    handleUpdatePassword() {
      this.$refs.forgetPasswordForm.validate((valid) => {
        if (valid) {
          const request = {
            ...apis.USER_MODIFY_PASSWORD_BY_PHONE,
            params: {
              ...this.forgetPasswordForm
            }
          }
          this.loading = true
          this.$request(request).asyncThen(resp => {
            if (resp.code === 'ok') {
              this.loading = false
              this.$router.push({
                path: '/account/login',
                query: {
                  account: this.forgetPasswordForm.phone
                }
              })
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
    }
  }
}
</script>

<style lang="scss">
.forget-password {
  user-select: none;
  .el-input__suffix {
    right: 0;
  }
  .forget-password-form {
    margin-top: 60px;
    .update-password-btn {
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
        font-size: 14px;
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

<template>
  <div class="other-login">
    <div class="login-split">
      <div class="split-line"></div>
      <div v-if="!wxInfo" class="split-name">
        {{ $t('account.login.orText') }}
      </div>
      <div class="split-line"></div>
    </div>
    <div v-if="!wxInfo" class="login-footer">
      <div class="login-item" @click="handlerWxLogin">
        <x-svg-icon name="weixin"></x-svg-icon>
      </div>
    </div>
    <div v-else class="login-footer wx-error">
      <span>{{ $t('account.wxLogin.errorInfo1') }}</span>
      <span>{{ $t('account.wxLogin.errorInfo2') }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    wxInfo: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    handlerWxLogin() {
      this.$emit('wx-login', 'wx-login')
    }
  }
}
</script>
<style lang="scss">
.other-login {
  padding-top: 33px;
}
</style>

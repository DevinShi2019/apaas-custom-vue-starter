<template>
  <div class="wx-login">
    <div id="wx_login_container"></div>
    <div class="go-back" @click="handlerBack">
      {{ $t('account.goBack') }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'WxLogin',
  data() {
    return {
      // 生产环境, 微信appId
      appId: '',
      // 二维码样式base64
      QRCodeStyle: `data:text/css;base64,`
    }
  },
  mounted() {
    this.setWxerwma()
  },
  methods: {
    handlerBack() {
      this.$emit('login-type-change', 'default-login')
    },
    // 设置微信二维码
    setWxerwma () {
      const s = document.createElement('script')
      s.type = 'text/javascript'
      s.src = 'https://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js'
      const wxElement = document.body.appendChild(s)
      const uri = `${window.location.origin}${process.env.VUE_APP_PUBLIC_PATH}callback/wx/`
      wxElement.onload = () => {
        // eslint-disable-next-line no-undef
        const obj = new WxLogin({
          id: 'wx_login_container', // 需要显示的容器id
          appid: this.appId, // 公众号appid wx*******
          scope: 'snsapi_login', // 网页默认即可
          redirect_uri: encodeURIComponent(uri), // 授权成功后回调的url
          state: Math.ceil(Math.random() * 1000), // 可设置为简单的随机数加session用来校验
          style: 'black', // 提供"black"、"white"可选。二维码的样式
          href: this.QRCodeStyle // 外部css文件url，需要https
        })
        if (!obj) {
          console.error('wx-error')
        }
      }
    }
  }
}
</script>
<style lang="scss">
.wx-login {
  margin-top: 25px;
  #wx_login_container {
    display: flex;
    justify-content: center;
    align-items: center;
    iframe {
      height: 300px;
    }
  }
  .go-back {
    font-size: 14px;
    color: $--app-notice-color;
    position: absolute;
    right: 40px;
    bottom: 60px;
    cursor: pointer;
    &:hover {
      color: $--app-primary-color;
    }
  }
}
</style>

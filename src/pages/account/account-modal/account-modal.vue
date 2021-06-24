<template>
  <div class="account-modal" :style="{'top': top ? (top + 'px') : (theme.modalOffsetTop + 'px'), 'height': height + 'px'}">
    <div v-if="logo" class="logo">
      <img src="~@/assets/img/logo.png" alt="logo">
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    height: {
      type: Number,
      default: 400
    },
    top: {
      type: Number,
      default: 0
    },
    logo: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    ...mapState({
      theme: (state) => state.themeModule.theme
    })
  }
}
</script>

<style lang="scss">
.account-modal {
  position: absolute;
  left: 50%;
  margin-left: -200px;
  width: 400px;
  padding: 40px;
  background-color: $--app-info-color;
  box-shadow: 0 0 8px 0 $--app-split-color;
  border-radius: 2px;
  box-sizing: border-box;
  .logo {
    width: 140px;
    height: 36px;
    margin-top: 20px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

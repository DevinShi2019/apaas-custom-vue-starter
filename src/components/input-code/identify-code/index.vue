<template>
  <div class="identify-code">
    <el-popover
      v-model="visiable"
      trigger="click"
      placement="top"
      :popperClass="popperClass"
      :disabled="!btnDisabled && disabled"
      @show="handleShow"
      @hide="handleHide"
    >
      <slide-block v-if="visiable" @success="handleSuccess"></slide-block>
      <template v-if="disabled">
        <el-button slot="reference" type="info" class="identigy-btn">
          {{ count + $t('component.input-code.codeDisabledSuffixText') }}
        </el-button>
      </template>
      <template v-else>
        <el-button slot="reference" type="primary" class="identigy-btn" :disabled="btnDisabled" :loading="loading">
          {{ loading ? '' : btnText }}
        </el-button>
      </template>
    </el-popover>
  </div>
</template>

<script>
import SlideBlock from './slide-block'

export default {
  components: {
    'slide-block': SlideBlock
  },
  props: {
    'btnText': {
      type: String,
      default() {
        return this.$t('component.input-code.codeBtnText')
      }
    },
    'btnDisabled': {
      type: Boolean,
      default: false
    },
    'popperClass': {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      visiable: false,
      disabled: false,
      count: 60,
      timer: null,
      loading: false,
      showCanvas: true
    }
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    handleShow() {
      this.visiable = true
      this.$emit('show-popover')
    },
    handleHide() {
      this.visiable = false
    },
    handleSuccess() {
      this.handleHide()
      this.loading = true
      this.$emit('verify-success', (isNeedTimer) => {
        this.loading = false
        if (typeof isNeedTimer === 'undefined' || isNeedTimer) {
          this.disabled = true
          this.initTimer()
        }
      })
    },
    initTimer() {
      this.count = 60
      if (this.timer) clearInterval(this.timer)
      this.timer = setInterval(() => {
        this.count--
        if (this.count === 0) {
          this.disabled = false
        }
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.identify-code {
  height: 34px;
  line-height: 34px;
  .identigy-btn {
    width: 100px;
    text-align: center;
    padding: 0 !important;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}
</style>

<style lang="scss">
.identify-code {
  .el-button--info {
    background-color: $--app-notice-color;
    border-color: $--app-notice-color;
  }
}
</style>

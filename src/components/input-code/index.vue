<template>
  <div class="input-code">
    <el-input :value="value" :autocomplete="autocomplete" :placeholder="placeholder" type="text" :disabled="disabled" :maxlength="6" @input="handleInput">
      <template v-slot:suffix>
        <identify-code
          :popperClass="popperClass"
          :btnDisabled="disabled"
          @show-popover="showPopover"
          @verify-success="handleVerifySuccess"
        ></identify-code>
      </template>
    </el-input>
  </div>
</template>

<script>
import IdentifyCode from './identify-code'
export default {
  components: {
    'identify-code': IdentifyCode
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    autocomplete: {
      type: String,
      default: 'off'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default() {
        return this.$t('component.input-code.codePlaceholder')
      }
    },
    popperClass: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleVerifySuccess(callback) {
      this.$emit('verify-success', callback)
    },
    handleInput(value) {
      this.$emit('input', value)
    },
    showPopover() {
      this.$emit('show-popover')
    }
  }
}
</script>

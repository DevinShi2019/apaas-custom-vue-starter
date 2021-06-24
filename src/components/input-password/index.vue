<template>
  <div class="input-password">
    <el-input :value="value" :type="type" :autocomplete="autocomplete" :placeholder="placeholder" @input="handleInput">
      <template v-slot:suffix>
        <div v-if="showPassword" class="password-visiable" @click="toggleVisiable">
          <x-svg-icon v-if="!visiable" class="visiable-icon" name="password-hide"></x-svg-icon>
          <x-svg-icon v-else class="visiable-icon" name="password-show"></x-svg-icon>
        </div>
      </template>
    </el-input>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    autocomplete: {
      type: String,
      default: 'off'
    },
    placeholder: {
      type: String,
      default() {
        return this.$t('common.input-password.placeholder')
      }
    },
    showPassword: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      type: 'password',
      visiable: false
    }
  },
  methods: {
    toggleVisiable() {
      this.visiable = !this.visiable
      if (this.visiable) {
        this.type = 'text'
      } else {
        this.type = 'password'
      }
    },
    handleInput(value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss" scoped>
.input-password {
  .password-visiable {
    .visiable-icon {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>

<style lang="scss">
.input-password {
  .el-input__suffix {
    display: flex;
    justify-content: center;
    align-items: center;
    right: 8px !important;
  }
}
</style>

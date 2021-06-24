<template>
  <div class="select-editor">
    <sechma-form-item :label="config.label" :prop="config.prop" :help="config.help" :rules="rules">
      <el-select
        v-model="formData[config.prop]"
        :clearable="config.clearable"
        :filterable="config.filterable"
        :placeholder="config.placeholder"
        @visible-change="handleVisibleChange"
        @change="handleChange"
      >
        <template v-for="option in options">
          <el-option :key="option.value" :label="option.label" :value="option.value" :disabled="option.disabled"></el-option>
        </template>
      </el-select>
    </sechma-form-item>
  </div>
</template>

<script>
import SechmaEditorMixin from './sechmaEditor.mixin'
import SechmaFormItem from '../sechma-form-item'
import { generateValidator } from '@/utils'

export default {
  components: {
    SechmaFormItem
  },
  inject: ['elForm'],
  mixins: [SechmaEditorMixin],
  data() {
    return {
      asyncOptions: []
    }
  },
  computed: {
    required() {
      let required = false
      if (typeof this.config.required === 'boolean') {
        required = this.config.required
      } else if (typeof this.config.required === 'function') {
        required = this.config.required(this.formData)
      }

      if (!required) {
        this.elForm && this.elForm.clearValidate(this.config.prop)
      }

      return required
    },
    rules() {
      let rules = []
      if (this.required) {
        rules.push(generateValidator('required', `请选择${this.config.label}`))
      }
      return rules
    },
    options: {
      get() {
        let options = []
        if (Array.isArray(this.config.options)) {
          options = this.config.options
        } else { // 其他情况默认为options需要异步获取
          options = this.asyncOptions
        }
        return options.map(option => {
          if (typeof option.enable === 'function') {
            option.disabled = !option.enable()
          } else {
            option.disabled = false
          }
          return option
        })
      },
      set(options) {
        this.asyncOptions = options
      }
    }
  },
  created() {
    // 异步获取options时第一次需要有值
    if (typeof this.config.asyncOptions === 'function') {
      this.config.asyncOptions((options) => {
        this.options = options
      })
    }
  },
  methods: {
    handleVisibleChange(visible) {
      if (this.config.hooks && typeof this.config.hooks.visibleChange === 'function') {
        this.config.hooks.visibleChange.call(this, visible)
      }
    },
    handleChange(value) {
      if (this.config.hooks && typeof this.config.hooks.change === 'function') {
        this.config.hooks.change.call(this, value, this.formData)
      }
    }
  }
}
</script>

<style lang="scss">
.select-editor {
  .el-select-group {
    width: 100%;
  }
}
</style>

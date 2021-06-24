<template>
  <div class="radio-editor">
    <sechma-form-item :label="config.label" :prop="config.prop">
      <el-radio-group v-model="formData[config.prop]" :disabled="config.disabled" @change="handleChange">
        <template v-for="option in config.options">
          <el-radio :key="option.value" :label="option.value">
            {{ option.label }}
          </el-radio>
        </template>
      </el-radio-group>
    </sechma-form-item>
  </div>
</template>

<script>
import SechmaEditorMixin from './sechmaEditor.mixin'
import SechmaFormItem from '../sechma-form-item'

export default {
  components: {
    SechmaFormItem
  },
  mixins: [SechmaEditorMixin],
  methods: {
    handleChange(value) {
      if (this.config.hooks && typeof this.config.hooks.change === 'function') {
        this.config.hooks.change.call(this, value, this.formData)
      }
    }
  }
}
</script>

<style lang="scss">
.radio-editor {
  .el-radio-group {
    width: 100%;
  }
}
</style>

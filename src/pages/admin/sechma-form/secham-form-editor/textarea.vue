<template>
  <div class="textarea-editor">
    <sechma-form-item :label="config.label" :prop="config.prop" :rules="rules">
      <el-input
        v-model="formData[config.prop]"
        type="textarea"
        :maxlength="config.maxlength"
        :placeholder="config.placeholder"
        :disabled="config.disabled"
        :style="style"
      >
      </el-input>
    </sechma-form-item>
  </div>
</template>

<script>
import SechmaEditorMixin from './sechmaEditor.mixin'
import { generateValidator } from '@/utils'
import SechmaFormItem from '../sechma-form-item'

export default {
  components: {
    SechmaFormItem
  },
  mixins: [SechmaEditorMixin],
  data() {
    let rules = this.config.required && generateValidator('required', `请输入${this.config.label}`)
    return {
      rules: rules
    }
  },
  computed: {
    style() {
      return {
        resize: this.config.autosize ? 'vertical' : 'none',
        height: (this.config.height || 100) + 'px'
      }
    }
  }
}
</script>

<style lang="scss">
.textarea-editor {
  .el-textarea {
    .el-textarea__inner {
      resize: inherit;
    }
    > textarea {
      height: 100%;
    }
  }
}
</style>

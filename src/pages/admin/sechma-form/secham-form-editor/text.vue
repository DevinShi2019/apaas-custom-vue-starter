<template>
  <div class="text-editor" :class="config.textEditorClass">
    <sechma-form-item :label="config.label" :prop="config.prop" :rules="rules" :required="config.required">
      <el-input
        v-model="formData[config.prop]"
        :maxlength="config.maxlength"
        :placeholder="config.placeholder"
        :disabled="config.disabled"
      >
        <template v-if="config.suffixIcon" v-slot:suffix>
          <x-svg-icon :name="config.suffixIcon" :class="config.suffixIconClass" @click.native="hanldeSuffixClick"></x-svg-icon>
        </template>
      </el-input>
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
  mixins: [SechmaEditorMixin],
  computed: {
    rules() {
      let rules = []
      if (this.config.required) {
        rules.push(generateValidator('required', `请输入${this.config.label}`))
      }
      return rules
    }
  },
  methods: {
    hanldeSuffixClick() {
      if (this.config.hooks && typeof this.config.hooks.suffixClick === 'function') {
        this.config.hooks.suffixClick.call(this, this.formData[this.config.prop], this.formData)
      }
    }
  }
}
</script>

<style lang="scss">
.text-editor {
  .el-input__suffix {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>

<template>
  <el-form ref="elForm" class="sechma-form" v-bind="$attrs" :model="model" v-on="$listeners">
    <template v-for="(rowSechma, rowIdx) in sechmaConfig">
      <el-row :key="rowIdx" :gutter="rowSechma.gutter">
        <template v-for="(colSechma, colIdx) in rowSechma.editors">
          <el-col :key="colIdx" :span="colSechma.position.col">
            <sechma-form-block :rowConfig="rowSechma" :colConfig="colSechma" :model="model">
              <component
                :is="colSechma.type"
                :config="colSechma"
                :formData="model"
              ></component>
            </sechma-form-block>
          </el-col>
        </template>
      </el-row>
    </template>
  </el-form>
</template>

<script>
import SechmaFormBlock from './sechma-form-block'
import SechmaEditors from './secham-form-editor'

export default {
  components: {
    SechmaFormBlock,
    ...SechmaEditors
  },
  props: {
    model: {
      type: Object,
      default() {
        return {}
      }
    },
    sechmaConfig: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    validate(callback) {
      this.$refs.elForm && this.$refs.elForm.validate((valid, invalidFields) => {
        callback(valid, invalidFields)
      })
    },
    clearValidate(props) {
      this.$refs.elForm && this.$refs.elForm.clearValidate(props)
    }
  }
}
</script>

<style lang="scss">
.sechma-form {

}
</style>

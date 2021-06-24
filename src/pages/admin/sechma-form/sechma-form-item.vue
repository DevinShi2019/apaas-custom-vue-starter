<template>
  <div class="sechma-form-item">
    <el-form-item
      ref="elFormItem"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <template v-slot:label>
        <span class="sechma-form-item__label">{{ label }}</span>
        <el-tooltip v-if="help.length > 0" placement="top">
          <template v-slot:content>
            <ul class="sechma-form-item__help">
              <template v-for="row in help">
                <li :key="row" class="sechma-form-item__text">
                  {{ row }}
                </li>
              </template>
            </ul>
          </template>
          <x-svg-icon class="pointer" name="helper-icon"></x-svg-icon>
        </el-tooltip>
      </template>
      <slot></slot>
    </el-form-item>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    help: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    validate(triggerName, callback) {
      this.$refs.elFormItem && this.$refs.elFormItem.validate(triggerName, callback)
    },
    clearValidate() {
      this.$refs.elFormItem && this.$refs.elFormItem.clearValidate()
    }
  }
}
</script>

<style lang="scss">
.sechma-form-item {
  .el-form-item__label {
    display: flex;
    .svg-helper-icon {
      color: $--app-notice-color;
      margin-left: 4px;
    }
  }

  .el-tooltip {
    z-index: 10;
  }
}

.sechma-form-item__help {
  .sechma-form-item__text {
    margin-bottom: 8px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>

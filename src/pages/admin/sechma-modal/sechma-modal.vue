<template>
  <x-modal
    :destroy-on-close="true"
    :modal="false"
    :customModalBg="true"
    :title="title"
    :closeConfig="closeConfig"
    :modalVisible.sync="visible"
    width="middle"
    wrapper-class="sechma-modal"
  >
    <x-loading
      :visible="loading"
    >
      <sechma-form
        ref="sechmaForm"
        label-position="top"
        :model="model"
        :sechmaConfig="sechmaConfig"
      ></sechma-form>
    </x-loading>
    <template v-slot:footer>
      <div class="sechma-modal__footer">
        <div v-if="isContinue" class="sechma-modal__save-continue">
          <el-checkbox v-model="saveContinue">
            继续创建下一个
          </el-checkbox>
        </div>
        <div class="sechma-modal__ops">
          <el-button @click="handleCancel">
            {{ $t('common.cancel') }}
          </el-button>
          <el-button type="primary" @click="handleConfirm">
            {{ $t('common.confirm') }}
          </el-button>
        </div>
      </div>
    </template>
  </x-modal>
</template>

<script>
import { isObject, isPromise } from '@/utils'
import SechmaForm from '../sechma-form/sechma-form'

export default {
  components: {
    SechmaForm
  },
  props: {
    title: String,
    sechmaConfig: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      model: {},
      visible: false,
      loading: false,
      isContinue: true,
      saveContinue: false,
      closeConfig: {
        onClose: this.handleCancel
      },
      resolve: null,
      reject: null
    }
  },
  methods: {
    initModal(config) {
      this.isContinue = config.isContinue
      let result = config.getModel()
      if (isPromise(result)) {
        this.loading = true
        result.then(model => {
          this.loading = false
          this.model = model
          this.$nextTick(() => {
            this.$refs.sechmaForm.clearValidate()
          })
        })
      } else if (isObject(result)) {
        this.model = result
      }
    },
    openModal(config) {
      return new Promise((resolve, reject) => {
        this.resolve = resolve
        this.reject = reject
        this.initModal(config)
        this.visible = true
      })
    },
    handleCancel() {
      this.reject(new Error('user cancel ops'))
    },
    handleConfirm() {
      this.resolve()
    }
  }
}
</script>

<style lang="scss">
.sechma-modal {
  .sechma-modal__footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .sechma-modal__save-continue {
    display: flex;
    flex: 1;
  }
}
</style>

import WidgetRequiredValidator from '@/validator/widget-required-validator'
import debounce from 'lodash-es/debounce'

const FormWidgetConfigMixin = {
  data() {
    return {
      tabindex: '0',
      componentData: null,
      widgetRules: null,
      valueChanged: false,
      bsUnwatch: null,
      bsRefreshDebounce: debounce((newValue, oldValue) => {
        if (newValue !== oldValue) {
          // 调用触发业务事件
          console.log('调用值改变触发业务事件')
          let event
          if (this.widget.isInTable) {
            event = {
              currentRowTableUuid: this.widget.tableUuid,
              currentRowIndex: this.rowIndex
            }
          }
          try {
            this.formEngine.bsEventControl.triggerEventValueChange(this.widget, event)
          } catch (error) {
            console.error(error)
          }
        }
      }, 500)
    }
  },
  props: {
    widget: {
      required: true
    },
    renderScene: {
      type: String,
      required: true,
      validator: function(value) {
        const values = ['ide', 'edit', 'read']
        // 这个值必须匹配下列字符串中的一个
        return values.includes(value)
      }
    },
    propKey: {
      type: String,
      default: ''
    },

    validateKey: {
      type: String,
      default: ''
    },
    validateInfo: {
      type: Object
    },
    formData: {
      type: Object
    },
    globalFormData: {
      type: Object
    },

    globalData: {
      type: Object
    },

    formItemList: {
      type: Array,
      default: function() {
        return []
      }
    },

    formRuleConfig: {
      type: Object
    },
    valueValidatedStatus: {
      type: Boolean,
      default: true
    },
    rowIndex: {
      type: Number
    }
  },
  inject: ['renderGlobal'],
  computed: {
    formValue: {
      get() {
        // 回调函数 当需要读取当前属性值是执行，根据相关数据计算并返回当前属性的值
        this.valueChanged = false
        if (this.valueValidatedStatus) {
          return this.propKey ? this.formData[this.propKey] : undefined
        } else {
          return undefined
        }
      },
      set(value) {
        if (this.formData[this.propKey] !== value) {
          // 避免tab切换引起的校验
          this.valueChanged = true
          // this.formData[this.propKey] = value
          this.$set(this.formData, this.propKey, value)
          // this.$emit('validate:propKey', this.propKey)
          // this.formEngine.formDataControl.updateFormValue({ ...this.formData })
          // this.$emit('update:formData', { ...this.formData }, this.propKey)
          this.$formEventEmit('change', value)
        }
      }
    },
    formEngine() {
      // return this.renderGlobal.formEngine
      return this.renderGlobal
    },
    formEngineContext() {
      return (this.formEngine && this.formEngine.engineContext) || {}
    },
    validatorRules() {
      let rules = []
      if (this.renderScene === 'edit') {
        if (this.showRequired) {
          if (this._validate) {
            rules.push(this._validate('required', `${this.widget.label}是必填字段`))
          }
        }

        if (this.widgetRules) {
          rules = [...rules, ...this.widgetRules]
        }
      }
      return rules
    },
    showRequired() {
      // return this.widget.required && !this.widget.readOnly && !this.widget.hidden
      return this.widget.required
    }
  },
  mounted() {
    // mixin的beforeCreate > 父beforeCreate > mixin的created > 父created > mixin的beforeMount > 父beforeMount > 子beforeCreate > 子created > 子beforeMount > 子mounted > mixin的mounted >父mounted
    // 刷新表格
    if (this.renderScene === 'edit' || this.renderScene === 'read') {
      setTimeout(() => {
        this.bsUnwatch = this.$watch(
          function() {
            const assoValue = this.formData && this.formData[this.propKey]
            let jsonObject = ''
            try {
              jsonObject = JSON.stringify(assoValue)
            } catch (error) {
              jsonObject = assoValue
            }
            return jsonObject
          },
          (newValue, oldValue) => {
            if (newValue !== oldValue) {
              this.bsRefreshDebounce(newValue, oldValue)
            }
          }
        )
      }, 1000)
    }
  },
  destroyed() {
    if (this.bsUnwatch) {
      this.bsUnwatch()
    }
  },
  methods: {
    _validate(type, message, trigger = ['blur', 'change'], isI18n = false) {
      // 生成验证器
      const validator = {
        trigger: trigger
      }
      if (typeof type === 'string') {
        validator.type = type
        if (type === 'required') {
          validator.validator = WidgetRequiredValidator(isI18n ? this.$t(message) : message)
        }
        validator.message = isI18n ? this.$t(message) : message
      } else if (typeof type === 'function') {
        validator.validator = type
      }

      return validator
    },
    updatePropValue(key, value) {
      // 表格组件新建一条数据时 formData 里面没有值，会导致值没有渲染，所以要调换一下顺序
      this.$set(this.formData, key, value)
      this.formData[key] = value
      // this.formEngine.formDataControl.updateFormValue({ ...this.formData })
      // this.$emit('update:formData', { ...this.formData }, this.key)
    },
    mapAdapter(...args) {
      return this.$formBuildEngine.mapAdapter(args)
    },
    mapEvent(...args) {
      return this.$formBuildEngine.mapEvent(args)
    },
    $formEventEmit(eventName, event) {
      this.$emit(eventName, event)
      this.$emit('formEventEmit', {
        eventName: eventName,
        propKey: this.propKey,
        event: event,
        widget: this.widget
      })
    }
  }
}

export default FormWidgetConfigMixin

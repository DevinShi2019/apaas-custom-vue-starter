/*
 * @Author: Devin
 * @Date: 2021-07-29 17:54:22
 * @LastEditTime: 2021-07-29 18:36:44
 * @LastEditors: Devin
 * @Description:
 * email: das.devin@outlook.com
 */
const SearchComponentMixin = {
  model: {
    prop: 'searchValue',
    event: 'change'
  },
  props: {
    label: {
      type: String,
      required: true
    },
    searchKey: {
      type: String,
      required: true
    },
    searchValue: {
      required: true
    },
    extraConfig: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    computedValue: {
      get: function() {
        return this.searchValue
      },
      set: function (value) {
        debugger
        this.$emit('change', value)
      }
    }
  }
}

export default SearchComponentMixin

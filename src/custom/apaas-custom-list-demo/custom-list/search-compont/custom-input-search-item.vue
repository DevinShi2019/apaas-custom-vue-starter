<template>
  <div class="custom-input-search-item">
    <el-form-item>
      <!-- <template slot="label">
        <x-ellipsis
          class="fix-cursor"
          mode="origin"
          :openDelay="300"
          :label="compInfo.label"
        ></x-ellipsis>
      </template> -->
      <el-input
        v-model="computeValue[0]"
        :placeholder="'请输入'"
        @input="change"
      ></el-input>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: 'CustomInputSearchItem',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    compInfo: {
      type: Object,
      default: function() {
        return {}
      }
    },
    value: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    computeValue: {
      get: function() {
        return this.value
      },
      set: function(value) {
        this.$emit('change', value)
      }
    }
  },
  watch: {},
  methods: {
    change(e) {
      if (e === '') {
        this.computeValue = []
      }
    }
  }
}
</script>
<style lang="scss">
// .custom-input-search-item {
// }
</style>

<!--
 * @Author: Devin
 * @Date: 2021-07-29 17:33:53
 * @LastEditTime: 2021-07-30 15:59:29
 * @LastEditors: Devin
 * @Description:
 * email: das.devin@outlook.com
-->
<template>
  <div class="search-component search-number">
    <el-form-item>
      <template slot="label">
        <x-ellipsis class="fix-cursor" mode="origin" :label="label"></x-ellipsis>
      </template>
      <div class="range-item">
        <x-number-input
          v-model="minValue"
          :placeholder="'请输入'"
          class="form-el-input-number"
        ></x-number-input>
        <div class="range-item-divide">
          ~
        </div>
        <x-number-input
          v-model="maxValue"
          :placeholder="'请输入'"
          class="form-el-input-number"
        ></x-number-input>
      </div>
    </el-form-item>
  </div>
</template>

<script>
import SearchComponentMixin from './search-component.mixin'
export default {
  name: 'SearchNumber',
  mixins: [SearchComponentMixin],
  computed: {
    minValue: {
      get: function() {
        return this.computedValue && this.computedValue[0]
      },
      set: function(minValue) {
        const numberRages = this.computedValue ? [...this.computedValue] : []
        numberRages[0] = minValue
        this.computedValue = [...numberRages]
      }
    },
    maxValue: {
      get: function() {
        return this.computedValue && this.computedValue[1]
      },
      set: function(maxValue) {
        const numberRages = this.computedValue ? [...this.computedValue] : []
        numberRages[1] = maxValue
        this.computedValue = [...numberRages]
      }
    }
  }
}
</script>

<style lang="scss">
.search-number {
  .range-item {
    display: flex;
    width: 100%;

    .range-item-divide {
      padding: 0 8px;
    }
  }
}
</style>

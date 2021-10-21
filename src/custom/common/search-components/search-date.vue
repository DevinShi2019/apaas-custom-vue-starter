<!--
 * @Author: Devin
 * @Date: 2021-07-29 17:33:53
 * @LastEditTime: 2021-07-29 18:35:43
 * @LastEditors: Devin
 * @Description:
 * email: das.devin@outlook.com
-->
<template>
  <div class="search-component search-date">
    <el-form-item>
      <template slot="label">
        <x-ellipsis class="fix-cursor" mode="origin" :label="label"></x-ellipsis>
      </template>
      <el-date-picker
        v-model="computedValue"
        :type="dateDisplayStyle"
        range-separator="~"
        :value-format="valueFormat"
        :start-placeholder="'开始时间'"
        :end-placeholder="'结束时间'"
      >
      </el-date-picker>
    </el-form-item>
  </div>
</template>

<script>
import SearchComponentMixin from './search-component.mixin'
export default {
  name: 'SearchDate',
  mixins: [SearchComponentMixin],
  computed: {
    dateDisplayStyle() {
      if (this.extraConfig.dateDisplayStyle === 'DATE_TIME') {
        return 'datetimerange'
      } else if (this.extraConfig.dateDisplayStyle === 'YEAR_MONTH') {
        return 'monthrange'
      } else if (this.extraConfig.dateDisplayStyle === 'ONLY_YEAR') {
        return 'year'
      } else {
        return 'daterange'
      }
    },
    valueFormat() {
      if (this.extraConfig.dateDisplayStyle === 'DATE_TIME') {
        return 'yyyy-MM-dd HH:mm:ss'
      } else if (this.extraConfig.dateDisplayStyle === 'YEAR_MONTH') {
        return 'yyyy-MM'
      } else if (this.extraConfig.dateDisplayStyle === 'ONLY_YEAR') {
        return 'yyyy'
      } else {
        return 'yyyy-MM-dd'
      }
    }
  }
}
</script>

<style lang="scss">
.search-date {
  .el-date-editor {
    &.el-input__inner {
      max-width: 100%;
    }
    .el-range__icon {
      margin-bottom: 8px;
    }
  }
}
</style>

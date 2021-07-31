<!--
 * @Author: Devin
 * @Date: 2021-07-29 17:33:53
 * @LastEditTime: 2021-07-29 18:23:55
 * @LastEditors: Devin
 * @Description:
 * email: das.devin@outlook.com
-->
<template>
  <div class="search-component search-input">
    <el-form-item>
      <template slot="label">
        <x-ellipsis class="fix-cursor" mode="origin" :label="label"></x-ellipsis>
      </template>
      <el-input v-model="computedValue" placeholder="请输入"></el-input>
    </el-form-item>
  </div>
</template>

<script>
import SearchComponentMixin from './search-component.mixin'
export default {
  name: 'SearchInput',
  mixins: [SearchComponentMixin]
}
</script>

<style></style>

<template>
  <x-block-table
    :tableData="tableData"
    :colConfigs="sechmaConfig"
    :seqConfig="seqConfig"
    :seqType="seqType"
    :layout="layout"
    :pagination="pagination"
  >
    <template v-for="(scopedSlot, name) in $scopedSlots" v-slot:[name]="scope">
      <slot :name="name" v-bind="scope"></slot>
    </template>
    <template slot="empty">
      <x-empty-page></x-empty-page>
    </template>
  </x-block-table>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      default() {
        return []
      }
    },
    sechmaConfig: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      seqType: 'seq',
      layout: 'prev, pager, next, sizes',
      pagination: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      },
      seqConfig: {
        fixed: true,
        resizable: false
      }
    }
  }
}
</script>

<style>

</style>

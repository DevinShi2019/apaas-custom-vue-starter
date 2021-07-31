<!--
 * @Author: Devin
 * @Date: 2021-07-29 11:57:53
 * @LastEditTime: 2021-07-30 17:05:49
 * @LastEditors: Devin
 * @Description:
 * email: das.devin@outlook.com
-->
<template>
  <div class="apaas-custom-page-{{moduleName}} custom-page">
    <div class="page-header">
      <div class="title">
        自开发界面
      </div>
      <div class="operation">
        <x-svg-icon
          :name="'refresh-icon'"
          class="pointer"
          style="cursor: pointer;"
          @click.native="handleRefresh()"
        ></x-svg-icon>
      </div>
    </div>
    <div class="page-search-panel">
      <el-form class="search-list">
        <template v-for="searchConfig in searchListConfig">
          <component
            :is="searchConfig.component"
            :key="searchConfig.searchKey"
            :label="searchConfig.label"
            :extraConfig="searchConfig.extraConfig"
            :searchKey="searchConfig.searchKey"
            :searchValue="searchPanelValue[searchConfig.searchKey]"
            @change="handleSearchValueChange(searchConfig.searchKey, $event)"
          ></component>
        </template>
      </el-form>
      <div class="search-button-group">
        <el-button native-type="reset" @click="resetSearch()">
          重置
        </el-button>
        <el-button type="primary" @click="handleSearch()">
          查询
        </el-button>
      </div>
    </div>
    <div class="page-data-list">
      <x-vxe-table
        ref="vxeTable"
        :border="true"
        :seqWidth="40"
        :colConfigs="tableConfig.colConfigs"
        :tableData="tableData"
        :rowDraggable="tableConfig.rowDraggable"
        :seqType="tableConfig.seqType"
        :pagination="pagination"
        :layout="tableConfig.layout"
        :seqConfig="tableConfig.seqConfig"
        :autoSize="tableConfig.autoSize"
        :pageConfig="tableConfig.pageConfig"
        class="block-table"
        @table-row-click="rowClickEvent"
        @size-change="pageSizeChange"
        @current-page-change="currentChange"
        @select-data-change="selectDataChange"
      >
        <template
          v-for="(colConfig, index) in tableConfig.colConfigs"
          v-slot:[colConfig.customHeadSlot]="{ column }"
        >
          <div v-if="colConfig.customHeadSlot" :key="index"> {{ column }} {{ colConfig }} </div>
        </template>
        <template
          v-for="(colConfig, index) in tableConfig.colConfigs"
          v-slot:[colConfig.customSlot]="{ row, rowIndex }"
        >
          <div v-if="colConfig.customSlot === 'options'" :key="index + '' + rowIndex">
            <a
              href="javascript:void(0)"
              class="el-link el-link--primary"
              @click.stop="handleRowDetail(row)"
              >详情</a
            >
          </div>
          <div v-if="colConfig.customSlot === 'status'" :key="index + '' + rowIndex">
            <span
              v-if="row[colConfig.prop]"
              style="background: #67C23A; padding: 4px 8px; color: white; border-radius: 20px;"
              >生效</span
            >
            <span
              v-if="!row[colConfig.prop]"
              style="background: #F56C6C; padding: 4px 8px; color: white; border-radius: 20px;"
              >失效</span
            >
          </div>
        </template>
        <template slot="empty">
          <div class="table-empty">
            <x-empty-page></x-empty-page>
          </div>
        </template>
      </x-vxe-table>
    </div>
    <detail-drawer ref="detailDrawer"></detail-drawer>
  </div>
</template>

<script>
import SearchInput from '../../common/search-components/search-input.vue'
import SearchDate from '../../common/search-components/search-date.vue'
import SearchNumber from '../../common/search-components/search-number.vue'
import SearchSelect from '../../common/search-components/search-select.vue'

import DetailDrawer from './detail-drawer.vue'

export default {
  name: 'ApaasCustom{{ModuleName}}',
  components: {
    SearchInput,
    SearchDate,
    SearchNumber,
    SearchSelect,
    DetailDrawer
  },
  data: function() {
    return {
      searchPanelValue: {},
      tableData: [],
      pagination: { currentPage: 1, pageSize: 10, total: 0 }
    }
  },
  computed: {
    searchListConfig() {
      return [
        {
          component: 'SearchInput',
          label: '输入框',
          searchKey: 'queryInput'
        },
        { component: 'SearchDate', label: '日期', searchKey: 'queryDate' },
        { component: 'SearchNumber', label: '数字', searchKey: 'queryNumber' },
        {
          component: 'SearchSelect',
          label: '下拉框',
          searchKey: 'querySelect',
          extraConfig: {
            selectOptions: [
              {
                id: '1',
                label: '选项1'
              },
              { id: '2', label: '选项2' }
            ]
          }
        }
      ]
    },
    tableConfig() {
      return {
        rowDraggable: false,
        colConfigs: [
          {
            prop: 'po_no',
            showOverflowTooltip: true,
            label: '订单'
          },
          {
            prop: 'po_title',
            label: '描述',
            showOverflowTooltip: true,
            minWidth: '350'
          },
          { prop: 'po_cus_name', label: '客户名称', showOverflowTooltip: true, minWidth: '350' },
          {
            prop: 'po_total',
            label: '订单金额',
            showOverflowTooltip: true,
            width: '120',
            align: 'right'
          },
          { prop: 'status', customSlot: 'status', label: '状态', width: '120', align: 'center' },
          {
            prop: 'options',
            label: '操作',
            customSlot: 'options',
            align: 'center',
            width: '80',
            fixed: 'right'
          }
        ],
        seqType: 'checkbox',
        seqConfig: {
          fixed: true
        },
        layout: 'total, prev, pager, next, sizes'
      }
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    pageSizeChange(size) {
      this.pagination.pageSize = size
    },
    rowClickEvent(row) {
      console.warn(row)
    },
    handleRowDetail(row) {
      this.$refs.detailDrawer.showDrawer()
    },
    currentChange(currentPage) {
      this.pagination.currentPage = currentPage
      this.loadData()
    },
    selectDataChange(data) {
      this.$emit('select-data-change', data)
    },
    handleSearchValueChange(searchKey, value) {
      this.$set(this.searchPanelValue, searchKey, value)
    },
    resetSearch() {
      this.searchPanelValue = {}
      this.handleSearch()
    },
    handleSearch() {
      this.loadData()
    },
    handleRefresh() {
      this.pagination.currentPage = 1
      // this.pagination.pageSize = 10
      this.handleSearch()
    },
    loadData() {
      const params = {
        page: this.pagination.currentPage,
        pageSize: this.pagination.pageSize,
        queryFilter: {
          ...this.searchPanelValue
        }
      }
      this.$request({
        url: `https://d6a32490-4355-4e84-b5e6-bf24046a87be.mock.pstmn.io/order-list?page=${this.pagination.currentPage}`,
        method: 'POST',
        disableSuccessMsg: true,
        params: params
      }).asyncThen((resp) => {
        this.tableData = resp.data
        this.pagination.total = resp.total
      })
    }
  }
}
</script>

<style lang="scss">
.custom-page {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  .page-header {
    display: flex;
    align-items: center;
    height: 56px;
    position: relative;
    width: 100%;
    min-height: 56px;
    background: #fff;
    border-bottom: 1px solid #ebeef5;
    overflow: auto;

    .title {
      color: #303133;
      font-weight: 700;
      margin-left: 20px;
      flex: 1;
      font-size: 12px;
    }

    .operation {
      display: flex;
      min-width: 330px;
      justify-content: flex-end;
      margin-right: 20px;
    }
  }

  .page-search-panel {
    display: flex;
    background: white;
    padding: 8px 20px 24px 20px;
    position: relative;

    .search-list {
      display: flex;
      flex: 1;
      max-width: calc(100% - 140px);
      flex-wrap: wrap;

      .search-component {
        width: calc(25% - 32px);
        padding: 24px 0;
        padding-right: 32px;
        padding-bottom: 0;
        .el-form-item {
          margin-bottom: 0;
          .el-form-item__label {
            font-size: 12px;
            line-height: unset;
            margin-bottom: 8px;
          }
        }

        .el-form-item__content {
          font-size: 12px;
          line-height: 32px;
        }
      }
    }

    .search-button-group {
      position: absolute;
      bottom: 24px;
      right: 20px;
    }
  }

  .page-data-list {
    display: flex;
    padding: 20px;

    .x-empty-page {
      top: 0;
    }
  }
}
</style>

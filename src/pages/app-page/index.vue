<!--
 * @Author: your name
 * @Date: 2020-05-26 10:06:34
 * @LastEditTime: 2020-05-26 20:02:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /x-product-workspace/packages/x-project-app/src/pages/Home.vue
-->
<template>
  <div class="app-page">
    <!-- 搜索顶部 -->
    <div class="page-header">
      <x-svg-icon name="refresh-icon"></x-svg-icon>
      <x-svg-icon :name="retract ? 'spread-icon' : 'retract-icon'" @click.native="triggle"></x-svg-icon>
      <x-svg-icon name="export-icon"></x-svg-icon>
      <el-button style="margin-right: 20px" type="primary">
        {{ $t('appConfig.fnConfig.listPageDesign.add') }}
      </el-button>
    </div>
    <!-- 搜索组件 -->
    <div
      ref="searchPanelDom"
      class="page-search-panel"
      :class="{ retract: retract }"
    >
      <list-design-search-components
        ref="searchComponents"
        :disableDnD="true"
        :filterComps="listPage.queryConditions"
        :tileFormComponent="listPage.tileFormComponent"
        @search="handlerSearch"
      ></list-design-search-components>
      <div class="btns">
        <el-button @click="handlerReset">
          {{ $t('appConfig.fnConfig.listPageDesign.reset') }}
        </el-button>
        <el-button type="primary" @click="handlerSearch">
          {{ $t('appConfig.fnConfig.listPageDesign.search') }}
        </el-button>
      </div>
    </div>
    <!-- 表格 -->
    <div class="table">
      <x-block-table
        :border="true"
        :colConfigs="colConfigs"
        :tableData="tableData"
        seqType="checkbox"
        :pagination="{
          total: tableData.length
        }"
      ></x-block-table>
    </div>
  </div>
</template>

<script>
import ListDesignSearchComponents from '@/components/list-build/list-design-search-components'
import { ListSearchBuildEngine } from '@/components/list-build/list-search-build-engine'

import FormTextInputSearchConfig from '@/components/list-build/search-components-schema-config/search-form-text-input'
import FormTextareaInputSearchConfig from '@/components/list-build/search-components-schema-config/search-form-textarea-input'
import FormNumberInputSearchConfig from '@/components/list-build/search-components-schema-config/search-form-number-input'
import FormMoneyInputSearchConfig from '@/components/list-build/search-components-schema-config/search-form-money-input'
import FormDocumentNumberSearchConfig from '@/components/list-build/search-components-schema-config/search-form-document-number-input'
import FormDateInputSearchConfig from '@/components/list-build/search-components-schema-config/search-form-date-input'
import FormSelectSearchConfig from '@/components/list-build/search-components-schema-config/search-form-select-input'
import FormDepartmentSearchConfig from '@/components/list-build/search-components-schema-config/search-form-department-input'
import FormPeopleSearchConfig from '@/components/list-build/search-components-schema-config/search-form-people-input'
import FormDataSelectorConfig from '@/components/list-build/search-components-schema-config/search-form-lov-input'

ListSearchBuildEngine.getInstance().registerSearchConfig(FormTextInputSearchConfig)
ListSearchBuildEngine.getInstance().registerSearchConfig(FormTextareaInputSearchConfig)
ListSearchBuildEngine.getInstance().registerSearchConfig(FormNumberInputSearchConfig)
ListSearchBuildEngine.getInstance().registerSearchConfig(FormMoneyInputSearchConfig)
ListSearchBuildEngine.getInstance().registerSearchConfig(FormDocumentNumberSearchConfig)
ListSearchBuildEngine.getInstance().registerSearchConfig(FormDateInputSearchConfig)
ListSearchBuildEngine.getInstance().registerSearchConfig(FormSelectSearchConfig)
ListSearchBuildEngine.getInstance().registerSearchConfig(FormDepartmentSearchConfig)
ListSearchBuildEngine.getInstance().registerSearchConfig(FormPeopleSearchConfig)
ListSearchBuildEngine.getInstance().registerSearchConfig(FormDataSelectorConfig)

export default {
  name: 'AppPage',
  components: {
    ListDesignSearchComponents
  },
  data: function() {
    return {
      retract: false,
      clickedSearchOrReset: false,
      currentAdvanceSearch: {},
      listPage: {
        queryConditions: [
          {
            componentType: 'FORM_DOCUMENT_NUMBER',
            label: '单据号',
            uuid: '3a225d7b-f0e2-eedf-1d61-511f14ba5f0a'
          },
          {
            componentType: 'FORM_PEOPLE_SELECT',
            label: '申请人',
            uuid: '46a2d7e4-d4ea-d743-a95c-c65542a8ee39'
          },
          {
            componentType: 'FORM_DATEPICK_INPUT',
            label: '申请时间',
            uuid: 'e7adb045-b3cb-f9cf-a3d8-1404be3aea77'
          },
          {
            componentType: 'FORM_DATA_SELECTOR',
            label: '所属项目',
            uuid: 'f55e34cd-fa9b-e046-6c03-3e95c72884a9'
          }
        ],
        tileFormComponent: [
          {
            componentType: 'FORM_DOCUMENT_NUMBER',
            documentNumRules: [{
              ruleType: 'STATIC_TEXT',
              staticText: 'BXD_'
            }],
            height: 1,
            label: '单据号',
            lengthLimit: 200,
            lovAssociated: false,
            modelField: '_view_112222952979697664._widget_112222952983891968',
            placeholder: 'BXD_202011040001',
            readOnly: true,
            showLocationCenter: false,
            uuid: '3a225d7b-f0e2-eedf-1d61-511f14ba5f0a',
            width: 3
          }
        ]
      },
      colConfigs: [
        {
          prop: 'date',
          label: '日期'
        },
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'gender',
          label: '性别'
        },
        {
          prop: 'address',
          label: '地址',
          showOverflowTooltip: true
        }
      ],
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          gender: '男',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          gender: '男',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          gender: '女',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          gender: '男',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  methods: {
    handlerReset() {
      this.clickedSearchOrReset = false
      // 刷新要重置高级查询
      this.currentAdvanceSearch = {
        xdapDataFilters: []
      }
      this.$refs.searchComponents && this.$refs.searchComponents.handlerReset()
      this.doSearch()
    },
    /**
     * 点击查询面板上查询按钮
     */
    handlerSearch() {
      if (this.clickedSearchOrReset) {
        this.currentAdvanceSearch = {
          xdapDataFilters: []
        }
      }
      this.clickedSearchOrReset = false
      this.doSearch()
    },
    doSearch(e) {
      alert('正在搜索……')
    },
    triggle() {
      this.retract = !this.retract
    }
  }
}
</script>

<style lang="scss">
.app-page {
  .page-header {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    height: 56px;
    min-height: 56px;
    background: #ffffff;
    border-bottom: 1px solid #EBEEF5;
    padding-right: 48px;
    .x-svg-icon {
      margin-right: 1rem;
    }
  }
  .page-search-panel {
    height: auto;
    background-color: $--app-light-color;
    padding-left: 12px;
    padding-right: 4px;
    position: relative;
    &.retract {
      height: 0;
      overflow: hidden;
    }
    .x-date-input .el-date-editor {
      width: 100% !important;
    }
    .list-design-search-components {
      padding-left: 8px;
      padding-right: 16px;
      .el-form {
        .el-form-item {
          cursor: auto;
          .el-form-item__content {
            .el-input {
              pointer-events: all;
            }
          }
        }
      }
    }
    .split {
      border-top: 1px solid $--app-border-color;
      margin-left: 8px;
      margin-right: 16px;
    }
    .advance-search-list {
      padding-left: 8px;
      width: calc(100% - 200px);
      .advance-search-list-item {
        height: 30px;
      }
    }
    .btns {
      position: absolute;
      bottom: 24px;
      right: 20px;
      .el-button + .el-button {
        margin-left: 16px;
      }
    }
  }
  .table {
    padding: 20px;
  }
}
</style>

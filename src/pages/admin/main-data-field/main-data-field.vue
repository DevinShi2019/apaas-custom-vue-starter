<template>
  <div class="main-data-field">
    <el-button type="primary" @click="handleClick">
      新增
    </el-button>
    <sechma-modal
      ref="sechmaModal"
      :title="title"
      :sechmaConfig="formSechmaConfig"
    ></sechma-modal>
    <sechma-table
      :tableData="tableData"
      :sechmaConfig="colConfigs"
    >
      <template v-slot:status="{ row, column }">
        <div class="main-data-field__cell">
          <base-status-tag
            :status="row[column.prop]"
          ></base-status-tag>
        </div>
      </template>
      <template v-slot:ops="{ row }">
        <div class="admin-sechma-table__ops">
          <el-dropdown
            trigger="click"
            placement="bottom"
            @command="handleCommand($event, row)"
          >
            <x-svg-icon name="more-operations"></x-svg-icon>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="edit">
                编辑
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </template>
    </sechma-table>
  </div>
</template>

<script>
import FormSechmaConfig from './form-sechma-config'
import SechmaModal from '../sechma-modal/sechma-modal'
import SechmaTable from '../sechma-table/sechma-table'
import BaseStatusTag from '@/components/base-status-tag'

export default {
  components: {
    SechmaModal,
    SechmaTable,
    BaseStatusTag
  },
  data() {
    return {
      title: '主数据域管理',
      formSechmaConfig: FormSechmaConfig,
      tableData: [{
        code: 'xxx',
        nameCh: '阿斯顿撒多',
        nameEn: 'sadasdsa',
        description: '123123',
        scope: '',
        enableStatus: 'DISABLED'
      }],
      colConfigs: [
        {
          prop: 'code',
          label: '主数据域代码',
          align: 'center'
        },
        {
          prop: 'nameCh',
          label: '主数据域名称（中文）',
          align: 'center'
        },
        {
          prop: 'nameEn',
          label: '主数据域名称（英文）',
          align: 'center'
        },
        {
          prop: 'description',
          label: '说明',
          align: 'center'
        },
        {
          prop: 'scope',
          label: '作用域',
          align: 'center'
        },
        {
          prop: 'enableStatus',
          label: '状态',
          customSlot: 'status',
          align: 'center'
        },
        {
          label: '操作',
          customSlot: 'ops',
          align: 'center'
        }
      ]
    }
  },
  methods: {
    handleClick() {
      this.$refs.sechmaModal.openModal({
        isContinue: false,
        getModel() {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve({
                code: 'xxx',
                nameCh: '阿斯顿撒多',
                nameEn: 'sadasdsa',
                description: '123123',
                scope: '',
                enableStatus: 'DISABLED'
              })
            }, 2000)
          })
        }
      })
    },
    handleCommand(command, row) {

    }
  }
}
</script>

<style lang="scss">
.main-data-field {
  .main-data-field__cell {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

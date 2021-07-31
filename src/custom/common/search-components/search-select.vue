<!--
 * @Author: Devin
 * @Date: 2021-07-29 17:33:53
 * @LastEditTime: 2021-07-29 19:14:18
 * @LastEditors: Devin
 * @Description:
 * email: das.devin@outlook.com
-->
<template>
  <div class="search-component search-select">
    <el-form-item>
      <template slot="label">
        <x-ellipsis class="fix-cursor" mode="origin" :label="label"></x-ellipsis>
      </template>
      <el-select
        v-if="lazyLoad"
        v-model="computedValue"
        v-el-select-loadmore="loadMore"
        :filter-method="loadFilter"
        class="select-input"
        clearable
        filterable
        :placeholder="'请选择'"
        collapse-tags
        :multiple="multiple"
        @visible-change="loadDataOnVisible"
      >
        <el-option v-for="item in options" :key="item.id" :label="item.label" :value="item.id">
        </el-option>
      </el-select>
      <el-select
        v-else
        v-model="computedValue"
        class="select-input"
        clearable
        filterable
        :placeholder="'请选择'"
        collapse-tags
        :multiple="multiple"
      >
        <el-option v-for="item in options" :key="item.id" :label="item.label" :value="item.id">
        </el-option>
      </el-select>
    </el-form-item>
  </div>
</template>

<script>
import SearchComponentMixin from './search-component.mixin'
export default {
  name: 'SearchSelect',
  directives: {
    'el-select-loadmore': {
      bind(el, binding) {
        // 获取element-ui定义好的scroll盒子 const
        const SELECTWRAP_DOM = el.querySelector('.el-select-dropdown .el-select-dropdown__wrap')
        SELECTWRAP_DOM.addEventListener('scroll', function() {
          /** * scrollHeight 获取元素内容高度(只读) *
scrollTop 获取或者设置元素的偏移值,常用于, 计算滚动条的位置,
当一个元素的容器没有产生垂直方向的滚动条, 那它的scrollTop的值默认为0. * clientHeight
读取元素的可见高度(只读) * 如果元素滚动到底, 下面等式返回true, 没有则返回false: * ele.scrollHeight -
ele.scrollTop === ele.clientHeight; */ const condition =
            this.scrollHeight - this.scrollTop <= this.clientHeight
          if (condition) {
            binding.value()
          }
        })
      }
    }
  },
  mixins: [SearchComponentMixin],
  data() {
    return {
      pageInfo: {
        page: 1,
        pageSize: 50,
        keyWord: ''
      },
      loadingData: false,
      options: []
    }
  },
  computed: {
    lazyLoad: function() {
      return this.extraConfig.lazyLoad
    },
    multiple: function() {
      return this.extraConfig.multiple
    }
  },
  watch: {
    'extraConfig.selectOptions': {
      handler: function(val, oldVal) {
        this.options = val || []
      },
      immediate: true
    }
  },
  methods: {
    loadMore: function() {
      this.pageInfo.page++
      this.loadData()
    },
    loadFilter(keyWord) {
      this.pageInfo.page = 1
      this.pageInfo.keyWord = keyWord
      this.loadData('replace')
    },
    loadData(type = 'add') {
      this.loadingData = true
      this.extarConfig
        .loadData(this.pageInfo)
        .then(
          (loadData) => {
            if (type === 'add') {
              this.options = [...this.options, ...loadData]
            } else if (type === 'replace') {
              this.options = loadData
            }
          },
          // eslint-disable-next-line handle-callback-err
          (err) => {}
        )
        .finally(() => {
          this.loadingData = false
        })
    }
  }
}
</script>

<style></style>

<template>
  <x-app-layout
    :layoutEngine="layoutEngine"
    :isCollapse="isCollapse"
  >
    <template v-slot:header>
      <x-app-header v-if="appInfo" :layoutEngine="layoutEngine" :appInfo="appInfo"></x-app-header>
    </template>
    <template v-slot:menu>
      <x-app-menu
        :menuConfig="menuConfig"
        :showMenu="showMenu && !!appInfo"
        :isCollapse="isCollapse"
        :layoutEngine="layoutEngine"
        @menu-add-click="menuAddClick"
      ></x-app-menu>
    </template>
    <template slot="appPage">
      <div class="menu-switch" @click="changeCollapse">
        <x-svg-icon v-if="isCollapse" name="arrow-right-icon"></x-svg-icon>
        <x-svg-icon v-else name="arrow-left-icon"></x-svg-icon>
      </div>
      <slot name="appPage"></slot>
    </template>
  </x-app-layout>
</template>
<script>

export default {
  name: 'AppLayout',
  props: {
    layoutEngine: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      isCollapse: false,
      showMenu: true
    }
  },
  computed: {
    appInfo() {
      return (this.layoutEngine && this.layoutEngine.layoutDataControl && this.layoutEngine.layoutDataControl.appInfo) || {}
    },
    menuConfig() {
      return (this.layoutEngine && this.layoutEngine.layoutDataControl && this.layoutEngine.layoutDataControl.menuConfig) || {
        menu: [],
        defaultActive: null,
        menuTreeData: []
      }
    }
  },
  methods: {
    changeCollapse() {
      this.showMenu = false
      this.$nextTick(() => {
        this.isCollapse = !this.isCollapse
        this.showMenu = true
      })
    },
    menuAddClick(e) {
      this.$emit('menu-add-click', e)
    }
  }
}
</script>
<style lang="scss">
$--app-box-bgColor: #ffffff;
$--app-box-border-color: #DCDFE6;

.x-app-layout {
  .layout-middle {
    .layout-center {
      .menu-switch {
        width: 14px;
        height: 80px;
        padding-right: 2px;
        border-top-right-radius: 18px;
        border-bottom-right-radius: 18px;
        border: 1px solid $--app-box-bgColor;
        border-left: 0;
        background-color: $--app-box-bgColor;
        position: absolute;
        top: calc(50vh - 87px);
        left: -20px;
        transform: translateX(120%);
        cursor: pointer;
        opacity: 0.5;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 500;
        border: 1px solid $--app-box-border-color;
        border-left: none;
      }
      .menu-switch:hover {
        background-color: $--app-box-bgColor;
        opacity: 1;
        box-shadow: 2px 0px 4px 0px $--app-box-border-color;
      }
    }
  }
}
</style>

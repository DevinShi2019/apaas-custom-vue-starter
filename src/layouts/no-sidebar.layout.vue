<template>
  <div class="no-sidebar-layout">
    <base-header></base-header>
    <slot></slot>
  </div>
</template>

<script>
import BaseHeader from '@/components/base-header'
export default {
  name: 'NoSidebarLayout',
  components: {
    BaseHeader
  }
}
</script>

<style>

</style>

<template>
  <div v-if="visible" class="sechma-form-block">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    colConfig: {
      type: Object,
      default() {
        return {}
      }
    },
    rowConfig: {
      type: Object,
      default() {
        return {}
      }
    },
    model: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    visible() {
      let visible = this.colConfig.visible
      if (typeof visible === 'function') {
        return visible.call(this, this.model)
      } else {
        return true
      }
    }
  }
}
</script>

<style>

</style>

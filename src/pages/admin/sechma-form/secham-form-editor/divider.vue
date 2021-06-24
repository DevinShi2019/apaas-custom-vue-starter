<template>
  <div class="divider-editor"></div>
</template>

<script>
import SechmaEditorMixin from './sechmaEditor.mixin'
export default {
  mixins: [SechmaEditorMixin]
}
</script>

<style lang="scss">
.divider-editor {
  margin: 0 0 24px;
  border-top: 1px solid $--app-split-color;
}
</style>

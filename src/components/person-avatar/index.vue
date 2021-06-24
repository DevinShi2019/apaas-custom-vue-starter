<!--
 * @Author: your name
 * @Date: 2020-07-02 10:56:20
 * @LastEditTime: 2020-07-02 19:20:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /x-product-workspace/packages/x-project-app/src/components/person-avatar/index.vue
-->
<template>
  <div class="person-avatar">
    <template v-if="avatarUrl">
      <img class="img-avatar" :src="avatarRealUrl" alt="avatar">
    </template>
    <template v-else>
      <div class="default-avatar" :style="{'background-color': defaultAvatarColor === 'primaryColor' ? '' : defaultAvatarColor}">
        <span>{{ displayName }}</span>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    avatarUrl: {
      type: String,
      default: ''
    },
    personName: {
      type: String,
      default: ''
    },
    defaultAvatarColor: {
      type: String,
      default: 'primaryColor'
    }
  },
  computed: {
    ...mapState({
      token: state => state.authModule.token
    }),
    displayName: function () {
      if (this.personName) {
        return this.personName.slice(this.personName.length - 2, this.personName.length)
      } else {
        return ''
      }
    },
    avatarRealUrl: function () {
      return `${this.avatarUrl}&token=${this.token}`
    }
  }
}
</script>

<style lang="scss" scoped>
.person-avatar {
  @include circleShape(24px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: $--app-light-color;
  overflow: hidden;
  cursor: pointer;
  .img-avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .default-avatar {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $--app-primary-color;
    span {
      @include fontSize(10px);
    }
  }
}
</style>

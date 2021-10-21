<template>
  <div class="base-header">
    <div class="base-header__prefix">
      <img class="base-header__logo" src="~@/assets/img/logo.png" />
    </div>
    <div class="base-header__container">
      <slot></slot>
    </div>
    <div class="base-header__suffix">
      <slot name="append"></slot>
      <el-dropdown trigger="click" placement="bottom" @command="handleCommand">
        <person-avatar
          :personName="userInfo.userName"
        ></person-avatar>
        <el-dropdown-menu slot="dropdown" class="base-header__menu">
          <el-dropdown-item command="personal">
            <div class="base-header__menu-item">
              <x-svg-icon class="base-header__icon" name="personal-icon"></x-svg-icon>
              <span class="base-header__text">个人中心</span>
            </div>
          </el-dropdown-item>
          <el-dropdown-item command="admin">
            <div class="base-header__menu-item">
              <x-svg-icon class="base-header__icon" name="admin-icon"></x-svg-icon>
              <span class="base-header__text">后台管理</span>
            </div>
          </el-dropdown-item>
          <el-dropdown-item command="logout">
            <div class="base-header__menu-item">
              <x-svg-icon class="base-header__icon" name="logout-icon"></x-svg-icon>
              <span class="base-header__text">退出登录</span>
            </div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import PersonAvatar from '@/components/person-avatar'
import { mapState } from 'vuex'

export default {
  name: 'BaseHeader',
  components: {
    PersonAvatar
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      userInfo: state => state.authModule.userInfo
    })
  },
  methods: {
    handleCommand(command) {
      console.log(command)
      if (command === 'personal') {
        this.$router.push({ name: 'personal' })
      } else if (command === 'admin') {
        this.$router.push({ name: 'admin' })
      } else if (command === 'logout') {
        this.$router.push({ name: 'account' })
      }
    }
  }
}
</script>

<style lang="scss">
.base-header {
  display: flex;
  align-items: center;
  position: relative;
  z-index: 101;
  height: 64px;
  box-shadow: $--app-box-shadow;
  background-color: $--app-light-color;
  .base-header__prefix, .base-header__suffix {
    flex: 1;
  }
  .base-header__prefix {
    display: flex;
    padding-left: 88px;
  }
  .base-header__suffix {
    display: flex;
    justify-content: flex-end;
    padding-right: 20px;

    .person-avatar {
      cursor: pointer;
      @include circleShape(36px);
    }
  }
  .base-header__container {
    width: 1100px;
  }
  .base-header__logo {
    width: 140px;
    height: 36px;
  }
}

.base-header__text {
  font-size: $--app-font-size;
  color: $--app-font-color;
}

.base-header__icon {
  color: $--app-font-color;
}

.el-dropdown-menu.base-header__menu {
  padding: 4px 0;
  margin-right: 12px;
  width: 112px;
  box-shadow: $--app-box-shadow;
  .el-dropdown-menu__item {
    padding-left: 16px;
    padding-right: 20px;
    i {
      margin-right: 4px;
    }
  }
  .popper__arrow {
    display: none !important;
  }
  .base-header__menu-item {
    display: flex;
  }
}
</style>

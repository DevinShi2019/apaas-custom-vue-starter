<template>
  <div class="slide-block">
    <div ref="canvas-container">
      <canvas ref="canvas" width="260" height="160"></canvas>
    </div>
  </div>
</template>

<script>
import imgCaptcha from '@/assets/js/captcha.js'

export default {
  props: {
    'failText': {
      type: String,
      default() {
        return this.$t('component.input-code.slideBlock.failText')
      }
    },
    'successText': {
      type: String,
      default() {
        return this.$t('component.input-code.slideBlock.successText')
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      const self = this
      imgCaptcha(this.$refs.canvas, {
        container: this.$refs['canvas-container'],
        imgurl: [
          `${this.$envUrl('/img/slide-block/1@2x.jpg')}`,
          `${this.$envUrl('/img/slide-block/2@2x.jpg')}`,
          `${this.$envUrl('/img/slide-block/3@2x.jpg')}`,
          `${this.$envUrl('/img/slide-block/4@2x.jpg')}`,
          `${this.$envUrl('/img/slide-block/5@2x.jpg')}`,
          `${this.$envUrl('/img/slide-block/6@2x.jpg')}`,
          `${this.$envUrl('/img/slide-block/7@2x.jpg')}`,
          `${this.$envUrl('/img/slide-block/8@2x.jpg')}`,
          `${this.$envUrl('/img/slide-block/9@2x.jpg')}`,
          `${this.$envUrl('/img/slide-block/10@2x.jpg')}`,
          `${this.$envUrl('/img/slide-block/11@2x.jpg')}`,
          `${this.$envUrl('/img/slide-block/12@2x.jpg')}`,
          `${this.$envUrl('/img/slide-block/13@2x.jpg')}`,
          `${this.$envUrl('/img/slide-block/14@2x.jpg')}`,
          `${this.$envUrl('/img/slide-block/15@2x.jpg')}`,
          `${this.$envUrl('/img/slide-block/16@2x.jpg')}`,
          `${this.$envUrl('/img/slide-block/17@2x.jpg')}`,
          `${this.$envUrl('/img/slide-block/18@2x.jpg')}`,
          `${this.$envUrl('/img/slide-block/19@2x.jpg')}`,
          `${this.$envUrl('/img/slide-block/20@2x.jpg')}`
        ],
        cw: 50,
        ch: 50,
        successText: this.successText,
        failText: this.failText,
        onSuccess: function() {
          setTimeout(() => {
            self.$emit('success')
          }, 1000)
        },
        onError: function() {
          self.$emit('error')
        }
      })
    })
  }
}
</script>

<style lang="scss">
@keyframes shake {
  0%,
  to {
    transform: translateZ(0);
  }

  5%,
  10% {
    transform: translate3d(-3px, 0, 0);
  }

  10%,
  15% {
    transform: translate3d(3px, 0, 0);
  }
}
.captcha-box {
  position: relative;
  background: $--app-light-color;
  border: 1px solid $--app-border-color;
  padding: 0 10px;
  box-sizing: content-box;
}
.captcha-box.shake {
  animation: shake 0.5s;
}
.captcha-box .canvas-box {
  overflow: hidden;
  position: relative;
}
.canvas-box .captcha-result {
  position: absolute;
  left: 0;
  width: 100%;
  color: $--app-light-color;
  bottom: -25px;
  height: 24px;
  text-indent: 16px;
  font-size: 14px;
  line-height: 24px;
  -moz-transition: bottom 0.3s ease;
  -o-transition: bottom 0.3s ease;
  -webkit-transition: bottom 0.3s ease;
  transition: bottom 0.3s ease;
}
.canvas-box .captcha-result.fail {
  background-color: $--app-fail-color;
  bottom: 0;
}
.canvas-box .captcha-result.success {
  background-color: $--app-success-color;
  bottom: 0;
}
.captcha-box .captcha-bg {
  display: block;
}
.captcha-box .captcha-clipcanvas {
  position: absolute;
  left: 20px;
}
.captcha-box .captcha-dragbar {
  margin-top: 5px;
  margin-bottom: 10px;
  padding-top: 8px;
  position: relative;
  box-sizing: border-box;
}
.captcha-dragbar .drag-track {
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background: $--app-selected-color;
  position: relative;
}
.captcha-dragbar .drag-slider {
  width: 40px;
  height: 30px;
  position: absolute;
  top: 0;
  left: 10px;
  background-color: $--app-sky-color;
  background-image: url('~@/assets/img/slider.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50%;
  border-radius: 23px;
  cursor: pointer;
}
.captcha-dragbar .drag-btn {
  height: 22px;
  margin-top: 10px;
}
.captcha-dragbar .drag-btn i {
  float: right;
  margin-right: 10px;
}
.captcha-dragbar .drag-btn .refresh {
  cursor: pointer;
  height: 22px;
  width: 22px;
  background: url('~@/assets/img/refresh.png') center no-repeat;
  background-size: 100%;
}
.captcha-dragbar .drag-btn .close {
  height: 22px;
  width: 22px;
  background: url('~@/assets/img/close.png') center no-repeat;
  background-size: 100%;
}

.drag-box {
  width: calc(100% - 16px);
  height: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
  cursor: pointer;
}

.drag-box-over {
  z-index: 100;
  cursor: pointer;
}
</style>

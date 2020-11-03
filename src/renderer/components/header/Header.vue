<template>
  <div class="header light">
    <header class="header_content">
      <div class="back" @click="back" v-if="showBack">
        <van-icon name="arrow-left" />
      </div>

      <p class="title" v-if="!centerStyle">{{ title }}</p>

      <div class="center_style" v-if="centerStyle">
        <slot></slot>
      </div>

      <div class="btn_group">
        <slot name="right_icon"></slot>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {}
  },
  props: {
    title: {
      type: String,
      default: '好运宝'
    },
    backFn: {
      type: Function
    },
    showBack: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: ''
    },
    centerStyle: {
      type: Boolean,
      default: false
    }
  },
  mounted () {},
  methods: {
    back () {
      if (this.backFn) {
        this.backFn()
      } else {
        this.$router.back()
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import url('~@/assets/less/mixin.less');
  .header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    .header_content {
      height: 45px;
      padding: 0 45px;
      box-sizing: border-box;
      background-color: #1a1a1a;
      display: flex;
      align-items: center;
      color: #ffffff;
      position: relative;
      .flex-center;
      .back {
        .flex-center;
        width: 38px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        .van-icon {
          font-size: 20px;
          font-weight: 400;
          color: #cccccc;
        }
      }
      .title {
        width: 100%;
        font-size: 16px;
        line-height: normal;
        text-align: center;
        .text-overflow;
      }
      .center_style {
        height: 100%;
        flex: 1;
      }
      .btn_group {
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
      }
    }
  }
  .light {
    .header_content {
      background-color: #fbfbfb;
      color: #1a1a1a;
      .back {
        .van-icon {
          color: #1a1a1a;
        }
      }
    }
  }
</style>

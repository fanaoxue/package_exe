<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'klbhyb-electron'
  }
</script>


<style lang="less">
  @import url('~@/assets/less/index.less');
  html {
    overflow-y: hidden;
  }
  * {
    margin: 0;
    padding: 0;
  }
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #f5f5f5;
    #app {
      font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 100%;
      height: 100%;
      margin: auto;
      position: relative;
      color: #1a1a1a;
      user-select: none;
      font-size: 16px;
      min-height: 100vh;
    }
    // 定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸
    &::-webkit-scrollbar {
      width: 2px;
    }
    // 定义滑块 内阴影 + 圆角
    &::-webkit-scrollbar-thumb {
      border-radius: 99px;
    }
    img {
      width: 100%;
      pointer-events: none;
      user-select: none;
    }
  }
</style>

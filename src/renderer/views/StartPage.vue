<template>
  <div class="start_page_box">
    <div class="main">
      <div class="logo">
        <img src="../assets/images/logo.png" alt="logo" class="logo_img" />
      </div>
      <div class="btn" @click="enterGo">
        <div class="btn_container">立即进入</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  name: 'start_page',
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {
    // 立即进入
    enterGo () {
      this.$router.push('/home_page')
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang="less" scoped>
.start_page_box {
  width: 100%;
  height: 100%;
  color: #fff;
  background: url('../assets/images/start_page_bg.png') no-repeat;
  background-size: 100% 100%;
  -webkit-app-region: drag;
  .main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .logo {
      .logo_img {
        width: 478px;
        height: 96px;
      }
    }
  }
  .btn {
    -webkit-app-region: no-drag;
    margin-top: 60px;
    cursor: pointer;
    font-weight: bold;
    font-size: 30px;
    border: 5px solid rgba(1, 183, 191, 0.25);
    box-sizing: border-box;
    border-radius: 50px;
    width: 250px;
    height: 60px;
    .btn_container {
      background: linear-gradient(90deg, #0087FB, #00FCFF);
      width: 240px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: #00192B;
      border-radius: 50px;
      letter-spacing: 2px;
    }
  }
}
</style>

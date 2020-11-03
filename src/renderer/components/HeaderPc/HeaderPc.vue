<template>
  <div class="header" v-show="hide">
    <div class="logo">
      <img src="../../assets/images/logo.png" alt="logo" class="logo_img" />
    </div>
    <div class="rightTxt">
      <!-- <span class="tui" @click="min"><i class="el-icon-minus"></i></span>
      <span class="tui" @click="quit"><i class="el-icon-close"></i></span> -->
      <div class="head_icon">
        <img src="../../../renderer/assets/images/touxiang@2x.png" alt="">
      </div>
      <div class="count_num">{{ countName }}</div>
      <div class="quit_out" @click="logOut">退出</div>
    </div>
  </div>
</template>

<script>
import { quitApp, minApp } from '@/assets/js/utils'
import bus from '@/assets/js/bus'
export default {
  components: {},
  props: {},
  name: 'header-pc',
  data () {
    return {
      hide: true,
      countName: localStorage.getItem('countName') // 获取登录名
    }
  },
  watch: {},
  computed: {},
  methods: {
    // 退出
    quit () {
      this.$confirm('是否确定退出产品介绍系统?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        quitApp()
      }).catch(() => {
        // todo
      })
    },
    // 退出到首页
    logOut () {
      // 清除登录名
      localStorage.removeItem('countName')
      this.$router.replace('/Login')
    },
    // 最小化
    min () {
      minApp()
    },
    onBus () {
      bus.$on('windowMax', res => {
        // console.log(res)
        this.hide = res.hide
      })
      bus.$on('originalWindow', res => {
        // console.log(res)
        this.hide = res.hide
      })
    }
  },
  created () {},
  mounted () {
    this.onBus()
  }
}
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 86px;
  color: #fff;
  font-size: 16px;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: url('../../assets/images/db_bg.png') no-repeat;
  background-size: 100% 100%;
  -webkit-app-region: drag;
  .logo {
    margin-left: 23px;
    .logo_img {
      width: 286px;
      height: 60px;
    }
  }
  .rightTxt {
    font-size: 16px;
    line-height: 20px;
    padding: 20px 20px 20px 0;
    -webkit-app-region: no-drag;
    display: flex;
    align-items: center;
    // .tui {
    //   // border-bottom: 1px solid #313233;
    //   cursor: pointer;
    //   padding-left: 20px;
    //   font-size: 24px;
    //   &:hover {
    //     color: #3278e5;
    //     // border-bottom: 1px solid #3278e5
    //   }
    // }
    .head_icon{
      width: 25px;
      img{
        width: 100%;
        vertical-align: middle;
      }
    }
    .count_num{
      margin: 0 20px 0px 10px;
      font-size: 20px;
      color: #01E5B7;
    }
    .quit_out{
      color: #03F6FF;
      cursor: pointer;
      font-size: 22px;
    }
  }
}
</style>
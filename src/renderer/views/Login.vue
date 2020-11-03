<template>
  <div class="login_box">
    <div class="main">
      <div class="logo">
        <img src="../assets/images/logo.png" alt="logo" class="logo_img" />
      </div>
      <div class="login_warpper">
        <div class="login_input">
          <img src="../assets/images/login/user.png" class="icon_img" />
          <input type="tel" class="input_user" placeholder="账号" v-model="userName" />
        </div>
        <div class="login_input">
          <img src="../assets/images/login/password.png" class="icon_img" />
          <input type="password" class="input_user" placeholder="密钥" v-model="passWord" />
        </div>
        <div class="btn" @click="login"></div>
      </div>
    </div>
    <div class="header_operation">
      <span class="tui" @click="min"><i class="el-icon-minus"></i></span>
      <span class="tui" @click="quit"><i class="el-icon-close"></i></span>
    </div>
  </div>
</template>

<script>
import { getLogin } from '~/api/login'
import { quitApp, minApp } from '@/assets/js/utils'
import '../../renderer/store'
export default {
  components: {},
  props: {},
  name: 'login',
  data () {
    return {
      userName: 'admin',
      passWord: 'admin'
    }
  },
  watch: {},
  computed: {},
  methods: {
    // 登陆
    login () {
      if (!this.userName) {
        this.$message({
          message: '账号不能为空',
          type: 'warning'
        })
        return
      }
      if (!this.passWord) {
        this.$message({
          message: '密钥不能为空',
          type: 'warning'
        })
        return
      }

      let obj = {
        userName: this.userName,
        passWord: this.passWord
      }
      getLogin(obj).then(res => {
        // console.log(res.result.userList)
        if (res.result.userList && res.result.userList.userName && res.result.userList.passWord) {
          // 记住登录名
          localStorage.clear()
          localStorage.setItem('countName', res.result.userList.userName)
          this.$router.push('/home_page')
        } else {
          this.$message({
            message: '账号或密钥错误',
            type: 'warning'
          })
        }
      })
    },
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
    // 最小化
    min () {
      minApp()
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang="less" scoped>
.login_box {
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
    // justify-content: center;
    .logo {
      .logo_img {
        width: 515px;
        height: 115px;
        margin-top: 102px;
        margin-bottom: 33px;
      }
    }
    .login_warpper {
      -webkit-app-region: no-drag;
      width: 630px;
      height: 341px;
      background: url('../assets/images/login/denglu_bg.png') no-repeat;
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .login_input {
        width: 514px;
        height: 56px;
        background: rgba(12, 162, 249, .4);
        border: 3px solid #0CA2F9;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        padding: 0 28px;
        .icon_img {
          width: 24px;
          height: 24px;
          margin-right: 12px;
        }
        .input_user {
          border: none;
          outline: none;
          height: 100%;
          width: 100%;
          font-size: 25px;
          color: #76B8FF;
          background: transparent;
          &::placeholder {
            color: #76B8FF;
          }
        }
        &:first-child {
          margin-bottom: 25px;
          margin-top: 45px;
        }
      }
      .btn {
        cursor: pointer;
        margin-top: 52px;
        width: 529px;
        height: 71px;
        background: url('../assets/images/login/login_btn.png') no-repeat;
        background-size: 100% 100%;
      }
    }
  }
  .header_operation{
    position: absolute;
    top: 0px;
    right: 0px;
    font-size: 16px;
    line-height: 20px;
    padding: 20px 20px 20px 0;
    -webkit-app-region: no-drag;
    .tui {
      // border-bottom: 1px solid #313233;
      cursor: pointer;
      padding-left: 20px;
      font-size: 24px;
      &:hover {
        color: #3278e5;
        // border-bottom: 1px solid #3278e5
      }
    }
  }
}
</style>

<template>
  <div class="home_page_box">
    <!-- 头部 -->
    <header-pc />

    <!-- 左侧导航菜单 -->
    <nav-left-pc :defaultActive="defaultActive" @change="handleSelectNav" />

    <!-- 中间内容部分 -->
    <div class="center_box" :class="{'max_screen' : screenState === false }">
      <!-- 默认进来 -->
      <default-page v-show="!defaultActive" />

      <div class="right_container" v-show="defaultActive">
        <!-- 放大后的导航栏 -->
        <div class="max_nav" v-show="screenState === false">
          <children-nav @change="childrenChange" />
        </div>
        <!-- 面包屑 -->
        <div v-show="screenState">
          <div v-show="!(defaultActive === '1-1' || defaultActive === '1-2' || defaultActive === '1-3')">
            <div class="bread_crumb" v-show="defaultActive">
              当前位置：{{ breadText }}
            </div>
          </div>
        </div>
        <div class="container_pannel">
          <!-- klb -->
          <klb-web-view v-show="defaultActive === '2-1-1'" :pageShow="screenState"/>

          <!-- hyb -->
          <div v-show="defaultActive === '2-1-2'">
            <hyb-web-view :allData="allData" :pageShow="screenState"/>
          </div>

          <!-- ywjl -->
          <ywjl-xmjl-web-view v-show="defaultActive === '2-1-3'" :pageShow="screenState"/>
          <ywjl-cw-web-view v-show="defaultActive === '2-1-4'" :pageShow="screenState"/>

          <!-- 接入dataV大数据-->
          <data-v v-show="defaultActive === '1-1' || defaultActive === '1-2' || defaultActive === '1-3'" :active="defaultActive" :pageShow="screenState"/>

        </div>
      </div>

      <!-- 全屏开启&关闭按钮 -->
      <div class="toggle_full_screen" @click="toggleFullScreen" v-show="defaultActive">
        <img :src="[screenState ? quanping : quanping_quxiao]" alt="">
      </div>

    </div>
  </div>
</template>

<script>
import HeaderPc from '@/components/HeaderPc/HeaderPc'
import NavLeftPc from '@/components/NavLeftPc/NavLeftPc'
import ChildrenNav from '@/components/ChildrenNav/ChildrenNav'
import DefaultPage from '@/components/DefaultPage/DefaultPage'
import KlbWebView from './klb/KlbWebView'
import HybWebView from './hyb/HybWebView'
import YwjlXmjlWebView from './ywjl/YwjlXmjlWebView'
import YwjlCwWebView from './ywjl/YwjlCwWebView'
import DataV from './data/DataV'

import bus from '@/assets/js/bus'
import '../assets/js/eventOn'
import { getOrderBillList, getOrderBillDetail } from '~/api/orderBillList'
import { maxApp, originalApp } from '@/assets/js/utils'
import { routerData } from '../assets/js/routerData'
export default {
  components: {
    HeaderPc,
    NavLeftPc,
    ChildrenNav,
    DefaultPage,
    KlbWebView,
    HybWebView,
    YwjlXmjlWebView,
    YwjlCwWebView,
    DataV
  },
  props: {},
  name: 'home_page',
  data () {
    return {
      defaultActive: '', // 左边大菜单的导航激活索引
      allData: {},
      screenState: true,
      quanping: require('../assets/images/quanping@2x.png'),
      quanping_quxiao: require('../assets/images/quanping_quxiao@2x.png')
    }
  },
  watch: {},
  computed: {
    breadText () {
      switch (this.defaultActive) {
        case '1-1':
          return '数据概览 - 运力资源'
        case '1-2':
          return '数据概览 - 运单信息'
        case '1-3':
          return '数据概览 - 结算信息'
        case '2-1-1':
          return '产品演示 - 供应链金融 - 快路宝(企业)'
        case '2-1-2':
          return '产品演示 - 供应链金融 - 好运宝(司机)'
        case '2-1-3':
          return '产品演示 - 供应链金融 - 管车宝(项目经理)'
        case '2-1-4':
          return '产品演示 - 供应链金融 - 管车宝(财务)'
        case '2-2-1':
          return '产品演示 - 外协业务 - 运力组织'
        default:
          return ''
      }
    }
  },
  methods: {
    // 选择导航
    handleSelectNav (data) {
      // console.log('选择导航', data)
      this.defaultActive = data.index
      if (this.defaultActive === '2-1-2') { // 通知hyb读取文件
        const hybWb = document.getElementById('hyb_wb')
        hybWb.send('allWayBillList', this.allData)
      } else if (this.defaultActive === '2-1-1') { // 通知klb读取文件
        const klbWb = document.getElementById('klb_wb')
        klbWb.send('allWayBillList', this.allData)
      } else if (this.defaultActive === '2-1-3') { // 通知ywjl_xmjl读取文件
        const ywjlWbXmjl = document.getElementById('ywjl_wb_xmjl')
        ywjlWbXmjl.send('allWayBillList', this.allData)
      } else if (this.defaultActive === '2-1-4') { // 通知ywjl_cw读取文件
        const ywjlWbCw = document.getElementById('ywjl_wb_cw')
        ywjlWbCw.send('allWayBillList', this.allData)
      }
      let routerObj = this.getBrotherNav(this.defaultActive)
      bus.$emit('childrenNav', {routerObj: routerObj, active: this.defaultActive})
    },
    childrenChange (data) {
      // console.log('子导航栏', data)
      let activeIndex = data.index
      if (activeIndex === '2-1-2') { // 通知hyb读取文件
        const hybWb = document.getElementById('hyb_wb')
        hybWb.send('allWayBillList', this.allData)
      } else if (activeIndex === '2-1-1') { // 通知klb读取文件
        const klbWb = document.getElementById('klb_wb')
        klbWb.send('allWayBillList', this.allData)
      } else if (activeIndex === '2-1-3') { // 通知ywjl_xmjl读取文件
        const ywjlWbXmjl = document.getElementById('ywjl_wb_xmjl')
        ywjlWbXmjl.send('allWayBillList', this.allData)
      } else if (activeIndex === '2-1-4') { // 通知ywjl_cw读取文件
        const ywjlWbCw = document.getElementById('ywjl_wb_cw')
        ywjlWbCw.send('allWayBillList', this.allData)
      }
      if (activeIndex) {
        this.defaultActive = activeIndex
      }
    },
    // 获取 index 对应的所有同级导航
    getBrotherNav (routerIndex) {
      let assetRoutes = []
      routerData.forEach(element => {
        if (element.index === routerIndex) {
          assetRoutes = element
        }
        if (element.children) {
          element.children.forEach(item => {
            if (item.index === routerIndex) {
              assetRoutes = element.children
            }
            if (item.children) {
              item.children.forEach(aa => {
                if (aa.index === routerIndex) {
                  assetRoutes = item.children
                }
              })
            }
          })
        }
      })
      return assetRoutes
    },
    // 获取所有数据
    init () {
      getOrderBillList({}).then(res => {
        // console.log('获取所有数据', res)
        this.allData = res.result
      })
    },
    // 分别通知klb与hyb
    informKlbAndHyb () {
      const hybWb = document.getElementById('hyb_wb')
      const klbWb = document.getElementById('klb_wb')
      const ywjlWbXmjl = document.getElementById('ywjl_wb_xmjl')
      // console.log('中台数据：====》', this.allData)
      if (hybWb) {
        hybWb.send('allWayBillList', this.allData)
      }
      if (klbWb) {
        klbWb.send('allWayBillList', this.allData)
      }
      if (ywjlWbXmjl) {
        ywjlWbXmjl.send('allWayBillList', this.allData)
      }
    },
    // 查询运单详情
    checkWaybillDetail (data) {
      const hybWb = document.getElementById('hyb_wb')
      const klbWb = document.getElementById('klb_wb')
      let detail = {}
      getOrderBillDetail({
        taxWaybillId: data.taxWaybillId
      }).then(res => {
        console.log(res.result)
        detail = res.result.info
        if (hybWb) {
          hybWb.send('wayBillDetail', detail)
        }
        if (klbWb) {
          klbWb.send('wayBillDetail', detail)
        }
      })
    },
    // 监听消息
    onBus () {
      // 接单成功通知klb/hyb
      bus.$on('noticeInfo', res => {
        this.informKlbAndHyb()
      })
      bus.$on('checkWaybillDetail', res => {
        this.checkWaybillDetail(res)
      })
    },
    toggleFullScreen () {
      this.screenState = !this.screenState
      if (!this.screenState) {
        maxApp()
        this.showOrHide(true)
      } else {
        originalApp()
        this.showOrHide(false)
      }
    },
    showOrHide (item) {
      if (this.defaultActive === '2-1-3') {
        const ywjlWbXmjl = document.getElementById('ywjl_wb_xmjl')
        ywjlWbXmjl.send('showMoreItems', item) // 展开
      }
      if (this.defaultActive === '2-1-4') {
        const ywjlWbXmjl = document.getElementById('ywjl_wb_cw')
        ywjlWbXmjl.send('showMoreItems', item) // 展开
      }
    }
  },
  created () {},
  mounted () {
    this.onBus()
    this.init()
  }
}
</script>

<style lang="less" scoped>
@import url('~@/assets/less/mixin.less');
.home_page_box {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .center_box {
    margin: 86px 0 0 180px;
    color: #2c3e50;
    height: calc(~'100% - 86px');
    position: relative;
    .right_container {
      height: 100%;
      background: url('../assets/images/bg.png') no-repeat;
      background-size: 100% 100%;
      position: relative;
      .max_nav{
        width: 180px;
        position: absolute;
        left: 0px;
        top: 38%;
        // background: #fff;
        // min-height: 140px;
      }
    }
    .toggle_full_screen{
      width: 76px;
      position: absolute;
      bottom: 30px;
      right: 30px;
      img{
        width: 100%;
      }
    }
  }
  .max_screen{
    margin: 0px;
    height: 100%;
    // -webkit-app-region: drag;
  }
  .scale_big{
    transform: scale(1.2);
  }
  .bread_crumb {
    height: 30px;
    display: flex;
    align-items: center;
    background: #102644;
    padding-left: 14px;
    font-size: 16px;
    color: #B85A3C;
  }
  .container_pannel {
    // height: calc(~'100% - 46px');
    height: 100%;
    .flex-center;
    .white {
      color: #fff;
      font-size: 20px;
    }
  }
}
</style>

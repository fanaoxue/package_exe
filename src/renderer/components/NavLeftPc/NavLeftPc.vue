<template>
  <div class="nav_left" v-show="hide">
    <el-menu
      :defaultActive="defaultActive"
      class="el-menu-vertical-demo"
      background-color="#040E20"
      :uniqueOpened="true"
      @select="handleSelect"
      v-for="(item, index) in routerData"
      :key="index"
      >
      <el-submenu :index="item.index">
        <template slot="title">
          <div class="nav_left_title">
            <i class="el-icon-caret-top"></i>
            <i class="el-icon-caret-bottom"></i>
            <span>{{item.pageName}}</span>
          </div>
        </template>

        <span v-for="(childrenItem, index) in item.children" :key="index">
          <el-menu-item-group v-if="!childrenItem.difference">
            <el-menu-item :index="childrenItem.index" >
              <div class="sub_sub_meun_title">
                <span>{{childrenItem.pageName}}</span>
              </div>
            </el-menu-item>
          </el-menu-item-group>
          <span v-else>
            <el-submenu :index="childrenItem.index" >
              <template slot="title">
                <div class="sub_nav_left_title">
                  <i class="el-icon-arrow-up"></i>
                  <i class="el-icon-arrow-down"></i>
                  <span>{{childrenItem.pageName}}</span>
                </div>
              </template>
              <el-menu-item :index="ccItem.index" v-for="(ccItem, index) in childrenItem.children" :key="index">
                <div class="sub_sub_meun_title">{{ccItem.pageName}}</div>
              </el-menu-item>
              <!-- <el-menu-item index="2-1-2">
                <div class="sub_sub_meun_title">好运宝(司机)</div>
              </el-menu-item> -->
            </el-submenu>
          </span>
        </span>
      </el-submenu>
      <!-- <el-submenu index="2">
        <template slot="title">
          <div class="nav_left_title">
            <i class="el-icon-caret-top"></i>
            <i class="el-icon-caret-bottom"></i>
            <span>产品演示</span>
          </div>
        </template>
        <el-submenu index="2-1">
          <template slot="title">
            <div class="sub_nav_left_title">
              <i class="el-icon-arrow-up"></i>
              <i class="el-icon-arrow-down"></i>
              <span>供应链金融</span>
            </div>
          </template>
          <el-menu-item index="2-1-1">
            <div class="sub_sub_meun_title">快路宝(企业)</div>
          </el-menu-item>
          <el-menu-item index="2-1-2">
            <div class="sub_sub_meun_title">好运宝(司机)</div>
          </el-menu-item>
          <el-menu-item index="2-1-3">
            <div class="sub_sub_meun_title">管车宝(项目经理)</div>
          </el-menu-item>
          <el-menu-item index="2-1-4">
            <div class="sub_sub_meun_title">管车宝(财务)</div>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="2-2">
          <template slot="title">
            <div class="sub_nav_left_title">
              <i class="el-icon-arrow-up"></i>
              <i class="el-icon-arrow-down"></i>
              <span>外协业务</span>
            </div>
          </template>
          <el-menu-item index="2-2-1">
            <div class="sub_sub_meun_title">运力组织</div>
          </el-menu-item>
        </el-submenu>
      </el-submenu> -->
    </el-menu>
  </div>
</template>

<script>
import { Menu, Submenu, MenuItem, MenuItemGroup } from 'element-ui'
import bus from '@/assets/js/bus'
import { routerData } from '../../assets/js/routerData'
export default {
  components: {
    'el-menu': Menu,
    'el-submenu': Submenu,
    'el-menu-item': MenuItem,
    'el-menu-item-group': MenuItemGroup
  },
  props: {
    defaultActive: {
      type: String,
      default: ''
    }
  },
  name: 'nav-left-pc',
  data () {
    return {
      hide: true
    }
  },
  watch: {},
  computed: {
    routerData () {
      return routerData
    }
  },
  methods: {
    // 选择菜单
    handleSelect (index, indexPath) {
      this.$emit('change', {
        index, indexPath
      })
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
.nav_left {
  position: fixed;
  top: 86px;
  left: 0;
  height: calc(100% - 86px);
  background: #000;
  color: #fff;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 999;
  width: 180px;
  /*修改滚动条样式*/
  &::-webkit-scrollbar{
    width:5px;
    height:10px;
    /**/
  }
  &::-webkit-scrollbar-track{
    background: rgb(239, 239, 239);
    border-radius:2px;
  }
  &::-webkit-scrollbar-thumb{
    background:#666;
    border-radius:10px;
  }
  &::-webkit-scrollbar-thumb:hover{
    background: #666;
  }
  &::-webkit-scrollbar-corner{
    background: #179a16;
  }
  /deep/ .el-menu {
  width: 100%;
  overflow: hidden;
  .el-submenu {
    margin-bottom: 10px;
    .el-menu-item-group__title {
      display: none;
    }
    .el-menu-item {
      padding: 0 !important;
      height: 60px;
      line-height: 60px;
      min-width: 100%;
      .sub_sub_meun_title {
        padding-left: 42px;
        position: relative;
        &::after {
          // content: '';
          // height: 1px;
          // background: linear-gradient(90deg, #146ECE 0%, rgba(4, 246, 255, 0.19) 100%);
          // border-radius: 1px;
          // width: 120px;
          // position: absolute;
          // right: -18px;
          // bottom: 0;
        }
      }
    }
    &.is-opened {
      .el-submenu__title {
        .nav_left_title {
          .el-icon-caret-top {
            display: inline-block;
          }
          .el-icon-caret-bottom {
            display: none;
          }
        }
      }
    }
    .el-menu {
      .el-submenu {
        // margin-bottom: 0;
        &.is-opened {
          .sub_nav_left_title {
            .el-icon-arrow-up,
            .el-icon-arrow-down {
              display: none;
            }
            .el-icon-arrow-up {
              display: inline-block;
            }
          }
        }
      }
    }
  }
  .el-submenu__title {
    height: 60px;
    padding: 0 !important;
    line-height: 60px;
    .el-submenu__icon-arrow,
    .el-icon-arrow-down {
      display: none;
    }
    .nav_left_title {
      font-size: 20px;
      color: #04F6FF;
      padding-left: 17px;
      background: url('../../assets/images/nav_bg.png') no-repeat;
      background-size: 100% 100%;
      .el-icon-caret-top,
      .el-icon-caret-bottom {
        color: #04F6FF;
        font-size: 24px;
        display: none;
      }
      .el-icon-caret-bottom {
        display: inline-block;
      }
    }
    .sub_nav_left_title {
      padding-left: 17px;
      font-size: 20px;
      color: #01E5B7;
      background: url('../../assets/images/nav_bg1.png') no-repeat;
      background-size: 100% 100%;
      .el-icon-caret-top,
      .el-icon-arrow-up,
      .el-icon-arrow-down {
        color: #01E5B7;
        font-size: 20px;
        display: none;
      }
      .el-icon-arrow-down {
        display: inline-block;
      }
    }
  }
  .el-menu-item {
    &.is-active {
      .sub_sub_meun_title {
        color: #FFFFFF;
        background: url('../../assets/images/nav_bg2.png') no-repeat;
        background-size: 100% 100%;
        &::after {
          background: transparent;
        }
      }
    }
    .sub_sub_meun_title {
      font-size: 18px;
      color: #345784;
    }
  }
}
}
</style>

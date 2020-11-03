<template>
  <div class="children-nav">
    <el-menu
      :defaultActive="activeIndex"
      class="el-menu-vertical-demo"
      background-color="#040E20"
      @select="handleSelect">
      <el-submenu index="null">
        <el-menu-item-group>
          <el-menu-item :index="item.index" v-for="(item,index) in routerData" :key="index">
            <div class="sub_sub_meun_title">
              <span>{{item.pageName}}</span>
            </div>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { Menu, Submenu, MenuItem, MenuItemGroup } from 'element-ui'
import { routerData } from '../../assets/js/routerData'
import bus from '@/assets/js/bus'
export default {
  components: {
    'el-menu': Menu,
    'el-submenu': Submenu,
    'el-menu-item': MenuItem,
    'el-menu-item-group': MenuItemGroup
  },
  name: 'children-nav',
  data () {
    return {
      getData: ''
    }
  },
  methods: {
    // 选择菜单
    handleSelect (index, indexPath) {
      this.$emit('change', {
        index, indexPath
      })
    }
  },
  computed: {
    routerData: {
      get () {
        return this.getData.routerObj
      },
      set () {}
    },
    activeIndex: {
      get () {
        return this.getData.active
      },
      set () {}
    }
  },
  created () {
    this.routerData = routerData[0].children
  },
  mounted () {
    bus.$on('childrenNav', res => {
      // console.log('nazhi', res)
      this.getData = res
    })
  }
}
</script>

<style lang="less" scoped>
.children-nav {
  z-index: 1000;
  /deep/ .el-menu {
  border-right: 0px;
  width: 100%;
  overflow: hidden;
  .el-submenu {
    // margin-bottom: 10px;
    .el-menu-item-group__title {
      display: none;
    }
    .el-menu-item {
      padding: 0 !important;
      height: 60px;
      line-height: 60px;
      min-width: 100%;
      background-image: linear-gradient(to right, #040F22, #072A43) !important;
      position: relative;
      text-align: center;
      &::before{
        content: '';
        width: 100%;
        height: 1px;
        background: linear-gradient(90deg, #146ECE 0%, rgba(4, 246, 255, 0.19) 100%);
        border-radius: 1px;
        position: absolute;
        left: 0px;
        top: 0px;
      }
      &:last-child::after{
        content: '';
        width: 100%;
        height: 1px;
        background: linear-gradient(90deg, #146ECE 0%, rgba(4, 246, 255, 0.19) 100%);
        border-radius: 1px;
        position: absolute;
        left: 0px;
        bottom: 0px;
      }
      // .sub_sub_meun_title {
      //   padding-left: 54px;
      // }
    }
    &.is-opened {
      .el-submenu__title {
        display: none;
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
      }
    }
    .sub_sub_meun_title {
      font-size: 18px;
      color: #275FA6;
    }
  }
}
}
</style>

<template>
  <div :class="{'demo_index': pageShow ,'big_demo_index': !pageShow }">
    <div :class="{'demo_box': pageShow ,'big_demo_box': !pageShow }">
      <webview id="hyb_wb" class="webview" :src="hrefSrc" nodeintegration />
    </div>
  </div>
</template>

<script>
import { HYB_WBS_H5_URL } from '@/assets/js/consts'
export default {
  components: {},
  props: {
    allData: {
      type: Object
    },
    pageShow: {
      type: Boolean,
      default: ''
    }
  },
  name: '',
  data () {
    return {
      hrefSrc: `${HYB_WBS_H5_URL}#/login`
    }
  },
  watch: {},
  computed: {},
  methods: {
    // 解决第一次打开通知好运宝(无数据情况)
    informHyb () {
      const hybWb = document.getElementById('hyb_wb')
      if (hybWb) {
        hybWb.send('allWayBillList', this.allData)
      }
    }
  },
  created () {},
  mounted () {
    const hybWb = document.getElementById('hyb_wb')
    hybWb.addEventListener('dom-ready', () => {
      this.informHyb()
    })
  }
}
</script>

<style lang="less" scoped>
@import url('~@/assets/less/mixin.less');
.demo_index {
  .mobile_view;
  .demo_box {
    .mobile_view_box;
  }
  webview {
    width: 100%;
    height: 100%;
    background: #fff;
  }
}

.big_demo_index {
  .big_mobile_view;
  .big_demo_box {
    .big_mobile_view_box;
  }
  webview {
    width: 100%;
    height: 100%;
    background: #fff;
  }
}
</style>

<template>
  <div :class="{'demo_index': pageShow ,'big_demo_index': !pageShow }">
    <div :class="{'demo_box': pageShow ,'big_demo_box': !pageShow }">
      <webview id="klb_wb" class="webview" :src="hrefSrc" nodeintegration />
    </div>
  </div>
</template>

<script>
import { KLB_NGCBAPP_H5_URL } from '@/assets/js/consts'

export default {
  components: {},
  props: {
    pageShow: {
      type: Boolean,
      default: ''
    }
  },
  name: '',
  data () {
    return {
      hrefSrc: `${KLB_NGCBAPP_H5_URL}#/Login`
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
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

<template>
  <div :class="{'demo_index': pageShow ,'big_demo_index': !pageShow }">
    <div :class="{'demo_box': pageShow ,'big_demo_box': !pageShow }">
      <webview id="ywjl_wb_cw" class="webview" :src="hrefSrc" nodeintegration />
    </div>
  </div>
</template>

<script>
import { YWJL_CW_GYLJR_GCB_URL } from '@/assets/js/consts'

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
      hrefSrc: `${YWJL_CW_GYLJR_GCB_URL}#/financialLogin`
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
  .web_view;
  .demo_box {
    .web_view_box;
  }
  webview {
    width: 100%;
    height: 100%;
    background: #fff;
  }
}

.big_demo_index {
  .big_web_view;
  .big_demo_box {
    .big_web_view_box;
  }
  webview {
    width: 100%;
    height: 100%;
    background: #fff;
  }
}
</style>

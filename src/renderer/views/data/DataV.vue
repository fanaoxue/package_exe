<template>
  <div :class="{'data_v_index': pageShow ,'big_data_v_index': !pageShow }">
    <div :class="{'data_v_box': pageShow ,'big_data_v_box': !pageShow }">
      <webview id="datav_wb" class="webview" :src="[active === '1-1' ? hrefSrc1 : active === '1-2' ? hrefSrc2 : hrefSrc3]"/>
    </div>
  </div>
</template>

<script>
import { DATAV_GAILAN_URL, DATAV_YUNDAN_URL, DATAV_JIESUAN_URL } from '@/assets/js/consts'

export default {
  components: {},
  props: {
    active: {
      type: String,
      default: ''
    },
    pageShow: {
      type: Boolean,
      default: ''
    }
  },
  name: '',
  data () {
    return {
      hrefSrc1: DATAV_GAILAN_URL,
      hrefSrc2: DATAV_YUNDAN_URL,
      hrefSrc3: DATAV_JIESUAN_URL
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
// .demo_index {
//   .mobile_view;
//   .demo_box {
//     .mobile_view_box;
//   }
//   webview {
//     width: 100%;
//     height: 100%;
//     background: #fff;
//   }
// }
.data_v_index{
  .data_v_view;
  .data_v_box {
    .data_v_view_box;
  }
  webview {
    width: 100%;
    height: 100%;
  }
}
.big_data_v_index{
  .big_data_v_view;
  .big_data_v_box {
    .big_data_v_view_box;
  }
  webview {
    width: 100%;
    height: 100%;
  }
}
</style>

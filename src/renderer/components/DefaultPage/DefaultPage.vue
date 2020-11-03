<template>
  <div class="default_page_box">
    <img src="../../assets/images/logo2.png" alt="logo" class="logo" />
    <p class="title">构建中国公路运输运力组织新模式</p>
    <p class="label">求真<span class="tip">爱人</span>创新</p>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  name: 'default_page',
  data () {
    return {
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
.default_page_box {
  height: 100%;
  background: url('../../assets/images/bg2.png') no-repeat;
  background-size: 100% 100%;
  .flex-center;
  flex-direction: column;
  .logo {
    width: 146px;
    height: 70px;
  }
  .title {
    font-size: 32px;
    font-weight: bold;
    color: #04F6FF;
    padding: 25px 0 28px 0;
  }
  .label {
    font-size: 22px;
    // font-family: Source Han Sans SC;
    font-weight: bold;
    color: #04F6FF;
    .tip {
      padding: 0 30px;
    }
  }
}
</style>

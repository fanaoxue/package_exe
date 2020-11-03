<template>
  <div class="hello_world">
    <v-header title="应用入口" :showBack="false" />
    <router-link to="start_page">进入启动页</router-link>
    <br>
  </div>
</template>

<script>
// import { getOrderBillList } from '~/api/orderBillList'

export default {
  name: 'hello_world',
  data () {
    return {}
  },
  methods: {},
  mounted () {
    // getOrderBillList({}).then(res => {
    //   console.log(res)
    // })
  }
}
</script>

<style lang="less" scoped>
@import url('~@/assets/less/mixin.less');
.hello_world {
  .sub_page_base;
  .container {
    height: 50px;
    .flex-center;
    .btn {
      flex: 1;
      height: 100%;
      .flex-center;
      cursor: pointer;
      background-color: @blue;
      &:last-child {
        background-color: @red;
      }
    }
  }
}
</style>

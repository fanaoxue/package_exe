webpackJsonp([67],{"5jHf":function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t("KS8L"),a={data:function(){return{errorMsg:this.$route.query.errorMsg||"访问错误，请稍后再试~~~",isShowRefresh:!1}},created:function(){this.$store.commit("updateLoadingStatus",{isLoading:!1})},beforeRouteEnter:function(e,r,t){t(function(e){"TCIndex"==r.name||"roadTransCapacity"==r.name?e.isShowRefresh=!0:e.isShowRefresh=!1})},beforeRouteLeave:function(e,r,t){"TCIndex"==e.name||"roadTransCapacity"==e.name||Object(n.a)(-1),t()},methods:{refresh:function(){this.isShowRefresh&&this.$router.go(-1)}}},o=function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("div",{staticClass:"error-page",on:{click:e.refresh}},[n("c-header",[n("x-header",{attrs:{"left-options":{backText:""}}},[e._v("出错了~~~")])],1),e._v(" "),n("div",{staticStyle:{"text-align":"center","margin-top":"50px"}},[n("img",{attrs:{alt:"",src:t("+sps"),width:"125"}}),e._v(" "),n("div",{staticClass:"p"},[e._v(e._s(e.errorMsg))]),e._v(" "),e.isShowRefresh?n("div",{staticClass:"p"},[e._v("点击刷新")]):e._e()])],1)};o._withStripped=!0;var s={render:o,staticRenderFns:[]},i=s;var c=!1;var p=t("C7Lr")(a,i,!1,function(e){c||t("X+9P")},"data-v-9bc8ba18",null);p.options.__file="src/components/common/error.vue";r.default=p.exports},UUvl:function(e,r,t){(e.exports=t("UTlt")(!0)).push([e.i,"\n.error-page[data-v-9bc8ba18] {\r\n    height: 100vh;\n}\n.p[data-v-9bc8ba18] {\r\n    width: 100%;\r\n    color: rgba(121, 121, 121, 1);\r\n    line-height: 24px;\r\n    text-align: center;\r\n    margin-top: 24px;\n}\r\n","",{version:3,sources:["D:/h5_gitlab/ngcbapp_h5/src/components/common/error.vue"],names:[],mappings:";AACA;IACI,cAAc;CACjB;AACD;IACI,YAAY;IACZ,8BAA8B;IAC9B,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;CACpB",file:"error.vue",sourcesContent:["\n.error-page[data-v-9bc8ba18] {\r\n    height: 100vh;\n}\n.p[data-v-9bc8ba18] {\r\n    width: 100%;\r\n    color: rgba(121, 121, 121, 1);\r\n    line-height: 24px;\r\n    text-align: center;\r\n    margin-top: 24px;\n}\r\n"],sourceRoot:""}])},"X+9P":function(e,r,t){var n=t("UUvl");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);t("FIqI")("e650dd1c",n,!1,{})}});
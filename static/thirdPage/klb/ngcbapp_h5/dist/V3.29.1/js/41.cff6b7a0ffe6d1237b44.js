webpackJsonp([41],{Q2jZ:function(n,t,e){n.exports=e.p+"V3.29.1/img/qrbg@2x.2633b17.png"},Qpso:function(n,t,e){var i=e("iz9Q");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("FIqI")("58c8ec78",i,!1,{})},U8hP:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("5geA"),o=(i.a,{name:"ETCQRcode",data:function(){return{firstFlag:!1,etcLinkUrl:this.$route.query.etcLinkUrl+"&type=42&t="+(new Date).getTime()}},components:{Qrcode:i.a},created:function(){},mounted:function(){this.$store.commit("updateLoadingStatus",{isLoading:!1}),this.firstFlag=!0},methods:{}}),a=function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"ETCQRcode-container"},[t("c-header",{attrs:{isShowTitle:""}},[t("x-header",{attrs:{"left-options":{backText:""}}},[this._v("二维码")])],1),this._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:this.firstFlag,expression:"firstFlag"}],ref:"imageTofile",staticClass:"container"},[t("div",{staticClass:"qr-box"},[t("qrcode",{staticClass:"qr",attrs:{value:this.etcLinkUrl,type:"img",size:80}}),this._v(" "),t("img",{staticClass:"scan",attrs:{src:e("dfnp"),alt:""}})],1)])],1)};a._withStripped=!0;var c={render:a,staticRenderFns:[]},r=c;var s=!1;var A=e("C7Lr")(o,r,!1,function(n){s||e("Qpso")},null,null);A.options.__file="src/components/activity/etc/ETCQRcode.vue";t.default=A.exports},dfnp:function(n,t,e){n.exports=e.p+"V3.29.1/img/shaoma@2x.4bbd619.png"},iz9Q:function(n,t,e){var i=e("L4zZ");(n.exports=e("UTlt")(!0)).push([n.i,"\n.ETCQRcode-container {\n  width: 100%;\n  height: 100%;\n  background: #efefef;\n}\n.ETCQRcode-container .downloadImg {\n  width: 100%;\n  height: 100%;\n}\n.ETCQRcode-container .container {\n  height: calc(100vh - 46px);\n  background: url("+i(e("Q2jZ"))+") no-repeat;\n  background-size: 100% 100%;\n}\n.ETCQRcode-container .container .qr-box {\n  position: absolute;\n  top: 59vh;\n  left: 12.5vw;\n  width: 90px;\n}\n.ETCQRcode-container .container .qr-box .qr {\n  background: #fff;\n  padding: 5px;\n  line-height: 100%;\n}\n.ETCQRcode-container .container .qr-box .scan {\n  width: 100%;\n  margin-top: 5px;\n}\n","",{version:3,sources:["D:/h5_gitlab/ngcbapp_h5/src/components/activity/etc/ETCQRcode.vue"],names:[],mappings:";AACA;EACE,YAAY;EACZ,aAAa;EACb,oBAAoB;CACrB;AACD;EACE,YAAY;EACZ,aAAa;CACd;AACD;EACE,2BAA2B;EAC3B,oDAA2E;EAC3E,2BAA2B;CAC5B;AACD;EACE,mBAAmB;EACnB,UAAU;EACV,aAAa;EACb,YAAY;CACb;AACD;EACE,iBAAiB;EACjB,aAAa;EACb,kBAAkB;CACnB;AACD;EACE,YAAY;EACZ,gBAAgB;CACjB",file:"ETCQRcode.vue",sourcesContent:['\n.ETCQRcode-container {\n  width: 100%;\n  height: 100%;\n  background: #efefef;\n}\n.ETCQRcode-container .downloadImg {\n  width: 100%;\n  height: 100%;\n}\n.ETCQRcode-container .container {\n  height: calc(100vh - 46px);\n  background: url("../../../assets/imgs/activity/etc/qrbg@2x.png") no-repeat;\n  background-size: 100% 100%;\n}\n.ETCQRcode-container .container .qr-box {\n  position: absolute;\n  top: 59vh;\n  left: 12.5vw;\n  width: 90px;\n}\n.ETCQRcode-container .container .qr-box .qr {\n  background: #fff;\n  padding: 5px;\n  line-height: 100%;\n}\n.ETCQRcode-container .container .qr-box .scan {\n  width: 100%;\n  margin-top: 5px;\n}\n'],sourceRoot:""}])}});
webpackJsonp([45],{IThJ:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=i("P9l9"),n={data:function(){return{showControl:[],freightMsg:{taxWaybillNo:"",freightInfo:[]},payList:[],baojiaName:"保价费"}},created:function(){var t=this;Object(s.P)(this.$route.query.taxWaybillId).then(function(a){if("0"===a.data.reCode){var i=a.data.result.payList;t.baojiaName=a.data.result.insFeeName?a.data.result.insFeeName:t.baojiaName,i.length>0&&i.forEach(function(a,s){0===s?i.length>1?t.showControl.push(0):t.showControl.push(1):t.showControl.push(0)}),t.freightMsg=a.data.result.freightMsg,t.payList=a.data.result.payList,t.$nextTick(function(){t.$store.commit("updateLoadingStatus",{isLoading:!1})})}}).catch(function(a){t.$store.commit("updateLoadingStatus",{isLoading:!1}),t.$vux.toast.text(a.message,"middle")})},methods:{wayPayShowContor:function(t){this.showControl[t]?this.$set(this.showControl,t,0):this.$set(this.showControl,t,1)}}},e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"waybill-pay-detail"},[s("c-header",[s("x-header",{attrs:{"left-options":{backText:""}}},[t._v("支付明细")])],1),t._v(" "),s("div",{staticClass:"way-pay-num"},[t._v("\n    此笔运单共有\n    "),s("span",[t._v(t._s(t.payList.length)+"笔")]),t._v("支付明细\n  ")]),t._v(" "),s("section",{staticClass:"way-bill-msg"},[s("div",{staticClass:"way-msg-title"},[t._v("运费信息")]),t._v(" "),s("div",{staticClass:"way-order-num"},[s("span",{staticClass:"msg-left"},[t._v("运 单 号 ：")]),t._v(" "),s("span",{staticClass:"msg-right"},[t._v(t._s(t.freightMsg.taxWaybillNo))])]),t._v(" "),s("div",{staticClass:"way-pay-list"},t._l(t.freightMsg.freightInfo,function(a,i,n){return s("popover",{key:n,staticClass:"list-item",attrs:{gutter:2,placement:"top"}},[s("div",{staticClass:"popover-demo-content",attrs:{slot:"content"},slot:"content"},[t._v(t._s(a.name)+"："+t._s(a.value)+"元")]),t._v(" "),s("div",{staticClass:"list-item1"},[s("span",{staticClass:"msg-left"},[t._v(t._s(a.name)+"：")]),t._v(" "),s("span",{staticClass:"msg-right"},[t._v(t._s(a.value)+"元")])])])}),1),t._v(" "),s("div",{staticStyle:{height:"8px"}})]),t._v(" "),t._l(t.payList,function(a,n,e){return s("section",{key:e,staticClass:"way-bill-msg"},[s("div",{staticClass:"way-msg-title"},[s("span",[t._v("支付信息")]),t._v(" "),s("div",{staticClass:"show-or-hide",on:{click:function(a){return t.wayPayShowContor(n)}}},[s("span",{directives:[{name:"show",rawName:"v-show",value:1===t.showControl[n],expression:"showControl[index] === 1"}]},[t._v("收起")]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:0===t.showControl[n],expression:"showControl[index] === 0"}]},[t._v("展开")]),t._v(" "),s("img",{staticClass:"img-icon",class:{shouQi:1===t.showControl[n],zhanKai:0===t.showControl[n]},attrs:{height:"7",src:i("Wnlv"),alt:""}})])]),t._v(" "),s("div",{staticClass:"way-order-num1 borde-none"},["2"===a.payState?s("div",{staticClass:"pay-msg-list"},[s("span",{staticClass:"msg-left"},[t._v("付款时间：")]),t._v(" "),s("span",{staticClass:"msg-right"},[t._v(t._s(a.paySucTime))])]):t._e(),t._v(" "),"3"===a.payState||"5"===a.payState||"7"===a.payState?s("div",{staticClass:"pay-msg-list"},[s("span",{staticClass:"msg-left"},[t._v("申请时间：")]),t._v(" "),s("span",{staticClass:"msg-right"},[t._v(t._s(a.createdTime))])]):t._e(),t._v(" "),s("div",{staticClass:"pay-msg-list"},[s("span",{staticClass:"msg-left"},[t._v("支付金额：")]),t._v(" "),s("span",{staticClass:"msg-right"},[t._v(t._s(a.payActualMoney)+"元")])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:"0"==a.isOilPay,expression:"item.isOilPay == '0'"}],staticClass:"pay-msg-list"},[s("span",{staticClass:"msg-left"},[t._v("应付金额：")]),t._v(" "),s("span",{staticClass:"msg-right"},[t._v(t._s(a.payableFreight)+"元")])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:"0"==a.isOilPay,expression:"item.isOilPay == '0'"}],staticClass:"pay-msg-list"},[s("span",{staticClass:"msg-left"},[t._v("预充金额：")]),t._v(" "),s("span",{staticClass:"msg-right"},[t._v(t._s(a.deductibleAmount)+"元")])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:""!=a.insFee,expression:"item.insFee != ''"}],staticClass:"pay-msg-list"},[s("span",{staticClass:"msg-left"},[t._v(t._s(t.baojiaName)+"：")]),t._v(" "),s("span",{staticClass:"msg-right"},[t._v(t._s(a.insFee)+"元")])]),t._v(" "),s("div",{staticClass:"pay-msg-list"},[s("span",{staticClass:"msg-left"},[t._v("收款人姓名：")]),t._v(" "),s("span",{staticClass:"msg-right"},[t._v(t._s(a.realName))])])]),t._v(" "),s("transition",{attrs:{name:"mybox"}},[s("div",{staticClass:"slide",class:{animate:1===t.showControl[n]}},[s("div",{staticClass:"way-order-num1 way-order-num2"},[s("div",{staticClass:"pay-msg-list"},[s("span",{staticClass:"msg-left"},[t._v("银 行 名 称：")]),t._v(" "),s("span",{staticClass:"msg-right"},[t._v(t._s(a.bankName))])]),t._v(" "),s("div",{staticClass:"pay-msg-list"},[s("span",{staticClass:"msg-left"},[t._v("收 款 卡 号：")]),t._v(" "),s("span",{staticClass:"msg-right"},[t._v(t._s(a.bankCardNo))])]),t._v(" "),s("div",{staticClass:"pay-msg-list"},[s("span",{staticClass:"msg-left"},[t._v("支付单号：")]),t._v(" "),s("span",{staticClass:"msg-right"},[t._v(t._s(a.serialNumber))])]),t._v(" "),s("div",{staticClass:"pay-msg-list"},[s("span",{staticClass:"msg-left"},[t._v("支付状态：")]),t._v(" "),"-1"===a.payState?s("span",{staticClass:"msg-right"},[t._v("系统处理中")]):t._e(),t._v(" "),"0"===a.payState?s("span",{staticClass:"msg-right"},[t._v("未支付")]):t._e(),t._v(" "),"1"===a.payState?s("span",{staticClass:"msg-right"},[t._v("已申请")]):t._e(),t._v(" "),"2"===a.payState?s("span",{staticClass:"msg-right"},[t._v("已支付")]):t._e(),t._v(" "),"3"===a.payState?s("span",{staticClass:"msg-right"},[t._v("预申请")]):t._e(),t._v(" "),"5"===a.payState?s("span",{staticClass:"msg-right"},[t._v("核实中")]):t._e(),t._v(" "),"7"===a.payState?s("span",{staticClass:"msg-right"},[t._v("业务审核")]):t._e(),t._v(" "),"8"===a.payState?s("span",{staticClass:"msg-right"},[t._v("风控数据模型未审核")]):t._e()])]),t._v(" "),s("div",{staticClass:"way-order-num1 borde-none"},[s("div",{staticClass:"pay-msg-list"},[s("span",{staticClass:"msg-left"},[t._v("申 请 人 ：")]),t._v(" "),s("span",{staticClass:"msg-right"},[t._v(t._s(a.applyName))])]),t._v(" "),s("div",{staticClass:"pay-msg-list"},[s("span",{staticClass:"msg-left"},[t._v("付 款 人 ：")]),t._v(" "),s("span",{staticClass:"msg-right"},[t._v(t._s(a.paidName))])]),t._v(" "),"2"===a.payState?s("div",{staticClass:"pay-msg-list"},[s("span",{staticClass:"msg-left"},[t._v("申请时间：")]),t._v(" "),s("span",{staticClass:"msg-right"},[t._v(t._s(a.createdTime))])]):t._e(),t._v(" "),"3"===a.payState||"5"===a.payState||"7"===a.payState?s("div",{staticClass:"pay-msg-list"},[s("span",{staticClass:"msg-left"},[t._v("付款时间：")]),t._v(" "),s("span",{staticClass:"msg-right"},[t._v(t._s(a.paySucTime))])]):t._e(),t._v(" "),s("div",{staticClass:"pay-msg-list"},[s("span",{staticClass:"msg-left"},[t._v("到账时间：")]),t._v(" "),s("span",{staticClass:"msg-right"},[t._v(t._s(a.arriveTime))])])])])])],1)}),t._v(" "),s("div",{staticStyle:{height:"24px"}})],2)};e._withStripped=!0;var l={render:e,staticRenderFns:[]},o=l;var A=!1;var r=i("VU/8")(n,o,!1,function(t){A||i("aV1L")},null,null);r.options.__file="src/components/wbs/wayBillPayDetail.vue";a.default=r.exports},Wnlv:function(t,a){t.exports="data:image/png;base64,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"},aV1L:function(t,a,i){var s=i("iosK");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("536429e4",s,!1,{})},iosK:function(t,a,i){(t.exports=i("FZ+f")(!0)).push([t.i,"\n.waybill-pay-detail {\n  width: 100%;\n  text-align: center;\n  background-color: #efefef;\n  position: absolute;\n  top: 0px;\n  min-height: 100%;\n  height: auto;\n}\n.waybill-pay-detail .way-pay-num {\n  height: 56px;\n  line-height: 56px;\n  font-size: 15px;\n  padding: 0 12px;\n  text-align: start;\n  background-color: #ffffff;\n  color: #202020;\n}\n.waybill-pay-detail .way-pay-num span {\n  color: #ffba00;\n}\n.waybill-pay-detail .way-bill-msg {\n  width: 94%;\n  text-align: start;\n  min-height: 56px;\n  height: auto;\n  background-color: #ffffff;\n  display: inline-block;\n  margin-top: 20px;\n  border-radius: 10px;\n}\n.waybill-pay-detail .way-bill-msg .way-msg-title {\n  font-size: 17px;\n  color: #121212;\n  height: 46px;\n  line-height: 46px;\n  padding: 0 12px;\n  font-weight: bold;\n  border-bottom: 1px solid #cfcfcf;\n}\n.waybill-pay-detail .way-bill-msg .way-msg-title .show-or-hide {\n  float: right;\n  color: #1581cf;\n  font-size: 14px;\n  font-weight: normal;\n}\n.waybill-pay-detail .way-bill-msg .way-msg-title .show-or-hide .img-icon {\n  width: 11px;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}\n.waybill-pay-detail .way-bill-msg .way-msg-title .show-or-hide .shouQi {\n  -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0) rotate(-45deg);\n          transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0) rotate(-45deg);\n}\n.waybill-pay-detail .way-bill-msg .way-msg-title .show-or-hide .zhanKai {\n  -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0) rotate(-225deg);\n          transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0) rotate(-225deg);\n}\n.waybill-pay-detail .way-bill-msg .way-order-num {\n  min-height: 44px;\n  height: auto;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  border-bottom: 1px solid #dfdfdf;\n  font-size: 15px;\n}\n.waybill-pay-detail .way-bill-msg .way-pay-list {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  font-size: 15px;\n  padding: 0 12px;\n  margin-top: 8px;\n}\n.waybill-pay-detail .way-bill-msg .way-pay-list .list-item {\n  width: 50%;\n}\n.waybill-pay-detail .way-bill-msg .way-pay-list .list-item1 {\n  height: 32px;\n  line-height: 32px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.waybill-pay-detail .way-bill-msg .way-pay-list div:nth-child(2n) {\n  text-align: end;\n}\n.waybill-pay-detail .way-bill-msg .way-order-num1 {\n  min-height: 36px;\n  height: auto;\n  margin: 0 12px;\n  border-bottom: 1px solid #dfdfdf;\n  font-size: 15px;\n}\n.waybill-pay-detail .way-bill-msg .way-order-num1 .pay-msg-list {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  min-height: 36px;\n  height: auto;\n}\n.waybill-pay-detail .way-bill-msg .way-order-num1 {\n  border-top: 1px solid #dfdfdf;\n}\n.waybill-pay-detail .way-bill-msg .borde-none {\n  border: none;\n}\n.waybill-pay-detail .msg-left {\n  color: #797979;\n  width: 95px;\n  text-align: right;\n}\n.waybill-pay-detail .msg-right {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  word-break: break-word;\n  color: #202020;\n}\n.waybill-pay-detail .slide {\n  max-height: 0;\n  overflow: hidden;\n  -webkit-transition: max-height 0.5s cubic-bezier(0, 1, 0, 1) -0.1s;\n  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1) -0.1s;\n}\n.waybill-pay-detail .animate {\n  max-height: 9999px;\n  -webkit-transition: max-height 1s cubic-bezier(0, 1, 0, 1) -0.1s;\n  transition: max-height 1s cubic-bezier(0, 1, 0, 1) -0.1s;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n.popover-demo-content {\n  padding: 5px 10px;\n}\n","",{version:3,sources:["D:/h5_gitlab/ngcbapp_h5/src/components/wbs/wayBillPayDetail.vue"],names:[],mappings:";AACA;EACE,YAAY;EACZ,mBAAmB;EACnB,0BAA0B;EAC1B,mBAAmB;EACnB,SAAS;EACT,iBAAiB;EACjB,aAAa;CACd;AACD;EACE,aAAa;EACb,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,0BAA0B;EAC1B,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,WAAW;EACX,kBAAkB;EAClB,iBAAiB;EACjB,aAAa;EACb,0BAA0B;EAC1B,sBAAsB;EACtB,iBAAiB;EACjB,oBAAoB;CACrB;AACD;EACE,gBAAgB;EAChB,eAAe;EACf,aAAa;EACb,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,iCAAiC;CAClC;AACD;EACE,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,oBAAoB;CACrB;AACD;EACE,YAAY;EACZ,mDAAmD;CACpD;AACD;EACE,wEAAwE;UAChE,gEAAgE;CACzE;AACD;EACE,yEAAyE;UACjE,iEAAiE;CAC1E;AACD;EACE,iBAAiB;EACjB,aAAa;EACb,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,0BAA0B;EAC1B,4BAA4B;UACpB,oBAAoB;EAC5B,iCAAiC;EACjC,gBAAgB;CACjB;AACD;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,0BAA0B;EAC1B,uCAAuC;UAC/B,+BAA+B;EACvC,wBAAwB;UAChB,gBAAgB;EACxB,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;CACjB;AACD;EACE,WAAW;CACZ;AACD;EACE,aAAa;EACb,kBAAkB;EAClB,iBAAiB;EACjB,wBAAwB;EACxB,oBAAoB;CACrB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,iBAAiB;EACjB,aAAa;EACb,eAAe;EACf,iCAAiC;EACjC,gBAAgB;CACjB;AACD;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,0BAA0B;EAC1B,4BAA4B;UACpB,oBAAoB;EAC5B,iBAAiB;EACjB,aAAa;CACd;AACD;EACE,8BAA8B;CAC/B;AACD;EACE,aAAa;CACd;AACD;EACE,eAAe;EACf,YAAY;EACZ,kBAAkB;CACnB;AACD;EACE,oBAAoB;EACpB,gBAAgB;UACR,QAAQ;EAChB,uBAAuB;EACvB,eAAe;CAChB;AACD;EACE,cAAc;EACd,iBAAiB;EACjB,mEAAmE;EACnE,2DAA2D;CAC5D;AACD;EACE,mBAAmB;EACnB,iEAAiE;EACjE,yDAAyD;EACzD,6BAA6B;UACrB,qBAAqB;CAC9B;AACD;EACE,kBAAkB;CACnB",file:"wayBillPayDetail.vue",sourcesContent:["\n.waybill-pay-detail {\n  width: 100%;\n  text-align: center;\n  background-color: #efefef;\n  position: absolute;\n  top: 0px;\n  min-height: 100%;\n  height: auto;\n}\n.waybill-pay-detail .way-pay-num {\n  height: 56px;\n  line-height: 56px;\n  font-size: 15px;\n  padding: 0 12px;\n  text-align: start;\n  background-color: #ffffff;\n  color: #202020;\n}\n.waybill-pay-detail .way-pay-num span {\n  color: #ffba00;\n}\n.waybill-pay-detail .way-bill-msg {\n  width: 94%;\n  text-align: start;\n  min-height: 56px;\n  height: auto;\n  background-color: #ffffff;\n  display: inline-block;\n  margin-top: 20px;\n  border-radius: 10px;\n}\n.waybill-pay-detail .way-bill-msg .way-msg-title {\n  font-size: 17px;\n  color: #121212;\n  height: 46px;\n  line-height: 46px;\n  padding: 0 12px;\n  font-weight: bold;\n  border-bottom: 1px solid #cfcfcf;\n}\n.waybill-pay-detail .way-bill-msg .way-msg-title .show-or-hide {\n  float: right;\n  color: #1581cf;\n  font-size: 14px;\n  font-weight: normal;\n}\n.waybill-pay-detail .way-bill-msg .way-msg-title .show-or-hide .img-icon {\n  width: 11px;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}\n.waybill-pay-detail .way-bill-msg .way-msg-title .show-or-hide .shouQi {\n  -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0) rotate(-45deg);\n          transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0) rotate(-45deg);\n}\n.waybill-pay-detail .way-bill-msg .way-msg-title .show-or-hide .zhanKai {\n  -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0) rotate(-225deg);\n          transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0) rotate(-225deg);\n}\n.waybill-pay-detail .way-bill-msg .way-order-num {\n  min-height: 44px;\n  height: auto;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  border-bottom: 1px solid #dfdfdf;\n  font-size: 15px;\n}\n.waybill-pay-detail .way-bill-msg .way-pay-list {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  font-size: 15px;\n  padding: 0 12px;\n  margin-top: 8px;\n}\n.waybill-pay-detail .way-bill-msg .way-pay-list .list-item {\n  width: 50%;\n}\n.waybill-pay-detail .way-bill-msg .way-pay-list .list-item1 {\n  height: 32px;\n  line-height: 32px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.waybill-pay-detail .way-bill-msg .way-pay-list div:nth-child(2n) {\n  text-align: end;\n}\n.waybill-pay-detail .way-bill-msg .way-order-num1 {\n  min-height: 36px;\n  height: auto;\n  margin: 0 12px;\n  border-bottom: 1px solid #dfdfdf;\n  font-size: 15px;\n}\n.waybill-pay-detail .way-bill-msg .way-order-num1 .pay-msg-list {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  min-height: 36px;\n  height: auto;\n}\n.waybill-pay-detail .way-bill-msg .way-order-num1 {\n  border-top: 1px solid #dfdfdf;\n}\n.waybill-pay-detail .way-bill-msg .borde-none {\n  border: none;\n}\n.waybill-pay-detail .msg-left {\n  color: #797979;\n  width: 95px;\n  text-align: right;\n}\n.waybill-pay-detail .msg-right {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  word-break: break-word;\n  color: #202020;\n}\n.waybill-pay-detail .slide {\n  max-height: 0;\n  overflow: hidden;\n  -webkit-transition: max-height 0.5s cubic-bezier(0, 1, 0, 1) -0.1s;\n  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1) -0.1s;\n}\n.waybill-pay-detail .animate {\n  max-height: 9999px;\n  -webkit-transition: max-height 1s cubic-bezier(0, 1, 0, 1) -0.1s;\n  transition: max-height 1s cubic-bezier(0, 1, 0, 1) -0.1s;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n.popover-demo-content {\n  padding: 5px 10px;\n}\n"],sourceRoot:""}])}});
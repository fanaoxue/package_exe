webpackJsonp([59],{"P/lW":function(t,e,i){var n=i("XGu1");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("FIqI")("0b5933f0",n,!1,{})},XGu1:function(t,e,i){(t.exports=i("UTlt")(!0)).push([t.i,"\n.bigcompre-settlement-info {\n  width: 100%;\n  text-align: left;\n  background-color: #efefef;\n  position: absolute;\n  top: 0px;\n  min-height: 100%;\n  height: auto;\n}\n.bigcompre-settlement-info input[type='number']::-webkit-inner-spin-button,\n.bigcompre-settlement-info input[type='number']::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  appearance: none;\n  margin: 0;\n}\n.bigcompre-settlement-info .button {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background: #fff;\n  z-index: 10;\n}\n.bigcompre-settlement-info .weui-btn_primary {\n  background-color: #15499a !important;\n  margin: 10px auto;\n  width: 90% !important;\n}\n.bigcompre-settlement-info .img {\n  width: 8px;\n  height: 8px;\n}\n.bigcompre-settlement-info .weui-cell:before {\n  left: 0;\n}\n.bigcompre-settlement-info .weui-cell {\n  color: #202020;\n}\n.bigcompre-settlement-info .weui-cell .weui-cell__ft {\n  word-break: break-all;\n  color: #202020;\n}\n","",{version:3,sources:["D:/h5_gitlab/ngcbapp_h5/src/components/bigCompre/bigCompreSettlementInfo.vue"],names:[],mappings:";AACA;EACE,YAAY;EACZ,iBAAiB;EACjB,0BAA0B;EAC1B,mBAAmB;EACnB,SAAS;EACT,iBAAiB;EACjB,aAAa;CACd;AACD;;EAEE,yBAAyB;EACzB,iBAAiB;EACjB,UAAU;CACX;AACD;EACE,gBAAgB;EAChB,QAAQ;EACR,UAAU;EACV,YAAY;EACZ,iBAAiB;EACjB,YAAY;CACb;AACD;EACE,qCAAqC;EACrC,kBAAkB;EAClB,sBAAsB;CACvB;AACD;EACE,WAAW;EACX,YAAY;CACb;AACD;EACE,QAAQ;CACT;AACD;EACE,eAAe;CAChB;AACD;EACE,sBAAsB;EACtB,eAAe;CAChB",file:"bigCompreSettlementInfo.vue",sourcesContent:["\n.bigcompre-settlement-info {\n  width: 100%;\n  text-align: left;\n  background-color: #efefef;\n  position: absolute;\n  top: 0px;\n  min-height: 100%;\n  height: auto;\n}\n.bigcompre-settlement-info input[type='number']::-webkit-inner-spin-button,\n.bigcompre-settlement-info input[type='number']::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  appearance: none;\n  margin: 0;\n}\n.bigcompre-settlement-info .button {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background: #fff;\n  z-index: 10;\n}\n.bigcompre-settlement-info .weui-btn_primary {\n  background-color: #15499a !important;\n  margin: 10px auto;\n  width: 90% !important;\n}\n.bigcompre-settlement-info .img {\n  width: 8px;\n  height: 8px;\n}\n.bigcompre-settlement-info .weui-cell:before {\n  left: 0;\n}\n.bigcompre-settlement-info .weui-cell {\n  color: #202020;\n}\n.bigcompre-settlement-info .weui-cell .weui-cell__ft {\n  word-break: break-all;\n  color: #202020;\n}\n"],sourceRoot:""}])},qI3k:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAABECAYAAADdjVbeAAAEt0lEQVR4Xu2bXYwURRDHfzXHRtFDIPEFn8STaEw0msiDMdzl9G4XFPUAiRIjJhij4oNEXzSinHCGJxN8EBNNSESN34KKwu55uSAJPkhiNMZo8OtFeDFRFDDm2CnTPezH9C43s+fd7uzt9Nv01HTVv6q6uqp7WnCa5ulF2ADcDCwCulyahD8XgePAGMouyfF5tbxSetBxFjDBLmBVwgE1Kt4eMmyQfv40H1rAOs7FTHAQuKrR0dqE/jsy9Ek/vweAC+wDbm0T4acq5ieSZaVowc7Vz6Y6Spt9NyA6yuso97SZ4FMTV3jDWPg34JIYI7xAhhEzD2LQNo3kbPzZDDwag+kxA9iEcW9SYuUbslwrgsYYtCUkmudrhGsimPsGcDQI5UPJMdQSJDGZap69CHdEkaeA62ootXCU4zT/ferS59B5OofTOWyT7U5blmBMsgw0PxTF56gFWw+YumDSFm8Og49wiwySjxqwFe91lBzKp5EZo6mHY2VaFRRfAqdbAWoSnhcAS+PK1CjguOMmli4FnFjTTJNgqYWnSZGJHSa1cGJNM02CNW5hYSPKF1X8LwReAq4OyaTswGM3Wt5RmQM8A9wWohP2oTwLnLH9guCzHmGTg/Fb4CHgVLlfuAFlZyO6aBTwX5JlvstAC1ZgA6bSlMskxy+hroI91fjA+X61ZNkTosuzGOFnh26rZNlSh/cJ4KK4oBsFfEKyLKhhmmcYcYQpslhW8KsDZAgJg0NZJTn2huj2cyldYWUZL5Acw3UAmyOUGiOcSwEp4AjXOClZ5tXR8lbg6VC/R48MhN1SR1mN8r4zh9fIYNjNdYweivzo8NkmWWfaBMdEfwPdM+XSJqgYtzIHb6U2H5/nEXocpq8CryF239u081CeBPocuoMI24F/bb/a49l7gftCdMpPeDwOmDlban1orZtPBr5Rl46ryMTSpYATa5ppEiy1cKQiOyxotW5ZEkZk0Fn6mrAspZmWXTpncWrZccWDybQ6qjyMDOJJJ0jX4aRb6P/Kl1o4UoPCThRzxhQ0YS5qEwLz522lBXtVldrXlH3CI8B1Do+vUF6sKiPNmGtQVjp0xxG2ofxTxXspysZImavFavAw7ZRka4ttzTOC8FSIsc8SWR4u4jXPnQjvhuiUtZLjveo+PcDleBx16J6THOYHtHB3gZOA2UiM1Rp16TTTMmqdzZlWx1nY7DmtxedIecJ4nI+wu86h9BaKtj9oGTx8RoB1zmR7E4/NTOCX+7tYD3avu9JatE0bKzDMCFEKOFCrFuxdhhnbiJ8R48UaNLVw8yz8DlJ1eujTjfAYsDBkKeEQav9hDoKRTwbhAWCJY9GjKK/gMRH4KB7CEMqyJASt0xxmngxXRdRgHd6O8ERIwCJXygp+CAXaPHchvOUAuVtyvB2i288VdPF9EgB33Do8KwBHX/Ko+Fa7A7aXPOJe4wlg+/TKcg6VdKDjdHOGj1D6nWD0MId5uTTf9QgZ/mBHTTlnys2FbJLrg6Clw3jcyIM1vzII48zhdum31VEQ3w6wDM+eZJbvUEYsccc68qJWZ13Fs64xysd1dhhiJUBtRBRctrSAO+067VnQnXNh2smGeoH7EW6ajVfi/wMcR+4fl7iQvQAAAABJRU5ErkJggg=="},ybGi:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("u3Lg"),s=(i("KS8L"),i("P9l9")),o=i("11Y/"),a=i("8RlY"),r={name:"bigCompreSettlementInfo",data:function(){return{bitian:i("jmUF"),taxWaybillId:this.$route.query.taxWaybillId,xid:this.$route.query.xid,unitPrice:"",loadingTonnage:"",unloadingTonnage:"",updw_freight:"",allFreight:"",prepayments:"",disabled:!1,successFlag:1,classify:Object(n.a)("classify")}},beforeRouteEnter:function(t,e,i){i(function(t){t.$store.commit("updateLoadingStatus",{isLoading:!1})})},created:function(){this.unitPrice=this.dazongFirst.unitPrice},mounted:function(){},computed:{dazongFirst:function(){return this.$store.state.dazong.dazongFirst},weyBillSecond:function(){return this.$store.state.wayBill.weyBillSecond},reciveMsgPay:function(){return this.$store.state.wayBill.reciveMsgPay},huosundunwei:{get:function(){var t=Number(this.loadingTonnage)-Number(this.unloadingTonnage);return isNaN(t)||t<0?"0.0000":t.toFixed(4)},set:function(){}}},methods:{clickConfirm:function(){if("0"!=this.classify&&!this.isEmptyStr(this.unitPrice)){if(!/^([1-9]\d{0,6}|0)([\.]\d{0,4})?$/.test(this.unitPrice))return this.$vux.toast.text("无效的运输单价！","middle"),!1}if(!this.isEmptyStr(this.loadingTonnage)){if(!/^([1-9]\d{0,6}|0)([\.]\d{0,4})?$/.test(this.loadingTonnage))return this.$vux.toast.text("无效的装货吨位！","middle"),!1}if(this.isEmptyStr(this.unloadingTonnage))return this.$vux.toast.text("卸货吨位必填！","middle"),!1;if(!/^([1-9]\d{0,6}|0)([\.]\d{0,4})?$/.test(this.unloadingTonnage))return this.$vux.toast.text("无效的卸货吨位！","middle"),!1;if("0"!=this.classify){if(this.isEmptyStr(this.updw_freight))return this.$vux.toast.text("应收货主运费必填！","middle"),!1;if(!/^([1-9]\d{0,6}|0)([\.]\d{0,2})?$/.test(this.updw_freight)||0==Number(this.updw_freight))return this.$vux.toast.text("无效的应收货主运费！","middle"),!1}if(this.isEmptyStr(this.allFreight))return this.$vux.toast.text("运费金额必填！","middle"),!1;if(!/^([1-9]\d{0,6}|0)([\.]\d{0,2})?$/.test(this.allFreight)||0==Number(this.allFreight))return this.$vux.toast.text("无效的运费金额！","middle"),!1;if(Number(this.allFreight)>Number(this.dazongFirst.maxAllFreight))return this.$vux.toast.text("运费金额不能超过最大金额！","middle"),!1;if(!this.isEmptyStr(this.prepayments)){if(!/^([1-9]\d{0,6}|0)([\.]\d{0,2})?$/.test(this.prepayments))return this.$vux.alert.show({title:"提示",content:"无效的预付现金！"}),!1;if(!this.isEmptyStr(this.allFreight)&&Number(this.prepayments)>Number(this.allFreight))return this.$vux.alert.show({title:"提示",content:"预付现金不能超过运费金额！"}),!1;if(Number(this.prepayments)>Number(this.dazongFirst.maxAllFreight))return this.$vux.alert.show({title:"提示",content:"预付现金不能超过最大金额！"}),!1}if(!(this.isEmptyStr(this.dazongFirst.startProvinceCode)||this.isEmptyStr(this.dazongFirst.endProvinceCode)||this.isEmptyStr(this.dazongFirst.startCityCode)||this.isEmptyStr(this.dazongFirst.endCityCode)||this.isEmptyStr(this.allFreight))){if(!this.successFlag)return!1;this.checkFee()}},checkFee:function(){var t=this,e=this;this.$store.commit("updateLoadingStatus",{isLoading:!0}),this.successFlag=0;var i={fromProvId:this.dazongFirst.startProvinceCode,toProvId:this.dazongFirst.endProvinceCode,fromCityId:this.dazongFirst.startCityCode,toCityId:this.dazongFirst.endCityCode,allFreight:this.allFreight};Object(s.e)(i).then(function(i){"0"==i.data.reCode?"好运宝收款"==t.reciveMsgPay.reciveBank[0]?e.gotToBuild():e.informationEntry():(t.$store.commit("updateLoadingStatus",{isLoading:!1}),t.disabled=!1,t.successFlag=1,"1"==i.data.reCode?t.$vux1.confirm.show({title:"提示",content:i.data.reInfo,confirmText:"确认",cancelText:"取消",onConfirm:function(){"好运宝收款"==t.reciveMsgPay.reciveBank[0]?e.gotToBuild():e.informationEntry()}}):t.$vux.toast.text("抱歉,您录入的数据不合法,请核实后重试！","middle"))}).catch(function(e){t.successFlag=1,t.$store.commit("updateLoadingStatus",{isLoading:!1}),t.disabled=!1})},informationEntry:function(){var t=this,e=void 0;e=0==this.reciveMsgPay.reciveBank.length?"":this.reciveMsgPay.reciveBank[0];var i={mobileNo:this.weyBillSecond.mobileNo,payeeBankNo:"1"===window.sessionStorage.isChooseType?this.reciveMsgPay.recivePersonBankNum:"",payeeName:"1"===window.sessionStorage.isChooseType?this.reciveMsgPay.recivePersonName:"",payeeBankName:"1"===window.sessionStorage.isChooseType?e:"",payeeProvinceId:"1"===window.sessionStorage.isChooseType?this.reciveMsgPay.reciveBankAdress[0]:"",payeeCityId:"1"===window.sessionStorage.isChooseType?this.reciveMsgPay.reciveBankAdress[1]:"",payeeIdCard:"1"===window.sessionStorage.isChooseType?this.reciveMsgPay.recivePersonCardNum:"",payeeMobileNo:"1"===window.sessionStorage.isChooseType?this.reciveMsgPay.recivePersonphoneNum:"",alipayNo:"1"===window.sessionStorage.isChooseType?this.reciveMsgPay.alipayNo:""};console.log(i),""!=i.mobileNo&&""!=i.payeeBankNo&&""!=i.payeeName&&""!=i.payeeBankName&&""!=i.payeeProvinceId&&""!=i.payeeCityId&&""!=i.payeeIdCard&&""!=i.payeeMobileNo?(this.$store.commit("updateLoadingStatus",{isLoading:!0}),Object(o.i)(i).then(function(e){t.gotToBuild()}).catch(function(e){t.$store.commit("updateLoadingStatus",{isLoading:!1}),t.disabled=!1,t.$vux.toast.text(e.message,"middle"),t.successFlag=1})):this.gotToBuild()},gotToBuild:function(){var t=this,e=void 0;e=8!=this.dazongFirst.billCycleMode?"":this.dazongFirst.transTrip,0==this.dazongFirst.startTime.length||this.dazongFirst.startTime.replace(/\//g,"-");var i="";i="1"===window.sessionStorage.isChooseType?this.reciveMsgPay.reciveType:"";var n={cityId:"1"===window.sessionStorage.isChooseType?this.reciveMsgPay.reciveBankAdress[1]:"",allFreight:this.allFreight,endProvinceId:this.dazongFirst.endProvinceCode,payType:i,alipayNo:"1"===window.sessionStorage.isChooseType?this.reciveMsgPay.alipayNo:"",payIdCard:"1"===window.sessionStorage.isChooseType?this.reciveMsgPay.recivePersonCardNum:"",hkbPayeeType:"0",startTime:this.dazongFirst.startTime,transTrip:e,payBankNo:"1"===window.sessionStorage.isChooseType?this.reciveMsgPay.recivePersonBankNum:"",cartBadgeNo:this.weyBillSecond.cartBadgeNo,goodsName:this.dazongFirst.goodsName,goodsAmountType:"0",payName:"1"===window.sessionStorage.isChooseType?this.reciveMsgPay.recivePersonName:"",startCountyId:this.dazongFirst.startCountyCode,unitPrice:this.unitPrice,endCityId:this.dazongFirst.endCityCode,wbItem:this.dazongFirst.wbItem,startProvinceId:this.dazongFirst.startProvinceCode,mobileNo:this.weyBillSecond.mobileNo,payBankName:"1"===window.sessionStorage.isChooseType?this.reciveMsgPay.reciveBank[0]:"",provinceId:"1"===window.sessionStorage.isChooseType?this.reciveMsgPay.reciveBankAdress[0]:"",endCountyId:this.dazongFirst.endCountyCode,startCityId:this.dazongFirst.startCityCode,payMobileNo:"1"===window.sessionStorage.isChooseType?this.reciveMsgPay.recivePersonphoneNum:"",driverName:this.weyBillSecond.driverName,prepayments:this.prepayments,unloadingTonnage:this.unloadingTonnage,loadingTonnage:this.loadingTonnage,loadingAddressName:this.dazongFirst.loadingAddressName,unloadingAddressName:this.dazongFirst.unloadingAddressName,updw_orgid:this.dazongFirst.orgId,updw_freight:"0"==this.classify?"":this.updw_freight,transportLineId:this.dazongFirst.transportLineId,wbMode:"0"==this.classify?"0":"1",tripFlag:this.dazongFirst.tripFlag};console.log(n),this.$store.commit("updateLoadingStatus",{isLoading:!0}),Object(a.a)(n).then(function(e){if(t.$store.commit("updateLoadingStatus",{isLoading:!1}),0==e.data.reCode){window.localStorage.clear();var i=e.data.result.taxWaybillId;t.successFlag=1,t.$router.push({path:"/wayBillSuccess",query:{taxWaybillId:i,mobileNo:t.weyBillSecond.mobileNo,driverName:t.weyBillSecond.driverName,cartBadgeNo:t.weyBillSecond.cartBadgeNo,dazongState:"1"}})}else t.$vux.alert.show({title:"提示",buttonText:"知道了",content:e.data.reInfo}),t.successFlag=1,t.disabled=!1}).catch(function(e){console.log(e),t.$vux.toast.text(e,"middle"),t.$store.commit("updateLoadingStatus",{isLoading:!1}),t.disabled=!1,t.successFlag=1})},calculate:function(){var t=Number(this.unitPrice)*Number(this.unloadingTonnage);isNaN(t)||t<0?this.allFreight="0.00":this.allFreight=t.toFixed(2)},isEmptyStr:function(t){return!(void 0!=t&&""!=t&&null!=t&&!/^[\s]*$/.test(t))}}},l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bigcompre-settlement-info"},[n("c-header",[n("x-header",{attrs:{"left-options":{backText:""}}},[t._v("结算信息")])],1),t._v(" "),n("group",{attrs:{"label-width":"6em","label-align":"right","label-margin-right":"1em"}},[n("x-input",{directives:[{name:"show",rawName:"v-show",value:"0"!=this.classify,expression:"this.classify != '0'"}],attrs:{type:"number",title:"运输单价：",placeholder:"请输入货物的单价"},model:{value:t.unitPrice,callback:function(e){t.unitPrice="string"==typeof e?e.trim():e},expression:"unitPrice"}},[n("span",{attrs:{slot:"right"},slot:"right"},[n("span",[t._v("元/吨")])])]),t._v(" "),n("x-input",{attrs:{type:"number",title:"装货吨位：",placeholder:"请输入装货吨位"},model:{value:t.loadingTonnage,callback:function(e){t.loadingTonnage=e},expression:"loadingTonnage"}},[n("span",{attrs:{slot:"right"},slot:"right"},[n("span",[t._v("吨")])])]),t._v(" "),n("x-input",{attrs:{title:"卸货吨位：",type:"number",placeholder:"请输入卸货吨位"},model:{value:t.unloadingTonnage,callback:function(e){t.unloadingTonnage="string"==typeof e?e.trim():e},expression:"unloadingTonnage"}},[n("div",{staticStyle:{"text-align":"right","padding-right":"1em",width:"6em"},attrs:{slot:"label"},slot:"label"},[n("img",{staticClass:"img",staticStyle:{"font-size":"20px","vertical-align":"middle"},attrs:{src:t.bitian,alt:"",width:"8px",height:"8px"}}),t._v(" "),n("span",{staticStyle:{"vertical-align":"middle"}},[t._v("卸货吨位：")])]),t._v(" "),n("span",{attrs:{slot:"right"},slot:"right"},[n("span",[t._v("吨")])])]),t._v(" "),n("cell",{attrs:{title:"货损吨位：","value-align":"left"}},[n("span",{staticClass:"huosun"},[t._v(t._s(t.huosundunwei))]),t._v(" "),n("span",[t._v("吨")])]),t._v(" "),n("x-input",{directives:[{name:"show",rawName:"v-show",value:"0"!=this.classify,expression:"this.classify != '0'"}],attrs:{title:"应收货主运费：",type:"number",placeholder:"请输入应收货主运费"},model:{value:t.updw_freight,callback:function(e){t.updw_freight="string"==typeof e?e.trim():e},expression:"updw_freight"}},[n("div",{staticStyle:{"text-align":"right","padding-right":"1em",width:"8em"},attrs:{slot:"label"},slot:"label"},[n("img",{staticClass:"img",staticStyle:{"font-size":"20px","vertical-align":"middle"},attrs:{src:t.bitian,alt:"",width:"8px",height:"8px"}}),t._v(" "),n("span",{staticStyle:{"vertical-align":"middle"}},[t._v("应收货主运费：")])]),t._v(" "),n("span",{attrs:{slot:"right"},slot:"right"},[n("span",[t._v("元")])])]),t._v(" "),n("x-input",{attrs:{"value-align":"left","show-clear":!1,type:"number",placeholder:"请输入运费金额"},model:{value:t.allFreight,callback:function(e){t.allFreight="string"==typeof e?e.trim():e},expression:"allFreight"}},[n("div",{staticStyle:{"text-align":"right","padding-right":"1em",width:"6em"},attrs:{slot:"label"},slot:"label"},[n("img",{staticClass:"img",staticStyle:{"font-size":"20px","vertical-align":"middle"},attrs:{src:t.bitian,alt:"",width:"8px",height:"8px"}}),t._v(" "),n("span",{staticStyle:{"vertical-align":"middle"}},[t._v("运费金额：")])]),t._v(" "),n("div",{attrs:{slot:"right"},slot:"right"},[n("span",[t._v("元")]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:"0"!=this.classify,expression:"this.classify != '0'"}],on:{click:function(e){return t.calculate()}}},[n("img",{staticStyle:{"vertical-align":"bottom","margin-left":"10px"},attrs:{src:i("qI3k"),alt:"",width:"20"}}),t._v(" "),n("span",{staticStyle:{color:"#FFBA00"}},[t._v("计算运费")])])])]),t._v(" "),n("x-input",{attrs:{type:"number",title:"预付现金：",placeholder:"请输入预付现金"},model:{value:t.prepayments,callback:function(e){t.prepayments="string"==typeof e?e.trim():e},expression:"prepayments"}},[n("span",{attrs:{slot:"right"},slot:"right"},[n("span",[t._v("元")])])])],1),t._v(" "),n("div",{staticClass:"footer",staticStyle:{height:"5rem"}}),t._v(" "),n("div",{staticClass:"button"},[n("x-button",{attrs:{type:"primary",disabled:t.disabled},nativeOn:{click:function(e){return t.clickConfirm(e)}}},[t._v("建单")])],1)],1)};l._withStripped=!0;var d={render:l,staticRenderFns:[]},c=d;var g=!1;var h=i("C7Lr")(r,c,!1,function(t){g||i("P/lW")},null,null);h.options.__file="src/components/bigCompre/bigCompreSettlementInfo.vue";e.default=h.exports}});
webpackJsonp([75],{"9dEt":function(t,e,i){var a=i("s8IE");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("15e7d9d5",a,!1,{})},s8IE:function(t,e,i){(t.exports=i("FZ+f")(!0)).push([t.i,"\n.bigcompre-waybill-info {\n  width: 100%;\n  text-align: left;\n  background-color: #efefef;\n  position: absolute;\n  top: 0px;\n  min-height: 100%;\n  height: auto;\n}\n.bigcompre-waybill-info .img {\n  width: 8px;\n  height: 8px;\n}\n.bigcompre-waybill-info .danwei {\n  color: #202020;\n}\n.bigcompre-waybill-info .button {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background: #fff;\n}\n.bigcompre-waybill-info .weui-btn_primary {\n  background-color: #15499a !important;\n  margin: 1rem auto;\n  width: 90% !important;\n}\n.bigcompre-waybill-info .weui-cell__ft {\n  text-align: left !important;\n}\n.bigcompre-waybill-info .vux-popup-picker-select {\n  text-align: left !important;\n}\n.bigcompre-waybill-info .weui-cell__hd {\n  color: #797979;\n}\n.bigcompre-waybill-info .vux-datetime {\n  color: #797979;\n}\n","",{version:3,sources:["D:/h5_gitlab/ngcbapp_h5/src/components/bigCompre/bigCompreWayBillInfo.vue"],names:[],mappings:";AACA;EACE,YAAY;EACZ,iBAAiB;EACjB,0BAA0B;EAC1B,mBAAmB;EACnB,SAAS;EACT,iBAAiB;EACjB,aAAa;CACd;AACD;EACE,WAAW;EACX,YAAY;CACb;AACD;EACE,eAAe;CAChB;AACD;EACE,gBAAgB;EAChB,QAAQ;EACR,UAAU;EACV,YAAY;EACZ,iBAAiB;CAClB;AACD;EACE,qCAAqC;EACrC,kBAAkB;EAClB,sBAAsB;CACvB;AACD;EACE,4BAA4B;CAC7B;AACD;EACE,4BAA4B;CAC7B;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB",file:"bigCompreWayBillInfo.vue",sourcesContent:["\n.bigcompre-waybill-info {\n  width: 100%;\n  text-align: left;\n  background-color: #efefef;\n  position: absolute;\n  top: 0px;\n  min-height: 100%;\n  height: auto;\n}\n.bigcompre-waybill-info .img {\n  width: 8px;\n  height: 8px;\n}\n.bigcompre-waybill-info .danwei {\n  color: #202020;\n}\n.bigcompre-waybill-info .button {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background: #fff;\n}\n.bigcompre-waybill-info .weui-btn_primary {\n  background-color: #15499a !important;\n  margin: 1rem auto;\n  width: 90% !important;\n}\n.bigcompre-waybill-info .weui-cell__ft {\n  text-align: left !important;\n}\n.bigcompre-waybill-info .vux-popup-picker-select {\n  text-align: left !important;\n}\n.bigcompre-waybill-info .weui-cell__hd {\n  color: #797979;\n}\n.bigcompre-waybill-info .vux-datetime {\n  color: #797979;\n}\n"],sourceRoot:""}])},zutd:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("Xxa5"),n=i.n(a),r=i("exGp"),s=i.n(r),o=i("//Fk"),l=i.n(o),d=i("8RlY"),c=i("P9l9"),u=i("yFUi"),m=i("u3Lg"),g=i("KS8L"),p={name:"bigCompreWayBillInfo",data:function(){return{classify:Object(m.a)("classify"),transportLineId:this.$route.query.transportLineId,bitian:i("jmUF"),cityList:Object(u.a)(city.data),taxWaybillNo:"",loadingAddressName:"",unloadingAddressName:"",value3:[],value4:[],startProvinceCode:"",startCityCode:"",startCountyCode:"",endProvinceCode:"",endCityCode:"",endCountyCode:"",goodsName:"",unitPrice:"",startTime:"",startDate:"",endDate:"",minDate:"",list3:[],drawee:"",draweeArr:[],taxDraweePartyId:"",taxDraweePartyIdArr:[],consignorList:[],consignor:[],consignorState:!1,requirement:"",buttonState:!1,isDisable:!0,cityIdArr:[],types:"",waybillNoCfg:"",tripFlag:"0",businessItems:"",wbItem:"",transportUnitPriceType:""}},filters:{typeFilter:function(t){var e="";switch(t){case"0":e="吨";break;case"1":e="方";break;case"2":e="件";break;case"3":e="车";break;default:e=""}return e}},beforeRouteEnter:function(t,e,i){"chooseCity"===e.name?i(function(t){t.$store.commit("updateLoadingStatus",{isLoading:!1}),t.cityIdArr=JSON.parse(localStorage.getItem("cityIdArr"))}):"bigCompreCarTeam"===e.name?i(function(t){t.$store.commit("updateLoadingStatus",{isLoading:!1})}):i(function(t){t.value3=[],t.value4=[],t.draweeArr=[],t.list3=[],t.consignorList=[],t.consignor=[],t.buttonFlag=!0,t.$nextTick(function(){t.$_getCompanyConfig().then(function(){t.dataInit().then(function(){t.getDraweeMethod().then(function(){t.queryWaybillMethod().then(function(){})})})})})})},beforeRouteLeave:function(t,e,i){var a={type:"dazongFirstqiye",updatMsg:{taxWaybillNo:this.taxWaybillNo,transportLineId:this.transportLineId,loadingAddressName:this.loadingAddressName,unloadingAddressName:this.unloadingAddressName,startProvinceCode:this.startProvinceCode,startCityCode:this.startCityCode,startCountyCode:this.startCountyCode,endProvinceCode:this.endProvinceCode,endCityCode:this.endCityCode,endCountyCode:this.endCountyCode,goodsName:this.goodsName,unitPrice:this.unitPrice,startTime:this.startTime,drawee:this.drawee,taxDraweePartyId:this.taxDraweePartyId,requirement:this.requirement,tripFlag:this.tripFlag,consignor:this.consignor,wbItem:this.wbItem}};this.$store.commit("updateWayBillStatus",a),i()},watch:{cityIdArr:function(){0!=this.cityIdArr.length&&(this.types=localStorage.getItem("types"),localStorage.removeItem("types"),0==this.types?(this.startProvinceCode=this.cityIdArr[0],this.startCityCode=this.cityIdArr[1],this.startCountyCode=this.cityIdArr[2],this.value3=[],this.value3=this.cityIdArr):(this.endProvinceCode=this.cityIdArr[0],this.endCityCode=this.cityIdArr[1],this.endCountyCode=this.cityIdArr[2],this.value4=[],this.value4=this.cityIdArr))}},created:function(){this.$store.commit("updateLoadingStatus",{isLoading:!1});var t=(new Date).getFullYear();this.endDate=t+"-12-31";var e=new Date((new Date).getTime()-864e5),i=e.getFullYear(),a=e.getMonth()+1,n=e.getDate();a<10&&(a="0"+a),n<10&&(n="0"+n),this.startDate=i+"-"+a+"-"+n},methods:{$_getCompanyConfig:function(){var t=this;return this.$store.commit("updateLoadingStatus",{isLoading:!0}),new l.a(function(e,i){Object(c.q)().then(function(a){t.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"===a.data.reCode?(t.businessItems=a.data.result.businessItems,"9"===a.data.result.createWaybillCfg?(t.$vux.confirm.show({title:"提示",confirmText:"确认",cancelText:"取消",content:"当前企业已关闭建单权限！",showCancelButton:!1,onConfirm:function(){Object(g.a)(-1)}}),i()):e()):(t.$vux.toast.text(a.data.reInfo,"middle"),i())}).catch(function(e){t.$store.commit("updateLoadingStatus",{isLoading:!1}),t.$vux.toast.text(e.message,"middle"),i()})})},dataInit:function(){var t=this;return new l.a(function(e,i){Object(d.e)({transportLineId:t.transportLineId}).then(function(i){if("0"===i.data.reCode){var a=i.data.result;t.startCityCode=a.loadingCityId,t.startProvinceCode=a.loadingProvinceId,t.startCountyCode=a.loadingCountyId,t.endCityCode=a.unloadingCityId,t.endProvinceCode=a.unloadingProvinceId,t.endCountyCode=a.unloadingCountyId,t.value3.push(t.startProvinceCode,t.startCityCode,t.startCountyCode),t.value4.push(t.endProvinceCode,t.endCityCode,t.endCountyCode),t.loadingAddressName=a.loadingAddressName,t.unloadingAddressName=a.unloadingAddressName,t.goodsName=a.goodsName,t.unitPrice=a.curTransportUnitPrice,t.tripFlag=a.manyTrips,a.consignor&&a.consignor.split(",").length>0&&(t.consignorState=!0,t.consignorList.push(a.consignor.split(",")),1===a.consignor.split(",").length&&t.consignor.push(a.consignor.split(",")[0])),a.drawee&&a.taxDraweePartyId&&(t.draweeArr.push(a.drawee),t.drawee=a.drawee,t.taxDraweePartyId=a.taxDraweePartyId),t.transportUnitPriceType=a.transportUnitPriceType}else t.$vux.toast.text(i.data.reInfo,"middle");e()}).catch(function(e){t.$store.commit("updateLoadingStatus",{isLoading:!1}),i()})})},getDraweeMethod:function(){var t=this;return new l.a(function(e,i){t.$store.commit("updateLoadingStatus",{isLoading:!0}),Object(c.r)({}).then(function(i){t.$store.commit("updateLoadingStatus",{isLoading:!1});var a=i.data.result;if(a.length>0)if(0==i.data.reCode){var n=[];if("0"==a.length)t.draweeArr=[];else if("1"==a.length)t.taxDraweePartyIdArr.push(a[0].taxDraweePartyId),t.drawee||(t.drawee=a[0].drawee,t.draweeArr.push(a[0].drawee)),n.push(a[0].drawee);else for(var r=0;r<a.length;r++)t.taxDraweePartyIdArr.push(a[r].taxDraweePartyId),n.push(a[r].drawee);t.list3.push(n)}else t.$vux.toast.text(i.data.reInfo,"middle");e()}).catch(function(e){t.$store.commit("updateLoadingStatus",{isLoading:!1}),i()})})},queryWaybillMethod:function(){var t=this;return new l.a(function(e,i){t.$store.commit("updateLoadingStatus",{isLoading:!0}),Object(c.F)().then(function(i){if(t.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"===i.data.reCode){var a=i.data.result;t.waybillNoCfg=a.waybillNoCfg,"1"!==t.waybillNoCfg&&(t.$store.commit("updateLoadingStatus",{isLoading:!0}),Object(c.E)().then(function(e){t.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"===e.data.reCode?t.taxWaybillNo=e.data.result:t.$vux.toast.text(e.data.reInfo,"middle")}))}e()}).catch(function(e){t.$store.commit("updateLoadingStatus",{isLoading:!1}),i()})})},startValue:function(){var t=this.value3;this.startProvinceCode=t[0],this.startCityCode=t[1],this.startCountyCode=t[2]},endValue:function(){var t=this.value4;this.endProvinceCode=t[0],this.endCityCode=t[1],this.endCountyCode=t[2]},changeTime:function(t){console.log(t),this.startTime=t},chooseStCity:function(t){var e=this;this.isDisable&&(this.isDisable=!1,this.$router.push({path:"/chooseCity",query:{type:t}})),setTimeout(function(){e.isDisable=!0},1e3)},taxDraweeChange:function(t){if(this.draweeArr=t,this.drawee=this.draweeArr[0],void 0!=this.list3[0])for(var e=0;e<this.list3[0].length;e++)this.list3[0][e]==t[0]&&(this.taxDraweePartyId=this.taxDraweePartyIdArr[e])},nextStep:function(){var t=this;return s()(n.a.mark(function e(){var i;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(1!=t.waybillNoCfg){e.next=9;break}if(!t.isEmptyStr(t.taxWaybillNo)){e.next=4;break}return t.$vux.toast.text("运单号不能为空,请输入运单号！","middle"),e.abrupt("return");case 4:if(t.isEmptyStr(t.taxWaybillNo)||/^[0-9a-zA-Z_-]+$/.test(t.taxWaybillNo)){e.next=7;break}return t.$vux.toast.text("运单号只接受数字,字母,_与 -,不接受特殊字符","middle"),e.abrupt("return");case 7:e.next=12;break;case 9:if(t.isEmptyStr(t.taxWaybillNo)||/^[0-9a-zA-Z_-]+$/.test(t.taxWaybillNo)){e.next=12;break}return t.$vux.toast.text("运单号只接受数字,字母,_与 -,不接受特殊字符","middle"),e.abrupt("return");case 12:if(!t.isEmptyStr(t.loadingAddressName)){e.next=15;break}return t.$vux.toast.text("装货地名称不能为空！","middle"),e.abrupt("return");case 15:if(!t.isEmptyStr(t.unloadingAddressName)){e.next=18;break}return t.$vux.toast.text("卸货地名称不能为空！","middle"),e.abrupt("return");case 18:if(t.isEmptyStr(t.startProvinceCode)||t.isEmptyStr(t.endProvinceCode)){e.next=28;break}return e.next=21,t.checkCountry();case 21:if("1"!=(i=e.sent)){e.next=25;break}return t.$vux.toast.text("同城运输区县必填！","middle"),e.abrupt("return");case 25:if("2"!=i){e.next=28;break}return t.$vux.toast.text("验证同城运输区县是否必填异常，请稍后重试！","middle"),e.abrupt("return");case 28:if(!t.isEmptyStr(t.goodsName)){e.next=31;break}return t.$vux.toast.text("货物名称不能为空！","middle"),e.abrupt("return");case 31:if(t.isEmptyStr(t.unitPrice)){e.next=36;break}if(/^([1-9]\d{0,6}|0)([\.]\d{0,4})?$/.test(t.unitPrice)){e.next=36;break}return t.$vux.toast.text("无效的运输单价！","middle"),e.abrupt("return");case 36:if(!t.isEmptyStr(t.startTime)){e.next=39;break}return t.$vux.toast.text("发车日期必填！","middle"),e.abrupt("return");case 39:if(""!=t.drawee&&""!=t.taxDraweePartyId){e.next=42;break}return t.$vux.toast.text("受票方必填！","middle"),e.abrupt("return");case 42:if(3!=t.businessItems){e.next=46;break}if(!t.isEmptyStr(t.wbItem)){e.next=46;break}return t.$vux.toast.text("业务项目不能为空！","middle"),e.abrupt("return",!1);case 46:t.$router.push({path:"/bigCompreCarTeam",query:{transportUnitPriceType:t.transportUnitPriceType}});case 47:case"end":return e.stop()}},e,t)}))()},checkCountry:function(){var t=this;return new l.a(function(e,i){var a=t.startProvinceCode,n=t.startCityCode,r=t.endCityCode,s=t.startCountyCode,o=t.endCountyCode;t.$store.commit("updateLoadingStatus",{isLoading:!0}),Object(c.d)(a,n,r,s,o).then(function(i){t.$store.commit("updateLoadingStatus",{isLoading:!1}),e(i.data.reCode)}).catch(function(i){t.$store.commit("updateLoadingStatus",{isLoading:!1}),e("1")})})},isEmptyStr:function(t){return!(void 0!=t&&""!=t&&null!=t&&!/^[\s]*$/.test(t))}}},h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bigcompre-waybill-info"},[i("c-header",[i("x-header",{attrs:{"left-options":{backText:""}}},[t._v("运单信息")])],1),t._v(" "),i("group",{attrs:{"label-width":"7em","label-margin-right":"1em","label-align":"right"}},[i("x-input",{attrs:{title:"运 单 号：",placeholder:"请填写运单号",max:128},model:{value:t.taxWaybillNo,callback:function(e){t.taxWaybillNo="string"==typeof e?e.trim():e},expression:"taxWaybillNo"}},[i("div",{staticStyle:{"text-align":"right","padding-right":"1em",width:"7em"},attrs:{slot:"label"},slot:"label"},[i("img",{directives:[{name:"show",rawName:"v-show",value:1==t.waybillNoCfg,expression:"waybillNoCfg == 1"}],staticClass:"img",staticStyle:{"font-size":"20px","vertical-align":"middle"},attrs:{src:t.bitian,alt:"",width:"8",height:"8"}}),t._v(" "),i("span",{staticStyle:{"vertical-align":"middle"}},[t._v("运 单 号：")])])]),t._v(" "),i("x-input",{attrs:{title:"装货地名称：",placeholder:"请输入装货地名称"},model:{value:t.loadingAddressName,callback:function(e){t.loadingAddressName="string"==typeof e?e.trim():e},expression:"loadingAddressName"}},[i("div",{staticStyle:{"text-align":"right","padding-right":"1em",width:"7em"},attrs:{slot:"label"},slot:"label"},[i("img",{staticClass:"img",staticStyle:{"font-size":"20px","vertical-align":"middle"},attrs:{src:t.bitian,alt:"",width:"8",height:"8"}}),t._v(" "),i("span",{staticStyle:{"vertical-align":"middle"}},[t._v("装货地名称：")])])]),t._v(" "),i("popup-picker",{attrs:{title:"装货地城市：",data:t.cityList,columns:3,disabled:"","show-name":""},on:{"on-hide":t.startValue},nativeOn:{click:function(e){return t.chooseStCity(0)}},scopedSlots:t._u([{key:"title",fn:function(e){return[i("span",{class:e.labelClass,staticStyle:{height:"24px"},style:e.labelStyle},[i("img",{staticClass:"img",staticStyle:{"font-size":"20px","vertical-align":"middle"},attrs:{src:t.bitian,alt:"",width:"8",height:"8"}}),t._v(" "),i("span",{staticStyle:{"vertical-align":"middle"}},[t._v("装货地城市：")])])]}}]),model:{value:t.value3,callback:function(e){t.value3=e},expression:"value3"}}),t._v(" "),i("x-input",{attrs:{title:"卸货地名称：",placeholder:"请输入卸货地名称"},model:{value:t.unloadingAddressName,callback:function(e){t.unloadingAddressName="string"==typeof e?e.trim():e},expression:"unloadingAddressName"}},[i("div",{staticStyle:{"text-align":"right","padding-right":"1em",width:"7em"},attrs:{slot:"label"},slot:"label"},[i("img",{staticClass:"img",staticStyle:{"font-size":"20px","vertical-align":"middle"},attrs:{src:t.bitian,alt:"",width:"8",height:"8"}}),t._v(" "),i("span",{staticStyle:{"vertical-align":"middle"}},[t._v("卸货地名称：")])])]),t._v(" "),i("popup-picker",{attrs:{title:"卸货地城市：",data:t.cityList,columns:3,disabled:"","show-name":""},on:{"on-hide":t.endValue},nativeOn:{click:function(e){return t.chooseStCity(1)}},scopedSlots:t._u([{key:"title",fn:function(e){return[i("span",{class:e.labelClass,staticStyle:{height:"24px"},style:e.labelStyle},[i("img",{staticClass:"img",staticStyle:{"font-size":"20px","vertical-align":"middle"},attrs:{src:t.bitian,alt:"",width:"8",height:"8"}}),t._v(" "),i("span",{staticStyle:{"vertical-align":"middle"}},[t._v("卸货地城市：")])])]}}]),model:{value:t.value4,callback:function(e){t.value4=e},expression:"value4"}}),t._v(" "),i("x-input",{attrs:{title:"货物名称：",type:"text",placeholder:"请输入货物名称"},model:{value:t.goodsName,callback:function(e){t.goodsName=e},expression:"goodsName"}},[i("div",{staticStyle:{"text-align":"right","padding-right":"1em",width:"7em"},attrs:{slot:"label"},slot:"label"},[i("img",{staticClass:"img",staticStyle:{"font-size":"20px","vertical-align":"middle"},attrs:{src:t.bitian,alt:"",width:"8",height:"8"}}),t._v(" "),i("span",{staticStyle:{"vertical-align":"middle"}},[t._v("货物名称：")])])]),t._v(" "),i("x-input",{attrs:{title:"运输单价：",placeholder:"请输入货物的单价",type:"number"},model:{value:t.unitPrice,callback:function(e){t.unitPrice="string"==typeof e?e.trim():e},expression:"unitPrice"}},[i("span",{staticClass:"danwei",attrs:{slot:"right"},slot:"right"},[t._v("元/"+t._s(t._f("typeFilter")(t.transportUnitPriceType)))])]),t._v(" "),i("datetime",{attrs:{title:"发车日期：",format:"YYYY-MM-DD","start-date":t.startDate,"end-date":t.endDate,"year-row":"{value}年","month-row":"{value}月","day-row":"{value}日",placeholder:"请填写实际发车时间"},on:{"on-change":t.changeTime},model:{value:t.startTime,callback:function(e){t.startTime=e},expression:"startTime"}},[i("div",{staticStyle:{"text-align":"right","padding-right":"1em",width:"7em"},attrs:{slot:"title"},slot:"title"},[i("img",{staticClass:"img",staticStyle:{"font-size":"20px","vertical-align":"middle"},attrs:{src:t.bitian,alt:"",width:"8px",height:"8px"}}),t._v(" "),i("span",{staticStyle:{"vertical-align":"middle"}},[t._v("发车日期：")])])])],1),t._v(" "),i("group",{attrs:{"label-width":"7em","label-margin-right":"1em","label-align":"right"}},[i("popup-picker",{attrs:{title:"受票方：",data:t.list3,placeholder:"请选择受票方"},on:{"on-change":t.taxDraweeChange},scopedSlots:t._u([{key:"title",fn:function(e){return[i("span",{class:e.labelClass,staticStyle:{height:"24px"},style:e.labelStyle},[i("img",{staticClass:"img",staticStyle:{"font-size":"20px","vertical-align":"middle"},attrs:{src:t.bitian,alt:"",width:"8",height:"8"}}),t._v(" "),i("span",{staticStyle:{"vertical-align":"middle"}},[t._v("受票方：")])])]}}]),model:{value:t.draweeArr,callback:function(e){t.draweeArr=e},expression:"draweeArr"}}),t._v(" "),i("x-input",{directives:[{name:"show",rawName:"v-show",value:"3"==this.businessItems||"38"==this.businessItems,expression:"this.businessItems == '3' || this.businessItems == '38'"}],attrs:{title:"业务项目：",placeholder:"请输入业务项目名称"},model:{value:t.wbItem,callback:function(e){t.wbItem="string"==typeof e?e.trim():e},expression:"wbItem"}},["3"==this.businessItems?[i("div",{staticStyle:{"text-align":"right","padding-right":"1em",width:"7em"},attrs:{slot:"label"},slot:"label"},[i("img",{staticClass:"img",staticStyle:{"font-size":"20px","vertical-align":"middle"},attrs:{src:t.bitian,alt:"",width:"8",height:"8"}}),t._v(" "),i("span",{staticStyle:{"vertical-align":"middle"}},[t._v("业务项目：")])])]:t._e()],2),t._v(" "),i("popup-picker",{directives:[{name:"show",rawName:"v-show",value:t.consignorState,expression:"consignorState"}],attrs:{title:"发货人：",data:t.consignorList,placeholder:"请选择发货人"},model:{value:t.consignor,callback:function(e){t.consignor=e},expression:"consignor"}}),t._v(" "),i("x-textarea",{attrs:{title:"运输要求：",placeholder:"请输入您对本次运输的要求",max:64},model:{value:t.requirement,callback:function(e){t.requirement=e},expression:"requirement"}})],1),t._v(" "),i("div",{staticClass:"footer",staticStyle:{height:"74px"}}),t._v(" "),i("div",{staticClass:"button"},[i("x-button",{attrs:{type:"primary",disabled:t.buttonState},nativeOn:{click:function(e){return t.nextStep(e)}}},[t._v("下一步")])],1)],1)};h._withStripped=!0;var y={render:h,staticRenderFns:[]},b=y;var f=!1;var C=i("VU/8")(p,b,!1,function(t){f||i("9dEt")},null,null);C.options.__file="src/components/bigCompre/bigCompreWayBillInfo.vue";e.default=C.exports}});
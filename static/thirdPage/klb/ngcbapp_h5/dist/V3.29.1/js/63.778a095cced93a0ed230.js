webpackJsonp([63],{fUgH:function(t,e){},zutd:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("lC5x"),r=a.n(i),s=a("J0Oq"),n=a.n(s),o=a("rVsN"),l=a.n(o),d=a("8RlY"),c=a("P9l9"),u=a("yFUi"),m=a("u3Lg"),g=a("KS8L"),h={name:"bigCompreWayBillInfo",data:function(){return{classify:Object(m.a)("classify"),transportLineId:this.$route.query.transportLineId,bitian:a("jmUF"),cityList:Object(u.a)(city.data),taxWaybillNo:"",loadingAddressName:"",unloadingAddressName:"",value3:[],value4:[],startProvinceCode:"",startCityCode:"",startCountyCode:"",endProvinceCode:"",endCityCode:"",endCountyCode:"",goodsName:"",unitPrice:"",startTime:"",startDate:"",endDate:"",minDate:"",list3:[],drawee:"",draweeArr:[],taxDraweePartyId:"",taxDraweePartyIdArr:[],consignorList:[],consignor:[],consignorState:!1,requirement:"",buttonState:!1,isDisable:!0,cityIdArr:[],types:"",waybillNoCfg:"",tripFlag:"0",businessItems:"",wbItem:"",transportUnitPriceType:""}},filters:{typeFilter:function(t){var e="";switch(t){case"0":e="吨";break;case"1":e="方";break;case"2":e="件";break;case"3":e="车";break;default:e=""}return e}},beforeRouteEnter:function(t,e,a){"chooseCity"===e.name?a(function(t){t.$store.commit("updateLoadingStatus",{isLoading:!1}),t.cityIdArr=JSON.parse(localStorage.getItem("cityIdArr"))}):"bigCompreCarTeam"===e.name?a(function(t){t.$store.commit("updateLoadingStatus",{isLoading:!1})}):a(function(t){t.value3=[],t.value4=[],t.draweeArr=[],t.list3=[],t.consignorList=[],t.consignor=[],t.buttonFlag=!0,t.$nextTick(function(){t.$_getCompanyConfig().then(function(){t.dataInit().then(function(){t.getDraweeMethod().then(function(){t.queryWaybillMethod().then(function(){})})})})})})},beforeRouteLeave:function(t,e,a){var i={type:"dazongFirstqiye",updatMsg:{taxWaybillNo:this.taxWaybillNo,transportLineId:this.transportLineId,loadingAddressName:this.loadingAddressName,unloadingAddressName:this.unloadingAddressName,startProvinceCode:this.startProvinceCode,startCityCode:this.startCityCode,startCountyCode:this.startCountyCode,endProvinceCode:this.endProvinceCode,endCityCode:this.endCityCode,endCountyCode:this.endCountyCode,goodsName:this.goodsName,unitPrice:this.unitPrice,startTime:this.startTime,drawee:this.drawee,taxDraweePartyId:this.taxDraweePartyId,requirement:this.requirement,tripFlag:this.tripFlag,consignor:this.consignor,wbItem:this.wbItem}};this.$store.commit("updateWayBillStatus",i),a()},watch:{cityIdArr:function(){0!=this.cityIdArr.length&&(this.types=localStorage.getItem("types"),localStorage.removeItem("types"),0==this.types?(this.startProvinceCode=this.cityIdArr[0],this.startCityCode=this.cityIdArr[1],this.startCountyCode=this.cityIdArr[2],this.value3=[],this.value3=this.cityIdArr):(this.endProvinceCode=this.cityIdArr[0],this.endCityCode=this.cityIdArr[1],this.endCountyCode=this.cityIdArr[2],this.value4=[],this.value4=this.cityIdArr))}},created:function(){this.$store.commit("updateLoadingStatus",{isLoading:!1});var t=(new Date).getFullYear();this.endDate=t+"-12-31";var e=new Date((new Date).getTime()-864e5),a=e.getFullYear(),i=e.getMonth()+1,r=e.getDate();i<10&&(i="0"+i),r<10&&(r="0"+r),this.startDate=a+"-"+i+"-"+r},methods:{$_getCompanyConfig:function(){var t=this;return this.$store.commit("updateLoadingStatus",{isLoading:!0}),new l.a(function(e,a){Object(c.q)().then(function(i){t.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"===i.data.reCode?(t.businessItems=i.data.result.businessItems,"9"===i.data.result.createWaybillCfg?(t.$vux.confirm.show({title:"提示",confirmText:"确认",cancelText:"取消",content:"当前企业已关闭建单权限！",showCancelButton:!1,onConfirm:function(){Object(g.a)(-1)}}),a()):e()):(t.$vux.toast.text(i.data.reInfo,"middle"),a())}).catch(function(e){t.$store.commit("updateLoadingStatus",{isLoading:!1}),t.$vux.toast.text(e.message,"middle"),a()})})},dataInit:function(){var t=this;return new l.a(function(e,a){Object(d.e)({transportLineId:t.transportLineId}).then(function(a){if("0"===a.data.reCode){var i=a.data.result;t.startCityCode=i.loadingCityId,t.startProvinceCode=i.loadingProvinceId,t.startCountyCode=i.loadingCountyId,t.endCityCode=i.unloadingCityId,t.endProvinceCode=i.unloadingProvinceId,t.endCountyCode=i.unloadingCountyId,t.value3.push(t.startProvinceCode,t.startCityCode,t.startCountyCode),t.value4.push(t.endProvinceCode,t.endCityCode,t.endCountyCode),t.loadingAddressName=i.loadingAddressName,t.unloadingAddressName=i.unloadingAddressName,t.goodsName=i.goodsName,t.unitPrice=i.curTransportUnitPrice,t.tripFlag=i.manyTrips,i.consignor&&i.consignor.split(",").length>0&&(t.consignorState=!0,t.consignorList.push(i.consignor.split(",")),1===i.consignor.split(",").length&&t.consignor.push(i.consignor.split(",")[0])),i.drawee&&i.taxDraweePartyId&&(t.draweeArr.push(i.drawee),t.drawee=i.drawee,t.taxDraweePartyId=i.taxDraweePartyId),t.transportUnitPriceType=i.transportUnitPriceType}else t.$vux.toast.text(a.data.reInfo,"middle");e()}).catch(function(e){t.$store.commit("updateLoadingStatus",{isLoading:!1}),a()})})},getDraweeMethod:function(){var t=this;return new l.a(function(e,a){t.$store.commit("updateLoadingStatus",{isLoading:!0}),Object(c.r)({}).then(function(a){t.$store.commit("updateLoadingStatus",{isLoading:!1});var i=a.data.result;if(i.length>0)if(0==a.data.reCode){var r=[];if("0"==i.length)t.draweeArr=[];else if("1"==i.length)t.taxDraweePartyIdArr.push(i[0].taxDraweePartyId),t.drawee||(t.drawee=i[0].drawee,t.draweeArr.push(i[0].drawee)),r.push(i[0].drawee);else for(var s=0;s<i.length;s++)t.taxDraweePartyIdArr.push(i[s].taxDraweePartyId),r.push(i[s].drawee);t.list3.push(r)}else t.$vux.toast.text(a.data.reInfo,"middle");e()}).catch(function(e){t.$store.commit("updateLoadingStatus",{isLoading:!1}),a()})})},queryWaybillMethod:function(){var t=this;return new l.a(function(e,a){t.$store.commit("updateLoadingStatus",{isLoading:!0}),Object(c.F)().then(function(a){if(t.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"===a.data.reCode){var i=a.data.result;t.waybillNoCfg=i.waybillNoCfg,"1"!==t.waybillNoCfg&&(t.$store.commit("updateLoadingStatus",{isLoading:!0}),Object(c.E)().then(function(e){t.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"===e.data.reCode?t.taxWaybillNo=e.data.result:t.$vux.toast.text(e.data.reInfo,"middle")}))}e()}).catch(function(e){t.$store.commit("updateLoadingStatus",{isLoading:!1}),a()})})},startValue:function(){var t=this.value3;this.startProvinceCode=t[0],this.startCityCode=t[1],this.startCountyCode=t[2]},endValue:function(){var t=this.value4;this.endProvinceCode=t[0],this.endCityCode=t[1],this.endCountyCode=t[2]},changeTime:function(t){console.log(t),this.startTime=t},chooseStCity:function(t){var e=this;this.isDisable&&(this.isDisable=!1,this.$router.push({path:"/chooseCity",query:{type:t}})),setTimeout(function(){e.isDisable=!0},1e3)},taxDraweeChange:function(t){if(this.draweeArr=t,this.drawee=this.draweeArr[0],void 0!=this.list3[0])for(var e=0;e<this.list3[0].length;e++)this.list3[0][e]==t[0]&&(this.taxDraweePartyId=this.taxDraweePartyIdArr[e])},nextStep:function(){var t=this;return n()(r.a.mark(function e(){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(1!=t.waybillNoCfg){e.next=9;break}if(!t.isEmptyStr(t.taxWaybillNo)){e.next=4;break}return t.$vux.toast.text("运单号不能为空,请输入运单号！","middle"),e.abrupt("return");case 4:if(t.isEmptyStr(t.taxWaybillNo)||/^[0-9a-zA-Z_-]+$/.test(t.taxWaybillNo)){e.next=7;break}return t.$vux.toast.text("运单号只接受数字,字母,_与 -,不接受特殊字符","middle"),e.abrupt("return");case 7:e.next=12;break;case 9:if(t.isEmptyStr(t.taxWaybillNo)||/^[0-9a-zA-Z_-]+$/.test(t.taxWaybillNo)){e.next=12;break}return t.$vux.toast.text("运单号只接受数字,字母,_与 -,不接受特殊字符","middle"),e.abrupt("return");case 12:if(!t.isEmptyStr(t.loadingAddressName)){e.next=15;break}return t.$vux.toast.text("装货地名称不能为空！","middle"),e.abrupt("return");case 15:if(!t.isEmptyStr(t.unloadingAddressName)){e.next=18;break}return t.$vux.toast.text("卸货地名称不能为空！","middle"),e.abrupt("return");case 18:if(t.isEmptyStr(t.startProvinceCode)||t.isEmptyStr(t.endProvinceCode)){e.next=28;break}return e.next=21,t.checkCountry();case 21:if("1"!=(a=e.sent)){e.next=25;break}return t.$vux.toast.text("同城运输区县必填！","middle"),e.abrupt("return");case 25:if("2"!=a){e.next=28;break}return t.$vux.toast.text("验证同城运输区县是否必填异常，请稍后重试！","middle"),e.abrupt("return");case 28:if(!t.isEmptyStr(t.goodsName)){e.next=31;break}return t.$vux.toast.text("货物名称不能为空！","middle"),e.abrupt("return");case 31:if(t.isEmptyStr(t.unitPrice)){e.next=36;break}if(/^([1-9]\d{0,6}|0)([\.]\d{0,4})?$/.test(t.unitPrice)){e.next=36;break}return t.$vux.toast.text("无效的运输单价！","middle"),e.abrupt("return");case 36:if(!t.isEmptyStr(t.startTime)){e.next=39;break}return t.$vux.toast.text("发车日期必填！","middle"),e.abrupt("return");case 39:if(""!=t.drawee&&""!=t.taxDraweePartyId){e.next=42;break}return t.$vux.toast.text("受票方必填！","middle"),e.abrupt("return");case 42:if(3!=t.businessItems){e.next=46;break}if(!t.isEmptyStr(t.wbItem)){e.next=46;break}return t.$vux.toast.text("业务项目不能为空！","middle"),e.abrupt("return",!1);case 46:t.$router.push({path:"/bigCompreCarTeam",query:{transportUnitPriceType:t.transportUnitPriceType}});case 47:case"end":return e.stop()}},e,t)}))()},checkCountry:function(){var t=this;return new l.a(function(e,a){var i=t.startProvinceCode,r=t.startCityCode,s=t.endCityCode,n=t.startCountyCode,o=t.endCountyCode;t.$store.commit("updateLoadingStatus",{isLoading:!0}),Object(c.d)(i,r,s,n,o).then(function(a){t.$store.commit("updateLoadingStatus",{isLoading:!1}),e(a.data.reCode)}).catch(function(a){t.$store.commit("updateLoadingStatus",{isLoading:!1}),e("1")})})},isEmptyStr:function(t){return!(void 0!=t&&""!=t&&null!=t&&!/^[\s]*$/.test(t))}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bigcompre-waybill-info"},[a("c-header",[a("x-header",{attrs:{"left-options":{backText:""}}},[t._v("运单信息")])],1),t._v(" "),a("group",{attrs:{"label-width":"7em","label-margin-right":"1em","label-align":"right"}},[a("x-input",{attrs:{title:"运 单 号：",placeholder:"请填写运单号",max:128},model:{value:t.taxWaybillNo,callback:function(e){t.taxWaybillNo="string"==typeof e?e.trim():e},expression:"taxWaybillNo"}},[a("div",{staticStyle:{"text-align":"right","padding-right":"1em",width:"7em"},attrs:{slot:"label"},slot:"label"},[a("img",{directives:[{name:"show",rawName:"v-show",value:1==t.waybillNoCfg,expression:"waybillNoCfg == 1"}],staticClass:"img",staticStyle:{"font-size":"20px","vertical-align":"middle"},attrs:{src:t.bitian,alt:"",width:"8",height:"8"}}),t._v(" "),a("span",{staticStyle:{"vertical-align":"middle"}},[t._v("运 单 号：")])])]),t._v(" "),a("x-input",{attrs:{title:"装货地名称：",placeholder:"请输入装货地名称"},model:{value:t.loadingAddressName,callback:function(e){t.loadingAddressName="string"==typeof e?e.trim():e},expression:"loadingAddressName"}},[a("div",{staticStyle:{"text-align":"right","padding-right":"1em",width:"7em"},attrs:{slot:"label"},slot:"label"},[a("img",{staticClass:"img",staticStyle:{"font-size":"20px","vertical-align":"middle"},attrs:{src:t.bitian,alt:"",width:"8",height:"8"}}),t._v(" "),a("span",{staticStyle:{"vertical-align":"middle"}},[t._v("装货地名称：")])])]),t._v(" "),a("popup-picker",{attrs:{title:"装货地城市：",data:t.cityList,columns:3,disabled:"","show-name":""},on:{"on-hide":t.startValue},nativeOn:{click:function(e){return t.chooseStCity(0)}},scopedSlots:t._u([{key:"title",fn:function(e){return[a("span",{class:e.labelClass,staticStyle:{height:"24px"},style:e.labelStyle},[a("img",{staticClass:"img",staticStyle:{"font-size":"20px","vertical-align":"middle"},attrs:{src:t.bitian,alt:"",width:"8",height:"8"}}),t._v(" "),a("span",{staticStyle:{"vertical-align":"middle"}},[t._v("装货地城市：")])])]}}]),model:{value:t.value3,callback:function(e){t.value3=e},expression:"value3"}}),t._v(" "),a("x-input",{attrs:{title:"卸货地名称：",placeholder:"请输入卸货地名称"},model:{value:t.unloadingAddressName,callback:function(e){t.unloadingAddressName="string"==typeof e?e.trim():e},expression:"unloadingAddressName"}},[a("div",{staticStyle:{"text-align":"right","padding-right":"1em",width:"7em"},attrs:{slot:"label"},slot:"label"},[a("img",{staticClass:"img",staticStyle:{"font-size":"20px","vertical-align":"middle"},attrs:{src:t.bitian,alt:"",width:"8",height:"8"}}),t._v(" "),a("span",{staticStyle:{"vertical-align":"middle"}},[t._v("卸货地名称：")])])]),t._v(" "),a("popup-picker",{attrs:{title:"卸货地城市：",data:t.cityList,columns:3,disabled:"","show-name":""},on:{"on-hide":t.endValue},nativeOn:{click:function(e){return t.chooseStCity(1)}},scopedSlots:t._u([{key:"title",fn:function(e){return[a("span",{class:e.labelClass,staticStyle:{height:"24px"},style:e.labelStyle},[a("img",{staticClass:"img",staticStyle:{"font-size":"20px","vertical-align":"middle"},attrs:{src:t.bitian,alt:"",width:"8",height:"8"}}),t._v(" "),a("span",{staticStyle:{"vertical-align":"middle"}},[t._v("卸货地城市：")])])]}}]),model:{value:t.value4,callback:function(e){t.value4=e},expression:"value4"}}),t._v(" "),a("x-input",{attrs:{title:"货物名称：",type:"text",placeholder:"请输入货物名称"},model:{value:t.goodsName,callback:function(e){t.goodsName=e},expression:"goodsName"}},[a("div",{staticStyle:{"text-align":"right","padding-right":"1em",width:"7em"},attrs:{slot:"label"},slot:"label"},[a("img",{staticClass:"img",staticStyle:{"font-size":"20px","vertical-align":"middle"},attrs:{src:t.bitian,alt:"",width:"8",height:"8"}}),t._v(" "),a("span",{staticStyle:{"vertical-align":"middle"}},[t._v("货物名称：")])])]),t._v(" "),a("x-input",{attrs:{title:"运输单价：",placeholder:"请输入货物的单价",type:"number"},model:{value:t.unitPrice,callback:function(e){t.unitPrice="string"==typeof e?e.trim():e},expression:"unitPrice"}},[a("span",{staticClass:"danwei",attrs:{slot:"right"},slot:"right"},[t._v("元/"+t._s(t._f("typeFilter")(t.transportUnitPriceType)))])]),t._v(" "),a("datetime",{attrs:{title:"发车日期：",format:"YYYY-MM-DD","start-date":t.startDate,"end-date":t.endDate,"year-row":"{value}年","month-row":"{value}月","day-row":"{value}日",placeholder:"请填写实际发车时间"},on:{"on-change":t.changeTime},model:{value:t.startTime,callback:function(e){t.startTime=e},expression:"startTime"}},[a("div",{staticStyle:{"text-align":"right","padding-right":"1em",width:"7em"},attrs:{slot:"title"},slot:"title"},[a("img",{staticClass:"img",staticStyle:{"font-size":"20px","vertical-align":"middle"},attrs:{src:t.bitian,alt:"",width:"8px",height:"8px"}}),t._v(" "),a("span",{staticStyle:{"vertical-align":"middle"}},[t._v("发车日期：")])])])],1),t._v(" "),a("group",{attrs:{"label-width":"7em","label-margin-right":"1em","label-align":"right"}},[a("popup-picker",{attrs:{title:"受票方：",data:t.list3,placeholder:"请选择受票方"},on:{"on-change":t.taxDraweeChange},scopedSlots:t._u([{key:"title",fn:function(e){return[a("span",{class:e.labelClass,staticStyle:{height:"24px"},style:e.labelStyle},[a("img",{staticClass:"img",staticStyle:{"font-size":"20px","vertical-align":"middle"},attrs:{src:t.bitian,alt:"",width:"8",height:"8"}}),t._v(" "),a("span",{staticStyle:{"vertical-align":"middle"}},[t._v("受票方：")])])]}}]),model:{value:t.draweeArr,callback:function(e){t.draweeArr=e},expression:"draweeArr"}}),t._v(" "),a("x-input",{directives:[{name:"show",rawName:"v-show",value:"3"==this.businessItems||"38"==this.businessItems,expression:"this.businessItems == '3' || this.businessItems == '38'"}],attrs:{title:"业务项目：",placeholder:"请输入业务项目名称"},model:{value:t.wbItem,callback:function(e){t.wbItem="string"==typeof e?e.trim():e},expression:"wbItem"}},["3"==this.businessItems?[a("div",{staticStyle:{"text-align":"right","padding-right":"1em",width:"7em"},attrs:{slot:"label"},slot:"label"},[a("img",{staticClass:"img",staticStyle:{"font-size":"20px","vertical-align":"middle"},attrs:{src:t.bitian,alt:"",width:"8",height:"8"}}),t._v(" "),a("span",{staticStyle:{"vertical-align":"middle"}},[t._v("业务项目：")])])]:t._e()],2),t._v(" "),a("popup-picker",{directives:[{name:"show",rawName:"v-show",value:t.consignorState,expression:"consignorState"}],attrs:{title:"发货人：",data:t.consignorList,placeholder:"请选择发货人"},model:{value:t.consignor,callback:function(e){t.consignor=e},expression:"consignor"}}),t._v(" "),a("x-textarea",{attrs:{title:"运输要求：",placeholder:"请输入您对本次运输的要求",max:64},model:{value:t.requirement,callback:function(e){t.requirement=e},expression:"requirement"}})],1),t._v(" "),a("div",{staticClass:"footer",staticStyle:{height:"74px"}}),t._v(" "),a("div",{staticClass:"button"},[a("x-button",{attrs:{type:"primary",disabled:t.buttonState},nativeOn:{click:function(e){return t.nextStep(e)}}},[t._v("下一步")])],1)],1)},staticRenderFns:[]};var y=a("C7Lr")(h,p,!1,function(t){a("fUgH")},null,null);e.default=y.exports}});
webpackJsonp([32],{"1YDa":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("aA9S"),s=a.n(i),n=(a("4qDb"),a("iRBI")),o=a("rVsN"),r=a.n(o),c=a("3cXf"),d=a.n(c),l=(a("MC7C"),a("WUel")),u=a("Thh0"),p=a("KS8L"),g=(a("0Dnf"),a("P9l9")),v=(a("LU6j"),a("yIFG")),h=a("yqxf"),m=(l.a,{components:{vanPopup:l.a},name:"way-bill-success",data:function(){return{taxWaybillId:this.$route.query.taxWaybillId,templateStateDisabled:!0,templateShow:!0,setContent:"设为常用模板",dazongState:"1"==this.$route.query.dazongState,mobileNo:this.$route.query.mobileNo,driverName:this.$route.query.driverName,cartBadgeNo:this.$route.query.cartBadgeNo,wbBusinessType:this.$route.query.wbBusinessType,xid:"",pageState:!1,result:{},version:"",newVersionBoolean:!0,popupState:!1,popupNum:"",orgCfg713:"",orgCfg714:"",orgCfg715:"",orgCfg718:""}},computed:{weyBillFirst:function(){return this.$store.state.wayBill.weyBillFirst}},watch:{popupState:function(t){var e=this;t&&setTimeout(function(){e.popupState=!1},2e3)}},beforeRouteEnter:function(t,e,a){Object(p.s)({isShow:"0"}),a()},beforeRouteLeave:function(t,e,a){Object(p.s)({isShow:"1"}),a()},created:function(){var t=this;this.$store.commit("updateLoadingStatus",{isLoading:!1});try{MtaH5.clickStat("xinjianyundanlo",{waybillstep4:"true"})}catch(t){d()(t)}this._getCompanyConfig().then(function(){"8"===t.orgCfg713&&"54"!=t.orgCfg714?t._getPupupTime().then(function(e){e.result.popupNum>3?t.popupState=!1:t.popupState=!0,t._AppUpdateWaybillData(),t.recgnize()}):(t._AppUpdateWaybillData(),t.recgnize())})},mounted:function(){Object(p.d)("1"),window.localStorage.removeItem("sendGoodsInfo")},methods:{_getCompanyConfig:function(){var t=this;return this.$store.commit("updateLoadingStatus",{isLoading:!0}),new r.a(function(e,a){Object(g.q)().then(function(i){if(t.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"===i.data.reCode){var s=i.data.result;t.orgCfg713=s.orgCfg713,t.orgCfg714=s.orgCfg714,t.orgCfg715=s.orgCfg715,t.orgCfg718=s.orgCfg718,e()}else t.$vux.toast.text(i.data.reInfo,"middle"),a()}).catch(function(e){t.$store.commit("updateLoadingStatus",{isLoading:!1}),t.$vux.toast.text(e.message,"middle"),a()})})},_getPupupTime:function(){var t=this;return new r.a(function(e,a){Object(h.d)({type:1}).then(function(i){t.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"===i.data.reCode?e(i.data):(t.$vux.toast.text(i.data.reInfo,"middle"),a())}).catch(function(e){a(),t.$vux.toast.text(e.message,"middle"),t.$store.commit("updateLoadingStatus",{isLoading:!1})})})},_AppUpdateWaybillData:function(){var t={taxWaybillId:this.taxWaybillId,type:"5",content:{}};Object(p.g)(t)},buildAgain:function(){Object(n.a)("暂无功能~")},goback:function(){var t={selectedIndex:"0",subIndex:"0",waybillTopIndex:"0",refreshList:["0"]};1===this.$sysType?AndroidWaybillJs.jumpIndex(d()(t)):2===this.$sysType?window.webkit.messageHandlers.jumpIndex.postMessage(d()(t)):2!=this.wbBusinessType?Object(p.a)(-4):this.goonConfirm()},checkWayBill:function(){try{MtaH5.clickStat("waybill_success_lookwaybill")}catch(t){d()(t)}var t={selectedIndex:"0",subIndex:"49"===this.orgCfg718?"1":"0",waybillTopIndex:"0",refreshList:["0"]};1===this.$sysType?AndroidWaybillJs.jumpIndex(d()(t)):2===this.$sysType?window.webkit.messageHandlers.jumpIndex.postMessage(d()(t)):Object(p.a)(-4)},goonConfirm:function(){this.$router.push({path:"/deliveryGoodsRecord",query:{active:1}})},setTemplate:function(){Object(n.a)("暂无开发~")},recgnize:function(){var t=this;this.$store.commit("updateLoadingStatus",{isLoading:!0});var e={mobileNo:this.mobileNo,driverName:this.driverName,cartBadgeNo:this.cartBadgeNo};Object(v.c)(e).then(function(e){if("0"==e.data.reCode){var a=e.data.result;t.result=a,t.pageState="0"!=a.idCardReverse.state||"1"==a.recState}else t.$vux.toast.text(e.data.reInfo,"middle");t.$store.commit("updateLoadingStatus",{isLoading:!1})})},_buildWaybillAgain:function(){var t=this;this.$store.commit("updateLoadingStatus",{isLoading:!0});var e={taxWaybillId:this.taxWaybillId};Object(g.c)(e).then(function(e){if(t.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"===e.data.reCode)if(u.a)t.$router.push({path:"/Recognize",query:{mobileNo:t.mobileNo,driverName:t.driverName,cartBadgeNo:t.cartBadgeNo,taxWaybillId:t.taxWaybillId,from:"2",hiddenNativeNav:!0}});else{var a=e.data.result;t.xid=a.xid;var i=s()(t.result,{mobileNo:t.mobileNo,driverName:t.driverName,cartBadgeNo:t.cartBadgeNo,taxWaybillId:t.taxWaybillId,xid:t.xid,from:"2"});Object(p.u)(i)}else t.$vux.toast.text(e.data.reInfo,"middle")}).catch(function(e){t.$vux.toast.text(e,"middle"),t.$store.commit("updateLoadingStatus",{isLoading:!1})})}}}),f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"way-bill-success"},[i("c-header",{attrs:{isShowTitle:t.newVersionBoolean}},[i("x-header",{attrs:{"left-options":{backText:"",preventGoBack:!0}},on:{"on-click-back":function(e){return t.goback()}}},[t._v("\n      建单成功\n      "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.dazongState&&2!=t.wbBusinessType,expression:"!dazongState && wbBusinessType != 2"}],staticClass:"right-title",attrs:{slot:"right"},on:{click:t.buildAgain},slot:"right"},[t._v("再建一单")])])],1),t._v(" "),t._m(0),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:"8"===t.orgCfg713&&"54"!=t.orgCfg714&&t.orgCfg715,expression:"orgCfg713 === '8' && orgCfg714 != '54' && orgCfg715"}],staticClass:"baozhangContent"},[i("div",{staticClass:"card"},[i("img",{staticClass:"left",attrs:{src:a("LpAq"),alt:""}}),t._v(" "),i("p",{staticClass:"right"},[t._v("\n        司机接单后，本趟运输即可获得货损保障服务，\n        "),i("span",{staticClass:"yellow"},[t._v("保障额度"+t._s(this.orgCfg715)+"元")]),t._v("。发生货损后，请提醒司机与保障专员联系！\n      ")])])]),t._v(" "),t.newVersionBoolean?i("div",[i("div",{staticClass:"content-container"},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.dazongState&&t.templateShow&&2!=t.wbBusinessType,expression:"!dazongState&&templateShow && wbBusinessType != 2"}]},[i("x-button",{staticClass:"chakan",attrs:{disabled:!t.templateStateDisabled,text:t.setContent},nativeOn:{click:function(e){return t.setTemplate(e)}}})],1),t._v(" "),i("div",[i("x-button",{staticClass:"chakan",nativeOn:{click:function(e){return t.checkWayBill(e)}}},[t._v("查看运单")]),t._v(" "),i("x-button",{directives:[{name:"show",rawName:"v-show",value:2==t.wbBusinessType,expression:"wbBusinessType == 2"}],staticClass:"chakan",nativeOn:{click:function(e){return t.goonConfirm(e)}}},[t._v("继续确认")])],1)]),t._v(" "),t.pageState?i("div",{staticClass:"bottom-container"},[i("div",{staticClass:"bg-box",on:{click:t._buildWaybillAgain}},[i("div",{staticClass:"placeholder"}),t._v(" "),t._m(1),t._v(" "),t._m(2)])]):t._e()]):t._e(),t._v(" "),t.newVersionBoolean?t._e():i("div",{staticClass:"oldList"},[i("div",[i("x-button",{staticClass:"chakan",nativeOn:{click:function(e){return t.checkWayBill(e)}}},[t._v("查看运单")])],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.dazongState&&t.templateShow,expression:"!dazongState&&templateShow"}]},[i("x-button",{staticClass:"chakan",attrs:{disabled:!t.templateStateDisabled,text:t.setContent},nativeOn:{click:function(e){return t.setTemplate(e)}}})],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.dazongState,expression:"!dazongState"}]},[i("x-button",{staticClass:"chakan",nativeOn:{click:function(e){return t.buildAgain(e)}}},[t._v("再建一单")])],1)]),t._v(" "),i("van-popup",{style:{width:"75%",height:"140px",textAlign:"center"},attrs:{round:"","close-on-popstate":!0,"close-on-click-overlay":!1,"safe-area-inset-bottom":!0},model:{value:t.popupState,callback:function(e){t.popupState=e},expression:"popupState"}},[i("img",{staticClass:"baozhangicon",staticStyle:{"margin-top":"20px"},attrs:{src:a("Tenq"),alt:"",width:"80px"}}),t._v(" "),i("div",[t._v("本趟运输已获得货损保障权益！")])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img-container"},[e("img",{attrs:{src:a("vvJt"),alt:"",width:"65",height:"80"}}),this._v(" "),e("p",{staticClass:"success_tip"},[this._v("新建运单成功！")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text"},[e("div",[this._v("司机证件识别未完善,")]),this._v(" "),e("div",[this._v("请协助司机完成证件识别~")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"circle"},[e("div",[this._v("去完善")]),this._v(" "),e("div",[this._v(">>")])])}]};var b=a("C7Lr")(m,f,!1,function(t){a("Xxwf")},null,null);e.default=b.exports},LpAq:function(t,e,a){t.exports=a.p+"V3.29.1/img/huosunbaozh_icon@2x.47f38d1.png"},Tenq:function(t,e,a){t.exports=a.p+"V3.29.1/img/baozhangicon@2x.a954af7.png"},Xxwf:function(t,e){},vvJt:function(t,e,a){t.exports=a.p+"V3.29.1/img/jiandancheng_icon@2x.1827025.png"}});
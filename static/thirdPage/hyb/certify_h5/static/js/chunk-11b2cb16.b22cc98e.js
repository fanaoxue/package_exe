(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11b2cb16"],{"2c42":function(t,e,a){"use strict";var n=a("9f83"),i=a.n(n);i.a},3462:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer_btn"},[a("div",{staticClass:"round_btn",on:{click:t.sure}},[a("span",{staticStyle:{"padding-left":"60px"}},[t._v("去领取元宝")]),t._m(0),t._m(1)])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon_yuanbao_bg"},[a("i",{staticClass:"icon_yuanbao"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hand"},[a("span",{staticClass:"light_spot"}),a("span",{staticClass:"finger"})])}],s={components:{},props:{},name:"yuanbao_btn",data:function(){return{}},watch:{},computed:{},methods:{sure:function(){this.$emit("receiveIngots")}},created:function(){},mounted:function(){}},o=s,r=(a("4fdc"),a("2877")),c=Object(r["a"])(o,n,i,!1,null,"20ff3c79",null);e["a"]=c.exports},"4fdc":function(t,e,a){"use strict";var n=a("7997"),i=a.n(n);i.a},7340:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"recognize_result_box"},[a("v-header",{attrs:{title:"识别结果",backFn:t.backHandle}}),a("div",{staticClass:"wrapper"},[t._m(0),"0"===t.state?a("div",[t.orderFromType?a("p",{staticClass:"text"},[t._v("完成识别，资料信息已提交至"),a("br"),t._v("后台客服审核，审核时间需1-3个工作日"),a("br"),t._v("点击下一步继续接单吧！")]):a("p",{staticClass:"text"},[t._v("完成识别"),a("br"),t._v("资料信息已提交至后台客服审核"),a("br"),t._v("审核时间需1-3个工作日")])]):a("div",["1"===t.state?a("p",{staticClass:"text"},[t._v("证件识别已完成")]):t._e(),"1"!==t.state?a("p",{staticClass:"text"},[t._v("资料已保存"),a("br"),t._v("完成识别需完善所有资料哦！")]):t._e(),t.orderFromType?a("p",{staticClass:"text"},[t._v("点击下一步继续接单吧！")]):t._e()])]),t.oldVersion||!t.ingotsShow||t.orderFromType?a("div",{staticClass:"pub_fixed_btn"},[t.preCollection&&t.recognizeState?a("van-button",{staticClass:"item",attrs:{type:"primary"},on:{click:t.receivePayment}},[t._v("提前收款收运费")]):t.orderFromType?a("van-button",{staticClass:"item",attrs:{type:"primary"},on:{click:t.nextPage}},[t._v("下一步")]):t.boundStateType&&t.oldVersion?a("van-button",{staticClass:"item",attrs:{type:"primary"},on:{click:t.bindCard}},[t._v("绑定银行卡提运费")]):a("van-button",{staticClass:"item",attrs:{type:"primary"},on:{click:t.nextPage}},[t._v("完成")])],1):a("div",{staticClass:"btn_container"},[a("yuanbao-btn",{on:{receiveIngots:t.handleIngots}}),t.preCollection&&t.recognizeState?a("div",{staticClass:"btn_txt",on:{click:t.receivePayment}},[t._v("提前收款收运费")]):t.orderFromType?a("div",{staticClass:"btn_txt",on:{click:t.nextPage}},[t._v("下一步")]):a("div",{staticClass:"btn_txt",on:{click:t.nextPage}},[t._v("完成")])],1)],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon"},[n("img",{staticClass:"img",attrs:{src:a("a76d")}})])}],s=a("77ea"),o=a("4676"),r=a("22b6"),c=a("2f14");a("28a5");function l(t){t.isSendingPayment||(t.isSendingPayment=!0,t.$toast.loading({message:"加载中"}),Object(r["a"])({sid:"893007",data:{taxWaybillId:t.taxWaybillId,fromType:t.fromType},encrypt:"0"}).then((function(e){if(t.isSendingPayment=!1,"0"===e.data.reCode){var a=e.data.result;if("1"===a.isExpress)return void Object(s["w"])(a.upgInfo);"0"===a.status?a.jumpUrl&&(window.location.href=a.jumpUrl):"3"===a.status?t.$hyb.hyb_confirm.show({iconClose:!0,content:"提前收款需完成证件识别！",confirmButtonText:"立即识别",cancelButtonText:"暂不识别",onConfirm:function(){if(a.jumpUrl){var e=a.jumpUrl.split("#")[1];t.$router.push(e)}}}):"4"===a.status?t.$dialog.alert({title:" ",message:"您已申请提前收款，正在放款中，预计两小时内到账",confirmButtonText:"知道了"}):"1"!==a.status&&"2"!==a.status||t.$hyb.hyb_confirm.show({iconClose:!0,content:"此回单未审核，待企业审核后<br />您可提前收款运费！",confirmButtonText:"电话提醒",confirmButtonColor:"#E4322E",cancelButtonText:"短信提醒",cancelButtonColor:"#E4322E",onConfirm:function(){d("2",t)},onCancel:function(){d("1",t)}})}})).catch((function(){t.isSendingPayment=!1})))}function d(t,e){e.isSendingsfjMsg||(e.isSendingsfjMsg=!0,e.$toast.loading({message:"加载中"}),Object(r["a"])({sid:"893010",data:{taxWaybillId:e.taxWaybillId,type:t,fromType:"1"},encrypt:"0"}).then((function(a){if(e.isSendingsfjMsg=!1,"0"===a.data.reCode){if("1"===t)return void e.$toast("已提醒发货方审核回单！");"2"===t&&a.data.result.mobileNo&&Object(s["j"])(a.data.result.mobileNo)}})).catch((function(){e.isSendingsfjMsg=!1})))}var u=a("3462"),f={components:{YuanbaoBtn:u["a"]},name:"recognize_result",data:function(){return{taxWaybillId:this.$route.query.tax_waybill_id||"",state:this.$route.query.state,fromType:this.$route.query.from_type||"",waybillFlag:this.$route.query.waybill_flag||"",skipPage:this.$route.query.skip_page||"",userName:this.$route.query.user_name?decodeURI(this.$route.query.user_name):"",idCard:this.$route.query.id_card?decodeURI(this.$route.query.id_card):"",isSendingPayment:!1,isSendingsfjMsg:!1,oldVersion:Object(c["a"])(Object(s["e"])(),o["n"]),info:{},ingotsShow:!1}},computed:{recognizeState:function(){return"1"===this.state||"0"===this.state},preCollection:function(){return"4"===this.fromType||"8"===this.fromType||"9"===this.fromType},orderFromType:function(){return"1"===this.fromType||"3"===this.fromType||"10"===this.fromType},boundStateType:function(){return("7"===this.fromType||"11"===this.fromType)&&"1"===this.info.nbCardState&&"0"===this.info.boundState}},methods:{backHandle:function(){Object(s["d"])()},handleIngots:function(){Object(c["g"])()},bindCard:function(){this.$router.push("/bind_card_index?from_type=3&user_name=".concat(encodeURI(this.userName),"&id_card=").concat(encodeURI(this.idCard)))},nextPage:function(){if(this.orderFromType)return"0"===this.skipPage?void(window.location.href="".concat(o["l"],"#/complete_info?tax_waybill_id=").concat(this.taxWaybillId,"&from_type=").concat(this.fromType,"&waybill_flag=").concat(this.waybillFlag)):void("1"===this.skipPage&&(window.location.href="".concat(o["l"],"#/carriage_protocol_description?tax_waybill_id=").concat(this.taxWaybillId,"&from_type=").concat(this.fromType,"&waybill_flag=").concat(this.waybillFlag,"&user_name=").concat(this.userName,"&id_card=").concat(this.idCard)));this.backHandle()},receivePayment:function(){l(this)},init:function(){var t=this;this.$toast.loading({message:"加载中"}),Object(r["a"])({sid:"925025",data:{taxWaybillId:this.taxWaybillId,idCard:this.idCard,isThreeAuth:"0",isQueryWsDca:this.oldVersion?"1":""},encrypt:"0"}).then((function(e){"0"===e.data.reCode&&(t.info=e.data.result,t.oldVersion||t.getShowIngots())}))},getShowIngots:function(){var t=this;this.$toast.loading({message:"加载中"}),Object(r["a"])({sid:"954024",data:{related:"".concat(this.info.orgId).concat(this.info.driverName).concat(this.info.cartBadgeNo),actionType:"4"},encrypt:"0"}).then((function(e){"0"===e.data.reCode&&e.data.result&&"2"===e.data.result.status&&(t.ingotsShow=!0)}))}},created:function(){this.init(),window.AppJSApi_goBackJs=this.backHandle,Object(s["l"])({backJS:"javascript:AppJSApi_goBackJs()"})}},p=f,h=(a("2c42"),a("2877")),m=Object(h["a"])(p,n,i,!1,null,null,null);e["default"]=m.exports},7997:function(t,e,a){},"9f83":function(t,e,a){},a76d:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJEAAACMCAMAAABLTrtUAAAATlBMVEUAAADmZGTnWlnlZWfmYWDkaGveaG3haW3gaG3faGznVFLiaGzkZ2nkMi7////lOjbnR0ToTUr86Oj51dXzp6bxk5HpXFn2uLbufnvsa2jUfoQTAAAADXRSTlMA6Pje8cg6knlS/K7UPVi6CwAAA3RJREFUeNrtnNty4yAMhmWMwSdV0EO6ff8X3YmbqaibGuwsoNnxd9HL+gv6iR2BgTX9rDzhFgqSUbgFeTX3sI1pPcZpIZEW4/jWbP0HwhQ0JNJgCvTrJ7QO07CQiCVMwtntIaZRNxu0PSTTt80GeqStIOibjrZQEKuJk3BXSA9QmEHfV2q5nsWx7k7hLF4ZDVTBjD8njFuEoBqLklvXzBmohnHf62aIB608HBsycGPmrNeA5/oMN/zVb4CqDISIHj7p+YZeEXW16IOiTVCZ6bNsbAfVCSrllwpWJ9AgCTH6LBXBgoC5/zX/2aiB6jSn0Wl0Gt3lNIpzGsU5jeKcRnHEGvVdozwRIpFXTdfXNTKdIlxBqjO1jCaFv6CmGkadww1cV9pochjBTSWNBoUJqKGYUUeYBHWFjDQmo0sYmRF3MJrsRoPDXbghsxELpStlNTIOd+NMTqMRDzCmGxE3Jeyjs+zxGWeDFk2rJ0ihw4N0aUp63t+8PELGtqvCwyjIwYQHydZ4dfgADnaRNdYcblFDxINUM0VvT++0SlLdifb+9PT0nnG6mf1CVzDA1Ms1C71mzLY6IvRCGb8lCffwykIMwb+kPy7E9NViFAplC1JzXIhpqgR7LZQt2v64EOOrTLW3ReiZ8A5UwYiFHjHCI8SFjnNAm5a/7kJ7hfJW7YMvHREqlSO+eHLJKO/sf1lf/k80Qz7vN6RjgUQhVJnvIp4VFqEFwg2avHdaVooL5bjT9rih9CXkcJM+/xPb5aaUJkRZn2pZiXG4jSry5H9JF8KuzK+jS7IQGshaNlaKCWVr2Ey4peQxygRM5k7Ex/NzgpAD5r/t1sjraAns+snrjJbsHrfayuqwK0TqZaxCaP6h0YpaqVmMZKxmhUYyVvxCIxmroqGRjJXj0EjG6npoJGMHQmgkY5dGaCRjJ0toJGO3T2gkY0dUaCRj11hoJGNn3Tej6pxGp9FpdJ/TKM5pFOc0inMaFYWNRL0LodmIZLwrqrg56Jf+RXWuGorlCKoThGeuft7AlSloxvUiXjpWV4shqCAZqMpAYZpnAfNff+ugGkJujtbBrlYpW6z4ij/3N2dgXOWjIsYfQ2KxlhI3Ejk2XDf0VbJkHXKs181FagwUhU8baqSdyNQIO7WK5lIne2Ea3pY6/UxjCtQKOyFuXTB5p+j9BS5KFxjydGlJAAAAAElFTkSuQmCC"}}]);
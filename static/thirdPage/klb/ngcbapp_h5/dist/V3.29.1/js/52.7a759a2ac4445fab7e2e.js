webpackJsonp([52],{JE6e:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i,o,n=e("a3Yh"),s=e.n(n),r=e("3cXf"),d=e.n(r),u=e("5geA"),l=e("P9l9"),c=e("11Y/"),m=e("KS8L"),h=(i={name:"webReceiveMsg2",components:{Qrcode:u.a},data:function(){return{wenhao:e("FFz+"),chacha:e("6E7O"),zhifubaomoren:"",zhifubao_img:e("S28C"),download_zhifubao:"",buttonShow:!0,zyCapitalCfg:"",bankList:[],driverName:this.$route.query.driverName,mobileNo:this.$route.query.mobileNo,cartBadgeNo:"",alipayNo:this.$route.query.alipayNo,idCard:this.$route.query.idCard,bankNum:"",bankName:[],getBankListFlag:0,show:!1,downState:!0,show_img1:!0,show_img2:!0,dial:!1}},created:function(){},computed:{}},s()(i,"created",function(){this.$store.commit("updateLoadingStatus",{isLoading:!1}),this.driverName=this.driverName,this.idCard=this.idCard,this.mobileNo=this.mobileNo,this.alipayNo=this.alipayNo}),s()(i,"mounted",function(){}),s()(i,"methods",{save:function(){return this.isEmptyStr(this.alipayNo)?(this.$vux.toast.text("支付宝账号不能为空！","middle"),!1):this.bankName.length>0?this.isEmptyStr(this.bankNum)?(this.$vux.toast.text("银行卡号不能为空！","middle"),!1):void this.yanzhenFourElement():(this.$vux.toast.text("银行名称不能为空！","middle"),!1)},dialPhone:function(){this.dial=!1;this.$vux1.confirm.show({title:"拨打电话",content:"<p style='text-align:left'>确认拨打：</p><p style='color:#FFBA00;text-align:left'>4001660056</p>",confirmText:"确认",cancelText:"取消",onConfirm:function(){try{MtaH5.clickStat("waybillinfo_dialsure")}catch(t){d()(t)}Object(m.c)("4001660056")}})},onCancel:function(){},onConfirm:function(){},yanzhenFourElement:function(){var t=this;Object(c.d)(this.bankNum).then(function(a){if(t.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"===a.data.reCode){var e=a.data.result;if(t.bankName[0]!==e)return t.$vux.toast.text("您输入银行卡号与银行名称不一致，核实后重新输入！","middle"),!1}var i={driverName:t.driverName,mobileNo:t.mobileNo,payBankName:t.bankName[0],payBankNo:t.bankNum,alipayNo:t.alipayNo,cartBadgeNo:t.cartBadgeNo,gatheringType:"1"};t.$store.commit("updateLoadingStatus",{isLoading:!0}),Object(l.R)(i).then(function(a){t.$store.commit("updateLoadingStatus",{isLoading:!1});var e=t;"0"===a.data.reCode?e.$vux1.confirm.show({title:"提示",content:"绑定成功,恭喜您获得10元奖励金可在【个人中心-回款宝推荐奖励】中查看",confirmText:"知道了",showCancelButton:!1,onConfirm:function(){var a={type:"reciveMsgPay1",updatMsg:{driverName:t.driverName,bankNum:t.bankNum,bankName:t.bankName,alipayNo:t.alipayNo}};t.$store.commit("updateWayBillStatus",a),t.$router.go(-1)}}):"11"==a.data.reCode?t.dial=!0:t.$vux.alert.show({title:"提示",content:a.data.reInfo})}).catch(function(a){t.$store.commit("updateLoadingStatus",{isLoading:!1})})}).catch(function(a){t.$store.commit("updateLoadingStatus",{isLoading:!1})})},bankListAjax:function(){var t=this;if(this.bankNum.length<11)return!1;this.$store.commit("updateLoadingStatus",{isLoading:!0}),Object(c.d)(this.bankNum).then(function(a){t.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"===a.data.reCode&&(t.bankName=[],t.bankName.push(a.data.result))}).catch(function(a){t.$store.commit("updateLoadingStatus",{isLoading:!1}),t.$vux.toast.text(a.message,"middle")})},getAlipayCode:function(){var t=this;Object(l.l)().then(function(a){"0"==a.data.reCode?t.download_zhifubao=a.data.result.hkb_h5_url:t.downState=!1}).catch(function(a){t.$store.commit("updateLoadingStatus",{isLoading:!1}),t.$vux.toast.text(a.message,"middle")})},alipay:function(t){"1"==t?(this.zhifubaomoren=this.zhifubao_img,this.show_img1=!0,this.show_img2=!1,this.show=!0):this.$router.push({path:"/alipayQRcode"})},isEmptyStr:function(t){return!(void 0!=t&&""!=t&&null!=t&&!/^[\s]*$/.test(t))}}),o={name:"webReceiveMsg2",components:{Qrcode:u.a},data:function(){return{wenhao:e("FFz+"),chacha:e("6E7O"),zhifubaomoren:"",zhifubao_img:e("S28C"),download_zhifubao:"",buttonShow:!0,zyCapitalCfg:"",bankList:[],driverName:this.$route.query.driverName,mobileNo:this.$route.query.mobileNo,cartBadgeNo:"",alipayNo:this.$route.query.alipayNo,idCard:this.$route.query.idCard,bankNum:"",bankName:[],getBankListFlag:0,show:!1,downState:!0,show_img1:!0,show_img2:!0,dial:!1}},created:function(){},computed:{}},s()(o,"created",function(){this.$store.commit("updateLoadingStatus",{isLoading:!1}),this.driverName=this.driverName,this.idCard=this.idCard,this.mobileNo=this.mobileNo,this.alipayNo=this.alipayNo}),s()(o,"mounted",function(){}),s()(o,"methods",{save:function(){return this.isEmptyStr(this.alipayNo)?(this.$vux.toast.text("支付宝账号不能为空！","middle"),!1):this.bankName.length>0?this.isEmptyStr(this.bankNum)?(this.$vux.toast.text("银行卡号不能为空！","middle"),!1):void this.yanzhenFourElement():(this.$vux.toast.text("银行名称不能为空！","middle"),!1)},dialPhone:function(){this.dial=!1;this.$vux1.confirm.show({title:"拨打电话",content:"<p style='text-align:left'>确认拨打：</p><p style='color:#FFBA00;text-align:left'>4001660056</p>",confirmText:"确认",cancelText:"取消",onConfirm:function(){try{MtaH5.clickStat("waybillinfo_dialsure")}catch(t){d()(t)}Object(m.c)("4001660056")}})},onCancel:function(){},onConfirm:function(){},yanzhenFourElement:function(){var t=this;Object(c.d)(this.bankNum).then(function(a){if(t.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"===a.data.reCode){var e=a.data.result;if(t.bankName[0]!==e)return t.$vux.toast.text("您输入银行卡号与银行名称不一致，核实后重新输入！","middle"),!1}var i={driverName:t.driverName,mobileNo:t.mobileNo,payBankName:t.bankName[0],payBankNo:t.bankNum,alipayNo:t.alipayNo,cartBadgeNo:t.cartBadgeNo,gatheringType:"1"};t.$store.commit("updateLoadingStatus",{isLoading:!0}),Object(l.R)(i).then(function(a){t.$store.commit("updateLoadingStatus",{isLoading:!1});var e=t;"0"===a.data.reCode?e.$vux1.confirm.show({title:"提示",content:"绑定成功,恭喜您获得10元奖励金可在【个人中心-回款宝推荐奖励】中查看",confirmText:"知道了",showCancelButton:!1,onConfirm:function(){var a={type:"reciveMsgPay1",updatMsg:{driverName:t.driverName,bankNum:t.bankNum,bankName:t.bankName,alipayNo:t.alipayNo}};t.$store.commit("updateWayBillStatus",a),t.$router.go(-1)}}):"11"==a.data.reCode?t.dial=!0:t.$vux.alert.show({title:"提示",content:a.data.reInfo})}).catch(function(a){t.$store.commit("updateLoadingStatus",{isLoading:!1})})}).catch(function(a){t.$store.commit("updateLoadingStatus",{isLoading:!1})})},bankListAjax:function(){var t=this;if(this.bankNum.length<11)return!1;this.$store.commit("updateLoadingStatus",{isLoading:!0}),Object(c.d)(this.bankNum).then(function(a){t.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"===a.data.reCode&&(t.bankName=[],t.bankName.push(a.data.result))}).catch(function(a){t.$store.commit("updateLoadingStatus",{isLoading:!1}),t.$vux.toast.text(a.message,"middle")})},getAlipayCode:function(){var t=this;Object(l.l)().then(function(a){"0"==a.data.reCode?t.download_zhifubao=a.data.result.hkb_h5_url:t.downState=!1}).catch(function(a){t.$store.commit("updateLoadingStatus",{isLoading:!1}),t.$vux.toast.text(a.message,"middle")})},alipay:function(t){"1"==t?(this.zhifubaomoren=this.zhifubao_img,this.show_img1=!0,this.show_img2=!1,this.show=!0):this.$router.push({path:"/alipayQRcode"})},isEmptyStr:function(t){return!(void 0!=t&&""!=t&&null!=t&&!/^[\s]*$/.test(t))}}),o),f={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"web-recive-msg2"},[i("c-header",[i("x-header",{attrs:{"left-options":{backText:""}}},[t._v("收款人信息")])],1),t._v(" "),i("group",{attrs:{"label-width":"7.0em","label-margin-right":"0.2em","label-align":"right"}},[i("cell",{attrs:{title:"收款人姓名：","value-align":"left"},model:{value:t.driverName,callback:function(a){t.driverName=a},expression:"driverName"}}),t._v(" "),i("cell",{attrs:{title:"收款人身份证：","value-align":"left"},model:{value:t.idCard,callback:function(a){t.idCard=a},expression:"idCard"}}),t._v(" "),i("cell",{attrs:{title:"手机号码：","value-align":"left"},model:{value:t.mobileNo,callback:function(a){t.mobileNo=a},expression:"mobileNo"}}),t._v(" "),i("cell",{attrs:{title:"支付宝账号：","value-align":"left"},model:{value:t.alipayNo,callback:function(a){t.alipayNo=a},expression:"alipayNo"}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.buttonShow,expression:"buttonShow"}],staticClass:"vux-x-input weui-cell cell-before"},[i("div",{staticClass:"what_alipay",on:{click:function(a){return t.alipay(1)}}},[i("img",{attrs:{src:t.wenhao,alt:"",width:"15px"}}),t._v("什么是支付宝账号？")]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.downState,expression:"downState"}],staticClass:"down_alipay",on:{click:function(a){return t.alipay(2)}}},[t._v("下载支付宝")])])],1),t._v(" "),i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[i("popup",{attrs:{"is-transparent":""},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}},[i("div",{staticStyle:{width:"80%",height:"70%",margin:"0 auto","text-align":"center"}},[i("img",{directives:[{name:"show",rawName:"v-show",value:t.show_img1,expression:"show_img1"}],attrs:{src:t.zhifubaomoren,alt:"",width:"100%"}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.show_img2,expression:"show_img2"}],staticClass:"qrcode-box"},[i("qrcode",{attrs:{value:t.download_zhifubao,type:"img",size:100}})],1),t._v(" "),i("img",{attrs:{src:t.chacha,alt:"",width:"25px"},on:{click:function(a){t.show=!1}}})])])],1),t._v(" "),i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[i("confirm",{attrs:{title:"提示",cancelText:"取消",confirmText:"确定"},on:{"on-cancel":t.onCancel,"on-confirm":t.onConfirm},model:{value:t.dial,callback:function(a){t.dial=a},expression:"dial"}},[i("p",{staticStyle:{"text-align":"center"}},[t._v("绑定异常，请联系")]),t._v(" "),i("p",{staticStyle:{"text-align":"center"}},[i("span",[t._v("4001660056")]),t._v(" "),i("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:e("lhX/"),alt:"",width:"20"},on:{click:function(a){return t.dialPhone()}}})])])],1)],1)},staticRenderFns:[]};var v=e("C7Lr")(h,f,!1,function(t){e("o4H1")},null,null);a.default=v.exports},S28C:function(t,a,e){t.exports=e.p+"V3.29.1/img/zhifubao_img@2x.dcde71d.png"},o4H1:function(t,a){}});
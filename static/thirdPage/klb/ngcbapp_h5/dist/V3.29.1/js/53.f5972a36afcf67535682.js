webpackJsonp([53],{JYRU:function(t,a){},S28C:function(t,a,e){t.exports=e.p+"V3.29.1/img/zhifubao_img@2x.dcde71d.png"},lwxE:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("3cXf"),n=e.n(i),o=e("5geA"),s=e("P9l9"),l=e("11Y/"),r=e("KS8L"),c=(o.a,{name:"webReceiveMsg2",components:{Qrcode:o.a},data:function(){return{wenhao:e("FFz+"),bitian:e("jmUF"),chacha:e("6E7O"),zhifubaomoren:"",zhifubao_img:e("S28C"),download_zhifubao:"",zyCapitalCfg:"",bankList:[],driverName:"",mobileNo:"",alipayNo:"",bankNum:"",bankName:[],getBankListFlag:0,show:!1,downState:!0,show_img1:!0,show_img2:!0,dial:!1}},created:function(){},beforeRouteEnter:function(t,a,e){"alipayQRcode"==a.name?e(function(t){t.mobileNo=window.localStorage.getItem("mobileNo"),t.driverName=t.reciveMsgPay1.driverName,t.bankName=t.reciveMsgPay1.bankName,t.bankNum=t.reciveMsgPay1.bankNum,t.alipayNo=t.reciveMsgPay1.alipayNo,window.localStorage.removeItem("mobileNo")}):e(function(t){t.bankName.length=0,t.mobileNo=t.$route.query.mobileNo}),e()},beforeRouteLeave:function(t,a,e){"alipayQRcode"==t.name&&window.localStorage.setItem("mobileNo",this.mobileNo);var i={type:"reciveMsgPay1",updatMsg:{driverName:this.driverName,bankNum:this.bankNum,bankName:this.bankName,alipayNo:this.alipayNo}};this.$store.commit("updateWayBillStatus",i),e()},computed:{reciveMsgPay1:function(){return this.$store.state.wayBill.reciveMsgPay1}},mounted:function(){var t=this;this.$nextTick(function(){Object(s.u)().then(function(a){if(t.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"===a.data.reCode){var e=a.data.result.data.map(function(t){return t.bankName});t.bankList.push(e)}t.getAlipayCode()}).catch(function(a){t.$store.commit("updateLoadingStatus",{isLoading:!1})})})},methods:{save:function(){return this.isEmptyStr(this.driverName)?(this.$vux.toast.text("司机姓名不能为空！","middle"),!1):this.isEmptyStr(this.alipayNo)?(this.$vux.toast.text("支付宝账号不能为空！","middle"),!1):this.bankName.length>0?this.isEmptyStr(this.bankNum)?(this.$vux.toast.text("银行卡号不能为空！","middle"),!1):void this.yanzhenFourElement():(this.$vux.toast.text("银行名称不能为空！","middle"),!1)},dialPhone:function(){this.dial=!1;this.$vux1.confirm.show({title:"拨打电话",content:"<p style='text-align:left'>确认拨打：</p><p style='color:#FFBA00;text-align:left'>4001660056</p>",confirmText:"确认",cancelText:"取消",onConfirm:function(){try{MtaH5.clickStat("waybillinfo_dialsure")}catch(t){n()(t)}Object(r.c)("4001660056")}})},onCancel:function(){},onConfirm:function(){},yanzhenFourElement:function(){var t=this;Object(l.d)(this.bankNum).then(function(a){if(t.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"===a.data.reCode){var e=a.data.result;if(t.bankName[0]!==e)return t.$vux.toast.text("您输入银行卡号与银行名称不一致，核实后重新输入！","middle"),!1}var i={driverName:t.driverName,mobileNo:t.mobileNo,payBankName:t.bankName[0],payBankNo:t.bankNum,alipayNo:t.alipayNo,gatheringType:"1"};t.$store.commit("updateLoadingStatus",{isLoading:!0}),Object(s.R)(i).then(function(a){t.$store.commit("updateLoadingStatus",{isLoading:!1});var e=t;"0"===a.data.reCode?e.$vux1.confirm.show({title:"提示",content:"您已帮助司机"+t.driverName+"开通了好运宝收款",confirmText:"知道了",showCancelButton:!1,onConfirm:function(){var a={type:"reciveMsgPay1",updatMsg:{driverName:t.driverName,bankNum:t.bankNum,bankName:t.bankName,alipayNo:t.alipayNo}};t.$store.commit("updateWayBillStatus",a),window.sessionStorage.isChooseType="2",t.$router.go(-1)}}):"11"==a.data.reCode?t.dial=!0:t.$vux.alert.show({title:"提示",content:a.data.reInfo})}).catch(function(a){t.$store.commit("updateLoadingStatus",{isLoading:!1}),t.$vux.toast.text(a.message,"middle")})}).catch(function(a){t.$store.commit("updateLoadingStatus",{isLoading:!1}),t.$vux.toast.text(a.message,"middle")})},bankListAjax:function(){var t=this;if(this.bankNum.length<11)return!1;this.$store.commit("updateLoadingStatus",{isLoading:!0}),Object(l.d)(this.bankNum).then(function(a){t.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"===a.data.reCode&&(t.bankName=[],t.bankName.push(a.data.result))}).catch(function(a){t.$store.commit("updateLoadingStatus",{isLoading:!1}),t.$vux.toast.text(a.message,"middle")})},getAlipayCode:function(){var t=this;Object(s.l)().then(function(a){"0"==a.data.reCode?t.download_zhifubao=a.data.result.hkb_h5_url:t.downState=!1}).catch(function(a){t.$store.commit("updateLoadingStatus",{isLoading:!1}),t.$vux.toast.text(a.message,"middle")})},alipay:function(t){"1"==t?(this.zhifubaomoren=this.zhifubao_img,this.show_img1=!0,this.show_img2=!1,this.show=!0):this.$router.push({path:"/alipayQRcode"})},isEmptyStr:function(t){return!(void 0!=t&&""!=t&&null!=t&&!/^[\s]*$/.test(t))}}}),d={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"web-recive-msg3"},[i("c-header",[i("x-header",{attrs:{"left-options":{backText:""}}},[t._v("收款人信息")])],1),t._v(" "),i("group",{attrs:{"label-width":"6.5em","label-margin-right":"0.2em","label-align":"right"}},[i("x-input",{attrs:{title:"司机姓名：","value-align":"left",placeholder:"请输入司机姓名"},model:{value:t.driverName,callback:function(a){t.driverName=a},expression:"driverName"}},[i("div",{staticStyle:{"text-align":"right",width:"6.5em"},attrs:{slot:"label"},slot:"label"},[i("img",{staticClass:"img1",staticStyle:{"font-size":"20px","vertical-align":"middle"},attrs:{src:t.bitian,alt:"",width:"8",height:"8"}}),t._v(" "),i("span",{staticStyle:{"vertical-align":"middle"}},[t._v("司机姓名：")])])]),t._v(" "),i("x-input",{attrs:{title:"支付宝账号：",placeholder:"请输入支付宝账号"},model:{value:t.alipayNo,callback:function(a){t.alipayNo="string"==typeof a?a.trim():a},expression:"alipayNo"}},[i("div",{staticStyle:{"text-align":"right",width:"7.5em"},attrs:{slot:"label"},slot:"label"},[i("img",{staticClass:"img1",staticStyle:{"font-size":"20px","vertical-align":"middle"},attrs:{src:t.bitian,alt:"",width:"8",height:"8"}}),t._v(" "),i("span",{staticStyle:{"vertical-align":"middle"}},[t._v("支付宝账号：")])])]),t._v(" "),i("popup-picker",{attrs:{title:"银行名称：",data:t.bankList,placeholder:"请选择收款银行"},scopedSlots:t._u([{key:"title",fn:function(a){return[i("span",{class:a.labelClass,staticStyle:{height:"24px"},style:a.labelStyle},[i("img",{staticClass:"img1",staticStyle:{"font-size":"20px","vertical-align":"middle"},attrs:{src:t.bitian,alt:"",width:"8",height:"8"}}),t._v(" "),i("span",{staticStyle:{"vertical-align":"middle"}},[t._v("银行名称：")])])]}}]),model:{value:t.bankName,callback:function(a){t.bankName=a},expression:"bankName"}}),t._v(" "),i("x-input",{attrs:{title:"银 行 卡 号：",placeholder:"请输入银行卡号"},on:{"on-blur":function(a){return t.bankListAjax()}},model:{value:t.bankNum,callback:function(a){t.bankNum="string"==typeof a?a.trim():a},expression:"bankNum"}},[i("div",{staticStyle:{"text-align":"right",width:"6.5em"},attrs:{slot:"label"},slot:"label"},[i("img",{staticClass:"img1",staticStyle:{"font-size":"20px","vertical-align":"middle"},attrs:{src:t.bitian,alt:"",width:"8",height:"8"}}),t._v(" "),i("span",{staticStyle:{"vertical-align":"middle"}},[t._v("银行卡号：")])])]),t._v(" "),i("div",{staticClass:"vux-x-input weui-cell cell-before"},[i("div",{staticClass:"what_alipay",on:{click:function(a){return t.alipay(1)}}},[i("img",{attrs:{src:t.wenhao,alt:"",width:"15px"}}),t._v("什么是支付宝账号？")]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.downState,expression:"downState"}],staticClass:"down_alipay",on:{click:function(a){return t.alipay(2)}}},[t._v("下载支付宝")])])],1),t._v(" "),i("div",{staticClass:"footer"},[i("x-button",{staticClass:"save",attrs:{type:"primary"},nativeOn:{click:function(a){return t.save()}}},[t._v("保存")])],1),t._v(" "),i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[i("popup",{attrs:{"is-transparent":""},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}},[i("div",{staticStyle:{width:"80%",height:"70%",margin:"0 auto","text-align":"center"}},[i("img",{directives:[{name:"show",rawName:"v-show",value:t.show_img1,expression:"show_img1"}],attrs:{src:t.zhifubaomoren,alt:"",width:"100%"}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.show_img2,expression:"show_img2"}],staticClass:"qrcode-box"},[i("qrcode",{attrs:{value:t.download_zhifubao,type:"img",size:100}})],1),t._v(" "),i("img",{attrs:{src:t.chacha,alt:"",width:"25px"},on:{click:function(a){t.show=!1}}})])])],1),t._v(" "),i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[i("confirm",{attrs:{title:"提示",cancelText:"取消",confirmText:"确定"},on:{"on-cancel":t.onCancel,"on-confirm":t.onConfirm},model:{value:t.dial,callback:function(a){t.dial=a},expression:"dial"}},[i("p",{staticStyle:{"text-align":"center"}},[t._v("绑定异常，请联系")]),t._v(" "),i("p",{staticStyle:{"text-align":"center"}},[i("span",[t._v("4001660056")]),t._v(" "),i("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:e("lhX/"),alt:"",width:"20"},on:{click:function(a){return t.dialPhone()}}})])])],1)],1)},staticRenderFns:[]};var m=e("C7Lr")(c,d,!1,function(t){e("JYRU")},null,null);a.default=m.exports}});
webpackJsonp([82],{"4xp6":function(t,e){},f4Fo:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("3cXf"),n=a.n(i),o=a("KS8L"),s=a("11Y/"),r=a("yIFG"),l={name:"binding-bank-card",data:function(){return{bitian:a("jmUF"),realName:this.$route.query.realName,bankCardNo:"",bankName:"",showConfirm:!1,dcaWsUserId:this.$route.query.dcaWsUserId,hybWalletCfg:this.$route.query.hybWalletCfg,errMsg:"",from:this.$route.query.from?this.$route.query.from:"2"}},beforeRouteEnter:function(t,e,a){"bank_list"==e.name?a(function(t){t.$store.commit("updateLoadingStatus",{isLoading:!1});var e=JSON.parse(localStorage.getItem("chooseBank"));localStorage.removeItem("chooseBank"),e&&(t.bankName=e.bankName)}):a()},mounted:function(){this.$store.commit("updateLoadingStatus",{isLoading:!1})},methods:{gotoSelectBank:function(){this.$router.push({path:"/bank_list"})},save:function(){return this.isEmptyStr(this.realName)?(this.$vux.toast.text("司机姓名不能为空！","middle"),!1):this.bankName.length>0?this.isEmptyStr(this.bankCardNo)?(this.$vux.toast.text("银行卡号不能为空！","middle"),!1):void this._bindBankCard():(this.$vux.toast.text("银行名称不能为空！","middle"),!1)},onCancel:function(){},onConfirm:function(){},bankListAjax:function(){var t=this;if(this.bankCardNo.length<11)return!1;this.$store.commit("updateLoadingStatus",{isLoading:!0}),Object(s.d)(this.bankCardNo).then(function(e){t.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"===e.data.reCode&&(t.bankName="",t.bankName=e.data.result)}).catch(function(e){t.$store.commit("updateLoadingStatus",{isLoading:!1}),t.$vux.toast.text(e.message,"middle")})},isEmptyStr:function(t){return!(void 0!=t&&""!=t&&null!=t&&!/^[\s]*$/.test(t))},_bindBankCard:function(){var t=this;this.$store.commit("updateLoadingStatus",{isLoading:!0});var e={dcaWsUserId:this.dcaWsUserId,bankCardNo:this.bankCardNo,bankName:this.bankName,realName:this.realName,from:this.from};Object(r.a)(e).then(function(e){t.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"==e.data.reCode?t.$vux1.confirm.show({showCancelButton:!1,title:"消息提示",content:"<p style='color:#454545;'>绑定成功，司机可使用此卡在好运宝钱包中提取运费!</p>",confirmText:"确定",onConfirm:function(){t.goHome()}}):(t.showConfirm=!0,t.errMsg=e.data.reInfo)})},goHome:function(){if("1"==this.from)Object(o.a)(-2);else if("0"==this.from){try{MtaH5.clickStat("waybill_success_lookwaybill")}catch(t){n()(t)}Object(o.a)(-6)}else{try{MtaH5.clickStat("waybill_success_lookwaybill")}catch(t){n()(t)}var t={selectedIndex:"0",subIndex:"0",waybillTopIndex:"0"};1===this.$sysType?AndroidWaybillJs.jumpIndex(n()(t)):2===this.$sysType?window.webkit.messageHandlers.jumpIndex.postMessage(n()(t)):Object(o.a)(-6)}},dialPhone:function(t,e){this.showConfirm=!1,this.$vux1.confirm.show({title:"拨打电话",content:"<p style='text-align:left'>请联系运营：</p><p style='color:#FFBA00;text-align:left'>"+e+"</p>",confirmText:"确认",cancelText:"取消",onConfirm:function(){Object(o.c)(e)}})}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"binding-bank-card"},[i("c-header",[i("x-header",{attrs:{"left-options":{backText:""}}},[t._v("绑定银行卡")])],1),t._v(" "),i("group",{attrs:{"label-width":"6.5em","label-margin-right":"0.2em","label-align":"right"}},[i("x-input",{attrs:{title:"司机姓名：","value-align":"left",disabled:!0},model:{value:t.realName,callback:function(e){t.realName=e},expression:"realName"}},[i("div",{staticStyle:{"text-align":"right",width:"6.5em"},attrs:{slot:"label"},slot:"label"},[i("span",{staticStyle:{"vertical-align":"middle"}},[t._v("司机姓名：")])])]),t._v(" "),i("x-input",{attrs:{title:"银行名称：",placeholder:"请选择银行名称",type:"text",readonly:!0},nativeOn:{click:function(e){return t.gotoSelectBank(e)}},model:{value:t.bankName,callback:function(e){t.bankName=e},expression:"bankName"}},[i("div",{attrs:{slot:"right"},slot:"right"},[i("i",{staticClass:"iconfont iconarr-right"})])]),t._v(" "),i("x-input",{attrs:{title:"银 行 卡 号：",placeholder:"请输入银行卡号",type:"number"},on:{"on-blur":function(e){return t.bankListAjax()}},model:{value:t.bankCardNo,callback:function(e){t.bankCardNo="string"==typeof e?e.trim():e},expression:"bankCardNo"}},[i("div",{staticStyle:{"text-align":"right",width:"6.5em"},attrs:{slot:"label"},slot:"label"},[i("span",{staticStyle:{"vertical-align":"middle"}},[t._v("银行卡号：")])])])],1),t._v(" "),i("div",{staticClass:"prompt-box"},[i("img",{staticClass:"img1",staticStyle:{"font-size":"20px","vertical-align":"middle"},attrs:{src:t.bitian,alt:"",width:"8",height:"8"}}),t._v("\n    请填写司机本人的银行卡\n  ")]),t._v(" "),i("div",{staticClass:"footer"},[i("x-button",{staticClass:"save",attrs:{type:"primary"},nativeOn:{click:function(e){return t.save()}}},[t._v("绑定")])],1),t._v(" "),i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[i("confirm",{attrs:{title:"提示",cancelText:"取消",confirmText:"确定"},on:{"on-cancel":t.onCancel,"on-confirm":t.onConfirm},model:{value:t.showConfirm,callback:function(e){t.showConfirm=e},expression:"showConfirm"}},[i("p",{staticStyle:{"text-align":"center"}},[t._v(t._s(t.errMsg))]),t._v(" "),i("p",{staticStyle:{"text-align":"center"}},[i("span",[t._v("4001660056")]),t._v(" "),i("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:a("lhX/"),alt:"",width:"20"},on:{click:function(e){return t.dialPhone(t.realName,4001660056)}}})])])],1)],1)},staticRenderFns:[]};var d=a("C7Lr")(l,c,!1,function(t){a("4xp6")},null,null);e.default=d.exports}});
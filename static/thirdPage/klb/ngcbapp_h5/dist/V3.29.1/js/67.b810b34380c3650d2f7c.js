webpackJsonp([67],{U5Ju:function(e,t){},"x4K+":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("3cXf"),a=i.n(s),r=i("rVsN"),c=i.n(r),n=i("P9l9"),o=i("11Y/"),v=i("u3Lg"),l=i("yFUi"),d=i("8RlY"),g=i("KS8L"),h={name:"webReciveMsg",data:function(){return{pageShow:!1,initFlag:0,receiveTypeState:!1,receiveState:!1,receiveStateWaiting:0,cityList:Object(l.a)(city.data),recivePersonType:"请选择收款人类型",menus1:{menu1:"本人收款",menu2:"非本人收款"},reciveMsgs:{reciveType:"-1",recivePersonName:"",recivePersonCardNum:"",recivePersonBankNum:"",recivePersonphoneNum:"",reciveBank:[],reciveBankAdress:[],alipayNo:"",acctType:""},reciveHistoryFlag:-1,reciveHistoryList:[],cantIptFlag:0,bankList:[],getBankListFlag:0,oldrecivePersonName:"",oldReciveType:"",oldPersonNum:"",isSureBtnClick:0,zblState:"",jiedanState:"",jiedanMobile:"",src1:i("899H"),src3:i("899H"),src4:i("1Rs3"),zyCapitalCfg:"9",hybWalletCfg:"9",collectionFlagCfg:"",autoShowWalletCfg:"",btn_text:"确定",classify:Object(v.a)("classify"),taxWaybillId:this.$route.query.taxWaybillId,driverMobileNo:this.$route.query.mobileNo,driverName:this.$route.query.driverName,cartBadgeNo:"",mobileNo:"",xid:""}},beforeRouteLeave:function(e,t,i){if("8"==this.hybWalletCfg&&"5"==this.reciveMsgs.acctType||"1"===window.sessionStorage.isChooseType){var s={type:"reciveMsgPay",updatMsg:this.reciveMsgs};this.$store.commit("updateWayBillStatus",s)}i()},beforeRouteEnter:function(e,t,i){i(function(e){e._getCompanyConfig().then(function(){e.getZblState()})})},computed:{reciveMsgPay:function(){return this.$store.state.wayBill.reciveMsgPay},weyBillSecond:function(){return this.$store.state.wayBill.weyBillSecond},weyBillThird:function(){return this.$store.state.wayBill.weyBillThird},btnState:function(){return this.reciveMsgs.recivePersonBankNum=this.trim(this.reciveMsgs.recivePersonBankNum),"8"==this.zyCapitalCfg?""!==this.reciveMsgs.recivePersonName&&18===this.reciveMsgs.recivePersonCardNum.length&&""!==this.reciveMsgs.recivePersonBankNum&&this.reciveMsgs.reciveBankAdress.length>0&&this.reciveMsgs.reciveBank.length>0&&11===this.reciveMsgs.recivePersonphoneNum.length?1:0:"8"==this.hybWalletCfg?""!=this.reciveMsgs.recivePersonName&&18==this.reciveMsgs.recivePersonCardNum.length&&""!=this.reciveMsgs.recivePersonBankNum&&this.reciveMsgs.reciveBankAdress.length>0&&this.reciveMsgs.reciveBank.length>0&&11==this.reciveMsgs.recivePersonphoneNum.length?1:0:"-1"!=this.reciveMsgs.reciveType&&""!=this.reciveMsgs.recivePersonName&&18==this.reciveMsgs.recivePersonCardNum.length&&""!=this.reciveMsgs.recivePersonBankNum&&this.reciveMsgs.reciveBankAdress.length>0&&this.reciveMsgs.reciveBank.length>0&&11==this.reciveMsgs.recivePersonphoneNum.length?1:0}},created:function(){this.recivePersonType="-1"===this.reciveMsgPay.reciveType?"请选择收款人类型":"1"===this.reciveMsgPay.reciveType?"本人收款":"非本人收款",this.reciveMsgs.reciveType=this.reciveMsgPay.reciveType,this.reciveMsgs.recivePersonName=this.reciveMsgPay.recivePersonName,this.reciveMsgs.recivePersonCardNum=this.reciveMsgPay.recivePersonCardNum,this.reciveMsgs.recivePersonBankNum=this.reciveMsgPay.recivePersonBankNum,this.reciveMsgs.recivePersonphoneNum=this.reciveMsgPay.recivePersonphoneNum,this.reciveMsgs.reciveBank=this.reciveMsgPay.reciveBank,this.reciveMsgs.reciveBankAdress=this.reciveMsgPay.reciveBankAdress,"浙江网商银行"==this.reciveMsgs.reciveBank[0]&&(this.reciveMsgs.reciveBank[0]="好运宝钱包"),"好运宝钱包"!=this.reciveMsgPay.reciveBank&&"车队钱包"!=this.reciveMsgPay.reciveBank&&"浙江网商银行"!=this.reciveMsgPay.reciveBank||(this.cantIptFlag=1),"0"==this.classify&&(this.btn_text="保存")},mounted:function(){this.jiedanMobile=0!=this.classify?this.weyBillSecond.mobileNo:this.driverMobileNo},methods:{getZblState:function(){var e=this;Object(n.S)().then(function(t){e.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"==t.data.reCode?(e.zblState=t.data.result.zblState,"1"==e.reciveMsgPay.reciveType&&"1"==e.zblState?e.reciveMsgs.alipayNo=e.reciveMsgPay.alipayNo:e.reciveMsgs.alipayNo="",e.bankListAjax()):e.$vux.toast.text(t.data.reInfo,"middle")}).catch(function(t){e.$store.commit("updateLoadingStatus",{isLoading:!1}),e.$vux.toast.text(t.message,"middle")})},_getCompanyConfig:function(){var e=this;return this.$store.commit("updateLoadingStatus",{isLoading:!0}),new c.a(function(t,i){Object(n.q)().then(function(s){if(e.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"===s.data.reCode){var a=s.data.result;e.zyCapitalCfg=a.zyCapitalCfg,e.hybWalletCfg=a.hybWalletCfg,e.autoShowWalletCfg=a.autoShowWalletCfg,e.collectionFlagCfg=a.collectionFlagCfg,t()}else e.$vux.toast.text(s.data.reInfo,"middle"),i()}).catch(function(t){e.$store.commit("updateLoadingStatus",{isLoading:!1}),e.$vux.toast.text(t.message,"middle"),i()})})},checkBankName:function(){var e=this;if(this.reciveMsgs.recivePersonBankNum.length>12){var t=this.reciveMsgs.recivePersonBankNum;this.$store.commit("updateLoadingStatus",{isLoading:!0}),Object(o.d)(t).then(function(t){e.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"===t.data.reCode&&(e.reciveMsgs.reciveBank=[t.data.result])}).catch(function(t){e.reciveMsgs.reciveBank=[],e.$store.commit("updateLoadingStatus",{isLoading:!1}),e.$vux.toast.text(t.message,"middle")})}},mobileChange:function(e){e==this.jiedanMobile?(this.src1=this.src4,this.jiedanState="1"):(this.src1=this.src3,this.jiedanState="")},startValue:function(){this.initFlag&&0===this.reciveMsgs.reciveBankAdress.length&&(this.reciveMsgs.reciveBankAdress=["",""])},endValue:function(){this.initFlag&&""===this.reciveMsgs.reciveBankAdress[0]&&(this.reciveMsgs.reciveBankAdress=[])},personTypeBtn:function(e,t){this.recivePersonType=t,this.clearMsg(),this.cantIptFlag=0,"本人收款"===t?(0!=this.classify?this.reciveMsgs.recivePersonName=this.weyBillSecond.driverName:this.reciveMsgs.recivePersonName=this.driverName,this.reciveMsgs.reciveType="1","1"!=this.zblState&&(this.reciveMsgs.alipayNo=""),this.chooseOneself()):(this.reciveMsgs.recivePersonName="",this.reciveMsgs.reciveType="0",this.reciveMsgs.alipayNo=""),this.initFlag=1},reciveHistoryAjax:function(){var e=this;if(""!=this.trim(this.reciveMsgs.recivePersonName)&&localStorage.getItem("oldrecivePersonName")==this.reciveMsgs.recivePersonName&&localStorage.getItem("reciveType")==this.reciveMsgs.reciveType)return!1;var t=this.weyBillSecond.mobileNo;localStorage.setItem("oldPersonNum",t);var i={entType:"",mobileNo:this.mobileNo||t,payeeName:this.reciveMsgs.recivePersonName,hybWalletCfg:this.hybWalletCfg,taxWaybillId:this.taxWaybillId||"",autoShowWalletCfg:this.autoShowWalletCfg,advancePayState:"",cartBadgeNo:this.cartBadgeNo||this.weyBillSecond.cartBadgeNo,driverName:"0"==this.classify&&this.driverName||this.weyBillSecond.driverName};Object(n.w)(i).then(function(t){if(localStorage.setItem("oldrecivePersonName",e.reciveMsgs.recivePersonName),localStorage.setItem("oldReciveType",e.reciveMsgs.reciveType),"0"===t.data.reCode){try{MtaH5.clickStat("recive_pay_msg")}catch(e){a()(e)}e.receiveStateWaiting=1,e.reciveHistoryList=t.data.result.payeeList}else e.$vux.toast.text(t.data.reInfo,"middle")}).catch(function(t){e.$store.commit("updateLoadingStatus",{isLoading:!1}),e.$vux.toast.text(t.message,"middle")})},historyBtnClick:function(){if("8"==this.zyCapitalCfg){if(""===this.reciveMsgs.recivePersonName)return this.$vux.toast.text("请输入收款人姓名查询","middle"),!1}else if(""===this.reciveMsgs.recivePersonName)return this.$vux.toast.text("请选择收款类型和输入姓名查询","middle"),!1;this.receiveState=!0},clearMsg:function(){"8"==this.hybWalletCfg&&(this.reciveMsgs.recivePersonName=""),this.cityList="",this.cityList=Object(l.a)(city.data),this.reciveMsgs.recivePersonCardNum="",this.reciveMsgs.recivePersonphoneNum="",this.reciveMsgs.reciveBank=[],this.reciveMsgs.recivePersonBankNum="",this.reciveMsgs.reciveBankAdress=[]},rightBtnClick:function(){this.clearMsg(),this.cantIptFlag=0,this.receiveState=!1},historyBtnUse:function(e){this.receiveState=!1,"5"==e.acctType?(this.reciveMsgs.acctType="5",this.cantIptFlag=1):"6"==e.acctType?(this.reciveMsgs.acctType="6",this.cantIptFlag=1):(this.cantIptFlag=0,this.reciveMsgs.acctType=""),this.reciveMsgs.recivePersonName=e.payeeName,this.reciveMsgs.recivePersonCardNum=e.payeeIdCard,this.reciveMsgs.recivePersonphoneNum=e.mobileNo?e.mobileNo:"",this.reciveMsgs.reciveBank=[e.payeeBankName],this.reciveMsgs.recivePersonBankNum=e.payeeBankNo,this.reciveMsgs.reciveBankAdress=[e.payeeProvinceId,e.payeeCityId],this.reciveMsgs.alipayNo=e.alipayNo},bankListAjax:function(){var e=this;if(this.getBankListFlag)return!1;this.$store.commit("updateLoadingStatus",{isLoading:!0}),Object(n.m)().then(function(t){if(e.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"===t.data.reCode){e.getBankListFlag=1;var i=t.data.result.data.map(function(e){return e.bankName});e.bankList.push(i)}else e.getBankListFlag=0;"0"==e.classify&&""!=e.taxWaybillId&&void 0!=e.taxWaybillId&&e.queryReceiveInfo(),e.$nextTick(function(){e.pageShow=!0})}).catch(function(t){e.$store.commit("updateLoadingStatus",{isLoading:!1}),e.$vux.toast.text(t.message,"middle"),e.getBankListFlag=0})},typeChange:function(){this.receiveTypeState=!0},queryReceiveInfo:function(){var e=this,t={taxWaybillId:this.taxWaybillId};Object(n.c)(t).then(function(t){if("0"===t.data.reCode){var i=t.data.result;e.reciveMsgs.reciveType=i.payType,""==i.payBankNo?e.recivePersonType="请选择收款人类型":"0"==i.payType?e.recivePersonType="非本人收款":e.recivePersonType="本人收款",e.reciveMsgs.recivePersonName=i.payName,e.reciveMsgs.recivePersonCardNum=i.payIdCard,e.reciveMsgs.recivePersonBankNum=i.payBankNo,""!=i.payBankName&&i.payBankName?(e.reciveMsgs.reciveBank=[i.payBankName],"车队钱包"==i.payBankName&&(e.cantIptFlag=1)):e.reciveMsgs.recivePersonName=i.driverName,e.reciveMsgs.recivePersonphoneNum=i.payMobileNo,""!=i.provinceId&&(e.reciveMsgs.reciveBankAdress=[i.provinceId,i.cityId]),e.xid=i.xid,e.driverName=i.driverName,e.cartBadgeNo=i.cartBadgeNo,e.mobileNo=i.mobileNo,""!=i.alipayNo&&(e.jiedanState="1"),e.reciveMsgs.alipayNo=i.alipayNo}}).catch(function(t){e.$store.commit("updateLoadingStatus",{isLoading:!1}),e.$vux.toast.text(t.message,"middle")})},suerBtnClick:function(){if(!this.btnState){return!0===this.$refs.PhoneNumber.showWarn?(this.$vux.toast.text("收款人手机号码输入错误~~~","middle"),!1):this.reciveMsgs.recivePersonCardNum.length<18&&this.reciveMsgs.recivePersonCardNum.length>0&&!/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(this.reciveMsgs.recivePersonCardNum)?(this.$vux.toast.text("收款人身份证号码输入错误~~~","middle"),!1):(this.$vux.toast.text("请输入完整的收款人信息~~~","middle"),!1)}return/^1\d{10}$/.test(this.reciveMsgs.recivePersonphoneNum)?"8"!==this.zyCapitalCfg&&1==this.zblState&&"本人收款"===this.recivePersonType&&""==this.reciveMsgs.alipayNo?(this.$vux.toast.text("支付宝账号必填","middle"),!1):(this.$store.commit("updateLoadingStatus",{isLoading:!0}),void("0"==this.classify?void 0==this.taxWaybillId?this.gateCheckOfCardNumAjax():"好运宝钱包"==this.reciveMsgs.reciveBank[0]?this.dazongModifyWayBill():this.informationEntry():this.gateCheckOfCardNumAjax())):(this.$vux.toast.text("收款人手机号码输入错误","middle"),!1)},gateCheckOfCardNumAjax:function(){var e=this;Object(n.j)(this.reciveMsgs.recivePersonName,this.reciveMsgs.recivePersonCardNum).then(function(t){if(e.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"===t.data.reCode){try{MtaH5.clickStat("recive_pay_msg_sure")}catch(e){a()(e)}window.sessionStorage.isChooseType="1",e.$router.go(-1)}else e.$vux.toast.text(t.data.reInfo,"middle")}).catch(function(t){e.$store.commit("updateLoadingStatus",{isLoading:!1}),e.$vux.toast.text("保存异常，请稍后再试~~~","middle")})},informationEntry:function(){var e=this,t={mobileNo:this.driverMobileNo,payeeBankNo:this.reciveMsgs.recivePersonBankNum,payeeName:this.reciveMsgs.recivePersonName,payeeBankName:this.reciveMsgs.reciveBank[0],payeeProvinceId:this.reciveMsgs.reciveBankAdress[0],payeeCityId:this.reciveMsgs.reciveBankAdress[1],payeeIdCard:this.reciveMsgs.recivePersonCardNum,payeeMobileNo:this.reciveMsgs.recivePersonphoneNum,alipayNo:this.reciveMsgs.alipayNo};""!=t.mobileNo&&""!=t.payeeBankNo&&""!=t.payeeName&&""!=t.payeeBankName&&""!=t.payeeProvinceId&&""!=t.payeeCityId&&""!=t.payeeIdCard&&""!=t.payeeMobileNo&&(this.$store.commit("updateLoadingStatus",{isLoading:!0}),Object(o.i)(t).then(function(t){e.dazongModifyWayBill()}).catch(function(t){e.$store.commit("updateLoadingStatus",{isLoading:!1}),e.$vux.toast.text(t.message,"middle")}))},dazongModifyWayBill:function(){var e=this,t={xid:this.xid,taxWaybillId:this.taxWaybillId,loadingTonnage:"",unloadingTonnage:"",loadingAddressName:"",unloadingAddressName:"",startProvinceId:"",startCityId:"",startCountyId:"",endProvinceId:"",endCityId:"",endCountyId:"",driverName:"",cartBadgeNo:this.cartBadgeNo,transTrip:"",goodsName:"",unitPrice:"",userFreight:"",wbItem:"",prepayments:"",freightChangeReason:"",klbState:"",mobileNo:"",stateCfg:"",payType:this.reciveMsgs.reciveType,payName:this.reciveMsgs.recivePersonName,payIdCard:this.reciveMsgs.recivePersonCardNum,payBankName:this.reciveMsgs.reciveBank[0],payBankNo:this.reciveMsgs.recivePersonBankNum,payMobileNo:this.reciveMsgs.recivePersonphoneNum,provinceId:this.reciveMsgs.reciveBankAdress[0],cityId:this.reciveMsgs.reciveBankAdress[1],alipayNo:this.reciveMsgs.alipayNo};console.log(t),Object(d.c)(t).then(function(t){e.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"===t.data.reCode?(e.$vux.toast.text("保存成功!","middle"),setTimeout(function(){var t={type:"1",content:{taxWaybillId:e.taxWaybillId,payInfoState:"1"}};Object(g.p)(t)},1500)):e.$vux.alert.show({title:"提示",buttonText:"知道了",content:t.data.reInfo})}).catch(function(t){e.$store.commit("updateLoadingStatus",{isLoading:!1}),e.$vux.toast.text(t.message,"middle")})},chooseOneself:function(){var e=this;this.$store.commit("updateLoadingStatus",{isLoading:!0});var t={driverMobileNo:0!=this.classify?this.weyBillSecond.mobileNo:this.driverMobileNo,driverName:0!=this.classify?this.weyBillSecond.driverName:this.driverName};Object(o.g)(t).then(function(t){(e.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"===t.data.reCode)?1==("{}"!=a()(t.data.result))?e.reciveMsgs.recivePersonCardNum=t.data.result.idCard:e.reciveMsgs.alipayNo="":e.$vux.toast.text(t.data.reInfo,"middle")}).catch(function(t){e.$store.commit("updateLoadingStatus",{isLoading:!1}),e.$vux.toast.text(t.message,"middle")})},changeType:function(e){if(""==e)this.src1=this.src3,this.reciveMsgs.alipayNo="";else{if(this.src1=this.src4,"0"==this.classify)return void(this.reciveMsgs.alipayNo=this.driverMobileNo);this.reciveMsgs.alipayNo=this.weyBillSecond.mobileNo}this.jiedanState=e},trim:function(e){return e.toString().replace(/\s/g,"")}}},u={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"show",rawName:"v-show",value:e.pageShow,expression:"pageShow"}],staticClass:"web-recive-msg"},[s("c-header",[s("x-header",{attrs:{"left-options":{backText:""}}},[e._v("填写收款信息")])],1),e._v(" "),s("group",{attrs:{"label-width":"6.5em","label-margin-right":"0.2em","label-align":"right"}},[s("cell",{directives:[{name:"show",rawName:"v-show",value:"8"!==e.zyCapitalCfg&&"8"!==e.hybWalletCfg,expression:"zyCapitalCfg !== '8'&&hybWalletCfg !== '8'"}],attrs:{title:"收款人类型：","value-align":"left","is-link":""},nativeOn:{click:function(t){return e.typeChange()}}},[s("span",{class:{"cell-left-style":"请选择收款人类型"!==e.recivePersonType}},[e._v(e._s(e.recivePersonType))])]),e._v(" "),s("x-input",{class:1===e.cantIptFlag?"textColor1":"textColor2",attrs:{title:"收款人姓名：","show-clear":!1,type:"text",disabled:1===e.cantIptFlag,placeholder:"请填写收款人姓名"},model:{value:e.reciveMsgs.recivePersonName,callback:function(t){e.$set(e.reciveMsgs,"recivePersonName","string"==typeof t?t.trim():t)},expression:"reciveMsgs.recivePersonName"}},[s("div",{attrs:{slot:"right"},on:{click:function(t){return e.historyBtnClick()}},slot:"right"},[s("div",{staticClass:"usually-receive-people"},[e._v("常用收款人")])])]),e._v(" "),s("x-input",{class:e.cantIptFlag?"textColor1":"textColor2",attrs:{title:"身 份 证 号：",max:18,disabled:1===e.cantIptFlag,placeholder:"请输入收款人身份证号码",type:"text"},model:{value:e.reciveMsgs.recivePersonCardNum,callback:function(t){e.$set(e.reciveMsgs,"recivePersonCardNum","string"==typeof t?t.trim():t)},expression:"reciveMsgs.recivePersonCardNum"}}),e._v(" "),s("x-input",{class:e.cantIptFlag?"textColor1":"textColor2",attrs:{title:"银 行 卡 号：",disabled:1===e.cantIptFlag,type:"tel",placeholder:"请输入银行卡号"},on:{"on-blur":function(t){return e.checkBankName()}},model:{value:e.reciveMsgs.recivePersonBankNum,callback:function(t){e.$set(e.reciveMsgs,"recivePersonBankNum","string"==typeof t?t.trim():t)},expression:"reciveMsgs.recivePersonBankNum"}}),e._v(" "),s("popup-picker",{class:e.cantIptFlag?"textColor1":"textColor2",attrs:{title:"收 款 银 行：",disabled:1===e.cantIptFlag,data:e.bankList,placeholder:"请选择收款银行"},model:{value:e.reciveMsgs.reciveBank,callback:function(t){e.$set(e.reciveMsgs,"reciveBank","string"==typeof t?t.trim():t)},expression:"reciveMsgs.reciveBank"}}),e._v(" "),s("x-input",{ref:"PhoneNumber",class:e.cantIptFlag?"textColor1":"textColor2",attrs:{title:"联 系 手 机：",disabled:1===e.cantIptFlag,max:11,"is-type":"china-mobile",type:"tel",placeholder:"请输入银行卡绑定的手机"},model:{value:e.reciveMsgs.recivePersonphoneNum,callback:function(t){e.$set(e.reciveMsgs,"recivePersonphoneNum","string"==typeof t?t.trim():t)},expression:"reciveMsgs.recivePersonphoneNum"}}),e._v(" "),s("popup-picker",{ref:"picker",class:e.cantIptFlag?"textColor1":"textColor2",attrs:{title:"开户行地址：",disabled:1===e.cantIptFlag,data:e.cityList,columns:2,"show-name":"",placeholder:"请选择开户行地址"},on:{"on-hide":e.endValue,"on-show":e.startValue},model:{value:e.reciveMsgs.reciveBankAdress,callback:function(t){e.$set(e.reciveMsgs,"reciveBankAdress","string"==typeof t?t.trim():t)},expression:"reciveMsgs.reciveBankAdress"}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:"8"!==e.zyCapitalCfg&&1==e.zblState&&"本人收款"===e.recivePersonType,expression:"zyCapitalCfg !== '8' && zblState == 1 && recivePersonType === '本人收款'"}]},[s("div",{staticClass:"vux-x-input weui-cell cell-before"},[s("img",{staticClass:"img1",staticStyle:{"font-size":"20px","vertical-align":"middle"},attrs:{src:i("jmUF"),width:"8",height:"8"}}),e._v(" "),s("div",{staticClass:"title",staticStyle:{color:"#797979",width:"6.5em","text-align":"right","margin-right":"0.2em"}},[e._v("支付宝账号：")]),e._v(" "),s("checker",{on:{"on-change":e.changeType},model:{value:e.jiedanState,callback:function(t){e.jiedanState="string"==typeof t?t.trim():t},expression:"jiedanState"}},[s("checker-item",{staticStyle:{"margin-left":"1em"},attrs:{value:"1"}},[s("img",{staticClass:"img2",staticStyle:{"vertical-align":"middle"},attrs:{src:e.src1,alt:"",width:"15",height:"15"}}),e._v(" "),s("span",{staticStyle:{"vertical-align":"middle","margin-left":"0.5em"}},[e._v("接单手机号")])])],1)],1),e._v(" "),s("x-input",{attrs:{placeholder:"非接单手机号，请输入支付宝账号"},on:{"on-change":e.mobileChange},model:{value:e.reciveMsgs.alipayNo,callback:function(t){e.$set(e.reciveMsgs,"alipayNo","string"==typeof t?t.trim():t)},expression:"reciveMsgs.alipayNo"}})],1)],1),e._v(" "),s("div",{staticStyle:{height:"82px"}}),e._v(" "),s("div",{staticClass:"sue-btn-cxt"},[s("x-button",{staticStyle:{width:"90%",height:"48px","background-color":"#15499A"},attrs:{type:"primary"},nativeOn:{click:function(t){return e.suerBtnClick()}}},[e._v(e._s(e.btn_text))]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:1==e.cantIptFlag,expression:"cantIptFlag == 1"}],staticClass:"clear-msg",on:{click:function(t){return e.rightBtnClick()}}},[e._v("清空收款信息")])],1),e._v(" "),s("actionsheet",{attrs:{menus:e.menus1},on:{"on-click-menu":e.personTypeBtn},model:{value:e.receiveTypeState,callback:function(t){e.receiveTypeState=t},expression:"receiveTypeState"}}),e._v(" "),s("popup",{attrs:{position:"bottom","max-height":"80%"},on:{"on-show":function(t){return e.reciveHistoryAjax()}},model:{value:e.receiveState,callback:function(t){e.receiveState=t},expression:"receiveState"}},[s("popup-header",{attrs:{"left-text":"","right-text":"手动输入",title:"选择收款信息"},on:{"on-click-left":function(t){e.receiveState=!1},"on-click-right":function(t){return e.rightBtnClick()}}}),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:0===e.receiveStateWaiting,expression:"receiveStateWaiting === 0"}],staticStyle:{width:"100%","text-align":"center",padding:"16px 0px"}},[s("spinner",{attrs:{type:"ios"}}),e._v(" "),s("div",{staticStyle:{color:"#454545",height:"32px","line-height":"32px"}},[e._v("数据加载中...")])],1),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:1===e.receiveStateWaiting,expression:"receiveStateWaiting === 1"}],staticClass:"recive-history-cxt"},[s("div",{staticClass:"recive-title-style"},[e._v("\n        当前共有\n        "),s("span",[e._v(e._s(e.reciveHistoryList.length)+"条")]),e._v("支付记录\n      ")]),e._v(" "),e._l(e.reciveHistoryList,function(t,a,r){return s("div",{key:r,staticClass:"recive-list-cxt",class:{"recive-list-cxt-active":e.reciveHistoryFlag===a},on:{click:function(t){e.reciveHistoryFlag=a}}},[s("div",{staticClass:"list-item-cxt"},[s("div",{staticClass:"left"},[e._v("收款人姓名：")]),e._v(" "),s("div",{staticClass:"right"},[e._v(e._s(t.payeeName))]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:"5"==t.acctType,expression:"item.acctType == '5'"}],staticClass:"right"},[s("img",{staticStyle:{width:"16px","margin-left":"6px"},attrs:{src:i("s8Hr"),width:"16px",alt:""}})]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:"6"==t.acctType,expression:"item.acctType == '6'"}],staticClass:"carMaster"},[e._v("车队钱包")])]),e._v(" "),s("div",{staticClass:"list-item-cxt"},[s("div",{staticClass:"left"},[e._v("收 款 银 行：")]),e._v(" "),s("div",{staticClass:"right"},[e._v(e._s(t.payeeBankName))])]),e._v(" "),s("div",{staticClass:"list-item-cxt"},[s("div",{staticClass:"left"},[e._v("开户行地址：")]),e._v(" "),s("div",{staticClass:"right"},[e._v(e._s(t.payeeProvince)+" "+e._s(t.payeeCityName))])]),e._v(" "),s("div",{staticClass:"list-item-cxt"},[s("div",{staticClass:"left"},[e._v("银 行 卡 号：")]),e._v(" "),s("div",{staticClass:"right"},[e._v(e._s(t.payeeBankNo))])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.reciveHistoryFlag===a,expression:"reciveHistoryFlag === index"}],staticClass:"use-btn-style",on:{click:function(i){return e.historyBtnUse(t)}}},[e._v("使用")])])}),e._v(" "),s("div",{staticStyle:{height:"32px"}})],2)],1)],1)},staticRenderFns:[]};var m=i("C7Lr")(h,u,!1,function(e){i("U5Ju")},null,null);t.default=m.exports}});
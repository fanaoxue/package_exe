webpackJsonp([65],{"DZ+e":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("3cXf"),a=i.n(n),s=i("rVsN"),r=i.n(s),c=(i("dfh2"),i("TDlK"),i("CyzF")),o=(i("Jg3o"),i("ziXK")),l=(i("y8TG"),i("Xm+1")),d=(i("Cu5I"),i("111O")),v=(i("MC7C"),i("WUel")),p=(i("bH+n"),i("gmkw")),u=(i("yg4I"),i("1Fu7")),h=(i("gyNl"),i("Wuna")),g=(i("U/pO"),i("/pvS")),m=(i("7ZMB"),i("k/cs")),A=i("lC5x"),f=i.n(A),C=i("J0Oq"),b=i.n(C),x=i("MgeX"),B=i.n(x),y=(Number,String,Number,String,Number,String,p.a,{name:"CityPicker",props:{columnsNum:{type:[Number,String],default:2},defaultProvinceId:{type:[Number,String],default:0},defaultCityId:{type:[Number,String],default:0}},components:{vanPicker:p.a},data:function(){return{columns:[{values:"",className:"column1",defaultIndex:0},{values:"",className:"column2",defaultIndex:0}],cityDatas:"",showPicker:!1,data:{}}},watch:{defaultProvinceId:{handler:function(){this.init()},immediate:!1}},created:function(){this.data=window.city.data,this.init()},methods:{init:function(){var e=this;this.columns[0].values=B()(this.data).map(function(e){return{text:e.addrName,code:e.cityId}}),this.columns[0].defaultIndex=this.columns[0].values.findIndex(function(t){return t.code==e.defaultProvinceId}),-1===this.columns[0].defaultIndex&&(this.columns[0].defaultIndex=0);var t=this.data[this.columns[0].defaultIndex].child;this.columns[1].values=B()(t).map(function(e){return{text:e.addrName,code:e.cityId}}),this.columns[1].defaultIndex=this.columns[1].values.findIndex(function(t){return t.code==e.defaultCityId}),3==this.columnsNum&&(this.columns.push({values:"",className:"column3",defaultIndex:0}),this.columns[2].values=B()(this.data[0].child[0].child).map(function(e){return{text:e.addrName,code:e.cityId}}))},onChange:function(e,t,i){var n=this;return b()(f.a.mark(function i(){return f.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.setColumnValues(1,n.cityDate(n.data,t[0].text));case 2:3==n.columnsNum&&e.setColumnValues(2,n.county(n.data,e.getColumnValue(1).text));case 3:case"end":return i.stop()}},i,n)}))()},cityDate:function(e,t){var i=this;return e.forEach(function(e){e.addrName==t&&(i.cityDatas=e)}),B()(i.cityDatas.child).map(function(e){return{text:e.addrName,code:e.cityId}})},county:function(e,t){var i="";return this.cityDatas.child.forEach(function(e){e.addrName==t&&(i=e)}),i&&i.child&&Array.isArray(i.child)?B()(i.child).map(function(e){return{text:e.addrName,code:e.cityId}}):[]},onConfirm:function(e,t){this.showPicker=!1;var i=e[0].text+" "+e[1].text,n=e.map(function(e){return e&&e.code||""});3==this.columnsNum&&e[2]&&e[2].text&&(i+=e[2].text),this.$emit("onConfirm",{text:i,code:n,val:e,index:t})},onCancel:function(e,t){this.showPicker=!1,this.$emit("onCancel",e,t)}}}),k=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"city_picker"},[t("van-picker",{attrs:{"show-toolbar":"",columns:this.columns,"item-height":35},on:{cancel:this.onCancel,confirm:this.onConfirm,change:this.onChange}})],1)};k._withStripped=!0;var _={render:k,staticRenderFns:[]},w=_;var M=i("C7Lr")(y,w,!1,null,null,null);M.options.__file="src/components/common/cityPicker/index.vue";var P=M.exports,N=i("P9l9"),S=i("HZZI").a.Axios;function E(e){return new r.a(function(t,i){S({sid:"8003",timeout:6e4,iResType:"1",datas:{taxWaybillId:e.taxWaybillId,mobileNo:e.mobileNo,payeeName:e.payeeName,entType:e.entType,hybWalletCfg:e.hybWalletCfg,autoShowWalletCfg:e.autoShowWalletCfg,cartBadgeNo:e.cartBadgeNo,driverName:e.driverName}}).then(function(e){t(e)}).catch(function(e){i(e)})})}var I=i("11Y/"),L=(i("u3Lg"),i("yFUi"),i("8RlY"),i("KS8L"),m.a,g.a,h.a,u.a,p.a,v.a,d.a,l.a,o.a,c.a,{name:"ReciveMessage",components:{cityPicker:P,vanNavBar:m.a,vanField:g.a,vanCell:h.a,vanCellGroup:u.a,vanPicker:p.a,vanPopup:v.a,vanCheckbox:d.a,vanButton:l.a,vanActionSheet:o.a,vanLoading:c.a},data:function(){return{jiedanState:!1,zblState:"",zyCapitalCfg:"9",hybWalletCfg:"9",bankPickerShow:!1,selectCityPickerShow:!1,recordPopupShow:!1,recivePersonActionsShow:!1,recordPopupShowWaiting:!1,bankList:[],bankDefaultIndex:0,reciveHistoryList:[],reciveHistoryFlag:-1,recivePersonActions:[{name:"本人收款",value:"1"},{name:"非本人收款",value:"0"}],cantIptFlag:"0",reciveMsgs:{reciveType:"",recivePersonName:"",recivePersonCardNum:"",recivePersonBankNum:"",recivePersonphoneNum:"",reciveBank:"",reciveBankAdress:"",provinceId:"",cityId:"",alipayNo:"",acctType:""}}},computed:{recivePersonTypeStr:function(){return"1"==this.reciveMsgs.reciveType?"本人收款":"0"==this.reciveMsgs.reciveType?"非本人收款":""},recivePersonTypeShow:function(){return"8"!==this.zyCapitalCfg&&"8"!==this.hybWalletCfg},alipayShow:function(){return"8"!==this.zyCapitalCfg&&1==this.zblState&&"1"===this.reciveMsgs.reciveType},reciveMsgPay:function(){return this.$store.state.wayBill.reciveMsgPay},weyBillSecond:function(){return this.$store.state.wayBill.weyBillSecond},jiedanMobile:function(){return this.$store.state.wayBill.weyBillSecond.mobileNo},weyBillThird:function(){return this.$store.state.wayBill.weyBillThird},btnState:function(){return"8"==this.zyCapitalCfg?""!==this.reciveMsgs.recivePersonName&&18===this.reciveMsgs.recivePersonCardNum.length&&""!==this.reciveMsgs.recivePersonBankNum&&""!=this.reciveMsgs.reciveBankAdress&&""!=this.reciveMsgs.reciveBank&&11===this.reciveMsgs.recivePersonphoneNum.length?1:0:"8"==this.hybWalletCfg?""!=this.reciveMsgs.recivePersonName&&18==this.reciveMsgs.recivePersonCardNum.length&&""!=this.reciveMsgs.recivePersonBankNum&&""!=this.reciveMsgs.reciveBankAdress&&""!=this.reciveMsgs.reciveBank&&11==this.reciveMsgs.recivePersonphoneNum.length?1:0:"-1"!=this.reciveMsgs.reciveType&&""!=this.reciveMsgs.recivePersonName&&18==this.reciveMsgs.recivePersonCardNum.length&&""!=this.reciveMsgs.recivePersonBankNum&&""!=this.reciveMsgs.reciveBankAdress&&""!=this.reciveMsgs.reciveBank&&11==this.reciveMsgs.recivePersonphoneNum.length?1:0}},watch:{"reciveMsgs.alipayNo":{handler:function(e){e==this.jiedanMobile?this.jiedanState=!0:this.jiedanState=!1},immediate:!1}},mounted:function(){this.init()},activated:function(){this.initDataFromStore(),this.$store.commit("updateLoadingStatus",{isLoading:!1})},methods:{initDataFromStore:function(){this.reciveMsgPay.reciveBank instanceof Array?this.reciveMsgs.reciveBank="":this.reciveMsgs.reciveBank=this.reciveMsgPay.reciveBank||"",this.reciveMsgPay.reciveBankAdress instanceof Array?this.reciveMsgs.reciveBankAdress="":this.reciveMsgs.reciveBankAdress=this.reciveMsgPay.reciveBankAdress||"",this.reciveMsgs.reciveType=this.reciveMsgPay.reciveType||"",this.reciveMsgs.recivePersonName=this.reciveMsgPay.recivePersonName||"",this.reciveMsgs.recivePersonCardNum=this.reciveMsgPay.recivePersonCardNum||"",this.reciveMsgs.recivePersonBankNum=this.reciveMsgPay.recivePersonBankNum||"",this.reciveMsgs.recivePersonphoneNum=this.reciveMsgPay.recivePersonphoneNum||"",this.reciveMsgs.provinceId=this.reciveMsgPay.provinceId||"",this.reciveMsgs.cityId=this.reciveMsgPay.cityId||"","浙江网商银行"==this.reciveMsgs.reciveBank&&(this.reciveMsgs.reciveBank="好运宝钱包"),"好运宝钱包"==this.reciveMsgPay.reciveBank||"浙江网商银行"==this.reciveMsgPay.reciveBank||"车队钱包"==this.reciveMsgPay.reciveBank?this.cantIptFlag="1":this.cantIptFlag="0"},init:function(){var e=this;this._getCompanyConfig().then(function(t){console.log("==============================="),e._zblState()}).then(function(t){return e._getBankList()}).catch(function(e){console.log(e)})},_getCompanyConfig:function(){var e=this;return this.$store.commit("updateLoadingStatus",{isLoading:!0}),new r.a(function(t,i){Object(N.q)().then(function(n){if(e.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"===n.data.reCode){var a=n.data.result;e.hybWalletCfg=a.hybWalletCfg,e.zyCapitalCfg=a.zyCapitalCfg,t()}else e.$vux.toast.text(n.data.reInfo,"middle"),i()}).catch(function(t){e.$store.commit("updateLoadingStatus",{isLoading:!1}),e.$vux.toast.text(t.message,"middle"),i()})})},_zblState:function(){var e=this;return new r.a(function(t,i){e.$store.commit("updateLoadingStatus",{isLoading:!0}),Object(N.S)().then(function(n){e.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"==n.data.reCode?(e.zblState=n.data.result.zblState,"1"==e.reciveMsgPay.reciveType&&"1"==e.zblState?e.reciveMsgs.alipayNo=e.reciveMsgPay.alipayNo:e.reciveMsgs.alipayNo="",t()):(e.$vux.toast.text(n.data.reInfo,"middle"),i())}).catch(function(t){e.$store.commit("updateLoadingStatus",{isLoading:!1}),e.$vux.toast.text(t.message,"middle"),i()})})},_getBankList:function(){var e=this;return new r.a(function(t,i){e.$store.commit("updateLoadingStatus",{isLoading:!0}),Object(N.m)().then(function(n){e.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"===n.data.reCode?(e.bankList=n.data.result.data,t()):(e.$vux.toast.text(n.data.reInfo,"middle"),i())}).catch(function(t){e.$store.commit("updateLoadingStatus",{isLoading:!1}),e.$vux.toast.text(t.message,"middle")})})},phonechange:function(){this.jiedanState=!this.jiedanState,this.jiedanState?this.reciveMsgs.alipayNo=this.weyBillSecond.mobileNo:this.reciveMsgs.alipayNo=""},onClickLeft:function(){this.$router.go(-1)},onConfirmBankPicker:function(e){this.reciveMsgs.reciveBank=e.bankName,this.bankPickerShow=!1},onConfirmCityPicker:function(e){var t=e.text,i=e.code;this.selectCityPickerShow=!1,this.reciveMsgs.reciveBankAdress=t,this.reciveMsgs.provinceId=i[0],this.reciveMsgs.cityId=i[1],console.log(i)},checkBankName:function(){var e=this;if(this.reciveMsgs.recivePersonBankNum.length>12){var t=this.reciveMsgs.recivePersonBankNum;this.$store.commit("updateLoadingStatus",{isLoading:!0}),Object(I.d)(t).then(function(t){e.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"===t.data.reCode&&(e.reciveMsgs.reciveBank=t.data.result)}).catch(function(t){e.$store.commit("updateLoadingStatus",{isLoading:!1}),e.$vux.toast.text(t.message,"middle")})}},onSelectReciveActions:function(e){var t=this,i=(e.name,e.value);this.reciveMsgs.reciveType=i,this.clearMsg(),"1"==i?(this.reciveMsgs.recivePersonName=this.weyBillSecond.driverName,this._chooseOneself().then(function(e){t.recivePersonActionsShow=!1})):(this.reciveMsgs.recivePersonName="",this.reciveMsgs.alipayNo="",this.recivePersonActionsShow=!1)},historyBtnClick:function(){if(this.recivePersonTypeShow){if(!this.reciveMsgs.recivePersonName)return this.$vux.toast.text("请选择收款类型和输入姓名查询","middle"),!1}else if(!this.reciveMsgs.recivePersonName)return this.$vux.toast.text("请输入收款人姓名查询","middle"),!1;this.reciveHistoryAjax()},reciveHistoryAjax:function(){var e=this;this.recordPopupShow=!0,this.recordPopupShowWaiting=!0,E({taxWaybillId:"",mobileNo:this.weyBillSecond.mobileNo,payeeName:this.reciveMsgs.recivePersonName,entType:"0",hybWalletCfg:this.hybWalletCfg,autoShowWalletCfg:"",cartBadgeNo:this.weyBillSecond.cartBadgeNo,driverName:this.weyBillSecond.driverName}).then(function(t){if(e.oldrecivePersonName=e.reciveMsgs.recivePersonName,e.oldReciveType=e.reciveMsgs.reciveType,"0"===t.data.reCode){try{MtaH5.clickStat("recive_pay_msg")}catch(e){a()(e)}e.reciveHistoryList=t.data.result.payeeList,e.recordPopupShowWaiting=!1}}).catch(function(t){e.$store.commit("updateLoadingStatus",{isLoading:!1}),e.$vux.toast.text(t.message,"middle")})},historyBtnUse:function(e){this.recordPopupShow=!1,"5"==e.acctType?(this.reciveMsgs.acctType="5",this.cantIptFlag="1"):"6"==e.acctType?(this.reciveMsgs.acctType="6",this.cantIptFlag="1"):"1"==e.acctType?(this.reciveMsgs.acctType="1",this.cantIptFlag="0"):(this.cantIptFlag="0",this.reciveMsgs.acctType=""),this.reciveMsgs.recivePersonName=e.payeeName,this.reciveMsgs.recivePersonCardNum=e.payeeIdCard,this.reciveMsgs.recivePersonphoneNum=e.mobileNo?e.mobileNo:"",this.reciveMsgs.reciveBank=e.payeeBankName,this.reciveMsgs.recivePersonBankNum=e.payeeBankNo,this.reciveMsgs.reciveBankAdress=e.payeeProvince+" "+e.payeeCityName,this.reciveMsgs.provinceId=e.payeeProvinceId,this.reciveMsgs.cityId=e.payeeCityId,this.reciveMsgs.alipayNo=e.alipayNo},rightBtnClick:function(){this.clearMsg(),this.recordPopupShow=!1},clearMsg:function(){"8"==this.hybWalletCfg&&(this.reciveMsgs.recivePersonName=""),this.reciveMsgs.recivePersonCardNum="",this.reciveMsgs.recivePersonBankNum="",this.reciveMsgs.reciveBank="",this.reciveMsgs.recivePersonphoneNum="",this.reciveMsgs.reciveBankAdress="",this.reciveMsgs.payeeCityId="",this.reciveMsgs.payeeProvinceId="",this.reciveMsgs.acctType="",this.reciveMsgs.provinceId="",this.reciveMsgs.cityId="",this.reciveMsgs.alipayNo="",this.cantIptFlag="0"},suerBtnClick:function(){if(!this.btnState){return this.reciveMsgs.recivePersonCardNum.length<18&&this.reciveMsgs.recivePersonCardNum.length>0&&!/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(this.reciveMsgs.recivePersonCardNum)?(this.$vux.toast.text("收款人身份证号码输入错误~~~","middle"),!1):(this.$vux.toast.text("请输入完整的收款人信息~~~","middle"),!1)}return/^1\d{10}$/.test(this.reciveMsgs.recivePersonphoneNum)?"8"!==this.zyCapitalCfg&&1==this.zblState&&"1"===this.reciveMsgs.reciveType&&""==this.reciveMsgs.alipayNo?(this.$vux.toast.text("支付宝账号必填","middle"),!1):(this.$store.commit("updateLoadingStatus",{isLoading:!0}),void this.gateCheckOfCardNumAjax()):(this.$vux.toast.text("收款人手机号码输入错误","middle"),!1)},gateCheckOfCardNumAjax:function(){var e=this;Object(N.j)(this.reciveMsgs.recivePersonName,this.reciveMsgs.recivePersonCardNum).then(function(t){if(e.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"===t.data.reCode){try{MtaH5.clickStat("recive_pay_msg_sure")}catch(e){a()(e)}window.sessionStorage.isChooseType="1";var i={type:"reciveMsgPay",updatMsg:e.reciveMsgs};e.$store.commit("updateWayBillStatus",i),e.$router.go(-1)}else e.$vux.toast.text(t.data.reInfo,"middle")}).catch(function(t){e.$store.commit("updateLoadingStatus",{isLoading:!1}),e.$vux.toast.text("保存异常，请稍后再试~~~","middle")})},_chooseOneself:function(){var e=this;return new r.a(function(t,i){e.$store.commit("updateLoadingStatus",{isLoading:!0});var n={driverMobileNo:e.weyBillSecond.mobileNo,driverName:e.weyBillSecond.driverName};Object(I.g)(n).then(function(n){(e.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"===n.data.reCode)?("{}"!=a()(n.data.result)?e.reciveMsgs.recivePersonCardNum=n.data.result.idCard:e.reciveMsgs.alipayNo="",t()):(e.$vux.toast.text(n.data.reInfo,"middle"),i())}).catch(function(t){e.$store.commit("updateLoadingStatus",{isLoading:!1}),e.$vux.toast.text(t.message,"middle"),i()})})},openReciveBank:function(){var e=this;"1"!=this.cantIptFlag&&(this.bankDefaultIndex=this.bankList.findIndex(function(t){return t.bankName==e.reciveMsgs.reciveBank}),this.bankPickerShow=!0)},openReciveBankAdress:function(){"1"!=this.cantIptFlag&&(this.selectCityPickerShow=!0)}}}),$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"recive_message_container"},[n("c-header",[n("van-nav-bar",{attrs:{title:"填写收款信息","left-arrow":""},on:{"click-left":e.onClickLeft}})],1),e._v(" "),n("div",{staticClass:"sub_page_base"},[n("div",{staticClass:"gray"}),e._v(" "),n("div",{staticClass:"content"},[n("van-cell-group",[n("van-field",{directives:[{name:"show",rawName:"v-show",value:e.recivePersonTypeShow,expression:"recivePersonTypeShow"}],attrs:{label:"收款人类型：",placeholder:"请选择收款人类型","right-icon":"arrow",readonly:""},on:{click:function(t){e.recivePersonActionsShow=!0}},model:{value:e.recivePersonTypeStr,callback:function(t){e.recivePersonTypeStr=t},expression:"recivePersonTypeStr"}}),e._v(" "),n("van-field",{attrs:{disabled:"1"==e.cantIptFlag,label:"收款人姓名：",placeholder:"请填写收款人姓名","right-icon":"arrow",maxlength:64,clearable:""},model:{value:e.reciveMsgs.recivePersonName,callback:function(t){e.$set(e.reciveMsgs,"recivePersonName","string"==typeof t?t.trim():t)},expression:"reciveMsgs.recivePersonName"}},[n("div",{attrs:{slot:"right-icon"},on:{click:e.historyBtnClick},slot:"right-icon"},[n("div",{staticClass:"common-person"},[e._v("常用收款人")])])]),e._v(" "),n("van-field",{attrs:{disabled:"1"==e.cantIptFlag,label:"身份证号：",placeholder:"请输入收款人身份证号码",maxlength:18,clearable:""},model:{value:e.reciveMsgs.recivePersonCardNum,callback:function(t){e.$set(e.reciveMsgs,"recivePersonCardNum","string"==typeof t?t.trim():t)},expression:"reciveMsgs.recivePersonCardNum"}}),e._v(" "),n("van-field",{attrs:{disabled:"1"==e.cantIptFlag,label:"银行卡号：",placeholder:"请输入银行卡号",clearable:""},on:{blur:e.checkBankName},model:{value:e.reciveMsgs.recivePersonBankNum,callback:function(t){e.$set(e.reciveMsgs,"recivePersonBankNum","string"==typeof t?t.trim():t)},expression:"reciveMsgs.recivePersonBankNum"}}),e._v(" "),n("van-field",{attrs:{disabled:"1"==e.cantIptFlag,label:"收款银行：",placeholder:"请选择收款银行",readonly:"","right-icon":"arrow"},on:{click:e.openReciveBank},model:{value:e.reciveMsgs.reciveBank,callback:function(t){e.$set(e.reciveMsgs,"reciveBank","string"==typeof t?t.trim():t)},expression:"reciveMsgs.reciveBank"}}),e._v(" "),n("van-field",{attrs:{disabled:"1"==e.cantIptFlag,label:"联系手机：",placeholder:"请输入银行卡绑定的手机",clearable:"",type:"tel",maxlength:11},model:{value:e.reciveMsgs.recivePersonphoneNum,callback:function(t){e.$set(e.reciveMsgs,"recivePersonphoneNum","string"==typeof t?t.trim():t)},expression:"reciveMsgs.recivePersonphoneNum"}}),e._v(" "),n("van-field",{attrs:{disabled:"1"==e.cantIptFlag,label:"开户行地址：",placeholder:"请选择开户行地址",readonly:"","right-icon":"arrow"},on:{click:e.openReciveBankAdress},model:{value:e.reciveMsgs.reciveBankAdress,callback:function(t){e.$set(e.reciveMsgs,"reciveBankAdress","string"==typeof t?t.trim():t)},expression:"reciveMsgs.reciveBankAdress"}})],1),e._v(" "),n("div",{staticClass:"gray"}),e._v(" "),n("van-cell-group",{directives:[{name:"show",rawName:"v-show",value:e.alipayShow,expression:"alipayShow"}]},[n("van-cell",{attrs:{title:"支付宝账号：",required:""}},[n("van-checkbox",{attrs:{"checked-color":"#15499a"},on:{click:e.phonechange},model:{value:e.jiedanState,callback:function(t){e.jiedanState=t},expression:"jiedanState"}},[e._v("接单手机号")])],1),e._v(" "),n("van-field",{attrs:{placeholder:"非接单手机号，请输入支付宝账号",clearable:"",type:"number"},model:{value:e.reciveMsgs.alipayNo,callback:function(t){e.$set(e.reciveMsgs,"alipayNo","string"==typeof t?t.trim():t)},expression:"reciveMsgs.alipayNo"}})],1)],1)]),e._v(" "),n("div",{staticClass:"footer"},[n("van-button",{staticClass:"btn",attrs:{type:"primary",size:"large"},on:{click:e.suerBtnClick}},[e._v("\n      确定\n    ")]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:1==e.cantIptFlag,expression:"cantIptFlag == 1"}],staticClass:"clear-msg",on:{click:function(t){return e.rightBtnClick()}}},[e._v("清空收款信息")])],1),e._v(" "),n("van-action-sheet",{attrs:{round:!1,actions:e.recivePersonActions},on:{select:e.onSelectReciveActions},model:{value:e.recivePersonActionsShow,callback:function(t){e.recivePersonActionsShow=t},expression:"recivePersonActionsShow"}}),e._v(" "),n("van-popup",{attrs:{position:"bottom"},model:{value:e.recordPopupShow,callback:function(t){e.recordPopupShow=t},expression:"recordPopupShow"}},[n("div",{staticClass:"record_popup"},[n("div",{staticClass:"header"},[n("div",{staticClass:"left"},[e._v("选择收款信息")]),e._v(" "),n("div",{staticClass:"right",on:{click:e.rightBtnClick}},[e._v("手动输入")])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.recordPopupShowWaiting,expression:"recordPopupShowWaiting"}],staticClass:"content"},[n("van-loading",{attrs:{type:"spinner",color:"#1989fa"}},[e._v("加载中...")])],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.recordPopupShowWaiting,expression:"!recordPopupShowWaiting"}],staticClass:"content"},[n("div",{staticClass:"recive-title-style"},[e._v("\n          当前共有\n          "),n("span",[e._v(e._s(e.reciveHistoryList.length)+"条")]),e._v("支付记录\n        ")]),e._v(" "),e._l(e.reciveHistoryList,function(t,a,s){return n("div",{key:s,staticClass:"recive-list-cxt",class:{"recive-list-cxt-active":e.reciveHistoryFlag===a},on:{click:function(t){e.reciveHistoryFlag=a}}},[n("div",{staticClass:"list-item-cxt"},[n("div",{staticClass:"left"},[e._v("收款人姓名：")]),e._v(" "),n("div",{staticClass:"right"},[e._v(e._s(t.payeeName))]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"5"==t.acctType,expression:"item.acctType == '5'"}],staticClass:"right"},[n("img",{staticStyle:{width:"16px","margin-left":"6px"},attrs:{src:i("s8Hr"),width:"16px",alt:""}})]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"6"==t.acctType,expression:"item.acctType == '6'"}],staticClass:"carMaster"},[e._v("车队钱包")])]),e._v(" "),n("div",{staticClass:"list-item-cxt"},[n("div",{staticClass:"left"},[e._v("收 款 银 行：")]),e._v(" "),n("div",{staticClass:"right"},[e._v(e._s(t.payeeBankName))])]),e._v(" "),n("div",{staticClass:"list-item-cxt"},[n("div",{staticClass:"left"},[e._v("开户行地址：")]),e._v(" "),n("div",{staticClass:"right"},[e._v("\n              "+e._s(t.payeeProvince)+" "+e._s(t.payeeCityName)+"\n            ")])]),e._v(" "),n("div",{staticClass:"list-item-cxt"},[n("div",{staticClass:"left"},[e._v("银 行 卡 号：")]),e._v(" "),n("div",{staticClass:"right"},[e._v(e._s(t.payeeBankNo))])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.reciveHistoryFlag===a,expression:"reciveHistoryFlag === index"}],staticClass:"use-btn-style",on:{click:function(i){return e.historyBtnUse(t)}}},[e._v("\n            使用\n          ")])])}),e._v(" "),n("div",{staticStyle:{height:"32px"}})],2)])]),e._v(" "),n("van-popup",{attrs:{position:"bottom"},model:{value:e.bankPickerShow,callback:function(t){e.bankPickerShow=t},expression:"bankPickerShow"}},[e.bankPickerShow?n("van-picker",{attrs:{"show-toolbar":"",columns:e.bankList,"value-key":"bankName","default-index":e.bankDefaultIndex},on:{cancel:function(t){e.bankPickerShow=!1},confirm:e.onConfirmBankPicker}}):e._e()],1),e._v(" "),n("van-popup",{attrs:{position:"bottom"},model:{value:e.selectCityPickerShow,callback:function(t){e.selectCityPickerShow=t},expression:"selectCityPickerShow"}},[e.selectCityPickerShow?n("city-picker",{attrs:{defaultProvinceId:e.reciveMsgs.provinceId,defaultCityId:e.reciveMsgs.cityId},on:{onConfirm:e.onConfirmCityPicker,onCancel:function(t){e.selectCityPickerShow=!1}}}):e._e()],1)],1)};$._withStripped=!0;var T={render:$,staticRenderFns:[]},j=T;var D=!1;var F=i("C7Lr")(L,j,!1,function(e){D||i("OdUN")},"data-v-bc263580",null);F.options.__file="src/components/wbsPay/ReciveMessage.vue";t.default=F.exports},OdUN:function(e,t,i){var n=i("WpAX");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("FIqI")("4ba1adf7",n,!1,{})},WpAX:function(e,t,i){(e.exports=i("UTlt")(!0)).push([e.i,"\n.recive_message_container[data-v-bc263580] {\n  background-color: #efefef;\n}\n.recive_message_container[data-v-bc263580] .van-cell {\n  font-size: 16px;\n  color: #000;\n}\n.recive_message_container[data-v-bc263580] .van-field {\n  color: #000;\n  font-size: 16px;\n}\n.recive_message_container[data-v-bc263580] .van-field .van-field__label {\n  width: 100px;\n}\n.recive_message_container .common-person[data-v-bc263580] {\n  font-size: 13px;\n  padding: 0px 4px;\n  color: #fff;\n  background-color: #ffba00;\n  border-radius: 10px;\n}\n.recive_message_container .sub_page_base[data-v-bc263580] {\n  width: 100%;\n  padding-top: 20px;\n  min-height: 100vh;\n  height: auto;\n  box-sizing: border-box;\n}\n.recive_message_container .footer[data-v-bc263580] {\n  width: 90%;\n  padding: 15px 5%;\n  height: 100px;\n  text-align: center;\n  position: fixed;\n  bottom: 0px;\n  background-color: #fff;\n}\n.recive_message_container .footer[data-v-bc263580] .van-button {\n  background: #15499a;\n  border-color: #15499a;\n  border-radius: 5px;\n}\n.recive_message_container .footer .clear-msg[data-v-bc263580] {\n  color: blue;\n  text-decoration: underline;\n  padding: 10px;\n}\n.recive_message_container .record_popup .header[data-v-bc263580] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  padding: 0 15px;\n  height: 44px;\n}\n.recive_message_container .record_popup .header .left[data-v-bc263580] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  text-align: center;\n  color: #222;\n}\n.recive_message_container .record_popup .header .right[data-v-bc263580] {\n  color: #1581cf;\n}\n.recive_message_container .record_popup .content[data-v-bc263580] {\n  background: #eee;\n  padding: 12px;\n  max-height: 300px;\n  overflow: auto;\n}\n.recive_message_container .record_popup .content .recive-title-style[data-v-bc263580] {\n  color: #202020;\n}\n.recive_message_container .record_popup .content .recive-title-style span[data-v-bc263580] {\n  color: #1581cf;\n}\n.recive_message_container .record_popup .content .recive-list-cxt[data-v-bc263580] {\n  margin-top: 16px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: spaspace-around;\n  -webkit-justify-content: spaspace-around;\n          justify-content: spaspace-around;\n  position: relative;\n  padding: 13px;\n  min-height: 48px;\n  height: auto;\n  background-color: #f6f6f6;\n  border: 1px solid #dfdfdf;\n  font-size: 15px;\n}\n.recive_message_container .record_popup .content .recive-list-cxt .use-btn-style[data-v-bc263580] {\n  position: absolute;\n  width: 60px;\n  height: 32px;\n  text-align: center;\n  line-height: 32px;\n  background-color: #2196f3;\n  color: #fff;\n  border-radius: 5px;\n  right: 20px;\n  top: 40px;\n}\n.recive_message_container .record_popup .content .recive-list-cxt .list-item-cxt[data-v-bc263580] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n          justify-content: flex-start;\n}\n.recive_message_container .record_popup .content .recive-list-cxt .list-item-cxt .left[data-v-bc263580] {\n  color: #454545;\n}\n.recive_message_container .record_popup .content .recive-list-cxt .list-item-cxt .right[data-v-bc263580] {\n  color: #202020;\n}\n.recive_message_container .record_popup .content .recive-list-cxt .list-item-cxt .carMaster[data-v-bc263580] {\n  margin-left: 5px;\n  color: #ffba00;\n  font-size: 14px;\n  padding: 2px 4px;\n  border: 1px solid #ffba00;\n  border-radius: 10px;\n}\n.recive_message_container .record_popup .content .recive-list-cxt-active[data-v-bc263580] {\n  background-color: #e0effb;\n  border: 1px solid #3699ff;\n}\n.recive_message_container .history-img-style[data-v-bc263580] {\n  width: 24px;\n  height: 24px;\n  vertical-align: middle;\n}\n","",{version:3,sources:["D:/h5_gitlab/ngcbapp_h5/src/components/wbsPay/ReciveMessage.vue"],names:[],mappings:";AACA;EACE,0BAA0B;CAC3B;AACD;EACE,gBAAgB;EAChB,YAAY;CACb;AACD;EACE,YAAY;EACZ,gBAAgB;CACjB;AACD;EACE,aAAa;CACd;AACD;EACE,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,0BAA0B;EAC1B,oBAAoB;CACrB;AACD;EACE,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;EACb,uBAAuB;CACxB;AACD;EACE,WAAW;EACX,iBAAiB;EACjB,cAAc;EACd,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;EACZ,uBAAuB;CACxB;AACD;EACE,oBAAoB;EACpB,sBAAsB;EACtB,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,2BAA2B;EAC3B,cAAc;CACf;AACD;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,0BAA0B;EAC1B,4BAA4B;UACpB,oBAAoB;EAC5B,gBAAgB;EAChB,aAAa;CACd;AACD;EACE,oBAAoB;EACpB,gBAAgB;UACR,QAAQ;EAChB,mBAAmB;EACnB,YAAY;CACb;AACD;EACE,eAAe;CAChB;AACD;EACE,iBAAiB;EACjB,cAAc;EACd,kBAAkB;EAClB,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,iBAAiB;EACjB,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,6BAA6B;EAC7B,8BAA8B;EAC9B,+BAA+B;UACvB,uBAAuB;EAC/B,kCAAkC;EAClC,yCAAyC;UACjC,iCAAiC;EACzC,mBAAmB;EACnB,cAAc;EACd,iBAAiB;EACjB,aAAa;EACb,0BAA0B;EAC1B,0BAA0B;EAC1B,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,0BAA0B;EAC1B,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,UAAU;CACX;AACD;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,wBAAwB;EACxB,oCAAoC;UAC5B,4BAA4B;CACrC;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,iBAAiB;EACjB,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,0BAA0B;EAC1B,oBAAoB;CACrB;AACD;EACE,0BAA0B;EAC1B,0BAA0B;CAC3B;AACD;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;CACxB",file:"ReciveMessage.vue",sourcesContent:["\n.recive_message_container[data-v-bc263580] {\n  background-color: #efefef;\n}\n.recive_message_container[data-v-bc263580] .van-cell {\n  font-size: 16px;\n  color: #000;\n}\n.recive_message_container[data-v-bc263580] .van-field {\n  color: #000;\n  font-size: 16px;\n}\n.recive_message_container[data-v-bc263580] .van-field .van-field__label {\n  width: 100px;\n}\n.recive_message_container .common-person[data-v-bc263580] {\n  font-size: 13px;\n  padding: 0px 4px;\n  color: #fff;\n  background-color: #ffba00;\n  border-radius: 10px;\n}\n.recive_message_container .sub_page_base[data-v-bc263580] {\n  width: 100%;\n  padding-top: 20px;\n  min-height: 100vh;\n  height: auto;\n  box-sizing: border-box;\n}\n.recive_message_container .footer[data-v-bc263580] {\n  width: 90%;\n  padding: 15px 5%;\n  height: 100px;\n  text-align: center;\n  position: fixed;\n  bottom: 0px;\n  background-color: #fff;\n}\n.recive_message_container .footer[data-v-bc263580] .van-button {\n  background: #15499a;\n  border-color: #15499a;\n  border-radius: 5px;\n}\n.recive_message_container .footer .clear-msg[data-v-bc263580] {\n  color: blue;\n  text-decoration: underline;\n  padding: 10px;\n}\n.recive_message_container .record_popup .header[data-v-bc263580] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  padding: 0 15px;\n  height: 44px;\n}\n.recive_message_container .record_popup .header .left[data-v-bc263580] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  text-align: center;\n  color: #222;\n}\n.recive_message_container .record_popup .header .right[data-v-bc263580] {\n  color: #1581cf;\n}\n.recive_message_container .record_popup .content[data-v-bc263580] {\n  background: #eee;\n  padding: 12px;\n  max-height: 300px;\n  overflow: auto;\n}\n.recive_message_container .record_popup .content .recive-title-style[data-v-bc263580] {\n  color: #202020;\n}\n.recive_message_container .record_popup .content .recive-title-style span[data-v-bc263580] {\n  color: #1581cf;\n}\n.recive_message_container .record_popup .content .recive-list-cxt[data-v-bc263580] {\n  margin-top: 16px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: spaspace-around;\n  -webkit-justify-content: spaspace-around;\n          justify-content: spaspace-around;\n  position: relative;\n  padding: 13px;\n  min-height: 48px;\n  height: auto;\n  background-color: #f6f6f6;\n  border: 1px solid #dfdfdf;\n  font-size: 15px;\n}\n.recive_message_container .record_popup .content .recive-list-cxt .use-btn-style[data-v-bc263580] {\n  position: absolute;\n  width: 60px;\n  height: 32px;\n  text-align: center;\n  line-height: 32px;\n  background-color: #2196f3;\n  color: #fff;\n  border-radius: 5px;\n  right: 20px;\n  top: 40px;\n}\n.recive_message_container .record_popup .content .recive-list-cxt .list-item-cxt[data-v-bc263580] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n          justify-content: flex-start;\n}\n.recive_message_container .record_popup .content .recive-list-cxt .list-item-cxt .left[data-v-bc263580] {\n  color: #454545;\n}\n.recive_message_container .record_popup .content .recive-list-cxt .list-item-cxt .right[data-v-bc263580] {\n  color: #202020;\n}\n.recive_message_container .record_popup .content .recive-list-cxt .list-item-cxt .carMaster[data-v-bc263580] {\n  margin-left: 5px;\n  color: #ffba00;\n  font-size: 14px;\n  padding: 2px 4px;\n  border: 1px solid #ffba00;\n  border-radius: 10px;\n}\n.recive_message_container .record_popup .content .recive-list-cxt-active[data-v-bc263580] {\n  background-color: #e0effb;\n  border: 1px solid #3699ff;\n}\n.recive_message_container .history-img-style[data-v-bc263580] {\n  width: 24px;\n  height: 24px;\n  vertical-align: middle;\n}\n"],sourceRoot:""}])}});
webpackJsonp([18],{GLE0:function(t,i,s){t.exports=s.p+"V3.29.1/img/yibangding_img@2x.fd3e17b.png"},I3sp:function(t,i,s){t.exports=s.p+"V3.29.1/img/youkajilu_icon@2x.c3fc263.png"},Oh9z:function(t,i,s){t.exports=s.p+"V3.29.1/img/xuankabg_img@2x.ad8b54c.png"},TeQr:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("3cXf"),a=s.n(e),n=s("Hh+s"),o=s("KS8L"),r=s("Thh0"),c={name:"oilCardManagement",data:function(){return{show1:!1,show:!1,condition:"",mobileNo:"",arrayList:[],arrayList0:[],searchList:[],oilName:"",cardNo:"",noInfo:!1,index:"0",index0:0,cartBadgeNo:"",driverName:"",srcStatic:s("I3sp"),src1:s("biZ0"),src2:s("GLE0"),chooseOilCardItem:{},cardNum:"0",noBindNum:"0",bindNum:"0",tab:"0",a:"",b:"",c:"",d:"",title:"",tabState:!1,search:"搜索",version:"",newVersion:r.b,showBack:!0}},watch:{condition:function(){""==this.condition&&(this.search="搜索",this.searchList=[],this.noInfo=!1)}},created:function(){if(1===this.$sysType){var t=JSON.parse(AndroidAppJs.getClientVersion());this.version=t.app_version,console.log(this.version),this.isVersionNew(this.version,this.newVersion)}else 2===this.$sysType||console.log("该获取版本号方法,仅在客户端才能使用~~")},mounted:function(){var t=this;this.$nextTick(function(){t.dataInit()})},methods:{isVersionNew:function(t,i){var s=parseFloat(t),e=parseFloat(i),a=t.replace(s+".",""),n=i.replace(e+".","");this.showBack=s>e||!(s<e)&&a>=n},carNumIpt:function(){var t=this;this.$carIpt({dpCartNum:""!==this.cartBadgeNo&&"请输入车牌号码"!==this.cartBadgeNo?this.cartBadgeNo:"",fn:function(i){t.cartBadgeNo=""===i?"请输入车牌号码":i}})},goBack:function(){Object(o.a)("-1")},onItemClick:function(t,i){this.tab=t;var s=[];"1"==this.tab?(0!=i&&window.scrollTo(0,0),"0"!=this.noBindNum?(this.arrayList=this.arrayList0,this.arrayList.map(function(t){"-1"==t.isBind&&s.push(t)}),this.arrayList=s,this.tabState=!1):this.tabState=!0):"2"==this.tab?(0!=i&&window.scrollTo(0,0),"0"!=this.bindNum?(this.arrayList=this.arrayList0,this.arrayList.map(function(t){"0"==t.isBind&&s.push(t)}),this.arrayList=s,this.tabState=!1):this.tabState=!0):(0!=i&&window.scrollTo(0,0),this.tabState=!1,this.arrayList=this.arrayList0)},phoneCall:function(t){t&&Object(o.c)(t)},dataInit:function(){var t=this;this.$store.commit("updateLoadingStatus",{isLoading:!0}),Object(n.e)().then(function(i){if(t.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"===i.data.reCode){var s=i.data.result;t.cardNum=s.cardNum,t.noBindNum=s.noBindNum,t.bindNum=s.bindNum,t.arrayList=s.list,t.arrayList0=s.list}else t.$vux.alert.show({title:"提示",buttonText:"知道了",content:i.data.reInfo});t.show1=!0}).catch(function(i){t.$store.commit("updateLoadingStatus",{isLoading:!1}),t.show1=!0,console.log(a()(i.message))})},bindCardConfirm:function(t,i,s,e){"0"==e.signFlag&&"0"==e.isBind?this.title="绑定油卡":this.title="确认绑定",this.cardNo=s,this.a=t,this.b=i,this.c=s,this.d=e,this.show=!0},bindCard:function(t,i,s,e){this.index=t,this.oilName=i,this.cardNo=s,this.chooseOilCardItem=e,this.onConfirm(this.index,0)},searchBtn:function(){if("取消"==this.search)return this.condition="",void(this.search="搜索");this.tabState=!1;if(/^[0-9]+$/.test(this.condition))if(this.condition.length<4)this.$vux.toast.text("请输入卡号最少后四位!","middle");else{var t=[];for(var i in this.arrayList0){var s=this.arrayList0[i].oilCardNo;s.substring(s.length-this.condition.length)==this.condition&&t.push(this.arrayList0[i])}this.searchList=[],this.searchList=t,0==this.searchList.length?this.noInfo=!0:this.noInfo=!1,this.search="取消"}else this.$vux.toast.text("请输入数字!","middle")},onCancel2:function(){this.show=!1,this.cartBadgeNo="",this.driverName=""},onClose:function(){this.show=!1,this.cartBadgeNo="",this.driverName=""},onConfirm2:function(){return""==this.cartBadgeNo?(this.$vux.toast.text("车牌号码不能为空！","middle"),!1):""==this.driverName?(this.$vux.toast.text("司机姓名不能为空！","middle"),!1):this.driverName.length>20?(this.$vux.toast.text("姓名输入不合法！","middle"),!1):(this.show=!1,this.index=this.a,this.cardNo=this.c,this.chooseOilCardItem=this.d,void this.onConfirm(this.index))},onConfirm:function(t){var i=this,s=this.arrayList[t].oilCardNo;0!=this.searchList.length&&(s=this.searchList[t].oilCardNo);var e=0!=this.arrayList.length&&0==this.searchList.length&&0==this.noInfo;this.$store.commit("updateLoadingStatus",{isLoading:!0}),Object(n.a)(s,this.cartBadgeNo,this.driverName,this.mobileNo).then(function(s){i.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"===s.data.reCode?(i.$vux.toast.text("绑定成功","middle"),0!=i.searchList.length&&(i.searchList[t].driverCarNo=i.cartBadgeNo,i.searchList[t].driverName=i.driverName,i.searchList[t].isBind=0),i.$nextTick(function(){i.dataInit()}),setTimeout(function(){0==e&&(i.index0=0),1==i.index0&&(i.index0=1,i.onItemClick(1,0)),2==i.index0&&(i.index0=2,i.onItemClick(2,0))},500)):i.$vux.toast.text(s.data.reInfo,"middle"),i.cartBadgeNo="",i.driverName=""}).catch(function(t){i.$store.commit("updateLoadingStatus",{isLoading:!1}),console.log(a()(t.message))})}}},l={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"oil-card-management"},[t.showBack?e("x-header",{attrs:{"left-options":{backText:"",preventGoBack:!0},title:"slot:overwrite-title"},on:{"on-click-back":function(i){return t.goBack()}}},[e("div",{staticClass:"overwrite-title-demo",attrs:{slot:"overwrite-title"},slot:"overwrite-title"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.condition,expression:"condition"}],attrs:{type:"tel",placeholder:"请输入卡号后四位"},domProps:{value:t.condition},on:{input:function(i){i.target.composing||(t.condition=i.target.value)}}})]),t._v(" "),e("a",{staticClass:"search_btn",attrs:{slot:"right"},on:{click:function(i){return t.searchBtn()}},slot:"right"},[t._v(t._s(t.search))])]):e("x-header",{staticClass:"header1",attrs:{"left-options":{backText:"",preventGoBack:!0,showBack:!1},title:"slot:overwrite-title"},on:{"on-click-back":function(i){return t.goBack()}}},[e("div",{staticClass:"overwrite-title-demo",attrs:{slot:"overwrite-title"},slot:"overwrite-title"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.condition,expression:"condition"}],attrs:{type:"tel",placeholder:"请输入卡号后四位"},domProps:{value:t.condition},on:{input:function(i){i.target.composing||(t.condition=i.target.value)}}})]),t._v(" "),e("a",{staticClass:"search_btn",attrs:{slot:"right"},on:{click:function(i){return t.searchBtn()}},slot:"right"},[t._v(t._s(t.search))])]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:1==t.show1,expression:"show1 == true"}]},[e("div",{directives:[{name:"show",rawName:"v-show",value:0==t.arrayList.length,expression:"arrayList.length == 0"}]},[e("div",{staticClass:"default"},[e("img",{attrs:{src:t.srcStatic,alt:"",width:"100"}}),t._v(" "),e("p",[t._v("当前企业无可用油卡记录！")]),t._v(" "),e("p",[t._v("请联系快路宝客服开卡")])])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.arrayList.length&&0==t.searchList.length&&0==t.noInfo,expression:"arrayList.length != 0 && searchList.length == 0 && noInfo == false"}],staticClass:"tab"},[e("img",{attrs:{src:s("Oh9z"),alt:"",width:"100%",height:"66px"}}),t._v(" "),e("tab",{attrs:{"active-color":"#FFBA00"},model:{value:t.index0,callback:function(i){t.index0=i},expression:"index0"}},[e("tab-item",{on:{"on-item-click":t.onItemClick}},[e("p",{staticClass:"p1"},[t._v(t._s(t.cardNum))]),t._v(" "),e("p",{staticClass:"p2"},[t._v("油卡总数")])]),t._v(" "),e("tab-item",{on:{"on-item-click":t.onItemClick}},[e("p",{staticClass:"p1"},[t._v(t._s(t.noBindNum))]),t._v(" "),e("p",{staticClass:"p2"},[t._v("未绑定")])]),t._v(" "),e("tab-item",{on:{"on-item-click":t.onItemClick}},[e("p",{staticClass:"p1"},[t._v(t._s(t.bindNum))]),t._v(" "),e("p",{staticClass:"p2"},[t._v("已绑定")])])],1)],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!(0==t.arrayList.length&&0==t.searchList.length),expression:"!(arrayList.length == 0 && searchList.length == 0)"}],staticClass:"card"},[e("span",{directives:[{name:"show",rawName:"v-show",value:!t.tabState,expression:"!tabState"}]},[e("span",{directives:[{name:"show",rawName:"v-show",value:0!=t.arrayList.length&&0==t.searchList.length&&0==t.noInfo,expression:"arrayList.length != 0 && searchList.length == 0 && noInfo == false"}],staticClass:"card_height1"},t._l(t.arrayList,function(i,a){return e("div",{key:a,staticClass:"card-box",class:"2"==i.oilBgType||"3"==i.oilBgType?"card2":"card1"},[e("div",{staticClass:"left"},[e("div",[t._v(t._s(i.oilTypeName))]),t._v(" "),e("div",{staticClass:"cardNum"},[t._v(t._s(i.oilCardNo))]),t._v(" "),e("p",{staticClass:"money"},[t._v("\n                                ￥"),e("span",[t._v(t._s(i.preOilBalance))]),t._v("余额\n                            ")]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:"0"==i.isBind,expression:"item.isBind == '0'"}],staticClass:"info"},[e("div",[t._v("车牌号码："+t._s(i.driverCarNo))]),t._v(" "),e("div",[t._v("司机姓名："+t._s(i.driverName))]),t._v(" "),e("a",{staticClass:"phone-call",on:{click:function(s){return t.phoneCall(i.oilMobile)}}},[t._v("电话号码："+t._s(i.oilMobile)+" "),e("img",{directives:[{name:"show",rawName:"v-show",value:i.oilMobile,expression:"item.oilMobile"}],attrs:{src:s("lhX/")}})])])]),t._v(" "),e("div",{staticClass:"right"},[e("x-button",{attrs:{type:"primary",mini:!0},nativeOn:{click:function(s){return t.bindCardConfirm(a,i.oilTypeName,i.oilCardNo,i)}}},["0"==i.signFlag&&"0"==i.isBind?e("span",[t._v("重新绑定")]):"1"==i.signFlag&&"0"==i.isBind?e("span"):e("span",[t._v("绑定")])])],1),t._v(" "),e("img",{staticClass:"img",attrs:{src:["-1"==i.isBind?t.src1:t.src2],alt:""}})])}),0),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:0!=t.searchList.length,expression:"searchList.length != 0"}],staticClass:"card_height2"},t._l(t.searchList,function(i,a){return e("div",{key:a,staticClass:"card-box",class:"2"==i.oilBgType||"3"==i.oilBgType?"card2":"card1"},[e("div",{staticClass:"left"},[e("div",[t._v(t._s(i.oilTypeName))]),t._v(" "),e("div",{staticClass:"cardNum"},[t._v(t._s(i.oilCardNo))]),t._v(" "),e("p",{staticClass:"money"},[t._v("\n                                ￥"),e("span",[t._v(t._s(i.preOilBalance))]),t._v("余额\n                            ")]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:"0"==i.isBind,expression:"item.isBind == '0'"}],staticClass:"info"},[e("div",[t._v("车牌号码："+t._s(i.driverCarNo))]),t._v(" "),e("div",[t._v("司机姓名："+t._s(i.driverName))]),t._v(" "),e("a",{staticClass:"phone-call",on:{click:function(s){return t.phoneCall(i.oilMobile)}}},[t._v("电话号码："+t._s(i.oilMobile)+"\n                                    "),e("img",{directives:[{name:"show",rawName:"v-show",value:i.oilMobile,expression:"item.oilMobile"}],attrs:{src:s("lhX/")}})])])]),t._v(" "),e("div",{staticClass:"right"},[e("x-button",{attrs:{type:"primary",mini:!0},nativeOn:{click:function(s){return t.bindCardConfirm(a,i.oilTypeName,i.oilCardNo,i)}}},["0"==i.signFlag&&"0"==i.isBind?e("span",[t._v("重新绑定")]):"1"==i.signFlag&&"0"==i.isBind?e("span"):e("span",[t._v("绑定")])])],1),t._v(" "),e("img",{staticClass:"img",attrs:{src:["-1"==i.isBind?t.src1:t.src2],alt:""}})])}),0),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:1==t.noInfo,expression:"noInfo == true"}]},[e("div",{staticClass:"default"},[e("img",{attrs:{src:t.srcStatic,alt:"",width:"100"}}),t._v(" "),e("p",[t._v("未搜索到匹配的油卡")])])])]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.tabState,expression:"tabState"}]},[t._m(0)])])]),t._v(" "),e("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[e("confirm",{attrs:{title:t.title,"cancel-text":"取消","confirm-text":"确认","close-on-confirm":!1},on:{"on-cancel":function(i){return t.onCancel2()},"on-confirm":function(i){return t.onConfirm2()},"on-close":function(i){return t.onClose()}},model:{value:t.show,callback:function(i){t.show=i},expression:"show"}},[e("p",{staticStyle:{color:"#FFBA00"}},["确认绑定"==t.title?e("span",[t._v("*对于已确定油卡卡号车辆，可提前绑定油卡")]):e("span",[t._v('确认解除之前与"'+t._s(t.d.driverName)+","+t._s(t.d.driverCarNo)+'"的绑定关系？')])]),t._v(" "),e("p",{staticStyle:{color:"#454545"}},[t._v("卡号："+t._s(t.cardNo))]),t._v(" "),e("p",{staticStyle:{height:"1px",background:"#DCDCDC",margin:"0px auto 10px",width:"250px"}}),t._v(" "),e("p",[t._v("\n                车牌号码："),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.cartBadgeNo,expression:"cartBadgeNo",modifiers:{trim:!0}}],staticClass:"fake_input",attrs:{type:"text",onfocus:"this.blur()",placeholder:"请输入绑定车牌号码"},domProps:{value:t.cartBadgeNo},on:{click:t.carNumIpt,input:function(i){i.target.composing||(t.cartBadgeNo=i.target.value.trim())},blur:function(i){return t.$forceUpdate()}}})]),t._v(" "),e("p",[t._v("司机姓名："),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.driverName,expression:"driverName",modifiers:{trim:!0}}],attrs:{type:"text",name:"",placeholder:"请输入绑定司机姓名"},domProps:{value:t.driverName},on:{input:function(i){i.target.composing||(t.driverName=i.target.value.trim())},blur:function(i){return t.$forceUpdate()}}})])])],1)],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"default"},[i("p",[this._v("暂无绑定油卡信息~")])])}]};var d=s("C7Lr")(c,l,!1,function(t){s("hcuT")},null,null);i.default=d.exports},biZ0:function(t,i,s){t.exports=s.p+"V3.29.1/img/weibangding_img@2x.ebe4a17.png"},hcuT:function(t,i){}});
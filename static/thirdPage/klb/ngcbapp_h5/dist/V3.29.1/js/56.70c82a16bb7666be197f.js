webpackJsonp([56],{VlGW:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a("mvHQ"),i=a.n(e),o=a("Gu7T"),s=a.n(o),r=(a("nsZj"),a("T2s0"),a("1H7Z"),a("qpP9"),a("px3J"),a("n/tq"),a("AA6R")),l=a.n(r),c=a("RfZZ"),A=a("o69Z"),b=a("rhik"),d=a("RP/J"),p=a("0zAV"),u=Object(A.b)("search"),g=u[0],h=u[1],k=u[2];function B(n,t,a,e){var i={attrs:e.data.attrs,on:Object(c.a)({},e.listeners,{keypress:function(n){13===n.keyCode&&(Object(d.c)(n),Object(b.a)(e,"search",t.value)),Object(b.a)(e,"keypress",n)}})},o=Object(b.b)(e);return o.attrs=void 0,n("div",l()([{class:h({"show-action":t.showAction}),style:{background:t.background}},o]),[null==a.left?void 0:a.left(),n("div",{class:h("content",t.shape)},[function(){if(a.label||t.label)return n("div",{class:h("label")},[a.label?a.label():t.label])}(),n(p.a,l()([{attrs:{type:"search",border:!1,value:t.value,leftIcon:t.leftIcon,rightIcon:t.rightIcon,clearable:t.clearable,clearTrigger:t.clearTrigger},scopedSlots:{"left-icon":a["left-icon"],"right-icon":a["right-icon"]}},i]))]),function(){if(t.showAction)return n("div",{class:h("action"),attrs:{role:"button",tabindex:"0"},on:{click:function(){a.action||(Object(b.a)(e,"input",""),Object(b.a)(e,"cancel"))}}},[a.action?a.action():t.actionText||k("cancel")])}()])}B.props={value:String,label:String,rightIcon:String,actionText:String,background:String,showAction:Boolean,clearTrigger:String,shape:{type:String,default:"square"},clearable:{type:Boolean,default:!0},leftIcon:{type:String,default:"search"}};var f=g(B),C=(a("9++/"),a("QhyB")),m=(a("FO5P"),a("woHG")),x=a("yIFG"),_=(m.a,C.a,{name:"bank_list",data:function(){return{firstLoad:!1,isUpLoading:!1,upFinished:!1,bankName:"",pageNum:1,pageSize:25,listData:{}}},components:{vanNavBar:m.a,vanList:C.a,vanSearch:f},mounted:function(){this.$store.commit("updateLoadingStatus",{isLoading:!1}),this.init()},methods:{init:function(){var n=this;this.$store.commit("updateLoadingStatus",{isLoading:!0}),Object(x.b)({bankName:this.bankName,pageNum:this.pageNum,pageSize:this.pageSize}).then(function(t){if(n.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"===t.data.reCode){if(n.firstLoad=!0,n.isUpLoading=!1,null==t.data.result.wsSupportBankList||0===t.data.result.wsSupportBankList.length)return n.upFinished=!0,void(1===n.pageNum&&(n.listData=[]));var a;if(t.data.result.wsSupportBankList<n.pageSize&&(n.upFinished=!0),1===n.pageNum)n.listData=t.data.result.wsSupportBankList;else(a=n.listData).push.apply(a,s()(t.data.result.wsSupportBankList))}})},onSearch:function(){this.upFinished=!1,this.pageNum=1,this.init()},onLoadList:function(){this.pageNum++,console.log("上拉加载init加载数据"),this.init()},choiceBank:function(n){localStorage.setItem("chooseBank",i()(n)),this.$router.back()},handleBack:function(){this.$router.back()}}}),v=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"bank_list"},[a("div",{staticClass:"sub_page_base"},[a("van-search",{staticClass:"search_box",attrs:{"show-action":"",placeholder:"请输入银行名称"},on:{search:n.onSearch},model:{value:n.bankName,callback:function(t){n.bankName=t},expression:"bankName"}},[a("div",{attrs:{slot:"action"},on:{click:n.onSearch},slot:"action"},[n._v("搜索")])]),n._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:n.firstLoad,expression:"firstLoad"}],staticClass:"bank_content"},[n.listData.length>0?a("van-list",{attrs:{finished:n.upFinished,"finished-text":"没有更多了","immediate-check":!1},on:{load:n.onLoadList},model:{value:n.isUpLoading,callback:function(t){n.isUpLoading=t},expression:"isUpLoading"}},n._l(n.listData,function(t,e){return a("div",{key:e,staticClass:"item van-hairline--top",on:{click:function(a){return n.choiceBank(t)}}},[a("img",{staticClass:"bank_logo",attrs:{src:t.bankImgUrl}}),n._v("\n          "+n._s(t.bankName)+"\n        ")])}),0):a("div",{staticClass:"bank_no_data"},[n._v("未找到您搜索的银行")])],1)],1)])};v._withStripped=!0;var E={render:v,staticRenderFns:[]},w=E;var S=!1;var y=a("VU/8")(_,w,!1,function(n){S||a("kFAi")},null,null);y.options.__file="src/components/hybWallet/banklist.vue";t.default=y.exports},iyH9:function(n,t,a){(n.exports=a("FZ+f")(!0)).push([n.i,"\n.bank_list {\n  /* 下拉刷新 */\n}\n.bank_list .sub_page_base {\n  min-height: 100vh;\n  box-sizing: border-box;\n}\n.bank_list .search_box {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 999;\n}\n.bank_list .bank_content {\n  padding-top: 45px;\n}\n.bank_list .bank_content .item {\n  display: flex;\n  display: -webkit-box;\n  /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */\n  /* 老版本语法: Firefox (buggy) */\n  /* 混合版本语法: IE 10 */\n  display: -webkit-flex;\n  /* 新版本语法: Chrome 21+ */\n  align-items: center;\n  -webkit-align-items: center;\n  box-align: center;\n  -moz-box-align: center;\n  -webkit-box-align: center;\n  padding: 12.5px 15px;\n  color: #313233;\n  font-size: 17px;\n  background: #fff;\n}\n.bank_list .bank_content .item .bank_logo {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  margin-right: 14px;\n}\n.bank_list .bank_no_data {\n  font-size: 17px;\n  color: #6c6c6c;\n  text-align: center;\n  padding-top: 89px;\n}\n","",{version:3,sources:["D:/h5_gitlab/ngcbapp_h5/src/components/hybWallet/banklist.vue"],names:[],mappings:";AACA;EACE,UAAU;CACX;AACD;EACE,kBAAkB;EAClB,uBAAuB;CACxB;AACD;EACE,gBAAgB;EAChB,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,aAAa;CACd;AACD;EACE,kBAAkB;CACnB;AACD;EACE,cAAc;EACd,qBAAqB;EACrB,iEAAiE;EACjE,4BAA4B;EAC5B,mBAAmB;EACnB,sBAAsB;EACtB,uBAAuB;EACvB,oBAAoB;EACpB,4BAA4B;EAC5B,kBAAkB;EAClB,uBAAuB;EACvB,0BAA0B;EAC1B,qBAAqB;EACrB,eAAe;EACf,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,mBAAmB;CACpB;AACD;EACE,gBAAgB;EAChB,eAAe;EACf,mBAAmB;EACnB,kBAAkB;CACnB",file:"banklist.vue",sourcesContent:["\n.bank_list {\n  /* 下拉刷新 */\n}\n.bank_list .sub_page_base {\n  min-height: 100vh;\n  box-sizing: border-box;\n}\n.bank_list .search_box {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 999;\n}\n.bank_list .bank_content {\n  padding-top: 45px;\n}\n.bank_list .bank_content .item {\n  display: flex;\n  display: -webkit-box;\n  /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */\n  /* 老版本语法: Firefox (buggy) */\n  /* 混合版本语法: IE 10 */\n  display: -webkit-flex;\n  /* 新版本语法: Chrome 21+ */\n  align-items: center;\n  -webkit-align-items: center;\n  box-align: center;\n  -moz-box-align: center;\n  -webkit-box-align: center;\n  padding: 12.5px 15px;\n  color: #313233;\n  font-size: 17px;\n  background: #fff;\n}\n.bank_list .bank_content .item .bank_logo {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  margin-right: 14px;\n}\n.bank_list .bank_no_data {\n  font-size: 17px;\n  color: #6c6c6c;\n  text-align: center;\n  padding-top: 89px;\n}\n"],sourceRoot:""}])},kFAi:function(n,t,a){var e=a("iyH9");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);a("rjj0")("4ae9fe49",e,!1,{})},"n/tq":function(n,t){}});
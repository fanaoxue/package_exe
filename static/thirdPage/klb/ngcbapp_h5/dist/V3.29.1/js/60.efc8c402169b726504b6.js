webpackJsonp([60],{"8ZmL":function(t,a){},VlGW:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("3cXf"),i=e.n(n),s=e("IHPB"),o=e.n(s),c=(e("dfh2"),e("q0Sg"),e("BxJB"),e("keCC"),e("Uk6w"),e("8ZmL"),e("p9F6")),r=e.n(c),l=e("biNP"),u=e("LY25"),d=e("n0t8"),p=e("PvpZ"),h=e("/pvS"),g=Object(u.b)("search"),b=g[0],f=g[1],v=g[2];function k(t,a,e,n){var i={attrs:n.data.attrs,on:Object(l.a)({},n.listeners,{keypress:function(t){13===t.keyCode&&(Object(p.c)(t),Object(d.a)(n,"search",a.value)),Object(d.a)(n,"keypress",t)}})},s=Object(d.b)(n);return s.attrs=void 0,t("div",r()([{class:f({"show-action":a.showAction}),style:{background:a.background}},s]),[null==e.left?void 0:e.left(),t("div",{class:f("content",a.shape)},[function(){if(e.label||a.label)return t("div",{class:f("label")},[e.label?e.label():a.label])}(),t(h.a,r()([{attrs:{type:"search",border:!1,value:a.value,leftIcon:a.leftIcon,rightIcon:a.rightIcon,clearable:a.clearable,clearTrigger:a.clearTrigger},scopedSlots:{"left-icon":e["left-icon"],"right-icon":e["right-icon"]}},i]))]),function(){if(a.showAction)return t("div",{class:f("action"),attrs:{role:"button",tabindex:"0"},on:{click:function(){e.action||(Object(d.a)(n,"input",""),Object(d.a)(n,"cancel"))}}},[e.action?e.action():a.actionText||v("cancel")])}()])}k.props={value:String,label:String,rightIcon:String,actionText:String,background:String,showAction:Boolean,clearTrigger:String,shape:{type:String,default:"square"},clearable:{type:Boolean,default:!0},leftIcon:{type:String,default:"search"}};var m=b(k),L=(e("gja/"),e("O8Zg")),S=(e("7ZMB"),e("k/cs")),_=e("yIFG"),N=(S.a,L.a,{name:"bank_list",data:function(){return{firstLoad:!1,isUpLoading:!1,upFinished:!1,bankName:"",pageNum:1,pageSize:25,listData:{}}},components:{vanNavBar:S.a,vanList:L.a,vanSearch:m},mounted:function(){this.$store.commit("updateLoadingStatus",{isLoading:!1}),this.init()},methods:{init:function(){var t=this;this.$store.commit("updateLoadingStatus",{isLoading:!0}),Object(_.b)({bankName:this.bankName,pageNum:this.pageNum,pageSize:this.pageSize}).then(function(a){if(t.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"===a.data.reCode){if(t.firstLoad=!0,t.isUpLoading=!1,null==a.data.result.wsSupportBankList||0===a.data.result.wsSupportBankList.length)return t.upFinished=!0,void(1===t.pageNum&&(t.listData=[]));var e;if(a.data.result.wsSupportBankList<t.pageSize&&(t.upFinished=!0),1===t.pageNum)t.listData=a.data.result.wsSupportBankList;else(e=t.listData).push.apply(e,o()(a.data.result.wsSupportBankList))}})},onSearch:function(){this.upFinished=!1,this.pageNum=1,this.init()},onLoadList:function(){this.pageNum++,console.log("上拉加载init加载数据"),this.init()},choiceBank:function(t){localStorage.setItem("chooseBank",i()(t)),this.$router.back()},handleBack:function(){this.$router.back()}}}),B={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bank_list"},[e("div",{staticClass:"sub_page_base"},[e("van-search",{staticClass:"search_box",attrs:{"show-action":"",placeholder:"请输入银行名称"},on:{search:t.onSearch},model:{value:t.bankName,callback:function(a){t.bankName=a},expression:"bankName"}},[e("div",{attrs:{slot:"action"},on:{click:t.onSearch},slot:"action"},[t._v("搜索")])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.firstLoad,expression:"firstLoad"}],staticClass:"bank_content"},[t.listData.length>0?e("van-list",{attrs:{finished:t.upFinished,"finished-text":"没有更多了","immediate-check":!1},on:{load:t.onLoadList},model:{value:t.isUpLoading,callback:function(a){t.isUpLoading=a},expression:"isUpLoading"}},t._l(t.listData,function(a,n){return e("div",{key:n,staticClass:"item van-hairline--top",on:{click:function(e){return t.choiceBank(a)}}},[e("img",{staticClass:"bank_logo",attrs:{src:a.bankImgUrl}}),t._v("\n          "+t._s(a.bankName)+"\n        ")])}),0):e("div",{staticClass:"bank_no_data"},[t._v("未找到您搜索的银行")])],1)],1)])},staticRenderFns:[]};var w=e("C7Lr")(N,B,!1,function(t){e("qO8g")},null,null);a.default=w.exports},qO8g:function(t,a){}});
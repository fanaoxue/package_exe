webpackJsonp([70],{"M+97":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("4qDb");var i=a("iRBI"),o=(a("yg4I"),a("1Fu7")),n=(a("7ZMB"),a("k/cs")),c=(a("y8TG"),a("Xm+1")),r=(a("U/pO"),a("/pvS")),s=a("KS8L"),l=(r.a,c.a,n.a,o.a,{name:"RecognizeInfo",data:function(){return{mobileNo:"",cartBadgeNo:"",driverName:""}},components:{vanField:r.a,vanButton:c.a,vanNavBar:n.a,vanCellGroup:o.a},computed:{},activated:function(){this.$store.commit("updateLoadingStatus",{isLoading:!1})},methods:{onClickLeft:function(){Object(s.a)(-1)},carNumIpt:function(){var t=this;this.$carIpt({dpCartNum:this.cartBadgeNo,fn:function(e){t.cartBadgeNo=e}})},validate:function(){if(""===this.mobileNo)return Object(i.a)("手机号必填!"),!1;return/^1\d{10}$/.test(this.mobileNo)?""===this.cartBadgeNo?(Object(i.a)("车牌号必填!"),!1):""===this.driverName?(Object(i.a)("司机姓名必填!"),!1):!(this.driverName.length>64)||(Object(i.a)("司机姓名长度最大不可超过64位!"),!1):(Object(i.a)("司机手机号码输入错误!"),!1)},submit:function(){this.validate()&&this.$router.push({path:"/Recognize",query:{mobileNo:this.mobileNo,cartBadgeNo:this.cartBadgeNo,driverName:this.driverName,from:"1"}})}}}),d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"RecognizeInfo"},[a("c-header",{attrs:{isShowTitle:!0}},[a("van-nav-bar",{attrs:{title:"证件识别","left-arrow":"",fixed:""},on:{"click-left":t.onClickLeft}})],1),t._v(" "),a("div",{staticClass:"sub_page_base"},[a("van-cell-group",[a("van-field",{attrs:{type:"tel",placeholder:"手机号（必填）"},scopedSlots:t._u([{key:"left-icon",fn:function(){return[a("i",{staticClass:"iconfont icondianhua1"})]},proxy:!0}]),model:{value:t.mobileNo,callback:function(e){t.mobileNo="string"==typeof e?e.trim():e},expression:"mobileNo"}}),t._v(" "),a("van-field",{attrs:{placeholder:"车牌号（必填）",readonly:""},on:{click:t.carNumIpt},scopedSlots:t._u([{key:"left-icon",fn:function(){return[a("i",{staticClass:"iconfont iconchepaihao"})]},proxy:!0}]),model:{value:t.cartBadgeNo,callback:function(e){t.cartBadgeNo=e},expression:"cartBadgeNo"}}),t._v(" "),a("van-field",{attrs:{placeholder:"司机姓名（必填）"},scopedSlots:t._u([{key:"left-icon",fn:function(){return[a("i",{staticClass:"iconfont iconsijixingming"})]},proxy:!0}]),model:{value:t.driverName,callback:function(e){t.driverName="string"==typeof e?e.trim():e},expression:"driverName"}})],1),t._v(" "),a("div",{staticClass:"btn_box"},[a("van-button",{staticClass:"btn",attrs:{size:"normal",color:"#15499a"},on:{click:t.submit}},[t._v("开始认证")])],1)],1)],1)},staticRenderFns:[]};var u=a("C7Lr")(l,d,!1,function(t){a("QmRm")},"data-v-8dcf399a",null);e.default=u.exports},QmRm:function(t,e){}});
webpackJsonp([71],{IwmQ:function(t,n,i){var e=i("mJ4L");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i("FIqI")("b359251a",e,!1,{})},mJ4L:function(t,n,i){(t.exports=i("UTlt")(!0)).push([t.i,"\n.SubmitDamage {\n  background: #fff;\n  min-height: 100vh;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n}\n.SubmitDamage /deep/ .van-field {\n  padding: 0;\n}\n.SubmitDamage .container {\n  padding: 20px 16px;\n  font-size: 15x;\n  font-weight: 500;\n  color: #202020;\n}\n.SubmitDamage .container .item {\n  padding-bottom: 10px;\n}\n.SubmitDamage .container .item input {\n  background: #fcfcfc;\n  border: 1px solid #d3d3d4;\n  border-radius: 4px;\n  width: 100px;\n  padding: 0 7px;\n}\n.SubmitDamage .container .title {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  margin-bottom: 10px;\n  line-height: 1.4;\n}\n.SubmitDamage .container .img_container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n}\n.SubmitDamage .container .img_container .img_box {\n  width: 90px;\n  height: 68px;\n  margin-bottom: 10px;\n  margin-right: 10px;\n}\n.SubmitDamage .container .img_container .img_box img {\n  width: 100%;\n  height: 100%;\n}\n.SubmitDamage .footer {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  padding: 30px 25px;\n  background: #ececec;\n}\n.SubmitDamage .footer .btn {\n  background: #15499a;\n  border-color: #15499a;\n  border-radius: 5px;\n  font-size: 16px;\n  font-weight: 500;\n}\n","",{version:3,sources:["D:/h5_gitlab/ngcbapp_h5/src/components/goodsDamage/SubmitDamage.vue"],names:[],mappings:";AACA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,6BAA6B;EAC7B,8BAA8B;EAC9B,+BAA+B;UACvB,uBAAuB;CAChC;AACD;EACE,WAAW;CACZ;AACD;EACE,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,eAAe;CAChB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,oBAAoB;EACpB,0BAA0B;EAC1B,mBAAmB;EACnB,aAAa;EACb,eAAe;CAChB;AACD;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,0BAA0B;EAC1B,4BAA4B;UACpB,oBAAoB;EAC5B,oBAAoB;EACpB,iBAAiB;CAClB;AACD;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,wBAAwB;UAChB,gBAAgB;CACzB;AACD;EACE,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,aAAa;CACd;AACD;EACE,oBAAoB;EACpB,gBAAgB;UACR,QAAQ;EAChB,mBAAmB;EACnB,oBAAoB;CACrB;AACD;EACE,oBAAoB;EACpB,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;CAClB",file:"SubmitDamage.vue",sourcesContent:["\n.SubmitDamage {\n  background: #fff;\n  min-height: 100vh;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n}\n.SubmitDamage /deep/ .van-field {\n  padding: 0;\n}\n.SubmitDamage .container {\n  padding: 20px 16px;\n  font-size: 15x;\n  font-weight: 500;\n  color: #202020;\n}\n.SubmitDamage .container .item {\n  padding-bottom: 10px;\n}\n.SubmitDamage .container .item input {\n  background: #fcfcfc;\n  border: 1px solid #d3d3d4;\n  border-radius: 4px;\n  width: 100px;\n  padding: 0 7px;\n}\n.SubmitDamage .container .title {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  margin-bottom: 10px;\n  line-height: 1.4;\n}\n.SubmitDamage .container .img_container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n}\n.SubmitDamage .container .img_container .img_box {\n  width: 90px;\n  height: 68px;\n  margin-bottom: 10px;\n  margin-right: 10px;\n}\n.SubmitDamage .container .img_container .img_box img {\n  width: 100%;\n  height: 100%;\n}\n.SubmitDamage .footer {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  padding: 30px 25px;\n  background: #ececec;\n}\n.SubmitDamage .footer .btn {\n  background: #15499a;\n  border-color: #15499a;\n  border-radius: 5px;\n  font-size: 16px;\n  font-weight: 500;\n}\n"],sourceRoot:""}])},sRGA:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i("rVsN"),a=i.n(e),o=(i("4qDb"),i("iRBI")),s=(i("CGmH"),i("OmjM")),r=(i("U/pO"),i("/pvS")),c=(i("y8TG"),i("Xm+1")),d=(i("7ZMB"),i("k/cs")),m=i("yqxf"),l=i("KS8L"),A=(d.a,c.a,r.a,s.a,{name:"SubmitDamage",data:function(){return{btnLoading:!1,dataList:[],bitian:i("jmUF"),taxWaybillId:this.$route.query.taxWaybillId||"",isFromH5:this.$route.query.isFromH5||"0",lossScenePhoto:[],lossEvidencePhoto:[],carPhoto:[],orgConfirmLossTime:"",orgLossFee:0}},components:{vanNavBar:d.a,vanButton:c.a,vanField:r.a,ImagePreview:s.a},computed:{isEdit:function(){return""==this.orgConfirmLossTime}},mounted:function(){this.$store.commit("updateLoadingStatus",{isLoading:!1}),this._getLossEnsureId()},methods:{onClickLeft:function(){this.$router.back()},goSuccess:function(){this.$router.push({path:"/SubmitDamageSuccess",query:{taxWaybillId:this.taxWaybillId,isFromH5:this.isFromH5}})},seeImg:function(t,n){Object(s.a)({images:t,startPosition:n,closeOnPopstate:!0,closeable:!0,onClose:function(){}})},validate:function(){return""==this.orgLossFee?(Object(o.a)("货损金额必填!"),!1):!(Number(this.orgLossFee)<=0)||(Object(o.a)("货损金额必须大于0!"),!1)},submitClick:function(){var t=this;this.btnLoading=!0,this.validate()?this._submitDamage().then(function(n){t.btnLoading=!1,t._submitDdMessage(n).then(function(n){t.updateApp(),t.goSuccess()})}).catch(function(){t.btnLoading=!1}):this.btnLoading=!1},_getLossEnsureId:function(){var t=this;return new a.a(function(n,i){t.$store.commit("updateLoadingStatus",{isLoading:!0}),Object(m.c)({taxWaybillId:t.taxWaybillId}).then(function(e){if(t.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"===e.data.reCode){var a=e.data.result,o=a.lossScenePhoto,s=void 0===o?[]:o,r=a.lossEvidencePhoto,c=void 0===r?[]:r,d=a.carPhoto,m=void 0===d?[]:d,l=a.orgConfirmLossTime,A=void 0===l?"":l,u=a.orgLossFee,g=void 0===u?0:u,b=a.driverLossFee,p=void 0===b?0:b,C=a.ensurerLossFee,f=void 0===C?0:C;t.lossScenePhoto=s.split(",")||[],t.lossEvidencePhoto=c.split(",")||[],t.carPhoto=m.split(",")||[],t.orgConfirmLossTime=A,Number(f)>0?t.orgLossFee=f:Number(g)>0?t.orgLossFee=g:t.orgLossFee=p,window.document.title=t.isEdit?"确认货损":"查看货损",n()}else t.$vux.toast.text(e.data.reInfo,"middle"),i()}).catch(function(n){t.$store.commit("updateLoadingStatus",{isLoading:!1}),t.$vux.toast.text(n.message,"middle"),i()})})},_submitDamage:function(){var t=this;return new a.a(function(n,i){t.$store.commit("updateLoadingStatus",{isLoading:!0}),Object(m.e)({taxWaybillId:t.taxWaybillId,orgLossFee:t.orgLossFee}).then(function(e){if(t.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"===e.data.reCode){var a=e.data.result.msg;n(void 0===a?"":a)}else t.$vux.toast.text(e.data.reInfo,"middle"),i()}).catch(function(n){t.$store.commit("updateLoadingStatus",{isLoading:!1}),t.$vux.toast.text(n.message,"middle"),i()})})},_submitDdMessage:function(t){var n=this;return new a.a(function(i,e){n.$store.commit("updateLoadingStatus",{isLoading:!0}),Object(m.f)({content:t}).then(function(t){n.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"===t.data.reCode?i():(n.$vux.toast.text(t.data.reInfo,"middle"),e())}).catch(function(t){n.$store.commit("updateLoadingStatus",{isLoading:!1}),n.$vux.toast.text(t.message,"middle"),e()})})},updateApp:function(){var t={taxWaybillId:this.taxWaybillId,type:"3",content:{lookLossFlag:"0"}};try{Object(l.g)(t)}catch(t){console.log(t)}}}}),u=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"SubmitDamage"},[i("c-header",{staticClass:"header"},[i("van-nav-bar",{attrs:{title:t.isEdit?"确认货损":"查看货损","left-arrow":""},on:{"click-left":t.onClickLeft}})],1),t._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"item"},[i("div",{staticClass:"title"},[t._v("1.货损现场照片")]),t._v(" "),i("div",{staticClass:"img_container"},t._l(t.lossScenePhoto,function(n,e){return i("div",{key:e,staticClass:"img_box",on:{click:function(n){return t.seeImg(t.lossScenePhoto,e)}}},[i("img",{attrs:{src:n,alt:"货损现场照片"}})])}),0)]),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"title"},[t._v("2.货损凭证照片")]),t._v(" "),i("div",{staticClass:"img_container"},t._l(t.lossEvidencePhoto,function(n,e){return i("div",{key:e,staticClass:"img_box",on:{click:function(n){return t.seeImg(t.lossEvidencePhoto,e)}}},[i("img",{attrs:{src:n,alt:"货损凭证照片"}})])}),0)]),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"title"},[t._v("\n        3.车身照片(需要包含前、后、45度角的照片至少各一张，车牌清晰可见）\n      ")]),t._v(" "),i("div",{staticClass:"img_container"},t._l(t.carPhoto,function(n,e){return i("div",{key:e,staticClass:"img_box",on:{click:function(n){return t.seeImg(t.carPhoto,e)}}},[i("img",{attrs:{src:n,alt:"车身照片"}})])}),0)]),t._v(" "),i("div",{staticClass:"item"},[i("div",{staticClass:"title"},[i("img",{attrs:{src:t.bitian,alt:"",width:"8",height:"8"}}),t._v(" "),i("span",[t._v("4.货损金额")])]),t._v(" "),i("van-field",{attrs:{type:"number",disabled:!t.isEdit},scopedSlots:t._u([{key:"button",fn:function(){return[i("div",[t._v("元")])]},proxy:!0}]),model:{value:t.orgLossFee,callback:function(n){t.orgLossFee=n},expression:"orgLossFee"}})],1)]),t._v(" "),t.isEdit?i("div",{staticClass:"footer"},[i("van-button",{staticClass:"btn",attrs:{type:"primary",size:"large",loading:t.btnLoading},on:{click:function(n){return t.submitClick()}}},[t._v("确认货损")])],1):t._e()],1)};u._withStripped=!0;var g={render:u,staticRenderFns:[]},b=g;var p=!1;var C=i("C7Lr")(A,b,!1,function(t){p||i("IwmQ")},null,null);C.options.__file="src/components/goodsDamage/SubmitDamage.vue";n.default=C.exports}});
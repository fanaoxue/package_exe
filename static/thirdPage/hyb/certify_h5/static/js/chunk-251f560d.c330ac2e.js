(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-251f560d"],{"01fc":function(t,o,a){t.exports=a.p+"static/img/congyezigezheng_img.40dc27be.png"},"0b87":function(t,o,a){t.exports=a.p+"static/img/shenfenzheng_img.7ff1d975.png"},"1ce7":function(t,o,a){"use strict";var e=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("van-popup",{staticClass:"cart_color_main_box",attrs:{position:"bottom",closeOnPopstate:!0},on:{"click-overlay":t.chooseColor},model:{value:t.show,callback:function(o){t.show=o},expression:"show"}},[a("div",{staticClass:"title van-hairline--bottom"},[a("p",{staticClass:"title_right"}),a("p",{staticClass:"title_con"},[t._v(t._s(t.title))]),a("p",{staticClass:"title_right",on:{click:t.chooseColor}},[t._v("取消")])]),a("div",{staticClass:"popup_content"},[a("div",{staticClass:"popup_list"},t._l(t.cartBadgeColorData,(function(o,e){return a("div",{key:e,staticClass:"row",class:{active:Number(t.colorIndex)===e},on:{click:function(o){return t.selectColor(e)}}},[a("div",{staticClass:"row_color",class:{yellow:0===e,blue:1===e,green:2===e,yellowblue:3===e,jiangreen:4===e,nongblur:5===e}},[t._v(t._s(o))]),a("van-icon",{directives:[{name:"show",rawName:"v-show",value:Number(t.colorIndex)===e,expression:"Number(colorIndex) === index"}],attrs:{name:"checked",size:"14",color:"#E4322E"}}),a("van-icon",{directives:[{name:"show",rawName:"v-show",value:Number(t.colorIndex)!==e,expression:"Number(colorIndex) !== index"}],attrs:{name:"circle",size:"14",color:"#C6C6C6"}})],1)})),0)]),a("div",{staticClass:"footer",on:{click:function(o){return t.chooseColor("1")}}},[a("van-button",{attrs:{color:"#E4322E",block:""}},[t._v(t._s(t.bottomText))])],1)])},i=[],r=(a("c5f6"),{props:{activeCartColorIndex:{type:[String,Number]},title:{type:String,default:""},bottomText:{type:String,default:"确定"},cartBadgeColorShow:{type:Boolean,default:!1},cartBadgeColorData:{type:Array}},name:"cart_color_main",data:function(){return{show:this.cartBadgeColorShow,colorIndex:this.activeCartColorIndex}},watch:{cartBadgeColorShow:function(){this.cartBadgeColorShow&&(this.colorIndex=this.activeCartColorIndex),this.show=this.cartBadgeColorShow}},methods:{selectColor:function(t){this.colorIndex=t},chooseColor:function(t){"1"===t?this.$emit("change",this.colorIndex):this.$emit("change")}}}),s=r,n=(a("c674"),a("2877")),c=Object(n["a"])(s,e,i,!1,null,"6bebe570",null);o["a"]=c.exports},"25c5":function(t,o,a){"use strict";var e=a("53c5"),i=a.n(e);i.a},"4ab1":function(t,o,a){t.exports=a.p+"static/img/daoluyunshuzheng_img.670cf5f2.png"},5020:function(t,o){t.exports="data:image/png;base64,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"},"53c5":function(t,o,a){},5788:function(t,o,a){"use strict";a.r(o);var e=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"recognize_box"},[a("v-header",{attrs:{title:"证件识别"}}),"1"!==t.info.recState||t.orderFromType?a("van-notice-bar",{attrs:{color:"#202020",background:"#fff",scrollable:!1,wrapable:"",text:"请按照示例上传清晰、无遮挡、摆正对齐的证件"}},[a("van-icon",{attrs:{slot:"left-icon",name:"warning",color:"#ffba00",size:"18"},slot:"left-icon"})],1):t._e(),a("div",{staticClass:"group mt10"},[t.info.failMsg?a("p",{staticClass:"result_msg"},[t._v(t._s(t.info.failMsg))]):t._e(),a("recognize-upload",{attrs:{cardInfo:t.idCardInfo,recState:t.info.recState},on:{callBackGoRecognize:t.goRecognize,callBackUploadImg:t.uploadImg}}),a("recognize-upload",{attrs:{cardInfo:t.idCardReverseInfo,recState:t.info.recState},on:{callBackGoRecognize:t.goRecognize,callBackUploadImg:t.uploadImg}}),a("recognize-upload",{attrs:{cardInfo:t.driveCardInfo,recState:t.info.recState},on:{callBackGoRecognize:t.goRecognize,callBackUploadImg:t.uploadImg}}),a("recognize-upload",{attrs:{cardInfo:t.drivingCardInfo,recState:t.info.recState},on:{callBackGoRecognize:t.goRecognize,callBackUploadImg:t.uploadImg}})],1),a("van-field",{staticClass:"cell_main",attrs:{placeholder:"请选择车牌颜色","input-align":"right",readonly:""},on:{click:t.handleChangeCartColor},model:{value:t.activeCartColorName,callback:function(o){t.activeCartColorName=o},expression:"activeCartColorName"}},[a("p",{staticClass:"cell_label",attrs:{slot:"label"},slot:"label"},[a("span",{staticClass:"cell_yellow"},[t._v("*")]),t._v("车牌颜色\n    ")]),a("p",{attrs:{slot:"right-icon"},slot:"right-icon"},[a("van-icon",{attrs:{name:"arrow"}})],1)]),"1"===t.info.carFlag?a("div",{staticClass:"upload_yunzheng"},[a("van-cell",{staticClass:"cell_main mt10",on:{click:function(o){t.showHideControlCarBody=!t.showHideControlCarBody}}},[a("p",{staticClass:"cell_label",attrs:{slot:"title"},slot:"title"},[a("span",{staticClass:"cell_yellow"},[t._v("*")]),t._v("车身图片\n      ")]),a("p",{attrs:{slot:"right-icon"},slot:"right-icon"},[a("span",{staticClass:"yunzheng_img",class:{zhankai:!t.showHideControlCarBody}})])]),a("div",{staticClass:"yunzheng_group",class:{animate:!t.showHideControlCarBody}},[a("recognize-car-body",{attrs:{carBodyData:t.carBodyInfo},on:{callBackImgJson:t.uploadImg}})],1)],1):t._e(),a("div",{staticClass:"upload_yunzheng"},[a("van-cell",{staticClass:"cell_main mt10",on:{click:function(o){t.showHideControl=!t.showHideControl}}},[a("p",{staticClass:"cell_label",attrs:{slot:"title"},slot:"title"},["1"===t.info.rtcFlag||"1"===t.info.tqcFlag?a("span",{staticClass:"cell_yellow"},[t._v("*")]):t._e(),t._v("上传运证图片\n      ")]),a("p",{attrs:{slot:"right-icon"},slot:"right-icon"},[a("span",{staticClass:"yunzheng_img",class:{zhankai:!t.showHideControl}})])]),a("div",{staticClass:"yunzheng_group",class:{animate:!t.showHideControl}},[a("recognize-yunzheng",{attrs:{yuzhengData:t.rtcInfo},on:{callBackImgJson:t.uploadImg}}),a("recognize-yunzheng",{attrs:{yuzhengData:t.tqcInfo},on:{callBackImgJson:t.uploadImg}})],1)],1),!t.info.recState||"1"===t.info.recState&&"0"!==t.isUploadReverse&&!t.orderFromType&&!t.isReviseYunZhengFlag&&t.isRtcTqcPhoto()&&t.isCarBodyPhoto()?t._e():a("div",{staticClass:"pub_fixed_btn"},[t.orderFromType&&"0"===t.noRecognizeBtn?a("van-button",{staticClass:"item btn1",attrs:{color:"#ffffff"},on:{click:t.noRecognize}},[t._v("暂不识别")]):t._e(),a("van-button",{staticClass:"item btn2",attrs:{type:t.sendAble?"primary":"danger"},on:{click:t.submit}},[t._v("提交")])],1),a("cart-badge-color",{attrs:{cartBadgeColorData:t.cartBadgeColorData,cartBadgeColorShow:t.cartBadgeColorShow,activeCartColorIndex:t.activeCartColorIndex,title:"车牌颜色"},on:{change:t.cartColorChange}})],1)},i=[],r=(a("28a5"),a("c5f6"),a("480b"),a("a37c")),s=a("77ea"),n=a("22b6"),c=a("4676"),l=a("1ce7"),d=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"recognize_upload_box"},["-1"===t.cardInfo.state?e("div",{staticClass:"item"},[e("div",{staticClass:"square upload",on:{click:function(o){return t.upload(t.cardInfo.type)}}},[e("i",{staticClass:"iconfont icon-ic_join_dialing_norm"}),e("p",{staticClass:"text"},[t._v(t._s(t.cardInfo.title))])]),e("div",{staticClass:"square example"},["1"===t.cardInfo.type?e("img",{staticClass:"img",attrs:{src:a("0b87")}}):t._e(),"4"===t.cardInfo.type?e("img",{staticClass:"img",attrs:{src:a("8c44")}}):t._e(),"2"===t.cardInfo.type?e("img",{staticClass:"img",attrs:{src:a("cdee")}}):t._e(),"3"===t.cardInfo.type?e("img",{staticClass:"img",attrs:{src:a("e4af")}}):t._e(),e("img",{staticClass:"stamp",attrs:{src:a("5020")}})])]):"0"===t.cardInfo.state?e("div",{staticClass:"item"},[e("div",{staticClass:"square img_show",on:{click:function(o){return t.previewImg(t.cardInfo.photoUrl)}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.cardInfo.photoUrl,expression:"cardInfo.photoUrl"}],key:t.cardInfo.photoUrl,staticClass:"img"})]),e("div",{staticClass:"square sucess"},[t._m(0),e("p",{staticClass:"sucess_text"},[t._v(t._s(t.cardInfo.msg))]),"1"!==t.recState?e("div",{staticClass:"sucess_btn"},[e("p",{staticClass:"recognize_btn",on:{click:function(o){return t.upload(t.cardInfo.type)}}},[t._v("重新上传")])]):t._e()])]):"2"===t.cardInfo.state?e("div",{staticClass:"item diff first"},[t._m(1),e("p",{staticClass:"diff_text"},[t._v(t._s(t.cardInfo.msg))]),e("p",{staticClass:"diff_btn",on:{click:function(o){return t.upload(t.cardInfo.type)}}},[t._v("重新上传")])]):"-2"===t.cardInfo.state?e("div",{staticClass:"item"},[e("div",{staticClass:"square img_show",on:{click:function(o){return t.previewImg(t.cardInfo.photoUrl)}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.cardInfo.photoUrl,expression:"cardInfo.photoUrl"}],key:t.cardInfo.photoUrl,staticClass:"img"})]),e("div",{staticClass:"square recognize"},[e("div",{staticClass:"recognize_title"},[e("i",{staticClass:"iconfont icon-tishi"}),"1"===t.cardInfo.type||"4"===t.cardInfo.type?e("span",{staticClass:"text"},[t._v("身份证未识别！")]):t._e(),"2"===t.cardInfo.type?e("span",{staticClass:"text"},[t._v("驾驶证未识别！")]):t._e(),"3"===t.cardInfo.type?e("span",{staticClass:"text"},[t._v("行驶证未识别！")]):t._e()]),e("div",{staticClass:"recognize_btn_group"},[e("p",{staticClass:"recognize_btn",on:{click:function(o){return t.goRecognize({photoType:t.cardInfo.type,photoUrl:t.cardInfo.photoUrl})}}},[t._v("去识别")]),e("p",{staticClass:"recognize_btn",on:{click:function(o){return t.upload(t.cardInfo.type)}}},[t._v("重新上传")])])])]):e("div",{staticClass:"item"},[e("div",{staticClass:"square img_show",on:{click:function(o){return t.upload(t.cardInfo.type)}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.cardInfo.photoUrl,expression:"cardInfo.photoUrl"}],key:t.cardInfo.photoUrl,staticClass:"img"}),t._m(2)]),e("div",{staticClass:"square error"},[t._m(3),e("p",{staticClass:"error_text"},[t._v(t._s(t.cardInfo.msg))])])])])},h=[function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"sucess_title"},[a("i",{staticClass:"iconfont icon-wancheng-copy"}),a("span",{staticClass:"text"},[t._v("识别成功！")])])},function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"diff_title"},[a("i",{staticClass:"iconfont icon-shanchu1"}),a("span",{staticClass:"text"},[t._v("对比不一致！")])])},function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"master"},[a("i",{staticClass:"iconfont icon-yuanxunhuanbofang"}),a("p",{staticClass:"text"},[t._v("重新上传")])])},function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"error_title"},[a("i",{staticClass:"iconfont icon-shanchu1"}),a("span",{staticClass:"text"},[t._v("识别失败！")])])}],f=a("2f14"),p={name:"recognize_upload",props:{cardInfo:{type:Object},recState:{type:String}},data:function(){return{}},methods:{previewImg:function(t){Object(f["j"])((function(){Object(f["f"])(t,0)}),200)},goRecognize:function(t){this.$emit("callBackGoRecognize",t)},upload:function(t){this.$emit("callBackUploadImg",t)}}},g=p,u=(a("25c5"),a("2877")),v=Object(u["a"])(g,d,h,!1,null,"80b10860",null),C=v.exports,m=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"item"},[t.yuzhengData.photoUrl?t._e():e("div",{staticClass:"group_item"},[e("div",{staticClass:"upload square",on:{click:function(o){return t.uploadImg(t.yuzhengData.type)}}},[e("i",{staticClass:"iconfont icon-ic_join_dialing_norm"}),e("p",{staticClass:"text"},[t._v(t._s(t.yuzhengData.title))])])]),t.yuzhengData.photoUrl?e("div",{staticClass:"group_item"},[e("div",{staticClass:"square img_show",on:{click:function(o){return t.previewImg(t.yuzhengData.photoUrl)}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.yuzhengData.photoUrl,expression:"yuzhengData.photoUrl"}],key:t.yuzhengData.photoUrl,staticClass:"img"})]),e("p",{staticClass:"reset_upload",on:{click:function(o){return t.uploadImg(t.yuzhengData.type)}}},[t._v("重新上传")])]):t._e(),e("div",{staticClass:"example square"},[e("img",{directives:[{name:"show",rawName:"v-show",value:"5"===t.yuzhengData.type,expression:"yuzhengData.type === '5'"}],staticClass:"img",attrs:{src:a("4ab1")}}),e("img",{directives:[{name:"show",rawName:"v-show",value:"6"===t.yuzhengData.type,expression:"yuzhengData.type === '6'"}],staticClass:"img",attrs:{src:a("01fc")}}),e("img",{staticClass:"stamp",attrs:{src:a("5020")}})])])},I=[],y={components:{},name:"recognize-yunzheng",props:{yuzhengData:{type:Object}},data:function(){return{}},watch:{},computed:{},methods:{previewImg:function(t){Object(f["j"])((function(){Object(f["f"])(t,0)}),200)},uploadImg:function(t){this.$emit("callBackImgJson",t)}},created:function(){},mounted:function(){}},_=y,b=(a("e087"),Object(u["a"])(_,m,I,!1,null,"3516837c",null)),w=b.exports,U=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"item"},[t.carBodyData.photoUrl?t._e():a("div",{staticClass:"group_item"},[a("div",{staticClass:"upload square",on:{click:function(o){return t.uploadImg(t.carBodyData.type)}}},[a("i",{staticClass:"iconfont icon-ic_join_dialing_norm"}),a("p",{staticClass:"text"},[t._v(t._s(t.carBodyData.title))])])]),t.carBodyData.photoUrl?a("div",{staticClass:"group_item"},[a("div",{staticClass:"square img_show",on:{click:function(o){return t.previewImg(t.carBodyData.photoUrl)}}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.carBodyData.photoUrl,expression:"carBodyData.photoUrl"}],key:t.carBodyData.photoUrl,staticClass:"img"})]),a("p",{staticClass:"reset_upload",on:{click:function(o){return t.uploadImg(t.carBodyData.type)}}},[t._v("重新上传")])]):t._e(),a("div",{staticClass:"example square noborder"},[t._v("\n    请保持照片的清晰，完整避免反光\n  ")])])},z=[],B={components:{},props:{carBodyData:{type:Object}},name:"",data:function(){return{}},watch:{},computed:{},methods:{previewImg:function(t){Object(f["j"])((function(){Object(f["f"])(t,0)}),200)},uploadImg:function(t){this.$emit("callBackImgJson",t)}},created:function(){},mounted:function(){}},x=B,k=(a("8925"),Object(u["a"])(x,U,z,!1,null,"8553ef9c",null)),N=k.exports,R={name:"recognize",components:{"van-notice-bar":r["a"],CartBadgeColor:l["a"],RecognizeUpload:C,RecognizeYunzheng:w,RecognizeCarBody:N},data:function(){return{taxWaybillId:this.$route.query.tax_waybill_id||"",skipPage:this.$route.query.skip_page||"",noRecognizeBtn:this.$route.query.no_recognize_btn||"0",fromType:this.$route.query.from_type||"",waybillFlag:this.$route.query.waybill_flag||"",driverName:"",mobileNo:"",cartBadgeNo:"",orgId:"",gcbUserId:"",isUploadReverse:"",photoType:"",cartBadgeColorShow:!1,cartBadgeColorData:c["m"],activeCartColorIndex:"0",info:{},idCardInfo:{type:"1",title:"上传身份证正面",state:"-1",photoUrl:"",msg:"",ocrIdCardId:""},driveCardInfo:{type:"2",title:"上传驾驶证正面",state:"-1",photoUrl:"",msg:"",ocrDriverId:""},drivingCardInfo:{type:"3",title:"上传行驶证正面",state:"-1",photoUrl:"",msg:"",ocrDrivingId:""},idCardReverseInfo:{type:"4",title:"上传身份证反面",state:"-1",photoUrl:"",msg:"",ocrIdCardReverseId:""},rtcInfo:{title:"上传道路运输证",type:"5",photoUrl:""},tqcInfo:{title:"上传从业资格证",type:"6",photoUrl:""},carBodyInfo:{title:"上传车身照片",type:"7",photoUrl:""},showHideControl:!0,isReviseYunZhengFlag:!1,showHideControlCarBody:!0,isSending:!1}},computed:{activeCartColorName:function(){return this.cartBadgeColorData[this.activeCartColorIndex]},sendAble:function(){var t=!("-1"===this.idCardInfo.state&&"-1"===this.driveCardInfo.state&&"-1"===this.drivingCardInfo.state&&"-1"===this.idCardReverseInfo.state);return t&&this.isRtcTqcPhoto()&&this.gcbUserId&&this.orgId&&this.isCarBodyPhoto()},orderFromType:function(){return"1"===this.fromType||"3"===this.fromType||"10"===this.fromType}},methods:{noRecognize:function(){"0"!==this.skipPage?"1"===this.skipPage&&(window.location.href="".concat(c["l"],"#/carriage_protocol_description?tax_waybill_id=").concat(this.taxWaybillId,"&from_type=").concat(this.fromType,"&waybill_flag=").concat(this.waybillFlag,"&user_name=").concat(this.idCardInfo.name||"","&id_card=").concat(this.idCardInfo.idCard||"")):window.location.href="".concat(c["l"],"#/complete_info?tax_waybill_id=").concat(this.taxWaybillId,"&from_type=").concat(this.fromType,"&waybill_flag=").concat(this.waybillFlag)},isRtcTqcPhoto:function(){return this.info&&"1"===this.info.rtcFlag&&"1"===this.info.tqcFlag?this.rtcInfo.photoUrl&&this.tqcInfo.photoUrl:this.info&&"1"===this.info.rtcFlag?this.rtcInfo.photoUrl:!this.info||"1"!==this.info.tqcFlag||this.tqcInfo.photoUrl},isCarBodyPhoto:function(){return!this.info||"1"!==this.info.carFlag||this.carBodyInfo.photoUrl},cartColorChange:function(t){isNaN(t)||(this.activeCartColorIndex=t),this.isReviseYunZhengFlag=!0,this.cartBadgeColorShow=!1},handleChangeCartColor:function(){"1"!==this.info.recState&&(this.cartBadgeColorShow=!0)},initHandle:function(){var t=this;this.$toast.loading({message:"加载中"}),Object(n["a"])({sid:"1048001",data:{taxWaybillId:this.taxWaybillId,fromType:this.fromType},encrypt:"0"}).then((function(o){if("0"===o.data.reCode){var a=o.data.result;t.info=a,t.driverName=a.driverName,t.mobileNo=a.mobileNo,t.cartBadgeNo=a.cartBadgeNo,t.orgId=a.orgId,t.gcbUserId=a.userId,t.idCardInfo=Object.assign({},t.idCardInfo,a.idCard),t.driveCardInfo=Object.assign({},t.driveCardInfo,a.driveCard),t.drivingCardInfo=Object.assign({},t.drivingCardInfo,a.drivingCard),t.idCardReverseInfo=Object.assign({},t.idCardReverseInfo,a.idCardReverse),t.rtcInfo=Object.assign({},t.rtcInfo,{photoUrl:a.rtcPhoto}),t.tqcInfo=Object.assign({},t.tqcInfo,{photoUrl:a.tqcPhoto}),t.carBodyInfo=Object.assign({},t.carBodyInfo,{photoUrl:a.carPhoto}),t.isUploadReverse=a.isUploadReverse||"","0"===t.idCardInfo.state&&(t.skipPage="1"),"1"!==t.info.rtcFlag&&"1"!==t.info.tqcFlag||(t.showHideControl=!1),"1"===t.info.carFlag&&(t.showHideControlCarBody=!1),t.info.cartBadgeColor&&Number(t.info.cartBadgeColor)<=t.cartBadgeColorData.length&&(t.activeCartColorIndex=t.info.cartBadgeColor),"0"===t.idCardInfo.state&&"0"===t.driveCardInfo.state&&"0"===t.drivingCardInfo.state&&"0"===t.idCardReverseInfo.state&&t.orderFromType&&(Object(s["r"])(),t.$dialog.confirm({title:"提示",message:"证件已识别，请点击【提交】即可完成证件识别",confirmButtonText:"提交",cancelButtonText:"修改证件"}).then((function(){t.submit("protocol")})))}}))},uploadImg:function(t){if(this.photoType=t,"5"!==t&&"6"!==t&&"7"!==t)return"4"===t?"2"===this.idCardInfo.state?void this.$toast("身份证与运单姓名不一致，请重新上传或联系调度修改运单姓名"):"0"===this.idCardInfo.state&&this.idCardInfo.idCard?void this.uploadAndOcr(t):void this.$toast("请先上传身份证正面图片"):void this.uploadAndOcr(t);Object(s["g"])({cameraType:"7",num:1,fileType:"1",triggerType:"2"})},uploadAndOcr:function(t){this.gcbUserId&&this.orgId?Object(s["a"])({type:t,wanbillInfo:{driverName:this.driverName,driverMobileNo:this.mobileNo,cartBadgeNo:this.cartBadgeNo,idCard:this.idCardInfo.idCard,userId:this.gcbUserId,orgId:this.orgId}}):this.$dialog.alert({title:"提示",message:"没有获取到企业信息，请重试",confirmButtonText:"好的"})},receviveImgJson:function(t){var o=JSON.parse(t),a=o.imgData[0];this.orcRecognize(a)},orcRecognize:function(t){var o=t.split(",")[0];if(Object(s["o"])()&&(o=t),"5"===this.photoType)return this.isReviseYunZhengFlag=!0,void(this.rtcInfo=Object.assign({},this.rtcInfo,{photoUrl:o}));if("6"===this.photoType)return this.isReviseYunZhengFlag=!0,void(this.tqcInfo=Object.assign({},this.tqcInfo,{photoUrl:o}));if("7"===this.photoType)return this.isReviseYunZhengFlag=!0,void(this.carBodyInfo=Object.assign({},this.carBodyInfo,{photoUrl:o}));var a={photoType:this.photoType,photoUrl:o};("1"===a.photoType||"4"===a.photoType&&this.idCardInfo.idCard)&&this.goRecognize(a)},goRecognize:function(t){var o=this;t.photoUrl&&"null"!==t.photoUrl?this.gcbUserId&&this.orgId?(this.$toast.loading({message:"正在识别"}),Object(n["a"])({sid:"1048003",data:{photoUrl:t.photoUrl,photoType:t.photoType,source:"5",waybillInfo:{driverName:this.driverName,driverMobileNo:this.mobileNo,cartBadgeNo:this.cartBadgeNo,idCard:this.idCardInfo.idCard,userId:this.gcbUserId,orgId:this.orgId}},encrypt:"0"}).then((function(a){if("0"===a.data.reCode){var e=a.data.result;e.type=t.photoType,e.photoUrl=t.photoUrl,o.getResult(JSON.stringify(e))}}))):this.$dialog.alert({title:"提示",message:"没有获取到企业信息，请重试",confirmButtonText:"好的"}):this.$dialog.alert({title:"提示",message:"加载证件图片失败，请重新上传",confirmButtonText:"好的"})},getResult:function(t){var o,a=this,e=JSON.parse(decodeURI(t)),i={};switch(i.state=e.state,i.cartBadgeNo=e.cartBadgeNo,i.name=e.name,i.idCard=e.idCard,i.photoUrl=e.photoUrl,i.msg=e.msg,console.log("getResult",e),e.type){case"1":i.ocrIdCardId=e.ocrId,this.idCardInfo=Object.assign({},this.idCardInfo,i);break;case"2":i.ocrDriverId=e.ocrId,this.driveCardInfo=Object.assign({},this.driveCardInfo,i);break;case"3":i.ocrDrivingId=e.ocrId,this.drivingCardInfo=Object.assign({},this.drivingCardInfo,i);break;case"4":i.ocrIdCardReverseId=e.ocrId,this.idCardReverseInfo=Object.assign({},this.idCardReverseInfo,i);break}"1"!==i.type&&"2"!==i.type||"2"!==i.state||(o="1"===i.type?"身份证":"驾驶证",this.$dialog.alert({title:"异常提示",message:'<div class="yc_tip"><p style="color: #D8070A">'.concat(o,"信息与运单姓名不一致！</p><p>身份证姓名: ").concat(e.name,"</p><p>运单姓名: ").concat(this.driverName,"</p><p>请重新识别或联系调度修改运单姓名</p></div>"),confirmButtonText:"重新识别"}).then((function(){a.uploadImg(i.type)})))},submit:function(t){var o=this;this.sendAble&&!this.isSending&&("0"!==this.idCardInfo.state||"0"===this.idCardReverseInfo.state?"2"!==this.idCardInfo.state&&"2"!==this.driveCardInfo.state?"1"!==this.info.rtcFlag||this.rtcInfo.photoUrl?"1"!==this.info.tqcFlag||this.tqcInfo.photoUrl?"1"!==this.info.carFlag||this.carBodyInfo.photoUrl?(this.isSending=!0,this.$toast.loading({message:"加载中..."}),Object(n["a"])({sid:"1048002",data:{orgId:this.orgId,taxWaybillId:this.taxWaybillId,gcbUserId:this.gcbUserId,mobileNo:this.mobileNo,driverMobileNo:this.mobileNo,driverName:this.idCardInfo.name,idCard:this.idCardInfo.idCard,cartBadgeNo:this.cartBadgeNo,idCardFrontPhoto:this.idCardInfo.photoUrl,idCardFrontPhotoZooms:this.idCardInfo.photoUrl,ocrIdCardId:this.idCardInfo.ocrIdCardId,idCardReversePhoto:this.idCardReverseInfo.photoUrl,idCardReversePhotoZooms:this.idCardReverseInfo.photoUrl,ocrIdCardReverseId:this.idCardReverseInfo.ocrIdCardReverseId,drivingPermitPhoto:this.drivingCardInfo.photoUrl,drivingPermitPhotoZooms:this.drivingCardInfo.photoUrl,ocrDrivingId:this.drivingCardInfo.ocrDrivingId,driverLicencePhoto:this.driveCardInfo.photoUrl,driverLicencePhotoZooms:this.driveCardInfo.photoUrl,ocrDriverId:this.driveCardInfo.ocrDriverId,source:"5",idState:this.idCardInfo.state,driverState:this.driveCardInfo.state,drivingState:this.drivingCardInfo.state,idReverseState:this.idCardReverseInfo.state,cartBadgeColor:this.activeCartColorIndex,rtcPhoto:this.rtcInfo.photoUrl,rtcPhotoZooms:this.rtcInfo.photoUrl,tqcPhoto:this.tqcInfo.photoUrl,tqcPhotoZooms:this.tqcInfo.photoUrl,carPhoto:this.carBodyInfo.photoUrl,carPhotoZooms:this.carBodyInfo.photoUrl},encrypt:"0"}).then((function(a){if(o.isSending=!1,"0"===a.data.reCode){var e=a.data.result;Object(s["r"])(),"protocol"===t?window.location.href="".concat(c["l"],"#/carriage_protocol_description?tax_waybill_id=").concat(o.taxWaybillId,"&from_type=").concat(o.fromType,"&waybill_flag=").concat(o.waybillFlag,"&user_name=").concat(o.idCardInfo.name,"&id_card=").concat(o.idCardInfo.idCard):("0"===o.idCardInfo.state&&(o.skipPage="1"),o.$router.push("/recognize_result?tax_waybill_id=".concat(o.taxWaybillId,"&skip_page=").concat(o.skipPage,"&from_type=").concat(o.fromType,"&state=").concat(e.state,"&user_name=").concat(encodeURI(o.idCardInfo.name),"&id_card=").concat(encodeURI(o.idCardInfo.idCard))))}})).catch((function(){o.isSending=!1}))):this.$toast("请上传车身照片"):this.$toast("请上传从业资格证"):this.$toast("请上传道路运输证"):this.$dialog.alert({message:"您认证的姓名与运单中的姓名不一致,请联系调度修改运单",confirmButtonText:"知道了"}):this.$toast("请上传本人的身份证反面图片"))}},created:function(){this.initHandle(),window.AppJSApi_BackAppBillAuthenticationResult=this.getResult,window.AppJSApi_BackAppPhotoJson=this.receviveImgJson}},S=R,P=(a("a700"),Object(u["a"])(S,e,i,!1,null,"4daa6dd8",null));o["default"]=P.exports},8925:function(t,o,a){"use strict";var e=a("a05e"),i=a.n(e);i.a},"8c44":function(t,o,a){t.exports=a.p+"static/img/shenfenzhengfan_img.96cc9d0d.png"},"9d7e":function(t,o,a){},a05e:function(t,o,a){},a700:function(t,o,a){"use strict";var e=a("9d7e"),i=a.n(e);i.a},aa77:function(t,o,a){var e=a("5ca1"),i=a("be13"),r=a("79e5"),s=a("fdef"),n="["+s+"]",c="​",l=RegExp("^"+n+n+"*"),d=RegExp(n+n+"*$"),h=function(t,o,a){var i={},n=r((function(){return!!s[t]()||c[t]()!=c})),l=i[t]=n?o(f):s[t];a&&(i[a]=l),e(e.P+e.F*n,"String",i)},f=h.trim=function(t,o){return t=String(i(t)),1&o&&(t=t.replace(l,"")),2&o&&(t=t.replace(d,"")),t};t.exports=h},c5f6:function(t,o,a){"use strict";var e=a("7726"),i=a("69a8"),r=a("2d95"),s=a("5dbc"),n=a("6a99"),c=a("79e5"),l=a("9093").f,d=a("11e9").f,h=a("86cc").f,f=a("aa77").trim,p="Number",g=e[p],u=g,v=g.prototype,C=r(a("2aeb")(v))==p,m="trim"in String.prototype,I=function(t){var o=n(t,!1);if("string"==typeof o&&o.length>2){o=m?o.trim():f(o,3);var a,e,i,r=o.charCodeAt(0);if(43===r||45===r){if(a=o.charCodeAt(2),88===a||120===a)return NaN}else if(48===r){switch(o.charCodeAt(1)){case 66:case 98:e=2,i=49;break;case 79:case 111:e=8,i=55;break;default:return+o}for(var s,c=o.slice(2),l=0,d=c.length;l<d;l++)if(s=c.charCodeAt(l),s<48||s>i)return NaN;return parseInt(c,e)}}return+o};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(t){var o=arguments.length<1?0:t,a=this;return a instanceof g&&(C?c((function(){v.valueOf.call(a)})):r(a)!=p)?s(new u(I(o)),a,g):I(o)};for(var y,_=a("9e1e")?l(u):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;_.length>b;b++)i(u,y=_[b])&&!i(g,y)&&h(g,y,d(u,y));g.prototype=v,v.constructor=g,a("2aba")(e,p,g)}},c674:function(t,o,a){"use strict";var e=a("d77c"),i=a.n(e);i.a},cdee:function(t,o,a){t.exports=a.p+"static/img/jiashizheng_img.cb0f1fa8.png"},d77c:function(t,o,a){},e087:function(t,o,a){"use strict";var e=a("f4d4"),i=a.n(e);i.a},e4af:function(t,o,a){t.exports=a.p+"static/img/xingshizheng_img.d9140a29.png"},f4d4:function(t,o,a){},fdef:function(t,o){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
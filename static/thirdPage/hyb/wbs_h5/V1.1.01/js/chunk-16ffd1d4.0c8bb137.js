(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16ffd1d4"],{1745:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"upload_item"},[t._l(t.urlArr,(function(e,a){return n("div",{key:a,staticClass:"item",class:{item_multiple:t.maxLen>1}},[n("div",{staticClass:"img_wrapper",on:{click:function(e){return t.previewImg(a)}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e,expression:"item"}],key:e,staticClass:"img"})]),"1"===t.canModifyPhoto?n("div",{staticClass:"iconfont_wrapper",on:{click:function(e){return t.removeImages(a)}}},[n("van-icon",{attrs:{name:"clear"}})],1):t._e()])})),n("div",{directives:[{name:"show",rawName:"v-show",value:"1"===t.canModifyPhoto&&(t.urlArr.length!==t.maxLen||!t.urlArr.length),expression:"canModifyPhoto === '1' && (urlArr.length !== maxLen || !urlArr.length )"}],staticClass:"item",class:{item_multiple:t.maxLen>1},on:{click:t.addUploadImg}},[n("div",{staticClass:"img_wrapper",class:{upload_btn:"0"===t.type,upload_btn_unloading:"1"===t.type,upload_no_btn:"3"===t.type}})])],2)},i=[],o=(n("c5f6"),n("2f14")),r={components:{},props:{maxLen:{type:Number,default:1},urlArr:{type:Array,default:function(){return[]}},canModifyPhoto:{type:String,default:"1"},type:{type:String,default:"0"}},name:"",data:function(){return{}},watch:{},computed:{},methods:{addUploadImg:function(){this.$emit("change",this.type)},removeImages:function(t){this.$emit("remove",this.type,t)},previewImg:function(t){var e=this.urlArr.join(",");Object(o["f"])(e,t)}},created:function(){},mounted:function(){}},c=r,s=(n("fd2e"),n("2877")),u=Object(s["a"])(c,a,i,!1,null,"0906233e",null);e["a"]=u.exports},4085:function(t,e,n){},"4e2c":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-dialog",{staticClass:"input_confirm",attrs:{title:t.confirmTitle,"show-cancel-button":""},on:{confirm:t.onInputConfirm,cancel:t.onInputCancel},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("van-field",{ref:"confirm_input",attrs:{placeholder:t.confirmPlaceholder,type:"number",clearable:""},scopedSlots:t._u([{key:"button",fn:function(){return[n("p",{staticClass:"input_right"},[t._v(t._s(t.goodsAmountType))])]},proxy:!0}]),model:{value:t.amountValue,callback:function(e){t.amountValue=e},expression:"amountValue"}})],1)},i=[],o=(n("c5f6"),{components:{},props:{confirmObj:{type:Object,default:function(){return{}}},modifyAmountPopop:{type:Boolean,default:!1}},name:"modify_amount_popup",data:function(){return{show:this.modifyAmountPopop,confirmTitle:"",confirmPlaceholder:"",goodsAmountType:"",amountValue:""}},watch:{modifyAmountPopop:function(){var t=this;this.show=this.modifyAmountPopop,this.show&&this.$nextTick((function(){t.$refs.confirm_input.focus()}))},confirmObj:function(t){this.goodsAmountType=t.modifyAmountType,this.amountValue=t.modifyAmountNum,"0"===t.modifyType?(this.confirmTitle="装货数量",this.confirmPlaceholder="请输入装货数量"):(this.confirmTitle="卸货数量",this.confirmPlaceholder="请输入卸货数量")}},computed:{},methods:{onInputCancel:function(){this.$emit("change",{show:!1,cancelBtn:!0})},onInputConfirm:function(){this.$emit("change",{show:!1,cancelBtn:!1,value:Number(this.amountValue)})}},created:function(){},mounted:function(){}}),r=o,c=(n("b4f5"),n("2877")),s=Object(c["a"])(r,a,i,!1,null,"142ae01f",null);e["a"]=s.exports},"6a64":function(t,e,n){},a711:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"example_wrapper"},[n("div",{staticClass:"line"}),n("p",{staticClass:"text"},[t._v("拍摄示例")]),n("div",{staticClass:"img_wrapper"},[n("div",{staticClass:"img",on:{click:function(e){return t.previewImg(t.exampleUrl)}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.exampleUrl,expression:"exampleUrl"}]})]),n("div",{staticClass:"list"},[n("p",{staticClass:"item"},[n("van-icon",{attrs:{name:"checked",color:"#a4d178"}}),n("span",{staticClass:"label"},[t._v("保证光源充足")])],1),n("p",{staticClass:"item"},[n("van-icon",{attrs:{name:"checked",color:"#a4d178"}}),n("span",{staticClass:"label"},[t._v("磅单拍摄完整清晰")])],1),t.tip3?n("p",{staticClass:"item"},[n("van-icon",{attrs:{name:"checked",color:"#a4d178"}}),n("span",{staticClass:"label"},[t._v("磅单需单张拍摄")])],1):t._e()])])])},i=[],o=n("4676"),r=n("2f14"),c={components:{},props:{tip3:{type:Boolean,default:!1}},name:"example_picture",data:function(){return{exampleUrl:o["b"]}},watch:{},computed:{},methods:{previewImg:function(t){Object(r["f"])(t,0)}},created:function(){},mounted:function(){}},s=c,u=(n("b898"),n("2877")),l=Object(u["a"])(s,a,i,!1,null,"bc55660e",null);e["a"]=l.exports},aa77:function(t,e,n){var a=n("5ca1"),i=n("be13"),o=n("79e5"),r=n("fdef"),c="["+r+"]",s="​",u=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),f=function(t,e,n){var i={},c=o((function(){return!!r[t]()||s[t]()!=s})),u=i[t]=c?e(m):r[t];n&&(i[n]=u),a(a.P+a.F*c,"String",i)},m=f.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=f},b4f5:function(t,e,n){"use strict";var a=n("4085"),i=n.n(a);i.a},b898:function(t,e,n){"use strict";var a=n("6a64"),i=n.n(a);i.a},c5f6:function(t,e,n){"use strict";var a=n("7726"),i=n("69a8"),o=n("2d95"),r=n("5dbc"),c=n("6a99"),s=n("79e5"),u=n("9093").f,l=n("11e9").f,f=n("86cc").f,m=n("aa77").trim,p="Number",d=a[p],h=d,v=d.prototype,y=o(n("2aeb")(v))==p,_="trim"in String.prototype,g=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=_?e.trim():m(e,3);var n,a,i,o=e.charCodeAt(0);if(43===o||45===o){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+e}for(var r,s=e.slice(2),u=0,l=s.length;u<l;u++)if(r=s.charCodeAt(u),r<48||r>i)return NaN;return parseInt(s,a)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof d&&(y?s((function(){v.valueOf.call(n)})):o(n)!=p)?r(new h(g(e)),n,d):g(e)};for(var b,w=n("9e1e")?u(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;w.length>I;I++)i(h,b=w[I])&&!i(d,b)&&f(d,b,l(h,b));d.prototype=v,v.constructor=d,n("2aba")(a,p,d)}},ef62:function(t,e,n){},fd2e:function(t,e,n){"use strict";var a=n("ef62"),i=n.n(a);i.a},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
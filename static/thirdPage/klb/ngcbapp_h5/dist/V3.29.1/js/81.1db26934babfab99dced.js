webpackJsonp([81],{"2Ybf":function(t,a){},mNtp:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("4YfN"),i=e.n(s),c=(e("IWOR"),e("13Ft")),r=(e("Cu5I"),e("111O")),o=(e("y8TG"),e("Xm+1")),n=(e("7ZMB"),e("k/cs")),l=(e("qAeS"),e("fUgm")),d=(n.a,o.a,r.a,c.a,i()({title:function(){return"接收人("+this.result.length+")"}},Object(l.b)("roadTransCapacity/",{xiafaNotice:function(t){return t.xiafaNotice}})),{components:{vanNavBar:n.a,vanButton:o.a,vanCheckbox:r.a,vanCheckboxGroup:c.a},data:function(){return{result:[],dataResult:[],transOrgs:[]}},filters:{cartBadgeNoFilter:function(t){return t.slice(0,2)+"·"+t.slice(2,t.length)},positionFilter:function(t){return t||"暂无信息"}},computed:i()({title:function(){return"接收人("+this.result.length+")"}},Object(l.b)("roadTransCapacity/",{xiafaNotice:function(t){return t.xiafaNotice}})),mounted:function(){this.$store.commit("updateLoadingStatus",{isLoading:!1}),this.result=this.xiafaNotice,this.dataResult=this.xiafaNotice},methods:{onClickLeft:function(){this.$router.go(-1)},toggle:function(t){this.$refs.checkboxes[t].toggle()},select:function(){this.$store.commit("roadTransCapacity/setXiafaNotice",this.result),this.$router.go(-1)}}}),u={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"receive_person"},[e("c-header",{attrs:{isShowTitle:""}},[e("van-nav-bar",{attrs:{title:t.title,"left-arrow":"",fixed:""},on:{"click-left":t.onClickLeft}})],1),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"card_list"},[e("van-checkbox-group",{model:{value:t.result,callback:function(a){t.result=a},expression:"result"}},t._l(t.dataResult,function(a,s){return e("div",{key:s,staticClass:"card",attrs:{click:"toggle(index)"}},[e("div",{staticClass:"card_top"},[e("van-checkbox",{ref:"checkboxes",refInFor:!0,attrs:{name:a,"checked-color":"#15499A","icon-size":"16px"}}),t._v(" "),e("div",{staticClass:"cardBadge"},[t._v(t._s(t._f("cartBadgeNoFilter")(a.cartBadgeNo)))]),t._v(" "),e("div",{staticClass:"time"},[t._v("合作次数： "+t._s(a.cooperateNum))])],1),t._v(" "),e("div",{staticClass:"logo"},[e("span",{staticClass:"level"},[t._v("初级")])]),t._v(" "),e("div",{staticClass:"card_bottom"},[e("div",{staticClass:"bottom_left"},[e("img",{staticClass:"diver_img",attrs:{src:a.headImg,alt:""}}),t._v(" "),1!=a.upgradeState?e("div",{staticClass:"loyal"},[t._v("忠诚度"+t._s(a.matchingDegree))]):e("div",{staticClass:"upgradeState"},[t._v("升级待通过")])]),t._v(" "),e("div",{staticClass:"bottom_right"},[e("div",{staticClass:"driver_info"},[e("span",{staticClass:"driver"},[t._v(t._s(a.driverName))]),t._v(" "),e("span",{staticClass:"tel"},[t._v(t._s(a.mobileNo))])]),t._v(" "),e("div",{staticClass:"location"},[e("span",[t._v("车辆位置："+t._s(t._f("positionFilter")(a.curPosition)))])])])])])}),0)],1)]),t._v(" "),e("div",{staticStyle:{height:"70px"}}),t._v(" "),e("div",{staticClass:"footer"},[e("van-button",{attrs:{type:"default",disabled:!(t.result.length>0)},on:{click:t.select}},[t._v("确认选择")])],1)],1)},staticRenderFns:[]};var v=e("C7Lr")(d,u,!1,function(t){e("2Ybf")},"data-v-3532ed7d",null);a.default=v.exports}});
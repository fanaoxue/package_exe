webpackJsonp([18],{"7cRR":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Xxa5"),s=a.n(n),i=a("exGp"),o=a.n(i),d=a("//Fk"),l=a.n(d),r=(a("jAcA"),a("86U2")),_=(a("yIEv"),a("OIh9")),c=(a("3Lne"),a("SSsa")),A=(a("FO5P"),a("woHG")),v=a("KS8L"),g=a("P9l9"),p=a("yqxf"),C=(A.a,c.a,_.a,r.a,{components:{vanNavBar:A.a,vanButton:c.a,vanTab:_.a,vanTabs:r.a},data:function(){return{active:1,pageShow:!1,showMore:!1,showTab:!1,taxWaybillId:this.$route.query.taxWaybillId,lossEnsureLimit:"",orgName:"",driverName:"",driverInsFee:"",lossEnsureNodeState:"",dataResult:{},bangzhangSrc:"",lossEnsureState:"",baozhangzhong:a("sH//"),yishouli:a("xTad"),yiwancheng:a("cJZR"),yijieshu:a("vTGb"),isFromH5:this.$route.query.isFromH5,orgCfg714:""}},mounted:function(){var e=this;this.$_waybillDetail().then(function(){e.$store.commit("updateLoadingStatus",{isLoading:!0}),Object(p.b)({taxWaybillId:e.taxWaybillId}).then(function(t){if(e.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"===t.data.reCode)switch(e.dataResult=t.data.result,e.lossEnsureState=e.dataResult.lossEnsureState,e.lossEnsureNodeState=e.dataResult.lossEnsureNodeState,"2"!==e.lossEnsureState&&"3"!==e.lossEnsureState||(e.showTab=!0),setTimeout(function(){e.active=0,e.pageShow=!0},20),console.log(e.lossEnsureState),e.lossEnsureState){case"1":e.bangzhangSrc=e.baozhangzhong;break;case"2":e.bangzhangSrc=e.yishouli;break;case"3":e.bangzhangSrc=e.yiwancheng;break;case"4":e.bangzhangSrc=e.yijieshu;break;default:e.bangzhangSrc=""}else e.$vux.toast.text(t.data.reInfo,"middle")}).catch(function(t){e.$store.commit("updateLoadingStatus",{isLoading:!1})})})},beforeRouteLeave:function(e,t,a){"SubmitDamageSuccess"===e.name&&Object(v.a)(-1),a()},filters:{nameFilter:function(e){return"1"==e?"物流企业":"司机"}},methods:{onClickLeft:function(){this.$router.back()},_getApolloParams:function(e){var t=this;return this.$store.commit("updateLoadingStatus",{isLoading:!0}),new l.a(function(a,n){Object(p.a)({key:e}).then(function(e){t.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"===e.data.reCode?a(e.data.result.value):(t.$vux.toast.text(e.data.reInfo,"middle"),n())}).catch(function(e){t.$store.commit("updateLoadingStatus",{isLoading:!1}),t.$vux.toast.text(error.message,"middle"),n()})})},dialPhone:function(){var e=this;return o()(s.a.mark(function t(){var a,n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e._getApolloParams("goods.damage.name");case 3:return a=t.sent,t.next=6,e._getApolloParams("goods.damage.mobileNo");case 6:n=t.sent,e.$vux1.confirm.show({title:"拨打电话",content:"<p style='text-align:left'>确认拨打：</p><p style='color:#FFBA00;text-align:left'>"+a+" , "+n+"</p>",confirmText:"确认",cancelText:"取消",onConfirm:function(){Object(v.c)(n)}}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}},t,e,[[0,10]])}))()},$_waybillDetail:function(){var e=this;return this.$store.commit("updateLoadingStatus",{isLoading:!0}),new l.a(function(t,a){Object(g.O)({taxWaybillId:e.taxWaybillId}).then(function(n){if(e.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"===n.data.reCode){var s=n.data.result;e.lossEnsureLimit=s.lossEnsureLimit,e.orgName=s.orgName,e.driverName=s.driverName,e.driverInsFee=s.driverInsFee,t()}else e.$vux.toast.text(error.message,"middle"),a()}).catch(function(t){e.$store.commit("updateLoadingStatus",{isLoading:!1}),a()})})},ensureGoodsDamage:function(){this.$router.push({path:"/SubmitDamage",query:{taxWaybillId:this.taxWaybillId,isFromH5:"1"}})}}}),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"goods_damage_detail"},[n("c-header",{staticClass:"header"},[n("van-nav-bar",{attrs:{title:"货损保障","left-arrow":""},on:{"click-left":e.onClickLeft}})],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.pageShow,expression:"pageShow"}]},[n("div",{staticClass:"content"},[n("img",{staticStyle:{position:"absolute",width:"100%",left:"0px",top:"-30px"},attrs:{src:a("VUpG"),alt:"",width:"100%"}}),e._v(" "),n("div",{staticClass:"header_info"},[n("div",{staticClass:"damage_list"},[n("span",{staticClass:"list-left grey"},[e._v("货损保障额度：")]),e._v(" "),n("span",{staticClass:"list_right yellow"},[e._v(e._s(e.lossEnsureLimit)+"元")])]),e._v(" "),n("div",{staticClass:"damage_list"},[n("span",{staticClass:"list-left grey"},[e._v("保障对象：")]),e._v(" "),Number(e.driverInsFee)>0?n("span",{staticClass:"list_right"},[e._v(e._s(e.driverName))]):n("span",{staticClass:"list_right"},[e._v(e._s(e.orgName))])]),e._v(" "),e._m(0),e._v(" "),n("img",{staticClass:"logo_state",attrs:{src:e.bangzhangSrc,alt:""}})])]),e._v(" "),n("div",{staticClass:"center_list"},[n("div",{staticClass:"card_content"},[n("van-tabs",{attrs:{color:"#15499a","title-active-color":"#15499a","title-inactive-color":"#6C6C6C",swipeable:""},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[e.showTab?n("van-tab",{attrs:{title:"申请进度"}},[n("div",{staticClass:"tab_style"},[n("div",{staticClass:"step_card"},[n("div",{staticClass:"step noval valMargin"},[n("div",{staticClass:"number"},[e._v("1")]),e._v(" "),n("div",{staticClass:"right_info"},[n("div",{staticClass:"title1"},[e._v("司机申请货损保障")]),e._v(" "),n("div",{staticClass:"title2"}),e._v(" "),n("div",{staticClass:"title3"},[e._v(e._s(e.dataResult.applyEnsureTime))])]),e._v(" "),n("div",{staticClass:"line"})]),e._v(" "),n("div",{staticClass:"step",class:{noval:0==Boolean(e.dataResult.ensurerConfirmMaterialTime),valMargin:1==Boolean(e.dataResult.ensurerConfirmMaterialTime)}},[n("div",{staticClass:"number"},[e._v("2")]),e._v(" "),n("div",{staticClass:"right_info"},[n("div",{staticClass:"title1"},[e._v("\n                      保障已受理\n                      "),n("span",{staticClass:"grey"},[e._v("已受理货损金额"+e._s(e.dataResult.driverLossFee)+"元")])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.dataResult.ensurerConfirmMaterialTime,expression:"dataResult.ensurerConfirmMaterialTime"}],staticClass:"title2 green"},[e._v("保障材料已确认")]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.dataResult.ensurerConfirmMaterialTime,expression:"dataResult.ensurerConfirmMaterialTime"}],staticClass:"title3"},[e._v(e._s(e.dataResult.ensurerConfirmMaterialTime))])]),e._v(" "),n("div",{staticClass:"line",class:{longline:1==Boolean(e.dataResult.ensurerConfirmMaterialTime)}})]),e._v(" "),n("div",{staticClass:"step",class:{noval:0==Boolean(e.dataResult.orgConfirmLossTime),valMargin:1==Boolean(e.dataResult.orgConfirmLossTime)}},[n("div",{staticClass:"number",class:{dashBg:0==Boolean(e.dataResult.orgConfirmLossTime)}},[e._v("3")]),e._v(" "),n("div",{staticClass:"right_info"},[n("div",{staticClass:"title1",class:{dashText:0==Boolean(e.dataResult.orgConfirmLossTime)}},[e._v("\n                      物流企业确认货损金额\n                      "),e.dataResult.orgConfirmLossTime?n("span",{staticClass:"yellow",on:{click:e.ensureGoodsDamage}},[e._v("查看货损")]):n("span",{staticClass:"yellow",on:{click:e.ensureGoodsDamage}},[e._v("确认货损")])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.dataResult.orgConfirmLossTime,expression:"dataResult.orgConfirmLossTime"}],staticClass:"title2 green"},[e._v("已确认")]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.dataResult.orgConfirmLossTime,expression:"dataResult.orgConfirmLossTime"}],staticClass:"title3"},[e._v(e._s(e.dataResult.orgConfirmLossTime))])]),e._v(" "),n("div",{staticClass:"line",class:{longline:1==Boolean(e.dataResult.orgConfirmLossTime)}})]),e._v(" "),n("div",{staticClass:"step",class:{noval:0==Boolean(e.dataResult.ensurerConfirmLossTime),valMargin:1==Boolean(e.dataResult.ensurerConfirmLossTime)}},[n("div",{staticClass:"number",class:{dashBg:0==Boolean(e.dataResult.ensurerConfirmLossTime)}},[e._v("4")]),e._v(" "),n("div",{staticClass:"right_info"},[n("div",{staticClass:"title1",class:{dashText:0==Boolean(e.dataResult.ensurerConfirmLossTime)}},[e._v("保障专员处理中")]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.dataResult.ensurerConfirmLossTime,expression:"dataResult.ensurerConfirmLossTime"}],staticClass:"title2 green"},[e._v("已确认 货损保障金额"+e._s(e.dataResult.ensurerLossFee||e.dataResult.orgLossFee||e.dataResult.driverLossFee)+"元")]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.dataResult.ensurerConfirmLossTime,expression:"dataResult.ensurerConfirmLossTime"}],staticClass:"title3"},[e._v(e._s(e.dataResult.ensurerConfirmLossTime))])]),e._v(" "),n("div",{staticClass:"line",class:{longline:1==Boolean(e.dataResult.ensurerConfirmLossTime)}})]),e._v(" "),n("div",{staticClass:"step"},[n("div",{staticClass:"number",class:{dashBg:0==Boolean(e.dataResult.ensurerConfirmClaimTime)}},[e._v("5")]),e._v(" "),n("div",{staticClass:"right_info"},[n("div",{staticClass:"title1",class:{dashText:0==Boolean(e.dataResult.ensurerConfirmClaimTime)}},[e._v("处理完成")]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.dataResult.ensurerConfirmPayTime,expression:"dataResult.ensurerConfirmPayTime"}],staticClass:"title2 green"},[e._v("货损保障金额已支付给"+e._s(e._f("nameFilter")(e.dataResult.payeeType)))]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.dataResult.ensurerConfirmClaimTime,expression:"dataResult.ensurerConfirmClaimTime"}],staticClass:"title3"},[e._v(e._s(e.dataResult.ensurerConfirmClaimTime))])]),e._v(" "),n("div",{staticClass:"lineHidden"})])])])]):e._e(),e._v(" "),n("van-tab",{attrs:{title:"货损保障"}},[n("div",{staticClass:"tab_style"},[n("ul",[n("li",[n("div",{staticClass:"li_title"},[e._v("什么是货损保障？")]),e._v(" "),n("p",[e._v("发生货损后，物流企业不仅遭受经济损失，还会面临与司机之间的责任纠纷，既劳神又烦心。所以路歌为企业提供一项货损保障服务，发生货损(额度内)后，企业无需承担实际货损金额。")])])])])]),e._v(" "),n("van-tab",{attrs:{title:"保障须知"}},[n("div",{staticClass:"tab_style"},[n("ul",[n("li",[n("div",{staticClass:"li_title"},[e._v("第一条 保障责任范围：")]),e._v(" "),n("p",[e._v("在发生以下情况导致的货物直接损失可申请货损保障补偿：")]),e._v(" "),n("p",[e._v("1、火灾、爆炸造成的货物损坏；")]),e._v(" "),n("p",[e._v("2、运输工具发生外部碰撞、倾覆造成货物损坏；")]),e._v(" "),n("p",[e._v("3、碰撞、挤压导致货物破损、包装破裂或容器损坏；")]),e._v(" "),n("p",[e._v("4、运输过程中遭受雨淋造成的货物损坏；")]),e._v(" "),n("p",[e._v("5、货物的正常装卸、搬运时发生的意外事故造成的货物损坏。")]),e._v(" "),n("p",[e._v("6、如下货物仅负责赔偿因火灾、爆炸、运输工具发生外部碰撞、倾覆造成货物的直接损失： 1）蔬菜、水果类生鲜货物；2）果木花卉类货物；3）牲畜禽鱼类、禽蛋类货物；4）裸装货物、退换货、返修货物、二手货物。")])]),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.showMore,expression:"showMore"}]},[n("li",[n("div",{staticClass:"li_title"},[e._v("第二条 保障货物范围：")]),e._v(" "),n("p",[e._v("除如下货物以外的货物：")]),e._v(" "),n("p",[e._v("1、《危险货物品名表》GB12268中列明的易燃、易爆的危险品；")]),e._v(" "),n("p",[e._v("2、任何违禁、违法运输货物。")])]),e._v(" "),n("li",[n("div",{staticClass:"li_title"},[e._v("第三条 货损保障赔付原则：")]),e._v(" "),n("p",[e._v("1、每次事故赔付金额由在路歌平台开通配置金额为上限，且不高于最终确定的实际货损金额；")]),e._v(" "),n("p",[e._v("2、路歌确认申请赔付的材料齐全后一个工作日内进行赔付，企业得到赔偿后不得以扣减司机运费的方式再次获得赔偿，否则路歌将有追回已赔偿款项的权利。")])]),e._v(" "),n("li",[n("div",{staticClass:"li_title"},[e._v("第四条 货损保障生效条件及责任起讫期间：")]),e._v(" "),n("p",[e._v("1、保障生效条件：司机在路歌平台接单之时，保障生效。")]),e._v(" "),n("p",[e._v("2、保障起讫期间：以保障生效时间为起始时间，至承运车辆到达卸货地点时间为终止时间，且最长不超过企业与司机确认相应的运输协议后15天，两者以先发生为准。该时间范围内发生的保障事故，经路歌认定属于保障范围内的，路歌提供货损保障赔付。")])]),e._v(" "),n("li",[n("div",{staticClass:"li_title"},[e._v("第五条 不予货损保障赔付情形")]),e._v(" "),n("p",[e._v("由于下列原因造成的损失，路歌不提供货损保障赔付：")]),e._v(" "),n("p",[e._v("1、自然灾害；")]),e._v(" "),n("p",[e._v("本协议所称自然灾害是指雷击、暴风、洪水、暴雪、冰雹、沙尘暴、冰凌、泥石流、崖崩、突发性滑坡、火山爆发、地面突然塌陷、地震、海啸及其他人力不可抗拒的破坏力强大的自然现象。")]),e._v(" "),n("p",[e._v("2、企业的故意行为或重大过失；")]),e._v(" "),n("p",[e._v("3、企业提供虚假证据，虚报损失金额，骗取路歌补偿的；")]),e._v(" "),n("p",[e._v("4、任何罚款、罚金及惩罚性赔偿导致的企业的损失；")]),e._v(" "),n("p",[e._v("5、货物设计错误、工艺不善、本质缺陷或特性、自然渗漏、自然损耗、自然磨损、自燃或由于自身原因造成腐烂、变质、伤病、死亡等自身变化（运输货物装载标准详见附件）；")]),e._v(" "),n("p",[e._v("6、货物包装不当，或货物包装完好而内容损坏或不符，或货物标记错制、漏制、不清；")]),e._v(" "),n("p",[e._v("7、非全封闭式货车，未使用防水布密封覆盖承运货物；")]),e._v(" "),n("p",[e._v("8、货物遭受盗窃或不明原因地失踪；")]),e._v(" "),n("p",[e._v("9、罐装货物因罐体自然损坏导致的货物损失；")]),e._v(" "),n("p",[e._v("10、违反国家、行业或物流企业的安全运输规定或操作规程；")]),e._v(" "),n("p",[e._v("11、行政行为或司法行为；")]),e._v(" "),n("p",[e._v("12、承运车辆违反道路/桥梁/隧道/立交桥/限宽门（桩）等各类道路设施的通行规定或要求造成的货物损失；")]),e._v(" "),n("p",[e._v("13、承运车辆超载比例【（实际载重 - 核定载重）/ 核定载重】超过50%；")]),e._v(" "),n("p",[e._v("14、战争、敌对行动、军事行为、武装冲突、罢工、骚乱、暴动、恐怖活动；")]),e._v(" "),n("p",[e._v("15、核辐射、核爆炸、核污染及其他放射性污染；")]),e._v(" "),n("p",[e._v("16、大气污染、土地污染、水污染及其他各种污染；")]),e._v(" "),n("p",[e._v("17、公共供电、供水、供气及其他的公共能源中断；")]),e._v(" "),n("p",[e._v("18、未经企业与路歌平台确认，司机私自与收货人达成赔付协议的；")]),e._v(" "),n("p",[e._v("由于下列原因或情形造成的任何费用及损失，路歌不提供货损保障赔付：")]),e._v(" "),n("p",[e._v("1、企业未能提供真实、准确的起运时间、送达时间、现场照片、运输清单、货损证明等相关信息，或提供的信息与实际运输不符；实际运输货物的车辆与运单中约定的车辆信息不符")]),e._v(" "),n("p",[e._v("2、任何间接损失；")]),e._v(" "),n("p",[e._v("3、企业与司机使用同样的IP地址或相同的设备登录平台并进行交易；")]),e._v(" "),n("p",[e._v("4、司机未配合平台进行运输途中的位置定位；")]),e._v(" "),n("p",[e._v("5、任何形式的仓储期间的损失，但运输过程中的临时仓储除外；")]),e._v(" "),n("p",[e._v("6、司机没有具备合格的驾驶证、行驶证及营运证/许可证；")]),e._v(" "),n("p",[e._v("7、不可抗力原因（包括但不限于天气恶劣、政府管制、地震等意外灾害等）造成的运输延误损失；")]),e._v(" "),n("p",[e._v("8、企业填写的货物名称不能反映实际货物内容，或填写的货物名称、规格不规范的（即货物名称过于模糊或包含标点符号、数字及其他与货物名称无关的文字等）；")]),e._v(" "),n("p",[e._v("9、实际开始运输前，发生的货物损失")]),e._v(" "),n("p",[e._v("10、运输或装卸工具不适合运输或装卸货物。")])]),e._v(" "),n("li",[n("div",{staticClass:"li_title"},[e._v("第六条 货损补偿材料提交时效")]),e._v(" "),n("p",[e._v("申请货损补偿时效要求：当企业或司机在可预知或已知道可能产生损失时，应当及时告知路歌工作人员（货损保障专员联系电话：徐成-17318532265），因司机未及时向货损保障专员申请运费补偿导致无法核定损失或损失扩大的，路歌不提供货损保障，且申请货损保障时长不得超过事故发生后24小时。")])])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.showMore,expression:"!showMore"}],staticClass:"checkall",on:{click:function(t){e.showMore=!0}}},[e._v("\n                  查看全部\n                  "),n("span",{staticClass:"down"},[e._v("↓")])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showMore,expression:"showMore"}],staticClass:"checkall",on:{click:function(t){e.showMore=!1}}},[e._v("\n                  收起\n                  "),n("span",{staticClass:"up"},[e._v("↑")])])])])])],1)],1)])]),e._v(" "),n("div",{staticClass:"height",staticStyle:{height:"50px"}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:4!=e.lossEnsureState,expression:"lossEnsureState != 4"}],staticClass:"footer"},[n("van-button",{on:{click:e.dialPhone}},[e._v("联系保障专员")])],1)],1)};m._withStripped=!0;var f={render:m,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"damage_list"},[t("span",{staticClass:"list-left grey"},[this._v("保障时间：")]),this._v(" "),t("span",{staticClass:"list_right"},[this._v("从起运到运输结束")])])}]},u=f;var h=!1;var b=a("VU/8")(C,u,!1,function(e){h||a("uHC3")},"data-v-e82877e8",null);b.options.__file="src/components/goodsDamage/goodsDamageDetail.vue";t.default=b.exports},C2q3:function(e,t,a){(e.exports=a("FZ+f")(!0)).push([e.i,"\n.goods_damage_detail[data-v-e82877e8] {\n  width: 100%;\n  background-color: #efefef;\n  position: absolute;\n  top: 0px;\n  min-height: 100%;\n  height: auto;\n  box-sizing: border-box;\n}\n.goods_damage_detail .content[data-v-e82877e8] {\n  height: auto;\n  text-align: center;\n}\n.goods_damage_detail .content .header_info[data-v-e82877e8] {\n  width: 95%;\n  background-color: #ffffff;\n  border-radius: 5px;\n  padding: 10px;\n  box-sizing: border-box;\n  margin: 15px auto 10px;\n  position: relative;\n}\n.goods_damage_detail .content .header_info .damage_list[data-v-e82877e8] {\n  text-align: left;\n  min-height: 28px;\n  height: auto;\n}\n.goods_damage_detail .content .header_info .damage_list .list_right[data-v-e82877e8] {\n  margin-left: -6px;\n}\n.goods_damage_detail .content .header_info .damage_list .grey[data-v-e82877e8] {\n  color: #797979;\n}\n.goods_damage_detail .content .header_info .damage_list .yellow[data-v-e82877e8] {\n  color: #ffba00;\n}\n.goods_damage_detail .content .header_info .logo_state[data-v-e82877e8] {\n  position: absolute;\n  right: 5px;\n  top: 8px;\n  width: 58px;\n}\n.goods_damage_detail .center_list[data-v-e82877e8] {\n  min-height: 200px;\n  padding: 10px;\n  width: 100vw;\n  box-sizing: border-box;\n}\n.goods_damage_detail .center_list .card_content[data-v-e82877e8] {\n  border-radius: 5px;\n  width: 100%;\n  background-color: #ffffff;\n  margin: 0px auto;\n  overflow: hidden;\n}\n.goods_damage_detail .center_list .card_content[data-v-e82877e8] .van-tab {\n  font-size: 15px;\n}\n.goods_damage_detail .center_list .card_content[data-v-e82877e8] .van-tab--active {\n  font-size: 17px;\n}\n.goods_damage_detail .center_list .card_content[data-v-e82877e8] .van-tabs__content {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  height: calc(100vh - 250px);\n}\n.goods_damage_detail .center_list .card_content[data-v-e82877e8] .van-hairline--top-bottom::after {\n  border-width: 2px 0;\n}\n.goods_damage_detail .center_list .card_content .tab_style[data-v-e82877e8] {\n  padding: 10px;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.goods_damage_detail .center_list .card_content .tab_style .step_card[data-v-e82877e8] {\n  min-height: 400px;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n}\n.goods_damage_detail .center_list .card_content .tab_style .step_card .noval[data-v-e82877e8] {\n  height: 40px !important;\n}\n.goods_damage_detail .center_list .card_content .tab_style .step_card .valMargin[data-v-e82877e8] {\n  margin-bottom: 22px !important;\n}\n.goods_damage_detail .center_list .card_content .tab_style .step_card .step[data-v-e82877e8] {\n  height: 70px;\n  margin: 5px;\n  position: relative;\n}\n.goods_damage_detail .center_list .card_content .tab_style .step_card .step .number[data-v-e82877e8] {\n  padding: 2px;\n  margin-top: 5px;\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n  line-height: 15px;\n  color: #ffffff;\n  text-align: center;\n  background-color: #15499a;\n}\n.goods_damage_detail .center_list .card_content .tab_style .step_card .step .dashBg[data-v-e82877e8] {\n  background-color: #bcbcbc;\n}\n.goods_damage_detail .center_list .card_content .tab_style .step_card .step .dashText[data-v-e82877e8] {\n  color: #9f9f9f;\n}\n.goods_damage_detail .center_list .card_content .tab_style .step_card .step .right_info[data-v-e82877e8] {\n  color: #313233;\n  position: absolute;\n  left: 45px;\n  top: 0px;\n}\n.goods_damage_detail .center_list .card_content .tab_style .step_card .step .right_info .title3[data-v-e82877e8] {\n  font-size: 13px;\n  font-weight: 400;\n}\n.goods_damage_detail .center_list .card_content .tab_style .step_card .step .right_info .yellow[data-v-e82877e8] {\n  background-color: #ffba00;\n  color: #ffffff;\n  border-radius: 15px;\n  padding: 4px 6px 2px;\n  font-size: 14px;\n}\n.goods_damage_detail .center_list .card_content .tab_style .step_card .step .right_info .grey[data-v-e82877e8] {\n  color: #9f9f9f;\n  font-size: 13px;\n}\n.goods_damage_detail .center_list .card_content .tab_style .step_card .step .right_info .green[data-v-e82877e8] {\n  color: #28b072;\n  font-size: 14px;\n}\n.goods_damage_detail .center_list .card_content .tab_style .step_card .step .line[data-v-e82877e8] {\n  color: #313233;\n  position: absolute;\n  left: 9px;\n  top: 25px;\n  width: 1px;\n  height: 60px;\n  border-left: 1px dashed #ccc;\n}\n.goods_damage_detail .center_list .card_content .tab_style .step_card .step .lineHidden[data-v-e82877e8] {\n  position: absolute;\n  left: 9px;\n  top: 25px;\n  width: 3px;\n  height: 60px;\n  background-color: #ffffff;\n}\n.goods_damage_detail .center_list .card_content .tab_style .step_card .step .longline[data-v-e82877e8] {\n  height: 75px !important;\n}\n.goods_damage_detail .center_list .card_content .tab_style li[data-v-e82877e8] {\n  font-weight: bold;\n  font-size: 16px;\n}\n.goods_damage_detail .center_list .card_content .tab_style li .li_title[data-v-e82877e8] {\n  margin: 10px 0px;\n}\n.goods_damage_detail .center_list .card_content .tab_style li p[data-v-e82877e8] {\n  font-size: 14px;\n  font-weight: normal;\n}\n.goods_damage_detail .center_list .card_content .tab_style .checkall[data-v-e82877e8] {\n  text-align: center;\n  color: #15499a;\n  font-size: 15px;\n  font-weight: normal;\n}\n.goods_damage_detail .footer[data-v-e82877e8] {\n  position: fixed;\n  left: 0px;\n  bottom: 0px;\n  width: 100%;\n}\n.goods_damage_detail .footer[data-v-e82877e8] .van-button {\n  height: 50px;\n  width: 100%;\n  color: #ffff;\n  font-size: 16px;\n  background-color: #15499a;\n  color: #ffffff;\n  border: none;\n  border-radius: 0px;\n}\n","",{version:3,sources:["D:/h5_gitlab/ngcbapp_h5/src/components/goodsDamage/goodsDamageDetail.vue"],names:[],mappings:";AACA;EACE,YAAY;EACZ,0BAA0B;EAC1B,mBAAmB;EACnB,SAAS;EACT,iBAAiB;EACjB,aAAa;EACb,uBAAuB;CACxB;AACD;EACE,aAAa;EACb,mBAAmB;CACpB;AACD;EACE,WAAW;EACX,0BAA0B;EAC1B,mBAAmB;EACnB,cAAc;EACd,uBAAuB;EACvB,uBAAuB;EACvB,mBAAmB;CACpB;AACD;EACE,iBAAiB;EACjB,iBAAiB;EACjB,aAAa;CACd;AACD;EACE,kBAAkB;CACnB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,mBAAmB;EACnB,WAAW;EACX,SAAS;EACT,YAAY;CACb;AACD;EACE,kBAAkB;EAClB,cAAc;EACd,aAAa;EACb,uBAAuB;CACxB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,0BAA0B;EAC1B,iBAAiB;EACjB,iBAAiB;CAClB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,eAAe;EACf,kCAAkC;EAClC,4BAA4B;CAC7B;AACD;EACE,oBAAoB;CACrB;AACD;EACE,cAAc;EACd,eAAe;EACf,kCAAkC;CACnC;AACD;EACE,kBAAkB;EAClB,YAAY;EACZ,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,6BAA6B;EAC7B,8BAA8B;EAC9B,+BAA+B;UACvB,uBAAuB;CAChC;AACD;EACE,wBAAwB;CACzB;AACD;EACE,+BAA+B;CAChC;AACD;EACE,aAAa;EACb,YAAY;EACZ,mBAAmB;CACpB;AACD;EACE,aAAa;EACb,gBAAgB;EAChB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,0BAA0B;CAC3B;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;EACf,mBAAmB;EACnB,WAAW;EACX,SAAS;CACV;AACD;EACE,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,0BAA0B;EAC1B,eAAe;EACf,oBAAoB;EACpB,qBAAqB;EACrB,gBAAgB;CACjB;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,eAAe;EACf,mBAAmB;EACnB,UAAU;EACV,UAAU;EACV,WAAW;EACX,aAAa;EACb,6BAA6B;CAC9B;AACD;EACE,mBAAmB;EACnB,UAAU;EACV,UAAU;EACV,WAAW;EACX,aAAa;EACb,0BAA0B;CAC3B;AACD;EACE,wBAAwB;CACzB;AACD;EACE,kBAAkB;EAClB,gBAAgB;CACjB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,gBAAgB;EAChB,oBAAoB;CACrB;AACD;EACE,mBAAmB;EACnB,eAAe;EACf,gBAAgB;EAChB,oBAAoB;CACrB;AACD;EACE,gBAAgB;EAChB,UAAU;EACV,YAAY;EACZ,YAAY;CACb;AACD;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,0BAA0B;EAC1B,eAAe;EACf,aAAa;EACb,mBAAmB;CACpB",file:"goodsDamageDetail.vue",sourcesContent:["\n.goods_damage_detail[data-v-e82877e8] {\n  width: 100%;\n  background-color: #efefef;\n  position: absolute;\n  top: 0px;\n  min-height: 100%;\n  height: auto;\n  box-sizing: border-box;\n}\n.goods_damage_detail .content[data-v-e82877e8] {\n  height: auto;\n  text-align: center;\n}\n.goods_damage_detail .content .header_info[data-v-e82877e8] {\n  width: 95%;\n  background-color: #ffffff;\n  border-radius: 5px;\n  padding: 10px;\n  box-sizing: border-box;\n  margin: 15px auto 10px;\n  position: relative;\n}\n.goods_damage_detail .content .header_info .damage_list[data-v-e82877e8] {\n  text-align: left;\n  min-height: 28px;\n  height: auto;\n}\n.goods_damage_detail .content .header_info .damage_list .list_right[data-v-e82877e8] {\n  margin-left: -6px;\n}\n.goods_damage_detail .content .header_info .damage_list .grey[data-v-e82877e8] {\n  color: #797979;\n}\n.goods_damage_detail .content .header_info .damage_list .yellow[data-v-e82877e8] {\n  color: #ffba00;\n}\n.goods_damage_detail .content .header_info .logo_state[data-v-e82877e8] {\n  position: absolute;\n  right: 5px;\n  top: 8px;\n  width: 58px;\n}\n.goods_damage_detail .center_list[data-v-e82877e8] {\n  min-height: 200px;\n  padding: 10px;\n  width: 100vw;\n  box-sizing: border-box;\n}\n.goods_damage_detail .center_list .card_content[data-v-e82877e8] {\n  border-radius: 5px;\n  width: 100%;\n  background-color: #ffffff;\n  margin: 0px auto;\n  overflow: hidden;\n}\n.goods_damage_detail .center_list .card_content[data-v-e82877e8] .van-tab {\n  font-size: 15px;\n}\n.goods_damage_detail .center_list .card_content[data-v-e82877e8] .van-tab--active {\n  font-size: 17px;\n}\n.goods_damage_detail .center_list .card_content[data-v-e82877e8] .van-tabs__content {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  height: calc(100vh - 250px);\n}\n.goods_damage_detail .center_list .card_content[data-v-e82877e8] .van-hairline--top-bottom::after {\n  border-width: 2px 0;\n}\n.goods_damage_detail .center_list .card_content .tab_style[data-v-e82877e8] {\n  padding: 10px;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.goods_damage_detail .center_list .card_content .tab_style .step_card[data-v-e82877e8] {\n  min-height: 400px;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n}\n.goods_damage_detail .center_list .card_content .tab_style .step_card .noval[data-v-e82877e8] {\n  height: 40px !important;\n}\n.goods_damage_detail .center_list .card_content .tab_style .step_card .valMargin[data-v-e82877e8] {\n  margin-bottom: 22px !important;\n}\n.goods_damage_detail .center_list .card_content .tab_style .step_card .step[data-v-e82877e8] {\n  height: 70px;\n  margin: 5px;\n  position: relative;\n}\n.goods_damage_detail .center_list .card_content .tab_style .step_card .step .number[data-v-e82877e8] {\n  padding: 2px;\n  margin-top: 5px;\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n  line-height: 15px;\n  color: #ffffff;\n  text-align: center;\n  background-color: #15499a;\n}\n.goods_damage_detail .center_list .card_content .tab_style .step_card .step .dashBg[data-v-e82877e8] {\n  background-color: #bcbcbc;\n}\n.goods_damage_detail .center_list .card_content .tab_style .step_card .step .dashText[data-v-e82877e8] {\n  color: #9f9f9f;\n}\n.goods_damage_detail .center_list .card_content .tab_style .step_card .step .right_info[data-v-e82877e8] {\n  color: #313233;\n  position: absolute;\n  left: 45px;\n  top: 0px;\n}\n.goods_damage_detail .center_list .card_content .tab_style .step_card .step .right_info .title3[data-v-e82877e8] {\n  font-size: 13px;\n  font-weight: 400;\n}\n.goods_damage_detail .center_list .card_content .tab_style .step_card .step .right_info .yellow[data-v-e82877e8] {\n  background-color: #ffba00;\n  color: #ffffff;\n  border-radius: 15px;\n  padding: 4px 6px 2px;\n  font-size: 14px;\n}\n.goods_damage_detail .center_list .card_content .tab_style .step_card .step .right_info .grey[data-v-e82877e8] {\n  color: #9f9f9f;\n  font-size: 13px;\n}\n.goods_damage_detail .center_list .card_content .tab_style .step_card .step .right_info .green[data-v-e82877e8] {\n  color: #28b072;\n  font-size: 14px;\n}\n.goods_damage_detail .center_list .card_content .tab_style .step_card .step .line[data-v-e82877e8] {\n  color: #313233;\n  position: absolute;\n  left: 9px;\n  top: 25px;\n  width: 1px;\n  height: 60px;\n  border-left: 1px dashed #ccc;\n}\n.goods_damage_detail .center_list .card_content .tab_style .step_card .step .lineHidden[data-v-e82877e8] {\n  position: absolute;\n  left: 9px;\n  top: 25px;\n  width: 3px;\n  height: 60px;\n  background-color: #ffffff;\n}\n.goods_damage_detail .center_list .card_content .tab_style .step_card .step .longline[data-v-e82877e8] {\n  height: 75px !important;\n}\n.goods_damage_detail .center_list .card_content .tab_style li[data-v-e82877e8] {\n  font-weight: bold;\n  font-size: 16px;\n}\n.goods_damage_detail .center_list .card_content .tab_style li .li_title[data-v-e82877e8] {\n  margin: 10px 0px;\n}\n.goods_damage_detail .center_list .card_content .tab_style li p[data-v-e82877e8] {\n  font-size: 14px;\n  font-weight: normal;\n}\n.goods_damage_detail .center_list .card_content .tab_style .checkall[data-v-e82877e8] {\n  text-align: center;\n  color: #15499a;\n  font-size: 15px;\n  font-weight: normal;\n}\n.goods_damage_detail .footer[data-v-e82877e8] {\n  position: fixed;\n  left: 0px;\n  bottom: 0px;\n  width: 100%;\n}\n.goods_damage_detail .footer[data-v-e82877e8] .van-button {\n  height: 50px;\n  width: 100%;\n  color: #ffff;\n  font-size: 16px;\n  background-color: #15499a;\n  color: #ffffff;\n  border: none;\n  border-radius: 0px;\n}\n"],sourceRoot:""}])},VUpG:function(e,t,a){e.exports=a.p+"V3.29.1/img/bg@2x.ec515bd.png"},cJZR:function(e,t,a){e.exports=a.p+"V3.29.1/img/yiwancheng_img@2x.34c571f.png"},"sH//":function(e,t,a){e.exports=a.p+"V3.29.1/img/baozhangzhong_img@2x.62ffcb3.png"},uHC3:function(e,t,a){var n=a("C2q3");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("683552f8",n,!1,{})},vTGb:function(e,t,a){e.exports=a.p+"V3.29.1/img/yijieshu_img@2x.6721207.png"},xTad:function(e,t,a){e.exports=a.p+"V3.29.1/img/yishouli_img@2x.6eb66c9.png"}});
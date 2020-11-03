webpackJsonp([32],{"+TyJ":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i("a3Yh"),A=i.n(e),a=i("P9l9"),o={name:"rewardActivity",data:function(){var t;return t={showPage:!1,mobileNo:"",driverName:""},A()(t,"driverName",""),A()(t,"payBankName",""),A()(t,"payBankNo",""),A()(t,"alipayNo",""),A()(t,"idCard",""),t},components:{},computed:{},mounted:function(){this.showPage=!0,this.$store.commit("updateLoadingStatus",{isLoading:!1})},methods:{seeRecommendedReward:function(){this.$router.push({name:"recommendedReward"})},seeAlipayCode:function(){this.$router.push({name:"alipayQRcode"})},clickConfirm:function(){var t=this;if(0===this.mobileNo.length)return this.$vux.toast.text("请输入手机号！","middle"),!1;if(11!==this.mobileNo.length)return this.$vux.toast.text("手机号错误！","middle"),!1;this.$store.commit("updateLoadingStatus",{isLoading:!0});var n={mobileNo:this.mobileNo};Object(a.D)(n).then(function(n){if(t.$store.commit("updateLoadingStatus",{isLoading:!1}),"0"!==n.data.reCode)t.$vux.toast.text(n.data.reInfo,"middle");else{var i=n.data.result;t.driverName=i.driverName,t.alipayNo=i.alipayNo,t.payBankName=i.payBankName,t.payBankNo=i.payBankNo,t.idCard=i.idCard,t.driverName&&t.alipayNo&&t.mobileNo?t.$vux1.confirm.show({title:"提示",content:"该司机已开通了好运宝收款，换一个试试吧~",confirmText:"确认",showCancelButton:!1,onConfirm:function(){}}):t.$router.push({name:"webReciveMsg3",query:{mobileNo:t.mobileNo}})}})}}},r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"reward-activity"},[e("c-header",[e("x-header",{attrs:{"left-options":{backText:""}}},[t._v("开通好运宝收款")])],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showPage,expression:"showPage"}],staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"input-box"},[e("group",{attrs:{"label-width":"4.8em","label-align":"left","label-margin-right":"1em",title:"请输入司机手机号码检测该司机是否开通了好运宝收款~","title-color":"#FFBA00"}},[e("x-input",{staticClass:"vux-1px-b title",attrs:{title:"司机手机:",placeholder:"请输入司机的手机号码",type:"tel"},model:{value:t.mobileNo,callback:function(n){t.mobileNo="string"==typeof n?n.trim():n},expression:"mobileNo"}})],1),t._v(" "),e("div",{staticClass:"button-box"},[e("x-button",{attrs:{type:"primary"},nativeOn:{click:function(n){return t.clickConfirm(n)}}},[t._v("下一步")])],1)],1),t._v(" "),e("div",{staticClass:"click-list"},[e("div",{staticClass:"my-reward",on:{click:t.seeAlipayCode}},[t._m(1),t._v(" "),e("img",{staticClass:"right-img",attrs:{src:i("yofV"),alt:""}})])])])],1)},s=[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"img-box"},[n("span",{staticClass:"text"},[this._v("好运宝收款")]),this._v(" "),n("span",{staticClass:"line"})])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"left-box"},[n("img",{staticClass:"left-img",attrs:{src:i("jdy8"),alt:""}}),this._v(" "),n("span",[this._v("支付宝推荐二维码")])])}];r._withStripped=!0;var l={render:r,staticRenderFns:s},d=l;var C=!1;var c=i("C7Lr")(o,d,!1,function(t){C||i("n2u8")},null,null);c.options.__file="src/components/wbs/rewardActivity.vue";n.default=c.exports},"3oi7":function(t,n,i){t.exports=i.p+"V3.29.1/img/huodongbg@2x.305ba67.png"},"MAF+":function(t,n,i){var e=i("L4zZ");(t.exports=i("UTlt")(!0)).push([t.i,"\n.reward-activity {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background: #efefef;\n}\n.reward-activity .container {\n  height: 100%;\n  width: 100%;\n}\n.reward-activity .weui-cells__title {\n  padding-left: 0;\n  padding-right: 0;\n}\n.reward-activity .weui-cells::before {\n  border: none;\n}\n.reward-activity .weui-cells::after {\n  border: none;\n}\n.reward-activity .weui-btn_primary {\n  background-color: #15499a !important;\n  margin: 10px auto;\n  width: 90% !important;\n}\n.reward-activity .img-box {\n  background: url("+e(i("3oi7"))+") no-repeat;\n  background-size: 100% 100%;\n  height: 180px;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n          align-items: flex-start;\n}\n.reward-activity .img-box .text {\n  font-size: 17px;\n  font-family: PingFang-SC-Bold;\n  font-weight: bold;\n  color: #ffffff;\n  line-height: 18px;\n  opacity: 0.8;\n  display: inline-block;\n  margin-top: 55px;\n  margin-left: 5vw;\n}\n.reward-activity .img-box .line {\n  margin-left: 5vw;\n  margin-top: 10px;\n  width: 18px;\n  height: 2px;\n  background: #55abfb;\n  border-radius: 2px;\n}\n.reward-activity .input-box {\n  width: 90%;\n  height: 226px;\n  background: #fff;\n  border-radius: 5px;\n  box-sizing: border-box;\n  padding: 10px 20px;\n  margin: 0 auto;\n  position: relative;\n  top: -69px;\n  z-index: 99;\n  box-shadow: 0px 0px 20px 0px rgba(2, 30, 74, 0.04);\n}\n.reward-activity .title {\n  font-size: 16px;\n  font-family: PingFang-SC-Medium;\n  font-weight: 500;\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n}\n.reward-activity .click-list {\n  position: relative;\n  top: -49px;\n}\n.reward-activity .click-list .my-reward {\n  width: 90%;\n  height: 65px;\n  box-sizing: border-box;\n  padding: 0 15px 0 32px;\n  background: #ffffff;\n  box-shadow: 0px 0px 20px 0px rgba(2, 30, 74, 0.04);\n  border-radius: 32px;\n  margin: 0 auto;\n  margin-bottom: 20px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.reward-activity .click-list .my-reward .left-box {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n}\n.reward-activity .click-list .my-reward .left-box .left-img {\n  width: 30px;\n  margin-right: 10px;\n}\n.reward-activity .click-list .my-reward .right-img {\n  width: 9px;\n  height: 16px;\n}\n.reward-activity .button-box {\n  margin: 0 auto;\n  margin-top: 40px;\n  width: 290px;\n  height: 45px;\n}\n","",{version:3,sources:["D:/h5_gitlab/ngcbapp_h5/src/components/wbs/rewardActivity.vue"],names:[],mappings:";AACA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,oBAAoB;CACrB;AACD;EACE,aAAa;EACb,YAAY;CACb;AACD;EACE,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,aAAa;CACd;AACD;EACE,aAAa;CACd;AACD;EACE,qCAAqC;EACrC,kBAAkB;EAClB,sBAAsB;CACvB;AACD;EACE,oDAA8D;EAC9D,2BAA2B;EAC3B,cAAc;EACd,YAAY;EACZ,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,6BAA6B;EAC7B,8BAA8B;EAC9B,+BAA+B;UACvB,uBAAuB;EAC/B,yBAAyB;EACzB,gCAAgC;UACxB,wBAAwB;CACjC;AACD;EACE,gBAAgB;EAChB,8BAA8B;EAC9B,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,iBAAiB;CAClB;AACD;EACE,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;EACZ,YAAY;EACZ,oBAAoB;EACpB,mBAAmB;CACpB;AACD;EACE,WAAW;EACX,cAAc;EACd,iBAAiB;EACjB,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,mDAAmD;CACpD;AACD;EACE,gBAAgB;EAChB,gCAAgC;EAChC,iBAAiB;EACjB,2BAA2B;EAC3B,4BAA4B;CAC7B;AACD;EACE,mBAAmB;EACnB,WAAW;CACZ;AACD;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EACvB,oBAAoB;EACpB,mDAAmD;EACnD,oBAAoB;EACpB,eAAe;EACf,oBAAoB;EACpB,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,wBAAwB;EACxB,oCAAoC;UAC5B,4BAA4B;EACpC,0BAA0B;EAC1B,4BAA4B;UACpB,oBAAoB;CAC7B;AACD;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,wBAAwB;EACxB,oCAAoC;UAC5B,4BAA4B;EACpC,0BAA0B;EAC1B,4BAA4B;UACpB,oBAAoB;EAC5B,oBAAoB;EACpB,gBAAgB;UACR,QAAQ;CACjB;AACD;EACE,YAAY;EACZ,mBAAmB;CACpB;AACD;EACE,WAAW;EACX,aAAa;CACd;AACD;EACE,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,aAAa;CACd",file:"rewardActivity.vue",sourcesContent:["\n.reward-activity {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background: #efefef;\n}\n.reward-activity .container {\n  height: 100%;\n  width: 100%;\n}\n.reward-activity .weui-cells__title {\n  padding-left: 0;\n  padding-right: 0;\n}\n.reward-activity .weui-cells::before {\n  border: none;\n}\n.reward-activity .weui-cells::after {\n  border: none;\n}\n.reward-activity .weui-btn_primary {\n  background-color: #15499a !important;\n  margin: 10px auto;\n  width: 90% !important;\n}\n.reward-activity .img-box {\n  background: url(../../assets/imgs/huodongbg@2x.png) no-repeat;\n  background-size: 100% 100%;\n  height: 180px;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n          align-items: flex-start;\n}\n.reward-activity .img-box .text {\n  font-size: 17px;\n  font-family: PingFang-SC-Bold;\n  font-weight: bold;\n  color: #ffffff;\n  line-height: 18px;\n  opacity: 0.8;\n  display: inline-block;\n  margin-top: 55px;\n  margin-left: 5vw;\n}\n.reward-activity .img-box .line {\n  margin-left: 5vw;\n  margin-top: 10px;\n  width: 18px;\n  height: 2px;\n  background: #55abfb;\n  border-radius: 2px;\n}\n.reward-activity .input-box {\n  width: 90%;\n  height: 226px;\n  background: #fff;\n  border-radius: 5px;\n  box-sizing: border-box;\n  padding: 10px 20px;\n  margin: 0 auto;\n  position: relative;\n  top: -69px;\n  z-index: 99;\n  box-shadow: 0px 0px 20px 0px rgba(2, 30, 74, 0.04);\n}\n.reward-activity .title {\n  font-size: 16px;\n  font-family: PingFang-SC-Medium;\n  font-weight: 500;\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n}\n.reward-activity .click-list {\n  position: relative;\n  top: -49px;\n}\n.reward-activity .click-list .my-reward {\n  width: 90%;\n  height: 65px;\n  box-sizing: border-box;\n  padding: 0 15px 0 32px;\n  background: #ffffff;\n  box-shadow: 0px 0px 20px 0px rgba(2, 30, 74, 0.04);\n  border-radius: 32px;\n  margin: 0 auto;\n  margin-bottom: 20px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.reward-activity .click-list .my-reward .left-box {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n}\n.reward-activity .click-list .my-reward .left-box .left-img {\n  width: 30px;\n  margin-right: 10px;\n}\n.reward-activity .click-list .my-reward .right-img {\n  width: 9px;\n  height: 16px;\n}\n.reward-activity .button-box {\n  margin: 0 auto;\n  margin-top: 40px;\n  width: 290px;\n  height: 45px;\n}\n"],sourceRoot:""}])},jdy8:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAYAAADG4PRLAAAEvklEQVR4Xu2dv2sUURDHZzZpAoI2QjwF0YumCigWaQSxsxGTTrAUa3+AdxFLC3NRRP8Ae62MiLWIVSoFLQzeIRK5pBFMK2ZHDmzOM/tm387ue3v5Xrvz5s37ft7Mvn17u8vN9qbQePy2e51DBzRDabY3fxLRfo1t7DYMgLEjyo4PAOvNjwAQAKNRAOfAaFD4BQKAfrpF0woAo0HhFwgA+ukWTSsAjAaFXyAAmKkb8+Vk5/e6n7b+rWQiOS/CjxQezAEyyy3eSd8o+jY1SScmZ0nkmcap+jowSXdOf3lw5IPGqaVNs9VfIOYXCp/mAElksbfSWFX0bWpy4vb3U2ky8V7jFACzVAJAzRzKtkEGGu2FooQWn4xaDyihDqXUt5NQQrVzbnc7lFCU0BEFkIHFE0vtARmIDEQGDhTQrkJnWlt3hNN5V4qxJK+6K9NPXXZ1yMCZ1tZV4fSiaywsyVp3Zfq+yy7oKrTZ7q8S8SVXkETypNdp3HDZ1QFgs91/TMTXXWMhkpe9TmPBZQeAFV9GAGCG4MjAihcxKKGZm6sooRnyBLsbgRKKEjqkABYxWMSMKqC9DsQ5EOfAIQWwCq14Ffp3V2LOdbFKTG97yw3nXyVqAXCpv0hC51xjZkk+anafgp4DXYPIe7wOAPOOyWUPgBUvYlxA8h4HQAD0X4XmnW0ue5TQihcxLiB5jwMgAI4ogL9U5E2jAvbIQGQgMnCggHYrrUCy/bcpMtAoAwdP6khKX60Bufwx07wQL7nsiMj8dhKTLIvQmqJvUxNO6JjyiSy8pcJU+QDO1E8nBYgtb5fmGZg3gBD2ABhCdcM+AdBQzBCuADCE6oZ9AqChmCFcAWAI1Q37BEBDMUO4AsAQqhv2OQA4eHvtOPwG14FHNQNptje/jc0bezUDhk28CnC8oSEyjQIAqFEpYhsAjBiOJjQA1KgUsQ0ARgxHExoAalSK2AYAI4ajCQ0ANSpFbAOAEcPRhIatNI1KRjZM8rrbaVxxuTve3ppjkncuu8FxbGZrVDKzCfiiH7MxlOeoBn9qAsAs/ABYXnJU4hkAK5G5vE4AsDxtK/EMgJXIXF4nAFietpV4BsBKZC6vEwDM0nYvPl5Wwlz7QUyfnH6F9hHRGaddnp2YPfmAp0bBwDbqrTQADExql+4BME4u6qgAUC1VnIYAGCcXdVQAqJYqTkMAjJOLOioAVEsVpyEAxslFHZU5wPF65TI954Q+u9RMhS4wkfODXy4/PsfNAeKt9T4Y/NsAYJZ2ym/o6r/c4g9qt5YACIDDCqCE2mdZlkdkIDIQGYhzYEYW1OGFrwAIgN4nTpwDcQ4cVgCfIfdOJq+G5hnoFUXNS6j1mPP4A0CDEppHcGtbAARA6zn1z3Vlq79AzM4PRZbx2QFS7oWWq0C2d2QgMrDc+VeHC/lyFUAGjigQ+9fL8kwIlFCU0DzzJb8tSqhRCWXma0TSzY+gWAsROUvE9xRe7B8vU65CT97dOCy/+KArxkQmt9cfTjs/IHbk5sbU1CTPuvwNjqtLqMZZYJtgAPV3I/Cakaw5AoCBM6ho9wBYVMHA7QEwMICi3QNgUQUDtwfAwACKdg+ARRUM3B4AAwMo2j0AFlUwcPs9CfAPoGDLGur2blMAAAAASUVORK5CYII="},n2u8:function(t,n,i){var e=i("MAF+");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i("FIqI")("4b8fa58e",e,!1,{})},yofV:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAABACAYAAAByZdXUAAAENElEQVRoQ83aS4gcRRgH8P9X9sisB3cO5uTj5OukojcNCnZVTSa4PoKTBBWJ4BNyNEHEx16i+Dj6iCiI+EIHn5s4me4aUcE9uQEViYIXHyfXhdmAzpoZ+5MKPaEcd7Mz09U99m1g2O9HV0/Xv75vSUr5OBE9AuA7IcStrVbrR0zxIqVUD0CQGpaFEKrVan09LZMFfQxgzgEcB7A9juMvp4Giubm5s7rd7jtEdIMD6CZJsqPdbh8pGkW2YL1eP3N1dfVVZr7NAfSY+Q5jzLtFok6C7DU/Py8WFxefY+YHHEDCzPcbY14uCnUKNCiolDoA4GEXQET7oyh6pgjUf0C2qJTyQSIaBjwZx/G/oHkA1wXZQkqpuwG8BEA4hQ9WKpW9jUbj7zww9m9uCEpRdQBvAig5gLcrlcqeRqNxIg/UaUHp8lWJ6AMAMw7gcLlc3rmwsPCnb9SmIFtQa301MzcBnO0AvmDmG40xqz5RI4FswTAMLxNCGABbBgBmPloqlbY1m81lX6iRQbZgtVq9MEmSNoALHNQPpVJJNpvNX32gxgLZgrVa7bx+vx8DuNQB/CKEuN5HUhgblKK29Pt9+0xd5aB+F0LIrElhIlD665sloo8AXOegMieFiUEWkUdSyASyKN9JITPIonwmBS+gwTPkIyl4BflICt5BWZNCLqAsSSE30KRJIVfQJEkhd9C4SaEQ0DhJoTDQqEmhUNAoSaFw0GmSQpeZ9VRAg6SwtrbWsI0NJ778MW3Q+zYZO6C/pgKSUtpwdwjAVgdzgojuLBxUq9Vs/I0AXOFgfmNmaYz5tlBQekD4FMBFDuanNIufbCUWBgrD8GIhhMWc62COBUGg3SNUISCllF0ee3Q6x8F8FQTB9uFDZu4gKeVWIjo8dAz/jJlvXu8YnitIa11j5veGGhUL5XJ590aNitxAWutdzPy628ohordWVlb2LC0t2Vb0ulcuIK31vcz8otvsYuYXjDF7AfBGmFx+ZUqp/QCecosS0YEoiuy0YNPL5x0irfUTzPyQW5WZ9xljnt1Ukn7BC6her5/R6XSeB3CfUzixn+M4fmVUjJcls0fpTqfzGoDdTmH70N4ex7Hdzce6Mt0h22xYJ0LYXHOLMaY1liTrkqU7th3cXOsUPk5EtSiKFifBTLxkdsfu9XpHiOhKp/BykiSy3W5/MylmIpDdsXu9niGiS5zCPwshwsJbemnT0+7Y5zuY74MgUIU3PavV6uVJkti2sLtjLwVBUCu8LayUugbAJ0M79ufMfFPhjfMwDLcJIWwYPzVaYOZDMzMzuwofLUgpdxLRG8M79uzs7F2FD1+klPcQ0cH/xXhKa72PmZ8eep9MZ4Dno3Hp5cXos7WbGeS7+Z0JlMd4IBNIa/2hfcG5O/ZU/9VCKWWHuYMhr5cRU6Y7pJR6DMCjAI4JIXb42LGzgP4BJBgvGqrHabkAAAAASUVORK5CYII="}});
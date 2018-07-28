define("controller",["lodash","core","skins"],function(e,t,n){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1926)}({0:function(t,n){t.exports=e},1925:function(e,t,n){var i;void 0===(i=function(){"use strict";var e={"platform.components.skins.controllerIconAndNameSkin":{react:[["div","inlineContent",[],{},["img","icon",[],{}],["span","name",[],{}]]],css:{"%":"z-index:70;display:table;","%inlineContent":"min-width:60px;max-width:96px;min-height:60px;max-height:96px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;","%icon":"display:block;margin:6px auto;box-shadow:0px 2px 8px 0px rgba(0, 0, 0, 0.16), 0px -1px 1px 0px rgba(0, 0, 0, 0.1), 0px 1px 1px 0px rgba(0, 0, 0, 0.4);border-radius:13px;width:48px;height:48px;","%name":"display:inline-block;width:100%;padding:0 1px;box-sizing:border-box;text-overflow:ellipsis;text-align:center;overflow:hidden;line-height:18px;max-height:calc(2 * 18px);text-shadow:0px 2px 6px rgba(0, 0, 0, 0.7), 0px -1px 1px rgba(0, 0, 0, 0.5), 0px 1px 1px rgba(0, 0, 0, 0.88);color:#ffffff;font-family:HelveticaNeueW01-65Medi, HelveticaNeueW02-65Medi, HelveticaNeueW10-65Medi, Helvetica Neue, Helvetica, Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, sans-serif;font-size:13px;"}},"platform.components.skins.controllerSkin":{react:[],css:{"%":"display:none;"}}};return e}.apply(t,[]))||(e.exports=i)},1926:function(e,t,n){var i,r;i=[n(0),n(2),n(7),n(1925)],void 0===(r=function(e,t,n,i){"use strict";var r={displayName:"Controller",mixins:[t.compMixins.skinBasedComp],getSkinProperties:function(){return{"":{style:{width:"",height:""}}}}};return t.compRegistrar.register("platform.components.AppController",r),n.skinsMap.addBatch(i),r}.apply(t,i))||(e.exports=r)},2:function(e,n){e.exports=t},7:function(e,t){e.exports=n}})});
//# sourceMappingURL=controller.min.js.map
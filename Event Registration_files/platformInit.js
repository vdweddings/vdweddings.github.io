define("platformInit",["lodash","experiment","host-worker-init"],function(e,r,t){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var i in e)t.d(n,i,function(r){return e[r]}.bind(null,i));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=1196)}({0:function(r,t){r.exports=e},1183:function(e,r,t){var n,i;n=[t(0),t(261),t(188)],void 0===(i=function(e,r,t){"use strict";return function(n){var i=n.appApi,o=n.siteModel,a=n.isMobileView,s=n.queryUtil,u=n.currentUrl,p=n.isBot,c=n.fetchScripts;u=u||e.get(o,"currentUrl.full",window.document.location.href);var l=t.buildScriptsSources(o.serviceTopology,{isDebug:s.getParameterByName("debug")}),d=l.sdkSource,f=l.namespacesSdkSource,v=l.externalComponentsSource,g=l.wixCodeNamespacesAndElementorySupportSource,m=function(e){return"false"!==e&&("true"===e||!window.Worker||p)}(s.getParameterByName("useWixCodeFallback")),y={isMobileView:a,sdkSource:d,namespacesSdkSource:f,externalComponentsSource:v,wixCodeNamespacesAndElementorySupportSource:g,runtimeSource:s.getParameterByName("WixCodeRuntimeSource"),useWixCodeFallback:m},w=s.getParameterByName("viewerPlatformAppSources"),S=s.getParameterByName("viewerPlatformOverrides");if(S)try{S=JSON.parse(S)}catch(e){}y.applications=r.getAppsBaseInfo({rendererModel:o.rendererModel,clientSpecMap:o.rendererModel.clientSpecMap,serviceTopology:o.serviceTopology,viewerPlatformAppSources:w,viewerPlatformOverrides:S,santaBase:o.santaBase}),function(r){i.init(o,r,y,c),function(r){return e.some(r,{type:"siteextension"})||y.applications.length}(r)&&(i.preLoadUserCode(o,u),o.publicModel&&i.preLoadWidgets(o,u))}(o.rendererModel.clientSpecMap)}}.apply(r,n))||(e.exports=i)},1184:function(e){e.exports={WORKER_CREATED:{endpoint:"platform-viewer",src:79,eventId:101,params:{worker_id:"worker_id",ts:"ts"}},WORKER_TERMINATED:{endpoint:"platform-viewer",src:79,eventId:102,params:{worker_id:"worker_id",ts:"ts"}}}},1185:function(e,r,t){var n,i;n=[t(0)],void 0===(i=function(e){"use strict";function r(e){return e&&e.replace(/^https?\:/,"")}function t(t,n){var i=r(t);if(e.startsWith(i,n)){var o=i.slice(n.length).match(/\/?services\/santa\/([\w.]+)/);return o&&o[1]}}return{buildUrl:function(e,n){var i=n.runtimeSource,o=e.serviceTopology,a=function(e,n,i,o){if(e)return e;var a=r(o);return t(n,a)||t(i,a)}(i,e.santaBase,o.scriptsLocationMap.santa,o.scriptsDomainUrl),s="/node_modules/santa-wix-code/dist/wixcode-worker.js";return function(e){return/^https?:\/\/localhost(:[0-9]+)?\/?$/.test(e)}(o.scriptsLocationMap.santa)?s:"/_partials/santa/"+a+s}}}.apply(r,n))||(e.exports=i)},1186:function(e,r,t){var n,i;n=[t(0),t(188),t(1185)],void 0===(i=function(e,r,t){"use strict";function n(e){return e.publicModel?"site":"preview"}return{build:function(i,o,a){var s=i.wixBiSession,u=s.viewerSessionId,p=s.visitorId,c=s.initialTimestamp;return{getElementoryArguments:function(e){return r.getElementoryArguments(i,o,e,n(i))},getUserCodeUrlsDetails:r.getUserCodeUrlsDetails,viewMode:n(i),locale:i.rendererModel.languageCode,userWarmup:i.userWarmup,workerUrl:t.buildUrl(i,a),wixCodePlatformRoot:i.serviceTopology.scriptsLocationMap["wix-code-platform"],santaBase:i.santaBase,baseVersion:i.baseVersion,ownerId:i.rendererModel.userId,viewerSessionId:u,visitorId:p,initialTimestamp:c,metaSiteId:i.rendererModel.metaSiteId,openExperiments:function(r){return e.reduce(r,function(e,r,t){return"new"===r&&e.push(t),e},[])}(i.rendererModel.runningExperiments)}}}}.apply(r,n))||(e.exports=i)},1187:function(e,r){e.exports=t},1188:function(e,r,t){var n,i;n=[t(0),t(8)],void 0===(i=function(e,r){"use strict";var t={APP:"APP",COMPONENT:"COMPONENT"};function n(e,r,t){var n=e.getDataByQuery(r,t);return n&&n.content?JSON.parse(n.content):null}return{getStyleParams:function(t,n,i){var o=t.getAllStylesFromPage("masterPage"),a=t.rendererModel.siteInfo.documentType,s=t.getDataByQuery("masterPage").characterSets,u=t.isVisualFocusEnabled(),p=r.isOpen("sv_newFonts2017",t),c=n.getStyleDataToPassIntoApp(i,o,t.santaBase,a,s,t.serviceTopology,!0,p);return e.assign(c,{isVisualFocusEnabled:u})},getPublicData:function(e,r,i,o){var a={};return a[t.APP]=n(e,"tpaData-"+r,"masterPage"),a[t.COMPONENT]=n(e,i,o),a}}}.apply(r,n))||(e.exports=i)},1189:function(e,r,t){var n;void 0===(n=function(){"use strict";return{getCookie:function(e){if("undefined"!=typeof document)return function(e){for(var r={},t=e.split(/;\s*/),n=0,i=t.length;n<i;n++){var o=t[n].split("=");r[o[0]]=o[1]}return r}(window.document.cookie)[e]}}}.apply(r,[]))||(e.exports=n)},1190:function(e,r,t){var n,i;n=[t(188)],void 0===(i=function(e){"use strict";return{appStudioBundler:function(r,t){var n=t.clientSpec,i=t.serviceTopology,o=n.appFields.platform.studio,a=o.wixCodeInstanceId,s=o.wixCodeGridId;return(e.parseQueryParams(window.location.href)["app-studio-bundler-override"]||"https://"+a+".static.pub."+i.wixCloudBaseDomain+"/static/v2")+"/"+s+"/"+a+"/appstudio.viewer.js?module-name=bundle"}}}.apply(r,n))||(e.exports=i)},1191:function(e,r,t){var n,i;n=[t(0)],void 0===(i=function(e){"use strict";return{clientSpec:function(r,t){var n=t.clientSpec;return e.get(n,r)}}}.apply(r,n))||(e.exports=i)},1192:function(e,r,t){var n,i;n=[t(0)],void 0===(i=function(e){"use strict";return{serviceTopology:function(r,t){var n=t.serviceTopology;return e.get(n,r)}}}.apply(r,n))||(e.exports=i)},1193:function(e,r,t){var n,i;n=[t(0),t(1192),t(1191),t(1190)],void 0===(i=function(e){"use strict";var r=e.drop(arguments,1);return e.assign.apply(e,[{}].concat(function(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r];return t}return Array.from(e)}(r)))}.apply(r,n))||(e.exports=i)},1194:function(e,r,t){var n,i,o=function(){return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,r){var t=[],n=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(t.push(a.value),!r||t.length!==r);n=!0);}catch(e){i=!0,o=e}finally{try{!n&&s.return&&s.return()}finally{if(i)throw o}}return t}(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();n=[t(0),t(1193)],void 0===(i=function(e,r){"use strict";var t=/{urlTemplate:(.*)}/,n=function(t,n){return e.reduce(r,function(t,i,o){return function(t,n,i){var o=new RegExp("{"+i+":(.*?)}","g");return t.replace(o,function(t,o){var a=r[i](o,n);if(e.isUndefined(a))throw new Error("Data getter '"+i+"' returned no value for data '"+o+"'");return a})}(t,n,o)},t)};return{resolve:function(r,i){var a=t.exec(r)||[],s=o(a,2)[1];return e.isUndefined(s)?r:n(s,i)}}}.apply(r,n))||(e.exports=i)},1195:function(e,r,t){var n,i;n=[t(0),t(454),t(1187),t(452),t(1186),t(451),t(1184)],void 0===(i=function(e,r,t,n,i,o,a){"use strict";var s=t.workerManagerFactory;function u(r){var t=r.rendererModel.clientSpecMap.toJS?r.rendererModel.clientSpecMap.toJS():r.rendererModel.clientSpecMap;return r.rendererModel.wixCodeModel&&e.some(t,{type:"siteextension"})}return{getApi:function(){var t=n.get(),p=[],c=[],l=!1,d=!1,f=!1,v=!1,g=void 0,m=void 0;function y(e){o.shouldUseFallbackReportBI(e,p)&&o.reportBiWithWixBiSession(e),p.forEach(function(r){r(e)})}return{init:function(r,n,p,c){if(e.isUndefined(p.applications)&&(p.applications=[]),l)console.warn("Wix code is already initiated");else if(m=p.applications.length>0,u(r)||m){var d=i.build(r,n,p);(g=s.getWorkerManager(d,function(){try{return window.localStorage.setItem("",""),window.localStorage.removeItem(""),!0}catch(e){return!1}}(),p)).initialize(y,function(e){return o.reportBiWithWixBiSession({reportDef:a.WORKER_CREATED,params:{worker_id:e,ts:Date.now()-r.wixBiSession.initialTimestamp}})},function(e){return o.reportBiWithWixBiSession({reportDef:a.WORKER_TERMINATED,params:{worker_id:e,ts:Date.now()-r.wixBiSession.initialTimestamp}})},c),t.setMessageHandler(function(e,r){return g.handleWidgetsCommand(e,r)}),l=!0}},sendMessage:function(e,r){e&&t.sendOrHoldMessage(function(e){return c.reduce(function(e,r){return r(e)},e)}(e),r)},registerMessageHandler:function(e){p.push(e)},registerMessageModifier:function(e){c.push(e)},unregisterMessageHandler:function(r){e.pull(p,r)},preLoadWidgets:function(e,n){!d&&u(e)&&r.asyncGetPreLoadMessage(e,n,function(e){d||(d=!0,t.sendOrHoldMessage(e))})},preLoadUserCode:function(e,n){(!f&&u(e)||m)&&r.asyncGetPreLoadUserCodeMessage(e,n,function(e){f||(f=!0,t.sendOrHoldMessage(e))})},preInitWidgets:function(e,n){!v&&u(e)&&r.asyncGetPreInitMessage(e,n,function(e){v||(v=!0,t.sendOrHoldMessage(e))})},isAppInitiated:function(){return l},getWorkerById:function(e){return g&&g.get(e)},destroyAppsContainer:function(){g&&(g.terminateStandbyWorker(),l=!1,t=n.get())}}}}}.apply(r,n))||(e.exports=i)},1196:function(e,r,t){var n,i;n=[t(1195),t(1183),t(453),t(261),t(454),t(452),t(451),t(188)],void 0===(i=function(e,r,t,n,i,o,a,s){"use strict";return{getAppApi:e.getApi,initMainR:r,specMapUtils:t,appsUtils:n,biUtils:a,widgetsPreLoader:i,registerDeps:i.registerDeps,messageProxy:o,wixCodeUrlUtils:s}}.apply(r,n))||(e.exports=i)},188:function(e,r,t){var n,i,o=function(){return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,r){var t=[],n=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(t.push(a.value),!r||t.length!==r);n=!0);}catch(e){i=!0,o=e}finally{try{!n&&s.return&&s.return()}finally{if(i)throw o}}return t}(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();n=[t(0),t(1189)],void 0===(i=function(e,r){"use strict";function t(e){var r=e.appConfig.userScript;return{id:e.id,url:r.url,scriptName:r.scriptName,displayName:r.displayName,routerData:e.routerData}}return{getUserCodeUrlsDetails:function(r,n){var i=[],o=e.find(r,function(e){return e.id===n&&"masterPage"!==e.type}),a=e.find(r,{id:n,type:"masterPage"});return a&&i.push(t(a)),o&&i.push(t(o)),i},getElementoryArguments:function(t,n,i,o){var a=function(r){return e(r).map("appConfig").find()}(i);if(a)return{baseUrl:function(r,t){return r.publicModel?e.trimEnd(r.publicModel.externalBaseUrl,"/")+"/_api/wix-code-public-dispatcher/siteview":"//"+e.find(t,{type:"siteextension"}).instanceId+".dev."+r.serviceTopology.wixCloudBaseDomain}(t,n),queryParameters:function(r){return e.reduce(r,function(r,t,n){return e.isUndefined(t)?r:r.concat([n+"="+t])},[]).join("&")}({scari:a.scari,instance:a.instance,viewMode:o}),options:{headers:{"X-XSRF-TOKEN":r.getCookie("XSRF-TOKEN")}}}},parseQueryParams:function(e){var r={};return e.slice(e.indexOf("?")+1).split("&").forEach(function(e){var t=e.split("="),n=o(t,2),i=n[0],a=n[1];r[i]=decodeURIComponent(a)}),r},buildScriptsSources:function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{sdkSource:e.trimEnd(r.scriptsLocationMap["js-wixcode-sdk"],"/")+"/lib/"+(t.isDebug?"wix.js":"wix.min.js"),namespacesSdkSource:e.trimEnd(r.scriptsLocationMap["wixcode-namespaces"],"/")+"/"+(t.isDebug?"wixcode-namespaces.js":"wixcode-namespaces.min.js"),externalComponentsSource:e.trimEnd(r.scriptsLocationMap["wix-ui-santa"],"/")+"/wixcode/"+(t.isDebug?"wixcode-components.js":"wixcode-components.min.js"),wixCodeNamespacesAndElementorySupportSource:e.trimEnd(r.scriptsLocationMap["wix-code-platform"],"/")+"/wixCodeNamespacesAndElementorySupport.min.js"}}}}.apply(r,n))||(e.exports=i)},261:function(e,r,t){var n,i;n=[t(0),t(8),t(453),t(1188)],void 0===(i=function(e,r,t,n){"use strict";var i="1380b703-ce81-ff05-f115-39571d94dfcd",o="675bbcef-18d8-41f5-800e-131ec9e08762";function a(r,t,n){if(r){var i=function(r,t){return e(t).map(function(e){return r.getDynamicPageData(e)}).find()}(r,n);if(i){var o=i.routerData,a=i.routerDefinition;if(o&&a)if("wix-code"===a.appDefinitionId)e.forEach(n,function(r){e.forEach(t,function(e){e.id===r&&(e.routerData=o)})});else{var s=e.find(t,{id:a.appDefinitionId});s&&(s.routerData=o)}}}}function s(r){return e(r).reject({displayName:"siteextension"}).map(function(r){return e.assign({type:u.APPLICATION},r)}).value()}var u={POPUP:"Popup",PAGE:"Page",MASTER_PAGE:"masterPage",APPLICATION:"Application"};function p(r){return!!e.get(r,["wixCodeModel","appData","codeAppId"])}function c(r,t,n){r=e.without(r,"masterPage");var i=s(n);return function(r,t,n,i,o){if(p(i.rendererModel)&&e.find(r,t)){var a=i.isPlatformAppOnPage("masterPage","wixCode");e.forEach(n,function(r){var t=i.isPlatformAppOnPage(r,"wixCode"),n=i.getDataByQuery(r),s=e.get(n,"isPopup");t&&o.push({id:r,type:s?u.POPUP:u.PAGE,displayName:i.getPageTitle(r)}),!s&&a&&o.push({id:r,type:u.MASTER_PAGE})})}}(n,{displayName:"siteextension"},r,t,i),a(t,i,r),i}function l(){for(var e=arguments[0],r=1;r<arguments.length;++r)e=e.replace(/\/$/,"")+"/"+arguments[r].replace(/^\//,"");return e}function d(r,t,n,i){if(p(i)&&e.find(r,{type:"siteextension"})&&!e.find(r,{appDefinitionId:"dataBinding"})){var o=function(e,r,t){var n=l(e.scriptsDomainUrl,"services",r);return t?l(n,t):e.scriptsLocationMap[r]}(t,"dbsm-viewer-app",n.dataBinding);return e.assign({},r,{fakeApplicationId:{appDefinitionId:"dataBinding",appFields:{platform:{viewerScriptUrl:l(o,"/app.js"),viewerVerboseScriptUrl:l(o,"/app.verbose.js")}},type:u.APPLICATION}})}return r}function f(n,a,s,u){return e(n).filter(function(t){return!(t.appDefinitionId===i&&!r.isOpen("sv_ecomViewerScriptUrl",{rendererModel:a}))&&(t.appDefinitionId===o?p(a):function(r){return e.has(r,"appFields.platform.viewerScriptUrl")}(t))}).map(function(n){var i=e.pickBy({id:n.appDefinitionId,displayName:n.type,appInnerId:n.applicationId,instance:n.instance}),o=function(t,n,i,o){var a=e.get(t,"appFields.platform.viewerScriptUrl"),s=e.get(t,"appFields.platform.viewerVerboseScriptUrl"),u=t.appDefinitionId;if(r.isOpen("wixCodeVerboseMode")&&n&&s)return s;if(o){var p=e.find(o,{appDefinitionId:u});if(p)return i.staticServerUrl+"services/"+p.bundle}return a}(n,a.previewMode,s,u);return o&&(i.url=t.resolveUrl(o,{serviceTopology:s,clientSpec:n})),i}).value()}function v(r){var t=function(r){return e(r||"").split(",").invokeMap("split",/:(.+)/).fromPairs().value()}(r.viewerPlatformAppSources),n=f(d(r.clientSpecMap,r.serviceTopology,t,r.rendererModel),r.rendererModel,r.serviceTopology,r.viewerPlatformOverrides);return function(r,t,n){if(e.get(r,"port")&&e.get(r,"path")&&e.get(r,"id")){n=e.endsWith(n,"/")?n.slice(0,-1):n;var i=e.template("<%= santaBase %><%= port %>/<%= path %>"),o=void 0;o=/^(http(s)?:)?\/\//.test(r.path)?r.path:"80"===r.port?i({santaBase:n,port:"",path:r.path}):i({santaBase:n,port:":"+r.port,path:r.path}),t.push({type:u.APPLICATION,id:r.id,url:o,displayName:r.id})}}(t,n,r.santaBase),n}function g(r,t,n){return c(t,n,v({clientSpecMap:r,viewerPlatformAppSources:e.get(n,["currentUrl","query","viewerPlatformAppSources"]),serviceTopology:n.serviceTopology,santaBase:n.santaBase,rendererModel:n.rendererModel}))}function m(t,n,o){return"platform.components.AppController"===t.componentType||"platform.components.AppWidget"===t.componentType||function(t,n,o){if(!y(t.componentType))return!1;var a=t.dataQuery.replace("#",""),s=n.getDataByQuery(a,o.id),u=n.getClientSpecMapEntry(s.applicationId);if(e.get(u,"appDefinitionId")===i&&!r.isOpen("sv_ecomViewerScriptUrl",n))return!1;return e.get(u,"appFields.platform.viewerScriptUrl")}(t,n,o)}function y(r){return e.startsWith(r,"wysiwyg.viewer.components.tpapps.")||e.startsWith(r,"native.components")}function w(r,t,i){var o=e.filter(r,"json"),a=function(r,t){return e(r).transform(function(r,t){e.assign(r,e.get(t,"data.connections_data"))},{}).values().flatMap(function(r){var n=t.resolveData(r,null,t.dataTypes.CONNECTIONS);return e.get(n,"items")}).groupBy("controllerId").value()}(e.map(o,"json"),t);return e.flatMap(o,function(r){var o=e.filter(e.get(r,"json.structure.DESKTOP"),function(e){return m(e,t,r)});return e.map(o,function(o){var s=o.dataQuery.replace("#",""),u=t.getDataByQuery(s,r.id);return y(o.componentType)&&(u.controllerType=function(r,t){var n=t.getClientSpecMapEntry(r.applicationId);return n?r.widgetId||e.findKey(n.widgets,["appPage.hidden",!1]):null}(u,t),u.settings={widgetStyle:n.getStyleParams(t,i,o.styleId),publicData:n.getPublicData(t,u.applicationId,u.tpaData,r.id)}),e.omitBy({controllerBehaviors:e.get(t.getDataByQuery(o.behaviorQuery,r.id,t.dataTypes.BEHAVIORS),"items",[]),controllerData:u,controllerId:s,compId:o.id,connections:e.get(a,s),dependencies:function(r,t,n){var i=n.getDataByQuery(r.connectionQuery,t.id,n.dataTypes.CONNECTIONS);return i?e(i.items).filter({type:"ConnectionItem"}).map("controllerId").value():[]}(o,r,t)},e.isUndefined)})})}return{getApplications:g,getUserCodeDefinitions:function(r,t,n){return e.reject(g(r,t,n),{type:u.APPLICATION})},getAppsBaseInfo:function(r){var t=v(r);return e.filter(s(t),"url")},getContextInitData:function(r,t,n){var i=w(function(r,t){var n=[{id:r,json:t.getPageData(r)}];if(e.get(t.getDataByQuery(r),"isPopup"))return n;var i=t.MASTER_PAGE_ID;return n.concat({id:i,json:t.getMasterPageData()})}(t,r),r,n);return e.mapValues(function(r){return e(r).groupBy("controllerData.applicationId").mapValues(function(r){return e(r).keyBy("controllerId").mapValues(function(r){return e.pick(r,["controllerData","controllerBehaviors","connections","compId","dependencies"])}).value()}).value()}(i),function(e){return{controllers:e}})}}}.apply(r,n))||(e.exports=i)},451:function(e,r,t){var n,i;n=[t(0)],void 0===(i=function(e){"use strict";return{reportBiWithWixBiSession:function(e){var r=e.reportDef,t=e.params;"undefined"!=typeof window&&(r.errorCode?window.wixBiSession.sendError(r,t.p1,t.p2,t.p3,t.p4):window.wixBiSession.sendBI(r.endpoint,r.eventId,r.src,t))},shouldUseFallbackReportBI:function(r,t){return"WIX_CODE_SITE_API"===r.intent&&"reportBI"===r.type&&e.isEmpty(t)&&"undefined"!=typeof window}}}.apply(r,n))||(e.exports=i)},452:function(e,r,t){var n;void 0===(n=function(){"use strict";return{get:function(){var e=[],r=null;return{sendOrHoldMessage:function(t,n){r?r(t,n):e.push({message:t,ports:n})},setMessageHandler:function(t){for(r=t;e.length>0;){var n=e.shift();r(n.message,n.ports)}}}}}}.apply(r,[]))||(e.exports=n)},453:function(e,r,t){var n,i;n=[t(0),t(1194)],void 0===(i=function(e,r){"use strict";return{getAppSpec:function(r,t){return e.find(r,{appDefinitionId:t})||e.find(r,{type:"siteextension"})},resolveEditorScriptUrl:function(t,n){var i=e.get(t,["appFields","platform"]);if(!e.isUndefined(i)){var o=i.editorScriptUrl;if(!e.isUndefined(o)){var a=r.resolve(o,n);return e.merge({},t,{appFields:{platform:{editorScriptUrl:a}}})}}return t},resolveUrl:r.resolve}}.apply(r,n))||(e.exports=i)},454:function(e,r,t){var n,i;n=[t(261),t(0)],void 0===(i=function(e,r){"use strict";var t=null,n=null,i=null,o=null,a=[];function s(e,i,s,c){if(p())return a.push([e,i,s,c]),void requirejs(["utils","host-platform-api","site-widgets","wixCode"],u);var l=c(t);l.currentUrl=t.urlUtils.parseUrl(e);var d=t.wixUrlParser.parseUrl(l,e),f=d&&d.pageId;if(f&&!r.includes(r.get(l,"publicModel.siteMembersProtectedPages"),f)){var v=i(n,l,f),g=o.wixCodeWidgetService.getWixCodeSpec(l.getClientSpecMap());s(o.messageBuilder.getExtendedMessage(v,l.rendererModel.wixCodeModel||{},g,l))}}function u(e,r,u,c){p()&&(t=e,n=r,i=u,o=c,a.forEach(function(e){return s.apply(void 0,function(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r];return t}return Array.from(e)}(e))}),a.length=0)}function p(){return!(t&&n&&i&&o)}return{asyncGetPreLoadMessage:function(r,t,n){s(t,function(t,n,i){var o=e.getApplications(r.rendererModel.clientSpecMap,[i],n),a=r.routers||{configMap:{}},s=t.modelBuilderDataHelper.getApi(n),u=t.globalsBuilder.build(s,!0,i);return t.messageBuilder.loadWidgetsMessage(o,a.configMap,[i],function(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}({},i,u.toJson()))},n,function(e){return new e.FullSiteData(r,function(){})})},asyncGetPreLoadUserCodeMessage:function(r,t,n){s(t,function(t,n,i){var o=e.getUserCodeDefinitions(r.rendererModel.clientSpecMap,[i],n);return t.messageBuilder.loadUserCodesMessage(o,[i])},n,function(e){return new e.FullSiteData(r,function(){})})},asyncGetPreInitMessage:function(r,n,i){s(n,function(r,n,i){var o={};return o[i]=e.getContextInitData(n,i,t.styleUtils),r.messageBuilder.initWidgetsMessage(o)},i,function(){return r})},registerDeps:u}}.apply(r,n))||(e.exports=i)},8:function(e,t){e.exports=r}})});
//# sourceMappingURL=platformInit.min.js.map
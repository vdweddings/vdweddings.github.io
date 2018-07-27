define("loginSocialBar",["lodash","utils","core","santaProps","coreUtils","prop-types","santa-components","skins","zepto","reactDOM","textCommon","icon"],function(t,e,n,i,o,r,a,s,p,d,l,g){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1239)}({0:function(e,n){e.exports=t},1:function(t,n){t.exports=e},11:function(t,e){t.exports=p},12:function(t,e){t.exports=d},1236:function(t,e,n){var i,o;i=[n(0),n(2),n(4),n(1)],void 0===(o=function(t,e,n,i){"use strict";var o=e.dataRequirementsChecker,r="3d84bae5ad4d4d8a96de15e9f4b79a08.svg";function a(t,e){return i.svg.createSvgFetchRequest(t.serviceTopology.mediaRootUrl,t,e)}return t.map({"wysiwyg.viewer.components.LoginSocialBar":"data.iconItemsRef.menuRef.items","wysiwyg.viewer.components.mobile.TinyMenu":"data.loginSocialBarRef.iconItemsRef.menuRef.items"},function(e,i){return o.registerCheckerForCompType(i,function(e,i,o,s){var p=[a(o,r)],d=t.get(s,e);t.forEach(d,function(e){var n=t.get(e,"iconRef.svgId");n&&p.push(a(o,n))});var l=t.get(s,["data","language"]);return p.push(n.translationsLoader.getRequest(o,l,{initiator:i})),t.compact(p)}.bind(null,e,i))}),{DEFAULT_AVATAR_ID:r}}.apply(e,i))||(t.exports=o)},1237:function(t,e,n){var i;void 0===(i=function(){"use strict";var t={"wysiwyg.viewer.skins.LoginSocialBarSkin":{react:[["button","login",[],{}],["nav","buttons",[],{}],["button","user",[],{},["div","icon",[],{}],["div","text",[],{}],["div","arrow",[],{},["svg",null,[],{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"8",viewBox:"0 0 14 8"},["path",null,[],{fillRule:"nonzero",d:"M1.707.293L.293 1.707l6 6a1 1 0 0 0 1.397.016l6-5.726L12.31.55 7.016 5.602 1.707.292z"}]]]],["nav","dropdownMenu",[],{}]],exports:{button:{skin:"wysiwyg.viewer.skins.LoginSocialButtonSkin"},avatar:{skin:"wysiwyg.viewer.skins.IconSkin"}},params:{bg:"BG_COLOR_ALPHA",brw:"BORDER_SIZE",brd:"BORDER_COLOR_ALPHA",rd:"BORDER_RADIUS",shd:"BOX_SHADOW","bg-dd":"BG_COLOR_ALPHA","brw-dd":"BORDER_SIZE","brd-dd":"BORDER_COLOR_ALPHA","rd-dd":"BORDER_RADIUS","shd-dd":"BOX_SHADOW",fnt:"FONT","fnt-size-dd":"TEXT_SIZE","txt-dd":"TEXT_COLOR","txt-slct-dd":"TEXT_COLOR","txth-dd":"TEXT_COLOR",txth:"TEXT_COLOR",txt:"TEXT_COLOR"},paramsDefaults:{bg:"transparent",brw:"0",brd:"color_15",rd:"0px",shd:"0 0 0 rgba(0, 0, 0, 0)","bg-dd":"color_11","brw-dd":"1px","brd-dd":"color_15","rd-dd":"0px","shd-dd":"0 0 0 rgba(0, 0, 0, 0)",fnt:"font_8","fnt-size-dd":"15px","txt-dd":"color_15","txt-slct-dd":"color_18","txth-dd":"color_14",txth:"color_17",txt:"color_18"},css:{"%":"display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:border-box;pointer-events:none;",'%[data-state~="loggedIn"]':"background-color:[bg];border:[brw] solid [brd];[rd]  [shd]",'%[data-state~="loggedIn"] %login':"display:none;",'%[data-state~="loggedIn"] %dropdownMenu':"z-index:99999;background-color:[bg-dd];border:[brw-dd] solid [brd-dd];box-sizing:border-box;[rd-dd]  [shd-dd]  [fnt]  font-size:[fnt-size-dd];position:absolute;min-width:100px;max-width:300px;",'%[data-state~="loggedIn"] %dropdownMenu a':"color:[txt-dd];padding-left:20px;padding-right:20px;display:-webkit-box;display:-webkit-flex;display:flex;line-height:260%;[rd-dd]    pointer-events:all;",'%[data-state~="loggedIn"] %dropdownMenu a[data-state~="selected"],%[data-state~="loggedIn"] %dropdownMenu a[data-preview~="selected"]':"color:[txt-slct-dd];",'%[data-state~="loggedIn"] %dropdownMenu a:hover,%[data-state~="loggedIn"] %dropdownMenu a[data-preview~="hover"]':"color:[txth-dd];",'%[data-state~="loggedIn"] %dropdownMenu a > div:first-child':"overflow:hidden;text-overflow:ellipsis;white-space:nowrap;",'%[data-state~="loggedIn"] %dropdownMenu a > div:nth-child(2)':"opacity:0.6;",'%[data-state~="loggedIn"] %dropdownMenu hr':"margin:5px 20px 5px 20px;opacity:0.4;",'%[data-state~="loggedIn"] %user':"cursor:pointer;pointer-events:all;white-space:nowrap;padding-top:6px;padding-bottom:6px;",'%[data-state~="loggedIn"] %user:hover %text,%[data-state~="loggedIn"] %user[data-preview~="hover"] %text':"color:[txth];",'%[data-state~="loggedIn"] %user:hover %arrow path,%[data-state~="loggedIn"] %user[data-preview~="hover"] %arrow path':"fill:[txth];",'%[data-state~="loggedIn"] %icon':"display:inline-block;vertical-align:middle;",'%[data-state~="loggedIn"] %icon img':"border-radius:50%;",'%[data-state~="loggedIn"] %text':"color:[txt];[fnt]  display:inline-block;vertical-align:middle;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;min-width:60px;",'%[data-state~="loggedIn"] %arrow':"display:inline-block;vertical-align:middle;padding-left:14px;padding-right:14px;",'%[data-state~="loggedIn"] %arrow path':"fill:[txt];",'%[data-state~="loggedIn"] %buttons':"padding-top:6px;padding-bottom:6px;white-space:nowrap;",'%[data-state~="ltr"] %icon':"padding-right:14px;padding-left:initial;",'%[data-state~="ltr"] %buttons':"padding-left:14px;padding-right:initial;",'%[data-state~="ltr"] %login':"padding-right:14px;padding-left:initial;",'%[data-state~="ltr"][data-state~="avatarOnly"] %arrow':"padding-right:14px;padding-left:initial;",'%[data-state~="ltr"][data-state~="noButtons"] %icon':"padding-left:14px;",'%[data-state~="ltr"][data-state~="noButtons"][data-state~="textOnly"] %text':"padding-left:14px;padding-right:initial;",'%[data-state~="ltr"][data-state~="textOnly"] %login':"padding-left:14px;",'%[data-state~="rtl"] %icon':"padding-right:initial;padding-left:14px;",'%[data-state~="rtl"] %buttons':"padding-left:initial;padding-right:14px;",'%[data-state~="rtl"] %login':"padding-right:initial;padding-left:14px;",'%[data-state~="rtl"][data-state~="avatarOnly"] %arrow':"padding-right:initial;padding-left:14px;",'%[data-state~="rtl"][data-state~="noButtons"] %icon':"padding-right:14px;",'%[data-state~="rtl"][data-state~="noButtons"][data-state~="textOnly"] %text':"padding-right:14px;padding-left:initial;",'%[data-state~="rtl"][data-state~="textOnly"] %login':"padding-right:14px;",'%[data-state~="left"] %dropdownMenu a > div:nth-child(2)':"padding-left:12px;padding-right:initial;",'%[data-state~="right"] %dropdownMenu a > div:nth-child(2)':"padding-left:initial;padding-right:12px;",'%[data-state~="loggedOut"]':"background-color:[bg];border:[brw] solid [brd];[rd]  [shd]",'%[data-state~="loggedOut"] %user,%[data-state~="loggedOut"] %dropdownMenu,%[data-state~="loggedOut"] %buttons':"display:none;",'%[data-state~="loggedOut"] %login':"white-space:nowrap;padding-top:6px;padding-bottom:6px;color:[txt];[fnt]  [rd]  cursor:pointer;pointer-events:all;",'%[data-state~="loggedOut"] %login:hover,%[data-state~="loggedOut"] %login[data-preview~="hover"]':"color:[txth];",'%[data-state~="loggedOut"] %login span':"vertical-align:middle;",'%[data-state~="loggedOut"] %login %avatar':"display:inline-block;vertical-align:middle;padding-right:14px;padding-left:14px;"}},"wysiwyg.viewer.skins.LoginSocialButtonSkin":{react:[["a","link",[],{},["div","icon",[],{}],["div","text",[],{}],["div","badge",[],{}]]],exports:{icon:{skin:"wysiwyg.viewer.skins.IconSkin"}},params:{"badge-bg":"COLOR","badge-txt":"TEXT_COLOR"},paramsDefaults:{"badge-bg":"#E21C21","badge-txt":"color_11"},css:{"%":"position:relative;display:inline-block;","%icon":"border-radius:50%;","%badge":"background-color:[badge-bg];color:[badge-txt];border-radius:10px;position:absolute;top:0;text-align:center;height:18px;line-height:18px;letter-spacing:1px;","%badge span":"padding-left:6px;padding-right:6px;","% a":"display:block;pointer-events:all;"}}};return t}.apply(e,[]))||(t.exports=i)},1238:function(t,e,n){var i,o;i=[n(6),n(0),n(2),n(3),n(1),n(33),n(12),n(11),n(462),n(189)],void 0===(o=function(t,e,n,i,o,r,a,s,p,d){"use strict";var l=o.linkRenderer,g={AVATAR:"avatarOnly",TEXT:"textOnly",BOTH:"avatarAndText"},c="loggedIn",u="loggedInMenuOpened",h="loggedOut",m={32:"Space",13:"Enter",40:"ArrowDown"};function f(t){return t.loggedInMember===g.AVATAR||t.loggedInMember===g.BOTH}function b(t){return e.isArray(t.iconItems)&&t.iconItems.length>0}function v(t){return{isLoggedIn:t.isLoggedIn,$loggedIn:t.isLoggedIn?"loggedIn":"loggedOut",$direction:"rtl"===t.compProp.buttonsDirection?"rtl":"ltr",$dropdownDirection:"right"===t.compProp.dropDownTextAlignment?"right":"left",$iconsOnly:t.compData.loggedInMember,$noButtons:b(t)?"buttons":"noButtons"}}return{displayName:"loginSocialBar",mixins:[n.compMixins.skinBasedComp,r.textScaleMixin,n.compMixins.createChildComponentMixin],propTypes:e.assign({compData:i.Types.Component.compData.isRequired,compProp:i.Types.Component.compProp.isRequired,isMobileView:i.Types.isMobileView.isRequired,rootNavigationInfo:i.Types.Component.rootNavigationInfo.isRequired,currentUrlPageId:i.Types.Component.currentUrlPageId,linkRenderInfo:i.Types.Link.linkRenderInfo.isRequired,componentPreviewState:i.Types.RenderFlags.componentPreviewState,componentViewMode:i.Types.RenderFlags.componentViewMode,logout:i.Types.SiteMembersSantaTypes.logout.isRequired,showAuthenticationDialog:i.Types.SiteMembersSantaTypes.showAuthenticationDialog.isRequired,serviceTopology:i.Types.ServiceTopology.serviceTopology.isRequired,isLoggedIn:i.Types.MemberLogin.isLoggedIn.isRequired,language:i.Types.MemberLogin.language.isRequired,memberName:i.Types.MemberLogin.memberName.isRequired,memberAvatar:i.Types.MemberLogin.memberAvatar,memberDefaultAvatar:i.Types.MemberLogin.memberDefaultAvatar,menuItems:i.Types.MemberLogin.menuItems,iconItems:i.Types.MemberLogin.iconItems,svgPropsForMemberLoginIconItems:i.Types.VectorImage.svgPropsForMemberLoginIconItems},i.santaTypesUtils.getSantaTypesByDefinition(p),i.santaTypesUtils.getSantaTypesByDefinition(d)),getInitialState:function(){return e.assign(v(this.props),{isMenuOpen:!1})},createLoginSocialButtonComponent:function(t,n){var i=null,o=e.get(t,"iconRef.svgId");return o&&(i=e.get(this.props.svgPropsForMemberLoginIconItems,o,null)),this.createChildComponent(this.props.compData,"wysiwyg.viewer.components.LoginSocialButton","button",e.assign(e.clone(t),{ref:"button"+n,id:this.props.id+"button"+n,style:{width:this.props.compProp.iconSize,height:this.props.compProp.iconSize,marginRight:"rtl"===this.props.compProp.buttonsDirection?"auto":10,marginLeft:"rtl"===this.props.compProp.buttonsDirection?10:"auto"},linkRenderInfo:this.props.linkRenderInfo,rootNavigationInfo:this.props.rootNavigationInfo,iconSize:this.props.compProp.iconSize,buttonsDirection:this.props.compProp.buttonsDirection,svgProps:i}))},getButtonsToRender:function(){return b(this.props)?e.map(this.props.iconItems,this.createLoginSocialButtonComponent):null},toggleMenu:function(t){this.registerReLayout(),this.setState({isMenuOpen:t||!this.state.isMenuOpen})},onUserClick:function(){this.toggleMenu()},onDropdownMenuItemKeyDown:function(t){var n=void 0,i=t.target;if("ArrowDown"===t.key||"Tab"===t.key||"ArrowUp"===t.key){t.stopPropagation(),t.preventDefault();var r=0,p=(n=o.accessibility.getTabbaleElements(a.findDOMNode(this.refs.dropdownMenu))).indexOf(i);p>-1&&(r="ArrowUp"===t.key?p-1:p+1),r>=n.length?r=0:r<0&&(r=n.length-1);var d=n[r];d&&s(d).focus()}else if("Enter"===t.key)t.stopPropagation(),t.preventDefault(),e.invoke(i,"click");else if("Escape"===t.key){t.stopPropagation(),t.preventDefault(),this.toggleMenu(!1);var l=a.findDOMNode(this.refs.user);l&&l.focus()}},onUserKeyDown:function(t){if(this.state.isMenuOpen&&("Enter"===t.key||"Escape"===t.key||"ArrowUp"===t.key||32===t.keyCode))return t.stopPropagation(),t.preventDefault(),void this.toggleMenu(!1);if(m[t.keyCode])if(t.stopPropagation(),t.preventDefault(),this.state.isMenuOpen){var n=o.accessibility.getTabbaleElements(a.findDOMNode(this.refs.dropdownMenu));e.size(n)>0&&e.head(n).focus()}else this.toggleMenu(!0)},onBlur:function(t){if(this.state.isMenuOpen){if(!t.relatedTarget&&e.includes(e.get(window,"document.activeElement.id",""),this.props.id))return;t.relatedTarget&&e.includes(t.relatedTarget.id,this.props.id)||this.toggleMenu(!1)}},onLogout:function(t){if(this.getLogoutFunction){var n=this.getLogoutFunction(t);e.isFunction(n)&&n.call(this)}else this.setState({isMenuOpen:!1}),this.props.logout(this.props.language)},onLogin:function(t){if(this.getLoginFunction){var n=this.getLoginFunction(t);e.isFunction(n)&&n.call(this)}else this.setState({isMenuOpen:!1}),this.props.showAuthenticationDialog({language:this.props.language,appId:3})},getMenuItems:function(){var n=e.concat(this.props.menuItems||[],{label:this.props.compData.logOutText||"Log Out",onClick:this.onLogout}),i=function(t){switch(t.compProp.dropDownTextAlignment){case"left":return"rtl"===t.compProp.buttonsDirection?"row-reverse":"row";case"right":return"rtl"===t.compProp.buttonsDirection?"row":"row-reverse";default:return"row"}}(this.props),o=n.length-2,r=n.length-1;return e.map(n,function(n,a){var s={};return n.link?s=l.renderLink(n.link,this.props.linkRenderInfo,this.props.rootNavigationInfo):s.tabIndex=0,0===a&&(s["data-preview"]=this.props.componentPreviewState),n.isSelected&&(s["data-state"]="selected"),t.utils.createReactElement("li",{key:"item"+a,children:[t.utils.createReactElement("a",e.assign({children:[t.utils.createReactElement("div",{children:n.label,id:this.props.id+"menuItemDiv"+a,key:this.props.id+"menuItemDiv"+a}),e.isNumber(n.displayCount)?t.utils.createReactElement("div",{key:this.props.id+"displayCount"+a,children:"("+n.displayCount+")"}):null],ref:"menuItem"+a,id:this.props.id+"menuItem"+a,key:this.props.id+"menuItem"+a,"data-aid":"menuItem"+a,style:{flexDirection:i,marginTop:0===a?10:"initial",marginBottom:a===r?10:"initial"},onKeyDown:this.onDropdownMenuItemKeyDown},s)),a===o?t.utils.createReactElement("hr",{key:"separator"+a}):null],onClick:n.onClick||null})}.bind(this))},componentWillReceiveProps:function(t){var n=v(t);e.isEqual(this.props.componentPreviewState,t.componentPreviewState)?e.isEqual(this.props.componentViewMode,t.componentViewMode)&&e.isEqual(this.props.currentUrlPageId,t.currentUrlPageId)||(n.isMenuOpen=!1):e.includes(t.componentPreviewState,u)?n.isMenuOpen=!0:(!t.componentPreviewState||e.includes(t.componentPreviewState,c)||e.includes(t.componentPreviewState,h))&&(n.isMenuOpen=!1),e.isMatch(this.state,n)||this.setState(n)},renderMemberAvatar:function(){var t=void 0,n=null;return this.props.memberAvatar?t={uri:this.props.memberAvatar,type:"Image"}:(t={svgId:this.props.memberDefaultAvatar,type:"VectorImage"},n=e.get(this.props.svgPropsForMemberLoginIconItems,this.props.memberDefaultAvatar,null)),this.createChildComponent(t,"wysiwyg.viewer.components.Icon","avatar",{ref:"avatar",id:this.props.id+"avatar",iconSize:this.props.compProp.iconSize,style:{width:this.props.compProp.iconSize,height:this.props.compProp.iconSize},svgProps:n})},getSkinProperties:function(){var n={"":{style:{direction:this.props.compProp.buttonsDirection||"ltr",justifyContent:function(t){switch(t.compProp.buttonsAlignment){case"left":return"rtl"===t.compProp.buttonsDirection?"flex-end":"flex-start";case"right":return"rtl"===t.compProp.buttonsDirection?"flex-start":"flex-end";case"center":return"center";default:return"flex-end"}}(this.props)},"aria-label":"Members bar","data-is-logged-in":this.state.isLoggedIn,onBlur:this.onBlur}},i=e.get(this.getFontSize(),"fontSize",null);return this.state.isLoggedIn?e.assign(n,{buttons:{children:this.getButtonsToRender(),style:{display:b(this.props)?null:"none"}},user:{onClick:this.onUserClick,onKeyDown:this.onUserKeyDown,"data-preview":this.props.componentPreviewState,"aria-label":this.props.memberName+" account menu"},icon:{children:this.renderMemberAvatar(),style:{display:f(this.props.compData)?null:"none"}},text:{children:t.utils.createReactElement("span",{children:this.props.memberName}),style:{display:function(t){return t.loggedInMember===g.TEXT||t.loggedInMember===g.BOTH}(this.props.compData)?null:"none",fontSize:i}},dropdownMenu:{children:t.utils.createReactElement("ul",{children:this.getMenuItems()}),style:{display:this.state.isMenuOpen?null:"none",fontSize:i}}}):(e.assign(n,{login:{children:[f(this.props.compData)?this.renderMemberAvatar():null,t.utils.createReactElement("span",{children:this.props.compData.loggedOutText||"Login | Sign up"})],onClick:this.onLogin,style:{fontSize:i},"data-preview":this.props.componentPreviewState}}),n[""]["aria-label"]="Login or Sign up"),n},getDefaultSkinName:function(){return"wysiwyg.viewer.skins.LoginSocialBarSkin"}}}.apply(e,i))||(t.exports=o)},1239:function(t,e,n){var i,o;i=[n(0),n(1238),n(462),n(2),n(7),n(1237),n(1236)],void 0===(o=function(t,e,n,i,o,r,a){"use strict";var s={loginSocialBar:e,loginSocialButton:n,loginSocialBarDataRequirementsChecker:a};return i.compRegistrar.register("wysiwyg.viewer.components.LoginSocialBar",s.loginSocialBar).register("wysiwyg.viewer.components.LoginSocialButton",s.loginSocialButton),o.skinsMap.addBatch(r),s}.apply(e,i))||(t.exports=o)},189:function(t,e){t.exports=g},2:function(t,e){t.exports=n},3:function(t,e){t.exports=i},33:function(t,e){t.exports=l},4:function(t,e){t.exports=o},462:function(t,e,n){var i,o;i=[n(6),n(5),n(0),n(2),n(1),n(3),n(189)],void 0===(o=function(t,e,n,i,o,r,a){"use strict";var s=o.linkRenderer;return{displayName:"loginSocialButton",mixins:[i.compMixins.skinBasedComp,i.compMixins.createChildComponentMixin],propTypes:n.assign({id:e.string,label:e.string,iconRef:e.object,link:e.object,displayCount:e.number,iconSize:e.number,buttonsDirection:e.string,svgProps:e.object,rootNavigationInfo:r.Types.Component.rootNavigationInfo.isRequired},r.santaTypesUtils.getSantaTypesByDefinition(a)),onButtonClick:function(){this.props.onClick&&this.props.onClick()},createBadge:function(){var e=null;if(n.isNumber(this.props.displayCount)){var i=this.props.displayCount>=1e3?Math.floor(this.props.displayCount/1e3)+"k":this.props.displayCount;e=t.utils.createReactElement("span",{children:i})}return e},getAriaLabel:function(){var t="";return n.isNumber(this.props.displayCount)&&(t=this.props.displayCount+" "),t+=this.props.label},createIcon:function(){if(this.props.iconRef)return this.createChildComponent(this.props.iconRef,"wysiwyg.viewer.components.Icon","icon",{ref:"icon",id:this.props.id+"icon",iconSize:this.props.iconSize,link:null,svgProps:this.props.svgProps,style:{width:this.props.iconSize,height:this.props.iconSize}})},getSkinProperties:function(){var t=this.props.iconSize/2,e="rtl"===this.props.buttonsDirection?{right:t,left:"auto"}:{left:t,right:"auto"};return{"":{onClick:this.onButtonClick,"aria-label":this.getAriaLabel()},link:this.props.link?s.renderLink(this.props.link,this.props.linkRenderInfo,this.props.rootNavigationInfo):{tabIndex:0},icon:this.createIcon(),badge:{children:this.createBadge(),style:e}}},getDefaultSkinName:function(){return"wysiwyg.viewer.skins.LoginSocialButtonSkin"}}}.apply(e,i))||(t.exports=o)},5:function(t,e){t.exports=r},6:function(t,e){t.exports=a},7:function(t,e){t.exports=s}})});
//# sourceMappingURL=loginSocialBar.min.js.map
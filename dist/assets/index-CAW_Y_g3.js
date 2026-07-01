(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function ac(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Kl={exports:{}},ei={},Yl={exports:{}},_={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yn=Symbol.for("react.element"),lc=Symbol.for("react.portal"),sc=Symbol.for("react.fragment"),uc=Symbol.for("react.strict_mode"),cc=Symbol.for("react.profiler"),dc=Symbol.for("react.provider"),pc=Symbol.for("react.context"),fc=Symbol.for("react.forward_ref"),hc=Symbol.for("react.suspense"),mc=Symbol.for("react.memo"),gc=Symbol.for("react.lazy"),Fa=Symbol.iterator;function xc(e){return e===null||typeof e!="object"?null:(e=Fa&&e[Fa]||e["@@iterator"],typeof e=="function"?e:null)}var Xl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gl=Object.assign,Zl={};function rn(e,t,n){this.props=e,this.context=t,this.refs=Zl,this.updater=n||Xl}rn.prototype.isReactComponent={};rn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};rn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Jl(){}Jl.prototype=rn.prototype;function Uo(e,t,n){this.props=e,this.context=t,this.refs=Zl,this.updater=n||Xl}var Bo=Uo.prototype=new Jl;Bo.constructor=Uo;Gl(Bo,rn.prototype);Bo.isPureReactComponent=!0;var Ma=Array.isArray,ql=Object.prototype.hasOwnProperty,Qo={current:null},es={key:!0,ref:!0,__self:!0,__source:!0};function ts(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)ql.call(t,r)&&!es.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),d=0;d<l;d++)s[d]=arguments[d+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Yn,type:e,key:o,ref:a,props:i,_owner:Qo.current}}function vc(e,t){return{$$typeof:Yn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Vo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yn}function yc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Oa=/\/+/g;function wi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?yc(""+e.key):t.toString(36)}function vr(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Yn:case lc:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+wi(a,0):r,Ma(i)?(n="",e!=null&&(n=e.replace(Oa,"$&/")+"/"),vr(i,t,n,"",function(d){return d})):i!=null&&(Vo(i)&&(i=vc(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Oa,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Ma(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+wi(o,l);a+=vr(o,t,n,s,i)}else if(s=xc(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+wi(o,l++),a+=vr(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function tr(e,t,n){if(e==null)return e;var r=[],i=0;return vr(e,r,"","",function(o){return t.call(n,o,i++)}),r}function wc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var le={current:null},yr={transition:null},bc={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:yr,ReactCurrentOwner:Qo};function ns(){throw Error("act(...) is not supported in production builds of React.")}_.Children={map:tr,forEach:function(e,t,n){tr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return tr(e,function(){t++}),t},toArray:function(e){return tr(e,function(t){return t})||[]},only:function(e){if(!Vo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_.Component=rn;_.Fragment=sc;_.Profiler=cc;_.PureComponent=Uo;_.StrictMode=uc;_.Suspense=hc;_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bc;_.act=ns;_.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Gl({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Qo.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)ql.call(t,s)&&!es.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var d=0;d<s;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:Yn,type:e.type,key:i,ref:o,props:r,_owner:a}};_.createContext=function(e){return e={$$typeof:pc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:dc,_context:e},e.Consumer=e};_.createElement=ts;_.createFactory=function(e){var t=ts.bind(null,e);return t.type=e,t};_.createRef=function(){return{current:null}};_.forwardRef=function(e){return{$$typeof:fc,render:e}};_.isValidElement=Vo;_.lazy=function(e){return{$$typeof:gc,_payload:{_status:-1,_result:e},_init:wc}};_.memo=function(e,t){return{$$typeof:mc,type:e,compare:t===void 0?null:t}};_.startTransition=function(e){var t=yr.transition;yr.transition={};try{e()}finally{yr.transition=t}};_.unstable_act=ns;_.useCallback=function(e,t){return le.current.useCallback(e,t)};_.useContext=function(e){return le.current.useContext(e)};_.useDebugValue=function(){};_.useDeferredValue=function(e){return le.current.useDeferredValue(e)};_.useEffect=function(e,t){return le.current.useEffect(e,t)};_.useId=function(){return le.current.useId()};_.useImperativeHandle=function(e,t,n){return le.current.useImperativeHandle(e,t,n)};_.useInsertionEffect=function(e,t){return le.current.useInsertionEffect(e,t)};_.useLayoutEffect=function(e,t){return le.current.useLayoutEffect(e,t)};_.useMemo=function(e,t){return le.current.useMemo(e,t)};_.useReducer=function(e,t,n){return le.current.useReducer(e,t,n)};_.useRef=function(e){return le.current.useRef(e)};_.useState=function(e){return le.current.useState(e)};_.useSyncExternalStore=function(e,t,n){return le.current.useSyncExternalStore(e,t,n)};_.useTransition=function(){return le.current.useTransition()};_.version="18.3.1";Yl.exports=_;var ti=Yl.exports;const kc=ac(ti);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sc=ti,Nc=Symbol.for("react.element"),Ec=Symbol.for("react.fragment"),jc=Object.prototype.hasOwnProperty,zc=Sc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cc={key:!0,ref:!0,__self:!0,__source:!0};function rs(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)jc.call(t,r)&&!Cc.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Nc,type:e,key:o,ref:a,props:i,_owner:zc.current}}ei.Fragment=Ec;ei.jsx=rs;ei.jsxs=rs;Kl.exports=ei;var u=Kl.exports,$i={},is={exports:{}},ve={},os={exports:{}},as={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,C){var P=N.length;N.push(C);e:for(;0<P;){var H=P-1>>>1,X=N[H];if(0<i(X,C))N[H]=C,N[P]=X,P=H;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var C=N[0],P=N.pop();if(P!==C){N[0]=P;e:for(var H=0,X=N.length,qn=X>>>1;H<qn;){var mt=2*(H+1)-1,yi=N[mt],gt=mt+1,er=N[gt];if(0>i(yi,P))gt<X&&0>i(er,yi)?(N[H]=er,N[gt]=P,H=gt):(N[H]=yi,N[mt]=P,H=mt);else if(gt<X&&0>i(er,P))N[H]=er,N[gt]=P,H=gt;else break e}}return C}function i(N,C){var P=N.sortIndex-C.sortIndex;return P!==0?P:N.id-C.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],d=[],g=1,m=null,h=3,y=!1,w=!1,b=!1,O=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(N){for(var C=n(d);C!==null;){if(C.callback===null)r(d);else if(C.startTime<=N)r(d),C.sortIndex=C.expirationTime,t(s,C);else break;C=n(d)}}function x(N){if(b=!1,f(N),!w)if(n(s)!==null)w=!0,xi(S);else{var C=n(d);C!==null&&vi(x,C.startTime-N)}}function S(N,C){w=!1,b&&(b=!1,p(z),z=-1),y=!0;var P=h;try{for(f(C),m=n(s);m!==null&&(!(m.expirationTime>C)||N&&!je());){var H=m.callback;if(typeof H=="function"){m.callback=null,h=m.priorityLevel;var X=H(m.expirationTime<=C);C=e.unstable_now(),typeof X=="function"?m.callback=X:m===n(s)&&r(s),f(C)}else r(s);m=n(s)}if(m!==null)var qn=!0;else{var mt=n(d);mt!==null&&vi(x,mt.startTime-C),qn=!1}return qn}finally{m=null,h=P,y=!1}}var E=!1,j=null,z=-1,V=5,L=-1;function je(){return!(e.unstable_now()-L<V)}function ln(){if(j!==null){var N=e.unstable_now();L=N;var C=!0;try{C=j(!0,N)}finally{C?sn():(E=!1,j=null)}}else E=!1}var sn;if(typeof c=="function")sn=function(){c(ln)};else if(typeof MessageChannel<"u"){var Ra=new MessageChannel,oc=Ra.port2;Ra.port1.onmessage=ln,sn=function(){oc.postMessage(null)}}else sn=function(){O(ln,0)};function xi(N){j=N,E||(E=!0,sn())}function vi(N,C){z=O(function(){N(e.unstable_now())},C)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,xi(S))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var C=3;break;default:C=h}var P=h;h=C;try{return N()}finally{h=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,C){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var P=h;h=N;try{return C()}finally{h=P}},e.unstable_scheduleCallback=function(N,C,P){var H=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?H+P:H):P=H,N){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=P+X,N={id:g++,callback:C,priorityLevel:N,startTime:P,expirationTime:X,sortIndex:-1},P>H?(N.sortIndex=P,t(d,N),n(s)===null&&N===n(d)&&(b?(p(z),z=-1):b=!0,vi(x,P-H))):(N.sortIndex=X,t(s,N),w||y||(w=!0,xi(S))),N},e.unstable_shouldYield=je,e.unstable_wrapCallback=function(N){var C=h;return function(){var P=h;h=C;try{return N.apply(this,arguments)}finally{h=P}}}})(as);os.exports=as;var Pc=os.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _c=ti,xe=Pc;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ls=new Set,Ln={};function Pt(e,t){Gt(e,t),Gt(e+"Capture",t)}function Gt(e,t){for(Ln[e]=t,e=0;e<t.length;e++)ls.add(t[e])}var He=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ki=Object.prototype.hasOwnProperty,Lc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Da={},Ia={};function Ac(e){return Ki.call(Ia,e)?!0:Ki.call(Da,e)?!1:Lc.test(e)?Ia[e]=!0:(Da[e]=!0,!1)}function Tc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Rc(e,t,n,r){if(t===null||typeof t>"u"||Tc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function se(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ee[t]=new se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new se(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ho=/[\-:]([a-z])/g;function Wo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ho,Wo);ee[t]=new se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ho,Wo);ee[t]=new se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ho,Wo);ee[t]=new se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new se(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new se(e,1,!1,e.toLowerCase(),null,!0,!0)});function $o(e,t,n,r){var i=ee.hasOwnProperty(t)?ee[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Rc(t,n,i,r)&&(n=null),r||i===null?Ac(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ye=_c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nr=Symbol.for("react.element"),At=Symbol.for("react.portal"),Tt=Symbol.for("react.fragment"),Ko=Symbol.for("react.strict_mode"),Yi=Symbol.for("react.profiler"),ss=Symbol.for("react.provider"),us=Symbol.for("react.context"),Yo=Symbol.for("react.forward_ref"),Xi=Symbol.for("react.suspense"),Gi=Symbol.for("react.suspense_list"),Xo=Symbol.for("react.memo"),Ge=Symbol.for("react.lazy"),cs=Symbol.for("react.offscreen"),Ua=Symbol.iterator;function un(e){return e===null||typeof e!="object"?null:(e=Ua&&e[Ua]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,bi;function vn(e){if(bi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);bi=t&&t[1]||""}return`
`+bi+e}var ki=!1;function Si(e,t){if(!e||ki)return"";ki=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{ki=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?vn(e):""}function Fc(e){switch(e.tag){case 5:return vn(e.type);case 16:return vn("Lazy");case 13:return vn("Suspense");case 19:return vn("SuspenseList");case 0:case 2:case 15:return e=Si(e.type,!1),e;case 11:return e=Si(e.type.render,!1),e;case 1:return e=Si(e.type,!0),e;default:return""}}function Zi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Tt:return"Fragment";case At:return"Portal";case Yi:return"Profiler";case Ko:return"StrictMode";case Xi:return"Suspense";case Gi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case us:return(e.displayName||"Context")+".Consumer";case ss:return(e._context.displayName||"Context")+".Provider";case Yo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xo:return t=e.displayName||null,t!==null?t:Zi(e.type)||"Memo";case Ge:t=e._payload,e=e._init;try{return Zi(e(t))}catch{}}return null}function Mc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zi(t);case 8:return t===Ko?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ct(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ds(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Oc(e){var t=ds(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function rr(e){e._valueTracker||(e._valueTracker=Oc(e))}function ps(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ds(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function _r(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ji(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ba(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ct(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function fs(e,t){t=t.checked,t!=null&&$o(e,"checked",t,!1)}function qi(e,t){fs(e,t);var n=ct(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?eo(e,t.type,n):t.hasOwnProperty("defaultValue")&&eo(e,t.type,ct(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Qa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function eo(e,t,n){(t!=="number"||_r(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var yn=Array.isArray;function Ht(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ct(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function to(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(v(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Va(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(v(92));if(yn(n)){if(1<n.length)throw Error(v(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ct(n)}}function hs(e,t){var n=ct(t.value),r=ct(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ha(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ms(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function no(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ms(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ir,gs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ir=ir||document.createElement("div"),ir.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ir.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function An(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var kn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dc=["Webkit","ms","Moz","O"];Object.keys(kn).forEach(function(e){Dc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),kn[t]=kn[e]})});function xs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||kn.hasOwnProperty(e)&&kn[e]?(""+t).trim():t+"px"}function vs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=xs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Ic=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ro(e,t){if(t){if(Ic[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(v(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(v(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(v(61))}if(t.style!=null&&typeof t.style!="object")throw Error(v(62))}}function io(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oo=null;function Go(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ao=null,Wt=null,$t=null;function Wa(e){if(e=Zn(e)){if(typeof ao!="function")throw Error(v(280));var t=e.stateNode;t&&(t=ai(t),ao(e.stateNode,e.type,t))}}function ys(e){Wt?$t?$t.push(e):$t=[e]:Wt=e}function ws(){if(Wt){var e=Wt,t=$t;if($t=Wt=null,Wa(e),t)for(e=0;e<t.length;e++)Wa(t[e])}}function bs(e,t){return e(t)}function ks(){}var Ni=!1;function Ss(e,t,n){if(Ni)return e(t,n);Ni=!0;try{return bs(e,t,n)}finally{Ni=!1,(Wt!==null||$t!==null)&&(ks(),ws())}}function Tn(e,t){var n=e.stateNode;if(n===null)return null;var r=ai(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(v(231,t,typeof n));return n}var lo=!1;if(He)try{var cn={};Object.defineProperty(cn,"passive",{get:function(){lo=!0}}),window.addEventListener("test",cn,cn),window.removeEventListener("test",cn,cn)}catch{lo=!1}function Uc(e,t,n,r,i,o,a,l,s){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(g){this.onError(g)}}var Sn=!1,Lr=null,Ar=!1,so=null,Bc={onError:function(e){Sn=!0,Lr=e}};function Qc(e,t,n,r,i,o,a,l,s){Sn=!1,Lr=null,Uc.apply(Bc,arguments)}function Vc(e,t,n,r,i,o,a,l,s){if(Qc.apply(this,arguments),Sn){if(Sn){var d=Lr;Sn=!1,Lr=null}else throw Error(v(198));Ar||(Ar=!0,so=d)}}function _t(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ns(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $a(e){if(_t(e)!==e)throw Error(v(188))}function Hc(e){var t=e.alternate;if(!t){if(t=_t(e),t===null)throw Error(v(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return $a(i),e;if(o===r)return $a(i),t;o=o.sibling}throw Error(v(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(v(189))}}if(n.alternate!==r)throw Error(v(190))}if(n.tag!==3)throw Error(v(188));return n.stateNode.current===n?e:t}function Es(e){return e=Hc(e),e!==null?js(e):null}function js(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=js(e);if(t!==null)return t;e=e.sibling}return null}var zs=xe.unstable_scheduleCallback,Ka=xe.unstable_cancelCallback,Wc=xe.unstable_shouldYield,$c=xe.unstable_requestPaint,W=xe.unstable_now,Kc=xe.unstable_getCurrentPriorityLevel,Zo=xe.unstable_ImmediatePriority,Cs=xe.unstable_UserBlockingPriority,Tr=xe.unstable_NormalPriority,Yc=xe.unstable_LowPriority,Ps=xe.unstable_IdlePriority,ni=null,Oe=null;function Xc(e){if(Oe&&typeof Oe.onCommitFiberRoot=="function")try{Oe.onCommitFiberRoot(ni,e,void 0,(e.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:Jc,Gc=Math.log,Zc=Math.LN2;function Jc(e){return e>>>=0,e===0?32:31-(Gc(e)/Zc|0)|0}var or=64,ar=4194304;function wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Rr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=wn(l):(o&=a,o!==0&&(r=wn(o)))}else a=n&~i,a!==0?r=wn(a):o!==0&&(r=wn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Le(t),i=1<<n,r|=e[n],t&=~i;return r}function qc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ed(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Le(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=qc(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function uo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _s(){var e=or;return or<<=1,!(or&4194240)&&(or=64),e}function Ei(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Le(t),e[t]=n}function td(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Le(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Jo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Le(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var T=0;function Ls(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var As,qo,Ts,Rs,Fs,co=!1,lr=[],nt=null,rt=null,it=null,Rn=new Map,Fn=new Map,Je=[],nd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ya(e,t){switch(e){case"focusin":case"focusout":nt=null;break;case"dragenter":case"dragleave":rt=null;break;case"mouseover":case"mouseout":it=null;break;case"pointerover":case"pointerout":Rn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fn.delete(t.pointerId)}}function dn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Zn(t),t!==null&&qo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function rd(e,t,n,r,i){switch(t){case"focusin":return nt=dn(nt,e,t,n,r,i),!0;case"dragenter":return rt=dn(rt,e,t,n,r,i),!0;case"mouseover":return it=dn(it,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Rn.set(o,dn(Rn.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Fn.set(o,dn(Fn.get(o)||null,e,t,n,r,i)),!0}return!1}function Ms(e){var t=yt(e.target);if(t!==null){var n=_t(t);if(n!==null){if(t=n.tag,t===13){if(t=Ns(n),t!==null){e.blockedOn=t,Fs(e.priority,function(){Ts(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=po(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);oo=r,n.target.dispatchEvent(r),oo=null}else return t=Zn(n),t!==null&&qo(t),e.blockedOn=n,!1;t.shift()}return!0}function Xa(e,t,n){wr(e)&&n.delete(t)}function id(){co=!1,nt!==null&&wr(nt)&&(nt=null),rt!==null&&wr(rt)&&(rt=null),it!==null&&wr(it)&&(it=null),Rn.forEach(Xa),Fn.forEach(Xa)}function pn(e,t){e.blockedOn===t&&(e.blockedOn=null,co||(co=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,id)))}function Mn(e){function t(i){return pn(i,e)}if(0<lr.length){pn(lr[0],e);for(var n=1;n<lr.length;n++){var r=lr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(nt!==null&&pn(nt,e),rt!==null&&pn(rt,e),it!==null&&pn(it,e),Rn.forEach(t),Fn.forEach(t),n=0;n<Je.length;n++)r=Je[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Je.length&&(n=Je[0],n.blockedOn===null);)Ms(n),n.blockedOn===null&&Je.shift()}var Kt=Ye.ReactCurrentBatchConfig,Fr=!0;function od(e,t,n,r){var i=T,o=Kt.transition;Kt.transition=null;try{T=1,ea(e,t,n,r)}finally{T=i,Kt.transition=o}}function ad(e,t,n,r){var i=T,o=Kt.transition;Kt.transition=null;try{T=4,ea(e,t,n,r)}finally{T=i,Kt.transition=o}}function ea(e,t,n,r){if(Fr){var i=po(e,t,n,r);if(i===null)Fi(e,t,r,Mr,n),Ya(e,r);else if(rd(i,e,t,n,r))r.stopPropagation();else if(Ya(e,r),t&4&&-1<nd.indexOf(e)){for(;i!==null;){var o=Zn(i);if(o!==null&&As(o),o=po(e,t,n,r),o===null&&Fi(e,t,r,Mr,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Fi(e,t,r,null,n)}}var Mr=null;function po(e,t,n,r){if(Mr=null,e=Go(r),e=yt(e),e!==null)if(t=_t(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ns(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Mr=e,null}function Os(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kc()){case Zo:return 1;case Cs:return 4;case Tr:case Yc:return 16;case Ps:return 536870912;default:return 16}default:return 16}}var et=null,ta=null,br=null;function Ds(){if(br)return br;var e,t=ta,n=t.length,r,i="value"in et?et.value:et.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return br=i.slice(e,1<r?1-r:void 0)}function kr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function sr(){return!0}function Ga(){return!1}function ye(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?sr:Ga,this.isPropagationStopped=Ga,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sr)},persist:function(){},isPersistent:sr}),t}var on={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},na=ye(on),Gn=B({},on,{view:0,detail:0}),ld=ye(Gn),ji,zi,fn,ri=B({},Gn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ra,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fn&&(fn&&e.type==="mousemove"?(ji=e.screenX-fn.screenX,zi=e.screenY-fn.screenY):zi=ji=0,fn=e),ji)},movementY:function(e){return"movementY"in e?e.movementY:zi}}),Za=ye(ri),sd=B({},ri,{dataTransfer:0}),ud=ye(sd),cd=B({},Gn,{relatedTarget:0}),Ci=ye(cd),dd=B({},on,{animationName:0,elapsedTime:0,pseudoElement:0}),pd=ye(dd),fd=B({},on,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hd=ye(fd),md=B({},on,{data:0}),Ja=ye(md),gd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vd[e])?!!t[e]:!1}function ra(){return yd}var wd=B({},Gn,{key:function(e){if(e.key){var t=gd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=kr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ra,charCode:function(e){return e.type==="keypress"?kr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?kr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bd=ye(wd),kd=B({},ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qa=ye(kd),Sd=B({},Gn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ra}),Nd=ye(Sd),Ed=B({},on,{propertyName:0,elapsedTime:0,pseudoElement:0}),jd=ye(Ed),zd=B({},ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cd=ye(zd),Pd=[9,13,27,32],ia=He&&"CompositionEvent"in window,Nn=null;He&&"documentMode"in document&&(Nn=document.documentMode);var _d=He&&"TextEvent"in window&&!Nn,Is=He&&(!ia||Nn&&8<Nn&&11>=Nn),el=" ",tl=!1;function Us(e,t){switch(e){case"keyup":return Pd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rt=!1;function Ld(e,t){switch(e){case"compositionend":return Bs(t);case"keypress":return t.which!==32?null:(tl=!0,el);case"textInput":return e=t.data,e===el&&tl?null:e;default:return null}}function Ad(e,t){if(Rt)return e==="compositionend"||!ia&&Us(e,t)?(e=Ds(),br=ta=et=null,Rt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Is&&t.locale!=="ko"?null:t.data;default:return null}}var Td={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Td[e.type]:t==="textarea"}function Qs(e,t,n,r){ys(r),t=Or(t,"onChange"),0<t.length&&(n=new na("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var En=null,On=null;function Rd(e){qs(e,0)}function ii(e){var t=Ot(e);if(ps(t))return e}function Fd(e,t){if(e==="change")return t}var Vs=!1;if(He){var Pi;if(He){var _i="oninput"in document;if(!_i){var rl=document.createElement("div");rl.setAttribute("oninput","return;"),_i=typeof rl.oninput=="function"}Pi=_i}else Pi=!1;Vs=Pi&&(!document.documentMode||9<document.documentMode)}function il(){En&&(En.detachEvent("onpropertychange",Hs),On=En=null)}function Hs(e){if(e.propertyName==="value"&&ii(On)){var t=[];Qs(t,On,e,Go(e)),Ss(Rd,t)}}function Md(e,t,n){e==="focusin"?(il(),En=t,On=n,En.attachEvent("onpropertychange",Hs)):e==="focusout"&&il()}function Od(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ii(On)}function Dd(e,t){if(e==="click")return ii(t)}function Id(e,t){if(e==="input"||e==="change")return ii(t)}function Ud(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Te=typeof Object.is=="function"?Object.is:Ud;function Dn(e,t){if(Te(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ki.call(t,i)||!Te(e[i],t[i]))return!1}return!0}function ol(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function al(e,t){var n=ol(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ol(n)}}function Ws(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ws(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $s(){for(var e=window,t=_r();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_r(e.document)}return t}function oa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Bd(e){var t=$s(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ws(n.ownerDocument.documentElement,n)){if(r!==null&&oa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=al(n,o);var a=al(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qd=He&&"documentMode"in document&&11>=document.documentMode,Ft=null,fo=null,jn=null,ho=!1;function ll(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ho||Ft==null||Ft!==_r(r)||(r=Ft,"selectionStart"in r&&oa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jn&&Dn(jn,r)||(jn=r,r=Or(fo,"onSelect"),0<r.length&&(t=new na("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ft)))}function ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Mt={animationend:ur("Animation","AnimationEnd"),animationiteration:ur("Animation","AnimationIteration"),animationstart:ur("Animation","AnimationStart"),transitionend:ur("Transition","TransitionEnd")},Li={},Ks={};He&&(Ks=document.createElement("div").style,"AnimationEvent"in window||(delete Mt.animationend.animation,delete Mt.animationiteration.animation,delete Mt.animationstart.animation),"TransitionEvent"in window||delete Mt.transitionend.transition);function oi(e){if(Li[e])return Li[e];if(!Mt[e])return e;var t=Mt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ks)return Li[e]=t[n];return e}var Ys=oi("animationend"),Xs=oi("animationiteration"),Gs=oi("animationstart"),Zs=oi("transitionend"),Js=new Map,sl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pt(e,t){Js.set(e,t),Pt(t,[e])}for(var Ai=0;Ai<sl.length;Ai++){var Ti=sl[Ai],Vd=Ti.toLowerCase(),Hd=Ti[0].toUpperCase()+Ti.slice(1);pt(Vd,"on"+Hd)}pt(Ys,"onAnimationEnd");pt(Xs,"onAnimationIteration");pt(Gs,"onAnimationStart");pt("dblclick","onDoubleClick");pt("focusin","onFocus");pt("focusout","onBlur");pt(Zs,"onTransitionEnd");Gt("onMouseEnter",["mouseout","mouseover"]);Gt("onMouseLeave",["mouseout","mouseover"]);Gt("onPointerEnter",["pointerout","pointerover"]);Gt("onPointerLeave",["pointerout","pointerover"]);Pt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wd=new Set("cancel close invalid load scroll toggle".split(" ").concat(bn));function ul(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Vc(r,t,void 0,e),e.currentTarget=null}function qs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,d=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;ul(i,l,d),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,d=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;ul(i,l,d),o=s}}}if(Ar)throw e=so,Ar=!1,so=null,e}function F(e,t){var n=t[yo];n===void 0&&(n=t[yo]=new Set);var r=e+"__bubble";n.has(r)||(eu(t,e,2,!1),n.add(r))}function Ri(e,t,n){var r=0;t&&(r|=4),eu(n,e,r,t)}var cr="_reactListening"+Math.random().toString(36).slice(2);function In(e){if(!e[cr]){e[cr]=!0,ls.forEach(function(n){n!=="selectionchange"&&(Wd.has(n)||Ri(n,!1,e),Ri(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cr]||(t[cr]=!0,Ri("selectionchange",!1,t))}}function eu(e,t,n,r){switch(Os(t)){case 1:var i=od;break;case 4:i=ad;break;default:i=ea}n=i.bind(null,t,n,e),i=void 0,!lo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Fi(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=yt(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Ss(function(){var d=o,g=Go(n),m=[];e:{var h=Js.get(e);if(h!==void 0){var y=na,w=e;switch(e){case"keypress":if(kr(n)===0)break e;case"keydown":case"keyup":y=bd;break;case"focusin":w="focus",y=Ci;break;case"focusout":w="blur",y=Ci;break;case"beforeblur":case"afterblur":y=Ci;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Za;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=ud;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Nd;break;case Ys:case Xs:case Gs:y=pd;break;case Zs:y=jd;break;case"scroll":y=ld;break;case"wheel":y=Cd;break;case"copy":case"cut":case"paste":y=hd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=qa}var b=(t&4)!==0,O=!b&&e==="scroll",p=b?h!==null?h+"Capture":null:h;b=[];for(var c=d,f;c!==null;){f=c;var x=f.stateNode;if(f.tag===5&&x!==null&&(f=x,p!==null&&(x=Tn(c,p),x!=null&&b.push(Un(c,x,f)))),O)break;c=c.return}0<b.length&&(h=new y(h,w,null,n,g),m.push({event:h,listeners:b}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==oo&&(w=n.relatedTarget||n.fromElement)&&(yt(w)||w[We]))break e;if((y||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=d,w=w?yt(w):null,w!==null&&(O=_t(w),w!==O||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=d),y!==w)){if(b=Za,x="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(b=qa,x="onPointerLeave",p="onPointerEnter",c="pointer"),O=y==null?h:Ot(y),f=w==null?h:Ot(w),h=new b(x,c+"leave",y,n,g),h.target=O,h.relatedTarget=f,x=null,yt(g)===d&&(b=new b(p,c+"enter",w,n,g),b.target=f,b.relatedTarget=O,x=b),O=x,y&&w)t:{for(b=y,p=w,c=0,f=b;f;f=Lt(f))c++;for(f=0,x=p;x;x=Lt(x))f++;for(;0<c-f;)b=Lt(b),c--;for(;0<f-c;)p=Lt(p),f--;for(;c--;){if(b===p||p!==null&&b===p.alternate)break t;b=Lt(b),p=Lt(p)}b=null}else b=null;y!==null&&cl(m,h,y,b,!1),w!==null&&O!==null&&cl(m,O,w,b,!0)}}e:{if(h=d?Ot(d):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var S=Fd;else if(nl(h))if(Vs)S=Id;else{S=Od;var E=Md}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=Dd);if(S&&(S=S(e,d))){Qs(m,S,n,g);break e}E&&E(e,h,d),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&eo(h,"number",h.value)}switch(E=d?Ot(d):window,e){case"focusin":(nl(E)||E.contentEditable==="true")&&(Ft=E,fo=d,jn=null);break;case"focusout":jn=fo=Ft=null;break;case"mousedown":ho=!0;break;case"contextmenu":case"mouseup":case"dragend":ho=!1,ll(m,n,g);break;case"selectionchange":if(Qd)break;case"keydown":case"keyup":ll(m,n,g)}var j;if(ia)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Rt?Us(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Is&&n.locale!=="ko"&&(Rt||z!=="onCompositionStart"?z==="onCompositionEnd"&&Rt&&(j=Ds()):(et=g,ta="value"in et?et.value:et.textContent,Rt=!0)),E=Or(d,z),0<E.length&&(z=new Ja(z,e,null,n,g),m.push({event:z,listeners:E}),j?z.data=j:(j=Bs(n),j!==null&&(z.data=j)))),(j=_d?Ld(e,n):Ad(e,n))&&(d=Or(d,"onBeforeInput"),0<d.length&&(g=new Ja("onBeforeInput","beforeinput",null,n,g),m.push({event:g,listeners:d}),g.data=j))}qs(m,t)})}function Un(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Or(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Tn(e,n),o!=null&&r.unshift(Un(e,o,i)),o=Tn(e,t),o!=null&&r.push(Un(e,o,i))),e=e.return}return r}function Lt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cl(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,d=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&d!==null&&(l=d,i?(s=Tn(n,o),s!=null&&a.unshift(Un(n,s,l))):i||(s=Tn(n,o),s!=null&&a.push(Un(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var $d=/\r\n?/g,Kd=/\u0000|\uFFFD/g;function dl(e){return(typeof e=="string"?e:""+e).replace($d,`
`).replace(Kd,"")}function dr(e,t,n){if(t=dl(t),dl(e)!==t&&n)throw Error(v(425))}function Dr(){}var mo=null,go=null;function xo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vo=typeof setTimeout=="function"?setTimeout:void 0,Yd=typeof clearTimeout=="function"?clearTimeout:void 0,pl=typeof Promise=="function"?Promise:void 0,Xd=typeof queueMicrotask=="function"?queueMicrotask:typeof pl<"u"?function(e){return pl.resolve(null).then(e).catch(Gd)}:vo;function Gd(e){setTimeout(function(){throw e})}function Mi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Mn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Mn(t)}function ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function fl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var an=Math.random().toString(36).slice(2),Me="__reactFiber$"+an,Bn="__reactProps$"+an,We="__reactContainer$"+an,yo="__reactEvents$"+an,Zd="__reactListeners$"+an,Jd="__reactHandles$"+an;function yt(e){var t=e[Me];if(t)return t;for(var n=e.parentNode;n;){if(t=n[We]||n[Me]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fl(e);e!==null;){if(n=e[Me])return n;e=fl(e)}return t}e=n,n=e.parentNode}return null}function Zn(e){return e=e[Me]||e[We],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ot(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(v(33))}function ai(e){return e[Bn]||null}var wo=[],Dt=-1;function ft(e){return{current:e}}function M(e){0>Dt||(e.current=wo[Dt],wo[Dt]=null,Dt--)}function R(e,t){Dt++,wo[Dt]=e.current,e.current=t}var dt={},ie=ft(dt),de=ft(!1),Nt=dt;function Zt(e,t){var n=e.type.contextTypes;if(!n)return dt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function pe(e){return e=e.childContextTypes,e!=null}function Ir(){M(de),M(ie)}function hl(e,t,n){if(ie.current!==dt)throw Error(v(168));R(ie,t),R(de,n)}function tu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(v(108,Mc(e)||"Unknown",i));return B({},n,r)}function Ur(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dt,Nt=ie.current,R(ie,e),R(de,de.current),!0}function ml(e,t,n){var r=e.stateNode;if(!r)throw Error(v(169));n?(e=tu(e,t,Nt),r.__reactInternalMemoizedMergedChildContext=e,M(de),M(ie),R(ie,e)):M(de),R(de,n)}var Ue=null,li=!1,Oi=!1;function nu(e){Ue===null?Ue=[e]:Ue.push(e)}function qd(e){li=!0,nu(e)}function ht(){if(!Oi&&Ue!==null){Oi=!0;var e=0,t=T;try{var n=Ue;for(T=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ue=null,li=!1}catch(i){throw Ue!==null&&(Ue=Ue.slice(e+1)),zs(Zo,ht),i}finally{T=t,Oi=!1}}return null}var It=[],Ut=0,Br=null,Qr=0,we=[],be=0,Et=null,Be=1,Qe="";function xt(e,t){It[Ut++]=Qr,It[Ut++]=Br,Br=e,Qr=t}function ru(e,t,n){we[be++]=Be,we[be++]=Qe,we[be++]=Et,Et=e;var r=Be;e=Qe;var i=32-Le(r)-1;r&=~(1<<i),n+=1;var o=32-Le(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Be=1<<32-Le(t)+i|n<<i|r,Qe=o+e}else Be=1<<o|n<<i|r,Qe=e}function aa(e){e.return!==null&&(xt(e,1),ru(e,1,0))}function la(e){for(;e===Br;)Br=It[--Ut],It[Ut]=null,Qr=It[--Ut],It[Ut]=null;for(;e===Et;)Et=we[--be],we[be]=null,Qe=we[--be],we[be]=null,Be=we[--be],we[be]=null}var ge=null,me=null,D=!1,_e=null;function iu(e,t){var n=ke(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function gl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ge=e,me=ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ge=e,me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Et!==null?{id:Be,overflow:Qe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ke(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ge=e,me=null,!0):!1;default:return!1}}function bo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ko(e){if(D){var t=me;if(t){var n=t;if(!gl(e,t)){if(bo(e))throw Error(v(418));t=ot(n.nextSibling);var r=ge;t&&gl(e,t)?iu(r,n):(e.flags=e.flags&-4097|2,D=!1,ge=e)}}else{if(bo(e))throw Error(v(418));e.flags=e.flags&-4097|2,D=!1,ge=e}}}function xl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function pr(e){if(e!==ge)return!1;if(!D)return xl(e),D=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!xo(e.type,e.memoizedProps)),t&&(t=me)){if(bo(e))throw ou(),Error(v(418));for(;t;)iu(e,t),t=ot(t.nextSibling)}if(xl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){me=ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}me=null}}else me=ge?ot(e.stateNode.nextSibling):null;return!0}function ou(){for(var e=me;e;)e=ot(e.nextSibling)}function Jt(){me=ge=null,D=!1}function sa(e){_e===null?_e=[e]:_e.push(e)}var ep=Ye.ReactCurrentBatchConfig;function hn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(v(309));var r=n.stateNode}if(!r)throw Error(v(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(v(284));if(!n._owner)throw Error(v(290,e))}return e}function fr(e,t){throw e=Object.prototype.toString.call(t),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vl(e){var t=e._init;return t(e._payload)}function au(e){function t(p,c){if(e){var f=p.deletions;f===null?(p.deletions=[c],p.flags|=16):f.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function i(p,c){return p=ut(p,c),p.index=0,p.sibling=null,p}function o(p,c,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<c?(p.flags|=2,c):f):(p.flags|=2,c)):(p.flags|=1048576,c)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,c,f,x){return c===null||c.tag!==6?(c=Hi(f,p.mode,x),c.return=p,c):(c=i(c,f),c.return=p,c)}function s(p,c,f,x){var S=f.type;return S===Tt?g(p,c,f.props.children,x,f.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ge&&vl(S)===c.type)?(x=i(c,f.props),x.ref=hn(p,c,f),x.return=p,x):(x=Pr(f.type,f.key,f.props,null,p.mode,x),x.ref=hn(p,c,f),x.return=p,x)}function d(p,c,f,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=Wi(f,p.mode,x),c.return=p,c):(c=i(c,f.children||[]),c.return=p,c)}function g(p,c,f,x,S){return c===null||c.tag!==7?(c=St(f,p.mode,x,S),c.return=p,c):(c=i(c,f),c.return=p,c)}function m(p,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Hi(""+c,p.mode,f),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case nr:return f=Pr(c.type,c.key,c.props,null,p.mode,f),f.ref=hn(p,null,c),f.return=p,f;case At:return c=Wi(c,p.mode,f),c.return=p,c;case Ge:var x=c._init;return m(p,x(c._payload),f)}if(yn(c)||un(c))return c=St(c,p.mode,f,null),c.return=p,c;fr(p,c)}return null}function h(p,c,f,x){var S=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:l(p,c,""+f,x);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case nr:return f.key===S?s(p,c,f,x):null;case At:return f.key===S?d(p,c,f,x):null;case Ge:return S=f._init,h(p,c,S(f._payload),x)}if(yn(f)||un(f))return S!==null?null:g(p,c,f,x,null);fr(p,f)}return null}function y(p,c,f,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(f)||null,l(c,p,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case nr:return p=p.get(x.key===null?f:x.key)||null,s(c,p,x,S);case At:return p=p.get(x.key===null?f:x.key)||null,d(c,p,x,S);case Ge:var E=x._init;return y(p,c,f,E(x._payload),S)}if(yn(x)||un(x))return p=p.get(f)||null,g(c,p,x,S,null);fr(c,x)}return null}function w(p,c,f,x){for(var S=null,E=null,j=c,z=c=0,V=null;j!==null&&z<f.length;z++){j.index>z?(V=j,j=null):V=j.sibling;var L=h(p,j,f[z],x);if(L===null){j===null&&(j=V);break}e&&j&&L.alternate===null&&t(p,j),c=o(L,c,z),E===null?S=L:E.sibling=L,E=L,j=V}if(z===f.length)return n(p,j),D&&xt(p,z),S;if(j===null){for(;z<f.length;z++)j=m(p,f[z],x),j!==null&&(c=o(j,c,z),E===null?S=j:E.sibling=j,E=j);return D&&xt(p,z),S}for(j=r(p,j);z<f.length;z++)V=y(j,p,z,f[z],x),V!==null&&(e&&V.alternate!==null&&j.delete(V.key===null?z:V.key),c=o(V,c,z),E===null?S=V:E.sibling=V,E=V);return e&&j.forEach(function(je){return t(p,je)}),D&&xt(p,z),S}function b(p,c,f,x){var S=un(f);if(typeof S!="function")throw Error(v(150));if(f=S.call(f),f==null)throw Error(v(151));for(var E=S=null,j=c,z=c=0,V=null,L=f.next();j!==null&&!L.done;z++,L=f.next()){j.index>z?(V=j,j=null):V=j.sibling;var je=h(p,j,L.value,x);if(je===null){j===null&&(j=V);break}e&&j&&je.alternate===null&&t(p,j),c=o(je,c,z),E===null?S=je:E.sibling=je,E=je,j=V}if(L.done)return n(p,j),D&&xt(p,z),S;if(j===null){for(;!L.done;z++,L=f.next())L=m(p,L.value,x),L!==null&&(c=o(L,c,z),E===null?S=L:E.sibling=L,E=L);return D&&xt(p,z),S}for(j=r(p,j);!L.done;z++,L=f.next())L=y(j,p,z,L.value,x),L!==null&&(e&&L.alternate!==null&&j.delete(L.key===null?z:L.key),c=o(L,c,z),E===null?S=L:E.sibling=L,E=L);return e&&j.forEach(function(ln){return t(p,ln)}),D&&xt(p,z),S}function O(p,c,f,x){if(typeof f=="object"&&f!==null&&f.type===Tt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case nr:e:{for(var S=f.key,E=c;E!==null;){if(E.key===S){if(S=f.type,S===Tt){if(E.tag===7){n(p,E.sibling),c=i(E,f.props.children),c.return=p,p=c;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ge&&vl(S)===E.type){n(p,E.sibling),c=i(E,f.props),c.ref=hn(p,E,f),c.return=p,p=c;break e}n(p,E);break}else t(p,E);E=E.sibling}f.type===Tt?(c=St(f.props.children,p.mode,x,f.key),c.return=p,p=c):(x=Pr(f.type,f.key,f.props,null,p.mode,x),x.ref=hn(p,c,f),x.return=p,p=x)}return a(p);case At:e:{for(E=f.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(p,c.sibling),c=i(c,f.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=Wi(f,p.mode,x),c.return=p,p=c}return a(p);case Ge:return E=f._init,O(p,c,E(f._payload),x)}if(yn(f))return w(p,c,f,x);if(un(f))return b(p,c,f,x);fr(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(p,c.sibling),c=i(c,f),c.return=p,p=c):(n(p,c),c=Hi(f,p.mode,x),c.return=p,p=c),a(p)):n(p,c)}return O}var qt=au(!0),lu=au(!1),Vr=ft(null),Hr=null,Bt=null,ua=null;function ca(){ua=Bt=Hr=null}function da(e){var t=Vr.current;M(Vr),e._currentValue=t}function So(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Yt(e,t){Hr=e,ua=Bt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ce=!0),e.firstContext=null)}function Ne(e){var t=e._currentValue;if(ua!==e)if(e={context:e,memoizedValue:t,next:null},Bt===null){if(Hr===null)throw Error(v(308));Bt=e,Hr.dependencies={lanes:0,firstContext:e}}else Bt=Bt.next=e;return t}var wt=null;function pa(e){wt===null?wt=[e]:wt.push(e)}function su(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,pa(t)):(n.next=i.next,i.next=n),t.interleaved=n,$e(e,r)}function $e(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ze=!1;function fa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ve(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function at(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,$e(e,n)}return i=r.interleaved,i===null?(t.next=t,pa(r)):(t.next=i.next,i.next=t),r.interleaved=t,$e(e,n)}function Sr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Jo(e,n)}}function yl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wr(e,t,n,r){var i=e.updateQueue;Ze=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,d=s.next;s.next=null,a===null?o=d:a.next=d,a=s;var g=e.alternate;g!==null&&(g=g.updateQueue,l=g.lastBaseUpdate,l!==a&&(l===null?g.firstBaseUpdate=d:l.next=d,g.lastBaseUpdate=s))}if(o!==null){var m=i.baseState;a=0,g=d=s=null,l=o;do{var h=l.lane,y=l.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,b=l;switch(h=t,y=n,b.tag){case 1:if(w=b.payload,typeof w=="function"){m=w.call(y,m,h);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=b.payload,h=typeof w=="function"?w.call(y,m,h):w,h==null)break e;m=B({},m,h);break e;case 2:Ze=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else y={eventTime:y,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},g===null?(d=g=y,s=m):g=g.next=y,a|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(g===null&&(s=m),i.baseState=s,i.firstBaseUpdate=d,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);zt|=a,e.lanes=a,e.memoizedState=m}}function wl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(v(191,i));i.call(r)}}}var Jn={},De=ft(Jn),Qn=ft(Jn),Vn=ft(Jn);function bt(e){if(e===Jn)throw Error(v(174));return e}function ha(e,t){switch(R(Vn,t),R(Qn,e),R(De,Jn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:no(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=no(t,e)}M(De),R(De,t)}function en(){M(De),M(Qn),M(Vn)}function cu(e){bt(Vn.current);var t=bt(De.current),n=no(t,e.type);t!==n&&(R(Qn,e),R(De,n))}function ma(e){Qn.current===e&&(M(De),M(Qn))}var I=ft(0);function $r(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Di=[];function ga(){for(var e=0;e<Di.length;e++)Di[e]._workInProgressVersionPrimary=null;Di.length=0}var Nr=Ye.ReactCurrentDispatcher,Ii=Ye.ReactCurrentBatchConfig,jt=0,U=null,K=null,G=null,Kr=!1,zn=!1,Hn=0,tp=0;function te(){throw Error(v(321))}function xa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Te(e[n],t[n]))return!1;return!0}function va(e,t,n,r,i,o){if(jt=o,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Nr.current=e===null||e.memoizedState===null?op:ap,e=n(r,i),zn){o=0;do{if(zn=!1,Hn=0,25<=o)throw Error(v(301));o+=1,G=K=null,t.updateQueue=null,Nr.current=lp,e=n(r,i)}while(zn)}if(Nr.current=Yr,t=K!==null&&K.next!==null,jt=0,G=K=U=null,Kr=!1,t)throw Error(v(300));return e}function ya(){var e=Hn!==0;return Hn=0,e}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return G===null?U.memoizedState=G=e:G=G.next=e,G}function Ee(){if(K===null){var e=U.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=G===null?U.memoizedState:G.next;if(t!==null)G=t,K=e;else{if(e===null)throw Error(v(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},G===null?U.memoizedState=G=e:G=G.next=e}return G}function Wn(e,t){return typeof t=="function"?t(e):t}function Ui(e){var t=Ee(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var r=K,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,d=o;do{var g=d.lane;if((jt&g)===g)s!==null&&(s=s.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var m={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};s===null?(l=s=m,a=r):s=s.next=m,U.lanes|=g,zt|=g}d=d.next}while(d!==null&&d!==o);s===null?a=r:s.next=l,Te(r,t.memoizedState)||(ce=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,U.lanes|=o,zt|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bi(e){var t=Ee(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Te(o,t.memoizedState)||(ce=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function du(){}function pu(e,t){var n=U,r=Ee(),i=t(),o=!Te(r.memoizedState,i);if(o&&(r.memoizedState=i,ce=!0),r=r.queue,wa(mu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||G!==null&&G.memoizedState.tag&1){if(n.flags|=2048,$n(9,hu.bind(null,n,r,i,t),void 0,null),Z===null)throw Error(v(349));jt&30||fu(n,t,i)}return i}function fu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hu(e,t,n,r){t.value=n,t.getSnapshot=r,gu(t)&&xu(e)}function mu(e,t,n){return n(function(){gu(t)&&xu(e)})}function gu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Te(e,n)}catch{return!0}}function xu(e){var t=$e(e,1);t!==null&&Ae(t,e,1,-1)}function bl(e){var t=Fe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:e},t.queue=e,e=e.dispatch=ip.bind(null,U,e),[t.memoizedState,e]}function $n(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vu(){return Ee().memoizedState}function Er(e,t,n,r){var i=Fe();U.flags|=e,i.memoizedState=$n(1|t,n,void 0,r===void 0?null:r)}function si(e,t,n,r){var i=Ee();r=r===void 0?null:r;var o=void 0;if(K!==null){var a=K.memoizedState;if(o=a.destroy,r!==null&&xa(r,a.deps)){i.memoizedState=$n(t,n,o,r);return}}U.flags|=e,i.memoizedState=$n(1|t,n,o,r)}function kl(e,t){return Er(8390656,8,e,t)}function wa(e,t){return si(2048,8,e,t)}function yu(e,t){return si(4,2,e,t)}function wu(e,t){return si(4,4,e,t)}function bu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ku(e,t,n){return n=n!=null?n.concat([e]):null,si(4,4,bu.bind(null,t,e),n)}function ba(){}function Su(e,t){var n=Ee();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Nu(e,t){var n=Ee();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Eu(e,t,n){return jt&21?(Te(n,t)||(n=_s(),U.lanes|=n,zt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ce=!0),e.memoizedState=n)}function np(e,t){var n=T;T=n!==0&&4>n?n:4,e(!0);var r=Ii.transition;Ii.transition={};try{e(!1),t()}finally{T=n,Ii.transition=r}}function ju(){return Ee().memoizedState}function rp(e,t,n){var r=st(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},zu(e))Cu(t,n);else if(n=su(e,t,n,r),n!==null){var i=ae();Ae(n,e,r,i),Pu(n,t,r)}}function ip(e,t,n){var r=st(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(zu(e))Cu(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Te(l,a)){var s=t.interleaved;s===null?(i.next=i,pa(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=su(e,t,i,r),n!==null&&(i=ae(),Ae(n,e,r,i),Pu(n,t,r))}}function zu(e){var t=e.alternate;return e===U||t!==null&&t===U}function Cu(e,t){zn=Kr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Jo(e,n)}}var Yr={readContext:Ne,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},op={readContext:Ne,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:Ne,useEffect:kl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Er(4194308,4,bu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Er(4194308,4,e,t)},useInsertionEffect:function(e,t){return Er(4,2,e,t)},useMemo:function(e,t){var n=Fe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Fe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=rp.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:bl,useDebugValue:ba,useDeferredValue:function(e){return Fe().memoizedState=e},useTransition:function(){var e=bl(!1),t=e[0];return e=np.bind(null,e[1]),Fe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=U,i=Fe();if(D){if(n===void 0)throw Error(v(407));n=n()}else{if(n=t(),Z===null)throw Error(v(349));jt&30||fu(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,kl(mu.bind(null,r,o,e),[e]),r.flags|=2048,$n(9,hu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Fe(),t=Z.identifierPrefix;if(D){var n=Qe,r=Be;n=(r&~(1<<32-Le(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Hn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=tp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ap={readContext:Ne,useCallback:Su,useContext:Ne,useEffect:wa,useImperativeHandle:ku,useInsertionEffect:yu,useLayoutEffect:wu,useMemo:Nu,useReducer:Ui,useRef:vu,useState:function(){return Ui(Wn)},useDebugValue:ba,useDeferredValue:function(e){var t=Ee();return Eu(t,K.memoizedState,e)},useTransition:function(){var e=Ui(Wn)[0],t=Ee().memoizedState;return[e,t]},useMutableSource:du,useSyncExternalStore:pu,useId:ju,unstable_isNewReconciler:!1},lp={readContext:Ne,useCallback:Su,useContext:Ne,useEffect:wa,useImperativeHandle:ku,useInsertionEffect:yu,useLayoutEffect:wu,useMemo:Nu,useReducer:Bi,useRef:vu,useState:function(){return Bi(Wn)},useDebugValue:ba,useDeferredValue:function(e){var t=Ee();return K===null?t.memoizedState=e:Eu(t,K.memoizedState,e)},useTransition:function(){var e=Bi(Wn)[0],t=Ee().memoizedState;return[e,t]},useMutableSource:du,useSyncExternalStore:pu,useId:ju,unstable_isNewReconciler:!1};function Ce(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function No(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ui={isMounted:function(e){return(e=e._reactInternals)?_t(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ae(),i=st(e),o=Ve(r,i);o.payload=t,n!=null&&(o.callback=n),t=at(e,o,i),t!==null&&(Ae(t,e,i,r),Sr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ae(),i=st(e),o=Ve(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=at(e,o,i),t!==null&&(Ae(t,e,i,r),Sr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ae(),r=st(e),i=Ve(n,r);i.tag=2,t!=null&&(i.callback=t),t=at(e,i,r),t!==null&&(Ae(t,e,r,n),Sr(t,e,r))}};function Sl(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Dn(n,r)||!Dn(i,o):!0}function _u(e,t,n){var r=!1,i=dt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ne(o):(i=pe(t)?Nt:ie.current,r=t.contextTypes,o=(r=r!=null)?Zt(e,i):dt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ui,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Nl(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ui.enqueueReplaceState(t,t.state,null)}function Eo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},fa(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ne(o):(o=pe(t)?Nt:ie.current,i.context=Zt(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(No(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ui.enqueueReplaceState(i,i.state,null),Wr(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function tn(e,t){try{var n="",r=t;do n+=Fc(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Qi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function jo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var sp=typeof WeakMap=="function"?WeakMap:Map;function Lu(e,t,n){n=Ve(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Gr||(Gr=!0,Mo=r),jo(e,t)},n}function Au(e,t,n){n=Ve(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){jo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){jo(e,t),typeof r!="function"&&(lt===null?lt=new Set([this]):lt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function El(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new sp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=kp.bind(null,e,t,n),t.then(e,e))}function jl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function zl(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ve(-1,1),t.tag=2,at(n,t,1))),n.lanes|=1),e)}var up=Ye.ReactCurrentOwner,ce=!1;function oe(e,t,n,r){t.child=e===null?lu(t,null,n,r):qt(t,e.child,n,r)}function Cl(e,t,n,r,i){n=n.render;var o=t.ref;return Yt(t,i),r=va(e,t,n,r,o,i),n=ya(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ke(e,t,i)):(D&&n&&aa(t),t.flags|=1,oe(e,t,r,i),t.child)}function Pl(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Pa(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Tu(e,t,o,r,i)):(e=Pr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Dn,n(a,r)&&e.ref===t.ref)return Ke(e,t,i)}return t.flags|=1,e=ut(o,r),e.ref=t.ref,e.return=t,t.child=e}function Tu(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Dn(o,r)&&e.ref===t.ref)if(ce=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ce=!0);else return t.lanes=e.lanes,Ke(e,t,i)}return zo(e,t,n,r,i)}function Ru(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},R(Vt,he),he|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,R(Vt,he),he|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,R(Vt,he),he|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,R(Vt,he),he|=r;return oe(e,t,i,n),t.child}function Fu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function zo(e,t,n,r,i){var o=pe(n)?Nt:ie.current;return o=Zt(t,o),Yt(t,i),n=va(e,t,n,r,o,i),r=ya(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ke(e,t,i)):(D&&r&&aa(t),t.flags|=1,oe(e,t,n,i),t.child)}function _l(e,t,n,r,i){if(pe(n)){var o=!0;Ur(t)}else o=!1;if(Yt(t,i),t.stateNode===null)jr(e,t),_u(t,n,r),Eo(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ne(d):(d=pe(n)?Nt:ie.current,d=Zt(t,d));var g=n.getDerivedStateFromProps,m=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==d)&&Nl(t,a,r,d),Ze=!1;var h=t.memoizedState;a.state=h,Wr(t,r,a,i),s=t.memoizedState,l!==r||h!==s||de.current||Ze?(typeof g=="function"&&(No(t,n,g,r),s=t.memoizedState),(l=Ze||Sl(t,n,l,r,h,s,d))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=d,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,uu(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:Ce(t.type,l),a.props=d,m=t.pendingProps,h=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ne(s):(s=pe(n)?Nt:ie.current,s=Zt(t,s));var y=n.getDerivedStateFromProps;(g=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==m||h!==s)&&Nl(t,a,r,s),Ze=!1,h=t.memoizedState,a.state=h,Wr(t,r,a,i);var w=t.memoizedState;l!==m||h!==w||de.current||Ze?(typeof y=="function"&&(No(t,n,y,r),w=t.memoizedState),(d=Ze||Sl(t,n,d,r,h,w,s)||!1)?(g||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,w,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,w,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),a.props=r,a.state=w,a.context=s,r=d):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Co(e,t,n,r,o,i)}function Co(e,t,n,r,i,o){Fu(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&ml(t,n,!1),Ke(e,t,o);r=t.stateNode,up.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=qt(t,e.child,null,o),t.child=qt(t,null,l,o)):oe(e,t,l,o),t.memoizedState=r.state,i&&ml(t,n,!0),t.child}function Mu(e){var t=e.stateNode;t.pendingContext?hl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&hl(e,t.context,!1),ha(e,t.containerInfo)}function Ll(e,t,n,r,i){return Jt(),sa(i),t.flags|=256,oe(e,t,n,r),t.child}var Po={dehydrated:null,treeContext:null,retryLane:0};function _o(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ou(e,t,n){var r=t.pendingProps,i=I.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),R(I,i&1),e===null)return ko(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=pi(a,r,0,null),e=St(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=_o(n),t.memoizedState=Po,e):ka(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return cp(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=ut(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=ut(l,o):(o=St(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?_o(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Po,r}return o=e.child,e=o.sibling,r=ut(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ka(e,t){return t=pi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hr(e,t,n,r){return r!==null&&sa(r),qt(t,e.child,null,n),e=ka(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cp(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Qi(Error(v(422))),hr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=pi({mode:"visible",children:r.children},i,0,null),o=St(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&qt(t,e.child,null,a),t.child.memoizedState=_o(a),t.memoizedState=Po,o);if(!(t.mode&1))return hr(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(v(419)),r=Qi(o,r,void 0),hr(e,t,a,r)}if(l=(a&e.childLanes)!==0,ce||l){if(r=Z,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,$e(e,i),Ae(r,e,i,-1))}return Ca(),r=Qi(Error(v(421))),hr(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Sp.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,me=ot(i.nextSibling),ge=t,D=!0,_e=null,e!==null&&(we[be++]=Be,we[be++]=Qe,we[be++]=Et,Be=e.id,Qe=e.overflow,Et=t),t=ka(t,r.children),t.flags|=4096,t)}function Al(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),So(e.return,t,n)}function Vi(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Du(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(oe(e,t,r.children,n),r=I.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Al(e,n,t);else if(e.tag===19)Al(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(R(I,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&$r(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Vi(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&$r(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Vi(t,!0,n,null,o);break;case"together":Vi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function jr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ke(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(v(153));if(t.child!==null){for(e=t.child,n=ut(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ut(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function dp(e,t,n){switch(t.tag){case 3:Mu(t),Jt();break;case 5:cu(t);break;case 1:pe(t.type)&&Ur(t);break;case 4:ha(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;R(Vr,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(R(I,I.current&1),t.flags|=128,null):n&t.child.childLanes?Ou(e,t,n):(R(I,I.current&1),e=Ke(e,t,n),e!==null?e.sibling:null);R(I,I.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Du(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),R(I,I.current),r)break;return null;case 22:case 23:return t.lanes=0,Ru(e,t,n)}return Ke(e,t,n)}var Iu,Lo,Uu,Bu;Iu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Lo=function(){};Uu=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,bt(De.current);var o=null;switch(n){case"input":i=Ji(e,i),r=Ji(e,r),o=[];break;case"select":i=B({},i,{value:void 0}),r=B({},r,{value:void 0}),o=[];break;case"textarea":i=to(e,i),r=to(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Dr)}ro(n,r);var a;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ln.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var s=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&s!==l&&(s!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(d,n)),n=s;else d==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(d,s)):d==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(d,""+s):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ln.hasOwnProperty(d)?(s!=null&&d==="onScroll"&&F("scroll",e),o||l===s||(o=[])):(o=o||[]).push(d,s))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};Bu=function(e,t,n,r){n!==r&&(t.flags|=4)};function mn(e,t){if(!D)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function pp(e,t,n){var r=t.pendingProps;switch(la(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(t),null;case 1:return pe(t.type)&&Ir(),ne(t),null;case 3:return r=t.stateNode,en(),M(de),M(ie),ga(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,_e!==null&&(Io(_e),_e=null))),Lo(e,t),ne(t),null;case 5:ma(t);var i=bt(Vn.current);if(n=t.type,e!==null&&t.stateNode!=null)Uu(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(v(166));return ne(t),null}if(e=bt(De.current),pr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Me]=t,r[Bn]=o,e=(t.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(i=0;i<bn.length;i++)F(bn[i],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":Ba(r,o),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},F("invalid",r);break;case"textarea":Va(r,o),F("invalid",r)}ro(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&dr(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&dr(r.textContent,l,e),i=["children",""+l]):Ln.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&F("scroll",r)}switch(n){case"input":rr(r),Qa(r,o,!0);break;case"textarea":rr(r),Ha(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Dr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ms(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Me]=t,e[Bn]=r,Iu(e,t,!1,!1),t.stateNode=e;e:{switch(a=io(n,r),n){case"dialog":F("cancel",e),F("close",e),i=r;break;case"iframe":case"object":case"embed":F("load",e),i=r;break;case"video":case"audio":for(i=0;i<bn.length;i++)F(bn[i],e);i=r;break;case"source":F("error",e),i=r;break;case"img":case"image":case"link":F("error",e),F("load",e),i=r;break;case"details":F("toggle",e),i=r;break;case"input":Ba(e,r),i=Ji(e,r),F("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=B({},r,{value:void 0}),F("invalid",e);break;case"textarea":Va(e,r),i=to(e,r),F("invalid",e);break;default:i=r}ro(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?vs(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&gs(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&An(e,s):typeof s=="number"&&An(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ln.hasOwnProperty(o)?s!=null&&o==="onScroll"&&F("scroll",e):s!=null&&$o(e,o,s,a))}switch(n){case"input":rr(e),Qa(e,r,!1);break;case"textarea":rr(e),Ha(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ct(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ht(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ht(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Dr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ne(t),null;case 6:if(e&&t.stateNode!=null)Bu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(v(166));if(n=bt(Vn.current),bt(De.current),pr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Me]=t,(o=r.nodeValue!==n)&&(e=ge,e!==null))switch(e.tag){case 3:dr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&dr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Me]=t,t.stateNode=r}return ne(t),null;case 13:if(M(I),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(D&&me!==null&&t.mode&1&&!(t.flags&128))ou(),Jt(),t.flags|=98560,o=!1;else if(o=pr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(v(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(v(317));o[Me]=t}else Jt(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ne(t),o=!1}else _e!==null&&(Io(_e),_e=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||I.current&1?Y===0&&(Y=3):Ca())),t.updateQueue!==null&&(t.flags|=4),ne(t),null);case 4:return en(),Lo(e,t),e===null&&In(t.stateNode.containerInfo),ne(t),null;case 10:return da(t.type._context),ne(t),null;case 17:return pe(t.type)&&Ir(),ne(t),null;case 19:if(M(I),o=t.memoizedState,o===null)return ne(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)mn(o,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=$r(e),a!==null){for(t.flags|=128,mn(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return R(I,I.current&1|2),t.child}e=e.sibling}o.tail!==null&&W()>nn&&(t.flags|=128,r=!0,mn(o,!1),t.lanes=4194304)}else{if(!r)if(e=$r(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),mn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!D)return ne(t),null}else 2*W()-o.renderingStartTime>nn&&n!==1073741824&&(t.flags|=128,r=!0,mn(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=W(),t.sibling=null,n=I.current,R(I,r?n&1|2:n&1),t):(ne(t),null);case 22:case 23:return za(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?he&1073741824&&(ne(t),t.subtreeFlags&6&&(t.flags|=8192)):ne(t),null;case 24:return null;case 25:return null}throw Error(v(156,t.tag))}function fp(e,t){switch(la(t),t.tag){case 1:return pe(t.type)&&Ir(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return en(),M(de),M(ie),ga(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ma(t),null;case 13:if(M(I),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(v(340));Jt()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return M(I),null;case 4:return en(),null;case 10:return da(t.type._context),null;case 22:case 23:return za(),null;case 24:return null;default:return null}}var mr=!1,re=!1,hp=typeof WeakSet=="function"?WeakSet:Set,k=null;function Qt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function Ao(e,t,n){try{n()}catch(r){Q(e,t,r)}}var Tl=!1;function mp(e,t){if(mo=Fr,e=$s(),oa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,d=0,g=0,m=e,h=null;t:for(;;){for(var y;m!==n||i!==0&&m.nodeType!==3||(l=a+i),m!==o||r!==0&&m.nodeType!==3||(s=a+r),m.nodeType===3&&(a+=m.nodeValue.length),(y=m.firstChild)!==null;)h=m,m=y;for(;;){if(m===e)break t;if(h===n&&++d===i&&(l=a),h===o&&++g===r&&(s=a),(y=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=y}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(go={focusedElem:e,selectionRange:n},Fr=!1,k=t;k!==null;)if(t=k,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,k=e;else for(;k!==null;){t=k;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var b=w.memoizedProps,O=w.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?b:Ce(t.type,b),O);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(x){Q(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,k=e;break}k=t.return}return w=Tl,Tl=!1,w}function Cn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ao(t,n,o)}i=i.next}while(i!==r)}}function ci(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function To(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Qu(e){var t=e.alternate;t!==null&&(e.alternate=null,Qu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Me],delete t[Bn],delete t[yo],delete t[Zd],delete t[Jd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vu(e){return e.tag===5||e.tag===3||e.tag===4}function Rl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ro(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Dr));else if(r!==4&&(e=e.child,e!==null))for(Ro(e,t,n),e=e.sibling;e!==null;)Ro(e,t,n),e=e.sibling}function Fo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Fo(e,t,n),e=e.sibling;e!==null;)Fo(e,t,n),e=e.sibling}var J=null,Pe=!1;function Xe(e,t,n){for(n=n.child;n!==null;)Hu(e,t,n),n=n.sibling}function Hu(e,t,n){if(Oe&&typeof Oe.onCommitFiberUnmount=="function")try{Oe.onCommitFiberUnmount(ni,n)}catch{}switch(n.tag){case 5:re||Qt(n,t);case 6:var r=J,i=Pe;J=null,Xe(e,t,n),J=r,Pe=i,J!==null&&(Pe?(e=J,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):J.removeChild(n.stateNode));break;case 18:J!==null&&(Pe?(e=J,n=n.stateNode,e.nodeType===8?Mi(e.parentNode,n):e.nodeType===1&&Mi(e,n),Mn(e)):Mi(J,n.stateNode));break;case 4:r=J,i=Pe,J=n.stateNode.containerInfo,Pe=!0,Xe(e,t,n),J=r,Pe=i;break;case 0:case 11:case 14:case 15:if(!re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Ao(n,t,a),i=i.next}while(i!==r)}Xe(e,t,n);break;case 1:if(!re&&(Qt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Q(n,t,l)}Xe(e,t,n);break;case 21:Xe(e,t,n);break;case 22:n.mode&1?(re=(r=re)||n.memoizedState!==null,Xe(e,t,n),re=r):Xe(e,t,n);break;default:Xe(e,t,n)}}function Fl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new hp),t.forEach(function(r){var i=Np.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:J=l.stateNode,Pe=!1;break e;case 3:J=l.stateNode.containerInfo,Pe=!0;break e;case 4:J=l.stateNode.containerInfo,Pe=!0;break e}l=l.return}if(J===null)throw Error(v(160));Hu(o,a,i),J=null,Pe=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(d){Q(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wu(t,e),t=t.sibling}function Wu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(t,e),Re(e),r&4){try{Cn(3,e,e.return),ci(3,e)}catch(b){Q(e,e.return,b)}try{Cn(5,e,e.return)}catch(b){Q(e,e.return,b)}}break;case 1:ze(t,e),Re(e),r&512&&n!==null&&Qt(n,n.return);break;case 5:if(ze(t,e),Re(e),r&512&&n!==null&&Qt(n,n.return),e.flags&32){var i=e.stateNode;try{An(i,"")}catch(b){Q(e,e.return,b)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&fs(i,o),io(l,a);var d=io(l,o);for(a=0;a<s.length;a+=2){var g=s[a],m=s[a+1];g==="style"?vs(i,m):g==="dangerouslySetInnerHTML"?gs(i,m):g==="children"?An(i,m):$o(i,g,m,d)}switch(l){case"input":qi(i,o);break;case"textarea":hs(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Ht(i,!!o.multiple,y,!1):h!==!!o.multiple&&(o.defaultValue!=null?Ht(i,!!o.multiple,o.defaultValue,!0):Ht(i,!!o.multiple,o.multiple?[]:"",!1))}i[Bn]=o}catch(b){Q(e,e.return,b)}}break;case 6:if(ze(t,e),Re(e),r&4){if(e.stateNode===null)throw Error(v(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(b){Q(e,e.return,b)}}break;case 3:if(ze(t,e),Re(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Mn(t.containerInfo)}catch(b){Q(e,e.return,b)}break;case 4:ze(t,e),Re(e);break;case 13:ze(t,e),Re(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ea=W())),r&4&&Fl(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(re=(d=re)||g,ze(t,e),re=d):ze(t,e),Re(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(k=e,g=e.child;g!==null;){for(m=k=g;k!==null;){switch(h=k,y=h.child,h.tag){case 0:case 11:case 14:case 15:Cn(4,h,h.return);break;case 1:Qt(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(b){Q(r,n,b)}}break;case 5:Qt(h,h.return);break;case 22:if(h.memoizedState!==null){Ol(m);continue}}y!==null?(y.return=h,k=y):Ol(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{i=m.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=m.stateNode,s=m.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=xs("display",a))}catch(b){Q(e,e.return,b)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(b){Q(e,e.return,b)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:ze(t,e),Re(e),r&4&&Fl(e);break;case 21:break;default:ze(t,e),Re(e)}}function Re(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vu(n)){var r=n;break e}n=n.return}throw Error(v(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(An(i,""),r.flags&=-33);var o=Rl(e);Fo(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Rl(e);Ro(e,l,a);break;default:throw Error(v(161))}}catch(s){Q(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gp(e,t,n){k=e,$u(e)}function $u(e,t,n){for(var r=(e.mode&1)!==0;k!==null;){var i=k,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||mr;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||re;l=mr;var d=re;if(mr=a,(re=s)&&!d)for(k=i;k!==null;)a=k,s=a.child,a.tag===22&&a.memoizedState!==null?Dl(i):s!==null?(s.return=a,k=s):Dl(i);for(;o!==null;)k=o,$u(o),o=o.sibling;k=i,mr=l,re=d}Ml(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,k=o):Ml(e)}}function Ml(e){for(;k!==null;){var t=k;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:re||ci(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!re)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ce(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&wl(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}wl(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&Mn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}re||t.flags&512&&To(t)}catch(h){Q(t,t.return,h)}}if(t===e){k=null;break}if(n=t.sibling,n!==null){n.return=t.return,k=n;break}k=t.return}}function Ol(e){for(;k!==null;){var t=k;if(t===e){k=null;break}var n=t.sibling;if(n!==null){n.return=t.return,k=n;break}k=t.return}}function Dl(e){for(;k!==null;){var t=k;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ci(4,t)}catch(s){Q(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Q(t,i,s)}}var o=t.return;try{To(t)}catch(s){Q(t,o,s)}break;case 5:var a=t.return;try{To(t)}catch(s){Q(t,a,s)}}}catch(s){Q(t,t.return,s)}if(t===e){k=null;break}var l=t.sibling;if(l!==null){l.return=t.return,k=l;break}k=t.return}}var xp=Math.ceil,Xr=Ye.ReactCurrentDispatcher,Sa=Ye.ReactCurrentOwner,Se=Ye.ReactCurrentBatchConfig,A=0,Z=null,$=null,q=0,he=0,Vt=ft(0),Y=0,Kn=null,zt=0,di=0,Na=0,Pn=null,ue=null,Ea=0,nn=1/0,Ie=null,Gr=!1,Mo=null,lt=null,gr=!1,tt=null,Zr=0,_n=0,Oo=null,zr=-1,Cr=0;function ae(){return A&6?W():zr!==-1?zr:zr=W()}function st(e){return e.mode&1?A&2&&q!==0?q&-q:ep.transition!==null?(Cr===0&&(Cr=_s()),Cr):(e=T,e!==0||(e=window.event,e=e===void 0?16:Os(e.type)),e):1}function Ae(e,t,n,r){if(50<_n)throw _n=0,Oo=null,Error(v(185));Xn(e,n,r),(!(A&2)||e!==Z)&&(e===Z&&(!(A&2)&&(di|=n),Y===4&&qe(e,q)),fe(e,r),n===1&&A===0&&!(t.mode&1)&&(nn=W()+500,li&&ht()))}function fe(e,t){var n=e.callbackNode;ed(e,t);var r=Rr(e,e===Z?q:0);if(r===0)n!==null&&Ka(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ka(n),t===1)e.tag===0?qd(Il.bind(null,e)):nu(Il.bind(null,e)),Xd(function(){!(A&6)&&ht()}),n=null;else{switch(Ls(r)){case 1:n=Zo;break;case 4:n=Cs;break;case 16:n=Tr;break;case 536870912:n=Ps;break;default:n=Tr}n=ec(n,Ku.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ku(e,t){if(zr=-1,Cr=0,A&6)throw Error(v(327));var n=e.callbackNode;if(Xt()&&e.callbackNode!==n)return null;var r=Rr(e,e===Z?q:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Jr(e,r);else{t=r;var i=A;A|=2;var o=Xu();(Z!==e||q!==t)&&(Ie=null,nn=W()+500,kt(e,t));do try{wp();break}catch(l){Yu(e,l)}while(!0);ca(),Xr.current=o,A=i,$!==null?t=0:(Z=null,q=0,t=Y)}if(t!==0){if(t===2&&(i=uo(e),i!==0&&(r=i,t=Do(e,i))),t===1)throw n=Kn,kt(e,0),qe(e,r),fe(e,W()),n;if(t===6)qe(e,r);else{if(i=e.current.alternate,!(r&30)&&!vp(i)&&(t=Jr(e,r),t===2&&(o=uo(e),o!==0&&(r=o,t=Do(e,o))),t===1))throw n=Kn,kt(e,0),qe(e,r),fe(e,W()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(v(345));case 2:vt(e,ue,Ie);break;case 3:if(qe(e,r),(r&130023424)===r&&(t=Ea+500-W(),10<t)){if(Rr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ae(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=vo(vt.bind(null,e,ue,Ie),t);break}vt(e,ue,Ie);break;case 4:if(qe(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Le(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=W()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xp(r/1960))-r,10<r){e.timeoutHandle=vo(vt.bind(null,e,ue,Ie),r);break}vt(e,ue,Ie);break;case 5:vt(e,ue,Ie);break;default:throw Error(v(329))}}}return fe(e,W()),e.callbackNode===n?Ku.bind(null,e):null}function Do(e,t){var n=Pn;return e.current.memoizedState.isDehydrated&&(kt(e,t).flags|=256),e=Jr(e,t),e!==2&&(t=ue,ue=n,t!==null&&Io(t)),e}function Io(e){ue===null?ue=e:ue.push.apply(ue,e)}function vp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Te(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function qe(e,t){for(t&=~Na,t&=~di,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Le(t),r=1<<n;e[n]=-1,t&=~r}}function Il(e){if(A&6)throw Error(v(327));Xt();var t=Rr(e,0);if(!(t&1))return fe(e,W()),null;var n=Jr(e,t);if(e.tag!==0&&n===2){var r=uo(e);r!==0&&(t=r,n=Do(e,r))}if(n===1)throw n=Kn,kt(e,0),qe(e,t),fe(e,W()),n;if(n===6)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,vt(e,ue,Ie),fe(e,W()),null}function ja(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(nn=W()+500,li&&ht())}}function Ct(e){tt!==null&&tt.tag===0&&!(A&6)&&Xt();var t=A;A|=1;var n=Se.transition,r=T;try{if(Se.transition=null,T=1,e)return e()}finally{T=r,Se.transition=n,A=t,!(A&6)&&ht()}}function za(){he=Vt.current,M(Vt)}function kt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Yd(n)),$!==null)for(n=$.return;n!==null;){var r=n;switch(la(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ir();break;case 3:en(),M(de),M(ie),ga();break;case 5:ma(r);break;case 4:en();break;case 13:M(I);break;case 19:M(I);break;case 10:da(r.type._context);break;case 22:case 23:za()}n=n.return}if(Z=e,$=e=ut(e.current,null),q=he=t,Y=0,Kn=null,Na=di=zt=0,ue=Pn=null,wt!==null){for(t=0;t<wt.length;t++)if(n=wt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}wt=null}return e}function Yu(e,t){do{var n=$;try{if(ca(),Nr.current=Yr,Kr){for(var r=U.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Kr=!1}if(jt=0,G=K=U=null,zn=!1,Hn=0,Sa.current=null,n===null||n.return===null){Y=1,Kn=t,$=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=q,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=s,g=l,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var y=jl(a);if(y!==null){y.flags&=-257,zl(y,a,l,o,t),y.mode&1&&El(o,d,t),t=y,s=d;var w=t.updateQueue;if(w===null){var b=new Set;b.add(s),t.updateQueue=b}else w.add(s);break e}else{if(!(t&1)){El(o,d,t),Ca();break e}s=Error(v(426))}}else if(D&&l.mode&1){var O=jl(a);if(O!==null){!(O.flags&65536)&&(O.flags|=256),zl(O,a,l,o,t),sa(tn(s,l));break e}}o=s=tn(s,l),Y!==4&&(Y=2),Pn===null?Pn=[o]:Pn.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Lu(o,s,t);yl(o,p);break e;case 1:l=s;var c=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(lt===null||!lt.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Au(o,l,t);yl(o,x);break e}}o=o.return}while(o!==null)}Zu(n)}catch(S){t=S,$===n&&n!==null&&($=n=n.return);continue}break}while(!0)}function Xu(){var e=Xr.current;return Xr.current=Yr,e===null?Yr:e}function Ca(){(Y===0||Y===3||Y===2)&&(Y=4),Z===null||!(zt&268435455)&&!(di&268435455)||qe(Z,q)}function Jr(e,t){var n=A;A|=2;var r=Xu();(Z!==e||q!==t)&&(Ie=null,kt(e,t));do try{yp();break}catch(i){Yu(e,i)}while(!0);if(ca(),A=n,Xr.current=r,$!==null)throw Error(v(261));return Z=null,q=0,Y}function yp(){for(;$!==null;)Gu($)}function wp(){for(;$!==null&&!Wc();)Gu($)}function Gu(e){var t=qu(e.alternate,e,he);e.memoizedProps=e.pendingProps,t===null?Zu(e):$=t,Sa.current=null}function Zu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=fp(n,t),n!==null){n.flags&=32767,$=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,$=null;return}}else if(n=pp(n,t,he),n!==null){$=n;return}if(t=t.sibling,t!==null){$=t;return}$=t=e}while(t!==null);Y===0&&(Y=5)}function vt(e,t,n){var r=T,i=Se.transition;try{Se.transition=null,T=1,bp(e,t,n,r)}finally{Se.transition=i,T=r}return null}function bp(e,t,n,r){do Xt();while(tt!==null);if(A&6)throw Error(v(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(td(e,o),e===Z&&($=Z=null,q=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gr||(gr=!0,ec(Tr,function(){return Xt(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Se.transition,Se.transition=null;var a=T;T=1;var l=A;A|=4,Sa.current=null,mp(e,n),Wu(n,e),Bd(go),Fr=!!mo,go=mo=null,e.current=n,gp(n),$c(),A=l,T=a,Se.transition=o}else e.current=n;if(gr&&(gr=!1,tt=e,Zr=i),o=e.pendingLanes,o===0&&(lt=null),Xc(n.stateNode),fe(e,W()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Gr)throw Gr=!1,e=Mo,Mo=null,e;return Zr&1&&e.tag!==0&&Xt(),o=e.pendingLanes,o&1?e===Oo?_n++:(_n=0,Oo=e):_n=0,ht(),null}function Xt(){if(tt!==null){var e=Ls(Zr),t=Se.transition,n=T;try{if(Se.transition=null,T=16>e?16:e,tt===null)var r=!1;else{if(e=tt,tt=null,Zr=0,A&6)throw Error(v(331));var i=A;for(A|=4,k=e.current;k!==null;){var o=k,a=o.child;if(k.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var d=l[s];for(k=d;k!==null;){var g=k;switch(g.tag){case 0:case 11:case 15:Cn(8,g,o)}var m=g.child;if(m!==null)m.return=g,k=m;else for(;k!==null;){g=k;var h=g.sibling,y=g.return;if(Qu(g),g===d){k=null;break}if(h!==null){h.return=y,k=h;break}k=y}}}var w=o.alternate;if(w!==null){var b=w.child;if(b!==null){w.child=null;do{var O=b.sibling;b.sibling=null,b=O}while(b!==null)}}k=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,k=a;else e:for(;k!==null;){if(o=k,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Cn(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,k=p;break e}k=o.return}}var c=e.current;for(k=c;k!==null;){a=k;var f=a.child;if(a.subtreeFlags&2064&&f!==null)f.return=a,k=f;else e:for(a=c;k!==null;){if(l=k,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ci(9,l)}}catch(S){Q(l,l.return,S)}if(l===a){k=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,k=x;break e}k=l.return}}if(A=i,ht(),Oe&&typeof Oe.onPostCommitFiberRoot=="function")try{Oe.onPostCommitFiberRoot(ni,e)}catch{}r=!0}return r}finally{T=n,Se.transition=t}}return!1}function Ul(e,t,n){t=tn(n,t),t=Lu(e,t,1),e=at(e,t,1),t=ae(),e!==null&&(Xn(e,1,t),fe(e,t))}function Q(e,t,n){if(e.tag===3)Ul(e,e,n);else for(;t!==null;){if(t.tag===3){Ul(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(lt===null||!lt.has(r))){e=tn(n,e),e=Au(t,e,1),t=at(t,e,1),e=ae(),t!==null&&(Xn(t,1,e),fe(t,e));break}}t=t.return}}function kp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ae(),e.pingedLanes|=e.suspendedLanes&n,Z===e&&(q&n)===n&&(Y===4||Y===3&&(q&130023424)===q&&500>W()-Ea?kt(e,0):Na|=n),fe(e,t)}function Ju(e,t){t===0&&(e.mode&1?(t=ar,ar<<=1,!(ar&130023424)&&(ar=4194304)):t=1);var n=ae();e=$e(e,t),e!==null&&(Xn(e,t,n),fe(e,n))}function Sp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ju(e,n)}function Np(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(v(314))}r!==null&&r.delete(t),Ju(e,n)}var qu;qu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||de.current)ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ce=!1,dp(e,t,n);ce=!!(e.flags&131072)}else ce=!1,D&&t.flags&1048576&&ru(t,Qr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;jr(e,t),e=t.pendingProps;var i=Zt(t,ie.current);Yt(t,n),i=va(null,t,r,e,i,n);var o=ya();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pe(r)?(o=!0,Ur(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fa(t),i.updater=ui,t.stateNode=i,i._reactInternals=t,Eo(t,r,e,n),t=Co(null,t,r,!0,o,n)):(t.tag=0,D&&o&&aa(t),oe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(jr(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=jp(r),e=Ce(r,e),i){case 0:t=zo(null,t,r,e,n);break e;case 1:t=_l(null,t,r,e,n);break e;case 11:t=Cl(null,t,r,e,n);break e;case 14:t=Pl(null,t,r,Ce(r.type,e),n);break e}throw Error(v(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ce(r,i),zo(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ce(r,i),_l(e,t,r,i,n);case 3:e:{if(Mu(t),e===null)throw Error(v(387));r=t.pendingProps,o=t.memoizedState,i=o.element,uu(e,t),Wr(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=tn(Error(v(423)),t),t=Ll(e,t,r,n,i);break e}else if(r!==i){i=tn(Error(v(424)),t),t=Ll(e,t,r,n,i);break e}else for(me=ot(t.stateNode.containerInfo.firstChild),ge=t,D=!0,_e=null,n=lu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jt(),r===i){t=Ke(e,t,n);break e}oe(e,t,r,n)}t=t.child}return t;case 5:return cu(t),e===null&&ko(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,xo(r,i)?a=null:o!==null&&xo(r,o)&&(t.flags|=32),Fu(e,t),oe(e,t,a,n),t.child;case 6:return e===null&&ko(t),null;case 13:return Ou(e,t,n);case 4:return ha(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=qt(t,null,r,n):oe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ce(r,i),Cl(e,t,r,i,n);case 7:return oe(e,t,t.pendingProps,n),t.child;case 8:return oe(e,t,t.pendingProps.children,n),t.child;case 12:return oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,R(Vr,r._currentValue),r._currentValue=a,o!==null)if(Te(o.value,a)){if(o.children===i.children&&!de.current){t=Ke(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Ve(-1,n&-n),s.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?s.next=s:(s.next=g.next,g.next=s),d.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),So(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(v(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),So(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}oe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Yt(t,n),i=Ne(i),r=r(i),t.flags|=1,oe(e,t,r,n),t.child;case 14:return r=t.type,i=Ce(r,t.pendingProps),i=Ce(r.type,i),Pl(e,t,r,i,n);case 15:return Tu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ce(r,i),jr(e,t),t.tag=1,pe(r)?(e=!0,Ur(t)):e=!1,Yt(t,n),_u(t,r,i),Eo(t,r,i,n),Co(null,t,r,!0,e,n);case 19:return Du(e,t,n);case 22:return Ru(e,t,n)}throw Error(v(156,t.tag))};function ec(e,t){return zs(e,t)}function Ep(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ke(e,t,n,r){return new Ep(e,t,n,r)}function Pa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jp(e){if(typeof e=="function")return Pa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Yo)return 11;if(e===Xo)return 14}return 2}function ut(e,t){var n=e.alternate;return n===null?(n=ke(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Pr(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Pa(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Tt:return St(n.children,i,o,t);case Ko:a=8,i|=8;break;case Yi:return e=ke(12,n,t,i|2),e.elementType=Yi,e.lanes=o,e;case Xi:return e=ke(13,n,t,i),e.elementType=Xi,e.lanes=o,e;case Gi:return e=ke(19,n,t,i),e.elementType=Gi,e.lanes=o,e;case cs:return pi(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ss:a=10;break e;case us:a=9;break e;case Yo:a=11;break e;case Xo:a=14;break e;case Ge:a=16,r=null;break e}throw Error(v(130,e==null?e:typeof e,""))}return t=ke(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function St(e,t,n,r){return e=ke(7,e,r,t),e.lanes=n,e}function pi(e,t,n,r){return e=ke(22,e,r,t),e.elementType=cs,e.lanes=n,e.stateNode={isHidden:!1},e}function Hi(e,t,n){return e=ke(6,e,null,t),e.lanes=n,e}function Wi(e,t,n){return t=ke(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function zp(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ei(0),this.expirationTimes=Ei(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ei(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _a(e,t,n,r,i,o,a,l,s){return e=new zp(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ke(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fa(o),e}function Cp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:At,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function tc(e){if(!e)return dt;e=e._reactInternals;e:{if(_t(e)!==e||e.tag!==1)throw Error(v(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(v(171))}if(e.tag===1){var n=e.type;if(pe(n))return tu(e,n,t)}return t}function nc(e,t,n,r,i,o,a,l,s){return e=_a(n,r,!0,e,i,o,a,l,s),e.context=tc(null),n=e.current,r=ae(),i=st(n),o=Ve(r,i),o.callback=t??null,at(n,o,i),e.current.lanes=i,Xn(e,i,r),fe(e,r),e}function fi(e,t,n,r){var i=t.current,o=ae(),a=st(i);return n=tc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ve(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=at(i,t,a),e!==null&&(Ae(e,i,a,o),Sr(e,i,a)),a}function qr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function La(e,t){Bl(e,t),(e=e.alternate)&&Bl(e,t)}function Pp(){return null}var rc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Aa(e){this._internalRoot=e}hi.prototype.render=Aa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(v(409));fi(e,t,null,null)};hi.prototype.unmount=Aa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ct(function(){fi(null,e,null,null)}),t[We]=null}};function hi(e){this._internalRoot=e}hi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Rs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Je.length&&t!==0&&t<Je[n].priority;n++);Je.splice(n,0,e),n===0&&Ms(e)}};function Ta(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function mi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ql(){}function _p(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=qr(a);o.call(d)}}var a=nc(t,r,e,0,null,!1,!1,"",Ql);return e._reactRootContainer=a,e[We]=a.current,In(e.nodeType===8?e.parentNode:e),Ct(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=qr(s);l.call(d)}}var s=_a(e,0,!1,null,null,!1,!1,"",Ql);return e._reactRootContainer=s,e[We]=s.current,In(e.nodeType===8?e.parentNode:e),Ct(function(){fi(t,s,n,r)}),s}function gi(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=qr(a);l.call(s)}}fi(t,a,e,i)}else a=_p(n,t,e,i,r);return qr(a)}As=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wn(t.pendingLanes);n!==0&&(Jo(t,n|1),fe(t,W()),!(A&6)&&(nn=W()+500,ht()))}break;case 13:Ct(function(){var r=$e(e,1);if(r!==null){var i=ae();Ae(r,e,1,i)}}),La(e,1)}};qo=function(e){if(e.tag===13){var t=$e(e,134217728);if(t!==null){var n=ae();Ae(t,e,134217728,n)}La(e,134217728)}};Ts=function(e){if(e.tag===13){var t=st(e),n=$e(e,t);if(n!==null){var r=ae();Ae(n,e,t,r)}La(e,t)}};Rs=function(){return T};Fs=function(e,t){var n=T;try{return T=e,t()}finally{T=n}};ao=function(e,t,n){switch(t){case"input":if(qi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ai(r);if(!i)throw Error(v(90));ps(r),qi(r,i)}}}break;case"textarea":hs(e,n);break;case"select":t=n.value,t!=null&&Ht(e,!!n.multiple,t,!1)}};bs=ja;ks=Ct;var Lp={usingClientEntryPoint:!1,Events:[Zn,Ot,ai,ys,ws,ja]},gn={findFiberByHostInstance:yt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ap={bundleType:gn.bundleType,version:gn.version,rendererPackageName:gn.rendererPackageName,rendererConfig:gn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ye.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Es(e),e===null?null:e.stateNode},findFiberByHostInstance:gn.findFiberByHostInstance||Pp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xr.isDisabled&&xr.supportsFiber)try{ni=xr.inject(Ap),Oe=xr}catch{}}ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lp;ve.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ta(t))throw Error(v(200));return Cp(e,t,null,n)};ve.createRoot=function(e,t){if(!Ta(e))throw Error(v(299));var n=!1,r="",i=rc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=_a(e,1,!1,null,null,n,!1,r,i),e[We]=t.current,In(e.nodeType===8?e.parentNode:e),new Aa(t)};ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=Es(t),e=e===null?null:e.stateNode,e};ve.flushSync=function(e){return Ct(e)};ve.hydrate=function(e,t,n){if(!mi(t))throw Error(v(200));return gi(null,e,t,!0,n)};ve.hydrateRoot=function(e,t,n){if(!Ta(e))throw Error(v(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=rc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=nc(t,null,e,1,n??null,i,!1,o,a),e[We]=t.current,In(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new hi(t)};ve.render=function(e,t,n){if(!mi(t))throw Error(v(200));return gi(null,e,t,!1,n)};ve.unmountComponentAtNode=function(e){if(!mi(e))throw Error(v(40));return e._reactRootContainer?(Ct(function(){gi(null,null,e,!1,function(){e._reactRootContainer=null,e[We]=null})}),!0):!1};ve.unstable_batchedUpdates=ja;ve.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!mi(n))throw Error(v(200));if(e==null||e._reactInternals===void 0)throw Error(v(38));return gi(e,t,n,!1,r)};ve.version="18.3.1-next-f1338f8080-20240426";function ic(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ic)}catch(e){console.error(e)}}ic(),is.exports=ve;var Tp=is.exports,Vl=Tp;$i.createRoot=Vl.createRoot,$i.hydrateRoot=Vl.hydrateRoot;const Hl=["ISO 14001","NR-10","NR-12","NR-35","CONAMA 237","Lei 6.938/81","PCMSO","PGR","eSocial","PNRS","ANTT 5.232","ISO 45001"],Wl=new URL("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCABQAGoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9U6KKKACiiigApKWmsaAMzxF4m0vwpYx3eq3sVjbSTJAskpwC7nCj/PoTWmhDDIORX57ftf8Axw/4Tv4wWHg/S7jfougNIJyjfLNd+W24+4QfKPfdX1D+y38WB8RfASWV7Nv1rRwtvOSfmkjx+7k/EDB9x71s6TjBSOeNZSm4HtVFIKWsToCiiigAooooAKKKKACiiigArxv9qj41R/BP4W3l9byqNe1AG00yMnnzCPmk+iKS312jvXsE8qQRtJI4REBZmY4AA6mvhTVfAmt/tvfGe51hpZtP+GGiSGytbzobkKfn8kHqzkZLfwjb1IwdaUU3eWyMKsmlyx3Z4D+z98DvF/xo8S3N9pMA+yWqyPcalesyxmQq2E3YJLknoOg5OO/p3w38Vax8BPipDNqVrPZtBJ9m1GzdcF4W+9gd8feU9DgVgftSfEDXvAHxGufAHhW8vPCXhbw+kMVpZaZO1uJWMauZnZSC7Fm6kk8eteufAHw5eftV/BjUP+EnuHfxJol19lsPEEo3SSIUDCOU9ZACTyeRu+ufQlJ25pbM86MFzcsd0fbGn30Gp2UF5ayrPbToskUsZyrKRkEGrNfPv7M/iTV/DEt98MvFcTW2saSDNYmQ5E1uSSQrfxAE5GOxx/DX0EpzXmSjyux6kJcyuLRRRUmgUUUUAFFFFABTW5GKdWJ408Waf4F8L6lr+qzC30/T4HnmkPoozgepPQDuTSbUVdlwjKpJRgrtmd4x06z8b2l74Ue/e3E8KPfx25xIbZmYFA38O/ay5HOA2MHBrc0XRrHw9pVrpmmWsVjYWsYigt4V2pGoHAArwz9j/wAQal8RvD3ir4g6sClx4j1eQ20ZOfJtIQEijH+6fM+pJPc19Ajr71nTqe0gpdGdGLw/1SvKi946P16/czzH4qfs4+A/jJfW9/4l0fz9QgURrd28zwylAfuMVPI69emeMV2HgjwLofw58O22heHdPj0zTLfJSGPJyT1ZmJJYn1JzW/xmg1tzO1jhUUnc53xP4Ns/Ek+n3zD7Nq2my+dZ3yD54m7qf7yMOGXuD64I3LadLiMsjBgCVOD3HBH55qVscVxFlrX9ieOrzSp22297ieDPZyMEfjg/iK8rG4+OClS9rpGb5b9m9v8AI6qNB1VLl3Sv69zt6VelNGacK9MwFooopgFIaWmnrQAjcEV+f/8AwUN+PH9o6hB8NtHuM29qVudWaM/ek6xxH6AhyPUr3FfXH7Qfxhs/gl8M9S8QzlZL0L5NjbMf9dO3CrjIyByx9lNfj1f+MIZfFI1jxJczXklxeC5vNmHnmy4Z8A9zz1wK8DNMTyx9hHd7+h+k8H5XGpUlmNde7D4fOX/A/M+w/GP7Y0n7I3w+8D/Dvw/4ft9V8RQ6Nb3upS3sjLDbPMvmGPaMFm+YnqAAV9cD6P8A2Qv2qLX9p7wjqV1Jpg0fXtIkjiv7SOQvGQ4by5EJAOG2PwehUjJ618UfHW1+Ff7YPirT/E3gvx5pvgrxNJbRWd1pHjANZxShBhGWVA678YXAJyAMYI5+yf2LP2Y7P9nLwVqLHWbfXta114pby8s2zb7YwwjSPPJA3ucnqWq8NKs63KmnBeh5uaU8GsI6k4tV5O7unu3r5WPoukanU18Y5r22fEHgnxE/aVm8NeJ7jStJ0yC7itHMc087kb2HUKB0weM8/hTtd8WweOtC0XxPZRtayktbypuyYpFIOM9+uQfesP4wfA+3bxHda1b6/pul2l5IZZotRlKbGP3ipwd2fT3rNm8deDPCfgu08M6bc3GqTJP58t6kO2MufvEZwcY6YHQV+GZ5WzGrDF0cdUShvBXV7ppq3XY/RcJQwbjQqYSDc/taPqtb9D6I8E+JE8TaHFPkC4QbJVHZh3/HrXQDvXz58NPGsOl6rFNHcLLYXGI5ip4HofqD/WvoGNgygjkHkEV93wjnf9sYBe1f72Gkl+T+f5nymbYF4HENL4Xqv8h9FFFfcnihSN0paRjQB83ftQfsp63+0dq+nSL47Hh7S7CIrDZLpvnnzGPzSFvNXkgAdOAK+fX/AOCSTyuzP8UC7nksdFySf+/9fokPWlHSuGpgqFWXPOOvqe5QzrHYakqNKdorZWX+R+dX/Do/H/NTc/8AcF/+312/w/8A+CfXjr4WXCzeFfjxqmjhTkwQaYTC31jM5Q/iK+36Q+9THA0Iu8Y2+bHUzzHVVyzndeaX+Rw/w+0Dx1oNr9n8VeLNN8UFVwtzBo5spSexbEzKfwUVF4m8IeL9f3x23jCPSbduNlpp+Hx/vmQn8sV3nFFaVsNCvD2c27eTa/I8uOInCftElf0VvutY+fL39lW61Odp7vxfNdTMcmSe2LsfxMlVf+GRTznxOP8AwD/+zr6OpMc187LhXKJu86V36y/zPWWfZhFJRqaei/yPnzT/ANlq70mYTWvixon74suD7Eb+RXt3hbTLvRtFt7O8vFvpoV2+esezcO3GT/OtUClHFehgMkwOWVHUwsOVvR6s4sVmOJxqUa8r28l/kLRRRXvHmn//2Q==",import.meta.url).href,xn=[{number:"01",shortLabel:"Mapeamento",orbitLabel:"Levantamento",title:"Levantamento legal aplicável",description:"Identificamos leis, normas, licenças e obrigações regulatórias aplicáveis ao segmento, unidade e operação da empresa."},{number:"02",shortLabel:"Processos",orbitLabel:"Processos",title:"Enquadramento por processo",description:"Relacionamos cada requisito às atividades, áreas responsáveis, riscos e evidências exigidas para garantir clareza operacional."},{number:"03",shortLabel:"Avaliacao",orbitLabel:"Atendimento",title:"Avaliação de atendimento",description:"A equipe responde avaliações, acompanha pendências, anexa evidências e registra o status de conformidade de cada obrigação."},{number:"04",shortLabel:"Resultados",orbitLabel:"Relatorios",title:"Planos de ação e relatórios",description:"Dashboards intuitivos e relatórios detalhados orientam prioridades, reduzem exposição legal e sustentam auditorias e decisões."}],$l=[["Mapeamento por segmento","Leis, licencas e normas","Base inicial estruturada"],["Vinculo com processos","Responsaveis definidos","Risco e evidencia por area"],["Rotina de atendimento","Pendencias acompanhadas","Status de conformidade visivel"],["Plano de acao claro","Prioridades executivas","Relatorios para auditoria"]],Rp=[{title:"Controle de obrigações legais",description:"Monitore prazos, condicionantes, normas e requisitos críticos com uma visão centralizada e acionável.",scene:"legal"},{title:"Evidências organizadas",description:"Centralize documentos, registros, licenças, laudos e comprovações em uma estrutura pronta para consulta e auditoria.",scene:"evidence"},{title:"Painéis intuitivos",description:"Visualize rapidamente o panorama da conformidade legal com indicadores claros, leitura executiva e foco em prioridade.",scene:"dashboard"},{title:"Alertas e vencimentos",description:"Receba alertas sobre prazos, atualizações legais, documentos vencendo e atividades críticas antes que virem passivos.",scene:"alerts"},{title:"Relatórios detalhados",description:"Gere relatórios gerenciais e evidências para auditorias, clientes, lideranças e processos de certificação.",scene:"reports"}],Fp=[{title:"Meio Ambiente",description:"Licenças, condicionantes, requisitos ambientais e monitoramentos obrigatórios."},{title:"Saúde Ocupacional",description:"Programas ocupacionais, exames, laudos e controles de medicina do trabalho."},{title:"Segurança do Trabalho",description:"Normas regulamentadoras, treinamentos, inspeções e gestão documental de SST."},{title:"Transporte e Logística",description:"Requisitos para operações logísticas, transporte, cargas e produtos controlados."},{title:"Qualidade e Certificações",description:"Padronização, evidências, auditorias e suporte a processos de certificação."},{title:"Requisitos Personalizados",description:"Estruture categorias conforme unidade, segmento, contrato ou exigência específica."}];function Mp(e){return u.jsxs("div",{className:`benefit-scene benefit-scene-${e}`,"aria-hidden":"true",children:[u.jsx("span",{className:"benefit-scene-glow"}),u.jsx("span",{className:"benefit-scene-card benefit-scene-card-a"}),u.jsx("span",{className:"benefit-scene-card benefit-scene-card-b"}),u.jsx("span",{className:"benefit-scene-card benefit-scene-card-c"}),u.jsx("span",{className:"benefit-scene-chip benefit-scene-chip-a"}),u.jsx("span",{className:"benefit-scene-chip benefit-scene-chip-b"}),u.jsx("span",{className:"benefit-scene-chip benefit-scene-chip-c"})]})}const Op=`
  :root {
    color-scheme: dark;
    --bg: #1b0711;
    --bg-soft: rgba(53, 17, 24, 0.72);
    --panel: rgba(54, 16, 24, 0.78);
    --panel-strong: rgba(43, 12, 19, 0.96);
    --line: rgba(214, 163, 87, 0.18);
    --line-strong: rgba(214, 163, 87, 0.36);
    --text: #f7eee6;
    --muted: #d8beb1;
    --primary: #d5a14f;
    --primary-strong: #b67a2f;
    --accent: #f0cf93;
    --shadow: 0 30px 80px rgba(0, 0, 0, 0.34);
    --radius-xl: 32px;
    --radius-lg: 24px;
    --radius-md: 18px;
    --container: 1180px;
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background:
      radial-gradient(circle at top left, rgba(166, 42, 74, 0.26), transparent 30%),
      radial-gradient(circle at top right, rgba(137, 22, 44, 0.28), transparent 32%),
      linear-gradient(180deg, #2a0a14 0%, #4a0f20 42%, #1a0710 100%);
    color: var(--text);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .landing-shell {
    min-height: 100vh;
    overflow-x: hidden;
  }

  .container {
    width: min(calc(100% - 32px), var(--container));
    margin: 0 auto;
  }

  .section {
    padding: 88px 0;
  }

  .section-header {
    max-width: 720px;
    margin-bottom: 34px;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 10px 14px;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: rgba(95, 30, 45, 0.42);
    color: #f2d6ba;
    font-size: 0.88rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .badge::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--accent), var(--primary));
    box-shadow: 0 0 20px rgba(213, 161, 79, 0.65);
  }

  .kicker {
    margin: 0 0 12px;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-size: 0.84rem;
  }

  h1,
  h2,
  h3,
  p {
    margin: 0;
  }

  .title-xl {
    font-size: clamp(2.45rem, 5.2vw, 4.7rem);
    line-height: 0.92;
    letter-spacing: -0.05em;
    max-width: 10ch;
  }

  .title-lg {
    font-size: clamp(2rem, 4.2vw, 3.5rem);
    line-height: 1.02;
    letter-spacing: -0.04em;
  }

  .lead {
    margin-top: 16px;
    color: var(--muted);
    font-size: clamp(0.94rem, 1.15vw, 1rem);
    line-height: 1.64;
    max-width: 54ch;
  }

  .hero {
    position: relative;
    min-height: 100svh;
    padding: 16px 0 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 70% 18%, rgba(215, 161, 79, 0.1), transparent 26%),
      repeating-linear-gradient(
        60deg,
        rgba(214, 163, 87, 0.08) 0,
        rgba(214, 163, 87, 0.08) 2px,
        transparent 2px,
        transparent 126px
      ),
      repeating-linear-gradient(
        -60deg,
        rgba(214, 163, 87, 0.08) 0,
        rgba(214, 163, 87, 0.08) 2px,
        transparent 2px,
        transparent 126px
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.03), transparent 22%);
    opacity: 0.65;
    pointer-events: none;
  }

  .hero::after {
    content: "";
    position: absolute;
    inset: auto -12% 12% auto;
    width: 52vw;
    height: 52vw;
    max-width: 740px;
    max-height: 740px;
    background: radial-gradient(circle, rgba(122, 19, 41, 0.22), transparent 62%);
    pointer-events: none;
    filter: blur(18px);
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding: 8px 0 16px;
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 14px;
    font-weight: 700;
    letter-spacing: 0.04em;
  }

  .brand-mark {
    width: 46px;
    height: 46px;
    border-radius: 16px;
    display: grid;
    place-items: center;
    overflow: hidden;
    background: linear-gradient(145deg, rgba(213, 161, 79, 0.3), rgba(123, 26, 43, 0.12));
    border: 1px solid var(--line);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
  }

  .brand-mark img,
  .hero-sidebar-badge img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 18px;
    color: var(--muted);
    font-size: 0.95rem;
  }

  .nav-links a:hover {
    color: var(--text);
  }

  .nav-right {
    display: flex;
    align-items: center;
    gap: 18px;
  }

  .nav-actions {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .nav-button {
    min-height: 40px;
    padding: 0 16px;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.92rem;
    font-weight: 600;
    border: 1px solid transparent;
    transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
  }

  .nav-button:hover {
    transform: translateY(-1px);
  }

  .nav-button-secondary {
    color: var(--text);
    border-color: var(--line);
    background: rgba(95, 30, 45, 0.22);
  }

  .nav-button-primary {
    color: #2a0d10;
    background: linear-gradient(135deg, var(--primary), var(--primary-strong));
    box-shadow: 0 14px 32px rgba(182, 122, 47, 0.22);
  }

  .hero-grid {
    display: grid;
    grid-template-columns: minmax(0, 0.98fr) minmax(300px, 0.8fr);
    gap: clamp(14px, 2vw, 22px);
    align-items: center;
    flex: 1;
    min-height: 0;
    padding-top: 2px;
  }

  .hero-copy,
  .hero-art,
  .ticker,
  .process-flow,
  .showcase-stage,
  .sector-list,
  .contact-grid,
  .footer {
    position: relative;
    z-index: 1;
  }

  .hero-copy {
    padding: 6px 0 0;
  }

  .hero-copy strong {
    background: linear-gradient(135deg, #fff7f0, #f0cf93 55%, #c78739 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .cta-row {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-top: 22px;
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 46px;
    padding: 0 20px;
    border-radius: 999px;
    border: 1px solid transparent;
    font-weight: 600;
    transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
  }

  .button:hover {
    transform: translateY(-1px);
  }

  .button-primary {
    background: linear-gradient(135deg, var(--primary), var(--primary-strong));
    color: #2a0d10;
    box-shadow: 0 18px 40px rgba(182, 122, 47, 0.28);
  }

  .button-secondary {
    border-color: var(--line);
    background: rgba(95, 30, 45, 0.28);
    color: var(--text);
  }

  .hero-note {
    margin-top: 18px;
    color: #e5cdbf;
    font-size: 0.95rem;
  }

  .hero-art {
    position: relative;
    min-height: clamp(340px, 48vh, 470px);
    display: grid;
    place-items: center;
    padding: 8px 8px 0;
    overflow: hidden;
  }

  .hero-art::before {
    content: "";
    position: absolute;
    inset: 8% 5% 16%;
    border-radius: 28px;
    border: 1px solid rgba(214, 163, 87, 0.12);
    background:
      radial-gradient(circle at top right, rgba(213, 161, 79, 0.08), transparent 30%),
      linear-gradient(180deg, rgba(88, 18, 33, 0.48), rgba(40, 9, 18, 0.42));
    box-shadow: var(--shadow);
  }

  .hero-monitor {
    position: relative;
    width: min(100%, 440px);
    z-index: 1;
  }

  .hero-monitor-frame {
    position: relative;
    padding: 12px;
    border-radius: 22px;
    background: linear-gradient(180deg, #2c1118 0%, #13060a 100%);
    border: 1px solid rgba(214, 163, 87, 0.16);
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.34);
  }

  .hero-monitor-bezel {
    overflow: hidden;
    border-radius: 16px;
    background: #17060c;
    border: 1px solid rgba(214, 163, 87, 0.08);
  }

  .hero-monitor-topbar {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    padding: 10px 14px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.01));
    border-bottom: 1px solid rgba(214, 163, 87, 0.08);
  }

  .hero-monitor-dots {
    display: flex;
    gap: 8px;
  }

  .hero-monitor-dots span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(240, 207, 147, 0.56);
  }

  .hero-screen {
    display: grid;
    grid-template-columns: 80px minmax(0, 1fr);
    min-height: 256px;
    background:
      linear-gradient(180deg, rgba(123, 22, 43, 0.18), transparent 28%),
      linear-gradient(180deg, #24070f 0%, #18050b 100%);
  }

  .hero-sidebar {
    padding: 12px 10px;
    border-right: 1px solid rgba(214, 163, 87, 0.08);
    background: rgba(255, 255, 255, 0.02);
  }

  .hero-sidebar-badge {
    height: 38px;
    border-radius: 12px;
    display: grid;
    place-items: center;
    overflow: hidden;
    margin-bottom: 12px;
    color: #f0cf93;
    font-weight: 700;
    background: linear-gradient(135deg, rgba(213, 161, 79, 0.18), rgba(106, 18, 36, 0.12));
    border: 1px solid rgba(214, 163, 87, 0.14);
  }

  .hero-sidebar-item {
    height: 10px;
    margin-bottom: 10px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.1);
  }

  .hero-sidebar-item:nth-child(3) {
    width: 82%;
  }

  .hero-sidebar-item:nth-child(4) {
    width: 70%;
  }

  .hero-sidebar-item:nth-child(5) {
    width: 88%;
  }

  .hero-screen-main {
    padding: 14px;
    display: grid;
    gap: 10px;
  }

  .hero-system-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .hero-system-title {
    color: #f6e7d6;
    font-size: 0.9rem;
    font-weight: 700;
  }

  .hero-system-preview {
    position: relative;
    min-height: 132px;
    border-radius: 16px;
    overflow: hidden;
    border: 1px dashed rgba(214, 163, 87, 0.24);
    background:
      linear-gradient(135deg, rgba(255, 255, 255, 0.04), transparent 52%),
      linear-gradient(180deg, rgba(84, 21, 34, 0.68), rgba(37, 10, 17, 0.9));
  }

  .hero-system-preview::before {
    content: "";
    position: absolute;
    inset: 10px;
    border-radius: 12px;
    border: 1px solid rgba(214, 163, 87, 0.12);
    background:
      linear-gradient(90deg, rgba(214, 163, 87, 0.08) 0, rgba(214, 163, 87, 0.08) 1px, transparent 1px, transparent 56px),
      linear-gradient(180deg, rgba(214, 163, 87, 0.08) 0, rgba(214, 163, 87, 0.08) 1px, transparent 1px, transparent 56px);
    background-size: 44px 44px;
  }

  .hero-system-image {
    position: relative;
    z-index: 1;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
  }

  .hero-system-panels {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 10px;
  }

  .hero-system-card {
    padding: 12px;
    border-radius: 14px;
    border: 1px solid rgba(214, 163, 87, 0.1);
    background: rgba(255, 255, 255, 0.03);
  }

  .hero-system-card strong {
    display: block;
    color: #f4dec7;
    font-size: 0.88rem;
    margin-bottom: 6px;
  }

  .hero-system-card span {
    display: block;
    color: #d8beb1;
    font-size: 0.8rem;
    line-height: 1.45;
  }

  .hero-system-lines {
    display: grid;
    gap: 8px;
  }

  .hero-system-lines span {
    display: block;
    height: 8px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.12);
  }

  .hero-system-lines span:nth-child(2) {
    width: 84%;
  }

  .hero-system-lines span:nth-child(3) {
    width: 68%;
  }

  .hero-monitor-stand {
    position: relative;
    width: 130px;
    height: 14px;
    margin: 0 auto;
    background: linear-gradient(180deg, rgba(73, 28, 36, 0.94), rgba(20, 7, 11, 0.98));
    border-radius: 0 0 20px 20px;
  }

  .hero-monitor-stand::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 100%;
    width: 28px;
    height: 24px;
    transform: translateX(-50%);
    background: linear-gradient(180deg, rgba(73, 28, 36, 0.94), rgba(20, 7, 11, 0.98));
    border-radius: 0 0 12px 12px;
  }

  .hero-monitor-base {
    width: 176px;
    height: 10px;
    margin: 8px auto 0;
    border-radius: 999px;
    background: linear-gradient(180deg, rgba(73, 28, 36, 0.84), rgba(12, 4, 7, 0.96));
    box-shadow: 0 18px 38px rgba(0, 0, 0, 0.28);
  }

  .ticker {
    margin-top: 8px;
    overflow: hidden;
    padding: 8px 0;
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    background: rgba(255, 255, 255, 0.02);
  }

  .ticker-track {
    display: flex;
    width: max-content;
    gap: 16px;
    color: #ebd7c6;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: 0.84rem;
    animation: ticker-move 24s linear infinite;
  }

  .ticker-item {
    display: inline-flex;
    align-items: center;
    gap: 16px;
    white-space: nowrap;
  }

  .ticker-item::after {
    content: "+";
    color: var(--accent);
  }

  @keyframes ticker-move {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  .contact-card,
  .contact-form,
  .showcase-panel,
  .process-step {
    border-radius: var(--radius-lg);
    border: 1px solid var(--line);
    background: var(--panel);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
  }

  .method-transition {
    display: flex;
    align-items: center;
    gap: 0;
    margin-bottom: 24px;
  }

  .method-transition::before,
  .method-transition::after {
    content: "";
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.72), transparent);
    box-shadow: 0 0 14px rgba(255, 255, 255, 0.18);
  }

  .method-intro {
    display: block;
    margin-bottom: 18px;
  }

  .method-header {
    margin-bottom: 0;
  }

  .method-section {
    background: #fbf8f4;
    color: #241715;
    padding: 58px 0 66px;
  }

  .method-layout {
    display: grid;
    grid-template-columns: 1fr;
    gap: 22px;
    align-items: start;
  }

  .method-intro {
    max-width: 920px;
    margin: 0 auto 10px;
  }

  .method-header {
    text-align: center;
  }

  .method-header .title-lg {
    max-width: 34ch;
    margin-left: auto;
    margin-right: auto;
    color: #241715;
    font-size: clamp(1.5rem, 1.95vw, 2.05rem);
    line-height: 1.08;
    text-wrap: balance;
  }

  .method-header .lead {
    color: #5b4b45;
    max-width: 42ch;
    margin-left: auto;
    margin-right: auto;
    font-size: 0.98rem;
    line-height: 1.42;
  }

  .method-classic-section {
    background: #fbf8f4;
    color: #241715;
    padding: 58px 0 28px;
  }

  .method-classic-intro {
    max-width: 920px;
    margin: 0 auto 16px;
    text-align: center;
  }

  .method-classic-intro .title-lg {
    max-width: 34ch;
    margin-left: auto;
    margin-right: auto;
    color: #241715;
    font-size: clamp(1.5rem, 1.95vw, 2.05rem);
    line-height: 1.08;
    text-wrap: balance;
  }

  .method-classic-intro .lead {
    color: #5b4b45;
    max-width: 42ch;
    margin-left: auto;
    margin-right: auto;
    font-size: 0.98rem;
    line-height: 1.42;
  }

  .method-classic-showcase {
    position: relative;
    display: grid;
    grid-template-columns: 82px minmax(0, 1fr);
    gap: 14px;
    padding: 22px 24px 18px;
    max-width: 960px;
    margin: 0 auto;
    border-radius: 32px;
    border: 1px solid rgba(214, 163, 87, 0.08);
    background:
      radial-gradient(circle at top right, rgba(213, 161, 79, 0.1), transparent 24%),
      linear-gradient(135deg, rgba(21, 6, 12, 0.98), rgba(61, 10, 28, 0.96));
    box-shadow:
      0 30px 60px rgba(7, 2, 4, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.03);
    overflow: hidden;
  }

  .method-classic-showcase::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(255, 255, 255, 0.08) 0.7px, transparent 0.7px);
    background-size: 22px 22px;
    opacity: 0.12;
    pointer-events: none;
  }

  .method-classic-showcase::after {
    content: "";
    position: absolute;
    left: 18px;
    right: 18px;
    bottom: 18px;
    height: 74px;
    border-radius: 18px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0.06));
    opacity: 0.38;
    pointer-events: none;
  }

  .method-classic-nav,
  .method-classic-stage {
    position: relative;
    z-index: 1;
  }

  .method-classic-nav {
    display: grid;
    gap: 2px;
    align-content: center;
    align-self: center;
    min-height: 100%;
    padding: 0;
    border-left: 1px solid rgba(255, 255, 255, 0.08);
  }

  .method-classic-tab {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2px;
    align-items: center;
    padding: 6px 6px 6px 8px;
    border-radius: 0;
    border: 0;
    background: transparent;
    color: inherit;
    text-align: left;
    position: relative;
    cursor: pointer;
    transition: opacity 0.22s ease, transform 0.22s ease;
    opacity: 0.42;
  }

  .method-classic-tab:hover,
  .method-classic-tab-active {
    opacity: 1;
    transform: translateX(2px);
  }

  .method-classic-tab::before {
    content: "";
    position: absolute;
    left: -1px;
    top: 50%;
    width: 2px;
    height: calc(100% - 10px);
    border-radius: 999px;
    background: transparent;
    transform: translateY(-50%);
    transition: background 0.22s ease, box-shadow 0.22s ease;
  }

  .method-classic-tab-active::before {
    background: linear-gradient(180deg, rgba(240, 207, 147, 0.98), rgba(213, 161, 79, 0.92));
    box-shadow: 0 0 18px rgba(213, 161, 79, 0.28);
  }

  .method-classic-tab-copy strong,
  .method-classic-tab-copy small {
    display: block;
  }

  .method-classic-tab-copy strong {
    font-size: 0.56rem;
    line-height: 1.02;
    color: #f8ede4;
  }

  .method-classic-tab-copy small {
    margin-top: 2px;
    color: rgba(226, 212, 203, 0.34);
    font-size: 0.34rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .method-classic-stage {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(260px, 0.58fr);
    grid-template-areas:
      "copy visual"
      "footer footer";
    gap: 20px;
    align-items: center;
    padding-top: 6px;
  }

  .method-classic-copy {
    grid-area: copy;
    color: #fff6ee;
  }

  .method-classic-step {
    display: grid;
    gap: 6px;
    margin-top: 0;
  }

  .method-classic-step strong {
    font-size: clamp(1.8rem, 2.7vw, 2.5rem);
    line-height: 1;
    letter-spacing: -0.04em;
    max-width: 14ch;
    color: #fff6ee;
  }

  .method-classic-description {
    margin-top: 12px;
    color: #e6d0c3;
    font-size: 0.94rem;
    line-height: 1.64;
    max-width: 44ch;
  }

  .method-classic-points {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 16px;
  }

  .method-classic-point {
    padding: 8px 12px;
    border-radius: 999px;
    border: 1px solid rgba(214, 163, 87, 0.14);
    background: rgba(255, 255, 255, 0.03);
    color: #f3e5d8;
    font-size: 0.8rem;
  }

  .method-classic-visual {
    grid-area: visual;
    position: relative;
    min-height: 250px;
    border-radius: 26px;
    overflow: hidden;
    background:
      radial-gradient(circle at top right, rgba(213, 161, 79, 0.16), transparent 22%),
      linear-gradient(180deg, rgba(73, 12, 29, 0.68), rgba(21, 6, 12, 0.96));
    border: 1px solid rgba(214, 163, 87, 0.08);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
  }

  .method-classic-screen,
  .method-classic-card,
  .method-classic-orb {
    position: absolute;
  }

  .method-classic-screen {
    inset: 18px 18px 62px 18px;
    padding: 18px;
    border-radius: 24px;
    background:
      linear-gradient(180deg, rgba(16, 8, 12, 0.24), rgba(16, 8, 12, 0.62)),
      rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }

  .method-classic-screen-badge {
    display: inline-flex;
    padding: 7px 10px;
    border-radius: 999px;
    background: rgba(213, 161, 79, 0.12);
    color: #f0cf93;
    font-size: 0.68rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .method-classic-screen strong {
    display: block;
    margin-top: 14px;
    font-size: 1.18rem;
    line-height: 1.08;
    color: #fff6ee;
    max-width: 11ch;
  }

  .method-classic-lines {
    display: grid;
    gap: 8px;
    margin-top: 12px;
  }

  .method-classic-lines span {
    display: block;
    height: 6px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.16);
  }

  .method-classic-lines span:nth-child(2) {
    width: 82%;
  }

  .method-classic-lines span:nth-child(3) {
    width: 68%;
  }

  .method-classic-card {
    border-radius: 18px;
    background: linear-gradient(180deg, rgba(255, 248, 242, 0.98), rgba(241, 230, 220, 0.94));
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.16);
  }

  .method-classic-card-a {
    width: 74px;
    height: 102px;
    left: 18px;
    bottom: 18px;
    transform: rotate(-10deg);
  }

  .method-classic-card-b {
    width: 88px;
    height: 112px;
    left: 54px;
    bottom: 12px;
    opacity: 0.92;
    transform: rotate(6deg);
  }

  .method-classic-card-c {
    width: 58px;
    height: 58px;
    right: 14px;
    top: 14px;
    border-radius: 50%;
    background: linear-gradient(180deg, rgba(213, 161, 79, 0.98), rgba(181, 101, 37, 0.92));
  }

  .method-classic-orb {
    width: 92px;
    height: 92px;
    right: -10px;
    bottom: -12px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(130, 17, 43, 0.34), transparent 68%);
    filter: blur(8px);
  }

  .method-classic-stage-02 .method-classic-card-a {
    width: 82px;
    height: 120px;
    left: 22px;
    bottom: 16px;
    transform: rotate(-7deg);
  }

  .method-classic-stage-02 .method-classic-card-b {
    width: 98px;
    height: 130px;
    left: 62px;
    bottom: 10px;
  }

  .method-classic-stage-03 .method-classic-card-a,
  .method-classic-stage-03 .method-classic-card-b {
    background: linear-gradient(180deg, rgba(8, 18, 36, 0.96), rgba(5, 10, 21, 0.96));
  }

  .method-classic-stage-03 .method-classic-card-c {
    background: conic-gradient(from 90deg, rgba(226, 178, 97, 0.94), rgba(103, 63, 209, 0.92), rgba(41, 195, 162, 0.92), rgba(226, 178, 97, 0.94));
  }

  .method-classic-stage-04 .method-classic-card-a {
    width: 88px;
    height: 118px;
    left: 18px;
    bottom: 16px;
    background: linear-gradient(180deg, rgba(255, 248, 242, 0.98), rgba(241, 230, 220, 0.98));
  }

  .method-classic-stage-04 .method-classic-card-b {
    width: 74px;
    height: 40px;
    left: 26px;
    bottom: 20px;
    background: linear-gradient(180deg, rgba(88, 17, 33, 0.88), rgba(36, 11, 17, 0.96));
  }

  .method-classic-footer {
    grid-area: footer;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 14px;
    min-height: 74px;
    padding: 14px 16px;
    border-radius: 18px;
    border: 1px solid rgba(214, 163, 87, 0.05);
    background: transparent;
  }

  .method-classic-footer p {
    display: none;
  }

  .method-classic-progress {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
  }

  .method-classic-progress span {
    width: 34px;
    height: 6px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.12);
    transition: width 0.24s ease, background 0.24s ease;
  }

  .method-classic-progress-active {
    width: 56px !important;
    background: linear-gradient(90deg, rgba(240, 207, 147, 0.98), rgba(213, 161, 79, 0.92)) !important;
  }

  .method-break-section {
    background: #fbf8f4;
    color: #241715;
    padding: 0 0 12px;
  }

  .method-break-fullbleed {
    width: 100vw;
    margin-left: calc(50% - 50vw);
  }

  .method-break-banner {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(320px, 0.86fr);
    gap: clamp(24px, 4vw, 48px);
    align-items: center;
    min-height: min(56vh, 460px);
    padding: clamp(22px, 3vw, 34px) clamp(28px, 4.8vw, 56px);
    border-radius: 0;
    overflow: hidden;
    background:
      radial-gradient(circle at 18% 50%, rgba(213, 161, 79, 0.1), transparent 22%),
      radial-gradient(circle at 84% 20%, rgba(123, 26, 43, 0.12), transparent 18%),
      linear-gradient(135deg, #220812 0%, #3a0d1b 46%, #5a1325 100%);
    box-shadow:
      0 18px 38px rgba(34, 10, 17, 0.16),
      inset 0 1px 0 rgba(255, 255, 255, 0.08);
  }

  .method-break-banner::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(135deg, rgba(255, 255, 255, 0.04), transparent 26%),
      radial-gradient(circle at right center, rgba(213, 161, 79, 0.08), transparent 24%);
    pointer-events: none;
  }

  .method-break-copy,
  .method-break-visual {
    position: relative;
    z-index: 1;
  }

  .method-break-copy {
    max-width: 600px;
    color: #fff6ee;
  }

  .method-break-copy .kicker {
    color: rgba(240, 223, 212, 0.7);
  }

  .method-break-copy .title-lg {
    max-width: 12ch;
    font-size: clamp(1.9rem, 3.4vw, 3.6rem);
    line-height: 0.92;
    color: #fff8f2;
  }

  .method-break-copy .lead {
    max-width: 46ch;
    color: rgba(252, 237, 226, 0.9);
    font-size: 0.96rem;
    line-height: 1.58;
  }

  .method-break-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 22px;
  }

  .method-break-button {
    min-height: 44px;
    padding: 0 18px;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    border: 1px solid transparent;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  }

  .method-break-button:hover {
    transform: translateY(-1px);
  }

  .method-break-button-primary {
    background: linear-gradient(135deg, #f0cf93, #d5a14f);
    color: #2a0d10;
    box-shadow: 0 14px 26px rgba(213, 161, 79, 0.22);
  }

  .method-break-button-secondary {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 226, 199, 0.24);
    color: #fff6ee;
  }

  .method-break-note {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-top: 14px;
    color: rgba(255, 233, 220, 0.82);
    font-size: 0.88rem;
  }

  .method-break-note strong {
    color: #f0cf93;
  }

  .method-break-visual {
    min-height: 250px;
    display: grid;
    place-items: center;
  }

  .method-break-visual::before {
    content: "";
    position: absolute;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(213, 161, 79, 0.14), transparent 66%);
    filter: blur(8px);
  }

  .method-break-figure {
    position: relative;
    width: min(100%, 320px);
    aspect-ratio: 1;
  }

  .method-break-shield {
    position: absolute;
    inset: 8% 12% 14% 12%;
    border-radius: 38% 38% 44% 44% / 24% 24% 58% 58%;
    border: 10px solid rgba(240, 207, 147, 0.92);
    background: rgba(255, 227, 180, 0.04);
    box-shadow:
      inset 0 0 0 1px rgba(255, 245, 231, 0.12),
      0 0 40px rgba(240, 207, 147, 0.16);
  }

  .method-break-shield::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 20%;
    width: 22%;
    height: 40%;
    border-radius: 999px;
    background: rgba(240, 207, 147, 0.96);
    transform: translateX(-50%);
  }

  .method-break-shield::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 46%;
    width: 52%;
    height: 12px;
    border-radius: 999px;
    background: rgba(240, 207, 147, 0.96);
    transform: translateX(-50%);
  }

  .method-break-card {
    position: absolute;
    display: grid;
    gap: 6px;
    padding: 12px 14px;
    border-radius: 18px;
    border: 1px solid rgba(255, 228, 205, 0.14);
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.04)),
      rgba(59, 14, 26, 0.42);
    color: #fff4ea;
    box-shadow: 0 16px 36px rgba(27, 9, 14, 0.24);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }

  .method-break-card strong {
    font-size: 0.78rem;
    color: #f0cf93;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .method-break-card span {
    font-size: 0.82rem;
    line-height: 1.4;
    color: rgba(255, 238, 226, 0.86);
  }

  .method-break-card-a {
    top: 6%;
    left: 2%;
    max-width: 160px;
  }

  .method-break-card-b {
    right: -2%;
    bottom: 10%;
    max-width: 170px;
  }

  .method-break-badge {
    position: absolute;
    right: 10%;
    top: 10%;
    width: 68px;
    height: 68px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    color: #5a2d14;
    font-weight: 800;
    font-size: 0.74rem;
    text-transform: uppercase;
    background: linear-gradient(180deg, rgba(240, 207, 147, 0.98), rgba(213, 161, 79, 0.96));
    box-shadow: 0 20px 34px rgba(213, 161, 79, 0.22);
  }

  .method-break-badge::before {
    content: "OK";
  }

  .method-showcase {
    position: relative;
    padding: clamp(24px, 4vw, 36px);
    max-width: 1120px;
    margin: 0 auto;
    border-radius: 40px;
    border: 1px solid rgba(214, 163, 87, 0.12);
    background:
      radial-gradient(circle at 20% 50%, rgba(213, 161, 79, 0.16), transparent 20%),
      radial-gradient(circle at 74% 18%, rgba(145, 30, 53, 0.14), transparent 24%),
      linear-gradient(135deg, #18070d 0%, #210912 38%, #4a0f20 100%);
    box-shadow:
      0 30px 60px rgba(24, 7, 13, 0.24),
      inset 0 1px 0 rgba(255, 255, 255, 0.03);
    overflow: hidden;
  }

  .method-showcase::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 18% 85%, rgba(0, 0, 0, 0.48), transparent 24%),
      radial-gradient(circle at 92% 0, rgba(0, 0, 0, 0.46), transparent 20%);
    opacity: 0.92;
    pointer-events: none;
  }

  .method-showcase::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(255, 255, 255, 0.08) 0.7px, transparent 0.7px);
    background-size: 22px 22px;
    opacity: 0.08;
    pointer-events: none;
  }

  .method-showcase-shell,
  .method-showcase-orbit,
  .method-showcase-panel {
    position: relative;
    z-index: 1;
  }

  .method-showcase-shell {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(320px, 0.92fr);
    gap: clamp(24px, 4vw, 40px);
    align-items: center;
  }

  .method-showcase-orbit {
    min-height: 420px;
    display: grid;
    place-items: center;
  }

  .method-showcase-orbit::before,
  .method-showcase-orbit::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(214, 163, 87, 0.12);
  }

  .method-showcase-orbit::before {
    width: min(100%, 420px);
    aspect-ratio: 1;
  }

  .method-showcase-orbit::after {
    width: min(100%, 320px);
    aspect-ratio: 1;
  }

  .method-showcase-ring {
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(214, 163, 87, 0.08);
  }

  .method-showcase-ring-a {
    width: min(100%, 500px);
    aspect-ratio: 1;
  }

  .method-showcase-ring-b {
    width: min(100%, 246px);
    aspect-ratio: 1;
  }

  .method-showcase-spark {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #f0cf93;
    box-shadow: 0 0 18px rgba(240, 207, 147, 0.95);
  }

  .method-showcase-spark-a {
    top: 22%;
    right: 18%;
  }

  .method-showcase-spark-b {
    left: 16%;
    bottom: 18%;
    width: 8px;
    height: 8px;
    background: rgba(213, 161, 79, 0.9);
    box-shadow: 0 0 16px rgba(213, 161, 79, 0.88);
  }

  .method-showcase-photo {
    position: relative;
    width: min(100%, 280px);
    aspect-ratio: 1;
    border-radius: 50%;
    padding: 10px;
    background: linear-gradient(180deg, rgba(255, 248, 242, 0.98), rgba(241, 230, 220, 0.92));
    box-shadow: 0 22px 46px rgba(0, 0, 0, 0.28);
  }

  .method-showcase-photo::before {
    content: "";
    position: absolute;
    inset: 12px;
    border-radius: 50%;
    border: 1px solid rgba(116, 78, 48, 0.18);
    pointer-events: none;
  }

  .method-showcase-photo-placeholder {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px dashed rgba(116, 78, 48, 0.22);
    background:
      linear-gradient(135deg, rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0.06)),
      radial-gradient(circle at 30% 30%, rgba(213, 161, 79, 0.16), transparent 28%),
      linear-gradient(180deg, rgba(95, 30, 45, 0.16), rgba(95, 30, 45, 0.06));
    display: grid;
    place-items: center;
    text-align: center;
    color: rgba(72, 43, 33, 0.76);
    font-size: 0.86rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .method-showcase-photo-placeholder span {
    display: block;
    max-width: 12ch;
    line-height: 1.4;
  }

  .method-showcase-tab {
    position: absolute;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 0;
    border: 0;
    border-radius: 999px;
    background: transparent;
    color: inherit;
    text-align: left;
    cursor: pointer;
    transition: transform 0.22s ease, opacity 0.22s ease;
    opacity: 0.76;
  }

  .method-showcase-tab:hover,
  .method-showcase-tab-active {
    opacity: 1;
    transform: scale(1.02);
  }

  .method-showcase-tab-top {
    top: 14px;
    left: 50%;
    transform: translateX(-50%);
  }

  .method-showcase-tab-top:hover,
  .method-showcase-tab-top.method-showcase-tab-active {
    transform: translateX(-50%) scale(1.02);
  }

  .method-showcase-tab-left {
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .method-showcase-tab-left:hover,
  .method-showcase-tab-left.method-showcase-tab-active {
    transform: translateY(-50%) scale(1.02);
  }

  .method-showcase-tab-right {
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .method-showcase-tab-right:hover,
  .method-showcase-tab-right.method-showcase-tab-active {
    transform: translateY(-50%) scale(1.02);
  }

  .method-showcase-tab-bottom {
    bottom: 14px;
    left: 50%;
    transform: translateX(-50%);
  }

  .method-showcase-tab-bottom:hover,
  .method-showcase-tab-bottom.method-showcase-tab-active {
    transform: translateX(-50%) scale(1.02);
  }

  .method-showcase-tab-reverse {
    flex-direction: row-reverse;
    text-align: right;
  }

  .method-showcase-tab-dot {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    flex-shrink: 0;
    display: grid;
    place-items: center;
    border: 1px solid rgba(255, 255, 255, 0.22);
    background: rgba(255, 255, 255, 0.92);
    color: #34131b;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.18);
    transition: background 0.22s ease, color 0.22s ease, box-shadow 0.22s ease;
  }

  .method-showcase-tab-active .method-showcase-tab-dot {
    background: linear-gradient(180deg, rgba(213, 161, 79, 0.98), rgba(182, 122, 47, 0.94));
    color: #fff7ef;
    box-shadow:
      0 0 0 8px rgba(213, 161, 79, 0.14),
      0 14px 28px rgba(0, 0, 0, 0.24);
  }

  .method-showcase-tab-dot span {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid currentColor;
    position: relative;
  }

  .method-showcase-tab-dot span::before {
    content: "";
    position: absolute;
    inset: 3px;
    border-radius: 999px;
    background: currentColor;
  }

  .method-showcase-tab-copy {
    display: grid;
    gap: 4px;
  }

  .method-showcase-tab-copy strong,
  .method-showcase-tab-copy small {
    display: block;
  }

  .method-showcase-tab-copy strong {
    font-size: 0.72rem;
    line-height: 1.02;
    color: #f8ede4;
    text-transform: uppercase;
    letter-spacing: 0.16em;
  }

  .method-showcase-tab-copy small {
    color: rgba(230, 212, 203, 0.44);
    font-size: 0.7rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .method-showcase-panel {
    padding: clamp(24px, 3vw, 34px);
    border-radius: 34px;
    background:
      radial-gradient(circle at top right, rgba(213, 161, 79, 0.08), transparent 26%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02)),
      rgba(95, 30, 45, 0.22);
    border: 1px solid rgba(214, 163, 87, 0.1);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.06),
      0 30px 60px rgba(24, 7, 13, 0.22);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
  }

  .method-showcase-panel-header {
    display: grid;
    gap: 14px;
  }

  .method-showcase-kicker {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: rgba(240, 223, 212, 0.68);
    font-size: 0.72rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
  }

  .method-showcase-kicker::before {
    content: "";
    width: 22px;
    height: 2px;
    border-radius: 999px;
    background: linear-gradient(90deg, rgba(213, 161, 79, 0.98), rgba(213, 161, 79, 0.26));
  }

  .method-showcase-heading {
    display: flex;
    align-items: flex-start;
    gap: 16px;
  }

  .method-showcase-icon {
    width: 54px;
    height: 54px;
    flex-shrink: 0;
    border-radius: 18px;
    display: grid;
    place-items: center;
    background: linear-gradient(180deg, rgba(213, 161, 79, 0.98), rgba(182, 122, 47, 0.92));
    box-shadow: 0 14px 26px rgba(182, 122, 47, 0.24);
  }

  .method-showcase-icon span {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 2px solid #3a2310;
    position: relative;
  }

  .method-showcase-icon span::before {
    content: "";
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    background: #3a2310;
  }

  .method-showcase-step {
    display: grid;
    gap: 12px;
    margin-top: 0;
  }

  .method-showcase-step strong {
    font-size: clamp(2rem, 3vw, 3.2rem);
    line-height: 1.04;
    letter-spacing: -0.05em;
    max-width: 11ch;
    color: #fff6ee;
  }

  .method-showcase-description {
    margin-top: 0;
    color: #e6d0c3;
    font-size: 1rem;
    line-height: 1.78;
    max-width: 42ch;
  }

  .method-showcase-points {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 22px;
  }

  .method-showcase-point {
    padding: 8px 14px;
    border-radius: 999px;
    border: 1px solid rgba(214, 163, 87, 0.14);
    background: rgba(255, 255, 255, 0.04);
    color: #f3e5d8;
    font-size: 0.76rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .method-showcase-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-top: 28px;
    padding-top: 22px;
    border-top: 1px solid rgba(214, 163, 87, 0.08);
  }

  .method-showcase-footer p {
    color: rgba(230, 212, 203, 0.72);
    font-size: 0.92rem;
    line-height: 1.6;
    max-width: 26ch;
  }

  .method-showcase-progress {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
  }

  .method-showcase-progress span {
    width: 26px;
    height: 6px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.12);
    transition: width 0.24s ease, background 0.24s ease;
  }

  .method-showcase-progress-active {
    width: 48px !important;
    background: linear-gradient(90deg, rgba(213, 161, 79, 0.98), rgba(182, 122, 47, 0.92)) !important;
  }

  .benefits-section {
    background: #fbf8f4;
    color: #241715;
    padding: 64px 0 72px;
  }

  .benefits-section .kicker {
    color: #8f5b26;
  }

  .benefits-top {
    display: grid;
    grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
    gap: 28px;
    align-items: start;
  }

  .benefits-header {
    max-width: 100%;
    margin-bottom: 0;
    padding-top: 14px;
  }

  .benefits-header .title-lg {
    font-size: clamp(2rem, 4vw, 3.2rem);
    line-height: 1.02;
    max-width: 12ch;
    color: #241715;
  }

  .benefits-header .lead {
    color: #5b4b45;
    max-width: 46ch;
  }

  .showcase-stage {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 18px;
    align-items: stretch;
  }

  .showcase-panel {
    position: relative;
    width: 100%;
    min-height: 390px;
    padding: 0;
    overflow: hidden;
    border-radius: 30px;
    border: none;
    background: transparent;
    box-shadow: 0 18px 38px rgba(58, 28, 18, 0.12);
    cursor: pointer;
    transform-origin: center center;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    transition:
      transform 0.26s ease,
      min-height 0.32s ease,
      box-shadow 0.32s ease,
      border-color 0.28s ease;
    z-index: 2;
  }

  .showcase-panel::before {
    content: none;
  }

  .showcase-panel:hover {
    transform: translateY(-8px) scale(1.015);
    box-shadow:
      0 30px 58px rgba(58, 28, 18, 0.2),
      0 0 0 1px rgba(255, 240, 221, 0.12);
  }

  .showcase-panel:hover .benefit-scene {
    transform: scale(1.04);
    filter: blur(6px) saturate(1.04) brightness(0.94);
  }

  .showcase-panel:hover .benefit-scene::before {
    background:
      linear-gradient(135deg, rgba(255, 255, 255, 0.12), transparent 34%),
      linear-gradient(180deg, rgba(33, 18, 24, 0.02) 0%, rgba(33, 18, 24, 0.14) 46%, rgba(16, 8, 12, 0.34) 100%);
  }

  .showcase-index,
  .benefit-index {
    position: absolute;
    top: 18px;
    left: 18px;
    z-index: 3;
    color: rgba(255, 244, 228, 0.88);
    font-size: 0.9rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    text-shadow: 0 8px 18px rgba(0, 0, 0, 0.24);
  }

  .showcase-copy {
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 12px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 8px;
    padding: 18px 16px 16px;
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.56);
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.54) 0%, rgba(255, 255, 255, 0.86) 100%);
    box-shadow:
      0 18px 34px rgba(58, 28, 18, 0.16),
      inset 0 1px 0 rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    opacity: 0;
    transform: translateY(18px);
    transition: opacity 0.26s ease, transform 0.26s ease;
    pointer-events: none;
  }

  .showcase-panel-dashboard .showcase-copy {
    border-color: rgba(255, 255, 255, 0.74);
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.95) 100%);
    box-shadow:
      0 18px 34px rgba(34, 17, 20, 0.16),
      inset 0 1px 0 rgba(255, 255, 255, 0.82);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .showcase-panel:hover .showcase-copy {
    opacity: 1;
    transform: translateY(0);
  }

  .showcase-title {
    position: relative;
    z-index: 1;
    color: #2b1714;
    font-size: 1.1rem;
    line-height: 1.02;
    max-width: 11ch;
    text-shadow: none;
  }

  .showcase-description {
    position: relative;
    z-index: 1;
    color: rgba(58, 33, 29, 0.88);
    font-size: 0.88rem;
    line-height: 1.5;
    max-width: 19ch;
    text-shadow: none;
  }

  .showcase-visual {
    position: relative;
    z-index: 1;
    flex: 1;
    margin-top: 18px;
    border-radius: 22px;
    overflow: hidden;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.84), rgba(240, 229, 219, 0.96)),
      linear-gradient(145deg, rgba(213, 161, 79, 0.16), transparent 44%);
    border: 1px solid rgba(124, 91, 66, 0.08);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);
  }

  .showcase-visual::before {
    content: "";
    position: relative;
    z-index: 1;
  }

  .benefit-scene {
    position: relative;
    flex: 1;
    margin-top: 0;
    min-height: 290px;
    height: 100%;
    border-radius: inherit;
    overflow: hidden;
    background:
      linear-gradient(145deg, rgba(96, 28, 40, 0.9), rgba(22, 8, 14, 0.98)),
      radial-gradient(circle at top right, rgba(226, 178, 97, 0.26), transparent 30%);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.08),
      inset 0 -50px 80px rgba(11, 8, 10, 0.14);
    transition: transform 0.26s ease, filter 0.26s ease;
  }

  .benefit-scene::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(135deg, rgba(255, 255, 255, 0.06), transparent 34%),
      linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.18));
  }

  .benefit-scene-glow {
    position: absolute;
    inset: auto auto 10% 8%;
    width: 54%;
    height: 44%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(215, 163, 88, 0.2), transparent 70%);
    filter: blur(8px);
  }

  .benefit-scene-card {
    position: absolute;
    border-radius: 18px;
    background: linear-gradient(180deg, rgba(255, 248, 242, 0.96), rgba(236, 223, 211, 0.94));
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.16);
  }

  .benefit-scene-card-a {
    inset: 18% 18% 18% 14%;
  }

  .benefit-scene-card-b {
    inset: 30% 14% 16% 34%;
    opacity: 0.8;
  }

  .benefit-scene-card-c {
    inset: 18% 46% 40% 18%;
    opacity: 0.76;
  }

  .benefit-scene-card::before,
  .benefit-scene-card::after {
    content: "";
    position: absolute;
    left: 16%;
    right: 16%;
    height: 7px;
    border-radius: 999px;
    background: rgba(116, 78, 48, 0.18);
  }

  .benefit-scene-card::before {
    top: 18%;
    box-shadow: 0 20px 0 rgba(116, 78, 48, 0.12), 0 40px 0 rgba(116, 78, 48, 0.12);
  }

  .benefit-scene-card::after {
    top: 66%;
    right: 34%;
  }

  .benefit-scene-chip {
    position: absolute;
    border-radius: 999px;
    background: rgba(226, 178, 97, 0.9);
    box-shadow: 0 10px 24px rgba(161, 106, 46, 0.24);
  }

  .benefit-scene-chip-a {
    width: 54px;
    height: 54px;
    right: 14%;
    top: 16%;
  }

  .benefit-scene-chip-b {
    width: 74px;
    height: 10px;
    left: 18%;
    bottom: 18%;
    background: rgba(255, 237, 221, 0.78);
    box-shadow: none;
  }

  .benefit-scene-chip-c {
    display: none;
  }

  .benefit-scene-legal .benefit-scene-card-a {
    inset: 14% 20% 16% 18%;
    transform: rotate(-6deg);
  }

  .benefit-scene-legal .benefit-scene-card-b {
    inset: 34% 12% 16% 42%;
    transform: rotate(6deg);
  }

  .benefit-scene-legal .benefit-scene-chip-a {
    width: 58px;
    height: 58px;
    right: 16%;
    bottom: 20%;
    top: auto;
    border-radius: 50%;
    display: grid;
    place-items: center;
    color: #fff7ef;
    font-weight: 700;
  }

  .benefit-scene-legal .benefit-scene-chip-a::before {
    content: "OK";
    font-size: 0.76rem;
  }

  .benefit-scene-evidence .benefit-scene-card-a,
  .benefit-scene-evidence .benefit-scene-card-b,
  .benefit-scene-evidence .benefit-scene-card-c {
    inset: 18% 18% 16% 18%;
  }

  .benefit-scene-evidence .benefit-scene-card-a { transform: rotate(-9deg) translate(-14px, 16px); }
  .benefit-scene-evidence .benefit-scene-card-b { transform: rotate(7deg) translate(18px, 8px); }
  .benefit-scene-evidence .benefit-scene-card-c { transform: rotate(-1deg); }

  .benefit-scene-dashboard .benefit-scene-card-a {
    inset: 18% 14% 18% 14%;
    background: linear-gradient(180deg, rgba(11, 18, 27, 0.96), rgba(9, 13, 21, 0.98));
  }

  .benefit-scene-dashboard .benefit-scene-card-a::before,
  .benefit-scene-dashboard .benefit-scene-card-a::after {
    left: 12%;
    right: 42%;
    background: rgba(58, 233, 209, 0.36);
    box-shadow:
      0 24px 0 rgba(68, 164, 255, 0.24),
      62px 0 0 rgba(117, 92, 255, 0.18),
      62px 24px 0 rgba(85, 255, 172, 0.16);
  }

  .benefit-scene-dashboard .benefit-scene-card-b {
    inset: 58% 18% 16% 18%;
    background: linear-gradient(180deg, rgba(18, 29, 44, 0.84), rgba(9, 14, 24, 0.9));
  }

  .benefit-scene-dashboard .benefit-scene-card-b::before,
  .benefit-scene-dashboard .benefit-scene-card-b::after {
    display: none;
  }

  .benefit-scene-dashboard .benefit-scene-card-c {
    width: 54px;
    height: 54px;
    inset: 14% 12% auto auto;
    border-radius: 50%;
    background: conic-gradient(from 90deg, rgba(226, 178, 97, 0.94), rgba(103, 63, 209, 0.92), rgba(41, 195, 162, 0.92), rgba(226, 178, 97, 0.94));
  }

  .benefit-scene-dashboard .benefit-scene-card-c::before,
  .benefit-scene-dashboard .benefit-scene-card-c::after {
    display: none;
  }

  .benefit-scene-dashboard .benefit-scene-chip-a,
  .benefit-scene-dashboard .benefit-scene-chip-b {
    display: none;
  }

  .benefit-scene-dashboard .benefit-scene-glow {
    inset: auto auto 16% 18%;
    width: 42%;
    height: 32%;
  }

  .benefit-scene-alerts .benefit-scene-card-a {
    inset: 18% 16% 26% 16%;
    background: linear-gradient(180deg, rgba(255, 248, 242, 0.98), rgba(241, 230, 220, 0.96));
  }

  .benefit-scene-alerts .benefit-scene-card-b {
    inset: 58% 22% 12% 22%;
    background: linear-gradient(180deg, rgba(96, 28, 40, 0.9), rgba(35, 12, 18, 0.98));
  }

  .benefit-scene-alerts .benefit-scene-card-c {
    width: 56px;
    height: 56px;
    inset: 16% 12% auto auto;
    border-radius: 18px;
    background: linear-gradient(180deg, rgba(226, 178, 97, 0.98), rgba(181, 101, 37, 0.96));
  }

  .benefit-scene-alerts .benefit-scene-card-c::before,
  .benefit-scene-alerts .benefit-scene-card-c::after {
    display: none;
  }

  .benefit-scene-alerts .benefit-scene-chip-a {
    width: 16px;
    height: 16px;
    right: 16%;
    top: 22%;
    background: #ffcf76;
  }

  .benefit-scene-alerts .benefit-scene-chip-b {
    width: 96px;
    left: 24%;
    bottom: 22%;
  }

  .benefit-scene-alerts .benefit-scene-chip-c {
    display: none;
  }

  .benefit-scene-reports .benefit-scene-card-a {
    inset: 14% 16% 14% 18%;
    transform: rotate(-6deg);
  }

  .benefit-scene-reports .benefit-scene-card-b {
    inset: 34% 20% 14% 24%;
    background: linear-gradient(180deg, rgba(48, 16, 24, 0.88), rgba(24, 8, 14, 0.96));
  }

  .benefit-scene-reports .benefit-scene-card-b::before,
  .benefit-scene-reports .benefit-scene-card-b::after {
    right: 22%;
    background: rgba(226, 178, 97, 0.42);
    box-shadow: 0 22px 0 rgba(255, 248, 240, 0.12), 0 44px 0 rgba(255, 248, 240, 0.12);
  }

  .benefit-scene-reports .benefit-scene-card-c {
    width: 82px;
    height: 58px;
    inset: auto 14% 16% auto;
    background: linear-gradient(180deg, rgba(255, 248, 242, 0.98), rgba(240, 228, 216, 0.94));
  }

  .benefit-scene-reports .benefit-scene-card-c::before {
    left: 16%;
    right: 16%;
    top: auto;
    bottom: 18%;
    height: 18px;
    background: linear-gradient(90deg, rgba(226, 178, 97, 0.94) 0 24%, rgba(116, 78, 48, 0.18) 24% 40%, rgba(179, 98, 37, 0.9) 40% 62%, rgba(116, 78, 48, 0.18) 62% 78%, rgba(94, 63, 205, 0.76) 78% 100%);
    box-shadow: none;
  }

  .benefit-scene-reports .benefit-scene-card-c::after {
    display: none;
  }

  .benefit-scene-reports .benefit-scene-chip-a,
  .benefit-scene-reports .benefit-scene-chip-b {
    display: none;
  }

  .benefit-visual-legal,
  .benefit-visual-evidence,
  .benefit-visual-dashboard,
  .benefit-visual-team,
  .benefit-visual-alert,
  .benefit-visual-report {
    display: grid;
    place-items: center;
    min-height: 100%;
  }

  .benefit-board {
    position: relative;
    width: 76%;
    aspect-ratio: 0.82;
    border-radius: 18px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(244, 235, 225, 0.98));
    box-shadow: 0 16px 30px rgba(77, 46, 29, 0.1);
  }

  .benefit-board::before {
    content: "";
    position: absolute;
    top: 12px;
    left: 50%;
    width: 44%;
    height: 10px;
    border-radius: 999px;
    background: rgba(125, 85, 45, 0.18);
    transform: translateX(-50%);
  }

  .benefit-board span {
    position: absolute;
    left: 18%;
    right: 18%;
    height: 8px;
    border-radius: 999px;
    background: rgba(125, 85, 45, 0.2);
  }

  .benefit-board span:nth-child(1) { top: 34%; }
  .benefit-board span:nth-child(2) { top: 50%; }
  .benefit-board span:nth-child(3) { top: 66%; }

  .benefit-stamp {
    position: absolute;
    right: 22%;
    bottom: 18%;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, rgba(226, 183, 105, 0.94), rgba(170, 104, 35, 0.96));
    color: #fff7ef;
    display: grid;
    place-items: center;
    font-size: 0.82rem;
    font-weight: 700;
    box-shadow: 0 12px 26px rgba(148, 90, 36, 0.26);
  }

  .benefit-paper-stack {
    position: relative;
    width: 78%;
    height: 76%;
  }

  .benefit-paper-stack span {
    position: absolute;
    inset: 0;
    border-radius: 18px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(244, 236, 229, 0.96));
    box-shadow: 0 14px 30px rgba(77, 46, 29, 0.08);
  }

  .benefit-paper-stack span:nth-child(1) { transform: rotate(-8deg) translate(-12px, 12px); }
  .benefit-paper-stack span:nth-child(2) { transform: rotate(5deg) translate(12px, 4px); }
  .benefit-paper-stack span:nth-child(3) { transform: translateY(-4px); }

  .benefit-paper-stack span::before {
    content: "";
    position: absolute;
    left: 18%;
    right: 18%;
    top: 22%;
    height: 8px;
    border-radius: 999px;
    background: rgba(125, 85, 45, 0.2);
    box-shadow:
      0 22px 0 rgba(125, 85, 45, 0.14),
      0 44px 0 rgba(125, 85, 45, 0.14),
      0 66px 0 rgba(125, 85, 45, 0.14);
  }

  .benefit-visual-dashboard {
    grid-template-columns: repeat(3, 26px);
    align-content: end;
    justify-content: center;
    gap: 10px;
    padding: 20px;
  }

  .benefit-chart-bar {
    align-self: end;
    border-radius: 14px 14px 8px 8px;
    background: linear-gradient(180deg, rgba(213, 161, 79, 0.92), rgba(147, 82, 33, 0.94));
    box-shadow: 0 12px 24px rgba(138, 84, 35, 0.2);
  }

  .benefit-chart-bar-1 { height: 62px; }
  .benefit-chart-bar-2 { height: 92px; }
  .benefit-chart-bar-3 { height: 132px; }

  .benefit-chart-ring {
    position: absolute;
    top: 18px;
    right: 18px;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    border: 10px solid rgba(213, 161, 79, 0.24);
    border-top-color: rgba(171, 96, 36, 0.9);
    border-right-color: rgba(213, 161, 79, 0.9);
  }

  .benefit-avatar-row {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .benefit-avatar-row span {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: linear-gradient(180deg, rgba(231, 212, 198, 0.98), rgba(201, 164, 133, 0.96));
    box-shadow: 0 12px 24px rgba(77, 46, 29, 0.12);
  }

  .benefit-avatar-row span:nth-child(2) {
    width: 58px;
    height: 58px;
    background: linear-gradient(180deg, rgba(227, 184, 109, 0.98), rgba(176, 99, 38, 0.96));
  }

  .benefit-connection-line {
    width: 72%;
    height: 8px;
    border-radius: 999px;
    background: linear-gradient(90deg, rgba(125, 85, 45, 0.14), rgba(213, 161, 79, 0.48), rgba(125, 85, 45, 0.14));
    margin-top: 18px;
  }

  .benefit-alert-bell {
    position: relative;
    width: 78px;
    height: 84px;
    border-radius: 44px 44px 18px 18px;
    background: linear-gradient(180deg, rgba(213, 161, 79, 0.94), rgba(165, 93, 35, 0.96));
    box-shadow: 0 18px 32px rgba(141, 86, 35, 0.2);
  }

  .benefit-alert-bell::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -10px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: rgba(125, 85, 45, 0.86);
    transform: translateX(-50%);
  }

  .benefit-alert-bell::after {
    content: "";
    position: absolute;
    left: 50%;
    top: -14px;
    width: 24px;
    height: 18px;
    border-radius: 999px 999px 0 0;
    border: 4px solid rgba(125, 85, 45, 0.72);
    border-bottom: 0;
    transform: translateX(-50%);
  }

  .benefit-alert-lines {
    display: grid;
    gap: 10px;
    margin-top: 18px;
    width: 72%;
  }

  .benefit-alert-lines span {
    height: 8px;
    border-radius: 999px;
    background: rgba(125, 85, 45, 0.18);
  }

  .benefit-report-sheet {
    position: relative;
    width: 76%;
    aspect-ratio: 0.8;
    border-radius: 18px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.99), rgba(245, 236, 227, 0.96));
    box-shadow: 0 16px 30px rgba(77, 46, 29, 0.1);
  }

  .benefit-report-sheet span {
    position: absolute;
    left: 18%;
    right: 18%;
    height: 8px;
    border-radius: 999px;
    background: rgba(125, 85, 45, 0.18);
  }

  .benefit-report-sheet span:nth-child(1) { top: 20%; }
  .benefit-report-sheet span:nth-child(2) { top: 34%; }
  .benefit-report-sheet span:nth-child(3) { top: 48%; }

  .benefit-report-chart {
    position: absolute;
    left: 24%;
    right: 24%;
    bottom: 18%;
    display: flex;
    align-items: end;
    gap: 8px;
  }

  .benefit-report-chart span {
    flex: 1;
    border-radius: 8px 8px 4px 4px;
    background: linear-gradient(180deg, rgba(213, 161, 79, 0.95), rgba(169, 96, 37, 0.96));
  }

  .benefit-report-chart span:nth-child(1) { height: 24px; }
  .benefit-report-chart span:nth-child(2) { height: 42px; }
  .benefit-report-chart span:nth-child(3) { height: 58px; }

  .sectors-section {
    padding: 70px 0 78px;
  }

  .sectors-layout {
    display: grid;
    grid-template-columns: minmax(0, 1.16fr) minmax(0, 0.84fr);
    gap: 28px;
    align-items: start;
  }

  .sectors-header {
    order: 2;
    max-width: 100%;
    margin-bottom: 0;
    position: sticky;
    top: 18px;
  }

  .sectors-header .title-lg {
    max-width: 11ch;
    font-size: clamp(2.2rem, 4vw, 3.7rem);
    line-height: 0.98;
  }

  .sectors-header .lead {
    max-width: 34ch;
  }

  .sector-list {
    order: 1;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
  }

  .sector-row {
    position: relative;
    min-height: 152px;
    padding: 18px 18px 18px 74px;
    border-radius: 24px;
    border: 1px solid rgba(214, 163, 87, 0.14);
    background:
      linear-gradient(180deg, rgba(88, 17, 33, 0.56), rgba(42, 10, 18, 0.76)),
      radial-gradient(circle at top right, rgba(213, 161, 79, 0.16), transparent 34%);
    box-shadow:
      0 18px 36px rgba(0, 0, 0, 0.16),
      inset 0 1px 0 rgba(255, 255, 255, 0.04);
    transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
  }

  .sector-row:hover {
    transform: translateY(-4px);
    border-color: rgba(214, 163, 87, 0.24);
    box-shadow:
      0 24px 46px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.05);
  }

  .sector-number {
    position: absolute;
    left: 18px;
    top: 18px;
    width: 40px;
    height: 40px;
    border-radius: 14px;
    display: grid;
    place-items: center;
    color: var(--primary);
    font-size: 0.92rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    border: 1px solid rgba(214, 163, 87, 0.18);
    background: rgba(255, 255, 255, 0.03);
  }

  .sector-title {
    font-size: 1.08rem;
    line-height: 1.22;
  }

  .sector-description {
    margin-top: 10px;
    color: var(--muted);
    line-height: 1.62;
    font-size: 0.96rem;
    max-width: 28ch;
  }

  .card-number {
    width: 52px;
    height: 52px;
    border-radius: 18px;
    display: grid;
    place-items: center;
    font-weight: 800;
    background: linear-gradient(135deg, rgba(213, 161, 79, 0.28), rgba(122, 22, 42, 0.18));
    border: 1px solid var(--line);
  }

  .card-title {
    font-size: 1.14rem;
    line-height: 1.3;
  }

  .card-description {
    color: var(--muted);
    line-height: 1.75;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: 22px;
  }

  .contact-section {
    background: #fbf8f4;
    color: #241715;
    padding: 58px 0 60px;
  }

  .contact-section .kicker {
    color: #8f5b26;
  }

  .contact-section .title-lg {
    color: #241715;
  }

  .contact-section .lead {
    color: #5b4b45;
  }

  .contact-section .section-header {
    margin-bottom: 24px;
    max-width: 760px;
  }

  .contact-header {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .contact-section .title-lg {
    font-size: clamp(1.9rem, 2.8vw, 2.7rem);
    max-width: 14ch;
  }

  .contact-header .title-lg {
    margin-left: auto;
    margin-right: auto;
    line-height: 1.06;
    text-wrap: balance;
  }

  .contact-card,
  .contact-form {
    padding: 22px;
  }

  .contact-section .contact-card,
  .contact-section .contact-form {
    background:
      radial-gradient(circle at top right, rgba(213, 161, 79, 0.08), transparent 28%),
      linear-gradient(180deg, rgba(57, 15, 24, 0.96), rgba(32, 8, 14, 0.98));
    border-color: rgba(214, 163, 87, 0.14);
    box-shadow:
      0 12px 24px rgba(22, 6, 10, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.03);
  }

  .contact-section .badge {
    background: rgba(95, 30, 45, 0.42);
    border-color: var(--line);
    color: #f2d6ba;
  }

  .contact-section .contact-card .lead {
    color: var(--muted);
  }

  .contact-list {
    display: grid;
    gap: 12px;
    margin-top: 20px;
  }

  .contact-item {
    padding: 14px 16px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.04);
  }

  .contact-section .contact-item {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.06);
  }

  .contact-item span {
    display: block;
    color: var(--muted);
    font-size: 0.9rem;
    margin-bottom: 6px;
  }

  .contact-section .contact-item span {
    color: var(--muted);
  }

  .contact-section .contact-item strong {
    color: var(--text);
  }

  .form-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }

  .field,
  .field-full {
    display: grid;
    gap: 8px;
  }

  .field-full {
    grid-column: 1 / -1;
  }

  label {
    color: #f0dfd4;
    font-size: 0.92rem;
  }

  .contact-section label {
    color: #f0dfd4;
  }

  input,
  textarea {
    width: 100%;
    border: 1px solid var(--line);
    background: rgba(48, 13, 21, 0.78);
    color: var(--text);
    border-radius: 16px;
    padding: 14px 16px;
    font: inherit;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .contact-section input,
  .contact-section textarea {
    border-color: rgba(214, 163, 87, 0.12);
    background: rgba(39, 9, 16, 0.92);
    color: var(--text);
  }

  .contact-section input::placeholder,
  .contact-section textarea::placeholder {
    color: rgba(242, 223, 212, 0.45);
  }

  input:focus,
  textarea:focus {
    border-color: var(--line-strong);
    box-shadow: 0 0 0 4px rgba(213, 161, 79, 0.12);
  }

  textarea {
    resize: vertical;
    min-height: 118px;
  }

  .form-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 18px;
  }

  .footer {
    padding: 22px 0 42px;
    color: var(--muted);
    font-size: 0.92rem;
  }

  .footer-light {
    background: #fbf8f4;
    color: #7a675f;
  }

  .footer-row {
    display: flex;
    justify-content: space-between;
    gap: 18px;
    padding-top: 18px;
    border-top: 1px solid var(--line);
  }

  .footer-light .footer-row {
    border-top-color: rgba(124, 91, 66, 0.12);
  }

  @media (max-width: 1100px) {
    .hero-grid,
    .contact-grid,
    .sector-list {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .method-classic-showcase {
      grid-template-columns: 1fr;
    }

    .method-classic-nav {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .method-classic-stage {
      grid-template-columns: minmax(0, 1fr) minmax(260px, 0.88fr);
    }

    .method-break-banner {
      grid-template-columns: 1fr;
    }

    .method-break-copy {
      max-width: 100%;
    }

    .method-showcase {
      max-width: 100%;
    }

    .method-showcase-shell {
      grid-template-columns: 1fr;
    }

    .method-showcase-orbit {
      min-height: 460px;
    }

    .title-xl {
      font-size: clamp(2.2rem, 4.8vw, 4rem);
      max-width: 10ch;
    }

    .lead {
      max-width: 52ch;
    }

    .hero-art {
      min-height: clamp(320px, 40vw, 390px);
    }

    .method-layout {
      grid-template-columns: 1fr;
      gap: 18px;
    }

    .method-intro {
      order: 1;
    }

    .method-showcase {
      order: 2;
    }

    .method-header .title-lg,
    .method-header .lead {
      max-width: 100%;
    }

    .benefits-top {
      grid-template-columns: 1fr;
      gap: 22px;
    }

    .sectors-layout {
      grid-template-columns: 1fr;
      gap: 22px;
    }

    .sectors-header {
      order: 1;
      position: static;
    }

    .sector-list {
      order: 2;
    }

    .sectors-header .title-lg,
    .sectors-header .lead {
      max-width: 100%;
    }

    .showcase-stage {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 18px;
    }

    .showcase-panel {
      min-height: 340px;
    }
  }

  @media (max-width: 820px) {
    .section {
      padding: 72px 0;
    }

    .hero {
      min-height: auto;
      padding: 14px 0 18px;
    }

    .nav {
      flex-direction: column;
      align-items: flex-start;
    }

    .nav-right {
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
      gap: 14px;
    }

    .nav-links {
      flex-wrap: wrap;
    }

    .hero-grid,
    .sector-list,
    .contact-grid,
    .form-grid {
      grid-template-columns: 1fr;
    }

    .hero-art,
    .contact-card,
    .contact-form {
      padding: 24px;
    }

    .hero-grid {
      padding-top: 0;
    }

    .hero-art {
      min-height: 350px;
    }

    .method-section {
      padding: 54px 0 60px;
    }

    .method-classic-section {
      padding: 54px 0 18px;
    }

    .method-classic-showcase {
      padding: 22px;
    }

    .method-classic-nav {
      grid-template-columns: 1fr;
    }

    .method-classic-stage {
      grid-template-columns: 1fr;
      grid-template-areas:
        "copy"
        "visual"
        "footer";
    }

    .method-classic-step strong,
    .method-classic-description {
      max-width: 100%;
    }

    .method-classic-visual {
      min-height: 320px;
    }

    .method-classic-footer {
      flex-direction: column;
      align-items: flex-start;
    }

    .method-break-section {
      padding: 2px 0 14px;
    }

    .method-break-banner {
      min-height: 0;
      padding: 24px 20px;
    }

    .method-break-copy .title-lg,
    .method-break-copy .lead {
      max-width: 100%;
    }

    .method-break-visual {
      min-height: 280px;
    }

    .method-showcase {
      padding: 24px 20px;
    }

    .method-showcase-footer {
      flex-direction: column;
      align-items: flex-start;
    }

    .method-showcase-orbit {
      min-height: 420px;
    }

    .method-showcase-photo {
      width: min(100%, 240px);
    }

    .method-showcase-tab-dot {
      width: 50px;
      height: 50px;
    }

    .method-showcase-tab-copy strong {
      font-size: 0.64rem;
    }

    .method-showcase-tab-copy small {
      font-size: 0.62rem;
    }

    .showcase-stage {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
    }

    .sectors-section {
      padding: 62px 0 70px;
    }

    .sector-row {
      min-height: 0;
    }

    .title-xl {
      max-width: 100%;
    }

    .footer-row {
      flex-direction: column;
    }
  }

  @media (max-width: 560px) {
    .container {
      width: min(calc(100% - 20px), var(--container));
    }

    .section {
      padding: 60px 0;
    }

    .hero {
      padding-bottom: 58px;
    }

    .nav {
      gap: 16px;
    }

    .benefits-section {
      padding: 52px 0 60px;
    }

    .method-section {
      padding: 46px 0 52px;
    }

    .method-classic-section {
      padding: 46px 0 12px;
    }

    .method-break-section {
      padding: 0 0 10px;
    }

    .benefits-header .title-lg {
      max-width: 100%;
    }

    .method-header {
      text-align: center;
    }

    .method-header .title-lg,
    .method-header .lead {
      margin-left: auto;
      margin-right: auto;
    }

    .showcase-stage {
      grid-template-columns: 1fr;
      gap: 16px;
    }

    .benefits-header {
      text-align: center;
    }

    .sectors-header {
      text-align: center;
    }

    .sectors-header .title-lg,
    .sectors-header .lead {
      margin-left: auto;
      margin-right: auto;
    }

    .benefits-header .lead,
    .benefits-header .title-lg {
      margin-left: auto;
      margin-right: auto;
    }

    .showcase-panel {
      min-height: 320px;
    }

    .sector-row {
      padding: 16px 16px 16px 66px;
      border-radius: 20px;
    }

    .sector-title {
      font-size: 1rem;
    }

    .sector-description {
      font-size: 0.9rem;
      line-height: 1.52;
    }

    .showcase-copy {
      padding: 18px 16px 16px;
    }

    .showcase-title {
      font-size: 1.02rem;
    }

    .showcase-description {
      font-size: 0.82rem;
      line-height: 1.45;
    }

    .nav-right,
    .nav-actions {
      width: 100%;
    }

    .nav-actions {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .nav-button {
      width: 100%;
    }

    .method-showcase {
      padding: 18px;
    }

    .method-break-banner {
      padding: 20px 18px;
      border-radius: 0;
    }

    .method-break-copy .title-lg {
      font-size: clamp(2rem, 10vw, 3rem);
      max-width: 100%;
    }

    .method-break-stats {
      flex-direction: column;
      gap: 14px;
    }

    .method-break-stat + .method-break-stat {
      padding-left: 0;
      border-left: 0;
      padding-top: 14px;
      border-top: 1px solid rgba(255, 226, 199, 0.2);
    }

    .method-break-actions {
      display: grid;
      grid-template-columns: 1fr;
    }

    .method-break-button {
      width: 100%;
    }

    .method-break-visual {
      min-height: 240px;
    }

    .method-break-visual::before {
      width: 220px;
      height: 220px;
    }

    .method-break-card {
      padding: 12px 14px;
      max-width: 150px;
    }

    .method-break-badge {
      width: 64px;
      height: 64px;
      font-size: 0.72rem;
    }

    .method-classic-showcase {
      padding: 18px;
    }

    .method-classic-tab {
      grid-template-columns: 42px minmax(0, 1fr);
      padding: 12px;
    }

    .method-classic-step strong {
      font-size: clamp(1.8rem, 9vw, 2.45rem);
    }

    .method-classic-description {
      font-size: 0.94rem;
      line-height: 1.62;
    }

    .method-classic-point {
      font-size: 0.82rem;
      padding: 9px 12px;
    }

    .method-classic-visual {
      min-height: 280px;
    }

    .method-classic-screen {
      inset: 18px 18px 70px 18px;
      padding: 18px;
    }

    .method-classic-screen strong {
      font-size: 1.24rem;
    }

    .method-classic-footer {
      padding: 14px 16px;
    }

    .method-classic-progress span {
      width: 28px;
    }

    .method-classic-progress-active {
      width: 48px !important;
    }

    .method-showcase-tab {
      gap: 8px;
    }

    .method-showcase-step strong {
      font-size: clamp(1.8rem, 9vw, 2.45rem);
    }

    .method-showcase-description {
      font-size: 0.94rem;
      line-height: 1.62;
    }

    .method-showcase-point {
      font-size: 0.82rem;
      padding: 9px 12px;
    }

    .method-showcase-shell {
      gap: 22px;
    }

    .method-showcase-orbit {
      min-height: 360px;
    }

    .method-showcase-ring-a {
      width: min(100%, 340px);
    }

    .method-showcase-orbit::before {
      width: min(100%, 286px);
    }

    .method-showcase-orbit::after,
    .method-showcase-ring-b {
      width: min(100%, 208px);
    }

    .method-showcase-photo {
      width: min(100%, 190px);
    }

    .method-showcase-tab-dot {
      width: 42px;
      height: 42px;
    }

    .method-showcase-tab-copy strong,
    .method-showcase-tab-copy small {
      display: none;
    }

    .method-showcase-footer {
      padding: 14px 16px;
    }

    .method-showcase-progress span {
      width: 28px;
    }

    .method-showcase-progress-active {
      width: 48px !important;
    }

    .brand {
      gap: 10px;
      font-size: 0.95rem;
    }

    .brand-mark {
      width: 42px;
      height: 42px;
    }

    .title-xl {
      font-size: clamp(2.2rem, 12vw, 3.55rem);
      line-height: 0.95;
      max-width: 9ch;
    }

    .lead {
      font-size: 0.96rem;
      line-height: 1.68;
    }

    .hero-note {
      font-size: 0.9rem;
    }

    .button {
      width: 100%;
    }

    .hero-art {
      min-height: 330px;
      padding: 10px 0 0;
    }

    .hero-art::before {
      inset: 4% 0 18%;
      border-radius: 26px;
    }

    .hero-monitor-frame {
      padding: 10px;
      border-radius: 20px;
    }

    .hero-screen {
      grid-template-columns: 62px minmax(0, 1fr);
      min-height: 214px;
    }

    .hero-sidebar {
      padding: 12px 10px;
    }

    .hero-sidebar-badge {
      height: 38px;
      margin-bottom: 14px;
      font-size: 0.92rem;
    }

    .hero-screen-main {
      padding: 14px;
      gap: 12px;
    }

    .hero-system-title {
      font-size: 0.88rem;
    }

    .hero-system-preview {
      min-height: 112px;
    }

    .hero-system-panels {
      grid-template-columns: 1fr;
    }

    .hero-system-card span {
      font-size: 0.84rem;
    }

    .showcase-panel {
      width: 100%;
      padding: 0;
    }
  }

  @media (max-height: 860px) and (min-width: 821px) {
    .hero {
      padding: 12px 0;
    }

    .nav {
      padding-bottom: 12px;
    }

    .title-xl {
      font-size: clamp(2.1rem, 4.2vw, 3.65rem);
    }

    .lead {
      margin-top: 14px;
      font-size: 0.96rem;
      line-height: 1.6;
      max-width: 50ch;
    }

    .cta-row {
      margin-top: 16px;
    }

    .hero-note {
      margin-top: 14px;
      font-size: 0.9rem;
    }

    .hero-art {
      min-height: clamp(280px, 38vh, 340px);
    }

    .hero-monitor {
      width: min(100%, 390px);
    }

    .hero-screen {
      min-height: 228px;
    }

    .hero-system-preview {
      min-height: 108px;
    }

    .ticker {
      display: none;
    }
  }
`;function Dp(){const[e,t]=ti.useState(0),n=[...Hl,...Hl],r=xn[e],i=$l[e],o=["top","left","right","bottom"];return u.jsxs("main",{className:"landing-shell",children:[u.jsx("style",{children:Op}),u.jsxs("section",{className:"hero",children:[u.jsxs("div",{className:"container",children:[u.jsxs("nav",{className:"nav","aria-label":"Principal",children:[u.jsxs("a",{className:"brand",href:"#inicio",children:[u.jsx("span",{className:"brand-mark",children:u.jsx("img",{alt:"Logo Ascensional",src:Wl})}),u.jsx("span",{children:"Ascensional Consultoria"})]}),u.jsxs("div",{className:"nav-right",children:[u.jsxs("div",{className:"nav-links",children:[u.jsx("a",{href:"#metodo",children:"Método"}),u.jsx("a",{href:"#beneficios",children:"Benefícios"}),u.jsx("a",{href:"#atuacao",children:"Atuação"}),u.jsx("a",{href:"#contato",children:"Contato"})]}),u.jsxs("div",{className:"nav-actions",children:[u.jsx("a",{className:"nav-button nav-button-secondary",href:"#contato",children:"Entrar"}),u.jsx("a",{className:"nav-button nav-button-primary",href:"#contato",children:"Cadastrar"})]})]})]}),u.jsxs("div",{className:"hero-grid",id:"inicio",children:[u.jsxs("div",{className:"hero-copy",children:[u.jsx("p",{className:"kicker",children:"Tecnologia + consultoria especializada"}),u.jsxs("h1",{className:"title-xl",children:["Simplifique sua ",u.jsx("strong",{children:"gestão de requisitos legais"}),"."]}),u.jsx("p",{className:"lead",children:"Plataforma completa para gestão de conformidade legal em Meio Ambiente, Saúde, Segurança do Trabalho e muito mais. Controle suas obrigações com dashboards intuitivos, responsáveis definidos e relatórios detalhados para auditoria e tomada de decisão."}),u.jsxs("div",{className:"cta-row",children:[u.jsx("a",{className:"button button-primary",href:"#contato",children:"Começar Agora"}),u.jsx("a",{className:"button button-secondary",href:"https://wa.me/5511999999999",children:"Fale Conosco:"})]})]}),u.jsx("aside",{className:"hero-art","aria-label":"Mockup da tela do sistema",children:u.jsxs("div",{className:"hero-monitor",children:[u.jsx("div",{className:"hero-monitor-frame",children:u.jsxs("div",{className:"hero-monitor-bezel",children:[u.jsx("div",{className:"hero-monitor-topbar",children:u.jsxs("div",{className:"hero-monitor-dots",children:[u.jsx("span",{}),u.jsx("span",{}),u.jsx("span",{})]})}),u.jsxs("div",{className:"hero-screen",children:[u.jsxs("aside",{className:"hero-sidebar",children:[u.jsx("div",{className:"hero-sidebar-badge",children:u.jsx("img",{alt:"Logo Ascensional",src:Wl})}),u.jsx("div",{className:"hero-sidebar-item"}),u.jsx("div",{className:"hero-sidebar-item"}),u.jsx("div",{className:"hero-sidebar-item"}),u.jsx("div",{className:"hero-sidebar-item"})]}),u.jsxs("div",{className:"hero-screen-main",children:[u.jsx("div",{className:"hero-system-bar",children:u.jsx("strong",{className:"hero-system-title",children:"Gestão de Requisitos Legais"})}),u.jsx("div",{className:"hero-system-preview",children:null}),u.jsxs("div",{className:"hero-system-panels",children:[u.jsxs("div",{className:"hero-system-card",children:[u.jsx("strong",{children:"Painel Executivo"}),u.jsx("span",{children:"Espaço ideal para inserir a imagem do sistema com gráficos, indicadores e acompanhamento da conformidade."})]}),u.jsxs("div",{className:"hero-system-card",children:[u.jsx("strong",{children:"Recursos"}),u.jsxs("div",{className:"hero-system-lines",children:[u.jsx("span",{}),u.jsx("span",{}),u.jsx("span",{})]})]})]})]})]})]})}),u.jsx("div",{className:"hero-monitor-stand"}),u.jsx("div",{className:"hero-monitor-base"})]})})]})]}),u.jsx("div",{className:"ticker","aria-hidden":"true",children:u.jsx("div",{className:"ticker-track",children:n.map((a,l)=>u.jsx("span",{className:"ticker-item",children:a},`${a}-${l}`))})})]}),u.jsx("section",{className:"section method-classic-section",id:"metodo",children:u.jsxs("div",{className:"container",children:[u.jsx("div",{className:"method-transition","aria-hidden":"true"}),u.jsxs("div",{className:"method-classic-showcase",children:[u.jsx("div",{className:"method-classic-nav","aria-label":"Etapas do metodo em cards",children:xn.map((a,l)=>u.jsx("button",{className:`method-classic-tab ${l===e?"method-classic-tab-active":""}`,onClick:()=>t(l),type:"button",children:u.jsxs("span",{className:"method-classic-tab-copy",children:[u.jsx("strong",{children:a.title}),u.jsx("small",{children:$l[l][0]})]})},`classic-${a.number}`))}),u.jsxs("div",{className:`method-classic-stage method-classic-stage-${r.number}`,children:[u.jsxs("div",{className:"method-classic-copy",children:[u.jsx("div",{className:"method-classic-step",children:u.jsx("strong",{children:r.title})}),u.jsx("p",{className:"method-classic-description",children:r.description}),u.jsx("div",{className:"method-classic-points",children:i.map(a=>u.jsx("span",{className:"method-classic-point",children:a},`classic-point-${a}`))})]}),u.jsxs("div",{className:"method-classic-visual","aria-hidden":"true",children:[u.jsxs("div",{className:"method-classic-screen",children:[u.jsx("span",{className:"method-classic-screen-badge",children:"Metodo Ascensional"}),u.jsx("strong",{children:r.title}),u.jsxs("div",{className:"method-classic-lines",children:[u.jsx("span",{}),u.jsx("span",{}),u.jsx("span",{})]})]}),u.jsx("span",{className:"method-classic-card method-classic-card-a"}),u.jsx("span",{className:"method-classic-card method-classic-card-b"}),u.jsx("span",{className:"method-classic-card method-classic-card-c"}),u.jsx("span",{className:"method-classic-orb"})]}),u.jsxs("div",{className:"method-classic-footer",children:[u.jsx("p",{children:"Selecione uma etapa na lateral para atualizar o painel."}),u.jsx("div",{className:"method-classic-progress","aria-hidden":"true",children:xn.map((a,l)=>u.jsx("span",{className:l===e?"method-classic-progress-active":""},`classic-progress-${a.number}`))})]})]})]})]})}),u.jsx("section",{className:"section method-break-section",id:"metodo-conexao",children:u.jsx("div",{className:"method-break-fullbleed",children:u.jsxs("div",{className:"method-break-banner",children:[u.jsxs("div",{className:"method-break-copy",children:[u.jsx("p",{className:"kicker",children:"Conformidade com resultado"}),u.jsx("h2",{className:"title-lg",children:"A estrutura certa para reduzir passivo e ganhar clareza operacional."}),u.jsx("p",{className:"lead",children:"Chega de controles soltos. A Ascensional organiza requisitos legais, responsáveis, evidências e planos de ação em uma operação mais previsível, auditável e segura."}),u.jsxs("div",{className:"method-break-actions",children:[u.jsx("a",{className:"method-break-button method-break-button-primary",href:"#contato",children:"Quero estruturar minha operacao"}),u.jsx("a",{className:"method-break-button method-break-button-secondary",href:"#metodo-destaque",children:"Ver painel visual"})]}),u.jsxs("div",{className:"method-break-note",children:[u.jsx("span",{children:"Veja a atuação da"}),u.jsx("strong",{children:"Ascensional Consultoria"})]})]}),u.jsx("div",{className:"method-break-visual","aria-hidden":"true",children:u.jsxs("div",{className:"method-break-figure",children:[u.jsx("span",{className:"method-break-shield"}),u.jsxs("div",{className:"method-break-card method-break-card-a",children:[u.jsx("strong",{children:"Requisitos"}),u.jsx("span",{children:"Controle central de leis, normas, licencas e condicionantes."})]}),u.jsxs("div",{className:"method-break-card method-break-card-b",children:[u.jsx("strong",{children:"Acao"}),u.jsx("span",{children:"Planos, pendencias e evidencias organizados por responsavel."})]}),u.jsx("span",{className:"method-break-badge"})]})})]})})}),u.jsx("section",{className:"section method-section",id:"metodo-destaque",children:u.jsxs("div",{className:"container",children:[u.jsx("div",{className:"method-transition","aria-hidden":"true"}),u.jsx("div",{className:"method-layout",children:u.jsx("div",{className:"method-showcase",children:u.jsxs("div",{className:"method-showcase-shell",children:[u.jsxs("div",{className:"method-showcase-orbit","aria-label":"Etapas do metodo",children:[u.jsx("span",{className:"method-showcase-ring method-showcase-ring-a","aria-hidden":"true"}),u.jsx("span",{className:"method-showcase-ring method-showcase-ring-b","aria-hidden":"true"}),u.jsx("span",{className:"method-showcase-spark method-showcase-spark-a","aria-hidden":"true"}),u.jsx("span",{className:"method-showcase-spark method-showcase-spark-b","aria-hidden":"true"}),xn.map((a,l)=>{const s=o[l]??"top",d=s==="left";return u.jsxs("button",{"aria-pressed":l===e,className:`method-showcase-tab method-showcase-tab-${s} ${d?"method-showcase-tab-reverse":""} ${l===e?"method-showcase-tab-active":""}`,onClick:()=>t(l),type:"button",children:[u.jsxs("span",{className:"method-showcase-tab-copy",children:[u.jsx("strong",{children:a.orbitLabel}),u.jsx("small",{children:a.shortLabel})]}),u.jsx("span",{className:"method-showcase-tab-dot","aria-hidden":"true",children:u.jsx("span",{})})]},a.number)}),u.jsx("div",{className:"method-showcase-photo","aria-label":"Espaco reservado para foto",children:u.jsx("div",{className:"method-showcase-photo-placeholder",children:u.jsx("span",{children:"Foto reservada"})})})]}),u.jsxs("div",{className:"method-showcase-panel",children:[u.jsxs("div",{className:"method-showcase-panel-header",children:[u.jsx("span",{className:"method-showcase-kicker",children:"Metodo Ascensional"}),u.jsxs("div",{className:"method-showcase-heading",children:[u.jsx("div",{className:"method-showcase-icon","aria-hidden":"true",children:u.jsx("span",{})}),u.jsxs("div",{className:"method-showcase-step",children:[u.jsx("strong",{children:r.title}),u.jsx("p",{className:"method-showcase-description",children:r.description})]})]})]}),u.jsx("div",{className:"method-showcase-points",children:i.map(a=>u.jsx("span",{className:"method-showcase-point",children:a},a))}),u.jsxs("div",{className:"method-showcase-footer",children:[u.jsx("p",{children:"Clique nos pontos ao redor da foto para trocar o conteudo do painel."}),u.jsx("div",{className:"method-showcase-progress","aria-hidden":"true",children:xn.map((a,l)=>u.jsx("span",{className:l===e?"method-showcase-progress-active":""},a.number))})]})]})]})})})]})}),u.jsx("section",{className:"section benefits-section",id:"beneficios",children:u.jsx("div",{className:"container",children:u.jsxs("div",{className:"benefits-top",children:[u.jsxs("header",{className:"section-header benefits-header",children:[u.jsx("p",{className:"kicker",children:"Benefícios"}),u.jsx("h2",{className:"title-lg",children:"A plataforma organiza a conformidade e reduz exposição legal."}),u.jsx("p",{className:"lead",children:"Cada funcionalidade foi apresentada para comunicar valor real na gestão de requisitos legais, desde o controle de documentos até o acompanhamento de planos de ação e auditorias."})]}),u.jsx("div",{className:"showcase-stage",children:Rp.slice(0,4).map((a,l)=>u.jsxs("article",{className:`showcase-panel showcase-panel-${a.scene}`,children:[u.jsx("span",{className:"showcase-index",children:String(l+1).padStart(2,"0")}),Mp(a.scene),u.jsxs("div",{className:"showcase-copy",children:[u.jsx("h3",{className:"showcase-title",children:a.title}),u.jsx("p",{className:"showcase-description",children:a.description})]})]},a.title))})]})})}),u.jsx("section",{className:"section sectors-section",id:"atuacao",children:u.jsx("div",{className:"container",children:u.jsxs("div",{className:"sectors-layout",children:[u.jsxs("header",{className:"section-header sectors-header",children:[u.jsx("p",{className:"kicker",children:"Áreas de atuação"}),u.jsx("h2",{className:"title-lg",children:"Cobertura completa dos temas que sustentam a conformidade."}),u.jsx("p",{className:"lead",children:"A solução abrange os principais eixos regulatórios da operação e permite adaptar categorias conforme a realidade, o porte e o segmento de cada empresa."})]}),u.jsx("div",{className:"sector-list",children:Fp.map((a,l)=>u.jsxs("article",{className:"sector-row",children:[u.jsx("div",{className:"sector-number",children:String(l+1).padStart(2,"0")}),u.jsxs("div",{children:[u.jsx("h3",{className:"sector-title",children:a.title}),u.jsx("p",{className:"sector-description",children:a.description})]})]},a.title))})]})})}),u.jsx("section",{className:"section contact-section",id:"contato",children:u.jsxs("div",{className:"container",children:[u.jsx("header",{className:"section-header contact-header",children:u.jsx("h2",{className:"title-lg",children:"Fale Conosco"})}),u.jsxs("div",{className:"contact-grid",children:[u.jsxs("article",{className:"contact-card",children:[u.jsx("span",{className:"badge",children:"Ascensional Consultoria"}),u.jsx("p",{className:"lead",children:"Gestão de requisitos legais com visão estratégica, dashboards intuitivos e relatórios detalhados para manter a empresa aderente às obrigações regulatórias."}),u.jsxs("div",{className:"contact-list",children:[u.jsxs("div",{className:"contact-item",children:[u.jsx("span",{children:"Telefone"}),u.jsx("strong",{children:"(21) 99999-9999"})]}),u.jsxs("div",{className:"contact-item",children:[u.jsx("span",{children:"E-mail"}),u.jsx("strong",{children:"contato@ascensional.com.br"})]})]})]}),u.jsxs("article",{className:"contact-form",children:[u.jsxs("div",{className:"form-grid",children:[u.jsxs("div",{className:"field",children:[u.jsx("label",{htmlFor:"nome",children:"Nome"}),u.jsx("input",{id:"nome",name:"nome",placeholder:"Seu nome"})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{htmlFor:"empresa",children:"Empresa"}),u.jsx("input",{id:"empresa",name:"empresa",placeholder:"Nome da empresa"})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{htmlFor:"email",children:"E-mail"}),u.jsx("input",{id:"email",name:"email",type:"email",placeholder:"voce@empresa.com"})]}),u.jsxs("div",{className:"field",children:[u.jsx("label",{htmlFor:"telefone",children:"Telefone"}),u.jsx("input",{id:"telefone",name:"telefone",placeholder:"(11) 99999-9999"})]}),u.jsxs("div",{className:"field-full",children:[u.jsx("label",{htmlFor:"mensagem",children:"Mensagem"}),u.jsx("textarea",{id:"mensagem",name:"mensagem",placeholder:"Conte um pouco sobre sua operação e o que precisa estruturar."})]})]}),u.jsxs("div",{className:"form-actions",children:[u.jsx("a",{className:"button button-primary",href:"mailto:contato@ascensional.com.br",children:"Enviar por e-mail"}),u.jsx("a",{className:"button button-secondary",href:"https://wa.me/5511999999999",children:"Continuar no WhatsApp"})]})]})]})]})}),u.jsx("footer",{className:"footer footer-light",children:u.jsx("div",{className:"container",children:u.jsxs("div",{className:"footer-row",children:[u.jsx("span",{children:"Ascensional Consultoria"}),u.jsx("span",{children:"Plataforma de conformidade legal com foco em controle, evidência e governança."})]})})})]})}$i.createRoot(document.getElementById("root")).render(u.jsx(kc.StrictMode,{children:u.jsx(Dp,{})}));

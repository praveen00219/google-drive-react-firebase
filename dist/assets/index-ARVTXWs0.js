var OR=Object.defineProperty;var DR=(t,e,n)=>e in t?OR(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Oa=(t,e,n)=>DR(t,typeof e!="symbol"?e+"":e,n);function MR(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function wT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ET={exports:{}},dh={},TT={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var du=Symbol.for("react.element"),LR=Symbol.for("react.portal"),VR=Symbol.for("react.fragment"),jR=Symbol.for("react.strict_mode"),FR=Symbol.for("react.profiler"),$R=Symbol.for("react.provider"),UR=Symbol.for("react.context"),BR=Symbol.for("react.forward_ref"),zR=Symbol.for("react.suspense"),HR=Symbol.for("react.memo"),WR=Symbol.for("react.lazy"),y_=Symbol.iterator;function qR(t){return t===null||typeof t!="object"?null:(t=y_&&t[y_]||t["@@iterator"],typeof t=="function"?t:null)}var ST={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xT=Object.assign,IT={};function la(t,e,n){this.props=t,this.context=e,this.refs=IT,this.updater=n||ST}la.prototype.isReactComponent={};la.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};la.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function CT(){}CT.prototype=la.prototype;function ey(t,e,n){this.props=t,this.context=e,this.refs=IT,this.updater=n||ST}var ty=ey.prototype=new CT;ty.constructor=ey;xT(ty,la.prototype);ty.isPureReactComponent=!0;var v_=Array.isArray,AT=Object.prototype.hasOwnProperty,ny={current:null},bT={key:!0,ref:!0,__self:!0,__source:!0};function RT(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)AT.call(e,r)&&!bT.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:du,type:t,key:o,ref:s,props:i,_owner:ny.current}}function GR(t,e){return{$$typeof:du,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ry(t){return typeof t=="object"&&t!==null&&t.$$typeof===du}function KR(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var __=/\/+/g;function Jf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?KR(""+t.key):e.toString(36)}function Rc(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case du:case LR:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Jf(s,0):r,v_(i)?(n="",t!=null&&(n=t.replace(__,"$&/")+"/"),Rc(i,e,n,"",function(c){return c})):i!=null&&(ry(i)&&(i=GR(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(__,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",v_(t))for(var a=0;a<t.length;a++){o=t[a];var u=r+Jf(o,a);s+=Rc(o,e,n,u,i)}else if(u=qR(t),typeof u=="function")for(t=u.call(t),a=0;!(o=t.next()).done;)o=o.value,u=r+Jf(o,a++),s+=Rc(o,e,n,u,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Xu(t,e,n){if(t==null)return t;var r=[],i=0;return Rc(t,r,"","",function(o){return e.call(n,o,i++)}),r}function QR(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Kt={current:null},kc={transition:null},YR={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:kc,ReactCurrentOwner:ny};function kT(){throw Error("act(...) is not supported in production builds of React.")}ue.Children={map:Xu,forEach:function(t,e,n){Xu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xu(t,function(){e++}),e},toArray:function(t){return Xu(t,function(e){return e})||[]},only:function(t){if(!ry(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ue.Component=la;ue.Fragment=VR;ue.Profiler=FR;ue.PureComponent=ey;ue.StrictMode=jR;ue.Suspense=zR;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YR;ue.act=kT;ue.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=xT({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=ny.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)AT.call(e,u)&&!bT.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:du,type:t.type,key:i,ref:o,props:r,_owner:s}};ue.createContext=function(t){return t={$$typeof:UR,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$R,_context:t},t.Consumer=t};ue.createElement=RT;ue.createFactory=function(t){var e=RT.bind(null,t);return e.type=t,e};ue.createRef=function(){return{current:null}};ue.forwardRef=function(t){return{$$typeof:BR,render:t}};ue.isValidElement=ry;ue.lazy=function(t){return{$$typeof:WR,_payload:{_status:-1,_result:t},_init:QR}};ue.memo=function(t,e){return{$$typeof:HR,type:t,compare:e===void 0?null:e}};ue.startTransition=function(t){var e=kc.transition;kc.transition={};try{t()}finally{kc.transition=e}};ue.unstable_act=kT;ue.useCallback=function(t,e){return Kt.current.useCallback(t,e)};ue.useContext=function(t){return Kt.current.useContext(t)};ue.useDebugValue=function(){};ue.useDeferredValue=function(t){return Kt.current.useDeferredValue(t)};ue.useEffect=function(t,e){return Kt.current.useEffect(t,e)};ue.useId=function(){return Kt.current.useId()};ue.useImperativeHandle=function(t,e,n){return Kt.current.useImperativeHandle(t,e,n)};ue.useInsertionEffect=function(t,e){return Kt.current.useInsertionEffect(t,e)};ue.useLayoutEffect=function(t,e){return Kt.current.useLayoutEffect(t,e)};ue.useMemo=function(t,e){return Kt.current.useMemo(t,e)};ue.useReducer=function(t,e,n){return Kt.current.useReducer(t,e,n)};ue.useRef=function(t){return Kt.current.useRef(t)};ue.useState=function(t){return Kt.current.useState(t)};ue.useSyncExternalStore=function(t,e,n){return Kt.current.useSyncExternalStore(t,e,n)};ue.useTransition=function(){return Kt.current.useTransition()};ue.version="18.3.1";TT.exports=ue;var O=TT.exports;const Ft=wT(O),xl=MR({__proto__:null,default:Ft},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XR=O,JR=Symbol.for("react.element"),ZR=Symbol.for("react.fragment"),ek=Object.prototype.hasOwnProperty,tk=XR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nk={key:!0,ref:!0,__self:!0,__source:!0};function PT(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)ek.call(e,r)&&!nk.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:JR,type:t,key:o,ref:s,props:i,_owner:tk.current}}dh.Fragment=ZR;dh.jsx=PT;dh.jsxs=PT;ET.exports=dh;var _=ET.exports,NT={exports:{}},xn={},OT={exports:{}},DT={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,W){var J=U.length;U.push(W);e:for(;0<J;){var ae=J-1>>>1,te=U[ae];if(0<i(te,W))U[ae]=W,U[J]=te,J=ae;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var W=U[0],J=U.pop();if(J!==W){U[0]=J;e:for(var ae=0,te=U.length,pe=te>>>1;ae<pe;){var me=2*(ae+1)-1,Ve=U[me],$e=me+1,nt=U[$e];if(0>i(Ve,J))$e<te&&0>i(nt,Ve)?(U[ae]=nt,U[$e]=J,ae=$e):(U[ae]=Ve,U[me]=J,ae=me);else if($e<te&&0>i(nt,J))U[ae]=nt,U[$e]=J,ae=$e;else break e}}return W}function i(U,W){var J=U.sortIndex-W.sortIndex;return J!==0?J:U.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var u=[],c=[],d=1,f=null,m=3,v=!1,w=!1,I=!1,R=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(U){for(var W=n(c);W!==null;){if(W.callback===null)r(c);else if(W.startTime<=U)r(c),W.sortIndex=W.expirationTime,e(u,W);else break;W=n(c)}}function A(U){if(I=!1,y(U),!w)if(n(u)!==null)w=!0,X(D);else{var W=n(c);W!==null&&re(A,W.startTime-U)}}function D(U,W){w=!1,I&&(I=!1,S(x),x=-1),v=!0;var J=m;try{for(y(W),f=n(u);f!==null&&(!(f.expirationTime>W)||U&&!k());){var ae=f.callback;if(typeof ae=="function"){f.callback=null,m=f.priorityLevel;var te=ae(f.expirationTime<=W);W=t.unstable_now(),typeof te=="function"?f.callback=te:f===n(u)&&r(u),y(W)}else r(u);f=n(u)}if(f!==null)var pe=!0;else{var me=n(c);me!==null&&re(A,me.startTime-W),pe=!1}return pe}finally{f=null,m=J,v=!1}}var M=!1,T=null,x=-1,b=5,p=-1;function k(){return!(t.unstable_now()-p<b)}function N(){if(T!==null){var U=t.unstable_now();p=U;var W=!0;try{W=T(!0,U)}finally{W?P():(M=!1,T=null)}}else M=!1}var P;if(typeof E=="function")P=function(){E(N)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,z=Q.port2;Q.port1.onmessage=N,P=function(){z.postMessage(null)}}else P=function(){R(N,0)};function X(U){T=U,M||(M=!0,P())}function re(U,W){x=R(function(){U(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){w||v||(w=!0,X(D))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(U){switch(m){case 1:case 2:case 3:var W=3;break;default:W=m}var J=m;m=W;try{return U()}finally{m=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,W){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var J=m;m=U;try{return W()}finally{m=J}},t.unstable_scheduleCallback=function(U,W,J){var ae=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ae+J:ae):J=ae,U){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=J+te,U={id:d++,callback:W,priorityLevel:U,startTime:J,expirationTime:te,sortIndex:-1},J>ae?(U.sortIndex=J,e(c,U),n(u)===null&&U===n(c)&&(I?(S(x),x=-1):I=!0,re(A,J-ae))):(U.sortIndex=te,e(u,U),w||v||(w=!0,X(D))),U},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(U){var W=m;return function(){var J=m;m=W;try{return U.apply(this,arguments)}finally{m=J}}}})(DT);OT.exports=DT;var rk=OT.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ik=O,En=rk;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var MT=new Set,Il={};function Lo(t,e){Ms(t,e),Ms(t+"Capture",e)}function Ms(t,e){for(Il[t]=e,t=0;t<e.length;t++)MT.add(e[t])}var $r=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),em=Object.prototype.hasOwnProperty,ok=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w_={},E_={};function sk(t){return em.call(E_,t)?!0:em.call(w_,t)?!1:ok.test(t)?E_[t]=!0:(w_[t]=!0,!1)}function ak(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function lk(t,e,n,r){if(e===null||typeof e>"u"||ak(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Qt(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var At={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){At[t]=new Qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];At[e]=new Qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){At[t]=new Qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){At[t]=new Qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){At[t]=new Qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){At[t]=new Qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){At[t]=new Qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){At[t]=new Qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){At[t]=new Qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var iy=/[\-:]([a-z])/g;function oy(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(iy,oy);At[e]=new Qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(iy,oy);At[e]=new Qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(iy,oy);At[e]=new Qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){At[t]=new Qt(t,1,!1,t.toLowerCase(),null,!1,!1)});At.xlinkHref=new Qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){At[t]=new Qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function sy(t,e,n,r){var i=At.hasOwnProperty(e)?At[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(lk(e,n,i,r)&&(n=null),r||i===null?sk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Jr=ik.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ju=Symbol.for("react.element"),us=Symbol.for("react.portal"),cs=Symbol.for("react.fragment"),ay=Symbol.for("react.strict_mode"),tm=Symbol.for("react.profiler"),LT=Symbol.for("react.provider"),VT=Symbol.for("react.context"),ly=Symbol.for("react.forward_ref"),nm=Symbol.for("react.suspense"),rm=Symbol.for("react.suspense_list"),uy=Symbol.for("react.memo"),si=Symbol.for("react.lazy"),jT=Symbol.for("react.offscreen"),T_=Symbol.iterator;function Da(t){return t===null||typeof t!="object"?null:(t=T_&&t[T_]||t["@@iterator"],typeof t=="function"?t:null)}var ze=Object.assign,Zf;function Ga(t){if(Zf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zf=e&&e[1]||""}return`
`+Zf+t}var ep=!1;function tp(t,e){if(!t||ep)return"";ep=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var u=`
`+i[s].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=s&&0<=a);break}}}finally{ep=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ga(t):""}function uk(t){switch(t.tag){case 5:return Ga(t.type);case 16:return Ga("Lazy");case 13:return Ga("Suspense");case 19:return Ga("SuspenseList");case 0:case 2:case 15:return t=tp(t.type,!1),t;case 11:return t=tp(t.type.render,!1),t;case 1:return t=tp(t.type,!0),t;default:return""}}function im(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case cs:return"Fragment";case us:return"Portal";case tm:return"Profiler";case ay:return"StrictMode";case nm:return"Suspense";case rm:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case VT:return(t.displayName||"Context")+".Consumer";case LT:return(t._context.displayName||"Context")+".Provider";case ly:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case uy:return e=t.displayName||null,e!==null?e:im(t.type)||"Memo";case si:e=t._payload,t=t._init;try{return im(t(e))}catch{}}return null}function ck(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return im(e);case 8:return e===ay?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Pi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function FT(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dk(t){var e=FT(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Zu(t){t._valueTracker||(t._valueTracker=dk(t))}function $T(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=FT(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function sd(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function om(t,e){var n=e.checked;return ze({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function S_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Pi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function UT(t,e){e=e.checked,e!=null&&sy(t,"checked",e,!1)}function sm(t,e){UT(t,e);var n=Pi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?am(t,e.type,n):e.hasOwnProperty("defaultValue")&&am(t,e.type,Pi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function x_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function am(t,e,n){(e!=="number"||sd(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ka=Array.isArray;function Ss(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Pi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function lm(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return ze({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function I_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(Ka(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Pi(n)}}function BT(t,e){var n=Pi(e.value),r=Pi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function C_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function zT(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function um(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?zT(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ec,HT=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ec=ec||document.createElement("div"),ec.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ec.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Cl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var sl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hk=["Webkit","ms","Moz","O"];Object.keys(sl).forEach(function(t){hk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),sl[e]=sl[t]})});function WT(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||sl.hasOwnProperty(t)&&sl[t]?(""+e).trim():e+"px"}function qT(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=WT(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var fk=ze({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cm(t,e){if(e){if(fk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function dm(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hm=null;function cy(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fm=null,xs=null,Is=null;function A_(t){if(t=pu(t)){if(typeof fm!="function")throw Error(B(280));var e=t.stateNode;e&&(e=gh(e),fm(t.stateNode,t.type,e))}}function GT(t){xs?Is?Is.push(t):Is=[t]:xs=t}function KT(){if(xs){var t=xs,e=Is;if(Is=xs=null,A_(t),e)for(t=0;t<e.length;t++)A_(e[t])}}function QT(t,e){return t(e)}function YT(){}var np=!1;function XT(t,e,n){if(np)return t(e,n);np=!0;try{return QT(t,e,n)}finally{np=!1,(xs!==null||Is!==null)&&(YT(),KT())}}function Al(t,e){var n=t.stateNode;if(n===null)return null;var r=gh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var pm=!1;if($r)try{var Ma={};Object.defineProperty(Ma,"passive",{get:function(){pm=!0}}),window.addEventListener("test",Ma,Ma),window.removeEventListener("test",Ma,Ma)}catch{pm=!1}function pk(t,e,n,r,i,o,s,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var al=!1,ad=null,ld=!1,mm=null,mk={onError:function(t){al=!0,ad=t}};function gk(t,e,n,r,i,o,s,a,u){al=!1,ad=null,pk.apply(mk,arguments)}function yk(t,e,n,r,i,o,s,a,u){if(gk.apply(this,arguments),al){if(al){var c=ad;al=!1,ad=null}else throw Error(B(198));ld||(ld=!0,mm=c)}}function Vo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function JT(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function b_(t){if(Vo(t)!==t)throw Error(B(188))}function vk(t){var e=t.alternate;if(!e){if(e=Vo(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return b_(i),t;if(o===r)return b_(i),e;o=o.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function ZT(t){return t=vk(t),t!==null?eS(t):null}function eS(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=eS(t);if(e!==null)return e;t=t.sibling}return null}var tS=En.unstable_scheduleCallback,R_=En.unstable_cancelCallback,_k=En.unstable_shouldYield,wk=En.unstable_requestPaint,Ze=En.unstable_now,Ek=En.unstable_getCurrentPriorityLevel,dy=En.unstable_ImmediatePriority,nS=En.unstable_UserBlockingPriority,ud=En.unstable_NormalPriority,Tk=En.unstable_LowPriority,rS=En.unstable_IdlePriority,hh=null,ur=null;function Sk(t){if(ur&&typeof ur.onCommitFiberRoot=="function")try{ur.onCommitFiberRoot(hh,t,void 0,(t.current.flags&128)===128)}catch{}}var Qn=Math.clz32?Math.clz32:Ck,xk=Math.log,Ik=Math.LN2;function Ck(t){return t>>>=0,t===0?32:31-(xk(t)/Ik|0)|0}var tc=64,nc=4194304;function Qa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function cd(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Qa(a):(o&=s,o!==0&&(r=Qa(o)))}else s=n&~i,s!==0?r=Qa(s):o!==0&&(r=Qa(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Qn(e),i=1<<n,r|=t[n],e&=~i;return r}function Ak(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Qn(o),a=1<<s,u=i[s];u===-1?(!(a&n)||a&r)&&(i[s]=Ak(a,e)):u<=e&&(t.expiredLanes|=a),o&=~a}}function gm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function iS(){var t=tc;return tc<<=1,!(tc&4194240)&&(tc=64),t}function rp(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function hu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qn(e),t[e]=n}function Rk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Qn(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function hy(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Qn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ce=0;function oS(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var sS,fy,aS,lS,uS,ym=!1,rc=[],_i=null,wi=null,Ei=null,bl=new Map,Rl=new Map,li=[],kk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function k_(t,e){switch(t){case"focusin":case"focusout":_i=null;break;case"dragenter":case"dragleave":wi=null;break;case"mouseover":case"mouseout":Ei=null;break;case"pointerover":case"pointerout":bl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rl.delete(e.pointerId)}}function La(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=pu(e),e!==null&&fy(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Pk(t,e,n,r,i){switch(e){case"focusin":return _i=La(_i,t,e,n,r,i),!0;case"dragenter":return wi=La(wi,t,e,n,r,i),!0;case"mouseover":return Ei=La(Ei,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return bl.set(o,La(bl.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Rl.set(o,La(Rl.get(o)||null,t,e,n,r,i)),!0}return!1}function cS(t){var e=ao(t.target);if(e!==null){var n=Vo(e);if(n!==null){if(e=n.tag,e===13){if(e=JT(n),e!==null){t.blockedOn=e,uS(t.priority,function(){aS(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=vm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);hm=r,n.target.dispatchEvent(r),hm=null}else return e=pu(n),e!==null&&fy(e),t.blockedOn=n,!1;e.shift()}return!0}function P_(t,e,n){Pc(t)&&n.delete(e)}function Nk(){ym=!1,_i!==null&&Pc(_i)&&(_i=null),wi!==null&&Pc(wi)&&(wi=null),Ei!==null&&Pc(Ei)&&(Ei=null),bl.forEach(P_),Rl.forEach(P_)}function Va(t,e){t.blockedOn===e&&(t.blockedOn=null,ym||(ym=!0,En.unstable_scheduleCallback(En.unstable_NormalPriority,Nk)))}function kl(t){function e(i){return Va(i,t)}if(0<rc.length){Va(rc[0],t);for(var n=1;n<rc.length;n++){var r=rc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(_i!==null&&Va(_i,t),wi!==null&&Va(wi,t),Ei!==null&&Va(Ei,t),bl.forEach(e),Rl.forEach(e),n=0;n<li.length;n++)r=li[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<li.length&&(n=li[0],n.blockedOn===null);)cS(n),n.blockedOn===null&&li.shift()}var Cs=Jr.ReactCurrentBatchConfig,dd=!0;function Ok(t,e,n,r){var i=Ce,o=Cs.transition;Cs.transition=null;try{Ce=1,py(t,e,n,r)}finally{Ce=i,Cs.transition=o}}function Dk(t,e,n,r){var i=Ce,o=Cs.transition;Cs.transition=null;try{Ce=4,py(t,e,n,r)}finally{Ce=i,Cs.transition=o}}function py(t,e,n,r){if(dd){var i=vm(t,e,n,r);if(i===null)fp(t,e,r,hd,n),k_(t,r);else if(Pk(i,t,e,n,r))r.stopPropagation();else if(k_(t,r),e&4&&-1<kk.indexOf(t)){for(;i!==null;){var o=pu(i);if(o!==null&&sS(o),o=vm(t,e,n,r),o===null&&fp(t,e,r,hd,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else fp(t,e,r,null,n)}}var hd=null;function vm(t,e,n,r){if(hd=null,t=cy(r),t=ao(t),t!==null)if(e=Vo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=JT(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hd=t,null}function dS(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ek()){case dy:return 1;case nS:return 4;case ud:case Tk:return 16;case rS:return 536870912;default:return 16}default:return 16}}var pi=null,my=null,Nc=null;function hS(){if(Nc)return Nc;var t,e=my,n=e.length,r,i="value"in pi?pi.value:pi.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Nc=i.slice(t,1<r?1-r:void 0)}function Oc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ic(){return!0}function N_(){return!1}function In(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ic:N_,this.isPropagationStopped=N_,this}return ze(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ic)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ic)},persist:function(){},isPersistent:ic}),e}var ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gy=In(ua),fu=ze({},ua,{view:0,detail:0}),Mk=In(fu),ip,op,ja,fh=ze({},fu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yy,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ja&&(ja&&t.type==="mousemove"?(ip=t.screenX-ja.screenX,op=t.screenY-ja.screenY):op=ip=0,ja=t),ip)},movementY:function(t){return"movementY"in t?t.movementY:op}}),O_=In(fh),Lk=ze({},fh,{dataTransfer:0}),Vk=In(Lk),jk=ze({},fu,{relatedTarget:0}),sp=In(jk),Fk=ze({},ua,{animationName:0,elapsedTime:0,pseudoElement:0}),$k=In(Fk),Uk=ze({},ua,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Bk=In(Uk),zk=ze({},ua,{data:0}),D_=In(zk),Hk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=qk[t])?!!e[t]:!1}function yy(){return Gk}var Kk=ze({},fu,{key:function(t){if(t.key){var e=Hk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Oc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Wk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yy,charCode:function(t){return t.type==="keypress"?Oc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Oc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Qk=In(Kk),Yk=ze({},fh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),M_=In(Yk),Xk=ze({},fu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yy}),Jk=In(Xk),Zk=ze({},ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),e2=In(Zk),t2=ze({},fh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),n2=In(t2),r2=[9,13,27,32],vy=$r&&"CompositionEvent"in window,ll=null;$r&&"documentMode"in document&&(ll=document.documentMode);var i2=$r&&"TextEvent"in window&&!ll,fS=$r&&(!vy||ll&&8<ll&&11>=ll),L_=" ",V_=!1;function pS(t,e){switch(t){case"keyup":return r2.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mS(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ds=!1;function o2(t,e){switch(t){case"compositionend":return mS(e);case"keypress":return e.which!==32?null:(V_=!0,L_);case"textInput":return t=e.data,t===L_&&V_?null:t;default:return null}}function s2(t,e){if(ds)return t==="compositionend"||!vy&&pS(t,e)?(t=hS(),Nc=my=pi=null,ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return fS&&e.locale!=="ko"?null:e.data;default:return null}}var a2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function j_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!a2[t.type]:e==="textarea"}function gS(t,e,n,r){GT(r),e=fd(e,"onChange"),0<e.length&&(n=new gy("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ul=null,Pl=null;function l2(t){AS(t,0)}function ph(t){var e=ps(t);if($T(e))return t}function u2(t,e){if(t==="change")return e}var yS=!1;if($r){var ap;if($r){var lp="oninput"in document;if(!lp){var F_=document.createElement("div");F_.setAttribute("oninput","return;"),lp=typeof F_.oninput=="function"}ap=lp}else ap=!1;yS=ap&&(!document.documentMode||9<document.documentMode)}function $_(){ul&&(ul.detachEvent("onpropertychange",vS),Pl=ul=null)}function vS(t){if(t.propertyName==="value"&&ph(Pl)){var e=[];gS(e,Pl,t,cy(t)),XT(l2,e)}}function c2(t,e,n){t==="focusin"?($_(),ul=e,Pl=n,ul.attachEvent("onpropertychange",vS)):t==="focusout"&&$_()}function d2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ph(Pl)}function h2(t,e){if(t==="click")return ph(e)}function f2(t,e){if(t==="input"||t==="change")return ph(e)}function p2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zn=typeof Object.is=="function"?Object.is:p2;function Nl(t,e){if(Zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!em.call(e,i)||!Zn(t[i],e[i]))return!1}return!0}function U_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function B_(t,e){var n=U_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=U_(n)}}function _S(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_S(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function wS(){for(var t=window,e=sd();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=sd(t.document)}return e}function _y(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function m2(t){var e=wS(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&_S(n.ownerDocument.documentElement,n)){if(r!==null&&_y(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=B_(n,o);var s=B_(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var g2=$r&&"documentMode"in document&&11>=document.documentMode,hs=null,_m=null,cl=null,wm=!1;function z_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wm||hs==null||hs!==sd(r)||(r=hs,"selectionStart"in r&&_y(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),cl&&Nl(cl,r)||(cl=r,r=fd(_m,"onSelect"),0<r.length&&(e=new gy("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=hs)))}function oc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var fs={animationend:oc("Animation","AnimationEnd"),animationiteration:oc("Animation","AnimationIteration"),animationstart:oc("Animation","AnimationStart"),transitionend:oc("Transition","TransitionEnd")},up={},ES={};$r&&(ES=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function mh(t){if(up[t])return up[t];if(!fs[t])return t;var e=fs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ES)return up[t]=e[n];return t}var TS=mh("animationend"),SS=mh("animationiteration"),xS=mh("animationstart"),IS=mh("transitionend"),CS=new Map,H_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ui(t,e){CS.set(t,e),Lo(e,[t])}for(var cp=0;cp<H_.length;cp++){var dp=H_[cp],y2=dp.toLowerCase(),v2=dp[0].toUpperCase()+dp.slice(1);Ui(y2,"on"+v2)}Ui(TS,"onAnimationEnd");Ui(SS,"onAnimationIteration");Ui(xS,"onAnimationStart");Ui("dblclick","onDoubleClick");Ui("focusin","onFocus");Ui("focusout","onBlur");Ui(IS,"onTransitionEnd");Ms("onMouseEnter",["mouseout","mouseover"]);Ms("onMouseLeave",["mouseout","mouseover"]);Ms("onPointerEnter",["pointerout","pointerover"]);Ms("onPointerLeave",["pointerout","pointerover"]);Lo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ya="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_2=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ya));function W_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,yk(r,e,void 0,t),t.currentTarget=null}function AS(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;W_(i,a,c),o=u}else for(s=0;s<r.length;s++){if(a=r[s],u=a.instance,c=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;W_(i,a,c),o=u}}}if(ld)throw t=mm,ld=!1,mm=null,t}function Oe(t,e){var n=e[Im];n===void 0&&(n=e[Im]=new Set);var r=t+"__bubble";n.has(r)||(bS(e,t,2,!1),n.add(r))}function hp(t,e,n){var r=0;e&&(r|=4),bS(n,t,r,e)}var sc="_reactListening"+Math.random().toString(36).slice(2);function Ol(t){if(!t[sc]){t[sc]=!0,MT.forEach(function(n){n!=="selectionchange"&&(_2.has(n)||hp(n,!1,t),hp(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[sc]||(e[sc]=!0,hp("selectionchange",!1,e))}}function bS(t,e,n,r){switch(dS(e)){case 1:var i=Ok;break;case 4:i=Dk;break;default:i=py}n=i.bind(null,e,n,t),i=void 0,!pm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function fp(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;s=s.return}for(;a!==null;){if(s=ao(a),s===null)return;if(u=s.tag,u===5||u===6){r=o=s;continue e}a=a.parentNode}}r=r.return}XT(function(){var c=o,d=cy(n),f=[];e:{var m=CS.get(t);if(m!==void 0){var v=gy,w=t;switch(t){case"keypress":if(Oc(n)===0)break e;case"keydown":case"keyup":v=Qk;break;case"focusin":w="focus",v=sp;break;case"focusout":w="blur",v=sp;break;case"beforeblur":case"afterblur":v=sp;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=O_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Vk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Jk;break;case TS:case SS:case xS:v=$k;break;case IS:v=e2;break;case"scroll":v=Mk;break;case"wheel":v=n2;break;case"copy":case"cut":case"paste":v=Bk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=M_}var I=(e&4)!==0,R=!I&&t==="scroll",S=I?m!==null?m+"Capture":null:m;I=[];for(var E=c,y;E!==null;){y=E;var A=y.stateNode;if(y.tag===5&&A!==null&&(y=A,S!==null&&(A=Al(E,S),A!=null&&I.push(Dl(E,A,y)))),R)break;E=E.return}0<I.length&&(m=new v(m,w,null,n,d),f.push({event:m,listeners:I}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",m&&n!==hm&&(w=n.relatedTarget||n.fromElement)&&(ao(w)||w[Ur]))break e;if((v||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=c,w=w?ao(w):null,w!==null&&(R=Vo(w),w!==R||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=c),v!==w)){if(I=O_,A="onMouseLeave",S="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(I=M_,A="onPointerLeave",S="onPointerEnter",E="pointer"),R=v==null?m:ps(v),y=w==null?m:ps(w),m=new I(A,E+"leave",v,n,d),m.target=R,m.relatedTarget=y,A=null,ao(d)===c&&(I=new I(S,E+"enter",w,n,d),I.target=y,I.relatedTarget=R,A=I),R=A,v&&w)t:{for(I=v,S=w,E=0,y=I;y;y=Yo(y))E++;for(y=0,A=S;A;A=Yo(A))y++;for(;0<E-y;)I=Yo(I),E--;for(;0<y-E;)S=Yo(S),y--;for(;E--;){if(I===S||S!==null&&I===S.alternate)break t;I=Yo(I),S=Yo(S)}I=null}else I=null;v!==null&&q_(f,m,v,I,!1),w!==null&&R!==null&&q_(f,R,w,I,!0)}}e:{if(m=c?ps(c):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var D=u2;else if(j_(m))if(yS)D=f2;else{D=d2;var M=c2}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(D=h2);if(D&&(D=D(t,c))){gS(f,D,n,d);break e}M&&M(t,m,c),t==="focusout"&&(M=m._wrapperState)&&M.controlled&&m.type==="number"&&am(m,"number",m.value)}switch(M=c?ps(c):window,t){case"focusin":(j_(M)||M.contentEditable==="true")&&(hs=M,_m=c,cl=null);break;case"focusout":cl=_m=hs=null;break;case"mousedown":wm=!0;break;case"contextmenu":case"mouseup":case"dragend":wm=!1,z_(f,n,d);break;case"selectionchange":if(g2)break;case"keydown":case"keyup":z_(f,n,d)}var T;if(vy)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else ds?pS(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(fS&&n.locale!=="ko"&&(ds||x!=="onCompositionStart"?x==="onCompositionEnd"&&ds&&(T=hS()):(pi=d,my="value"in pi?pi.value:pi.textContent,ds=!0)),M=fd(c,x),0<M.length&&(x=new D_(x,t,null,n,d),f.push({event:x,listeners:M}),T?x.data=T:(T=mS(n),T!==null&&(x.data=T)))),(T=i2?o2(t,n):s2(t,n))&&(c=fd(c,"onBeforeInput"),0<c.length&&(d=new D_("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=T))}AS(f,e)})}function Dl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fd(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Al(t,n),o!=null&&r.unshift(Dl(t,o,i)),o=Al(t,e),o!=null&&r.push(Dl(t,o,i))),t=t.return}return r}function Yo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function q_(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Al(n,o),u!=null&&s.unshift(Dl(n,u,a))):i||(u=Al(n,o),u!=null&&s.push(Dl(n,u,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var w2=/\r\n?/g,E2=/\u0000|\uFFFD/g;function G_(t){return(typeof t=="string"?t:""+t).replace(w2,`
`).replace(E2,"")}function ac(t,e,n){if(e=G_(e),G_(t)!==e&&n)throw Error(B(425))}function pd(){}var Em=null,Tm=null;function Sm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xm=typeof setTimeout=="function"?setTimeout:void 0,T2=typeof clearTimeout=="function"?clearTimeout:void 0,K_=typeof Promise=="function"?Promise:void 0,S2=typeof queueMicrotask=="function"?queueMicrotask:typeof K_<"u"?function(t){return K_.resolve(null).then(t).catch(x2)}:xm;function x2(t){setTimeout(function(){throw t})}function pp(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),kl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);kl(e)}function Ti(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Q_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ca=Math.random().toString(36).slice(2),lr="__reactFiber$"+ca,Ml="__reactProps$"+ca,Ur="__reactContainer$"+ca,Im="__reactEvents$"+ca,I2="__reactListeners$"+ca,C2="__reactHandles$"+ca;function ao(t){var e=t[lr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ur]||n[lr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Q_(t);t!==null;){if(n=t[lr])return n;t=Q_(t)}return e}t=n,n=t.parentNode}return null}function pu(t){return t=t[lr]||t[Ur],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ps(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function gh(t){return t[Ml]||null}var Cm=[],ms=-1;function Bi(t){return{current:t}}function Le(t){0>ms||(t.current=Cm[ms],Cm[ms]=null,ms--)}function Pe(t,e){ms++,Cm[ms]=t.current,t.current=e}var Ni={},$t=Bi(Ni),nn=Bi(!1),xo=Ni;function Ls(t,e){var n=t.type.contextTypes;if(!n)return Ni;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function rn(t){return t=t.childContextTypes,t!=null}function md(){Le(nn),Le($t)}function Y_(t,e,n){if($t.current!==Ni)throw Error(B(168));Pe($t,e),Pe(nn,n)}function RS(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,ck(t)||"Unknown",i));return ze({},n,r)}function gd(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ni,xo=$t.current,Pe($t,t),Pe(nn,nn.current),!0}function X_(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=RS(t,e,xo),r.__reactInternalMemoizedMergedChildContext=t,Le(nn),Le($t),Pe($t,t)):Le(nn),Pe(nn,n)}var kr=null,yh=!1,mp=!1;function kS(t){kr===null?kr=[t]:kr.push(t)}function A2(t){yh=!0,kS(t)}function zi(){if(!mp&&kr!==null){mp=!0;var t=0,e=Ce;try{var n=kr;for(Ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}kr=null,yh=!1}catch(i){throw kr!==null&&(kr=kr.slice(t+1)),tS(dy,zi),i}finally{Ce=e,mp=!1}}return null}var gs=[],ys=0,yd=null,vd=0,Pn=[],Nn=0,Io=null,Or=1,Dr="";function to(t,e){gs[ys++]=vd,gs[ys++]=yd,yd=t,vd=e}function PS(t,e,n){Pn[Nn++]=Or,Pn[Nn++]=Dr,Pn[Nn++]=Io,Io=t;var r=Or;t=Dr;var i=32-Qn(r)-1;r&=~(1<<i),n+=1;var o=32-Qn(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Or=1<<32-Qn(e)+i|n<<i|r,Dr=o+t}else Or=1<<o|n<<i|r,Dr=t}function wy(t){t.return!==null&&(to(t,1),PS(t,1,0))}function Ey(t){for(;t===yd;)yd=gs[--ys],gs[ys]=null,vd=gs[--ys],gs[ys]=null;for(;t===Io;)Io=Pn[--Nn],Pn[Nn]=null,Dr=Pn[--Nn],Pn[Nn]=null,Or=Pn[--Nn],Pn[Nn]=null}var vn=null,pn=null,Fe=!1,qn=null;function NS(t,e){var n=Dn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function J_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vn=t,pn=Ti(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vn=t,pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Io!==null?{id:Or,overflow:Dr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Dn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vn=t,pn=null,!0):!1;default:return!1}}function Am(t){return(t.mode&1)!==0&&(t.flags&128)===0}function bm(t){if(Fe){var e=pn;if(e){var n=e;if(!J_(t,e)){if(Am(t))throw Error(B(418));e=Ti(n.nextSibling);var r=vn;e&&J_(t,e)?NS(r,n):(t.flags=t.flags&-4097|2,Fe=!1,vn=t)}}else{if(Am(t))throw Error(B(418));t.flags=t.flags&-4097|2,Fe=!1,vn=t}}}function Z_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vn=t}function lc(t){if(t!==vn)return!1;if(!Fe)return Z_(t),Fe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Sm(t.type,t.memoizedProps)),e&&(e=pn)){if(Am(t))throw OS(),Error(B(418));for(;e;)NS(t,e),e=Ti(e.nextSibling)}if(Z_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pn=Ti(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pn=null}}else pn=vn?Ti(t.stateNode.nextSibling):null;return!0}function OS(){for(var t=pn;t;)t=Ti(t.nextSibling)}function Vs(){pn=vn=null,Fe=!1}function Ty(t){qn===null?qn=[t]:qn.push(t)}var b2=Jr.ReactCurrentBatchConfig;function Fa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function uc(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function e1(t){var e=t._init;return e(t._payload)}function DS(t){function e(S,E){if(t){var y=S.deletions;y===null?(S.deletions=[E],S.flags|=16):y.push(E)}}function n(S,E){if(!t)return null;for(;E!==null;)e(S,E),E=E.sibling;return null}function r(S,E){for(S=new Map;E!==null;)E.key!==null?S.set(E.key,E):S.set(E.index,E),E=E.sibling;return S}function i(S,E){return S=Ci(S,E),S.index=0,S.sibling=null,S}function o(S,E,y){return S.index=y,t?(y=S.alternate,y!==null?(y=y.index,y<E?(S.flags|=2,E):y):(S.flags|=2,E)):(S.flags|=1048576,E)}function s(S){return t&&S.alternate===null&&(S.flags|=2),S}function a(S,E,y,A){return E===null||E.tag!==6?(E=Tp(y,S.mode,A),E.return=S,E):(E=i(E,y),E.return=S,E)}function u(S,E,y,A){var D=y.type;return D===cs?d(S,E,y.props.children,A,y.key):E!==null&&(E.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===si&&e1(D)===E.type)?(A=i(E,y.props),A.ref=Fa(S,E,y),A.return=S,A):(A=$c(y.type,y.key,y.props,null,S.mode,A),A.ref=Fa(S,E,y),A.return=S,A)}function c(S,E,y,A){return E===null||E.tag!==4||E.stateNode.containerInfo!==y.containerInfo||E.stateNode.implementation!==y.implementation?(E=Sp(y,S.mode,A),E.return=S,E):(E=i(E,y.children||[]),E.return=S,E)}function d(S,E,y,A,D){return E===null||E.tag!==7?(E=go(y,S.mode,A,D),E.return=S,E):(E=i(E,y),E.return=S,E)}function f(S,E,y){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Tp(""+E,S.mode,y),E.return=S,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ju:return y=$c(E.type,E.key,E.props,null,S.mode,y),y.ref=Fa(S,null,E),y.return=S,y;case us:return E=Sp(E,S.mode,y),E.return=S,E;case si:var A=E._init;return f(S,A(E._payload),y)}if(Ka(E)||Da(E))return E=go(E,S.mode,y,null),E.return=S,E;uc(S,E)}return null}function m(S,E,y,A){var D=E!==null?E.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return D!==null?null:a(S,E,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ju:return y.key===D?u(S,E,y,A):null;case us:return y.key===D?c(S,E,y,A):null;case si:return D=y._init,m(S,E,D(y._payload),A)}if(Ka(y)||Da(y))return D!==null?null:d(S,E,y,A,null);uc(S,y)}return null}function v(S,E,y,A,D){if(typeof A=="string"&&A!==""||typeof A=="number")return S=S.get(y)||null,a(E,S,""+A,D);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Ju:return S=S.get(A.key===null?y:A.key)||null,u(E,S,A,D);case us:return S=S.get(A.key===null?y:A.key)||null,c(E,S,A,D);case si:var M=A._init;return v(S,E,y,M(A._payload),D)}if(Ka(A)||Da(A))return S=S.get(y)||null,d(E,S,A,D,null);uc(E,A)}return null}function w(S,E,y,A){for(var D=null,M=null,T=E,x=E=0,b=null;T!==null&&x<y.length;x++){T.index>x?(b=T,T=null):b=T.sibling;var p=m(S,T,y[x],A);if(p===null){T===null&&(T=b);break}t&&T&&p.alternate===null&&e(S,T),E=o(p,E,x),M===null?D=p:M.sibling=p,M=p,T=b}if(x===y.length)return n(S,T),Fe&&to(S,x),D;if(T===null){for(;x<y.length;x++)T=f(S,y[x],A),T!==null&&(E=o(T,E,x),M===null?D=T:M.sibling=T,M=T);return Fe&&to(S,x),D}for(T=r(S,T);x<y.length;x++)b=v(T,S,x,y[x],A),b!==null&&(t&&b.alternate!==null&&T.delete(b.key===null?x:b.key),E=o(b,E,x),M===null?D=b:M.sibling=b,M=b);return t&&T.forEach(function(k){return e(S,k)}),Fe&&to(S,x),D}function I(S,E,y,A){var D=Da(y);if(typeof D!="function")throw Error(B(150));if(y=D.call(y),y==null)throw Error(B(151));for(var M=D=null,T=E,x=E=0,b=null,p=y.next();T!==null&&!p.done;x++,p=y.next()){T.index>x?(b=T,T=null):b=T.sibling;var k=m(S,T,p.value,A);if(k===null){T===null&&(T=b);break}t&&T&&k.alternate===null&&e(S,T),E=o(k,E,x),M===null?D=k:M.sibling=k,M=k,T=b}if(p.done)return n(S,T),Fe&&to(S,x),D;if(T===null){for(;!p.done;x++,p=y.next())p=f(S,p.value,A),p!==null&&(E=o(p,E,x),M===null?D=p:M.sibling=p,M=p);return Fe&&to(S,x),D}for(T=r(S,T);!p.done;x++,p=y.next())p=v(T,S,x,p.value,A),p!==null&&(t&&p.alternate!==null&&T.delete(p.key===null?x:p.key),E=o(p,E,x),M===null?D=p:M.sibling=p,M=p);return t&&T.forEach(function(N){return e(S,N)}),Fe&&to(S,x),D}function R(S,E,y,A){if(typeof y=="object"&&y!==null&&y.type===cs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ju:e:{for(var D=y.key,M=E;M!==null;){if(M.key===D){if(D=y.type,D===cs){if(M.tag===7){n(S,M.sibling),E=i(M,y.props.children),E.return=S,S=E;break e}}else if(M.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===si&&e1(D)===M.type){n(S,M.sibling),E=i(M,y.props),E.ref=Fa(S,M,y),E.return=S,S=E;break e}n(S,M);break}else e(S,M);M=M.sibling}y.type===cs?(E=go(y.props.children,S.mode,A,y.key),E.return=S,S=E):(A=$c(y.type,y.key,y.props,null,S.mode,A),A.ref=Fa(S,E,y),A.return=S,S=A)}return s(S);case us:e:{for(M=y.key;E!==null;){if(E.key===M)if(E.tag===4&&E.stateNode.containerInfo===y.containerInfo&&E.stateNode.implementation===y.implementation){n(S,E.sibling),E=i(E,y.children||[]),E.return=S,S=E;break e}else{n(S,E);break}else e(S,E);E=E.sibling}E=Sp(y,S.mode,A),E.return=S,S=E}return s(S);case si:return M=y._init,R(S,E,M(y._payload),A)}if(Ka(y))return w(S,E,y,A);if(Da(y))return I(S,E,y,A);uc(S,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,E!==null&&E.tag===6?(n(S,E.sibling),E=i(E,y),E.return=S,S=E):(n(S,E),E=Tp(y,S.mode,A),E.return=S,S=E),s(S)):n(S,E)}return R}var js=DS(!0),MS=DS(!1),_d=Bi(null),wd=null,vs=null,Sy=null;function xy(){Sy=vs=wd=null}function Iy(t){var e=_d.current;Le(_d),t._currentValue=e}function Rm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function As(t,e){wd=t,Sy=vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(en=!0),t.firstContext=null)}function Vn(t){var e=t._currentValue;if(Sy!==t)if(t={context:t,memoizedValue:e,next:null},vs===null){if(wd===null)throw Error(B(308));vs=t,wd.dependencies={lanes:0,firstContext:t}}else vs=vs.next=t;return e}var lo=null;function Cy(t){lo===null?lo=[t]:lo.push(t)}function LS(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Cy(e)):(n.next=i.next,i.next=n),e.interleaved=n,Br(t,r)}function Br(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ai=!1;function Ay(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function VS(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Fr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Si(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,_e&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Br(t,n)}return i=r.interleaved,i===null?(e.next=e,Cy(r)):(e.next=i.next,i.next=e),r.interleaved=e,Br(t,n)}function Dc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hy(t,n)}}function t1(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ed(t,e,n,r){var i=t.updateQueue;ai=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,s===null?o=c:s.next=c,s=u;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(o!==null){var f=i.baseState;s=0,d=c=u=null,a=o;do{var m=a.lane,v=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,I=a;switch(m=e,v=n,I.tag){case 1:if(w=I.payload,typeof w=="function"){f=w.call(v,f,m);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=I.payload,m=typeof w=="function"?w.call(v,f,m):w,m==null)break e;f=ze({},f,m);break e;case 2:ai=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=v,u=f):d=d.next=v,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Ao|=s,t.lanes=s,t.memoizedState=f}}function n1(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var mu={},cr=Bi(mu),Ll=Bi(mu),Vl=Bi(mu);function uo(t){if(t===mu)throw Error(B(174));return t}function by(t,e){switch(Pe(Vl,e),Pe(Ll,t),Pe(cr,mu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:um(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=um(e,t)}Le(cr),Pe(cr,e)}function Fs(){Le(cr),Le(Ll),Le(Vl)}function jS(t){uo(Vl.current);var e=uo(cr.current),n=um(e,t.type);e!==n&&(Pe(Ll,t),Pe(cr,n))}function Ry(t){Ll.current===t&&(Le(cr),Le(Ll))}var Ue=Bi(0);function Td(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gp=[];function ky(){for(var t=0;t<gp.length;t++)gp[t]._workInProgressVersionPrimary=null;gp.length=0}var Mc=Jr.ReactCurrentDispatcher,yp=Jr.ReactCurrentBatchConfig,Co=0,Be=null,ct=null,pt=null,Sd=!1,dl=!1,jl=0,R2=0;function Nt(){throw Error(B(321))}function Py(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Zn(t[n],e[n]))return!1;return!0}function Ny(t,e,n,r,i,o){if(Co=o,Be=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Mc.current=t===null||t.memoizedState===null?O2:D2,t=n(r,i),dl){o=0;do{if(dl=!1,jl=0,25<=o)throw Error(B(301));o+=1,pt=ct=null,e.updateQueue=null,Mc.current=M2,t=n(r,i)}while(dl)}if(Mc.current=xd,e=ct!==null&&ct.next!==null,Co=0,pt=ct=Be=null,Sd=!1,e)throw Error(B(300));return t}function Oy(){var t=jl!==0;return jl=0,t}function ir(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?Be.memoizedState=pt=t:pt=pt.next=t,pt}function jn(){if(ct===null){var t=Be.alternate;t=t!==null?t.memoizedState:null}else t=ct.next;var e=pt===null?Be.memoizedState:pt.next;if(e!==null)pt=e,ct=t;else{if(t===null)throw Error(B(310));ct=t,t={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},pt===null?Be.memoizedState=pt=t:pt=pt.next=t}return pt}function Fl(t,e){return typeof e=="function"?e(t):e}function vp(t){var e=jn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=ct,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,u=null,c=o;do{var d=c.lane;if((Co&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,s=r):u=u.next=f,Be.lanes|=d,Ao|=d}c=c.next}while(c!==null&&c!==o);u===null?s=r:u.next=a,Zn(r,e.memoizedState)||(en=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Be.lanes|=o,Ao|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function _p(t){var e=jn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Zn(o,e.memoizedState)||(en=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function FS(){}function $S(t,e){var n=Be,r=jn(),i=e(),o=!Zn(r.memoizedState,i);if(o&&(r.memoizedState=i,en=!0),r=r.queue,Dy(zS.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||pt!==null&&pt.memoizedState.tag&1){if(n.flags|=2048,$l(9,BS.bind(null,n,r,i,e),void 0,null),gt===null)throw Error(B(349));Co&30||US(n,e,i)}return i}function US(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Be.updateQueue,e===null?(e={lastEffect:null,stores:null},Be.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function BS(t,e,n,r){e.value=n,e.getSnapshot=r,HS(e)&&WS(t)}function zS(t,e,n){return n(function(){HS(e)&&WS(t)})}function HS(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zn(t,n)}catch{return!0}}function WS(t){var e=Br(t,1);e!==null&&Yn(e,t,1,-1)}function r1(t){var e=ir();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fl,lastRenderedState:t},e.queue=t,t=t.dispatch=N2.bind(null,Be,t),[e.memoizedState,t]}function $l(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Be.updateQueue,e===null?(e={lastEffect:null,stores:null},Be.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function qS(){return jn().memoizedState}function Lc(t,e,n,r){var i=ir();Be.flags|=t,i.memoizedState=$l(1|e,n,void 0,r===void 0?null:r)}function vh(t,e,n,r){var i=jn();r=r===void 0?null:r;var o=void 0;if(ct!==null){var s=ct.memoizedState;if(o=s.destroy,r!==null&&Py(r,s.deps)){i.memoizedState=$l(e,n,o,r);return}}Be.flags|=t,i.memoizedState=$l(1|e,n,o,r)}function i1(t,e){return Lc(8390656,8,t,e)}function Dy(t,e){return vh(2048,8,t,e)}function GS(t,e){return vh(4,2,t,e)}function KS(t,e){return vh(4,4,t,e)}function QS(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function YS(t,e,n){return n=n!=null?n.concat([t]):null,vh(4,4,QS.bind(null,e,t),n)}function My(){}function XS(t,e){var n=jn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Py(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function JS(t,e){var n=jn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Py(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ZS(t,e,n){return Co&21?(Zn(n,e)||(n=iS(),Be.lanes|=n,Ao|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,en=!0),t.memoizedState=n)}function k2(t,e){var n=Ce;Ce=n!==0&&4>n?n:4,t(!0);var r=yp.transition;yp.transition={};try{t(!1),e()}finally{Ce=n,yp.transition=r}}function ex(){return jn().memoizedState}function P2(t,e,n){var r=Ii(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},tx(t))nx(e,n);else if(n=LS(t,e,n,r),n!==null){var i=qt();Yn(n,t,r,i),rx(n,e,r)}}function N2(t,e,n){var r=Ii(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(tx(t))nx(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Zn(a,s)){var u=e.interleaved;u===null?(i.next=i,Cy(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=LS(t,e,i,r),n!==null&&(i=qt(),Yn(n,t,r,i),rx(n,e,r))}}function tx(t){var e=t.alternate;return t===Be||e!==null&&e===Be}function nx(t,e){dl=Sd=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function rx(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hy(t,n)}}var xd={readContext:Vn,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useInsertionEffect:Nt,useLayoutEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useMutableSource:Nt,useSyncExternalStore:Nt,useId:Nt,unstable_isNewReconciler:!1},O2={readContext:Vn,useCallback:function(t,e){return ir().memoizedState=[t,e===void 0?null:e],t},useContext:Vn,useEffect:i1,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Lc(4194308,4,QS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Lc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Lc(4,2,t,e)},useMemo:function(t,e){var n=ir();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ir();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=P2.bind(null,Be,t),[r.memoizedState,t]},useRef:function(t){var e=ir();return t={current:t},e.memoizedState=t},useState:r1,useDebugValue:My,useDeferredValue:function(t){return ir().memoizedState=t},useTransition:function(){var t=r1(!1),e=t[0];return t=k2.bind(null,t[1]),ir().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Be,i=ir();if(Fe){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),gt===null)throw Error(B(349));Co&30||US(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,i1(zS.bind(null,r,o,t),[t]),r.flags|=2048,$l(9,BS.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=ir(),e=gt.identifierPrefix;if(Fe){var n=Dr,r=Or;n=(r&~(1<<32-Qn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=jl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=R2++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},D2={readContext:Vn,useCallback:XS,useContext:Vn,useEffect:Dy,useImperativeHandle:YS,useInsertionEffect:GS,useLayoutEffect:KS,useMemo:JS,useReducer:vp,useRef:qS,useState:function(){return vp(Fl)},useDebugValue:My,useDeferredValue:function(t){var e=jn();return ZS(e,ct.memoizedState,t)},useTransition:function(){var t=vp(Fl)[0],e=jn().memoizedState;return[t,e]},useMutableSource:FS,useSyncExternalStore:$S,useId:ex,unstable_isNewReconciler:!1},M2={readContext:Vn,useCallback:XS,useContext:Vn,useEffect:Dy,useImperativeHandle:YS,useInsertionEffect:GS,useLayoutEffect:KS,useMemo:JS,useReducer:_p,useRef:qS,useState:function(){return _p(Fl)},useDebugValue:My,useDeferredValue:function(t){var e=jn();return ct===null?e.memoizedState=t:ZS(e,ct.memoizedState,t)},useTransition:function(){var t=_p(Fl)[0],e=jn().memoizedState;return[t,e]},useMutableSource:FS,useSyncExternalStore:$S,useId:ex,unstable_isNewReconciler:!1};function Hn(t,e){if(t&&t.defaultProps){e=ze({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function km(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ze({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _h={isMounted:function(t){return(t=t._reactInternals)?Vo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=qt(),i=Ii(t),o=Fr(r,i);o.payload=e,n!=null&&(o.callback=n),e=Si(t,o,i),e!==null&&(Yn(e,t,i,r),Dc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=qt(),i=Ii(t),o=Fr(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Si(t,o,i),e!==null&&(Yn(e,t,i,r),Dc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qt(),r=Ii(t),i=Fr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Si(t,i,r),e!==null&&(Yn(e,t,r,n),Dc(e,t,r))}};function o1(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Nl(n,r)||!Nl(i,o):!0}function ix(t,e,n){var r=!1,i=Ni,o=e.contextType;return typeof o=="object"&&o!==null?o=Vn(o):(i=rn(e)?xo:$t.current,r=e.contextTypes,o=(r=r!=null)?Ls(t,i):Ni),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_h,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function s1(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&_h.enqueueReplaceState(e,e.state,null)}function Pm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ay(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Vn(o):(o=rn(e)?xo:$t.current,i.context=Ls(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(km(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&_h.enqueueReplaceState(i,i.state,null),Ed(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function $s(t,e){try{var n="",r=e;do n+=uk(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function wp(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Nm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var L2=typeof WeakMap=="function"?WeakMap:Map;function ox(t,e,n){n=Fr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Cd||(Cd=!0,Bm=r),Nm(t,e)},n}function sx(t,e,n){n=Fr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Nm(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Nm(t,e),typeof r!="function"&&(xi===null?xi=new Set([this]):xi.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function a1(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new L2;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Y2.bind(null,t,e,n),e.then(t,t))}function l1(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function u1(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Fr(-1,1),e.tag=2,Si(n,e,1))),n.lanes|=1),t)}var V2=Jr.ReactCurrentOwner,en=!1;function Wt(t,e,n,r){e.child=t===null?MS(e,null,n,r):js(e,t.child,n,r)}function c1(t,e,n,r,i){n=n.render;var o=e.ref;return As(e,i),r=Ny(t,e,n,r,o,i),n=Oy(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zr(t,e,i)):(Fe&&n&&wy(e),e.flags|=1,Wt(t,e,r,i),e.child)}function d1(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!zy(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,ax(t,e,o,r,i)):(t=$c(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Nl,n(s,r)&&t.ref===e.ref)return zr(t,e,i)}return e.flags|=1,t=Ci(o,r),t.ref=e.ref,t.return=e,e.child=t}function ax(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Nl(o,r)&&t.ref===e.ref)if(en=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(en=!0);else return e.lanes=t.lanes,zr(t,e,i)}return Om(t,e,n,r,i)}function lx(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pe(ws,hn),hn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Pe(ws,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Pe(ws,hn),hn|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,Pe(ws,hn),hn|=r;return Wt(t,e,i,n),e.child}function ux(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Om(t,e,n,r,i){var o=rn(n)?xo:$t.current;return o=Ls(e,o),As(e,i),n=Ny(t,e,n,r,o,i),r=Oy(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zr(t,e,i)):(Fe&&r&&wy(e),e.flags|=1,Wt(t,e,n,i),e.child)}function h1(t,e,n,r,i){if(rn(n)){var o=!0;gd(e)}else o=!1;if(As(e,i),e.stateNode===null)Vc(t,e),ix(e,n,r),Pm(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Vn(c):(c=rn(n)?xo:$t.current,c=Ls(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||u!==c)&&s1(e,s,r,c),ai=!1;var m=e.memoizedState;s.state=m,Ed(e,r,s,i),u=e.memoizedState,a!==r||m!==u||nn.current||ai?(typeof d=="function"&&(km(e,n,d,r),u=e.memoizedState),(a=ai||o1(e,n,a,r,m,u,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),s.props=r,s.state=u,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,VS(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Hn(e.type,a),s.props=c,f=e.pendingProps,m=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=Vn(u):(u=rn(n)?xo:$t.current,u=Ls(e,u));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||m!==u)&&s1(e,s,r,u),ai=!1,m=e.memoizedState,s.state=m,Ed(e,r,s,i);var w=e.memoizedState;a!==f||m!==w||nn.current||ai?(typeof v=="function"&&(km(e,n,v,r),w=e.memoizedState),(c=ai||o1(e,n,c,r,m,w,u)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,u)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),s.props=r,s.state=w,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Dm(t,e,n,r,o,i)}function Dm(t,e,n,r,i,o){ux(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&X_(e,n,!1),zr(t,e,o);r=e.stateNode,V2.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=js(e,t.child,null,o),e.child=js(e,null,a,o)):Wt(t,e,a,o),e.memoizedState=r.state,i&&X_(e,n,!0),e.child}function cx(t){var e=t.stateNode;e.pendingContext?Y_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Y_(t,e.context,!1),by(t,e.containerInfo)}function f1(t,e,n,r,i){return Vs(),Ty(i),e.flags|=256,Wt(t,e,n,r),e.child}var Mm={dehydrated:null,treeContext:null,retryLane:0};function Lm(t){return{baseLanes:t,cachePool:null,transitions:null}}function dx(t,e,n){var r=e.pendingProps,i=Ue.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Pe(Ue,i&1),t===null)return bm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Th(s,r,0,null),t=go(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Lm(n),e.memoizedState=Mm,t):Ly(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return j2(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Ci(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Ci(a,o):(o=go(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?Lm(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Mm,r}return o=t.child,t=o.sibling,r=Ci(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ly(t,e){return e=Th({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function cc(t,e,n,r){return r!==null&&Ty(r),js(e,t.child,null,n),t=Ly(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function j2(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=wp(Error(B(422))),cc(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Th({mode:"visible",children:r.children},i,0,null),o=go(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&js(e,t.child,null,s),e.child.memoizedState=Lm(s),e.memoizedState=Mm,o);if(!(e.mode&1))return cc(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(B(419)),r=wp(o,r,void 0),cc(t,e,s,r)}if(a=(s&t.childLanes)!==0,en||a){if(r=gt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Br(t,i),Yn(r,t,i,-1))}return By(),r=wp(Error(B(421))),cc(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=X2.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,pn=Ti(i.nextSibling),vn=e,Fe=!0,qn=null,t!==null&&(Pn[Nn++]=Or,Pn[Nn++]=Dr,Pn[Nn++]=Io,Or=t.id,Dr=t.overflow,Io=e),e=Ly(e,r.children),e.flags|=4096,e)}function p1(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Rm(t.return,e,n)}function Ep(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function hx(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Wt(t,e,r.children,n),r=Ue.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&p1(t,n,e);else if(t.tag===19)p1(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Pe(Ue,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Td(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ep(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Td(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ep(e,!0,n,null,o);break;case"together":Ep(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Vc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function zr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ao|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=Ci(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ci(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function F2(t,e,n){switch(e.tag){case 3:cx(e),Vs();break;case 5:jS(e);break;case 1:rn(e.type)&&gd(e);break;case 4:by(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Pe(_d,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Pe(Ue,Ue.current&1),e.flags|=128,null):n&e.child.childLanes?dx(t,e,n):(Pe(Ue,Ue.current&1),t=zr(t,e,n),t!==null?t.sibling:null);Pe(Ue,Ue.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return hx(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Pe(Ue,Ue.current),r)break;return null;case 22:case 23:return e.lanes=0,lx(t,e,n)}return zr(t,e,n)}var fx,Vm,px,mx;fx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vm=function(){};px=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,uo(cr.current);var o=null;switch(n){case"input":i=om(t,i),r=om(t,r),o=[];break;case"select":i=ze({},i,{value:void 0}),r=ze({},r,{value:void 0}),o=[];break;case"textarea":i=lm(t,i),r=lm(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=pd)}cm(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Il.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Il.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Oe("scroll",t),o||a===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};mx=function(t,e,n,r){n!==r&&(e.flags|=4)};function $a(t,e){if(!Fe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function $2(t,e,n){var r=e.pendingProps;switch(Ey(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(e),null;case 1:return rn(e.type)&&md(),Ot(e),null;case 3:return r=e.stateNode,Fs(),Le(nn),Le($t),ky(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(lc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qn!==null&&(Wm(qn),qn=null))),Vm(t,e),Ot(e),null;case 5:Ry(e);var i=uo(Vl.current);if(n=e.type,t!==null&&e.stateNode!=null)px(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return Ot(e),null}if(t=uo(cr.current),lc(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[lr]=e,r[Ml]=o,t=(e.mode&1)!==0,n){case"dialog":Oe("cancel",r),Oe("close",r);break;case"iframe":case"object":case"embed":Oe("load",r);break;case"video":case"audio":for(i=0;i<Ya.length;i++)Oe(Ya[i],r);break;case"source":Oe("error",r);break;case"img":case"image":case"link":Oe("error",r),Oe("load",r);break;case"details":Oe("toggle",r);break;case"input":S_(r,o),Oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Oe("invalid",r);break;case"textarea":I_(r,o),Oe("invalid",r)}cm(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ac(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ac(r.textContent,a,t),i=["children",""+a]):Il.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Oe("scroll",r)}switch(n){case"input":Zu(r),x_(r,o,!0);break;case"textarea":Zu(r),C_(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=pd)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=zT(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[lr]=e,t[Ml]=r,fx(t,e,!1,!1),e.stateNode=t;e:{switch(s=dm(n,r),n){case"dialog":Oe("cancel",t),Oe("close",t),i=r;break;case"iframe":case"object":case"embed":Oe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ya.length;i++)Oe(Ya[i],t);i=r;break;case"source":Oe("error",t),i=r;break;case"img":case"image":case"link":Oe("error",t),Oe("load",t),i=r;break;case"details":Oe("toggle",t),i=r;break;case"input":S_(t,r),i=om(t,r),Oe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ze({},r,{value:void 0}),Oe("invalid",t);break;case"textarea":I_(t,r),i=lm(t,r),Oe("invalid",t);break;default:i=r}cm(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?qT(t,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&HT(t,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Cl(t,u):typeof u=="number"&&Cl(t,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Il.hasOwnProperty(o)?u!=null&&o==="onScroll"&&Oe("scroll",t):u!=null&&sy(t,o,u,s))}switch(n){case"input":Zu(t),x_(t,r,!1);break;case"textarea":Zu(t),C_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Pi(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Ss(t,!!r.multiple,o,!1):r.defaultValue!=null&&Ss(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=pd)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ot(e),null;case 6:if(t&&e.stateNode!=null)mx(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=uo(Vl.current),uo(cr.current),lc(e)){if(r=e.stateNode,n=e.memoizedProps,r[lr]=e,(o=r.nodeValue!==n)&&(t=vn,t!==null))switch(t.tag){case 3:ac(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ac(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[lr]=e,e.stateNode=r}return Ot(e),null;case 13:if(Le(Ue),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Fe&&pn!==null&&e.mode&1&&!(e.flags&128))OS(),Vs(),e.flags|=98560,o=!1;else if(o=lc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(B(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(B(317));o[lr]=e}else Vs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ot(e),o=!1}else qn!==null&&(Wm(qn),qn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ue.current&1?dt===0&&(dt=3):By())),e.updateQueue!==null&&(e.flags|=4),Ot(e),null);case 4:return Fs(),Vm(t,e),t===null&&Ol(e.stateNode.containerInfo),Ot(e),null;case 10:return Iy(e.type._context),Ot(e),null;case 17:return rn(e.type)&&md(),Ot(e),null;case 19:if(Le(Ue),o=e.memoizedState,o===null)return Ot(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)$a(o,!1);else{if(dt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Td(t),s!==null){for(e.flags|=128,$a(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Pe(Ue,Ue.current&1|2),e.child}t=t.sibling}o.tail!==null&&Ze()>Us&&(e.flags|=128,r=!0,$a(o,!1),e.lanes=4194304)}else{if(!r)if(t=Td(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$a(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Fe)return Ot(e),null}else 2*Ze()-o.renderingStartTime>Us&&n!==1073741824&&(e.flags|=128,r=!0,$a(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ze(),e.sibling=null,n=Ue.current,Pe(Ue,r?n&1|2:n&1),e):(Ot(e),null);case 22:case 23:return Uy(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?hn&1073741824&&(Ot(e),e.subtreeFlags&6&&(e.flags|=8192)):Ot(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function U2(t,e){switch(Ey(e),e.tag){case 1:return rn(e.type)&&md(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Fs(),Le(nn),Le($t),ky(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ry(e),null;case 13:if(Le(Ue),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Vs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Le(Ue),null;case 4:return Fs(),null;case 10:return Iy(e.type._context),null;case 22:case 23:return Uy(),null;case 24:return null;default:return null}}var dc=!1,Vt=!1,B2=typeof WeakSet=="function"?WeakSet:Set,K=null;function _s(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ke(t,e,r)}else n.current=null}function jm(t,e,n){try{n()}catch(r){Ke(t,e,r)}}var m1=!1;function z2(t,e){if(Em=dd,t=wS(),_y(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,u=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(u=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(v=f.firstChild)!==null;)m=f,f=v;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=s),m===o&&++d===r&&(u=s),(v=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=v}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tm={focusedElem:t,selectionRange:n},dd=!1,K=e;K!==null;)if(e=K,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,K=t;else for(;K!==null;){e=K;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var I=w.memoizedProps,R=w.memoizedState,S=e.stateNode,E=S.getSnapshotBeforeUpdate(e.elementType===e.type?I:Hn(e.type,I),R);S.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(A){Ke(e,e.return,A)}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}return w=m1,m1=!1,w}function hl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&jm(e,n,o)}i=i.next}while(i!==r)}}function wh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Fm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function gx(t){var e=t.alternate;e!==null&&(t.alternate=null,gx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[lr],delete e[Ml],delete e[Im],delete e[I2],delete e[C2])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function yx(t){return t.tag===5||t.tag===3||t.tag===4}function g1(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||yx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $m(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=pd));else if(r!==4&&(t=t.child,t!==null))for($m(t,e,n),t=t.sibling;t!==null;)$m(t,e,n),t=t.sibling}function Um(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Um(t,e,n),t=t.sibling;t!==null;)Um(t,e,n),t=t.sibling}var Tt=null,Wn=!1;function ri(t,e,n){for(n=n.child;n!==null;)vx(t,e,n),n=n.sibling}function vx(t,e,n){if(ur&&typeof ur.onCommitFiberUnmount=="function")try{ur.onCommitFiberUnmount(hh,n)}catch{}switch(n.tag){case 5:Vt||_s(n,e);case 6:var r=Tt,i=Wn;Tt=null,ri(t,e,n),Tt=r,Wn=i,Tt!==null&&(Wn?(t=Tt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Tt.removeChild(n.stateNode));break;case 18:Tt!==null&&(Wn?(t=Tt,n=n.stateNode,t.nodeType===8?pp(t.parentNode,n):t.nodeType===1&&pp(t,n),kl(t)):pp(Tt,n.stateNode));break;case 4:r=Tt,i=Wn,Tt=n.stateNode.containerInfo,Wn=!0,ri(t,e,n),Tt=r,Wn=i;break;case 0:case 11:case 14:case 15:if(!Vt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&jm(n,e,s),i=i.next}while(i!==r)}ri(t,e,n);break;case 1:if(!Vt&&(_s(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ke(n,e,a)}ri(t,e,n);break;case 21:ri(t,e,n);break;case 22:n.mode&1?(Vt=(r=Vt)||n.memoizedState!==null,ri(t,e,n),Vt=r):ri(t,e,n);break;default:ri(t,e,n)}}function y1(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new B2),e.forEach(function(r){var i=J2.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function zn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Tt=a.stateNode,Wn=!1;break e;case 3:Tt=a.stateNode.containerInfo,Wn=!0;break e;case 4:Tt=a.stateNode.containerInfo,Wn=!0;break e}a=a.return}if(Tt===null)throw Error(B(160));vx(o,s,i),Tt=null,Wn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ke(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)_x(e,t),e=e.sibling}function _x(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zn(e,t),nr(t),r&4){try{hl(3,t,t.return),wh(3,t)}catch(I){Ke(t,t.return,I)}try{hl(5,t,t.return)}catch(I){Ke(t,t.return,I)}}break;case 1:zn(e,t),nr(t),r&512&&n!==null&&_s(n,n.return);break;case 5:if(zn(e,t),nr(t),r&512&&n!==null&&_s(n,n.return),t.flags&32){var i=t.stateNode;try{Cl(i,"")}catch(I){Ke(t,t.return,I)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&UT(i,o),dm(a,s);var c=dm(a,o);for(s=0;s<u.length;s+=2){var d=u[s],f=u[s+1];d==="style"?qT(i,f):d==="dangerouslySetInnerHTML"?HT(i,f):d==="children"?Cl(i,f):sy(i,d,f,c)}switch(a){case"input":sm(i,o);break;case"textarea":BT(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Ss(i,!!o.multiple,v,!1):m!==!!o.multiple&&(o.defaultValue!=null?Ss(i,!!o.multiple,o.defaultValue,!0):Ss(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ml]=o}catch(I){Ke(t,t.return,I)}}break;case 6:if(zn(e,t),nr(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(I){Ke(t,t.return,I)}}break;case 3:if(zn(e,t),nr(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{kl(e.containerInfo)}catch(I){Ke(t,t.return,I)}break;case 4:zn(e,t),nr(t);break;case 13:zn(e,t),nr(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Fy=Ze())),r&4&&y1(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Vt=(c=Vt)||d,zn(e,t),Vt=c):zn(e,t),nr(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(K=t,d=t.child;d!==null;){for(f=K=d;K!==null;){switch(m=K,v=m.child,m.tag){case 0:case 11:case 14:case 15:hl(4,m,m.return);break;case 1:_s(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(I){Ke(r,n,I)}}break;case 5:_s(m,m.return);break;case 22:if(m.memoizedState!==null){_1(f);continue}}v!==null?(v.return=m,K=v):_1(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,u=f.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=WT("display",s))}catch(I){Ke(t,t.return,I)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(I){Ke(t,t.return,I)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:zn(e,t),nr(t),r&4&&y1(t);break;case 21:break;default:zn(e,t),nr(t)}}function nr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(yx(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Cl(i,""),r.flags&=-33);var o=g1(t);Um(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=g1(t);$m(t,a,s);break;default:throw Error(B(161))}}catch(u){Ke(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function H2(t,e,n){K=t,wx(t)}function wx(t,e,n){for(var r=(t.mode&1)!==0;K!==null;){var i=K,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||dc;if(!s){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Vt;a=dc;var c=Vt;if(dc=s,(Vt=u)&&!c)for(K=i;K!==null;)s=K,u=s.child,s.tag===22&&s.memoizedState!==null?w1(i):u!==null?(u.return=s,K=u):w1(i);for(;o!==null;)K=o,wx(o),o=o.sibling;K=i,dc=a,Vt=c}v1(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,K=o):v1(t)}}function v1(t){for(;K!==null;){var e=K;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vt||wh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Vt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Hn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&n1(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}n1(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&kl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Vt||e.flags&512&&Fm(e)}catch(m){Ke(e,e.return,m)}}if(e===t){K=null;break}if(n=e.sibling,n!==null){n.return=e.return,K=n;break}K=e.return}}function _1(t){for(;K!==null;){var e=K;if(e===t){K=null;break}var n=e.sibling;if(n!==null){n.return=e.return,K=n;break}K=e.return}}function w1(t){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{wh(4,e)}catch(u){Ke(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ke(e,i,u)}}var o=e.return;try{Fm(e)}catch(u){Ke(e,o,u)}break;case 5:var s=e.return;try{Fm(e)}catch(u){Ke(e,s,u)}}}catch(u){Ke(e,e.return,u)}if(e===t){K=null;break}var a=e.sibling;if(a!==null){a.return=e.return,K=a;break}K=e.return}}var W2=Math.ceil,Id=Jr.ReactCurrentDispatcher,Vy=Jr.ReactCurrentOwner,Mn=Jr.ReactCurrentBatchConfig,_e=0,gt=null,at=null,Ct=0,hn=0,ws=Bi(0),dt=0,Ul=null,Ao=0,Eh=0,jy=0,fl=null,Jt=null,Fy=0,Us=1/0,br=null,Cd=!1,Bm=null,xi=null,hc=!1,mi=null,Ad=0,pl=0,zm=null,jc=-1,Fc=0;function qt(){return _e&6?Ze():jc!==-1?jc:jc=Ze()}function Ii(t){return t.mode&1?_e&2&&Ct!==0?Ct&-Ct:b2.transition!==null?(Fc===0&&(Fc=iS()),Fc):(t=Ce,t!==0||(t=window.event,t=t===void 0?16:dS(t.type)),t):1}function Yn(t,e,n,r){if(50<pl)throw pl=0,zm=null,Error(B(185));hu(t,n,r),(!(_e&2)||t!==gt)&&(t===gt&&(!(_e&2)&&(Eh|=n),dt===4&&ui(t,Ct)),on(t,r),n===1&&_e===0&&!(e.mode&1)&&(Us=Ze()+500,yh&&zi()))}function on(t,e){var n=t.callbackNode;bk(t,e);var r=cd(t,t===gt?Ct:0);if(r===0)n!==null&&R_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&R_(n),e===1)t.tag===0?A2(E1.bind(null,t)):kS(E1.bind(null,t)),S2(function(){!(_e&6)&&zi()}),n=null;else{switch(oS(r)){case 1:n=dy;break;case 4:n=nS;break;case 16:n=ud;break;case 536870912:n=rS;break;default:n=ud}n=bx(n,Ex.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ex(t,e){if(jc=-1,Fc=0,_e&6)throw Error(B(327));var n=t.callbackNode;if(bs()&&t.callbackNode!==n)return null;var r=cd(t,t===gt?Ct:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=bd(t,r);else{e=r;var i=_e;_e|=2;var o=Sx();(gt!==t||Ct!==e)&&(br=null,Us=Ze()+500,mo(t,e));do try{K2();break}catch(a){Tx(t,a)}while(!0);xy(),Id.current=o,_e=i,at!==null?e=0:(gt=null,Ct=0,e=dt)}if(e!==0){if(e===2&&(i=gm(t),i!==0&&(r=i,e=Hm(t,i))),e===1)throw n=Ul,mo(t,0),ui(t,r),on(t,Ze()),n;if(e===6)ui(t,r);else{if(i=t.current.alternate,!(r&30)&&!q2(i)&&(e=bd(t,r),e===2&&(o=gm(t),o!==0&&(r=o,e=Hm(t,o))),e===1))throw n=Ul,mo(t,0),ui(t,r),on(t,Ze()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:no(t,Jt,br);break;case 3:if(ui(t,r),(r&130023424)===r&&(e=Fy+500-Ze(),10<e)){if(cd(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){qt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=xm(no.bind(null,t,Jt,br),e);break}no(t,Jt,br);break;case 4:if(ui(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-Qn(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*W2(r/1960))-r,10<r){t.timeoutHandle=xm(no.bind(null,t,Jt,br),r);break}no(t,Jt,br);break;case 5:no(t,Jt,br);break;default:throw Error(B(329))}}}return on(t,Ze()),t.callbackNode===n?Ex.bind(null,t):null}function Hm(t,e){var n=fl;return t.current.memoizedState.isDehydrated&&(mo(t,e).flags|=256),t=bd(t,e),t!==2&&(e=Jt,Jt=n,e!==null&&Wm(e)),t}function Wm(t){Jt===null?Jt=t:Jt.push.apply(Jt,t)}function q2(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Zn(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ui(t,e){for(e&=~jy,e&=~Eh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qn(e),r=1<<n;t[n]=-1,e&=~r}}function E1(t){if(_e&6)throw Error(B(327));bs();var e=cd(t,0);if(!(e&1))return on(t,Ze()),null;var n=bd(t,e);if(t.tag!==0&&n===2){var r=gm(t);r!==0&&(e=r,n=Hm(t,r))}if(n===1)throw n=Ul,mo(t,0),ui(t,e),on(t,Ze()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,no(t,Jt,br),on(t,Ze()),null}function $y(t,e){var n=_e;_e|=1;try{return t(e)}finally{_e=n,_e===0&&(Us=Ze()+500,yh&&zi())}}function bo(t){mi!==null&&mi.tag===0&&!(_e&6)&&bs();var e=_e;_e|=1;var n=Mn.transition,r=Ce;try{if(Mn.transition=null,Ce=1,t)return t()}finally{Ce=r,Mn.transition=n,_e=e,!(_e&6)&&zi()}}function Uy(){hn=ws.current,Le(ws)}function mo(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,T2(n)),at!==null)for(n=at.return;n!==null;){var r=n;switch(Ey(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&md();break;case 3:Fs(),Le(nn),Le($t),ky();break;case 5:Ry(r);break;case 4:Fs();break;case 13:Le(Ue);break;case 19:Le(Ue);break;case 10:Iy(r.type._context);break;case 22:case 23:Uy()}n=n.return}if(gt=t,at=t=Ci(t.current,null),Ct=hn=e,dt=0,Ul=null,jy=Eh=Ao=0,Jt=fl=null,lo!==null){for(e=0;e<lo.length;e++)if(n=lo[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}lo=null}return t}function Tx(t,e){do{var n=at;try{if(xy(),Mc.current=xd,Sd){for(var r=Be.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Sd=!1}if(Co=0,pt=ct=Be=null,dl=!1,jl=0,Vy.current=null,n===null||n.return===null){dt=1,Ul=e,at=null;break}e:{var o=t,s=n.return,a=n,u=e;if(e=Ct,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=l1(s);if(v!==null){v.flags&=-257,u1(v,s,a,o,e),v.mode&1&&a1(o,c,e),e=v,u=c;var w=e.updateQueue;if(w===null){var I=new Set;I.add(u),e.updateQueue=I}else w.add(u);break e}else{if(!(e&1)){a1(o,c,e),By();break e}u=Error(B(426))}}else if(Fe&&a.mode&1){var R=l1(s);if(R!==null){!(R.flags&65536)&&(R.flags|=256),u1(R,s,a,o,e),Ty($s(u,a));break e}}o=u=$s(u,a),dt!==4&&(dt=2),fl===null?fl=[o]:fl.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var S=ox(o,u,e);t1(o,S);break e;case 1:a=u;var E=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof E.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(xi===null||!xi.has(y)))){o.flags|=65536,e&=-e,o.lanes|=e;var A=sx(o,a,e);t1(o,A);break e}}o=o.return}while(o!==null)}Ix(n)}catch(D){e=D,at===n&&n!==null&&(at=n=n.return);continue}break}while(!0)}function Sx(){var t=Id.current;return Id.current=xd,t===null?xd:t}function By(){(dt===0||dt===3||dt===2)&&(dt=4),gt===null||!(Ao&268435455)&&!(Eh&268435455)||ui(gt,Ct)}function bd(t,e){var n=_e;_e|=2;var r=Sx();(gt!==t||Ct!==e)&&(br=null,mo(t,e));do try{G2();break}catch(i){Tx(t,i)}while(!0);if(xy(),_e=n,Id.current=r,at!==null)throw Error(B(261));return gt=null,Ct=0,dt}function G2(){for(;at!==null;)xx(at)}function K2(){for(;at!==null&&!_k();)xx(at)}function xx(t){var e=Ax(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?Ix(t):at=e,Vy.current=null}function Ix(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=U2(n,e),n!==null){n.flags&=32767,at=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{dt=6,at=null;return}}else if(n=$2(n,e,hn),n!==null){at=n;return}if(e=e.sibling,e!==null){at=e;return}at=e=t}while(e!==null);dt===0&&(dt=5)}function no(t,e,n){var r=Ce,i=Mn.transition;try{Mn.transition=null,Ce=1,Q2(t,e,n,r)}finally{Mn.transition=i,Ce=r}return null}function Q2(t,e,n,r){do bs();while(mi!==null);if(_e&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(Rk(t,o),t===gt&&(at=gt=null,Ct=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hc||(hc=!0,bx(ud,function(){return bs(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Mn.transition,Mn.transition=null;var s=Ce;Ce=1;var a=_e;_e|=4,Vy.current=null,z2(t,n),_x(n,t),m2(Tm),dd=!!Em,Tm=Em=null,t.current=n,H2(n),wk(),_e=a,Ce=s,Mn.transition=o}else t.current=n;if(hc&&(hc=!1,mi=t,Ad=i),o=t.pendingLanes,o===0&&(xi=null),Sk(n.stateNode),on(t,Ze()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Cd)throw Cd=!1,t=Bm,Bm=null,t;return Ad&1&&t.tag!==0&&bs(),o=t.pendingLanes,o&1?t===zm?pl++:(pl=0,zm=t):pl=0,zi(),null}function bs(){if(mi!==null){var t=oS(Ad),e=Mn.transition,n=Ce;try{if(Mn.transition=null,Ce=16>t?16:t,mi===null)var r=!1;else{if(t=mi,mi=null,Ad=0,_e&6)throw Error(B(331));var i=_e;for(_e|=4,K=t.current;K!==null;){var o=K,s=o.child;if(K.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(K=c;K!==null;){var d=K;switch(d.tag){case 0:case 11:case 15:hl(8,d,o)}var f=d.child;if(f!==null)f.return=d,K=f;else for(;K!==null;){d=K;var m=d.sibling,v=d.return;if(gx(d),d===c){K=null;break}if(m!==null){m.return=v,K=m;break}K=v}}}var w=o.alternate;if(w!==null){var I=w.child;if(I!==null){w.child=null;do{var R=I.sibling;I.sibling=null,I=R}while(I!==null)}}K=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,K=s;else e:for(;K!==null;){if(o=K,o.flags&2048)switch(o.tag){case 0:case 11:case 15:hl(9,o,o.return)}var S=o.sibling;if(S!==null){S.return=o.return,K=S;break e}K=o.return}}var E=t.current;for(K=E;K!==null;){s=K;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,K=y;else e:for(s=E;K!==null;){if(a=K,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:wh(9,a)}}catch(D){Ke(a,a.return,D)}if(a===s){K=null;break e}var A=a.sibling;if(A!==null){A.return=a.return,K=A;break e}K=a.return}}if(_e=i,zi(),ur&&typeof ur.onPostCommitFiberRoot=="function")try{ur.onPostCommitFiberRoot(hh,t)}catch{}r=!0}return r}finally{Ce=n,Mn.transition=e}}return!1}function T1(t,e,n){e=$s(n,e),e=ox(t,e,1),t=Si(t,e,1),e=qt(),t!==null&&(hu(t,1,e),on(t,e))}function Ke(t,e,n){if(t.tag===3)T1(t,t,n);else for(;e!==null;){if(e.tag===3){T1(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xi===null||!xi.has(r))){t=$s(n,t),t=sx(e,t,1),e=Si(e,t,1),t=qt(),e!==null&&(hu(e,1,t),on(e,t));break}}e=e.return}}function Y2(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=qt(),t.pingedLanes|=t.suspendedLanes&n,gt===t&&(Ct&n)===n&&(dt===4||dt===3&&(Ct&130023424)===Ct&&500>Ze()-Fy?mo(t,0):jy|=n),on(t,e)}function Cx(t,e){e===0&&(t.mode&1?(e=nc,nc<<=1,!(nc&130023424)&&(nc=4194304)):e=1);var n=qt();t=Br(t,e),t!==null&&(hu(t,e,n),on(t,n))}function X2(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Cx(t,n)}function J2(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),Cx(t,n)}var Ax;Ax=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||nn.current)en=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return en=!1,F2(t,e,n);en=!!(t.flags&131072)}else en=!1,Fe&&e.flags&1048576&&PS(e,vd,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Vc(t,e),t=e.pendingProps;var i=Ls(e,$t.current);As(e,n),i=Ny(null,e,r,t,i,n);var o=Oy();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rn(r)?(o=!0,gd(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ay(e),i.updater=_h,e.stateNode=i,i._reactInternals=e,Pm(e,r,t,n),e=Dm(null,e,r,!0,o,n)):(e.tag=0,Fe&&o&&wy(e),Wt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Vc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=eP(r),t=Hn(r,t),i){case 0:e=Om(null,e,r,t,n);break e;case 1:e=h1(null,e,r,t,n);break e;case 11:e=c1(null,e,r,t,n);break e;case 14:e=d1(null,e,r,Hn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Hn(r,i),Om(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Hn(r,i),h1(t,e,r,i,n);case 3:e:{if(cx(e),t===null)throw Error(B(387));r=e.pendingProps,o=e.memoizedState,i=o.element,VS(t,e),Ed(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=$s(Error(B(423)),e),e=f1(t,e,r,n,i);break e}else if(r!==i){i=$s(Error(B(424)),e),e=f1(t,e,r,n,i);break e}else for(pn=Ti(e.stateNode.containerInfo.firstChild),vn=e,Fe=!0,qn=null,n=MS(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vs(),r===i){e=zr(t,e,n);break e}Wt(t,e,r,n)}e=e.child}return e;case 5:return jS(e),t===null&&bm(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,Sm(r,i)?s=null:o!==null&&Sm(r,o)&&(e.flags|=32),ux(t,e),Wt(t,e,s,n),e.child;case 6:return t===null&&bm(e),null;case 13:return dx(t,e,n);case 4:return by(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=js(e,null,r,n):Wt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Hn(r,i),c1(t,e,r,i,n);case 7:return Wt(t,e,e.pendingProps,n),e.child;case 8:return Wt(t,e,e.pendingProps.children,n),e.child;case 12:return Wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,Pe(_d,r._currentValue),r._currentValue=s,o!==null)if(Zn(o.value,s)){if(o.children===i.children&&!nn.current){e=zr(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Fr(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Rm(o.return,n,e),a.lanes|=n;break}u=u.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(B(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Rm(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Wt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,As(e,n),i=Vn(i),r=r(i),e.flags|=1,Wt(t,e,r,n),e.child;case 14:return r=e.type,i=Hn(r,e.pendingProps),i=Hn(r.type,i),d1(t,e,r,i,n);case 15:return ax(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Hn(r,i),Vc(t,e),e.tag=1,rn(r)?(t=!0,gd(e)):t=!1,As(e,n),ix(e,r,i),Pm(e,r,i,n),Dm(null,e,r,!0,t,n);case 19:return hx(t,e,n);case 22:return lx(t,e,n)}throw Error(B(156,e.tag))};function bx(t,e){return tS(t,e)}function Z2(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(t,e,n,r){return new Z2(t,e,n,r)}function zy(t){return t=t.prototype,!(!t||!t.isReactComponent)}function eP(t){if(typeof t=="function")return zy(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ly)return 11;if(t===uy)return 14}return 2}function Ci(t,e){var n=t.alternate;return n===null?(n=Dn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function $c(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")zy(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case cs:return go(n.children,i,o,e);case ay:s=8,i|=8;break;case tm:return t=Dn(12,n,e,i|2),t.elementType=tm,t.lanes=o,t;case nm:return t=Dn(13,n,e,i),t.elementType=nm,t.lanes=o,t;case rm:return t=Dn(19,n,e,i),t.elementType=rm,t.lanes=o,t;case jT:return Th(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case LT:s=10;break e;case VT:s=9;break e;case ly:s=11;break e;case uy:s=14;break e;case si:s=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=Dn(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function go(t,e,n,r){return t=Dn(7,t,r,e),t.lanes=n,t}function Th(t,e,n,r){return t=Dn(22,t,r,e),t.elementType=jT,t.lanes=n,t.stateNode={isHidden:!1},t}function Tp(t,e,n){return t=Dn(6,t,null,e),t.lanes=n,t}function Sp(t,e,n){return e=Dn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function tP(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rp(0),this.expirationTimes=rp(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rp(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Hy(t,e,n,r,i,o,s,a,u){return t=new tP(t,e,n,a,u),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Dn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ay(o),t}function nP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:us,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Rx(t){if(!t)return Ni;t=t._reactInternals;e:{if(Vo(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(rn(n))return RS(t,n,e)}return e}function kx(t,e,n,r,i,o,s,a,u){return t=Hy(n,r,!0,t,i,o,s,a,u),t.context=Rx(null),n=t.current,r=qt(),i=Ii(n),o=Fr(r,i),o.callback=e??null,Si(n,o,i),t.current.lanes=i,hu(t,i,r),on(t,r),t}function Sh(t,e,n,r){var i=e.current,o=qt(),s=Ii(i);return n=Rx(n),e.context===null?e.context=n:e.pendingContext=n,e=Fr(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Si(i,e,s),t!==null&&(Yn(t,i,s,o),Dc(t,i,s)),s}function Rd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function S1(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Wy(t,e){S1(t,e),(t=t.alternate)&&S1(t,e)}function rP(){return null}var Px=typeof reportError=="function"?reportError:function(t){console.error(t)};function qy(t){this._internalRoot=t}xh.prototype.render=qy.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));Sh(t,e,null,null)};xh.prototype.unmount=qy.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;bo(function(){Sh(null,t,null,null)}),e[Ur]=null}};function xh(t){this._internalRoot=t}xh.prototype.unstable_scheduleHydration=function(t){if(t){var e=lS();t={blockedOn:null,target:t,priority:e};for(var n=0;n<li.length&&e!==0&&e<li[n].priority;n++);li.splice(n,0,t),n===0&&cS(t)}};function Gy(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ih(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function x1(){}function iP(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Rd(s);o.call(c)}}var s=kx(e,r,t,0,null,!1,!1,"",x1);return t._reactRootContainer=s,t[Ur]=s.current,Ol(t.nodeType===8?t.parentNode:t),bo(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Rd(u);a.call(c)}}var u=Hy(t,0,!1,null,null,!1,!1,"",x1);return t._reactRootContainer=u,t[Ur]=u.current,Ol(t.nodeType===8?t.parentNode:t),bo(function(){Sh(e,u,n,r)}),u}function Ch(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var u=Rd(s);a.call(u)}}Sh(e,s,t,i)}else s=iP(n,e,t,i,r);return Rd(s)}sS=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Qa(e.pendingLanes);n!==0&&(hy(e,n|1),on(e,Ze()),!(_e&6)&&(Us=Ze()+500,zi()))}break;case 13:bo(function(){var r=Br(t,1);if(r!==null){var i=qt();Yn(r,t,1,i)}}),Wy(t,1)}};fy=function(t){if(t.tag===13){var e=Br(t,134217728);if(e!==null){var n=qt();Yn(e,t,134217728,n)}Wy(t,134217728)}};aS=function(t){if(t.tag===13){var e=Ii(t),n=Br(t,e);if(n!==null){var r=qt();Yn(n,t,e,r)}Wy(t,e)}};lS=function(){return Ce};uS=function(t,e){var n=Ce;try{return Ce=t,e()}finally{Ce=n}};fm=function(t,e,n){switch(e){case"input":if(sm(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=gh(r);if(!i)throw Error(B(90));$T(r),sm(r,i)}}}break;case"textarea":BT(t,n);break;case"select":e=n.value,e!=null&&Ss(t,!!n.multiple,e,!1)}};QT=$y;YT=bo;var oP={usingClientEntryPoint:!1,Events:[pu,ps,gh,GT,KT,$y]},Ua={findFiberByHostInstance:ao,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sP={bundleType:Ua.bundleType,version:Ua.version,rendererPackageName:Ua.rendererPackageName,rendererConfig:Ua.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ZT(t),t===null?null:t.stateNode},findFiberByHostInstance:Ua.findFiberByHostInstance||rP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fc.isDisabled&&fc.supportsFiber)try{hh=fc.inject(sP),ur=fc}catch{}}xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oP;xn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gy(e))throw Error(B(200));return nP(t,e,null,n)};xn.createRoot=function(t,e){if(!Gy(t))throw Error(B(299));var n=!1,r="",i=Px;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Hy(t,1,!1,null,null,n,!1,r,i),t[Ur]=e.current,Ol(t.nodeType===8?t.parentNode:t),new qy(e)};xn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=ZT(e),t=t===null?null:t.stateNode,t};xn.flushSync=function(t){return bo(t)};xn.hydrate=function(t,e,n){if(!Ih(e))throw Error(B(200));return Ch(null,t,e,!0,n)};xn.hydrateRoot=function(t,e,n){if(!Gy(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Px;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=kx(e,null,t,1,n??null,i,!1,o,s),t[Ur]=e.current,Ol(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new xh(e)};xn.render=function(t,e,n){if(!Ih(e))throw Error(B(200));return Ch(null,t,e,!1,n)};xn.unmountComponentAtNode=function(t){if(!Ih(t))throw Error(B(40));return t._reactRootContainer?(bo(function(){Ch(null,null,t,!1,function(){t._reactRootContainer=null,t[Ur]=null})}),!0):!1};xn.unstable_batchedUpdates=$y;xn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ih(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return Ch(t,e,n,!1,r)};xn.version="18.3.1-next-f1338f8080-20240426";function Nx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nx)}catch(t){console.error(t)}}Nx(),NT.exports=xn;var Ky=NT.exports;const pc=wT(Ky);var Ox,I1=Ky;Ox=I1.createRoot,I1.hydrateRoot;var tn=function(){return tn=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},tn.apply(this,arguments)};function kd(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}var De="-ms-",ml="-moz-",Se="-webkit-",Dx="comm",Ah="rule",Qy="decl",aP="@import",Mx="@keyframes",lP="@layer",Lx=Math.abs,Yy=String.fromCharCode,qm=Object.assign;function uP(t,e){return mt(t,0)^45?(((e<<2^mt(t,0))<<2^mt(t,1))<<2^mt(t,2))<<2^mt(t,3):0}function Vx(t){return t.trim()}function Rr(t,e){return(t=e.exec(t))?t[0]:t}function le(t,e,n){return t.replace(e,n)}function Uc(t,e,n){return t.indexOf(e,n)}function mt(t,e){return t.charCodeAt(e)|0}function Bs(t,e,n){return t.slice(e,n)}function or(t){return t.length}function jx(t){return t.length}function Xa(t,e){return e.push(t),t}function cP(t,e){return t.map(e).join("")}function C1(t,e){return t.filter(function(n){return!Rr(n,e)})}var bh=1,zs=1,Fx=0,Fn=0,ot=0,da="";function Rh(t,e,n,r,i,o,s,a){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:bh,column:zs,length:s,return:"",siblings:a}}function oi(t,e){return qm(Rh("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Xo(t){for(;t.root;)t=oi(t.root,{children:[t]});Xa(t,t.siblings)}function dP(){return ot}function hP(){return ot=Fn>0?mt(da,--Fn):0,zs--,ot===10&&(zs=1,bh--),ot}function Xn(){return ot=Fn<Fx?mt(da,Fn++):0,zs++,ot===10&&(zs=1,bh++),ot}function yo(){return mt(da,Fn)}function Bc(){return Fn}function kh(t,e){return Bs(da,t,e)}function Gm(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function fP(t){return bh=zs=1,Fx=or(da=t),Fn=0,[]}function pP(t){return da="",t}function xp(t){return Vx(kh(Fn-1,Km(t===91?t+2:t===40?t+1:t)))}function mP(t){for(;(ot=yo())&&ot<33;)Xn();return Gm(t)>2||Gm(ot)>3?"":" "}function gP(t,e){for(;--e&&Xn()&&!(ot<48||ot>102||ot>57&&ot<65||ot>70&&ot<97););return kh(t,Bc()+(e<6&&yo()==32&&Xn()==32))}function Km(t){for(;Xn();)switch(ot){case t:return Fn;case 34:case 39:t!==34&&t!==39&&Km(ot);break;case 40:t===41&&Km(t);break;case 92:Xn();break}return Fn}function yP(t,e){for(;Xn()&&t+ot!==57;)if(t+ot===84&&yo()===47)break;return"/*"+kh(e,Fn-1)+"*"+Yy(t===47?t:Xn())}function vP(t){for(;!Gm(yo());)Xn();return kh(t,Fn)}function _P(t){return pP(zc("",null,null,null,[""],t=fP(t),0,[0],t))}function zc(t,e,n,r,i,o,s,a,u){for(var c=0,d=0,f=s,m=0,v=0,w=0,I=1,R=1,S=1,E=0,y="",A=i,D=o,M=r,T=y;R;)switch(w=E,E=Xn()){case 40:if(w!=108&&mt(T,f-1)==58){Uc(T+=le(xp(E),"&","&\f"),"&\f",Lx(c?a[c-1]:0))!=-1&&(S=-1);break}case 34:case 39:case 91:T+=xp(E);break;case 9:case 10:case 13:case 32:T+=mP(w);break;case 92:T+=gP(Bc()-1,7);continue;case 47:switch(yo()){case 42:case 47:Xa(wP(yP(Xn(),Bc()),e,n,u),u);break;default:T+="/"}break;case 123*I:a[c++]=or(T)*S;case 125*I:case 59:case 0:switch(E){case 0:case 125:R=0;case 59+d:S==-1&&(T=le(T,/\f/g,"")),v>0&&or(T)-f&&Xa(v>32?b1(T+";",r,n,f-1,u):b1(le(T," ","")+";",r,n,f-2,u),u);break;case 59:T+=";";default:if(Xa(M=A1(T,e,n,c,d,i,a,y,A=[],D=[],f,o),o),E===123)if(d===0)zc(T,e,M,M,A,o,f,a,D);else switch(m===99&&mt(T,3)===110?100:m){case 100:case 108:case 109:case 115:zc(t,M,M,r&&Xa(A1(t,M,M,0,0,i,a,y,i,A=[],f,D),D),i,D,f,a,r?A:D);break;default:zc(T,M,M,M,[""],D,0,a,D)}}c=d=v=0,I=S=1,y=T="",f=s;break;case 58:f=1+or(T),v=w;default:if(I<1){if(E==123)--I;else if(E==125&&I++==0&&hP()==125)continue}switch(T+=Yy(E),E*I){case 38:S=d>0?1:(T+="\f",-1);break;case 44:a[c++]=(or(T)-1)*S,S=1;break;case 64:yo()===45&&(T+=xp(Xn())),m=yo(),d=f=or(y=T+=vP(Bc())),E++;break;case 45:w===45&&or(T)==2&&(I=0)}}return o}function A1(t,e,n,r,i,o,s,a,u,c,d,f){for(var m=i-1,v=i===0?o:[""],w=jx(v),I=0,R=0,S=0;I<r;++I)for(var E=0,y=Bs(t,m+1,m=Lx(R=s[I])),A=t;E<w;++E)(A=Vx(R>0?v[E]+" "+y:le(y,/&\f/g,v[E])))&&(u[S++]=A);return Rh(t,e,n,i===0?Ah:a,u,c,d,f)}function wP(t,e,n,r){return Rh(t,e,n,Dx,Yy(dP()),Bs(t,2,-2),0,r)}function b1(t,e,n,r,i){return Rh(t,e,n,Qy,Bs(t,0,r),Bs(t,r+1,-1),r,i)}function $x(t,e,n){switch(uP(t,e)){case 5103:return Se+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Se+t+t;case 4789:return ml+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Se+t+ml+t+De+t+t;case 5936:switch(mt(t,e+11)){case 114:return Se+t+De+le(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Se+t+De+le(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Se+t+De+le(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Se+t+De+t+t;case 6165:return Se+t+De+"flex-"+t+t;case 5187:return Se+t+le(t,/(\w+).+(:[^]+)/,Se+"box-$1$2"+De+"flex-$1$2")+t;case 5443:return Se+t+De+"flex-item-"+le(t,/flex-|-self/g,"")+(Rr(t,/flex-|baseline/)?"":De+"grid-row-"+le(t,/flex-|-self/g,""))+t;case 4675:return Se+t+De+"flex-line-pack"+le(t,/align-content|flex-|-self/g,"")+t;case 5548:return Se+t+De+le(t,"shrink","negative")+t;case 5292:return Se+t+De+le(t,"basis","preferred-size")+t;case 6060:return Se+"box-"+le(t,"-grow","")+Se+t+De+le(t,"grow","positive")+t;case 4554:return Se+le(t,/([^-])(transform)/g,"$1"+Se+"$2")+t;case 6187:return le(le(le(t,/(zoom-|grab)/,Se+"$1"),/(image-set)/,Se+"$1"),t,"")+t;case 5495:case 3959:return le(t,/(image-set\([^]*)/,Se+"$1$`$1");case 4968:return le(le(t,/(.+:)(flex-)?(.*)/,Se+"box-pack:$3"+De+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Se+t+t;case 4200:if(!Rr(t,/flex-|baseline/))return De+"grid-column-align"+Bs(t,e)+t;break;case 2592:case 3360:return De+le(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Rr(r.props,/grid-\w+-end/)})?~Uc(t+(n=n[e].value),"span",0)?t:De+le(t,"-start","")+t+De+"grid-row-span:"+(~Uc(n,"span",0)?Rr(n,/\d+/):+Rr(n,/\d+/)-+Rr(t,/\d+/))+";":De+le(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Rr(r.props,/grid-\w+-start/)})?t:De+le(le(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return le(t,/(.+)-inline(.+)/,Se+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(or(t)-1-e>6)switch(mt(t,e+1)){case 109:if(mt(t,e+4)!==45)break;case 102:return le(t,/(.+:)(.+)-([^]+)/,"$1"+Se+"$2-$3$1"+ml+(mt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Uc(t,"stretch",0)?$x(le(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return le(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,u,c){return De+i+":"+o+c+(s?De+i+"-span:"+(a?u:+u-+o)+c:"")+t});case 4949:if(mt(t,e+6)===121)return le(t,":",":"+Se)+t;break;case 6444:switch(mt(t,mt(t,14)===45?18:11)){case 120:return le(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Se+(mt(t,14)===45?"inline-":"")+"box$3$1"+Se+"$2$3$1"+De+"$2box$3")+t;case 100:return le(t,":",":"+De)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return le(t,"scroll-","scroll-snap-")+t}return t}function Pd(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function EP(t,e,n,r){switch(t.type){case lP:if(t.children.length)break;case aP:case Qy:return t.return=t.return||t.value;case Dx:return"";case Mx:return t.return=t.value+"{"+Pd(t.children,r)+"}";case Ah:if(!or(t.value=t.props.join(",")))return""}return or(n=Pd(t.children,r))?t.return=t.value+"{"+n+"}":""}function TP(t){var e=jx(t);return function(n,r,i,o){for(var s="",a=0;a<e;a++)s+=t[a](n,r,i,o)||"";return s}}function SP(t){return function(e){e.root||(e=e.return)&&t(e)}}function xP(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Qy:t.return=$x(t.value,t.length,n);return;case Mx:return Pd([oi(t,{value:le(t.value,"@","@"+Se)})],r);case Ah:if(t.length)return cP(n=t.props,function(i){switch(Rr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Xo(oi(t,{props:[le(i,/:(read-\w+)/,":"+ml+"$1")]})),Xo(oi(t,{props:[i]})),qm(t,{props:C1(n,r)});break;case"::placeholder":Xo(oi(t,{props:[le(i,/:(plac\w+)/,":"+Se+"input-$1")]})),Xo(oi(t,{props:[le(i,/:(plac\w+)/,":"+ml+"$1")]})),Xo(oi(t,{props:[le(i,/:(plac\w+)/,De+"input-$1")]})),Xo(oi(t,{props:[i]})),qm(t,{props:C1(n,r)});break}return""})}}var IP={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},dn={},Hs=typeof process<"u"&&dn!==void 0&&(dn.REACT_APP_SC_ATTR||dn.SC_ATTR)||"data-styled",Ux="active",Bx="data-styled-version",Ph="6.1.13",Xy=`/*!sc*/
`,Nd=typeof window<"u"&&"HTMLElement"in window,CP=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&dn!==void 0&&dn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&dn.REACT_APP_SC_DISABLE_SPEEDY!==""?dn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&dn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&dn!==void 0&&dn.SC_DISABLE_SPEEDY!==void 0&&dn.SC_DISABLE_SPEEDY!==""&&dn.SC_DISABLE_SPEEDY!=="false"&&dn.SC_DISABLE_SPEEDY),Nh=Object.freeze([]),Ws=Object.freeze({});function AP(t,e,n){return n===void 0&&(n=Ws),t.theme!==n.theme&&t.theme||e||n.theme}var zx=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),bP=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,RP=/(^-|-$)/g;function R1(t){return t.replace(bP,"-").replace(RP,"")}var kP=/(a)(d)/gi,mc=52,k1=function(t){return String.fromCharCode(t+(t>25?39:97))};function Qm(t){var e,n="";for(e=Math.abs(t);e>mc;e=e/mc|0)n=k1(e%mc)+n;return(k1(e%mc)+n).replace(kP,"$1-$2")}var Ip,Hx=5381,Es=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},Wx=function(t){return Es(Hx,t)};function PP(t){return Qm(Wx(t)>>>0)}function NP(t){return t.displayName||t.name||"Component"}function Cp(t){return typeof t=="string"&&!0}var qx=typeof Symbol=="function"&&Symbol.for,Gx=qx?Symbol.for("react.memo"):60115,OP=qx?Symbol.for("react.forward_ref"):60112,DP={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},MP={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Kx={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},LP=((Ip={})[OP]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ip[Gx]=Kx,Ip);function P1(t){return("type"in(e=t)&&e.type.$$typeof)===Gx?Kx:"$$typeof"in t?LP[t.$$typeof]:DP;var e}var VP=Object.defineProperty,jP=Object.getOwnPropertyNames,N1=Object.getOwnPropertySymbols,FP=Object.getOwnPropertyDescriptor,$P=Object.getPrototypeOf,O1=Object.prototype;function Qx(t,e,n){if(typeof e!="string"){if(O1){var r=$P(e);r&&r!==O1&&Qx(t,r,n)}var i=jP(e);N1&&(i=i.concat(N1(e)));for(var o=P1(t),s=P1(e),a=0;a<i.length;++a){var u=i[a];if(!(u in MP||n&&n[u]||s&&u in s||o&&u in o)){var c=FP(e,u);try{VP(t,u,c)}catch{}}}}return t}function qs(t){return typeof t=="function"}function Jy(t){return typeof t=="object"&&"styledComponentId"in t}function co(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function D1(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function Bl(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Ym(t,e,n){if(n===void 0&&(n=!1),!n&&!Bl(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Ym(t[r],e[r]);else if(Bl(e))for(var r in e)t[r]=Ym(t[r],e[r]);return t}function Zy(t,e){Object.defineProperty(t,"toString",{value:e})}function gu(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var UP=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;e>=o;)if((o<<=1)<0)throw gu(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),u=(s=0,n.length);s<u;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(Xy);return n},t}(),Hc=new Map,Od=new Map,Wc=1,gc=function(t){if(Hc.has(t))return Hc.get(t);for(;Od.has(Wc);)Wc++;var e=Wc++;return Hc.set(t,e),Od.set(e,t),e},BP=function(t,e){Wc=e+1,Hc.set(t,e),Od.set(e,t)},zP="style[".concat(Hs,"][").concat(Bx,'="').concat(Ph,'"]'),HP=new RegExp("^".concat(Hs,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),WP=function(t,e,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&t.registerName(e,r)},qP=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Xy),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var u=a.match(HP);if(u){var c=0|parseInt(u[1],10),d=u[2];c!==0&&(BP(d,c),WP(t,d,u[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},M1=function(t){for(var e=document.querySelectorAll(zP),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(Hs)!==Ux&&(qP(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function GP(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Yx=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var u=Array.from(a.querySelectorAll("style[".concat(Hs,"]")));return u[u.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Hs,Ux),r.setAttribute(Bx,Ph);var s=GP();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},KP=function(){function t(e){this.element=Yx(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw gu(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),QP=function(){function t(e){this.element=Yx(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),YP=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),L1=Nd,XP={isServer:!Nd,useCSSOMInjection:!CP},Xx=function(){function t(e,n,r){e===void 0&&(e=Ws),n===void 0&&(n={});var i=this;this.options=tn(tn({},XP),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Nd&&L1&&(L1=!1,M1(this)),Zy(this,function(){return function(o){for(var s=o.getTag(),a=s.length,u="",c=function(f){var m=function(S){return Od.get(S)}(f);if(m===void 0)return"continue";var v=o.names.get(m),w=s.getGroup(f);if(v===void 0||!v.size||w.length===0)return"continue";var I="".concat(Hs,".g").concat(f,'[id="').concat(m,'"]'),R="";v!==void 0&&v.forEach(function(S){S.length>0&&(R+="".concat(S,","))}),u+="".concat(w).concat(I,'{content:"').concat(R,'"}').concat(Xy)},d=0;d<a;d++)c(d);return u}(i)})}return t.registerId=function(e){return gc(e)},t.prototype.rehydrate=function(){!this.server&&Nd&&M1(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(tn(tn({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new YP(i):r?new KP(i):new QP(i)}(this.options),new UP(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(gc(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(gc(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(gc(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),JP=/&/g,ZP=/^\s*\/\/.*$/gm;function Jx(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Jx(n.children,e)),n})}function eN(t){var e,n,r,i=Ws,o=i.options,s=o===void 0?Ws:o,a=i.plugins,u=a===void 0?Nh:a,c=function(m,v,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(e):m},d=u.slice();d.push(function(m){m.type===Ah&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(JP,n).replace(r,c))}),s.prefix&&d.push(xP),d.push(EP);var f=function(m,v,w,I){v===void 0&&(v=""),w===void 0&&(w=""),I===void 0&&(I="&"),e=I,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var R=m.replace(ZP,""),S=_P(w||v?"".concat(w," ").concat(v," { ").concat(R," }"):R);s.namespace&&(S=Jx(S,s.namespace));var E=[];return Pd(S,TP(d.concat(SP(function(y){return E.push(y)})))),E};return f.hash=u.length?u.reduce(function(m,v){return v.name||gu(15),Es(m,v.name)},Hx).toString():"",f}var tN=new Xx,Xm=eN(),Zx=Ft.createContext({shouldForwardProp:void 0,styleSheet:tN,stylis:Xm});Zx.Consumer;Ft.createContext(void 0);function V1(){return O.useContext(Zx)}var nN=function(){function t(e,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Xm);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Zy(this,function(){throw gu(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Xm),this.name+e.hash},t}(),rN=function(t){return t>="A"&&t<="Z"};function j1(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;rN(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var eI=function(t){return t==null||t===!1||t===""},tI=function(t){var e,n,r=[];for(var i in t){var o=t[i];t.hasOwnProperty(i)&&!eI(o)&&(Array.isArray(o)&&o.isCss||qs(o)?r.push("".concat(j1(i),":"),o,";"):Bl(o)?r.push.apply(r,kd(kd(["".concat(i," {")],tI(o),!1),["}"],!1)):r.push("".concat(j1(i),": ").concat((e=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in IP||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function vo(t,e,n,r){if(eI(t))return[];if(Jy(t))return[".".concat(t.styledComponentId)];if(qs(t)){if(!qs(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var i=t(e);return vo(i,e,n,r)}var o;return t instanceof nN?n?(t.inject(n,r),[t.getName(r)]):[t]:Bl(t)?tI(t):Array.isArray(t)?Array.prototype.concat.apply(Nh,t.map(function(s){return vo(s,e,n,r)})):[t.toString()]}function iN(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(qs(n)&&!Jy(n))return!1}return!0}var oN=Wx(Ph),sN=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&iN(e),this.componentId=n,this.baseHash=Es(oN,n),this.baseStyle=r,Xx.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=co(i,this.staticRulesId);else{var o=D1(vo(this.rules,e,n,r)),s=Qm(Es(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=co(i,s),this.staticRulesId=s}else{for(var u=Es(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")c+=f;else if(f){var m=D1(vo(f,e,n,r));u=Es(u,m+d),c+=m}}if(c){var v=Qm(u>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(c,".".concat(v),void 0,this.componentId)),i=co(i,v)}}return i},t}(),nI=Ft.createContext(void 0);nI.Consumer;var Ap={};function aN(t,e,n){var r=Jy(t),i=t,o=!Cp(t),s=e.attrs,a=s===void 0?Nh:s,u=e.componentId,c=u===void 0?function(A,D){var M=typeof A!="string"?"sc":R1(A);Ap[M]=(Ap[M]||0)+1;var T="".concat(M,"-").concat(PP(Ph+M+Ap[M]));return D?"".concat(D,"-").concat(T):T}(e.displayName,e.parentComponentId):u,d=e.displayName,f=d===void 0?function(A){return Cp(A)?"styled.".concat(A):"Styled(".concat(NP(A),")")}(t):d,m=e.displayName&&e.componentId?"".concat(R1(e.displayName),"-").concat(e.componentId):e.componentId||c,v=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,w=e.shouldForwardProp;if(r&&i.shouldForwardProp){var I=i.shouldForwardProp;if(e.shouldForwardProp){var R=e.shouldForwardProp;w=function(A,D){return I(A,D)&&R(A,D)}}else w=I}var S=new sN(n,m,r?i.componentStyle:void 0);function E(A,D){return function(M,T,x){var b=M.attrs,p=M.componentStyle,k=M.defaultProps,N=M.foldedComponentIds,P=M.styledComponentId,Q=M.target,z=Ft.useContext(nI),X=V1(),re=M.shouldForwardProp||X.shouldForwardProp,U=AP(T,z,k)||Ws,W=function(Ve,$e,nt){for(var ln,Bt=tn(tn({},$e),{className:void 0,theme:nt}),ge=0;ge<Ve.length;ge+=1){var Ie=qs(ln=Ve[ge])?ln(Bt):ln;for(var de in Ie)Bt[de]=de==="className"?co(Bt[de],Ie[de]):de==="style"?tn(tn({},Bt[de]),Ie[de]):Ie[de]}return $e.className&&(Bt.className=co(Bt.className,$e.className)),Bt}(b,T,U),J=W.as||Q,ae={};for(var te in W)W[te]===void 0||te[0]==="$"||te==="as"||te==="theme"&&W.theme===U||(te==="forwardedAs"?ae.as=W.forwardedAs:re&&!re(te,J)||(ae[te]=W[te]));var pe=function(Ve,$e){var nt=V1(),ln=Ve.generateAndInjectStyles($e,nt.styleSheet,nt.stylis);return ln}(p,W),me=co(N,P);return pe&&(me+=" "+pe),W.className&&(me+=" "+W.className),ae[Cp(J)&&!zx.has(J)?"class":"className"]=me,ae.ref=x,O.createElement(J,ae)}(y,A,D)}E.displayName=f;var y=Ft.forwardRef(E);return y.attrs=v,y.componentStyle=S,y.displayName=f,y.shouldForwardProp=w,y.foldedComponentIds=r?co(i.foldedComponentIds,i.styledComponentId):"",y.styledComponentId=m,y.target=r?i.target:t,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(A){this._foldedDefaultProps=r?function(D){for(var M=[],T=1;T<arguments.length;T++)M[T-1]=arguments[T];for(var x=0,b=M;x<b.length;x++)Ym(D,b[x],!0);return D}({},i.defaultProps,A):A}}),Zy(y,function(){return".".concat(y.styledComponentId)}),o&&Qx(y,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function F1(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var $1=function(t){return Object.assign(t,{isCss:!0})};function lN(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(qs(t)||Bl(t))return $1(vo(F1(Nh,kd([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?vo(r):$1(vo(F1(r,e)))}function Jm(t,e,n){if(n===void 0&&(n=Ws),!e)throw gu(1,e);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(e,n,lN.apply(void 0,kd([i],o,!1)))};return r.attrs=function(i){return Jm(t,e,tn(tn({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Jm(t,e,tn(tn({},n),i))},r}var rI=function(t){return Jm(aN,t)},q=rI;zx.forEach(function(t){q[t]=rI(t)});function Pr(t){if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function iI(t){if(!Pr(t))return t;const e={};return Object.keys(t).forEach(n=>{e[n]=iI(t[n])}),e}function _n(t,e,n={clone:!0}){const r=n.clone?{...t}:t;return Pr(t)&&Pr(e)&&Object.keys(e).forEach(i=>{Pr(e[i])&&Object.prototype.hasOwnProperty.call(t,i)&&Pr(t[i])?r[i]=_n(t[i],e[i],n):n.clone?r[i]=Pr(e[i])?iI(e[i]):e[i]:r[i]=e[i]}),r}function Ro(t,...e){const n=new URL(`https://mui.com/production-error/?code=${t}`);return e.forEach(r=>n.searchParams.append("args[]",r)),`Minified MUI error #${t}; visit ${n} for the full message.`}function Ln(t){if(typeof t!="string")throw new Error(Ro(7));return t.charAt(0).toUpperCase()+t.slice(1)}function U1(...t){return t.reduce((e,n)=>n==null?e:function(...i){e.apply(this,i),n.apply(this,i)},()=>{})}function uN(t,e=166){let n;function r(...i){const o=()=>{t.apply(this,i)};clearTimeout(n),n=setTimeout(o,e)}return r.clear=()=>{clearTimeout(n)},r}function Hr(t){return t&&t.ownerDocument||document}function Gs(t){return Hr(t).defaultView||window}function Zm(t,e){typeof t=="function"?t(e):t&&(t.current=e)}const eg=typeof window<"u"?O.useLayoutEffect:O.useEffect;function Ts(t){const e=O.useRef(t);return eg(()=>{e.current=t}),O.useRef((...n)=>(0,e.current)(...n)).current}function vr(...t){return O.useMemo(()=>t.every(e=>e==null)?null:e=>{t.forEach(n=>{Zm(n,e)})},t)}const B1={};function oI(t,e){const n=O.useRef(B1);return n.current===B1&&(n.current=t(e)),n}const cN=[];function dN(t){O.useEffect(t,cN)}class e0{constructor(){Oa(this,"currentId",null);Oa(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});Oa(this,"disposeEffect",()=>this.clear)}static create(){return new e0}start(e,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},e)}}function sI(){const t=oI(e0.create).current;return dN(t.disposeEffect),t}function z1(t){try{return t.matches(":focus-visible")}catch{}return!1}function hN(t=window){const e=t.document.documentElement.clientWidth;return t.innerWidth-e}function tg(t,e){const n={...e};for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)){const i=r;if(i==="components"||i==="slots")n[i]={...t[i],...n[i]};else if(i==="componentsProps"||i==="slotProps"){const o=t[i],s=e[i];if(!s)n[i]=o||{};else if(!o)n[i]=s;else{n[i]={...s};for(const a in o)if(Object.prototype.hasOwnProperty.call(o,a)){const u=a;n[i][u]=tg(o[u],s[u])}}}else n[i]===void 0&&(n[i]=t[i])}return n}function jo(t,e,n=void 0){const r={};for(const i in t){const o=t[i];let s="",a=!0;for(let u=0;u<o.length;u+=1){const c=o[u];c&&(s+=(a===!0?"":" ")+e(c),a=!1,n&&n[c]&&(s+=" "+n[c]))}r[i]=s}return r}const H1=t=>t,fN=()=>{let t=H1;return{configure(e){t=e},generate(e){return t(e)},reset(){t=H1}}},pN=fN(),mN={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function Hi(t,e,n="Mui"){const r=mN[e];return r?`${n}-${r}`:`${pN.generate(t)}-${e}`}function Wi(t,e,n="Mui"){const r={};return e.forEach(i=>{r[i]=Hi(t,i,n)}),r}function gN(t,e=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(e,Math.min(t,n))}function yN(t){return typeof t=="string"}function vN(t,e,n){return t===void 0||yN(t)?e:{...e,ownerState:{...e.ownerState,...n}}}function aI(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=aI(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function it(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=aI(t))&&(r&&(r+=" "),r+=e);return r}function lI(t,e=[]){if(t===void 0)return{};const n={};return Object.keys(t).filter(r=>r.match(/^on[A-Z]/)&&typeof t[r]=="function"&&!e.includes(r)).forEach(r=>{n[r]=t[r]}),n}function W1(t){if(t===void 0)return{};const e={};return Object.keys(t).filter(n=>!(n.match(/^on[A-Z]/)&&typeof t[n]=="function")).forEach(n=>{e[n]=t[n]}),e}function _N(t){const{getSlotProps:e,additionalProps:n,externalSlotProps:r,externalForwardedProps:i,className:o}=t;if(!e){const v=it(n==null?void 0:n.className,o,i==null?void 0:i.className,r==null?void 0:r.className),w={...n==null?void 0:n.style,...i==null?void 0:i.style,...r==null?void 0:r.style},I={...n,...i,...r};return v.length>0&&(I.className=v),Object.keys(w).length>0&&(I.style=w),{props:I,internalRef:void 0}}const s=lI({...i,...r}),a=W1(r),u=W1(i),c=e(s),d=it(c==null?void 0:c.className,n==null?void 0:n.className,o,i==null?void 0:i.className,r==null?void 0:r.className),f={...c==null?void 0:c.style,...n==null?void 0:n.style,...i==null?void 0:i.style,...r==null?void 0:r.style},m={...c,...n,...u,...a};return d.length>0&&(m.className=d),Object.keys(f).length>0&&(m.style=f),{props:m,internalRef:c.ref}}function wN(t,e,n){return typeof t=="function"?t(e,n):t}function Oh(t){var e;return parseInt(O.version,10)>=19?((e=t==null?void 0:t.props)==null?void 0:e.ref)||null:(t==null?void 0:t.ref)||null}function gl(t,e){return e?_n(t,e,{clone:!1}):t}function EN(t,e){if(!t.containerQueries)return e;const n=Object.keys(e).filter(r=>r.startsWith("@container")).sort((r,i)=>{var s,a;const o=/min-width:\s*([0-9.]+)/;return+(((s=r.match(o))==null?void 0:s[1])||0)-+(((a=i.match(o))==null?void 0:a[1])||0)});return n.length?n.reduce((r,i)=>{const o=e[i];return delete r[i],r[i]=o,r},{...e}):e}function TN(t,e){return e==="@"||e.startsWith("@")&&(t.some(n=>e.startsWith(`@${n}`))||!!e.match(/^@\d/))}function SN(t,e){const n=e.match(/^@([^/]+)?\/?(.+)?$/);if(!n)return null;const[,r,i]=n,o=Number.isNaN(+r)?r||0:+r;return t.containerQueries(i).up(o)}function xN(t){const e=(o,s)=>o.replace("@media",s?`@container ${s}`:"@container");function n(o,s){o.up=(...a)=>e(t.breakpoints.up(...a),s),o.down=(...a)=>e(t.breakpoints.down(...a),s),o.between=(...a)=>e(t.breakpoints.between(...a),s),o.only=(...a)=>e(t.breakpoints.only(...a),s),o.not=(...a)=>{const u=e(t.breakpoints.not(...a),s);return u.includes("not all and")?u.replace("not all and ","").replace("min-width:","width<").replace("max-width:","width>").replace("and","or"):u}}const r={},i=o=>(n(r,o),r);return n(i),{...t,containerQueries:i}}const Dh={xs:0,sm:600,md:900,lg:1200,xl:1536},q1={keys:["xs","sm","md","lg","xl"],up:t=>`@media (min-width:${Dh[t]}px)`},IN={containerQueries:t=>({up:e=>{let n=typeof e=="number"?e:Dh[e]||e;return typeof n=="number"&&(n=`${n}px`),t?`@container ${t} (min-width:${n})`:`@container (min-width:${n})`}})};function Wr(t,e,n){const r=t.theme||{};if(Array.isArray(e)){const o=r.breakpoints||q1;return e.reduce((s,a,u)=>(s[o.up(o.keys[u])]=n(e[u]),s),{})}if(typeof e=="object"){const o=r.breakpoints||q1;return Object.keys(e).reduce((s,a)=>{if(TN(o.keys,a)){const u=SN(r.containerQueries?r:IN,a);u&&(s[u]=n(e[a],a))}else if(Object.keys(o.values||Dh).includes(a)){const u=o.up(a);s[u]=n(e[a],a)}else{const u=a;s[u]=e[u]}return s},{})}return n(e)}function CN(t={}){var n;return((n=t.keys)==null?void 0:n.reduce((r,i)=>{const o=t.up(i);return r[o]={},r},{}))||{}}function AN(t,e){return t.reduce((n,r)=>{const i=n[r];return(!i||Object.keys(i).length===0)&&delete n[r],n},e)}function Mh(t,e,n=!0){if(!e||typeof e!="string")return null;if(t&&t.vars&&n){const r=`vars.${e}`.split(".").reduce((i,o)=>i&&i[o]?i[o]:null,t);if(r!=null)return r}return e.split(".").reduce((r,i)=>r&&r[i]!=null?r[i]:null,t)}function Dd(t,e,n,r=n){let i;return typeof t=="function"?i=t(n):Array.isArray(t)?i=t[n]||r:i=Mh(t,n)||r,e&&(i=e(i,r,t)),i}function tt(t){const{prop:e,cssProperty:n=t.prop,themeKey:r,transform:i}=t,o=s=>{if(s[e]==null)return null;const a=s[e],u=s.theme,c=Mh(u,r)||{};return Wr(s,a,f=>{let m=Dd(c,i,f);return f===m&&typeof f=="string"&&(m=Dd(c,i,`${e}${f==="default"?"":Ln(f)}`,f)),n===!1?m:{[n]:m}})};return o.propTypes={},o.filterProps=[e],o}function bN(t){const e={};return n=>(e[n]===void 0&&(e[n]=t(n)),e[n])}const RN={m:"margin",p:"padding"},kN={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},G1={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},PN=bN(t=>{if(t.length>2)if(G1[t])t=G1[t];else return[t];const[e,n]=t.split(""),r=RN[e],i=kN[n]||"";return Array.isArray(i)?i.map(o=>r+o):[r+i]}),t0=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],n0=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...t0,...n0];function yu(t,e,n,r){const i=Mh(t,e,!0)??n;return typeof i=="number"||typeof i=="string"?o=>typeof o=="string"?o:typeof i=="string"?`calc(${o} * ${i})`:i*o:Array.isArray(i)?o=>{if(typeof o=="string")return o;const s=Math.abs(o),a=i[s];return o>=0?a:typeof a=="number"?-a:`-${a}`}:typeof i=="function"?i:()=>{}}function r0(t){return yu(t,"spacing",8)}function vu(t,e){return typeof e=="string"||e==null?e:t(e)}function NN(t,e){return n=>t.reduce((r,i)=>(r[i]=vu(e,n),r),{})}function ON(t,e,n,r){if(!e.includes(n))return null;const i=PN(n),o=NN(i,r),s=t[n];return Wr(t,s,o)}function uI(t,e){const n=r0(t.theme);return Object.keys(t).map(r=>ON(t,e,r,n)).reduce(gl,{})}function qe(t){return uI(t,t0)}qe.propTypes={};qe.filterProps=t0;function Ge(t){return uI(t,n0)}Ge.propTypes={};Ge.filterProps=n0;function Lh(...t){const e=t.reduce((r,i)=>(i.filterProps.forEach(o=>{r[o]=i}),r),{}),n=r=>Object.keys(r).reduce((i,o)=>e[o]?gl(i,e[o](r)):i,{});return n.propTypes={},n.filterProps=t.reduce((r,i)=>r.concat(i.filterProps),[]),n}function On(t){return typeof t!="number"?t:`${t}px solid`}function $n(t,e){return tt({prop:t,themeKey:"borders",transform:e})}const DN=$n("border",On),MN=$n("borderTop",On),LN=$n("borderRight",On),VN=$n("borderBottom",On),jN=$n("borderLeft",On),FN=$n("borderColor"),$N=$n("borderTopColor"),UN=$n("borderRightColor"),BN=$n("borderBottomColor"),zN=$n("borderLeftColor"),HN=$n("outline",On),WN=$n("outlineColor"),Vh=t=>{if(t.borderRadius!==void 0&&t.borderRadius!==null){const e=yu(t.theme,"shape.borderRadius",4),n=r=>({borderRadius:vu(e,r)});return Wr(t,t.borderRadius,n)}return null};Vh.propTypes={};Vh.filterProps=["borderRadius"];Lh(DN,MN,LN,VN,jN,FN,$N,UN,BN,zN,Vh,HN,WN);const jh=t=>{if(t.gap!==void 0&&t.gap!==null){const e=yu(t.theme,"spacing",8),n=r=>({gap:vu(e,r)});return Wr(t,t.gap,n)}return null};jh.propTypes={};jh.filterProps=["gap"];const Fh=t=>{if(t.columnGap!==void 0&&t.columnGap!==null){const e=yu(t.theme,"spacing",8),n=r=>({columnGap:vu(e,r)});return Wr(t,t.columnGap,n)}return null};Fh.propTypes={};Fh.filterProps=["columnGap"];const $h=t=>{if(t.rowGap!==void 0&&t.rowGap!==null){const e=yu(t.theme,"spacing",8),n=r=>({rowGap:vu(e,r)});return Wr(t,t.rowGap,n)}return null};$h.propTypes={};$h.filterProps=["rowGap"];const qN=tt({prop:"gridColumn"}),GN=tt({prop:"gridRow"}),KN=tt({prop:"gridAutoFlow"}),QN=tt({prop:"gridAutoColumns"}),YN=tt({prop:"gridAutoRows"}),XN=tt({prop:"gridTemplateColumns"}),JN=tt({prop:"gridTemplateRows"}),ZN=tt({prop:"gridTemplateAreas"}),e4=tt({prop:"gridArea"});Lh(jh,Fh,$h,qN,GN,KN,QN,YN,XN,JN,ZN,e4);function Rs(t,e){return e==="grey"?e:t}const t4=tt({prop:"color",themeKey:"palette",transform:Rs}),n4=tt({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Rs}),r4=tt({prop:"backgroundColor",themeKey:"palette",transform:Rs});Lh(t4,n4,r4);function fn(t){return t<=1&&t!==0?`${t*100}%`:t}const i4=tt({prop:"width",transform:fn}),i0=t=>{if(t.maxWidth!==void 0&&t.maxWidth!==null){const e=n=>{var i,o,s,a,u;const r=((s=(o=(i=t.theme)==null?void 0:i.breakpoints)==null?void 0:o.values)==null?void 0:s[n])||Dh[n];return r?((u=(a=t.theme)==null?void 0:a.breakpoints)==null?void 0:u.unit)!=="px"?{maxWidth:`${r}${t.theme.breakpoints.unit}`}:{maxWidth:r}:{maxWidth:fn(n)}};return Wr(t,t.maxWidth,e)}return null};i0.filterProps=["maxWidth"];const o4=tt({prop:"minWidth",transform:fn}),s4=tt({prop:"height",transform:fn}),a4=tt({prop:"maxHeight",transform:fn}),l4=tt({prop:"minHeight",transform:fn});tt({prop:"size",cssProperty:"width",transform:fn});tt({prop:"size",cssProperty:"height",transform:fn});const u4=tt({prop:"boxSizing"});Lh(i4,i0,o4,s4,a4,l4,u4);const Uh={border:{themeKey:"borders",transform:On},borderTop:{themeKey:"borders",transform:On},borderRight:{themeKey:"borders",transform:On},borderBottom:{themeKey:"borders",transform:On},borderLeft:{themeKey:"borders",transform:On},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:On},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Vh},color:{themeKey:"palette",transform:Rs},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Rs},backgroundColor:{themeKey:"palette",transform:Rs},p:{style:Ge},pt:{style:Ge},pr:{style:Ge},pb:{style:Ge},pl:{style:Ge},px:{style:Ge},py:{style:Ge},padding:{style:Ge},paddingTop:{style:Ge},paddingRight:{style:Ge},paddingBottom:{style:Ge},paddingLeft:{style:Ge},paddingX:{style:Ge},paddingY:{style:Ge},paddingInline:{style:Ge},paddingInlineStart:{style:Ge},paddingInlineEnd:{style:Ge},paddingBlock:{style:Ge},paddingBlockStart:{style:Ge},paddingBlockEnd:{style:Ge},m:{style:qe},mt:{style:qe},mr:{style:qe},mb:{style:qe},ml:{style:qe},mx:{style:qe},my:{style:qe},margin:{style:qe},marginTop:{style:qe},marginRight:{style:qe},marginBottom:{style:qe},marginLeft:{style:qe},marginX:{style:qe},marginY:{style:qe},marginInline:{style:qe},marginInlineStart:{style:qe},marginInlineEnd:{style:qe},marginBlock:{style:qe},marginBlockStart:{style:qe},marginBlockEnd:{style:qe},displayPrint:{cssProperty:!1,transform:t=>({"@media print":{display:t}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:jh},rowGap:{style:$h},columnGap:{style:Fh},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:fn},maxWidth:{style:i0},minWidth:{transform:fn},height:{transform:fn},maxHeight:{transform:fn},minHeight:{transform:fn},boxSizing:{},font:{themeKey:"font"},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function c4(...t){const e=t.reduce((r,i)=>r.concat(Object.keys(i)),[]),n=new Set(e);return t.every(r=>n.size===Object.keys(r).length)}function d4(t,e){return typeof t=="function"?t(e):t}function h4(){function t(n,r,i,o){const s={[n]:r,theme:i},a=o[n];if(!a)return{[n]:r};const{cssProperty:u=n,themeKey:c,transform:d,style:f}=a;if(r==null)return null;if(c==="typography"&&r==="inherit")return{[n]:r};const m=Mh(i,c)||{};return f?f(s):Wr(s,r,w=>{let I=Dd(m,d,w);return w===I&&typeof w=="string"&&(I=Dd(m,d,`${n}${w==="default"?"":Ln(w)}`,w)),u===!1?I:{[u]:I}})}function e(n){const{sx:r,theme:i={}}=n||{};if(!r)return null;const o=i.unstable_sxConfig??Uh;function s(a){let u=a;if(typeof a=="function")u=a(i);else if(typeof a!="object")return a;if(!u)return null;const c=CN(i.breakpoints),d=Object.keys(c);let f=c;return Object.keys(u).forEach(m=>{const v=d4(u[m],i);if(v!=null)if(typeof v=="object")if(o[m])f=gl(f,t(m,v,i,o));else{const w=Wr({theme:i},v,I=>({[m]:I}));c4(w,v)?f[m]=e({sx:v,theme:i}):f=gl(f,w)}else f=gl(f,t(m,v,i,o))}),EN(i,AN(d,f))}return Array.isArray(r)?r.map(s):s(r)}return e}const Ks=h4();Ks.filterProps=["sx"];function Md(){return Md=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Md.apply(null,arguments)}function cI(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var f4=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,p4=cI(function(t){return f4.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),m4=!1;function g4(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function y4(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var v4=function(){function t(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!m4:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(y4(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=g4(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){var i;return(i=r.parentNode)==null?void 0:i.removeChild(r)}),this.tags=[],this.ctr=0},t}(),Mt="-ms-",Ld="-moz-",Ee="-webkit-",dI="comm",o0="rule",s0="decl",_4="@import",hI="@keyframes",w4="@layer",E4=Math.abs,Bh=String.fromCharCode,T4=Object.assign;function S4(t,e){return xt(t,0)^45?(((e<<2^xt(t,0))<<2^xt(t,1))<<2^xt(t,2))<<2^xt(t,3):0}function fI(t){return t.trim()}function x4(t,e){return(t=e.exec(t))?t[0]:t}function Te(t,e,n){return t.replace(e,n)}function ng(t,e){return t.indexOf(e)}function xt(t,e){return t.charCodeAt(e)|0}function zl(t,e,n){return t.slice(e,n)}function sr(t){return t.length}function a0(t){return t.length}function yc(t,e){return e.push(t),t}function I4(t,e){return t.map(e).join("")}var zh=1,Qs=1,pI=0,an=0,st=0,ha="";function Hh(t,e,n,r,i,o,s){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:zh,column:Qs,length:s,return:""}}function Ba(t,e){return T4(Hh("",null,null,"",null,null,0),t,{length:-t.length},e)}function C4(){return st}function A4(){return st=an>0?xt(ha,--an):0,Qs--,st===10&&(Qs=1,zh--),st}function wn(){return st=an<pI?xt(ha,an++):0,Qs++,st===10&&(Qs=1,zh++),st}function dr(){return xt(ha,an)}function qc(){return an}function _u(t,e){return zl(ha,t,e)}function Hl(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function mI(t){return zh=Qs=1,pI=sr(ha=t),an=0,[]}function gI(t){return ha="",t}function Gc(t){return fI(_u(an-1,rg(t===91?t+2:t===40?t+1:t)))}function b4(t){for(;(st=dr())&&st<33;)wn();return Hl(t)>2||Hl(st)>3?"":" "}function R4(t,e){for(;--e&&wn()&&!(st<48||st>102||st>57&&st<65||st>70&&st<97););return _u(t,qc()+(e<6&&dr()==32&&wn()==32))}function rg(t){for(;wn();)switch(st){case t:return an;case 34:case 39:t!==34&&t!==39&&rg(st);break;case 40:t===41&&rg(t);break;case 92:wn();break}return an}function k4(t,e){for(;wn()&&t+st!==57;)if(t+st===84&&dr()===47)break;return"/*"+_u(e,an-1)+"*"+Bh(t===47?t:wn())}function P4(t){for(;!Hl(dr());)wn();return _u(t,an)}function N4(t){return gI(Kc("",null,null,null,[""],t=mI(t),0,[0],t))}function Kc(t,e,n,r,i,o,s,a,u){for(var c=0,d=0,f=s,m=0,v=0,w=0,I=1,R=1,S=1,E=0,y="",A=i,D=o,M=r,T=y;R;)switch(w=E,E=wn()){case 40:if(w!=108&&xt(T,f-1)==58){ng(T+=Te(Gc(E),"&","&\f"),"&\f")!=-1&&(S=-1);break}case 34:case 39:case 91:T+=Gc(E);break;case 9:case 10:case 13:case 32:T+=b4(w);break;case 92:T+=R4(qc()-1,7);continue;case 47:switch(dr()){case 42:case 47:yc(O4(k4(wn(),qc()),e,n),u);break;default:T+="/"}break;case 123*I:a[c++]=sr(T)*S;case 125*I:case 59:case 0:switch(E){case 0:case 125:R=0;case 59+d:S==-1&&(T=Te(T,/\f/g,"")),v>0&&sr(T)-f&&yc(v>32?Q1(T+";",r,n,f-1):Q1(Te(T," ","")+";",r,n,f-2),u);break;case 59:T+=";";default:if(yc(M=K1(T,e,n,c,d,i,a,y,A=[],D=[],f),o),E===123)if(d===0)Kc(T,e,M,M,A,o,f,a,D);else switch(m===99&&xt(T,3)===110?100:m){case 100:case 108:case 109:case 115:Kc(t,M,M,r&&yc(K1(t,M,M,0,0,i,a,y,i,A=[],f),D),i,D,f,a,r?A:D);break;default:Kc(T,M,M,M,[""],D,0,a,D)}}c=d=v=0,I=S=1,y=T="",f=s;break;case 58:f=1+sr(T),v=w;default:if(I<1){if(E==123)--I;else if(E==125&&I++==0&&A4()==125)continue}switch(T+=Bh(E),E*I){case 38:S=d>0?1:(T+="\f",-1);break;case 44:a[c++]=(sr(T)-1)*S,S=1;break;case 64:dr()===45&&(T+=Gc(wn())),m=dr(),d=f=sr(y=T+=P4(qc())),E++;break;case 45:w===45&&sr(T)==2&&(I=0)}}return o}function K1(t,e,n,r,i,o,s,a,u,c,d){for(var f=i-1,m=i===0?o:[""],v=a0(m),w=0,I=0,R=0;w<r;++w)for(var S=0,E=zl(t,f+1,f=E4(I=s[w])),y=t;S<v;++S)(y=fI(I>0?m[S]+" "+E:Te(E,/&\f/g,m[S])))&&(u[R++]=y);return Hh(t,e,n,i===0?o0:a,u,c,d)}function O4(t,e,n){return Hh(t,e,n,dI,Bh(C4()),zl(t,2,-2),0)}function Q1(t,e,n,r){return Hh(t,e,n,s0,zl(t,0,r),zl(t,r+1,-1),r)}function ks(t,e){for(var n="",r=a0(t),i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function D4(t,e,n,r){switch(t.type){case w4:if(t.children.length)break;case _4:case s0:return t.return=t.return||t.value;case dI:return"";case hI:return t.return=t.value+"{"+ks(t.children,r)+"}";case o0:t.value=t.props.join(",")}return sr(n=ks(t.children,r))?t.return=t.value+"{"+n+"}":""}function M4(t){var e=a0(t);return function(n,r,i,o){for(var s="",a=0;a<e;a++)s+=t[a](n,r,i,o)||"";return s}}function L4(t){return function(e){e.root||(e=e.return)&&t(e)}}var V4=function(e,n,r){for(var i=0,o=0;i=o,o=dr(),i===38&&o===12&&(n[r]=1),!Hl(o);)wn();return _u(e,an)},j4=function(e,n){var r=-1,i=44;do switch(Hl(i)){case 0:i===38&&dr()===12&&(n[r]=1),e[r]+=V4(an-1,n,r);break;case 2:e[r]+=Gc(i);break;case 4:if(i===44){e[++r]=dr()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=Bh(i)}while(i=wn());return e},F4=function(e,n){return gI(j4(mI(e),n))},Y1=new WeakMap,$4=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!Y1.get(r))&&!i){Y1.set(e,!0);for(var o=[],s=F4(n,o),a=r.props,u=0,c=0;u<s.length;u++)for(var d=0;d<a.length;d++,c++)e.props[c]=o[u]?s[u].replace(/&\f/g,a[d]):a[d]+" "+s[u]}}},U4=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function yI(t,e){switch(S4(t,e)){case 5103:return Ee+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ee+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Ee+t+Ld+t+Mt+t+t;case 6828:case 4268:return Ee+t+Mt+t+t;case 6165:return Ee+t+Mt+"flex-"+t+t;case 5187:return Ee+t+Te(t,/(\w+).+(:[^]+)/,Ee+"box-$1$2"+Mt+"flex-$1$2")+t;case 5443:return Ee+t+Mt+"flex-item-"+Te(t,/flex-|-self/,"")+t;case 4675:return Ee+t+Mt+"flex-line-pack"+Te(t,/align-content|flex-|-self/,"")+t;case 5548:return Ee+t+Mt+Te(t,"shrink","negative")+t;case 5292:return Ee+t+Mt+Te(t,"basis","preferred-size")+t;case 6060:return Ee+"box-"+Te(t,"-grow","")+Ee+t+Mt+Te(t,"grow","positive")+t;case 4554:return Ee+Te(t,/([^-])(transform)/g,"$1"+Ee+"$2")+t;case 6187:return Te(Te(Te(t,/(zoom-|grab)/,Ee+"$1"),/(image-set)/,Ee+"$1"),t,"")+t;case 5495:case 3959:return Te(t,/(image-set\([^]*)/,Ee+"$1$`$1");case 4968:return Te(Te(t,/(.+:)(flex-)?(.*)/,Ee+"box-pack:$3"+Mt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ee+t+t;case 4095:case 3583:case 4068:case 2532:return Te(t,/(.+)-inline(.+)/,Ee+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(sr(t)-1-e>6)switch(xt(t,e+1)){case 109:if(xt(t,e+4)!==45)break;case 102:return Te(t,/(.+:)(.+)-([^]+)/,"$1"+Ee+"$2-$3$1"+Ld+(xt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~ng(t,"stretch")?yI(Te(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(xt(t,e+1)!==115)break;case 6444:switch(xt(t,sr(t)-3-(~ng(t,"!important")&&10))){case 107:return Te(t,":",":"+Ee)+t;case 101:return Te(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Ee+(xt(t,14)===45?"inline-":"")+"box$3$1"+Ee+"$2$3$1"+Mt+"$2box$3")+t}break;case 5936:switch(xt(t,e+11)){case 114:return Ee+t+Mt+Te(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Ee+t+Mt+Te(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Ee+t+Mt+Te(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return Ee+t+Mt+t+t}return t}var B4=function(e,n,r,i){if(e.length>-1&&!e.return)switch(e.type){case s0:e.return=yI(e.value,e.length);break;case hI:return ks([Ba(e,{value:Te(e.value,"@","@"+Ee)})],i);case o0:if(e.length)return I4(e.props,function(o){switch(x4(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ks([Ba(e,{props:[Te(o,/:(read-\w+)/,":"+Ld+"$1")]})],i);case"::placeholder":return ks([Ba(e,{props:[Te(o,/:(plac\w+)/,":"+Ee+"input-$1")]}),Ba(e,{props:[Te(o,/:(plac\w+)/,":"+Ld+"$1")]}),Ba(e,{props:[Te(o,/:(plac\w+)/,Mt+"input-$1")]})],i)}return""})}},z4=[B4],H4=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(I){var R=I.getAttribute("data-emotion");R.indexOf(" ")!==-1&&(document.head.appendChild(I),I.setAttribute("data-s",""))})}var i=e.stylisPlugins||z4,o={},s,a=[];s=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(I){for(var R=I.getAttribute("data-emotion").split(" "),S=1;S<R.length;S++)o[R[S]]=!0;a.push(I)});var u,c=[$4,U4];{var d,f=[D4,L4(function(I){d.insert(I)})],m=M4(c.concat(i,f)),v=function(R){return ks(N4(R),m)};u=function(R,S,E,y){d=E,v(R?R+"{"+S.styles+"}":S.styles),y&&(w.inserted[S.name]=!0)}}var w={key:n,sheet:new v4({key:n,container:s,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:u};return w.sheet.hydrate(a),w},vI={exports:{}},Ae={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vt=typeof Symbol=="function"&&Symbol.for,l0=vt?Symbol.for("react.element"):60103,u0=vt?Symbol.for("react.portal"):60106,Wh=vt?Symbol.for("react.fragment"):60107,qh=vt?Symbol.for("react.strict_mode"):60108,Gh=vt?Symbol.for("react.profiler"):60114,Kh=vt?Symbol.for("react.provider"):60109,Qh=vt?Symbol.for("react.context"):60110,c0=vt?Symbol.for("react.async_mode"):60111,Yh=vt?Symbol.for("react.concurrent_mode"):60111,Xh=vt?Symbol.for("react.forward_ref"):60112,Jh=vt?Symbol.for("react.suspense"):60113,W4=vt?Symbol.for("react.suspense_list"):60120,Zh=vt?Symbol.for("react.memo"):60115,ef=vt?Symbol.for("react.lazy"):60116,q4=vt?Symbol.for("react.block"):60121,G4=vt?Symbol.for("react.fundamental"):60117,K4=vt?Symbol.for("react.responder"):60118,Q4=vt?Symbol.for("react.scope"):60119;function Cn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case l0:switch(t=t.type,t){case c0:case Yh:case Wh:case Gh:case qh:case Jh:return t;default:switch(t=t&&t.$$typeof,t){case Qh:case Xh:case ef:case Zh:case Kh:return t;default:return e}}case u0:return e}}}function _I(t){return Cn(t)===Yh}Ae.AsyncMode=c0;Ae.ConcurrentMode=Yh;Ae.ContextConsumer=Qh;Ae.ContextProvider=Kh;Ae.Element=l0;Ae.ForwardRef=Xh;Ae.Fragment=Wh;Ae.Lazy=ef;Ae.Memo=Zh;Ae.Portal=u0;Ae.Profiler=Gh;Ae.StrictMode=qh;Ae.Suspense=Jh;Ae.isAsyncMode=function(t){return _I(t)||Cn(t)===c0};Ae.isConcurrentMode=_I;Ae.isContextConsumer=function(t){return Cn(t)===Qh};Ae.isContextProvider=function(t){return Cn(t)===Kh};Ae.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===l0};Ae.isForwardRef=function(t){return Cn(t)===Xh};Ae.isFragment=function(t){return Cn(t)===Wh};Ae.isLazy=function(t){return Cn(t)===ef};Ae.isMemo=function(t){return Cn(t)===Zh};Ae.isPortal=function(t){return Cn(t)===u0};Ae.isProfiler=function(t){return Cn(t)===Gh};Ae.isStrictMode=function(t){return Cn(t)===qh};Ae.isSuspense=function(t){return Cn(t)===Jh};Ae.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Wh||t===Yh||t===Gh||t===qh||t===Jh||t===W4||typeof t=="object"&&t!==null&&(t.$$typeof===ef||t.$$typeof===Zh||t.$$typeof===Kh||t.$$typeof===Qh||t.$$typeof===Xh||t.$$typeof===G4||t.$$typeof===K4||t.$$typeof===Q4||t.$$typeof===q4)};Ae.typeOf=Cn;vI.exports=Ae;var Y4=vI.exports,wI=Y4,X4={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},J4={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},EI={};EI[wI.ForwardRef]=X4;EI[wI.Memo]=J4;var Z4=!0;function eO(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):i&&(r+=i+" ")}),r}var TI=function(e,n,r){var i=e.key+"-"+n.name;(r===!1||Z4===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles)},tO=function(e,n,r){TI(e,n,r);var i=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var o=n;do e.insert(n===o?"."+i:"",o,e.sheet,!0),o=o.next;while(o!==void 0)}};function nO(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var rO={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},iO=!1,oO=/[A-Z]|^ms/g,sO=/_EMO_([^_]+?)_([^]*?)_EMO_/g,SI=function(e){return e.charCodeAt(1)===45},X1=function(e){return e!=null&&typeof e!="boolean"},bp=cI(function(t){return SI(t)?t:t.replace(oO,"-$&").toLowerCase()}),J1=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(sO,function(r,i,o){return ar={name:i,styles:o,next:ar},i})}return rO[e]!==1&&!SI(e)&&typeof n=="number"&&n!==0?n+"px":n},aO="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function Wl(t,e,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var i=n;if(i.anim===1)return ar={name:i.name,styles:i.styles,next:ar},i.name;var o=n;if(o.styles!==void 0){var s=o.next;if(s!==void 0)for(;s!==void 0;)ar={name:s.name,styles:s.styles,next:ar},s=s.next;var a=o.styles+";";return a}return lO(t,e,n)}case"function":{if(t!==void 0){var u=ar,c=n(t);return ar=u,Wl(t,e,c)}break}}var d=n;if(e==null)return d;var f=e[d];return f!==void 0?f:d}function lO(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Wl(t,e,n[i])+";";else for(var o in n){var s=n[o];if(typeof s!="object"){var a=s;e!=null&&e[a]!==void 0?r+=o+"{"+e[a]+"}":X1(a)&&(r+=bp(o)+":"+J1(o,a)+";")}else{if(o==="NO_COMPONENT_SELECTOR"&&iO)throw new Error(aO);if(Array.isArray(s)&&typeof s[0]=="string"&&(e==null||e[s[0]]===void 0))for(var u=0;u<s.length;u++)X1(s[u])&&(r+=bp(o)+":"+J1(o,s[u])+";");else{var c=Wl(t,e,s);switch(o){case"animation":case"animationName":{r+=bp(o)+":"+c+";";break}default:r+=o+"{"+c+"}"}}}}return r}var Z1=/label:\s*([^\s;{]+)\s*(;|$)/g,ar;function d0(t,e,n){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var r=!0,i="";ar=void 0;var o=t[0];if(o==null||o.raw===void 0)r=!1,i+=Wl(n,e,o);else{var s=o;i+=s[0]}for(var a=1;a<t.length;a++)if(i+=Wl(n,e,t[a]),r){var u=o;i+=u[a]}Z1.lastIndex=0;for(var c="",d;(d=Z1.exec(i))!==null;)c+="-"+d[1];var f=nO(i)+c;return{name:f,styles:i,next:ar}}var uO=function(e){return e()},cO=xl.useInsertionEffect?xl.useInsertionEffect:!1,dO=cO||uO,xI=O.createContext(typeof HTMLElement<"u"?H4({key:"css"}):null);xI.Provider;var hO=function(e){return O.forwardRef(function(n,r){var i=O.useContext(xI);return e(n,i,r)})},II=O.createContext({});function fO(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return d0(e)}var h0=function(){var e=fO.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},pO=p4,mO=function(e){return e!=="theme"},ew=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?pO:mO},tw=function(e,n,r){var i;if(n){var o=n.shouldForwardProp;i=e.__emotion_forwardProp&&o?function(s){return e.__emotion_forwardProp(s)&&o(s)}:o}return typeof i!="function"&&r&&(i=e.__emotion_forwardProp),i},gO=!1,yO=function(e){var n=e.cache,r=e.serialized,i=e.isStringTag;return TI(n,r,i),dO(function(){return tO(n,r,i)}),null},vO=function t(e,n){var r=e.__emotion_real===e,i=r&&e.__emotion_base||e,o,s;n!==void 0&&(o=n.label,s=n.target);var a=tw(e,n,r),u=a||ew(i),c=!u("as");return function(){var d=arguments,f=r&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(o!==void 0&&f.push("label:"+o+";"),d[0]==null||d[0].raw===void 0)f.push.apply(f,d);else{f.push(d[0][0]);for(var m=d.length,v=1;v<m;v++)f.push(d[v],d[0][v])}var w=hO(function(I,R,S){var E=c&&I.as||i,y="",A=[],D=I;if(I.theme==null){D={};for(var M in I)D[M]=I[M];D.theme=O.useContext(II)}typeof I.className=="string"?y=eO(R.registered,A,I.className):I.className!=null&&(y=I.className+" ");var T=d0(f.concat(A),R.registered,D);y+=R.key+"-"+T.name,s!==void 0&&(y+=" "+s);var x=c&&a===void 0?ew(E):u,b={};for(var p in I)c&&p==="as"||x(p)&&(b[p]=I[p]);return b.className=y,S&&(b.ref=S),O.createElement(O.Fragment,null,O.createElement(yO,{cache:R,serialized:T,isStringTag:typeof E=="string"}),O.createElement(E,b))});return w.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",w.defaultProps=e.defaultProps,w.__emotion_real=w,w.__emotion_base=i,w.__emotion_styles=f,w.__emotion_forwardProp=a,Object.defineProperty(w,"toString",{value:function(){return s===void 0&&gO?"NO_COMPONENT_SELECTOR":"."+s}}),w.withComponent=function(I,R){return t(I,Md({},n,R,{shouldForwardProp:tw(w,R,!0)})).apply(void 0,f)},w}},_O=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],ig=vO.bind();_O.forEach(function(t){ig[t]=ig(t)});/**
 * @mui/styled-engine v6.1.5
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function wO(t,e){return ig(t,e)}function EO(t,e){Array.isArray(t.__emotion_styles)&&(t.__emotion_styles=e(t.__emotion_styles))}const nw=[];function rw(t){return nw[0]=t,d0(nw)}const TO=t=>{const e=Object.keys(t).map(n=>({key:n,val:t[n]}))||[];return e.sort((n,r)=>n.val-r.val),e.reduce((n,r)=>({...n,[r.key]:r.val}),{})};function SO(t){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5,...i}=t,o=TO(e),s=Object.keys(o);function a(m){return`@media (min-width:${typeof e[m]=="number"?e[m]:m}${n})`}function u(m){return`@media (max-width:${(typeof e[m]=="number"?e[m]:m)-r/100}${n})`}function c(m,v){const w=s.indexOf(v);return`@media (min-width:${typeof e[m]=="number"?e[m]:m}${n}) and (max-width:${(w!==-1&&typeof e[s[w]]=="number"?e[s[w]]:v)-r/100}${n})`}function d(m){return s.indexOf(m)+1<s.length?c(m,s[s.indexOf(m)+1]):a(m)}function f(m){const v=s.indexOf(m);return v===0?a(s[1]):v===s.length-1?u(s[v]):c(m,s[s.indexOf(m)+1]).replace("@media","@media not all and")}return{keys:s,values:o,up:a,down:u,between:c,only:d,not:f,unit:n,...i}}const xO={borderRadius:4};function CI(t=8,e=r0({spacing:t})){if(t.mui)return t;const n=(...r)=>(r.length===0?[1]:r).map(o=>{const s=e(o);return typeof s=="number"?`${s}px`:s}).join(" ");return n.mui=!0,n}function IO(t,e){var r;const n=this;if(n.vars){if(!((r=n.colorSchemes)!=null&&r[t])||typeof n.getColorSchemeSelector!="function")return{};let i=n.getColorSchemeSelector(t);return i==="&"?e:((i.includes("data-")||i.includes("."))&&(i=`*:where(${i.replace(/\s*&$/,"")}) &`),{[i]:e})}return n.palette.mode===t?e:{}}function f0(t={},...e){const{breakpoints:n={},palette:r={},spacing:i,shape:o={},...s}=t,a=SO(n),u=CI(i);let c=_n({breakpoints:a,direction:"ltr",components:{},palette:{mode:"light",...r},spacing:u,shape:{...xO,...o}},s);return c=xN(c),c.applyStyles=IO,c=e.reduce((d,f)=>_n(d,f),c),c.unstable_sxConfig={...Uh,...s==null?void 0:s.unstable_sxConfig},c.unstable_sx=function(f){return Ks({sx:f,theme:this})},c}function CO(t){return Object.keys(t).length===0}function AO(t=null){const e=O.useContext(II);return!e||CO(e)?t:e}const bO=f0();function RO(t=bO){return AO(t)}function AI(t){const{variants:e,...n}=t,r={variants:e,style:rw(n),isProcessed:!0};return r.style===n||e&&e.forEach(i=>{typeof i.style!="function"&&(i.style=rw(i.style))}),r}const kO=f0();function Rp(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}function PO(t){return t?(e,n)=>n[t]:null}function NO(t,e,n){t.theme=MO(t.theme)?n:t.theme[e]||t.theme}function Qc(t,e){const n=typeof e=="function"?e(t):e;if(Array.isArray(n))return n.flatMap(r=>Qc(t,r));if(Array.isArray(n==null?void 0:n.variants)){let r;if(n.isProcessed)r=n.style;else{const{variants:i,...o}=n;r=o}return bI(t,n.variants,[r])}return n!=null&&n.isProcessed?n.style:n}function bI(t,e,n=[]){var i;let r;e:for(let o=0;o<e.length;o+=1){const s=e[o];if(typeof s.props=="function"){if(r??(r={...t,...t.ownerState,ownerState:t.ownerState}),!s.props(r))continue}else for(const a in s.props)if(t[a]!==s.props[a]&&((i=t.ownerState)==null?void 0:i[a])!==s.props[a])continue e;typeof s.style=="function"?(r??(r={...t,...t.ownerState,ownerState:t.ownerState}),n.push(s.style(r))):n.push(s.style)}return n}function OO(t={}){const{themeId:e,defaultTheme:n=kO,rootShouldForwardProp:r=Rp,slotShouldForwardProp:i=Rp}=t;function o(a){NO(a,e,n)}return(a,u={})=>{EO(a,D=>D.filter(M=>M!==Ks));const{name:c,slot:d,skipVariantsResolver:f,skipSx:m,overridesResolver:v=PO(VO(d)),...w}=u,I=f!==void 0?f:d&&d!=="Root"&&d!=="root"||!1,R=m||!1;let S=Rp;d==="Root"||d==="root"?S=r:d?S=i:LO(a)&&(S=void 0);const E=wO(a,{shouldForwardProp:S,label:DO(),...w}),y=D=>{if(typeof D=="function"&&D.__emotion_real!==D)return function(T){return Qc(T,D)};if(Pr(D)){const M=AI(D);return M.variants?function(x){return Qc(x,M)}:M.style}return D},A=(...D)=>{const M=[],T=D.map(y),x=[];if(M.push(o),c&&v&&x.push(function(N){var X,re;const Q=(re=(X=N.theme.components)==null?void 0:X[c])==null?void 0:re.styleOverrides;if(!Q)return null;const z={};for(const U in Q)z[U]=Qc(N,Q[U]);return v(N,z)}),c&&!I&&x.push(function(N){var z,X;const P=N.theme,Q=(X=(z=P==null?void 0:P.components)==null?void 0:z[c])==null?void 0:X.variants;return Q?bI(N,Q):null}),R||x.push(Ks),Array.isArray(T[0])){const k=T.shift(),N=new Array(M.length).fill(""),P=new Array(x.length).fill("");let Q;Q=[...N,...k,...P],Q.raw=[...N,...k.raw,...P],M.unshift(Q)}const b=[...M,...T,...x],p=E(...b);return a.muiName&&(p.muiName=a.muiName),p};return E.withConfig&&(A.withConfig=E.withConfig),A}}function DO(t,e){return void 0}function MO(t){for(const e in t)return!1;return!0}function LO(t){return typeof t=="string"&&t.charCodeAt(0)>96}function VO(t){return t&&t.charAt(0).toLowerCase()+t.slice(1)}function p0(t,e=0,n=1){return gN(t,e,n)}function jO(t){t=t.slice(1);const e=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let n=t.match(e);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,i)=>i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function Oi(t){if(t.type)return t;if(t.charAt(0)==="#")return Oi(jO(t));const e=t.indexOf("("),n=t.substring(0,e);if(!["rgb","rgba","hsl","hsla","color"].includes(n))throw new Error(Ro(9,t));let r=t.substring(e+1,t.length-1),i;if(n==="color"){if(r=r.split(" "),i=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),!["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].includes(i))throw new Error(Ro(10,i))}else r=r.split(",");return r=r.map(o=>parseFloat(o)),{type:n,values:r,colorSpace:i}}const FO=t=>{const e=Oi(t);return e.values.slice(0,3).map((n,r)=>e.type.includes("hsl")&&r!==0?`${n}%`:n).join(" ")},Ja=(t,e)=>{try{return FO(t)}catch{return t}};function tf(t){const{type:e,colorSpace:n}=t;let{values:r}=t;return e.includes("rgb")?r=r.map((i,o)=>o<3?parseInt(i,10):i):e.includes("hsl")&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),e.includes("color")?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${e}(${r})`}function RI(t){t=Oi(t);const{values:e}=t,n=e[0],r=e[1]/100,i=e[2]/100,o=r*Math.min(i,1-i),s=(c,d=(c+n/30)%12)=>i-o*Math.max(Math.min(d-3,9-d,1),-1);let a="rgb";const u=[Math.round(s(0)*255),Math.round(s(8)*255),Math.round(s(4)*255)];return t.type==="hsla"&&(a+="a",u.push(e[3])),tf({type:a,values:u})}function og(t){t=Oi(t);let e=t.type==="hsl"||t.type==="hsla"?Oi(RI(t)).values:t.values;return e=e.map(n=>(t.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function $O(t,e){const n=og(t),r=og(e);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function ql(t,e){return t=Oi(t),e=p0(e),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${e}`:t.values[3]=e,tf(t)}function vc(t,e,n){try{return ql(t,e)}catch{return t}}function m0(t,e){if(t=Oi(t),e=p0(e),t.type.includes("hsl"))t.values[2]*=1-e;else if(t.type.includes("rgb")||t.type.includes("color"))for(let n=0;n<3;n+=1)t.values[n]*=1-e;return tf(t)}function Re(t,e,n){try{return m0(t,e)}catch{return t}}function g0(t,e){if(t=Oi(t),e=p0(e),t.type.includes("hsl"))t.values[2]+=(100-t.values[2])*e;else if(t.type.includes("rgb"))for(let n=0;n<3;n+=1)t.values[n]+=(255-t.values[n])*e;else if(t.type.includes("color"))for(let n=0;n<3;n+=1)t.values[n]+=(1-t.values[n])*e;return tf(t)}function ke(t,e,n){try{return g0(t,e)}catch{return t}}function UO(t,e=.15){return og(t)>.5?m0(t,e):g0(t,e)}function _c(t,e,n){try{return UO(t,e)}catch{return t}}const BO=O.createContext(void 0);function zO(t){const{theme:e,name:n,props:r}=t;if(!e||!e.components||!e.components[n])return r;const i=e.components[n];return i.defaultProps?tg(i.defaultProps,r):!i.styleOverrides&&!i.variants?tg(i,r):r}function HO({props:t,name:e}){const n=O.useContext(BO);return zO({props:t,name:e,theme:{components:n}})}const iw={theme:void 0};function WO(t){let e,n;return function(i){let o=e;return(o===void 0||i.theme!==n)&&(iw.theme=i.theme,o=AI(t(iw)),e=o,n=i.theme),o}}function qO(t=""){function e(...r){if(!r.length)return"";const i=r[0];return typeof i=="string"&&!i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, var(--${t?`${t}-`:""}${i}${e(...r.slice(1))})`:`, ${i}`}return(r,...i)=>`var(--${t?`${t}-`:""}${r}${e(...i)})`}const ow=(t,e,n,r=[])=>{let i=t;e.forEach((o,s)=>{s===e.length-1?Array.isArray(i)?i[Number(o)]=n:i&&typeof i=="object"&&(i[o]=n):i&&typeof i=="object"&&(i[o]||(i[o]=r.includes(o)?[]:{}),i=i[o])})},GO=(t,e,n)=>{function r(i,o=[],s=[]){Object.entries(i).forEach(([a,u])=>{(!n||n&&!n([...o,a]))&&u!=null&&(typeof u=="object"&&Object.keys(u).length>0?r(u,[...o,a],Array.isArray(u)?[...s,a]:s):e([...o,a],u,s))})}r(t)},KO=(t,e)=>typeof e=="number"?["lineHeight","fontWeight","opacity","zIndex"].some(r=>t.includes(r))||t[t.length-1].toLowerCase().includes("opacity")?e:`${e}px`:e;function kp(t,e){const{prefix:n,shouldSkipGeneratingVar:r}=e||{},i={},o={},s={};return GO(t,(a,u,c)=>{if((typeof u=="string"||typeof u=="number")&&(!r||!r(a,u))){const d=`--${n?`${n}-`:""}${a.join("-")}`,f=KO(a,u);Object.assign(i,{[d]:f}),ow(o,a,`var(${d})`,c),ow(s,a,`var(${d}, ${f})`,c)}},a=>a[0]==="vars"),{css:i,vars:o,varsWithDefaults:s}}function QO(t,e={}){const{getSelector:n=R,disableCssColorScheme:r,colorSchemeSelector:i}=e,{colorSchemes:o={},components:s,defaultColorScheme:a="light",...u}=t,{vars:c,css:d,varsWithDefaults:f}=kp(u,e);let m=f;const v={},{[a]:w,...I}=o;if(Object.entries(I||{}).forEach(([y,A])=>{const{vars:D,css:M,varsWithDefaults:T}=kp(A,e);m=_n(m,T),v[y]={css:M,vars:D}}),w){const{css:y,vars:A,varsWithDefaults:D}=kp(w,e);m=_n(m,D),v[a]={css:y,vars:A}}function R(y,A){var M,T;let D=i;if(i==="class"&&(D=".%s"),i==="data"&&(D="[data-%s]"),i!=null&&i.startsWith("data-")&&!i.includes("%s")&&(D=`[${i}="%s"]`),y){if(D==="media")return t.defaultColorScheme===y?":root":{[`@media (prefers-color-scheme: ${((T=(M=o[y])==null?void 0:M.palette)==null?void 0:T.mode)||y})`]:{":root":A}};if(D)return t.defaultColorScheme===y?`:root, ${D.replace("%s",String(y))}`:D.replace("%s",String(y))}return":root"}return{vars:m,generateThemeVars:()=>{let y={...c};return Object.entries(v).forEach(([,{vars:A}])=>{y=_n(y,A)}),y},generateStyleSheets:()=>{var x,b;const y=[],A=t.defaultColorScheme||"light";function D(p,k){Object.keys(k).length&&y.push(typeof p=="string"?{[p]:{...k}}:p)}D(n(void 0,{...d}),d);const{[A]:M,...T}=v;if(M){const{css:p}=M,k=(b=(x=o[A])==null?void 0:x.palette)==null?void 0:b.mode,N=!r&&k?{colorScheme:k,...p}:{...p};D(n(A,{...N}),N)}return Object.entries(T).forEach(([p,{css:k}])=>{var Q,z;const N=(z=(Q=o[p])==null?void 0:Q.palette)==null?void 0:z.mode,P=!r&&N?{colorScheme:N,...k}:{...k};D(n(p,{...P}),P)}),y}}}function YO(t){return function(n){return t==="media"?`@media (prefers-color-scheme: ${n})`:t?t.startsWith("data-")&&!t.includes("%s")?`[${t}="${n}"] &`:t==="class"?`.${n} &`:t==="data"?`[data-${n}] &`:`${t.replace("%s",n)} &`:"&"}}const Gl={black:"#000",white:"#fff"},XO={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},Jo={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},Zo={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},za={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},es={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},ts={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},ns={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};function kI(){return{text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Gl.white,default:Gl.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}}}const JO=kI();function PI(){return{text:{primary:Gl.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Gl.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}}}const sw=PI();function aw(t,e,n,r){const i=r.light||r,o=r.dark||r*1.5;t[e]||(t.hasOwnProperty(n)?t[e]=t[n]:e==="light"?t.light=g0(t.main,i):e==="dark"&&(t.dark=m0(t.main,o)))}function ZO(t="light"){return t==="dark"?{main:es[200],light:es[50],dark:es[400]}:{main:es[700],light:es[400],dark:es[800]}}function eD(t="light"){return t==="dark"?{main:Jo[200],light:Jo[50],dark:Jo[400]}:{main:Jo[500],light:Jo[300],dark:Jo[700]}}function tD(t="light"){return t==="dark"?{main:Zo[500],light:Zo[300],dark:Zo[700]}:{main:Zo[700],light:Zo[400],dark:Zo[800]}}function nD(t="light"){return t==="dark"?{main:ts[400],light:ts[300],dark:ts[700]}:{main:ts[700],light:ts[500],dark:ts[900]}}function rD(t="light"){return t==="dark"?{main:ns[400],light:ns[300],dark:ns[700]}:{main:ns[800],light:ns[500],dark:ns[900]}}function iD(t="light"){return t==="dark"?{main:za[400],light:za[300],dark:za[700]}:{main:"#ed6c02",light:za[500],dark:za[900]}}function y0(t){const{mode:e="light",contrastThreshold:n=3,tonalOffset:r=.2,...i}=t,o=t.primary||ZO(e),s=t.secondary||eD(e),a=t.error||tD(e),u=t.info||nD(e),c=t.success||rD(e),d=t.warning||iD(e);function f(I){return $O(I,sw.text.primary)>=n?sw.text.primary:JO.text.primary}const m=({color:I,name:R,mainShade:S=500,lightShade:E=300,darkShade:y=700})=>{if(I={...I},!I.main&&I[S]&&(I.main=I[S]),!I.hasOwnProperty("main"))throw new Error(Ro(11,R?` (${R})`:"",S));if(typeof I.main!="string")throw new Error(Ro(12,R?` (${R})`:"",JSON.stringify(I.main)));return aw(I,"light",E,r),aw(I,"dark",y,r),I.contrastText||(I.contrastText=f(I.main)),I};let v;return e==="light"?v=kI():e==="dark"&&(v=PI()),_n({common:{...Gl},mode:e,primary:m({color:o,name:"primary"}),secondary:m({color:s,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:m({color:a,name:"error"}),warning:m({color:d,name:"warning"}),info:m({color:u,name:"info"}),success:m({color:c,name:"success"}),grey:XO,contrastThreshold:n,getContrastText:f,augmentColor:m,tonalOffset:r,...v},i)}function oD(t){const e={};return Object.entries(t).forEach(r=>{const[i,o]=r;typeof o=="object"&&(e[i]=`${o.fontStyle?`${o.fontStyle} `:""}${o.fontVariant?`${o.fontVariant} `:""}${o.fontWeight?`${o.fontWeight} `:""}${o.fontStretch?`${o.fontStretch} `:""}${o.fontSize||""}${o.lineHeight?`/${o.lineHeight} `:""}${o.fontFamily||""}`)}),e}function sD(t,e){return{toolbar:{minHeight:56,[t.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[t.up("sm")]:{minHeight:64}},...e}}function aD(t){return Math.round(t*1e5)/1e5}const lw={textTransform:"uppercase"},uw='"Roboto", "Helvetica", "Arial", sans-serif';function lD(t,e){const{fontFamily:n=uw,fontSize:r=14,fontWeightLight:i=300,fontWeightRegular:o=400,fontWeightMedium:s=500,fontWeightBold:a=700,htmlFontSize:u=16,allVariants:c,pxToRem:d,...f}=typeof e=="function"?e(t):e,m=r/14,v=d||(R=>`${R/u*m}rem`),w=(R,S,E,y,A)=>({fontFamily:n,fontWeight:R,fontSize:v(S),lineHeight:E,...n===uw?{letterSpacing:`${aD(y/S)}em`}:{},...A,...c}),I={h1:w(i,96,1.167,-1.5),h2:w(i,60,1.2,-.5),h3:w(o,48,1.167,0),h4:w(o,34,1.235,.25),h5:w(o,24,1.334,0),h6:w(s,20,1.6,.15),subtitle1:w(o,16,1.75,.15),subtitle2:w(s,14,1.57,.1),body1:w(o,16,1.5,.15),body2:w(o,14,1.43,.15),button:w(s,14,1.75,.4,lw),caption:w(o,12,1.66,.4),overline:w(o,12,2.66,1,lw),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return _n({htmlFontSize:u,pxToRem:v,fontFamily:n,fontSize:r,fontWeightLight:i,fontWeightRegular:o,fontWeightMedium:s,fontWeightBold:a,...I},f,{clone:!1})}const uD=.2,cD=.14,dD=.12;function je(...t){return[`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${uD})`,`${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${cD})`,`${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${dD})`].join(",")}const hD=["none",je(0,2,1,-1,0,1,1,0,0,1,3,0),je(0,3,1,-2,0,2,2,0,0,1,5,0),je(0,3,3,-2,0,3,4,0,0,1,8,0),je(0,2,4,-1,0,4,5,0,0,1,10,0),je(0,3,5,-1,0,5,8,0,0,1,14,0),je(0,3,5,-1,0,6,10,0,0,1,18,0),je(0,4,5,-2,0,7,10,1,0,2,16,1),je(0,5,5,-3,0,8,10,1,0,3,14,2),je(0,5,6,-3,0,9,12,1,0,3,16,2),je(0,6,6,-3,0,10,14,1,0,4,18,3),je(0,6,7,-4,0,11,15,1,0,4,20,3),je(0,7,8,-4,0,12,17,2,0,5,22,4),je(0,7,8,-4,0,13,19,2,0,5,24,4),je(0,7,9,-4,0,14,21,2,0,5,26,4),je(0,8,9,-5,0,15,22,2,0,6,28,5),je(0,8,10,-5,0,16,24,2,0,6,30,5),je(0,8,11,-5,0,17,26,2,0,6,32,5),je(0,9,11,-5,0,18,28,2,0,7,34,6),je(0,9,12,-6,0,19,29,2,0,7,36,6),je(0,10,13,-6,0,20,31,3,0,8,38,7),je(0,10,13,-6,0,21,33,3,0,8,40,7),je(0,10,14,-6,0,22,35,3,0,8,42,7),je(0,11,14,-7,0,23,36,3,0,9,44,8),je(0,11,15,-7,0,24,38,3,0,9,46,8)],fD={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},pD={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function cw(t){return`${Math.round(t)}ms`}function mD(t){if(!t)return 0;const e=t/36;return Math.min(Math.round((4+15*e**.25+e/5)*10),3e3)}function gD(t){const e={...fD,...t.easing},n={...pD,...t.duration};return{getAutoHeightDuration:mD,create:(i=["all"],o={})=>{const{duration:s=n.standard,easing:a=e.easeInOut,delay:u=0,...c}=o;return(Array.isArray(i)?i:[i]).map(d=>`${d} ${typeof s=="string"?s:cw(s)} ${a} ${typeof u=="string"?u:cw(u)}`).join(",")},...t,easing:e,duration:n}}const yD={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function vD(t){return Pr(t)||typeof t>"u"||typeof t=="string"||typeof t=="boolean"||typeof t=="number"||Array.isArray(t)}function NI(t={}){const e={...t};function n(r){const i=Object.entries(r);for(let o=0;o<i.length;o++){const[s,a]=i[o];!vD(a)||s.startsWith("unstable_")?delete r[s]:Pr(a)&&(r[s]={...a},n(r[s]))}}return n(e),`import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(e,null,2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`}function sg(t={},...e){const{breakpoints:n,mixins:r={},spacing:i,palette:o={},transitions:s={},typography:a={},shape:u,...c}=t;if(t.vars)throw new Error(Ro(20));const d=y0(o),f=f0(t);let m=_n(f,{mixins:sD(f.breakpoints,r),palette:d,shadows:hD.slice(),typography:lD(d,a),transitions:gD(s),zIndex:{...yD}});return m=_n(m,c),m=e.reduce((v,w)=>_n(v,w),m),m.unstable_sxConfig={...Uh,...c==null?void 0:c.unstable_sxConfig},m.unstable_sx=function(w){return Ks({sx:w,theme:this})},m.toRuntimeSource=NI,m}function ag(t){let e;return t<1?e=5.11916*t**2:e=4.5*Math.log(t+1)+2,Math.round(e*10)/1e3}const _D=[...Array(25)].map((t,e)=>{if(e===0)return"none";const n=ag(e);return`linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`});function OI(t){return{inputPlaceholder:t==="dark"?.5:.42,inputUnderline:t==="dark"?.7:.42,switchTrackDisabled:t==="dark"?.2:.12,switchTrack:t==="dark"?.3:.38}}function DI(t){return t==="dark"?_D:[]}function wD(t){const{palette:e={mode:"light"},opacity:n,overlays:r,...i}=t,o=y0(e);return{palette:o,opacity:{...OI(o.mode),...n},overlays:r||DI(o.mode),...i}}function ED(t){var e;return!!t[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/)||!!t[0].match(/sxConfig$/)||t[0]==="palette"&&!!((e=t[1])!=null&&e.match(/(mode|contrastThreshold|tonalOffset)/))}const TD=t=>[...[...Array(25)].map((e,n)=>`--${t?`${t}-`:""}overlays-${n}`),`--${t?`${t}-`:""}palette-AppBar-darkBg`,`--${t?`${t}-`:""}palette-AppBar-darkColor`],SD=t=>(e,n)=>{const r=t.rootSelector||":root",i=t.colorSchemeSelector;let o=i;if(i==="class"&&(o=".%s"),i==="data"&&(o="[data-%s]"),i!=null&&i.startsWith("data-")&&!i.includes("%s")&&(o=`[${i}="%s"]`),t.defaultColorScheme===e){if(e==="dark"){const s={};return TD(t.cssVarPrefix).forEach(a=>{s[a]=n[a],delete n[a]}),o==="media"?{[r]:n,"@media (prefers-color-scheme: dark)":{[r]:s}}:o?{[o.replace("%s",e)]:s,[`${r}, ${o.replace("%s",e)}`]:n}:{[r]:{...n,...s}}}if(o&&o!=="media")return`${r}, ${o.replace("%s",String(e))}`}else if(e){if(o==="media")return{[`@media (prefers-color-scheme: ${String(e)})`]:{[r]:n}};if(o)return o.replace("%s",String(e))}return r};function xD(t,e){e.forEach(n=>{t[n]||(t[n]={})})}function j(t,e,n){!t[e]&&n&&(t[e]=n)}function Za(t){return!t||!t.startsWith("hsl")?t:RI(t)}function Cr(t,e){`${e}Channel`in t||(t[`${e}Channel`]=Ja(Za(t[e]),`MUI: Can't create \`palette.${e}Channel\` because \`palette.${e}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${e}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`))}function ID(t){return typeof t=="number"?`${t}px`:typeof t=="string"||typeof t=="function"||Array.isArray(t)?t:"8px"}const rr=t=>{try{return t()}catch{}},CD=(t="mui")=>qO(t);function Pp(t,e,n,r){if(!e)return;e=e===!0?{}:e;const i=r==="dark"?"dark":"light";if(!n){t[r]=wD({...e,palette:{mode:i,...e==null?void 0:e.palette}});return}const{palette:o,...s}=sg({...n,palette:{mode:i,...e==null?void 0:e.palette}});return t[r]={...e,palette:o,opacity:{...OI(i),...e==null?void 0:e.opacity},overlays:(e==null?void 0:e.overlays)||DI(i)},s}function AD(t={},...e){const{colorSchemes:n={light:!0},defaultColorScheme:r,disableCssColorScheme:i=!1,cssVarPrefix:o="mui",shouldSkipGeneratingVar:s=ED,colorSchemeSelector:a=n.light&&n.dark?"media":void 0,rootSelector:u=":root",...c}=t,d=Object.keys(n)[0],f=r||(n.light&&d!=="light"?"light":d),m=CD(o),{[f]:v,light:w,dark:I,...R}=n,S={...R};let E=v;if((f==="dark"&&!("dark"in n)||f==="light"&&!("light"in n))&&(E=!0),!E)throw new Error(Ro(21,f));const y=Pp(S,E,c,f);w&&!S.light&&Pp(S,w,void 0,"light"),I&&!S.dark&&Pp(S,I,void 0,"dark");let A={defaultColorScheme:f,...y,cssVarPrefix:o,colorSchemeSelector:a,rootSelector:u,getCssVar:m,colorSchemes:S,font:{...oD(y.typography),...y.font},spacing:ID(c.spacing)};Object.keys(A.colorSchemes).forEach(b=>{const p=A.colorSchemes[b].palette,k=N=>{const P=N.split("-"),Q=P[1],z=P[2];return m(N,p[Q][z])};if(p.mode==="light"&&(j(p.common,"background","#fff"),j(p.common,"onBackground","#000")),p.mode==="dark"&&(j(p.common,"background","#000"),j(p.common,"onBackground","#fff")),xD(p,["Alert","AppBar","Avatar","Button","Chip","FilledInput","LinearProgress","Skeleton","Slider","SnackbarContent","SpeedDialAction","StepConnector","StepContent","Switch","TableCell","Tooltip"]),p.mode==="light"){j(p.Alert,"errorColor",Re(p.error.light,.6)),j(p.Alert,"infoColor",Re(p.info.light,.6)),j(p.Alert,"successColor",Re(p.success.light,.6)),j(p.Alert,"warningColor",Re(p.warning.light,.6)),j(p.Alert,"errorFilledBg",k("palette-error-main")),j(p.Alert,"infoFilledBg",k("palette-info-main")),j(p.Alert,"successFilledBg",k("palette-success-main")),j(p.Alert,"warningFilledBg",k("palette-warning-main")),j(p.Alert,"errorFilledColor",rr(()=>p.getContrastText(p.error.main))),j(p.Alert,"infoFilledColor",rr(()=>p.getContrastText(p.info.main))),j(p.Alert,"successFilledColor",rr(()=>p.getContrastText(p.success.main))),j(p.Alert,"warningFilledColor",rr(()=>p.getContrastText(p.warning.main))),j(p.Alert,"errorStandardBg",ke(p.error.light,.9)),j(p.Alert,"infoStandardBg",ke(p.info.light,.9)),j(p.Alert,"successStandardBg",ke(p.success.light,.9)),j(p.Alert,"warningStandardBg",ke(p.warning.light,.9)),j(p.Alert,"errorIconColor",k("palette-error-main")),j(p.Alert,"infoIconColor",k("palette-info-main")),j(p.Alert,"successIconColor",k("palette-success-main")),j(p.Alert,"warningIconColor",k("palette-warning-main")),j(p.AppBar,"defaultBg",k("palette-grey-100")),j(p.Avatar,"defaultBg",k("palette-grey-400")),j(p.Button,"inheritContainedBg",k("palette-grey-300")),j(p.Button,"inheritContainedHoverBg",k("palette-grey-A100")),j(p.Chip,"defaultBorder",k("palette-grey-400")),j(p.Chip,"defaultAvatarColor",k("palette-grey-700")),j(p.Chip,"defaultIconColor",k("palette-grey-700")),j(p.FilledInput,"bg","rgba(0, 0, 0, 0.06)"),j(p.FilledInput,"hoverBg","rgba(0, 0, 0, 0.09)"),j(p.FilledInput,"disabledBg","rgba(0, 0, 0, 0.12)"),j(p.LinearProgress,"primaryBg",ke(p.primary.main,.62)),j(p.LinearProgress,"secondaryBg",ke(p.secondary.main,.62)),j(p.LinearProgress,"errorBg",ke(p.error.main,.62)),j(p.LinearProgress,"infoBg",ke(p.info.main,.62)),j(p.LinearProgress,"successBg",ke(p.success.main,.62)),j(p.LinearProgress,"warningBg",ke(p.warning.main,.62)),j(p.Skeleton,"bg",`rgba(${k("palette-text-primaryChannel")} / 0.11)`),j(p.Slider,"primaryTrack",ke(p.primary.main,.62)),j(p.Slider,"secondaryTrack",ke(p.secondary.main,.62)),j(p.Slider,"errorTrack",ke(p.error.main,.62)),j(p.Slider,"infoTrack",ke(p.info.main,.62)),j(p.Slider,"successTrack",ke(p.success.main,.62)),j(p.Slider,"warningTrack",ke(p.warning.main,.62));const N=_c(p.background.default,.8);j(p.SnackbarContent,"bg",N),j(p.SnackbarContent,"color",rr(()=>p.getContrastText(N))),j(p.SpeedDialAction,"fabHoverBg",_c(p.background.paper,.15)),j(p.StepConnector,"border",k("palette-grey-400")),j(p.StepContent,"border",k("palette-grey-400")),j(p.Switch,"defaultColor",k("palette-common-white")),j(p.Switch,"defaultDisabledColor",k("palette-grey-100")),j(p.Switch,"primaryDisabledColor",ke(p.primary.main,.62)),j(p.Switch,"secondaryDisabledColor",ke(p.secondary.main,.62)),j(p.Switch,"errorDisabledColor",ke(p.error.main,.62)),j(p.Switch,"infoDisabledColor",ke(p.info.main,.62)),j(p.Switch,"successDisabledColor",ke(p.success.main,.62)),j(p.Switch,"warningDisabledColor",ke(p.warning.main,.62)),j(p.TableCell,"border",ke(vc(p.divider,1),.88)),j(p.Tooltip,"bg",vc(p.grey[700],.92))}if(p.mode==="dark"){j(p.Alert,"errorColor",ke(p.error.light,.6)),j(p.Alert,"infoColor",ke(p.info.light,.6)),j(p.Alert,"successColor",ke(p.success.light,.6)),j(p.Alert,"warningColor",ke(p.warning.light,.6)),j(p.Alert,"errorFilledBg",k("palette-error-dark")),j(p.Alert,"infoFilledBg",k("palette-info-dark")),j(p.Alert,"successFilledBg",k("palette-success-dark")),j(p.Alert,"warningFilledBg",k("palette-warning-dark")),j(p.Alert,"errorFilledColor",rr(()=>p.getContrastText(p.error.dark))),j(p.Alert,"infoFilledColor",rr(()=>p.getContrastText(p.info.dark))),j(p.Alert,"successFilledColor",rr(()=>p.getContrastText(p.success.dark))),j(p.Alert,"warningFilledColor",rr(()=>p.getContrastText(p.warning.dark))),j(p.Alert,"errorStandardBg",Re(p.error.light,.9)),j(p.Alert,"infoStandardBg",Re(p.info.light,.9)),j(p.Alert,"successStandardBg",Re(p.success.light,.9)),j(p.Alert,"warningStandardBg",Re(p.warning.light,.9)),j(p.Alert,"errorIconColor",k("palette-error-main")),j(p.Alert,"infoIconColor",k("palette-info-main")),j(p.Alert,"successIconColor",k("palette-success-main")),j(p.Alert,"warningIconColor",k("palette-warning-main")),j(p.AppBar,"defaultBg",k("palette-grey-900")),j(p.AppBar,"darkBg",k("palette-background-paper")),j(p.AppBar,"darkColor",k("palette-text-primary")),j(p.Avatar,"defaultBg",k("palette-grey-600")),j(p.Button,"inheritContainedBg",k("palette-grey-800")),j(p.Button,"inheritContainedHoverBg",k("palette-grey-700")),j(p.Chip,"defaultBorder",k("palette-grey-700")),j(p.Chip,"defaultAvatarColor",k("palette-grey-300")),j(p.Chip,"defaultIconColor",k("palette-grey-300")),j(p.FilledInput,"bg","rgba(255, 255, 255, 0.09)"),j(p.FilledInput,"hoverBg","rgba(255, 255, 255, 0.13)"),j(p.FilledInput,"disabledBg","rgba(255, 255, 255, 0.12)"),j(p.LinearProgress,"primaryBg",Re(p.primary.main,.5)),j(p.LinearProgress,"secondaryBg",Re(p.secondary.main,.5)),j(p.LinearProgress,"errorBg",Re(p.error.main,.5)),j(p.LinearProgress,"infoBg",Re(p.info.main,.5)),j(p.LinearProgress,"successBg",Re(p.success.main,.5)),j(p.LinearProgress,"warningBg",Re(p.warning.main,.5)),j(p.Skeleton,"bg",`rgba(${k("palette-text-primaryChannel")} / 0.13)`),j(p.Slider,"primaryTrack",Re(p.primary.main,.5)),j(p.Slider,"secondaryTrack",Re(p.secondary.main,.5)),j(p.Slider,"errorTrack",Re(p.error.main,.5)),j(p.Slider,"infoTrack",Re(p.info.main,.5)),j(p.Slider,"successTrack",Re(p.success.main,.5)),j(p.Slider,"warningTrack",Re(p.warning.main,.5));const N=_c(p.background.default,.98);j(p.SnackbarContent,"bg",N),j(p.SnackbarContent,"color",rr(()=>p.getContrastText(N))),j(p.SpeedDialAction,"fabHoverBg",_c(p.background.paper,.15)),j(p.StepConnector,"border",k("palette-grey-600")),j(p.StepContent,"border",k("palette-grey-600")),j(p.Switch,"defaultColor",k("palette-grey-300")),j(p.Switch,"defaultDisabledColor",k("palette-grey-600")),j(p.Switch,"primaryDisabledColor",Re(p.primary.main,.55)),j(p.Switch,"secondaryDisabledColor",Re(p.secondary.main,.55)),j(p.Switch,"errorDisabledColor",Re(p.error.main,.55)),j(p.Switch,"infoDisabledColor",Re(p.info.main,.55)),j(p.Switch,"successDisabledColor",Re(p.success.main,.55)),j(p.Switch,"warningDisabledColor",Re(p.warning.main,.55)),j(p.TableCell,"border",Re(vc(p.divider,1),.68)),j(p.Tooltip,"bg",vc(p.grey[700],.92))}Cr(p.background,"default"),Cr(p.background,"paper"),Cr(p.common,"background"),Cr(p.common,"onBackground"),Cr(p,"divider"),Object.keys(p).forEach(N=>{const P=p[N];P&&typeof P=="object"&&(P.main&&j(p[N],"mainChannel",Ja(Za(P.main))),P.light&&j(p[N],"lightChannel",Ja(Za(P.light))),P.dark&&j(p[N],"darkChannel",Ja(Za(P.dark))),P.contrastText&&j(p[N],"contrastTextChannel",Ja(Za(P.contrastText))),N==="text"&&(Cr(p[N],"primary"),Cr(p[N],"secondary")),N==="action"&&(P.active&&Cr(p[N],"active"),P.selected&&Cr(p[N],"selected")))})}),A=e.reduce((b,p)=>_n(b,p),A);const D={prefix:o,disableCssColorScheme:i,shouldSkipGeneratingVar:s,getSelector:SD(A)},{vars:M,generateThemeVars:T,generateStyleSheets:x}=QO(A,D);return A.vars=M,Object.entries(A.colorSchemes[A.defaultColorScheme]).forEach(([b,p])=>{A[b]=p}),A.generateThemeVars=T,A.generateStyleSheets=x,A.generateSpacing=function(){return CI(c.spacing,r0(this))},A.getColorSchemeSelector=YO(a),A.spacing=A.generateSpacing(),A.shouldSkipGeneratingVar=s,A.unstable_sxConfig={...Uh,...c==null?void 0:c.unstable_sxConfig},A.unstable_sx=function(p){return Ks({sx:p,theme:this})},A.toRuntimeSource=NI,A}function dw(t,e,n){t.colorSchemes&&n&&(t.colorSchemes[e]={...n!==!0&&n,palette:y0({...n===!0?{}:n.palette,mode:e})})}function bD(t={},...e){const{palette:n,cssVariables:r=!1,colorSchemes:i=n?void 0:{light:!0},defaultColorScheme:o=n==null?void 0:n.mode,...s}=t,a=o||"light",u=i==null?void 0:i[a],c={...i,...n?{[a]:{...typeof u!="boolean"&&u,palette:n}}:void 0};if(r===!1){if(!("colorSchemes"in t))return sg(t,...e);let d=n;"palette"in t||c[a]&&(c[a]!==!0?d=c[a].palette:a==="dark"&&(d={mode:"dark"}));const f=sg({...t,palette:d},...e);return f.defaultColorScheme=a,f.colorSchemes=c,f.palette.mode==="light"&&(f.colorSchemes.light={...c.light!==!0&&c.light,palette:f.palette},dw(f,"dark",c.dark)),f.palette.mode==="dark"&&(f.colorSchemes.dark={...c.dark!==!0&&c.dark,palette:f.palette},dw(f,"light",c.light)),f}return!n&&!("light"in c)&&a==="light"&&(c.light=!0),AD({...s,colorSchemes:c,defaultColorScheme:a,...typeof r!="boolean"&&r},...e)}const MI=bD(),LI="$$material";function v0(){const t=RO(MI);return t[LI]||t}function RD(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const kD=t=>RD(t)&&t!=="classes",tr=OO({themeId:LI,defaultTheme:MI,rootShouldForwardProp:kD}),Kl=WO;function qi(t){return HO(t)}function PD(t){return Hi("MuiSvgIcon",t)}Wi("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const ND=t=>{const{color:e,fontSize:n,classes:r}=t,i={root:["root",e!=="inherit"&&`color${Ln(e)}`,`fontSize${Ln(n)}`]};return jo(i,PD,r)},OD=tr("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.color!=="inherit"&&e[`color${Ln(n.color)}`],e[`fontSize${Ln(n.fontSize)}`]]}})(Kl(({theme:t})=>{var e,n,r,i,o,s,a,u,c,d,f,m,v,w;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:(i=(e=t.transitions)==null?void 0:e.create)==null?void 0:i.call(e,"fill",{duration:(r=(n=(t.vars??t).transitions)==null?void 0:n.duration)==null?void 0:r.shorter}),variants:[{props:I=>!I.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:((s=(o=t.typography)==null?void 0:o.pxToRem)==null?void 0:s.call(o,20))||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:((u=(a=t.typography)==null?void 0:a.pxToRem)==null?void 0:u.call(a,24))||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:((d=(c=t.typography)==null?void 0:c.pxToRem)==null?void 0:d.call(c,35))||"2.1875rem"}},...Object.entries((t.vars??t).palette).filter(([,I])=>I&&I.main).map(([I])=>{var R,S;return{props:{color:I},style:{color:(S=(R=(t.vars??t).palette)==null?void 0:R[I])==null?void 0:S.main}}}),{props:{color:"action"},style:{color:(m=(f=(t.vars??t).palette)==null?void 0:f.action)==null?void 0:m.active}},{props:{color:"disabled"},style:{color:(w=(v=(t.vars??t).palette)==null?void 0:v.action)==null?void 0:w.disabled}},{props:{color:"inherit"},style:{color:void 0}}]}})),Vd=O.forwardRef(function(e,n){const r=qi({props:e,name:"MuiSvgIcon"}),{children:i,className:o,color:s="inherit",component:a="svg",fontSize:u="medium",htmlColor:c,inheritViewBox:d=!1,titleAccess:f,viewBox:m="0 0 24 24",...v}=r,w=O.isValidElement(i)&&i.type==="svg",I={...r,color:s,component:a,fontSize:u,instanceFontSize:e.fontSize,inheritViewBox:d,viewBox:m,hasSvgAsChild:w},R={};d||(R.viewBox=m);const S=ND(I);return _.jsxs(OD,{as:a,className:it(S.root,o),focusable:"false",color:c,"aria-hidden":f?void 0:!0,role:f?"img":void 0,ref:n,...R,...v,...w&&i.props,ownerState:I,children:[w?i.props.children:i,f?_.jsx("title",{children:f}):null]})});Vd&&(Vd.muiName="SvgIcon");function ce(t,e){function n(r,i){return _.jsx(Vd,{"data-testid":`${e}Icon`,ref:i,...r,children:t})}return n.muiName=Vd.muiName,O.memo(O.forwardRef(n))}const DD=ce([_.jsx("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"},"0"),_.jsx("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"AccessTime"),MD=ce(_.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20"}),"AccountCircle"),LD=ce(_.jsx("path",{d:"M4 8h4V4H4zm6 12h4v-4h-4zm-6 0h4v-4H4zm0-6h4v-4H4zm6 0h4v-4h-4zm6-10v4h4V4zm-6 4h4V4h-4zm6 6h4v-4h-4zm0 6h4v-4h-4z"}),"Apps"),VD=ce(_.jsx("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown"),jD=ce([_.jsx("circle",{cx:"12",cy:"12",r:"3.2"},"0"),_.jsx("path",{d:"M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5"},"1")],"CameraAlt"),FD=ce(_.jsx("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"}),"CheckCircleOutline"),$D=ce(_.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),UD=ce(_.jsx("path",{d:"M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2zM4 6h16v10H4z"}),"Computer"),BD=ce(_.jsx("path",{d:"M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m0 12H4V6h5.17l2 2H20zm-8-4h2v2h2v-2h2v-2h-2v-2h-2v2h-2z"}),"CreateNewFolderOutlined"),VI=ce(_.jsx("path",{d:"M16 9v10H8V9zm-1.5-6h-5l-1 1H5v2h14V4h-3.5zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2z"}),"DeleteOutlined"),zD=ce(_.jsx("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm2 16H8v-2h8zm0-4H8v-2h8zm-3-5V3.5L18.5 9z"}),"Description"),HD=ce(_.jsx("path",{d:"m15 16-4 4h10v-4zm-2.94-8.81L3 16.25V20h3.75l9.06-9.06zM5.92 18H5v-.92l7.06-7.06.92.92zm12.79-9.96c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75z"}),"DriveFileRenameOutlineOutlined"),WD=ce(_.jsx("path",{d:"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 12H4V6h5.17l2 2H20zM9.41 14.42 11 12.84V17h2v-4.16l1.59 1.59L16 13.01 12.01 9 8 13.01z"}),"DriveFolderUploadOutlined"),qD=ce(_.jsx("path",{d:"M10.09 15.59 11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"}),"ExitToApp"),GD=ce(_.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMoreOutlined"),KD=ce(_.jsx("path",{d:"M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3zm-1-4-1.41-1.41L13 12.17V4h-2v8.17L8.41 9.59 7 11l5 5z"}),"FileDownloadOutlined"),QD=ce(_.jsx("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.61 5.64 5.36 8.04 2.35 8.36 0 10.9 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4h2c0-2.76-1.86-5.08-4.4-5.78C8.61 6.88 10.2 6 12 6c3.03 0 5.5 2.47 5.5 5.5v.5H19c1.65 0 3 1.35 3 3s-1.35 3-3 3"}),"FilterDrama"),jI=ce(_.jsx("path",{d:"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8z"}),"Folder"),YD=ce(_.jsx("path",{d:"M11 18h2v-2h-2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4"}),"HelpOutline"),XD=ce(_.jsx("path",{d:"m12 5.69 5 4.5V18h-2v-6H9v6H7v-7.81zM12 3 2 12h3v8h6v-6h2v6h6v-8h3z"}),"HomeOutlined"),JD=ce(_.jsx("path",{d:"M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm7 7V3.5L18.5 9z"}),"InsertDriveFile"),lg=ce(_.jsx("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"}),"InsertPhoto"),ZD=ce(_.jsx("path",{d:"m16 5-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4zm4 5v11c0 1.1-.9 2-2 2H6c-1.11 0-2-.9-2-2V10c0-1.11.89-2 2-2h3v2H6v11h12V10h-3V8h3c1.1 0 2 .89 2 2"}),"IosShareOutlined"),eM=ce(_.jsx("path",{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}),"KeyboardBackspaceOutlined"),tM=ce(_.jsx("path",{d:"M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zM20.1 3H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9M19 19H5V5h14z"}),"ListAltOutlined"),FI=ce(_.jsx("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"}),"MoreVert"),nM=ce(_.jsx("path",{d:"M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24m-6 0c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4m6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2z"}),"PeopleAltOutlined"),rM=ce(_.jsx("path",{d:"M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27zM12 17.3c-.72 0-1.3-.58-1.3-1.3s.58-1.3 1.3-1.3 1.3.58 1.3 1.3-.58 1.3-1.3 1.3m1-4.3h-2V7h2z"}),"Report"),iM=ce(_.jsx("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search"),oM=ce(_.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"}),"Settings"),sM=ce(_.jsx("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92M18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"}),"ShareOutlined"),$I=ce(_.jsx("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z"}),"StarBorderOutlined"),aM=ce(_.jsx("path",{d:"M3 17v2h6v-2zM3 5v2h10V5zm10 16v-2h8v-2h-8v-2h-2v6zM7 9v2H3v2h4v2h2V9zm14 4v-2H11v2zm-6-4h2V7h4V5h-4V3h-2z"}),"Tune"),lM=ce(_.jsx("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z"}),"UploadFileOutlined"),uM=ce(_.jsx("path",{d:"M21 18H2v2h19zm-2-8v4H4v-4zm1-2H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1m1-4H2v2h19z"}),"ViewDayOutlined"),cM=ce(_.jsx("path",{d:"M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z"}),"WarningOutlined"),UI=ce(_.jsx("path",{d:"m15 3 2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z"}),"ZoomOutMapOutlined");function BI(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.includes(r))continue;n[r]=t[r]}return n}function ug(t,e){return ug=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},ug(t,e)}function zI(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,ug(t,e)}const hw={disabled:!1},jd=Ft.createContext(null);var dM=function(e){return e.scrollTop},el="unmounted",ro="exited",io="entering",is="entered",cg="exiting",Er=function(t){zI(e,t);function e(r,i){var o;o=t.call(this,r,i)||this;var s=i,a=s&&!s.isMounting?r.enter:r.appear,u;return o.appearStatus=null,r.in?a?(u=ro,o.appearStatus=io):u=is:r.unmountOnExit||r.mountOnEnter?u=el:u=ro,o.state={status:u},o.nextCallback=null,o}e.getDerivedStateFromProps=function(i,o){var s=i.in;return s&&o.status===el?{status:ro}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var o=null;if(i!==this.props){var s=this.state.status;this.props.in?s!==io&&s!==is&&(o=io):(s===io||s===is)&&(o=cg)}this.updateStatus(!1,o)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,o,s,a;return o=s=a=i,i!=null&&typeof i!="number"&&(o=i.exit,s=i.enter,a=i.appear!==void 0?i.appear:s),{exit:o,enter:s,appear:a}},n.updateStatus=function(i,o){if(i===void 0&&(i=!1),o!==null)if(this.cancelNextCallback(),o===io){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:pc.findDOMNode(this);s&&dM(s)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ro&&this.setState({status:el})},n.performEnter=function(i){var o=this,s=this.props.enter,a=this.context?this.context.isMounting:i,u=this.props.nodeRef?[a]:[pc.findDOMNode(this),a],c=u[0],d=u[1],f=this.getTimeouts(),m=a?f.appear:f.enter;if(!i&&!s||hw.disabled){this.safeSetState({status:is},function(){o.props.onEntered(c)});return}this.props.onEnter(c,d),this.safeSetState({status:io},function(){o.props.onEntering(c,d),o.onTransitionEnd(m,function(){o.safeSetState({status:is},function(){o.props.onEntered(c,d)})})})},n.performExit=function(){var i=this,o=this.props.exit,s=this.getTimeouts(),a=this.props.nodeRef?void 0:pc.findDOMNode(this);if(!o||hw.disabled){this.safeSetState({status:ro},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:cg},function(){i.props.onExiting(a),i.onTransitionEnd(s.exit,function(){i.safeSetState({status:ro},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,o){o=this.setNextCallback(o),this.setState(i,o)},n.setNextCallback=function(i){var o=this,s=!0;return this.nextCallback=function(a){s&&(s=!1,o.nextCallback=null,i(a))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},n.onTransitionEnd=function(i,o){this.setNextCallback(o);var s=this.props.nodeRef?this.props.nodeRef.current:pc.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!s||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],c=u[0],d=u[1];this.props.addEndListener(c,d)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===el)return null;var o=this.props,s=o.children;o.in,o.mountOnEnter,o.unmountOnExit,o.appear,o.enter,o.exit,o.timeout,o.addEndListener,o.onEnter,o.onEntering,o.onEntered,o.onExit,o.onExiting,o.onExited,o.nodeRef;var a=BI(o,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Ft.createElement(jd.Provider,{value:null},typeof s=="function"?s(i,a):Ft.cloneElement(Ft.Children.only(s),a))},e}(Ft.Component);Er.contextType=jd;Er.propTypes={};function rs(){}Er.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:rs,onEntering:rs,onEntered:rs,onExit:rs,onExiting:rs,onExited:rs};Er.UNMOUNTED=el;Er.EXITED=ro;Er.ENTERING=io;Er.ENTERED=is;Er.EXITING=cg;function hM(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _0(t,e){var n=function(o){return e&&O.isValidElement(o)?e(o):o},r=Object.create(null);return t&&O.Children.map(t,function(i){return i}).forEach(function(i){r[i.key]=n(i)}),r}function fM(t,e){t=t||{},e=e||{};function n(d){return d in e?e[d]:t[d]}var r=Object.create(null),i=[];for(var o in t)o in e?i.length&&(r[o]=i,i=[]):i.push(o);var s,a={};for(var u in e){if(r[u])for(s=0;s<r[u].length;s++){var c=r[u][s];a[r[u][s]]=n(c)}a[u]=n(u)}for(s=0;s<i.length;s++)a[i[s]]=n(i[s]);return a}function ho(t,e,n){return n[e]!=null?n[e]:t.props[e]}function pM(t,e){return _0(t.children,function(n){return O.cloneElement(n,{onExited:e.bind(null,n),in:!0,appear:ho(n,"appear",t),enter:ho(n,"enter",t),exit:ho(n,"exit",t)})})}function mM(t,e,n){var r=_0(t.children),i=fM(e,r);return Object.keys(i).forEach(function(o){var s=i[o];if(O.isValidElement(s)){var a=o in e,u=o in r,c=e[o],d=O.isValidElement(c)&&!c.props.in;u&&(!a||d)?i[o]=O.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:ho(s,"exit",t),enter:ho(s,"enter",t)}):!u&&a&&!d?i[o]=O.cloneElement(s,{in:!1}):u&&a&&O.isValidElement(c)&&(i[o]=O.cloneElement(s,{onExited:n.bind(null,s),in:c.props.in,exit:ho(s,"exit",t),enter:ho(s,"enter",t)}))}}),i}var gM=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},yM={component:"div",childFactory:function(e){return e}},w0=function(t){zI(e,t);function e(r,i){var o;o=t.call(this,r,i)||this;var s=o.handleExited.bind(hM(o));return o.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},o}var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(i,o){var s=o.children,a=o.handleExited,u=o.firstRender;return{children:u?pM(i,a):mM(i,s,a),firstRender:!1}},n.handleExited=function(i,o){var s=_0(this.props.children);i.key in s||(i.props.onExited&&i.props.onExited(o),this.mounted&&this.setState(function(a){var u=Md({},a.children);return delete u[i.key],{children:u}}))},n.render=function(){var i=this.props,o=i.component,s=i.childFactory,a=BI(i,["component","childFactory"]),u=this.state.contextValue,c=gM(this.state.children).map(s);return delete a.appear,delete a.enter,delete a.exit,o===null?Ft.createElement(jd.Provider,{value:u},c):Ft.createElement(jd.Provider,{value:u},Ft.createElement(o,a,c))},e}(Ft.Component);w0.propTypes={};w0.defaultProps=yM;const HI=t=>t.scrollTop;function Fd(t,e){const{timeout:n,easing:r,style:i={}}=t;return{duration:i.transitionDuration??(typeof n=="number"?n:n[e.mode]||0),easing:i.transitionTimingFunction??(typeof r=="object"?r[e.mode]:r),delay:i.transitionDelay}}function vM(t){return Hi("MuiPaper",t)}Wi("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const _M=t=>{const{square:e,elevation:n,variant:r,classes:i}=t,o={root:["root",r,!e&&"rounded",r==="elevation"&&`elevation${n}`]};return jo(o,vM,i)},wM=tr("div",{name:"MuiPaper",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],!n.square&&e.rounded,n.variant==="elevation"&&e[`elevation${n.elevation}`]]}})(Kl(({theme:t})=>({backgroundColor:(t.vars||t).palette.background.paper,color:(t.vars||t).palette.text.primary,transition:t.transitions.create("box-shadow"),variants:[{props:({ownerState:e})=>!e.square,style:{borderRadius:t.shape.borderRadius}},{props:{variant:"outlined"},style:{border:`1px solid ${(t.vars||t).palette.divider}`}},{props:{variant:"elevation"},style:{boxShadow:"var(--Paper-shadow)",backgroundImage:"var(--Paper-overlay)"}}]}))),EM=O.forwardRef(function(e,n){var v;const r=qi({props:e,name:"MuiPaper"}),i=v0(),{className:o,component:s="div",elevation:a=1,square:u=!1,variant:c="elevation",...d}=r,f={...r,component:s,elevation:a,square:u,variant:c},m=_M(f);return _.jsx(wM,{as:s,ownerState:f,className:it(m.root,o),ref:n,...d,style:{...c==="elevation"&&{"--Paper-shadow":(i.vars||i).shadows[a],...i.vars&&{"--Paper-overlay":(v=i.vars.overlays)==null?void 0:v[a]},...!i.vars&&i.palette.mode==="dark"&&{"--Paper-overlay":`linear-gradient(${ql("#fff",ag(a))}, ${ql("#fff",ag(a))})`}},...d.style}})});function Ys(t,e){const{className:n,elementType:r,ownerState:i,externalForwardedProps:o,getSlotOwnerState:s,internalForwardedProps:a,...u}=e,{component:c,slots:d={[t]:void 0},slotProps:f={[t]:void 0},...m}=o,v=d[t]||r,w=wN(f[t],i),{props:{component:I,...R},internalRef:S}=_N({className:n,...u,externalForwardedProps:t==="root"?m:void 0,externalSlotProps:w}),E=vr(S,w==null?void 0:w.ref,e.ref),y=s?s(R):{},A={...i,...y},D=t==="root"?I||c:I,M=vN(v,{...t==="root"&&!c&&!d[t]&&a,...t!=="root"&&!d[t]&&a,...R,...D&&{as:D},ref:E},A);return Object.keys(y).forEach(T=>{delete M[T]}),[v,M]}class $d{constructor(){Oa(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new $d}static use(){const e=oI($d.create).current,[n,r]=O.useState(!1);return e.shouldMount=n,e.setShouldMount=r,O.useEffect(e.mountEffect,[n]),e}mount(){return this.mounted||(this.mounted=SM(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.start(...e)})}stop(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.stop(...e)})}pulsate(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.pulsate(...e)})}}function TM(){return $d.use()}function SM(){let t,e;const n=new Promise((r,i)=>{t=r,e=i});return n.resolve=t,n.reject=e,n}function xM(t){const{className:e,classes:n,pulsate:r=!1,rippleX:i,rippleY:o,rippleSize:s,in:a,onExited:u,timeout:c}=t,[d,f]=O.useState(!1),m=it(e,n.ripple,n.rippleVisible,r&&n.ripplePulsate),v={width:s,height:s,top:-(s/2)+o,left:-(s/2)+i},w=it(n.child,d&&n.childLeaving,r&&n.childPulsate);return!a&&!d&&f(!0),O.useEffect(()=>{if(!a&&u!=null){const I=setTimeout(u,c);return()=>{clearTimeout(I)}}},[u,a,c]),_.jsx("span",{className:m,style:v,children:_.jsx("span",{className:w})})}const kn=Wi("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),dg=550,IM=80,CM=h0`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,AM=h0`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,bM=h0`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,RM=tr("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),kM=tr(xM,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${kn.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${CM};
    animation-duration: ${dg}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  &.${kn.ripplePulsate} {
    animation-duration: ${({theme:t})=>t.transitions.duration.shorter}ms;
  }

  & .${kn.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${kn.childLeaving} {
    opacity: 0;
    animation-name: ${AM};
    animation-duration: ${dg}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  & .${kn.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${bM};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,PM=O.forwardRef(function(e,n){const r=qi({props:e,name:"MuiTouchRipple"}),{center:i=!1,classes:o={},className:s,...a}=r,[u,c]=O.useState([]),d=O.useRef(0),f=O.useRef(null);O.useEffect(()=>{f.current&&(f.current(),f.current=null)},[u]);const m=O.useRef(!1),v=sI(),w=O.useRef(null),I=O.useRef(null),R=O.useCallback(A=>{const{pulsate:D,rippleX:M,rippleY:T,rippleSize:x,cb:b}=A;c(p=>[...p,_.jsx(kM,{classes:{ripple:it(o.ripple,kn.ripple),rippleVisible:it(o.rippleVisible,kn.rippleVisible),ripplePulsate:it(o.ripplePulsate,kn.ripplePulsate),child:it(o.child,kn.child),childLeaving:it(o.childLeaving,kn.childLeaving),childPulsate:it(o.childPulsate,kn.childPulsate)},timeout:dg,pulsate:D,rippleX:M,rippleY:T,rippleSize:x},d.current)]),d.current+=1,f.current=b},[o]),S=O.useCallback((A={},D={},M=()=>{})=>{const{pulsate:T=!1,center:x=i||D.pulsate,fakeElement:b=!1}=D;if((A==null?void 0:A.type)==="mousedown"&&m.current){m.current=!1;return}(A==null?void 0:A.type)==="touchstart"&&(m.current=!0);const p=b?null:I.current,k=p?p.getBoundingClientRect():{width:0,height:0,left:0,top:0};let N,P,Q;if(x||A===void 0||A.clientX===0&&A.clientY===0||!A.clientX&&!A.touches)N=Math.round(k.width/2),P=Math.round(k.height/2);else{const{clientX:z,clientY:X}=A.touches&&A.touches.length>0?A.touches[0]:A;N=Math.round(z-k.left),P=Math.round(X-k.top)}if(x)Q=Math.sqrt((2*k.width**2+k.height**2)/3),Q%2===0&&(Q+=1);else{const z=Math.max(Math.abs((p?p.clientWidth:0)-N),N)*2+2,X=Math.max(Math.abs((p?p.clientHeight:0)-P),P)*2+2;Q=Math.sqrt(z**2+X**2)}A!=null&&A.touches?w.current===null&&(w.current=()=>{R({pulsate:T,rippleX:N,rippleY:P,rippleSize:Q,cb:M})},v.start(IM,()=>{w.current&&(w.current(),w.current=null)})):R({pulsate:T,rippleX:N,rippleY:P,rippleSize:Q,cb:M})},[i,R,v]),E=O.useCallback(()=>{S({},{pulsate:!0})},[S]),y=O.useCallback((A,D)=>{if(v.clear(),(A==null?void 0:A.type)==="touchend"&&w.current){w.current(),w.current=null,v.start(0,()=>{y(A,D)});return}w.current=null,c(M=>M.length>0?M.slice(1):M),f.current=D},[v]);return O.useImperativeHandle(n,()=>({pulsate:E,start:S,stop:y}),[E,S,y]),_.jsx(RM,{className:it(kn.root,o.root,s),ref:I,...a,children:_.jsx(w0,{component:null,exit:!0,children:u})})});function NM(t){return Hi("MuiButtonBase",t)}const OM=Wi("MuiButtonBase",["root","disabled","focusVisible"]),DM=t=>{const{disabled:e,focusVisible:n,focusVisibleClassName:r,classes:i}=t,s=jo({root:["root",e&&"disabled",n&&"focusVisible"]},NM,i);return n&&r&&(s.root+=` ${r}`),s},MM=tr("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(t,e)=>e.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${OM.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),LM=O.forwardRef(function(e,n){const r=qi({props:e,name:"MuiButtonBase"}),{action:i,centerRipple:o=!1,children:s,className:a,component:u="button",disabled:c=!1,disableRipple:d=!1,disableTouchRipple:f=!1,focusRipple:m=!1,focusVisibleClassName:v,LinkComponent:w="a",onBlur:I,onClick:R,onContextMenu:S,onDragLeave:E,onFocus:y,onFocusVisible:A,onKeyDown:D,onKeyUp:M,onMouseDown:T,onMouseLeave:x,onMouseUp:b,onTouchEnd:p,onTouchMove:k,onTouchStart:N,tabIndex:P=0,TouchRippleProps:Q,touchRippleRef:z,type:X,...re}=r,U=O.useRef(null),W=TM(),J=vr(W.ref,z),[ae,te]=O.useState(!1);c&&ae&&te(!1),O.useImperativeHandle(i,()=>({focusVisible:()=>{te(!0),U.current.focus()}}),[]);const pe=W.shouldMount&&!d&&!c;O.useEffect(()=>{ae&&m&&!d&&W.pulsate()},[d,m,ae,W]);function me(ie,Wo,Du=f){return Ts(ut=>(Wo&&Wo(ut),Du||W[ie](ut),!0))}const Ve=me("start",T),$e=me("stop",S),nt=me("stop",E),ln=me("stop",b),Bt=me("stop",ie=>{ae&&ie.preventDefault(),x&&x(ie)}),ge=me("start",N),Ie=me("stop",p),de=me("stop",k),un=me("stop",ie=>{z1(ie.target)||te(!1),I&&I(ie)},!1),bn=Ts(ie=>{U.current||(U.current=ie.currentTarget),z1(ie.target)&&(te(!0),A&&A(ie)),y&&y(ie)}),Yt=()=>{const ie=U.current;return u&&u!=="button"&&!(ie.tagName==="A"&&ie.href)},Yi=Ts(ie=>{m&&!ie.repeat&&ae&&ie.key===" "&&W.stop(ie,()=>{W.start(ie)}),ie.target===ie.currentTarget&&Yt()&&ie.key===" "&&ie.preventDefault(),D&&D(ie),ie.target===ie.currentTarget&&Yt()&&ie.key==="Enter"&&!c&&(ie.preventDefault(),R&&R(ie))}),Ho=Ts(ie=>{m&&ie.key===" "&&ae&&!ie.defaultPrevented&&W.stop(ie,()=>{W.pulsate(ie)}),M&&M(ie),R&&ie.target===ie.currentTarget&&Yt()&&ie.key===" "&&!ie.defaultPrevented&&R(ie)});let Sr=u;Sr==="button"&&(re.href||re.to)&&(Sr=w);const Un={};Sr==="button"?(Un.type=X===void 0?"button":X,Un.disabled=c):(!re.href&&!re.to&&(Un.role="button"),c&&(Un["aria-disabled"]=c));const Zr=vr(n,U),_t={...r,centerRipple:o,component:u,disabled:c,disableRipple:d,disableTouchRipple:f,focusRipple:m,tabIndex:P,focusVisible:ae},Mf=DM(_t);return _.jsxs(MM,{as:Sr,className:it(Mf.root,a),ownerState:_t,onBlur:un,onClick:R,onContextMenu:$e,onFocus:bn,onKeyDown:Yi,onKeyUp:Ho,onMouseDown:Ve,onMouseLeave:Bt,onMouseUp:ln,onDragLeave:nt,onTouchEnd:Ie,onTouchMove:de,onTouchStart:ge,ref:Zr,tabIndex:c?-1:P,type:X,...Un,...re,children:[s,pe?_.jsx(PM,{ref:J,center:o,...Q}):null]})});function VM(t){return typeof t.main=="string"}function jM(t,e=[]){if(!VM(t))return!1;for(const n of e)if(!t.hasOwnProperty(n)||typeof t[n]!="string")return!1;return!0}function fw(t=[]){return([,e])=>e&&jM(e,t)}function FM(t){return Hi("MuiIconButton",t)}const $M=Wi("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),UM=t=>{const{classes:e,disabled:n,color:r,edge:i,size:o}=t,s={root:["root",n&&"disabled",r!=="default"&&`color${Ln(r)}`,i&&`edge${Ln(i)}`,`size${Ln(o)}`]};return jo(s,FM,e)},BM=tr(LM,{name:"MuiIconButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.color!=="default"&&e[`color${Ln(n.color)}`],n.edge&&e[`edge${Ln(n.edge)}`],e[`size${Ln(n.size)}`]]}})(Kl(({theme:t})=>({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),variants:[{props:e=>!e.disableRipple,style:{"--IconButton-hoverBg":t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:ql(t.palette.action.active,t.palette.action.hoverOpacity),"&:hover":{backgroundColor:"var(--IconButton-hoverBg)","@media (hover: none)":{backgroundColor:"transparent"}}}},{props:{edge:"start"},style:{marginLeft:-12}},{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:{edge:"end"},style:{marginRight:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}}]})),Kl(({theme:t})=>({variants:[{props:{color:"inherit"},style:{color:"inherit"}},...Object.entries(t.palette).filter(fw()).map(([e])=>({props:{color:e},style:{color:(t.vars||t).palette[e].main}})),...Object.entries(t.palette).filter(fw()).map(([e])=>({props:{color:e},style:{"--IconButton-hoverBg":t.vars?`rgba(${(t.vars||t).palette[e].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:ql((t.vars||t).palette[e].main,t.palette.action.hoverOpacity)}})),{props:{size:"small"},style:{padding:5,fontSize:t.typography.pxToRem(18)}},{props:{size:"large"},style:{padding:12,fontSize:t.typography.pxToRem(28)}}],[`&.${$M.disabled}`]:{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}}))),zM=O.forwardRef(function(e,n){const r=qi({props:e,name:"MuiIconButton"}),{edge:i=!1,children:o,className:s,color:a="default",disabled:u=!1,disableFocusRipple:c=!1,size:d="medium",...f}=r,m={...r,edge:i,color:a,disabled:u,disableFocusRipple:c,size:d},v=UM(m);return _.jsx(BM,{className:it(v.root,s),centerRipple:!0,focusRipple:!c,disabled:u,ref:n,...f,ownerState:m,children:o})});function HM(t){return typeof t=="function"?t():t}const WM=O.forwardRef(function(e,n){const{children:r,container:i,disablePortal:o=!1}=e,[s,a]=O.useState(null),u=vr(O.isValidElement(r)?Oh(r):null,n);if(eg(()=>{o||a(HM(i)||document.body)},[i,o]),eg(()=>{if(s&&!o)return Zm(n,s),()=>{Zm(n,null)}},[n,s,o]),o){if(O.isValidElement(r)){const c={ref:u};return O.cloneElement(r,c)}return _.jsx(O.Fragment,{children:r})}return _.jsx(O.Fragment,{children:s&&Ky.createPortal(r,s)})});function qM(t){return typeof t=="string"}const GM={entering:{opacity:1},entered:{opacity:1}},KM=O.forwardRef(function(e,n){const r=v0(),i={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:o,appear:s=!0,children:a,easing:u,in:c,onEnter:d,onEntered:f,onEntering:m,onExit:v,onExited:w,onExiting:I,style:R,timeout:S=i,TransitionComponent:E=Er,...y}=e,A=O.useRef(null),D=vr(A,Oh(a),n),M=Q=>z=>{if(Q){const X=A.current;z===void 0?Q(X):Q(X,z)}},T=M(m),x=M((Q,z)=>{HI(Q);const X=Fd({style:R,timeout:S,easing:u},{mode:"enter"});Q.style.webkitTransition=r.transitions.create("opacity",X),Q.style.transition=r.transitions.create("opacity",X),d&&d(Q,z)}),b=M(f),p=M(I),k=M(Q=>{const z=Fd({style:R,timeout:S,easing:u},{mode:"exit"});Q.style.webkitTransition=r.transitions.create("opacity",z),Q.style.transition=r.transitions.create("opacity",z),v&&v(Q)}),N=M(w),P=Q=>{o&&o(A.current,Q)};return _.jsx(E,{appear:s,in:c,nodeRef:A,onEnter:x,onEntered:b,onEntering:T,onExit:k,onExited:N,onExiting:p,addEndListener:P,timeout:S,...y,children:(Q,z)=>O.cloneElement(a,{style:{opacity:0,visibility:Q==="exited"&&!c?"hidden":void 0,...GM[Q],...R,...a.props.style},ref:D,...z})})});function QM(t){return Hi("MuiBackdrop",t)}Wi("MuiBackdrop",["root","invisible"]);const YM=t=>{const{ownerState:e,...n}=t;return n},XM=t=>{const{classes:e,invisible:n}=t;return jo({root:["root",n&&"invisible"]},QM,e)},JM=tr("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.invisible&&e.invisible]}})({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent",variants:[{props:{invisible:!0},style:{backgroundColor:"transparent"}}]}),ZM=O.forwardRef(function(e,n){const r=qi({props:e,name:"MuiBackdrop"}),{children:i,className:o,component:s="div",invisible:a=!1,open:u,components:c={},componentsProps:d={},slotProps:f={},slots:m={},TransitionComponent:v,transitionDuration:w,...I}=r,R={...r,component:s,invisible:a},S=XM(R),E={transition:v,root:c.Root,...m},y={...d,...f},A={slots:E,slotProps:y},[D,M]=Ys("root",{elementType:JM,externalForwardedProps:A,className:it(S.root,o),ownerState:R}),[T,x]=Ys("transition",{elementType:KM,externalForwardedProps:A,ownerState:R}),b=YM(x);return _.jsx(T,{in:u,timeout:w,...I,...b,children:_.jsx(D,{"aria-hidden":!0,...M,classes:S,ref:n,children:i})})});function e5(t){const e=Hr(t);return e.body===t?Gs(t).innerWidth>e.documentElement.clientWidth:t.scrollHeight>t.clientHeight}function yl(t,e){e?t.setAttribute("aria-hidden","true"):t.removeAttribute("aria-hidden")}function pw(t){return parseInt(Gs(t).getComputedStyle(t).paddingRight,10)||0}function t5(t){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].includes(t.tagName),r=t.tagName==="INPUT"&&t.getAttribute("type")==="hidden";return n||r}function mw(t,e,n,r,i){const o=[e,n,...r];[].forEach.call(t.children,s=>{const a=!o.includes(s),u=!t5(s);a&&u&&yl(s,i)})}function Np(t,e){let n=-1;return t.some((r,i)=>e(r)?(n=i,!0):!1),n}function n5(t,e){const n=[],r=t.container;if(!e.disableScrollLock){if(e5(r)){const s=hN(Gs(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${pw(r)+s}px`;const a=Hr(r).querySelectorAll(".mui-fixed");[].forEach.call(a,u=>{n.push({value:u.style.paddingRight,property:"padding-right",el:u}),u.style.paddingRight=`${pw(u)+s}px`})}let o;if(r.parentNode instanceof DocumentFragment)o=Hr(r).body;else{const s=r.parentElement,a=Gs(r);o=(s==null?void 0:s.nodeName)==="HTML"&&a.getComputedStyle(s).overflowY==="scroll"?s:r}n.push({value:o.style.overflow,property:"overflow",el:o},{value:o.style.overflowX,property:"overflow-x",el:o},{value:o.style.overflowY,property:"overflow-y",el:o}),o.style.overflow="hidden"}return()=>{n.forEach(({value:o,el:s,property:a})=>{o?s.style.setProperty(a,o):s.style.removeProperty(a)})}}function r5(t){const e=[];return[].forEach.call(t.children,n=>{n.getAttribute("aria-hidden")==="true"&&e.push(n)}),e}class i5{constructor(){this.modals=[],this.containers=[]}add(e,n){let r=this.modals.indexOf(e);if(r!==-1)return r;r=this.modals.length,this.modals.push(e),e.modalRef&&yl(e.modalRef,!1);const i=r5(n);mw(n,e.mount,e.modalRef,i,!0);const o=Np(this.containers,s=>s.container===n);return o!==-1?(this.containers[o].modals.push(e),r):(this.containers.push({modals:[e],container:n,restore:null,hiddenSiblings:i}),r)}mount(e,n){const r=Np(this.containers,o=>o.modals.includes(e)),i=this.containers[r];i.restore||(i.restore=n5(i,n))}remove(e,n=!0){const r=this.modals.indexOf(e);if(r===-1)return r;const i=Np(this.containers,s=>s.modals.includes(e)),o=this.containers[i];if(o.modals.splice(o.modals.indexOf(e),1),this.modals.splice(r,1),o.modals.length===0)o.restore&&o.restore(),e.modalRef&&yl(e.modalRef,n),mw(o.container,e.mount,e.modalRef,o.hiddenSiblings,!1),this.containers.splice(i,1);else{const s=o.modals[o.modals.length-1];s.modalRef&&yl(s.modalRef,!1)}return r}isTopModal(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}}const o5=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function s5(t){const e=parseInt(t.getAttribute("tabindex")||"",10);return Number.isNaN(e)?t.contentEditable==="true"||(t.nodeName==="AUDIO"||t.nodeName==="VIDEO"||t.nodeName==="DETAILS")&&t.getAttribute("tabindex")===null?0:t.tabIndex:e}function a5(t){if(t.tagName!=="INPUT"||t.type!=="radio"||!t.name)return!1;const e=r=>t.ownerDocument.querySelector(`input[type="radio"]${r}`);let n=e(`[name="${t.name}"]:checked`);return n||(n=e(`[name="${t.name}"]`)),n!==t}function l5(t){return!(t.disabled||t.tagName==="INPUT"&&t.type==="hidden"||a5(t))}function u5(t){const e=[],n=[];return Array.from(t.querySelectorAll(o5)).forEach((r,i)=>{const o=s5(r);o===-1||!l5(r)||(o===0?e.push(r):n.push({documentOrder:i,tabIndex:o,node:r}))}),n.sort((r,i)=>r.tabIndex===i.tabIndex?r.documentOrder-i.documentOrder:r.tabIndex-i.tabIndex).map(r=>r.node).concat(e)}function c5(){return!0}function d5(t){const{children:e,disableAutoFocus:n=!1,disableEnforceFocus:r=!1,disableRestoreFocus:i=!1,getTabbable:o=u5,isEnabled:s=c5,open:a}=t,u=O.useRef(!1),c=O.useRef(null),d=O.useRef(null),f=O.useRef(null),m=O.useRef(null),v=O.useRef(!1),w=O.useRef(null),I=vr(Oh(e),w),R=O.useRef(null);O.useEffect(()=>{!a||!w.current||(v.current=!n)},[n,a]),O.useEffect(()=>{if(!a||!w.current)return;const y=Hr(w.current);return w.current.contains(y.activeElement)||(w.current.hasAttribute("tabIndex")||w.current.setAttribute("tabIndex","-1"),v.current&&w.current.focus()),()=>{i||(f.current&&f.current.focus&&(u.current=!0,f.current.focus()),f.current=null)}},[a]),O.useEffect(()=>{if(!a||!w.current)return;const y=Hr(w.current),A=T=>{R.current=T,!(r||!s()||T.key!=="Tab")&&y.activeElement===w.current&&T.shiftKey&&(u.current=!0,d.current&&d.current.focus())},D=()=>{var b,p;const T=w.current;if(T===null)return;if(!y.hasFocus()||!s()||u.current){u.current=!1;return}if(T.contains(y.activeElement)||r&&y.activeElement!==c.current&&y.activeElement!==d.current)return;if(y.activeElement!==m.current)m.current=null;else if(m.current!==null)return;if(!v.current)return;let x=[];if((y.activeElement===c.current||y.activeElement===d.current)&&(x=o(w.current)),x.length>0){const k=!!((b=R.current)!=null&&b.shiftKey&&((p=R.current)==null?void 0:p.key)==="Tab"),N=x[0],P=x[x.length-1];typeof N!="string"&&typeof P!="string"&&(k?P.focus():N.focus())}else T.focus()};y.addEventListener("focusin",D),y.addEventListener("keydown",A,!0);const M=setInterval(()=>{y.activeElement&&y.activeElement.tagName==="BODY"&&D()},50);return()=>{clearInterval(M),y.removeEventListener("focusin",D),y.removeEventListener("keydown",A,!0)}},[n,r,i,s,a,o]);const S=y=>{f.current===null&&(f.current=y.relatedTarget),v.current=!0,m.current=y.target;const A=e.props.onFocus;A&&A(y)},E=y=>{f.current===null&&(f.current=y.relatedTarget),v.current=!0};return _.jsxs(O.Fragment,{children:[_.jsx("div",{tabIndex:a?0:-1,onFocus:E,ref:c,"data-testid":"sentinelStart"}),O.cloneElement(e,{ref:I,onFocus:S}),_.jsx("div",{tabIndex:a?0:-1,onFocus:E,ref:d,"data-testid":"sentinelEnd"})]})}function h5(t){return typeof t=="function"?t():t}function f5(t){return t?t.props.hasOwnProperty("in"):!1}const wc=new i5;function p5(t){const{container:e,disableEscapeKeyDown:n=!1,disableScrollLock:r=!1,closeAfterTransition:i=!1,onTransitionEnter:o,onTransitionExited:s,children:a,onClose:u,open:c,rootRef:d}=t,f=O.useRef({}),m=O.useRef(null),v=O.useRef(null),w=vr(v,d),[I,R]=O.useState(!c),S=f5(a);let E=!0;(t["aria-hidden"]==="false"||t["aria-hidden"]===!1)&&(E=!1);const y=()=>Hr(m.current),A=()=>(f.current.modalRef=v.current,f.current.mount=m.current,f.current),D=()=>{wc.mount(A(),{disableScrollLock:r}),v.current&&(v.current.scrollTop=0)},M=Ts(()=>{const z=h5(e)||y().body;wc.add(A(),z),v.current&&D()}),T=()=>wc.isTopModal(A()),x=Ts(z=>{m.current=z,z&&(c&&T()?D():v.current&&yl(v.current,E))}),b=O.useCallback(()=>{wc.remove(A(),E)},[E]);O.useEffect(()=>()=>{b()},[b]),O.useEffect(()=>{c?M():(!S||!i)&&b()},[c,b,S,i,M]);const p=z=>X=>{var re;(re=z.onKeyDown)==null||re.call(z,X),!(X.key!=="Escape"||X.which===229||!T())&&(n||(X.stopPropagation(),u&&u(X,"escapeKeyDown")))},k=z=>X=>{var re;(re=z.onClick)==null||re.call(z,X),X.target===X.currentTarget&&u&&u(X,"backdropClick")};return{getRootProps:(z={})=>{const X=lI(t);delete X.onTransitionEnter,delete X.onTransitionExited;const re={...X,...z};return{role:"presentation",...re,onKeyDown:p(re),ref:w}},getBackdropProps:(z={})=>{const X=z;return{"aria-hidden":!0,...X,onClick:k(X),open:c}},getTransitionProps:()=>{const z=()=>{R(!1),o&&o()},X=()=>{R(!0),s&&s(),i&&b()};return{onEnter:U1(z,a==null?void 0:a.props.onEnter),onExited:U1(X,a==null?void 0:a.props.onExited)}},rootRef:w,portalRef:x,isTopModal:T,exited:I,hasTransition:S}}function m5(t){return Hi("MuiModal",t)}Wi("MuiModal",["root","hidden","backdrop"]);const g5=t=>{const{open:e,exited:n,classes:r}=t;return jo({root:["root",!e&&n&&"hidden"],backdrop:["backdrop"]},m5,r)},y5=tr("div",{name:"MuiModal",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,!n.open&&n.exited&&e.hidden]}})(Kl(({theme:t})=>({position:"fixed",zIndex:(t.vars||t).zIndex.modal,right:0,bottom:0,top:0,left:0,variants:[{props:({ownerState:e})=>!e.open&&e.exited,style:{visibility:"hidden"}}]}))),v5=tr(ZM,{name:"MuiModal",slot:"Backdrop",overridesResolver:(t,e)=>e.backdrop})({zIndex:-1}),_5=O.forwardRef(function(e,n){const r=qi({name:"MuiModal",props:e}),{BackdropComponent:i=v5,BackdropProps:o,classes:s,className:a,closeAfterTransition:u=!1,children:c,container:d,component:f,components:m={},componentsProps:v={},disableAutoFocus:w=!1,disableEnforceFocus:I=!1,disableEscapeKeyDown:R=!1,disablePortal:S=!1,disableRestoreFocus:E=!1,disableScrollLock:y=!1,hideBackdrop:A=!1,keepMounted:D=!1,onBackdropClick:M,onClose:T,onTransitionEnter:x,onTransitionExited:b,open:p,slotProps:k={},slots:N={},theme:P,...Q}=r,z={...r,closeAfterTransition:u,disableAutoFocus:w,disableEnforceFocus:I,disableEscapeKeyDown:R,disablePortal:S,disableRestoreFocus:E,disableScrollLock:y,hideBackdrop:A,keepMounted:D},{getRootProps:X,getBackdropProps:re,getTransitionProps:U,portalRef:W,isTopModal:J,exited:ae,hasTransition:te}=p5({...z,rootRef:n}),pe={...z,exited:ae},me=g5(pe),Ve={};if(c.props.tabIndex===void 0&&(Ve.tabIndex="-1"),te){const{onEnter:de,onExited:un}=U();Ve.onEnter=de,Ve.onExited=un}const $e={...Q,slots:{root:m.Root,backdrop:m.Backdrop,...N},slotProps:{...v,...k}},[nt,ln]=Ys("root",{elementType:y5,externalForwardedProps:$e,getSlotProps:X,additionalProps:{ref:n,as:f},ownerState:pe,className:it(a,me==null?void 0:me.root,!pe.open&&pe.exited&&(me==null?void 0:me.hidden))}),[Bt,ge]=Ys("backdrop",{elementType:i,externalForwardedProps:$e,additionalProps:o,getSlotProps:de=>re({...de,onClick:un=>{M&&M(un),de!=null&&de.onClick&&de.onClick(un)}}),className:it(o==null?void 0:o.className,me==null?void 0:me.backdrop),ownerState:pe}),Ie=vr(o==null?void 0:o.ref,ge.ref);return!D&&!p&&(!te||ae)?null:_.jsx(WM,{ref:W,container:d,disablePortal:S,children:_.jsxs(nt,{...ln,children:[!A&&i?_.jsx(Bt,{...ge,ref:Ie}):null,_.jsx(d5,{disableEnforceFocus:I,disableAutoFocus:w,disableRestoreFocus:E,isEnabled:J,open:p,children:O.cloneElement(c,Ve)})]})})});function hg(t){return`scale(${t}, ${t**2})`}const w5={entering:{opacity:1,transform:hg(1)},entered:{opacity:1,transform:"none"}},Op=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),fg=O.forwardRef(function(e,n){const{addEndListener:r,appear:i=!0,children:o,easing:s,in:a,onEnter:u,onEntered:c,onEntering:d,onExit:f,onExited:m,onExiting:v,style:w,timeout:I="auto",TransitionComponent:R=Er,...S}=e,E=sI(),y=O.useRef(),A=v0(),D=O.useRef(null),M=vr(D,Oh(o),n),T=z=>X=>{if(z){const re=D.current;X===void 0?z(re):z(re,X)}},x=T(d),b=T((z,X)=>{HI(z);const{duration:re,delay:U,easing:W}=Fd({style:w,timeout:I,easing:s},{mode:"enter"});let J;I==="auto"?(J=A.transitions.getAutoHeightDuration(z.clientHeight),y.current=J):J=re,z.style.transition=[A.transitions.create("opacity",{duration:J,delay:U}),A.transitions.create("transform",{duration:Op?J:J*.666,delay:U,easing:W})].join(","),u&&u(z,X)}),p=T(c),k=T(v),N=T(z=>{const{duration:X,delay:re,easing:U}=Fd({style:w,timeout:I,easing:s},{mode:"exit"});let W;I==="auto"?(W=A.transitions.getAutoHeightDuration(z.clientHeight),y.current=W):W=X,z.style.transition=[A.transitions.create("opacity",{duration:W,delay:re}),A.transitions.create("transform",{duration:Op?W:W*.666,delay:Op?re:re||W*.333,easing:U})].join(","),z.style.opacity=0,z.style.transform=hg(.75),f&&f(z)}),P=T(m),Q=z=>{I==="auto"&&E.start(y.current||0,z),r&&r(D.current,z)};return _.jsx(R,{appear:i,in:a,nodeRef:D,onEnter:b,onEntered:p,onEntering:x,onExit:N,onExited:P,onExiting:k,addEndListener:Q,timeout:I==="auto"?null:I,...S,children:(z,X)=>O.cloneElement(o,{style:{opacity:0,transform:hg(.75),visibility:z==="exited"&&!a?"hidden":void 0,...w5[z],...w,...o.props.style},ref:M,...X})})});fg&&(fg.muiSupportAuto=!0);function E5(t){return Hi("MuiPopover",t)}Wi("MuiPopover",["root","paper"]);function gw(t,e){let n=0;return typeof e=="number"?n=e:e==="center"?n=t.height/2:e==="bottom"&&(n=t.height),n}function yw(t,e){let n=0;return typeof e=="number"?n=e:e==="center"?n=t.width/2:e==="right"&&(n=t.width),n}function vw(t){return[t.horizontal,t.vertical].map(e=>typeof e=="number"?`${e}px`:e).join(" ")}function Dp(t){return typeof t=="function"?t():t}const T5=t=>{const{classes:e}=t;return jo({root:["root"],paper:["paper"]},E5,e)},S5=tr(_5,{name:"MuiPopover",slot:"Root",overridesResolver:(t,e)=>e.root})({}),x5=tr(EM,{name:"MuiPopover",slot:"Paper",overridesResolver:(t,e)=>e.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),I5=O.forwardRef(function(e,n){const r=qi({props:e,name:"MuiPopover"}),{action:i,anchorEl:o,anchorOrigin:s={vertical:"top",horizontal:"left"},anchorPosition:a,anchorReference:u="anchorEl",children:c,className:d,container:f,elevation:m=8,marginThreshold:v=16,open:w,PaperProps:I={},slots:R={},slotProps:S={},transformOrigin:E={vertical:"top",horizontal:"left"},TransitionComponent:y=fg,transitionDuration:A="auto",TransitionProps:{onEntering:D,...M}={},disableScrollLock:T=!1,...x}=r,b=(S==null?void 0:S.paper)??I,p=O.useRef(),k={...r,anchorOrigin:s,anchorReference:u,elevation:m,marginThreshold:v,externalPaperSlotProps:b,transformOrigin:E,TransitionComponent:y,transitionDuration:A,TransitionProps:M},N=T5(k),P=O.useCallback(()=>{if(u==="anchorPosition")return a;const ge=Dp(o),de=(ge&&ge.nodeType===1?ge:Hr(p.current).body).getBoundingClientRect();return{top:de.top+gw(de,s.vertical),left:de.left+yw(de,s.horizontal)}},[o,s.horizontal,s.vertical,a,u]),Q=O.useCallback(ge=>({vertical:gw(ge,E.vertical),horizontal:yw(ge,E.horizontal)}),[E.horizontal,E.vertical]),z=O.useCallback(ge=>{const Ie={width:ge.offsetWidth,height:ge.offsetHeight},de=Q(Ie);if(u==="none")return{top:null,left:null,transformOrigin:vw(de)};const un=P();let bn=un.top-de.vertical,Yt=un.left-de.horizontal;const Yi=bn+Ie.height,Ho=Yt+Ie.width,Sr=Gs(Dp(o)),Un=Sr.innerHeight-v,Zr=Sr.innerWidth-v;if(v!==null&&bn<v){const _t=bn-v;bn-=_t,de.vertical+=_t}else if(v!==null&&Yi>Un){const _t=Yi-Un;bn-=_t,de.vertical+=_t}if(v!==null&&Yt<v){const _t=Yt-v;Yt-=_t,de.horizontal+=_t}else if(Ho>Zr){const _t=Ho-Zr;Yt-=_t,de.horizontal+=_t}return{top:`${Math.round(bn)}px`,left:`${Math.round(Yt)}px`,transformOrigin:vw(de)}},[o,u,P,Q,v]),[X,re]=O.useState(w),U=O.useCallback(()=>{const ge=p.current;if(!ge)return;const Ie=z(ge);Ie.top!==null&&ge.style.setProperty("top",Ie.top),Ie.left!==null&&(ge.style.left=Ie.left),ge.style.transformOrigin=Ie.transformOrigin,re(!0)},[z]);O.useEffect(()=>(T&&window.addEventListener("scroll",U),()=>window.removeEventListener("scroll",U)),[o,T,U]);const W=(ge,Ie)=>{D&&D(ge,Ie),U()},J=()=>{re(!1)};O.useEffect(()=>{w&&U()}),O.useImperativeHandle(i,()=>w?{updatePosition:()=>{U()}}:null,[w,U]),O.useEffect(()=>{if(!w)return;const ge=uN(()=>{U()}),Ie=Gs(o);return Ie.addEventListener("resize",ge),()=>{ge.clear(),Ie.removeEventListener("resize",ge)}},[o,w,U]);let ae=A;A==="auto"&&!y.muiSupportAuto&&(ae=void 0);const te=f||(o?Hr(Dp(o)).body:void 0),pe={slots:R,slotProps:{...S,paper:b}},[me,Ve]=Ys("paper",{elementType:x5,externalForwardedProps:pe,additionalProps:{elevation:m,className:it(N.paper,b==null?void 0:b.className),style:X?b.style:{...b.style,opacity:0}},ownerState:k}),[$e,{slotProps:nt,...ln}]=Ys("root",{elementType:S5,externalForwardedProps:pe,additionalProps:{slotProps:{backdrop:{invisible:!0}},container:te,open:w},ownerState:k,className:it(N.root,d)}),Bt=vr(p,Ve.ref);return _.jsx($e,{...ln,...!qM($e)&&{slotProps:nt,disableScrollLock:T},...x,ref:n,children:_.jsx(y,{appear:!0,in:w,onEntering:W,onExited:J,timeout:ae,...M,children:_.jsx(me,{...Ve,ref:Bt,children:c})})})});var WI={exports:{}},qI={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wu=O;function C5(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var A5=typeof Object.is=="function"?Object.is:C5,b5=wu.useSyncExternalStore,R5=wu.useRef,k5=wu.useEffect,P5=wu.useMemo,N5=wu.useDebugValue;qI.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var o=R5(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=P5(function(){function u(v){if(!c){if(c=!0,d=v,v=r(v),i!==void 0&&s.hasValue){var w=s.value;if(i(w,v))return f=w}return f=v}if(w=f,A5(d,v))return w;var I=r(v);return i!==void 0&&i(w,I)?w:(d=v,f=I)}var c=!1,d,f,m=n===void 0?null:n;return[function(){return u(e())},m===null?void 0:function(){return u(m())}]},[e,n,r,i]);var a=b5(t,o[0],o[1]);return k5(function(){s.hasValue=!0,s.value=a},[a]),N5(a),a};WI.exports=qI;var O5=WI.exports,mn="default"in xl?Ft:xl,_w=Symbol.for("react-redux-context"),ww=typeof globalThis<"u"?globalThis:{};function D5(){if(!mn.createContext)return{};const t=ww[_w]??(ww[_w]=new Map);let e=t.get(mn.createContext);return e||(e=mn.createContext(null),t.set(mn.createContext,e)),e}var Di=D5(),M5=()=>{throw new Error("uSES not initialized!")};function E0(t=Di){return function(){return mn.useContext(t)}}var GI=E0(),KI=M5,L5=t=>{KI=t},V5=(t,e)=>t===e;function j5(t=Di){const e=t===Di?GI:E0(t),n=(r,i={})=>{const{equalityFn:o=V5,devModeChecks:s={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:u,getServerState:c,stabilityCheck:d,identityFunctionCheck:f}=e();mn.useRef(!0);const m=mn.useCallback({[r.name](w){return r(w)}}[r.name],[r,d,s.stabilityCheck]),v=KI(u.addNestedSub,a.getState,c||a.getState,m,o);return mn.useDebugValue(v),v};return Object.assign(n,{withTypes:()=>n}),n}var Gt=j5();function F5(t){t()}function $5(){let t=null,e=null;return{clear(){t=null,e=null},notify(){F5(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var Ew={notify(){},get:()=>[]};function U5(t,e){let n,r=Ew,i=0,o=!1;function s(I){d();const R=r.subscribe(I);let S=!1;return()=>{S||(S=!0,R(),f())}}function a(){r.notify()}function u(){w.onStateChange&&w.onStateChange()}function c(){return o}function d(){i++,n||(n=t.subscribe(u),r=$5())}function f(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=Ew)}function m(){o||(o=!0,d())}function v(){o&&(o=!1,f())}const w={addNestedSub:s,notifyNestedSubs:a,handleChangeWrapper:u,isSubscribed:c,trySubscribe:m,tryUnsubscribe:v,getListeners:()=>r};return w}var B5=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",z5=typeof navigator<"u"&&navigator.product==="ReactNative",H5=B5||z5?mn.useLayoutEffect:mn.useEffect;function W5({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:o="once"}){const s=mn.useMemo(()=>{const c=U5(t);return{store:t,subscription:c,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:o}},[t,r,i,o]),a=mn.useMemo(()=>t.getState(),[t]);H5(()=>{const{subscription:c}=s;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),a!==t.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[s,a]);const u=e||Di;return mn.createElement(u.Provider,{value:s},n)}var q5=W5;function QI(t=Di){const e=t===Di?GI:E0(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var G5=QI();function K5(t=Di){const e=t===Di?G5:QI(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var An=K5();L5(O5.useSyncExternalStoreWithSelector);/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ql(){return Ql=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ql.apply(this,arguments)}var gi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(gi||(gi={}));const Tw="popstate";function Q5(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return pg("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ud(i)}return X5(e,n,null,t)}function Qe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function YI(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Y5(){return Math.random().toString(36).substr(2,8)}function Sw(t,e){return{usr:t.state,key:t.key,idx:e}}function pg(t,e,n,r){return n===void 0&&(n=null),Ql({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?fa(e):e,{state:n,key:e&&e.key||r||Y5()})}function Ud(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function fa(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function X5(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=gi.Pop,u=null,c=d();c==null&&(c=0,s.replaceState(Ql({},s.state,{idx:c}),""));function d(){return(s.state||{idx:null}).idx}function f(){a=gi.Pop;let R=d(),S=R==null?null:R-c;c=R,u&&u({action:a,location:I.location,delta:S})}function m(R,S){a=gi.Push;let E=pg(I.location,R,S);c=d()+1;let y=Sw(E,c),A=I.createHref(E);try{s.pushState(y,"",A)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;i.location.assign(A)}o&&u&&u({action:a,location:I.location,delta:1})}function v(R,S){a=gi.Replace;let E=pg(I.location,R,S);c=d();let y=Sw(E,c),A=I.createHref(E);s.replaceState(y,"",A),o&&u&&u({action:a,location:I.location,delta:0})}function w(R){let S=i.location.origin!=="null"?i.location.origin:i.location.href,E=typeof R=="string"?R:Ud(R);return E=E.replace(/ $/,"%20"),Qe(S,"No window.location.(origin|href) available to create URL for href: "+E),new URL(E,S)}let I={get action(){return a},get location(){return t(i,s)},listen(R){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Tw,f),u=R,()=>{i.removeEventListener(Tw,f),u=null}},createHref(R){return e(i,R)},createURL:w,encodeLocation(R){let S=w(R);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:m,replace:v,go(R){return s.go(R)}};return I}var xw;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(xw||(xw={}));function J5(t,e,n){return n===void 0&&(n="/"),Z5(t,e,n,!1)}function Z5(t,e,n,r){let i=typeof e=="string"?fa(e):e,o=Xs(i.pathname||"/",n);if(o==null)return null;let s=XI(t);eL(s);let a=null;for(let u=0;a==null&&u<s.length;++u){let c=dL(o);a=uL(s[u],c,r)}return a}function XI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let u={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};u.relativePath.startsWith("/")&&(Qe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Ai([r,u.relativePath]),d=n.concat(u);o.children&&o.children.length>0&&(Qe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),XI(o.children,e,d,c)),!(o.path==null&&!o.index)&&e.push({path:c,score:aL(c,o.index),routesMeta:d})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let u of JI(o.path))i(o,s,u)}),e}function JI(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=JI(r.join("/")),a=[];return a.push(...s.map(u=>u===""?o:[o,u].join("/"))),i&&a.push(...s),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function eL(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:lL(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const tL=/^:[\w-]+$/,nL=3,rL=2,iL=1,oL=10,sL=-2,Iw=t=>t==="*";function aL(t,e){let n=t.split("/"),r=n.length;return n.some(Iw)&&(r+=sL),e&&(r+=rL),n.filter(i=>!Iw(i)).reduce((i,o)=>i+(tL.test(o)?nL:o===""?iL:oL),r)}function lL(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function uL(t,e,n){let{routesMeta:r}=t,i={},o="/",s=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,d=o==="/"?e:e.slice(o.length)||"/",f=Bd({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=Bd({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),s.push({params:i,pathname:Ai([o,f.pathname]),pathnameBase:mL(Ai([o,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(o=Ai([o,f.pathnameBase]))}return s}function Bd(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=cL(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:m,isOptional:v}=d;if(m==="*"){let I=a[f]||"";s=o.slice(0,o.length-I.length).replace(/(.)\/+$/,"$1")}const w=a[f];return v&&!w?c[m]=void 0:c[m]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:t}}function cL(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),YI(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function dL(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return YI(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Xs(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function hL(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?fa(t):t;return{pathname:n?n.startsWith("/")?n:fL(n,e):e,search:gL(r),hash:yL(i)}}function fL(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Mp(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function pL(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ZI(t,e){let n=pL(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function eC(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=fa(t):(i=Ql({},t),Qe(!i.pathname||!i.pathname.includes("?"),Mp("?","pathname","search",i)),Qe(!i.pathname||!i.pathname.includes("#"),Mp("#","pathname","hash",i)),Qe(!i.search||!i.search.includes("#"),Mp("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let f=e.length-1;if(!r&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let u=hL(i,a),c=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Ai=t=>t.join("/").replace(/\/\/+/g,"/"),mL=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),gL=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,yL=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function vL(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const tC=["post","put","patch","delete"];new Set(tC);const _L=["get",...tC];new Set(_L);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yl(){return Yl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Yl.apply(this,arguments)}const nf=O.createContext(null),nC=O.createContext(null),Gi=O.createContext(null),rf=O.createContext(null),Fo=O.createContext({outlet:null,matches:[],isDataRoute:!1}),rC=O.createContext(null);function wL(t,e){let{relative:n}=e===void 0?{}:e;Eu()||Qe(!1);let{basename:r,navigator:i}=O.useContext(Gi),{hash:o,pathname:s,search:a}=of(t,{relative:n}),u=s;return r!=="/"&&(u=s==="/"?r:Ai([r,s])),i.createHref({pathname:u,search:a,hash:o})}function Eu(){return O.useContext(rf)!=null}function Tu(){return Eu()||Qe(!1),O.useContext(rf).location}function iC(t){O.useContext(Gi).static||O.useLayoutEffect(t)}function Su(){let{isDataRoute:t}=O.useContext(Fo);return t?OL():EL()}function EL(){Eu()||Qe(!1);let t=O.useContext(nf),{basename:e,future:n,navigator:r}=O.useContext(Gi),{matches:i}=O.useContext(Fo),{pathname:o}=Tu(),s=JSON.stringify(ZI(i,n.v7_relativeSplatPath)),a=O.useRef(!1);return iC(()=>{a.current=!0}),O.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=eC(c,JSON.parse(s),o,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Ai([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,s,o,t])}function of(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=O.useContext(Gi),{matches:i}=O.useContext(Fo),{pathname:o}=Tu(),s=JSON.stringify(ZI(i,r.v7_relativeSplatPath));return O.useMemo(()=>eC(t,JSON.parse(s),o,n==="path"),[t,s,o,n])}function TL(t,e){return SL(t,e)}function SL(t,e,n,r){Eu()||Qe(!1);let{navigator:i}=O.useContext(Gi),{matches:o}=O.useContext(Fo),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let u=s?s.pathnameBase:"/";s&&s.route;let c=Tu(),d;if(e){var f;let R=typeof e=="string"?fa(e):e;u==="/"||(f=R.pathname)!=null&&f.startsWith(u)||Qe(!1),d=R}else d=c;let m=d.pathname||"/",v=m;if(u!=="/"){let R=u.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(R.length).join("/")}let w=J5(t,{pathname:v}),I=bL(w&&w.map(R=>Object.assign({},R,{params:Object.assign({},a,R.params),pathname:Ai([u,i.encodeLocation?i.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?u:Ai([u,i.encodeLocation?i.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),o,n,r);return e&&I?O.createElement(rf.Provider,{value:{location:Yl({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:gi.Pop}},I):I}function xL(){let t=NL(),e=vL(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:i},n):null,null)}const IL=O.createElement(xL,null);class CL extends O.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?O.createElement(Fo.Provider,{value:this.props.routeContext},O.createElement(rC.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function AL(t){let{routeContext:e,match:n,children:r}=t,i=O.useContext(nf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(Fo.Provider,{value:e},r)}function bL(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if(!n)return null;if(n.errors)t=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=s.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||Qe(!1),s=s.slice(0,Math.min(s.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let f=s[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:m,errors:v}=n,w=f.route.loader&&m[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||w){u=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((d,f,m)=>{let v,w=!1,I=null,R=null;n&&(v=a&&f.route.id?a[f.route.id]:void 0,I=f.route.errorElement||IL,u&&(c<0&&m===0?(w=!0,R=null):c===m&&(w=!0,R=f.route.hydrateFallbackElement||null)));let S=e.concat(s.slice(0,m+1)),E=()=>{let y;return v?y=I:w?y=R:f.route.Component?y=O.createElement(f.route.Component,null):f.route.element?y=f.route.element:y=d,O.createElement(AL,{match:f,routeContext:{outlet:d,matches:S,isDataRoute:n!=null},children:y})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?O.createElement(CL,{location:n.location,revalidation:n.revalidation,component:I,error:v,children:E(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):E()},null)}var oC=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(oC||{}),zd=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(zd||{});function RL(t){let e=O.useContext(nf);return e||Qe(!1),e}function kL(t){let e=O.useContext(nC);return e||Qe(!1),e}function PL(t){let e=O.useContext(Fo);return e||Qe(!1),e}function sC(t){let e=PL(),n=e.matches[e.matches.length-1];return n.route.id||Qe(!1),n.route.id}function NL(){var t;let e=O.useContext(rC),n=kL(zd.UseRouteError),r=sC(zd.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function OL(){let{router:t}=RL(oC.UseNavigateStable),e=sC(zd.UseNavigateStable),n=O.useRef(!1);return iC(()=>{n.current=!0}),O.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Yl({fromRouteId:e},o)))},[t,e])}function Rn(t){Qe(!1)}function DL(t){let{basename:e="/",children:n=null,location:r,navigationType:i=gi.Pop,navigator:o,static:s=!1,future:a}=t;Eu()&&Qe(!1);let u=e.replace(/^\/*/,"/"),c=O.useMemo(()=>({basename:u,navigator:o,static:s,future:Yl({v7_relativeSplatPath:!1},a)}),[u,a,o,s]);typeof r=="string"&&(r=fa(r));let{pathname:d="/",search:f="",hash:m="",state:v=null,key:w="default"}=r,I=O.useMemo(()=>{let R=Xs(d,u);return R==null?null:{location:{pathname:R,search:f,hash:m,state:v,key:w},navigationType:i}},[u,d,f,m,v,w,i]);return I==null?null:O.createElement(Gi.Provider,{value:c},O.createElement(rf.Provider,{children:n,value:I}))}function Cw(t){let{children:e,location:n}=t;return TL(mg(e),n)}new Promise(()=>{});function mg(t,e){e===void 0&&(e=[]);let n=[];return O.Children.forEach(t,(r,i)=>{if(!O.isValidElement(r))return;let o=[...e,i];if(r.type===O.Fragment){n.push.apply(n,mg(r.props.children,o));return}r.type!==Rn&&Qe(!1),!r.props.index||!r.props.children||Qe(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=mg(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hd(){return Hd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Hd.apply(this,arguments)}function aC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function ML(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function LL(t,e){return t.button===0&&(!e||e==="_self")&&!ML(t)}const VL=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],jL=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],FL="6";try{window.__reactRouterVersion=FL}catch{}const $L=O.createContext({isTransitioning:!1}),UL="startTransition",Aw=xl[UL];function BL(t){let{basename:e,children:n,future:r,window:i}=t,o=O.useRef();o.current==null&&(o.current=Q5({window:i,v5Compat:!0}));let s=o.current,[a,u]=O.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},d=O.useCallback(f=>{c&&Aw?Aw(()=>u(f)):u(f)},[u,c]);return O.useLayoutEffect(()=>s.listen(d),[s,d]),O.createElement(DL,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const zL=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",HL=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sf=O.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:u,to:c,preventScrollReset:d,viewTransition:f}=e,m=aC(e,VL),{basename:v}=O.useContext(Gi),w,I=!1;if(typeof c=="string"&&HL.test(c)&&(w=c,zL))try{let y=new URL(window.location.href),A=c.startsWith("//")?new URL(y.protocol+c):new URL(c),D=Xs(A.pathname,v);A.origin===y.origin&&D!=null?c=D+A.search+A.hash:I=!0}catch{}let R=wL(c,{relative:i}),S=GL(c,{replace:s,state:a,target:u,preventScrollReset:d,relative:i,viewTransition:f});function E(y){r&&r(y),y.defaultPrevented||S(y)}return O.createElement("a",Hd({},m,{href:w||R,onClick:I||o?r:E,ref:n,target:u}))}),WL=O.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:s=!1,style:a,to:u,viewTransition:c,children:d}=e,f=aC(e,jL),m=of(u,{relative:f.relative}),v=Tu(),w=O.useContext(nC),{navigator:I,basename:R}=O.useContext(Gi),S=w!=null&&KL(m)&&c===!0,E=I.encodeLocation?I.encodeLocation(m).pathname:m.pathname,y=v.pathname,A=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;i||(y=y.toLowerCase(),A=A?A.toLowerCase():null,E=E.toLowerCase()),A&&R&&(A=Xs(A,R)||A);const D=E!=="/"&&E.endsWith("/")?E.length-1:E.length;let M=y===E||!s&&y.startsWith(E)&&y.charAt(D)==="/",T=A!=null&&(A===E||!s&&A.startsWith(E)&&A.charAt(E.length)==="/"),x={isActive:M,isPending:T,isTransitioning:S},b=M?r:void 0,p;typeof o=="function"?p=o(x):p=[o,M?"active":null,T?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let k=typeof a=="function"?a(x):a;return O.createElement(sf,Hd({},f,{"aria-current":b,className:p,ref:n,style:k,to:u,viewTransition:c}),typeof d=="function"?d(x):d)});var gg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(gg||(gg={}));var bw;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(bw||(bw={}));function qL(t){let e=O.useContext(nf);return e||Qe(!1),e}function GL(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=e===void 0?{}:e,u=Su(),c=Tu(),d=of(t,{relative:s});return O.useCallback(f=>{if(LL(f,n)){f.preventDefault();let m=r!==void 0?r:Ud(c)===Ud(d);u(t,{replace:m,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[c,u,d,r,i,n,t,o,s,a])}function KL(t,e){e===void 0&&(e={});let n=O.useContext($L);n==null&&Qe(!1);let{basename:r}=qL(gg.useViewTransitionState),i=of(t,{relative:e.relative});if(!n.isTransitioning)return!1;let o=Xs(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=Xs(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Bd(i.pathname,s)!=null||Bd(i.pathname,o)!=null}function Et(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var QL=typeof Symbol=="function"&&Symbol.observable||"@@observable",Rw=QL,Lp=()=>Math.random().toString(36).substring(7).split("").join("."),YL={INIT:`@@redux/INIT${Lp()}`,REPLACE:`@@redux/REPLACE${Lp()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Lp()}`},Wd=YL;function T0(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function lC(t,e,n){if(typeof t!="function")throw new Error(Et(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Et(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Et(1));return n(lC)(t,e)}let r=t,i=e,o=new Map,s=o,a=0,u=!1;function c(){s===o&&(s=new Map,o.forEach((R,S)=>{s.set(S,R)}))}function d(){if(u)throw new Error(Et(3));return i}function f(R){if(typeof R!="function")throw new Error(Et(4));if(u)throw new Error(Et(5));let S=!0;c();const E=a++;return s.set(E,R),function(){if(S){if(u)throw new Error(Et(6));S=!1,c(),s.delete(E),o=null}}}function m(R){if(!T0(R))throw new Error(Et(7));if(typeof R.type>"u")throw new Error(Et(8));if(typeof R.type!="string")throw new Error(Et(17));if(u)throw new Error(Et(9));try{u=!0,i=r(i,R)}finally{u=!1}return(o=s).forEach(E=>{E()}),R}function v(R){if(typeof R!="function")throw new Error(Et(10));r=R,m({type:Wd.REPLACE})}function w(){const R=f;return{subscribe(S){if(typeof S!="object"||S===null)throw new Error(Et(11));function E(){const A=S;A.next&&A.next(d())}return E(),{unsubscribe:R(E)}},[Rw](){return this}}}return m({type:Wd.INIT}),{dispatch:m,subscribe:f,getState:d,replaceReducer:v,[Rw]:w}}function XL(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:Wd.INIT})>"u")throw new Error(Et(12));if(typeof n(void 0,{type:Wd.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Et(13))})}function JL(t){const e=Object.keys(t),n={};for(let o=0;o<e.length;o++){const s=e[o];typeof t[s]=="function"&&(n[s]=t[s])}const r=Object.keys(n);let i;try{XL(n)}catch(o){i=o}return function(s={},a){if(i)throw i;let u=!1;const c={};for(let d=0;d<r.length;d++){const f=r[d],m=n[f],v=s[f],w=m(v,a);if(typeof w>"u")throw a&&a.type,new Error(Et(14));c[f]=w,u=u||w!==v}return u=u||r.length!==Object.keys(s).length,u?c:s}}function qd(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function ZL(...t){return e=>(n,r)=>{const i=e(n,r);let o=()=>{throw new Error(Et(15))};const s={getState:i.getState,dispatch:(u,...c)=>o(u,...c)},a=t.map(u=>u(s));return o=qd(...a)(i.dispatch),{...i,dispatch:o}}}function e3(t){return T0(t)&&"type"in t&&typeof t.type=="string"}var uC=Symbol.for("immer-nothing"),kw=Symbol.for("immer-draftable"),Tn=Symbol.for("immer-state");function Gn(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var Js=Object.getPrototypeOf;function ko(t){return!!t&&!!t[Tn]}function qr(t){var e;return t?cC(t)||Array.isArray(t)||!!t[kw]||!!((e=t.constructor)!=null&&e[kw])||lf(t)||uf(t):!1}var t3=Object.prototype.constructor.toString();function cC(t){if(!t||typeof t!="object")return!1;const e=Js(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===t3}function Gd(t,e){af(t)===0?Reflect.ownKeys(t).forEach(n=>{e(n,t[n],t)}):t.forEach((n,r)=>e(r,n,t))}function af(t){const e=t[Tn];return e?e.type_:Array.isArray(t)?1:lf(t)?2:uf(t)?3:0}function yg(t,e){return af(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function dC(t,e,n){const r=af(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function n3(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function lf(t){return t instanceof Map}function uf(t){return t instanceof Set}function oo(t){return t.copy_||t.base_}function vg(t,e){if(lf(t))return new Map(t);if(uf(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);const n=cC(t);if(e===!0||e==="class_only"&&!n){const r=Object.getOwnPropertyDescriptors(t);delete r[Tn];let i=Reflect.ownKeys(r);for(let o=0;o<i.length;o++){const s=i[o],a=r[s];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(r[s]={configurable:!0,writable:!0,enumerable:a.enumerable,value:t[s]})}return Object.create(Js(t),r)}else{const r=Js(t);if(r!==null&&n)return{...t};const i=Object.create(r);return Object.assign(i,t)}}function S0(t,e=!1){return cf(t)||ko(t)||!qr(t)||(af(t)>1&&(t.set=t.add=t.clear=t.delete=r3),Object.freeze(t),e&&Object.entries(t).forEach(([n,r])=>S0(r,!0))),t}function r3(){Gn(2)}function cf(t){return Object.isFrozen(t)}var i3={};function Po(t){const e=i3[t];return e||Gn(0,t),e}var Xl;function hC(){return Xl}function o3(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Pw(t,e){e&&(Po("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function _g(t){wg(t),t.drafts_.forEach(s3),t.drafts_=null}function wg(t){t===Xl&&(Xl=t.parent_)}function Nw(t){return Xl=o3(Xl,t)}function s3(t){const e=t[Tn];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function Ow(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[Tn].modified_&&(_g(e),Gn(4)),qr(t)&&(t=Kd(e,t),e.parent_||Qd(e,t)),e.patches_&&Po("Patches").generateReplacementPatches_(n[Tn].base_,t,e.patches_,e.inversePatches_)):t=Kd(e,n,[]),_g(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==uC?t:void 0}function Kd(t,e,n){if(cf(e))return e;const r=e[Tn];if(!r)return Gd(e,(i,o)=>Dw(t,r,e,i,o,n)),e;if(r.scope_!==t)return e;if(!r.modified_)return Qd(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let o=i,s=!1;r.type_===3&&(o=new Set(i),i.clear(),s=!0),Gd(o,(a,u)=>Dw(t,r,i,a,u,n,s)),Qd(t,i,!1),n&&t.patches_&&Po("Patches").generatePatches_(r,n,t.patches_,t.inversePatches_)}return r.copy_}function Dw(t,e,n,r,i,o,s){if(ko(i)){const a=o&&e&&e.type_!==3&&!yg(e.assigned_,r)?o.concat(r):void 0,u=Kd(t,i,a);if(dC(n,r,u),ko(u))t.canAutoFreeze_=!1;else return}else s&&n.add(i);if(qr(i)&&!cf(i)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;Kd(t,i),(!e||!e.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,r)&&Qd(t,i)}}function Qd(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&S0(e,n)}function a3(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:hC(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,o=x0;n&&(i=[r],o=Jl);const{revoke:s,proxy:a}=Proxy.revocable(i,o);return r.draft_=a,r.revoke_=s,a}var x0={get(t,e){if(e===Tn)return t;const n=oo(t);if(!yg(n,e))return l3(t,n,e);const r=n[e];return t.finalized_||!qr(r)?r:r===Vp(t.base_,e)?(jp(t),t.copy_[e]=Tg(r,t)):r},has(t,e){return e in oo(t)},ownKeys(t){return Reflect.ownKeys(oo(t))},set(t,e,n){const r=fC(oo(t),e);if(r!=null&&r.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=Vp(oo(t),e),o=i==null?void 0:i[Tn];if(o&&o.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(n3(n,i)&&(n!==void 0||yg(t.base_,e)))return!0;jp(t),Eg(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return Vp(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,jp(t),Eg(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=oo(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){Gn(11)},getPrototypeOf(t){return Js(t.base_)},setPrototypeOf(){Gn(12)}},Jl={};Gd(x0,(t,e)=>{Jl[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});Jl.deleteProperty=function(t,e){return Jl.set.call(this,t,e,void 0)};Jl.set=function(t,e,n){return x0.set.call(this,t[0],e,n,t[0])};function Vp(t,e){const n=t[Tn];return(n?oo(n):t)[e]}function l3(t,e,n){var i;const r=fC(e,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(t.draft_):void 0}function fC(t,e){if(!(e in t))return;let n=Js(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Js(n)}}function Eg(t){t.modified_||(t.modified_=!0,t.parent_&&Eg(t.parent_))}function jp(t){t.copy_||(t.copy_=vg(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var u3=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const o=n;n=e;const s=this;return function(u=o,...c){return s.produce(u,d=>n.call(this,d,...c))}}typeof n!="function"&&Gn(6),r!==void 0&&typeof r!="function"&&Gn(7);let i;if(qr(e)){const o=Nw(this),s=Tg(e,void 0);let a=!0;try{i=n(s),a=!1}finally{a?_g(o):wg(o)}return Pw(o,r),Ow(i,o)}else if(!e||typeof e!="object"){if(i=n(e),i===void 0&&(i=e),i===uC&&(i=void 0),this.autoFreeze_&&S0(i,!0),r){const o=[],s=[];Po("Patches").generateReplacementPatches_(e,i,o,s),r(o,s)}return i}else Gn(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(s,...a)=>this.produceWithPatches(s,u=>e(u,...a));let r,i;return[this.produce(e,n,(s,a)=>{r=s,i=a}),r,i]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){qr(t)||Gn(8),ko(t)&&(t=c3(t));const e=Nw(this),n=Tg(t,void 0);return n[Tn].isManual_=!0,wg(e),n}finishDraft(t,e){const n=t&&t[Tn];(!n||!n.isManual_)&&Gn(9);const{scope_:r}=n;return Pw(r,e),Ow(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=Po("Patches").applyPatches_;return ko(t)?r(t,e):this.produce(t,i=>r(i,e))}};function Tg(t,e){const n=lf(t)?Po("MapSet").proxyMap_(t,e):uf(t)?Po("MapSet").proxySet_(t,e):a3(t,e);return(e?e.scope_:hC()).drafts_.push(n),n}function c3(t){return ko(t)||Gn(10,t),pC(t)}function pC(t){if(!qr(t)||cf(t))return t;const e=t[Tn];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=vg(t,e.scope_.immer_.useStrictShallowCopy_)}else n=vg(t,!0);return Gd(n,(r,i)=>{dC(n,r,pC(i))}),e&&(e.finalized_=!1),n}var Sn=new u3,mC=Sn.produce;Sn.produceWithPatches.bind(Sn);Sn.setAutoFreeze.bind(Sn);Sn.setUseStrictShallowCopy.bind(Sn);Sn.applyPatches.bind(Sn);Sn.createDraft.bind(Sn);Sn.finishDraft.bind(Sn);function gC(t){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,t):i(o)}var d3=gC(),h3=gC,f3=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?qd:qd.apply(null,arguments)};function Mw(t,e){function n(...r){if(e){let i=e(...r);if(!i)throw new Error(hr(0));return{type:t,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>e3(r)&&r.type===t,n}var yC=class tl extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,tl.prototype)}static get[Symbol.species](){return tl}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new tl(...e[0].concat(this)):new tl(...e.concat(this))}};function Lw(t){return qr(t)?mC(t,()=>{}):t}function Vw(t,e,n){if(t.has(e)){let i=t.get(e);return n.update&&(i=n.update(i,e,t),t.set(e,i)),i}if(!n.insert)throw new Error(hr(10));const r=n.insert(e,t);return t.set(e,r),r}function p3(t){return typeof t=="boolean"}var m3=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=e??{};let s=new yC;return n&&(p3(n)?s.push(d3):s.push(h3(n.extraArgument))),s},g3="RTK_autoBatch",vC=t=>e=>{setTimeout(e,t)},y3=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:vC(10),v3=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let i=!0,o=!1,s=!1;const a=new Set,u=t.type==="tick"?queueMicrotask:t.type==="raf"?y3:t.type==="callback"?t.queueNotification:vC(t.timeout),c=()=>{s=!1,o&&(o=!1,a.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const f=()=>i&&d(),m=r.subscribe(f);return a.add(d),()=>{m(),a.delete(d)}},dispatch(d){var f;try{return i=!((f=d==null?void 0:d.meta)!=null&&f[g3]),o=!i,o&&(s||(s=!0,u(c))),r.dispatch(d)}finally{i=!0}}})},_3=t=>function(n){const{autoBatch:r=!0}=n??{};let i=new yC(t);return r&&i.push(v3(typeof r=="object"?r:void 0)),i};function w3(t){const e=m3(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:o=void 0,enhancers:s=void 0}=t||{};let a;if(typeof n=="function")a=n;else if(T0(n))a=JL(n);else throw new Error(hr(1));let u;typeof r=="function"?u=r(e):u=e();let c=qd;i&&(c=f3({trace:!1,...typeof i=="object"&&i}));const d=ZL(...u),f=_3(d);let m=typeof s=="function"?s(f):f();const v=c(...m);return lC(a,o,v)}function _C(t){const e={},n=[];let r;const i={addCase(o,s){const a=typeof o=="string"?o:o.type;if(!a)throw new Error(hr(28));if(a in e)throw new Error(hr(29));return e[a]=s,i},addMatcher(o,s){return n.push({matcher:o,reducer:s}),i},addDefaultCase(o){return r=o,i}};return t(i),[e,n,r]}function E3(t){return typeof t=="function"}function T3(t,e){let[n,r,i]=_C(e),o;if(E3(t))o=()=>Lw(t());else{const a=Lw(t);o=()=>a}function s(a=o(),u){let c=[n[u.type],...r.filter(({matcher:d})=>d(u)).map(({reducer:d})=>d)];return c.filter(d=>!!d).length===0&&(c=[i]),c.reduce((d,f)=>{if(f)if(ko(d)){const v=f(d,u);return v===void 0?d:v}else{if(qr(d))return mC(d,m=>f(m,u));{const m=f(d,u);if(m===void 0){if(d===null)return d;throw Error("A case reducer on a non-draftable value must not return undefined")}return m}}return d},a)}return s.getInitialState=o,s}var S3=Symbol.for("rtk-slice-createasyncthunk");function x3(t,e){return`${t}/${e}`}function I3({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[S3];return function(i){const{name:o,reducerPath:s=o}=i;if(!o)throw new Error(hr(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(A3()):i.reducers)||{},u=Object.keys(a),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(y,A){const D=typeof y=="string"?y:y.type;if(!D)throw new Error(hr(12));if(D in c.sliceCaseReducersByType)throw new Error(hr(13));return c.sliceCaseReducersByType[D]=A,d},addMatcher(y,A){return c.sliceMatchers.push({matcher:y,reducer:A}),d},exposeAction(y,A){return c.actionCreators[y]=A,d},exposeCaseReducer(y,A){return c.sliceCaseReducersByName[y]=A,d}};u.forEach(y=>{const A=a[y],D={reducerName:y,type:x3(o,y),createNotation:typeof i.reducers=="function"};R3(A)?P3(D,A,d,e):b3(D,A,d)});function f(){const[y={},A=[],D=void 0]=typeof i.extraReducers=="function"?_C(i.extraReducers):[i.extraReducers],M={...y,...c.sliceCaseReducersByType};return T3(i.initialState,T=>{for(let x in M)T.addCase(x,M[x]);for(let x of c.sliceMatchers)T.addMatcher(x.matcher,x.reducer);for(let x of A)T.addMatcher(x.matcher,x.reducer);D&&T.addDefaultCase(D)})}const m=y=>y,v=new Map;let w;function I(y,A){return w||(w=f()),w(y,A)}function R(){return w||(w=f()),w.getInitialState()}function S(y,A=!1){function D(T){let x=T[y];return typeof x>"u"&&A&&(x=R()),x}function M(T=m){const x=Vw(v,A,{insert:()=>new WeakMap});return Vw(x,T,{insert:()=>{const b={};for(const[p,k]of Object.entries(i.selectors??{}))b[p]=C3(k,T,R,A);return b}})}return{reducerPath:y,getSelectors:M,get selectors(){return M(D)},selectSlice:D}}const E={name:o,reducer:I,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:R,...S(s),injectInto(y,{reducerPath:A,...D}={}){const M=A??s;return y.inject({reducerPath:M,reducer:I},D),{...E,...S(M,!0)}}};return E}}function C3(t,e,n,r){function i(o,...s){let a=e(o);return typeof a>"u"&&r&&(a=n()),t(a,...s)}return i.unwrapped=t,i}var df=I3();function A3(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function b3({type:t,reducerName:e,createNotation:n},r,i){let o,s;if("reducer"in r){if(n&&!k3(r))throw new Error(hr(17));o=r.reducer,s=r.prepare}else o=r;i.addCase(t,o).exposeCaseReducer(e,o).exposeAction(e,s?Mw(t,s):Mw(t))}function R3(t){return t._reducerDefinitionType==="asyncThunk"}function k3(t){return t._reducerDefinitionType==="reducerWithPrepare"}function P3({type:t,reducerName:e},n,r,i){if(!i)throw new Error(hr(18));const{payloadCreator:o,fulfilled:s,pending:a,rejected:u,settled:c,options:d}=n,f=i(t,o,d);r.exposeAction(e,f),s&&r.addCase(f.fulfilled,s),a&&r.addCase(f.pending,a),u&&r.addCase(f.rejected,u),c&&r.addMatcher(f.settled,c),r.exposeCaseReducer(e,{fulfilled:s||Ec,pending:a||Ec,rejected:u||Ec,settled:c||Ec})}function Ec(){}function hr(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}const N3={uid:null,photo:null},wC=df({name:"user",initialState:N3,reducers:{setLogIn:(t,e)=>{t.uid=e.payload.uid,t.photo=e.payload.photo},setLogOut:t=>{t.uid=null,t.photo=null}}}),{setLogIn:O3,setLogOut:EC}=wC.actions,hf=t=>t.user.uid,D3=t=>t.user.photo,M3=wC.reducer,TC="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlApw1AAAC+lBMVEVHcEwAqUkApUAAhC8AfyoAgiwAgy0AgiwAgywAgi0Agy0AgywAeKsFlWkAgi0EhCwAgy0AjTMArEYCgyyLoBP/uwC9uCEAq0kArEYAqUUAijEAgi0Agi44jyLotQT+uAL/uQAArEYArEYArEcArUYAnDwAhS6oqA//uwD/ugD/ugD/uwD2mhIArEYArEYAjzRclxzztwL/uQD/ugD/lBoAq0YArEcBoT8ciSjGrgr/ugD/ugAAq0YAq0cAlTh3nRj/ugD/ugAAqkMBq0YApkMqjCXgtAX/ugD+rgcArEaPohP/ugD/uwAArEZFkiAArEYPhiqxqQ7/ugAAq0f6uQH/uQAAq0bQsAj/ugD0hxkArEaCnxb/ugAArEb/ugD/uAAArEadpRH/ugAAq0b/ugD/ugAArEa9rAv/ugAArEYArEZsmhr/ugD+tQL+ugD/ugAAq0f/ugAAr0X/ugD/vAAArEdPlR//ugAAq0f/ugAArEYArEb/ugDYsgf/ugD/uQAArEYArEb/ugAAq0YArEb/ugAArEb/uQC2qg3/uQAArEYApFgCpFwPmpoWdfEiiP+aonP9rAb7rAYAaNUAbckAbskUfOAmg/t2bqfqUS/tUS7sUS/qRjMAZdsAZdoAZdsJbeMkg/smhPwtgfSzVG3tQjLqQjXqQjXpQTUIad4AZdoAZtocfPMkhf5UdM3cR0LrQzPqQzXqQjTrQjUAZtoOcecng/qbXIPqQzXqQzEAZtoEad5GedvTSkzqQjUAZdoSdOuAZp/pQjXrQjUAZdohgPg8fOXCT13qQjTqQzYAZdoXeO8jhf9va7LjRDvqQzQAZtnqQzQAZtnqQjQMbuQAZtqTXozqQjQMbuYAZtrqQjTnRDY1fuzqQTQKaN5hcL7qQjSoWHcAZtrpQjXqQjXLTFPrQzR5Z6fqQjW2U2oSfvPpQzUAYt4AZtqJYpgAZdpXc8rqQzVqbLcZe/Bjbrwkg/slg/wmg/slhPskhPwlhPslhPwlhPwlhPsEQhQXAAAA/nRSTlMABxQbHlKGtNHc4Y4CBDj+/5Um65IhAU/W////////1E5s7v/////////vbQZ7+P////d7A2T0////9GU64///5ToPtP///7kP/f/9aR//i///i+j/NKv/qglW/1XHxhR0/3Pd2CuT/5NA6//rP7ELXFwayxku/96Ym0fxR//6Y86EhDSjo7/A/0Gc/+NCGx5C//RS+//34ez7//9QRvr/////++////dHMfL////y+///7jTa//v12hux//j4sXT/8/1z6f/59+gqpP//8vyePj6alSfg9eAVxsgV/FoM86j3jI7T+mr9vfoJhR/S92D7evu0sU+s6uVkmb3T34sbFvgAAAgqSURBVHgB7MHFAYAwAASwunvx/QdlBOSFXEIAAAAAAOABKOPiFM4oeRwulTbWnWKN9lIE8hwxeZPLJdnWFMlDtNrLDX0YyRNM87JuO/F2vdU4FMRxfOBvut7gepFc3N213Szu7u7u7vLO68GaTJspTD6vwLm/0/nmEP7JsojIqOgYBWzniI0T8QmJnyz7mKTK5JRUsJkjLV38lhFu+Q+QmSWlzM7JBXvl5Yvf4gss/wkKi1T5W3EJ2Kq0TPxT/smiCvlPZRXYqLpG/Fcb9smK8Lp6+V+DC+wT6xa6hE+WfFflf9oPsE1jiHgUauUdRzRlyUfRTrCJ0ix0Ft9xS6sqn7Qpdr3gdvFchoUJ7ZDPVHaCLQK6xAu1iT5PaLcqn+vpBTv05QudxSntly8VD4ANAgeFztqURjxNqG5oGPiNuMVrvv0k+jiqyle0MWD3ZVzo0CnFJ1Q3MQnMgqaEzuKUtkyr0tNMLvCanRM6a+84fL5DGlhYtHNC8XeMT6huaRk4raQLQ6EJ3l5wvzSWvQqM1gaFidAwb3ekNLG+AXzS3MKYfl1id6SZHGCzWSbM4FMasZUlTW2zTaljR5jCp7SlSJXmdrmmdG9fILApnZeY5APuO9LilIbXHaoSwXVd5qULDHJdfpe4o2Ng0HgijODvWJ9QnBbNMaWnAoG8Y/2ORJ3BuzsvE95lhCN3JILhugy4ED4oSDROcd5dpsL7Cs4Xvig3T3G44hh4V4FXAoFM6bMUh7t2caU4XAJyR6K0H0wpzvuUInckZsLJkeKsTmnLjSpRlFBHT3GW33G4x4QiFqq47khcQZjBHYlgCHV96cKKcvMUh8se4EpxuNAw9EcQYmiYK8XhEhItTigp1BFSnMUpRe9IvuvSMSUQyJTqKQ7BEupm4wQCe8fGKQ6XfMt5R+I/iQqRO1JHCHWEFEeR4PWOZAp1ayeCJDTM24Qyhbo0QeMuQFIcLocrxeFqliSCa0odd4Ko/bxzQRLtpnKlOESzorRJouQDpglFhHwBcE5IogYXS4pDuGPhtxRNEiChjpDiiK4C4bfha0kU7WRIcYj8YPgrplgSnTGkOMRFAPyVeimJKju5UpyRsnP4r7NSEl2mcqU4A6fw6Iw8pTFMKc7ASSM8ckYzTCmS4ijS8+CZkiPqlPoZ6r6ECKKaanjG1WDPlAY1C6L9PXjhIJk8pQrQlc4JojsHvJC6yz+leIrDlW3CS8rkNv+U4ikOlQYeciRRcQw9xZEndA08bKxLoutheoqjSV8BA6vZkkZLYUhxyITqlsnX5YSTmOKI4mbB0C15SttyaSmOaMoBhnJnJNFCFecdOf4FTNCntKeXkuJo3CNgakyTNNkDhBRHNBgIpoaHJNHQMFOKE+l9gBggT+kYV4rrCgBEbw9PqKOnuLlSQFVRQ502k8uT4oIAldtGntJFCxN65U+KQxFCHeGbR56bnuJwhFBH+ObRGOJXikMQQh3hm4fid4rDkUOdluNjimv3N8XhUi/pU8qV4nD0UDeTy5XicPRQd/ueKS6kEXxED3VLLq4Uh6OHulWuFIdzNdCnlCvF4cihTs3hSnE4eqhDp1R5wxSHUyapU6rupnKlOFzOe3w+XnvLFIdT6KGuwcWV4nCrR2/9+TjorVMcjh7qop2E/64ipTgcPdSdcaU4HDnUaZWGU+q48CvFEdBDXZthSWmnpzgicqjbdhpNkJ8pjmCDGuq0VfAQUENPcWTkULerwGtrIfQUR0YOdesuz0s4jp7i6IihTqt0esa49HgK0Qx+aVNJkjs9T+F7kodf7dhVfhtBDIBxHWDzuq+9QB5ziF7BdyozBjYM06DDzMzMzMxYblVQ1zvyblSa/wkS2/p+I92+c9ePezfuR+MBvTM+fPQ4Gk+e+vTs+YuXfM9fwc9exydEITHJ8Sk5JTWNLz0DfpaZlR2FHMcv9SY3L5+toBB+dqcomy+c5PhVXFwSxT9QWkafQuXZbBU5jn+qsor/H1THAlGTzVbrBKG4rj6fqwGozEb2F9DkBKK5JTWfp7UNKKs9m6nDCYTq7OrO5+mJA6B6mR3ym1CkPqSU16A++BWr38cEi6Z0wOXKPjgknFBUPMz5B0bawEWN8ASjzsqq1Hxd9Q3gZnRMOKFIMVI6PgFurIfx2hPcFOw/MKmd0vQpcDddLpxQ1DnTrTkGsyGIoLdROKEoeU7vK2jtg0iseemEclO6EAcRDRZpJdS5BlopXWwDDzXCCUWqeSnVO6HL4GV6THqC0Yp3SlcnwNPDLOGEosm1VK+EvgJv6+38PTIQyjOl9bOxoCGzUeYRRBV7pLS1ELTMSycUVUZO6YYNWja3ZB5BVPF2xISWgR5rJ144oTSlvITSJ5FwQpHqqndP6E3QZb3OknkEUcmuKS3IAH0xbttlQo5zvTp33VLaEwsMmUPCCUXFJam8PdJFjUBCWYe6PeDZHJNOKNquz6fGy4BpJ17mEUSR7RL3SJb1cumEov1ueswNAVtvo1hCaUrpKY4vZl58gjGluXl6pzjGdkkSKpnS0jaISo3cI4ge6ugpjm90TDihSK3Ua5ziGNslSahkSnGP5FtvF04o6tzvziOnOD4rc0h2gpHCQx3ZI3lq4jGhstSHlNIJ5pvuxwkWpr4c6npC4Mtou2hCyXY5OwH+WKPt8cITjCnNz6/vmQDfpmsahR5B5FBXsBeCAFi9B8XOb1B82GdDMKaPjk8cYafHR+sQFNtezzw7v7i8eiri6vLi/GwwBoJlW+ujd2XcGV0HABuCZsNv9wcxDMMwDMMwDMMw3gM561JvVju4RAAAAABJRU5ErkJggg==";function L3(){const t=An(),[e,n]=O.useState(null),r=Su(),i=Gt(D3),o=Gt(hf);console.log("uID : ",o);const s=f=>{n(f.currentTarget)},a=()=>{n(null)},u=()=>{t(EC({uid:null,photo:null})),n(null),r("/login")},c=!!e,d=c?"simple-popover":void 0;return _.jsxs(V3,{children:[_.jsx(_.Fragment,{children:_.jsx(sf,{to:"/drive",children:_.jsxs(j3,{children:[_.jsx("img",{src:TC,alt:"Drive Logo"}),_.jsx("span",{children:"Drive"})]})})}),o?_.jsxs(_.Fragment,{children:[_.jsxs(F3,{children:[_.jsx(iM,{className:"icon"}),_.jsx("input",{type:"text",placeholder:"Search in Drive"}),_.jsx(aM,{className:"icon"})]}),_.jsxs($3,{children:[_.jsx(FD,{className:"icon"}),_.jsx(YD,{className:"icon"}),_.jsx(oM,{className:"icon"}),_.jsx(LD,{className:"icon"}),_.jsxs("div",{children:[_.jsx(zM,{onClick:s,children:_.jsx("img",{src:i,alt:"User Avatar",className:"w-8 h-8 rounded-full cursor-pointer"})}),_.jsx(GD,{onClick:s,className:"-ml-2"})]})]}),_.jsx(I5,{id:d,open:c,anchorEl:e,onClose:a,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:_.jsxs(U3,{children:[_.jsxs(jw,{onClick:()=>alert("Account Settings"),children:[_.jsx(MD,{fontSize:"small"})," Account Settings"]}),_.jsxs(jw,{onClick:u,children:[_.jsx(qD,{fontSize:"small"})," Logout"]})]})})]}):_.jsxs("ul",{className:"flex gap-10 text-gray-600 mx-10",children:[_.jsx("li",{className:"hover:text-blue-500 cursor-pointer",children:"Individuals"}),_.jsx("li",{className:"hover:text-blue-500 cursor-pointer",children:"Teams"}),_.jsx("li",{className:"hover:text-blue-500 cursor-pointer",children:"Enterprise"})]})]})}const V3=q.div`
  display: flex;
  align-items: center;
  justify-content: ${({userUid:t})=>t?"space-between":"initial"};
  padding: 2px 16px;
  height: 60px;
  font-family: Arial, sans-serif;
`,j3=q.div`
  display: flex;
  align-items: center;
  margin-left: 15px;

  img {
    height: 40px;
    margin-right: 8px;
  }

  span {
    font-size: 22px;
    font-weight: 500;
    color: #202124;
  }
`,F3=q.div`
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 680px;
  height: 40px;
  background-color: #e9edf6;
  border-radius: 40px;
  padding: 3px 12px;
  margin: 0 16px;

  .icon {
    color: #44464a;
  }

  input {
    flex: 1;
    border: none;
    outline: none;
    background: none;
    margin: 0 8px;
    font-size: 14px;
    color: #202124;
  }
`,$3=q.div`
  display: flex;
  align-items: center;

  .icon {
    color: #44464a;
    margin: 0 10px;
    cursor: pointer;
  }
`,U3=q.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`,jw=q.div`
  display: flex;
  align-items: center;
  padding: 8px;
  font-size: 14px;
  cursor: pointer;
  color: #44464a;

  &:hover {
    background-color: #f5f5f5;
  }

  svg {
    margin-right: 8px;
  }
`,B3={folderBool:!1,modelBools:!1,photo:!1},SC=df({name:"bool",initialState:B3,reducers:{setBoolean:(t,e)=>{t.folderBool=e.payload.folderBool,t.modelBools=e.payload.modelBools,t.photo=e.payload.photo}}}),{setBoolean:Gr}=SC.actions,z3=t=>t.bool.folderBool,H3=t=>t.bool.modelBools,W3=t=>t.bool.photo,q3=SC.reducer;function G3(){const t=An();return _.jsxs(K3,{children:[_.jsx(Q3,{onClick:()=>t(Gr({modelBools:!0})),children:_.jsx("span",{onClick:()=>t(Gr({modelBools:!0})),children:"New"})}),_.jsxs(Ar,{to:"/home",exact:!0,children:[_.jsx(XD,{className:"icon"}),_.jsx("span",{children:"Home"})]}),_.jsxs(Ar,{to:"/my-drive",children:[_.jsx(jI,{className:"icon"}),_.jsx("span",{children:"My Drive"})]}),_.jsxs(Ar,{to:"/computers",children:[_.jsx(UD,{className:"icon"}),_.jsx("span",{children:"Computers"})]}),_.jsx(Fw,{}),_.jsxs(Ar,{to:"/shared",children:[_.jsx(nM,{className:"icon"}),_.jsx("span",{children:"Shared with me"})]}),_.jsxs(Ar,{to:"/recent",children:[_.jsx(DD,{className:"icon"}),_.jsx("span",{children:"Recent"})]}),_.jsxs(Ar,{to:"/starred",children:[_.jsx($I,{className:"icon"}),_.jsx("span",{children:"Starred"})]}),_.jsx(Fw,{}),_.jsxs(Ar,{to:"/spam",children:[_.jsx(rM,{className:"icon"}),_.jsx("span",{children:"Spam"})]}),_.jsxs(Ar,{to:"/bin",children:[_.jsx(VI,{className:"icon"}),_.jsx("span",{children:"Bin"})]}),_.jsxs(Ar,{to:"/storage",children:[_.jsx(QD,{className:"icon"}),_.jsx("span",{children:"Storage"})]}),_.jsxs(Y3,{children:[_.jsx(X3,{}),_.jsx(J3,{children:"100 Mb of 15 GB used"})]}),_.jsx(Z3,{children:"Get more storage"})]})}const K3=q.div`
  width: 220px;
  padding: 10px 0;
  margin-left: 20px;
  font-family: Arial, sans-serif;
`,Q3=q.div`
  width: 118px;
  height: 48px;
  background-color: white;
  border-radius: 24px;
  padding: 2px;
  margin-bottom: 20px;
  cursor: pointer;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 01);
  transition: all 500ms ease-out;

  &:hover {
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    &::before {
      content: url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2236%22 height=%2236%22 viewBox=%220 0 36 36%22%3E%3Cpath fill=%22%2334A853%22 d=%22M16 16v14h4V20z%22/%3E%3Cpath fill=%22%234285F4%22 d=%22M30 16H20l-4 4h14z%22/%3E%3Cpath fill=%22%23FBBC05%22 d=%22M6 16v4h10l4-4z%22/%3E%3Cpath fill=%22%23EA4335%22 d=%22M20 16V6h-4v14z%22/%3E%3Cpath fill=%22none%22 d=%22M0 0h36v36H0z%22/%3E%3C/svg%3E");
      height: 36px;
      padding-right: 10px;
    }
  }
`,Ar=q(WL)`
  display: flex;
  align-items: center;
  padding: 5px 16px;
  font-size: 14px;
  color: #202124;
  cursor: pointer;
  border-radius: 40px;
  transition: background-color 0.2s ease;
  text-decoration: none;

  .icon {
    margin-right: 10px;
    color: #474848;
  }

  &.active {
    background-color: #c3e7ff;
  }

  &:hover {
    background-color: #e7e9eb;
  }
`,Fw=q.div`
  height: 1px;
  margin: 5px 0;
`,Y3=q.div`
  padding: 0 16px;
  color: #5f6368;
`,X3=q.div`
  width: 85%;
  height: 6px;
  background-color: #e0e0e0;
  border-radius: 3px;
  margin: 10px 0;

  &::before {
    content: "";
    display: block;
    width: 8%;
    height: 100%;
    background-color: #1a73e8;
    border-radius: 3px;
  }
`,J3=q.div`
  font-size: 12px;
`,Z3=q.button`
  display: block;
  width: calc(80% - 32px);
  margin: 13px 16px;
  padding: 8px 0;
  font-size: 14px;
  color: #1a73e8;
  background: transparent;
  border: 1px solid #1a73e8;
  border-radius: 40px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(26, 115, 232, 0.1);
  }
`,eV={photo:null,title:null,bin:[],favorites:[],fileList:[]},xC=df({name:"photos",initialState:eV,reducers:{setPhotoDisplay:(t,e)=>{t.title=e.payload.title,t.photo=e.payload.photo},moveToBin:(t,e)=>{t.bin.push(e.payload),t.photo===e.payload.photo&&(t.photo=null,t.title=null)},restoreToDrive:(t,e)=>{const n=e.payload;t.bin=t.bin.filter(r=>r.photo!==n.photo),t.fileList.push(n)},toggleFavorite:(t,e)=>{const n=t.favorites.findIndex(r=>r.photo===e.payload.photo);return n>=0?{...t,favorites:t.favorites.filter((r,i)=>i!==n)}:{...t,favorites:[...t.favorites,e.payload]}}}}),{setPhotoDisplay:IC,moveToBin:tV,toggleFavorite:y8,restoreToDrive:nV}=xC.actions,rV=t=>t.photos.photo,iV=t=>t.photos.title,CC=t=>t.photos.bin,oV=t=>t.photos.favorites,sV=xC.reducer;function AC({img:t,title:e}){const n=An(),[r,i]=O.useState(!1),[o,s]=O.useState(!1),a=O.useRef(),u=O.useRef(),c=Gt(CC),d={img:t,title:e},f=()=>{n(IC({photo:t,title:e}))},m=()=>{s(!0)},v=()=>{console.log("AddToFav path clicked"),s(!1)},w=()=>{const y=document.createElement("a");y.href=t,y.download=e,document.body.appendChild(y),y.click(),document.body.removeChild(y),s(!1)},I=()=>{console.log("Rename path clicked"),s(!1)},R=()=>{console.log("Share path clicked"),s(!1)},S=()=>{n(tV(d)),s(!1)},E=c.some(y=>y.img===t);return O.useEffect(()=>{const y=A=>{a.current&&!a.current.contains(A.target)&&s(!1)};return document.addEventListener("mousedown",y),()=>{document.removeEventListener("mousedown",y)}},[]),_.jsx(_.Fragment,{children:!E&&_.jsxs(aV,{onClick:f,children:[_.jsx(lV,{children:_.jsx("img",{src:t,alt:e})}),_.jsxs(uV,{children:[_.jsxs(cV,{children:[_.jsx(lg,{className:"iconPhoto"}),e]}),_.jsxs(dV,{children:[_.jsx($I,{className:"fav",style:{fontSize:"18px"},onClick:y=>{y.stopPropagation(),v()},ref:u}),_.jsxs(hV,{onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),onClick:y=>{y.stopPropagation(),i(!1),m()},ref:a,children:[_.jsx(FI,{style:{fontSize:"20px",color:"#5f6368"}}),r&&_.jsx(fV,{children:"More Actions"}),o&&_.jsxs(pV,{children:[_.jsxs(Ha,{onClick:f,children:[_.jsx(UI,{className:"icon"}),"Open with"]}),_.jsxs(Ha,{onClick:w,children:[_.jsx(KD,{className:"icon"}),"Download"]}),_.jsxs(Ha,{onClick:I,children:[_.jsx(HD,{className:"icon"}),"Rename"]}),_.jsxs(Ha,{onClick:R,children:[_.jsx(sM,{className:"icon"}),"Share"]}),_.jsxs(Ha,{onClick:S,children:[_.jsx(VI,{className:"icon"}),"Move to bin"]})]})]})]})]})]})})}const aV=q.div`
  width: 300px;
  height: 280px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin: 10px;
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.3);
    transform: translateY(-1px);
  }
`,lV=q.div`
  width: 100%;
  height: 80%;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`,uV=q.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  position: relative;
`,cV=q.div`
  font-size: 14px;
  font-weight: 500;
  color: #202124;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  .iconPhoto {
    color: #4285f4;
    margin-right: 4px;
  }
`,dV=q.div`
  display: flex;
  gap: 2px;
  color: #717577;

  .fav {
    border-radius: 18px;

    &:hover {
      background-color: #f1f3f4;
    }
  }
`,hV=q.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    color: #5f6368;
    font-size: 20px;
  }

  &:hover {
    background-color: rgba(95, 99, 104, 0.1);
    border-radius: 50%;
  }
`,fV=q.div`
  position: absolute;
  top: -30px;
  right: -5px;
  background-color: #333;
  color: #fff;
  padding: 5px 8px;
  font-size: 12px;
  border-radius: 4px;
  white-space: nowrap;
  opacity: 0.9;
  z-index: 10;
  transition: opacity 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    right: 10px;
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }
`,pV=q.div`
  position: absolute;
  bottom: 25px;
  right: 0;
  width: 180px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
  z-index: 10;
`,Ha=q.div`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  font-size: 14px;
  color: #320;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f1f3f4;
  }

  .icon {
    font-size: 18px;
    margin-right: 5px;
  }
`,mV={folderId:null,folderName:null},bC=df({name:"folder",initialState:mV,reducers:{setFolder:(t,e)=>{t.folderId=e.payload.folderId,t.folderName=e.payload.folderName}}}),{setFolder:RC}=bC.actions,kC=t=>t.folder.folderId,gV=bC.reducer;function yV({title:t,id:e}){const n=An(),r=Su(),i=()=>{e&&(n(RC({folderId:e,folderName:t})),r(`/folder/${t}/${e}`))};return _.jsxs(vV,{onClick:i,children:[_.jsx(jI,{}),_.jsx("span",{children:t})]})}const vV=q.div`
  width: 287.5px;
  height: 48px;
  display: flex;
  padding-inline: 8px;
  align-items: center;
  background-color: #f0f3f8;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: 10px;

  svg {
    height: 24px;
    width: 24px;
    color: rgba(95, 99, 104);
    margin-left: 4px;
  }

  span {
    font-size: 13px;
    margin-left: 10px;
    text-transform: capitalize;
  }
`;var $w={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_V=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],u=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},NC={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=o>>2,f=(o&3)<<4|a>>4;let m=(a&15)<<2|c>>6,v=c&63;u||(v=64,s||(m=64)),r.push(n[d],n[f],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(PC(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_V(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||c==null||f==null)throw new wV;const m=o<<2|a>>4;if(r.push(m),c!==64){const v=a<<4&240|c>>2;if(r.push(v),f!==64){const w=c<<6&192|f;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class wV extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const EV=function(t){const e=PC(t);return NC.encodeByteArray(e,!0)},Yd=function(t){return EV(t).replace(/\./g,"")},OC=function(t){try{return NC.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TV(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SV=()=>TV().__FIREBASE_DEFAULTS__,xV=()=>{if(typeof process>"u"||typeof $w>"u")return;const t=$w.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},IV=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&OC(t[1]);return e&&JSON.parse(e)},ff=()=>{try{return SV()||xV()||IV()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},DC=t=>{var e,n;return(n=(e=ff())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},MC=t=>{const e=DC(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},LC=()=>{var t;return(t=ff())===null||t===void 0?void 0:t.config},VC=t=>{var e;return(e=ff())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CV{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Yd(JSON.stringify(n)),Yd(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function AV(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ut())}function bV(){var t;const e=(t=ff())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function RV(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function kV(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function PV(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function NV(){const t=Ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function OV(){return!bV()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function DV(){try{return typeof indexedDB=="object"}catch{return!1}}function MV(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LV="FirebaseError";class Tr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=LV,Object.setPrototypeOf(this,Tr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xu.prototype.create)}}class xu{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?VV(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Tr(i,a,r)}}function VV(t,e){return t.replace(jV,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const jV=/\{\$([^}]+)}/g;function FV(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xd(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(Uw(o)&&Uw(s)){if(!Xd(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Uw(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $V(t,e){const n=new UV(t,e);return n.subscribe.bind(n)}class UV{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");BV(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Fp),i.error===void 0&&(i.error=Fp),i.complete===void 0&&(i.complete=Fp);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function BV(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fp(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t){return t&&t._delegate?t._delegate:t}class Mi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zV{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new CV;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(WV(e))try{this.getOrInitializeService({instanceIdentifier:so})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=so){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=so){return this.instances.has(e)}getOptions(e=so){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:HV(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=so){return this.component?this.component.multipleInstances?e:so:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function HV(t){return t===so?void 0:t}function WV(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qV{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new zV(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const GV={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},KV=he.INFO,QV={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},YV=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=QV[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class I0{constructor(e){this.name=e,this._logLevel=KV,this._logHandler=YV,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?GV[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const XV=(t,e)=>e.some(n=>t instanceof n);let Bw,zw;function JV(){return Bw||(Bw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ZV(){return zw||(zw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const FC=new WeakMap,Sg=new WeakMap,$C=new WeakMap,$p=new WeakMap,C0=new WeakMap;function e6(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(bi(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&FC.set(n,t)}).catch(()=>{}),C0.set(e,t),e}function t6(t){if(Sg.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});Sg.set(t,e)}let xg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sg.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$C.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function n6(t){xg=t(xg)}function r6(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Up(this),e,...n);return $C.set(r,e.sort?e.sort():[e]),bi(r)}:ZV().includes(t)?function(...e){return t.apply(Up(this),e),bi(FC.get(this))}:function(...e){return bi(t.apply(Up(this),e))}}function i6(t){return typeof t=="function"?r6(t):(t instanceof IDBTransaction&&t6(t),XV(t,JV())?new Proxy(t,xg):t)}function bi(t){if(t instanceof IDBRequest)return e6(t);if($p.has(t))return $p.get(t);const e=i6(t);return e!==t&&($p.set(t,e),C0.set(e,t)),e}const Up=t=>C0.get(t);function o6(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=bi(s);return r&&s.addEventListener("upgradeneeded",u=>{r(bi(s.result),u.oldVersion,u.newVersion,bi(s.transaction),u)}),n&&s.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const s6=["get","getKey","getAll","getAllKeys","count"],a6=["put","add","delete","clear"],Bp=new Map;function Hw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bp.get(e))return Bp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=a6.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||s6.includes(n)))return;const o=async function(s,...a){const u=this.transaction(s,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return Bp.set(e,o),o}n6(t=>({...t,get:(e,n,r)=>Hw(e,n)||t.get(e,n,r),has:(e,n)=>!!Hw(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l6{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(u6(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function u6(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ig="@firebase/app",Ww="0.10.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=new I0("@firebase/app"),c6="@firebase/app-compat",d6="@firebase/analytics-compat",h6="@firebase/analytics",f6="@firebase/app-check-compat",p6="@firebase/app-check",m6="@firebase/auth",g6="@firebase/auth-compat",y6="@firebase/database",v6="@firebase/data-connect",_6="@firebase/database-compat",w6="@firebase/functions",E6="@firebase/functions-compat",T6="@firebase/installations",S6="@firebase/installations-compat",x6="@firebase/messaging",I6="@firebase/messaging-compat",C6="@firebase/performance",A6="@firebase/performance-compat",b6="@firebase/remote-config",R6="@firebase/remote-config-compat",k6="@firebase/storage",P6="@firebase/storage-compat",N6="@firebase/firestore",O6="@firebase/vertexai",D6="@firebase/firestore-compat",M6="firebase",L6="11.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg="[DEFAULT]",V6={[Ig]:"fire-core",[c6]:"fire-core-compat",[h6]:"fire-analytics",[d6]:"fire-analytics-compat",[p6]:"fire-app-check",[f6]:"fire-app-check-compat",[m6]:"fire-auth",[g6]:"fire-auth-compat",[y6]:"fire-rtdb",[v6]:"fire-data-connect",[_6]:"fire-rtdb-compat",[w6]:"fire-fn",[E6]:"fire-fn-compat",[T6]:"fire-iid",[S6]:"fire-iid-compat",[x6]:"fire-fcm",[I6]:"fire-fcm-compat",[C6]:"fire-perf",[A6]:"fire-perf-compat",[b6]:"fire-rc",[R6]:"fire-rc-compat",[k6]:"fire-gcs",[P6]:"fire-gcs-compat",[N6]:"fire-fst",[D6]:"fire-fst-compat",[O6]:"fire-vertex","fire-js":"fire-js",[M6]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl=new Map,j6=new Map,Ag=new Map;function qw(t,e){try{t.container.addComponent(e)}catch(n){Kr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function No(t){const e=t.name;if(Ag.has(e))return Kr.debug(`There were multiple attempts to register component ${e}.`),!1;Ag.set(e,t);for(const n of Zl.values())qw(n,t);for(const n of j6.values())qw(n,t);return!0}function pf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Mr(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F6={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ri=new xu("app","Firebase",F6);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $6{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ri.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=L6;function UC(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Cg,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ri.create("bad-app-name",{appName:String(i)});if(n||(n=LC()),!n)throw Ri.create("no-options");const o=Zl.get(i);if(o){if(Xd(n,o.options)&&Xd(r,o.config))return o;throw Ri.create("duplicate-app",{appName:i})}const s=new qV(i);for(const u of Ag.values())s.addComponent(u);const a=new $6(n,r,s);return Zl.set(i,a),a}function mf(t=Cg){const e=Zl.get(t);if(!e&&t===Cg&&LC())return UC();if(!e)throw Ri.create("no-app",{appName:t});return e}function U6(){return Array.from(Zl.values())}function fr(t,e,n){var r;let i=(r=V6[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kr.warn(a.join(" "));return}No(new Mi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B6="firebase-heartbeat-database",z6=1,eu="firebase-heartbeat-store";let zp=null;function BC(){return zp||(zp=o6(B6,z6,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(eu)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ri.create("idb-open",{originalErrorMessage:t.message})})),zp}async function H6(t){try{const n=(await BC()).transaction(eu),r=await n.objectStore(eu).get(zC(t));return await n.done,r}catch(e){if(e instanceof Tr)Kr.warn(e.message);else{const n=Ri.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kr.warn(n.message)}}}async function Gw(t,e){try{const r=(await BC()).transaction(eu,"readwrite");await r.objectStore(eu).put(e,zC(t)),await r.done}catch(n){if(n instanceof Tr)Kr.warn(n.message);else{const r=Ri.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kr.warn(r.message)}}}function zC(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W6=1024,q6=30*24*60*60*1e3;class G6{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Q6(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Kw();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=q6}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Kr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Kw(),{heartbeatsToSend:r,unsentEntries:i}=K6(this._heartbeatsCache.heartbeats),o=Yd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return Kr.warn(n),""}}}function Kw(){return new Date().toISOString().substring(0,10)}function K6(t,e=W6){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Qw(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Qw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Q6{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return DV()?MV().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await H6(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Qw(t){return Yd(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y6(t){No(new Mi("platform-logger",e=>new l6(e),"PRIVATE")),No(new Mi("heartbeat",e=>new G6(e),"PRIVATE")),fr(Ig,Ww,t),fr(Ig,Ww,"esm2017"),fr("fire-js","")}Y6("");var X6="firebase",J6="11.0.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fr(X6,J6,"app");var Yw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _o,HC;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,x){function b(){}b.prototype=x.prototype,T.D=x.prototype,T.prototype=new b,T.prototype.constructor=T,T.C=function(p,k,N){for(var P=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)P[Q-2]=arguments[Q];return x.prototype[k].apply(p,P)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,x,b){b||(b=0);var p=Array(16);if(typeof x=="string")for(var k=0;16>k;++k)p[k]=x.charCodeAt(b++)|x.charCodeAt(b++)<<8|x.charCodeAt(b++)<<16|x.charCodeAt(b++)<<24;else for(k=0;16>k;++k)p[k]=x[b++]|x[b++]<<8|x[b++]<<16|x[b++]<<24;x=T.g[0],b=T.g[1],k=T.g[2];var N=T.g[3],P=x+(N^b&(k^N))+p[0]+3614090360&4294967295;x=b+(P<<7&4294967295|P>>>25),P=N+(k^x&(b^k))+p[1]+3905402710&4294967295,N=x+(P<<12&4294967295|P>>>20),P=k+(b^N&(x^b))+p[2]+606105819&4294967295,k=N+(P<<17&4294967295|P>>>15),P=b+(x^k&(N^x))+p[3]+3250441966&4294967295,b=k+(P<<22&4294967295|P>>>10),P=x+(N^b&(k^N))+p[4]+4118548399&4294967295,x=b+(P<<7&4294967295|P>>>25),P=N+(k^x&(b^k))+p[5]+1200080426&4294967295,N=x+(P<<12&4294967295|P>>>20),P=k+(b^N&(x^b))+p[6]+2821735955&4294967295,k=N+(P<<17&4294967295|P>>>15),P=b+(x^k&(N^x))+p[7]+4249261313&4294967295,b=k+(P<<22&4294967295|P>>>10),P=x+(N^b&(k^N))+p[8]+1770035416&4294967295,x=b+(P<<7&4294967295|P>>>25),P=N+(k^x&(b^k))+p[9]+2336552879&4294967295,N=x+(P<<12&4294967295|P>>>20),P=k+(b^N&(x^b))+p[10]+4294925233&4294967295,k=N+(P<<17&4294967295|P>>>15),P=b+(x^k&(N^x))+p[11]+2304563134&4294967295,b=k+(P<<22&4294967295|P>>>10),P=x+(N^b&(k^N))+p[12]+1804603682&4294967295,x=b+(P<<7&4294967295|P>>>25),P=N+(k^x&(b^k))+p[13]+4254626195&4294967295,N=x+(P<<12&4294967295|P>>>20),P=k+(b^N&(x^b))+p[14]+2792965006&4294967295,k=N+(P<<17&4294967295|P>>>15),P=b+(x^k&(N^x))+p[15]+1236535329&4294967295,b=k+(P<<22&4294967295|P>>>10),P=x+(k^N&(b^k))+p[1]+4129170786&4294967295,x=b+(P<<5&4294967295|P>>>27),P=N+(b^k&(x^b))+p[6]+3225465664&4294967295,N=x+(P<<9&4294967295|P>>>23),P=k+(x^b&(N^x))+p[11]+643717713&4294967295,k=N+(P<<14&4294967295|P>>>18),P=b+(N^x&(k^N))+p[0]+3921069994&4294967295,b=k+(P<<20&4294967295|P>>>12),P=x+(k^N&(b^k))+p[5]+3593408605&4294967295,x=b+(P<<5&4294967295|P>>>27),P=N+(b^k&(x^b))+p[10]+38016083&4294967295,N=x+(P<<9&4294967295|P>>>23),P=k+(x^b&(N^x))+p[15]+3634488961&4294967295,k=N+(P<<14&4294967295|P>>>18),P=b+(N^x&(k^N))+p[4]+3889429448&4294967295,b=k+(P<<20&4294967295|P>>>12),P=x+(k^N&(b^k))+p[9]+568446438&4294967295,x=b+(P<<5&4294967295|P>>>27),P=N+(b^k&(x^b))+p[14]+3275163606&4294967295,N=x+(P<<9&4294967295|P>>>23),P=k+(x^b&(N^x))+p[3]+4107603335&4294967295,k=N+(P<<14&4294967295|P>>>18),P=b+(N^x&(k^N))+p[8]+1163531501&4294967295,b=k+(P<<20&4294967295|P>>>12),P=x+(k^N&(b^k))+p[13]+2850285829&4294967295,x=b+(P<<5&4294967295|P>>>27),P=N+(b^k&(x^b))+p[2]+4243563512&4294967295,N=x+(P<<9&4294967295|P>>>23),P=k+(x^b&(N^x))+p[7]+1735328473&4294967295,k=N+(P<<14&4294967295|P>>>18),P=b+(N^x&(k^N))+p[12]+2368359562&4294967295,b=k+(P<<20&4294967295|P>>>12),P=x+(b^k^N)+p[5]+4294588738&4294967295,x=b+(P<<4&4294967295|P>>>28),P=N+(x^b^k)+p[8]+2272392833&4294967295,N=x+(P<<11&4294967295|P>>>21),P=k+(N^x^b)+p[11]+1839030562&4294967295,k=N+(P<<16&4294967295|P>>>16),P=b+(k^N^x)+p[14]+4259657740&4294967295,b=k+(P<<23&4294967295|P>>>9),P=x+(b^k^N)+p[1]+2763975236&4294967295,x=b+(P<<4&4294967295|P>>>28),P=N+(x^b^k)+p[4]+1272893353&4294967295,N=x+(P<<11&4294967295|P>>>21),P=k+(N^x^b)+p[7]+4139469664&4294967295,k=N+(P<<16&4294967295|P>>>16),P=b+(k^N^x)+p[10]+3200236656&4294967295,b=k+(P<<23&4294967295|P>>>9),P=x+(b^k^N)+p[13]+681279174&4294967295,x=b+(P<<4&4294967295|P>>>28),P=N+(x^b^k)+p[0]+3936430074&4294967295,N=x+(P<<11&4294967295|P>>>21),P=k+(N^x^b)+p[3]+3572445317&4294967295,k=N+(P<<16&4294967295|P>>>16),P=b+(k^N^x)+p[6]+76029189&4294967295,b=k+(P<<23&4294967295|P>>>9),P=x+(b^k^N)+p[9]+3654602809&4294967295,x=b+(P<<4&4294967295|P>>>28),P=N+(x^b^k)+p[12]+3873151461&4294967295,N=x+(P<<11&4294967295|P>>>21),P=k+(N^x^b)+p[15]+530742520&4294967295,k=N+(P<<16&4294967295|P>>>16),P=b+(k^N^x)+p[2]+3299628645&4294967295,b=k+(P<<23&4294967295|P>>>9),P=x+(k^(b|~N))+p[0]+4096336452&4294967295,x=b+(P<<6&4294967295|P>>>26),P=N+(b^(x|~k))+p[7]+1126891415&4294967295,N=x+(P<<10&4294967295|P>>>22),P=k+(x^(N|~b))+p[14]+2878612391&4294967295,k=N+(P<<15&4294967295|P>>>17),P=b+(N^(k|~x))+p[5]+4237533241&4294967295,b=k+(P<<21&4294967295|P>>>11),P=x+(k^(b|~N))+p[12]+1700485571&4294967295,x=b+(P<<6&4294967295|P>>>26),P=N+(b^(x|~k))+p[3]+2399980690&4294967295,N=x+(P<<10&4294967295|P>>>22),P=k+(x^(N|~b))+p[10]+4293915773&4294967295,k=N+(P<<15&4294967295|P>>>17),P=b+(N^(k|~x))+p[1]+2240044497&4294967295,b=k+(P<<21&4294967295|P>>>11),P=x+(k^(b|~N))+p[8]+1873313359&4294967295,x=b+(P<<6&4294967295|P>>>26),P=N+(b^(x|~k))+p[15]+4264355552&4294967295,N=x+(P<<10&4294967295|P>>>22),P=k+(x^(N|~b))+p[6]+2734768916&4294967295,k=N+(P<<15&4294967295|P>>>17),P=b+(N^(k|~x))+p[13]+1309151649&4294967295,b=k+(P<<21&4294967295|P>>>11),P=x+(k^(b|~N))+p[4]+4149444226&4294967295,x=b+(P<<6&4294967295|P>>>26),P=N+(b^(x|~k))+p[11]+3174756917&4294967295,N=x+(P<<10&4294967295|P>>>22),P=k+(x^(N|~b))+p[2]+718787259&4294967295,k=N+(P<<15&4294967295|P>>>17),P=b+(N^(k|~x))+p[9]+3951481745&4294967295,T.g[0]=T.g[0]+x&4294967295,T.g[1]=T.g[1]+(k+(P<<21&4294967295|P>>>11))&4294967295,T.g[2]=T.g[2]+k&4294967295,T.g[3]=T.g[3]+N&4294967295}r.prototype.u=function(T,x){x===void 0&&(x=T.length);for(var b=x-this.blockSize,p=this.B,k=this.h,N=0;N<x;){if(k==0)for(;N<=b;)i(this,T,N),N+=this.blockSize;if(typeof T=="string"){for(;N<x;)if(p[k++]=T.charCodeAt(N++),k==this.blockSize){i(this,p),k=0;break}}else for(;N<x;)if(p[k++]=T[N++],k==this.blockSize){i(this,p),k=0;break}}this.h=k,this.o+=x},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var x=1;x<T.length-8;++x)T[x]=0;var b=8*this.o;for(x=T.length-8;x<T.length;++x)T[x]=b&255,b/=256;for(this.u(T),T=Array(16),x=b=0;4>x;++x)for(var p=0;32>p;p+=8)T[b++]=this.g[x]>>>p&255;return T};function o(T,x){var b=a;return Object.prototype.hasOwnProperty.call(b,T)?b[T]:b[T]=x(T)}function s(T,x){this.h=x;for(var b=[],p=!0,k=T.length-1;0<=k;k--){var N=T[k]|0;p&&N==x||(b[k]=N,p=!1)}this.g=b}var a={};function u(T){return-128<=T&&128>T?o(T,function(x){return new s([x|0],0>x?-1:0)}):new s([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return f;if(0>T)return R(c(-T));for(var x=[],b=1,p=0;T>=b;p++)x[p]=T/b|0,b*=4294967296;return new s(x,0)}function d(T,x){if(T.length==0)throw Error("number format error: empty string");if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(T.charAt(0)=="-")return R(d(T.substring(1),x));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=c(Math.pow(x,8)),p=f,k=0;k<T.length;k+=8){var N=Math.min(8,T.length-k),P=parseInt(T.substring(k,k+N),x);8>N?(N=c(Math.pow(x,N)),p=p.j(N).add(c(P))):(p=p.j(b),p=p.add(c(P)))}return p}var f=u(0),m=u(1),v=u(16777216);t=s.prototype,t.m=function(){if(I(this))return-R(this).m();for(var T=0,x=1,b=0;b<this.g.length;b++){var p=this.i(b);T+=(0<=p?p:4294967296+p)*x,x*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(w(this))return"0";if(I(this))return"-"+R(this).toString(T);for(var x=c(Math.pow(T,6)),b=this,p="";;){var k=A(b,x).g;b=S(b,k.j(x));var N=((0<b.g.length?b.g[0]:b.h)>>>0).toString(T);if(b=k,w(b))return N+p;for(;6>N.length;)N="0"+N;p=N+p}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function w(T){if(T.h!=0)return!1;for(var x=0;x<T.g.length;x++)if(T.g[x]!=0)return!1;return!0}function I(T){return T.h==-1}t.l=function(T){return T=S(this,T),I(T)?-1:w(T)?0:1};function R(T){for(var x=T.g.length,b=[],p=0;p<x;p++)b[p]=~T.g[p];return new s(b,~T.h).add(m)}t.abs=function(){return I(this)?R(this):this},t.add=function(T){for(var x=Math.max(this.g.length,T.g.length),b=[],p=0,k=0;k<=x;k++){var N=p+(this.i(k)&65535)+(T.i(k)&65535),P=(N>>>16)+(this.i(k)>>>16)+(T.i(k)>>>16);p=P>>>16,N&=65535,P&=65535,b[k]=P<<16|N}return new s(b,b[b.length-1]&-2147483648?-1:0)};function S(T,x){return T.add(R(x))}t.j=function(T){if(w(this)||w(T))return f;if(I(this))return I(T)?R(this).j(R(T)):R(R(this).j(T));if(I(T))return R(this.j(R(T)));if(0>this.l(v)&&0>T.l(v))return c(this.m()*T.m());for(var x=this.g.length+T.g.length,b=[],p=0;p<2*x;p++)b[p]=0;for(p=0;p<this.g.length;p++)for(var k=0;k<T.g.length;k++){var N=this.i(p)>>>16,P=this.i(p)&65535,Q=T.i(k)>>>16,z=T.i(k)&65535;b[2*p+2*k]+=P*z,E(b,2*p+2*k),b[2*p+2*k+1]+=N*z,E(b,2*p+2*k+1),b[2*p+2*k+1]+=P*Q,E(b,2*p+2*k+1),b[2*p+2*k+2]+=N*Q,E(b,2*p+2*k+2)}for(p=0;p<x;p++)b[p]=b[2*p+1]<<16|b[2*p];for(p=x;p<2*x;p++)b[p]=0;return new s(b,0)};function E(T,x){for(;(T[x]&65535)!=T[x];)T[x+1]+=T[x]>>>16,T[x]&=65535,x++}function y(T,x){this.g=T,this.h=x}function A(T,x){if(w(x))throw Error("division by zero");if(w(T))return new y(f,f);if(I(T))return x=A(R(T),x),new y(R(x.g),R(x.h));if(I(x))return x=A(T,R(x)),new y(R(x.g),x.h);if(30<T.g.length){if(I(T)||I(x))throw Error("slowDivide_ only works with positive integers.");for(var b=m,p=x;0>=p.l(T);)b=D(b),p=D(p);var k=M(b,1),N=M(p,1);for(p=M(p,2),b=M(b,2);!w(p);){var P=N.add(p);0>=P.l(T)&&(k=k.add(b),N=P),p=M(p,1),b=M(b,1)}return x=S(T,k.j(x)),new y(k,x)}for(k=f;0<=T.l(x);){for(b=Math.max(1,Math.floor(T.m()/x.m())),p=Math.ceil(Math.log(b)/Math.LN2),p=48>=p?1:Math.pow(2,p-48),N=c(b),P=N.j(x);I(P)||0<P.l(T);)b-=p,N=c(b),P=N.j(x);w(N)&&(N=m),k=k.add(N),T=S(T,P)}return new y(k,T)}t.A=function(T){return A(this,T).h},t.and=function(T){for(var x=Math.max(this.g.length,T.g.length),b=[],p=0;p<x;p++)b[p]=this.i(p)&T.i(p);return new s(b,this.h&T.h)},t.or=function(T){for(var x=Math.max(this.g.length,T.g.length),b=[],p=0;p<x;p++)b[p]=this.i(p)|T.i(p);return new s(b,this.h|T.h)},t.xor=function(T){for(var x=Math.max(this.g.length,T.g.length),b=[],p=0;p<x;p++)b[p]=this.i(p)^T.i(p);return new s(b,this.h^T.h)};function D(T){for(var x=T.g.length+1,b=[],p=0;p<x;p++)b[p]=T.i(p)<<1|T.i(p-1)>>>31;return new s(b,T.h)}function M(T,x){var b=x>>5;x%=32;for(var p=T.g.length-b,k=[],N=0;N<p;N++)k[N]=0<x?T.i(N+b)>>>x|T.i(N+b+1)<<32-x:T.i(N+b);return new s(k,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,HC=r,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=c,s.fromString=d,_o=s}).apply(typeof Yw<"u"?Yw:typeof self<"u"?self:typeof window<"u"?window:{});var Tc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var WC,nl,qC,Yc,bg,GC,KC,QC;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,g){return l==Array.prototype||l==Object.prototype||(l[h]=g.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Tc=="object"&&Tc];for(var h=0;h<l.length;++h){var g=l[h];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var g=r;l=l.split(".");for(var C=0;C<l.length-1;C++){var L=l[C];if(!(L in g))break e;g=g[L]}l=l[l.length-1],C=g[l],h=h(C),h!=C&&h!=null&&e(g,l,{configurable:!0,writable:!0,value:h})}}function o(l,h){l instanceof String&&(l+="");var g=0,C=!1,L={next:function(){if(!C&&g<l.length){var V=g++;return{value:h(V,l[V]),done:!1}}return C=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}i("Array.prototype.values",function(l){return l||function(){return o(this,function(h,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,g){return l.call.apply(l.bind,arguments)}function f(l,h,g){if(!l)throw Error();if(2<arguments.length){var C=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,C),l.apply(h,L)}}return function(){return l.apply(h,arguments)}}function m(l,h,g){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function v(l,h){var g=Array.prototype.slice.call(arguments,1);return function(){var C=g.slice();return C.push.apply(C,arguments),l.apply(this,C)}}function w(l,h){function g(){}g.prototype=h.prototype,l.aa=h.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(C,L,V){for(var H=Array(arguments.length-2),be=2;be<arguments.length;be++)H[be-2]=arguments[be];return h.prototype[L].apply(C,H)}}function I(l){const h=l.length;if(0<h){const g=Array(h);for(let C=0;C<h;C++)g[C]=l[C];return g}return[]}function R(l,h){for(let g=1;g<arguments.length;g++){const C=arguments[g];if(u(C)){const L=l.length||0,V=C.length||0;l.length=L+V;for(let H=0;H<V;H++)l[L+H]=C[H]}else l.push(C)}}class S{constructor(h,g){this.i=h,this.j=g,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function E(l){return/^[\s\xa0]*$/.test(l)}function y(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function A(l){return A[" "](l),l}A[" "]=function(){};var D=y().indexOf("Gecko")!=-1&&!(y().toLowerCase().indexOf("webkit")!=-1&&y().indexOf("Edge")==-1)&&!(y().indexOf("Trident")!=-1||y().indexOf("MSIE")!=-1)&&y().indexOf("Edge")==-1;function M(l,h,g){for(const C in l)h.call(g,l[C],C,l)}function T(l,h){for(const g in l)h.call(void 0,l[g],g,l)}function x(l){const h={};for(const g in l)h[g]=l[g];return h}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function p(l,h){let g,C;for(let L=1;L<arguments.length;L++){C=arguments[L];for(g in C)l[g]=C[g];for(let V=0;V<b.length;V++)g=b[V],Object.prototype.hasOwnProperty.call(C,g)&&(l[g]=C[g])}}function k(l){var h=1;l=l.split(":");const g=[];for(;0<h&&l.length;)g.push(l.shift()),h--;return l.length&&g.push(l.join(":")),g}function N(l){a.setTimeout(()=>{throw l},0)}function P(){var l=W;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class Q{constructor(){this.h=this.g=null}add(h,g){const C=z.get();C.set(h,g),this.h?this.h.next=C:this.g=C,this.h=C}}var z=new S(()=>new X,l=>l.reset());class X{constructor(){this.next=this.g=this.h=null}set(h,g){this.h=h,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let re,U=!1,W=new Q,J=()=>{const l=a.Promise.resolve(void 0);re=()=>{l.then(ae)}};var ae=()=>{for(var l;l=P();){try{l.h.call(l.g)}catch(g){N(g)}var h=z;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}U=!1};function te(){this.s=this.s,this.C=this.C}te.prototype.s=!1,te.prototype.ma=function(){this.s||(this.s=!0,this.N())},te.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var me=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};a.addEventListener("test",g,h),a.removeEventListener("test",g,h)}catch{}return l}();function Ve(l,h){if(pe.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,C=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(D){e:{try{A(h.nodeName);var L=!0;break e}catch{}L=!1}L||(h=null)}}else g=="mouseover"?h=l.fromElement:g=="mouseout"&&(h=l.toElement);this.relatedTarget=h,C?(this.clientX=C.clientX!==void 0?C.clientX:C.pageX,this.clientY=C.clientY!==void 0?C.clientY:C.pageY,this.screenX=C.screenX||0,this.screenY=C.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:$e[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ve.aa.h.call(this)}}w(Ve,pe);var $e={2:"touch",3:"pen",4:"mouse"};Ve.prototype.h=function(){Ve.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var nt="closure_listenable_"+(1e6*Math.random()|0),ln=0;function Bt(l,h,g,C,L){this.listener=l,this.proxy=null,this.src=h,this.type=g,this.capture=!!C,this.ha=L,this.key=++ln,this.da=this.fa=!1}function ge(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Ie(l){this.src=l,this.g={},this.h=0}Ie.prototype.add=function(l,h,g,C,L){var V=l.toString();l=this.g[V],l||(l=this.g[V]=[],this.h++);var H=un(l,h,C,L);return-1<H?(h=l[H],g||(h.fa=!1)):(h=new Bt(h,this.src,V,!!C,L),h.fa=g,l.push(h)),h};function de(l,h){var g=h.type;if(g in l.g){var C=l.g[g],L=Array.prototype.indexOf.call(C,h,void 0),V;(V=0<=L)&&Array.prototype.splice.call(C,L,1),V&&(ge(h),l.g[g].length==0&&(delete l.g[g],l.h--))}}function un(l,h,g,C){for(var L=0;L<l.length;++L){var V=l[L];if(!V.da&&V.listener==h&&V.capture==!!g&&V.ha==C)return L}return-1}var bn="closure_lm_"+(1e6*Math.random()|0),Yt={};function Yi(l,h,g,C,L){if(Array.isArray(h)){for(var V=0;V<h.length;V++)Yi(l,h[V],g,C,L);return null}return g=Du(g),l&&l[nt]?l.K(h,g,c(C)?!!C.capture:!!C,L):Ho(l,h,g,!1,C,L)}function Ho(l,h,g,C,L,V){if(!h)throw Error("Invalid event type");var H=c(L)?!!L.capture:!!L,be=ie(l);if(be||(l[bn]=be=new Ie(l)),g=be.add(h,g,C,H,V),g.proxy)return g;if(C=Sr(),g.proxy=C,C.src=l,C.listener=g,l.addEventListener)me||(L=H),L===void 0&&(L=!1),l.addEventListener(h.toString(),C,L);else if(l.attachEvent)l.attachEvent(_t(h.toString()),C);else if(l.addListener&&l.removeListener)l.addListener(C);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Sr(){function l(g){return h.call(l.src,l.listener,g)}const h=Mf;return l}function Un(l,h,g,C,L){if(Array.isArray(h))for(var V=0;V<h.length;V++)Un(l,h[V],g,C,L);else C=c(C)?!!C.capture:!!C,g=Du(g),l&&l[nt]?(l=l.i,h=String(h).toString(),h in l.g&&(V=l.g[h],g=un(V,g,C,L),-1<g&&(ge(V[g]),Array.prototype.splice.call(V,g,1),V.length==0&&(delete l.g[h],l.h--)))):l&&(l=ie(l))&&(h=l.g[h.toString()],l=-1,h&&(l=un(h,g,C,L)),(g=-1<l?h[l]:null)&&Zr(g))}function Zr(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[nt])de(h.i,l);else{var g=l.type,C=l.proxy;h.removeEventListener?h.removeEventListener(g,C,l.capture):h.detachEvent?h.detachEvent(_t(g),C):h.addListener&&h.removeListener&&h.removeListener(C),(g=ie(h))?(de(g,l),g.h==0&&(g.src=null,h[bn]=null)):ge(l)}}}function _t(l){return l in Yt?Yt[l]:Yt[l]="on"+l}function Mf(l,h){if(l.da)l=!0;else{h=new Ve(h,this);var g=l.listener,C=l.ha||l.src;l.fa&&Zr(l),l=g.call(C,h)}return l}function ie(l){return l=l[bn],l instanceof Ie?l:null}var Wo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Du(l){return typeof l=="function"?l:(l[Wo]||(l[Wo]=function(h){return l.handleEvent(h)}),l[Wo])}function ut(){te.call(this),this.i=new Ie(this),this.M=this,this.F=null}w(ut,te),ut.prototype[nt]=!0,ut.prototype.removeEventListener=function(l,h,g,C){Un(this,l,h,g,C)};function Rt(l,h){var g,C=l.F;if(C)for(g=[];C;C=C.F)g.push(C);if(l=l.M,C=h.type||h,typeof h=="string")h=new pe(h,l);else if(h instanceof pe)h.target=h.target||l;else{var L=h;h=new pe(C,l),p(h,L)}if(L=!0,g)for(var V=g.length-1;0<=V;V--){var H=h.g=g[V];L=Mu(H,C,!0,h)&&L}if(H=h.g=l,L=Mu(H,C,!0,h)&&L,L=Mu(H,C,!1,h)&&L,g)for(V=0;V<g.length;V++)H=h.g=g[V],L=Mu(H,C,!1,h)&&L}ut.prototype.N=function(){if(ut.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var g=l.g[h],C=0;C<g.length;C++)ge(g[C]);delete l.g[h],l.h--}}this.F=null},ut.prototype.K=function(l,h,g,C){return this.i.add(String(l),h,!1,g,C)},ut.prototype.L=function(l,h,g,C){return this.i.add(String(l),h,!0,g,C)};function Mu(l,h,g,C){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var L=!0,V=0;V<h.length;++V){var H=h[V];if(H&&!H.da&&H.capture==g){var be=H.listener,wt=H.ha||H.src;H.fa&&de(l.i,H),L=be.call(wt,C)!==!1&&L}}return L&&!C.defaultPrevented}function Tv(l,h,g){if(typeof l=="function")g&&(l=m(l,g));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function Sv(l){l.g=Tv(()=>{l.g=null,l.i&&(l.i=!1,Sv(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class aR extends te{constructor(h,g){super(),this.m=h,this.l=g,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Sv(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wa(l){te.call(this),this.h=l,this.g={}}w(wa,te);var xv=[];function Iv(l){M(l.g,function(h,g){this.g.hasOwnProperty(g)&&Zr(h)},l),l.g={}}wa.prototype.N=function(){wa.aa.N.call(this),Iv(this)},wa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Lf=a.JSON.stringify,lR=a.JSON.parse,uR=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Vf(){}Vf.prototype.h=null;function Cv(l){return l.h||(l.h=l.i())}function Av(){}var Ea={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function jf(){pe.call(this,"d")}w(jf,pe);function Ff(){pe.call(this,"c")}w(Ff,pe);var Xi={},bv=null;function Lu(){return bv=bv||new ut}Xi.La="serverreachability";function Rv(l){pe.call(this,Xi.La,l)}w(Rv,pe);function Ta(l){const h=Lu();Rt(h,new Rv(h))}Xi.STAT_EVENT="statevent";function kv(l,h){pe.call(this,Xi.STAT_EVENT,l),this.stat=h}w(kv,pe);function zt(l){const h=Lu();Rt(h,new kv(h,l))}Xi.Ma="timingevent";function Pv(l,h){pe.call(this,Xi.Ma,l),this.size=h}w(Pv,pe);function Sa(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function xa(){this.g=!0}xa.prototype.xa=function(){this.g=!1};function cR(l,h,g,C,L,V){l.info(function(){if(l.g)if(V)for(var H="",be=V.split("&"),wt=0;wt<be.length;wt++){var we=be[wt].split("=");if(1<we.length){var kt=we[0];we=we[1];var Pt=kt.split("_");H=2<=Pt.length&&Pt[1]=="type"?H+(kt+"="+we+"&"):H+(kt+"=redacted&")}}else H=null;else H=V;return"XMLHTTP REQ ("+C+") [attempt "+L+"]: "+h+`
`+g+`
`+H})}function dR(l,h,g,C,L,V,H){l.info(function(){return"XMLHTTP RESP ("+C+") [ attempt "+L+"]: "+h+`
`+g+`
`+V+" "+H})}function qo(l,h,g,C){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+fR(l,g)+(C?" "+C:"")})}function hR(l,h){l.info(function(){return"TIMEOUT: "+h})}xa.prototype.info=function(){};function fR(l,h){if(!l.g)return h;if(!h)return null;try{var g=JSON.parse(h);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var C=g[l];if(!(2>C.length)){var L=C[1];if(Array.isArray(L)&&!(1>L.length)){var V=L[0];if(V!="noop"&&V!="stop"&&V!="close")for(var H=1;H<L.length;H++)L[H]=""}}}}return Lf(g)}catch{return h}}var Vu={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Nv={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},$f;function ju(){}w(ju,Vf),ju.prototype.g=function(){return new XMLHttpRequest},ju.prototype.i=function(){return{}},$f=new ju;function ei(l,h,g,C){this.j=l,this.i=h,this.l=g,this.R=C||1,this.U=new wa(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ov}function Ov(){this.i=null,this.g="",this.h=!1}var Dv={},Uf={};function Bf(l,h,g){l.L=1,l.v=Bu(xr(h)),l.m=g,l.P=!0,Mv(l,null)}function Mv(l,h){l.F=Date.now(),Fu(l),l.A=xr(l.v);var g=l.A,C=l.R;Array.isArray(C)||(C=[String(C)]),Qv(g.i,"t",C),l.C=0,g=l.j.J,l.h=new Ov,l.g=f_(l.j,g?h:null,!l.m),0<l.O&&(l.M=new aR(m(l.Y,l,l.g),l.O)),h=l.U,g=l.g,C=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(xv[0]=L.toString()),L=xv);for(var V=0;V<L.length;V++){var H=Yi(g,L[V],C||h.handleEvent,!1,h.h||h);if(!H)break;h.g[H.key]=H}h=l.H?x(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),Ta(),cR(l.i,l.u,l.A,l.l,l.R,l.m)}ei.prototype.ca=function(l){l=l.target;const h=this.M;h&&Ir(l)==3?h.j():this.Y(l)},ei.prototype.Y=function(l){try{if(l==this.g)e:{const Pt=Ir(this.g);var h=this.g.Ba();const Qo=this.g.Z();if(!(3>Pt)&&(Pt!=3||this.g&&(this.h.h||this.g.oa()||n_(this.g)))){this.J||Pt!=4||h==7||(h==8||0>=Qo?Ta(3):Ta(2)),zf(this);var g=this.g.Z();this.X=g;t:if(Lv(this)){var C=n_(this.g);l="";var L=C.length,V=Ir(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ji(this),Ia(this);var H="";break t}this.h.i=new a.TextDecoder}for(h=0;h<L;h++)this.h.h=!0,l+=this.h.i.decode(C[h],{stream:!(V&&h==L-1)});C.length=0,this.h.g+=l,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=g==200,dR(this.i,this.u,this.A,this.l,this.R,Pt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var be,wt=this.g;if((be=wt.g?wt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(be)){var we=be;break t}}we=null}if(g=we)qo(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Hf(this,g);else{this.o=!1,this.s=3,zt(12),Ji(this),Ia(this);break e}}if(this.P){g=!0;let Bn;for(;!this.J&&this.C<H.length;)if(Bn=pR(this,H),Bn==Uf){Pt==4&&(this.s=4,zt(14),g=!1),qo(this.i,this.l,null,"[Incomplete Response]");break}else if(Bn==Dv){this.s=4,zt(15),qo(this.i,this.l,H,"[Invalid Chunk]"),g=!1;break}else qo(this.i,this.l,Bn,null),Hf(this,Bn);if(Lv(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Pt!=4||H.length!=0||this.h.h||(this.s=1,zt(16),g=!1),this.o=this.o&&g,!g)qo(this.i,this.l,H,"[Invalid Chunked Response]"),Ji(this),Ia(this);else if(0<H.length&&!this.W){this.W=!0;var kt=this.j;kt.g==this&&kt.ba&&!kt.M&&(kt.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),Yf(kt),kt.M=!0,zt(11))}}else qo(this.i,this.l,H,null),Hf(this,H);Pt==4&&Ji(this),this.o&&!this.J&&(Pt==4?u_(this.j,this):(this.o=!1,Fu(this)))}else PR(this.g),g==400&&0<H.indexOf("Unknown SID")?(this.s=3,zt(12)):(this.s=0,zt(13)),Ji(this),Ia(this)}}}catch{}finally{}};function Lv(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function pR(l,h){var g=l.C,C=h.indexOf(`
`,g);return C==-1?Uf:(g=Number(h.substring(g,C)),isNaN(g)?Dv:(C+=1,C+g>h.length?Uf:(h=h.slice(C,C+g),l.C=C+g,h)))}ei.prototype.cancel=function(){this.J=!0,Ji(this)};function Fu(l){l.S=Date.now()+l.I,Vv(l,l.I)}function Vv(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Sa(m(l.ba,l),h)}function zf(l){l.B&&(a.clearTimeout(l.B),l.B=null)}ei.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(hR(this.i,this.A),this.L!=2&&(Ta(),zt(17)),Ji(this),this.s=2,Ia(this)):Vv(this,this.S-l)};function Ia(l){l.j.G==0||l.J||u_(l.j,l)}function Ji(l){zf(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,Iv(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function Hf(l,h){try{var g=l.j;if(g.G!=0&&(g.g==l||Wf(g.h,l))){if(!l.K&&Wf(g.h,l)&&g.G==3){try{var C=g.Da.g.parse(h)}catch{C=null}if(Array.isArray(C)&&C.length==3){var L=C;if(L[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)Ku(g),qu(g);else break e;Qf(g),zt(18)}}else g.za=L[1],0<g.za-g.T&&37500>L[2]&&g.F&&g.v==0&&!g.C&&(g.C=Sa(m(g.Za,g),6e3));if(1>=$v(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else eo(g,11)}else if((l.K||g.g==l)&&Ku(g),!E(h))for(L=g.Da.g.parse(h),h=0;h<L.length;h++){let we=L[h];if(g.T=we[0],we=we[1],g.G==2)if(we[0]=="c"){g.K=we[1],g.ia=we[2];const kt=we[3];kt!=null&&(g.la=kt,g.j.info("VER="+g.la));const Pt=we[4];Pt!=null&&(g.Aa=Pt,g.j.info("SVER="+g.Aa));const Qo=we[5];Qo!=null&&typeof Qo=="number"&&0<Qo&&(C=1.5*Qo,g.L=C,g.j.info("backChannelRequestTimeoutMs_="+C)),C=g;const Bn=l.g;if(Bn){const Yu=Bn.g?Bn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Yu){var V=C.h;V.g||Yu.indexOf("spdy")==-1&&Yu.indexOf("quic")==-1&&Yu.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(qf(V,V.h),V.h=null))}if(C.D){const Xf=Bn.g?Bn.g.getResponseHeader("X-HTTP-Session-Id"):null;Xf&&(C.ya=Xf,Ne(C.I,C.D,Xf))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),C=g;var H=l;if(C.qa=h_(C,C.J?C.ia:null,C.W),H.K){Uv(C.h,H);var be=H,wt=C.L;wt&&(be.I=wt),be.B&&(zf(be),Fu(be)),C.g=H}else a_(C);0<g.i.length&&Gu(g)}else we[0]!="stop"&&we[0]!="close"||eo(g,7);else g.G==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?eo(g,7):Kf(g):we[0]!="noop"&&g.l&&g.l.ta(we),g.v=0)}}Ta(4)}catch{}}var mR=class{constructor(l,h){this.g=l,this.map=h}};function jv(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Fv(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function $v(l){return l.h?1:l.g?l.g.size:0}function Wf(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function qf(l,h){l.g?l.g.add(h):l.h=h}function Uv(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}jv.prototype.cancel=function(){if(this.i=Bv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Bv(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const g of l.g.values())h=h.concat(g.D);return h}return I(l.i)}function gR(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],g=l.length,C=0;C<g;C++)h.push(l[C]);return h}h=[],g=0;for(C in l)h[g++]=l[C];return h}function yR(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var g=0;g<l;g++)h.push(g);return h}h=[],g=0;for(const C in l)h[g++]=C;return h}}}function zv(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var g=yR(l),C=gR(l),L=C.length,V=0;V<L;V++)h.call(void 0,C[V],g&&g[V],l)}var Hv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vR(l,h){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var C=l[g].indexOf("="),L=null;if(0<=C){var V=l[g].substring(0,C);L=l[g].substring(C+1)}else V=l[g];h(V,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Zi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Zi){this.h=l.h,$u(this,l.j),this.o=l.o,this.g=l.g,Uu(this,l.s),this.l=l.l;var h=l.i,g=new ba;g.i=h.i,h.g&&(g.g=new Map(h.g),g.h=h.h),Wv(this,g),this.m=l.m}else l&&(h=String(l).match(Hv))?(this.h=!1,$u(this,h[1]||"",!0),this.o=Ca(h[2]||""),this.g=Ca(h[3]||"",!0),Uu(this,h[4]),this.l=Ca(h[5]||"",!0),Wv(this,h[6]||"",!0),this.m=Ca(h[7]||"")):(this.h=!1,this.i=new ba(null,this.h))}Zi.prototype.toString=function(){var l=[],h=this.j;h&&l.push(Aa(h,qv,!0),":");var g=this.g;return(g||h=="file")&&(l.push("//"),(h=this.o)&&l.push(Aa(h,qv,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Aa(g,g.charAt(0)=="/"?ER:wR,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Aa(g,SR)),l.join("")};function xr(l){return new Zi(l)}function $u(l,h,g){l.j=g?Ca(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function Uu(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function Wv(l,h,g){h instanceof ba?(l.i=h,xR(l.i,l.h)):(g||(h=Aa(h,TR)),l.i=new ba(h,l.h))}function Ne(l,h,g){l.i.set(h,g)}function Bu(l){return Ne(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Ca(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Aa(l,h,g){return typeof l=="string"?(l=encodeURI(l).replace(h,_R),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function _R(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var qv=/[#\/\?@]/g,wR=/[#\?:]/g,ER=/[#\?]/g,TR=/[#\?@]/g,SR=/#/g;function ba(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function ti(l){l.g||(l.g=new Map,l.h=0,l.i&&vR(l.i,function(h,g){l.add(decodeURIComponent(h.replace(/\+/g," ")),g)}))}t=ba.prototype,t.add=function(l,h){ti(this),this.i=null,l=Go(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(h),this.h+=1,this};function Gv(l,h){ti(l),h=Go(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function Kv(l,h){return ti(l),h=Go(l,h),l.g.has(h)}t.forEach=function(l,h){ti(this),this.g.forEach(function(g,C){g.forEach(function(L){l.call(h,L,C,this)},this)},this)},t.na=function(){ti(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),g=[];for(let C=0;C<h.length;C++){const L=l[C];for(let V=0;V<L.length;V++)g.push(h[C])}return g},t.V=function(l){ti(this);let h=[];if(typeof l=="string")Kv(this,l)&&(h=h.concat(this.g.get(Go(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)h=h.concat(l[g])}return h},t.set=function(l,h){return ti(this),this.i=null,l=Go(this,l),Kv(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function Qv(l,h,g){Gv(l,h),0<g.length&&(l.i=null,l.g.set(Go(l,h),I(g)),l.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var g=0;g<h.length;g++){var C=h[g];const V=encodeURIComponent(String(C)),H=this.V(C);for(C=0;C<H.length;C++){var L=V;H[C]!==""&&(L+="="+encodeURIComponent(String(H[C]))),l.push(L)}}return this.i=l.join("&")};function Go(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function xR(l,h){h&&!l.j&&(ti(l),l.i=null,l.g.forEach(function(g,C){var L=C.toLowerCase();C!=L&&(Gv(this,C),Qv(this,L,g))},l)),l.j=h}function IR(l,h){const g=new xa;if(a.Image){const C=new Image;C.onload=v(ni,g,"TestLoadImage: loaded",!0,h,C),C.onerror=v(ni,g,"TestLoadImage: error",!1,h,C),C.onabort=v(ni,g,"TestLoadImage: abort",!1,h,C),C.ontimeout=v(ni,g,"TestLoadImage: timeout",!1,h,C),a.setTimeout(function(){C.ontimeout&&C.ontimeout()},1e4),C.src=l}else h(!1)}function CR(l,h){const g=new xa,C=new AbortController,L=setTimeout(()=>{C.abort(),ni(g,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:C.signal}).then(V=>{clearTimeout(L),V.ok?ni(g,"TestPingServer: ok",!0,h):ni(g,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(L),ni(g,"TestPingServer: error",!1,h)})}function ni(l,h,g,C,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),C(g)}catch{}}function AR(){this.g=new uR}function bR(l,h,g){const C=g||"";try{zv(l,function(L,V){let H=L;c(L)&&(H=Lf(L)),h.push(C+V+"="+encodeURIComponent(H))})}catch(L){throw h.push(C+"type="+encodeURIComponent("_badmap")),L}}function zu(l){this.l=l.Ub||null,this.j=l.eb||!1}w(zu,Vf),zu.prototype.g=function(){return new Hu(this.l,this.j)},zu.prototype.i=function(l){return function(){return l}}({});function Hu(l,h){ut.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}w(Hu,ut),t=Hu.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,ka(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ra(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,ka(this)),this.g&&(this.readyState=3,ka(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Yv(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Yv(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?Ra(this):ka(this),this.readyState==3&&Yv(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Ra(this))},t.Qa=function(l){this.g&&(this.response=l,Ra(this))},t.ga=function(){this.g&&Ra(this)};function Ra(l){l.readyState=4,l.l=null,l.j=null,l.v=null,ka(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var g=h.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=h.next();return l.join(`\r
`)};function ka(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Hu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Xv(l){let h="";return M(l,function(g,C){h+=C,h+=":",h+=g,h+=`\r
`}),h}function Gf(l,h,g){e:{for(C in g){var C=!1;break e}C=!0}C||(g=Xv(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):Ne(l,h,g))}function We(l){ut.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}w(We,ut);var RR=/^https?$/i,kR=["POST","PUT"];t=We.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,g,C){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():$f.g(),this.v=this.o?Cv(this.o):Cv($f),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(V){Jv(this,V);return}if(l=g||"",g=new Map(this.headers),C)if(Object.getPrototypeOf(C)===Object.prototype)for(var L in C)g.set(L,C[L]);else if(typeof C.keys=="function"&&typeof C.get=="function")for(const V of C.keys())g.set(V,C.get(V));else throw Error("Unknown input type for opt_headers: "+String(C));C=Array.from(g.keys()).find(V=>V.toLowerCase()=="content-type"),L=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(kR,h,void 0))||C||L||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,H]of g)this.g.setRequestHeader(V,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{t_(this),this.u=!0,this.g.send(l),this.u=!1}catch(V){Jv(this,V)}};function Jv(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,Zv(l),Wu(l)}function Zv(l){l.A||(l.A=!0,Rt(l,"complete"),Rt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Rt(this,"complete"),Rt(this,"abort"),Wu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wu(this,!0)),We.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?e_(this):this.bb())},t.bb=function(){e_(this)};function e_(l){if(l.h&&typeof s<"u"&&(!l.v[1]||Ir(l)!=4||l.Z()!=2)){if(l.u&&Ir(l)==4)Tv(l.Ea,0,l);else if(Rt(l,"readystatechange"),Ir(l)==4){l.h=!1;try{const H=l.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var g;if(!(g=h)){var C;if(C=H===0){var L=String(l.D).match(Hv)[1]||null;!L&&a.self&&a.self.location&&(L=a.self.location.protocol.slice(0,-1)),C=!RR.test(L?L.toLowerCase():"")}g=C}if(g)Rt(l,"complete"),Rt(l,"success");else{l.m=6;try{var V=2<Ir(l)?l.g.statusText:""}catch{V=""}l.l=V+" ["+l.Z()+"]",Zv(l)}}finally{Wu(l)}}}}function Wu(l,h){if(l.g){t_(l);const g=l.g,C=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||Rt(l,"ready");try{g.onreadystatechange=C}catch{}}}function t_(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Ir(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Ir(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),lR(h)}};function n_(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function PR(l){const h={};l=(l.g&&2<=Ir(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let C=0;C<l.length;C++){if(E(l[C]))continue;var g=k(l[C]);const L=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const V=h[L]||[];h[L]=V,V.push(g)}T(h,function(C){return C.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Pa(l,h,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||h}function r_(l){this.Aa=0,this.i=[],this.j=new xa,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Pa("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Pa("baseRetryDelayMs",5e3,l),this.cb=Pa("retryDelaySeedMs",1e4,l),this.Wa=Pa("forwardChannelMaxRetries",2,l),this.wa=Pa("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new jv(l&&l.concurrentRequestLimit),this.Da=new AR,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=r_.prototype,t.la=8,t.G=1,t.connect=function(l,h,g,C){zt(0),this.W=l,this.H=h||{},g&&C!==void 0&&(this.H.OSID=g,this.H.OAID=C),this.F=this.X,this.I=h_(this,null,this.W),Gu(this)};function Kf(l){if(i_(l),l.G==3){var h=l.U++,g=xr(l.I);if(Ne(g,"SID",l.K),Ne(g,"RID",h),Ne(g,"TYPE","terminate"),Na(l,g),h=new ei(l,l.j,h),h.L=2,h.v=Bu(xr(g)),g=!1,a.navigator&&a.navigator.sendBeacon)try{g=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!g&&a.Image&&(new Image().src=h.v,g=!0),g||(h.g=f_(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Fu(h)}d_(l)}function qu(l){l.g&&(Yf(l),l.g.cancel(),l.g=null)}function i_(l){qu(l),l.u&&(a.clearTimeout(l.u),l.u=null),Ku(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Gu(l){if(!Fv(l.h)&&!l.s){l.s=!0;var h=l.Ga;re||J(),U||(re(),U=!0),W.add(h,l),l.B=0}}function NR(l,h){return $v(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Sa(m(l.Ga,l,h),c_(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new ei(this,this.j,l);let V=this.o;if(this.S&&(V?(V=x(V),p(V,this.S)):V=this.S),this.m!==null||this.O||(L.H=V,V=null),this.P)e:{for(var h=0,g=0;g<this.i.length;g++){t:{var C=this.i[g];if("__data__"in C.map&&(C=C.map.__data__,typeof C=="string")){C=C.length;break t}C=void 0}if(C===void 0)break;if(h+=C,4096<h){h=g;break e}if(h===4096||g===this.i.length-1){h=g+1;break e}}h=1e3}else h=1e3;h=s_(this,L,h),g=xr(this.I),Ne(g,"RID",l),Ne(g,"CVER",22),this.D&&Ne(g,"X-HTTP-Session-Id",this.D),Na(this,g),V&&(this.O?h="headers="+encodeURIComponent(String(Xv(V)))+"&"+h:this.m&&Gf(g,this.m,V)),qf(this.h,L),this.Ua&&Ne(g,"TYPE","init"),this.P?(Ne(g,"$req",h),Ne(g,"SID","null"),L.T=!0,Bf(L,g,null)):Bf(L,g,h),this.G=2}}else this.G==3&&(l?o_(this,l):this.i.length==0||Fv(this.h)||o_(this))};function o_(l,h){var g;h?g=h.l:g=l.U++;const C=xr(l.I);Ne(C,"SID",l.K),Ne(C,"RID",g),Ne(C,"AID",l.T),Na(l,C),l.m&&l.o&&Gf(C,l.m,l.o),g=new ei(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),h&&(l.i=h.D.concat(l.i)),h=s_(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),qf(l.h,g),Bf(g,C,h)}function Na(l,h){l.H&&M(l.H,function(g,C){Ne(h,C,g)}),l.l&&zv({},function(g,C){Ne(h,C,g)})}function s_(l,h,g){g=Math.min(l.i.length,g);var C=l.l?m(l.l.Na,l.l,l):null;e:{var L=l.i;let V=-1;for(;;){const H=["count="+g];V==-1?0<g?(V=L[0].g,H.push("ofs="+V)):V=0:H.push("ofs="+V);let be=!0;for(let wt=0;wt<g;wt++){let we=L[wt].g;const kt=L[wt].map;if(we-=V,0>we)V=Math.max(0,L[wt].g-100),be=!1;else try{bR(kt,H,"req"+we+"_")}catch{C&&C(kt)}}if(be){C=H.join("&");break e}}}return l=l.i.splice(0,g),h.D=l,C}function a_(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;re||J(),U||(re(),U=!0),W.add(h,l),l.v=0}}function Qf(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Sa(m(l.Fa,l),c_(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,l_(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Sa(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,zt(10),qu(this),l_(this))};function Yf(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function l_(l){l.g=new ei(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=xr(l.qa);Ne(h,"RID","rpc"),Ne(h,"SID",l.K),Ne(h,"AID",l.T),Ne(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ne(h,"TO",l.ja),Ne(h,"TYPE","xmlhttp"),Na(l,h),l.m&&l.o&&Gf(h,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=Bu(xr(h)),g.m=null,g.P=!0,Mv(g,l)}t.Za=function(){this.C!=null&&(this.C=null,qu(this),Qf(this),zt(19))};function Ku(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function u_(l,h){var g=null;if(l.g==h){Ku(l),Yf(l),l.g=null;var C=2}else if(Wf(l.h,h))g=h.D,Uv(l.h,h),C=1;else return;if(l.G!=0){if(h.o)if(C==1){g=h.m?h.m.length:0,h=Date.now()-h.F;var L=l.B;C=Lu(),Rt(C,new Pv(C,g)),Gu(l)}else a_(l);else if(L=h.s,L==3||L==0&&0<h.X||!(C==1&&NR(l,h)||C==2&&Qf(l)))switch(g&&0<g.length&&(h=l.h,h.i=h.i.concat(g)),L){case 1:eo(l,5);break;case 4:eo(l,10);break;case 3:eo(l,6);break;default:eo(l,2)}}}function c_(l,h){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*h}function eo(l,h){if(l.j.info("Error code "+h),h==2){var g=m(l.fb,l),C=l.Xa;const L=!C;C=new Zi(C||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||$u(C,"https"),Bu(C),L?IR(C.toString(),g):CR(C.toString(),g)}else zt(2);l.G=0,l.l&&l.l.sa(h),d_(l),i_(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),zt(2)):(this.j.info("Failed to ping google.com"),zt(1))};function d_(l){if(l.G=0,l.ka=[],l.l){const h=Bv(l.h);(h.length!=0||l.i.length!=0)&&(R(l.ka,h),R(l.ka,l.i),l.h.i.length=0,I(l.i),l.i.length=0),l.l.ra()}}function h_(l,h,g){var C=g instanceof Zi?xr(g):new Zi(g);if(C.g!="")h&&(C.g=h+"."+C.g),Uu(C,C.s);else{var L=a.location;C=L.protocol,h=h?h+"."+L.hostname:L.hostname,L=+L.port;var V=new Zi(null);C&&$u(V,C),h&&(V.g=h),L&&Uu(V,L),g&&(V.l=g),C=V}return g=l.D,h=l.ya,g&&h&&Ne(C,g,h),Ne(C,"VER",l.la),Na(l,C),C}function f_(l,h,g){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new We(new zu({eb:g})):new We(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function p_(){}t=p_.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Qu(){}Qu.prototype.g=function(l,h){return new cn(l,h)};function cn(l,h){ut.call(this),this.g=new r_(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!E(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!E(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new Ko(this)}w(cn,ut),cn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},cn.prototype.close=function(){Kf(this.g)},cn.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=Lf(l),l=g);h.i.push(new mR(h.Ya++,l)),h.G==3&&Gu(h)},cn.prototype.N=function(){this.g.l=null,delete this.j,Kf(this.g),delete this.g,cn.aa.N.call(this)};function m_(l){jf.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const g in h){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}w(m_,jf);function g_(){Ff.call(this),this.status=1}w(g_,Ff);function Ko(l){this.g=l}w(Ko,p_),Ko.prototype.ua=function(){Rt(this.g,"a")},Ko.prototype.ta=function(l){Rt(this.g,new m_(l))},Ko.prototype.sa=function(l){Rt(this.g,new g_)},Ko.prototype.ra=function(){Rt(this.g,"b")},Qu.prototype.createWebChannel=Qu.prototype.g,cn.prototype.send=cn.prototype.o,cn.prototype.open=cn.prototype.m,cn.prototype.close=cn.prototype.close,QC=function(){return new Qu},KC=function(){return Lu()},GC=Xi,bg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Vu.NO_ERROR=0,Vu.TIMEOUT=8,Vu.HTTP_ERROR=6,Yc=Vu,Nv.COMPLETE="complete",qC=Nv,Av.EventType=Ea,Ea.OPEN="a",Ea.CLOSE="b",Ea.ERROR="c",Ea.MESSAGE="d",ut.prototype.listen=ut.prototype.K,nl=Av,We.prototype.listenOnce=We.prototype.L,We.prototype.getLastError=We.prototype.Ka,We.prototype.getLastErrorCode=We.prototype.Ba,We.prototype.getStatus=We.prototype.Z,We.prototype.getResponseJson=We.prototype.Oa,We.prototype.getResponseText=We.prototype.oa,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Ha,WC=We}).apply(typeof Tc<"u"?Tc:typeof self<"u"?self:typeof window<"u"?window:{});const Xw="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Lt.UNAUTHENTICATED=new Lt(null),Lt.GOOGLE_CREDENTIALS=new Lt("google-credentials-uid"),Lt.FIRST_PARTY=new Lt("first-party-uid"),Lt.MOCK_USER=new Lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pa="11.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo=new I0("@firebase/firestore");function os(){return Oo.logLevel}function G(t,...e){if(Oo.logLevel<=he.DEBUG){const n=e.map(A0);Oo.debug(`Firestore (${pa}): ${t}`,...n)}}function Qr(t,...e){if(Oo.logLevel<=he.ERROR){const n=e.map(A0);Oo.error(`Firestore (${pa}): ${t}`,...n)}}function Zs(t,...e){if(Oo.logLevel<=he.WARN){const n=e.map(A0);Oo.warn(`Firestore (${pa}): ${t}`,...n)}}function A0(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${pa}) INTERNAL ASSERTION FAILED: `+t;throw Qr(e),new Error(e)}function xe(t,e){t||ee()}function se(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends Tr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Z6{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Lt.UNAUTHENTICATED))}shutdown(){}}class e9{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class t9{constructor(e){this.t=e,this.currentUser=Lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){xe(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let o=new wo;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new wo,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new wo)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(xe(typeof r.accessToken=="string"),new YC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return xe(e===null||typeof e=="string"),new Lt(e)}}class n9{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Lt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class r9{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new n9(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class i9{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class o9{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){xe(this.o===void 0);const r=o=>{o.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,G("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(xe(typeof n.token=="string"),this.R=n.token,new i9(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s9(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=s9(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function ea(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Y($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ht.fromMillis(Date.now())}static fromDate(e){return ht.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ht(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new oe(e)}static min(){return new oe(new ht(0,0))}static max(){return new oe(new ht(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return tu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof tu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Me extends tu{construct(e,n,r){return new Me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Me(n)}static emptyPath(){return new Me([])}}const a9=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class It extends tu{construct(e,n,r){return new It(e,n,r)}static isValidIdentifier(e){return a9.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),It.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new It(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new Y($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new Y($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Y($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(s=!s,i++):a!=="."||s?(r+=a,i++):(o(),i++)}if(o(),s)throw new Y($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new It(n)}static emptyPath(){return new It([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(Me.fromString(e))}static fromName(e){return new Z(Me.fromString(e).popFirst(5))}static empty(){return new Z(Me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new Me(e.slice()))}}function l9(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=oe.fromTimestamp(r===1e9?new ht(n+1,0):new ht(n,r));return new Li(i,Z.empty(),e)}function u9(t){return new Li(t.readTime,t.key,-1)}class Li{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Li(oe.min(),Z.empty(),-1)}static max(){return new Li(oe.max(),Z.empty(),-1)}}function c9(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Z.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d9="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class h9{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ma(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==d9)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,o=0,s=!1;e.forEach(a=>{++i,a.next(()=>{++o,s&&o===i&&n()},u=>r(u))}),s=!0,o===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const o=e.length,s=new Array(o);let a=0;for(let u=0;u<o;u++){const c=u;n(e[c]).next(d=>{s[c]=d,++a,a===o&&r(s)},d=>i(d))}})}static doWhile(e,n){return new F((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}function f9(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ga(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}gf.oe=-1;function yf(t){return t==null}function Jd(t){return t===0&&1/t==-1/0}function p9(t){return typeof t=="number"&&Number.isInteger(t)&&!Jd(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m9(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Jw(e)),e=g9(t.get(n),e);return Jw(e)}function g9(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const o=t.charAt(i);switch(o){case"\0":n+="";break;case"":n+="";break;default:n+=o}}return n}function Jw(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ki(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function JC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n){this.comparator=e,this.root=n||St.EMPTY}insert(e,n){return new He(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,St.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,St.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sc(this.root,e,this.comparator,!0)}}class Sc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class St{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??St.RED,this.left=i??St.EMPTY,this.right=o??St.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new St(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return St.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return St.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,St.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,St.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}St.EMPTY=null,St.RED=!0,St.BLACK=!1;St.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(e,n,r,i,o){return this}insert(e,n,r){return new St(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new eE(this.data.getIterator())}getIteratorFrom(e){return new eE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof yt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new yt(this.comparator);return n.data=e,n}}class eE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.fields=e,e.sort(It.comparator)}static empty(){return new gn([])}unionWith(e){let n=new yt(It.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new gn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ea(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ZC("Invalid base64 string: "+o):o}}(e);return new bt(n)}static fromUint8Array(e){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new bt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const y9=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vi(t){if(xe(!!t),typeof t=="string"){let e=0;const n=y9.exec(t);if(xe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Je(t.seconds),nanos:Je(t.nanos)}}function Je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ji(t){return typeof t=="string"?bt.fromBase64String(t):bt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function vf(t){const e=t.mapValue.fields.__previous_value__;return b0(e)?vf(e):e}function nu(t){const e=Vi(t.mapValue.fields.__local_write_time__.timestampValue);return new ht(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v9{constructor(e,n,r,i,o,s,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class ru{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ru("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ru&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Fi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?b0(t)?4:w9(t)?9007199254740991:_9(t)?10:11:ee()}function _r(t,e){if(t===e)return!0;const n=Fi(t);if(n!==Fi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return nu(t).isEqual(nu(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=Vi(i.timestampValue),a=Vi(o.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return ji(i.bytesValue).isEqual(ji(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return Je(i.geoPointValue.latitude)===Je(o.geoPointValue.latitude)&&Je(i.geoPointValue.longitude)===Je(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Je(i.integerValue)===Je(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=Je(i.doubleValue),a=Je(o.doubleValue);return s===a?Jd(s)===Jd(a):isNaN(s)&&isNaN(a)}return!1}(t,e);case 9:return ea(t.arrayValue.values||[],e.arrayValue.values||[],_r);case 10:case 11:return function(i,o){const s=i.mapValue.fields||{},a=o.mapValue.fields||{};if(Zw(s)!==Zw(a))return!1;for(const u in s)if(s.hasOwnProperty(u)&&(a[u]===void 0||!_r(s[u],a[u])))return!1;return!0}(t,e);default:return ee()}}function iu(t,e){return(t.values||[]).find(n=>_r(n,e))!==void 0}function ta(t,e){if(t===e)return 0;const n=Fi(t),r=Fi(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(o,s){const a=Je(o.integerValue||o.doubleValue),u=Je(s.integerValue||s.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return tE(t.timestampValue,e.timestampValue);case 4:return tE(nu(t),nu(e));case 5:return ve(t.stringValue,e.stringValue);case 6:return function(o,s){const a=ji(o),u=ji(s);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const a=o.split("/"),u=s.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=ve(a[c],u[c]);if(d!==0)return d}return ve(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const a=ve(Je(o.latitude),Je(s.latitude));return a!==0?a:ve(Je(o.longitude),Je(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return nE(t.arrayValue,e.arrayValue);case 10:return function(o,s){var a,u,c,d;const f=o.fields||{},m=s.fields||{},v=(a=f.value)===null||a===void 0?void 0:a.arrayValue,w=(u=m.value)===null||u===void 0?void 0:u.arrayValue,I=ve(((c=v==null?void 0:v.values)===null||c===void 0?void 0:c.length)||0,((d=w==null?void 0:w.values)===null||d===void 0?void 0:d.length)||0);return I!==0?I:nE(v,w)}(t.mapValue,e.mapValue);case 11:return function(o,s){if(o===xc.mapValue&&s===xc.mapValue)return 0;if(o===xc.mapValue)return 1;if(s===xc.mapValue)return-1;const a=o.fields||{},u=Object.keys(a),c=s.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const m=ve(u[f],d[f]);if(m!==0)return m;const v=ta(a[u[f]],c[d[f]]);if(v!==0)return v}return ve(u.length,d.length)}(t.mapValue,e.mapValue);default:throw ee()}}function tE(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=Vi(t),r=Vi(e),i=ve(n.seconds,r.seconds);return i!==0?i:ve(n.nanos,r.nanos)}function nE(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const o=ta(n[i],r[i]);if(o)return o}return ve(n.length,r.length)}function na(t){return Rg(t)}function Rg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Vi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ji(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Z.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=Rg(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const s of r)o?o=!1:i+=",",i+=`${s}:${Rg(n.fields[s])}`;return i+"}"}(t.mapValue):ee()}function Xc(t){switch(Fi(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=vf(t);return e?16+Xc(e):16;case 5:return 2*t.stringValue.length;case 6:return ji(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+Xc(o),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Ki(r.fields,(o,s)=>{i+=o.length+Xc(s)}),i}(t.mapValue);default:throw ee()}}function rE(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function kg(t){return!!t&&"integerValue"in t}function R0(t){return!!t&&"arrayValue"in t}function iE(t){return!!t&&"nullValue"in t}function oE(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Jc(t){return!!t&&"mapValue"in t}function _9(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function vl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ki(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=vl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=vl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function w9(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.value=e}static empty(){return new Zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Jc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=vl(n)}setAll(e){let n=It.emptyPath(),r={},i=[];e.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}s?r[a.lastSegment()]=vl(s):i.push(a.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());Jc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _r(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Jc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ki(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Zt(vl(this.value))}}function eA(t){const e=[];return Ki(t.fields,(n,r)=>{const i=new It([n]);if(Jc(r)){const o=eA(r.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new gn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,n,r,i,o,s,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=a}static newInvalidDocument(e){return new jt(e,0,oe.min(),oe.min(),oe.min(),Zt.empty(),0)}static newFoundDocument(e,n,r,i){return new jt(e,1,n,oe.min(),r,i,0)}static newNoDocument(e,n){return new jt(e,2,n,oe.min(),oe.min(),Zt.empty(),0)}static newUnknownDocument(e,n){return new jt(e,3,n,oe.min(),oe.min(),Zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,n){this.position=e,this.inclusive=n}}function sE(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=Z.comparator(Z.fromName(s.referenceValue),n.key):r=ta(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function aE(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_r(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n="asc"){this.field=e,this.dir=n}}function E9(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{}class lt extends tA{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new S9(e,n,r):n==="array-contains"?new C9(e,r):n==="in"?new A9(e,r):n==="not-in"?new b9(e,r):n==="array-contains-any"?new R9(e,r):new lt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new x9(e,r):new I9(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ta(n,this.value)):n!==null&&Fi(this.value)===Fi(n)&&this.matchesComparison(ta(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class er extends tA{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new er(e,n)}matches(e){return nA(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function nA(t){return t.op==="and"}function rA(t){return T9(t)&&nA(t)}function T9(t){for(const e of t.filters)if(e instanceof er)return!1;return!0}function Pg(t){if(t instanceof lt)return t.field.canonicalString()+t.op.toString()+na(t.value);if(rA(t))return t.filters.map(e=>Pg(e)).join(",");{const e=t.filters.map(n=>Pg(n)).join(",");return`${t.op}(${e})`}}function iA(t,e){return t instanceof lt?function(r,i){return i instanceof lt&&r.op===i.op&&r.field.isEqual(i.field)&&_r(r.value,i.value)}(t,e):t instanceof er?function(r,i){return i instanceof er&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,s,a)=>o&&iA(s,i.filters[a]),!0):!1}(t,e):void ee()}function oA(t){return t instanceof lt?function(n){return`${n.field.canonicalString()} ${n.op} ${na(n.value)}`}(t):t instanceof er?function(n){return n.op.toString()+" {"+n.getFilters().map(oA).join(" ,")+"}"}(t):"Filter"}class S9 extends lt{constructor(e,n,r){super(e,n,r),this.key=Z.fromName(r.referenceValue)}matches(e){const n=Z.comparator(e.key,this.key);return this.matchesComparison(n)}}class x9 extends lt{constructor(e,n){super(e,"in",n),this.keys=sA("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class I9 extends lt{constructor(e,n){super(e,"not-in",n),this.keys=sA("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function sA(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Z.fromName(r.referenceValue))}class C9 extends lt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return R0(n)&&iu(n.arrayValue,this.value)}}class A9 extends lt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&iu(this.value.arrayValue,n)}}class b9 extends lt{constructor(e,n){super(e,"not-in",n)}matches(e){if(iu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!iu(this.value.arrayValue,n)}}class R9 extends lt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!R0(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>iu(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k9{constructor(e,n=null,r=[],i=[],o=null,s=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=a,this.ue=null}}function lE(t,e=null,n=[],r=[],i=null,o=null,s=null){return new k9(t,e,n,r,i,o,s)}function k0(t){const e=se(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Pg(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),yf(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>na(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>na(r)).join(",")),e.ue=n}return e.ue}function P0(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!E9(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!iA(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!aE(t.startAt,e.startAt)&&aE(t.endAt,e.endAt)}function Ng(t){return Z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n=null,r=[],i=[],o=null,s="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function P9(t,e,n,r,i,o,s,a){return new ya(t,e,n,r,i,o,s,a)}function N0(t){return new ya(t)}function uE(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function aA(t){return t.collectionGroup!==null}function _l(t){const e=se(t);if(e.ce===null){e.ce=[];const n=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let a=new yt(It.comparator);return s.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.ce.push(new ou(o,r))}),n.has(It.keyField().canonicalString())||e.ce.push(new ou(It.keyField(),r))}return e.ce}function pr(t){const e=se(t);return e.le||(e.le=N9(e,_l(t))),e.le}function N9(t,e){if(t.limitType==="F")return lE(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new ou(i.field,o)});const n=t.endAt?new Zd(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Zd(t.startAt.position,t.startAt.inclusive):null;return lE(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Og(t,e){const n=t.filters.concat([e]);return new ya(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Dg(t,e,n){return new ya(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function _f(t,e){return P0(pr(t),pr(e))&&t.limitType===e.limitType}function lA(t){return`${k0(pr(t))}|lt:${t.limitType}`}function ss(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>oA(i)).join(", ")}]`),yf(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>na(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>na(i)).join(",")),`Target(${r})`}(pr(t))}; limitType=${t.limitType})`}function wf(t,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):Z.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,i){for(const o of _l(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(s,a,u){const c=sE(s,a,u);return s.inclusive?c<=0:c<0}(r.startAt,_l(r),i)||r.endAt&&!function(s,a,u){const c=sE(s,a,u);return s.inclusive?c>=0:c>0}(r.endAt,_l(r),i))}(t,e)}function O9(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function uA(t){return(e,n)=>{let r=!1;for(const i of _l(t)){const o=D9(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function D9(t,e,n){const r=t.field.isKeyField()?Z.comparator(e.key,n.key):function(o,s,a){const u=s.data.field(o),c=a.data.field(o);return u!==null&&c!==null?ta(u,c):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ki(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return JC(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M9=new He(Z.comparator);function Yr(){return M9}const cA=new He(Z.comparator);function rl(...t){let e=cA;for(const n of t)e=e.insert(n.key,n);return e}function dA(t){let e=cA;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function fo(){return wl()}function hA(){return wl()}function wl(){return new Uo(t=>t.toString(),(t,e)=>t.isEqual(e))}const L9=new He(Z.comparator),V9=new yt(Z.comparator);function fe(...t){let e=V9;for(const n of t)e=e.add(n);return e}const j9=new yt(ve);function F9(){return j9}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jd(e)?"-0":e}}function fA(t){return{integerValue:""+t}}function $9(t,e){return p9(e)?fA(e):O0(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(){this._=void 0}}function U9(t,e,n){return t instanceof su?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&b0(o)&&(o=vf(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(n,e):t instanceof au?mA(t,e):t instanceof lu?gA(t,e):function(i,o){const s=pA(i,o),a=cE(s)+cE(i.Pe);return kg(s)&&kg(i.Pe)?fA(a):O0(i.serializer,a)}(t,e)}function B9(t,e,n){return t instanceof au?mA(t,e):t instanceof lu?gA(t,e):n}function pA(t,e){return t instanceof eh?function(r){return kg(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class su extends Ef{}class au extends Ef{constructor(e){super(),this.elements=e}}function mA(t,e){const n=yA(e);for(const r of t.elements)n.some(i=>_r(i,r))||n.push(r);return{arrayValue:{values:n}}}class lu extends Ef{constructor(e){super(),this.elements=e}}function gA(t,e){let n=yA(e);for(const r of t.elements)n=n.filter(i=>!_r(i,r));return{arrayValue:{values:n}}}class eh extends Ef{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function cE(t){return Je(t.integerValue||t.doubleValue)}function yA(t){return R0(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z9{constructor(e,n){this.field=e,this.transform=n}}function H9(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof au&&i instanceof au||r instanceof lu&&i instanceof lu?ea(r.elements,i.elements,_r):r instanceof eh&&i instanceof eh?_r(r.Pe,i.Pe):r instanceof su&&i instanceof su}(t.transform,e.transform)}class W9{constructor(e,n){this.version=e,this.transformResults=n}}class mr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new mr}static exists(e){return new mr(void 0,e)}static updateTime(e){return new mr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Tf{}function vA(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wA(t.key,mr.none()):new Cu(t.key,t.data,mr.none());{const n=t.data,r=Zt.empty();let i=new yt(It.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new Qi(t.key,r,new gn(i.toArray()),mr.none())}}function q9(t,e,n){t instanceof Cu?function(i,o,s){const a=i.value.clone(),u=hE(i.fieldTransforms,o,s.transformResults);a.setAll(u),o.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Qi?function(i,o,s){if(!Zc(i.precondition,o))return void o.convertToUnknownDocument(s.version);const a=hE(i.fieldTransforms,o,s.transformResults),u=o.data;u.setAll(_A(i)),u.setAll(a),o.convertToFoundDocument(s.version,u).setHasCommittedMutations()}(t,e,n):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function El(t,e,n,r){return t instanceof Cu?function(o,s,a,u){if(!Zc(o.precondition,s))return a;const c=o.value.clone(),d=fE(o.fieldTransforms,u,s);return c.setAll(d),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Qi?function(o,s,a,u){if(!Zc(o.precondition,s))return a;const c=fE(o.fieldTransforms,u,s),d=s.data;return d.setAll(_A(o)),d.setAll(c),s.convertToFoundDocument(s.version,d).setHasLocalMutations(),a===null?null:a.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(o,s,a){return Zc(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):a}(t,e,n)}function G9(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=pA(r.transform,i||null);o!=null&&(n===null&&(n=Zt.empty()),n.set(r.field,o))}return n||null}function dE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ea(r,i,(o,s)=>H9(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Cu extends Tf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Qi extends Tf{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function _A(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function hE(t,e,n){const r=new Map;xe(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,B9(s,a,n[i]))}return r}function fE(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,U9(o,s,e))}return r}class wA extends Tf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class K9 extends Tf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q9{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&q9(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=El(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=El(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=hA();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let a=this.applyToLocalView(s,o.mutatedFields);a=n.has(i.key)?null:a;const u=vA(s,a);u!==null&&r.set(i.key,u),s.isValidDocument()||s.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),fe())}isEqual(e){return this.batchId===e.batchId&&ea(this.mutations,e.mutations,(n,r)=>dE(n,r))&&ea(this.baseMutations,e.baseMutations,(n,r)=>dE(n,r))}}class D0{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){xe(e.mutations.length===r.length);let i=function(){return L9}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,r[s].version);return new D0(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Y9=class{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X9{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rt,ye;function J9(t){switch(t){default:return ee();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function EA(t){if(t===void 0)return Qr("GRPC error has no .code"),$.UNKNOWN;switch(t){case rt.OK:return $.OK;case rt.CANCELLED:return $.CANCELLED;case rt.UNKNOWN:return $.UNKNOWN;case rt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case rt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case rt.INTERNAL:return $.INTERNAL;case rt.UNAVAILABLE:return $.UNAVAILABLE;case rt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case rt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case rt.NOT_FOUND:return $.NOT_FOUND;case rt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case rt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case rt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case rt.ABORTED:return $.ABORTED;case rt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case rt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case rt.DATA_LOSS:return $.DATA_LOSS;default:return ee()}}(ye=rt||(rt={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z9(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ej=new _o([4294967295,4294967295],0);function pE(t){const e=Z9().encode(t),n=new HC;return n.update(e),new Uint8Array(n.digest())}function mE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new _o([n,r],0),new _o([i,o],0)]}class M0{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new il(`Invalid padding: ${n}`);if(r<0)throw new il(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new il(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new il(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=_o.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(_o.fromNumber(r)));return i.compare(ej)===1&&(i=new _o([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=pE(e),[r,i]=mE(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);if(!this.de(s))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),s=new M0(o,i,n);return r.forEach(a=>s.insert(a)),s}insert(e){if(this.Ie===0)return;const n=pE(e),[r,i]=mE(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);this.Ae(s)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class il extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,n,r,i,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Au.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Sf(oe.min(),i,new He(ve),Yr(),fe())}}class Au{constructor(e,n,r,i,o){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Au(r,n,fe(),fe(),fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class TA{constructor(e,n){this.targetId=e,this.me=n}}class SA{constructor(e,n,r=bt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class gE{constructor(){this.fe=0,this.ge=vE(),this.pe=bt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=fe(),n=fe(),r=fe();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ee()}}),new Au(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=vE()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,xe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class tj{constructor(e){this.Le=e,this.Be=new Map,this.ke=Yr(),this.qe=yE(),this.Qe=new He(ve)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const o=i.target;if(Ng(o))if(r===0){const s=new Z(o.path);this.Ue(n,s,jt.newNoDocument(s,oe.min()))}else xe(r===1);else{const s=this.Ye(n);if(s!==r){const a=this.Ze(e),u=a?this.Xe(a,e,s):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=n;let s,a;try{s=ji(r).toUint8Array()}catch(u){if(u instanceof ZC)return Zs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new M0(s,i,o)}catch(u){return Zs(u instanceof il?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(o=>{const s=this.Le.tt(),a=`projects/${s.projectId}/databases/${s.database}/documents/${o.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,o,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((o,s)=>{const a=this.Je(s);if(a){if(o.current&&Ng(a.target)){const u=new Z(a.target.path);this.ke.get(u)!==null||this.it(s,u)||this.Ue(s,u,jt.newNoDocument(u,e))}o.be&&(n.set(s,o.ve()),o.Ce())}});let r=fe();this.qe.forEach((o,s)=>{let a=!0;s.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(o))}),this.ke.forEach((o,s)=>s.setReadTime(e));const i=new Sf(e,n,this.Qe,this.ke,r);return this.ke=Yr(),this.qe=yE(),this.Qe=new He(ve),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new gE,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new yt(ve),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new gE),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function yE(){return new He(Z.comparator)}function vE(){return new He(Z.comparator)}const nj={asc:"ASCENDING",desc:"DESCENDING"},rj={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ij={and:"AND",or:"OR"};class oj{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Mg(t,e){return t.useProto3Json||yf(e)?e:{value:e}}function th(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function sj(t,e){return th(t,e.toTimestamp())}function gr(t){return xe(!!t),oe.fromTimestamp(function(n){const r=Vi(n);return new ht(r.seconds,r.nanos)}(t))}function L0(t,e){return Lg(t,e).canonicalString()}function Lg(t,e){const n=function(i){return new Me(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function IA(t){const e=Me.fromString(t);return xe(kA(e)),e}function Vg(t,e){return L0(t.databaseId,e.path)}function Hp(t,e){const n=IA(e);if(n.get(1)!==t.databaseId.projectId)throw new Y($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Z(AA(n))}function CA(t,e){return L0(t.databaseId,e)}function aj(t){const e=IA(t);return e.length===4?Me.emptyPath():AA(e)}function jg(t){return new Me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function AA(t){return xe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function _E(t,e,n){return{name:Vg(t,e),fields:n.value.mapValue.fields}}function lj(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(c,d){return c.useProto3Json?(xe(d===void 0||typeof d=="string"),bt.fromBase64String(d||"")):(xe(d===void 0||d instanceof Buffer||d instanceof Uint8Array),bt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(c){const d=c.code===void 0?$.UNKNOWN:EA(c.code);return new Y(d,c.message||"")}(s);n=new SA(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Hp(t,r.document.name),o=gr(r.document.updateTime),s=r.document.createTime?gr(r.document.createTime):oe.min(),a=new Zt({mapValue:{fields:r.document.fields}}),u=jt.newFoundDocument(i,o,s,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new ed(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Hp(t,r.document),o=r.readTime?gr(r.readTime):oe.min(),s=jt.newNoDocument(i,o),a=r.removedTargetIds||[];n=new ed([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Hp(t,r.document),o=r.removedTargetIds||[];n=new ed([],o,i,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,s=new X9(i,o),a=r.targetId;n=new TA(a,s)}}return n}function uj(t,e){let n;if(e instanceof Cu)n={update:_E(t,e.key,e.value)};else if(e instanceof wA)n={delete:Vg(t,e.key)};else if(e instanceof Qi)n={update:_E(t,e.key,e.data),updateMask:vj(e.fieldMask)};else{if(!(e instanceof K9))return ee();n={verify:Vg(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,s){const a=s.transform;if(a instanceof su)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof au)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof lu)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof eh)return{fieldPath:s.field.canonicalString(),increment:a.Pe};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:sj(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:ee()}(t,e.precondition)),n}function cj(t,e){return t&&t.length>0?(xe(e!==void 0),t.map(n=>function(i,o){let s=i.updateTime?gr(i.updateTime):gr(o);return s.isEqual(oe.min())&&(s=gr(o)),new W9(s,i.transformResults||[])}(n,e))):[]}function dj(t,e){return{documents:[CA(t,e.path)]}}function hj(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=CA(t,i);const o=function(c){if(c.length!==0)return RA(er.create(c,"and"))}(e.filters);o&&(n.structuredQuery.where=o);const s=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:as(m.field),direction:mj(m.dir)}}(d))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const a=Mg(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function fj(t){let e=aj(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){xe(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let o=[];n.where&&(o=function(f){const m=bA(f);return m instanceof er&&rA(m)?m.getFilters():[m]}(n.where));let s=[];n.orderBy&&(s=function(f){return f.map(m=>function(w){return new ou(ls(w.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,yf(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,v=f.values||[];return new Zd(v,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,v=f.values||[];return new Zd(v,m)}(n.endAt)),P9(e,i,s,o,a,"F",u,c)}function pj(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function bA(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ls(n.unaryFilter.field);return lt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ls(n.unaryFilter.field);return lt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ls(n.unaryFilter.field);return lt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=ls(n.unaryFilter.field);return lt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(n){return lt.create(ls(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return er.create(n.compositeFilter.filters.map(r=>bA(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ee()}}(n.compositeFilter.op))}(t):ee()}function mj(t){return nj[t]}function gj(t){return rj[t]}function yj(t){return ij[t]}function as(t){return{fieldPath:t.canonicalString()}}function ls(t){return It.fromServerFormat(t.fieldPath)}function RA(t){return t instanceof lt?function(n){if(n.op==="=="){if(oE(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NAN"}};if(iE(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(oE(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NOT_NAN"}};if(iE(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:as(n.field),op:gj(n.op),value:n.value}}}(t):t instanceof er?function(n){const r=n.getFilters().map(i=>RA(i));return r.length===1?r[0]:{compositeFilter:{op:yj(n.op),filters:r}}}(t):ee()}function vj(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function kA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n,r,i,o=oe.min(),s=oe.min(),a=bt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new yi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _j{constructor(e){this.ct=e}}function wj(t){const e=fj({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Dg(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ej{constructor(){this.un=new Tj}addToCollectionParentIndex(e,n){return this.un.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Li.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Li.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class Tj{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new yt(Me.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new yt(Me.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Xt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Xt(e,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt.DEFAULT_COLLECTION_PERCENTILE=10,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xt.DEFAULT=new Xt(41943040,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xt.DISABLED=new Xt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ra(0)}static kn(){return new ra(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE([t,e],[n,r]){const i=ve(t,n);return i===0?ve(e,r):i}class Sj{constructor(e){this.Un=e,this.buffer=new yt(EE),this.Wn=0}Gn(){return++this.Wn}zn(e){const n=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();EE(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class xj{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){G("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ga(n)?G("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await ma(n)}await this.Hn(3e5)})}}class Ij{constructor(e,n){this.Jn=e,this.params=n}calculateTargetCount(e,n){return this.Jn.Yn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return F.resolve(gf.oe);const r=new Sj(n);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(G("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(wE)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(G("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wE):this.Xn(e,n))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,n){let r,i,o,s,a,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(G("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,s=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(o=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),os()<=he.DEBUG&&G("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${s-d}ms
	Determined least recently used ${i} in `+(a-s)+`ms
	Removed ${o} targets in `+(u-a)+`ms
	Removed ${f} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:f})))}}function Cj(t,e){return new Ij(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aj{constructor(){this.changes=new Uo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,jt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bj{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rj{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&El(r.mutation,i,gn.empty(),ht.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,fe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=fe()){const i=fo();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=rl();return o.forEach((a,u)=>{s=s.insert(a,u.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=fo();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,fe()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,a)=>{n.set(s,a)})})}computeViews(e,n,r,i){let o=Yr();const s=wl(),a=function(){return wl()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Qi)?o=o.insert(c.key,c):d!==void 0?(s.set(c.key,d.mutation.getFieldMask()),El(d.mutation,c,d.mutation.getFieldMask(),ht.now())):s.set(c.key,gn.empty())}),this.recalculateAndSaveOverlays(e,o).next(u=>(u.forEach((c,d)=>s.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new bj(d,(f=s.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=wl();let i=new He((s,a)=>s-a),o=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const a of s)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||gn.empty();d=a.applyToLocalView(c,d),r.set(u,d);const f=(i.get(a.batchId)||fe()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const s=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,f=hA();d.forEach(m=>{if(!o.has(m)){const v=vA(n.get(m),r.get(m));v!==null&&f.set(m,v),o=o.add(m)}}),s.push(this.documentOverlayCache.saveOverlays(e,c,f))}return F.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(s){return Z.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):aA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):F.resolve(fo());let a=-1,u=o;return s.next(c=>F.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),o.get(d)?F.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,o)).next(()=>this.computeViews(e,u,c,fe())).next(d=>({batchId:a,changes:dA(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Z(n)).next(r=>{let i=rl();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let s=rl();return this.indexManager.getCollectionParents(e,o).next(a=>F.forEach(a,u=>{const c=function(f,m){return new ya(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(o));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{s=s.insert(f,m)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(s=>{o.forEach((u,c)=>{const d=c.getKey();s.get(d)===null&&(s=s.insert(d,jt.newInvalidDocument(d)))});let a=rl();return s.forEach((u,c)=>{const d=o.get(u);d!==void 0&&El(d.mutation,c,gn.empty(),ht.now()),wf(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kj{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return F.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:gr(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:wj(i.bundledQuery),readTime:gr(i.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pj{constructor(){this.overlays=new He(Z.comparator),this.Ir=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=fo();return F.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.ht(e,n,o)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=fo(),o=n.length+1,s=new Z(n.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===o&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new He((c,d)=>c-d);const s=this.overlays.getIterator();for(;s.hasNext();){const c=s.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=o.get(c.largestBatchId);d===null&&(d=fo(),o=o.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=fo(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return F.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new Y9(n,r));let o=this.Ir.get(n);o===void 0&&(o=fe(),this.Ir.set(n,o)),this.Ir.set(n,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nj{constructor(){this.sessionToken=bt.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(){this.Tr=new yt(ft.Er),this.dr=new yt(ft.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new ft(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new ft(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Z(new Me([])),r=new ft(n,e),i=new ft(n,e+1),o=[];return this.dr.forEachInRange([r,i],s=>{this.Vr(s),o.push(s.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Z(new Me([])),r=new ft(n,e),i=new ft(n,e+1);let o=fe();return this.dr.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new ft(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ft{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Z.comparator(e.key,n.key)||ve(e.wr,n.wr)}static Ar(e,n){return ve(e.wr,n.wr)||Z.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oj{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new yt(ft.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Q9(o,n,r,i);this.mutationQueue.push(s);for(const a of i)this.br=this.br.add(new ft(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(s)}lookupMutationBatch(e,n){return F.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),o=i<0?0:i;return F.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ft(n,0),i=new ft(n,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],s=>{const a=this.Dr(s.wr);o.push(a)}),F.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new yt(ve);return n.forEach(i=>{const o=new ft(i,0),s=new ft(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,s],a=>{r=r.add(a.wr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;Z.isDocumentKey(o)||(o=o.child(""));const s=new ft(new Z(o),0);let a=new yt(ve);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},s),F.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){xe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return F.forEach(n.mutations,i=>{const o=new ft(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new ft(n,0),i=this.br.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dj{constructor(e){this.Mr=e,this.docs=function(){return new He(Z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():jt.newInvalidDocument(n))}getEntries(e,n){let r=Yr();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():jt.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=Yr();const s=n.path,a=new Z(s.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!s.isPrefixOf(c.path))break;c.path.length>s.length+1||c9(u9(d),r)<=0||(i.has(d.key)||wf(n,d))&&(o=o.insert(d.key,d.mutableCopy()))}return F.resolve(o)}getAllFromCollectionGroup(e,n,r,i){ee()}Or(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Mj(this)}getSize(e){return F.resolve(this.size)}}class Mj extends Aj{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lj{constructor(e){this.persistence=e,this.Nr=new Uo(n=>k0(n),P0),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.Lr=0,this.Br=new V0,this.targetCount=0,this.kr=ra.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),F.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ra(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Kn(n),F.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Nr.forEach((s,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),F.waitFor(o).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),F.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e,n){this.qr={},this.overlays={},this.Qr=new gf(0),this.Kr=!1,this.Kr=!0,this.$r=new Nj,this.referenceDelegate=e(this),this.Ur=new Lj(this),this.indexManager=new Ej,this.remoteDocumentCache=function(i){return new Dj(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new _j(n),this.Gr=new kj(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Pj,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new Oj(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const i=new Vj(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,n){return F.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Vj extends h9{constructor(e){super(),this.currentSequenceNumber=e}}class j0{constructor(e){this.persistence=e,this.Jr=new V0,this.Yr=null}static Zr(e){return new j0(e)}get Xr(){if(this.Yr)return this.Yr;throw ee()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,r=>{const i=Z.fromPath(r);return this.ei(e,i).next(o=>{o||n.removeEntry(i,oe.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return F.or([()=>F.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}class nh{constructor(e,n){this.persistence=e,this.ti=new Uo(r=>m9(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Cj(this,n)}static Zr(e,n){return new nh(e,n)}zr(){}jr(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Yn(e){const n=this.er(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}er(e){let n=0;return this.Zn(e,r=>{n++}).next(()=>n)}Zn(e,n){return F.forEach(this.ti,(r,i)=>this.nr(e,r,i).next(o=>o?F.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.Or(e,s=>this.nr(e,s,n).next(a=>{a||(r++,o.removeEntry(s,oe.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ti.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ti.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.ti.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.ti.set(n,e.currentSequenceNumber),F.resolve()}Wr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Xc(e.data.value)),n}nr(e,n,r){return F.or([()=>this.persistence.Hr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.ti.get(n);return F.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=fe(),i=fe();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new F0(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jj{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fj{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return OV()?8:f9(Ut())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.Yi(e,n).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.Zi(e,n,i,r).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new jj;return this.Xi(e,n,s).next(a=>{if(o.result=a,this.zi)return this.es(e,n,s,a.size)})}).next(()=>o.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(os()<=he.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",ss(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(os()<=he.DEBUG&&G("QueryEngine","Query:",ss(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(os()<=he.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",ss(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pr(n))):F.resolve())}Yi(e,n){if(uE(n))return F.resolve(null);let r=pr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Dg(n,null,"F"),r=pr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=fe(...o);return this.Ji.getDocuments(e,s).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,s,u.readTime)?this.Yi(e,Dg(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return uE(n)||i.isEqual(oe.min())?F.resolve(null):this.Ji.getDocuments(e,r).next(o=>{const s=this.ts(n,o);return this.ns(n,s,r,i)?F.resolve(null):(os()<=he.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ss(n)),this.rs(e,s,n,l9(i,-1)).next(a=>a))})}ts(e,n){let r=new yt(uA(e));return n.forEach((i,o)=>{wf(e,o)&&(r=r.add(o))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,n,r){return os()<=he.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",ss(n)),this.Ji.getDocumentsMatchingQuery(e,n,Li.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $j{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new He(ve),this._s=new Uo(o=>k0(o),P0),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Rj(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function Uj(t,e,n,r){return new $j(t,e,n,r)}async function NA(t,e){const n=se(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],a=[];let u=fe();for(const c of i){s.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of o){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:s,addedBatchIds:a}))})})}function Bj(t,e){const n=se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const f=c.batch,m=f.keys();let v=F.resolve();return m.forEach(w=>{v=v.next(()=>d.getEntry(u,w)).next(I=>{const R=c.docVersions.get(w);xe(R!==null),I.version.compareTo(R)<0&&(f.applyToRemoteDocument(I,c),I.isValidDocument()&&(I.setReadTime(c.commitVersion),d.addEntry(I)))})}),v.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=fe();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function OA(t){const e=se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function zj(t,e){const n=se(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;a.push(n.Ur.removeMatchingKeys(o,d.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(o,d.addedDocuments,f)));let v=m.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(f)!==null?v=v.withResumeToken(bt.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,r)),i=i.insert(f,v),function(I,R,S){return I.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(m,v,d)&&a.push(n.Ur.updateTargetData(o,v))});let u=Yr(),c=fe();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(o,d))}),a.push(Hj(o,s,e.documentUpdates).next(d=>{u=d.Ps,c=d.Is})),!r.isEqual(oe.min())){const d=n.Ur.getLastRemoteSnapshotVersion(o).next(f=>n.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));a.push(d)}return F.waitFor(a).next(()=>s.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,u,c)).next(()=>u)}).then(o=>(n.os=i,o))}function Hj(t,e,n){let r=fe(),i=fe();return n.forEach(o=>r=r.add(o)),e.getEntries(t,r).next(o=>{let s=Yr();return n.forEach((a,u)=>{const c=o.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(oe.min())?(e.removeEntry(a,u.readTime),s=s.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),s=s.insert(a,u)):G("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:s,Is:i}})}function Wj(t,e){const n=se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function qj(t,e){const n=se(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(o=>o?(i=o,F.resolve(i)):n.Ur.allocateTargetId(r).next(s=>(i=new yi(e,s,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Fg(t,e,n){const r=se(t),i=r.os.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,s=>r.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!ga(s))throw s;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function TE(t,e,n){const r=se(t);let i=oe.min(),o=fe();return r.persistence.runTransaction("Execute query","readwrite",s=>function(u,c,d){const f=se(u),m=f._s.get(d);return m!==void 0?F.resolve(f.os.get(m)):f.Ur.getTargetData(c,d)}(r,s,pr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(s,a.targetId).next(u=>{o=u})}).next(()=>r.ss.getDocumentsMatchingQuery(s,e,n?i:oe.min(),n?o:fe())).next(a=>(Gj(r,O9(e),a),{documents:a,Ts:o})))}function Gj(t,e,n){let r=t.us.get(e)||oe.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),t.us.set(e,r)}class SE{constructor(){this.activeTargetIds=F9()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Kj{constructor(){this.so=new SE,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new SE,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qj{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ic=null;function Wp(){return Ic===null?Ic=function(){return 268435456+Math.round(2147483648*Math.random())}():Ic++,"0x"+Ic.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yj={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xj{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt="WebChannelConnection";class Jj extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(n,r,i,o,s){const a=Wp(),u=this.xo(n,r.toUriEncodedString());G("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,o,s),this.No(n,u,c,i).then(d=>(G("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw Zs("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(n,r,i,o,s,a){return this.Mo(n,r,i,o,s)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+pa}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}xo(n,r){const i=Yj[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const o=Wp();return new Promise((s,a)=>{const u=new WC;u.setWithCredentials(!0),u.listenOnce(qC.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Yc.NO_ERROR:const d=u.getResponseJson();G(Dt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),s(d);break;case Yc.TIMEOUT:G(Dt,`RPC '${e}' ${o} timed out`),a(new Y($.DEADLINE_EXCEEDED,"Request time out"));break;case Yc.HTTP_ERROR:const f=u.getStatus();if(G(Dt,`RPC '${e}' ${o} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const v=m==null?void 0:m.error;if(v&&v.status&&v.message){const w=function(R){const S=R.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(S)>=0?S:$.UNKNOWN}(v.status);a(new Y(w,v.message))}else a(new Y($.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new Y($.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{G(Dt,`RPC '${e}' ${o} completed.`)}});const c=JSON.stringify(i);G(Dt,`RPC '${e}' ${o} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Wp(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=QC(),a=KC(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=o.join("");G(Dt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const f=s.createWebChannel(d,u);let m=!1,v=!1;const w=new Xj({Io:R=>{v?G(Dt,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(m||(G(Dt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),G(Dt,`RPC '${e}' stream ${i} sending:`,R),f.send(R))},To:()=>f.close()}),I=(R,S,E)=>{R.listen(S,y=>{try{E(y)}catch(A){setTimeout(()=>{throw A},0)}})};return I(f,nl.EventType.OPEN,()=>{v||(G(Dt,`RPC '${e}' stream ${i} transport opened.`),w.yo())}),I(f,nl.EventType.CLOSE,()=>{v||(v=!0,G(Dt,`RPC '${e}' stream ${i} transport closed`),w.So())}),I(f,nl.EventType.ERROR,R=>{v||(v=!0,Zs(Dt,`RPC '${e}' stream ${i} transport errored:`,R),w.So(new Y($.UNAVAILABLE,"The operation could not be completed")))}),I(f,nl.EventType.MESSAGE,R=>{var S;if(!v){const E=R.data[0];xe(!!E);const y=E,A=y.error||((S=y[0])===null||S===void 0?void 0:S.error);if(A){G(Dt,`RPC '${e}' stream ${i} received error:`,A);const D=A.status;let M=function(b){const p=rt[b];if(p!==void 0)return EA(p)}(D),T=A.message;M===void 0&&(M=$.INTERNAL,T="Unknown error status: "+D+" with message "+A.message),v=!0,w.So(new Y(M,T)),f.close()}else G(Dt,`RPC '${e}' stream ${i} received:`,E),w.bo(E)}}),I(a,GC.STAT_EVENT,R=>{R.stat===bg.PROXY?G(Dt,`RPC '${e}' stream ${i} detected buffering proxy`):R.stat===bg.NOPROXY&&G(Dt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{w.wo()},0),w}}function qp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(t){return new oj(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e,n,r=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&G("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e,n,r,i,o,s,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new DA(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Qr(n.toString()),Qr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new Y($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Zj extends MA{constructor(e,n,r,i,o,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=lj(this.serializer,e),r=function(o){if(!("targetChange"in o))return oe.min();const s=o.targetChange;return s.targetIds&&s.targetIds.length?oe.min():s.readTime?gr(s.readTime):oe.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=jg(this.serializer),n.addTarget=function(o,s){let a;const u=s.target;if(a=Ng(u)?{documents:dj(o,u)}:{query:hj(o,u)._t},a.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){a.resumeToken=xA(o,s.resumeToken);const c=Mg(o,s.expectedCount);c!==null&&(a.expectedCount=c)}else if(s.snapshotVersion.compareTo(oe.min())>0){a.readTime=th(o,s.snapshotVersion.toTimestamp());const c=Mg(o,s.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=pj(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=jg(this.serializer),n.removeTarget=e,this.a_(n)}}class eF extends MA{constructor(e,n,r,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return xe(!!e.streamToken),this.lastStreamToken=e.streamToken,xe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){xe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=cj(e.writeResults,e.commitTime),r=gr(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=jg(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>uj(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tF extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new Y($.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Mo(e,Lg(n,r),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y($.UNKNOWN,o.toString())})}Lo(e,n,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Lo(e,Lg(n,r),i,s,a,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Y($.UNKNOWN,s.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class nF{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Qr(n),this.D_=!1):G("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rF{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(s=>{r.enqueueAndForget(async()=>{Bo(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=se(u);c.L_.add(4),await bu(c),c.q_.set("Unknown"),c.L_.delete(4),await If(c)}(this))})}),this.q_=new nF(r,i)}}async function If(t){if(Bo(t))for(const e of t.B_)await e(!0)}async function bu(t){for(const e of t.B_)await e(!1)}function LA(t,e){const n=se(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),z0(n)?B0(n):va(n).r_()&&U0(n,e))}function $0(t,e){const n=se(t),r=va(n);n.N_.delete(e),r.r_()&&VA(n,e),n.N_.size===0&&(r.r_()?r.o_():Bo(n)&&n.q_.set("Unknown"))}function U0(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}va(t).A_(e)}function VA(t,e){t.Q_.xe(e),va(t).R_(e)}function B0(t){t.Q_=new tj({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),va(t).start(),t.q_.v_()}function z0(t){return Bo(t)&&!va(t).n_()&&t.N_.size>0}function Bo(t){return se(t).L_.size===0}function jA(t){t.Q_=void 0}async function iF(t){t.q_.set("Online")}async function oF(t){t.N_.forEach((e,n)=>{U0(t,e)})}async function sF(t,e){jA(t),z0(t)?(t.q_.M_(e),B0(t)):t.q_.set("Unknown")}async function aF(t,e,n){if(t.q_.set("Online"),e instanceof SA&&e.state===2&&e.cause)try{await async function(i,o){const s=o.cause;for(const a of o.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,s),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await rh(t,r)}else if(e instanceof ed?t.Q_.Ke(e):e instanceof TA?t.Q_.He(e):t.Q_.We(e),!n.isEqual(oe.min()))try{const r=await OA(t.localStore);n.compareTo(r)>=0&&await function(o,s){const a=o.Q_.rt(s);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=o.N_.get(c);d&&o.N_.set(c,d.withResumeToken(u.resumeToken,s))}}),a.targetMismatches.forEach((u,c)=>{const d=o.N_.get(u);if(!d)return;o.N_.set(u,d.withResumeToken(bt.EMPTY_BYTE_STRING,d.snapshotVersion)),VA(o,u);const f=new yi(d.target,u,c,d.sequenceNumber);U0(o,f)}),o.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){G("RemoteStore","Failed to raise snapshot:",r),await rh(t,r)}}async function rh(t,e,n){if(!ga(e))throw e;t.L_.add(1),await bu(t),t.q_.set("Offline"),n||(n=()=>OA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await If(t)})}function FA(t,e){return e().catch(n=>rh(t,n,e))}async function Cf(t){const e=se(t),n=$i(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;lF(e);)try{const i=await Wj(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,uF(e,i)}catch(i){await rh(e,i)}$A(e)&&UA(e)}function lF(t){return Bo(t)&&t.O_.length<10}function uF(t,e){t.O_.push(e);const n=$i(t);n.r_()&&n.V_&&n.m_(e.mutations)}function $A(t){return Bo(t)&&!$i(t).n_()&&t.O_.length>0}function UA(t){$i(t).start()}async function cF(t){$i(t).p_()}async function dF(t){const e=$i(t);for(const n of t.O_)e.m_(n.mutations)}async function hF(t,e,n){const r=t.O_.shift(),i=D0.from(r,e,n);await FA(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Cf(t)}async function fF(t,e){e&&$i(t).V_&&await async function(r,i){if(function(s){return J9(s)&&s!==$.ABORTED}(i.code)){const o=r.O_.shift();$i(r).s_(),await FA(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Cf(r)}}(t,e),$A(t)&&UA(t)}async function IE(t,e){const n=se(t);n.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const r=Bo(n);n.L_.add(3),await bu(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await If(n)}async function pF(t,e){const n=se(t);e?(n.L_.delete(2),await If(n)):e||(n.L_.add(2),await bu(n),n.q_.set("Unknown"))}function va(t){return t.K_||(t.K_=function(n,r,i){const o=se(n);return o.w_(),new Zj(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:iF.bind(null,t),Ro:oF.bind(null,t),mo:sF.bind(null,t),d_:aF.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),z0(t)?B0(t):t.q_.set("Unknown")):(await t.K_.stop(),jA(t))})),t.K_}function $i(t){return t.U_||(t.U_=function(n,r,i){const o=se(n);return o.w_(),new eF(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:cF.bind(null,t),mo:fF.bind(null,t),f_:dF.bind(null,t),g_:hF.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Cf(t)):(await t.U_.stop(),t.O_.length>0&&(G("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new wo,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,a=new H0(e,n,s,i,o);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function W0(t,e){if(Qr("AsyncQueue",`${e}: ${t}`),ga(t))return new Y($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Z.comparator(n.key,r.key):(n,r)=>Z.comparator(n.key,r.key),this.keyedMap=rl(),this.sortedSet=new He(this.comparator)}static emptySet(e){return new Ps(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ps)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ps;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(){this.W_=new He(Z.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ee():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ia{constructor(e,n,r,i,o,s,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,o){const s=[];return n.forEach(a=>{s.push({type:0,doc:a})}),new ia(e,n,Ps.emptySet(n),s,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_f(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mF{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class gF{constructor(){this.queries=AE(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=se(n),o=i.queries;i.queries=AE(),o.forEach((s,a)=>{for(const u of a.j_)u.onError(r)})})(this,new Y($.ABORTED,"Firestore shutting down"))}}function AE(){return new Uo(t=>lA(t),_f)}async function yF(t,e){const n=se(t);let r=3;const i=e.query;let o=n.queries.get(i);o?!o.H_()&&e.J_()&&(r=2):(o=new mF,r=e.J_()?0:1);try{switch(r){case 0:o.z_=await n.onListen(i,!0);break;case 1:o.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(s){const a=W0(s,`Initialization of query '${ss(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,o),o.j_.push(e),e.Z_(n.onlineState),o.z_&&e.X_(o.z_)&&q0(n)}async function vF(t,e){const n=se(t),r=e.query;let i=3;const o=n.queries.get(r);if(o){const s=o.j_.indexOf(e);s>=0&&(o.j_.splice(s,1),o.j_.length===0?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function _F(t,e){const n=se(t);let r=!1;for(const i of e){const o=i.query,s=n.queries.get(o);if(s){for(const a of s.j_)a.X_(i)&&(r=!0);s.z_=i}}r&&q0(n)}function wF(t,e,n){const r=se(t),i=r.queries.get(e);if(i)for(const o of i.j_)o.onError(n);r.queries.delete(e)}function q0(t){t.Y_.forEach(e=>{e.next()})}var $g,bE;(bE=$g||($g={})).ea="default",bE.Cache="cache";class EF{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ia(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ia.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==$g.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e){this.key=e}}class zA{constructor(e){this.key=e}}class TF{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=fe(),this.mutatedKeys=fe(),this.Aa=uA(e),this.Ra=new Ps(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new CE,i=n?n.Ra:this.Ra;let o=n?n.mutatedKeys:this.mutatedKeys,s=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),v=wf(this.query,f)?f:null,w=!!m&&this.mutatedKeys.has(m.key),I=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let R=!1;m&&v?m.data.isEqual(v.data)?w!==I&&(r.track({type:3,doc:v}),R=!0):this.ga(m,v)||(r.track({type:2,doc:v}),R=!0,(u&&this.Aa(v,u)>0||c&&this.Aa(v,c)<0)&&(a=!0)):!m&&v?(r.track({type:0,doc:v}),R=!0):m&&!v&&(r.track({type:1,doc:m}),R=!0,(u||c)&&(a=!0)),R&&(v?(s=s.add(v),o=I?o.add(d):o.delete(d)):(s=s.delete(d),o=o.delete(d)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const d=this.query.limitType==="F"?s.last():s.first();s=s.delete(d.key),o=o.delete(d.key),r.track({type:1,doc:d})}return{Ra:s,fa:r,ns:a,mutatedKeys:o}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const s=e.fa.G_();s.sort((d,f)=>function(v,w){const I=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return I(v)-I(w)}(d.type,f.type)||this.Aa(d.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,s.length!==0||c?{snapshot:new ia(this.query,e.Ra,o,s,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new CE,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=fe(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new zA(r))}),this.da.forEach(r=>{e.has(r)||n.push(new BA(r))}),n}ba(e){this.Ta=e.Ts,this.da=fe();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ia.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class SF{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class xF{constructor(e){this.key=e,this.va=!1}}class IF{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new Uo(a=>lA(a),_f),this.Ma=new Map,this.xa=new Set,this.Oa=new He(Z.comparator),this.Na=new Map,this.La=new V0,this.Ba={},this.ka=new Map,this.qa=ra.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function CF(t,e,n=!0){const r=QA(t);let i;const o=r.Fa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await HA(r,e,n,!0),i}async function AF(t,e){const n=QA(t);await HA(n,e,!0,!1)}async function HA(t,e,n,r){const i=await qj(t.localStore,pr(e)),o=i.targetId,s=t.sharedClientState.addLocalQueryTarget(o,n);let a;return r&&(a=await bF(t,e,o,s==="current",i.resumeToken)),t.isPrimaryClient&&n&&LA(t.remoteStore,i),a}async function bF(t,e,n,r,i){t.Ka=(f,m,v)=>async function(I,R,S,E){let y=R.view.ma(S);y.ns&&(y=await TE(I.localStore,R.query,!1).then(({documents:T})=>R.view.ma(T,y)));const A=E&&E.targetChanges.get(R.targetId),D=E&&E.targetMismatches.get(R.targetId)!=null,M=R.view.applyChanges(y,I.isPrimaryClient,A,D);return kE(I,R.targetId,M.wa),M.snapshot}(t,f,m,v);const o=await TE(t.localStore,e,!0),s=new TF(e,o.Ts),a=s.ma(o.documents),u=Au.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=s.applyChanges(a,t.isPrimaryClient,u);kE(t,n,c.wa);const d=new SF(e,n,s);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function RF(t,e,n){const r=se(t),i=r.Fa.get(e),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter(s=>!_f(s,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Fg(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&$0(r.remoteStore,i.targetId),Ug(r,i.targetId)}).catch(ma)):(Ug(r,i.targetId),await Fg(r.localStore,i.targetId,!0))}async function kF(t,e){const n=se(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),$0(n.remoteStore,r.targetId))}async function PF(t,e,n){const r=jF(t);try{const i=await function(s,a){const u=se(s),c=ht.now(),d=a.reduce((v,w)=>v.add(w.key),fe());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",v=>{let w=Yr(),I=fe();return u.cs.getEntries(v,d).next(R=>{w=R,w.forEach((S,E)=>{E.isValidDocument()||(I=I.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(v,w)).next(R=>{f=R;const S=[];for(const E of a){const y=G9(E,f.get(E.key).overlayedDocument);y!=null&&S.push(new Qi(E.key,y,eA(y.value.mapValue),mr.exists(!0)))}return u.mutationQueue.addMutationBatch(v,c,S,a)}).next(R=>{m=R;const S=R.applyToLocalDocumentSet(f,I);return u.documentOverlayCache.saveOverlays(v,R.batchId,S)})}).then(()=>({batchId:m.batchId,changes:dA(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,a,u){let c=s.Ba[s.currentUser.toKey()];c||(c=new He(ve)),c=c.insert(a,u),s.Ba[s.currentUser.toKey()]=c}(r,i.batchId,n),await Ru(r,i.changes),await Cf(r.remoteStore)}catch(i){const o=W0(i,"Failed to persist write");n.reject(o)}}async function WA(t,e){const n=se(t);try{const r=await zj(n.localStore,e);e.targetChanges.forEach((i,o)=>{const s=n.Na.get(o);s&&(xe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.va=!0:i.modifiedDocuments.size>0?xe(s.va):i.removedDocuments.size>0&&(xe(s.va),s.va=!1))}),await Ru(n,r,e)}catch(r){await ma(r)}}function RE(t,e,n){const r=se(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((o,s)=>{const a=s.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(s,a){const u=se(s);u.onlineState=a;let c=!1;u.queries.forEach((d,f)=>{for(const m of f.j_)m.Z_(a)&&(c=!0)}),c&&q0(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function NF(t,e,n){const r=se(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),o=i&&i.key;if(o){let s=new He(Z.comparator);s=s.insert(o,jt.newNoDocument(o,oe.min()));const a=fe().add(o),u=new Sf(oe.min(),new Map,new He(ve),s,a);await WA(r,u),r.Oa=r.Oa.remove(o),r.Na.delete(e),G0(r)}else await Fg(r.localStore,e,!1).then(()=>Ug(r,e,n)).catch(ma)}async function OF(t,e){const n=se(t),r=e.batch.batchId;try{const i=await Bj(n.localStore,e);GA(n,r,null),qA(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ru(n,i)}catch(i){await ma(i)}}async function DF(t,e,n){const r=se(t);try{const i=await function(s,a){const u=se(s);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(xe(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);GA(r,e,n),qA(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ru(r,i)}catch(i){await ma(i)}}function qA(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function GA(t,e,n){const r=se(t);let i=r.Ba[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Ug(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||KA(t,r)})}function KA(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&($0(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),G0(t))}function kE(t,e,n){for(const r of n)r instanceof BA?(t.La.addReference(r.key,e),MF(t,r)):r instanceof zA?(G("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||KA(t,r.key)):ee()}function MF(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(G("SyncEngine","New document in limbo: "+n),t.xa.add(r),G0(t))}function G0(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new Z(Me.fromString(e)),r=t.qa.next();t.Na.set(r,new xF(n)),t.Oa=t.Oa.insert(n,r),LA(t.remoteStore,new yi(pr(N0(n.path)),r,"TargetPurposeLimboResolution",gf.oe))}}async function Ru(t,e,n){const r=se(t),i=[],o=[],s=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{s.push(r.Ka(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=F0.Wi(u.targetId,c);o.push(f)}}))}),await Promise.all(s),r.Ca.d_(i),await async function(u,c){const d=se(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>F.forEach(c,m=>F.forEach(m.$i,v=>d.persistence.referenceDelegate.addReference(f,m.targetId,v)).next(()=>F.forEach(m.Ui,v=>d.persistence.referenceDelegate.removeReference(f,m.targetId,v)))))}catch(f){if(!ga(f))throw f;G("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const v=d.os.get(m),w=v.snapshotVersion,I=v.withLastLimboFreeSnapshotVersion(w);d.os=d.os.insert(m,I)}}}(r.localStore,o))}async function LF(t,e){const n=se(t);if(!n.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const r=await NA(n.localStore,e);n.currentUser=e,function(o,s){o.ka.forEach(a=>{a.forEach(u=>{u.reject(new Y($.CANCELLED,s))})}),o.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ru(n,r.hs)}}function VF(t,e){const n=se(t),r=n.Na.get(e);if(r&&r.va)return fe().add(r.key);{let i=fe();const o=n.Ma.get(e);if(!o)return i;for(const s of o){const a=n.Fa.get(s);i=i.unionWith(a.view.Va)}return i}}function QA(t){const e=se(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=WA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=VF.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=NF.bind(null,e),e.Ca.d_=_F.bind(null,e.eventManager),e.Ca.$a=wF.bind(null,e.eventManager),e}function jF(t){const e=se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=OF.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=DF.bind(null,e),e}class ih{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=xf(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return Uj(this.persistence,new Fj,e.initialUser,this.serializer)}Ga(e){return new PA(j0.Zr,this.serializer)}Wa(e){return new Kj}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ih.provider={build:()=>new ih};class FF extends ih{constructor(e){super(),this.cacheSizeBytes=e}ja(e,n){xe(this.persistence.referenceDelegate instanceof nh);const r=this.persistence.referenceDelegate.garbageCollector;return new xj(r,e.asyncQueue,n)}Ga(e){const n=this.cacheSizeBytes!==void 0?Xt.withCacheSize(this.cacheSizeBytes):Xt.DEFAULT;return new PA(r=>nh.Zr(r,n),this.serializer)}}class Bg{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>RE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=LF.bind(null,this.syncEngine),await pF(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new gF}()}createDatastore(e){const n=xf(e.databaseInfo.databaseId),r=function(o){return new Jj(o)}(e.databaseInfo);return function(o,s,a,u){return new tF(o,s,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,o,s,a){return new rF(r,i,o,s,a)}(this.localStore,this.datastore,e.asyncQueue,n=>RE(this.syncEngine,n,0),function(){return xE.D()?new xE:new Qj}())}createSyncEngine(e,n){return function(i,o,s,a,u,c,d){const f=new IF(i,o,s,a,u,c);return d&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const o=se(i);G("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await bu(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Bg.provider={build:()=>new Bg};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $F{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Qr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UF{constructor(e,n,r,i,o){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Lt.UNAUTHENTICATED,this.clientId=XC.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async s=>{G("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(G("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wo;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=W0(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Gp(t,e){t.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await NA(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function PE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await BF(t);G("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>IE(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>IE(e.remoteStore,i)),t._onlineComponents=e}async function BF(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await Gp(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===$.FAILED_PRECONDITION||i.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Zs("Error using user provided cache. Falling back to memory cache: "+n),await Gp(t,new ih)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await Gp(t,new FF(void 0));return t._offlineComponents}async function YA(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await PE(t,t._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await PE(t,new Bg))),t._onlineComponents}function zF(t){return YA(t).then(e=>e.syncEngine)}async function NE(t){const e=await YA(t),n=e.eventManager;return n.onListen=CF.bind(null,e.syncEngine),n.onUnlisten=RF.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=AF.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=kF.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JA(t,e,n){if(!n)throw new Y($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function HF(t,e,n,r){if(e===!0&&r===!0)throw new Y($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function DE(t){if(!Z.isDocumentKey(t))throw new Y($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ME(t){if(Z.isDocumentKey(t))throw new Y($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Af(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function Eo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Af(t);throw new Y($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}HF("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=XA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new Y($.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new Y($.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new Y($.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class bf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new LE({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new LE(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Z6;switch(r.type){case"firstParty":return new r9(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=OE.get(n);r&&(G("ComponentProvider","Removing Datastore"),OE.delete(n),r.terminate())}(this),Promise.resolve()}}function WF(t,e,n,r={}){var i;const o=(t=Eo(t,bf))._getSettings(),s=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&Zs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=Lt.MOCK_USER;else{a=jC(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new Y($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Lt(c)}t._authCredentials=new e9(new YC(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new zo(this.firestore,e,this._query)}}class sn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ki(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new sn(this.firestore,e,this._key)}}class ki extends zo{constructor(e,n,r){super(e,n,N0(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new sn(this.firestore,null,new Z(e))}withConverter(e){return new ki(this.firestore,e,this._path)}}function oa(t,e,...n){if(t=et(t),JA("collection","path",e),t instanceof bf){const r=Me.fromString(e,...n);return ME(r),new ki(t,null,r)}{if(!(t instanceof sn||t instanceof ki))throw new Y($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Me.fromString(e,...n));return ME(r),new ki(t.firestore,null,r)}}function zg(t,e,...n){if(t=et(t),arguments.length===1&&(e=XC.newId()),JA("doc","path",e),t instanceof bf){const r=Me.fromString(e,...n);return DE(r),new sn(t,null,new Z(r))}{if(!(t instanceof sn||t instanceof ki))throw new Y($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Me.fromString(e,...n));return DE(r),new sn(t.firestore,t instanceof ki?t.converter:null,new Z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new DA(this,"async_queue_retry"),this.Vu=()=>{const r=qp();r&&G("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=qp();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=qp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new wo;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ga(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(s){let a=s.message||"";return s.stack&&(a=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),a}(r);throw Qr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=H0.createAndSchedule(this,e,n,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&ee()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function jE(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const o of r)if(o in i&&typeof i[o]=="function")return!0;return!1}(t,["next","error","complete"])}class uu extends bf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new VE,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new VE(e),this._firestoreClient=void 0,await e}}}function qF(t,e){const n=mf(),r="(default)",i=pf(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=MC("firestore");o&&WF(i,...o)}return i}function ZA(t){if(t._terminated)throw new Y($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||GF(t),t._firestoreClient}function GF(t){var e,n,r;const i=t._freezeSettings(),o=function(a,u,c,d){return new v9(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,XA(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new UF(t._authCredentials,t._appCheckCredentials,t._queue,o,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e){this._byteString=e}static fromBase64String(e){try{return new sa(bt.fromBase64String(e))}catch(n){throw new Y($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new sa(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new It(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KF=/^__.*__$/;class QF{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Qi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Cu(e,this.data,n,this.fieldTransforms)}}class eb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Qi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function tb(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class Y0{constructor(e,n,r,i,o,s){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Y0(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return oh(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(tb(this.Cu)&&KF.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class YF{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||xf(e)}Qu(e,n,r,i=!1){return new Y0({Cu:e,methodName:n,qu:r,path:It.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function X0(t){const e=t._freezeSettings(),n=xf(t._databaseId);return new YF(t._databaseId,!!e.ignoreUndefinedProperties,n)}function XF(t,e,n,r,i,o={}){const s=t.Qu(o.merge||o.mergeFields?2:0,e,n,i);Z0("Data must be an object, but it was:",s,r);const a=nb(r,s);let u,c;if(o.merge)u=new gn(s.fieldMask),c=s.fieldTransforms;else if(o.mergeFields){const d=[];for(const f of o.mergeFields){const m=Hg(e,f,n);if(!s.contains(m))throw new Y($.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);ib(d,m)||d.push(m)}u=new gn(d),c=s.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=s.fieldTransforms;return new QF(new Zt(a),u,c)}class Pf extends kf{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Pf}}class J0 extends kf{_toFieldTransform(e){return new z9(e.path,new su)}isEqual(e){return e instanceof J0}}function JF(t,e,n,r){const i=t.Qu(1,e,n);Z0("Data must be an object, but it was:",i,r);const o=[],s=Zt.empty();Ki(r,(u,c)=>{const d=ev(e,u,n);c=et(c);const f=i.Nu(d);if(c instanceof Pf)o.push(d);else{const m=ku(c,f);m!=null&&(o.push(d),s.set(d,m))}});const a=new gn(o);return new eb(s,a,i.fieldTransforms)}function ZF(t,e,n,r,i,o){const s=t.Qu(1,e,n),a=[Hg(e,r,n)],u=[i];if(o.length%2!=0)throw new Y($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<o.length;m+=2)a.push(Hg(e,o[m])),u.push(o[m+1]);const c=[],d=Zt.empty();for(let m=a.length-1;m>=0;--m)if(!ib(c,a[m])){const v=a[m];let w=u[m];w=et(w);const I=s.Nu(v);if(w instanceof Pf)c.push(v);else{const R=ku(w,I);R!=null&&(c.push(v),d.set(v,R))}}const f=new gn(c);return new eb(d,f,s.fieldTransforms)}function e$(t,e,n,r=!1){return ku(n,t.Qu(r?4:3,e))}function ku(t,e){if(rb(t=et(t)))return Z0("Unsupported field value:",e,t),nb(t,e);if(t instanceof kf)return function(r,i){if(!tb(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const o=[];let s=0;for(const a of r){let u=ku(a,i.Lu(s));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),s++}return{arrayValue:{values:o}}}(t,e)}return function(r,i){if((r=et(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return $9(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ht.fromDate(r);return{timestampValue:th(i.serializer,o)}}if(r instanceof ht){const o=new ht(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:th(i.serializer,o)}}if(r instanceof K0)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof sa)return{bytesValue:xA(i.serializer,r._byteString)};if(r instanceof sn){const o=i.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw i.Bu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:L0(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Q0)return function(s,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:s.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return O0(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Af(r)}`)}(t,e)}function nb(t,e){const n={};return JC(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ki(t,(r,i)=>{const o=ku(i,e.Mu(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function rb(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ht||t instanceof K0||t instanceof sa||t instanceof sn||t instanceof kf||t instanceof Q0)}function Z0(t,e,n){if(!rb(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Af(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Hg(t,e,n){if((e=et(e))instanceof Rf)return e._internalPath;if(typeof e=="string")return ev(t,e);throw oh("Field path arguments must be of type string or ",t,!1,void 0,n)}const t$=new RegExp("[~\\*/\\[\\]]");function ev(t,e,n){if(e.search(t$)>=0)throw oh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Rf(...e.split("."))._internalPath}catch{throw oh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function oh(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(o||s)&&(u+=" (found",o&&(u+=` in field ${r}`),s&&(u+=` in document ${i}`),u+=")"),new Y($.INVALID_ARGUMENT,a+t+u)}function ib(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new sn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new n$(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(tv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class n$ extends ob{data(){return super.data()}}function tv(t,e){return typeof e=="string"?ev(t,e):e instanceof Rf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r$(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class nv{}class sb extends nv{}function Wg(t,e,...n){let r=[];e instanceof nv&&r.push(e),r=r.concat(n),function(o){const s=o.filter(u=>u instanceof iv).length,a=o.filter(u=>u instanceof rv).length;if(s>1||s>0&&a>0)throw new Y($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class rv extends sb{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new rv(e,n,r)}_apply(e){const n=this._parse(e);return ab(e._query,n),new zo(e.firestore,e.converter,Og(e._query,n))}_parse(e){const n=X0(e.firestore);return function(o,s,a,u,c,d,f){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new Y($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){$E(f,d);const v=[];for(const w of f)v.push(FE(u,o,w));m={arrayValue:{values:v}}}else m=FE(u,o,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||$E(f,d),m=e$(a,s,f,d==="in"||d==="not-in");return lt.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class iv extends nv{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new iv(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:er.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,o){let s=i;const a=o.getFlattenedFilters();for(const u of a)ab(s,u),s=Og(s,u)}(e._query,n),new zo(e.firestore,e.converter,Og(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ov extends sb{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new ov(e,n)}_apply(e){const n=function(i,o,s){if(i.startAt!==null)throw new Y($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new Y($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ou(o,s)}(e._query,this._field,this._direction);return new zo(e.firestore,e.converter,function(i,o){const s=i.explicitOrderBy.concat([o]);return new ya(i.path,i.collectionGroup,s,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function qg(t,e="asc"){const n=e,r=tv("orderBy",t);return ov._create(r,n)}function FE(t,e,n){if(typeof(n=et(n))=="string"){if(n==="")throw new Y($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!aA(e)&&n.indexOf("/")!==-1)throw new Y($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Me.fromString(n));if(!Z.isDocumentKey(r))throw new Y($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return rE(t,new Z(r))}if(n instanceof sn)return rE(t,n._key);throw new Y($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Af(n)}.`)}function $E(t,e){if(!Array.isArray(t)||t.length===0)throw new Y($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ab(t,e){const n=function(i,o){for(const s of i)for(const a of s.getFlattenedFilters())if(o.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Y($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class i${convertValue(e,n="none"){switch(Fi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ji(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ee()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ki(e,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertVectorValue(e){var n,r,i;const o=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(s=>Je(s.doubleValue));return new Q0(o)}convertGeoPoint(e){return new K0(Je(e.latitude),Je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=vf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(nu(e));default:return null}}convertTimestamp(e){const n=Vi(e);return new ht(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Me.fromString(e);xe(kA(r));const i=new ru(r.get(1),r.get(3)),o=new Z(r.popFirst(5));return i.isEqual(n)||Qr(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o$(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lb extends ob{constructor(e,n,r,i,o,s){super(e,n,r,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new td(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(tv("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class td extends lb{data(e={}){return super.data(e)}}class s${constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ol(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new td(this._firestore,this._userDataWriter,r.key,r,new ol(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(a=>{const u=new td(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ol(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>o||a.type!==3).map(a=>{const u=new td(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ol(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=s.indexOf(a.doc.key),s=s.delete(a.doc.key)),a.type!==1&&(s=s.add(a.doc),d=s.indexOf(a.doc.key)),{type:a$(a.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function a$(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}class ub extends i${constructor(e){super(),this.firestore=e}convertBytes(e){return new sa(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new sn(this.firestore,null,n)}}function UE(t,e,n,...r){t=Eo(t,sn);const i=Eo(t.firestore,uu),o=X0(i);let s;return s=typeof(e=et(e))=="string"||e instanceof Rf?ZF(o,"updateDoc",t._key,e,n,r):JF(o,"updateDoc",t._key,e),cb(i,[s.toMutation(t._key,mr.exists(!0))])}function Gg(t,e){const n=Eo(t.firestore,uu),r=zg(t),i=o$(t.converter,e);return cb(n,[XF(X0(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,mr.exists(!1))]).then(()=>r)}function Kg(t,...e){var n,r,i;t=et(t);let o={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||jE(e[s])||(o=e[s],s++);const a={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(jE(e[s])){const f=e[s];e[s]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[s+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[s+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,d;if(t instanceof sn)c=Eo(t.firestore,uu),d=N0(t._key.path),u={next:f=>{e[s]&&e[s](l$(c,t,f))},error:e[s+1],complete:e[s+2]};else{const f=Eo(t,zo);c=Eo(f.firestore,uu),d=f._query;const m=new ub(c);u={next:v=>{e[s]&&e[s](new s$(c,m,f,v))},error:e[s+1],complete:e[s+2]},r$(t._query)}return function(m,v,w,I){const R=new $F(I),S=new EF(v,R,w);return m.asyncQueue.enqueueAndForget(async()=>yF(await NE(m),S)),()=>{R.Za(),m.asyncQueue.enqueueAndForget(async()=>vF(await NE(m),S))}}(ZA(c),d,a,u)}function cb(t,e){return function(r,i){const o=new wo;return r.asyncQueue.enqueueAndForget(async()=>PF(await zF(r),i,o)),o.promise}(ZA(t),e)}function l$(t,e,n){const r=n.docs.get(e._key),i=new ub(t);return new lb(t,i,e._key,r,new ol(n.hasPendingWrites,n.fromCache),e.converter)}function Qg(){return new J0("serverTimestamp")}(function(e,n=!0){(function(i){pa=i})($o),No(new Mi("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),a=new uu(new t9(r.getProvider("auth-internal")),new o9(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new Y($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ru(c.options.projectId,d)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),a._setSettings(o),a},"PUBLIC").setMultipleInstances(!0)),fr(Xw,"4.7.4",e),fr(Xw,"4.7.4","esm2017")})();function sv(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function db(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u$=db,hb=new xu("auth","Firebase",db());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh=new I0("@firebase/auth");function c$(t,...e){sh.logLevel<=he.WARN&&sh.warn(`Auth (${$o}): ${t}`,...e)}function nd(t,...e){sh.logLevel<=he.ERROR&&sh.error(`Auth (${$o}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(t,...e){throw lv(t,...e)}function Jn(t,...e){return lv(t,...e)}function av(t,e,n){const r=Object.assign(Object.assign({},u$()),{[e]:n});return new xu("auth","Firebase",r).create(e,{appName:t.name})}function To(t){return av(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function d$(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&wr(t,"argument-error"),av(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function lv(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return hb.create(t,...e)}function ne(t,e,...n){if(!t)throw lv(e,...n)}function Lr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw nd(e),new Error(e)}function Xr(t,e){t||Lr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function h$(){return BE()==="http:"||BE()==="https:"}function BE(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f$(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(h$()||kV()||"connection"in navigator)?navigator.onLine:!0}function p$(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xr(n>e,"Short delay should be less than long delay!"),this.isMobile=AV()||PV()}get(){return f$()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uv(t,e){Xr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Lr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Lr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Lr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m$={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g$=new Pu(3e4,6e4);function cv(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _a(t,e,n,r,i={}){return pb(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=Iu(Object.assign({key:t.config.apiKey},s)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},o);return RV()||(c.referrerPolicy="no-referrer"),fb.fetch()(mb(t,t.config.apiHost,n,a),c)})}async function pb(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},m$),e);try{const i=new v$(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Cc(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Cc(t,"credential-already-in-use",s);if(u==="EMAIL_EXISTS")throw Cc(t,"email-already-in-use",s);if(u==="USER_DISABLED")throw Cc(t,"user-disabled",s);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw av(t,d,c);wr(t,d)}}catch(i){if(i instanceof Tr)throw i;wr(t,"network-request-failed",{message:String(i)})}}async function y$(t,e,n,r,i={}){const o=await _a(t,e,n,r,i);return"mfaPendingCredential"in o&&wr(t,"multi-factor-auth-required",{_serverResponse:o}),o}function mb(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?uv(t.config,i):`${t.config.apiScheme}://${i}`}class v${constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Jn(this.auth,"network-request-failed")),g$.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Cc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Jn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _$(t,e){return _a(t,"POST","/v1/accounts:delete",e)}async function gb(t,e){return _a(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function w$(t,e=!1){const n=et(t),r=await n.getIdToken(e),i=dv(r);ne(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Tl(Kp(i.auth_time)),issuedAtTime:Tl(Kp(i.iat)),expirationTime:Tl(Kp(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Kp(t){return Number(t)*1e3}function dv(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return nd("JWT malformed, contained fewer than 3 sections"),null;try{const i=OC(n);return i?JSON.parse(i):(nd("Failed to decode base64 JWT payload"),null)}catch(i){return nd("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function zE(t){const e=dv(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cu(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Tr&&E$(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function E$({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T${constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tl(this.lastLoginAt),this.creationTime=Tl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ah(t){var e;const n=t.auth,r=await t.getIdToken(),i=await cu(t,gb(n,{idToken:r}));ne(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?yb(o.providerUserInfo):[],a=x$(t.providerData,s),u=t.isAnonymous,c=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Xg(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function S$(t){const e=et(t);await ah(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function x$(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function yb(t){return t.map(e=>{var{providerId:n}=e,r=sv(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I$(t,e){const n=await pb(t,{},async()=>{const r=Iu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=mb(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",fb.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function C$(t,e){return _a(t,"POST","/v2/accounts:revokeToken",cv(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const n=zE(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await I$(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Ns;return r&&(ne(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(ne(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(ne(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ns,this.toJSON())}_performRefresh(){return Lr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Vr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=sv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new T$(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Xg(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await cu(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return w$(this,e)}reload(){return S$(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Vr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ah(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Mr(this.auth.app))return Promise.reject(To(this.auth));const e=await this.getIdToken();return await cu(this,_$(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,u,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,w=(s=n.photoURL)!==null&&s!==void 0?s:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,S=(c=n.createdAt)!==null&&c!==void 0?c:void 0,E=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:y,emailVerified:A,isAnonymous:D,providerData:M,stsTokenManager:T}=n;ne(y&&T,e,"internal-error");const x=Ns.fromJSON(this.name,T);ne(typeof y=="string",e,"internal-error"),ii(f,e.name),ii(m,e.name),ne(typeof A=="boolean",e,"internal-error"),ne(typeof D=="boolean",e,"internal-error"),ii(v,e.name),ii(w,e.name),ii(I,e.name),ii(R,e.name),ii(S,e.name),ii(E,e.name);const b=new Vr({uid:y,auth:e,email:m,emailVerified:A,displayName:f,isAnonymous:D,photoURL:w,phoneNumber:v,tenantId:I,stsTokenManager:x,createdAt:S,lastLoginAt:E});return M&&Array.isArray(M)&&(b.providerData=M.map(p=>Object.assign({},p))),R&&(b._redirectEventId=R),b}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ns;i.updateFromServerResponse(n);const o=new Vr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ah(o),o}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ne(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?yb(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new Ns;a.updateFromIdToken(r);const u=new Vr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:s}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Xg(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE=new Map;function jr(t){Xr(t instanceof Function,"Expected a class definition");let e=HE.get(t);return e?(Xr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,HE.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}vb.type="NONE";const WE=vb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(t,e,n){return`firebase:${t}:${e}:${n}`}class Os{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=rd(this.userKey,i.apiKey,o),this.fullPersistenceKey=rd("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Os(jr(WE),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let o=i[0]||jr(WE);const s=rd(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(s);if(d){const f=Vr._fromJSON(e,d);c!==o&&(a=f),o=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new Os(o,e,r):(o=u[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==o)try{await c._remove(s)}catch{}})),new Os(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Tb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_b(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xb(e))return"Blackberry";if(Ib(e))return"Webos";if(wb(e))return"Safari";if((e.includes("chrome/")||Eb(e))&&!e.includes("edge/"))return"Chrome";if(Sb(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _b(t=Ut()){return/firefox\//i.test(t)}function wb(t=Ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Eb(t=Ut()){return/crios\//i.test(t)}function Tb(t=Ut()){return/iemobile/i.test(t)}function Sb(t=Ut()){return/android/i.test(t)}function xb(t=Ut()){return/blackberry/i.test(t)}function Ib(t=Ut()){return/webos/i.test(t)}function hv(t=Ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function A$(t=Ut()){var e;return hv(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function b$(){return NV()&&document.documentMode===10}function Cb(t=Ut()){return hv(t)||Sb(t)||Ib(t)||xb(t)||/windows phone/i.test(t)||Tb(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ab(t,e=[]){let n;switch(t){case"Browser":n=qE(Ut());break;case"Worker":n=`${qE(Ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$o}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R${constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const u=e(o);s(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k$(t,e={}){return _a(t,"GET","/v2/passwordPolicy",cv(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P$=6;class N${constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:P$,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsUppercaseLetter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(s=u.containsNumericCharacter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O${constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new GE(this),this.idTokenSubscription=new GE(this),this.beforeStateQueue=new R$(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=jr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Os.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await gb(this,{idToken:e}),r=await Vr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Mr(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!s||s===a)&&(u!=null&&u.user)&&(i=u.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ah(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=p$()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Mr(this.app))return Promise.reject(To(this));const n=e?et(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Mr(this.app)?Promise.reject(To(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Mr(this.app)?Promise.reject(To(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(jr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await k$(this),n=new N$(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xu("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await C$(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&jr(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await Os.create(this,[jr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{s=!0,u()}}else{const u=e.addObserver(n);return()=>{s=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ab(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&c$(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Nf(t){return et(t)}class GE{constructor(e){this.auth=e,this.observer=null,this.addObserver=$V(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fv={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function D$(t){fv=t}function M$(t){return fv.loadJS(t)}function L$(){return fv.gapiScript}function V$(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j$(t,e){const n=pf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Xd(o,e??{}))return i;wr(i,"already-initialized")}return n.initialize({options:e})}function F$(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(jr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function $$(t,e,n){const r=Nf(t);ne(r._canInitEmulator,r,"emulator-config-failed"),ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=bb(e),{host:s,port:a}=U$(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),B$()}function bb(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function U$(t){const e=bb(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:KE(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:KE(s)}}}function KE(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function B$(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Lr("not implemented")}_getIdTokenResponse(e){return Lr("not implemented")}_linkToIdToken(e,n){return Lr("not implemented")}_getReauthenticationResolver(e){return Lr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ds(t,e){return y$(t,"POST","/v1/accounts:signInWithIdp",cv(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z$="http://localhost";class Do extends Rb{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Do(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=sv(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new Do(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return Ds(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ds(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ds(e,n)}buildRequest(){const e={requestUri:z$,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Iu(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu extends pv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends Nu{constructor(){super("facebook.com")}static credential(e){return Do._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ci.credential(e.oauthAccessToken)}catch{return null}}}ci.FACEBOOK_SIGN_IN_METHOD="facebook.com";ci.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends Nu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Do._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Nr.credential(n,r)}catch{return null}}}Nr.GOOGLE_SIGN_IN_METHOD="google.com";Nr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends Nu{constructor(){super("github.com")}static credential(e){return Do._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return di.credential(e.oauthAccessToken)}catch{return null}}}di.GITHUB_SIGN_IN_METHOD="github.com";di.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends Nu{constructor(){super("twitter.com")}static credential(e,n){return Do._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return hi.credential(n,r)}catch{return null}}}hi.TWITTER_SIGN_IN_METHOD="twitter.com";hi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await Vr._fromIdTokenResponse(e,r,i),s=QE(r);return new aa({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=QE(r);return new aa({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function QE(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh extends Tr{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,lh.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new lh(e,n,r,i)}}function kb(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?lh._fromErrorAndOperation(t,o,e,r):o})}async function H$(t,e,n=!1){const r=await cu(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return aa._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W$(t,e,n=!1){const{auth:r}=t;if(Mr(r.app))return Promise.reject(To(r));const i="reauthenticate";try{const o=await cu(t,kb(r,i,e,t),n);ne(o.idToken,r,"internal-error");const s=dv(o.idToken);ne(s,r,"internal-error");const{sub:a}=s;return ne(t.uid===a,r,"user-mismatch"),aa._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&wr(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q$(t,e,n=!1){if(Mr(t.app))return Promise.reject(To(t));const r="signIn",i=await kb(t,r,e),o=await aa._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}function G$(t,e,n,r){return et(t).onIdTokenChanged(e,n,r)}function K$(t,e,n){return et(t).beforeAuthStateChanged(e,n)}function Q$(t,e,n,r){return et(t).onAuthStateChanged(e,n,r)}const uh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(uh,"1"),this.storage.removeItem(uh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y$=1e3,X$=10;class Nb extends Pb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Cb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,u)=>{this.notifyListeners(s,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);b$()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,X$):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Y$)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nb.type="LOCAL";const J$=Nb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob extends Pb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ob.type="SESSION";const Db=Ob;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z$(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Of(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async c=>c(n.origin,o)),u=await Z$(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Of.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eU{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,u)=>{const c=mv("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(d),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(){return window}function tU(t){yr().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mb(){return typeof yr().WorkerGlobalScope<"u"&&typeof yr().importScripts=="function"}async function nU(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rU(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function iU(){return Mb()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb="firebaseLocalStorageDb",oU=1,ch="firebaseLocalStorage",Vb="fbase_key";class Ou{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Df(t,e){return t.transaction([ch],e?"readwrite":"readonly").objectStore(ch)}function sU(){const t=indexedDB.deleteDatabase(Lb);return new Ou(t).toPromise()}function Jg(){const t=indexedDB.open(Lb,oU);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ch,{keyPath:Vb})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ch)?e(r):(r.close(),await sU(),e(await Jg()))})})}async function YE(t,e,n){const r=Df(t,!0).put({[Vb]:e,value:n});return new Ou(r).toPromise()}async function aU(t,e){const n=Df(t,!1).get(e),r=await new Ou(n).toPromise();return r===void 0?null:r.value}function XE(t,e){const n=Df(t,!0).delete(e);return new Ou(n).toPromise()}const lU=800,uU=3;class jb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jg(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>uU)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Of._getInstance(iU()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await nU(),!this.activeServiceWorker)return;this.sender=new eU(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rU()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jg();return await YE(e,uh,"1"),await XE(e,uh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>YE(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>aU(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>XE(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Df(i,!1).getAll();return new Ou(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lU)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jb.type="LOCAL";const cU=jb;new Pu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fb(t,e){return e?jr(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv extends Rb{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ds(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ds(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ds(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dU(t){return q$(t.auth,new gv(t),t.bypassAuthState)}function hU(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),W$(n,new gv(t),t.bypassAuthState)}async function fU(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),H$(n,new gv(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dU;case"linkViaPopup":case"linkViaRedirect":return fU;case"reauthViaPopup":case"reauthViaRedirect":return hU;default:wr(this.auth,"internal-error")}}resolve(e){Xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pU=new Pu(2e3,1e4);async function mU(t,e,n){if(Mr(t.app))return Promise.reject(Jn(t,"operation-not-supported-in-this-environment"));const r=Nf(t);d$(t,e,pv);const i=Fb(r,n);return new po(r,"signInViaPopup",e,i).executeNotNull()}class po extends $b{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,po.currentPopupAction&&po.currentPopupAction.cancel(),po.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){Xr(this.filter.length===1,"Popup operations only handle one event");const e=mv();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,po.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pU.get())};e()}}po.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gU="pendingRedirect",id=new Map;class yU extends $b{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=id.get(this.auth._key());if(!e){try{const r=await vU(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}id.set(this.auth._key(),e)}return this.bypassAuthState||id.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vU(t,e){const n=EU(e),r=wU(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function _U(t,e){id.set(t._key(),e)}function wU(t){return jr(t._redirectPersistence)}function EU(t){return rd(gU,t.config.apiKey,t.name)}async function TU(t,e,n=!1){if(Mr(t.app))return Promise.reject(To(t));const r=Nf(t),i=Fb(r,e),s=await new yU(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SU=10*60*1e3;class xU{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!IU(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ub(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Jn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=SU&&this.cachedEventUids.clear(),this.cachedEventUids.has(JE(e))}saveEventToCache(e){this.cachedEventUids.add(JE(e)),this.lastProcessedEventTime=Date.now()}}function JE(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ub({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function IU(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ub(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CU(t,e={}){return _a(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AU=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bU=/^https?/;async function RU(t){if(t.config.emulator)return;const{authorizedDomains:e}=await CU(t);for(const n of e)try{if(kU(n))return}catch{}wr(t,"unauthorized-domain")}function kU(t){const e=Yg(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!bU.test(n))return!1;if(AU.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PU=new Pu(3e4,6e4);function ZE(){const t=yr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function NU(t){return new Promise((e,n)=>{var r,i,o;function s(){ZE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ZE(),n(Jn(t,"network-request-failed"))},timeout:PU.get()})}if(!((i=(r=yr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=yr().gapi)===null||o===void 0)&&o.load)s();else{const a=V$("iframefcb");return yr()[a]=()=>{gapi.load?s():n(Jn(t,"network-request-failed"))},M$(`${L$()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw od=null,e})}let od=null;function OU(t){return od=od||NU(t),od}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DU=new Pu(5e3,15e3),MU="__/auth/iframe",LU="emulator/auth/iframe",VU={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jU=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FU(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?uv(e,LU):`https://${t.config.authDomain}/${MU}`,r={apiKey:e.apiKey,appName:t.name,v:$o},i=jU.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Iu(r).slice(1)}`}async function $U(t){const e=await OU(t),n=yr().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:FU(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:VU,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Jn(t,"network-request-failed"),a=yr().setTimeout(()=>{o(s)},DU.get());function u(){yr().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UU={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BU=500,zU=600,HU="_blank",WU="http://localhost";class eT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qU(t,e,n,r=BU,i=zU){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},UU),{width:r.toString(),height:i.toString(),top:o,left:s}),c=Ut().toLowerCase();n&&(a=Eb(c)?HU:n),_b(c)&&(e=e||WU,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[v,w])=>`${m}${v}=${w},`,"");if(A$(c)&&a!=="_self")return GU(e||"",a),new eT(null);const f=window.open(e||"",a,d);ne(f,t,"popup-blocked");try{f.focus()}catch{}return new eT(f)}function GU(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KU="__/auth/handler",QU="emulator/auth/handler",YU=encodeURIComponent("fac");async function tT(t,e,n,r,i,o){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:$o,eventId:i};if(e instanceof pv){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",FV(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))s[d]=f}if(e instanceof Nu){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(s.scopes=d.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await t._getAppCheckToken(),c=u?`#${YU}=${encodeURIComponent(u)}`:"";return`${XU(t)}?${Iu(a).slice(1)}${c}`}function XU({config:t}){return t.emulator?uv(t,QU):`https://${t.authDomain}/${KU}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp="webStorageSupport";class JU{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Db,this._completeRedirectFn=TU,this._overrideRedirectResult=_U}async _openPopup(e,n,r,i){var o;Xr((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await tT(e,n,r,Yg(),i);return qU(e,s,mv())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await tT(e,n,r,Yg(),i);return tU(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Xr(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await $U(e),r=new xU(e);return n.register("authEvent",i=>(ne(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Qp,{type:Qp},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Qp];s!==void 0&&n(!!s),wr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=RU(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Cb()||wb()||hv()}}const ZU=JU;var nT="@firebase/auth",rT="1.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eB{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tB(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nB(t){No(new Mi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;ne(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ab(t)},c=new O$(r,i,o,u);return F$(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),No(new Mi("auth-internal",e=>{const n=Nf(e.getProvider("auth").getImmediate());return(r=>new eB(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fr(nT,rT,tB(t)),fr(nT,rT,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rB=5*60,iB=VC("authIdTokenMaxAge")||rB;let iT=null;const oB=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>iB)return;const i=n==null?void 0:n.token;iT!==i&&(iT=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function sB(t=mf()){const e=pf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=j$(t,{popupRedirectResolver:ZU,persistence:[cU,J$,Db]}),r=VC("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=oB(o.toString());K$(n,s,()=>s(n.currentUser)),G$(n,a=>s(a))}}const i=DC("auth");return i&&$$(n,`http://${i}`),n}function aB(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}D$({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=Jn("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",aB().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nB("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb="firebasestorage.googleapis.com",zb="storageBucket",lB=2*60*1e3,uB=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends Tr{constructor(e,n,r=0){super(Yp(e),`Firebase Storage: ${n} (${Yp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Xe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Yp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ye;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ye||(Ye={}));function Yp(t){return"storage/"+t}function yv(){const t="An unknown error occurred, please check the error payload for server response.";return new Xe(Ye.UNKNOWN,t)}function cB(t){return new Xe(Ye.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function dB(t){return new Xe(Ye.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function hB(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Xe(Ye.UNAUTHENTICATED,t)}function fB(){return new Xe(Ye.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function pB(t){return new Xe(Ye.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function mB(){return new Xe(Ye.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function gB(){return new Xe(Ye.CANCELED,"User canceled the upload/download.")}function yB(t){return new Xe(Ye.INVALID_URL,"Invalid URL '"+t+"'.")}function vB(t){return new Xe(Ye.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function _B(){return new Xe(Ye.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+zb+"' property when initializing the app?")}function wB(){return new Xe(Ye.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function EB(){return new Xe(Ye.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function TB(t){return new Xe(Ye.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Zg(t){return new Xe(Ye.INVALID_ARGUMENT,t)}function Hb(){return new Xe(Ye.APP_DELETED,"The Firebase app was deleted.")}function SB(t){return new Xe(Ye.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Sl(t,e){return new Xe(Ye.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Wa(t){throw new Xe(Ye.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=yn.makeFromUrl(e,n)}catch{return new yn(e,"")}if(r.path==="")return r;throw vB(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(A){A.path.charAt(A.path.length-1)==="/"&&(A.path_=A.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+i+s,"i"),u={bucket:1,path:3};function c(A){A.path_=decodeURIComponent(A.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",v=new RegExp(`^https?://${f}/${d}/b/${i}/o${m}`,"i"),w={bucket:1,path:3},I=n===Bb?"(?:storage.googleapis.com|storage.cloud.google.com)":n,R="([^?#]*)",S=new RegExp(`^https?://${I}/${i}/${R}`,"i"),y=[{regex:a,indices:u,postModify:o},{regex:v,indices:w,postModify:c},{regex:S,indices:{bucket:1,path:2},postModify:c}];for(let A=0;A<y.length;A++){const D=y[A],M=D.regex.exec(e);if(M){const T=M[D.indices.bucket];let x=M[D.indices.path];x||(x=""),r=new yn(T,x),D.postModify(r);break}}if(r==null)throw yB(e);return r}}class xB{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IB(t,e,n){let r=1,i=null,o=null,s=!1,a=0;function u(){return a===2}let c=!1;function d(...R){c||(c=!0,e.apply(null,R))}function f(R){i=setTimeout(()=>{i=null,t(v,u())},R)}function m(){o&&clearTimeout(o)}function v(R,...S){if(c){m();return}if(R){m(),d.call(null,R,...S);return}if(u()||s){m(),d.call(null,R,...S);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,f(y)}let w=!1;function I(R){w||(w=!0,m(),!c&&(i!==null?(R||(a=2),clearTimeout(i),f(0)):R||(a=1)))}return f(0),o=setTimeout(()=>{s=!0,I(!0)},n),I}function CB(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AB(t){return t!==void 0}function bB(t){return typeof t=="object"&&!Array.isArray(t)}function vv(t){return typeof t=="string"||t instanceof String}function oT(t){return _v()&&t instanceof Blob}function _v(){return typeof Blob<"u"}function sT(t,e,n,r){if(r<e)throw Zg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Zg(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Wb(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var So;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(So||(So={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RB(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||i||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kB{constructor(e,n,r,i,o,s,a,u,c,d,f,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=s,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,w)=>{this.resolve_=v,this.reject_=w,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ac(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const s=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&o.addUploadProgressListener(s),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(s),this.pendingConnection_=null;const a=o.getErrorCode()===So.NO_ERROR,u=o.getStatus();if(!a||RB(u,this.additionalRetryCodes_)&&this.retry){const d=o.getErrorCode()===So.ABORT;r(!1,new Ac(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Ac(c,o))})},n=(r,i)=>{const o=this.resolve_,s=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());AB(u)?o(u):o()}catch(u){s(u)}else if(a!==null){const u=yv();u.serverResponse=a.getErrorText(),this.errorCallback_?s(this.errorCallback_(a,u)):s(u)}else if(i.canceled){const u=this.appDelete_?Hb():gB();s(u)}else{const u=mB();s(u)}};this.canceled_?n(!1,new Ac(!1,null,!0)):this.backoffId_=IB(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&CB(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ac{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function PB(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function NB(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function OB(t,e){e&&(t["X-Firebase-GMPID"]=e)}function DB(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function MB(t,e,n,r,i,o,s=!0){const a=Wb(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return OB(c,e),PB(c,n),NB(c,o),DB(c,r),new kB(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LB(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function VB(...t){const e=LB();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(_v())return new Blob(t);throw new Xe(Ye.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function jB(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FB(t){if(typeof atob>"u")throw TB("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Xp{constructor(e,n){this.data=e,this.contentType=n||null}}function qb(t,e){switch(t){case Kn.RAW:return new Xp(Gb(e));case Kn.BASE64:case Kn.BASE64URL:return new Xp(Kb(t,e));case Kn.DATA_URL:return new Xp(UB(e),BB(e))}throw yv()}function Gb(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const o=r,s=t.charCodeAt(++n);r=65536|(o&1023)<<10|s&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function $B(t){let e;try{e=decodeURIComponent(t)}catch{throw Sl(Kn.DATA_URL,"Malformed data URL.")}return Gb(e)}function Kb(t,e){switch(t){case Kn.BASE64:{const i=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(i||o)throw Sl(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Kn.BASE64URL:{const i=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(i||o)throw Sl(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=FB(e)}catch(i){throw i.message.includes("polyfill")?i:Sl(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Qb{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Sl(Kn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=zB(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function UB(t){const e=new Qb(t);return e.base64?Kb(Kn.BASE64,e.rest):$B(e.rest)}function BB(t){return new Qb(t).contentType}function zB(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n){let r=0,i="";oT(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(oT(this.data_)){const r=this.data_,i=jB(r,e,n);return i===null?null:new fi(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new fi(r,!0)}}static getBlob(...e){if(_v()){const n=e.map(r=>r instanceof fi?r.data_:r);return new fi(VB.apply(null,n))}else{const n=e.map(s=>vv(s)?qb(Kn.RAW,s).data:s.data_);let r=0;n.forEach(s=>{r+=s.byteLength});const i=new Uint8Array(r);let o=0;return n.forEach(s=>{for(let a=0;a<s.length;a++)i[o++]=s[a]}),new fi(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yb(t){let e;try{e=JSON.parse(t)}catch{return null}return bB(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HB(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function WB(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Xb(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qB(t,e){return e}class Ht{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||qB}}let bc=null;function GB(t){return!vv(t)||t.length<2?t:Xb(t)}function Jb(){if(bc)return bc;const t=[];t.push(new Ht("bucket")),t.push(new Ht("generation")),t.push(new Ht("metageneration")),t.push(new Ht("name","fullPath",!0));function e(o,s){return GB(s)}const n=new Ht("name");n.xform=e,t.push(n);function r(o,s){return s!==void 0?Number(s):s}const i=new Ht("size");return i.xform=r,t.push(i),t.push(new Ht("timeCreated")),t.push(new Ht("updated")),t.push(new Ht("md5Hash",null,!0)),t.push(new Ht("cacheControl",null,!0)),t.push(new Ht("contentDisposition",null,!0)),t.push(new Ht("contentEncoding",null,!0)),t.push(new Ht("contentLanguage",null,!0)),t.push(new Ht("contentType",null,!0)),t.push(new Ht("metadata","customMetadata",!0)),bc=t,bc}function KB(t,e){function n(){const r=t.bucket,i=t.fullPath,o=new yn(r,i);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function QB(t,e,n){const r={};r.type="file";const i=n.length;for(let o=0;o<i;o++){const s=n[o];r[s.local]=s.xform(r,e[s.server])}return KB(r,t),r}function Zb(t,e,n){const r=Yb(e);return r===null?null:QB(t,r,n)}function YB(t,e,n,r){const i=Yb(e);if(i===null||!vv(i.downloadTokens))return null;const o=i.downloadTokens;if(o.length===0)return null;const s=encodeURIComponent;return o.split(",").map(c=>{const d=t.bucket,f=t.fullPath,m="/b/"+s(d)+"/o/"+s(f),v=wv(m,n,r),w=Wb({alt:"media",token:c});return v+w})[0]}function XB(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const o=e[i];o.writable&&(n[o.server]=t[o.local])}return JSON.stringify(n)}class eR{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tR(t){if(!t)throw yv()}function JB(t,e){function n(r,i){const o=Zb(t,i,e);return tR(o!==null),o}return n}function ZB(t,e){function n(r,i){const o=Zb(t,i,e);return tR(o!==null),YB(o,i,t.host,t._protocol)}return n}function nR(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=fB():i=hB():n.getStatus()===402?i=dB(t.bucket):n.getStatus()===403?i=pB(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function ez(t){const e=nR(t);function n(r,i){let o=e(r,i);return r.getStatus()===404&&(o=cB(t.path)),o.serverResponse=i.serverResponse,o}return n}function tz(t,e,n){const r=e.fullServerUrl(),i=wv(r,t.host,t._protocol),o="GET",s=t.maxOperationRetryTime,a=new eR(i,o,ZB(t,n),s);return a.errorHandler=ez(e),a}function nz(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function rz(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=nz(null,e)),r}function iz(t,e,n,r,i){const o=e.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"};function a(){let y="";for(let A=0;A<2;A++)y=y+Math.random().toString().slice(2);return y}const u=a();s["Content-Type"]="multipart/related; boundary="+u;const c=rz(e,r,i),d=XB(c,n),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",v=fi.getBlob(f,r,m);if(v===null)throw wB();const w={name:c.fullPath},I=wv(o,t.host,t._protocol),R="POST",S=t.maxUploadRetryTime,E=new eR(I,R,JB(t,n),S);return E.urlParams=w,E.headers=s,E.body=v.uploadData(),E.errorHandler=nR(e),E}class oz{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=So.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=So.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=So.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Wa("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Wa("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Wa("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Wa("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Wa("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class sz extends oz{initXhr(){this.xhr_.responseType="text"}}function rR(){return new sz}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,n){this._service=e,n instanceof yn?this._location=n:this._location=yn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Mo(e,n)}get root(){const e=new yn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Xb(this._location.path)}get storage(){return this._service}get parent(){const e=HB(this._location.path);if(e===null)return null;const n=new yn(this._location.bucket,e);return new Mo(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw SB(e)}}function az(t,e,n){t._throwIfRoot("uploadBytes");const r=iz(t.storage,t._location,Jb(),new fi(e,!0),n);return t.storage.makeRequestWithTokens(r,rR).then(i=>({metadata:i,ref:t}))}function lz(t,e,n=Kn.RAW,r){t._throwIfRoot("uploadString");const i=qb(n,e),o=Object.assign({},r);return o.contentType==null&&i.contentType!=null&&(o.contentType=i.contentType),az(t,i.data,o)}function uz(t){t._throwIfRoot("getDownloadURL");const e=tz(t.storage,t._location,Jb());return t.storage.makeRequestWithTokens(e,rR).then(n=>{if(n===null)throw EB();return n})}function cz(t,e){const n=WB(t._location.path,e),r=new yn(t._location.bucket,n);return new Mo(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dz(t){return/^[A-Za-z]+:\/\//.test(t)}function hz(t,e){return new Mo(t,e)}function iR(t,e){if(t instanceof Ev){const n=t;if(n._bucket==null)throw _B();const r=new Mo(n,n._bucket);return e!=null?iR(r,e):r}else return e!==void 0?cz(t,e):t}function fz(t,e){if(e&&dz(e)){if(t instanceof Ev)return hz(t,e);throw Zg("To use ref(service, url), the first argument must be a Storage instance.")}else return iR(t,e)}function aT(t,e){const n=e==null?void 0:e[zb];return n==null?null:yn.makeFromBucketSpec(n,t)}function pz(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:jC(i,t.app.options.projectId))}class Ev{constructor(e,n,r,i,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=Bb,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=lB,this._maxUploadRetryTime=uB,this._requests=new Set,i!=null?this._bucket=yn.makeFromBucketSpec(i,this._host):this._bucket=aT(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=yn.makeFromBucketSpec(this._url,e):this._bucket=aT(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){sT("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){sT("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Mo(this,e)}_makeRequest(e,n,r,i,o=!0){if(this._deleted)return new xB(Hb());{const s=MB(e,this._appId,r,i,n,this._firebaseVersion,o);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const lT="@firebase/storage",uT="0.13.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR="storage";function cT(t,e,n,r){return t=et(t),lz(t,e,n,r)}function dT(t){return t=et(t),uz(t)}function hT(t,e){return t=et(t),fz(t,e)}function mz(t=mf(),e){t=et(t);const r=pf(t,oR).getImmediate({identifier:e}),i=MC("storage");return i&&gz(r,...i),r}function gz(t,e,n,r={}){pz(t,e,n,r)}function yz(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Ev(n,r,i,e,$o)}function vz(){No(new Mi(oR,yz,"PUBLIC").setMultipleInstances(!0)),fr(lT,uT,""),fr(lT,uT,"esm2017")}vz();const _z={apiKey:"AIzaSyCjeg3KjwF1xJzegpaeXb2ahh3a4cHe_60",authDomain:"drive-clone-21.firebaseapp.com",projectId:"drive-clone-21",storageBucket:"drive-clone-21.appspot.com",messagingSenderId:"1052188379381",appId:"1:1052188379381:web:d24193045e195a94859dbc"};U6().length?mf():UC(_z);const vi=qF(),sR=sB(),fT=mz(),wz=new Nr;function pT(){const t=An(),[e,n]=O.useState([]),[r,i]=O.useState([]);return O.useEffect(()=>{t(RC({folderId:null,folderName:null}))},[t]),O.useEffect(()=>Kg(Wg(oa(vi,"folder"),qg("timestamp","asc")),o=>n(o.docs)),[]),O.useEffect(()=>Kg(Wg(oa(vi,"post"),qg("timestamp","asc")),o=>i(o.docs)),[]),_.jsxs(Ez,{onClick:()=>t(Gr({modelBools:!1})),children:[_.jsxs(Tz,{children:[_.jsx("span",{children:"My Drive"}),_.jsx(VD,{})]}),_.jsxs(Sz,{children:[_.jsxs(xz,{children:[_.jsx(mT,{children:"Folders"}),_.jsx(gT,{children:e==null?void 0:e.map(o=>_.jsx(yV,{id:o.id,title:o==null?void 0:o.data().name},o.id))})]}),_.jsx(mT,{className:"mt-3",children:"Post"}),_.jsx(gT,{children:r==null?void 0:r.map(o=>{const s=o.data();return _.jsx(AC,{img:s.Image,id:o.id,title:s.photoTitle,uid:s.uid},o.id)})})]})]})}const Ez=q.div`
  flex-grow: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: 15px 30px;
`,Tz=q.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 13px;

  svg {
    margin-left: 10px;
    color: #5f6368;
  }

  span {
    font-family: Google Sans, Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 24px;
    color: #202124;
  }
`,Sz=q.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  flex-grow: 1;
  max-height: 100vh;
  margin-bottom: 30px;
`,mT=q.div`
  font-size: 14px;
  font-weight: 500;
  text-transform: capitalize;
  color: #5f6368;
`,gT=q.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: 20px 0;
`,xz=q.div`
  margin-top: 10px;
`;function Iz(){const t=Gt(H3),e=An();return _.jsxs(Cz,{bool:t,children:[_.jsxs(Jp,{onClick:()=>e(Gr({folderBool:!0})),children:[_.jsx(BD,{className:"icon"}),_.jsx("span",{children:"New folder"}),_.jsx(Zp,{children:"Alt+C then F"})]}),_.jsxs(Jp,{onClick:()=>e(Gr({photo:!0})),children:[_.jsx(lM,{className:"icon"}),_.jsx("span",{children:"File upload"}),_.jsx(Zp,{children:"Alt+C then U"})]}),_.jsxs(qa,{children:[_.jsx(WD,{className:"icon"}),_.jsx("span",{children:"Folder upload"}),_.jsx(Zp,{children:"Alt+C then I"})]}),_.jsx(Az,{}),_.jsxs(qa,{children:[_.jsx(zD,{className:"iconDocs"}),_.jsx("span",{children:"Google Docs"})]}),_.jsxs(qa,{children:[_.jsx(JD,{className:"iconSheets"}),_.jsx("span",{children:"Google Sheets"})]}),_.jsxs(qa,{children:[_.jsx(uM,{className:"iconSlides"}),_.jsx("span",{children:"Google Slides"})]}),_.jsxs(qa,{children:[_.jsx(tM,{className:"iconForms"}),_.jsx("span",{children:"Google Forms"})]}),_.jsx(Jp,{children:_.jsx("span",{children:"More"})})]})}const Cz=q.div`
  position: fixed;
  top: 100px;
  left: 20px;
  width: 250px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  padding: 8px 0;
  transition: all 200ms ease-out;
  transform: ${t=>t.bool?"translatey(-0%)":"translatey(-200%)"};
`,Jp=q.div`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  cursor: pointer;
  font-size: 14px;
  color: #202124;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #f1f3f4;
  }

  .icon {
    margin-right: 10px;
    color: #5f6368;
  }
`,qa=q.div`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  cursor: not-allowed;
  font-size: 14px;
  color: #202124;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #f1f3f4;
  }

  .icon {
    margin-right: 10px;
    color: #5f6368;
  }

  .iconDocs {
    margin-right: 10px;
    color: #2860bd;
  }
  .iconSheets {
    margin-right: 10px;
    color: #34a853;
  }
  .iconSlides {
    margin-right: 10px;
    color: #fabd04;
  }
  .iconForms {
    margin-right: 10px;
    color: #61259f;
  }
`,Zp=q.span`
  margin-left: auto;
  color: #5f6368;
  font-size: 12px;
`,Az=q.div`
  height: 1px;
  background-color: #e0e0e0;
  margin: 8px 0;
`;function bz(){const t=Gt(z3),e=An(),n=Gt(hf),[r,i]=O.useState(""),[o,s]=O.useState(!1),a=()=>{e(Gr({folderBool:!1})),i("")},u=async c=>{if(c.preventDefault(),!(o||r.length<1)){s(!0);try{await Gg(oa(vi,"folder"),{name:r,timestamp:Qg(),uid:n}),a()}catch(d){console.error("Error creating folder:",d)}finally{s(!1)}}};return _.jsx(Rz,{folder:t,onClick:a,children:_.jsxs(kz,{onClick:c=>c.stopPropagation(),children:[_.jsx(Pz,{children:"New Folder"}),_.jsx(Nz,{children:_.jsx("input",{type:"text",value:r,onChange:c=>i(c.target.value),placeholder:"Create Folder",disabled:o})}),_.jsxs(Oz,{children:[_.jsx(yT,{onClick:a,disabled:o,children:"Cancel"}),_.jsx(yT,{primary:!0,onClick:u,disabled:o,children:o?"Creating...":"Create Folder"})]})]})})}const Rz=q.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 5, 0.5);
  display: ${({folder:t})=>t?"flex":"none"};
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
`,kz=q.div`
  width: 300px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  animation: slideDown 0.3s ease;

  @keyframes slideDown {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`,Pz=q.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`,Nz=q.div`
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  input {
    flex: 1;
    border: none;
    padding: 8px;
    font-size: 16px;
    outline: none;

    &:disabled {
      background-color: #f0f0f0;
    }

    &:focus {
      border-bottom: 1px solid #3b82f6;
    }
  }
`,Oz=q.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
`,yT=q.button`
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  color: ${({primary:t})=>t?"#3b82f6":"#ef4444"};
  border: none;

  &:hover {
    color: ${({primary:t})=>t?"#2563eb":"#dc2626"};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #ddd;
  }
`;function Dz(){const t=An(),e=Gt(kC),[n,r]=O.useState([]),i=Su();return O.useEffect(()=>{e||(i("/"),document.location.reload())},[e,i]),O.useEffect(()=>Kg(Wg(oa(vi,"folder",e,"folderTree"),qg("timestamp","asc")),o=>{r(o.docs)}),[e]),_.jsx(Mz,{onClick:()=>t(Gr({modelBools:!1})),children:_.jsx(Lz,{children:n==null?void 0:n.map(o=>_.jsx(AC,{img:o==null?void 0:o.data().Image,title:o==null?void 0:o.data().photoTitle},o==null?void 0:o.id))})})}const Mz=q.div`
  flex-grow: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 15px 30px;
`,Lz=q.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: 20px 0;
`;function Vz(){const[t,e]=O.useState(""),[n,r]=O.useState(null),[i,o]=O.useState(""),s=O.useRef(null),a=Gt(W3),[u,c]=O.useState(!1),d=Gt(hf),f=Gt(kC),m=An(),v=async I=>{if(I.preventDefault(),!u){if(c(!0),!n){o("Please choose a file from local."),c(!1);return}if(o(""),f){const R=await Gg(oa(vi,"folder",f,"folderTree"),{uid:d,photoTitle:t,timestamp:Qg()}),S=hT(fT,`folder/${f}/${R.id}image`);await cT(S,n,"data_url").then(async E=>{const y=await dT(S);await UE(zg(vi,"folder",f,"folderTree",R.id),{Image:y})})}else{const R=await Gg(oa(vi,"post"),{uid:d,photoTitle:t,timestamp:Qg()}),S=hT(fT,`post/${R.id}/image`);await cT(S,n,"data_url").then(async E=>{const y=await dT(S);await UE(zg(vi,"post",R.id),{Image:y})})}r(null),e(""),c(!1),m(Gr({photo:!1}))}},w=I=>{const R=new FileReader;I.target.files[0]&&(R.readAsDataURL(I.target.files[0]),R.onload=S=>{r(S.target.result)})};return _.jsx(jz,{show:a,children:_.jsxs(Fz,{onSubmit:v,children:[_.jsx(Hz,{children:_.jsx($D,{onClick:()=>{m(Gr({photo:!1})),r(null)}})}),_.jsxs($z,{children:[n?_.jsx("img",{src:n,alt:"",onClick:()=>r(null)}):_.jsxs(zz,{children:[_.jsx(jD,{onClick:()=>s.current.click()}),_.jsx("h3",{children:"Take file"})]}),_.jsx("input",{type:"file",hidden:!0,ref:s,onChange:w})]}),_.jsx(Uz,{children:_.jsx("input",{type:"text",placeholder:"Enter photo Title (Optional)",value:t,onChange:I=>e(I.target.value)})}),i&&_.jsx(Wz,{children:i}),_.jsx(Bz,{children:_.jsx("button",{onClick:v,disabled:u,children:u?"Submitting...":"Submit"})})]})})}const jz=q.div`
  z-index: 9999;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${t=>t.show?"translateY(0)":"translateY(100%)"};
`,Fz=q.form`
  height: 300px;
  width: 400px;
  background-color: white;
  border-radius: 20px;
  position: relative;
  z-index: 999;
`,$z=q.div`
  height: 50%;
  margin-bottom: 20px;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
`,Uz=q.div`
  display: flex;
  margin: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  input {
    flex: 1;
    border: none;
    padding: 8px;
    font-size: 16px;
    outline: none;
    &:focus {
      border-bottom: 1px solid #3b82f6;
    }
  }
`,Bz=q.div`
  position: absolute;
  bottom: 30px;
  right: 30px;
  button {
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    background-color: #3b82f6;
    color: white;
    transition: all 200ms ease-out;
    :hover {
      transform: scale(1.05);
    }
    :active {
      transform: scale(1.009);
    }
  }
`,zz=q.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  h3 {
    color: #3b82f6;
  }
  .MuiSvgIcon-root {
    margin-top: 30px;
    width: 5rem !important;
    height: 5rem;
    padding: 12px;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    border: 1px solid #3b82f6;
    border-radius: 40px;
    :hover {
      transform: scale(1.02);
    }
    :active {
      transform: scale(1.009);
    }
  }
`,Hz=q.div`
  position: absolute;
  top: 10px;
  right: 10px;
  svg {
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    color: rgba(150, 0, 0, 0.9);
    :hover {
      transform: scale(1.05);
    }
    :active {
      transform: scale(1.009);
    }
  }
`,Wz=q.p`
  color: red;
  text-align: start;
  margin: 0 20px 10px;
  font-size: 0.9rem;
`;function qz(){const t=Gt(rV),e=Gt(iV),n=An();return _.jsxs(Gz,{show:t,onClick:()=>n(IC({photo:null})),children:[_.jsx("span",{children:e}),_.jsx(Kz,{children:_.jsx("img",{src:t,alt:""})})]})}const Gz=q.div`
  z-index: 9999;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${t=>t.show?"translateY(0)":"translateY(100%)"};

  span {
    font-size: 40px;
    color: white;
    position: absolute;
    top: 0;
  }
`,Kz=q.div`
  max-width: 760px;
  max-height: 475px;
  height: 475px;
  width: 760px;
  img {
    width: 100%;
    height: 100%;
  }
`;function Qz(){const t=An(),[e,n]=O.useState(!1),[r,i]=O.useState(!1),o=Su(),s=async()=>{await mU(sR,wz).then(d=>{let f=d.user;t(O3({uid:f.uid,photo:f.photoURL})),i(!1),o("/home")})},a=()=>{n(d=>!d)},u=()=>{i(!0)},c=()=>{i(!1)};return _.jsxs(_.Fragment,{children:[_.jsxs("div",{className:"h-[80vh] flex flex-col  justify-center items-center",children:[_.jsxs("div",{className:"w-full max-w-sm bg-gray-50 rounded-lg shadow-xl p-6",children:[_.jsx("div",{className:"flex items-center justify-between mb-4",children:_.jsx("button",{className:"text-gray-500 text-xl",children:"Aa"})}),_.jsxs("div",{className:"flex justify-center flex-col items-center mb-6",children:[_.jsx("img",{src:TC,alt:"Google",className:"h-24 "}),_.jsx("h1",{className:"text-xl text-gray-700",children:"Google Drive"})]}),_.jsx("h2",{className:"text-2xl font-semibold text-center mb-2",children:e?"Create Account":"Sign in"}),_.jsx("p",{className:"text-gray-600 text-center text-sm mb-6",children:e?"Create your Google Account.":"Sign in with your Google Account. You’ll also sign in to Google services in your apps & Safari."}),_.jsx("input",{type:"email",placeholder:e?"Enter your email":"username@uscstudents.org",className:"w-full px-4 py-3 border rounded-md mb-4 font-medium bg-gray-100 text-black"}),e&&_.jsx("input",{type:"password",placeholder:"Create a password",className:"w-full px-4 py-3 border rounded-md mb-4 font-medium bg-gray-100 text-black"}),_.jsxs("div",{className:"flex justify-between items-center text-sm mb-6",children:[!e&&_.jsx("a",{href:"#",className:"text-blue-500 hover:underline",children:"Forgot email?"}),_.jsx("button",{onClick:a,className:"text-blue-500 hover:underline",children:e?"Sign-In instead":"Create account"})]}),e?_.jsx("button",{className:"w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600",children:"Create Account"}):_.jsx("button",{onClick:u,className:"w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600",children:"Sign In with Google"})]}),_.jsx("span",{className:"mt-24",children:_.jsxs(sf,{to:"/drive",children:[_.jsx(eM,{className:"text-blue-500"}),_.jsx("button",{className:"text-md text-blue-500 px-1 py-1 rounded-md bg-gray-50 hover:text-blue-600",children:"Back"})]})})]}),r&&_.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50",children:_.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg text-center max-w-sm",children:[_.jsx("h3",{className:"text-lg font-semibold mb-4",children:'"Drive" Wants to Use "google.com" to Sign In'}),_.jsx("p",{className:"text-gray-700 mb-6",children:"This allows the app and website to share information about you."}),_.jsxs("div",{className:"flex gap-10 justify-end",children:[_.jsx("button",{onClick:c,className:"px-4 py-2 bg-gray-300 rounded hover:bg-gray-400",children:"Cancel"}),_.jsx("button",{onClick:s,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"Continue"})]})]})})]})}q.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;q.button`
  font-weight: 600;
  padding: 15px 20px;
  border: none;
  cursor: pointer;
  border-radius: 15px;
  transition: all 200ms ease-out;
  :hover {
    transform: scale(1.09);
  }
`;function Yz(){const t=Gt(oV);return console.log("starredItems :",JSON.parse(JSON.stringify(t))),_.jsx(_.Fragment,{children:_.jsx("div",{className:"flex-1",children:_.jsx("div",{className:"text-center w-[75vw] h-[75vh] flex items-center justify-center",children:_.jsx("div",{className:"flex flex-col items-center",children:_.jsx("p",{className:"text-gray-600 text-sm font-semibold",children:"No items starred !"})})})})})}function Xz(){const t=Gt(CC),e=An(),[n,r]=O.useState(null),[i,o]=O.useState(null),s=(c,d)=>{r({img:c,title:d})},a=c=>{e(nV(c))},u=O.useRef();return O.useEffect(()=>{const c=d=>{u.current&&!u.current.contains(d.target)&&o(null)};return document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}},[]),_.jsxs("div",{className:"flex-1",children:[_.jsx(Jz,{children:t.length>0?t.map((c,d)=>_.jsxs(n8,{onClick:()=>s(c.img,c.title),children:[_.jsx(r8,{children:_.jsx("img",{src:c.img,alt:c.title})}),_.jsxs(i8,{children:[_.jsxs(o8,{children:[_.jsx(lg,{className:"iconPhoto"}),c.title]}),_.jsx(s8,{children:_.jsxs(a8,{onClick:f=>{f.stopPropagation(),o(i===d?null:d)},ref:u,children:[_.jsx(FI,{style:{fontSize:"20px",color:"#5f6368"}}),i===d&&_.jsxs(l8,{children:[_.jsxs(vT,{onClick:()=>s(c.img,c.title),children:[_.jsx(UI,{className:"icon"}),"Open with"]}),_.jsxs(vT,{onClick:()=>a(c),children:[_.jsx(ZD,{className:"icon"}),"Restore to Drive"]})]})]})})]})]},d)):_.jsx("div",{className:"text-center w-[75vw] h-[75vh] flex items-center justify-center",children:_.jsx("div",{className:"flex flex-col items-center",children:_.jsx("p",{className:"text-gray-600 text-sm font-semibold",children:"No items in the Bin !"})})})}),n&&_.jsx(Zz,{onClick:()=>r(null),children:_.jsxs(e8,{onClick:c=>c.stopPropagation(),children:[_.jsx(t8,{onClick:()=>r(null),children:"×"}),_.jsx("img",{src:n.img,alt:n.title}),_.jsxs("div",{className:"flex items-center justify-start w-[80%] px-3 py-1 bg-gray-200 gap-2",children:[_.jsx(lg,{className:"iconPhoto"}),_.jsx("p",{children:n.title})]})]})})]})}const Jz=q.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: 20px 0;
`,Zz=q.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,e8=q.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 60%;
  max-height: 60%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 80%;
    max-height: 50vh;
  }

  .iconPhoto {
    color: #4285f4;
    margin-right: 4px;
  }
`,t8=q.div`
  align-self: flex-end;
  font-size: 24px;
  cursor: pointer;
  margin-bottom: 10px;
`,n8=q.div`
  width: 300px;
  height: 280px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin: 10px;
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.3);
    transform: translateY(-1px);
  }
`,r8=q.div`
  width: 100%;
  height: 80%;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`,i8=q.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  position: relative;
`,o8=q.div`
  font-size: 14px;
  font-weight: 500;
  color: #202124;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  .iconPhoto {
    color: #4285f4;
    margin-right: 4px;
  }
`,s8=q.div`
  display: flex;
  gap: 2px;
  color: #717577;

  .fav {
    border-radius: 18px;

    &:hover {
      background-color: #f1f3f4;
    }
  }
`,a8=q.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    color: #5f6368;
    font-size: 20px;
  }

  &:hover {
    background-color: rgba(95, 99, 104, 0.1);
    border-radius: 50%;
  }
`;q.div`
  position: absolute;
  top: -30px;
  right: -5px;
  background-color: #333;
  color: #fff;
  padding: 5px 8px;
  font-size: 12px;
  border-radius: 4px;
  white-space: nowrap;
  opacity: 0.9;
  z-index: 10;
  transition: opacity 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    right: 10px;
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }
`;const l8=q.div`
  position: absolute;
  bottom: 25px;
  right: 0;
  width: 180px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
  z-index: 10;
`,vT=q.div`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  font-size: 14px;
  color: #320;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f1f3f4;
  }

  .icon {
    font-size: 18px;
    margin-right: 5px;
  }
`;function u8(){return _.jsx("div",{className:"flex-1",children:_.jsx("div",{className:"text-center w-[75vw] h-[75vh] flex items-center justify-center",children:_.jsx("div",{className:"flex flex-col items-center",children:_.jsx("p",{className:"text-gray-600 text-sm font-semibold",children:"No items uploaded in recent !"})})})})}function c8(){return _.jsx("div",{className:"flex-1 text-center h-[75vh] flex items-center justify-center",children:_.jsxs("div",{className:"flex flex-col items-center",children:[_.jsxs("h1",{className:"text-2xl font-bold flex items-center text-gray-700",children:[_.jsx(cM,{className:"text-red-400 mr-2"}),_.jsx("span",{className:"text-red-400 mr-1",children:"404! "})," Page Not Found"]}),_.jsx("p",{className:"text-gray-600",children:"Sorry, the page you're looking for doesn't exist."}),_.jsx("p",{className:"text-gray-600 text-sm font-semibold",children:"(Page under process...)"})]})})}const d8=()=>_.jsx("div",{className:"flex-1",children:_.jsx("div",{className:"min-h-[80vh] flex items-center justify-center p-4",children:_.jsxs("div",{className:"bg-white shadow-sm rounded-lg p-6 max-w-full w-full",children:[_.jsx("h1",{className:"text-2xl font-semibold text-center mb-4",children:"Try Google One at a discount"}),_.jsx("p",{className:"text-center text-gray-600 mb-6",children:"All Google accounts include 15 GB of storage. Cancel at any time."}),_.jsxs("div",{className:"flex justify-center space-x-4 mb-6",children:[_.jsx("button",{className:"px-4 py-2 text-sm font-medium bg-blue-100 text-blue-600 rounded-md",children:"Monthly"}),_.jsxs("button",{className:"px-4 py-2 text-sm font-medium text-gray-600 rounded-md",children:["Annual ",_.jsx("span",{className:"text-xs",children:"(Save up to 55%)"})]})]}),_.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[_.jsxs("div",{className:"bg-gray-50 border rounded-lg p-4 text-center",children:[_.jsx("div",{className:"text-xl font-semibold mb-2",children:"15 GB"}),_.jsx("p",{className:"text-gray-500 mb-2",children:"Current"}),_.jsx("p",{className:"text-gray-600",children:"15 GB of storage for Photos, Drive and Gmail"})]}),_.jsxs("div",{className:"border rounded-lg p-4 text-center shadow-lg border-blue-500",children:[_.jsx("div",{className:"text-blue-600 font-semibold mb-1",children:"Recommended"}),_.jsx("div",{className:"text-xl font-semibold mb-2",children:"Lite (30 GB)"}),_.jsx("p",{className:"line-through text-gray-400",children:"₹59"}),_.jsx("p",{className:"text-3xl font-bold text-green-600",children:"₹15/mo"}),_.jsx("p",{className:"text-gray-500 mb-2",children:"for 2 months"}),_.jsx("p",{className:"text-xs text-green-500 mb-4",children:"Save up to ₹88 with offer"}),_.jsx("button",{className:"bg-blue-600 text-white rounded-full py-2 px-6 mb-2 hover:bg-blue-700 transition",children:"Get discount"}),_.jsx("p",{className:"text-gray-600 mt-2",children:"30 GB of storage for Photos, Drive and Gmail"})]}),_.jsxs("div",{className:"bg-gray-50 border rounded-lg p-4 text-center",children:[_.jsx("div",{className:"text-xl font-semibold mb-2",children:"Basic (100 GB)"}),_.jsx("p",{className:"text-gray-600",children:"100 GB of storage for Photos, Drive and Gmail"})]}),_.jsxs("div",{className:"bg-gray-50 border rounded-lg p-4 text-center",children:[_.jsx("div",{className:"text-xl font-semibold mb-2",children:"Standard (200 GB)"}),_.jsx("p",{className:"text-gray-600",children:"200 GB of storage for Photos, Drive and Gmail"})]})]})]})})}),h8="/assets/landing-splash-Bc_07_EX.jpg";function _T(){return _.jsx("div",{className:"min-h-[80vh] flex items-center justify-center",children:_.jsxs("div",{className:"flex flex-col items-center bg-white p-8 text-center md:flex-row md:justify-around md:text-left",children:[_.jsxs("div",{className:"md:w-2/3",children:[_.jsxs("div",{children:[_.jsx("h1",{className:"text-5xl md:text-6xl text-gray-700",children:"Easy and secure access to all of your content"}),_.jsx("p",{className:"mt-4 text-gray-600",children:"Store, share and collaborate on files and folders from any mobile device, tablet, or computer."})]}),_.jsxs("div",{className:"mt-6 flex justify-center md:justify-start space-x-4",children:[_.jsx(sf,{to:"/login",children:_.jsx("button",{className:"px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700",children:"Go to Drive"})}),_.jsx("button",{className:"px-4 py-2 bg-blue-100 text-blue-600 font-medium rounded-md hover:bg-blue-200",children:"Try Drive for your team"})]})]}),_.jsx("div",{className:"mt-10 md:mt-0 md:w-2/3 flex items-center justify-center",children:_.jsx("img",{src:h8,alt:""})})]})})}function f8(){const t=Gt(hf),e=An();return O.useEffect(()=>{Q$(sR,n=>{n||e(EC({uid:null,photo:null}))})}),_.jsxs(BL,{children:[_.jsx(L3,{user:t}),t?_.jsxs(_.Fragment,{children:[_.jsxs(p8,{children:[_.jsx(G3,{}),_.jsxs(Cw,{children:[_.jsx(Rn,{path:"/home",element:_.jsx(pT,{})}),_.jsx(Rn,{path:"/my-drive",element:_.jsx(pT,{})}),_.jsx(Rn,{path:"/folder/:name/:id",element:_.jsx(Dz,{})}),_.jsx(Rn,{path:"/starred",element:_.jsx(Yz,{})}),_.jsx(Rn,{path:"/recent",element:_.jsx(u8,{})}),_.jsx(Rn,{path:"/bin",element:_.jsx(Xz,{})}),_.jsx(Rn,{path:"/storage",element:_.jsx(d8,{})}),_.jsx(Rn,{path:"*",element:_.jsx(c8,{})})]})]}),_.jsx(Iz,{}),_.jsx(Vz,{}),_.jsx(bz,{}),_.jsx(qz,{})]}):_.jsxs(Cw,{children:[_.jsx(Rn,{path:"/",element:_.jsx(_T,{})}),_.jsx(Rn,{path:"/drive",element:_.jsx(_T,{})}),_.jsx(Rn,{path:"/login",element:_.jsx(Qz,{})})]})]})}const p8=q.div`
  display: flex;
`,m8=w3({reducer:{bool:q3,photos:sV,user:M3,folder:gV}});Ox(document.getElementById("root")).render(_.jsx(q5,{store:m8,children:_.jsx(f8,{})}));

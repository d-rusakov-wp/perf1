(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2727],{6593:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ACTION_FAST_REFRESH:function(){return s},ACTION_NAVIGATE:function(){return i},ACTION_PREFETCH:function(){return l},ACTION_REFRESH:function(){return a},ACTION_RESTORE:function(){return c},ACTION_SERVER_ACTION:function(){return d},ACTION_SERVER_PATCH:function(){return f},PrefetchCacheEntryStatus:function(){return u},PrefetchKind:function(){return o},isThenable:function(){return p}});var n,r,o,u,a="refresh",i="navigate",c="restore",f="server-patch",l="prefetch",s="fast-refresh",d="server-action";function p(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(n=o||(o={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",(r=u||(u={})).fresh="fresh",r.reusable="reusable",r.expired="expired",r.stale="stale",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3617:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(1063),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8065:function(e,t,n){"use strict";var r=n(968),o=n(3171),u=n(7069),a=["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"];function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach(function(t){r(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return w}});var f=n(8754),l=n(4246),s=f._(n(7378)),d=n(8364),p=n(5656),y=n(2151),v=n(9642),b=n(3443),h=n(1770),O=n(5074),m=n(1561),g=n(3617),j=n(5439),_=n(6593),P=new Set;function C(e,t,n,r,o,u){if(u||(0,p.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){var a=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(P.has(a))return;P.add(a)}Promise.resolve(u?e.prefetch(t,o):e.prefetch(t,n,r)).catch(function(e){})}}function M(e){return"string"==typeof e?e:(0,y.formatUrl)(e)}var w=s.default.forwardRef(function(e,t){var n,r,i=e.href,f=e.as,y=e.children,P=e.prefetch,w=void 0===P?null:P,E=e.passHref,S=e.replace,A=e.shallow,k=e.scroll,x=e.locale,T=e.onClick,I=e.onMouseEnter,R=e.onTouchStart,U=e.legacyBehavior,L=void 0!==U&&U,N=u(e,a);n=y,L&&("string"==typeof n||"number"==typeof n)&&(n=(0,l.jsx)("a",{children:n}));var D=s.default.useContext(h.RouterContext),H=s.default.useContext(O.AppRouterContext),F=null!=D?D:H,Z=!D,K=!1!==w,B=null===w?_.PrefetchKind.AUTO:_.PrefetchKind.FULL,V=s.default.useMemo(function(){if(!D){var e=M(i);return{href:e,as:f?M(f):e}}var t=o((0,d.resolveHref)(D,i,!0),2),n=t[0],r=t[1];return{href:n,as:f?(0,d.resolveHref)(D,f):r||n}},[D,i,f]),$=V.href,q=V.as,z=s.default.useRef($),G=s.default.useRef(q);L&&(r=s.default.Children.only(n));var Q=L?r&&"object"==typeof r&&r.ref:t,W=o((0,m.useIntersection)({rootMargin:"200px"}),3),Y=W[0],J=W[1],X=W[2],ee=s.default.useCallback(function(e){(G.current!==q||z.current!==$)&&(X(),G.current=q,z.current=$),Y(e),Q&&("function"==typeof Q?Q(e):"object"==typeof Q&&(Q.current=e))},[q,Q,$,X,Y]);s.default.useEffect(function(){F&&J&&K&&C(F,$,q,{locale:x},{kind:B},Z)},[q,$,J,x,K,null==D?void 0:D.locale,F,Z,B]);var et={ref:ee,onClick:function(e){L||"function"!=typeof T||T(e),L&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),F&&!e.defaultPrevented&&function(e,t,n,r,o,u,a,i,c){if(!("A"===e.currentTarget.nodeName.toUpperCase()&&((f=e.currentTarget.getAttribute("target"))&&"_self"!==f||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which||!c&&!(0,p.isLocalURL)(n)))){e.preventDefault();var f,l=function(){var e=null==a||a;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:u,locale:i,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})};c?s.default.startTransition(l):l()}}(e,F,$,q,S,A,k,x,Z)},onMouseEnter:function(e){L||"function"!=typeof I||I(e),L&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),F&&(K||!Z)&&C(F,$,q,{locale:x,priority:!0,bypassPrefetchedCheck:!0},{kind:B},Z)},onTouchStart:function(e){L||"function"!=typeof R||R(e),L&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),F&&(K||!Z)&&C(F,$,q,{locale:x,priority:!0,bypassPrefetchedCheck:!0},{kind:B},Z)}};if((0,v.isAbsoluteUrl)(q))et.href=q;else if(!L||E||"a"===r.type&&!("href"in r.props)){var en=void 0!==x?x:null==D?void 0:D.locale,er=(null==D?void 0:D.isLocaleDomain)&&(0,g.getDomainLocale)(q,en,null==D?void 0:D.locales,null==D?void 0:D.domainLocales);et.href=er||(0,j.addBasePath)((0,b.addLocale)(q,en,null==D?void 0:D.defaultLocale))}return L?s.default.cloneElement(r,et):(0,l.jsx)("a",c(c(c({},N),et),{},{children:n}))});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1561:function(e,t,n){"use strict";var r=n(3171);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return f}});var o=n(7378),u=n(1650),a="function"==typeof IntersectionObserver,i=new Map,c=[];function f(e){var t=e.rootRef,n=e.rootMargin,f=e.disabled||!a,l=r((0,o.useState)(!1),2),s=l[0],d=l[1],p=(0,o.useRef)(null),y=(0,o.useCallback)(function(e){p.current=e},[]);return(0,o.useEffect)(function(){if(a){if(!f&&!s){var e,r,o,l,y,v=p.current;if(v&&v.tagName)return e=function(e){return e&&d(e)},o=(r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find(function(e){return e.root===n.root&&e.margin===n.margin});if(r&&(t=i.get(r)))return t;var o=new Map;return t={id:n,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},c.push(n),i.set(n,t),t}({root:null==t?void 0:t.current,rootMargin:n})).id,l=r.observer,(y=r.elements).set(v,e),l.observe(v),function(){if(y.delete(v),l.unobserve(v),0===y.size){l.disconnect(),i.delete(o);var e=c.findIndex(function(e){return e.root===o.root&&e.margin===o.margin});e>-1&&c.splice(e,1)}}}}else if(!s){var b=(0,u.requestIdleCallback)(function(){return d(!0)});return function(){return(0,u.cancelIdleCallback)(b)}}},[f,n,t,s,p.current]),[y,s,(0,o.useCallback)(function(){d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1240:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});var r=n(8754)._(n(7378)).default.createContext({})},8911:function(e,t){"use strict";function n(e){var t=void 0===e?{}:e,n=t.ampFirst,r=t.hybrid,o=t.hasQuery;return void 0!==n&&n||void 0!==r&&r&&void 0!==o&&o}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},9903:function(e,t,n){"use strict";var r=n(968);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return h},defaultHead:function(){return p}});var u=n(8754),a=n(1757),i=n(4246),c=a._(n(7378)),f=u._(n(3367)),l=n(1240),s=n(870),d=n(8911);function p(e){void 0===e&&(e=!1);var t=[(0,i.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,i.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function y(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===c.default.Fragment?e.concat(c.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}n(7668);var v=["name","httpEquiv","charSet","itemProp"];function b(e,t){var n,u,a,i,f=t.inAmpMode;return e.reduce(y,[]).reverse().concat(p(f).reverse()).filter((n=new Set,u=new Set,a=new Set,i={},function(e){var t=!0,r=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){r=!0;var o=e.key.slice(e.key.indexOf("$")+1);n.has(o)?t=!1:n.add(o)}switch(e.type){case"title":case"base":u.has(e.type)?t=!1:u.add(e.type);break;case"meta":for(var c=0,f=v.length;c<f;c++){var l=v[c];if(e.props.hasOwnProperty(l)){if("charSet"===l)a.has(l)?t=!1:a.add(l);else{var s=e.props[l],d=i[l]||new Set;("name"!==l||!r)&&d.has(s)?t=!1:(d.add(s),i[l]=d)}}}}return t})).reverse().map(function(e,t){var n=e.key||t;if(!f&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach(function(t){r(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e.props||{});return u["data-href"]=u.href,u.href=void 0,u["data-optimized-fonts"]=!0,c.default.cloneElement(e,u)}return c.default.cloneElement(e,{key:n})})}var h=function(e){var t=e.children,n=(0,c.useContext)(l.AmpStateContext),r=(0,c.useContext)(s.HeadManagerContext);return(0,i.jsx)(f.default,{reduceComponentsToState:b,headManager:r,inAmpMode:(0,d.isInAmpMode)(n),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3367:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});var r=n(7378),o=r.useLayoutEffect,u=r.useEffect;function a(e){var t=e.headManager,n=e.reduceComponentsToState;function a(){if(t&&t.mountedInstances){var o=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(o,e))}}return o(function(){var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),function(){var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(function(){return t&&(t._pendingUpdate=a),function(){t&&(t._pendingUpdate=a)}}),u(function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}}),null}},7668:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});var n=function(e){}},9008:function(e,t,n){e.exports=n(9903)},1664:function(e,t,n){e.exports=n(8065)},2587:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return r}})},29:function(e,t,n){"use strict";function r(e,t,n,r,o,u,a){try{var i=e[u](a),c=i.value}catch(e){n(e);return}i.done?t(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise(function(o,u){var a=e.apply(t,n);function i(e){r(a,o,u,i,c,"next",e)}function c(e){r(a,o,u,i,c,"throw",e)}i(void 0)})}}n.d(t,{Z:function(){return o}})},4730:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})},6835:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(2937);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,u,a,i=[],c=!0,f=!1;try{if(u=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=u.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){f=!0,o=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(f)throw o}}return i}}(e,t)||(0,r.Z)(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},2937:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(2587);function o(e,t){if(e){if("string"==typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return(0,r.Z)(e,t)}}}}]);
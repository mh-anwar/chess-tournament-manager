import{r as n,a as z}from"./react-DEdpUTZM.js";import{R as B}from"./react-dom-__JV-dPH.js";import{m as H,D as A,a as K,R as W,u as G,N as X,b as Y,c as q,d as J,e as Q}from"./react-router-ByfO2XJH.js";import{c as Z,b as $,E as ee,s as te,d as U}from"./@remix-run-Va2Jh8gM.js";/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function C(){return C=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},C.apply(this,arguments)}function ne(e,i){if(e==null)return{};var t={},a=Object.keys(e),r,s;for(s=0;s<a.length;s++)r=a[s],!(i.indexOf(r)>=0)&&(t[r]=e[r]);return t}function re(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ie(e,i){return e.button===0&&(!i||i==="_self")&&!re(e)}const ae=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],se="6";try{window.__reactRouterVersion=se}catch{}function _e(e,i){return Z({basename:void 0,future:C({},void 0,{v7_prependBasename:!0}),history:$({window:void 0}),hydrationData:oe(),routes:e,mapRouteProperties:H,unstable_dataStrategy:void 0,unstable_patchRoutesOnNavigation:void 0,window:void 0}).initialize()}function oe(){var e;let i=(e=window)==null?void 0:e.__staticRouterHydrationData;return i&&i.errors&&(i=C({},i,{errors:le(i.errors)})),i}function le(e){if(!e)return null;let i=Object.entries(e),t={};for(let[a,r]of i)if(r&&r.__type==="RouteErrorResponse")t[a]=new ee(r.status,r.statusText,r.data,r.internal===!0);else if(r&&r.__type==="Error"){if(r.__subType){let s=window[r.__subType];if(typeof s=="function")try{let u=new s(r.message);u.stack="",t[a]=u}catch{}}if(t[a]==null){let s=new Error(r.message);s.stack="",t[a]=s}}else t[a]=r;return t}const ue=n.createContext({isTransitioning:!1}),ce=n.createContext(new Map),fe="startTransition",O=z[fe],de="flushSync",F=B[de];function pe(e){O?O(e):e()}function x(e){F?F(e):e()}class ve{constructor(){this.status="pending",this.promise=new Promise((i,t)=>{this.resolve=a=>{this.status==="pending"&&(this.status="resolved",i(a))},this.reject=a=>{this.status==="pending"&&(this.status="rejected",t(a))}})}}function be(e){let{fallbackElement:i,router:t,future:a}=e,[r,s]=n.useState(t.state),[u,h]=n.useState(),[f,o]=n.useState({isTransitioning:!1}),[c,m]=n.useState(),[d,T]=n.useState(),[w,L]=n.useState(),E=n.useRef(new Map),{v7_startTransition:P}=a||{},_=n.useCallback(l=>{P?pe(l):l()},[P]),p=n.useCallback((l,R)=>{let{deletedFetchers:v,unstable_flushSync:k,unstable_viewTransitionOpts:S}=R;v.forEach(g=>E.current.delete(g)),l.fetchers.forEach((g,N)=>{g.data!==void 0&&E.current.set(N,g.data)});let M=t.window==null||t.window.document==null||typeof t.window.document.startViewTransition!="function";if(!S||M){k?x(()=>s(l)):_(()=>s(l));return}if(k){x(()=>{d&&(c&&c.resolve(),d.skipTransition()),o({isTransitioning:!0,flushSync:!0,currentLocation:S.currentLocation,nextLocation:S.nextLocation})});let g=t.window.document.startViewTransition(()=>{x(()=>s(l))});g.finished.finally(()=>{x(()=>{m(void 0),T(void 0),h(void 0),o({isTransitioning:!1})})}),x(()=>T(g));return}d?(c&&c.resolve(),d.skipTransition(),L({state:l,currentLocation:S.currentLocation,nextLocation:S.nextLocation})):(h(l),o({isTransitioning:!0,flushSync:!1,currentLocation:S.currentLocation,nextLocation:S.nextLocation}))},[t.window,d,c,E,_]);n.useLayoutEffect(()=>t.subscribe(p),[t,p]),n.useEffect(()=>{f.isTransitioning&&!f.flushSync&&m(new ve)},[f]),n.useEffect(()=>{if(c&&u&&t.window){let l=u,R=c.promise,v=t.window.document.startViewTransition(async()=>{_(()=>s(l)),await R});v.finished.finally(()=>{m(void 0),T(void 0),h(void 0),o({isTransitioning:!1})}),T(v)}},[_,u,c,t.window]),n.useEffect(()=>{c&&u&&r.location.key===u.location.key&&c.resolve()},[c,d,r.location,u]),n.useEffect(()=>{!f.isTransitioning&&w&&(h(w.state),o({isTransitioning:!0,flushSync:!1,currentLocation:w.currentLocation,nextLocation:w.nextLocation}),L(void 0))},[f.isTransitioning,w]),n.useEffect(()=>{},[]);let y=n.useMemo(()=>({createHref:t.createHref,encodeLocation:t.encodeLocation,go:l=>t.navigate(l),push:(l,R,v)=>t.navigate(l,{state:R,preventScrollReset:v==null?void 0:v.preventScrollReset}),replace:(l,R,v)=>t.navigate(l,{replace:!0,state:R,preventScrollReset:v==null?void 0:v.preventScrollReset})}),[t]),b=t.basename||"/",V=n.useMemo(()=>({router:t,navigator:y,static:!1,basename:b}),[t,y,b]),j=n.useMemo(()=>({v7_relativeSplatPath:t.future.v7_relativeSplatPath}),[t.future.v7_relativeSplatPath]);return n.createElement(n.Fragment,null,n.createElement(A.Provider,{value:V},n.createElement(K.Provider,{value:r},n.createElement(ce.Provider,{value:E.current},n.createElement(ue.Provider,{value:f},n.createElement(W,{basename:b,location:r.location,navigationType:r.historyAction,navigator:y,future:j},r.initialized||t.future.v7_partialHydration?n.createElement(he,{routes:t.routes,future:t.future,state:r}):i))))),null)}const he=n.memo(me);function me(e){let{routes:i,future:t,state:a}=e;return G(i,void 0,a,t)}const we=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ye=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Le=n.forwardRef(function(i,t){let{onClick:a,relative:r,reloadDocument:s,replace:u,state:h,target:f,to:o,preventScrollReset:c,unstable_viewTransition:m}=i,d=ne(i,ae),{basename:T}=n.useContext(X),w,L=!1;if(typeof o=="string"&&ye.test(o)&&(w=o,we))try{let p=new URL(window.location.href),y=o.startsWith("//")?new URL(p.protocol+o):new URL(o),b=te(y.pathname,T);y.origin===p.origin&&b!=null?o=b+y.search+y.hash:L=!0}catch{}let E=Y(o,{relative:r}),P=Re(o,{replace:u,state:h,target:f,preventScrollReset:c,relative:r,unstable_viewTransition:m});function _(p){a&&a(p),p.defaultPrevented||P(p)}return n.createElement("a",C({},d,{href:w||E,onClick:L||s?a:_,ref:t,target:f}))});var D;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(D||(D={}));var I;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(I||(I={}));function Re(e,i){let{target:t,replace:a,state:r,preventScrollReset:s,relative:u,unstable_viewTransition:h}=i===void 0?{}:i,f=q(),o=J(),c=Q(e,{relative:u});return n.useCallback(m=>{if(ie(m,t)){m.preventDefault();let d=a!==void 0?a:U(o)===U(c);f(e,{replace:d,state:r,preventScrollReset:s,relative:u,unstable_viewTransition:h})}},[o,f,c,a,r,t,e,s,u,h])}export{Le as L,be as R,_e as c};

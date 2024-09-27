import{r as n}from"./react-DEdpUTZM.js";import{i as g,m as A,j as P,A as T,p as w,s as z,g as L,r as j,a as W}from"./@remix-run-Va2Jh8gM.js";/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},R.apply(this,arguments)}const B=n.createContext(null),$=n.createContext(null),b=n.createContext(null),U=n.createContext(null),E=n.createContext({outlet:null,matches:[],isDataRoute:!1}),M=n.createContext(null);function le(e,t){let{relative:r}=t===void 0?{}:t;y()||g(!1);let{basename:l,navigator:i}=n.useContext(b),{hash:u,pathname:a,search:f}=G(e,{relative:r}),c=a;return l!=="/"&&(c=a==="/"?l:P([l,a])),i.createHref({pathname:c,search:f,hash:u})}function y(){return n.useContext(U)!=null}function O(){return y()||g(!1),n.useContext(U).location}function D(e){n.useContext(b).static||n.useLayoutEffect(e)}function oe(){let{isDataRoute:e}=n.useContext(E);return e?te():q()}function q(){y()||g(!1);let e=n.useContext(B),{basename:t,future:r,navigator:l}=n.useContext(b),{matches:i}=n.useContext(E),{pathname:u}=O(),a=JSON.stringify(L(i,r.v7_relativeSplatPath)),f=n.useRef(!1);return D(()=>{f.current=!0}),n.useCallback(function(m,s){if(s===void 0&&(s={}),!f.current)return;if(typeof m=="number"){l.go(m);return}let o=j(m,JSON.parse(a),u,s.relative==="path");e==null&&t!=="/"&&(o.pathname=o.pathname==="/"?t:P([t,o.pathname])),(s.replace?l.replace:l.push)(o,s.state,s)},[t,l,a,u,e])}function G(e,t){let{relative:r}=t===void 0?{}:t,{future:l}=n.useContext(b),{matches:i}=n.useContext(E),{pathname:u}=O(),a=JSON.stringify(L(i,l.v7_relativeSplatPath));return n.useMemo(()=>j(e,JSON.parse(a),u,r==="path"),[e,a,u,r])}function ie(e,t,r,l){y()||g(!1);let{navigator:i}=n.useContext(b),{matches:u}=n.useContext(E),a=u[u.length-1],f=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let m=O(),s;s=m;let o=s.pathname||"/",v=o;if(c!=="/"){let d=c.replace(/^\//,"").split("/");v="/"+o.replace(/^\//,"").split("/").slice(d.length).join("/")}let h=A(e,{pathname:v});return Y(h&&h.map(d=>Object.assign({},d,{params:Object.assign({},f,d.params),pathname:P([c,i.encodeLocation?i.encodeLocation(d.pathname).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?c:P([c,i.encodeLocation?i.encodeLocation(d.pathnameBase).pathname:d.pathnameBase])})),u,r,l)}function K(){let e=ee(),t=W(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return n.createElement(n.Fragment,null,n.createElement("h2",null,"Unexpected Application Error!"),n.createElement("h3",{style:{fontStyle:"italic"}},t),r?n.createElement("pre",{style:i},r):null,null)}const Q=n.createElement(K,null);class V extends n.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?n.createElement(E.Provider,{value:this.props.routeContext},n.createElement(M.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function X(e){let{routeContext:t,match:r,children:l}=e,i=n.useContext(B);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),n.createElement(E.Provider,{value:t},l)}function Y(e,t,r,l){var i;if(t===void 0&&(t=[]),r===void 0&&(r=null),l===void 0&&(l=null),e==null){var u;if(!r)return null;if(r.errors)e=r.matches;else if((u=l)!=null&&u.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let a=e,f=(i=r)==null?void 0:i.errors;if(f!=null){let s=a.findIndex(o=>o.route.id&&(f==null?void 0:f[o.route.id])!==void 0);s>=0||g(!1),a=a.slice(0,Math.min(a.length,s+1))}let c=!1,m=-1;if(r&&l&&l.v7_partialHydration)for(let s=0;s<a.length;s++){let o=a[s];if((o.route.HydrateFallback||o.route.hydrateFallbackElement)&&(m=s),o.route.id){let{loaderData:v,errors:h}=r,p=o.route.loader&&v[o.route.id]===void 0&&(!h||h[o.route.id]===void 0);if(o.route.lazy||p){c=!0,m>=0?a=a.slice(0,m+1):a=[a[0]];break}}}return a.reduceRight((s,o,v)=>{let h,p=!1,d=null,C=null;r&&(h=f&&o.route.id?f[o.route.id]:void 0,d=o.route.errorElement||Q,c&&(m<0&&v===0?(re("route-fallback"),p=!0,C=null):m===v&&(p=!0,C=o.route.hydrateFallbackElement||null)));let F=t.concat(a.slice(0,v+1)),I=()=>{let x;return h?x=d:p?x=C:o.route.Component?x=n.createElement(o.route.Component,null):o.route.element?x=o.route.element:x=s,n.createElement(X,{match:o,routeContext:{outlet:s,matches:F,isDataRoute:r!=null},children:x})};return r&&(o.route.ErrorBoundary||o.route.errorElement||v===0)?n.createElement(V,{location:r.location,revalidation:r.revalidation,component:d,error:h,children:I(),routeContext:{outlet:null,matches:F,isDataRoute:!0}}):I()},null)}var J=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(J||{}),N=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(N||{});function Z(e){let t=n.useContext(B);return t||g(!1),t}function S(e){let t=n.useContext($);return t||g(!1),t}function H(e){let t=n.useContext(E);return t||g(!1),t}function _(e){let t=H(),r=t.matches[t.matches.length-1];return r.route.id||g(!1),r.route.id}function ee(){var e;let t=n.useContext(M),r=S(N.UseRouteError),l=_(N.UseRouteError);return t!==void 0?t:(e=r.errors)==null?void 0:e[l]}function te(){let{router:e}=Z(J.UseNavigateStable),t=_(N.UseNavigateStable),r=n.useRef(!1);return D(()=>{r.current=!0}),n.useCallback(function(i,u){u===void 0&&(u={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,R({fromRouteId:t},u)))},[e,t])}const k={};function re(e,t,r){k[e]||(k[e]=!0)}function se(e){let{basename:t="/",children:r=null,location:l,navigationType:i=T.Pop,navigator:u,static:a=!1,future:f}=e;y()&&g(!1);let c=t.replace(/^\/*/,"/"),m=n.useMemo(()=>({basename:c,navigator:u,static:a,future:R({v7_relativeSplatPath:!1},f)}),[c,f,u,a]);typeof l=="string"&&(l=w(l));let{pathname:s="/",search:o="",hash:v="",state:h=null,key:p="default"}=l,d=n.useMemo(()=>{let C=z(s,c);return C==null?null:{location:{pathname:C,search:o,hash:v,state:h,key:p},navigationType:i}},[c,s,o,v,h,p,i]);return d==null?null:n.createElement(b.Provider,{value:m},n.createElement(U.Provider,{children:r,value:d}))}new Promise(()=>{});function ue(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:n.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:n.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:n.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}export{B as D,b as N,se as R,$ as a,le as b,oe as c,O as d,G as e,ue as m,ie as u};

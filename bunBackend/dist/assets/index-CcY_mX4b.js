import{r as b,j as e,R as B}from"./react-DEdpUTZM.js";import{c as me}from"./react-dom-__JV-dPH.js";import{F as N,a as ee,I as E,b as xe,c as ge,d as pe,e as je,B as v,u as H,f,g,S as fe,T as se,h as te,i as z,j as ne,k as A,H as I,l as Y,m as K,n as U,o as j,p as S,q as J,r as d,s as ye,t as R,M as be,v as we,w as ve,x as Ce,y as Se,z as Ie,R as $,A as W,C as O,D as ke,E as Q,G as Te,J as Re,K as Le,L as _,N as re,O as D,P as ae,Q as le,U as Pe,V as oe,W as q,X as Oe,Y as Ae,Z as De,_ as Me,$ as Fe,a0 as V,a1 as Ne,a2 as ze,a3 as He,a4 as Ge,a5 as Be}from"./@chakra-ui-CGyxmwrF.js";import{L,c as Ee,R as Ye}from"./react-router-dom-DteA3oln.js";import{R as ie,G as Ke,a as Ue,b as Je,F as qe,c as _e,A as $e,d as We,e as Qe,f as ce,g as Ve,h as Xe}from"./react-icons-BRnIk5l7.js";import"./copy-to-clipboard-Cpj98o6Y.js";import"./scheduler-CzFDRTuY.js";import"./lodash.mergewith-D-69PSEL.js";import"./@emotion-CYDyVhEc.js";import"./hoist-non-react-statics-Buxaj0Kl.js";import"./react-is-8JwjhRSi.js";import"./@babel-DzpKa8aK.js";import"./stylis-YPZU7XtI.js";import"./color2k-BSHHkqKj.js";import"./framer-motion-BPz61k_h.js";import"./@popperjs-BQBsAJpH.js";import"./react-focus-lock-BKaK8z52.js";import"./focus-lock-CAkr-jOZ.js";import"./use-sidecar-BFrkB23O.js";import"./tslib-CDuPK5Eb.js";import"./use-callback-ref-BH2RmtK3.js";import"./react-clientside-effect-fUghZiSs.js";import"./react-remove-scroll-Dmuecd-_.js";import"./react-remove-scroll-bar-DIA9aE2H.js";import"./react-style-singleton-Gj52agqN.js";import"./get-nonce-C-Z93AgS.js";import"./aria-hidden-DQ5UC2Eg.js";import"./@zag-js-DdrsuNi1.js";import"./react-fast-compare-BKWBHbli.js";import"./react-router-ByfO2XJH.js";import"./@remix-run-Va2Jh8gM.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function l(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=l(t);fetch(t.href,n)}})();const P="";function de(){localStorage.removeItem("email"),localStorage.removeItem("name"),localStorage.removeItem("color"),localStorage.removeItem("passKey")}function he({options:s}){const[r,l]=b.useState(!1),o=t=>{let n=t.target.value==="";l(n)};return e.jsxs(N,{isRequired:!0,isInvalid:r,children:[e.jsx(ee,{children:s.label}),s.type==="text"?e.jsx(E,{variant:"outline",type:"text",placeholder:s.placeholder,value:s.value,onChange:t=>{s.onChange(t),o(t)}}):s.type==="email"?e.jsx(E,{variant:"outline",type:"email",placeholder:s.placeholder,pattern:"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",value:s.value,onChange:t=>{s.onChange(t),o(t)}}):Ze(s,o),r?e.jsxs(xe,{children:[s.label," is required"]}):e.jsx(ge,{children:s.helper})]})}function Ze(s,r){const[l,o]=b.useState(!1),t=()=>o(!l);return e.jsxs(pe,{children:[e.jsx(E,{variant:"outline",type:l?"text":"password",placeholder:s.placeholder,value:s.value,onChange:n=>{s.onChange(n),r(n)}}),e.jsx(je,{width:"4.5rem",children:e.jsx(v,{h:"1.75rem",size:"sm",onClick:t,children:l?"Hide":"Show"})})]})}const es={yellow:"black",orange:"black",blue:"black",red:"black",purple:"white",green:"white",teal:"white",cyan:"black",pink:"black",black:"pink"};function ss(){const[s,r]=b.useState(""),[l,o]=b.useState(""),[t,n]=b.useState(""),[c,a]=B.useState(""),i=H(),h=f("light.sec","dark.sec"),m=f("light.fg","dark.fg"),p=[{label:"Name",placeholder:"John Doe",helper:"Please only enter your real name (first and last)",type:"text",value:l,onChange:u=>o(u.target.value)},{label:"Email Address",placeholder:"s20100000@ddsbstudent.ca",helper:"Use your student email",type:"email",value:s,onChange:u=>r(u.target.value)},{label:"Password",placeholder:"******",helper:"",type:"password",value:t,onChange:u=>n(u.target.value)}];function x(u){a(u.target.value),u.target.style.backgroundColor=u.target.value,u.target.style.color=es[u.target.value]}return e.jsxs(g,{className:"auth",bg:h,color:m,children:[p.map(u=>e.jsx(he,{options:u},u.label)),e.jsxs(N,{isRequired:!0,children:[e.jsx(ee,{children:"Select Profile Colour"}),e.jsxs(fe,{onChange:x,isRequired:!0,placeholder:"Select color",value:c,children:[e.jsx("option",{value:"black",children:"Black"}),e.jsx("option",{value:"purple",children:"Purple"}),e.jsx("option",{value:"blue",children:"Blue"}),e.jsx("option",{value:"red",children:"Red"}),e.jsx("option",{value:"orange",children:"Orange"}),e.jsx("option",{value:"yellow",children:"Yellow"}),e.jsx("option",{value:"green",children:"Green"}),e.jsx("option",{value:"cyan",children:"Cyan"}),e.jsx("option",{value:"teal",children:"Teal"}),e.jsx("option",{value:"pink",children:"Pink"})]})]}),e.jsx(N,{children:e.jsx(v,{onClick:()=>ts(s,l,t,c,i),children:"Submit"})})]})}async function ts(s,r,l,o,t){const n=(c,a,i="error")=>{t({title:c,description:a,status:i,duration:9e3,isClosable:!0})};if(s.includes("@ddsbstudent.ca")){let c=r.split(" ").length;if(c>1&&c<3){let a=r.split(" ");(/\d/.test(a[0])||/\d/.test(a[1]))!==!0?l.length>6?fetch(P+"/api/user/join",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r,email:s,password:l,color:o})}).then(i=>i.json()).then(i=>{i.success===!0?(localStorage.setItem("name",r),localStorage.setItem("passKey",i.passKey),n("Account created","You are being redirected to the homepage","success"),setTimeout(()=>window.location.href="/",2e3)):n("You already have an account. Please sign in.","")}):n("Account not created","Your password must be longer than 6 characters"):n("Account not created","There are numbers in your name")}else n("Account not created","Please use your first and last name")}else n("Account not created","Please use your student email");return!0}function ns(){const[s,r]=b.useState(""),[l,o]=b.useState(""),t=H(),n=f("light.sec","dark.sec"),c=f("light.fg","dark.fg"),a=[{label:"Email",placeholder:"s------@ddsbstudent.ca",helper:"Use your Email",type:"text",errorMsg:"Email is required",value:s,onChange:i=>r(i.target.value)},{label:"Password",placeholder:"******",helper:"Click here to Reset Your Password",type:"password",errorMsg:"Password is required",value:l,onChange:i=>o(i.target.value)}];return e.jsxs(g,{className:"auth",bg:n,color:c,children:[a.map(i=>e.jsx(he,{options:i},i.label)),e.jsx(N,{children:e.jsx(v,{onClick:()=>rs(s,l,t),children:"Submit"})})]})}async function rs(s,r,l){const o=(t,n,c="error")=>{l({title:t,description:n,status:c,duration:9e3,isClosable:!0})};if(r.length<=6)return o("Login Unsuccessful","Your password must be longer than 6 characters");try{const n=await(await fetch(`${P}/api/user/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,password:r})})).json();n.success?(localStorage.setItem("email",s),localStorage.setItem("name",n.name),localStorage.setItem("passKey",n.passKey),o("Login Successful","You are being redirected to the homepage","success"),setTimeout(()=>window.location.href="/",2e3)):(de(),o("Login Failed",n.message||"Invalid credentials"))}catch(t){console.error("Login error:",t),o("Login Error","An error occurred during login")}return!0}function as(){const s=f("light.sec","dark.sec"),r=f("light.fg","dark.fg"),l=H(),o=(t,n,c="error")=>{l({title:t,description:n,status:c,duration:9e3,isClosable:!0})};return window.setLocalItems=(t,n)=>{localStorage.setItem("name",t),localStorage.setItem("passKey",n)},window.handleCredentialResponse=t=>{localStorage.removeItem("name"),localStorage.removeItem("passKey"),fetch(P+"/googleauth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:t})}).then(n=>n.json()).then(n=>{if(n.success===!0)window.setLocalItems(n.name,n.passKey),o("Account created","Your being redirected to the homepage","success"),setTimeout(()=>window.location.href="/",2e3);else if(n.success==="password required"){const c=window.prompt("Please create a password","");c!=null?fetch(P+"/googleauth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:t,password:c})}).then(a=>a.json()).then(a=>{window.setLocalItems(a.name,a.passKey),o("Account created","Your being redirected to the homepage","success"),setTimeout(()=>window.location.href="/",2e3)}):o("Account not created","No password provided")}else o("Account not created","Some error has occured, make your account manually")})},e.jsx(g,{display:"flex",flexDir:"row",justifyContent:"center",children:e.jsxs(se,{isLazy:!0,colorScheme:"blue",width:["full","full","60%","50%"],isFitted:!0,variant:"enclosed",align:"center",minHeight:"80vh",maxHeight:"90vh",children:[e.jsxs(te,{paddingTop:"2em",children:[e.jsx(z,{_selected:{color:r,bg:s},children:"Log In"}),e.jsx(z,{_selected:{color:r,bg:s},children:"Sign Up"})]}),e.jsxs(ne,{align:"center",children:[e.jsx(A,{children:e.jsx(ns,{})}),e.jsx(A,{children:e.jsx(ss,{})})]})]})})}function ls(){const[s,r]=b.useState(null),[l,o]=b.useState(null);b.useEffect(()=>{const a=localStorage.getItem("name"),i=localStorage.getItem("passKey");a!==null&&i!==null&&(async()=>{let m=await fetch(P+"/api/leaderboard/userGames",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a,passKey:i})}).then(p=>p.json()).then(p=>p.data);t(m),n(m)})()},[]);const t=a=>{if(a!=null){let i=Object.keys(a).map(h=>{let m=new Date(a[h].date);m=m.toString().split(" ").slice(0,3).join(" ");let p=a[h].type,x=a[h].opponent,u=a[h].result,w=a[h].confirmed;return e.jsxs(j,{children:[e.jsx(d,{children:m}),e.jsx(d,{children:x}),e.jsxs(d,{textTransform:"capitalize",children:["You ",u," by ",p]}),e.jsx(d,{children:w==="false"?e.jsx(v,{children:"Coming Soon"}):e.jsx(v,{isDisabled:!0,children:"Result Accepted"})})]},h)});i.length===0?r(e.jsx(j,{children:e.jsx(d,{children:"Only games played in 2023 will show."})})):r(i)}else r(e.jsx(j,{children:e.jsx(d,{children:"Only games played in 2023 will show."})}))},n=a=>{let i=!0,h=[],m=0,p=0,x=0,u=0,w=0,k=0;Object.keys(a).forEach(T=>{let y=a[T],C=y.result,G=y.type;h.push(y.opponent),i+=y.confirmed===!0?1:0,C==="won"?m+=1:C==="lost"?p+=1:C==="draw"&&(x+=1),G==="checkmate"?u+=1:G==="time"?k+=1:G==="resignation"&&(w+=1)}),o({gameConfirmations:i,wins:m,losses:p,draws:x,typCheckmate:u,typResignations:w,typTime:k})},c=f("light.header","dark.header");return e.jsxs(g,{sx:{display:"flex"},flexDir:{base:"column",sm:"column",md:"row",lg:"row"},children:[e.jsx(g,{sx:{flex:70,padding:"1em"},children:s==null?e.jsx(I,{children:"Play more game!"}):e.jsx(Y,{children:e.jsxs(K,{bg:c,className:"tableContainer",children:[e.jsx(U,{className:"blur",bg:c,children:e.jsxs(j,{children:[e.jsx(S,{children:"Date"}),e.jsx(S,{children:"Opponent"}),e.jsx(S,{children:"Result"}),e.jsx(S,{children:"Challenge Result"})]})}),e.jsx(J,{children:s})]})})}),e.jsx(g,{sx:{flex:30,padding:"1em"},children:l==null?e.jsx(I,{children:"Play more games to see stats!"}):e.jsx(Y,{children:e.jsxs(K,{bg:c,className:"tableContainer",children:[e.jsx(U,{className:"blur",bg:c,children:e.jsxs(j,{children:[e.jsx(S,{children:"Stats"}),e.jsx(S,{children:"Result"})]})}),e.jsxs(J,{children:[e.jsxs(j,{children:[e.jsx(d,{children:"Confirmed Games"}),e.jsx(d,{children:l.gameConfirmations})]}),e.jsxs(j,{children:[e.jsx(d,{children:"Games Won"}),e.jsx(d,{children:l.wins})]}),e.jsxs(j,{children:[e.jsx(d,{children:"Games Lost"}),e.jsx(d,{children:l.losses})]}),e.jsxs(j,{children:[e.jsx(d,{children:"Games Drawn"}),e.jsx(d,{children:l.draws})]}),e.jsxs(j,{children:[e.jsx(d,{children:"Total Checkmates:"}),e.jsx(d,{children:l.typCheckmate})]}),e.jsxs(j,{children:[e.jsx(d,{children:"Total Time (losses/wins):"}),e.jsx(d,{children:l.typTime})]}),e.jsxs(j,{children:[e.jsx(d,{children:"Total Resignations:"}),e.jsx(d,{children:l.typResignations})]}),e.jsxs(j,{children:[e.jsx(d,{children:"Most common opponent:"}),e.jsx(d,{})]})]})]})})})]})}function os({opponent:s,rank:r}){const{isOpen:l,onOpen:o,onClose:t}=ye(),[n,c]=B.useState("won"),[a,i]=B.useState("checkmate"),h=H();let m;try{m=localStorage.getItem("name").split(" ")}catch{m=""}let p=typeof r!="number";return e.jsxs(g,{children:[m!==""?e.jsxs(v,{gap:"0.3em",variant:"outline",bg:p?"gold":"",color:p?"black":"",children:[e.jsx(ie,{height:"20px",fontWeight:p?"bold":"","aria-label":"Challenge"}),e.jsx(R,{height:"20px",children:r})]}):r,e.jsxs(be,{isCentered:!0,closeOnOverlayClick:!1,isOpen:l,onClose:t,motionPreset:"slideInBottom",size:{base:"full",sm:"md",md:"md",lg:"xl"},zIndex:"10000",children:[e.jsx(we,{}),e.jsxs(ve,{children:[e.jsxs(Ce,{children:["Challenge ",s[0]," ",s[1]]}),e.jsx(Se,{}),e.jsxs(Ie,{pb:5,sx:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx("h3",{size:"sm",children:"Only winner should report result"}),e.jsxs(e.Fragment,{children:[e.jsx(I,{size:"md",children:"Game Result:"}),e.jsx($,{onChange:c,value:n,children:e.jsxs(W,{direction:"row",children:[e.jsx(O,{value:"won",children:"I won"}),e.jsx(O,{isDisabled:!0,value:"lost",children:"I lost"}),e.jsx(O,{value:"draw",children:"Draw"})]})})]}),e.jsxs(e.Fragment,{children:[e.jsx(I,{size:"md",children:"Game Type:"}),e.jsx($,{onChange:i,value:a,children:e.jsxs(W,{direction:"row",children:[e.jsx(O,{value:"checkmate",children:"Checkmate"}),e.jsx(O,{value:"time",children:"Win on time"}),e.jsx(O,{value:"resignation",children:"Resignation"})]})})]})]}),e.jsxs(ke,{children:[e.jsx(v,{colorScheme:"blue",mr:3,onClick:()=>is(n,a,s,t,h),children:"Submit Result"}),e.jsx(v,{onClick:t,children:"Cancel"})]})]})]})]})}function is(s,r,l,o,t){let c=new Date().getTime();fetch(P+"/api/leaderboard/gamePlay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({opponent:l,gameResult:s,gameType:r,gameDate:c,name:localStorage.getItem("name"),passKey:localStorage.getItem("passKey")})}).then(a=>a.json()).then(a=>{o(),a.success?t({title:"Game Submitted.",description:"Refresh to see updated leaderboard.",status:"success",duration:9e3,isClosable:!0}):a.failed&&t({title:"Game Not Submitted.",description:"Your login was invalid.",status:"error",duration:9e3,isClosable:!0})})}function ue({width:s="80%",showWR:r=!0,showChallenge:l=!0}){r=!0;const[o,t]=b.useState(null);b.useEffect(()=>{const c=i=>{let h=[];Object.values(i).forEach(x=>{const u=x.won,w=x.lost,k=u-w;let T=!1;for(let y=0;y<h.length;y++){const C=h[y].won-h[y].lost;if(k>C||k===C&&x.name.localeCompare(h[y].name)<0){h.splice(y,0,x),T=!0;break}}T||h.push(x)});const m=[Ke,Ue,Je],p=h.map((x,u)=>{const w=u+1,[k,T]=x.name.split(" "),y=k,C=w<=3?m[w]:null;return e.jsxs(j,{children:[e.jsx(d,{display:"flex",flexDir:"row",alignItems:"center",children:l?e.jsx(os,{opponent:[k,T],rank:C?e.jsx(Q,{as:C}):w}):C?e.jsx(Q,{as:C}):w}),e.jsx(d,{children:r?`${k} ${T}`:y}),r&&e.jsxs(e.Fragment,{children:[e.jsx(d,{children:x.won}),e.jsx(d,{children:x.lost})]})]},w)});t(p)};(async()=>{const i=await fetch(P+"/api/leaderboard/",{method:"POST",headers:{"Content-Type":"application/json"}}).then(h=>h.json());c(i.data)})()},[r,l]);const n=f("light.header","dark.header");return e.jsx(Y,{className:"tableContainer",overflowY:"auto",bg:n,minHeight:"60vh",maxHeight:"65vh",width:s,children:e.jsxs(K,{overflowY:"scroll",className:"tableContainer",size:{base:"sm",sm:"md",md:"lg",lg:"lg"},children:[e.jsx(U,{className:"blur",bg:n,zIndex:"100",minHeight:"10vh",children:e.jsxs(j,{bg:n,minHeight:"10vh",position:"sticky",zIndex:"100",children:[e.jsx(S,{maxWidth:"10%",minHeight:"10vh",children:"Rank"}),e.jsx(S,{children:"Name"}),r===!0&&e.jsxs(e.Fragment,{children:[e.jsx(S,{children:"Won"}),e.jsx(S,{children:"Lost"})]})]})}),e.jsx(J,{children:o})]})})}function cs(){const s=f("light.sec","dark.sec"),r=f("light.fg","dark.fg");return e.jsx(g,{display:"flex",flexDir:"row",justifyContent:"center",children:e.jsxs(se,{width:["full","full","80%","70%"],isFitted:!0,variant:"enclosed",align:"center",children:[e.jsxs(te,{children:[e.jsx(z,{_selected:{color:r,bg:s},borderTopRadius:"0.8em",children:"Leaderboard"}),e.jsx(z,{_selected:{color:r,bg:s},borderTopRadius:"0.8em",children:"Your Games"})]}),e.jsxs(ne,{minHeight:"60vh",children:[e.jsxs(A,{sx:{display:"flex",flexDirection:"column"},children:[e.jsxs(Te,{rounded:"full",marginBottom:"0.5em",display:"flex",flexDir:{base:"column",sm:"column",md:"row"},gap:{base:"0",sm:"0",md:"0.5em"},colorScheme:"blue",children:[e.jsx(Re,{}),"If your result is not present let us know."]}),e.jsx(ue,{width:"100%"})]}),localStorage.getItem("email")!==null?e.jsx(A,{children:e.jsx(ls,{})}):e.jsx(A,{children:e.jsx(I,{children:e.jsx(L,{to:"/join",children:e.jsx(Le,{query:"Login",styles:{px:"2",py:"1",rounded:"full"},children:"Login to see your games!"})})})})]})]})})}function ds(){const[s]=_("(min-width: 1000px)"),r={base:"2rem",sm:"3rem",md:"4rem",lg:"4rem",xl:"6rem"};return e.jsxs(g,{display:"flex",flexDir:{base:"column",sm:"column",md:"row",lg:"row"},padding:r,gap:r,children:[e.jsxs(g,{display:"flex",flexDir:"column",alignItems:{base:"center",sm:"center",md:"flex-start",lg:"flex-start"},flex:"60",gap:"2em",children:[e.jsx(I,{as:"h1",size:"4xl",textAlign:{base:"center",sm:"left"},children:"Play."}),e.jsx(I,{as:"h1",size:"4xl",textAlign:{base:"center",sm:"left"},children:"Learn."}),e.jsx(I,{as:"h1",size:"4xl",textAlign:{base:"center",sm:"left"},children:"Compete."})]}),e.jsx(ue,{flex:"40",width:s?"50%":"100%",showChallenge:"false"})]})}const hs="/assets/header-2jmnGwmo.svg";function X({mobile:s=!1}){const{toggleColorMode:r}=re(),l=f("dark","light"),o=f(_e,qe);return e.jsx(D,{size:"md",variant:s?"unstyled":"outline",fontSize:"lg","aria-label":`Switch to ${l} mode`,onClick:r,icon:e.jsx(o,{})})}function Z(){let s=localStorage.getItem("name");const{toggleColorMode:r}=re(),l=f("dark","light");return e.jsxs(ae,{isLazy:!0,closeOnBlur:!0,children:[e.jsx(le,{as:D,variant:"outline",size:"lg","aria-label":"Acccount Options",children:e.jsx(Pe,{userSelect:"none",bg:"inherit",color:"inherit",size:"sm",name:s})}),e.jsxs(oe,{children:[e.jsx(q,{onClick:us,children:"Logout"}),e.jsxs(q,{onClick:r,children:["Enable ",l," mode"]})]})]})}function us(){window.confirm("Are you sure you want to logout?")&&(de(),window.location.reload())}function ms(){const[s]=_("(max-width: 768px)"),r=window.location.pathname,l=!!localStorage.getItem("email"),o={padding:"0 2rem",margin:"0 0.5rem"},t=[{name:"Home",link:"/",iconActive:$e,iconInactive:We},{name:"Play",link:"/board",iconActive:Qe,iconInactive:ce},{name:"Help",link:"/instructions",iconActive:Ve,iconInactive:Xe}],n=a=>r===a.link?a.iconActive:a.iconInactive,c=()=>t.map((a,i)=>e.jsx(L,{to:a.link,children:e.jsx(v,{leftIcon:e.jsx(a.iconActive,{}),style:o,variant:r===a.link?"solid":"outline",children:a.name})},i));return e.jsx(g,{display:"flex",alignItems:"center",justifyContent:s?"start":"center",flexWrap:"wrap",gap:"0.5rem",children:s?e.jsxs(e.Fragment,{children:[l?e.jsx(Z,{mobile:!0}):e.jsx(L,{to:"/join",children:e.jsx(v,{w:"4em",h:"3em",style:o,variant:"outline",children:"Join"})}),e.jsxs(ae,{isLazy:!0,closeOnBlur:!0,children:[e.jsx(le,{as:D,"aria-label":"Options",icon:e.jsx(Oe,{}),variant:"outline",size:"lg"}),e.jsxs(oe,{children:[t.map((a,i)=>e.jsx(q,{icon:n(a),as:L,to:a.link,children:a.name},i)),e.jsx(Ae,{}),e.jsx(X,{})]})]})]}):e.jsxs(e.Fragment,{children:[c(),e.jsx(X,{}),e.jsx(Z,{})]})})}function M(){const s=f("light.header","dark.header"),r={base:"2rem",sm:"3rem",md:"5rem",lg:"5rem"};return e.jsxs(g,{display:"flex",flexDir:"row",alignItems:"center",justifyContent:"space-between",paddingLeft:r,paddingRight:r,padding:"1rem",minHeight:"5vh",children:[e.jsx(De,{as:"h1",children:e.jsx(Me,{as:L,to:"/",children:e.jsx(Fe,{rel:"preload",loading:"eager",src:hs,filter:s==="light.header"?"":"invert()",minHeight:"5vh",maxHeight:["6vh","6vh","6vh","8vh"]})})}),e.jsx(ms,{})]})}function F(){return e.jsx(g,{sx:{textAlign:"center"},children:e.jsxs(R,{fontSize:"md",children:["Developed by"," ",e.jsx(V,{isExternal:!0,href:"https://github.com/mh-anwar",children:e.jsx("u",{children:"Mohammad Anwar"})})," ","and"," ",e.jsx(V,{isExternal:!0,href:"https://github.com/koolkrish18",children:e.jsx("u",{children:"Krish Nalam"})})]})})}function xs(){const[s]=_("(max-width: 500px)");return e.jsxs(g,{style:{display:"flex",flexDirection:"column",width:"100%",padding:"1em"},minHeight:"80vh",maxHeight:"90vh",gap:"0.3em",children:[e.jsx(I,{children:"How It Works"}),e.jsxs(R,{children:["1. Play your chess game, and ",e.jsx("b",{children:"if you are the winner"})," click the",s?e.jsx(D,{icon:e.jsx(ce,{}),marginLeft:"0.5em",marginRight:"0.5em"}):e.jsx(L,{to:"/board",children:e.jsx(v,{variant:"outline",marginLeft:"0.5em",marginRight:"0.5em",children:"Play"})}),"button"]}),e.jsxs(R,{children:["2. Then find your opponents name and click the Challenge button:",e.jsx(D,{marginLeft:"0.5em",marginRight:"0.5em",icon:e.jsx(ie,{})})]}),e.jsx(R,{children:"3. Submit your result (and refresh the page to see an updated leaderboard)"}),e.jsx(R,{children:"4. You're all done! Your game result has been submitted!"})]})}function gs(){return e.jsxs(g,{sx:{textAlign:"center",alignItems:"center",justifyContent:"center",minHeight:"80vh",display:"flex",flexDir:"column",margin:"5em",gap:"2em"},children:[e.jsx(I,{children:"Whoopsie daisy! Seems like there's an error!"}),e.jsx(R,{fontSize:"lg",children:"If you were expecting a page, report this error!"}),e.jsx(L,{to:"/",children:e.jsx(v,{children:" Go to the Homepage"})}),e.jsx(Ne,{width:"400px",height:"560px",ratio:1,children:e.jsx("iframe",{title:"Daily Chess Puzzle",src:"https://www.chess.com/daily_puzzle",allowtransparency:"true",frameborder:"0"})})]})}const ps=Ee([{path:"/",element:e.jsxs(e.Fragment,{children:[e.jsx(M,{}),e.jsx(ds,{}),e.jsx(F,{})]}),errorElement:e.jsx(gs,{})},{path:"/board",element:e.jsxs(g,{display:"flex",flexDir:"column",justifyContent:"space-between",children:[e.jsx(M,{}),e.jsx(cs,{}),e.jsx(F,{})]})},{path:"/join",element:e.jsxs(e.Fragment,{children:[e.jsx(M,{}),e.jsx(as,{}),e.jsx(F,{})]})},{path:"/instructions",element:e.jsxs(g,{display:"flex",flexDir:"column",justifyContent:"space-between",children:[e.jsx(M,{}),e.jsx(xs,{}),e.jsx(F,{})]})}]),js=ze({initialColorMode:"dark",useSystemColorMode:!0,colors:{dark:{header:"#322659",bg:"#065666",fg:"white",sec:"#182747",tri:"#171923"},light:{header:"#c4e7ff",bg:"#CDF0EA",fg:"black",sec:"#D8D8D8",tri:"#ECF9FF"}},styles:{global:s=>({body:{bg:He("#fafafa","")(s)}})}});me(document.getElementById("root")).render(e.jsxs(b.StrictMode,{children:[e.jsx(Ge,{}),e.jsx(Be,{theme:js,children:e.jsx(Ye,{router:ps})})]}));

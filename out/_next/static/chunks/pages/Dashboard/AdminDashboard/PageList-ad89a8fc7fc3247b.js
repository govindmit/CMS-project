(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[891],{2586:function(e,t,n){"use strict";var o=n(7294);let s=o.createContext(void 0);t.Z=s},6594:function(e,t,n){"use strict";function o({props:e,states:t,muiFormControl:n}){return t.reduce((t,o)=>(t[o]=e[o],n&&void 0===e[o]&&(t[o]=n[o]),t),{})}n.d(t,{Z:function(){return o}})},9711:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var o=n(7294),s=n(2586);function a(){return o.useContext(s.Z)}},6480:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var o=n(3366),s=n(7462),a=n(7294),r=n(4780),i=n(9766),l=n(1011),c=n(7074),u=n(5959),d=n(1588),p=n(4867),m=n(8493);function f(e){return(0,p.Z)("MuiInput",e)}let h=(0,s.Z)({},m.Z,(0,d.Z)("MuiInput",["root","underline","input"]));var g=n(5893);let v=["disableUnderline","components","componentsProps","fullWidth","inputComponent","multiline","slotProps","slots","type"],y=e=>{let{classes:t,disableUnderline:n}=e,o=(0,r.Z)({root:["root",!n&&"underline"],input:["input"]},f,t);return(0,s.Z)({},t,o)},E=(0,c.ZP)(l.Ej,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiInput",slot:"Root",overridesResolver(e,t){let{ownerState:n}=e;return[...(0,l.Gx)(e,t),!n.disableUnderline&&t.underline]}})(({theme:e,ownerState:t})=>{let n="light"===e.palette.mode,o=n?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return e.vars&&(o=`rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),(0,s.Z)({position:"relative"},t.formControl&&{"label + &":{marginTop:16}},!t.disableUnderline&&{"&:after":{borderBottom:`2px solid ${(e.vars||e).palette[t.color].main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${h.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${h.error}:after`]:{borderBottomColor:(e.vars||e).palette.error.main,transform:"scaleX(1)"},"&:before":{borderBottom:`1px solid ${o}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${h.disabled}):before`]:{borderBottom:`2px solid ${(e.vars||e).palette.text.primary}`,"@media (hover: none)":{borderBottom:`1px solid ${o}`}},[`&.${h.disabled}:before`]:{borderBottomStyle:"dotted"}})}),T=(0,c.ZP)(l.rA,{name:"MuiInput",slot:"Input",overridesResolver:l._o})({}),b=a.forwardRef(function(e,t){var n,a,r,c;let d=(0,u.Z)({props:e,name:"MuiInput"}),{disableUnderline:p,components:m={},componentsProps:f,fullWidth:h=!1,inputComponent:b="input",multiline:C=!1,slotProps:x,slots:I={},type:_="text"}=d,Z=(0,o.Z)(d,v),w=y(d),L={root:{ownerState:{disableUnderline:p}}},N=(null!=x?x:f)?(0,i.Z)(null!=x?x:f,L):L,R=null!=(n=null!=(a=I.root)?a:m.Root)?n:E,O=null!=(r=null!=(c=I.input)?c:m.Input)?r:T;return(0,g.jsx)(l.ZP,(0,s.Z)({slots:{root:R,input:O},slotProps:N,fullWidth:h,inputComponent:b,multiline:C,ref:t,type:_},Z,{classes:w}))});b.muiName="Input";var C=b},5994:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Dashboard/AdminDashboard/PageList",function(){return n(376)}])},376:function(e,t,n){"use strict";n.r(t);var o=n(5893),s=n(7294),a=n(7074),r=n(244),i=n(9807),l=n(7272),c=n(4026),u=n(6777),d=n(3978),p=n(9417),m=n(1401),f=n(8377),h=n(5050),g=n(784),v=n(562),y=n(6480),E=n(9630),T=n(5084),b=n(8656);n(5678),n(4213);var C=n(594),x=n(1163);let I=(0,a.ZP)(l.Z)(e=>{let{theme:t}=e;return{["&.".concat(c.Z.head)]:{backgroundColor:t.palette.common.black,color:t.palette.common.white},["&.".concat(c.Z.body)]:{fontSize:14}}}),_=(0,a.ZP)(p.Z)(e=>{let{theme:t}=e;return{"&:nth-of-type(odd)":{backgroundColor:t.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}}),Z=()=>{let e=(0,x.useRouter)(),[t,n]=(0,s.useState)([]),[a,l]=(0,s.useState)(""),[c,Z]=(0,s.useState)(!1);(0,s.useEffect)(()=>{w()},[]);let w=async()=>{let e=localStorage.getItem("accessToken");await b.Z.getAllPages(e).then(e=>{n(e.data)})},L=async()=>{e.push("/Editor/RichTextEditor")},N=async(t,n)=>{e.push("/Editor/ViewPage/".concat(t))},R=async()=>{let e=localStorage.getItem("accessToken");Z(!0);let{data:t}=await C.Z.get("http://192.168.168.29:8080/api/page/getpages?search=".concat(a),{headers:{Authorization:"Bearer ".concat(e)}});Z(!1),n(t)},O=async t=>{e.push("/Editor/EditPage/".concat(t))},P=async e=>{let t=localStorage.getItem("accessToken");await b.Z.removePage(e,t).then(e=>{e.status})};return(0,o.jsxs)("div",{children:[(0,o.jsx)(f.Z,{sx:{flexGrow:1},children:(0,o.jsx)(h.Z,{position:"static",style:{backgroundColor:"Silver"},children:(0,o.jsxs)(g.Z,{children:[(0,o.jsx)(v.Z,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:(0,o.jsx)(y.Z,{placeholder:"Search by name or email",mr:2,value:a,onChange:e=>l(e.target.value)})}),(0,o.jsx)(E.Z,{variant:"h6",component:"div",sx:{flexGrow:1},children:(0,o.jsx)(T.Z,{onClick:R,children:"Go"})}),(0,o.jsx)(T.Z,{onClick:L,children:"create New Page"})]})})}),(0,o.jsx)(u.Z,{component:m.Z,style:{marginTop:"10px"},children:(0,o.jsxs)(r.Z,{sx:{minWidth:700},"aria-label":"customized table",children:[(0,o.jsx)(d.Z,{children:(0,o.jsxs)(p.Z,{children:[(0,o.jsx)(I,{children:"Id"}),(0,o.jsx)(I,{children:"Name"}),(0,o.jsx)(I,{children:"Author"}),(0,o.jsx)(I,{children:"description"}),(0,o.jsx)(I,{children:"status"}),(0,o.jsx)(I,{children:"Actions"})]})}),(0,o.jsx)(i.Z,{children:null==t?void 0:t.map(e=>(0,o.jsxs)(_,{children:[(0,o.jsx)(I,{component:"th",scope:"row",children:e.id}),(0,o.jsx)(I,{children:e.name}),(0,o.jsx)(I,{children:e.author.title}),(0,o.jsx)(I,{children:e.description}),(0,o.jsx)(I,{children:e.status}),(0,o.jsxs)(I,{children:[(0,o.jsx)(T.Z,{onClick(){N(e.id,e.slug)},children:"view"}),(0,o.jsx)(T.Z,{onClick(){O(e.id)},children:"Edit"}),(0,o.jsx)(T.Z,{onClick(){P(e.id)},children:"Remove"})]})]},e.name))})]})})]})};t.default=Z},4213:function(){},1163:function(e,t,n){e.exports=n(880)},5678:function(e,t,n){"use strict";n.d(t,{Am:function(){return R},Ix:function(){return C}});var o=n(7294),s=n(6010);let a=e=>"number"==typeof e&&!isNaN(e),r=e=>"string"==typeof e,i=e=>"function"==typeof e,l=e=>r(e)||i(e)?e:null,c=e=>(0,o.isValidElement)(e)||r(e)||i(e)||a(e);function u(e){let{enter:t,exit:n,appendPosition:s=!1,collapse:a=!0,collapseDuration:r=300}=e;return function(e){let{children:i,position:l,preventExitTransition:c,done:u,nodeRef:d,isIn:p}=e,m=s?`${t}--${l}`:t,f=s?`${n}--${l}`:n,h=(0,o.useRef)(0);return(0,o.useLayoutEffect)(()=>{let e=d.current,t=m.split(" "),n=o=>{o.target===d.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===h.current&&"animationcancel"!==o.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)},[]),(0,o.useEffect)(()=>{let e=d.current,t=()=>{e.removeEventListener("animationend",t),a?function(e,t,n){void 0===n&&(n=300);let{scrollHeight:o,style:s}=e;requestAnimationFrame(()=>{s.minHeight="initial",s.height=o+"px",s.transition=`all ${n}ms`,requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(t,n)})})}(e,u,r):u()};p||(c?t():(h.current=1,e.className+=` ${f}`,e.addEventListener("animationend",t)))},[p]),o.createElement(o.Fragment,null,i)}}function d(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}let p={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){let n=this.list.get(e).filter(e=>e!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){let t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{let n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},m=e=>{let{theme:t,type:n,...s}=e;return o.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${n})`,...s})},f={info:function(e){return o.createElement(m,{...e},o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return o.createElement(m,{...e},o.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return o.createElement(m,{...e},o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return o.createElement(m,{...e},o.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return o.createElement("div",{className:"Toastify__spinner"})}};function h(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function g(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function v(e){let{closeToast:t,theme:n,ariaLabel:s="close"}=e;return o.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick(e){e.stopPropagation(),t(e)},"aria-label":s},o.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function y(e){let{delay:t,isRunning:n,closeToast:a,type:r="default",hide:l,className:c,style:u,controlledProgress:d,progress:p,rtl:m,isIn:f,theme:h}=e,g=l||d&&0===p,v={...u,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:g?0:1};d&&(v.transform=`scaleX(${p})`);let y=(0,s.Z)("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${h}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":m}),E=i(c)?c({rtl:m,type:r,defaultClassName:y}):(0,s.Z)(y,c);return o.createElement("div",{role:"progressbar","aria-hidden":g?"true":"false","aria-label":"notification timer",className:E,style:v,[d&&p>=1?"onTransitionEnd":"onAnimationEnd"]:d&&p<1?null:()=>{f&&a()}})}let E=e=>{let{isRunning:t,preventExitTransition:n,toastRef:a,eventHandlers:r}=function(e){let[t,n]=(0,o.useState)(!1),[s,a]=(0,o.useState)(!1),r=(0,o.useRef)(null),l=(0,o.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,c=(0,o.useRef)(e),{autoClose:u,pauseOnHover:d,closeToast:p,onClick:m,closeOnClick:f}=e;function v(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),l.didMove=!1,document.addEventListener("mousemove",b),document.addEventListener("mouseup",C),document.addEventListener("touchmove",b),document.addEventListener("touchend",C);let n=r.current;l.canCloseOnClick=!0,l.canDrag=!0,l.boundingRect=n.getBoundingClientRect(),n.style.transition="",l.x=h(t.nativeEvent),l.y=g(t.nativeEvent),"x"===e.draggableDirection?(l.start=l.x,l.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(l.start=l.y,l.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function y(t){if(l.boundingRect){let{top:n,bottom:o,left:s,right:a}=l.boundingRect;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&l.x>=s&&l.x<=a&&l.y>=n&&l.y<=o?T():E()}}function E(){n(!0)}function T(){n(!1)}function b(n){let o=r.current;l.canDrag&&o&&(l.didMove=!0,t&&T(),l.x=h(n),l.y=g(n),l.delta="x"===e.draggableDirection?l.x-l.start:l.y-l.start,l.start!==l.x&&(l.canCloseOnClick=!1),o.style.transform=`translate${e.draggableDirection}(${l.delta}px)`,o.style.opacity=""+(1-Math.abs(l.delta/l.removalDistance)))}function C(){document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",C),document.removeEventListener("touchmove",b),document.removeEventListener("touchend",C);let t=r.current;if(l.canDrag&&l.didMove&&t){if(l.canDrag=!1,Math.abs(l.delta)>l.removalDistance)return a(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform=`translate${e.draggableDirection}(0)`,t.style.opacity="1"}}(0,o.useEffect)(()=>{c.current=e}),(0,o.useEffect)(()=>(r.current&&r.current.addEventListener("d",E,{once:!0}),i(e.onOpen)&&e.onOpen((0,o.isValidElement)(e.children)&&e.children.props),()=>{let e=c.current;i(e.onClose)&&e.onClose((0,o.isValidElement)(e.children)&&e.children.props)}),[]),(0,o.useEffect)(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||T(),window.addEventListener("focus",E),window.addEventListener("blur",T)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",T))}),[e.pauseOnFocusLoss]);let x={onMouseDown:v,onTouchStart:v,onMouseUp:y,onTouchEnd:y};return u&&d&&(x.onMouseEnter=T,x.onMouseLeave=E),f&&(x.onClick=e=>{m&&m(e),l.canCloseOnClick&&p()}),{playToast:E,pauseToast:T,isRunning:t,preventExitTransition:s,toastRef:r,eventHandlers:x}}(e),{closeButton:l,children:c,autoClose:u,onClick:d,type:p,hideProgressBar:m,closeToast:f,transition:E,position:T,className:b,style:C,bodyClassName:x,bodyStyle:I,progressClassName:_,progressStyle:Z,updateId:w,role:L,progress:N,rtl:R,toastId:O,deleteToast:P,isIn:k,isLoading:$,iconOut:j,closeOnClick:M,theme:B}=e,A=(0,s.Z)("Toastify__toast",`Toastify__toast-theme--${B}`,`Toastify__toast--${p}`,{"Toastify__toast--rtl":R},{"Toastify__toast--close-on-click":M}),S=i(b)?b({rtl:R,position:T,type:p,defaultClassName:A}):(0,s.Z)(A,b),D=!!N||!u,z={closeToast:f,type:p,theme:B},F=null;return!1===l||(F=i(l)?l(z):(0,o.isValidElement)(l)?(0,o.cloneElement)(l,z):v(z)),o.createElement(E,{isIn:k,done:P,position:T,preventExitTransition:n,nodeRef:a},o.createElement("div",{id:O,onClick:d,className:S,...r,style:C,ref:a},o.createElement("div",{...k&&{role:L},className:i(x)?x({type:p}):(0,s.Z)("Toastify__toast-body",x),style:I},null!=j&&o.createElement("div",{className:(0,s.Z)("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!$})},j),o.createElement("div",null,c)),F,o.createElement(y,{...w&&!D?{key:`pb-${w}`}:{},rtl:R,theme:B,delay:u,isRunning:t,isIn:k,closeToast:f,hide:m,type:p,style:Z,className:_,controlledProgress:D,progress:N||0})))},T=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},b=u(T("bounce",!0)),C=(u(T("slide",!0)),u(T("zoom")),u(T("flip")),(0,o.forwardRef)((e,t)=>{let{getToastToRender:n,containerRef:u,isToastActive:m}=function(e){let[,t]=(0,o.useReducer)(e=>e+1,0),[n,s]=(0,o.useState)([]),u=(0,o.useRef)(null),m=(0,o.useRef)(new Map).current,h=e=>-1!==n.indexOf(e),g=(0,o.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:h,getToast:e=>m.get(e)}).current;function v(e){let{containerId:t}=e,{limit:n}=g.props;!n||t&&g.containerId!==t||(g.count-=g.queue.length,g.queue=[])}function y(e){s(t=>null==e?[]:t.filter(t=>t!==e))}function E(){let{toastContent:e,toastProps:t,staleId:n}=g.queue.shift();b(e,t,n)}function T(e,n){var s,h;let{delay:v,staleId:T,...C}=n;if(!c(e)||!u.current||g.props.enableMultiContainer&&C.containerId!==g.props.containerId||m.has(C.toastId)&&null==C.updateId)return;let{toastId:x,updateId:I,data:_}=C,{props:Z}=g,w=()=>y(x),L=null==I;L&&g.count++;let N={...Z,style:Z.toastStyle,key:g.toastKey++,...C,toastId:x,updateId:I,data:_,closeToast:w,isIn:!1,className:l(C.className||Z.toastClassName),bodyClassName:l(C.bodyClassName||Z.bodyClassName),progressClassName:l(C.progressClassName||Z.progressClassName),autoClose:!C.isLoading&&(s=C.autoClose,h=Z.autoClose,!1===s||a(s)&&s>0?s:h),deleteToast(){let e=d(m.get(x),"removed");m.delete(x),p.emit(4,e);let n=g.queue.length;if(g.count=null==x?g.count-g.displayedToast:g.count-1,g.count<0&&(g.count=0),n>0){let o=null==x?g.props.limit:1;if(1===n||1===o)g.displayedToast++,E();else{let s=o>n?n:o;g.displayedToast=s;for(let a=0;a<s;a++)E()}}else t()}};N.iconOut=function(e){let{theme:t,type:n,isLoading:s,icon:l}=e,c=null,u={theme:t,type:n};return!1===l||(i(l)?c=l(u):(0,o.isValidElement)(l)?c=(0,o.cloneElement)(l,u):r(l)||a(l)?c=l:s?c=f.spinner():n in f&&(c=f[n](u))),c}(N),i(C.onOpen)&&(N.onOpen=C.onOpen),i(C.onClose)&&(N.onClose=C.onClose),N.closeButton=Z.closeButton,!1===C.closeButton||c(C.closeButton)?N.closeButton=C.closeButton:!0===C.closeButton&&(N.closeButton=!c(Z.closeButton)||Z.closeButton);let R=e;(0,o.isValidElement)(e)&&!r(e.type)?R=(0,o.cloneElement)(e,{closeToast:w,toastProps:N,data:_}):i(e)&&(R=e({closeToast:w,toastProps:N,data:_})),Z.limit&&Z.limit>0&&g.count>Z.limit&&L?g.queue.push({toastContent:R,toastProps:N,staleId:T}):a(v)?setTimeout(()=>{b(R,N,T)},v):b(R,N,T)}function b(e,t,n){let{toastId:o}=t;n&&m.delete(n);let a={content:e,props:t};m.set(o,a),s(e=>[...e,o].filter(e=>e!==n)),p.emit(4,d(a,null==a.props.updateId?"added":"updated"))}return(0,o.useEffect)(()=>(g.containerId=e.containerId,p.cancelEmit(3).on(0,T).on(1,e=>u.current&&y(e)).on(5,v).emit(2,g),()=>{m.clear(),p.emit(3,g)}),[]),(0,o.useEffect)(()=>{g.props=e,g.isToastActive=h,g.displayedToast=n.length}),{getToastToRender:function(t){let n=new Map,o=Array.from(m.values());return e.newestOnTop&&o.reverse(),o.forEach(e=>{let{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)}),Array.from(n,e=>t(e[0],e[1]))},containerRef:u,isToastActive:h}}(e),{className:h,style:g,rtl:v,containerId:y}=e;return(0,o.useEffect)(()=>{t&&(t.current=u.current)},[]),o.createElement("div",{ref:u,className:"Toastify",id:y},n((e,t)=>{let n=t.length?{...g}:{...g,pointerEvents:"none"};return o.createElement("div",{className:function(e){let t=(0,s.Z)("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":v});return i(h)?h({position:e,rtl:v,defaultClassName:t}):(0,s.Z)(t,l(h))}(e),style:n,key:`container-${e}`},t.map((e,n)=>{let{content:s,props:a}=e;return o.createElement(E,{...a,isIn:m(a.toastId),style:{...a.style,"--nth":n+1,"--len":t.length},key:`toast-${a.key}`},s)}))}))}));C.displayName="ToastContainer",C.defaultProps={position:"top-right",transition:b,autoClose:5e3,closeButton:v,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let x,I=new Map,_=[],Z=1;function w(e,t){return I.size>0?p.emit(0,e,t):_.push({content:e,options:t}),t.toastId}function L(e,t){return{...t,type:t&&t.type||e,toastId:t&&(r(t.toastId)||a(t.toastId))?t.toastId:""+Z++}}function N(e){return(t,n)=>w(t,L(e,n))}function R(e,t){return w(e,L("default",t))}R.loading=(e,t)=>w(e,L("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),R.promise=function(e,t,n){let o,{pending:s,error:a,success:l}=t;s&&(o=r(s)?R.loading(s,n):R.loading(s.render,{...n,...s}));let c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},u=(e,t,s)=>{if(null==t)return void R.dismiss(o);let a={type:e,...c,...n,data:s},i=r(t)?{render:t}:t;return o?R.update(o,{...a,...i}):R(i.render,{...a,...i}),s},d=i(e)?e():e;return d.then(e=>u("success",l,e)).catch(e=>u("error",a,e)),d},R.success=N("success"),R.info=N("info"),R.error=N("error"),R.warning=N("warning"),R.warn=R.warning,R.dark=(e,t)=>w(e,L("default",{theme:"dark",...t})),R.dismiss=e=>{I.size>0?p.emit(1,e):_=_.filter(t=>null!=e&&t.options.toastId!==e)},R.clearWaitingQueue=function(e){return void 0===e&&(e={}),p.emit(5,e)},R.isActive=e=>{let t=!1;return I.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},R.update=function(e,t){void 0===t&&(t={}),setTimeout(()=>{let n=function(e,t){let{containerId:n}=t,o=I.get(n||x);return o&&o.getToast(e)}(e,t);if(n){let{props:o,content:s}=n,a={...o,...t,toastId:t.toastId||e,updateId:""+Z++};a.toastId!==e&&(a.staleId=e);let r=a.render||s;delete a.render,w(r,a)}},0)},R.done=e=>{R.update(e,{progress:1})},R.onChange=e=>(p.on(4,e),()=>{p.off(4,e)}),R.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},R.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},p.on(2,e=>{x=e.containerId||e,I.set(x,e),_.forEach(e=>{p.emit(0,e.content,e.options)}),_=[]}).on(3,e=>{I.delete(e.containerId||e),0===I.size&&p.off(0).off(1).off(5)})}},function(e){e.O(0,[11,258,774,888,179],function(){return e(e.s=5994)}),_N_E=e.O()}]);
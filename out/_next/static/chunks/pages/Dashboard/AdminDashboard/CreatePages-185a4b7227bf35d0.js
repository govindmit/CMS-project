(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[59,287],{7944:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Dashboard/AdminDashboard/CreatePages",function(){return a(732)}])},7645:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let a=s.default,r=(null==t?void 0:t.suspense)?{}:{loading(e){let{error:t,isLoading:a,pastDelay:l}=e;return null}};if(e instanceof Promise?r.loader=()=>e:"function"==typeof e?r.loader=e:"object"==typeof e&&(r=l({},r,e)),(r=l({},r,t)).suspense&&(delete r.ssr,delete r.loading),r.loadableGenerated&&delete(r=l({},r,r.loadableGenerated)).loadableGenerated,"boolean"==typeof r.ssr&&!r.suspense){if(!r.ssr)return delete r.ssr,o(a,r);delete r.ssr}return a(r)},t.noSSR=o;var l=a(6495).Z,r=a(2648).Z,s=(r(a(7294)),r(a(4588)));function o(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3644:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var l=(0,a(2648).Z)(a(7294));let r=l.default.createContext(null);t.LoadableContext=r},4588:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(6495).Z,r=(0,a(1598).Z)(a(7294)),s=a(3644);let o=[],n=[],u=!1;function i(e){let t=e(),a={loading:!0,loaded:null,error:null};return a.promise=t.then(e=>(a.loading=!1,a.loaded=e,e)).catch(e=>{throw a.loading=!1,a.error=e,e}),a}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=l({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);a.suspense&&(a.lazy=r.default.lazy(a.loader));let o=null;function i(){if(!o){let t=new d(e,a);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()}if(!u){let c=a.webpack?a.webpack():a.modules;c&&n.push(e=>{for(let t of c)if(-1!==e.indexOf(t))return i()})}function h(){i();let e=r.default.useContext(s.LoadableContext);e&&Array.isArray(a.modules)&&a.modules.forEach(t=>{e(t)})}let f=a.suspense?function(e,t){return h(),r.default.createElement(a.lazy,l({},e,{ref:t}))}:function(e,t){h();let l=r.useSyncExternalStore(o.subscribe,o.getCurrentValue,o.getCurrentValue);return r.default.useImperativeHandle(t,()=>({retry:o.retry}),[]),r.default.useMemo(()=>{var t;return l.loading||l.error?r.default.createElement(a.loading,{isLoading:l.loading,pastDelay:l.pastDelay,timedOut:l.timedOut,error:l.error,retry:o.retry}):l.loaded?r.default.createElement((t=l.loaded)&&t.__esModule?t.default:t,e):null},[e,l])};return f.preload=()=>i(),f.displayName="LoadableComponent",r.default.forwardRef(f)}(i,e)}function h(e,t){let a=[];for(;e.length;){let l=e.pop();a.push(l(t))}return Promise.all(a).then(()=>{if(e.length)return h(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{h(o).then(e,t)}),c.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let a=()=>(u=!0,t());h(n,e).then(a,a)})},window.__NEXT_PRELOADREADY=c.preloadReady,t.default=c},732:function(e,t,a){"use strict";a.r(t);var l=a(5893),r=a(7294),s=a(7004);a(5152);var o=a(120),n=a(5050),u=a(784),i=a(5084),d=a(9628),c=a(5343),h=a(8316),f=a(3953),p=a(8656),_=a(5678);a(4213);var m=a(1163);let g=()=>{let e=(0,m.useRouter)(),[t,a]=(0,r.useState)(!1),[g,b]=(0,r.useState)(),[x,y]=(0,r.useState)(),[v,j]=(0,r.useState)(),[w,C]=(0,r.useState)(),[P,O]=(0,r.useState)(),Z=(0,r.useRef)(null),k=async()=>{Z.current.editor.exportHtml(e=>{let{design:t,html:a}=e;E(a)})},E=async t=>{let a=await A(P);console.log("===",a);let l=localStorage.getItem("accessToken"),r=JSON.parse(localStorage.getItem("loginUser")),s={name:g,description:x,author:r.id,status:w,slug:a,html:t};await p.Z.createPageApi(s,l).then(t=>{200===t.status&&(_.Am.success(t.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),e.push("/Dashboard/AdminDashboard/PageList"))})},S=()=>{},T=()=>{console.log("onReady")},A=async e=>{e=(e=e.replace(/^\s+|\s+$/g,"")).toLowerCase();for(var t="\xe0\xe1\xe4\xe2\xe8\xe9\xeb\xea\xec\xed\xef\xee\xf2\xf3\xf6\xf4\xf9\xfa\xfc\xfb\xf1\xe7\xb7/_,:;",a=0,l=t.length;a<l;a++)e=e.replace(RegExp(t.charAt(a),"g"),"aaaaeeeeiiiioooouuuunc------".charAt(a));return e=e.replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")};return(0,l.jsxs)("div",{children:[(0,l.jsx)(_.Ix,{}),(0,l.jsx)(o.Z,{sx:{flexGrow:1},children:(0,l.jsx)(n.Z,{position:"static",style:{backgroundColor:"Silver"},children:(0,l.jsx)(u.Z,{children:(0,l.jsx)(i.Z,{onClick:k,children:"Export Page"})})})}),(0,l.jsxs)(o.Z,{component:"form",sx:{"& > :not(style)":{m:1,width:"25ch",marginTop:"25px"}},noValidate:!0,autoComplete:"off",children:[(0,l.jsx)(d.Z,{id:"outlined-basic",label:"name",variant:"outlined",onChange(e){b(e.target.value)}}),(0,l.jsxs)(c.Z,{fullWidth:!0,children:[(0,l.jsx)(h.Z,{variant:"standard",htmlFor:"uncontrolled-native",children:"Status"}),(0,l.jsxs)(f.Z,{onChange:e=>C(e.target.value),children:[(0,l.jsx)("option",{value:"Published",children:"Published"}),(0,l.jsx)("option",{value:"UnPublished",children:"UnPublished"})]})]}),(0,l.jsx)(d.Z,{id:"standard-basic",label:"slug",variant:"outlined",onChange(e){O(e.target.value)}})]}),(0,l.jsx)(s.Z,{ref:Z,onLoad:S,onReady:T})]})};t.default=g},5152:function(e,t,a){e.exports=a(7645)}},function(e){e.O(0,[186,11,82,582,774,888,179],function(){return e(e.s=7944)}),_N_E=e.O()}]);
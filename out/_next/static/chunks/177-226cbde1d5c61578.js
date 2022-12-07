"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{4177:function(e,l,r){r.r(l);var a=r(5893),s=r(7294),t=r(120),n=r(8661),o=r(5670),i=r(9895),d=r(9944),u=r(1977),h=r(2474),c=r(5059);r(3377);let g=()=>{let[e,l]=s.useState("1"),r=(e,r)=>{l(r)};return(0,a.jsx)("div",{children:(0,a.jsx)(i.Z,{elevation:20,style:{width:400,margin:"20px auto"},children:(0,a.jsx)(t.Z,{sx:{width:"100%",typography:"body1"},children:(0,a.jsxs)(o.ZP,{value:e,children:[(0,a.jsx)(t.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,a.jsxs)(d.Z,{onChange:r,"aria-label":"lab API tabs example",centered:!0,children:[(0,a.jsx)(n.Z,{label:"SignIn",value:"1"}),(0,a.jsx)(n.Z,{label:"SignUp",value:"2"})]})}),(0,a.jsx)(u.Z,{value:"1",children:(0,a.jsx)(h.default,{})}),(0,a.jsx)(u.Z,{value:"2",children:(0,a.jsx)(c.default,{})})]})})})})};l.default=g},2474:function(e,l,r){r.r(l);var a=r(5893),s=r(7294),t=r(1749),n=r(9895),o=r(7265),i=r(6241),d=r(709),u=r(2318),h=r(9659),c=r(2267),g=r(8656),p=r(1163),x=r(6245),m=r(9704),j=r.n(m),v=r(5678);r(4213);var Z=r(3454);let f=e=>{let{handleChange:l}=e,[r,m]=(0,s.useState)(!1),[f,b]=(0,s.useState)(),[y,S]=(0,s.useState)(),C=(0,p.useRouter)(),w={padding:20,height:"73vh",width:300,margin:"0 auto"},k={margin:"8px 0"},E=async()=>{await g.Z.loginUser({email:f,password:y}).then(e=>{let l=e.data.accessToken,r=(0,x.Z)(l);console.log("response ==",e),200===e.status?(v.Am.success("Login successfully ",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),localStorage.setItem("accessToken",e.data.accessToken),localStorage.setItem("loginUser",JSON.stringify(r.data)),"Admin"===r.data.role.title?C.push("/Dashboard/AdminDashboard/admin"):"Editor"===r.data.role.title?C.push("/Dashboard/EditorDashboard/editor"):"Author"===r.data.role.title?C.push("/Dashboard/AuthorDashboard/Author"):"Subscriber"===r.data.role.title&&C.push("/Dashboard/SubscriberDashboard/Subscribe")):v.Am.error("Login Failed ",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})})},A=async()=>{let e={email:f},l=Z.env.SIGNING_KEY||"cms_seceret",r=j().sign({data:e},l,{expiresIn:"1h"});localStorage.setItem("resetAuth",r),await g.Z.forgetPassLink(e).then(e=>{200===e.status&&v.Am.success(e.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})})};return(0,a.jsxs)("div",{children:[(0,a.jsx)(v.Ix,{}),(0,a.jsx)(t.Z,{children:r?(0,a.jsx)(t.Z,{style:{marginTop:"5px"},children:(0,a.jsxs)(n.Z,{style:w,children:[(0,a.jsx)(i.Z,{label:"Email",placeholder:"Enter Email",type:"text",fullWidth:!0,required:!0,onChange:e=>b(e.target.value)}),(0,a.jsx)(d.Z,{type:"submit",color:"primary",variant:"contained",style:k,fullWidth:!0,onClick(){A()},children:"Send"})]})}):(0,a.jsxs)(n.Z,{style:w,children:[(0,a.jsxs)(t.Z,{align:"center",children:[(0,a.jsx)(o.Z,{style:{backgroundColor:"#1bbd7e"},children:(0,a.jsx)(c.Z,{})}),(0,a.jsx)("h2",{children:"Sign In"})]}),(0,a.jsx)(i.Z,{label:"Username",placeholder:"Enter username",fullWidth:!0,required:!0,onChange(e){b(e.target.value)}}),(0,a.jsx)(i.Z,{label:"Password",placeholder:"Enter password",type:"password",fullWidth:!0,required:!0,onChange(e){S(e.target.value)}}),(0,a.jsx)(d.Z,{type:"submit",color:"primary",variant:"contained",style:k,fullWidth:!0,onClick(){E()},children:"Sign in"}),(0,a.jsx)(u.Z,{children:(0,a.jsx)(h.Z,{href:"#",onClick:()=>m(!0),children:"Forgot password ?"})})]})})]})};l.default=f},5059:function(e,l,r){r.r(l);var a=r(5893),s=r(7294),t=r(1749),n=r(9895),o=r(7265),i=r(5445),d=r(6241),u=r(709),h=r(7541),c=r(4436),g=r(8656),p=r(8316),x=r(5678);r(4213);var m=r(1163);let j=()=>{let[e,l]=(0,s.useState)(),[r,j]=(0,s.useState)(),[v,Z]=(0,s.useState)(),[f,b]=(0,s.useState)(),[y,S]=(0,s.useState)(),C=(0,s.useRef)(null),w=(0,s.useRef)(null),k=(0,s.useRef)(null),E=(0,s.useRef)(null),A=(0,s.useRef)(null),[I,O]=(0,s.useState)(!1),[P,W]=(0,s.useState)([]),R=(0,m.useRouter)();(0,s.useEffect)(()=>{D()});let D=async()=>{await g.Z.getAllRole().then(e=>{S(null==e?void 0:e.data[0].id),W(null==e?void 0:e.data)})},N=async l=>{l.preventDefault(),await g.Z.addUser({name:e,email:r,password:v,phone:f,role:y}).then(e=>{console.log(e),200===e.status?(x.Am.success(e.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),R.push("/Components/Auth")):x.Am.error(e.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}),C.current.value="",w.current.value="",k.current.value="",E.current.value="",A.current.value=""};return(0,a.jsxs)("div",{children:[(0,a.jsx)(x.Ix,{}),(0,a.jsx)(t.Z,{children:(0,a.jsxs)(n.Z,{style:{padding:20,width:300,margin:"0 auto"},children:[(0,a.jsxs)(t.Z,{align:"center",children:[(0,a.jsx)(o.Z,{style:{backgroundColor:"#1bbd7e"},children:(0,a.jsx)(h.Z,{})}),(0,a.jsx)("h2",{style:{margin:0},children:"Sign Up"})]}),(0,a.jsxs)("form",{children:[(0,a.jsxs)(c.Z,{fullWidth:!0,children:[(0,a.jsx)(p.Z,{variant:"standard",htmlFor:"uncontrolled-native",children:"Role"}),(0,a.jsx)(i.Z,{onChange:e=>S(e.target.value),ref:A,children:null==P?void 0:P.map((e,l)=>(0,a.jsx)("option",{value:null==e?void 0:e.id,children:null==e?void 0:e.title},null==e?void 0:e.id))})]}),(0,a.jsx)(d.Z,{fullWidth:!0,label:"Name",placeholder:"Enter your name",ref:C,onChange(e){l(e.target.value)}}),(0,a.jsx)(d.Z,{fullWidth:!0,label:"Email",placeholder:"Enter your email",ref:w,onChange(e){j(e.target.value)}}),(0,a.jsx)(d.Z,{fullWidth:!0,label:"Phone",placeholder:"Enter your Phone",ref:E,onChange(e){b(e.target.value)}}),(0,a.jsx)(d.Z,{fullWidth:!0,label:"Password",placeholder:"Enter your password",ref:k,onChange(e){Z(e.target.value)}}),(0,a.jsx)(d.Z,{fullWidth:!0,label:"Confirm Password",placeholder:"Confirm your password"}),(0,a.jsx)(u.Z,{type:"submit",variant:"contained",color:"primary",onClick(e){N(e)},children:"Sign up"})]})]})})]})};l.default=j},3377:function(e,l,r){r.r(l);var a=r(5893),s=r(7294),t=r(5050),n=r(120),o=r(784),i=r(9630),d=r(562),u=r(326),h=r(4731),c=r(6911);let g=()=>{let[e,l]=(0,s.useState)(),[r,g]=(0,s.useState)();return(0,s.useEffect)(()=>{let e=JSON.parse(localStorage.getItem("loginUser")),r=null==e?void 0:e.pic;l(JSON.parse(localStorage.getItem("loginUser"))),g(r)},[]),(0,a.jsx)(n.Z,{sx:{flexGrow:1},children:(0,a.jsx)(t.Z,{position:"static",children:(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(d.Z,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:(0,a.jsx)(u.Z,{})}),(0,a.jsx)(i.Z,{variant:"h6",component:"div",sx:{flexGrow:1},children:"News"}),(0,a.jsx)(i.Z,{color:"inherit",children:e?(0,a.jsx)(c.default,{children:(0,a.jsx)(h.Z,{alt:"Remy Sharp"})}):"Account"})]})})})};l.default=g}}]);
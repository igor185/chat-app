(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{249:function(e,t,a){},299:function(e,t,a){e.exports=a(535)},304:function(e,t,a){},305:function(e,t,a){},306:function(e,t,a){},307:function(e,t,a){},314:function(e,t,a){},467:function(e,t,a){},480:function(e,t,a){},481:function(e,t,a){},535:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"clearStore",function(){return _}),a.d(n,"fetchChats",function(){return F}),a.d(n,"fetchMessages",function(){return N}),a.d(n,"togglePanel",function(){return L}),a.d(n,"newMessage",function(){return T}),a.d(n,"loginUser",function(){return I}),a.d(n,"regUser",function(){return H}),a.d(n,"changePage",function(){return G}),a.d(n,"fetchUser",function(){return M}),a.d(n,"search",function(){return R}),a.d(n,"newChat",function(){return z}),a.d(n,"addChatToList",function(){return U}),a.d(n,"addMessageToChatList",function(){return D});var r=a(0),c=a.n(r),o=a(64),s=a.n(o),i=(a(304),a(305),a(306),a(307),a(93)),l=a(94),u=a(23),d="FETCH_CHATS",h="FETCH_CHATS_DONE",p="FETCH_MESSAGES",m="FETCH_MESSAGES_DONE",g="TOGGLE_PANEL",f="ADD_NEW_MESSAGE",b="LOGIN",E="LOGIN_FAIL",v="REG",O="REG_FAIL",j="CHANGE_PAGE",y="REMOVE_STORE",w="FETCH_USER",k="FETCH_USER_DONE",x="SEARCH",C="SEARCH_DONE",S="CREATE_CHAT",A="CREATE_CHAT_DONE",P="ADD_CHAT_TO_LIST",_=function(){return{type:y}},F=function(){return{type:d}},N=function(e){return{type:p,payload:{id:e}}},L=function(){return{type:g}},T=function(e){return{type:f,payload:{message:e}}},I=function(e,t){return{type:b,payload:{login:e,password:t}}},H=function(e,t,a){return{type:v,payload:{login:e,password:t,avatar:a}}},G=function(e){return{type:j,payload:e}},M=function(){return{type:w}},R=function(e){return{type:x,payload:{search:e}}},z=function(e){return{type:S,payload:{userId:e}}},U=function(e,t){return{type:P,payload:{chatId:e,user:t}}},D=function(e,t){},J=a(24),W=a(37),q=a(545),B=a(546),X=a(543),V=a(549),Y=a(551),$=a(548),K=(a(314),[{key:"user",text:"User",value:"user"}]),Q=Object(J.b)(function(e){return{search:e.search,chatList:e.chatList}},function(e){return{actions:Object(u.bindActionCreators)(n,e)}})(function(e){var t=Object(r.useState)(""),a=Object(W.a)(t,2),n=a[0],o=a[1],s=Object(r.useState)(!1),u=Object(W.a)(s,2),d=u[0],h=u[1];return c.a.createElement(q.a,{open:d,trigger:c.a.createElement("div",{className:"icon-wrap",onClick:function(){return h(!0)}},c.a.createElement(i.a,{icon:l.b}))},c.a.createElement(q.a.Header,null,"Search"),c.a.createElement(q.a.Content,{scrolling:!0},c.a.createElement(B.a,{onSubmit:function(){e.actions.search(n)}},c.a.createElement(X.a,{label:c.a.createElement(V.a,{defaultValue:K[0].value,options:K}),labelPosition:"left",placeholder:"Search...",fluid:!0,loading:e.search.isFetching,value:n,onChange:function(e,t){return o(t.value)}}),e.search.data&&e.search.data.length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Y.a,{as:"h2"},"Results"),e.search.data.map(function(t){return c.a.createElement($.a.Group,null,c.a.createElement($.a,null,c.a.createElement($.a.Avatar,{as:"a",src:t.avatar}),c.a.createElement($.a.Content,null,c.a.createElement($.a.Author,null,t.username),c.a.createElement($.a.Actions,null,c.a.createElement($.a.Action,null,c.a.createElement("span",{onClick:function(){!function(t){h(!1);var a=e.chatList.data.find(function(e){return e.user.id===t.id});if(a)return e.actions.fetchMessages(a.chat.id);e.actions.newChat(t.id)}(t)}},"Text"))))))})))))}),Z=Object(J.b)(function(e){return{}},function(e){return{actions:Object(u.bindActionCreators)(n,e)}})(function(e){return c.a.createElement("div",{className:"header-wrap"},c.a.createElement("div",{className:"left-side"},c.a.createElement("div",{className:"icon-wrap",onClick:function(){return e.actions.togglePanel()}},c.a.createElement(i.a,{icon:l.a})),c.a.createElement(Q,null)),c.a.createElement("div",{className:"right-size"},c.a.createElement("div",{className:"icon-wrap",onClick:function(){localStorage.removeItem("token"),e.actions.clearStore()}},c.a.createElement(i.a,{icon:l.c}))))}),ee=(a(467),a(279)),te=a.n(ee),ae=a(95),ne=a.n(ae),re=a(130),ce=a.n(re);ne.a.extend(ce.a);var oe=function(){return{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}},se=function(e){return ne()(e).fromNow()},ie=function(e){var t=e.name,a=e.date,n=e.message,r=e.id,o=e.avatar;return c.a.createElement("div",{className:"chat-elem-wrap",onClick:function(){return e.onClick(r)}},c.a.createElement($.a.Group,null,c.a.createElement($.a,null,c.a.createElement($.a.Avatar,{src:o}),c.a.createElement($.a.Content,null,c.a.createElement($.a.Author,{as:"a"},t),c.a.createElement($.a.Metadata,null,c.a.createElement("div",null,se(a))),c.a.createElement($.a.Text,null,n?n.message:"")))))},le=(a(480),Object(J.b)(function(e){return{chatList:e.chatList}},function(e){return{actions:Object(u.bindActionCreators)(n,e)}})(function(e){return Object(r.useEffect)(function(){e.chatList.data||e.actions.fetchChats()},[e.actions]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"chat-list-wrap"},e.chatList.data&&e.chatList.data.map(function(t){return t&&t.message&&c.a.createElement(ie,{key:t.chat.id,id:t.chat.id,name:t.user.username,date:t.message.time,message:t.message,avatar:t.user.avatar,onClick:function(a){return e.actions.fetchMessages(t.chat.id)}})})))})),ue=a(544),de=(a(481),a(280)),he=a.n(de),pe=a(281),me=a.n(pe),ge="http://localhost:8080",fe="".concat(ge,"/ws"),be="".concat(ge,"/api/chats"),Ee="".concat(ge,"/api/chat/"),ve="".concat(ge,"/api/auth/login"),Oe="".concat(ge,"/api/me"),je="".concat(ge,"/req"),ye="".concat(ge,"/api/users"),we="".concat(ge,"/api/chat"),ke={},xe=function(e,t,a){return ke.send(e,t,a)},Ce=function(e,t){if(ke.connected)console.log("already connected");else{var a=t.user.data;(ke=me.a.over(new he.a(fe))).connect({},function(){console.log("Connected",t.user),ke.subscribe("/res/new-message/".concat(a.id),function(t){var a=t.body;return e.newMessage(JSON.parse(a))}),ke.subscribe("/res/new-chat/".concat(a.id),function(t){var n=t.body,r=JSON.parse(n);e.addChatToList(r.chatId,r.user1.id===a.id?r.user1:r.user2)})})}},Se=Object(J.b)(function(e){return{user:e.user,chat:e.chat}},function(e){return{actions:Object(u.bindActionCreators)(n,e)}})(function(e){var t=Object(r.useState)(""),a=Object(W.a)(t,2),n=a[0],o=a[1];return c.a.createElement(B.a,{onSubmit:function(t){n&&(xe("/req/new-message",{},JSON.stringify({chatId:e.chat.id,userId:e.user.data.id,message:n})),o(""))}},c.a.createElement(X.a,{placeholder:"Type a message...",fluid:!0,value:n,onChange:function(e,t){return o(t.value)}}))});ne.a.extend(ce.a);var Ae=function(e){return c.a.createElement($.a,null,c.a.createElement($.a.Avatar,{src:e.user.avatar}),c.a.createElement($.a.Content,null,c.a.createElement($.a.Author,{as:"a"},e.user.username),c.a.createElement($.a.Metadata,null,c.a.createElement("div",null,se(e.time))),c.a.createElement($.a.Text,null,e.message),c.a.createElement($.a.Actions,null,c.a.createElement($.a.Action,null,"Reply"))))},Pe=function(e){return c.a.createElement(c.a.Fragment,null," ",e.chat.data.map(function(e){return c.a.createElement(Ae,Object.assign({key:e.id},e))}))},_e=Object(J.b)(function(e){return{chat:e.chat}},function(e){return{actions:Object(u.bindActionCreators)(n,e)}})(function(e){return c.a.createElement("div",{className:"chat-page-wrapper"},e.chat.isOpen?e.chat.isFetching?c.a.createElement("div",{className:"loader-wrap"},c.a.createElement(ue.a,{active:!0,inline:"centered"})):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"messages-wrap"},c.a.createElement($.a.Group,null,c.a.createElement(Pe,e))),c.a.createElement("div",{className:"input-wrap"},c.a.createElement(Se,null))):"close")}),Fe=a(552),Ne=Object(J.b)(function(e){return{state:e,showPanel:e.showPanel,user:e.user}},function(e){return{actions:Object(u.bindActionCreators)(n,e)}})(function(e){return Object(r.useEffect)(function(){e.actions&&e.user.data&&(console.log("init"),Ce(e.actions,e.state))},[e.actions,e.user]),Object(r.useEffect)(function(){e.actions.fetchUser()},[e.actions]),e.user.data&&!e.user.isFetching?c.a.createElement("div",{className:"main-wrapper"},c.a.createElement("div",{style:{background:"white"}},c.a.createElement(Z,null),c.a.createElement("div",{className:"content-wrap"},e.showPanel&&c.a.createElement(le,e),c.a.createElement(_e,null)))):c.a.createElement(Fe.a,{active:!0,inverted:!0},c.a.createElement(ue.a,{inverted:!0}))}),Le=(a(516),a(553)),Te=a(554),Ie=a(536),He=a(550),Ge=Object(J.b)(function(e){return{showPanel:e.showPanel,loginPage:e.loginPage}},function(e){return{actions:Object(u.bindActionCreators)(n,e)}})(function(e){var t=Object(r.useState)(""),a=Object(W.a)(t,2),n=a[0],o=a[1],s=Object(r.useState)(""),i=Object(W.a)(s,2),l=i[0],u=i[1];return c.a.createElement(Le.a,{textAlign:"center",style:{position:"absolute",top:"30%",left:"35%"},verticalAlign:"middle"},c.a.createElement(Le.a.Column,{style:{width:500,background:"white"}},c.a.createElement(Y.a,{as:"h2",textAlign:"center"},"Login to your account"),c.a.createElement(B.a,{size:"large"},c.a.createElement(Te.a,{stacked:!0},c.a.createElement(B.a.Input,{fluid:!0,icon:"user",iconPosition:"left",placeholder:"E-mail address",value:n,onChange:function(e,t){return o(t.value)}}),c.a.createElement(B.a.Input,{fluid:!0,icon:"lock",iconPosition:"left",placeholder:"Password",type:"password",value:l,onChange:function(e,t){return u(t.value)},error:e.loginPage&&!!e.loginPage.error}),c.a.createElement(Ie.a,{className:"color-btn",fluid:!0,size:"large",onClick:function(){return e.actions.loginUser(n,l)},loading:e.loginPage&&e.loginPage.isFetching},"Login"))),c.a.createElement(He.a,null,"New to us? ",c.a.createElement("a",{href:"#",onClick:function(){return e.actions.changePage("reg")}},"Sign Up"))))}),Me=a(80),Re=a(282),ze=a.n(Re),Ue=(a(517),Object(Me.a)(function(e){for(var t=[],a=0;a<e;a++)t[a]=te.a.avatar();return t}(14))),De=Object(J.b)(function(e){return{showPanel:e.showPanel,regPage:e.regPage}},function(e){return{actions:Object(u.bindActionCreators)(n,e)}})(function(e){var t=Object(r.useState)(""),a=Object(W.a)(t,2),n=a[0],o=a[1],s=Object(r.useState)(""),i=Object(W.a)(s,2),l=i[0],u=i[1],d=Object(r.useState)(""),h=Object(W.a)(d,2),p=h[0],m=h[1];return console.log(e.regPage&&e.regPage.error),c.a.createElement(Le.a,{textAlign:"center",style:{position:"absolute",top:"20%",left:"35%"},verticalAlign:"middle"},c.a.createElement(Le.a.Column,{style:{width:500,background:"white"}},c.a.createElement(Y.a,{as:"h2",textAlign:"center"},"Sign up to your account"),c.a.createElement(B.a,{size:"large"},c.a.createElement(Te.a,{stacked:!0},c.a.createElement(B.a.Input,{fluid:!0,icon:"user",iconPosition:"left",placeholder:"E-mail address",value:n,onChange:function(e,t){return o(t.value)}}),c.a.createElement(B.a.Input,{fluid:!0,icon:"lock",iconPosition:"left",placeholder:"Password",type:"password",value:l,onChange:function(e,t){return u(t.value)}}),c.a.createElement(Y.a,{as:"h4",textAlign:"left"},"Choose a photo"),c.a.createElement(ze.a,{images:Ue.map(function(e,t){return{src:e,value:t}}),onPick:function(e){return m(e.src)}}),c.a.createElement(Ie.a,{className:"color-btn",fluid:!0,size:"large",onClick:function(){return e.actions.regUser(n,l,p)},loading:e.regPage&&e.regPage.isFetching},"Sign up"))),e.regPage&&!!e.regPage.error&&c.a.createElement(He.a,{error:!0,content:e.regPage.error}),c.a.createElement(He.a,null,"Already has account? ",c.a.createElement("a",{href:"#",onClick:function(){return e.actions.changePage("login")}},"Login"))))}),Je=(a(249),function(){particlesJS("particles-js",{particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:5,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,config_demo:{hide_card:!1,background_color:"#b61924",background_image:"",background_position:"50% 50%",background_repeat:"no-repeat",background_size:"cover"}})}),We=function(e){return Object(r.useEffect)(function(){Je()},[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{id:"particles-js"}),"login"===e.page?c.a.createElement(Ge,null):c.a.createElement(De,null))},qe=Object(J.b)(function(e){return{page:e.page}})(function(e){switch(e.page){case"login":case"reg":return c.a.createElement(We,{page:e.page});default:return c.a.createElement("div",{className:"App"},c.a.createElement(Ne,null))}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Be=a(26),Xe=a.n(Be),Ve=a(27),Ye=a(283),$e=a.n(Ye),Ke=a(17),Qe=a(284),Ze=function(){var e=Object(Qe.a)(Xe.a.mark(function e(t,a){var n,r;return Xe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a&&a.headers?Object(Ke.a)({},oe().headers,{},a.headers):oe().headers,console.log(a,Object(Ke.a)({},a||{},{headers:n})),a&&a.body&&(n=new Headers(Object(Ke.a)({"Content-Type":"application/json"},n))),e.next=5,fetch(t,Object(Ke.a)({},a||{},{headers:n}));case 5:if(401!==(r=e.sent).status){e.next=9;break}return localStorage.removeItem("token"),e.abrupt("return",window.location.reload());case 9:if(r.ok){e.next=17;break}return console.error(r),e.t0=console,e.next=14,r.json();case 14:throw e.t1=e.sent,e.t0.log.call(e.t0,e.t1),new Error(r.statusText+" "+r.status);case 17:return e.next=19,r.json();case 19:return e.abrupt("return",e.sent);case 20:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),et=Xe.a.mark(it),tt=Xe.a.mark(lt),at=Xe.a.mark(ut),nt=Xe.a.mark(dt),rt=Xe.a.mark(ht),ct=Xe.a.mark(pt),ot=Xe.a.mark(mt),st=Xe.a.mark(gt);function it(e){var t;return Xe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ze(be);case 3:return t=e.sent,e.next=6,Object(Ve.a)({type:h,payload:t});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},et,null,[[0,8]])}function lt(e){var t;return Xe.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Ze(Ee+e.payload.id,{headers:oe().headers});case 3:return t=a.sent,a.next=6,Object(Ve.a)({type:m,payload:t});case 6:a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}},tt,null,[[0,8]])}function ut(e){var t;return Xe.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Ze(ve,{method:"POST",body:JSON.stringify({username:e.payload.login,password:e.payload.password}),headers:{"X-Requested-With":"XMLHttpRequest"}});case 3:return t=a.sent,localStorage.setItem("token",t.token),a.next=7,Object(Ve.a)({type:j,payload:"chat"});case 7:a.next=14;break;case 9:return a.prev=9,a.t0=a.catch(0),a.next=13,Object(Ve.a)({type:E});case 13:console.error(a.t0);case 14:case"end":return a.stop()}},at,null,[[0,9]])}function dt(e){var t;return Xe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ze(Oe,{method:"GET",headers:oe().headers});case 3:return t=e.sent,e.next=6,Object(Ve.a)({type:k,payload:{user:t}});case 6:e.next=14;break;case 8:return e.prev=8,e.t0=e.catch(0),console.error(e.t0),localStorage.removeItem("token"),e.next=14,Object(Ve.a)({type:y});case 14:case"end":return e.stop()}},nt,null,[[0,8]])}function ht(e){var t,a,n,r;return Xe.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,a=t.login,n=t.password,r=t.avatar,c.prev=1,c.next=4,$e()({method:"POST",url:je,data:{username:a,password:n,avatar:r}});case 4:return c.sent,c.next=7,Object(Ve.a)({type:b,payload:{login:a,password:n}});case 7:c.next=14;break;case 9:return c.prev=9,c.t0=c.catch(1),c.next=13,Object(Ve.a)({type:O,payload:{error:c.t0.message}});case 13:console.error(c.t0);case 14:case"end":return c.stop()}},rt,null,[[1,9]])}function pt(e){var t;return Xe.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Ze(ye+"?search=".concat(e.payload.search));case 3:return t=a.sent,a.next=6,Object(Ve.a)({type:C,payload:t});case 6:a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.error(a.t0);case 11:case"end":return a.stop()}},ct,null,[[0,8]])}function mt(e){var t;return Xe.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Ze(we,{method:"PUT",body:JSON.stringify({userId:e.payload.userId})});case 3:return t=a.sent,a.next=6,Object(Ve.a)({type:A,payload:{chatId:t.chatId}});case 6:a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.error(a.t0);case 11:case"end":return a.stop()}},ot,null,[[0,8]])}function gt(){return Xe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ve.b)(d,it);case 2:return e.next=4,Object(Ve.b)(p,lt);case 4:return e.next=6,Object(Ve.b)(b,ut);case 6:return e.next=8,Object(Ve.b)(w,dt);case 8:return e.next=10,Object(Ve.b)(v,ht);case 10:return e.next=12,Object(Ve.b)(x,pt);case 12:return e.next=14,Object(Ve.b)(S,mt);case 14:case"end":return e.stop()}},st)}var ft={chatList:{data:null,isFetching:!1},user:{isFetching:!1,data:null},chat:{id:null,isFetching:!1,isOpen:!1,data:[]},showPanel:!0,page:localStorage.getItem("token")&&"undefined"!==localStorage.getItem("token")?"chat":"login",search:{isFetching:!1}};function bt(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ft,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case d:return Object(Ke.a)({},a,{chatList:Object(Ke.a)({},a.chatList,{isFetching:!0})});case g:return Object(Ke.a)({},a,{showPanel:!a.showPanel});case h:return Object(Ke.a)({},a,{chatList:Object(Ke.a)({},a.chatList,{data:n.payload,isFetching:!1})});case p:return Object(Ke.a)({},a,{chat:Object(Ke.a)({},a.chat,{id:n.payload.id,isFetching:!0,isOpen:!0})});case m:return Object(Ke.a)({},a,{chat:Object(Ke.a)({},a.chat,{data:n.payload,isFetching:!1})});case f:return t=n.payload.message,e=Object(Me.a)(a.chatList.data||[]).map(function(e){return e.chat.id===t.chat.id&&(e.message=t),e}),Object(Ke.a)({},a,{chatList:Object(Ke.a)({},a.chatList,{data:e}),chat:Object(Ke.a)({},a.chat,{data:a.chat.id===t.chat.id?[].concat(Object(Me.a)(a.chat.data||[]),[n.payload.message]):a.chat.data})});case j:return Object(Ke.a)({},a,{page:n.payload});case y:return Object(Ke.a)({},ft,{page:"login"});case w:return Object(Ke.a)({},a,{user:Object(Ke.a)({},a.user,{isFetching:!0})});case k:return Object(Ke.a)({},a,{user:Object(Ke.a)({},a.user,{isFetching:!1,data:n.payload.user})});case b:return Object(Ke.a)({},a,{loginPage:{isFetching:!0,error:null}});case E:return Object(Ke.a)({},a,{loginPage:{isFetching:!1,error:!0}});case v:return Object(Ke.a)({},a,{regPage:{isFetching:!0,error:null}});case O:return Object(Ke.a)({},a,{regPage:{isFetching:!1,error:n.payload.error}});case x:return Object(Ke.a)({},a,{search:Object(Ke.a)({},a.search,{isFetching:!0})});case C:return Object(Ke.a)({},a,{search:Object(Ke.a)({},a.search,{isFetching:!1,data:n.payload})});case S:return Object(Ke.a)({},a,{chat:Object(Ke.a)({},a.chat,{isFetching:!0,isOpen:!0})});case A:return Object(Ke.a)({},a,{chat:Object(Ke.a)({},a.chat,{id:n.payload.chatId,isFetching:!1,data:[]})});case P:return(e=Object(Me.a)(a.chatList.data||[])).push({chat:{id:n.payload.chatId},message:null,user:n.payload.user}),Object(Ke.a)({},a,{chatList:Object(Ke.a)({},a.chatList,{data:e})});default:return a}}var Et=a(286),vt=a(285),Ot=function(){var e=Object(Et.a)(),t=Object(u.createStore)(bt,Object(vt.composeWithDevTools)(Object(u.applyMiddleware)(e)));return e.run(gt),t}();s.a.render(c.a.createElement(J.a,{store:Ot},c.a.createElement(qe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[299,1,2]]]);
//# sourceMappingURL=main.792113c8.chunk.js.map
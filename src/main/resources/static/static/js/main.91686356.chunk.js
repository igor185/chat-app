(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{194:function(e,t,a){},241:function(e,t,a){e.exports=a(442)},246:function(e,t,a){},247:function(e,t,a){},248:function(e,t,a){},249:function(e,t,a){},256:function(e,t,a){},336:function(e,t,a){},337:function(e,t,a){},442:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"clearStore",function(){return y}),a.d(n,"fetchChats",function(){return k}),a.d(n,"fetchMessages",function(){return x}),a.d(n,"togglePanel",function(){return S}),a.d(n,"newMessage",function(){return C}),a.d(n,"loginUser",function(){return _}),a.d(n,"regUser",function(){return A}),a.d(n,"changePage",function(){return N}),a.d(n,"fetchUser",function(){return P});var r=a(0),c=a.n(r),o=a(53),s=a.n(o),i=(a(246),a(247),a(248),a(249),a(104)),l=a(105),u=a(21),d="FETCH_CHATS",m="FETCH_CHATS_DONE",p="FETCH_MESSAGES",f="FETCH_MESSAGES_DONE",h="TOGGLE_PANEL",g="ADD_NEW_MESSAGE",b="LOGIN",E="REG",v="CHANGE_PAGE",O="REMOVE_STORE",w="FETCH_USER",j="FETCH_USER_DONE",y=function(){return{type:O}},k=function(){return{type:d}},x=function(e){return{type:p,payload:{id:e}}},S=function(){return{type:h}},C=function(e){return{type:g,payload:{message:e}}},_=function(e,t){return{type:b,payload:{login:e,password:t}}},A=function(e,t,a){return{type:E,payload:{login:e,password:t,avatar:a}}},N=function(e){return{type:v,payload:e}},P=function(){return{type:w}},F=a(26),T=Object(F.b)(function(e){return{}},function(e){return{actions:Object(u.bindActionCreators)(n,e)}})(function(e){return c.a.createElement("div",{className:"header-wrap"},c.a.createElement("div",{className:"left-side"},c.a.createElement("div",{className:"icon-wrap",onClick:function(){return e.actions.togglePanel()}},c.a.createElement(i.a,{icon:l.a})),c.a.createElement("div",{className:"icon-wrap"},c.a.createElement(i.a,{icon:l.b}))),c.a.createElement("div",{className:"right-size"},c.a.createElement("div",{className:"icon-wrap",onClick:function(){localStorage.removeItem("token"),e.actions.clearStore()}},c.a.createElement(i.a,{icon:l.c}))))}),L=(a(256),a(454)),I=function(e){var t=e.name,a=(e.date,e.message),n=e.id;return c.a.createElement("div",{className:"chat-elem-wrap",onClick:function(){return e.onClick(n)}},c.a.createElement(L.a.Group,null,c.a.createElement(L.a,null,c.a.createElement(L.a.Avatar,{src:"https://react.semantic-ui.com/images/avatar/small/joe.jpg"}),c.a.createElement(L.a.Content,null,c.a.createElement(L.a.Author,{as:"a"},t),c.a.createElement(L.a.Metadata,null,c.a.createElement("div",null,"Today at 5:42PM")),c.a.createElement(L.a.Text,null,a?a.message:"")))))},M=(a(336),Object(F.b)(function(e){return{chatList:e.chatList}},function(e){return{actions:Object(u.bindActionCreators)(n,e)}})(function(e){return Object(r.useEffect)(function(){e.chatList.data||e.actions.fetchChats()},[e.actions]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"chat-list-wrap"},e.chatList.data&&e.chatList.data.map(function(t){return c.a.createElement(I,{key:t.chat.id,id:t.chat.id,name:t.user.username,date:t.time,message:t.message,onClick:function(a){return e.actions.fetchMessages(t.chat.id)}})})))})),G=a(451),z=(a(337),a(452)),H=a(450),U=a(23),R=a(208),D=a.n(R),J=a(209),W=a.n(J),B="https://igor-babin-chat-java.herokuapp.com/",q="".concat(B,"/ws"),X="".concat(B,"/api/chats"),V="".concat(B,"/api/chat/"),Y="".concat(B,"/api/auth/login"),$="".concat(B,"/api/me"),K="https://igor-babin-chat-java.herokuapp.com/",Q=W.a.over(new D.a(q)),Z=Object(U.a)({},Q,{send:Q.send.bind(Q),connect:function(e){Q.connect({},function(){console.log("Connected"),Q.subscribe("/res/new-message",function(t){var a=t.body;return e.newMessage(JSON.parse(a))})})}}),ee=function(){return c.a.createElement(z.a,{onSubmit:function(e){return t=e.currentTarget.getElementsByTagName("input")[0].value,void Z.send("/req/new-message",{},JSON.stringify({chatId:4,userId:1,message:t}));var t}},c.a.createElement(H.a,{placeholder:"Type a message...",fluid:!0}))},te=a(137),ae=a.n(te),ne=a(222),re=a.n(ne);ae.a.extend(re.a);var ce=function(e){return c.a.createElement(L.a,null,c.a.createElement(L.a.Avatar,{src:"https://react.semantic-ui.com/images/avatar/small/joe.jpg"}),c.a.createElement(L.a.Content,null,c.a.createElement(L.a.Author,{as:"a"},e.user.username),c.a.createElement(L.a.Metadata,null,c.a.createElement("div",null,ae()(e.time).fromNow())),c.a.createElement(L.a.Text,null,e.message),c.a.createElement(L.a.Actions,null,c.a.createElement(L.a.Action,null,"Reply"))))},oe=function(e){return c.a.createElement(c.a.Fragment,null," ",e.chat.data.map(function(e){return c.a.createElement(ce,e)}))},se=Object(F.b)(function(e){return{chat:e.chat}},function(e){return{actions:Object(u.bindActionCreators)(n,e)}})(function(e){return c.a.createElement("div",{className:"chat-page-wrapper"},e.chat.isOpen?e.chat.isFetching?c.a.createElement("div",{className:"loader-wrap"},c.a.createElement(G.a,{active:!0,inline:"centered"})):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"messages-wrap"},c.a.createElement(L.a.Group,null,c.a.createElement(oe,e))),c.a.createElement("div",{className:"input-wrap"},c.a.createElement(ee,null))):"close")}),ie=a(456),le=Object(F.b)(function(e){return{showPanel:e.showPanel,user:e.user}},function(e){return{actions:Object(u.bindActionCreators)(n,e)}})(function(e){return Object(r.useEffect)(function(){Z.connect(e.actions)},[e.actions]),Object(r.useEffect)(function(){e.actions.fetchUser()},[e.actions]),e.user.data&&!e.user.isFetching?c.a.createElement("div",{className:"main-wrapper"},c.a.createElement("div",{style:{background:"white"}},c.a.createElement(T,null),c.a.createElement("div",{className:"content-wrap"},e.showPanel&&c.a.createElement(M,e),c.a.createElement(se,null)))):c.a.createElement(ie.a,{active:!0,inverted:!0},c.a.createElement(G.a,{inverted:!0}))}),ue=(a(411),a(54)),de=a(458),me=a(457),pe=a(459),fe=a(443),he=a(455),ge=Object(F.b)(function(e){return{showPanel:e.showPanel}},function(e){return{actions:Object(u.bindActionCreators)(n,e)}})(function(e){var t=Object(r.useState)(""),a=Object(ue.a)(t,2),n=a[0],o=a[1],s=Object(r.useState)(""),i=Object(ue.a)(s,2),l=i[0],u=i[1];return c.a.createElement(de.a,{textAlign:"center",style:{position:"absolute",top:"30%",left:"35%"},verticalAlign:"middle"},c.a.createElement(de.a.Column,{style:{width:500,background:"white"}},c.a.createElement(me.a,{as:"h2",textAlign:"center"},"Login to your account"),c.a.createElement(z.a,{size:"large"},c.a.createElement(pe.a,{stacked:!0},c.a.createElement(z.a.Input,{fluid:!0,icon:"user",iconPosition:"left",placeholder:"E-mail address",value:n,onChange:function(e,t){return o(t.value)}}),c.a.createElement(z.a.Input,{fluid:!0,icon:"lock",iconPosition:"left",placeholder:"Password",type:"password",value:l,onChange:function(e,t){return u(t.value)}}),c.a.createElement(fe.a,{className:"color-btn",fluid:!0,size:"large",onClick:function(){return e.actions.loginUser(n,l)}},"Login"))),c.a.createElement(he.a,null,"New to us? ",c.a.createElement("a",{href:"#",onClick:function(){return e.actions.changePage("reg")}},"Sign Up"))))}),be=a(103),Ee=a(223),ve=a.n(Ee),Oe=(a(412),a(224)),we=a.n(Oe),je=function(){return{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}},ye=Object(be.a)(function(e){for(var t=[],a=0;a<e;a++)t[a]=we.a.avatar();return t}(14)),ke=Object(F.b)(function(e){return{showPanel:e.showPanel}},function(e){return{actions:Object(u.bindActionCreators)(n,e)}})(function(e){var t=Object(r.useState)(""),a=Object(ue.a)(t,2),n=a[0],o=a[1],s=Object(r.useState)(""),i=Object(ue.a)(s,2),l=i[0],u=i[1],d=Object(r.useState)(""),m=Object(ue.a)(d,2),p=m[0],f=m[1];return c.a.createElement(de.a,{textAlign:"center",style:{position:"absolute",top:"20%",left:"35%"},verticalAlign:"middle"},c.a.createElement(de.a.Column,{style:{width:500,background:"white"}},c.a.createElement(me.a,{as:"h2",textAlign:"center"},"Sign up to your account"),c.a.createElement(z.a,{size:"large"},c.a.createElement(pe.a,{stacked:!0},c.a.createElement(z.a.Input,{fluid:!0,icon:"user",iconPosition:"left",placeholder:"E-mail address",value:n,onChange:function(e,t){return o(t.value)}}),c.a.createElement(z.a.Input,{fluid:!0,icon:"lock",iconPosition:"left",placeholder:"Password",type:"password",value:l,onChange:function(e,t){return u(t.value)}}),c.a.createElement(me.a,{as:"h4",textAlign:"left"},"Choose a photo"),c.a.createElement(ve.a,{images:ye.map(function(e,t){return{src:e,value:t}}),onPick:function(e){return f(e.src)}}),c.a.createElement(fe.a,{className:"color-btn",fluid:!0,size:"large",onClick:function(){return e.actions.regUser(n,l,p)}},"Sign up"))),c.a.createElement(he.a,null,"Already has account? ",c.a.createElement("a",{href:"#",onClick:function(){return e.actions.changePage("login")}},"Login"))))}),xe=(a(194),function(){particlesJS("particles-js",{particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:5,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,config_demo:{hide_card:!1,background_color:"#b61924",background_image:"",background_position:"50% 50%",background_repeat:"no-repeat",background_size:"cover"}})}),Se=function(e){return Object(r.useEffect)(function(){xe()},[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{id:"particles-js"}),"login"===e.page?c.a.createElement(ge,null):c.a.createElement(ke,null))},Ce=Object(F.b)(function(e){return{page:e.page}})(function(e){switch(e.page){case"login":case"reg":return c.a.createElement(Se,{page:e.page});default:return c.a.createElement("div",{className:"App"},c.a.createElement(le,null))}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _e=a(31),Ae=a.n(_e),Ne=a(33),Pe=a(225),Fe=a.n(Pe),Te=Ae.a.mark(He),Le=Ae.a.mark(Ue),Ie=Ae.a.mark(Re),Me=Ae.a.mark(De),Ge=Ae.a.mark(Je),ze=Ae.a.mark(We);function He(e){var t;return Ae.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(X,{headers:je().headers});case 3:return t=e.sent,e.next=6,t.json();case 6:return t=e.sent,e.next=9,Object(Ne.a)({type:m,payload:t});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}},Te,null,[[0,11]])}function Ue(e){var t;return Ae.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch(V+e.payload.id,{headers:je().headers});case 3:return t=a.sent,a.next=6,t.json();case 6:return t=a.sent,a.next=9,Object(Ne.a)({type:f,payload:t});case 9:a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),console.log(a.t0);case 14:case"end":return a.stop()}},Le,null,[[0,11]])}function Re(e){var t;return Ae.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch(Y,{method:"POST",body:JSON.stringify({username:e.payload.login,password:e.payload.password}),headers:{"X-Requested-With":"XMLHttpRequest"}});case 3:return t=a.sent,a.next=6,t.json();case 6:return t=a.sent,localStorage.setItem("token",t.token),a.next=10,Object(Ne.a)({type:v,payload:"chat"});case 10:a.next=15;break;case 12:a.prev=12,a.t0=a.catch(0),console.log(a.t0);case 15:case"end":return a.stop()}},Ie,null,[[0,12]])}function De(e){var t;return Ae.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch($,{method:"GET",headers:je().headers});case 3:return t=e.sent,e.next=6,t.json();case 6:return t=e.sent,e.next=9,Object(Ne.a)({type:j,payload:{user:t}});case 9:e.next=17;break;case 11:return e.prev=11,e.t0=e.catch(0),console.error(e.t0),localStorage.removeItem("token"),e.next=17,Object(Ne.a)({type:O});case 17:case"end":return e.stop()}},Me,null,[[0,11]])}function Je(e){var t,a,n,r,c;return Ae.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,a=t.login,n=t.password,r=t.avatar,o.prev=1,o.next=4,Fe()({method:"POST",url:K,data:{username:a,password:n,avatar:r}});case 4:return c=o.sent,console.log(c),o.next=8,c.json();case 8:c=o.sent,console.log(c),o.next=15;break;case 12:o.prev=12,o.t0=o.catch(1),console.error(o.t0);case 15:case"end":return o.stop()}},Ge,null,[[1,12]])}function We(){return Ae.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ne.b)(d,He);case 2:return e.next=4,Object(Ne.b)(p,Ue);case 4:return e.next=6,Object(Ne.b)(b,Re);case 6:return e.next=8,Object(Ne.b)(w,De);case 8:return e.next=10,Object(Ne.b)(E,Je);case 10:case"end":return e.stop()}},ze)}var Be={chatList:{data:null,isFetching:!1},user:{isFetching:!1,data:null},chat:{isFetching:!1,isOpen:!1,data:[]},showPanel:!0,page:localStorage.getItem("token")&&void 0!==localStorage.getItem("token")?"chat":"login"};function qe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(U.a)({},e,{chatList:Object(U.a)({},e.chatList,{isFetching:!0})});case h:return Object(U.a)({},e,{showPanel:!e.showPanel});case m:return Object(U.a)({},e,{chatList:Object(U.a)({},e.chatList,{data:t.payload,isFetching:!1})});case p:return Object(U.a)({},e,{chat:Object(U.a)({},e.chat,{isFetching:!0,isOpen:!0})});case f:return Object(U.a)({},e,{chat:Object(U.a)({},e.chat,{data:t.payload,isFetching:!1})});case g:return Object(U.a)({},e,{chat:Object(U.a)({},e.chat,{data:[].concat(Object(be.a)(e.chat.data||[]),[t.payload.message])})});case v:return Object(U.a)({},e,{page:t.payload});case O:return Object(U.a)({},Be,{page:"login"});case w:return Object(U.a)({},e,{user:Object(U.a)({},e.user,{isFetching:!0})});case j:return Object(U.a)({},e,{user:Object(U.a)({},e.user,{isFetching:!1,data:t.payload.user})});default:return e}}var Xe=a(227),Ve=a(226),Ye=function(){var e=Object(Xe.a)(),t=Object(u.createStore)(qe,Object(Ve.composeWithDevTools)(Object(u.applyMiddleware)(e)));return e.run(We),t}();s.a.render(c.a.createElement(F.a,{store:Ye},c.a.createElement(Ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[241,1,2]]]);
//# sourceMappingURL=main.91686356.chunk.js.map
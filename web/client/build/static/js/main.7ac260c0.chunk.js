(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{265:function(e,t,n){e.exports=n(464)},273:function(e,t,n){},293:function(e,t,n){},296:function(e,t,n){},457:function(e,t,n){},464:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(47),o=n.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(19),l=n(113),s=n(53),u=n(89),d=n(162),f="UPDATE_GUILD",p="TEST_ACTION",m="CHANGE_PAGE",h="CHANGE_FEED",b="ADD_FEED",g="REMOVE_FEED",v="SET_GUILD_CHANNELS",O="SET_GUILD_AUTHORIZATION",E="SET_ACTIVE_GUILD",j=n(42),k=n.n(j),S={testVal:"Initial State Value",activeGuild:"",activeFeed:"",feeds:{},guilds:{},channels:{}};var I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0,n=e.activeGuild;if(t.type===p)return k()(e,{testVal:{$set:t.payload}});if(t.type===f)return k()(e,{guildRss:{$set:t.payload}});if(t.type===m)return k()(e,{page:{$set:t.page}});if(t.type===h){var a=e.feeds[e.activeGuild];if(!a)return e;for(var r=Object(d.a)(a),i=0;i<r.length;++i){var o=r[i];if(o.rssName===t.rssName){var c=Object(u.a)({},o);for(var l in t.data)c[l]=t.data[l];return r[i]=c,k()(e,{feeds:Object(s.a)({},n,{$set:r})})}}}else{if("INIT_STATE"===t.type){var j=t.data,I={user:{$set:j.user}};for(var w in j)I[w]={$set:j[w]};return k()(e,I)}if(t.type===v)return k()(e,{channels:Object(s.a)({},n,{$set:t.channels})});if(t.type===O)return k()(e,{guilds:Object(s.a)({},n,{authorized:{$set:t.authorized}})});if(t.type===E)return k()(e,{activeGuild:{$set:t.guildId}});if(t.type===b){var y=t.feed;return Array.isArray(e.feeds[n])?k()(e,{feeds:Object(s.a)({},n,{$push:[y]})}):k()(e,{feeds:Object(s.a)({},n,{$set:[y]})})}if(t.type===g){var F=t.rssName,x=Object(d.a)(e.feeds[n]);if(!x)return e;for(var A=x.length-1;A>=0;--A)if(x[A].rssName===F)return x.splice(A,1),k()(e,{feeds:Object(s.a)({},n,{$set:x})})}}return e},w=Object(l.b)(I),y=n(481),F=n(476),x=(n(273),n(257)),A=n(21),C=n(22),N=n(24),T=n(23),D=n(25),L=n(8),P=n(41),G=n.n(P);function B(e){return{type:m,page:e}}function R(e){return{type:b,feed:e}}function V(e){return{type:g,rssName:e}}window.store=w,window.testAction=function(e){return{type:p,payload:e}};n(293),n(296);var z=n(9),_=n(472),U=n(486),H={blurple:"#7289DA",greyple:"#99AAB5",darkButNotBlack:"#2C2F33",white:"#f6f6f7",red:"#f04747",green:"#43b581",notQuiteblack:"#23272A",text:"#b9bbbe"},M={DASHBOARD:0,FILTERS:1,SUBSCRIPTIONS:2,MISC_OPTIONS:3,FAQ:4,SUPPORT:5},$=n(479),Q=n(473),W=n(20);function q(){var e=Object(L.a)(["\n  border-radius: 50%;\n  background-image: ",";\n  width: ",";\n  height: ",";\n  background-size: cover;\n  background-position: top center;\n  z-index: 1;\n  background-blend-mode: screen;\n  background-color: ",";\n"]);return q=function(){return e},e}function Z(){var e=Object(L.a)(["\n  display: flex;\n  flex-direction: row;\n  position: absolute;\n  bottom: -7em;\n  left: 7em;\n  /* background: green; */\n  height: 14em;\n"]);return Z=function(){return e},e}function J(){var e=Object(L.a)(["\n  position: relative;\n  background-color:  ",";\n  /* background: linear-gradient(0deg, pink 50%, cyan 50%); */\n  width: 100%;\n  height: 25.5em;\n  /* z-index: 10; */\n"]);return J=function(){return e},e}z.a.div(J(),Object(W.b)(.02,H.notQuiteblack)),z.a.div(Z());var K=z.a.div(q(),function(e){return"url('".concat(e.src,"')")},function(e){return e.width},function(e){return e.width},H.darkButNotBlack);var Y=function(e){return r.a.createElement(K,{src:e.src,width:e.width})},X=n(482);function ee(){var e=Object(L.a)(["\n  text-align: left;\n  padding: 1.25em;\n  margin: .5em 1em;\n  border-radius: .25em;\n  color: ",";\n  background-color: ",";\n  /* width: 100%; */\n  user-select: none;\n  cursor: "," !important;\n  &:hover {\n    user-select: none;\n    text-decoration: none;\n    /* color: white; */\n    color: ",";\n    background-color: ",";\n    cursor: pointer;\n  }\n  &:active {\n    background-color: ",";\n  }\n"]);return ee=function(){return e},e}var te=z.a.div(ee(),function(e){return e.disabled?Object(W.a)(.4,H.text):e.active?"white":Object(W.b)(.45,H.darkButNotBlack)},function(e){return e.disabled?"transparent":e.active?H.blurple:"transparent"},function(e){return e.disabled?"not-allowed":"pointer"},function(e){return e.disabled?Object(W.a)(.4,H.text):e.active?"white":Object(W.b)(.65,H.darkButNotBlack)},function(e){return e.disabled?"transparent":e.active?H.blurple:"rgba(255, 255, 255, .15)"},function(e){return e.disabled?"transparent":"rgba(255, 255, 255, .25)"});var ne=function(e){return e.disabled?r.a.createElement(X.a,{content:"You must select a feed first!",inverted:!0,position:"right center",trigger:r.a.createElement(te,e,e.children)}):r.a.createElement(te,e,e.children)};function ae(){var e=Object(L.a)(["\n  &:active, &:focus {\n    outline: 0;\n    border: none;\n  }\n"]);return ae=function(){return e},e}function re(){var e=Object(L.a)(["\n  /* margin-left: 1em;\n  margin-right: 1em; */\n  width: 85%;\n  margin-bottom: 1em;\n  background-color: green;\n  &:hover {\n    cursor: not-allowed;\n  }\n"]);return re=function(){return e},e}function ie(){var e=Object(L.a)(["\n  display: flex;\n  height: 4em;\n  flex-direction: column;\n  justify-content: space-between\n  text-align: left;\n  margin-left: 1.5em;\n  & p:first-child {\n    font-weight: bold;\n  }\n"]);return ie=function(){return e},e}function oe(){var e=Object(L.a)(["\n  color: ",";\n  /* width: 100%; */\n  align-items: center;\n  background-color: ",";\n  border-style: solid;\n  border-width: 1px;\n  border-color: ",";\n  display: flex;\n  /* justify-content: space-evenly; */\n  padding: .75em;\n  border-radius: 0.5em;\n  margin: 1.5em 1em;\n"]);return oe=function(){return e},e}function ce(){var e=Object(L.a)(["\n  padding-left: 2em;\n  height: 5em;\n  box-shadow: 0 2px 0px 0 rgba(0,0,0,0.2);\n  display: flex;\n  /* justify-content: cen; */\n  align-items: center;\n  user-select: none;\n  /* cursor: pointer; */\n  &:hover {\n    text-decoration: none;\n  }\n"]);return ce=function(){return e},e}function le(){var e=Object(L.a)(["\n  /* margin-top: 0; */\n  padding-left: 1.5em;\n  text-align: left;\n  color: white;\n  font-weight: 300;\n"]);return le=function(){return e},e}function se(){var e=Object(L.a)(["\n  color: ",";\n  font-weight: 300;\n  margin-bottom: 2em;\n"]);return se=function(){return e},e}function ue(){var e=Object(L.a)(["\n  color: ",";\n  margin: 0;\n  /* font-weight: 300; */\n"]);return ue=function(){return e},e}function de(){var e=Object(L.a)(["\n  height:  2em;\n  margin-right: 1.5em;\n"]);return de=function(){return e},e}function fe(){var e=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-width: 22em;\n  height: 100vh;\n  background: ",";\n"]);return fe=function(){return e},e}var pe=z.a.div(fe(),Object(W.a)(.02,H.darkButNotBlack)),me=z.a.img(de()),he=z.a.h2(ue(),Object(W.a)(.1,"white")),be=(z.a.h3(se(),Object(W.a)(.25,"white")),z.a.h4(le())),ge=z.a.div(ce()),ve=z.a.div(oe(),Object(W.a)(.15,"white"),Object(W.a)(.03,H.darkButNotBlack),Object(W.c)(.5,Object(W.a)(.1,H.darkButNotBlack))),Oe=z.a.div(ie()),Ee=Object(z.a)($.a)(re()),je=Object(z.a)(_.a)(ae()),ke=function(e){function t(){var e;return Object(A.a)(this,t),(e=Object(N.a)(this,Object(T.a)(t).call(this))).state={page:M.DASHBOARD},e}return Object(D.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.guildId,a=t.feeds,i=t.user,o=t.selectedFeed,c=a[n]?a[n].map(function(e,t){return{text:"".concat(t+1," - ").concat(e.title),value:e.rssName}}):[],l=i?"https://cdn.discordapp.com/avatars/".concat(i.id,"/").concat(i.avatar,".png"):void 0;return r.a.createElement(pe,null,r.a.createElement("div",null,r.a.createElement(je,{to:"/",onClick:function(){return e.props.changePage(M.DASHBOARD)}},r.a.createElement(ge,null,r.a.createElement(me,{src:"https://discordapp.com/assets/d36b33903dafb0107bb067b55bdd9cbc.svg"}),r.a.createElement(he,null,"Discord.RSS"))),r.a.createElement(ve,null,r.a.createElement(Y,{src:l,width:"4em"}),r.a.createElement(Oe,null,r.a.createElement("p",null,i?i.username:void 0),r.a.createElement("p",null,"ID ",i?i.id:void 0))),r.a.createElement(Q.a,null),r.a.createElement(je,{to:"/",onClick:function(){return e.props.changePage(M.DASHBOARD)}},r.a.createElement(ne,{active:this.props.page===M.DASHBOARD},"Dashboard")),r.a.createElement(Q.a,null),r.a.createElement(be,null,"Selected Feed"),r.a.createElement(Ee,{options:c,selection:!0,value:o}),r.a.createElement(Q.a,null),r.a.createElement(be,null,"Feed Customizations"),r.a.createElement(je,{to:"/filters",onClick:function(){return e.props.changePage(M.FILTERS)}},r.a.createElement(ne,{active:this.props.page===M.FILTERS},"Filters")),r.a.createElement(je,{to:"/subscriptions",onClick:function(){return e.props.changePage(M.SUBSCRIPTIONS)}},r.a.createElement(ne,{active:this.props.page===M.SUBSCRIPTIONS},"Subscriptions")),r.a.createElement(je,{to:"/miscoptions",onClick:function(){return e.props.changePage(M.MISC_OPTIONS)}},r.a.createElement(ne,{active:this.props.page===M.MISC_OPTIONS},"Misc Options")),r.a.createElement(Q.a,null),r.a.createElement(be,null,"Information"),r.a.createElement(je,{to:"/faq",onClick:function(){return e.props.changePage(M.FAQ)}},r.a.createElement(ne,{active:this.props.page===M.FAQ},"FAQ")),r.a.createElement(je,{to:"/support",onClick:function(){return e.props.changePage(M.SUPPORT)}},r.a.createElement(ne,{disabled:!0,active:this.props.page===M.SUPPORT},"Support"))),r.a.createElement("div",null,r.a.createElement(Q.a,null),r.a.createElement(ne,null,"Feedback")))}}]),t}(a.Component),Se=Object(U.a)(Object(c.b)(function(e){return{selectedFeed:e.activeFeed,page:e.page,user:e.user,feeds:e.feeds,guildId:e.activeGuild}},function(e){return{changePage:function(t){return e(B(t))}}})(ke)),Ie=n(478),we=n(475),ye=n(480),Fe=n(477),xe=n(474);function Ae(){var e=Object(L.a)(["\n  position: relative;\n  padding-top: ",";\n  padding-bottom: ",";\n"]);return Ae=function(){return e},e}function Ce(){var e=Object(L.a)(["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  padding: 1em;\n  background-color: ",";\n  border-bottom-left-radius: 0.75em;\n  border-bottom-right-radius: 0.75em;\n  width: 100%;\n"]);return Ce=function(){return e},e}function Ne(){var e=Object(L.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  padding: 1em;\n  background-color: #36393f;\n  border-top-left-radius: 0.75em;\n  border-top-right-radius: 0.75em;\n  box-shadow: 0 2px 0px 0 rgba(0,0,0,0.2);\n  width: 100%;\n"]);return Ne=function(){return e},e}function Te(){var e=Object(L.a)(["\n  width: 490px;\n  color: ",";\n"]);return Te=function(){return e},e}var De=Object(z.a)(Fe.a)(Te(),H.text),Le=z.a.div(Ne()),Pe=z.a.div(Ce(),H.darkButNotBlack),Ge=z.a.div(Ae(),function(e){return e.hasHeader?"5em":0},function(e){return e.hasFooter?"5em":0});var Be=function(e){var t=e.open;return r.a.createElement(xe.a,{duration:200,open:t,onOpen:function(){return setTimeout(function(){return document.body.classList.add("modal-fade-in")},0)},transition:{animation:"scale",duration:150}},r.a.createElement(De,{style:{width:"490px"},open:!0,onClose:function(t){document.body.classList.remove("modal-fade-in"),e.onClose()},closeOnEscape:!0},r.a.createElement(Fe.a.Content,{style:{overflow:"hidden"}},e.header?r.a.createElement(Le,null,e.header):void 0,r.a.createElement(Ge,{hasHeader:!!e.header,hasFooter:!!e.footer},e.children),e.footer?r.a.createElement(Pe,null,e.footer):void 0)))},Re=n(484),Ve=n(68),ze=n.n(Ve);function _e(){var e=Object(L.a)(["\n  .menu {\n    height: 10em !important;\n  }\n"]);return _e=function(){return e},e}function Ue(){var e=Object(L.a)(["\n  > div {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    > div {\n      flex-grow: 1;\n    }\n    button {\n        margin-left: 2em !important;\n    }\n    p {\n      margin: 0;\n      flex-grow: 1;\n    }\n  }\n"]);return Ue=function(){return e},e}function He(){var e=Object(L.a)(["\n  h5 {\n    color: ",";\n    margin-bottom: 0.5em;\n  }\n"]);return He=function(){return e},e}function Me(){var e=Object(L.a)(["\n  /* > div {\n    margin-bottom: 1em;\n  } */\n  display: flex;\n  justify-content: space-between;\n\n"]);return Me=function(){return e},e}function $e(){var e=Object(L.a)(["\n  color: ",";\n  h4 {\n    color: white;\n  }\n"]);return $e=function(){return e},e}var Qe={PENDING:0,VALIDATING:1,VALID:2,INVALID:3},We=z.a.div($e(),H.text),qe=z.a.div(Me()),Ze=z.a.div(He(),H.text),Je=z.a.div(Ue()),Ke=Object(z.a)($.a)(_e()),Ye=function(e){function t(e){var n;return Object(A.a)(this,t),(n=Object(N.a)(this,Object(T.a)(t).call(this))).close=function(e){return n.setState({validatingFeedback:null,validatingState:e?Qe.VALID:n.state.validatingState,title:"",channel:"",editingChannel:!1,editingTitle:!1}),n.props.onClose()},n.confirm=function(){var e=n.props,t=e.feed,a=e.guildId;if(n.state.title===t.title&&!n.state.channel||n.state.channel===t.channel&&!n.state.title||n.state.title===t.title&&n.state.channel===t.channel||!n.state.title&&!n.state.channel)return n.close();n.setState({validatingState:Qe.VALIDATING});var r={};if(n.state.channel&&(r.channel=n.state.channel),n.state.title&&(r.title=n.state.title),0===Object.keys(r).length)return n.close();G.a.patch("/api/guilds/".concat(a,"/feeds/").concat(t.rssName),r).then(function(){n.props.changeFeed(t.rssName,r),n.close(!0)}).catch(function(e){console.log(e),console.log(e.response);var t=e.response&&e.response.data&&e.response.data.message?e.response.data.message:e.response.data?e.response.data:e.message;n.setState({validatingState:Qe.INVALID,validatingFeedback:t})})},n.saveNewTitle=function(){n.state.title},n.removeFeed=function(){var e=n.props.feed;n.setState({validatingState:Qe.VALIDATING,validatingFeedback:null}),G.a.delete("/api/guilds/".concat(n.props.guildId,"/feeds/").concat(e.rssName)).then(function(){n.props.removeFeed(e.rssName),n.close(!0)}).catch(function(t){console.log(t.response);var a=t.response&&t.response.data&&t.response.data.message?t.response.data.message:t.response.data?t.response.data:t.message;n.setState({validatingState:Qe.INVALID,validatingFeedback:a}),n.props.open||ze.a.error("Failed to Remove Feed<br />".concat(e.link,"<br /><br />").concat(a||"No details available"),{effect:"scale",position:"bottom-right",timeout:8e3})})},n.state={validatingState:Qe.PENDING,validatingFeedback:void 0,title:"",channel:"",editingChannel:!1,editingTitle:!1},n}return Object(D.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.feed,a=t.open,i=t.onClose,o=t.channels,c=t.guildId,l=this.state.validatingState===Qe.VALIDATING,s=this.state.title===n.title&&!this.state.channel||this.state.channel===n.channel&&!this.state.title||this.state.title===n.title&&this.state.channel===n.channel||!this.state.title&&!this.state.channel,u=o[c],d=[];if(u)for(var f in u){var p=u[f];d.push({text:"#".concat(p.name),value:f})}return r.a.createElement(Be,{header:r.a.createElement(We,null,r.a.createElement("h4",null,n.title),n.link),footer:r.a.createElement(qe,null,r.a.createElement(ye.a,{color:"red",content:"Delete",onClick:this.removeFeed,disabled:l}),r.a.createElement(ye.a,{disabled:l,content:s?"Close":l?"Saving...":"Save Changes",onClick:this.confirm})),open:a,onClose:function(){i()}},r.a.createElement(Ze,null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h5",null,"Filters Used"),r.a.createElement("p",null,"Yes"))),r.a.createElement(Q.a,null),r.a.createElement(Je,null,r.a.createElement("h5",null,"Channel"),r.a.createElement("div",null,this.state.editingChannel?r.a.createElement(Ke,{disabled:l,search:!0,options:d,selection:!0,fluid:!0,onChange:function(t,n){return e.setState({channel:n.value})}}):r.a.createElement("p",null,o[c]&&o[c][n.channel]?"#".concat(o[c][n.channel].name):n.channelName?"#".concat(n.channelName):n.channel),r.a.createElement(ye.a,{content:this.state.editingChannel?"Cancel":"Edit",onClick:function(t){return e.setState(e.state.editingChannel?{editingChannel:!1,channel:""}:{editingChannel:!0,channel:""})}}))),r.a.createElement(Q.a,null),r.a.createElement(Je,null,r.a.createElement("h5",null,"Title"),r.a.createElement("div",null,this.state.editingTitle?r.a.createElement(we.a,{disabled:l,placeholder:n.title,fluid:!0,onChange:function(t){return e.setState({title:t.target.value})}}):r.a.createElement("p",null,n.title),r.a.createElement(ye.a,{content:this.state.editingTitle?"Cancel":"Edit",onClick:function(t){return e.setState(e.state.editingTitle?{editingTitle:!1,title:""}:{editingTitle:!0,title:""})}}))),r.a.createElement(Q.a,null),r.a.createElement(Re.a,{visible:!!this.state.validatingFeedback,animation:"drop",duration:300},r.a.createElement("p",{style:{color:H.red}},this.state.validatingFeedback))))}}]),t}(a.Component),Xe=Object(c.b)(function(e){return{guildId:e.activeGuild,channels:e.channels}},function(e){return{changeFeed:function(t,n){return e(function(e,t){return{type:h,rssName:e,data:t}}(t,n))},removeFeed:function(t){return e(V(t))}}})(Ye);function et(){var e=Object(L.a)(["\n  .menu {\n    height: 10em !important;\n  }\n  /* height: 5em !important; */\n\n"]);return et=function(){return e},e}function tt(){var e=Object(L.a)(["\n  > div {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    > * {\n      flex-grow: 1;\n    }\n    button {\n      flex-grow: 0;\n      margin-left: 1em !important;\n    }\n  }\n  h5 {\n    margin-top: 0;\n    color: ",";\n  }\n"]);return tt=function(){return e},e}function nt(){var e=Object(L.a)(["\n  /* > div {\n    margin-bottom: 1em;\n  } */\n  display: flex;\n  justify-content: space-between;\n\n"]);return nt=function(){return e},e}function at(){var e=Object(L.a)(["\n  color: ",";\n  h4 {\n    color: white;\n  }\n"]);return at=function(){return e},e}var rt={PENDING:0,VALIDATING:1,VALID:2,INVALID:3},it=z.a.div(at(),H.text),ot=z.a.div(nt()),ct=z.a.div(tt(),H.text),lt=Object(z.a)($.a)(et()),st=function(e){function t(){var e;return Object(A.a)(this,t),(e=Object(N.a)(this,Object(T.a)(t).call(this))).closeAddFeed=function(t){var n={validatingFeedback:null,addFeedLink:t?"":e.state.addFeedLink,invalidAttempted:!1};e.setState(n),e.props.onClose()},e.addFeed=function(){var t=e.state,n=t.addFeedLink,a=t.addFeedChannel,r=t.addFeedTitle,i={feed:n,channel:a,title:r};e.setState({validatingState:rt.VALIDATING,validatingFeedback:null}),G.a.post("/api/guilds/".concat(e.props.guildId,"/feeds"),i).then(function(t){var n=t.data;e.props.addFeed({rssName:n._rssName,title:n.title,channel:n.channel,link:n.link}),e.closeAddFeed(!0)}).catch(function(t){console.log(t.response);var a=t.response&&t.response.data&&t.response.data.message?t.response.data.message:t.response.data?t.response.data:t.message;e.setState({validatingState:rt.INVALID,validatingFeedback:a,invalidAttempted:!0}),e.props.open||ze.a.error("Failed to Remove Feed<br />".concat(n,"<br /><br />").concat(a||"No details available"),{effect:"scale",position:"bottom-right",timeout:8e3})})},e.state={validatingState:rt.PENDING,addFeedLink:"",addFeedChannel:"",addFeedTitle:"",invalidAttempted:!1,validatingFeedback:void 0},e}return Object(D.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.guildId,a=t.channels,i=t.open,o=this.state.validatingState===rt.VALIDATING,c=a[n],l=[];if(c)for(var s in c){var u=c[s];l.push({text:"#".concat(u.name),value:s})}return r.a.createElement(Be,{header:r.a.createElement(it,null,r.a.createElement("h4",null,"New Feed"),"Woah!"),footer:r.a.createElement(ot,null,r.a.createElement(ye.a,{content:"Cancel",disabled:o,onClick:this.closeAddFeed}),r.a.createElement(ye.a,{color:"green",disabled:o||this.state.invalidAttempted||!this.state.addFeedLink||!this.state.addFeedChannel,content:o?"Validating...":"Add",onClick:this.addFeed})),disabled:o,open:i,onClose:this.closeAddFeed},r.a.createElement(ct,null,r.a.createElement("h5",null,"Link"),r.a.createElement(we.a,{disabled:o,onChange:function(t){return e.setState({addFeedLink:t.target.value,invalidAttempted:!1})},fluid:!0}),r.a.createElement(Q.a,null),r.a.createElement("h5",null,"Channel"),r.a.createElement(lt,{disabled:o,search:!0,options:l,selection:!0,fluid:!0,onChange:function(t,n){return e.setState({addFeedChannel:n.value})}}),r.a.createElement(Q.a,null),r.a.createElement("h5",null,"Title"),r.a.createElement(we.a,{disabled:o,fluid:!0,placeholder:"(Can be left blank)",onChange:function(t){return e.setState({addFeedTitle:t.target.value})}}),r.a.createElement(Q.a,null),r.a.createElement(Re.a,{visible:!!this.state.validatingFeedback,animation:"drop",duration:300},r.a.createElement("p",{style:{color:H.red}},this.state.validatingFeedback))))}}]),t}(a.Component),ut=Object(c.b)(function(e){return{channels:e.channels,guildId:e.activeGuild}},function(e){return{addFeed:function(t){return e(R(t))}}})(st);function dt(){var e=Object(L.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n"]);return dt=function(){return e},e}function ft(){var e=Object(L.a)(["\n  cursor: pointer;\n"]);return ft=function(){return e},e}function pt(){var e=Object(L.a)(["\n  color: ",";\n  margin-bottom: 1em;\n  text-align: left;\n"]);return pt=function(){return e},e}var mt={PENDING:0,VALIDATING:1,VALID:2,INVALID:3},ht=z.a.h2(pt(),H.white),bt=Object(z.a)(Ie.a.Row)(ft()),gt=z.a.div(dt()),vt=function(e){function t(){var e;return Object(A.a)(this,t),(e=Object(N.a)(this,Object(T.a)(t).call(this))).closeAddFeed=function(){e.setState({openAddFeed:!1,validatingState:mt.PENDING,validatingFeedback:null})},e.addFeed=function(){e.setState({validatingState:mt.VALIDATING,validatingFeedback:null}),G.a.post("/api/guilds/".concat(e.props.guildId,"/feeds"),{feed:e.state.addFeedLink,channel:e.state.addFeedChannel,title:e.state.addFeedTitle}).then(function(t){var n=t.data;e.props.addFeed({rssName:n._rssName,title:n.title,channel:n.channel,link:n.link}),e.setState({validatingState:mt.VALID,validatingFeedback:void 0,openAddFeed:!1})}).catch(function(t){console.log(t.response);var n=t.response&&t.response.data?t.response.data.message:t.message;e.setState({validatingState:mt.INVALID,validatingFeedback:n,addFeedDisabled:!0})})},e.state={unauthorized:!1,channels:{},viewFeed:{open:!1,rssName:"",title:"",channel:"",link:""},addFeedOpen:!1,modal:{header:void 0,footer:void 0,content:void 0}},e}return Object(D.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.guildId,a=t.feeds,i=t.channels,o=i[n],c=[];if(o)for(var l in o){var s=o[l];c.push({text:"#".concat(s.name),value:l})}var d=(n&&a[n]?a[n]:[]).map(function(t){return r.a.createElement(X.a,{key:t.rssName,trigger:r.a.createElement(bt,{onClick:function(n){e.setState({open:!0,viewFeed:Object(u.a)({open:!0},t)})}},r.a.createElement(Ie.a.Cell,null,t.title),r.a.createElement(Ie.a.Cell,null,t.link),r.a.createElement(Ie.a.Cell,null,i[n]&&i[n][t.channel]?"#".concat(i[n][t.channel].name):t.channelName?"#".concat(t.channelName):t.channel),r.a.createElement(Ie.a.Cell,null,void 0===t.status?"OK":t.status)),content:"string",inverted:!0,position:"left center",hoverable:!0})});return r.a.createElement("div",null,r.a.createElement(Xe,{feed:this.state.viewFeed,open:this.state.viewFeed.open,onClose:function(){return e.setState({viewFeed:Object(u.a)({},e.state.viewFeed,{open:!1})})}}),r.a.createElement(ut,{open:this.state.addFeedOpen,onClose:function(){return e.setState({addFeedOpen:!1})}}),r.a.createElement(ht,null,"Feed Management"),r.a.createElement(gt,null,r.a.createElement(we.a,{placeholder:"Search..."}),r.a.createElement(ye.a,{content:"Add New",onClick:function(){return e.setState({addFeedOpen:!0})}})),r.a.createElement(Ie.a,{celled:!0,selectable:!0},r.a.createElement(Ie.a.Header,null,r.a.createElement(bt,null,r.a.createElement(Ie.a.HeaderCell,null,"Name"),r.a.createElement(Ie.a.HeaderCell,null,"Link"),r.a.createElement(Ie.a.HeaderCell,null,"Channel"),r.a.createElement(Ie.a.HeaderCell,null,"Status"))),r.a.createElement(Ie.a.Body,null,d)))}}]),t}(a.Component),Ot=Object(c.b)(function(e){return{feeds:e.feeds,channels:e.channels,guildId:e.activeGuild}},function(e){return{addFeed:function(t){return e(R(t))},removeFeed:function(t){return e(V(t))}}})(vt);function Et(){var e=Object(L.a)(["\n  display: flex;\n  align-content: center;\n  align-items: center;\n  h3 {\n    color: white;\n    text-align: center;\n    align-content: center;\n    justify-content: center;\n    align-self: center;\n  }\n"]);return Et=function(){return e},e}function jt(){var e=Object(L.a)(["\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  text-align: left;\n  margin-bottom: 1em;\n  h4 {\n    color: ",";\n  }\n  p {\n    color: ","\n  }\n  input {\n    margin-bottom: 0.5em !important;\n  }\n  /* background: gray; */\n"]);return jt=function(){return e},e}function kt(){var e=Object(L.a)(["\n  /* margin-top: 10em; */\n  margin-left: 7em;\n  margin-right: 7em;\n  /* background: green; */\n  /* align-self: center;\n  justify-self: center; */\n"]);return kt=function(){return e},e}function St(){var e=Object(L.a)(["\n  padding-top: 1.5em;\n  color: ",";\n"]);return St=function(){return e},e}function It(){var e=Object(L.a)(["\n  text-align: end;\n  color: white;\n  margin: 0;\n"]);return It=function(){return e},e}function wt(){var e=Object(L.a)(["\n  justify-content: center;\n  /* background: green; */\n  padding: 2em;\n  padding-bottom: 2.75em;\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n"]);return wt=function(){return e},e}function yt(){var e=Object(L.a)(["\n  display: flex;\n  flex-direction: row;\n  position: absolute;\n  bottom: -7em;\n  left: 7em;\n  /* background: green; */\n  height: 14em;\n"]);return yt=function(){return e},e}function Ft(){var e=Object(L.a)(["\n  position: relative;\n  background: url('https://i.imgur.com/eS4IxK3.png');\n  /* background-size: cover;\n  background-attachment: fixed; */\n  /* background-color:  ","; */\n  width: 100%;\n  height: 18em;\n  margin-bottom: 11em;\n  /* z-index: 10; */\n"]);return Ft=function(){return e},e}var xt=z.a.div(Ft(),Object(W.b)(.02,H.notQuiteblack)),At=z.a.div(yt()),Ct=z.a.div(wt()),Nt=z.a.h1(It()),Tt=z.a.p(St(),Object(W.b)(.5,H.darkButNotBlack)),Dt=z.a.div(kt()),Lt=z.a.div(jt(),H.text,Object(W.a)(.3,H.text)),Pt=(Object(z.a)(Lt)(Et()),function(e){function t(){var e;return Object(A.a)(this,t),(e=Object(N.a)(this,Object(T.a)(t).call(this))).state={},e}return Object(D.a)(t,e),Object(C.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this;this.props.guildId!==e.guildId&&this.props.guildId&&(console.log("requesting with",this.props.guildId),G.a.get("/api/guilds/".concat(this.props.guildId,"/channels")).then(function(e){var n=e.data,a={},r=!0,i=!1,o=void 0;try{for(var c,l=n[Symbol.iterator]();!(r=(c=l.next()).done);r=!0){var s=c.value;a[s.id]=s}}catch(u){i=!0,o=u}finally{try{r||null==l.return||l.return()}finally{if(i)throw o}}t.props.setGuildChannels(a),t.props.setGuildAuthorization(!0)}).catch(function(e){403===e.response.status&&t.props.setGuildAuthorization(!1),console.log("dashboard index channels get",e.response)}))}},{key:"render",value:function(){var e=this.props,t=e.guilds,n=e.guildId,a=t[n],i=a&&void 0!==a.authorized?a.authorized?"AUTHORIZED":"UNAUTHORIZED":"...",o=n?"https://cdn.discordapp.com/icons/".concat(n,"/").concat(a.icon,"?size=256"):void 0,c=n?a.name:void 0;return r.a.createElement("div",null,r.a.createElement(xt,null,r.a.createElement(At,null,r.a.createElement(Y,{src:o,width:"14em"}),r.a.createElement(Ct,null,r.a.createElement(Nt,null,c||"No Server Selected"),r.a.createElement(Tt,null,i)))),r.a.createElement(Dt,null,r.a.createElement(Ot,null),r.a.createElement(Q.a,null)))}}]),t}(a.Component)),Gt=Object(c.b)(function(e){return{guildId:e.activeGuild,guilds:e.guilds}},function(e){return{setGuildChannels:function(t){return e(function(e){return{type:v,channels:e}}(t))},setGuildAuthorization:function(t){return e({type:O,authorized:t})}}})(Pt),Bt=function(e){function t(){var e;return Object(A.a)(this,t),(e=Object(N.a)(this,Object(T.a)(t).call(this))).state={},e}return Object(D.a)(t,e),Object(C.a)(t,[{key:"componentWillMount",value:function(){this.props.setToThisPage()}},{key:"render",value:function(){return r.a.createElement("p",null,"Filters page")}}]),t}(a.Component),Rt=Object(U.a)(Object(c.b)(null,function(e){return{setToThisPage:function(){return e(B(M.FILTERS))}}})(Bt)),Vt=function(e){function t(){var e;return Object(A.a)(this,t),(e=Object(N.a)(this,Object(T.a)(t).call(this))).state={},e}return Object(D.a)(t,e),Object(C.a)(t,[{key:"componentWillMount",value:function(){this.props.setToThisPage()}},{key:"render",value:function(){return r.a.createElement("p",null,"Subscriptions page")}}]),t}(a.Component),zt=Object(U.a)(Object(c.b)(null,function(e){return{setToThisPage:function(){return e(B(M.SUBSCRIPTIONS))}}})(Vt)),_t=function(e){function t(){var e;return Object(A.a)(this,t),(e=Object(N.a)(this,Object(T.a)(t).call(this))).state={},e}return Object(D.a)(t,e),Object(C.a)(t,[{key:"componentWillMount",value:function(){this.props.setToThisPage()}},{key:"render",value:function(){return r.a.createElement("p",null,"FAQ page")}}]),t}(a.Component),Ut=Object(U.a)(Object(c.b)(null,function(e){return{setToThisPage:function(){return e(B(M.FAQ))}}})(_t)),Ht=function(e){function t(){var e;return Object(A.a)(this,t),(e=Object(N.a)(this,Object(T.a)(t).call(this))).state={},e}return Object(D.a)(t,e),Object(C.a)(t,[{key:"componentWillMount",value:function(){this.props.setToThisPage()}},{key:"render",value:function(){return r.a.createElement("p",null,"Support page")}}]),t}(a.Component),Mt=Object(U.a)(Object(c.b)(null,function(e){return{setToThisPage:function(){return e(B(M.SUPPORT))}}})(Ht)),$t=function(e){function t(){var e;return Object(A.a)(this,t),(e=Object(N.a)(this,Object(T.a)(t).call(this))).state={},e}return Object(D.a)(t,e),Object(C.a)(t,[{key:"componentWillMount",value:function(){this.props.setToThisPage()}},{key:"render",value:function(){return r.a.createElement("p",null,"MiscOptions page")}}]),t}(a.Component),Qt=Object(U.a)(Object(c.b)(null,function(e){return{setToThisPage:function(){return e(B(M.MISC_OPTIONS))}}})($t)),Wt=n(485);function qt(){var e=Object(L.a)(["\n  font-size: 1.25em !important;\n\n"]);return qt=function(){return e},e}function Zt(){var e=Object(L.a)(["\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  z-index: 10;\n  padding-left: 2em;\n  padding-right: 2em;\n  height: 5em;\n  box-shadow: 0 2px 0px 0 rgba(0,0,0,0.2);\n  align-items: center;\n  > div {\n    display: flex;\n\n  }\n  h3 {\n    margin: 0;\n    color: ",";\n    align-self: center;\n    margin-right: 2em;\n  }\n"]);return Zt=function(){return e},e}function Jt(){var e=Object(L.a)(["\n  padding-top: 20;\n  height: 100vh;\n  width: 100%;\n  background-color: ",";\n  text-align: center;\n  overflow-y: auto;\n"]);return Jt=function(){return e},e}var Kt=z.a.div(Jt(),Object(W.b)(.05,H.notQuiteblack)),Yt=z.a.div(Zt(),Object(W.a)(.2,"white")),Xt=Object(z.a)($.a)(qt()),en=function(e){function t(){var e;return Object(A.a)(this,t),(e=Object(N.a)(this,Object(T.a)(t).call(this))).state={},e}return Object(D.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.guildId,a=t.guilds,i=[];for(var o in a)i.push({text:a[o].name,value:o});return r.a.createElement(Kt,null,r.a.createElement(Yt,null,r.a.createElement("div",null,r.a.createElement(Xt,{options:i,search:!0,selection:!0,value:n,onChange:function(t,n){return e.props.setActiveGuild(n.value)}})),r.a.createElement("h3",null,"Status")),r.a.createElement(Wt.a,null,r.a.createElement(F.a,{exact:!0,path:"/",component:Gt}),r.a.createElement(F.a,{exact:!0,path:"/filters",component:Rt}),r.a.createElement(F.a,{exact:!0,path:"/subscriptions",component:zt}),r.a.createElement(F.a,{exact:!0,path:"/miscoptions",component:Qt}),r.a.createElement(F.a,{exact:!0,path:"/faq",component:Ut}),r.a.createElement(F.a,{exact:!0,path:"/support",component:Mt}),r.a.createElement(F.a,{component:Gt})))}}]),t}(a.Component),tn=Object(c.b)(function(e){return{guildId:e.activeGuild,guilds:e.guilds}},function(e){return{setActiveGuild:function(t){return e(function(e){return{type:E,guildId:e}}(t))}}})(en);n(457),n(460),n(462);function nn(){var e=Object(L.a)(["\n  width: 100vw;\n  max-width: 100%;\n  display: flex;\n  flex-direction: row;\n"]);return nn=function(){return e},e}var an=z.a.div(nn()),rn=function(e){function t(){var e;Object(A.a)(this,t),(e=Object(N.a)(this,Object(T.a)(t).call(this))).state={serverResponse:"",socketStatus:"connecting...",socketError:void 0,loaded:!1};var n=new WebSocket("ws://localhost:8081/ping");return e.socket=n,n.onopen=function(t){e.setState({socketStatus:"open",socketError:void 0})},n.onerror=function(t){e.setState({socketStatus:"error",socketError:t})},n.onmessage=function(t){e.setState({serverResponse:t.data})},n.onclose=function(t){e.setState({socketStatus:"closed",socketError:void 0})},e}return Object(D.a)(t,e),Object(C.a)(t,[{key:"componentWillMount",value:function(){var e=this;Promise.all([G.a.get("/api/users/@me"),G.a.get("/api/users/@me/guilds")]).then(function(t){var n=Object(x.a)(t,2),a=n[0],r=n[1].data,i={user:a.data,guilds:{},feeds:{},filters:{},subscriptions:{},channels:{},activeGuild:""},o=!0,c=!1,l=void 0;try{for(var s,u=r[Symbol.iterator]();!(o=(s=u.next()).done);o=!0){var d=s.value,f=d.profile,p=d.discord,m=p.id;i.activeGuild||(i.activeGuild=m,i.channels[m]={}),i.guilds[m]={icon:p.icon,name:p.name,owner:p.owner,permissions:p.permissions,sendAlertsTo:f.sendAlertsTo,dateLanguage:f.dateLanguage,dateFormat:f.dateFormat,prefix:f.prefix,timezone:f.timezone};var h=f.sources;if(h)for(var b in h){var g=h[b];i.feeds[m]||(i.feeds[m]=[]),i.feeds[m].push({rssName:b,title:g.title,channel:g.channel,link:g.link,channelName:g.channelName,checkTitles:g.checkTitles,imgPreviews:g.imgPreviews,imgLinksExistence:g.imgLinksExistence,checkDates:g.checkDates,formatTables:g.formatTables,toggleRoleMentions:g.toggleRoleMentions}),g.filters&&(i.filters[m][b]=g.filters),(g.globalSubscriptions&&g.globalSubscriptions.length>0||g.filteredSubscriptions&&g.filteredSubscriptions.length>0)&&(i.subscriptions[m]||(i.subscriptions[m]={}),i.subscriptions[m][b]||(i.subscriptions[m][b]=[]),g.globalSubscriptions&&(i.subscriptions[m][b]=i.subscriptions[m][b].concat(g.globalSubscriptions)),g.filteredSubscriptions&&(i.subscriptions[m][b]=i.subscriptions[m][b].concat(g.filteredSubscriptions)))}}}catch(v){c=!0,l=v}finally{try{o||null==u.return||u.return()}finally{if(c)throw l}}e.props.initializeState(i),e.setState({loaded:!0})}).catch(function(e){return console.log(e.response||e.message)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(an,null,r.a.createElement(Se,null),r.a.createElement(tn,null)),r.a.createElement(ze.a,{stack:{limit:3},html:!0}))}}]),t}(a.Component),on=Object(c.b)(null,function(e){return{initializeState:function(t){return e({type:"INIT_STATE",data:t})}}})(rn);o.a.render(r.a.createElement(c.a,{store:w},r.a.createElement(y.a,null,r.a.createElement(F.a,{path:"/",component:on}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[265,2,1]]]);
//# sourceMappingURL=main.7ac260c0.chunk.js.map
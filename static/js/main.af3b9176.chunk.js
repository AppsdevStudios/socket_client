(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{113:function(e,t){},116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){"use strict";a.r(t);var n,c=a(0),r=a.n(c),l=a(61),s=a.n(l),m=a(19),o=a(1),i=a(8),u=(a(73),function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],l=Object(c.useState)(""),s=Object(i.a)(l,2),o=s[0],u=s[1];return r.a.createElement("div",{className:"joinOuterContainer"},r.a.createElement("div",{className:"joinInnerContainer"},r.a.createElement("h1",{className:"heading"},"Join"),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Name",className:"joinInput",type:"text",onChange:function(e){return n(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Room",className:"joinInput mt-20",type:"text",onChange:function(e){return u(e.target.value)}})),r.a.createElement(m.b,{onClick:function(e){return a&&o?null:e.preventDefault()},to:"/chat?name=".concat(a,"&room=").concat(o)},r.a.createElement("button",{className:"button mt-20",type:"submit"},"Sign In"))))}),A=a(67),E=a(63),f=a.n(E),g=a(64),p=a.n(g),d=(a(116),a(20)),h=a.n(d),v=(a(117),function(e){var t=e.users;return r.a.createElement("div",{className:"textContainer"},r.a.createElement("div",null,r.a.createElement("h1",null,"Realtime Chat Application ",r.a.createElement("span",{role:"img","aria-label":"emoji"},"\ud83d\udcac")),r.a.createElement("h2",null,"Created with React, Express, Node and Socket.IO ",r.a.createElement("span",{role:"img","aria-label":"emoji"},"\u2764\ufe0f")),r.a.createElement("h2",null,"Try it out right now! ",r.a.createElement("span",{role:"img","aria-label":"emoji"},"\u2b05\ufe0f"))),t?r.a.createElement("div",null,r.a.createElement("h1",null,"People currently chatting:"),r.a.createElement("div",{className:"activeContainer"},r.a.createElement("h2",null,t.map((function(e){var t=e.name;return r.a.createElement("div",{key:t,className:"activeItem"},t,r.a.createElement("img",{alt:"Online Icon",src:h.a}))}))))):null)}),N=a(65),b=a.n(N),j=(a(118),function(e){var t=e.room;return r.a.createElement("div",{className:"infoBar"},r.a.createElement("div",{className:"leftInnerContainer"},r.a.createElement("img",{className:"onlineIcon",src:h.a,alt:"online"}),r.a.createElement("h3",null,t)),r.a.createElement("div",{className:"rightInnerContainer"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:b.a,alt:"close"}))))}),C=(a(119),function(e){var t=e.message,a=e.setMessage,n=e.sendMessage;return r.a.createElement("form",{className:"form"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Type a message...",value:t,onChange:function(e){return a(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?n(e):null}}),r.a.createElement("button",{className:"sendButton",onClick:function(e){return n(e)}},"Send"))}),O=a(66),I=a.n(O),S=a(35),x=a.n(S),y=(a(165),function(e){var t=e.message,a=t.user,n=t.text,c=!1,l=e.name.trim().toLowerCase();return a===l&&(c=!0),c?r.a.createElement("div",{className:"messageContainer justifyEnd"},r.a.createElement("p",{className:"sendText pr-10"},l),r.a.createElement("div",{className:"messageBox backgroundBlue"},r.a.createElement("p",{className:"messageText colorWhite"},x.a.emojify(n)))):r.a.createElement("div",{className:"messageContainer justifyStart"},r.a.createElement("div",{className:"messageBox backgroundLight"},r.a.createElement("p",{className:"messageText colorDark"},x.a.emojify(n))),r.a.createElement("p",{className:"sendText pl-10"},a))}),R=(a(166),function(e){var t=e.messages,a=e.name;return r.a.createElement(I.a,{className:"messages"},t.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(y,{message:e,name:a}))})))}),k=function(e){var t=e.location,a=Object(c.useState)(""),l=Object(i.a)(a,2),s=l[0],m=l[1],o=Object(c.useState)(""),u=Object(i.a)(o,2),E=u[0],g=u[1],d=Object(c.useState)(""),h=Object(i.a)(d,2),N=h[0],b=h[1],O=Object(c.useState)(""),I=Object(i.a)(O,2),S=I[0],x=I[1],y=Object(c.useState)([]),k=Object(i.a)(y,2),w=k[0],B=k[1],M="https://appsdev-chat-v1.herokuapp.com/";Object(c.useEffect)((function(){var e=f.a.parse(t.search),a=e.name,c=e.room;return n=p()(M),m(a),g(c),n.emit("join",{name:a,room:c},(function(){})),function(){n.emit("disconnect"),n.off()}}),[M,t.search]),Object(c.useEffect)((function(){n.on("message",(function(e){B([].concat(Object(A.a)(w),[e]))})),n.on("roomData",(function(e){var t=e.users;b(t)}))}),[w]);return console.log(S,w),r.a.createElement("div",{className:"outerContainer"},r.a.createElement("div",{className:"container"},r.a.createElement(j,{room:E}),r.a.createElement(R,{messages:w,name:s}),r.a.createElement(C,{message:S,setMessage:x,sendMessage:function(e){e.preventDefault(),S&&n.emit("sendMessage",S,(function(){return x("")}))}})),r.a.createElement(v,{users:N}))},w=function(){return r.a.createElement(m.a,null,r.a.createElement(o.a,{path:"/",exact:!0,component:u}),r.a.createElement(o.a,{path:"/chat",component:k}))};s.a.render(r.a.createElement(w,null),document.querySelector("#root"))},20:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII="},65:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII="},68:function(e,t,a){e.exports=a(167)},73:function(e,t,a){}},[[68,1,2]]]);
//# sourceMappingURL=main.af3b9176.chunk.js.map
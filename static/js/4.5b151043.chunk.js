(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[4],{306:function(e,a,s){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialogsItems:"Dialogs_dialogsItems__2sNe2",dialog:"Dialogs_dialog__lk_cw",active:"Dialogs_active__2sQhs",messages:"Dialogs_messages__1w_Up",message:"Dialogs_message__1xIDh",message2:"Dialogs_message2__10yUu",secondman:"Dialogs_secondman__16QrD"}},311:function(e,a,s){"use strict";s.r(a);var t=s(116),n=s(1),i=s.n(n),l=s(306),m=s.n(l),o=function(e){return i.a.createElement("div",null,i.a.createElement("div",{className:m.a.message},i.a.createElement("img",{src:"https://i.kym-cdn.com/photos/images/original/001/008/986/45a.png",alt:""}),e.message),i.a.createElement("div",{className:m.a.message2},i.a.createElement("img",{src:"https://i.kym-cdn.com/photos/images/original/000/972/517/516.jpg",alt:""}),e.message))},c=s(9),g=function(e){return i.a.createElement("div",{className:m.a.dialog+" "+m.a.active},i.a.createElement(c.b,{to:"/dialogs/".concat(e.id)},e.name," "))},r=s(27),d=s(99),u=s(139),_=s(41),E=s(96),p=Object(E.a)(100),v=Object(u.a)({form:"dialogAddMessageForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(d.a,{component:_.b,validate:[E.b,p],name:"newMessageBody",placeholder:"enter your message"})),i.a.createElement("div",null,i.a.createElement("button",null,"Add message")))})),b=function(e){var a=e.dialogsPage,s=a.dialogs.map((function(e){return i.a.createElement(g,{name:e.name,key:e.id,id:e.id})})),t=a.messages.map((function(e){return i.a.createElement(o,{id:e.id,key:e.id,message:e.message})}));return e.isAuth?i.a.createElement("div",{className:m.a.dialogs},i.a.createElement("div",null,s),i.a.createElement("div",{className:m.a.messages},i.a.createElement("div",null,t),i.a.createElement(v,{onSubmit:function(a){e.onSendNewMessage(a.newMessageBody)}}))):i.a.createElement(r.a,{to:"/login"})},f=s(105),h=s(107),D=s(7);a.default=Object(D.d)(Object(f.a)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{onSendNewMessage:function(a){e(Object(t.b)(a))}}})),h.a)(b)}}]);
//# sourceMappingURL=4.5b151043.chunk.js.map
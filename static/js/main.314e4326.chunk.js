(this["webpackJsonp1-fetch-users"]=this["webpackJsonp1-fetch-users"]||[]).push([[0],{13:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var o=c(1),n=c.n(o),r=c(6),s=c.n(r),a=c(7),i=c(4),l=c(0);var d=function(t){var e=t.text,c=t.color,o=t.id,r=t.setTasks,s=t.tasks,a=t.completed,i=n.a.useRef();return Object(l.jsxs)("div",{ref:i,id:o,className:"todo-item",children:[Object(l.jsx)("div",{className:"todo-checkbox",children:Object(l.jsxs)("label",{htmlFor:"todo-".concat(o),children:[Object(l.jsx)("input",{type:"checkbox",id:"todo-".concat(o),defaultChecked:a,onChange:function(t){return function(t){r(s.map((function(e){return e.id===+i.current.id&&(e.completed=t.target.checked),e})))}(t)}}),Object(l.jsx)("div",{children:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(l.jsx)("path",{d:"M505 75a26 26 0 00-37 0L162 382 44 264a26 26 0 00-37 37l136 136c10 10 27 9 37 0l325-325c10-10 9-27 0-37z"})})})]})}),Object(l.jsx)("div",{className:"todo-delimiter ".concat(c)}),Object(l.jsx)("p",{className:"todo-text",children:e}),Object(l.jsxs)("div",{className:"todo-actions",children:[Object(l.jsx)("svg",{onClick:function(){return function(){var t=window.prompt("\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443","");t&&r(s.map((function(e){return e.id===+i.current.id&&(e.text=t),e})))}()},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 384",children:Object(l.jsx)("path",{d:"M0 304v80h80l236-236-80-80zM378 56L328 6c-8-8-22-8-30 0l-39 39 80 80 39-39c8-8 8-22 0-30z"})}),Object(l.jsx)("svg",{onClick:function(){r(s.filter((function(t){return t.id!==+i.current.id})).map((function(t,e){return t.id=e+1,t})))},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 96 96",children:Object(l.jsx)("path",{d:"M63 48l32-33v-2L83 1a2 2 0 00-2 0L48 33 15 1h-2L1 13v2l32 33L1 81v2l12 12a2 2 0 002 0l33-32 33 32a2 2 0 002 0l12-12v-2L63 48z"})})]})]})},u=["grey","red","blue","orange","green"];var j=function(){var t=n.a.useState("".concat(u[0])),e=Object(i.a)(t,2),c=e[0],o=e[1],r=n.a.useState(!0),s=Object(i.a)(r,2),j=s[0],x=s[1],p=n.a.useState([{id:1,text:"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c Todo by Bykov Philipp.",color:"green",completed:!0},{id:2,text:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0446\u0432\u0435\u0442 \u0434\u043b\u044f \u0437\u0430\u043c\u0435\u0442\u043a\u0438",color:"blue",completed:!1},{id:3,text:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0437\u0430\u043c\u0435\u0442\u043a\u0443",color:"orange",completed:!1},{id:4,text:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0435\u0451 \u0442\u0435\u043a\u0441\u0442 \u0438 \u0443\u0434\u0430\u043b\u0438\u0442\u044c",color:"grey",completed:!1},{id:5,text:"\u041f\u043e\u043d\u044f\u0442\u044c \u0447\u0442\u043e \u044d\u0442\u043e \u0443\u0434\u043e\u0431\u043d\u043e \u0438 \u0437\u0430\u043c\u0435\u0442\u043a\u0438 \u0432\u0441\u0435 \u0437\u0430\u043c\u0435\u0442\u043a\u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f",color:"green",completed:!1}]),h=Object(i.a)(p,2),b=h[0],m=h[1];j?(localStorage.getItem("tasks")?m(JSON.parse(localStorage.getItem("tasks"))):localStorage.setItem("tasks",JSON.stringify(b)),x(!1)):localStorage.setItem("tasks",JSON.stringify(b));var v=n.a.useRef();return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("div",{className:"todo",children:[Object(l.jsxs)("h2",{children:["\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447 (",b.length,")"]}),b.map((function(t){return Object(l.jsx)(d,{setTasks:m,tasks:b,id:t.id,text:t.text,color:t.color,completed:t.completed},t.id)})),Object(l.jsxs)("div",{className:"todo-input",children:[Object(l.jsx)("input",{ref:v,type:"text",onKeyUp:function(t){"Enter"===t.key&&(!function(t,e){var c=b[b.length-1].id+1;m([].concat(Object(a.a)(b),[{id:c,text:t,color:e,completed:!1}]))}(v.current.value,c),t.target.value="",o("grey"),t.target.focus())},placeholder:"\u0422\u0435\u043a\u0441\u0442 \u0437\u0430\u0434\u0430\u0447\u0438..."}),Object(l.jsx)("ul",{children:u.map((function(t){return Object(l.jsx)("li",{color:t,onClick:function(t){return function(t){var e=t.target;o(e.getAttribute("color")),e.classList.contains("active")||e.classList.add("active")}(t)},className:"todo-color ".concat(t===c?t+" active":t)},t)}))})]})]})})};c(13);s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.314e4326.chunk.js.map
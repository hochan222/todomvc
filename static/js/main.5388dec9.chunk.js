(this.webpackJsonptodomvc=this.webpackJsonptodomvc||[]).push([[0],{17:function(e,t,c){"use strict";c.r(t);var o=c(1),n=c.n(o),s=c(4),r=c.n(s),i=c(3),a=n.a.createContext(void 0),l=c(0),d=Object(i.a)((function(e){var t=e.store.todoStore,c=t.getLeftItems,o=t.removeCompletedContent,n=function(e){var t=e>1?" items left":" item left";return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("strong",{children:e}),t]})}(c());return Object(l.jsxs)("footer",{className:"footer",children:[Object(l.jsx)("span",{className:"todo-count",children:n}),Object(l.jsxs)("ul",{className:"filters",children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"/",className:"all",children:"All"})})," ",Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"/active",className:"active",children:"Active"})})," ",Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"/completed",className:"completed",children:"Completed"})})]}),Object(l.jsx)("button",{className:"clear-completed",onClick:o,children:"Clear completed"})]})}));var h=Object(i.a)((function(e){var t=e.id,c=e.content,o=e.checked,n=e.onClickHandler;return Object(l.jsx)("li",{className:o?"completed":"",onClick:function(e){return n(e,t)},children:Object(l.jsxs)("div",{className:"view",children:[Object(l.jsx)("input",{className:"toggle",type:"checkbox",checked:o}),Object(l.jsx)("label",{children:c}),Object(l.jsx)("button",{className:"destroy"})]})})})),j=Object(i.a)((function(e){var t=e.todoList,c=e.onClickHandler;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("ul",{className:"todo-list",children:t.map((function(e){var t=e.id,o=e.content,n=e.checked;return Object(l.jsx)(h,{id:t,content:o,checked:n,onClickHandler:c},t)}))})})})),u=c(6),b=Object(i.a)((function(e){var t=e.toggleAllCheck,c=Object(o.useState)(!1),n=Object(u.a)(c,2),s=n[0],r=n[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",{id:"toggle-all",className:"toggle-all",type:"checkbox",checked:s,onChange:function(){r((function(e){return!e})),t(s)}}),Object(l.jsx)("label",{htmlFor:"toggle-all",children:"Mark all as complete"})]})})),f=Object(i.a)((function(e){var t=e.store.todoStore,c=t.todoList,o=t.toggleCheck,n=t.removeContent,s=t.toggleAllCheck,r=function(e){var t=e;switch(window.location.pathname){case"/":return t;case"/active":return t.filter((function(e){return!1===e.checked}));case"/completed":return t.filter((function(e){return!0===e.checked}))}return t}(c);return Object(l.jsxs)("section",{className:"main",children:[Object(l.jsx)(b,{toggleAllCheck:s}),Object(l.jsx)(j,{todoList:r,onClickHandler:function(e,t){var c=e.target;c.classList.contains("toggle")&&o(t),c.classList.contains("destroy")&&n(t)}})]})}));var O=Object(i.a)((function(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("h1",{children:"todos"})})}));var m=Object(i.a)((function(e){var t=e.store,c=Object(o.useState)(""),n=Object(u.a)(c,2),s=n[0],r=n[1],i=t.todoStore.addContent;return Object(l.jsx)("input",{className:"new-todo",type:"text",value:s,onChange:function(e){r(e.target.value)},onKeyDown:function(e){"Enter"===e.code&&(i(s),r(""))},placeholder:"What needs to be done?"})}));var g=Object(i.a)((function(){var e=Object(o.useContext)(a);return Object(l.jsxs)("section",{children:[Object(l.jsx)(O,{}),Object(l.jsx)(m,{store:e}),Object(l.jsx)(f,{store:e}),Object(l.jsx)(d,{store:e})]})})),x=(c(15),c(16),c(5)),v=c(8),k=c(2),L=function e(t){var c=this;Object(x.a)(this,e),this.rootStore=void 0,this.todoList=void 0,this.increaseId=void 0,this.getLocalStorage=function(){return JSON.parse(localStorage.getItem("todoList"))},this.setLocalStorage=function(){localStorage.setItem("todoList",JSON.stringify({todoList:c.todoList,increaseId:c.increaseId}))},this.getLeftItems=function(){return c.todoList.filter((function(e){return!1===e.checked})).length},this.addContent=function(e){c.todoList.push({id:c.increaseId,content:e,checked:!1}),c.increaseId+=1,c.setLocalStorage()},this.toggleCheck=function(e){var t=c.todoList.findIndex((function(t){return t.id===e}));c.checkId(t)&&(c.todoList[t].checked=!c.todoList[t].checked),c.setLocalStorage()},this.toggleAllCheck=function(e){c.todoList=c.todoList.map((function(t){return Object(v.a)(Object(v.a)({},t),{},{checked:!e})})),c.setLocalStorage()},this.removeContent=function(e){var t=c.findIndex(e);c.checkId(t)&&c.removeTodoItem(t),c.setLocalStorage()},this.removeCompletedContent=function(){c.todoList=c.todoList.filter((function(e){return!1===e.checked})),c.setLocalStorage()},this.findIndex=function(e){return c.todoList.findIndex((function(t){return t.id===e}))},this.checkId=function(e){return-1!==e},this.removeTodoItem=function(e){c.todoList.splice(e,1)};var o=this.getLocalStorage(),n=o.todoList,s=o.increaseId;this.todoList=n||[],this.increaseId=s||0,Object(k.e)(this,{todoList:k.f,addContent:k.b,toggleCheck:k.b,toggleAllCheck:k.b,removeContent:k.b,removeCompletedContent:k.b}),this.rootStore=t},C=function e(){Object(x.a)(this,e),this.todoStore=void 0,this.todoStore=new L(this)};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(a.Provider,{value:new C,children:Object(l.jsx)(g,{})})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.5388dec9.chunk.js.map
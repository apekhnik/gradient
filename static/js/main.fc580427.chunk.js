(this.webpackJsonpgradient=this.webpackJsonpgradient||[]).push([[0],{26:function(t,e,n){},33:function(t,e,n){},34:function(t,e,n){},40:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n(15),i=n.n(o),a=(n(33),n(3)),r=(n(34),n(5)),s=n(28),d=n(18),l=n(12),u=n.n(l),j=Object(d.b)({name:"app",initialState:{newColor:{first:"#000000",second:"#ffffff",id:u()()},colorList:[{first:"#905431",second:"#abc",id:u()()},{first:"#000000",second:"#ffffff",id:u()()}],addColorDisable:!1},reducers:{onFirstColorChange:function(t,e){t.newColor.first=e.payload},onSecondColorChange:function(t,e){t.newColor.second=e.payload},addColorToList:function(t,e){t.colorList=[].concat(Object(s.a)(t.colorList),[e.payload])},deleteColor:function(t,e){console.log("ya tut"),t.colorList=t.colorList.filter((function(t){return t.id!=e.payload}))},editColor:function(t,e){t.colorList=t.colorList.map((function(t){return t.id===e.payload.id?e.payload:t}))},disableBtnToogler:function(t,e){t.addColorDisable=e.payload}}}),f=j.actions,b=f.onFirstColorChange,p=f.onSecondColorChange,O=f.addColorToList,h=f.deleteColor,m=f.editColor,g=f.disableBtnToogler,x=function(t){return t.app.newColor},v=function(t){return t.app.colorList},C=function(t){return t.app.addColorDisable},_=function(t){return!(!/^#[0-9A-F]{3}$/i.test(t)&&!/^#[0-9A-F]{6}$/i.test(t))},y=j.reducer,N=(n(40),n(1)),k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#42716f",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#19000c";return"linear-gradient(90deg,".concat(t,", ").concat(e,")")},w=function(){var t=Object(r.c)(x),e=t.first,n=t.second,c=Object(r.c)(C),o=Object(a.f)(),i=Object(r.b)(),s=function(t){_(t)?i(g(!0)):i(g(!1))};return Object(N.jsx)("div",{className:"newGradient",style:{background:k(e,n)},children:Object(N.jsx)("div",{className:"newGradient__content",children:Object(N.jsx)("div",{className:"newGradient__form",children:Object(N.jsxs)("form",{action:"",className:"form__grid",children:[Object(N.jsxs)("div",{className:"form__input",children:[Object(N.jsx)("input",{type:"text",value:e,onChange:function(t){s(t.target.value),i(b(t.target.value))}}),Object(N.jsx)("input",{type:"text",value:n,onChange:function(t){s(t.target.value),i(p(t.target.value))}})]}),Object(N.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault();var c={first:e,second:n,id:u()()};i(O(c)),setTimeout((function(){o.push("/")}),1e3)},disabled:!c,children:"ADD"})]})})})})},L=(n(26),function(t){var e=t.first,n=t.second,c=t.id,o=Object(r.b)(),i=Object(a.f)();return Object(N.jsxs)("div",{className:"gradientItem",style:{background:k(e,n)},children:[Object(N.jsx)("button",{onClick:function(){o(h(c))},className:"gradientItem__remove_btn",children:"x"}),Object(N.jsxs)("div",{className:"gradientItem__info",children:[Object(N.jsx)("span",{children:e}),Object(N.jsx)("span",{children:n})]}),Object(N.jsx)("button",{className:"gradientItem__edit_btn",onClick:function(){i.push("/edit/".concat(c))},children:"..."})]})}),D=function(){var t=Object(r.c)((function(t){return t.app.colorList})),e=Object(a.f)(),n=t.map((function(t){return Object(N.jsx)(L,{first:t.first,second:t.second,id:t.id},t.id)}));return Object(N.jsxs)("div",{className:"home",children:[n,Object(N.jsx)("button",{className:"returnToNew",onClick:function(){return e.push("/new")},children:"CREATE"})]})},T=n(24),A=(n(43),function(t){var e=Object(r.c)(C),n=t.match.params.id,o=Object(a.f)(),i=Object(r.c)(v).filter((function(t){return t.id==n}))[0],s=Object(c.useState)(i.first),d=Object(T.a)(s,2),l=d[0],u=d[1],j=Object(c.useState)(i.second),f=Object(T.a)(j,2),b=f[0],p=f[1],O=Object(r.b)(),h=function(t){_(t)?O(g(!0)):O(g(!1))};return Object(N.jsx)("div",{className:"editGradient",style:{background:k(l,b)},children:Object(N.jsxs)("form",{action:"",className:"form__grid",children:[Object(N.jsxs)("div",{className:"form__input",children:[Object(N.jsx)("input",{type:"text",value:l,onChange:function(t){h(t.target.value),u(t.target.value)}}),Object(N.jsx)("input",{type:"text",value:b,onChange:function(t){h(t.target.value),p(t.target.value)}})]}),Object(N.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),O(m({first:l,second:b,id:n})),o.push("/")},disabled:!e,children:"Accept changes"})]})})}),I="http://apekhnik.github.io/gradient";var S=function(){return Object(N.jsx)("div",{className:"App",children:Object(N.jsx)("div",{className:"content",children:Object(N.jsxs)(a.c,{children:[Object(N.jsx)(a.a,{path:I+"/",exact:!0,component:D}),Object(N.jsx)(a.a,{path:I+"/new",component:w}),Object(N.jsx)(a.a,{path:I+"/edit/:id?",component:A})]})})})},F=Object(d.a)({reducer:{app:y}}),G=n(10);i.a.render(Object(N.jsx)(G.a,{children:Object(N.jsx)(r.a,{store:F,children:Object(N.jsx)(S,{})})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.fc580427.chunk.js.map
(function(e){function t(t){for(var o,i,c=t[0],s=t[1],u=t[2],p=0,d=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);l&&l(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034b":function(e,t,n){},"034f":function(e,t,n){"use strict";var o=n("85ec"),a=n.n(o);a.a},"05ad":function(e,t,n){"use strict";var o=n("e371"),a=n.n(o);a.a},"1c23":function(e,t,n){"use strict";var o=n("f1bf"),a=n.n(o);a.a},"21c7":function(e,t,n){"use strict";var o=n("48e9"),a=n.n(o);a.a},"3e07":function(e,t,n){"use strict";var o=n("b5fb"),a=n.n(o);a.a},"48e9":function(e,t,n){},"4c73":function(e,t,n){},"4f38":function(e,t,n){"use strict";var o=n("4c73"),a=n.n(o);a.a},"85ec":function(e,t,n){},b5fb:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.theme,attrs:{id:"app"}},[n("Header",{attrs:{title:"TaskApp"},on:{toggleTheme:e.toggleTheme}}),n("router-view"),n("Footer")],1)},r=[],i=n("d4ec"),c=n("bee2"),s=n("262e"),u=n("2caf"),l=n("9ab4"),p=n("60a3"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h3",[e._v(e._s(e.title))]),n("button",{on:{click:function(t){return e.$emit("toggleTheme")}}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"black"}},[n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),n("path",{attrs:{d:"M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"}})])])])},f=[],v=function(e){Object(s["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(i["a"])(this,n),t.apply(this,arguments)}return n}(p["e"]);Object(l["a"])([Object(p["c"])()],v.prototype,"title",void 0),v=Object(l["a"])([p["a"]],v);var h=v,m=h,b=(n("1c23"),n("2877")),T=Object(b["a"])(m,d,f,!1,null,"75e3c4dc",null),E=T.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("div",[n("button",{class:{active:"all"===e.filter},on:{click:e.onAll}},[e._v("All")]),n("button",{class:{active:"completed"===e.filter},on:{click:e.onCompleted}},[e._v("Completed")]),n("button",{class:{active:"incompleted"===e.filter},on:{click:e.onIncompleted}},[e._v("Incompleted")])]),n("button",{class:{show:e.showUpBtn},on:{click:e.scrollUp}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"black"}},[n("path",{attrs:{d:"M0 0h24v24H0V0z",fill:"none"}}),n("path",{attrs:{d:"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"}})])])])},y=[],k=n("5530"),j=(n("4de4"),n("c740"),n("45fc"),n("a434"),n("b0c0"),n("6fc5")),g=(n("96cf"),n("1da1")),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"notifyRef"},[n("span",[e._v(e._s(e.props.message))]),n("span",{staticClass:"close",staticStyle:{cursor:"pointer"},on:{click:e.onRemove}},[e._v("❌")])])},w=[],x=function(e){Object(s["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(i["a"])(this,n),t.apply(this,arguments)}return Object(c["a"])(n,[{key:"onRemove",value:function(){}},{key:"mounted",value:function(){this.notifyRef.classList.add("show")}}]),n}(p["e"]);Object(l["a"])([Object(p["c"])()],x.prototype,"props",void 0),Object(l["a"])([Object(p["d"])("notifyRef")],x.prototype,"notifyRef",void 0),Object(l["a"])([Object(p["b"])()],x.prototype,"onRemove",null),x=Object(l["a"])([Object(p["a"])({})],x);var C,L=x,S=L,A=(n("4f38"),Object(b["a"])(S,_,w,!1,null,"97b6c24a",null)),I=A.exports;(function(e){e["POSITIVE"]="positive",e["NEGATIVE"]="negative"})(C||(C={}));var $=function(){function e(t){Object(i["a"])(this,e),console.log("Notify"),this.props=t,this.show()}return Object(c["a"])(e,[{key:"show",value:function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){var t,n,a,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=o["a"].extend(I),this.vueCmp=new t({propsData:{props:this.props}}),this.vueCmp.$mount(),this.vueCmp.$el.setAttribute("style","--color: var(--".concat(this.props.color,")")),this.vueCmp.$on("on-remove",(function(){var e=r.remove.bind(r);e()})),n=document.getElementById("notify-container"),n?n.prepend(this.vueCmp.$el):(a=document.createElement("div"),a.id="notify-container",document.body.appendChild(a),a.prepend(this.vueCmp.$el)),setTimeout((function(){r.remove()}),this.props.lifeTime||7e3);case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"remove",value:function(){var e,t=this;console.log("remove"),null===(e=this.vueCmp)||void 0===e||e.$el.classList.add("hide"),setTimeout((function(){var e,n;null===(e=t.vueCmp)||void 0===e||e.$el.remove(),null===(n=t.vueCmp)||void 0===n||n.$destroy()}),300)}}]),e}(),R=$,D=n("2f62");o["a"].use(D["a"]);var M,P=new D["a"].Store({});(function(e){e["ALL"]="all",e["COMPLETED"]="completed",e["INCOMPLETED"]="incompleted"})(M||(M={}));var V=function(e){Object(s["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;return Object(i["a"])(this,n),e=t.apply(this,arguments),e.data=[],e.filter=M.ALL,e.loading=!1,e.listElement=null,e}return Object(c["a"])(n,[{key:"SET_DATA",value:function(e){this.data=e}},{key:"SET_LIST_ELEMENT",value:function(e){this.listElement=e}},{key:"SET_FILTER",value:function(e){this.filter=e}},{key:"CREATE_TASK",value:function(e){this.data.push(e)}},{key:"EDIT_TASK",value:function(e){var t=e.task,n=e.index;console.log(t,n),this.data[n].name=t.name,this.data[n].completed=t.completed}},{key:"REMOVE_TASK",value:function(e){this.data.splice(e,1)}},{key:"TOGGLE_COMPLETED",value:function(e){var t=this.data.findIndex((function(t){return t.id===e}));this.data[t].completed=!this.data[t].completed}},{key:"iniData",value:function(){for(var e=[],t=0;t<100;t++)e.push({id:t,name:"Task"+(t+1),completed:!1});this.SET_DATA(e)}},{key:"SAVE_TASK",value:function(e){if(""===e.name)return{color:C.NEGATIVE,message:"El campo nombre de tarea es requerido"};if(e.id){var t=this.data.findIndex((function(t){return t.id===e.id}));return t>-1?this.data.some((function(t){var n=t.name,o=t.id;return n.toUpperCase()===e.name.toUpperCase()&&o!==e.id}))?{color:C.NEGATIVE,message:"La Tarea ya existe"}:(this.EDIT_TASK({task:e,index:t}),{color:C.POSITIVE,message:"Tarea Editada con exito"}):{color:C.NEGATIVE,message:"No existe la tarea"}}return this.data.some((function(t){var n=t.name;t.id;return n.toUpperCase()===e.name.toUpperCase()}))?{color:C.NEGATIVE,message:"La Tarea ya existe"}:(e.id=(new Date).getTime(),this.CREATE_TASK(e),{color:C.POSITIVE,message:"Tarea Creada con exito"})}},{key:"DELETE_TASK",value:function(e){var t=this.data.findIndex((function(t){return t.id===e}));return t>-1?(this.REMOVE_TASK(t),{color:C.POSITIVE,message:"Tarea eliminada con exito"}):{color:C.NEGATIVE,message:"No se pudo eliminar la tarea"}}},{key:"destroy",value:function(){P.unregisterModule("Task")}},{key:"filterTasks",get:function(){switch(this.filter){case M.COMPLETED:return this.data.filter((function(e){return e.completed}));case M.INCOMPLETED:return this.data.filter((function(e){return!e.completed}));default:return this.data}}}]),n}(j["d"]);Object(l["a"])([j["c"]],V.prototype,"SET_DATA",null),Object(l["a"])([j["c"]],V.prototype,"SET_LIST_ELEMENT",null),Object(l["a"])([j["c"]],V.prototype,"SET_FILTER",null),Object(l["a"])([j["c"]],V.prototype,"CREATE_TASK",null),Object(l["a"])([j["c"]],V.prototype,"EDIT_TASK",null),Object(l["a"])([j["c"]],V.prototype,"REMOVE_TASK",null),Object(l["a"])([j["c"]],V.prototype,"TOGGLE_COMPLETED",null),Object(l["a"])([j["a"]],V.prototype,"iniData",null),Object(l["a"])([j["a"]],V.prototype,"SAVE_TASK",null),Object(l["a"])([j["a"]],V.prototype,"DELETE_TASK",null),V=Object(l["a"])([Object(j["b"])({namespaced:!0,name:"Task",stateFactory:!0,dynamic:!0,store:P})],V);var N=Object(j["e"])(V,P),H=function(e){Object(s["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;return Object(i["a"])(this,n),e=t.apply(this,arguments),e.showUpBtn=!1,e}return Object(c["a"])(n,[{key:"mounted",value:function(){var e,t=this;null===(e=N.listElement)||void 0===e||e.addEventListener("scroll",(function(e){N.listElement&&N.listElement.scrollTop>100?t.showUpBtn=!0:t.showUpBtn=!1}))}},{key:"onAll",value:function(){N.SET_FILTER(M.ALL)}},{key:"onCompleted",value:function(){N.SET_FILTER(M.COMPLETED)}},{key:"onIncompleted",value:function(){N.SET_FILTER(M.INCOMPLETED)}},{key:"scrollUp",value:function(){var e;null===(e=N.listElement)||void 0===e||e.scrollTo({top:0,behavior:"smooth"})}}]),n}(p["e"]);H=Object(l["a"])([Object(p["a"])({computed:Object(k["a"])({},Object(D["b"])("Task",["filter"]))})],H);var K,G=H,F=G,U=(n("05ad"),Object(b["a"])(F,O,y,!1,null,"27c84022",null)),B=U.exports;(function(e){e["DARK"]="dark",e["LIGHT"]="light"})(K||(K={}));var z=function(e){Object(s["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;return Object(i["a"])(this,n),e=t.apply(this,arguments),e.theme=localStorage.getItem("theme")||K.LIGHT,e}return Object(c["a"])(n,[{key:"created",value:function(){this.saveTheme()}},{key:"saveTheme",value:function(){localStorage.setItem("theme",this.theme)}},{key:"toggleTheme",value:function(){this.theme=this.theme===K.LIGHT?K.DARK:K.LIGHT,this.saveTheme()}}]),n}(p["e"]);z=Object(l["a"])([Object(p["a"])({components:{Header:E,Footer:B}})],z);var q=z,J=q,Q=(n("034f"),Object(b["a"])(J,a,r,!1,null,null,null)),W=Q.exports,X=n("9483");Object(X["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var Y=n("8c4f"),Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Tasks"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.saveTask(t)},reset:e.reset}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],ref:"inputRef",attrs:{type:"text",placeholder:"add/edit task"},domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}}),n("button",{attrs:{type:"submit"}},[e._v("save")]),n("button",{attrs:{type:"reset"}},[e._v("cancel")])]),n("ListTasks",{attrs:{data:e.filterTasks,currentEditTask:e.currentEditTask},on:{onEditTask:e.onEditTask,onDelete:e.onDelete}})],1)},ee=[],te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",e._l(e.data,(function(t){return n("li",{key:t.id,class:{active:e.currentEditTask&&e.currentEditTask.id===t.id},style:t.completed?"text-decoration: line-through; font-style: italic":"text-decoration: none;"},[n("div",{staticClass:"name",on:{click:function(n){return e.toggleCompleted(t.id)}}},[n("span",[n("input",{attrs:{type:"checkbox"},domProps:{checked:t.completed}})]),n("span",[e._v(e._s(t.name))])]),n("div",{staticClass:"actions"},[n("button",{on:{click:function(n){return e.$emit("onDelete",t)}}},[e._v("delete")]),n("button",{on:{click:function(n){return e.$emit("onEditTask",t)}}},[e._v("edit")])])])})),0)},ne=[],oe=function(e){Object(s["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(i["a"])(this,n),t.apply(this,arguments)}return Object(c["a"])(n,[{key:"toggleCompleted",value:function(e){N.TOGGLE_COMPLETED(e)}},{key:"mounted",value:function(){var e=this;N.SET_LIST_ELEMENT(this.$el),setTimeout((function(){e.$el.scrollTo({top:e.$el.scrollHeight,behavior:"smooth"})}),10)}}]),n}(p["e"]);Object(l["a"])([Object(p["c"])()],oe.prototype,"data",void 0),Object(l["a"])([Object(p["c"])()],oe.prototype,"currentEditTask",void 0),oe=Object(l["a"])([Object(p["a"])({})],oe);var ae=oe,re=ae,ie=(n("cd5e"),Object(b["a"])(re,te,ne,!1,null,"77f1bf38",null)),ce=ie.exports,se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"DialogCmp"},[n("button",{staticClass:"close",on:{click:function(t){return e.$emit("hide")}}},[e._v("❌")]),n("div",{staticClass:"header"},[e._v(e._s(e.title))]),n("div",{staticClass:"body"},[e._t("default")],2),n("div",{staticClass:"footer"},[n("button",{on:{click:function(t){return e.$emit("cancel")}}},[e._v("cancel")]),n("button",{on:{click:function(t){return e.$emit("ok")}}},[e._v("ok")])])])},ue=[],le=function(e){Object(s["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(i["a"])(this,n),t.apply(this,arguments)}return n}(p["e"]);Object(l["a"])([Object(p["c"])()],le.prototype,"title",void 0),le=Object(l["a"])([Object(p["a"])({})],le);var pe,de=le,fe=de,ve=(n("3e07"),Object(b["a"])(fe,se,ue,!1,null,"96862a4e",null)),he=ve.exports;(function(e){e["FORM"]="form",e["CONFIRM"]="confirm",e["ALERT"]="alert"})(pe||(pe={}));var me=function(){function e(t){var n=t.type,o=t.title,a=t.content,r=t.onOk,c=t.onCancel;Object(i["a"])(this,e),this.type=n,this.title=o,this.content=a,this.onOk=r,this.onCancel=c,this.show()}return Object(c["a"])(e,[{key:"show",value:function(){var e,t=this,n=o["a"].extend(he);this.component=new n({propsData:{type:this.type,title:this.title},mounted:function(){this.$el.classList.add("show")}}).$mount().$on("hide",(function(){t.onHide()})).$on("ok",(function(){t.onOk(),t.onHide()})).$on("cancel",(function(){t.onCancel(),t.onHide()})),this.backCover=document.createElement("div"),this.backCover.style.cssText="\n      position: fixed;\n      top: 0;\n      left: 0;\n      background-color: black;\n      opacity: 0.8;\n      width: 100vw;\n      height: 100vh;\n      z-index: 0;",document.body.appendChild(this.backCover);var a=this.component.$el.querySelector("div.body");a&&(a.innerHTML=this.content),null===(e=document.getElementById("app"))||void 0===e||e.appendChild(this.component.$el)}},{key:"onHide",value:function(){var e=this.hide.bind(this);e()}},{key:"hide",value:function(){var e=this;this.component.$el.classList.add("hide"),setTimeout((function(){e.component.$el.remove(),e.component.$destroy(),e.backCover.remove()}),200)}}]),e}(),be=me,Te=function(e){Object(s["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;return Object(i["a"])(this,n),e=t.apply(this,arguments),e.text="",e.currentEditTask=null,e}return Object(c["a"])(n,[{key:"mounted",value:function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,N.iniData();case 2:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"saveTask",value:function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){var t,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.currentEditTask?Object(k["a"])(Object(k["a"])({},this.currentEditTask),{},{name:this.text}):{name:this.text,completed:!1},e.next=3,N.SAVE_TASK(t);case 3:n=e.sent,new R(n),n.color===C.POSITIVE&&(this.currentEditTask||(o=N.listElement,null===o||void 0===o||o.scrollTo({top:o.scrollHeight,behavior:"smooth"})),this.reset());case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"onEditTask",value:function(e){var t;e.id!==(null===(t=this.currentEditTask)||void 0===t?void 0:t.id)?(this.text=e.name,this.currentEditTask=e,this.input&&(this.input.selectionStart=this.input.value.length,this.input.selectionEnd=this.input.value.length,this.input.focus())):this.reset()}},{key:"onDelete",value:function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(t){var n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.currentEditTask=t,new be({type:pe.CONFIRM,title:"Eliminar Tarea?",content:"Seguro Eliminar la tarea <strong>".concat(t.name,"</strong> ?"),onOk:function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.id,void 0===n){e.next=6;break}return e.next=4,N.DELETE_TASK(n);case 4:o=e.sent,new R(o);case 6:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),onCancel:function(){n.reset()}});case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"reset",value:function(){var e=this;this.text="",this.currentEditTask=null,setTimeout((function(){var t;null===(t=e.input)||void 0===t||t.focus()}),10)}},{key:"filterTasks",get:function(){return N.filterTasks}}]),n}(p["e"]);Object(l["a"])([Object(p["d"])("inputRef")],Te.prototype,"input",void 0),Te=Object(l["a"])([Object(p["a"])({components:{ListTasks:ce}})],Te);var Ee=Te,Oe=Ee,ye=(n("21c7"),Object(b["a"])(Oe,Z,ee,!1,null,null,null)),ke=ye.exports,je=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ge=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("This is an about page")])])}],_e={},we=Object(b["a"])(_e,je,ge,!1,null,null,null),xe=we.exports;o["a"].use(Y["a"]);var Ce=[{path:"/",name:"Tasks",component:ke},{path:"/about",name:"About",component:xe}],Le=new Y["a"]({mode:"hash",base:"",routes:Ce}),Se=Le;n("034b");o["a"].config.productionTip=!1,new o["a"]({router:Se,store:P,render:function(e){return e(W)}}).$mount("#app")},cd5e:function(e,t,n){"use strict";var o=n("e1e4"),a=n.n(o);a.a},e1e4:function(e,t,n){},e371:function(e,t,n){},f1bf:function(e,t,n){}});
//# sourceMappingURL=app.4eb5802b.js.map
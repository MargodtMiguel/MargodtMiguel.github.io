(function(e){function t(t){for(var o,c,a=t[0],i=t[1],l=t[2],d=0,f=[];d<a.length;d++)c=a[d],r[c]&&f.push(r[c][0]),r[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);s&&s(t);while(f.length)f.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],o=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(o=!1)}o&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},u=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var s=i;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},u=[],c=(n("5c0b"),n("2877")),a={},i=Object(c["a"])(a,r,u,!1,null,null,null),l=i.exports,s=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"c-home"},[e.counterList.length?n("div",{staticClass:"c-home__buttons"},[n("button",{class:"c-home__add-button c-home__add-button--"+e.addCounterActive,on:{click:function(t){return e.toggleAddCounter()}}},[e._v("+")])]):e._e(),n("h1",[e._v("Counters")]),e.addCounterActive||!e.counterList.length?n("div",{staticClass:"c-home__input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newCounterLabel,expression:"newCounterLabel"}],attrs:{type:"text",autofocus:"",placeholder:"Counter name"},domProps:{value:e.newCounterLabel},on:{input:function(t){t.target.composing||(e.newCounterLabel=t.target.value)}}}),n("button",{on:{click:function(t){return e.createCounter()}}},[e._v("Add Counter")])]):e._e(),n("div",{staticClass:"c-home__counters"},e._l(e.counterList,function(t,o){return n("span",{key:o,on:{click:function(t){return e.incrementCounter(o)}}},[n("counter",{attrs:{color:t.color,number:t.number,label:t.label}})],1)}),0)])},f=[],p=n("f499"),v=n.n(p),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"c-counter"},[n("button",{class:"c-counter__card c-counter__card--"+e.color},[e._v(e._s(e.number))]),n("div",{staticClass:"c-counter__label"},[e._v(e._s(e.label))])])},h=[],m={name:"counter",props:["number","label","color"]},g=m,_=Object(c["a"])(g,b,h,!1,null,null,null),C=_.exports,w=["pink","blue","purple","orange","green"],y={components:{counter:C},name:"home",data:function(){return{get counterList(){return JSON.parse(localStorage.getItem("counterList"))||[]},set counterList(e){localStorage.setItem("counterList",e)},newCounterLabel:"",addCounterActive:!1}},methods:{createCounter:function(){if(null==this.newCounterLabel||void 0==this.newCounterLabel||""==this.newCounterLabel)alert("Please give your new counter a name");else{var e=this.counterList,t=w[Math.floor(Math.random()*w.length)];e.length||(t="pink");var n={label:this.newCounterLabel,number:0,color:t};e.push(n),this.counterList=v()(e),this.newCounterLabel="",this.addCounterActive=!this.addCounterActive}},incrementCounter:function(e){var t=this.counterList;t[e].number+=1,this.counterList=v()(t),navigator.vibrate(50)},decrementCounter:function(e){console.log("double")},toggleAddCounter:function(){this.addCounterActive=!this.addCounterActive}}},L=y,k=Object(c["a"])(L,d,f,!1,null,null,null),O=k.exports;o["a"].use(s["a"]);var j=new s["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:O}]}),A=n("2f62");o["a"].use(A["a"]);var x=new A["a"].Store({state:{},mutations:{},actions:{}}),S=n("9483");Object(S["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,new o["a"]({router:j,store:x,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("5e27"),r=n.n(o);r.a},"5e27":function(e,t,n){}});
//# sourceMappingURL=app.8e9a42fb.js.map
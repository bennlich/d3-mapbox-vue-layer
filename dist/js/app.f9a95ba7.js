(function(t){function e(e){for(var r,s,i=e[0],c=e[1],u=e[2],l=0,d=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var p=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0a34":function(t,e,n){},1499:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("7a23");function a(t,e){const n=Object(r["v"])("router-view");return Object(r["p"])(),Object(r["d"])(n)}n("5cb8");var o=n("6b0d"),s=n.n(o);const i={},c=s()(i,[["render",a]]);var u=c,p=n("6605");const l=t=>(Object(r["s"])("data-v-619d0fb7"),t=t(),Object(r["q"])(),t),d=l(()=>Object(r["f"])("div",{id:"map"},null,-1));function f(t,e,n,a,o,s){const i=Object(r["v"])("D3Layer");return Object(r["p"])(),Object(r["e"])(r["a"],null,[d,Object(r["g"])(i)],64)}function m(t,e,n,a,o,s){return Object(r["p"])(),Object(r["e"])("div")}var b=n("898b"),h=n("595b"),v=n("e192"),y=n.n(v),j=n("5502"),g={name:"D3Layer",computed:{...Object(j["b"])(["map"])},methods:{maybeInitSVGLayer(){if(!this.svg&&this.map){var t=this.map.getCanvasContainer();this.svg=b["b"](t).append("svg").attr("class","mapbox-d3-container"),this.defs=this.svg.append("defs"),this.circles=this.svg.append("g").attr("class","circles"),this.randomizeData(),this.map.on("viewreset",()=>this.render()),this.map.on("move",()=>this.render()),this.map.on("moveend",()=>this.render()),this.map.on("click",()=>this.randomizeData())}},project(t){return this.map.project(new y.a.LngLat(+t[0],+t[1]))},translate(t){let e=this.project(t.geometry.coordinates);return`translate(${e.x},${e.y})`},randomizeData(){let t=500,e=this.map.getBounds();this.data=h["randomPoint"](t,{bbox:[e.getWest(),e.getNorth(),e.getEast(),e.getSouth()]}),this.render({transition:!0})},render({transition:t}={transition:!1}){if(!this.svg)return;let e=this.circles.selectAll(".circle").data(this.data.features),n=e;t&&(n=e.transition(b["c"]().duration(250).ease(b["a"]))),n.attr("transform",t=>this.translate(t)),e.enter().append("circle").attr("class","circle").attr("r",10).attr("transform",t=>this.translate(t)),e.exit().remove()}},watch:{map(){this.maybeInitSVGLayer()}},mounted:function(){this.maybeInitSVGLayer()}};n("f787");const O=s()(g,[["render",m]]);var w=O,x={name:"Home",components:{D3Layer:w},mounted:async function(){y.a.accessToken="pk.eyJ1IjoiYmVubmxpY2giLCJhIjoieUxHOHQyNCJ9.VLDDBTTdzeHKJvR5ABYaLA";const t=window.map=new y.a.Map({container:"map",style:"mapbox://styles/mapbox/light-v10",center:[7.5,58],zoom:9});await new Promise(e=>t.on("load",()=>e())),this.$store.commit("setMap",t)}};n("9039");const L=s()(x,[["render",f],["__scopeId","data-v-619d0fb7"]]);var P=L;const S=[{path:"/",name:"Home",component:P}],D=Object(p["a"])({history:Object(p["b"])(),routes:S});var _=D,M=Object(j["a"])({state:{map:null},mutations:{setMap(t,e){t.map=e}},actions:{},modules:{}});Object(r["c"])(u).use(M).use(_).mount("#app")},"5cb8":function(t,e,n){"use strict";n("fbf0")},9039:function(t,e,n){"use strict";n("1499")},f787:function(t,e,n){"use strict";n("0a34")},fbf0:function(t,e,n){}});
//# sourceMappingURL=app.f9a95ba7.js.map
(function(e){function t(t){for(var i,a,l=t[0],s=t[1],c=t[2],f=0,d=[];f<l.length;f++)a=l[f],r[a]&&d.push(r[a][0]),r[a]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(i=!1)}i&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},a={app:0},r={app:0},o=[];function l(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-131ad4c8":"c51c53b6","chunk-1927bf2b":"2749ebec","chunk-21805c32":"9eb78707","chunk-2d0d3e92":"087d8d12","chunk-2d0e59e0":"aa6053a5","chunk-2d217338":"25965441","chunk-2d22c92f":"55f7945f","chunk-4275ae22":"c7e04620","chunk-50f64b58":"1b2328fe","chunk-58cc0a1d":"c579d982"}[e]+".js"}function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-131ad4c8":1,"chunk-1927bf2b":1,"chunk-21805c32":1,"chunk-4275ae22":1,"chunk-50f64b58":1,"chunk-58cc0a1d":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var i="css/"+({}[e]||e)+"."+{"chunk-131ad4c8":"00320662","chunk-1927bf2b":"b70cecd5","chunk-21805c32":"654ace96","chunk-2d0d3e92":"31d6cfe0","chunk-2d0e59e0":"31d6cfe0","chunk-2d217338":"31d6cfe0","chunk-2d22c92f":"31d6cfe0","chunk-4275ae22":"7a5846ea","chunk-50f64b58":"4e676cbc","chunk-58cc0a1d":"6ed4d3f4"}[e]+".css",r=s.p+i,o=document.getElementsByTagName("link"),l=0;l<o.length;l++){var c=o[l],f=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(f===i||f===r))return t()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){c=d[l],f=c.getAttribute("data-href");if(f===i||f===r)return t()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=t,u.onerror=function(t){var i=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=i,delete a[e],u.parentNode.removeChild(u),n(o)},u.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(u)}).then(function(){a[e]=0}));var i=r[e];if(0!==i)if(i)t.push(i[2]);else{var o=new Promise(function(t,n){i=r[e]=[t,n]});t.push(i[2]=o);var c,f=document.createElement("script");f.charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.src=l(e),c=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+i+": "+a+")");o.type=i,o.request=a,n[1](o)}r[e]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:f})},12e4);f.onerror=f.onload=c,document.head.appendChild(f)}return Promise.all(t)},s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],f=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var u=f;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3a10":function(e,t,n){},"4dcb":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("14c6"),n("08c1"),n("4842"),n("d9fc");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],o={name:"App"},l=o,s=(n("867a"),n("2877")),c=Object(s["a"])(l,a,r,!1,null,"0ee3b288",null),f=c.exports,d=n("8c4f");i["a"].use(d["a"]);var u=new d["a"]({routes:[{path:"/",name:"",component:function(){return n.e("chunk-58cc0a1d").then(n.bind(null,"7abe"))},children:[{path:"",name:"home",component:function(){return n.e("chunk-21805c32").then(n.bind(null,"97cd"))},meta:{name:"首页"}}]},{path:"/button",name:"",component:function(){return n.e("chunk-2d22c92f").then(n.bind(null,"f48c"))},children:[{path:"",name:"button",component:function(){return n.e("chunk-4275ae22").then(n.bind(null,"8df1"))},meta:{name:"button"}}]},{path:"/flex",name:"",component:function(){return n.e("chunk-2d217338").then(n.bind(null,"c65d"))},children:[{path:"",name:"flex",component:function(){return n.e("chunk-1927bf2b").then(n.bind(null,"9c82"))},meta:{name:"flex"}}]},{path:"/switch",name:"",component:function(){return n.e("chunk-2d0d3e92").then(n.bind(null,"5f7b"))},children:[{path:"",name:"switch",component:function(){return n.e("chunk-50f64b58").then(n.bind(null,"d42c"))},meta:{name:"switch"}}]},{path:"/radio",name:"",component:function(){return n.e("chunk-2d0e59e0").then(n.bind(null,"94f5"))},children:[{path:"",name:"radio",component:function(){return n.e("chunk-131ad4c8").then(n.bind(null,"5665"))},meta:{name:"radio"}}]}]}),b=(n("4dcb"),n("3a10"),n("e633"),n("5d91"),n("1e57"),n("e625"),n("63ab"),n("78e9"),n("2f43"),n("d5da"),n("0027"),"0.0.4");function p(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&i.firstChild?i.insertBefore(a,i.firstChild):i.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}p(".ink-btn{border:none;outline:none;display:inline-block;padding:10px 15px;border-radius:6px;font-size:18px}.ink-btn:active{background:#f7f8f9}.is-disabled{opacity:.4}.btn-large{display:block;width:100%}.btn-primary{background:#fff;color:#108ee9;border:1px solid #108ee9}.btn-danger{background:#fff;color:#dd2622;border:1px solid #dd2622}.btn-warning{background:#fff;color:#f90;border:1px solid #f90}.btn-default{background:#fff;color:#333}.btn-active{background:#f7f8f9}");var h={name:"ink-btn",computed:{typeClass:function(){return"primary"===this.type?"btn-primary":"danger"===this.type?"btn-danger":"warning"===this.type?"btn-warning":"btn-default"},sizeClass:function(){if("large"===this.size)return"btn-large"}},props:{type:{type:String,default:"default"},size:{type:String,default:"small"},disabled:{type:Boolean,default:!1}},render:function(e){var t=this;return e("button",{attrs:{name:"button",type:"button"},class:["ink-btn",this.typeClass,this.sizeClass,this.disabled?"is-disabled":""],disabled:this.disabled,on:{click:function(e){t.$emit("click",e)}}},this.$slots.default)}};function x(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}p(".flex-flex{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.flex-auto{-webkit-box-flex:1;-webkit-flex:auto;-ms-flex:auto;flex:auto}.flex-none{-webkit-box-flex:0;-webkit-flex:none;-ms-flex:none;flex:none}.flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-sizing:border-box;box-sizing:border-box}.flex.flex-wrap{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.flex.flex-nowrap{-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.flex.flex-row{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.flex.flex-column{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.flex.flex-justify-start{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.flex.flex-justify-end{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.flex.flex-justify-center{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.flex.flex-justify-between{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.flex.flex-justify-around{-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.flex.flex-align-start{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.flex.flex-align-end{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}.flex.flex-align-center{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.flex.flex-align-baseline{-webkit-box-align:baseline;-webkit-align-items:baseline;-ms-flex-align:baseline;align-items:baseline}.flex.flex-align-stretch{-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch}");var k={name:"ink-flex",props:{flex:{type:Number},auto:{type:Boolean,default:!1},none:{type:Boolean,default:!1},width:{type:String},height:{type:String},row:{type:Boolean,default:!1},column:{type:Boolean,default:!1},wrap:{type:Boolean,default:!1},nowrap:{type:Boolean,default:!1},justifyStart:{type:Boolean,default:!1},justifyEnd:{type:Boolean,default:!1},justifyCenter:{type:Boolean,default:!1},justifyBetween:{type:Boolean,default:!1},justifyAround:{type:Boolean,default:!1},alignStart:{type:Boolean,default:!1},alignEnd:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},alignBaseline:{type:Boolean,default:!1},alignStretch:{type:Boolean,default:!1}},computed:{getClassArray:function(){var e={"flex-flex":this.flex,"flex-auto":this.auto,"flex-none":this.none||this.width||this.height,"flex-row":this.row,"flex-column":this.column,"flex-wrap":this.wrap,"flex-nowrap":this.nowrap,"flex-justify-start":this.justifyStart,"flex-justify-end":this.justifyEnd,"flex-justify-center":this.justifyCenter,"flex-justify-between":this.justifyBetween,"flex-justify-around":this.justifyAround,"flex-align-start":this.alignStart,"flex-align-end":this.alignEnd,"flex-align-center":this.alignCenter,"flex-align-baseline":this.alignBaseline,"flex-align-stretch":this.alignStretch},t=[];return Object.keys(e).forEach(function(n){e[n]&&t.push(n)}),t},getStyle:function(){var e={};return this.flex&&(e.flex="boolean"==typeof this.flex?1:this.flex,e.WebkitFlex="boolean"==typeof this.flex?1:this.flex),this.height&&(e.height=this.height),this.width&&(e.width=this.width),e}},render:function(e){return e("div",{class:["flex"].concat(x(this.getClassArray)),style:this.getStyle},this.$slots.default)}};p('.ink-switch{display:inline-block;height:32px}.ink-switch *{pointer-events:none}.ink-switch .switch-input{display:none}.ink-switch .switch-label{position:relative;display:inline-block;width:50px;height:32px;border-radius:15px;background:#ddd}.ink-switch .switch-label:after,.ink-switch .switch-label:before{content:" ";position:absolute;border-radius:13px;-webkit-transition:all .25s;transition:all .25s}.ink-switch .switch-label:before{top:1px;left:1px;width:48px;height:30px;background:#fefefe}.ink-switch .switch-label:after{top:.5px;left:1px;width:30px;height:30px;border-radius:100%;background:#fff;-webkit-box-shadow:0 0 2px 0 rgba(0,0,0,.3);box-shadow:0 0 2px 0 rgba(0,0,0,.3)}.ink-switch .switch-input[type=checkbox]:checked+.switch-label:before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}.ink-switch .switch-input[type=checkbox]:checked+.switch-label:after{-webkit-transform:translate3d(20px,0,0);transform:translate3d(20px,0,0)}');var w={name:"ink-switch",computed:{inner_value:{get:function(){return this.value},set:function(e){this.$emit("input",e),this.$emit("change",e)}},mainColor:function(){if(this.inner_value)return this.color}},props:{value:{type:Boolean,default:!1},color:{type:String,default:"#108ee9"}},render:function(e){var t=this;return e("label",{staticClass:"ink-switch"},[e("input",{staticClass:"switch-input",attrs:{type:"checkbox"},domProps:{checked:this.inner_value},on:{change:function(e){t.inner_value=e.target.checked}}}),e("label",{staticClass:"switch-label",style:{background:this.mainColor}})])}};p('.ink-radio{display:inline-block;width:20px;height:20px;border-radius:100%}.ink-radio *{pointer-events:none}.ink-radio .radio-input{display:none}.ink-radio .radio-label{position:relative;display:inline-block;width:20px;height:20px;border-radius:100%;border:1px solid #ccc;-webkit-box-sizing:border-box;box-sizing:border-box;background:#fff}.ink-radio .radio-input[type=radio]:disabled+.radio-label{border:1px solid #ccc}.ink-radio .radio-input[type=radio]:disabled+.radio-label:before{content:" ";position:absolute;left:50%;top:0;-webkit-transform:translate3d(-50%,0,0) rotate(-45deg);transform:translate3d(-50%,0,0) rotate(-45deg);width:1px;height:100%;background:#ccc}.ink-radio .radio-input[type=radio]:checked+.radio-label{border:none;background:#108ee9}.ink-radio .radio-input[type=radio]:checked+.radio-label:before{content:" ";position:absolute;top:4px;left:4px;width:13px;height:8px;-webkit-box-sizing:border-box;box-sizing:border-box;border:2px solid #fff;border-top:none;border-right:none;-webkit-transform:rotate(-46deg);-ms-transform:rotate(-46deg);transform:rotate(-46deg)}');var m=b,g=[h,k,w,{name:"ink-radio",props:{name:{type:String},val:{type:String},value:{type:String},disabled:{type:Boolean,default:!1},color:{type:String,default:"#108ee9"}},computed:{bgColor:function(){return this.value===this.val?this.color:"white"}},render:function(e){var t=this;return e("label",{staticClass:"ink-radio"},[e("input",{attrs:{type:"radio",name:this.name,value:this.val},domProps:{checked:this.value===this.val,disabled:this.disabled},staticClass:"radio-input",on:{change:function(e){t.checked=e.target.value===t.val,t.$emit("input",e.target.value)}}}),e("label",{staticClass:"radio-label",style:{background:this.bgColor}})])}}],y=function(e){g.forEach(function(t,n){e.component(t.name,t)})};window&&void 0!==window.Vue&&y(window.Vue);var v={version:m,install:y};i["a"].use(v),new i["a"]({router:u,render:function(e){return e(f)}}).$mount("#app")},"867a":function(e,t,n){"use strict";var i=n("abab"),a=n.n(i);a.a},abab:function(e,t,n){}});
//# sourceMappingURL=app.92112401.js.map
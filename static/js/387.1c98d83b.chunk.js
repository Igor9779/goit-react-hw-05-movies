/*! For license information please see 387.1c98d83b.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{247:function(t,r,e){e.d(r,{Hq:function(){return u},xc:function(){return s},Y5:function(){return l},Hx:function(){return f},Tg:function(){return c}});var n=e(861),o=e(243);function a(){a=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var a=r&&r.prototype instanceof m?r:m,i=Object.create(a.prototype),c=new R(n||[]);return o(i,"_invoke",{value:j(t,e,c)}),i}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var p="suspendedStart",d="executing",y="completed",v={};function m(){}function g(){}function A(){}var w={};s(w,c,(function(){return this}));var L=Object.getPrototypeOf,x=L&&L(L(B([])));x&&x!==e&&n.call(x,c)&&(w=x);var b=A.prototype=m.prototype=Object.create(w);function k(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function Q(t,r){function e(o,a,i,c){var u=h(t[o],t,a);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&n.call(s,"__await")?r.resolve(s.__await).then((function(t){e("next",t,i,c)}),(function(t){e("throw",t,i,c)})):r.resolve(s).then((function(t){l.value=t,i(l)}),(function(t){return e("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return a=a?a.then(o,o):o()}})}function j(r,e,n){var o=p;return function(a,i){if(o===d)throw new Error("Generator is already running");if(o===y){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=E(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var l=h(r,e,n);if("normal"===l.type){if(o=n.done?y:"suspendedYield",l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=y,n.method="throw",n.arg=l.arg)}}}function E(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,E(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var a=h(o,r.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,v;var i=a.arg;return i?i.done?(e[r.resultName]=i.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function F(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function B(r){if(r||""===r){var e=r[c];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError(typeof r+" is not iterable")}return g.prototype=A,o(b,"constructor",{value:A,configurable:!0}),o(A,"constructor",{value:g,configurable:!0}),g.displayName=s(A,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,A):(t.__proto__=A,s(t,l,"GeneratorFunction")),t.prototype=Object.create(b),t},r.awrap=function(t){return{__await:t}},k(Q.prototype),s(Q.prototype,u,(function(){return this})),r.AsyncIterator=Q,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new Q(f(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(b),s(b,l,"Generator"),s(b,c,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=B,R.prototype={constructor:R,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(F),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),F(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;F(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:B(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),v}},r}o.Z.defaults.baseURL="https://api.themoviedb.org/3",o.Z.defaults.params={api_key:"29b08a225fc4d51b574a7bff049d0144",include_adult:!1};var i="https://image.tmdb.org/t/p/w500",c=function(){var t=(0,n.Z)(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.Z.get("/trending/all/day?").then((function(t){return t.data.results.map((function(t){var r=t.id,e=t.title,n=t.poster_path;return{id:r,title:e,poster:i+n}}))})).catch((function(t){console.log(t.message)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,n.Z)(a().mark((function t(r){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.Z.get("/search/movie?query=".concat(r)).then((function(t){return t.data.results.map((function(t){var r=t.id,e=t.title,n=t.poster_path;return{id:r,title:e,poster:i+n}}))})).catch((function(t){console.log(t.message)})));case 1:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),l=function(t){return o.Z.get("/movie/".concat(t,"?")).then((function(t){var r=t.data,e=r.id,n=r.poster_path,o=r.title,a=r.release_date,c=r.vote_average,u=r.overview,l=r.genres;return{id:e,poster:i+n,title:o,releaseYear:new Date(a).getFullYear(),userScore:Math.round(10*c),overview:u,genres:l}})).catch((function(t){console.log(t.message)}))},s=function(t){return o.Z.get("/movie/".concat(t,"/credits?")).then((function(t){return t.data.cast.map((function(t){var r=t.id,e=t.name,n=t.character,o=t.profile_path;return{id:r,name:e,character:n,photo:o?i+o:"data:image/jpeg;base64,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"}}))})).catch((function(t){console.log(t.message)}))},f=function(t){return o.Z.get("/movie/".concat(t,"/reviews?")).then((function(t){return t.data.results.map((function(t){return{id:t.id,author:t.author,content:t.content}}))})).catch((function(t){console.log(t.message)}))}},387:function(t,r,e){e.r(r),e.d(r,{default:function(){return k}});var n,o,a,i,c,u,l,s=e(439),f=e(247),h=e(791),p=e(689),d=e(168),y=e(867),v=y.ZP.div(n||(n=(0,d.Z)(["\n  background-color: #f4f4f4;\n  padding: 20px;\n"]))),m=y.ZP.ul(o||(o=(0,d.Z)(["\n  list-style: none;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n"]))),g=y.ZP.li(a||(a=(0,d.Z)(["\n  margin-right: 20px;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n"]))),A=y.ZP.img(i||(i=(0,d.Z)(["\n  max-width: 100px;\n  border-radius: 50%;\n  margin-right: 10px;\n"]))),w=y.ZP.div(c||(c=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),L=y.ZP.h3(u||(u=(0,d.Z)(["\n  font-size: 16px;\n  margin: 0;\n"]))),x=y.ZP.p(l||(l=(0,d.Z)(["\n  font-size: 14px;\n  margin: 0;\n"]))),b=e(184),k=function(){var t=(0,p.UO)("movieId").movieId,r=(0,h.useState)([]),e=(0,s.Z)(r,2),n=e[0],o=e[1];return(0,h.useEffect)((function(){(0,f.xc)(t).then(o)}),[t]),(0,b.jsx)(v,{children:n.length>0&&(0,b.jsx)(m,{children:n.map((function(t){var r=t.id,e=t.name,n=t.character,o=t.photo;return(0,b.jsxs)(g,{children:[(0,b.jsx)(A,{src:o,alt:e}),(0,b.jsxs)(w,{children:[(0,b.jsx)(L,{children:e}),(0,b.jsxs)(x,{children:["Character: ",n]})]})]},r)}))})})}}}]);
//# sourceMappingURL=387.1c98d83b.chunk.js.map
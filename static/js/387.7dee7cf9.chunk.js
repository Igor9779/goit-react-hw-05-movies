/*! For license information please see 387.7dee7cf9.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{687:function(t,e,r){r.d(e,{Hq:function(){return u},Hx:function(){return f},Tg:function(){return c},Y5:function(){return s},xc:function(){return l}});var n=r(861),o=r(243);function i(){i=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var i=e&&e.prototype instanceof y?e:y,a=Object.create(i.prototype),c=new G(n||[]);return o(a,"_invoke",{value:j(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p="suspendedStart",d="executing",v="completed",g={};function y(){}function m(){}function w(){}var x={};l(x,c,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(N([])));L&&L!==r&&n.call(L,c)&&(x=L);var _=w.prototype=y.prototype=Object.create(x);function E(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function Z(t,e){function r(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function j(e,r,n){var o=p;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=k(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=h(e,r,n);if("normal"===s.type){if(o=n.done?v:"suspendedYield",s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function k(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=h(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return m.prototype=w,o(_,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:m,configurable:!0}),m.displayName=l(w,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},e.awrap=function(t){return{__await:t}},E(Z.prototype),l(Z.prototype,u,(function(){return this})),e.AsyncIterator=Z,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new Z(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(_),l(_,s,"Generator"),l(_,c,(function(){return this})),l(_,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=N,G.prototype={constructor:G,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:N(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}o.Z.defaults.baseURL="https://api.themoviedb.org/3",o.Z.defaults.params={api_key:"e744dd987f832ad945563dbad49387aa",include_adult:!1};var a="https://image.tmdb.org/t/p/w500",c=function(){var t=(0,n.Z)(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.Z.get("/trending/all/day?").then((function(t){return t.data.results.map((function(t){var e=t.id,r=t.title,n=t.poster_path;return{id:e,title:r,poster:a+n}}))})).catch((function(t){console.log(t.message)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,n.Z)(i().mark((function t(e){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.Z.get("/search/movie?query=".concat(e)).then((function(t){return t.data.results.map((function(t){var e=t.id,r=t.title,n=t.poster_path;return{id:e,title:r,poster:a+n}}))})).catch((function(t){console.log(t.message)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=function(t){return o.Z.get("/movie/".concat(t,"?")).then((function(t){var e=t.data,r=e.id,n=e.poster_path,o=e.title,i=e.release_date,c=e.vote_average,u=e.overview,s=e.genres;return{id:r,poster:a+n,title:o,releaseYear:new Date(i).getFullYear(),userScore:Math.round(10*c),overview:u,genres:s}})).catch((function(t){console.log(t.message)}))},l=function(t){return o.Z.get("/movie/".concat(t,"/credits?")).then((function(t){return t.data.cast.map((function(t){var e=t.id,r=t.name,n=t.character,o=t.profile_path;return{id:e,name:r,character:n,photo:o?a+o:alert("not found")}}))})).catch((function(t){console.log(t.message)}))},f=function(t){return o.Z.get("/movie/".concat(t,"/reviews?")).then((function(t){return t.data.results.map((function(t){return{id:t.id,author:t.author,content:t.content}}))})).catch((function(t){console.log(t.message)}))}},387:function(t,e,r){r.r(e),r.d(e,{default:function(){return E}});var n,o,i,a,c,u,s,l=r(439),f=r(687),h=r(791),p=r(689),d=r(168),v=r(867),g=v.ZP.div(n||(n=(0,d.Z)(["\n  background-color: #f4f4f4;\n  padding: 20px;\n"]))),y=v.ZP.ul(o||(o=(0,d.Z)(["\n  list-style: none;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n"]))),m=v.ZP.li(i||(i=(0,d.Z)(["\n  margin-right: 20px;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n"]))),w=v.ZP.img(a||(a=(0,d.Z)(["\n  max-width: 100px;\n  border-radius: 50%;\n  margin-right: 10px;\n"]))),x=v.ZP.div(c||(c=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),b=v.ZP.h3(u||(u=(0,d.Z)(["\n  font-size: 16px;\n  margin: 0;\n"]))),L=v.ZP.p(s||(s=(0,d.Z)(["\n  font-size: 14px;\n  margin: 0;\n"]))),_=r(184),E=function(){var t=(0,p.UO)("movieId").movieId,e=(0,h.useState)([]),r=(0,l.Z)(e,2),n=r[0],o=r[1];return(0,h.useEffect)((function(){(0,f.xc)(t).then(o)}),[t]),(0,_.jsx)(g,{children:n.length>0&&(0,_.jsx)(y,{children:n.map((function(t){var e=t.id,r=t.name,n=t.character,o=t.photo;return(0,_.jsxs)(m,{children:[(0,_.jsx)(w,{src:o,alt:r}),(0,_.jsxs)(x,{children:[(0,_.jsx)(b,{children:r}),(0,_.jsxs)(L,{children:["Character: ",n]})]})]},e)}))})})}}}]);
//# sourceMappingURL=387.7dee7cf9.chunk.js.map
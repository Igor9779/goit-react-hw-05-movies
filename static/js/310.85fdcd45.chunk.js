"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[310],{1687:function(n,t,e){e.d(t,{Ch:function(){return l},Hx:function(){return A},Tg:function(){return s},Y5:function(){return d},xc:function(){return f}});var r=e(5861),o=e(7757),a=e.n(o),i=e(4569),p=e.n(i),c=e(1660);p().defaults.baseURL="https://api.themoviedb.org/3",p().defaults.params={api_key:"29b08a225fc4d51b574a7bff049d0144"};var u="https://image.tmdb.org/t/p/w500",s=function(){var n=(0,r.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",p().get("/trending/all/day?").then((function(n){return n.data.results.map((function(n){var t=n.id,e=n.title,r=n.poster_path;return{id:t,title:e,poster:u+r}}))})).catch((function(n){console.log(n.message)})));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",p().get("/search/movie?query=".concat(t)).then((function(n){return n.data.results.map((function(n){var t=n.id,e=n.title,r=n.poster_path;return{id:t,title:e,poster:u+r}}))})).catch((function(n){console.log(n.message)})));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(n){return p().get("/movie/".concat(n,"?")).then((function(n){var t=n.data,e=t.id,r=t.poster_path,o=t.title,a=t.release_date,i=t.vote_average,p=t.overview,c=t.genres;return{id:e,poster:u+r,title:o,releaseYear:new Date(a).getFullYear(),userScore:Math.round(10*i),overview:p,genres:c}})).catch((function(n){console.log(n.message)}))},f=function(n){return p().get("/movie/".concat(n,"/credits?")).then((function(n){return n.data.cast.map((function(n){var t=n.id,e=n.name,r=n.character,o=n.profile_path;return{id:t,name:e,character:r,photo:o?u+o:c}}))})).catch((function(n){console.log(n.message)}))},A=function(n){return p().get("/movie/".concat(n,"/reviews?")).then((function(n){return n.data.results.map((function(n){return{id:n.id,author:n.author,content:n.content}}))})).catch((function(n){console.log(n.message)}))}},5310:function(n,t,e){e.r(t),e.d(t,{default:function(){return G}});var r,o,a,i,p,c,u,s,l,d=e(5861),f=e(885),A=e(7757),x=e.n(A),h=e(2791),m=e(501),g=e(6871),v=e(1687),y=e(168),b=e(6444),w=b.ZP.div(r||(r=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),k=b.ZP.form(o||(o=(0,y.Z)(["\n  margin-top: 5px;\n  max-width: 600px;\n  display: flex;\n  justify-content: center;\n  max-width: 600px;\n  background-color: #000;\n  border-radius: 3px;\n  overflow: hidden;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n"]))),Q=b.ZP.input(a||(a=(0,y.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    color: #3f51b550;\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),R=b.ZP.button(i||(i=(0,y.Z)(["\n  display: inline-block;\n  border: none;\n  background-color: red;\n  color: #000;\n  padding: 10px 20px;\n  font-size: 20px;\n  font-style: bold;\n  cursor: pointer;\n  border-radius: 5px;\n  transition: background-color 0.3s ease;\n\n  &:hover {\n    background-color: #f44336;\n  }\n"]))),B=b.ZP.ul(p||(p=(0,y.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 100%;\n  margin-top: 0;\n  margin-left: auto;\n  margin-right: auto;\n  justify-content: center;\n  padding: 0;\n"]))),L=b.ZP.li(c||(c=(0,y.Z)(["\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  width: 100%;\n  max-width: 200px;\n  margin: 10px;\n  border-radius: 5px;\n  display: inline-block;\n  text-decoration: none;\n  color: black;\n  transition-duration: 300ms;\n  &:hover {\n    cursor: pointer;\n    transform: scale(1.03);\n    box-shadow: rgb(0 0 0 / 8%) 0px 10px 25px;\n  }\n"]))),j=(0,b.ZP)(m.rU)(u||(u=(0,y.Z)(["\n  text-decoration: none;\n"]))),Z=b.ZP.img(s||(s=(0,y.Z)(["\n  padding: 0px;\n  margin: 0px;\n  height: 260px;\n  width: 100%;\n  display: block;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n"]))),F=b.ZP.div(l||(l=(0,y.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  padding: 5px;\n  margin: 0px;\n  font-size: 10px;\n  color: red;\n"]))),D=e(184),G=function(){var n=(0,h.useState)(""),t=(0,f.Z)(n,2),e=t[0],r=t[1],o=(0,h.useState)([]),a=(0,f.Z)(o,2),i=a[0],p=a[1],c=(0,m.lr)(""),u=(0,f.Z)(c,2),s=u[0],l=u[1],A=(0,g.TH)(),y=s.get("query");(0,h.useEffect)((function(){y&&(0,v.Ch)(y).then(p)}),[y]);var b=function(){var n=(0,d.Z)(x().mark((function n(t){var o;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.next=3,(0,v.Ch)(e);case 3:o=n.sent,p(o),l({query:e}),r("");case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(w,{children:(0,D.jsxs)(k,{onSubmit:b,children:[(0,D.jsx)(Q,{type:"text",value:e,onChange:function(n){r(n.target.value)}}),(0,D.jsx)(R,{type:"submit",children:"search"})]})}),i.length>0&&(0,D.jsx)(B,{children:i.map((function(n){var t=n.id,e=n.title,r=n.poster;return(0,D.jsx)(L,{children:(0,D.jsxs)(j,{to:"/movies/".concat(t),state:{from:A},children:[(0,D.jsx)(Z,{src:r,alt:e}),(0,D.jsx)(F,{children:(0,D.jsx)("h3",{children:e})})]})},t)}))})]})}},1660:function(n){n.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=310.85fdcd45.chunk.js.map
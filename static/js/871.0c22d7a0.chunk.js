"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[871],{871:function(e,r,n){n.r(r);var t=n(861),a=n(439),u=n(757),c=n.n(u),s=n(390),i=n(791),o=n(689),p=n(323),f=n(184);r.default=function(){var e=(0,i.useState)([]),r=(0,a.Z)(e,2),n=r[0],u=r[1],l=(0,i.useState)(!1),v=(0,a.Z)(l,2),d=v[0],h=v[1],x=(0,o.UO)().id;return(0,i.useEffect)((function(){h(!0);var e=function(){var e=(0,t.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.tx)(x);case 3:r=e.sent,u(r),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.t0("Sorry, ".concat(e.t0.message,"! Try again)"));case 11:return e.prev=11,h(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,7,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[x]),(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Reviews"}),d?(0,f.jsx)(p.a,{}):(0,f.jsx)("ul",{children:0!==n.length?n.map((function(e){return(0,f.jsxs)("li",{children:[(0,f.jsxs)("p",{children:[(0,f.jsx)("span",{children:"Author: "}),e.author]}),(0,f.jsxs)("p",{children:[" ",e.content]})]},e.id)})):(0,f.jsx)("p",{children:"Sorry, no reviews yet!"})})]})}},390:function(e,r,n){n.d(r,{Df:function(){return i},M1:function(){return f},TP:function(){return p},Wf:function(){return o},tx:function(){return l}});var t=n(861),a=n(757),u=n.n(a),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="98b03a6dbdbff755e542e0974ad218d2",i=function(){var e=(0,t.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/movie/day?",{params:{api_key:s,page:1}});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(u().mark((function e(r){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/search/movie?&language=en-US&query=".concat(r,"&page=1&include_adult=false"),{params:{api_key:s,page:1}});case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(u().mark((function e(r){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(r,"?&language=en-US"),{params:{api_key:s}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(u().mark((function e(r){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(r,"/credits?&language=en-US"),{params:{api_key:s}});case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(u().mark((function e(r){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(r,"/reviews?&language=en-US"),{params:{api_key:s}});case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=871.0c22d7a0.chunk.js.map
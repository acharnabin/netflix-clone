(this.webpackJsonpnetflix_clone=this.webpackJsonpnetflix_clone||[]).push([[0],{34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},45:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(28),a=c.n(i),r=(c(34),c(35),c(36),c(8)),o=c(2),l=c(9),j=(c(37),c(0)),d=function(){var e=Object(o.f)(),t=Object(n.useState)(!1),c=Object(r.a)(t,2),s=c[0],i=c[1],a=function(){window.screenY>100?i(!0):i(!1)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",a),function(){window.removeEventListener("scroll",a)}}),[]),Object(j.jsx)("div",{className:"navbar ".concat(s&&"nav_blac"),children:Object(j.jsxs)("div",{className:"nav_contents",children:[Object(j.jsx)(l.b,{to:"home",children:Object(j.jsx)("img",{className:"logo",src:"http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",alt:"logo"})}),Object(j.jsx)("img",{className:"nav_avatar",onClick:function(){return e.push("/profile")},src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",alt:"avatar"})]})})},b=c(11),h=c.n(b),m=c(13),u=(c(45),"334830915e11651f473416fa17f037fb"),p="https://api.themoviedb.org/3",O={fetch_trending:"".concat(p,"/trending/all/week?api_key=").concat(u,"&language=en-US"),fetch_netflix_originals:"".concat(p,"/discover/tv?api_key=").concat(u,"&with_networks=213"),fetch_most_popular_movies:"".concat(p,"/discover/movie?api_key=").concat(u,"&sort_by=popularity.desc"),fetch_action_movies:"".concat(p,"/discover/movie?api_key=").concat(u,"&with_genres=28"),fetch_comedy_movies:"".concat(p,"/discover/movie?api_key=").concat(u,"&with_genres=35"),fetch_horror_movies:"".concat(p,"/discover/movie?api_key=").concat(u,"&with_genres=27"),fetch_romantic_movies:"".concat(p,"/discover/movie?api_key=").concat(u,"&with_genres=10749"),fetch_documentries_movies:"".concat(p,"/discover/movie?api_key=").concat(u,"&with_genres=99")},x=c(14),f=c.n(x),_=function(){var e,t,c=Object(n.useState)([]),s=Object(r.a)(c,2),i=s[0],a=s[1];return Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(O.fetch_trending);case 2:return t=e.sent,a(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(j.jsxs)("header",{className:"banner",style:{backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===i||void 0===i?void 0:i.backdrop_path,'")'),backgroundSize:"cover",backgroundPosition:"center center"},children:[Object(j.jsxs)("div",{className:"banner_contents",children:[Object(j.jsx)("h1",{className:"banner_title ",children:(null===i||void 0===i?void 0:i.original_title)||(null===i||void 0===i?void 0:i.original_name)||(null===i||void 0===i?void 0:i.name)||i.title}),Object(j.jsxs)("div",{className:"banner_btn",children:[Object(j.jsx)("button",{className:"banner_btn_class",children:"Play"}),Object(j.jsx)("button",{className:"banner_btn_class",children:"My List"})]}),Object(j.jsx)("div",{className:"banner_desc",children:Object(j.jsx)("h4",{children:(e="".concat(i.overview),t=200,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})})]}),Object(j.jsx)("div",{className:"banner_bottom"})]})},v=(c(64),function(e){var t=e.title,c=e.fetchurl,s=e.large_row,i=void 0!==s&&s,a=Object(n.useState)([]),o=Object(r.a)(a,2),l=o[0],d=o[1];return Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(c);case 2:return t=e.sent,d(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("h3",{children:t}),Object(j.jsx)("div",{className:"row_posters",children:l.map((function(e){return Object(j.jsx)("img",{className:"row_poster ".concat(i&&"row_poster_large"),src:"".concat("https://image.tmdb.org/t/p/original").concat(i?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))})]})}),g=function(){return Object(j.jsxs)("div",{className:"home",children:[Object(j.jsx)(d,{}),Object(j.jsx)(_,{}),Object(j.jsx)(v,{title:"Netflix Originals",large_row:"true",fetchurl:O.fetch_netflix_originals}),Object(j.jsx)(v,{title:"Trending Now",fetchurl:O.fetch_trending}),Object(j.jsx)(v,{title:"Popular",fetchurl:O.fetch_most_popular_movies}),Object(j.jsx)(v,{title:"Action",fetchurl:O.fetch_action_movies}),Object(j.jsx)(v,{title:"Comedy",fetchurl:O.fetch_comedy_movies}),Object(j.jsx)(v,{title:"Horror",fetchurl:O.fetch_horror_movies}),Object(j.jsx)(v,{title:"Romantic",fetchurl:O.fetch_romantic_movies})]})},N=(c(65),function(){return Object(j.jsxs)("div",{className:"profile_screen",children:[Object(j.jsx)(d,{}),Object(j.jsxs)("div",{className:"profile_screen_body",children:[Object(j.jsx)("h1",{children:"Edit Profile"}),Object(j.jsxs)("div",{className:"profile_screen_info",children:[Object(j.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",alt:""}),Object(j.jsxs)("div",{className:"profile_screen_details",children:[Object(j.jsx)("h2",{children:"test@gmail.com"}),Object(j.jsxs)("div",{className:"profile_screen_plans",children:[Object(j.jsx)("div",{className:"active_plan",children:Object(j.jsxs)("h4",{children:["Active Plan",Object(j.jsx)("spna",{children:" :"})," Normal"]})}),Object(j.jsxs)("div",{className:"more_plans",children:[Object(j.jsxs)("div",{className:"more_plans_items",children:[Object(j.jsx)("h4",{children:"Normal"}),Object(j.jsx)("p",{children:"100 Rs/Month"}),Object(j.jsx)("button",{children:"Subscribe"})]}),Object(j.jsxs)("div",{className:"more_plans_items",children:[Object(j.jsx)("h4",{children:"Medium"}),Object(j.jsx)("p",{children:"200 Rs/Month"}),Object(j.jsx)("button",{children:"Subscribe"})]}),Object(j.jsxs)("div",{className:"more_plans_items",children:[Object(j.jsx)("h4",{children:"Prenium"}),Object(j.jsx)("p",{children:"400 Rs/Month"}),Object(j.jsx)("button",{children:"Subscribe"})]})]})]}),Object(j.jsx)("div",{className:"profile_screen_plans",children:Object(j.jsx)("button",{className:"profile_screen_signout",children:"Sign out"})})]})]})]})]})}),w=(c(66),c(67),function(){return Object(j.jsx)("div",{className:"signup",children:Object(j.jsxs)("form",{children:[Object(j.jsx)("h1",{children:"Sign In"}),Object(j.jsx)("input",{placeholder:"Email",type:"email",autoComplete:!0}),Object(j.jsx)("input",{placeholder:"password",type:"password"}),Object(j.jsx)("button",{type:"submit",children:"Sign in"}),Object(j.jsxs)("h4",{children:[Object(j.jsx)("span",{className:"gray",children:"New to Netflix?"}),Object(j.jsx)("span",{children:" "}),Object(j.jsx)("b",{className:"link",children:"Sign Up now."})]})]})})}),y=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(j.jsxs)("div",{className:"loginScreen",children:[Object(j.jsxs)("div",{className:"loginscreen_bg",children:[Object(j.jsx)("img",{className:"loginscreen_logo",src:"http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",alt:"logo"}),Object(j.jsx)("button",{className:"loginscreen_button",onClick:function(){return s(!0)},children:"Sign in"}),Object(j.jsx)("div",{className:"gradient"})]}),Object(j.jsx)("div",{className:"body",children:c?Object(j.jsx)(w,{}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Unlimited movies, TV shows and more."}),Object(j.jsx)("h2",{children:"Watch anywhere. Cancel anytime."}),Object(j.jsx)("div",{className:"input",children:Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{placeholder:"Email Adress",type:"email"}),Object(j.jsx)(l.b,{to:"home",children:Object(j.jsx)("button",{className:"input_button",children:"GO TO HOME PAGE"})})]})})]})})]})},k=function(){return Object(j.jsx)("div",{className:"app",children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/profile",component:N}),Object(j.jsx)(o.a,{exact:!0,path:"/home",component:g}),Object(j.jsx)(o.a,{exact:!0,path:"/",component:y}),Object(j.jsx)(o.a,{exact:!0,path:"/login",component:y}),Object(j.jsx)(o.a,{exact:!0,path:"/signup",component:w})]})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,69)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(l.a,{children:Object(j.jsx)(k,{})})}),document.getElementById("root")),S()}},[[68,1,2]]]);
//# sourceMappingURL=main.f2974162.chunk.js.map
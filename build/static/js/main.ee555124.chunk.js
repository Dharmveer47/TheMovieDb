(this.webpackJsonpmovies48=this.webpackJsonpmovies48||[]).push([[0],{44:function(e,n,t){},45:function(e,n,t){},46:function(e,n,t){},47:function(e,n,t){},48:function(e,n,t){},49:function(e,n,t){},50:function(e,n,t){"use strict";t.r(n);var c,a,s,i,r,o,j,l,d,b,u=t(2),h=t(24),x=t.n(h),p=t(11),v=t(4),m=t(3),O=t(6),f=t(7),g=f.a.div(c||(c=Object(O.a)(["\n    z-index: 1;\n    font-size: 30px;\n    color:green;\n\n    display:flex;\n    justify-content:space-between;\n    align-items:center;\n    /* background-color: rgba(4, 247, 255, 0.882); */\n    img{\n        background:none;\n        @media (max-width: 576px) {\n        width:200px;\n        }\n    } \n    position: relative;\n"]))),y=f.a.div(a||(a=Object(O.a)(["\n    display:none;\n    color:black;\n    cursor: pointer;\n    @media (max-width: 576px) {\n        display:block;\n        }\n"]))),N=(f.a.div(s||(s=Object(O.a)(["\n    color:black;\n    cursor: pointer;\n    \n"]))),f.a.div(i||(i=Object(O.a)(["\n    transform: translateX(-10%);\n    color:black;\n    display:flex;\n    align-items:center;\n    justify-content:center;\n\n    >div{\n        \n        text-align:center;\n        font-size: 20px;\n        margin : 5px;\n        padding:5px;\n        cursor: pointer;\n        /* width:100px; */\n        :hover{\n            text-align:center;\n            \n            color: white;\n            background-color: black;\n            border-radius:5px;\n\n        }\n    }\n    @media (max-width: 576px) {\n        transform: translateX(0%);\n        background:lightcyan;\n        text-align:center;\n        width:100%;\n        position:absolute;\n        flex-direction:column;\n        top:100%;\n        transition: 1s;\n        animation: NavAni .5s ease-in-out;\n        display:",";\n    }\n    @keyframes NavAni {\n            from{\n                transform: translateX(-100%);\n            }\n            to{\n                transform: translateX(0%);\n            }\n        }\n\n"])),(function(e){return e.display?e.display:"none"}))),w=t(29),P=t(1),k=function(){var e=Object(u.useState)("none"),n=Object(m.a)(e,2),t=n[0],c=n[1];return Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)(g,{children:[Object(P.jsxs)(y,{onClick:function(){var e="none";c(t===e?"block":e)},children:[" ",Object(P.jsx)(w.a,{})]}),Object(P.jsx)("img",{src:"data:image/png;base64,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",alt:"The DBMovies"}),Object(P.jsxs)(N,{display:t,className:"fw-bold",children:[Object(P.jsx)("div",{children:Object(P.jsx)(p.b,{to:"/",style:{textDecoration:"none"},children:Object(P.jsx)("div",{children:"Movies"})})}),Object(P.jsxs)("div",{children:[" ",Object(P.jsx)(p.b,{to:"/TvShow",style:{textDecoration:"none"},children:Object(P.jsx)("div",{children:"TvShow"})})]})]})]})})},M=(t(19),t(51)),F=(t(44),t(16)),U=(t(45),t.p+"static/media/NotFound.a33f4546.png"),D=function(e){var n=e.Movie,t="";t=null===n.poster_path?U:"".concat("http://image.tmdb.org/t/p/w300").concat(n.poster_path);return Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)("div",{className:"card",children:[Object(P.jsxs)(p.b,{to:"/MovieExpl/".concat(n.id).concat(n.title),style:{textDecoration:"none"},children:[Object(P.jsxs)("div",{className:"imgCrd",children:[Object(P.jsx)("img",{src:t,alt:"moviesImg"}),Object(P.jsxs)("span",{children:["%",Object(P.jsx)("div",{children:Math.ceil(n.vote_average)})]})]}),Object(P.jsx)("div",{className:"cName"})]}),Object(P.jsx)("div",{className:"cDate"})]})})},S=(t(46),f.a.div(r||(r=Object(O.a)(["\n    display:flex;\n    height: 40px;\n    background-color:rgba(12, 40, 49, 0.241);\n    align-items: center;\n    justify-content: space-between;\n    border: 1px solid rgba(12, 40, 49, 0.941);\n    border-radius: 20px;\n    width: 80%;\n    \n\n    h3{\n        font-weight:bold;\n    }\n    @media screen and (max-width: 576px){\n        width: 90%;\n        height: 25px;\n    }\n\n"])))),G=f.a.div(o||(o=Object(O.a)(["\n    cursor: pointer;\n    border-radius: 20px;\n    display:flex;\n    align-items: center;\n    justify-content:flex-end;\n    flex-basis: 250px;\n    height: 40px;\n    div{\n        flex-basis: 125px;\n        border-radius: 20px;\n        height: 40px;\n        display:flex;\n        align-items: center;\n        justify-content: space-evenly;\n        :hover, div:focus{\n            background-color: ",";\n        }\n        @media screen and (max-width: 576px){\n            height: 25px;\n        }\n    \n    }\n    @media screen and (max-width: 576px){\n        height: 25px;\n    }\n\n"])),(function(e){return e.color?e.color:"skyblue"})),X=function(e){return Object(P.jsx)("div",{className:"d-flex mt-1 justify-content-center",children:Object(P.jsxs)(S,{children:[Object(P.jsx)("div",{className:"fw-bold ms-2",children:e.MovieType?e.MovieType:"Poplar"}),Object(P.jsx)(G,{className:"Links",children:Object(P.jsx)("div",{className:"movies btn btn-primary",children:e.TvShow?e.TvShow:"Movies"})})]})})},T=f.a.div(j||(j=Object(O.a)(["\n    background: url(","","); \n    background-repeat:no-repeat;\n    background-size: cover;\n    background-position: center;\n    background-origin: border-box;\n    height: 300px;\n    background-blend-mode: darken;\n    background-color: rgba(0, 0, 0, 0.473);\n    @media screen and (max-width: 576px){\n        height:200px;\n    }\n    \n"])),"https://www.themoviedb.org/t/p/w1280_and_h720_multi_faces",(function(e){return e.imgUrl})),Q=f.a.div(l||(l=Object(O.a)(["\n    width:100%;\n   \n  \n\n"]))),V=f.a.div(d||(d=Object(O.a)(["\n    display:",";\n"])),(function(e){return e.display?e.display:"none"})),Y=(t(47),"https://api.themoviedb.org/3/"),z="446cac9a81452603fb3694e031c2c458",H=("".concat(Y,"movie/latest?api_key=").concat(z,"&language=en-US"),"".concat(Y,"movie/upcoming?api_key=").concat(z,"&language=en-US&page=")),J=("".concat(Y,"search/movie?api_key=").concat(z,"&language=en-US&query="),"".concat(Y,"movie/popular?api_key=").concat(z,"&language=en-US&page=")),L=("".concat(Y,"authentication/token/new?api_key=").concat(z),"".concat(Y,"authentication/token/validate_with_login?api_key=").concat(z),"".concat(Y,"authentication/session/new?api_key=").concat(z),"".concat(Y,"tv/popular?api_key=").concat(z,"&language=en-US&page=")),A=function(e){for(var n=Object(u.useState)("none"),t=Object(m.a)(n,2),c=t[0],a=t[1],s=Object(u.useState)([]),i=Object(m.a)(s,2),r=i[0],o=i[1],j=Object(u.useState)(""),l=Object(m.a)(j,2),d=l[0],b=l[1],h=d,x=0;x<h.length/2;x++)h=h.replace(" ","+");var p="".concat(Y,"search/").concat(null==e.bgImg?"movie":"tv","?api_key=").concat(z,"&query=").concat(h),v=Object(u.useState)([]),O=Object(m.a)(v,2),f=O[0],g=O[1];Object(u.useEffect)((function(){var e=Math.floor(19*Math.random()+1);fetch(H).then((function(e){return e.json()})).then((function(n){var t=n.results[e].backdrop_path;g(t)}))}),[]);return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(Q,{children:Object(P.jsxs)(T,{imgUrl:function(){return null==e.bgImg?f:e.bgImg},className:"mainHeader",children:[Object(P.jsx)("div",{children:Object(P.jsx)("h1",{className:"heading1 fw-bold",children:"Welcome."})}),Object(P.jsx)("div",{children:Object(P.jsx)("h2",{className:"heading2",children:"Millions of movies, TV shows and people to discover. Explore now."})}),Object(P.jsx)("div",{className:"searchbar",children:Object(P.jsxs)("div",{className:"d-flex justify-content-center ",children:[Object(P.jsx)("input",{type:"search",placeholder:"Search Movies, TvShow , Persons......",className:"mr-10",onChange:function(e){b(e.target.value)},value:d}),Object(P.jsx)(M.a,{className:" btn btn-outline-info border-0",onClick:function(){a("block"),fetch(p).then((function(e){return e.json()})).then((function(e){var n=e.results;o(n)}))},children:"Search"})]})})]})}),Object(P.jsx)(V,{className:"fw-bold text-center h1",display:c,children:"Search Results..."}),Object(P.jsx)("div",{className:"d-flex justify-content-center flex-wrap",children:r.map((function(e){return Object(P.jsx)(D,{Movie:e},e.id)}))})]})},C=function(){var e=Object(u.useState)([]),n=Object(m.a)(e,2),t=n[0],c=n[1],a=Object(u.useState)([]),s=Object(m.a)(a,2),i=s[0],r=s[1],o=Object(u.useState)(1),j=Object(m.a)(o,2),l=j[0],d=j[1],b="".concat(J).concat(l);Object(u.useEffect)((function(){fetch(b,{method:"GET"}).then((function(e){return e.json()})).then((function(e){var n=e.total_pages,t=e.results;c(t),r(n)}))}),[b]);var h=Object(u.useState)([]),x=Object(m.a)(h,2),p=x[0],v=x[1],O=Object(u.useState)([]),f=Object(m.a)(O,2),g=f[0],y=f[1],N=Object(u.useState)(1),w=Object(m.a)(N,2),k=w[0],U=w[1],S="".concat(H).concat(k);Object(u.useEffect)((function(){fetch(S).then((function(e){return e.json()})).then((function(e){var n=e.total_pages,t=e.results;v(t),y(n)}))}),[S]);return Object(u.useEffect)((function(){window.scrollTo(600,1900)}),[S]),Object(u.useEffect)((function(){window.scrollTo(500,0)}),[b]),Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(A,{}),Object(P.jsx)(X,{MovieType:"Popular"}),Object(P.jsx)("div",{className:"d-flex justify-content-center flex-wrap",children:t.map((function(e){return Object(P.jsx)(D,{Movie:e},e.id)}))}),Object(P.jsx)("div",{className:"Smain",children:Object(P.jsxs)("div",{className:"Main d-flex",children:[Object(P.jsxs)("div",{className:"Ntotal",children:["Pages = ",Object(P.jsx)("span",{children:i})," "]}),Object(P.jsxs)("div",{className:"NPbtn d-flex justify-content-center align-items-center",children:[Object(P.jsxs)(M.a,{className:"Npre btn btn-secondary",type:"button",onClick:function(){d(l<2?l:l-1)},children:[Object(P.jsx)(F.b,{}),"Previous"]}),Object(P.jsx)("div",{className:"Ncount ms-1 me-1",children:l}),Object(P.jsxs)(M.a,{className:"Nnext btn btn-secondary",onClick:function(){d(1+l)},children:["Next ",Object(P.jsx)(F.a,{})]})]})]})}),Object(P.jsx)(X,{MovieType:"UpComing"}),Object(P.jsx)("div",{className:"d-flex justify-content-center flex-wrap",children:p.map((function(e){return Object(P.jsx)(D,{Movie:e},e.id)}))}),Object(P.jsx)("div",{className:"Smain",children:Object(P.jsxs)("div",{className:"Main d-flex",children:[Object(P.jsxs)("div",{className:"Ntotal",children:["Pages = ",Object(P.jsx)("span",{children:g})," "]}),Object(P.jsxs)("div",{className:"NPbtn d-flex justify-content-center align-items-center",children:[Object(P.jsxs)(M.a,{className:"Npre btn btn-secondary",type:"button",onClick:function(){U(k<2?k:k-1)},children:[Object(P.jsx)(F.b,{}),"Previous"]}),Object(P.jsx)("div",{className:"Ncount ms-1 me-1",children:k}),Object(P.jsxs)(M.a,{className:"Nnext btn btn-secondary",onClick:function(){U(1+k)},children:["Next ",Object(P.jsx)(F.a,{})]})]})]})})]})},E=function(){var e=Object(u.useState)(""),n=Object(m.a)(e,2),t=n[0],c=n[1],a=Object(u.useState)([]),s=Object(m.a)(a,2),i=s[0],r=s[1];return Object(u.useEffect)((function(){var e=Math.floor(19*Math.random()+1);fetch(L).then((function(e){return e.json()})).then((function(n){var t=n.results,a=n.results[e].backdrop_path;c(a),r(t),console.log(t)}))}),[]),Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(A,{bgImg:t}),Object(P.jsx)(X,{TvShow:"TvShow"}),Object(P.jsx)("div",{className:"d-flex justify-content-center flex-wrap",children:i.map((function(e){return Object(P.jsx)(D,{Movie:e,tv:"tv"},e.id)}))})]})},W=t(31),K=f.a.div(b||(b=Object(O.a)(['\n      box-sizing: border-box;\n    /* background-image: url("https://wallpapercave.com/wp/gJQg1va.jpg"); */\n    background-image: url(',"",");\n    background-blend-mode:darken; \n    background-color: rgba(0, 0, 0, 0.822);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              \n    background-position: center;    \n    background-size: cover;\n    background-attachment: fixed;\n"])),"https://www.themoviedb.org/t/p/w1280",(function(e){return e.bgimg})),Z=(t(48),function(e){var n=Object(u.useState)([]),t=Object(m.a)(n,2),c=t[0],a=t[1],s=Object(u.useState)([]),i=Object(m.a)(s,2),r=i[0],o=i[1],j=Object(u.useState)([]),l=Object(m.a)(j,2),d=l[0],b=l[1],h=Object(u.useState)([]),x=Object(m.a)(h,2),p=x[0],O=x[1],f=Object(u.useState)({}),g=Object(m.a)(f,2),y=g[0],N=g[1],w=Object(v.g)(),k=w._id.substr(w._id.length-9),M=function(){return"undefined"===k?"tv":"movie"},F="".concat(Y).concat(M(),"/").concat(w._id,"?api_key=").concat(z,"&language=en-US");Object(u.useEffect)((function(){window.scrollTo(0,0)}),[F]),Object(u.useEffect)((function(){fetch(F).then((function(e){return e.json()})).then((function(e){var n=e;N(n);var t=n.genres;a(t);var c=n.production_companies;o(c);var s=n.spoken_languages;b(s);var i=n.production_countries;O(i)}))}),[F]);var U=Number(y.runtime),S=" ";setTimeout((function(){for(var e=0;e<c.length;e++){var n=c[e].name;S="".concat(n," ").concat(S)}}),3e3);for(var G=" ",X=0;X<r.length;X++){var T=r[X].name;G="".concat(G,"  ").concat(T)}for(var Q=" ",V=0;V<d.length;V++){var H=d[V].english_name;Q="".concat(Q," ").concat(H)}for(var J=" ",L=0;L<p.length;L++){var A=p[L].name;J="".concat(J," ").concat(A)}var C=Object(u.useState)([]),E=Object(m.a)(C,2),Z=E[0],q=E[1],R="".concat(Y).concat(M(),"/").concat(w._id,"/similar?api_key=").concat(z,"&language=en-US&page=1");return Object(u.useEffect)((function(){fetch(R).then((function(e){return e.json()})).then((function(e){var n=e.results;q(n)}))}),[R]),Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(K,{className:"containers",bgimg:y.backdrop_path,children:Object(P.jsxs)("div",{className:"item-container",children:[Object(P.jsx)("div",{children:Object(P.jsxs)("div",{className:"image",children:[Object(P.jsx)("div",{className:"MovMainImg",children:Object(P.jsx)("img",{className:"img",src:"".concat("http://image.tmdb.org/t/p/").concat("w500").concat(y.poster_path),alt:""})}),Object(P.jsxs)("div",{className:"rating",children:[" ",Object(P.jsx)("span",{children:"%"}),Object(P.jsx)("span",{children:y.vote_average})]})]})}),Object(P.jsxs)("div",{children:[Object(P.jsxs)("section",{className:"title",children:[Object(P.jsx)("h1",{className:"heading fw-bold text-center",children:y.title}),Object(P.jsxs)("p",{children:["Release Date ",Object(P.jsx)("span",{className:"fw-bold",children:y.release_date})," ",Object(P.jsx)("br",{})," ",S," ",Object(P.jsxs)("span",{children:[Object(P.jsx)(W.a,{}),function(){for(var e=0;e<60;e++){var n=Math.floor(U/60),t=U%60;return"".concat(n,"h ").concat(t,"m")}}()]})," "]}),Object(P.jsx)("p",{style:{fontStyle:"italic"},children:y.tagline})]}),Object(P.jsxs)("section",{className:"overview",children:[Object(P.jsx)("p",{style:{fontWeight:"bold"},children:"Overview"}),Object(P.jsx)("p",{className:"paragraph",children:y.overview}),Object(P.jsxs)("div",{children:[Object(P.jsx)("p",{className:"fw-bold me-2",children:"Spoken Languages"}),Object(P.jsx)("p",{children:Q})]})]}),Object(P.jsx)("section",{className:"team",children:Object(P.jsxs)("div",{children:[Object(P.jsx)("p",{className:" fw-bold",children:"Production Companies"}),Object(P.jsx)("p",{children:G}),Object(P.jsx)("p",{className:" fw-bold",children:"Production Countries"}),Object(P.jsx)("p",{children:J})]})})]})]})}),Object(P.jsxs)("div",{children:[Object(P.jsx)("h1",{className:" fw-bold text-center ",children:"Related Movies"}),Object(P.jsx)("div",{className:"d-flex justify-content-center flex-wrap ",children:Z.map((function(e){return Object(P.jsx)(D,{Movie:e},e.id)}))})]})]})}),q=function(){return Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)(p.a,{children:[Object(P.jsx)(k,{}),Object(P.jsxs)(v.d,{children:[Object(P.jsx)(v.b,{path:"/",component:C,exact:!0}),Object(P.jsx)(v.b,{path:"/TvShow",component:E,exact:!0}),Object(P.jsx)(v.b,{path:"/MovieExpl/:_id",component:Z,exact:!0}),Object(P.jsx)(v.a,{to:"/"})]})]})})};t(49);x.a.render(Object(P.jsx)(P.Fragment,{children:Object(P.jsx)(q,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.ee555124.chunk.js.map
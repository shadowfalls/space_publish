(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"6ZMZ":function(e,n,t){"use strict";t.r(n);var a=t("o0o1"),l=t.n(a),r=t("q1tI"),s=t.n(r),i=t("8Kt/"),o=t.n(i),c=t("e3s2"),d=t("9+7C"),m=t("rxnA"),u=t("6yR0"),h=t("4Gqn"),p=t("V1ei"),f=t("RQaA"),g=t("8lYe"),v=t("vPY1"),N=s.a.createElement;function b(){var e="mars_the_red_planet",n="Mars the red planet",t="Mars is referred to as the red planet. It is the 4th planet from the sun and the second smallest planet in the solar system.",a=Object(r.useRef)(null),l=Object(r.useState)([{provider:"linkedin",url:"https://www.linkedin.com/sharing/share-offsite/?url=http%3A%2F%2F".concat(m.domain)}]),i=l[0],b=l[1],w=Object(p.a)({id:e}),_=w.blog,k=w.recent;Object(r.useEffect)((function(){if(a.current&&m.domain){for(var e=a.current.querySelectorAll("a"),n=JSON.parse(JSON.stringify(i)),t=0;t<e.length;t+=1)e[t].href&&(e[t].href.includes("twitter")?n.push({provider:"twitter",url:e[t].href}):e[t].href.includes("facebook")&&n.push({provider:"facebook",url:e[t].href}));b(n)}}),[a,e,m.domain]);var y=Object(r.useMemo)((function(){return!(e=_.content)||e.length<=0?null:e.map((function(e,n){return e.isImage&&e.imageUrl?N("div",{key:n,className:"d-flex justify-content-center image"},N("img",{src:e.imageUrl,alt:""})):e.isGist&&e.gist?N(d.a,{key:n,className:"mt-3 mb-3",id:e.gist}):e.isMainHeading?N("div",{className:"main-heading",key:n,dangerouslySetInnerHTML:{__html:e.html}}):e.isSubHeading?N("div",{className:"sub-heading",key:n,dangerouslySetInnerHTML:{__html:e.html}}):e.isCodeSection?N("div",{className:"code-section",key:n,dangerouslySetInnerHTML:{__html:e.html}}):e.isQuoted?N("div",{className:"quote",key:n,dangerouslySetInnerHTML:{__html:e.html}}):N("div",{key:n,dangerouslySetInnerHTML:{__html:e.html}})}));var e}),[_.content]);return N(s.a.Fragment,null,N(u.a,null),N(o.a,null,N("title",null,n),N("meta",{name:"description",content:t}),N("meta",{itemProp:"name",content:n}),N("meta",{itemProp:"description",content:t})),N("span",{className:"blog-page"},N("div",{className:"blog-page__container"},N(v.a,null),N("div",{className:"container"},N("div",{className:"row"},N("div",{className:"col-12 header-ad"}),N("div",{className:"col-12"},N("h1",{className:"heading-text"},n),N("p",{className:"lead"},Object(h.g)(_.date),"\xa0-\xa0",_.readTimeMin," ","mins read"),N("ul",{className:"share"},N("li",{ref:a,className:"hide-links"},N(c.Twitter,{link:"https://www.".concat(m.domain,"/").concat(e)}),N(c.Facebook,{link:"https://www.".concat(m.domain,"/").concat(e)})),i.map((function(e,n){return N("li",{key:n},N("a",{"aria-label":e.provider,style:{cursor:"pointer"},className:"mr-5",rel:"noopener noreferrer",onClick:function(){var n;(n=e.url)&&window.open(n,"","width=500,height=500")}},N("i",{className:"fab fa-".concat(e.provider)})))})))),N("div",{className:"contents col-12 col-sm-12 col-md-8 col-xl-8 col-lg-8"},y||t),N("div",{className:"d-none d-sm-none d-md-block d-xl-block d-lg-block"}),N("div",{className:"col-12"},N("hr",null)),N("div",{className:"col-12"})),N("div",{className:"recent"},"You might be interested in:"),N(f.a,{articles:k})))),N(g.a,null))}b.getInitialProps=function(e){var n,t;return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.Component,t=e.pageProps,a.abrupt("return",N(n,t));case 2:case"end":return a.stop()}}),null,null,null,Promise)},n.default=b},DbeN:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/mars_the_red_planet",function(){return t("6ZMZ")}])}},[["DbeN",0,2,1,3,4]]]);
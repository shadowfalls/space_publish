(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{Usxo:function(e,t,n){"use strict";n.r(t);var a=n("o0o1"),s=n.n(a),i=n("q1tI"),l=n.n(i),r=n("8Kt/"),o=n.n(r),c=n("e3s2"),u=n("9+7C"),d=n("rxnA"),m=n("6yR0"),h=n("4Gqn"),p=n("RQaA"),g=n("8lYe"),f=n("vPY1"),v=n("V1ei"),b=n("CQS7"),w=l.a.createElement;function N(){var e="venus_the_brightest_star",t="Venus the brightest star",n="Venus is the brightest plane that is visible in the sky, because it is close to earth. It is the 2nd closest planet to the sun after Mercury, but it is the hottest planet in the solar system.",a=Object(v.a)({id:e}),s=a.blog,r=a.recent,N=Object(i.useRef)(null),_=Object(i.useState)([{provider:"linkedin",url:"https://www.linkedin.com/sharing/share-offsite/?url=http%3A%2F%2F".concat(d.domain)}]),k=_[0],y=_[1];Object(i.useEffect)((function(){if(N.current&&d.domain){for(var e=N.current.querySelectorAll("a"),t=JSON.parse(JSON.stringify(k)),n=0;n<e.length;n+=1)e[n].href&&(e[n].href.includes("twitter")?t.push({provider:"twitter",url:e[n].href}):e[n].href.includes("facebook")&&t.push({provider:"facebook",url:e[n].href}));y(t)}}),[N,e,d.domain]);var S=Object(i.useMemo)((function(){return!(e=s.content)||e.length<=0?null:e.map((function(e,t){return e.isImage&&e.imageUrl?w("div",{key:t,className:"d-flex justify-content-center image"},w("img",{src:e.imageUrl,alt:""})):e.isGist&&e.gist?w(u.a,{key:t,className:"mt-3 mb-3",id:e.gist}):e.isMainHeading?w("div",{className:"main-heading",key:t,dangerouslySetInnerHTML:{__html:e.html}}):e.isSubHeading?w("div",{className:"sub-heading",key:t,dangerouslySetInnerHTML:{__html:e.html}}):e.isCodeSection?w("div",{className:"code-section",key:t,dangerouslySetInnerHTML:{__html:e.html}}):e.isQuoted?w("div",{className:"quote",key:t,dangerouslySetInnerHTML:{__html:e.html}}):w("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}})}));var e}),[s.content]);return w(l.a.Fragment,null,w(m.a,null),w(o.a,null,w("title",null,t),w("meta",{name:"description",content:n}),w("meta",{itemProp:"name",content:t}),w("meta",{itemProp:"description",content:n})),w(b.a,null,w("div",{className:"blog_page__container"},w(f.a,null),w("div",{className:"container"},w("div",{className:"row"},w("div",{className:"col-12 header-ad"}),w("div",{className:"col-12"},w("h1",{className:"heading-text"},t),w("p",{className:"lead"},Object(h.g)(s.date),"\xa0-\xa0",s.readTimeMin," ","mins read"),w("ul",{className:"share"},w("li",{ref:N,className:"hide-links"},w(c.Twitter,{link:"https://www.".concat(d.domain,"/").concat(e)}),w(c.Facebook,{link:"https://www.".concat(d.domain,"/").concat(e)})),k.map((function(e,t){return w("li",{key:t},w("a",{"aria-label":e.provider,style:{cursor:"pointer"},className:"mr-5",rel:"noopener noreferrer",onClick:function(){var t;(t=e.url)&&window.open(t,"","width=500,height=500")}},w("i",{className:"fab fa-".concat(e.provider)})))})))),w("div",{className:"contents col-12 col-sm-12 col-md-8 col-xl-8 col-lg-8"},S||n),w("div",{className:"d-none d-sm-none d-md-block d-xl-block d-lg-block"}),w("div",{className:"col-12"},w("hr",null)),w("div",{className:"col-12"})),w("div",{className:"recent"},"You might be interested in:"),w(p.a,{articles:r})))),w(g.a,null))}N.getInitialProps=function(e){var t,n;return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.Component,n=e.pageProps,a.abrupt("return",w(t,n));case 2:case"end":return a.stop()}}),null,null,null,Promise)},t.default=N},oq1L:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/venus_the_brightest_star",function(){return n("Usxo")}])}},[["oq1L",1,2,0,3,4,5]]]);
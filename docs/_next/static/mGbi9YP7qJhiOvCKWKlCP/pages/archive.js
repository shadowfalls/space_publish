(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"1dI+":function(a,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return p}));var n=e("q1tI"),c=e.n(n),i=e("nOHt"),r=e.n(i),s=e("8Kt/"),d=e.n(s),l=e("4Gqn"),o=e("6yR0"),u=e("8lYe"),m=c.a.createElement;function p(){var a=Object(n.useState)([]),t=a[0],e=a[1],s=Object(i.useRouter)().query,p=s.name,b=s.id;Object(n.useEffect)((function(){b&&Object(l.d)(b).then((function(a){a.data&&Array.isArray(a.data)?e(a.data):a.data&&a.data.data&&Array.isArray(a.data.data)&&e(a.data.data.map((function(a){return{blogId:a.id,blogName:a.title,date:a.date,readTimeMin:a.readTimeMin}})))})).catch((function(){r.a.push("/","/",{shallow:!1})}))}),[b]);var f=t.map((function(a){return m(c.a.Fragment,{key:a.blogId},m("div",{className:"card-wrapper"},m("div",{className:"card"},m("div",{className:"card-body"},m("h5",{onClick:function(){return function(a){r.a.push("".concat(Object(l.b)(a)))}(a.blogId)},className:"card-title cursor-ponter"},a.blogName),m("div",{className:"details"},"".concat(Object(l.g)(a.date)," - ").concat(a.readTimeMin," mins read"))))))}));return m(c.a.Fragment,null,m(o.a,null),m(d.a,null,m("title",null,"Dinesh Murali"),m("meta",{name:"description",content:"Articles regarding ".concat(p)}),m("meta",{itemProp:"name",content:"Dinesh Murali"}),m("meta",{itemProp:"description",content:"Articles regarding ".concat(p)})),m("span",{className:"blog-list"},m("div",{className:"blog-list__container"},m("div",{className:"container"},m("div",{className:"row"},m("div",{className:"col-12"},m("h1",{className:"heading-text"},p),p&&m("p",{className:"lead"},"Available articles"))),m("div",{className:"d-flex justify-content-start flex-wrap"},f)))),m(u.a,null))}},"1jat":function(a,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/archive",function(){return e("1dI+")}])}},[["1jat",0,2,1,3]]]);
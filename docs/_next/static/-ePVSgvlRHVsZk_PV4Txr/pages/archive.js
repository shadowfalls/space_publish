(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1dI+":function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return h}));var n=a("q1tI"),i=a.n(n),r=a("nOHt"),o=a.n(r),c=a("8Kt/"),d=a.n(c),l=a("4Gqn"),s=a("6yR0"),m=a("8lYe"),u=a("vOnD").c.span.withConfig({displayName:"BlogListstyle__BlogListContainer",componentId:"sc-1ch3ikz-0"})([".heading-advertise{height:10vh;background-color:white;margin-left:30%;margin-right:30%;}.blog_list__container{margin-top:30px;margin-bottom:60px;.heading-text{font-size:3rem;font-weight:300;line-height:1.2;text-align:center;}.advertise{background-color:white;}.lead{text-align:center;}.card-wrapper{margin-right:20px;margin-bottom:1.5em;min-width:45%;.card{cursor:pointer;min-width:100%;background-color:",";border:1px solid ",";.card-body{min-width:100%;}.details{color:",";fill:",";font-size:16px;}}}.card-title{font-weight:600;font-size:20px;white-space:nowrap;width:450px;overflow:hidden;text-overflow:ellipsis;}}@media only screen and (max-width:500px){.blog_list__container{margin-top:30px;.heading-text{font-size:2.5rem;font-weight:300;line-height:1.2;text-align:center;}.card-wrapper{min-width:100%;}.advertise{background-color:white;}.lead{font-size:1rem;text-align:center;}}}"],(function(t){return t.theme.bg.primary}),(function(t){return t.theme.text.tertiary}),(function(t){return t.theme.text.tertiary}),(function(t){return t.theme.text.tertiary})),g=i.a.createElement;function h(){var t=Object(n.useState)([]),e=t[0],a=t[1],c=Object(r.useRouter)().query,h=c.name,p=c.id;Object(n.useEffect)((function(){p&&Object(l.d)(p).then((function(t){t.data&&Array.isArray(t.data)?a(t.data):t.data&&t.data.data&&Array.isArray(t.data.data)&&a(t.data.data.map((function(t){return{blogId:t.id,blogName:t.title,date:t.date,readTimeMin:t.readTimeMin}})))})).catch((function(){o.a.push("/","/",{shallow:!1})}))}),[p]);var f=e.map((function(t){return g(i.a.Fragment,{key:t.blogId},g("div",{className:"card-wrapper"},g("div",{onClick:function(){return function(t){o.a.push("".concat(Object(l.b)(t)))}(t.blogId)},className:"card"},g("div",{className:"card-body"},g("h5",{className:"card-title"},t.blogName),g("div",{className:"details"},"".concat(Object(l.g)(t.date)," - ").concat(t.readTimeMin," mins read"))))))}));return g(i.a.Fragment,null,g(s.a,null),g(d.a,null,g("title",null,"Dinesh Murali"),g("meta",{name:"description",content:"Articles regarding ".concat(h)}),g("meta",{itemProp:"name",content:"Dinesh Murali"}),g("meta",{itemProp:"description",content:"Articles regarding ".concat(h)})),g(u,null,g("div",{className:"blog_list__container"},g("div",{className:"container"},g("div",{className:"row"},g("div",{className:"col-12"},g("h1",{className:"heading-text"},h),h&&g("p",{className:"lead"},"Available articles"))),g("div",{className:"d-flex justify-content-start flex-wrap"},f)))),g(m.a,null))}},"1jat":function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/archive",function(){return a("1dI+")}])}},[["1jat",1,2,0,3,4]]]);
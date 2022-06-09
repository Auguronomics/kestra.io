(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{378:function(t,s,e){"use strict";var a={props:{classes:{type:Array,default:function(){return[]}}}},i=e(19),r=Object(i.a)(a,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"position-relative shape-wrapper"},[s("div",{staticClass:"shape overflow-hidden",class:this.classes},[s("svg",{attrs:{viewBox:"0 0 2880 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M 720,50 2160,0 h 720 V 100 H 0 V 50 Z",fill:"currentColor"}})])])])}),[],!1,null,"22a6dc56",null);s.a=r.exports},379:function(t,s,e){t.exports=e.p+"assets/img/logo-white.d5238fff.svg"},380:function(t,s,e){},381:function(t,s,e){},382:function(t,s,e){},386:function(t,s,e){},387:function(t,s,e){"use strict";var a=e(390),i=e.n(a),r=e(411),n=e(412),o=e(410),l=e(413),c=e(414),u=e(401),d=e(396),m=e(408),v=e(415),h=e(402),p=e(416),f=e(404),_=e(417),g=e(418),C=e(419),b=e(383),k={components:{VsmMenu:r.a,VsmMob:n.a,SearchBox:o.a,Domain:l.a,GoogleCirclesExtended:u.a,Terraform:m.a,Server:v.a,FileDocumentOutline:d.a,Email:h.a,ApplicationOutline:p.a,FeatureSearch:f.a,AccountNetworkOutline:_.a,PostOutline:C.a,GithubIcon:b.d},data:function(){return{stargazers:void 0,menu:[{title:"Product",icon:p.a,element:"a",dropdown:"product",items:[{title:"Features",link:"/features/features",icon:f.a,desc:"Discover all the features of Kestra"},{title:"Usages",link:"/features/usages",icon:_.a,desc:"How Kestra can help on your daily workflow"},{title:"Enterprise Edition  ",link:"/features/enterprise",icon:g.a,desc:"Security and Productivity for enterprise"}]},{title:"Learn",icon:c.a,element:"a",dropdown:"docs",items:[{title:"Blogs",link:"/blogs/",icon:C.a,desc:"Product updates, user stories, and more"},{title:"Documentation",link:"/docs/",icon:d.a,desc:"Get started with Kestra"},{title:"Plugins documentation",link:"/plugins/",icon:u.a,desc:"Extends Kestra with many plugins"},{title:"Terraform provider",link:"/docs/terraform/",icon:m.a,desc:"Deploy Kestra resources with Terraform"},{title:"Administrator guide",link:"/docs/administrator-guide/",icon:d.a,desc:"Learn how to deploy Kestra"}]},{title:"Company",icon:l.a,element:"a",dropdown:"company",items:[{title:"About us",link:"/company/about-us",icon:l.a,desc:"Discover our story and our team"},{title:"Contact us",link:"/company/contact",icon:h.a,desc:"How can we help?"}]},{title:"GitHub",icon:b.d,element:"span",href:"https://github.com/kestra-io/kestra",target:"_blank"}]}},mounted:function(){var t=this;window.sessionStorage.getItem("github_stargazers_count")?this.stargazers=window.sessionStorage.getItem("github_stargazers_count"):i.a.get("https://api.github.com/repos/kestra-io/kestra").then((function(s){window.sessionStorage.setItem("github_stargazers_count",s.data.stargazers_count),t.stargazers=s.data.stargazers_count}))},computed:{stargazersText:function(){return void 0===this.stargazers?"":Intl.NumberFormat("en-US").format(this.stargazers)}}},w=(e(391),e(19)),x=Object(w.a)(k,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("vsm-menu",{attrs:{menu:t.menu,"base-width":380,"base-height":400,"screen-offset":10,element:"header",handler:"hover"},scopedSlots:t._u([{key:"default",fn:function(s){var e=s.item;return[a("div",{staticClass:"wrap-content"},[a("div",{staticClass:"dropdown-menu show"},[t._l(e.items,(function(s,i){return[a("router-link",{staticClass:"dropdown-item",attrs:{to:s.link}},[a(s.icon,{tag:"span",attrs:{title:""}}),t._v(" "),a("span",[t._v(t._s(s.title))]),t._v(" "),a("span",{staticClass:"desc"},[t._v(t._s(s.desc))])],1),t._v(" "),i!==e.items.length-1?a("div",{staticClass:"dropdown-divider"}):t._e()]}))],2)])]}},{key:"title",fn:function(s){return[a(s.item.icon,{tag:"span"}),t._v(" "),"GitHub"===s.item.title?a("a",{attrs:{href:s.item.href}},[t._v(t._s(s.item.title)+" "),t.stargazers?a("span",{staticClass:"badge badge-dark"},[t._v(t._s(t.stargazersText)+" ⭐")]):t._e()]):s.item.href?a("a",{attrs:{href:s.item.href}},[t._v(t._s(s.item.title))]):a("span",[t._v(t._s(s.item.title))])]}},{key:"before-nav",fn:function(){return[a("li",{staticClass:"vsm-section logo-section"},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:e(379),alt:"Kestra"}})])],1)]},proxy:!0},{key:"after-nav",fn:function(){return[a("li",{staticClass:"vsm-section search-section"},[a("SearchBox")],1),t._v(" "),a("vsm-mob",[a("div",{staticClass:"dropdown-menu show"},[t._l(t.menu,(function(s){return["a"===s.element?a("h6",{staticClass:"dropdown-header"},[a(s.icon,{tag:"span",attrs:{title:""}}),t._v(" "),a("span",[t._v(t._s(s.title))])],1):[a("h6",{staticClass:"dropdown-header"},["GitHub"===s.title?a("a",{attrs:{href:s.href}},[t._v(t._s(s.title)+" "),t.stargazers?a("span",{staticClass:"badge badge-dark",attrs:{"data-aos":"zoom-out"}},[t._v(t._s(t.stargazersText)+" ⭐")]):t._e()]):a("a",{attrs:{href:s.href}},[a(s.icon,{tag:"span",attrs:{title:""}}),t._v(" "),a("span",[t._v(t._s(s.title))])],1)])],t._v(" "),t._l(s.items,(function(s){return[a("router-link",{staticClass:"dropdown-item",attrs:{to:s.link}},[a(s.icon,{tag:"span",attrs:{title:""}}),t._v(" "),a("span",[t._v(t._s(s.title))])],1)]}))]}))],2)])]},proxy:!0}])})}),[],!1,null,null,null);s.a=x.exports},388:function(t,s,e){"use strict";var a=e(398),i=e(385),r=e(420),n=e(383),o={data:function(){return{}},components:{Shape:e(378).a,GithubIcon:n.d,TwitterIcon:n.j,LinkedinIcon:n.e,Slack:i.a,MailIcon:n.f,ChevronRight:a.a,Heart:r.a}},l=(e(392),e(19)),c=Object(l.a)(o,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("Shape",{staticClass:"text-footer"}),t._v(" "),a("footer",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-3 col-12 mb-0 mb-md-3 pb-0 pb-md-2"},[a("router-link",{staticClass:"logo-footer",attrs:{to:"/"}},[a("img",{attrs:{src:e(379),height:"60",alt:""}})]),t._v(" "),a("p",{staticClass:"mt-2"},[t._v("Infinitely scalable open source orchestration platform.")]),t._v(" "),a("ul",{staticClass:"list-unstyled social-icon social mb-0 mt-4"},[a("li",{staticClass:"list-inline-item"},[a("a",{staticClass:"rounded",attrs:{href:"https://github.com/kestra-io",target:"_blank",rel:"”noopener”"}},[a("github-icon",{staticClass:"fea icon-sm fea-social"})],1)]),t._v(" "),a("li",{staticClass:"list-inline-item ml-1"},[a("a",{staticClass:"rounded",attrs:{href:"https://twitter.com/kestra_io",target:"_blank",rel:"”noopener”"}},[a("twitter-icon",{staticClass:"fea icon-sm fea-social"})],1)]),t._v(" "),a("li",{staticClass:"list-inline-item ml-1"},[a("a",{staticClass:"rounded",attrs:{href:"https://www.linkedin.com/company/kestra",target:"_blank",rel:"”noopener”"}},[a("linkedin-icon",{staticClass:"fea icon-sm fea-social"})],1)]),t._v(" "),a("li",{staticClass:"list-inline-item ml-1"},[a("a",{staticClass:"rounded",attrs:{href:"https://join.slack.com/t/kestra-io/shared_invite/zt-193shv281-rK9QOEfZC2_vEbDO7Uxtbw",target:"_blank",rel:"”noopener”"}},[a("slack",{attrs:{title:""}})],1)])])],1),t._v(" "),a("div",{staticClass:"col-lg-3 col-12 mb-0 mb-md-3 pb-0 pb-md-2"},[a("h4",{staticClass:"text-light footer-head"},[t._v("Product")]),t._v(" "),a("ul",{staticClass:"list-unstyled footer-list"},[a("li",[a("router-link",{staticClass:"text-foot",attrs:{to:"/features/features"}},[a("ChevronRight",{attrs:{title:""}}),t._v(" Features\n                            ")],1)],1),t._v(" "),a("li",[a("router-link",{staticClass:"text-foot",attrs:{to:"/features/usages"}},[a("ChevronRight",{attrs:{title:""}}),t._v(" Usage\n                            ")],1)],1),t._v(" "),a("li",[a("router-link",{staticClass:"text-foot",attrs:{to:"/features/enterprise"}},[a("ChevronRight",{attrs:{title:""}}),t._v(" Enterprise Edition\n                            ")],1)],1)])]),t._v(" "),a("div",{staticClass:"col-lg-3 col-12 mb-0 mb-md-3 pb-0 pb-md-2"},[a("h4",{staticClass:"text-light footer-head"},[t._v("Learn")]),t._v(" "),a("ul",{staticClass:"list-unstyled footer-list"},[a("li",[a("router-link",{staticClass:"text-foot",attrs:{to:"/blogs/"}},[a("ChevronRight",{attrs:{title:""}}),t._v(" Blogs\n                            ")],1)],1),t._v(" "),a("li",[a("router-link",{staticClass:"text-foot",attrs:{to:"/docs/"}},[a("ChevronRight",{attrs:{title:""}}),t._v(" Documentation\n                            ")],1)],1),t._v(" "),a("li",[a("router-link",{staticClass:"text-foot",attrs:{to:"/plugins/"}},[a("ChevronRight",{attrs:{title:""}}),t._v("  Plugins documentation\n                            ")],1)],1),t._v(" "),a("li",[a("router-link",{staticClass:"text-foot",attrs:{to:"/docs/terraform/"}},[a("ChevronRight",{attrs:{title:""}}),t._v("  Terraform provider\n                            ")],1)],1),t._v(" "),a("li",[a("router-link",{staticClass:"text-foot",attrs:{to:"/docs/administrator-guide/"}},[a("ChevronRight",{attrs:{title:""}}),t._v("  Administrator guide\n                            ")],1)],1)])]),t._v(" "),a("div",{staticClass:"col-lg-3 col-12 mb-0 mb-md-3 pb-0 pb-md-2"},[a("h4",{staticClass:"text-light footer-head"},[t._v("Company")]),t._v(" "),a("ul",{staticClass:"list-unstyled footer-list"},[a("li",[a("a",{staticClass:"text-foot",attrs:{href:"/company/about-us"}},[a("ChevronRight",{attrs:{title:""}}),t._v(" About us\n                            ")],1)]),t._v(" "),a("li",[a("a",{staticClass:"text-foot",attrs:{href:"/company/contact"}},[a("ChevronRight",{attrs:{title:""}}),t._v("  Contact us\n                            ")],1)])])])])])]),t._v(" "),a("footer",{staticClass:"footer footer-bar"},[a("div",{staticClass:"container text-center"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"text-sm-left"},[a("p",{staticClass:"mb-0"},[t._v("\n                          © "+t._s((new Date).getFullYear())+" "),a("a",{attrs:{href:"https://kestra.io"}},[t._v("Kestra Technologies")]),t._v(".\n                          Developed with "),a("Heart",{staticClass:"text-danger"}),t._v(" in 🇫🇷 .\n\n                        ")],1)])]),t._v(" "),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"text-sm-right"},[a("p",{staticClass:"mb-0"},[a("router-link",{attrs:{to:"/company/privacy-policy.html"}},[t._v("Privacy Policy")]),t._v("\n                            /\n                            "),a("router-link",{attrs:{to:"/company/cookie-policy.html"}},[t._v("Cookie Policy")])],1)])])])])])],1)}),[],!1,null,"8dba3a62",null);s.a=c.exports},389:function(t,s,e){"use strict";var a=e(385),i=e(390),r=e.n(i),n={components:{Slack:a.a},data:function(){return{online:void 0}},mounted:function(){var t=this;window.sessionStorage.getItem("slack_member_count")?this.online=window.sessionStorage.getItem("slack_member_count"):r.a.get("https://api.kestra.io/v1/communities/slack").then((function(s){window.sessionStorage.setItem("slack_member_count",s.data.total),t.online=s.data.total}))},computed:{onlineText:function(){return void 0===this.online?"":Intl.NumberFormat("en-US").format(this.online)}}},o=(e(393),e(19)),l=Object(o.a)(n,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"widget-chat"},[s("a",{staticClass:"btn btn-primary rounded",attrs:{href:"https://join.slack.com/t/kestra-io/shared_invite/zt-193shv281-rK9QOEfZC2_vEbDO7Uxtbw",target:"_blank",rel:"”noopener”"}},[s("slack",{attrs:{title:""}}),this._v(" Chat "),this.online?s("span",{staticClass:"online"},[this._v(this._s(this.onlineText)+" members")]):this._e()],1)])}),[],!1,null,"4c0b55b6",null);s.a=l.exports},391:function(t,s,e){"use strict";e(380)},392:function(t,s,e){"use strict";e(381)},393:function(t,s,e){"use strict";e(382)},397:function(t,s,e){"use strict";var a={components:{Shape:e(378).a},props:{links:{type:Object,default:function(){}}},computed:{backgroundStyles:function(){return{backgroundImage:"url("+(this.$page.frontmatter.image||e(399))+")"}}}},i=(e(400),e(19)),r=Object(i.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("section",{staticClass:"bg-half text-white d-table w-100"},[e("div",{staticClass:"container"},[e("div",{staticClass:"bg-overlay bg-overlay-image",style:t.backgroundStyles}),t._v(" "),this.$page.frontmatter.image?e("div",{staticClass:"bg-overlay"}):t._e(),t._v(" "),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-12 text-center"},[e("div",{staticClass:"page-next-level"},[e("h1",[t._v(" "+t._s(t.$page.title)+" ")]),t._v(" "),e("div",{staticClass:"page-next"},[e("nav",{staticClass:"d-inline-block",attrs:{"aria-label":"breadcrumb"}},[e("ul",{staticClass:"breadcrumb bg-white rounded shadow mb-0"},[e("li",{staticClass:"breadcrumb-item"},[e("router-link",{attrs:{to:"/"}},[t._v("Kestra")])],1),t._v(" "),t._l(t.links,(function(s,a){return e("li",{staticClass:"breadcrumb-item"},[s?e("router-link",{attrs:{to:s}},[t._v(t._s(a))]):[t._v(t._s(a))]],2)})),t._v(" "),e("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.$page.title))])],2)])])])])])])])])}),[],!1,null,"0b8aefd4",null);s.a=r.exports},399:function(t,s,e){t.exports=e.p+"assets/img/bg.a1648aa2.jpg"},400:function(t,s,e){"use strict";e(386)},465:function(t,s,e){},533:function(t,s,e){"use strict";e(465)},672:function(t,s,e){"use strict";e.r(s);var a=e(387),i=e(388),r=e(397),n=e(389),o={components:{Header:a.a,Footer:i.a,Breadcrumb:r.a,Chat:n.a},computed:{}},l=(e(533),e(19)),c=Object(l.a)(o,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"wrapper"}},[e("Chat"),t._v(" "),e("Header"),t._v(" "),e("div",{attrs:{id:"container"}},[e("main",{staticClass:"docs"},[e("Breadcrumb",{attrs:{links:{Company:void 0}}}),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"card rounded shadow p-3 mt-5 mb-6"},[e("Content"),t._v(" "),e("p",{staticClass:"text-muted mb-0 mt-3 text-right"},[t._v("\n                        Last updated: "+t._s(t.$page.lastUpdated)+"\n                    ")])],1)])],1)]),t._v(" "),e("Footer")],1)}),[],!1,null,null,null);s.default=c.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{459:function(t,e,a){},526:function(t,e,a){"use strict";a(459)},669:function(t,e,a){"use strict";a.r(e);a(213),a(39),a(9),a(140),a(212);var s=a(387),i=a(388),r=a(485),l=a(397),n=a(398),o=(a(92),{name:"CalendarCheckIcon",props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}),d=a(19),c=Object(d.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",t._b({staticClass:"material-design-icon calendar-check-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M16.53,11.06L15.47,10L10.59,14.88L8.47,12.76L7.41,13.82L10.59,17L16.53,11.06Z"}},[t.title?a("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports,u=a(389),v={components:{Header:s.a,Footer:i.a,TimeAgo:r.a,Breadcrumb:l.a,ChevronRight:n.a,CalendarCheck:c,Chat:u.a},computed:{filteredList:function(){return this.$site.pages.filter((function(t){return t.path.startsWith("/blogs/")&&"/blogs/"!==t.path})).filter((function(t){return void 0===t.frontmatter.draft||!1===t.frontmatter.draft})).sort((function(t,e){return new Date(e.frontmatter.date||e.lastUpdated)-new Date(t.frontmatter.date||t.lastUpdated)}))}}},f=(a(526),Object(d.a)(v,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"wrapper"}},[a("Chat"),t._v(" "),a("Header"),t._v(" "),a("div",{attrs:{id:"container"}},[a("main",[a("Breadcrumb"),t._v(" "),a("section",{staticClass:"section"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},t._l(t.filteredList,(function(e){return a("div",{key:e.key,staticClass:"col-lg-4 col-md-6 mb-4 pb-2"},[a("div",{staticClass:"card blog rounded border-0 shadow overflow-hidden"},[a("div",{staticClass:"position-relative"},[a("img",{staticClass:"card-img-top",attrs:{src:e.frontmatter.image,alt:e.title}}),t._v(" "),a("router-link",{staticClass:"overlay rounded-top bg-dark",attrs:{to:e.path}})],1),t._v(" "),a("div",{staticClass:"card-body content"},[a("h5",[a("router-link",{staticClass:"card-title title text-dark",attrs:{to:e.path}},[t._v("\n                                            "+t._s(e.title)+"\n                                        ")])],1),t._v(" "),a("div",{staticClass:"post-meta d-flex justify-content-between mt-3"},[a("ul",{staticClass:"list-unstyled mb-0"}),t._v(" "),a("router-link",{staticClass:"text-muted readmore",attrs:{to:e.path}},[t._v("\n                                            Read More "),a("ChevronRight",{attrs:{title:""}})],1)],1),t._v(" "),a("div",{staticClass:"author"},[a("small",{staticClass:"text-muted date"},[a("CalendarCheck",{attrs:{title:""}}),t._v(" "),a("time-ago",{staticClass:"item-date",attrs:{"last-updated":e.frontmatter.date||e.lastUpdated}})],1)])])])])})),0)])])],1)]),t._v(" "),a("Footer")],1)}),[],!1,null,null,null));e.default=f.exports}}]);
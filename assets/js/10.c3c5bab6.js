(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{376:function(t,e,a){"use strict";var i={props:{classes:{type:Array,default:function(){return[]}}}},o=a(19),n=Object(o.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"position-relative shape-wrapper"},[e("div",{staticClass:"shape overflow-hidden",class:this.classes},[e("svg",{attrs:{viewBox:"0 0 2880 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M 720,50 2160,0 h 720 V 100 H 0 V 50 Z",fill:"currentColor"}})])])])}),[],!1,null,"22a6dc56",null);e.a=n.exports},377:function(t,e,a){t.exports=a.p+"assets/img/logo-white.d5238fff.svg"},379:function(t,e,a){},380:function(t,e,a){},382:function(t,e,a){"use strict";var i=a(408),o=a(409),n=a(407),s=a(410),r=a(411),c=a(396),l=a(388),u=a(402),d=a(412),f=a(397),m=a(413),v=a(398),p=a(414),h=a(378),b={components:{VsmMenu:i.a,VsmMob:o.a,SearchBox:n.a,Domain:s.a,GoogleCirclesExtended:c.a,Terraform:u.a,Server:d.a,FileDocumentOutline:l.a,Email:f.a,ApplicationOutline:m.a,FeatureSearch:v.a,AccountNetworkOutline:p.a,GithubIcon:h.d},data:function(){return{menu:[{title:"Product",icon:m.a,element:"a",dropdown:"product",items:[{title:"Features",link:"/features/features",icon:v.a,desc:"Discover all the features of Kestra"},{title:"Usages",link:"/features/usages",icon:p.a,desc:"How Kestra can help on your daily workflow"}]},{title:"Learn",icon:r.a,element:"a",dropdown:"docs",items:[{title:"Documentation",link:"/docs/",icon:l.a,desc:"Get started with Kestra"},{title:"Plugins documentation",link:"/plugins/",icon:c.a,desc:"Extends Kestra with many plugins"},{title:"Terraform provider",link:"/docs/terraform/",icon:u.a,desc:"Deploy Kestra resources with Terraform"},{title:"Administrator guide",link:"/docs/administrator-guide/",icon:l.a,desc:"Learn how to deploy Kestra"}]},{title:"Company",icon:s.a,element:"a",dropdown:"company",items:[{title:"About us",link:"/company/about-us",icon:s.a,desc:"Discover our story & our team"},{title:"Contact us",link:"/company/contact",icon:f.a,desc:"How can we help?"}]},{title:"GitHub",icon:h.d,element:"span",href:"https://github.com/kestra-io/kestra"}]}}},g=(a(386),a(19)),y=Object(g.a)(b,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("vsm-menu",{attrs:{menu:t.menu,"base-width":380,"base-height":400,"screen-offset":10,element:"header",handler:"hover"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.item;return[i("div",{staticClass:"wrap-content"},[i("div",{staticClass:"dropdown-menu show"},[t._l(a.items,(function(e,o){return[i("router-link",{staticClass:"dropdown-item",attrs:{to:e.link}},[i(e.icon,{tag:"span",attrs:{title:""}}),t._v(" "),i("span",[t._v(t._s(e.title))]),t._v(" "),i("span",{staticClass:"desc"},[t._v(t._s(e.desc))])],1),t._v(" "),o!==a.items.length-1?i("div",{staticClass:"dropdown-divider"}):t._e()]}))],2)])]}},{key:"title",fn:function(e){return[i(e.item.icon,{tag:"span"}),t._v(" "),e.item.href?i("a",{attrs:{href:e.item.href}},[t._v(t._s(e.item.title))]):i("span",[t._v(t._s(e.item.title))])]}},{key:"before-nav",fn:function(){return[i("li",{staticClass:"vsm-section logo-section"},[i("router-link",{attrs:{to:"/"}},[i("img",{attrs:{src:a(377),alt:"Kestra"}})])],1)]},proxy:!0},{key:"after-nav",fn:function(){return[i("li",{staticClass:"vsm-section search-section"},[i("SearchBox")],1),t._v(" "),i("vsm-mob",[i("div",{staticClass:"dropdown-menu show"},[t._l(t.menu,(function(e){return["a"===e.element?i("h6",{staticClass:"dropdown-header"},[i(e.icon,{tag:"span",attrs:{title:""}}),t._v(" "),i("span",[t._v(t._s(e.title))])],1):[i("h6",{staticClass:"dropdown-header"},[i("a",{attrs:{href:e.href}},[i(e.icon,{tag:"span",attrs:{title:""}}),t._v(" "),i("span",[t._v(t._s(e.title))])],1)])],t._v(" "),t._l(e.items,(function(e){return[i("router-link",{staticClass:"dropdown-item",attrs:{to:e.link}},[i(e.icon,{tag:"span",attrs:{title:""}}),t._v(" "),i("span",[t._v(t._s(e.title))])],1)]}))]}))],2)])]},proxy:!0}])})}),[],!1,null,null,null);e.a=y.exports},383:function(t,e,a){"use strict";var i=a(390),o=a(403),n=a(415),s=a(378),r={data:function(){return{}},components:{Shape:a(376).a,GithubIcon:s.d,TwitterIcon:s.j,LinkedinIcon:s.e,Discord:o.a,MailIcon:s.f,ChevronRight:i.a,Heart:n.a}},c=(a(387),a(19)),l=Object(c.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Shape",{staticClass:"text-footer"}),t._v(" "),i("footer",{staticClass:"footer"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-3 col-12 mb-0 mb-md-3 pb-0 pb-md-2"},[i("router-link",{staticClass:"logo-footer",attrs:{to:"/"}},[i("img",{attrs:{src:a(377),height:"60",alt:""}})]),t._v(" "),i("p",{staticClass:"mt-2"},[t._v("Infinitely scalable open source orchestration platform.")]),t._v(" "),i("ul",{staticClass:"list-unstyled social-icon social mb-0 mt-4"},[i("li",{staticClass:"list-inline-item"},[i("a",{staticClass:"rounded",attrs:{href:"https://github.com/kestra-io"}},[i("github-icon",{staticClass:"fea icon-sm fea-social"})],1)]),t._v(" "),i("li",{staticClass:"list-inline-item ml-1"},[i("a",{staticClass:"rounded",attrs:{href:"https://twitter.com/kestra_io"}},[i("twitter-icon",{staticClass:"fea icon-sm fea-social"})],1)]),t._v(" "),i("li",{staticClass:"list-inline-item ml-1"},[i("a",{staticClass:"rounded",attrs:{href:"https://www.linkedin.com/company/kestra"}},[i("linkedin-icon",{staticClass:"fea icon-sm fea-social"})],1)]),t._v(" "),i("li",{staticClass:"list-inline-item ml-1"},[i("a",{staticClass:"rounded",attrs:{href:"https://discord.gg/NMG39WKGth"}},[i("discord",{attrs:{title:""}})],1)])])],1),t._v(" "),i("div",{staticClass:"col-lg-3 col-12 mb-0 mb-md-3 pb-0 pb-md-2"},[i("h4",{staticClass:"text-light footer-head"},[t._v("Product")]),t._v(" "),i("ul",{staticClass:"list-unstyled footer-list"},[i("li",[i("router-link",{staticClass:"text-foot",attrs:{to:"/features/features"}},[i("ChevronRight",{attrs:{title:""}}),t._v(" Features\n                            ")],1)],1),t._v(" "),i("li",[i("router-link",{staticClass:"text-foot",attrs:{to:"/features/usages"}},[i("ChevronRight",{attrs:{title:""}}),t._v(" Usage\n                            ")],1)],1),t._v(" "),i("li",[i("router-link",{staticClass:"text-foot",attrs:{to:"/docs/architecture/"}},[i("ChevronRight",{attrs:{title:""}}),t._v(" Architecture\n                            ")],1)],1)])]),t._v(" "),i("div",{staticClass:"col-lg-3 col-12 mb-0 mb-md-3 pb-0 pb-md-2"},[i("h4",{staticClass:"text-light footer-head"},[t._v("Learn")]),t._v(" "),i("ul",{staticClass:"list-unstyled footer-list"},[i("li",[i("router-link",{staticClass:"text-foot",attrs:{to:"/docs/"}},[i("ChevronRight",{attrs:{title:""}}),t._v(" Documentation\n                            ")],1)],1),t._v(" "),i("li",[i("router-link",{staticClass:"text-foot",attrs:{to:"/plugins/"}},[i("ChevronRight",{attrs:{title:""}}),t._v("  Plugins documentation\n                            ")],1)],1),t._v(" "),i("li",[i("router-link",{staticClass:"text-foot",attrs:{to:"/docs/terraform/"}},[i("ChevronRight",{attrs:{title:""}}),t._v("  Terraform provider\n                            ")],1)],1),t._v(" "),i("li",[i("router-link",{staticClass:"text-foot",attrs:{to:"/docs/administrator-guide/"}},[i("ChevronRight",{attrs:{title:""}}),t._v("  Administrator guide\n                            ")],1)],1)])]),t._v(" "),i("div",{staticClass:"col-lg-3 col-12 mb-0 mb-md-3 pb-0 pb-md-2"},[i("h4",{staticClass:"text-light footer-head"},[t._v("Company")]),t._v(" "),i("ul",{staticClass:"list-unstyled footer-list"},[i("li",[i("a",{staticClass:"text-foot",attrs:{href:"/company/about-us"}},[i("ChevronRight",{attrs:{title:""}}),t._v(" About us\n                            ")],1)]),t._v(" "),i("li",[i("a",{staticClass:"text-foot",attrs:{href:"/company/contact"}},[i("ChevronRight",{attrs:{title:""}}),t._v("  Contact us\n                            ")],1)])])])])])]),t._v(" "),i("footer",{staticClass:"footer footer-bar"},[i("div",{staticClass:"container text-center"},[i("div",{staticClass:"row align-items-center"},[i("div",{staticClass:"col-sm-6"},[i("div",{staticClass:"text-sm-left"},[i("p",{staticClass:"mb-0"},[t._v("\n                          © "+t._s((new Date).getFullYear())+" "),i("a",{attrs:{href:"https://kestra.io"}},[t._v("Kestra Technologies")]),t._v(".\n                          Developed with "),i("Heart",{staticClass:"text-danger"}),t._v(" in 🇫🇷 .\n\n                        ")],1)])]),t._v(" "),i("div",{staticClass:"col-sm-6"},[i("div",{staticClass:"text-sm-right"},[i("p",{staticClass:"mb-0"},[i("router-link",{attrs:{to:"/company/privacy-policy.html"}},[t._v("Privacy Policy")]),t._v("\n                            /\n                            "),i("router-link",{attrs:{to:"/company/cookie-policy.html"}},[t._v("Cookie Policy")])],1)])])])])])],1)}),[],!1,null,"6b333518",null);e.a=l.exports},384:function(t,e,a){},386:function(t,e,a){"use strict";a(379)},387:function(t,e,a){"use strict";a(380)},389:function(t,e,a){"use strict";var i={components:{Shape:a(376).a},props:{links:{type:Object,default:function(){}}},computed:{backgroundStyles:function(){return{backgroundImage:"url("+(this.$page.frontmatter.image||a(391))+")"}}}},o=(a(392),a(19)),n=Object(o.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"bg-half text-white d-table w-100"},[a("div",{staticClass:"container"},[a("div",{staticClass:"bg-overlay",style:t.backgroundStyles}),t._v(" "),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-12 text-center"},[a("div",{staticClass:"page-next-level"},[a("h1",[t._v(" "+t._s(t.$page.title)+" ")]),t._v(" "),a("div",{staticClass:"page-next"},[a("nav",{staticClass:"d-inline-block",attrs:{"aria-label":"breadcrumb"}},[a("ul",{staticClass:"breadcrumb bg-white rounded shadow mb-0"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:"/"}},[t._v("Kestra")])],1),t._v(" "),t._l(t.links,(function(e,i){return a("li",{staticClass:"breadcrumb-item"},[e?a("router-link",{attrs:{to:e}},[t._v(t._s(i))]):[t._v(t._s(i))]],2)})),t._v(" "),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.$page.title))])],2)])])])])])])])])}),[],!1,null,"2be66d62",null);e.a=n.exports},391:function(t,e,a){t.exports=a.p+"assets/img/bg.a1648aa2.jpg"},392:function(t,e,a){"use strict";a(384)},416:function(t,e,a){t.exports=function(t){function e(i){if(a[i])return a[i].exports;var o=a[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var a={};return e.m=t,e.c=a,e.p="dist/",e(0)}([function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},n=(i(a(1)),a(6)),s=i(n),r=i(a(7)),c=i(a(8)),l=i(a(9)),u=i(a(10)),d=i(a(11)),f=i(a(14)),m=[],v=!1,p={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},h=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(t&&(v=!0),v)return m=(0,d.default)(m,p),(0,u.default)(m,p.once),m},b=function(){m=(0,f.default)(),h()};t.exports={init:function(t){p=o(p,t),m=(0,f.default)();var e=document.all&&!window.atob;return function(t){return!0===t||"mobile"===t&&l.default.mobile()||"phone"===t&&l.default.phone()||"tablet"===t&&l.default.tablet()||"function"==typeof t&&!0===t()}(p.disable)||e?void m.forEach((function(t,e){t.node.removeAttribute("data-aos"),t.node.removeAttribute("data-aos-easing"),t.node.removeAttribute("data-aos-duration"),t.node.removeAttribute("data-aos-delay")})):(p.disableMutationObserver||c.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),p.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",p.easing),document.querySelector("body").setAttribute("data-aos-duration",p.duration),document.querySelector("body").setAttribute("data-aos-delay",p.delay),"DOMContentLoaded"===p.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?h(!0):"load"===p.startEvent?window.addEventListener(p.startEvent,(function(){h(!0)})):document.addEventListener(p.startEvent,(function(){h(!0)})),window.addEventListener("resize",(0,r.default)(h,p.debounceDelay,!0)),window.addEventListener("orientationchange",(0,r.default)(h,p.debounceDelay,!0)),window.addEventListener("scroll",(0,s.default)((function(){(0,u.default)(m,p.once)}),p.throttleDelay)),p.disableMutationObserver||c.default.ready("[data-aos]",b),m)},refresh:h,refreshHard:b}},function(t,e){},,,,,function(t,e){(function(e){"use strict";function a(t,e,a){function o(e){var a=f,i=m;return f=m=void 0,g=e,p=t.apply(i,a)}function s(t){return g=t,h=setTimeout(l,e),k?o(t):p}function c(t){var a=t-b;return void 0===b||a>=e||a<0||C&&t-g>=v}function l(){var t=w();return c(t)?u(t):void(h=setTimeout(l,function(t){var a=e-(t-b);return C?_(a,v-(t-g)):a}(t)))}function u(t){return h=void 0,x&&f?o(t):(f=m=void 0,p)}function d(){var t=w(),a=c(t);if(f=arguments,m=this,b=t,a){if(void 0===h)return s(b);if(C)return h=setTimeout(l,e),o(b)}return void 0===h&&(h=setTimeout(l,e)),p}var f,m,v,p,h,b,g=0,k=!1,C=!1,x=!0;if("function"!=typeof t)throw new TypeError(r);return e=n(e)||0,i(a)&&(k=!!a.leading,v=(C="maxWait"in a)?y(n(a.maxWait)||0,e):v,x="trailing"in a?!!a.trailing:x),d.cancel=function(){void 0!==h&&clearTimeout(h),g=0,f=b=m=h=void 0},d.flush=function(){return void 0===h?p:u(w())},d}function i(t){var e=void 0===t?"undefined":s(t);return!!t&&("object"==e||"function"==e)}function o(t){return"symbol"==(void 0===t?"undefined":s(t))||function(t){return!!t&&"object"==(void 0===t?"undefined":s(t))}(t)&&g.call(t)==l}function n(t){if("number"==typeof t)return t;if(o(t))return c;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var a=f.test(t);return a||m.test(t)?v(t.slice(2),a?2:8):d.test(t)?c:+t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r="Expected a function",c=NaN,l="[object Symbol]",u=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,m=/^0o[0-7]+$/i,v=parseInt,p="object"==(void 0===e?"undefined":s(e))&&e&&e.Object===Object&&e,h="object"==("undefined"==typeof self?"undefined":s(self))&&self&&self.Object===Object&&self,b=p||h||Function("return this")(),g=Object.prototype.toString,y=Math.max,_=Math.min,w=function(){return b.Date.now()};t.exports=function(t,e,o){var n=!0,s=!0;if("function"!=typeof t)throw new TypeError(r);return i(o)&&(n="leading"in o?!!o.leading:n,s="trailing"in o?!!o.trailing:s),a(t,e,{leading:n,maxWait:e,trailing:s})}}).call(e,function(){return this}())},function(t,e){(function(e){"use strict";function a(t){var e=void 0===t?"undefined":n(t);return!!t&&("object"==e||"function"==e)}function i(t){return"symbol"==(void 0===t?"undefined":n(t))||function(t){return!!t&&"object"==(void 0===t?"undefined":n(t))}(t)&&b.call(t)==c}function o(t){if("number"==typeof t)return t;if(i(t))return r;if(a(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=a(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(l,"");var o=d.test(t);return o||f.test(t)?m(t.slice(2),o?2:8):u.test(t)?r:+t}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s="Expected a function",r=NaN,c="[object Symbol]",l=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,f=/^0o[0-7]+$/i,m=parseInt,v="object"==(void 0===e?"undefined":n(e))&&e&&e.Object===Object&&e,p="object"==("undefined"==typeof self?"undefined":n(self))&&self&&self.Object===Object&&self,h=v||p||Function("return this")(),b=Object.prototype.toString,g=Math.max,y=Math.min,_=function(){return h.Date.now()};t.exports=function(t,e,i){function n(e){var a=f,i=m;return f=m=void 0,w=e,p=t.apply(i,a)}function r(t){return w=t,h=setTimeout(l,e),k?n(t):p}function c(t){var a=t-b;return void 0===b||a>=e||a<0||C&&t-w>=v}function l(){var t=_();return c(t)?u(t):void(h=setTimeout(l,function(t){var a=e-(t-b);return C?y(a,v-(t-w)):a}(t)))}function u(t){return h=void 0,x&&f?n(t):(f=m=void 0,p)}function d(){var t=_(),a=c(t);if(f=arguments,m=this,b=t,a){if(void 0===h)return r(b);if(C)return h=setTimeout(l,e),n(b)}return void 0===h&&(h=setTimeout(l,e)),p}var f,m,v,p,h,b,w=0,k=!1,C=!1,x=!0;if("function"!=typeof t)throw new TypeError(s);return e=o(e)||0,a(i)&&(k=!!i.leading,v=(C="maxWait"in i)?g(o(i.maxWait)||0,e):v,x="trailing"in i?!!i.trailing:x),d.cancel=function(){void 0!==h&&clearTimeout(h),w=0,f=b=m=h=void 0},d.flush=function(){return void 0===h?p:u(_())},d}}).call(e,function(){return this}())},function(t,e){"use strict";function a(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(t){t&&t.forEach((function(t){var e=Array.prototype.slice.call(t.addedNodes),a=Array.prototype.slice.call(t.removedNodes);if(function t(e){var a=void 0,i=void 0;for(a=0;a<e.length;a+=1){if((i=e[a]).dataset&&i.dataset.aos)return!0;if(i.children&&t(i.children))return!0}return!1}(e.concat(a)))return o()}))}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){};e.default={isSupported:function(){return!!a()},ready:function(t,e){var n=window.document,s=new(a())(i);o=e,s.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}}},function(t,e){"use strict";function a(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}(),o=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,n=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,r=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return i(t,[{key:"phone",value:function(){var t=a();return!(!o.test(t)&&!n.test(t.substr(0,4)))}},{key:"mobile",value:function(){var t=a();return!(!s.test(t)&&!r.test(t.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),t}();e.default=new c},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var a=window.pageYOffset,i=window.innerHeight;t.forEach((function(t,o){!function(t,e,a){var i=t.node.getAttribute("data-aos-once");e>t.position?t.node.classList.add("aos-animate"):void 0!==i&&("false"===i||!a&&"true"!==i)&&t.node.classList.remove("aos-animate")}(t,i+a,e)}))}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){return t&&t.__esModule?t:{default:t}}(a(12));e.default=function(t,e){return t.forEach((function(t,a){t.node.classList.add("aos-init"),t.position=(0,i.default)(t.node,e.offset)})),t}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){return t&&t.__esModule?t:{default:t}}(a(13));e.default=function(t,e){var a=0,o=0,n=window.innerHeight,s={offset:t.getAttribute("data-aos-offset"),anchor:t.getAttribute("data-aos-anchor"),anchorPlacement:t.getAttribute("data-aos-anchor-placement")};switch(s.offset&&!isNaN(s.offset)&&(o=parseInt(s.offset)),s.anchor&&document.querySelectorAll(s.anchor)&&(t=document.querySelectorAll(s.anchor)[0]),a=(0,i.default)(t).top,s.anchorPlacement){case"top-bottom":break;case"center-bottom":a+=t.offsetHeight/2;break;case"bottom-bottom":a+=t.offsetHeight;break;case"top-center":a+=n/2;break;case"bottom-center":a+=n/2+t.offsetHeight;break;case"center-center":a+=n/2+t.offsetHeight/2;break;case"top-top":a+=n;break;case"bottom-top":a+=t.offsetHeight+n;break;case"center-top":a+=t.offsetHeight/2+n}return s.anchorPlacement||s.offset||isNaN(e)||(o=e),a+o}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){for(var e=0,a=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)e+=t.offsetLeft-("BODY"!=t.tagName?t.scrollLeft:0),a+=t.offsetTop-("BODY"!=t.tagName?t.scrollTop:0),t=t.offsetParent;return{top:a,left:e}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return t=t||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(t,(function(t){return{node:t}}))}}])},429:function(t,e,a){t.exports=a.p+"assets/img/edarras.42c566da.jpg"},430:function(t,e,a){t.exports=a.p+"assets/img/ldehon.8c0df387.jpg"},441:function(t,e,a){},488:function(t,e,a){t.exports=a.p+"assets/img/ui.3e3f95fc.png"},489:function(t,e,a){"use strict";a(441)},601:function(t,e,a){"use strict";a.r(e);var i=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-title text-center pb-2"},[e("h4",{staticClass:"title mb-4",attrs:{"data-aos":"fade-right"}},[this._v("Our Story")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0"},[e("div",{staticClass:"position-relative"},[e("img",{staticClass:"rounded img-fluid mx-auto d-block",attrs:{src:a(488),alt:"","data-aos":"fade-right"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-7 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0"},[a("div",{staticClass:"section-title ml-lg-4",attrs:{"data-aos":"fade-left"}},[a("p",[a("strong",[t._v("Why did you create a data orchestration platform?")]),a("br"),t._v("\n                                    For many years in the automation and workflow planning landscape, we were frustrated that we "),a("strong",[t._v("did not see a working, professional open-source solution")]),t._v(" that was suitable for either simple or complex needs.\n                                ")]),t._v(" "),a("p",[t._v("\n                                    During our consulting missions, all our research for reliable, professional, quickly testable orchestrators ended "),a("strong",[t._v("tirelessly in failures")]),t._v("! Not scalable, too complex to use, not production ready, poor user interface, ...\n                                ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n                                        A challenge presented itself to us: "),e("strong",[this._v("Develop our own tool! One Platform to rule them all ^^")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n                                        The platform is "),e("strong",[this._v("operational, in production and performing")]),this._v(" for the pleasure of several hundred internal users who have seen their productivity gain skyrocketed using Kestra. What a reward for us. To build something new and that gives "),e("strong",[this._v("complete satisfaction")]),this._v(" to our users.\n                                    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 text-center"},[e("div",{staticClass:"section-title mb-4 pb-2"},[e("h4",{staticClass:"title mb-4",attrs:{"data-aos":"fade-left"}},[this._v("Our Founders")])])])])}],o=a(382),n=a(383),s=a(376),r=a(389),c=a(378),l={props:{teamData:{type:Array,default:[]}},components:{GithubIcon:c.d,TwitterIcon:c.j,LinkedinIcon:c.e},data:function(){return{}}},u=a(19),d=Object(u.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},t._l(t.teamData,(function(e,i){return a("div",{key:i,staticClass:"col-lg-3 col-md-6 mt-4 pt-2"},[a("div",{staticClass:"card team text-center border-0 pt-4 pb-4",attrs:{"data-aos":"fade-right"}},[a("div",{staticClass:"position-relative"},[a("img",{staticClass:"img-fluid avatar avatar-ex-large rounded-circle shadow",attrs:{src:""+e.image,alt:""}}),t._v(" "),a("ul",{staticClass:"list-unstyled social-icon team-icon mb-0 mt-4"},t._l(e.socials,(function(t,e){return a("li",{staticClass:"list-inline-item mr-1"},[a("a",{staticClass:"rounded",attrs:{href:t}},[a(e+"-icon",{tag:"templace",staticClass:"fea icon-sm fea-social"})],1)])})),0)]),t._v(" "),a("div",{staticClass:"card-body py-3 px-0 content"},[a("h5",{staticClass:"mb-0"},[a("a",{staticClass:"name text-dark",attrs:{href:"javascript:void(0)"}},[t._v(t._s(e.name))])]),t._v(" "),a("small",{staticClass:"designation text-muted"},[t._v(t._s(e.designation))])])])])})),0)}),[],!1,null,null,null).exports,f=a(390),m=(a(91),{name:"PlayIcon",props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}),v=Object(u.a)(m,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",t._b({staticClass:"material-design-icon play-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M8,5.14V19.14L19,12.14L8,5.14Z"}},[t.title?a("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports,p=a(416),h=a.n(p),b=a(397),g={components:{Header:o.a,Footer:n.a,Team:d,Breadcrumb:r.a,Shape:s.a,ChevronRight:f.a,Play:v,Email:b.a},mounted:function(){h.a.init({startEvent:"load"}),h.a.refresh()},data:function(){return{teamData:[{image:a(429),name:"Emmanuel Darras",designation:"C.E.O",socials:{linkedin:"https://www.linkedin.com/in/emmanuel-darras-48689b/"}},{image:a(430),name:"Ludovic Dehon",designation:"C.T.O",socials:{linkedin:"https://www.linkedin.com/in/ludovic-dehon-60886530/",twitter:"https://twitter.com/tchiotludo",github:"https://github.com/tchiotludo"}}]}}},y=(a(489),Object(u.a)(g,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"wrapper"}},[a("Header"),t._v(" "),a("div",{attrs:{id:"container"}},[a("main",[a("Breadcrumb"),t._v(" "),a("section",{staticClass:"section overflow-hidden"},[a("div",{staticClass:"container"},[t._m(0),t._v(" "),a("div",{staticClass:"row align-items-center"},[t._m(1),t._v(" "),t._m(2),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"mt-4 pt-2"},[t._m(3),t._v(" "),a("p",[t._v("\n                                        Before all, we are seeking to challenge the ecosystem.\n                                        Give you a tool to allow you to "),a("router-link",{attrs:{to:"/features/features"}},[t._v("orchestrate and automate your data")]),t._v(", your workflows, your batches, all with simplicity, autonomy and performance.\n                                        This has been our ambition since day since day one and will challenge us after the "),a("router-link",{attrs:{to:"/blogs/2022-01-10-kestra-opensource"}},[t._v("public launch of the Kestra project")]),t._v(".\n                                    ")],1),t._v(" "),a("p",[t._v("\n                                        We have developed our opensource platform with calm, precision and self-sacrifice, as part of a mission for one of the leaders of retail in Europe, "),a("router-link",{attrs:{to:"/blogs/2022-01-10-leroy-merlin-usage-kestra"}},[t._v("Leroy Merlin, with strict needs for enormous data management")]),t._v(".\n                                    ")],1),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("\n                                        Now is the "),a("router-link",{attrs:{to:"/blogs/2022-01-10-kestra-opensource"}},[t._v("public launch")]),t._v(" stage to bring Kestra to everyone who will need it. We have structured a company and our teams are now "),a("strong",[t._v("ready to help")]),t._v(" you with your future tests and integrations.\n                                    ")],1)])])])])]),t._v(" "),a("Shape",{staticClass:"text-dark"})],1),t._v(" "),a("section",{staticClass:"section bg-dark text-white"},[a("div",{staticClass:"container"},[t._m(5),t._v(" "),a("Team",{attrs:{"team-data":t.teamData}})],1),t._v(" "),a("Shape",{staticClass:"text-bg"})],1),t._v(" "),a("section",{staticClass:"section"},[a("div",{staticClass:"container mt-5"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-12 text-center"},[a("div",{staticClass:"section-title"},[a("h4",{staticClass:"title mb-4",attrs:{"data-aos":"fade-left"}},[t._v("\n                                    Want more informations ?\n                                ")]),t._v(" "),a("h5",{staticClass:"text-muted para-desc mx-auto mb-0",attrs:{"data-aos":"fade-right"}},[t._v("\n                                    Any questions about Kestra or the company, reach us please!\n                                ")]),t._v(" "),a("div",{staticClass:"mt-4"},[a("router-link",{staticClass:"btn btn-primary mt-2 mr-2",attrs:{to:"/company/contact.html","data-aos":"zoom-in"}},[a("Email",{attrs:{title:""}}),t._v("\n                                        Contact Us\n                                    ")],1)],1)])])])])])],1)]),t._v(" "),a("Footer")],1)}),i,!1,null,null,null));e.default=y.exports}}]);
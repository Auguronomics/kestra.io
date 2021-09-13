(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{773:function(t,e,a){"use strict";a.r(e);var s=a(9),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",[a("img",{attrs:{width:"25",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiCiAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgdmlld0JveD0iMCAwIDI0IDI0IgogICAgIHN0eWxlPSItbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyI+CiAgICA8cGF0aCBkPSJNMjAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yem0wIDRsLTggNWwtOC01VjZsOCA1bDgtNXYyeiIKICAgICAgICAgIGZpbGw9IiMzMzMiLz4KPC9zdmc+Cg==",alt:"MailExecution"}}),t._v(" MailExecution\n")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.kestra.plugin.notifications.mail.MailExecution"')]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("Task to send a mail with execution information")])]),t._v(" "),a("p",[t._v("Main execution information are provided in the sent mail (id, namespace, flow, state, duration, start date ...).")]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("blockquote",[a("p",[t._v("Send a mail notification on failed flow")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mail\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.tests\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("listeners")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("conditions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.models.conditions.types.ExecutionStatusCondition\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("in")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" FAILED\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tasks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mail\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.plugin.notifications.mail.MailExecution\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("to")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" to@mail.com\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" from@mail.com\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("subject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" This is the subject\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nohost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("mail.site\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("465")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" user\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pass\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sessionTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("transportStrategy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SMTPS\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tasks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ok\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.tasks.debugs.Return\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{task.id}} > {{taskrun.startDate}}"')]),t._v("\n")])])]),a("h2",{attrs:{id:"properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),a("h3",{attrs:{id:"cc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cc"}},[t._v("#")]),t._v(" "),a("code",[t._v("cc")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("One or more 'Cc' (carbon copy) optional recipient email address. Use semicolon as delimiter to provide several addresses")])]),t._v(" "),a("p",[t._v("Note that each email address must be an RFC2822 format compliant address.")]),t._v(" "),a("h3",{attrs:{id:"executionid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#executionid"}},[t._v("#")]),t._v(" "),a("code",[t._v("executionId")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",{pre:!0},[t._v("{{  execution.id  }}")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The execution id to use")])]),t._v(" "),a("p",[t._v("Default is the current execution")]),t._v(" "),a("h3",{attrs:{id:"from"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from"}},[t._v("#")]),t._v(" "),a("code",[t._v("from")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The address of the sender of this email")])]),t._v(" "),a("h3",{attrs:{id:"host"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#host"}},[t._v("#")]),t._v(" "),a("code",[t._v("host")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The mail server host")])]),t._v(" "),a("h3",{attrs:{id:"htmltextcontent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#htmltextcontent"}},[t._v("#")]),t._v(" "),a("code",[t._v("htmlTextContent")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The optional email message body in HTML text")])]),t._v(" "),a("p",[t._v("Both text and HTML can be provided, which will be offered to the email client as alternative content. Email clients that support it, will favor HTML over plain text and ignore the text body completely")]),t._v(" "),a("h3",{attrs:{id:"password"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#password"}},[t._v("#")]),t._v(" "),a("code",[t._v("password")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The mail server password")])]),t._v(" "),a("h3",{attrs:{id:"port"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#port"}},[t._v("#")]),t._v(" "),a("code",[t._v("port")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("integer")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The mail server port")])]),t._v(" "),a("h3",{attrs:{id:"sessiontimeout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sessiontimeout"}},[t._v("#")]),t._v(" "),a("code",[t._v("sessionTimeout")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("integer")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("1000")])])]),t._v(" "),a("blockquote",[a("p",[t._v("Controls the timeout to use when sending emails")])]),t._v(" "),a("p",[t._v("It affects socket connect-, read- and write timeouts")]),t._v(" "),a("h3",{attrs:{id:"subject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subject"}},[t._v("#")]),t._v(" "),a("code",[t._v("subject")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The optional subject of this email")])]),t._v(" "),a("h3",{attrs:{id:"templaterendermap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#templaterendermap"}},[t._v("#")]),t._v(" "),a("code",[t._v("templateRenderMap")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("object")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Render map to use for template")])]),t._v(" "),a("h3",{attrs:{id:"templateuri"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#templateuri"}},[t._v("#")]),t._v(" "),a("code",[t._v("templateUri")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Template to use")])]),t._v(" "),a("h3",{attrs:{id:"to"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#to"}},[t._v("#")]),t._v(" "),a("code",[t._v("to")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("One or more recipient email address. Use semicolon as delimiter to provide several addresses")])]),t._v(" "),a("p",[t._v("Note that each email address must be an RFC2822 format compliant address")]),t._v(" "),a("h3",{attrs:{id:"transportstrategy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transportstrategy"}},[t._v("#")]),t._v(" "),a("code",[t._v("transportStrategy")])]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("SMTPS")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Possible Values:")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("SMTP")])]),t._v(" "),a("li",[a("code",[t._v("SMTPS")])]),t._v(" "),a("li",[a("code",[t._v("SMTP_TLS")])])])])]),t._v(" "),a("blockquote",[a("p",[t._v("The optional transport strategy")])]),t._v(" "),a("p",[t._v("Will default to SMTPS if left empty.")]),t._v(" "),a("h3",{attrs:{id:"username"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#username"}},[t._v("#")]),t._v(" "),a("code",[t._v("username")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The mail server username")])])])}),[],!1,null,null,null);e.default=r.exports}}]);
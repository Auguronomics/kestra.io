(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{457:function(t,e,a){"use strict";a.r(e);var s=a(25),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"flow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flow"}},[t._v("#")]),t._v(" Flow")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.kestra.core.tasks.flows.Flow"')]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("Trigger another flow")])]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("blockquote",[a("p",[t._v("Trigger another flow, passing some file and arguments")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"flow"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.kestra.core.tasks.flows.Flow"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.kestra.tests\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("flowId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" my"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("sub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("flows\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{ outputs.my-task.files.resolver\' }}"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("store")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("wait")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n")])])]),a("h2",{attrs:{id:"inputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),a("h3",{attrs:{id:"flowid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flowid"}},[t._v("#")]),t._v(" "),a("code",[t._v("flowId")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ✔️")])]),t._v(" "),a("blockquote",[a("p",[t._v("The flowId to trigger")])]),t._v(" "),a("h3",{attrs:{id:"inputs-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inputs-2"}},[t._v("#")]),t._v(" "),a("code",[t._v("inputs")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("object")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The input to pass to the triggered flow")])]),t._v(" "),a("h3",{attrs:{id:"namespace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#namespace"}},[t._v("#")]),t._v(" "),a("code",[t._v("namespace")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ✔️")])]),t._v(" "),a("blockquote",[a("p",[t._v("The namespace of the flow to trigger")])]),t._v(" "),a("h3",{attrs:{id:"revision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#revision"}},[t._v("#")]),t._v(" "),a("code",[t._v("revision")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("integer")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The revision of the flow you want to trigger")])]),t._v(" "),a("p",[t._v("By default, we trigger the last version.")]),t._v(" "),a("h3",{attrs:{id:"transmitfailed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transmitfailed"}},[t._v("#")]),t._v(" "),a("code",[t._v("transmitFailed")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("boolean")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Failed the current execution if the waited execution is failed or killed.")])]),t._v(" "),a("p",[a("code",[t._v("wait")]),t._v(" need to be true to make it work")]),t._v(" "),a("h3",{attrs:{id:"wait"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wait"}},[t._v("#")]),t._v(" "),a("code",[t._v("wait")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("boolean")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Wait the end of the execution.")])]),t._v(" "),a("p",[t._v("By default, we don't wait till the end of the flow, if you set to true, we wait the end of the trigger flow before continue this one.")]),t._v(" "),a("h2",{attrs:{id:"outputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" Outputs")]),t._v(" "),a("h3",{attrs:{id:"executionid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#executionid"}},[t._v("#")]),t._v(" "),a("code",[t._v("executionId")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The id of the execution trigger.")])]),t._v(" "),a("h3",{attrs:{id:"state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[t._v("#")]),t._v(" "),a("code",[t._v("state")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The state of the execution trigger.")])]),t._v(" "),a("p",[t._v("Only available if the execution is waited with "),a("code",[t._v("wait")]),t._v(" options")])])}),[],!1,null,null,null);e.default=r.exports}}]);
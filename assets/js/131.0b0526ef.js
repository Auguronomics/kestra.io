(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{843:function(e,t,a){"use strict";a.r(t);var s=a(9),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",[e._v("\n     Webhook\n")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"io.kestra.core.models.triggers.types.Webhook"')]),e._v("\n")])])]),a("blockquote",[a("p",[e._v("Trigger a flow from a webhook")])]),e._v(" "),a("p",[e._v("Webbook trigger allow you to trigger a flow from a webhook url."),a("br"),e._v("\nThe trigger will generate a "),a("code",[e._v("key")]),e._v(" that must be used on url : "),a("code",[e._v("/api/v1/executions/webhook/{namespace}/[flowId]/{key}")]),e._v("."),a("br"),e._v("\nKestra accept "),a("code",[e._v("GET")]),e._v(", "),a("code",[e._v("POST")]),e._v(" & "),a("code",[e._v("PUT")]),e._v(" request on this url."),a("br"),e._v("\nThe whole body & headers will be available as variable:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("trigger.variables.body")])]),e._v(" "),a("li",[a("code",[e._v("trigger.variables.headers")])])]),e._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("blockquote",[a("p",[e._v("Add a trigger to the current flow")])]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("triggers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" webhook\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" io.kestra.core.models.triggers.types.Webhook\n")])])]),a("blockquote",[a("p",[e._v("After the trigger is created, a key will be created that will be use in the webhook url, now, you can launch the flow on the url "),a("code",[e._v("/api/v1/executions/webhook/{namespace}/[flowId]/4wjtkzwVGBM9yKnjm3yv8r")])])]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("triggers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" webhook\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" io.kestra.core.models.triggers.types.Webhook\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 4wjtkzwVGBM9yKnjm3yv8r\n")])])]),a("h2",{attrs:{id:"properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),a("h3",{attrs:{id:"key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key"}},[e._v("#")]),e._v(" "),a("code",[e._v("key")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("string")])]),e._v(" "),a("li",[a("strong",[e._v("Dynamic:")]),e._v(" ❓")]),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ❌")]),e._v(" "),a("li",[a("strong",[e._v("Default:")]),e._v(" "),a("code",[e._v("54YVmTvpKZnbchUfJfRxA4")])]),e._v(" "),a("li",[a("strong",[e._v("Min length:")]),e._v(" "),a("code",[e._v("16")])]),e._v(" "),a("li",[a("strong",[e._v("Max length:")]),e._v(" "),a("code",[e._v("256")])])]),e._v(" "),a("blockquote",[a("p",[e._v("The unique key that will be part of the url")])]),e._v(" "),a("p",[e._v("If you don't provide a key, a random one will be generated. Is used as key for generating the url of the webhook.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Take care when using manual key, the key is the only security to protect your webhook and must be considered as a secret !")])]),e._v(" "),a("h2",{attrs:{id:"outputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[e._v("#")]),e._v(" Outputs")]),e._v(" "),a("h3",{attrs:{id:"body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#body"}},[e._v("#")]),e._v(" "),a("code",[e._v("body")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" ====")])]),e._v(" "),a("blockquote",[a("p",[e._v("The full body for the webhook request")])]),e._v(" "),a("p",[e._v("We try to deserialize the incoming request as json (array or object)."),a("br"),e._v("\nIf we can't the full body as string will be available")]),e._v(" "),a("h3",{attrs:{id:"headers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#headers"}},[e._v("#")]),e._v(" "),a("code",[e._v("headers")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("object")])])]),e._v(" "),a("blockquote",[a("p",[e._v("The headers for the webhook request")])])])}),[],!1,null,null,null);t.default=r.exports}}]);
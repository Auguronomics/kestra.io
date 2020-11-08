(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{448:function(t,e,s){"use strict";s.r(e);var a=s(25),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"flow-trigger"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flow-trigger"}},[t._v("#")]),t._v(" Flow trigger")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.kestra.core.models.triggers.types.Schedule"')]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("Kestra is able to trigger flow after another one. This allows chaining flow without need to update the base flows."),s("br"),t._v("\nWith that, you can break responsibility between different flow to different teams.")])]),t._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("blockquote",[s("p",[t._v("This flow will be triggered after each successfully execution of flow "),s("code",[t._v("org.kestra.tests.trigger-flow")]),t._v(" and forward the "),s("code",[t._v("uri")]),t._v(" of "),s("code",[t._v("my-task")]),t._v(" taskId outputs.")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" trigger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("flow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("listener\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.kestra.tests\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("revision")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" from"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("parent\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" STRING\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tasks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" only"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("no"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("input\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.kestra.core.tasks.debugs.Return\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v1: {{trigger.executionId}}"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("triggers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" listen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("flow\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.kestra.core.models.triggers.types.Flow\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("from-parent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{{ outputs.my-task.uri }}'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("conditions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.kestra.core.models.conditions.types.ExecutionFlowCondition\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.kestra.tests\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("flowId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" trigger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("flow\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.kestra.core.models.conditions.types.ExecutionStatusCondition\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("in")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" SUCCESS\n")])])]),s("h2",{attrs:{id:"inputs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),s("h3",{attrs:{id:"id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#id"}},[t._v("#")]),t._v(" "),s("code",[t._v("id")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("Badge",{attrs:{vertical:"middle",text:"String"}})],1),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ✔")])]),t._v(" "),s("blockquote",[s("p",[t._v("unique for a flow")])]),t._v(" "),s("h3",{attrs:{id:"inputs-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inputs-2"}},[t._v("#")]),t._v(" "),s("code",[t._v("inputs")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("Badge",{attrs:{vertical:"middle",text:"Map<String, Object>"}})],1),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔")])]),t._v(" "),s("blockquote",[s("p",[t._v("fill input of this flow based on output of current flow, allowing to pass data or file on the triggered flow")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("If you provide invalid input, the flow will be created and already state as FAILED! Since there is no task started, you can't log any reason visible on the ui."),s("br"),t._v("\nSo you will need to go to server log to understand the error")])]),t._v(" "),s("h3",{attrs:{id:"conditions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conditions"}},[t._v("#")]),t._v(" "),s("code",[t._v("conditions")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("Badge",{attrs:{vertical:"middle",text:"List<Condition>"}})],1),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("List of  "),s("a",{attrs:{href:"../conditions"}},[t._v("Conditions")]),t._v(" in order to limit the flow trigger.")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("If you don't provide any conditions, the flow will be triggered for "),s("strong",[t._v("EVERY execution")]),t._v(" of "),s("strong",[t._v("EVERY flow")]),t._v(" on your instance.")])]),t._v(" "),s("h2",{attrs:{id:"variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#variables"}},[t._v("#")]),t._v(" Variables")]),t._v(" "),s("p",[t._v("When the flow is trigger by another one, some context variables will be injected to allow some customization of the flow.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("{{ trigger.executionId }}")])]),t._v(" "),s("td",[t._v("the execution id that trigger the current flow")])]),t._v(" "),s("tr",[s("td",[s("code",{pre:!0},[t._v("{{ trigger.namespace }}")])]),t._v(" "),s("td",[t._v("the namespace of the flow that trigger the current flow")])]),t._v(" "),s("tr",[s("td",[s("code",{pre:!0},[t._v("{{ trigger.flowId }}")])]),t._v(" "),s("td",[t._v("the flow id that trigger the current flow")])]),t._v(" "),s("tr",[s("td",[s("code",{pre:!0},[t._v("{{ trigger.flowRevision }}")])]),t._v(" "),s("td",[t._v("the flow revision that trigger the current flow")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);
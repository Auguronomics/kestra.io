(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{702:function(t,a,s){"use strict";s.r(a);var e=s(9),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"outputs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" Outputs")]),t._v(" "),s("p",[t._v("Kestra's flow can produce outputs when processing tasks. Output data are stored in flow execution context and can be handled and used by tasks next to the output producer one.")]),t._v(" "),s("p",[t._v("You can use outputs every where "),s("RouterLink",{attrs:{to:"/docs/developer-guide/variables/"}},[t._v("variables")]),t._v(" are allowed, so it can be used as next task values for iteration or conditional processing or even as extra output content.")],1),t._v(" "),s("h2",{attrs:{id:"using-outputs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-outputs"}},[t._v("#")]),t._v(" Using outputs")]),t._v(" "),s("p",[t._v("You can declare as many outputs for any flow. Outputs context variables are stored following each task declaration.")]),t._v(" "),s("p",[t._v("Here how to use output between tasks into a flow:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tasks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" produce"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("output\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.kestra.core.tasks.debugs.Return\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" my output "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" execution.id "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" use"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("output\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.kestra.core.tasks.debugs.Echo\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" This task display previous task output "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" outputs.produce"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("output.value "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("In the example above the first task produces an output with the format yaml property. the ouput content is then used in the second task output formating. Indeed, the "),s("code",[t._v("use-output")]),t._v(" task uses the templating system "),s("code",{pre:!0},[t._v("{{ outputs.produce-output.value }}")]),t._v(" to reference the previous task output.")]),t._v(" "),s("p",[t._v("Using this template context variable interpolates the bracket reference with the entire output generated by the first task.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("note")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v(".value")]),t._v(" in the template bracket that reach another task's output content is a value that depends on what data is produced per value. In our case, for the "),s("strong",[t._v("Return")]),t._v(" task, the "),s("code",[t._v("value")]),t._v(" content is filled with the output. It could be "),s("code",[t._v("bq_table")]),t._v(" for another task implemented for big query management. Have a look at each task documentation for specific information about what context variable are filled with ouput contents.")])]),t._v(" "),s("h2",{attrs:{id:"specific-outputs-for-dynamic-tasks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#specific-outputs-for-dynamic-tasks"}},[t._v("#")]),t._v(" Specific outputs for dynamic tasks")]),t._v(" "),s("p",[t._v("Another more specific case for output management is the runtime generated tasks output variables. It is the case for the "),s("strong",[t._v("EachSequential")]),t._v(" or "),s("strong",[t._v("EachParallel")]),t._v(" task that produces dynamically other tasks depending on it's "),s("code",[t._v("value")]),t._v(" property. In this case it is possible to reach each iteration output individually using the following syntax :")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" output"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("sample\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.kestra.tests\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tasks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("output\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.kestra.core.tasks.flows.EachSequential\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'["s1", "s2", "s3"]\'')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tasks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1_1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("produce_output\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.kestra.core.tasks.debugs.Return\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{task.id}} > {{taskrun.value}} > {{taskrun.startDate}}"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2_use_output\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.kestra.core.tasks.debugs.Return\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Previous task produced output : {{outputs.1_1-produce_output.s1.a.value}}"')]),t._v("\n")])])]),s("p",[t._v("Here the "),s("code",[t._v("outputs.1_1-produce_output.s1.a.value")]),t._v(" reach the first "),s("code",[t._v("1-output")]),t._v(" task element.")])])}),[],!1,null,null,null);a.default=n.exports}}]);
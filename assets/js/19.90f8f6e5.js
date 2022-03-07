(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{571:function(t,e,a){t.exports=a.p+"assets/img/flow-1.e551b909.png"},572:function(t,e,a){t.exports=a.p+"assets/img/flow-2.d7aac868.png"},573:function(t,e,a){t.exports=a.p+"assets/img/flow-3.fc03e84e.png"},574:function(t,e,a){t.exports=a.p+"assets/img/execution-1.4e39bb0a.png"},575:function(t,e,a){t.exports=a.p+"assets/img/execution-2.6aac671a.png"},576:function(t,e,a){t.exports=a.p+"assets/img/execution-3.a14308b9.png"},760:function(t,e,a){"use strict";a.r(e);var s=a(19),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),s("h2",{attrs:{id:"before-you-begin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#before-you-begin"}},[t._v("#")]),t._v(" Before you begin")]),t._v(" "),s("p",[t._v("Make sure you have already installed:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.docker.com/engine/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Compose"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"launch-kestra"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#launch-kestra"}},[t._v("#")]),t._v(" Launch Kestra")]),t._v(" "),s("ul",[s("li",[t._v("Download the compose file "),s("a",{attrs:{href:"https://github.com/kestra-io/kestra/blob/develop/docker-compose.yml",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(" and save it with the name "),s("code",[t._v("docker-compose.yml")]),t._v(", for linux and macos, you can run "),s("code",[t._v("wget https://raw.githubusercontent.com/kestra-io/kestra/develop/docker-compose.yml")])]),t._v(" "),s("li",[t._v("Run "),s("code",[t._v("docker-compose pull")])]),t._v(" "),s("li",[t._v("Run "),s("code",[t._v("docker-compose up -d")])]),t._v(" "),s("li",[t._v("Open "),s("code",[t._v("http://localhost:8080")]),t._v(" on your browser")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Default amount of memory available for Docker on MacOS is often not enough to get Kestra up and running with all dependencies. If enough memory is not allocated, it might lead to kestra instance continuously restarting. You should at least allocate 4GB memory for the Docker Engine (ideally 8GB). You can check and change the amount of memory in "),s("a",{attrs:{href:"https://docs.docker.com/docker-for-mac/#resources",target:"_blank",rel:"noopener noreferrer"}},[t._v("Resources"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("You can also check if you have enough memory by running this command:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run --rm "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"debian:buster-slim"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" -c "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'numfmt --to iec $(echo $(($(getconf _PHYS_PAGES) * $(getconf PAGE_SIZE))))'")]),t._v("\n")])])])]),t._v(" "),s("h2",{attrs:{id:"create-your-first-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-your-first-flow"}},[t._v("#")]),t._v(" Create your first flow")]),t._v(" "),s("p",[t._v("The default installation is empty and don't contain any flows.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(571),alt:"Flow list"}})]),t._v(" "),s("p",[t._v("We will create the first one :")]),t._v(" "),s("p",[s("img",{attrs:{src:a(572),alt:"Flow Create"}})]),t._v(" "),s("ul",[s("li",[t._v("Click on the "),s("code",[t._v("Create")]),t._v(" button at the button")]),t._v(" "),s("li",[t._v("Paste the flow below")]),t._v(" "),s("li",[t._v("Click on save")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" logs\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.tests\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tasks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" t1\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.tasks.debugs.Echo\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" first "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("task.id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("level")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TRACE\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" t2\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.tasks.debugs.Echo\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" second "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("task.type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("level")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" WARN\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" t3\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.tasks.debugs.Echo\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" third "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("flow.id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("level")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ERROR\n")])])]),s("p",[t._v("You will see the Topology of your flow as graph on "),s("code",[t._v("Overview")]),t._v(" tabs.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(573),alt:"Flow Topology"}})]),t._v(" "),s("h2",{attrs:{id:"execute-your-first-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#execute-your-first-flow"}},[t._v("#")]),t._v(" Execute your first flow")]),t._v(" "),s("p",[t._v("Now let's run our first flow and see it running :")]),t._v(" "),s("ul",[s("li",[t._v("Now hit the button "),s("code",[t._v("Execute")]),t._v(" on top Tabs.")]),t._v(" "),s("li",[t._v("You will see in Real time the execution of the current flow"),s("br"),t._v(" "),s("img",{attrs:{src:a(574),alt:"Execution Gantt"}})]),t._v(" "),s("li",[t._v("Look at the log of the current tasks on "),s("code",[t._v("Logs")]),s("br"),t._v(" "),s("img",{attrs:{src:a(575),alt:"Execution Log"}})]),t._v(" "),s("li",[t._v("And watch the topology of the current execution."),s("br"),t._v(" "),s("img",{attrs:{src:a(576),alt:"Execution Topology"}})])]),t._v(" "),s("h2",{attrs:{id:"next-steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next Steps")]),t._v(" "),s("p",[t._v("Now, you are ready to use Kestra !")]),t._v(" "),s("p",[t._v("Now I suggest you to read some documentations in order:")]),t._v(" "),s("ul",[s("li",[t._v("to understand Kestra "),s("a",{attrs:{href:"../concepts"}},[t._v("concepts")]),t._v(".")]),t._v(" "),s("li",[t._v("read the "),s("a",{attrs:{href:"../developer-guide"}},[t._v("Developer Guide")]),t._v(" to understand how to code your own flow.")]),t._v(" "),s("li",[t._v("Look at "),s("a",{attrs:{href:"../../plugins"}},[t._v("Plugins")]),t._v(" to have some real task .")]),t._v(" "),s("li",[s("a",{attrs:{href:"../administrator-guide"}},[t._v("Deploy")]),t._v(" your kestra instance to real environments.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);
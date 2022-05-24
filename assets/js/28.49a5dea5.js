(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{614:function(e,t,a){e.exports=a.p+"assets/img/architecture.8b7d9920.svg"},707:function(e,t,a){"use strict";a.r(t);var r=a(19),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"architecture"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#architecture"}},[e._v("#")]),e._v(" Architecture")]),e._v(" "),r("p",[r("img",{attrs:{src:a(614),alt:"Kestra Architecture",title:"Kestra Architecture"}})]),e._v(" "),r("h2",{attrs:{id:"dependencies"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[e._v("#")]),e._v(" Dependencies")]),e._v(" "),r("p",[e._v("At its heart, Kestra has a pluggable system allowing some dependencies to be switched out, but for now there is only one production environment architecture available:")]),e._v(" "),r("h3",{attrs:{id:"kafka"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kafka"}},[e._v("#")]),e._v(" Kafka")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://kafka.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kafka"),r("OutboundLink")],1),e._v(" is Kestra's primary dependency. Each of the most important servers in a deployment need to have a Kafka instance up & running. Kafka allows Kestra to be an infinitely scalable solution.")]),e._v(" "),r("h3",{attrs:{id:"elasticsearch"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch"}},[e._v("#")]),e._v(" ElasticSearch")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.elastic.co/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ElasticSearch"),r("OutboundLink")],1),e._v(" Kestra's primary database, allowing the display, search and aggregation of all Kestra's data (Flows, Executions, etc...)")]),e._v(" "),r("h3",{attrs:{id:"storage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#storage"}},[e._v("#")]),e._v(" Storage")]),e._v(" "),r("p",[e._v("As with most systems, Kestra requires storage to handle incoming and outgoing files of varying sizes. This notion is included in the heart of Kestra. Nowadays, storage availability is backed up by many file systems, we rely on these to guarantee scalability of Kestra.")]),e._v(" "),r("p",[e._v("The storage is a simple plugin that you need to include and configure, by default only local (not scalable) storage is available.")]),e._v(" "),r("p",[e._v("Any storage designated can be used by any Kestra servers except the "),r("a",{attrs:{href:"#executor"}},[e._v("Executor")]),e._v(" & the "),r("a",{attrs:{href:"#indexer"}},[e._v("Indexer")]),e._v(" which don't need it.")]),e._v(" "),r("p",[e._v("Available storages are :")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/kestra-io/storage-minio",target:"_blank",rel:"noopener noreferrer"}},[e._v("Storage Minio"),r("OutboundLink")],1),e._v(" for "),r("a",{attrs:{href:"https://min.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Minio"),r("OutboundLink")],1),e._v(", which is compatible with "),r("a",{attrs:{href:"https://aws.amazon.com/s3/",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS S3"),r("OutboundLink")],1),e._v(" and all other "),r("em",[e._v("S3 Like")]),e._v(" storage")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/kestra-io/storage-gcs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Storage GCS"),r("OutboundLink")],1),e._v(" for "),r("a",{attrs:{href:"https://cloud.google.com/storage",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Cloud Storage"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/kestra-io/storage-azure",target:"_blank",rel:"noopener noreferrer"}},[e._v("Storage Azure"),r("OutboundLink")],1),e._v(" for "),r("a",{attrs:{href:"https://azure.microsoft.com/en-us/services/storage/blobs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Blob Storage"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"servers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#servers"}},[e._v("#")]),e._v(" Servers")]),e._v(" "),r("p",[e._v("Kestra consists of multiple servers that can be scaled independently:")]),e._v(" "),r("h3",{attrs:{id:"executor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#executor"}},[e._v("#")]),e._v(" Executor")]),e._v(" "),r("p",[e._v("Executors handle all executions and "),r("a",{attrs:{href:"../../developer-guide/flowable"}},[e._v("flowable tasks")]),e._v(". The only goal of the Executor is to receive created executions and look for the  next tasks. There is no heavy computing required (and no capacity for it) for this server. The only purpose of the Executor is looking at current executions and finding the next tasks.")]),e._v(" "),r("p",[e._v("The executor also handles special execution cases:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"../../developer-guide/listeners"}},[e._v("Listeners")])]),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/developer-guide/triggers/flow.html"}},[e._v("Flow Trigger")])],1),e._v(" "),r("li",[r("a",{attrs:{href:"../../developer-guide/templates"}},[e._v("Template")])])]),e._v(" "),r("p",[e._v("Internally, the executor is a heavy "),r("a",{attrs:{href:"https://kafka.apache.org/documentation/streams/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kafka Stream"),r("OutboundLink")],1),e._v(". The executor processes all events coming from Kafka in the right order, and keeps an internal state of the execution and merges taskrun results coming from the worker."),r("br"),e._v("\nIt also detects dead Workers and resubmits the tasks run by a dead worker.")]),e._v(" "),r("p",[e._v("Since the application is a Kafka Stream, the application can be scaled infinitely (within the limits of partition count on Kafka) but since no heavy computations are done on the executor, this server does not require alot of resources (unless you have a very high rate of executions).")]),e._v(" "),r("h3",{attrs:{id:"worker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#worker"}},[e._v("#")]),e._v(" Worker")]),e._v(" "),r("p",[e._v("A worker is where the task is done. A Worker will receive a task from the Executor and will process it. Since tasks can be nearly anything(heavy computations, simple api calls, etc), the worker is essentially a ThreadPool where you can configure the amount of threads you need.")]),e._v(" "),r("p",[e._v("Internally, workers are a simple "),r("a",{attrs:{href:"https://kafka.apache.org/documentation/#consumerapi",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kafka Consumer"),r("OutboundLink")],1),e._v(" that will process any Task Run submitted. Workers will receive all tasks and dispatch internally in its Thread Pool.")]),e._v(" "),r("p",[e._v("You can also scale workers as necessary, and have many instances on multiple servers(within the limits of the partition count on Kafka), each with its own Thread Pool. If a worker is dead, the Executor will detect it and resubmit their current taskrun to another worker.")]),e._v(" "),r("h3",{attrs:{id:"scheduler"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#scheduler"}},[e._v("#")]),e._v(" Scheduler")]),e._v(" "),r("p",[e._v("Scheduler will handle most of the "),r("a",{attrs:{href:"../../developer-guide/triggers"}},[e._v("triggers")]),e._v(" (except the "),r("RouterLink",{attrs:{to:"/developer-guide/triggers/flow.html"}},[e._v("Flow Trigger handle by executor")]),e._v("). It will continuously watch all triggers and detect if all the conditions are met to trigger an Execution (submitted to Executor).")],1),e._v(" "),r("p",[e._v("Internally, a Scheduler has two ThreadPools:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("ScheduledExecutorService")]),e._v(" : This Threadpool will tick every second and try to find an available job.")]),e._v(" "),r("li",[r("strong",[e._v("CachedThreadPool")]),e._v(" : This Threadpool will compute in a separate Thread for all the triggers.")])]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("By default, Kestra will handle all dates based on your system timezone. You can change the timezone with "),r("a",{attrs:{href:"../administrator-guide/configuration/others#jvm-configuration"}},[e._v("JVM options")]),e._v(".")])]),e._v(" "),r("h3",{attrs:{id:"indexer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#indexer"}},[e._v("#")]),e._v(" Indexer")]),e._v(" "),r("p",[e._v("The Indexer will watch for many Kafka topics and will simply copy the content to "),r("a",{attrs:{href:"#repositories"}},[e._v("Repositories")]),e._v(". This will save all the executions & flows to ElasticSearch providing Kestra with a rich UI.")]),e._v(" "),r("h3",{attrs:{id:"webserver"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#webserver"}},[e._v("#")]),e._v(" Webserver")]),e._v(" "),r("p",[e._v("The Webserver offers 2 main modules in the same server :")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Api")]),e._v(": All the apis allowed to trigger executions for any system, and to interact with Kestra.")]),e._v(" "),r("li",[r("strong",[e._v("UI")]),e._v(": The User Interface (UI) is also served by the same webserver.")])]),e._v(" "),r("p",[e._v("The webserver interacts mostly with Elasticsearch to deliver a rich API/UI. It also interacts with Kafka in order to trigger new executions, follow executions in real-time, etc...")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("Each Application/Server (other than the Scheduler)can continue to function, provided Kafka and its Storage is up and running. ElasticSearch is only used to help provide our rich Web UI, and even if ElasticSearch is down, workloads can continue on Kestra.")])]),e._v(" "),r("h2",{attrs:{id:"plugins"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[e._v("#")]),e._v(" Plugins")]),e._v(" "),r("p",[e._v("Kestra's core is not by itself able to handle many task types. We have therefore included a "),r("a",{attrs:{href:"../../plugins"}},[e._v("Plugins")]),e._v(" system that allow you to develop as many tasks as you need."),r("br"),e._v("\nA wide range of plugins is already available, and many more will be delivered by the Kestra team !")]),e._v(" "),r("h2",{attrs:{id:"repositories"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#repositories"}},[e._v("#")]),e._v(" Repositories")]),e._v(" "),r("p",[e._v("Repositories are the internal way to fetch data. On production servers, these will fetch data from ElasticSearch. There is a memory repository that is used during internal Kestra unit tests and this has an incomplete API. Never use this repository for production.")])])}),[],!1,null,null,null);t.default=s.exports}}]);
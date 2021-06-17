(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{811:function(t,e,s){"use strict";s.r(e);var a=s(9),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",[s("img",{attrs:{width:"25",src:"data:image/svg+xml;base64,PHN2ZyBpZD0iUHJvZHVjdF9JY29ucyIgZGF0YS1uYW1lPSJQcm9kdWN0IEljb25zIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNhZWNiZmE7fS5jbHMtMSwuY2xzLTIsLmNscy0ze2ZpbGwtcnVsZTpldmVub2RkO30uY2xzLTJ7ZmlsbDojNjY5ZGY2O30uY2xzLTN7ZmlsbDojNDI4NWY0O308L3N0eWxlPjwvZGVmcz48dGl0bGU+SWNvbl8yNHB4X0NvbG9yX0JpZ1F1ZXJ5PC90aXRsZT48ZyBpZD0iU2hhcGUiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTYuNzMsMTAuODN2Mi42M0E0LjkxLDQuOTEsMCwwLDAsOC40NCwxNS4yVjEwLjgzWiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTkuODksOC40MXY3LjUzQTcuNjIsNy42MiwwLDAsMCwxMSwxNiw4LDgsMCwwLDAsMTIsMTZWOC40MVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMy42NCwxMS44NnYzLjI5YTUsNSwwLDAsMCwxLjctMS44MlYxMS44NloiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0xNy43NCwxNi4zMmwtMS40MiwxLjQyYS40Mi40MiwwLDAsMCwwLC42bDMuNTQsMy41NGEuNDIuNDIsMCwwLDAsLjU5LDBsMS40My0xLjQzYS40Mi40MiwwLDAsMCwwLS41OWwtMy41NC0zLjU0YS40Mi40MiwwLDAsMC0uNiwwIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTEsMmE5LDksMCwxLDAsOSw5LDksOSwwLDAsMC05LTltMCwxNS42OUE2LjY4LDYuNjgsMCwxLDEsMTcuNjksMTEsNi42OCw2LjY4LDAsMCwxLDExLDE3LjY5Ii8+PC9nPjwvc3ZnPg==",alt:"StorageWrite"}}),t._v(" StorageWrite\n")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.kestra.plugin.gcp.bigquery.StorageWrite"')]),t._v("\n")])])]),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"storage_write"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.kestra.plugin.gcp.bigquery.StorageWrite"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{ outputs.read.uri }}"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("destinationTable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my_project.my_dataset.my_table"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("writeStreamType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DEFAULT\n")])])]),s("h2",{attrs:{id:"properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),s("h3",{attrs:{id:"buffersize"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#buffersize"}},[t._v("#")]),t._v(" "),s("code",[t._v("bufferSize")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("integer")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),s("li",[s("strong",[t._v("Default:")]),t._v(" "),s("code",[t._v("1000")])])]),t._v(" "),s("blockquote",[s("p",[t._v("The number of records to send on each query")])]),t._v(" "),s("h3",{attrs:{id:"destinationtable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#destinationtable"}},[t._v("#")]),t._v(" "),s("code",[t._v("destinationTable")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),s("li",[s("strong",[t._v("Min length:")]),t._v(" "),s("code",[t._v("1")])])]),t._v(" "),s("blockquote",[s("p",[t._v("The table where to load data")])]),t._v(" "),s("p",[t._v("The table must be created beefore.")]),t._v(" "),s("h3",{attrs:{id:"from"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#from"}},[t._v("#")]),t._v(" "),s("code",[t._v("from")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("The fully-qualified URIs that point to source data")])]),t._v(" "),s("h3",{attrs:{id:"location"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#location"}},[t._v("#")]),t._v(" "),s("code",[t._v("location")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("The geographic location where the dataset should reside")])]),t._v(" "),s("p",[t._v("This property is experimental and might be subject to change or removed.")]),t._v(" "),s("p",[t._v("See "),s("a",{attrs:{href:"https://cloud.google.com/bigquery/docs/reference/v2/datasets#location"}},[t._v("Dataset Location")])]),t._v(" "),s("h3",{attrs:{id:"projectid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#projectid"}},[t._v("#")]),t._v(" "),s("code",[t._v("projectId")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("The GCP project id")])]),t._v(" "),s("h3",{attrs:{id:"scopes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scopes"}},[t._v("#")]),t._v(" "),s("code",[t._v("scopes")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("array")])]),t._v(" "),s("li",[s("strong",[t._v("SubType:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),s("li",[s("strong",[t._v("Default:")]),t._v(" "),s("code",[t._v("[https://www.googleapis.com/auth/cloud-platform]")])])]),t._v(" "),s("blockquote",[s("p",[t._v("The GCP scopes to used")])]),t._v(" "),s("h3",{attrs:{id:"serviceaccount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#serviceaccount"}},[t._v("#")]),t._v(" "),s("code",[t._v("serviceAccount")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("The GCP service account key")])]),t._v(" "),s("h3",{attrs:{id:"writestreamtype"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#writestreamtype"}},[t._v("#")]),t._v(" "),s("code",[t._v("writeStreamType")])]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Dynamic:")]),t._v(" ❓")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Default:")]),t._v(" "),s("code",[t._v("DEFAULT")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Possible Values:")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("DEFAULT")])]),t._v(" "),s("li",[s("code",[t._v("COMMITTED")])]),t._v(" "),s("li",[s("code",[t._v("PENDING")])])])])]),t._v(" "),s("blockquote",[s("p",[t._v("The type of write stream to use")])]),t._v(" "),s("h2",{attrs:{id:"outputs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" Outputs")]),t._v(" "),s("h3",{attrs:{id:"committime"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#committime"}},[t._v("#")]),t._v(" "),s("code",[t._v("commitTime")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])])]),t._v(" "),s("blockquote",[s("p",[t._v("Commit time reported by BigQuery, only on "),s("code",[t._v("PENDING")]),t._v(" writeStreamType")])]),t._v(" "),s("h3",{attrs:{id:"rows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rows"}},[t._v("#")]),t._v(" "),s("code",[t._v("rows")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("integer")])])]),t._v(" "),s("blockquote",[s("p",[t._v("Rows count")])]),t._v(" "),s("h3",{attrs:{id:"rowscount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rowscount"}},[t._v("#")]),t._v(" "),s("code",[t._v("rowsCount")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("integer")])])]),t._v(" "),s("blockquote",[s("p",[t._v("Rows count reported by BigQuery, only on "),s("code",[t._v("PENDING")]),t._v(" writeStreamType")])])])}),[],!1,null,null,null);e.default=r.exports}}]);
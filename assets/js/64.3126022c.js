(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{477:function(t,s,a){"use strict";a.r(s);var e=a(25),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"bash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bash"}},[t._v("#")]),t._v(" Bash")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.kestra.core.tasks.scripts.Bash"')]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("Execute a Bash script, command or set of commands.")])]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("blockquote",[a("p",[t._v("Single bash command")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bash"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.kestra.core.tasks.scripts.Bash"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("commands")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('echo "The current execution is')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("execution.id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v('"\n')])])]),a("blockquote",[a("p",[t._v("Bash command that generate file in storage accessible through outputs")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bash"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.kestra.core.tasks.scripts.Bash"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("outputsFiles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" first\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" second\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("commands")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(' echo "1" '),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" outputFiles.first "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(' echo "2" '),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" outputFiles.second "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("Bash with some inputs files")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bash"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.kestra.core.tasks.scripts.Bash"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputsFiles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script.sh")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n    echo {{ workingDir }}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("commands")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /bin/bash script.sh\n")])])]),a("h2",{attrs:{id:"inputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),a("h3",{attrs:{id:"commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commands"}},[t._v("#")]),t._v(" "),a("code",[t._v("commands")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Min items:")]),t._v(" "),a("code",[t._v("1")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The commands to run")])]),t._v(" "),a("p",[t._v("Default command will be launched with "),a("code",[t._v('/bin/sh -c "commands"')])]),t._v(" "),a("h3",{attrs:{id:"exitonfailed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exitonfailed"}},[t._v("#")]),t._v(" "),a("code",[t._v("exitOnFailed")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("boolean")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("true")])])]),t._v(" "),a("blockquote",[a("p",[t._v("Exit if any non true return value")])]),t._v(" "),a("p",[t._v("This tells bash that it should exit the script if any statement returns a non-true return value."),a("br"),t._v("\nThe benefit of using -e is that it prevents errors snowballing into serious issues when they could have been caught earlier.")]),t._v(" "),a("h3",{attrs:{id:"files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#files"}},[t._v("#")]),t._v(" "),a("code",[t._v("files")])]),t._v(" "),a("p",[t._v("🔒 "),a("em",[t._v("Deprecated")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The list of files that will be uploaded to internal storage,")])]),t._v(" "),a("p",[t._v("/!\\deprecated property, use "),a("code",[t._v("outputsFiles")]),t._v(" property instead")]),t._v(" "),a("h3",{attrs:{id:"inputfiles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inputfiles"}},[t._v("#")]),t._v(" "),a("code",[t._v("inputFiles")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("object")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Input files are extra files supplied by user that make it simpler organize code.")])]),t._v(" "),a("p",[t._v("Describe a files map that will be written and usable in execution context. In python execution context is in a temp folder, for bash scripts, you can reach files using a inputsDirectory variable like 'source "+t._s(t.inputsDirectory)+"/myfile.sh'")]),t._v(" "),a("h3",{attrs:{id:"interpreter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interpreter"}},[t._v("#")]),t._v(" "),a("code",[t._v("interpreter")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("/bin/sh")])]),t._v(" "),a("li",[a("strong",[t._v("Min length:")]),t._v(" "),a("code",[t._v("1")])])]),t._v(" "),a("p",[t._v("Interpreter to used")]),t._v(" "),a("h3",{attrs:{id:"interpreterargs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interpreterargs"}},[t._v("#")]),t._v(" "),a("code",[t._v("interpreterArgs")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("[-c]")])])]),t._v(" "),a("blockquote",[a("p",[t._v("Interpreter args used")])]),t._v(" "),a("h3",{attrs:{id:"outputsfiles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outputsfiles"}},[t._v("#")]),t._v(" "),a("code",[t._v("outputsFiles")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Output file list that will be uploaded to internal storage")])]),t._v(" "),a("p",[t._v("List of key that will generate temporary files."),a("br"),t._v("\nOn the command, just can use with special variable named "),a("code",[t._v("outputFiles.key")]),t._v("."),a("br"),t._v("\nIf you add a files with "),a("code",[t._v('["first"]')]),t._v(", you can use the special vars "),a("code",[t._v("echo 1 >> {[ outputFiles.first }}")]),t._v(" and you used on others tasks using "),a("code",{pre:!0},[t._v("{{  outputs.task-id.files.first  }}")])]),t._v(" "),a("h2",{attrs:{id:"outputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" Outputs")]),t._v(" "),a("h3",{attrs:{id:"exitcode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exitcode"}},[t._v("#")]),t._v(" "),a("code",[t._v("exitCode")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("integer")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The exit code of the whole execution")])]),t._v(" "),a("h3",{attrs:{id:"files-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#files-2"}},[t._v("#")]),t._v(" "),a("code",[t._v("files")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("object")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("object")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The output files uri in Kestra internal storage")])]),t._v(" "),a("h3",{attrs:{id:"stderr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stderr"}},[t._v("#")]),t._v(" "),a("code",[t._v("stdErr")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("string")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The standard error of the commands")])]),t._v(" "),a("h3",{attrs:{id:"stdout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stdout"}},[t._v("#")]),t._v(" "),a("code",[t._v("stdOut")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("string")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The standard output of the commands")])])])}),[],!1,null,null,null);s.default=r.exports}}]);
"use strict";(self.webpackChunkprem_docs=self.webpackChunkprem_docs||[]).push([[9299],{10748:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var l=a(67294),n=a(51048);function i(e){let{children:t,fallback:a}=e;return(0,n.default)()?l.createElement(l.Fragment,null,t?.()):a??null}},22494:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=l(a(67294)),i=l(a(10748)),r=a(81668);function s(e){switch(e.toLowerCase()){case"get":return"primary";case"post":return"success";case"delete":return"danger";case"put":return"info";case"patch":return"warning";case"head":case"event":return"secondary";default:return}}t.default=function(e){let{method:t,path:a}=e,l=(0,r.useTypedSelector)((e=>e.server.value)),o="";return n.default.createElement(n.default.Fragment,null,n.default.createElement("pre",{className:"openapi__method-endpoint"},n.default.createElement("span",{className:"badge badge--"+s(t)},t.toUpperCase())," ",n.default.createElement("h2",{className:"openapi__method-endpoint-path"},(l&&l.variables&&(o=l.url.replace(/\/$/,""),Object.keys(l.variables).forEach((e=>{o=o.replace(`{${e}}`,l.variables?.[e].default??"")}))),n.default.createElement(i.default,null,(()=>o.length?o:l&&l.url?l.url:void 0))),`${a.replace(/{([a-z0-9-_]+)}/gi,":$1")}`)),n.default.createElement("div",{className:"openapi__divider"}))}},83257:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=l(a(67294)),i=l(a(83699)),r=a(81668);t.default=function(e){const t=(0,r.useTypedSelector)((e=>e.auth.options)),a=(0,r.useTypedSelector)((e=>e.auth.selected)),l=`/${e.infoPath}#authentication`;if(void 0===a)return null;if(void 0===t[a]?.[0]?.type)return null;const s=t[a];return n.default.createElement("details",{className:"openapi-security__details",open:!1},n.default.createElement("summary",{className:"openapi-security__summary-container"},n.default.createElement("h4",{className:"openapi-security__summary-header"},"Authorization: ",s[0].name??s[0].type)),s.map((e=>{const t="http"===e.type,r="apiKey"===e.type,s="oauth2"===e.type,o="openIdConnect"===e.type;if(t){if("bearer"===e.scheme){const{name:t,key:a,type:r,scopes:s,...o}=e;return n.default.createElement(n.default.Fragment,{key:e.key},n.default.createElement("pre",{style:{display:"flex",flexDirection:"column",background:"var(--openapi-card-background-color)"}},n.default.createElement("span",null,n.default.createElement("strong",null,"name:")," ",n.default.createElement(i.default,{to:l},t??a)),n.default.createElement("span",null,n.default.createElement("strong",null,"type: "),r),s&&s.length>0&&n.default.createElement("span",null,n.default.createElement("strong",null,"scopes: "),n.default.createElement("code",null,e.scopes.length>0?e.scopes.toString():"[]")),Object.keys(o).map(((e,t)=>n.default.createElement("span",{key:e},n.default.createElement("strong",null,e,": "),"object"==typeof o[e]?JSON.stringify(o[e],null,2):String(o[e]))))))}if("basic"===e.scheme){const{name:t,key:a,type:r,scopes:s,...o}=e;return n.default.createElement(n.default.Fragment,{key:e.key},n.default.createElement("pre",{style:{display:"flex",flexDirection:"column",background:"var(--openapi-card-background-color)"}},n.default.createElement("span",null,n.default.createElement("strong",null,"name:")," ",n.default.createElement(i.default,{to:l},t??a)),n.default.createElement("span",null,n.default.createElement("strong",null,"type: "),r),s&&s.length>0&&n.default.createElement("span",null,n.default.createElement("strong",null,"scopes: "),n.default.createElement("code",null,e.scopes.length>0?e.scopes.toString():"[]")),Object.keys(o).map(((e,t)=>n.default.createElement("span",{key:e},n.default.createElement("strong",null,e,": "),"object"==typeof o[e]?JSON.stringify(o[e],null,2):String(o[e]))))))}return n.default.createElement(n.default.Fragment,{key:e.key},n.default.createElement("pre",{style:{display:"flex",flexDirection:"column",background:"var(--openapi-card-background-color)"}},n.default.createElement("span",null,n.default.createElement("strong",null,"name:")," ",n.default.createElement(i.default,{to:l},e.name??e.key)),n.default.createElement("span",null,n.default.createElement("strong",null,"type: "),e.type),n.default.createElement("span",null,n.default.createElement("strong",null,"in: "),e.in)))}if(r){const{name:t,key:a,type:r,scopes:s,...o}=e;return n.default.createElement(n.default.Fragment,{key:e.key},n.default.createElement("pre",{style:{display:"flex",flexDirection:"column",background:"var(--openapi-card-background-color)"}},n.default.createElement("span",null,n.default.createElement("strong",null,"name:")," ",n.default.createElement(i.default,{to:l},t??a)),n.default.createElement("span",null,n.default.createElement("strong",null,"type: "),r),s&&s.length>0&&n.default.createElement("span",null,n.default.createElement("strong",null,"scopes: "),n.default.createElement("code",null,e.scopes.length>0?e.scopes.toString():"[]")),Object.keys(o).map(((e,t)=>n.default.createElement("span",{key:e},n.default.createElement("strong",null,e,": "),"object"==typeof o[e]?JSON.stringify(o[e],null,2):String(o[e]))))))}if(s){const{name:t,key:r,type:s,scopes:o,flows:m,...p}=e;return n.default.createElement(n.default.Fragment,{key:a},n.default.createElement("pre",{style:{display:"flex",flexDirection:"column",background:"var(--openapi-card-background-color)"}},n.default.createElement("span",null,n.default.createElement("strong",null,"name:")," ",n.default.createElement(i.default,{to:l},t??r)),n.default.createElement("span",null,n.default.createElement("strong",null,"type: "),s),o&&o.length>0&&n.default.createElement("span",null,n.default.createElement("strong",null,"scopes: "),n.default.createElement("code",null,e.scopes.length>0?e.scopes.toString():"[]")),Object.keys(p).map(((e,t)=>n.default.createElement("span",{key:e},n.default.createElement("strong",null,e,": "),"object"==typeof p[e]?JSON.stringify(p[e],null,2):String(p[e])))),m&&n.default.createElement("span",null,n.default.createElement("code",null,n.default.createElement("strong",null,"flows: "),JSON.stringify(m,null,2)))))}if(o){const{name:t,key:a,scopes:r,type:s,...o}=e;return n.default.createElement(n.default.Fragment,{key:e.key},n.default.createElement("pre",{style:{display:"flex",flexDirection:"column",background:"var(--openapi-card-background-color)"}},n.default.createElement("span",null,n.default.createElement("strong",null,"name:")," ",n.default.createElement(i.default,{to:l},t??a)),n.default.createElement("span",null,n.default.createElement("strong",null,"type: "),s),r&&r.length>0&&n.default.createElement("span",null,n.default.createElement("strong",null,"scopes: "),n.default.createElement("code",null,e.scopes.length>0?e.scopes.toString():"[]")),Object.keys(o).map(((e,t)=>n.default.createElement("span",{key:e},n.default.createElement("strong",null,e,": "),"object"==typeof o[e]?JSON.stringify(o[e],null,2):String(o[e]))))))}})))}},77105:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>f,default:()=>x,frontMatter:()=>g,metadata:()=>h,toc:()=>v});var l=a(87462),n=(a(67294),a(3905)),i=a(55410),r=(a(44646),a(22494)),s=a.n(r),o=a(83257),m=a.n(o),p=a(90502),d=(a(23091),a(43296)),c=a(24386),u=a(65254),y=a(18679);const g={id:"add-service-v-1-services-post",title:"Add Service",description:"Add Service",sidebar_label:"Add Service",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"add_service_v1_services__post",requestBody:{content:{"application/json":{schema:{title:"ServiceInput",required:["id","name","modelInfo","interfaces","dockerImages","defaultPort","defaultExternalPort"],type:"object",properties:{id:{title:"Id",type:"string"},name:{title:"Name",type:"string"},modelInfo:{title:"Modelinfo",type:"object"},interfaces:{title:"Interfaces",type:"array",items:{type:"string"}},dockerImages:{title:"Dockerimages",type:"object"},defaultPort:{title:"Defaultport",type:"integer"},defaultExternalPort:{title:"Defaultexternalport",type:"integer"},runningPort:{title:"Runningport",type:"integer"},volumePath:{title:"Volumepath",type:"string"},volumeName:{title:"Volumename",type:"string"},envVariables:{title:"Envvariables",type:"array",items:{type:"string"}},promptTemplate:{title:"Prompttemplate",type:"string"}}}}},required:!0},responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"ServiceResponse",required:["id","name","modelInfo","interfaces","dockerImage","dockerImageSize","defaultPort","defaultExternalPort","running","downloaded","supported"],type:"object",properties:{id:{title:"Id",type:"string"},name:{title:"Name",type:"string"},description:{title:"Description",type:"string"},documentation:{title:"Documentation",type:"string"},icon:{title:"Icon",type:"string"},modelInfo:{title:"Modelinfo",type:"object"},interfaces:{title:"Interfaces",type:"array",items:{type:"string"}},dockerImage:{title:"Dockerimage",type:"string"},dockerImageSize:{title:"Dockerimagesize",type:"integer"},defaultPort:{title:"Defaultport",type:"integer"},defaultExternalPort:{title:"Defaultexternalport",type:"integer"},runningPort:{title:"Runningport",type:"integer"},volumePath:{title:"Volumepath",type:"string"},volumeName:{title:"Volumename",type:"string"},running:{title:"Running",type:"boolean"},downloaded:{title:"Downloaded",type:"boolean"},downloadedDockerImage:{title:"Downloadeddockerimage",type:"string"},needsUpdate:{title:"Needsupdate",type:"boolean",default:!1},supported:{title:"Supported",type:"boolean"},enoughMemory:{title:"Enoughmemory",type:"boolean",default:!0},enoughSystemMemory:{title:"Enoughsystemmemory",type:"boolean",default:!0},beta:{title:"Beta",type:"boolean",default:!1},comingSoon:{title:"Comingsoon",type:"boolean",default:!1},envVariables:{title:"Envvariables",type:"array",items:{type:"string"}},execCommands:{title:"Execcommands",type:"array",items:{type:"string"}},promptTemplate:{title:"Prompttemplate",type:"string"}}}}}},400:{description:"Failed to stop container or service not found.",content:{"application/json":{schema:{title:"ErrorResponse",required:["message"],type:"object",properties:{message:{title:"Message",type:"string"}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},description:"Add Service",method:"post",path:"/v1/services/",jsonRequestBodyExample:{id:"string",name:"string",modelInfo:{},interfaces:["string"],dockerImages:{},defaultPort:0,defaultExternalPort:0,runningPort:0,volumePath:"string",volumeName:"string",envVariables:["string"],promptTemplate:"string"},info:{title:"Prem Daemon",description:"Swagger Documentation for Prem Daemon APIs.",version:"0.0.1"},postman:{name:"Add Service",description:{type:"text/plain"},url:{path:["v1","services",""],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/prem-daemon/api/prem-daemon",custom_edit_url:null},f=void 0,h={unversionedId:"prem-daemon/api/add-service-v-1-services-post",id:"prem-daemon/api/add-service-v-1-services-post",title:"Add Service",description:"Add Service",source:"@site/docs/prem-daemon/api/add-service-v-1-services-post.api.mdx",sourceDirName:"prem-daemon/api",slug:"/prem-daemon/api/add-service-v-1-services-post",permalink:"/docs/prem-daemon/api/add-service-v-1-services-post",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"add-service-v-1-services-post",title:"Add Service",description:"Add Service",sidebar_label:"Add Service",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"add_service_v1_services__post",requestBody:{content:{"application/json":{schema:{title:"ServiceInput",required:["id","name","modelInfo","interfaces","dockerImages","defaultPort","defaultExternalPort"],type:"object",properties:{id:{title:"Id",type:"string"},name:{title:"Name",type:"string"},modelInfo:{title:"Modelinfo",type:"object"},interfaces:{title:"Interfaces",type:"array",items:{type:"string"}},dockerImages:{title:"Dockerimages",type:"object"},defaultPort:{title:"Defaultport",type:"integer"},defaultExternalPort:{title:"Defaultexternalport",type:"integer"},runningPort:{title:"Runningport",type:"integer"},volumePath:{title:"Volumepath",type:"string"},volumeName:{title:"Volumename",type:"string"},envVariables:{title:"Envvariables",type:"array",items:{type:"string"}},promptTemplate:{title:"Prompttemplate",type:"string"}}}}},required:!0},responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"ServiceResponse",required:["id","name","modelInfo","interfaces","dockerImage","dockerImageSize","defaultPort","defaultExternalPort","running","downloaded","supported"],type:"object",properties:{id:{title:"Id",type:"string"},name:{title:"Name",type:"string"},description:{title:"Description",type:"string"},documentation:{title:"Documentation",type:"string"},icon:{title:"Icon",type:"string"},modelInfo:{title:"Modelinfo",type:"object"},interfaces:{title:"Interfaces",type:"array",items:{type:"string"}},dockerImage:{title:"Dockerimage",type:"string"},dockerImageSize:{title:"Dockerimagesize",type:"integer"},defaultPort:{title:"Defaultport",type:"integer"},defaultExternalPort:{title:"Defaultexternalport",type:"integer"},runningPort:{title:"Runningport",type:"integer"},volumePath:{title:"Volumepath",type:"string"},volumeName:{title:"Volumename",type:"string"},running:{title:"Running",type:"boolean"},downloaded:{title:"Downloaded",type:"boolean"},downloadedDockerImage:{title:"Downloadeddockerimage",type:"string"},needsUpdate:{title:"Needsupdate",type:"boolean",default:!1},supported:{title:"Supported",type:"boolean"},enoughMemory:{title:"Enoughmemory",type:"boolean",default:!0},enoughSystemMemory:{title:"Enoughsystemmemory",type:"boolean",default:!0},beta:{title:"Beta",type:"boolean",default:!1},comingSoon:{title:"Comingsoon",type:"boolean",default:!1},envVariables:{title:"Envvariables",type:"array",items:{type:"string"}},execCommands:{title:"Execcommands",type:"array",items:{type:"string"}},promptTemplate:{title:"Prompttemplate",type:"string"}}}}}},400:{description:"Failed to stop container or service not found.",content:{"application/json":{schema:{title:"ErrorResponse",required:["message"],type:"object",properties:{message:{title:"Message",type:"string"}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},description:"Add Service",method:"post",path:"/v1/services/",jsonRequestBodyExample:{id:"string",name:"string",modelInfo:{},interfaces:["string"],dockerImages:{},defaultPort:0,defaultExternalPort:0,runningPort:0,volumePath:"string",volumeName:"string",envVariables:["string"],promptTemplate:"string"},info:{title:"Prem Daemon",description:"Swagger Documentation for Prem Daemon APIs.",version:"0.0.1"},postman:{name:"Add Service",description:{type:"text/plain"},url:{path:["v1","services",""],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/prem-daemon/api/prem-daemon",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Add Registry",permalink:"/docs/prem-daemon/api/add-registry-v-1-registries-post"},next:{title:"Apps",permalink:"/docs/prem-daemon/api/apps-v-1-interfaces-get"}},k={},v=[{value:"Request",id:"request",level:2}],b={toc:v},E="wrapper";function x(e){let{components:t,...a}=e;return(0,n.kt)(E,(0,l.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"Add Service"),(0,n.kt)(s(),{method:"post",path:"/v1/services/",mdxType:"MethodEndpoint"}),(0,n.kt)(m(),{infoPath:"docs/prem-daemon/api/prem-daemon",mdxType:"SecuritySchemes"}),(0,n.kt)("p",null,"Add Service"),(0,n.kt)("h2",{id:"request"},"Request"),(0,n.kt)(p.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,n.kt)(y.default,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,n.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,n.kt)("strong",{className:"openapi-schema__required"},"required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(c.Z,{collapsible:!1,name:"id",required:!0,schemaName:"Id",qualifierMessage:void 0,schema:{title:"Id",type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"Name",qualifierMessage:void 0,schema:{title:"Name",type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"modelInfo",required:!0,schemaName:"object",qualifierMessage:void 0,schema:{title:"Modelinfo",type:"object"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"interfaces",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{title:"Interfaces",type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"dockerImages",required:!0,schemaName:"object",qualifierMessage:void 0,schema:{title:"Dockerimages",type:"object"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"defaultPort",required:!0,schemaName:"Defaultport",qualifierMessage:void 0,schema:{title:"Defaultport",type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"defaultExternalPort",required:!0,schemaName:"Defaultexternalport",qualifierMessage:void 0,schema:{title:"Defaultexternalport",type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"runningPort",required:!1,schemaName:"Runningport",qualifierMessage:void 0,schema:{title:"Runningport",type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"volumePath",required:!1,schemaName:"Volumepath",qualifierMessage:void 0,schema:{title:"Volumepath",type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"volumeName",required:!1,schemaName:"Volumename",qualifierMessage:void 0,schema:{title:"Volumename",type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"envVariables",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{title:"Envvariables",type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"promptTemplate",required:!1,schemaName:"Prompttemplate",qualifierMessage:void 0,schema:{title:"Prompttemplate",type:"string"},mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(i.Z,{mdxType:"ApiTabs"},(0,n.kt)(y.default,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Successful Response")),(0,n.kt)("div",null,(0,n.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(y.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(y.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(c.Z,{collapsible:!1,name:"id",required:!0,schemaName:"Id",qualifierMessage:void 0,schema:{title:"Id",type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"Name",qualifierMessage:void 0,schema:{title:"Name",type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"description",required:!1,schemaName:"Description",qualifierMessage:void 0,schema:{title:"Description",type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"documentation",required:!1,schemaName:"Documentation",qualifierMessage:void 0,schema:{title:"Documentation",type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"icon",required:!1,schemaName:"Icon",qualifierMessage:void 0,schema:{title:"Icon",type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"modelInfo",required:!0,schemaName:"object",qualifierMessage:void 0,schema:{title:"Modelinfo",type:"object"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"interfaces",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{title:"Interfaces",type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"dockerImage",required:!0,schemaName:"Dockerimage",qualifierMessage:void 0,schema:{title:"Dockerimage",type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"dockerImageSize",required:!0,schemaName:"Dockerimagesize",qualifierMessage:void 0,schema:{title:"Dockerimagesize",type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"defaultPort",required:!0,schemaName:"Defaultport",qualifierMessage:void 0,schema:{title:"Defaultport",type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"defaultExternalPort",required:!0,schemaName:"Defaultexternalport",qualifierMessage:void 0,schema:{title:"Defaultexternalport",type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"runningPort",required:!1,schemaName:"Runningport",qualifierMessage:void 0,schema:{title:"Runningport",type:"integer"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"volumePath",required:!1,schemaName:"Volumepath",qualifierMessage:void 0,schema:{title:"Volumepath",type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"volumeName",required:!1,schemaName:"Volumename",qualifierMessage:void 0,schema:{title:"Volumename",type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"running",required:!0,schemaName:"Running",qualifierMessage:void 0,schema:{title:"Running",type:"boolean"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"downloaded",required:!0,schemaName:"Downloaded",qualifierMessage:void 0,schema:{title:"Downloaded",type:"boolean"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"downloadedDockerImage",required:!1,schemaName:"Downloadeddockerimage",qualifierMessage:void 0,schema:{title:"Downloadeddockerimage",type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"needsUpdate",required:!1,schemaName:"Needsupdate",qualifierMessage:void 0,schema:{title:"Needsupdate",type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"supported",required:!0,schemaName:"Supported",qualifierMessage:void 0,schema:{title:"Supported",type:"boolean"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"enoughMemory",required:!1,schemaName:"Enoughmemory",qualifierMessage:void 0,schema:{title:"Enoughmemory",type:"boolean",default:!0},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"enoughSystemMemory",required:!1,schemaName:"Enoughsystemmemory",qualifierMessage:void 0,schema:{title:"Enoughsystemmemory",type:"boolean",default:!0},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"beta",required:!1,schemaName:"Beta",qualifierMessage:void 0,schema:{title:"Beta",type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"comingSoon",required:!1,schemaName:"Comingsoon",qualifierMessage:void 0,schema:{title:"Comingsoon",type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"envVariables",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{title:"Envvariables",type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"execCommands",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{title:"Execcommands",type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"promptTemplate",required:!1,schemaName:"Prompttemplate",qualifierMessage:void 0,schema:{title:"Prompttemplate",type:"string"},mdxType:"SchemaItem"})))),(0,n.kt)(y.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(d.Z,{responseExample:'{\n  "id": "string",\n  "name": "string",\n  "description": "string",\n  "documentation": "string",\n  "icon": "string",\n  "modelInfo": {},\n  "interfaces": [\n    "string"\n  ],\n  "dockerImage": "string",\n  "dockerImageSize": 0,\n  "defaultPort": 0,\n  "defaultExternalPort": 0,\n  "runningPort": 0,\n  "volumePath": "string",\n  "volumeName": "string",\n  "running": true,\n  "downloaded": true,\n  "downloadedDockerImage": "string",\n  "needsUpdate": false,\n  "supported": true,\n  "enoughMemory": true,\n  "enoughSystemMemory": true,\n  "beta": false,\n  "comingSoon": false,\n  "envVariables": [\n    "string"\n  ],\n  "execCommands": [\n    "string"\n  ],\n  "promptTemplate": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(y.default,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Failed to stop container or service not found.")),(0,n.kt)("div",null,(0,n.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(y.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(y.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(c.Z,{collapsible:!1,name:"message",required:!0,schemaName:"Message",qualifierMessage:void 0,schema:{title:"Message",type:"string"},mdxType:"SchemaItem"})))),(0,n.kt)(y.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(d.Z,{responseExample:'{\n  "message": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(y.default,{label:"422",value:"422",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Validation Error")),(0,n.kt)("div",null,(0,n.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(y.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(y.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("span",{className:"openapi-schema__container"},(0,n.kt)("strong",{className:"openapi-schema__property"},"detail"),(0,n.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("span",{className:"openapi-schema__container"},(0,n.kt)("strong",{className:"openapi-schema__property"},"loc"),(0,n.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,n.kt)("span",{className:"openapi-schema__divider"}),(0,n.kt)("span",{className:"openapi-schema__required"},"required"))),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)("div",null,(0,n.kt)("span",{className:"badge badge--info"},"anyOf"),(0,n.kt)(u.default,{mdxType:"SchemaTabs"},(0,n.kt)(y.default,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"string")))),(0,n.kt)(y.default,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"integer")))))),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,n.kt)(c.Z,{collapsible:!1,name:"msg",required:!0,schemaName:"Message",qualifierMessage:void 0,schema:{title:"Message",type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"type",required:!0,schemaName:"Error Type",qualifierMessage:void 0,schema:{title:"Error Type",type:"string"},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,n.kt)(y.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(d.Z,{responseExample:'{\n  "detail": [\n    {\n      "loc": [\n        "string",\n        0\n      ],\n      "msg": "string",\n      "type": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}x.isMDXComponent=!0}}]);
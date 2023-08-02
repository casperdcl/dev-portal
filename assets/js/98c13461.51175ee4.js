"use strict";(self.webpackChunkprem_docs=self.webpackChunkprem_docs||[]).push([[627],{10748:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});var l=a(67294),n=a(51048);function s(e){let{children:t,fallback:a}=e;return(0,n.default)()?l.createElement(l.Fragment,null,t?.()):a??null}},22494:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=l(a(67294)),s=l(a(10748)),r=a(81668);function i(e){switch(e.toLowerCase()){case"get":return"primary";case"post":return"success";case"delete":return"danger";case"put":return"info";case"patch":return"warning";case"head":case"event":return"secondary";default:return}}t.default=function(e){let{method:t,path:a}=e,l=(0,r.useTypedSelector)((e=>e.server.value)),o="";return n.default.createElement(n.default.Fragment,null,n.default.createElement("pre",{className:"openapi__method-endpoint"},n.default.createElement("span",{className:"badge badge--"+i(t)},t.toUpperCase())," ",n.default.createElement("h2",{className:"openapi__method-endpoint-path"},(l&&l.variables&&(o=l.url.replace(/\/$/,""),Object.keys(l.variables).forEach((e=>{o=o.replace(`{${e}}`,l.variables?.[e].default??"")}))),n.default.createElement(s.default,null,(()=>o.length?o:l&&l.url?l.url:void 0))),`${a.replace(/{([a-z0-9-_]+)}/gi,":$1")}`)),n.default.createElement("div",{className:"openapi__divider"}))}},83257:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=l(a(67294)),s=l(a(83699)),r=a(81668);t.default=function(e){const t=(0,r.useTypedSelector)((e=>e.auth.options)),a=(0,r.useTypedSelector)((e=>e.auth.selected)),l=`/${e.infoPath}#authentication`;if(void 0===a)return null;if(void 0===t[a]?.[0]?.type)return null;const i=t[a];return n.default.createElement("details",{className:"openapi-security__details",open:!1},n.default.createElement("summary",{className:"openapi-security__summary-container"},n.default.createElement("h4",{className:"openapi-security__summary-header"},"Authorization: ",i[0].name??i[0].type)),i.map((e=>{const t="http"===e.type,r="apiKey"===e.type,i="oauth2"===e.type,o="openIdConnect"===e.type;if(t){if("bearer"===e.scheme){const{name:t,key:a,type:r,scopes:i,...o}=e;return n.default.createElement(n.default.Fragment,{key:e.key},n.default.createElement("pre",{style:{display:"flex",flexDirection:"column",background:"var(--openapi-card-background-color)"}},n.default.createElement("span",null,n.default.createElement("strong",null,"name:")," ",n.default.createElement(s.default,{to:l},t??a)),n.default.createElement("span",null,n.default.createElement("strong",null,"type: "),r),i&&i.length>0&&n.default.createElement("span",null,n.default.createElement("strong",null,"scopes: "),n.default.createElement("code",null,e.scopes.length>0?e.scopes.toString():"[]")),Object.keys(o).map(((e,t)=>n.default.createElement("span",{key:e},n.default.createElement("strong",null,e,": "),"object"==typeof o[e]?JSON.stringify(o[e],null,2):String(o[e]))))))}if("basic"===e.scheme){const{name:t,key:a,type:r,scopes:i,...o}=e;return n.default.createElement(n.default.Fragment,{key:e.key},n.default.createElement("pre",{style:{display:"flex",flexDirection:"column",background:"var(--openapi-card-background-color)"}},n.default.createElement("span",null,n.default.createElement("strong",null,"name:")," ",n.default.createElement(s.default,{to:l},t??a)),n.default.createElement("span",null,n.default.createElement("strong",null,"type: "),r),i&&i.length>0&&n.default.createElement("span",null,n.default.createElement("strong",null,"scopes: "),n.default.createElement("code",null,e.scopes.length>0?e.scopes.toString():"[]")),Object.keys(o).map(((e,t)=>n.default.createElement("span",{key:e},n.default.createElement("strong",null,e,": "),"object"==typeof o[e]?JSON.stringify(o[e],null,2):String(o[e]))))))}return n.default.createElement(n.default.Fragment,{key:e.key},n.default.createElement("pre",{style:{display:"flex",flexDirection:"column",background:"var(--openapi-card-background-color)"}},n.default.createElement("span",null,n.default.createElement("strong",null,"name:")," ",n.default.createElement(s.default,{to:l},e.name??e.key)),n.default.createElement("span",null,n.default.createElement("strong",null,"type: "),e.type),n.default.createElement("span",null,n.default.createElement("strong",null,"in: "),e.in)))}if(r){const{name:t,key:a,type:r,scopes:i,...o}=e;return n.default.createElement(n.default.Fragment,{key:e.key},n.default.createElement("pre",{style:{display:"flex",flexDirection:"column",background:"var(--openapi-card-background-color)"}},n.default.createElement("span",null,n.default.createElement("strong",null,"name:")," ",n.default.createElement(s.default,{to:l},t??a)),n.default.createElement("span",null,n.default.createElement("strong",null,"type: "),r),i&&i.length>0&&n.default.createElement("span",null,n.default.createElement("strong",null,"scopes: "),n.default.createElement("code",null,e.scopes.length>0?e.scopes.toString():"[]")),Object.keys(o).map(((e,t)=>n.default.createElement("span",{key:e},n.default.createElement("strong",null,e,": "),"object"==typeof o[e]?JSON.stringify(o[e],null,2):String(o[e]))))))}if(i){const{name:t,key:r,type:i,scopes:o,flows:p,...m}=e;return n.default.createElement(n.default.Fragment,{key:a},n.default.createElement("pre",{style:{display:"flex",flexDirection:"column",background:"var(--openapi-card-background-color)"}},n.default.createElement("span",null,n.default.createElement("strong",null,"name:")," ",n.default.createElement(s.default,{to:l},t??r)),n.default.createElement("span",null,n.default.createElement("strong",null,"type: "),i),o&&o.length>0&&n.default.createElement("span",null,n.default.createElement("strong",null,"scopes: "),n.default.createElement("code",null,e.scopes.length>0?e.scopes.toString():"[]")),Object.keys(m).map(((e,t)=>n.default.createElement("span",{key:e},n.default.createElement("strong",null,e,": "),"object"==typeof m[e]?JSON.stringify(m[e],null,2):String(m[e])))),p&&n.default.createElement("span",null,n.default.createElement("code",null,n.default.createElement("strong",null,"flows: "),JSON.stringify(p,null,2)))))}if(o){const{name:t,key:a,scopes:r,type:i,...o}=e;return n.default.createElement(n.default.Fragment,{key:e.key},n.default.createElement("pre",{style:{display:"flex",flexDirection:"column",background:"var(--openapi-card-background-color)"}},n.default.createElement("span",null,n.default.createElement("strong",null,"name:")," ",n.default.createElement(s.default,{to:l},t??a)),n.default.createElement("span",null,n.default.createElement("strong",null,"type: "),i),r&&r.length>0&&n.default.createElement("span",null,n.default.createElement("strong",null,"scopes: "),n.default.createElement("code",null,e.scopes.length>0?e.scopes.toString():"[]")),Object.keys(o).map(((e,t)=>n.default.createElement("span",{key:e},n.default.createElement("strong",null,e,": "),"object"==typeof o[e]?JSON.stringify(o[e],null,2):String(o[e]))))))}})))}},46258:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>g,default:()=>v,frontMatter:()=>f,metadata:()=>k,toc:()=>b});var l=a(87462),n=(a(67294),a(3905)),s=a(55410),r=(a(44646),a(22494)),i=a.n(r),o=a(83257),p=a.n(o),m=a(90502),d=(a(23091),a(43296)),c=a(24386),u=a(65254),y=a(18679);const f={id:"add-registry-v-1-registries-post",title:"Add Registry",description:"Add Registry",sidebar_label:"Add Registry",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"add_registry_v1_registries__post",requestBody:{content:{"application/json":{schema:{title:"RegistryInput",required:["url"],type:"object",properties:{url:{title:"Url",type:"string"}}}}},required:!0},responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"RegistryResponse",required:["url"],type:"object",properties:{url:{title:"Url",type:"string"}}}}}},400:{description:"Failed to stop container or service not found.",content:{"application/json":{schema:{title:"ErrorResponse",required:["message"],type:"object",properties:{message:{title:"Message",type:"string"}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},description:"Add Registry",method:"post",path:"/v1/registries/",jsonRequestBodyExample:{url:"string"},info:{title:"Prem Daemon",description:"Swagger Documentation for Prem Daemon APIs.",version:"0.0.1"},postman:{name:"Add Registry",description:{type:"text/plain"},url:{path:["v1","registries",""],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/prem-daemon/api/prem-daemon",custom_edit_url:null},g=void 0,k={unversionedId:"prem-daemon/api/add-registry-v-1-registries-post",id:"prem-daemon/api/add-registry-v-1-registries-post",title:"Add Registry",description:"Add Registry",source:"@site/docs/prem-daemon/api/add-registry-v-1-registries-post.api.mdx",sourceDirName:"prem-daemon/api",slug:"/prem-daemon/api/add-registry-v-1-registries-post",permalink:"/docs/prem-daemon/api/add-registry-v-1-registries-post",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"add-registry-v-1-registries-post",title:"Add Registry",description:"Add Registry",sidebar_label:"Add Registry",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"add_registry_v1_registries__post",requestBody:{content:{"application/json":{schema:{title:"RegistryInput",required:["url"],type:"object",properties:{url:{title:"Url",type:"string"}}}}},required:!0},responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"RegistryResponse",required:["url"],type:"object",properties:{url:{title:"Url",type:"string"}}}}}},400:{description:"Failed to stop container or service not found.",content:{"application/json":{schema:{title:"ErrorResponse",required:["message"],type:"object",properties:{message:{title:"Message",type:"string"}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},description:"Add Registry",method:"post",path:"/v1/registries/",jsonRequestBodyExample:{url:"string"},info:{title:"Prem Daemon",description:"Swagger Documentation for Prem Daemon APIs.",version:"0.0.1"},postman:{name:"Add Registry",description:{type:"text/plain"},url:{path:["v1","registries",""],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/prem-daemon/api/prem-daemon",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/prem-daemon/api/prem-daemon"},next:{title:"Add Service",permalink:"/docs/prem-daemon/api/add-service-v-1-services-post"}},h={},b=[{value:"Request",id:"request",level:2}],_={toc:b},E="wrapper";function v(e){let{components:t,...a}=e;return(0,n.kt)(E,(0,l.Z)({},_,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{className:"openapi__heading"},"Add Registry"),(0,n.kt)(i(),{method:"post",path:"/v1/registries/",mdxType:"MethodEndpoint"}),(0,n.kt)(p(),{infoPath:"docs/prem-daemon/api/prem-daemon",mdxType:"SecuritySchemes"}),(0,n.kt)("p",null,"Add Registry"),(0,n.kt)("h2",{id:"request"},"Request"),(0,n.kt)(m.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,n.kt)(y.default,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,n.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,n.kt)("strong",{className:"openapi-schema__required"},"required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(c.Z,{collapsible:!1,name:"url",required:!0,schemaName:"Url",qualifierMessage:void 0,schema:{title:"Url",type:"string"},mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(y.default,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Successful Response")),(0,n.kt)("div",null,(0,n.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(y.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(y.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(c.Z,{collapsible:!1,name:"url",required:!0,schemaName:"Url",qualifierMessage:void 0,schema:{title:"Url",type:"string"},mdxType:"SchemaItem"})))),(0,n.kt)(y.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(d.Z,{responseExample:'{\n  "url": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(y.default,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Failed to stop container or service not found.")),(0,n.kt)("div",null,(0,n.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(y.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(y.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(c.Z,{collapsible:!1,name:"message",required:!0,schemaName:"Message",qualifierMessage:void 0,schema:{title:"Message",type:"string"},mdxType:"SchemaItem"})))),(0,n.kt)(y.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(d.Z,{responseExample:'{\n  "message": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(y.default,{label:"422",value:"422",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Validation Error")),(0,n.kt)("div",null,(0,n.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(y.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,n.kt)(y.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("span",{className:"openapi-schema__container"},(0,n.kt)("strong",{className:"openapi-schema__property"},"detail"),(0,n.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{},className:"openapi-markdown__details"},(0,n.kt)("summary",{style:{}},(0,n.kt)("span",{className:"openapi-schema__container"},(0,n.kt)("strong",{className:"openapi-schema__property"},"loc"),(0,n.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,n.kt)("span",{className:"openapi-schema__divider"}),(0,n.kt)("span",{className:"openapi-schema__required"},"required"))),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)("div",null,(0,n.kt)("span",{className:"badge badge--info"},"anyOf"),(0,n.kt)(u.default,{mdxType:"SchemaTabs"},(0,n.kt)(y.default,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"string")))),(0,n.kt)(y.default,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"integer")))))),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,n.kt)(c.Z,{collapsible:!1,name:"msg",required:!0,schemaName:"Message",qualifierMessage:void 0,schema:{title:"Message",type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(c.Z,{collapsible:!1,name:"type",required:!0,schemaName:"Error Type",qualifierMessage:void 0,schema:{title:"Error Type",type:"string"},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,n.kt)(y.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(d.Z,{responseExample:'{\n  "detail": [\n    {\n      "loc": [\n        "string",\n        0\n      ],\n      "msg": "string",\n      "type": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}v.isMDXComponent=!0}}]);
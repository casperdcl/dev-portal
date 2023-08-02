"use strict";(self.webpackChunkprem_docs=self.webpackChunkprem_docs||[]).push([[2925],{10748:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});var l=a(67294),s=a(51048);function n(e){let{children:t,fallback:a}=e;return(0,s.default)()?l.createElement(l.Fragment,null,t?.()):a??null}},22494:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=l(a(67294)),n=l(a(10748)),r=a(81668);function i(e){switch(e.toLowerCase()){case"get":return"primary";case"post":return"success";case"delete":return"danger";case"put":return"info";case"patch":return"warning";case"head":case"event":return"secondary";default:return}}t.default=function(e){let{method:t,path:a}=e,l=(0,r.useTypedSelector)((e=>e.server.value)),p="";return s.default.createElement(s.default.Fragment,null,s.default.createElement("pre",{className:"openapi__method-endpoint"},s.default.createElement("span",{className:"badge badge--"+i(t)},t.toUpperCase())," ",s.default.createElement("h2",{className:"openapi__method-endpoint-path"},(l&&l.variables&&(p=l.url.replace(/\/$/,""),Object.keys(l.variables).forEach((e=>{p=p.replace(`{${e}}`,l.variables?.[e].default??"")}))),s.default.createElement(n.default,null,(()=>p.length?p:l&&l.url?l.url:void 0))),`${a.replace(/{([a-z0-9-_]+)}/gi,":$1")}`)),s.default.createElement("div",{className:"openapi__divider"}))}},83257:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=l(a(67294)),n=l(a(83699)),r=a(81668);t.default=function(e){const t=(0,r.useTypedSelector)((e=>e.auth.options)),a=(0,r.useTypedSelector)((e=>e.auth.selected)),l=`/${e.infoPath}#authentication`;if(void 0===a)return null;if(void 0===t[a]?.[0]?.type)return null;const i=t[a];return s.default.createElement("details",{className:"openapi-security__details",open:!1},s.default.createElement("summary",{className:"openapi-security__summary-container"},s.default.createElement("h4",{className:"openapi-security__summary-header"},"Authorization: ",i[0].name??i[0].type)),i.map((e=>{const t="http"===e.type,r="apiKey"===e.type,i="oauth2"===e.type,p="openIdConnect"===e.type;if(t){if("bearer"===e.scheme){const{name:t,key:a,type:r,scopes:i,...p}=e;return s.default.createElement(s.default.Fragment,{key:e.key},s.default.createElement("pre",{style:{display:"flex",flexDirection:"column",background:"var(--openapi-card-background-color)"}},s.default.createElement("span",null,s.default.createElement("strong",null,"name:")," ",s.default.createElement(n.default,{to:l},t??a)),s.default.createElement("span",null,s.default.createElement("strong",null,"type: "),r),i&&i.length>0&&s.default.createElement("span",null,s.default.createElement("strong",null,"scopes: "),s.default.createElement("code",null,e.scopes.length>0?e.scopes.toString():"[]")),Object.keys(p).map(((e,t)=>s.default.createElement("span",{key:e},s.default.createElement("strong",null,e,": "),"object"==typeof p[e]?JSON.stringify(p[e],null,2):String(p[e]))))))}if("basic"===e.scheme){const{name:t,key:a,type:r,scopes:i,...p}=e;return s.default.createElement(s.default.Fragment,{key:e.key},s.default.createElement("pre",{style:{display:"flex",flexDirection:"column",background:"var(--openapi-card-background-color)"}},s.default.createElement("span",null,s.default.createElement("strong",null,"name:")," ",s.default.createElement(n.default,{to:l},t??a)),s.default.createElement("span",null,s.default.createElement("strong",null,"type: "),r),i&&i.length>0&&s.default.createElement("span",null,s.default.createElement("strong",null,"scopes: "),s.default.createElement("code",null,e.scopes.length>0?e.scopes.toString():"[]")),Object.keys(p).map(((e,t)=>s.default.createElement("span",{key:e},s.default.createElement("strong",null,e,": "),"object"==typeof p[e]?JSON.stringify(p[e],null,2):String(p[e]))))))}return s.default.createElement(s.default.Fragment,{key:e.key},s.default.createElement("pre",{style:{display:"flex",flexDirection:"column",background:"var(--openapi-card-background-color)"}},s.default.createElement("span",null,s.default.createElement("strong",null,"name:")," ",s.default.createElement(n.default,{to:l},e.name??e.key)),s.default.createElement("span",null,s.default.createElement("strong",null,"type: "),e.type),s.default.createElement("span",null,s.default.createElement("strong",null,"in: "),e.in)))}if(r){const{name:t,key:a,type:r,scopes:i,...p}=e;return s.default.createElement(s.default.Fragment,{key:e.key},s.default.createElement("pre",{style:{display:"flex",flexDirection:"column",background:"var(--openapi-card-background-color)"}},s.default.createElement("span",null,s.default.createElement("strong",null,"name:")," ",s.default.createElement(n.default,{to:l},t??a)),s.default.createElement("span",null,s.default.createElement("strong",null,"type: "),r),i&&i.length>0&&s.default.createElement("span",null,s.default.createElement("strong",null,"scopes: "),s.default.createElement("code",null,e.scopes.length>0?e.scopes.toString():"[]")),Object.keys(p).map(((e,t)=>s.default.createElement("span",{key:e},s.default.createElement("strong",null,e,": "),"object"==typeof p[e]?JSON.stringify(p[e],null,2):String(p[e]))))))}if(i){const{name:t,key:r,type:i,scopes:p,flows:m,...o}=e;return s.default.createElement(s.default.Fragment,{key:a},s.default.createElement("pre",{style:{display:"flex",flexDirection:"column",background:"var(--openapi-card-background-color)"}},s.default.createElement("span",null,s.default.createElement("strong",null,"name:")," ",s.default.createElement(n.default,{to:l},t??r)),s.default.createElement("span",null,s.default.createElement("strong",null,"type: "),i),p&&p.length>0&&s.default.createElement("span",null,s.default.createElement("strong",null,"scopes: "),s.default.createElement("code",null,e.scopes.length>0?e.scopes.toString():"[]")),Object.keys(o).map(((e,t)=>s.default.createElement("span",{key:e},s.default.createElement("strong",null,e,": "),"object"==typeof o[e]?JSON.stringify(o[e],null,2):String(o[e])))),m&&s.default.createElement("span",null,s.default.createElement("code",null,s.default.createElement("strong",null,"flows: "),JSON.stringify(m,null,2)))))}if(p){const{name:t,key:a,scopes:r,type:i,...p}=e;return s.default.createElement(s.default.Fragment,{key:e.key},s.default.createElement("pre",{style:{display:"flex",flexDirection:"column",background:"var(--openapi-card-background-color)"}},s.default.createElement("span",null,s.default.createElement("strong",null,"name:")," ",s.default.createElement(n.default,{to:l},t??a)),s.default.createElement("span",null,s.default.createElement("strong",null,"type: "),i),r&&r.length>0&&s.default.createElement("span",null,s.default.createElement("strong",null,"scopes: "),s.default.createElement("code",null,e.scopes.length>0?e.scopes.toString():"[]")),Object.keys(p).map(((e,t)=>s.default.createElement("span",{key:e},s.default.createElement("strong",null,e,": "),"object"==typeof p[e]?JSON.stringify(p[e],null,2):String(p[e]))))))}})))}},48579:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>g,default:()=>E,frontMatter:()=>y,metadata:()=>k,toc:()=>_});var l=a(87462),s=(a(67294),a(3905)),n=a(55410),r=(a(44646),a(22494)),i=a.n(r),p=a(83257),m=a.n(p),o=a(90502),c=(a(23091),a(43296)),d=a(24386),u=a(65254),f=a(18679);const y={id:"images-upscale-v-1-images-upscale-post",title:"Images Upscale",description:"Images Upscale",sidebar_label:"Images Upscale",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"images_upscale_v1_images_upscale_post",requestBody:{content:{"multipart/form-data":{schema:{properties:{image:{type:"string",format:"binary",title:"Image"},prompt:{type:"string",title:"Prompt"},n:{type:"integer",title:"N",default:1},size:{type:"string",title:"Size",default:""},response_format:{type:"string",title:"Response Format",default:"b64_json"},user:{type:"string",title:"User",default:""},negative_prompt:{type:"string",title:"Negative Prompt"},seed:{type:"integer",title:"Seed"},guidance_scale:{type:"number",title:"Guidance Scale",default:7.5},num_inference_steps:{type:"integer",title:"Num Inference Steps",default:25}},type:"object",required:["image","prompt"],title:"Body_images_upscale_v1_images_upscale_post"}}},required:!0},responses:{200:{description:"Successful Response",content:{"application/json":{schema:{properties:{created:{type:"integer",title:"Created",default:1690791937},data:{anyOf:[{items:{properties:{url:{type:"string",title:"Url"}},type:"object",required:["url"],title:"ImageObjectUrl"},type:"array"},{items:{properties:{b64_json:{type:"string",title:"B64 Json"}},type:"object",required:["b64_json"],title:"ImageObjectBase64"},type:"array"}],title:"Data"}},type:"object",required:["data"],title:"ImageGenerationResponse"}}}},422:{description:"Validation Error",content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},type:"array",title:"Location"},msg:{type:"string",title:"Message"},type:{type:"string",title:"Error Type"}},type:"object",required:["loc","msg","type"],title:"ValidationError"},type:"array",title:"Detail"}},type:"object",title:"HTTPValidationError"}}}}},description:"Images Upscale",method:"post",path:"/v1/images/upscale",info:{title:"prem-chat",version:"0.0.1"},postman:{name:"Images Upscale",description:{type:"text/plain"},url:{path:["v1","images","upscale"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"multipart/form-data"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"formdata",formdata:[]}}},sidebar_class_name:"post api-method",info_path:"docs/prem-app/usage/diffuser/api/prem-chat",custom_edit_url:null},g=void 0,k={unversionedId:"prem-app/usage/diffuser/api/images-upscale-v-1-images-upscale-post",id:"prem-app/usage/diffuser/api/images-upscale-v-1-images-upscale-post",title:"Images Upscale",description:"Images Upscale",source:"@site/docs/prem-app/usage/diffuser/api/images-upscale-v-1-images-upscale-post.api.mdx",sourceDirName:"prem-app/usage/diffuser/api",slug:"/prem-app/usage/diffuser/api/images-upscale-v-1-images-upscale-post",permalink:"/docs/prem-app/usage/diffuser/api/images-upscale-v-1-images-upscale-post",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"images-upscale-v-1-images-upscale-post",title:"Images Upscale",description:"Images Upscale",sidebar_label:"Images Upscale",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"images_upscale_v1_images_upscale_post",requestBody:{content:{"multipart/form-data":{schema:{properties:{image:{type:"string",format:"binary",title:"Image"},prompt:{type:"string",title:"Prompt"},n:{type:"integer",title:"N",default:1},size:{type:"string",title:"Size",default:""},response_format:{type:"string",title:"Response Format",default:"b64_json"},user:{type:"string",title:"User",default:""},negative_prompt:{type:"string",title:"Negative Prompt"},seed:{type:"integer",title:"Seed"},guidance_scale:{type:"number",title:"Guidance Scale",default:7.5},num_inference_steps:{type:"integer",title:"Num Inference Steps",default:25}},type:"object",required:["image","prompt"],title:"Body_images_upscale_v1_images_upscale_post"}}},required:!0},responses:{200:{description:"Successful Response",content:{"application/json":{schema:{properties:{created:{type:"integer",title:"Created",default:1690791937},data:{anyOf:[{items:{properties:{url:{type:"string",title:"Url"}},type:"object",required:["url"],title:"ImageObjectUrl"},type:"array"},{items:{properties:{b64_json:{type:"string",title:"B64 Json"}},type:"object",required:["b64_json"],title:"ImageObjectBase64"},type:"array"}],title:"Data"}},type:"object",required:["data"],title:"ImageGenerationResponse"}}}},422:{description:"Validation Error",content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},type:"array",title:"Location"},msg:{type:"string",title:"Message"},type:{type:"string",title:"Error Type"}},type:"object",required:["loc","msg","type"],title:"ValidationError"},type:"array",title:"Detail"}},type:"object",title:"HTTPValidationError"}}}}},description:"Images Upscale",method:"post",path:"/v1/images/upscale",info:{title:"prem-chat",version:"0.0.1"},postman:{name:"Images Upscale",description:{type:"text/plain"},url:{path:["v1","images","upscale"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"multipart/form-data"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"formdata",formdata:[]}}},sidebar_class_name:"post api-method",info_path:"docs/prem-app/usage/diffuser/api/prem-chat",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Images Generations",permalink:"/docs/prem-app/usage/diffuser/api/images-generations-v-1-images-generations-post"},next:{title:"Upscaler",permalink:"/docs/category/upscaler"}},h={},_=[{value:"Request",id:"request",level:2}],b={toc:_},v="wrapper";function E(e){let{components:t,...a}=e;return(0,s.kt)(v,(0,l.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Images Upscale"),(0,s.kt)(i(),{method:"post",path:"/v1/images/upscale",mdxType:"MethodEndpoint"}),(0,s.kt)(m(),{infoPath:"docs/prem-app/usage/diffuser/api/prem-chat",mdxType:"SecuritySchemes"}),(0,s.kt)("p",null,"Images Upscale"),(0,s.kt)("h2",{id:"request"},"Request"),(0,s.kt)(o.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,s.kt)(f.default,{label:"multipart/form-data",value:"multipart/form-data-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,s.kt)("strong",{className:"openapi-schema__required"},"required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"image",required:!0,schemaName:"binary",qualifierMessage:void 0,schema:{type:"string",format:"binary",title:"Image"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"prompt",required:!0,schemaName:"Prompt",qualifierMessage:void 0,schema:{type:"string",title:"Prompt"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"n",required:!1,schemaName:"N",qualifierMessage:void 0,schema:{type:"integer",title:"N",default:1},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"size",required:!1,schemaName:"Size",qualifierMessage:void 0,schema:{type:"string",title:"Size",default:""},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"response_format",required:!1,schemaName:"Response Format",qualifierMessage:void 0,schema:{type:"string",title:"Response Format",default:"b64_json"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"user",required:!1,schemaName:"User",qualifierMessage:void 0,schema:{type:"string",title:"User",default:""},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"negative_prompt",required:!1,schemaName:"Negative Prompt",qualifierMessage:void 0,schema:{type:"string",title:"Negative Prompt"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"seed",required:!1,schemaName:"Seed",qualifierMessage:void 0,schema:{type:"integer",title:"Seed"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"guidance_scale",required:!1,schemaName:"Guidance Scale",qualifierMessage:void 0,schema:{type:"number",title:"Guidance Scale",default:7.5},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"num_inference_steps",required:!1,schemaName:"Num Inference Steps",qualifierMessage:void 0,schema:{type:"integer",title:"Num Inference Steps",default:25},mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(f.default,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Successful Response")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(f.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(f.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"created",required:!1,schemaName:"Created",qualifierMessage:void 0,schema:{type:"integer",title:"Created",default:1690791937},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"data"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"),(0,s.kt)("span",{className:"openapi-schema__divider"}),(0,s.kt)("span",{className:"openapi-schema__required"},"required"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",null,(0,s.kt)("span",{className:"badge badge--info"},"anyOf"),(0,s.kt)(u.default,{mdxType:"SchemaTabs"},(0,s.kt)(f.default,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(d.Z,{collapsible:!1,name:"url",required:!0,schemaName:"Url",qualifierMessage:void 0,schema:{type:"string",title:"Url"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))),(0,s.kt)(f.default,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(d.Z,{collapsible:!1,name:"b64_json",required:!0,schemaName:"B64 Json",qualifierMessage:void 0,schema:{type:"string",title:"B64 Json"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))))),(0,s.kt)(f.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(c.Z,{responseExample:'{\n  "created": 1690791937,\n  "data": [\n    null\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(f.default,{label:"422",value:"422",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Validation Error")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(f.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(f.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"detail"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"loc"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"),(0,s.kt)("span",{className:"openapi-schema__divider"}),(0,s.kt)("span",{className:"openapi-schema__required"},"required"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)("div",null,(0,s.kt)("span",{className:"badge badge--info"},"anyOf"),(0,s.kt)(u.default,{mdxType:"SchemaTabs"},(0,s.kt)(f.default,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"string")))),(0,s.kt)(f.default,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"integer")))))),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(d.Z,{collapsible:!1,name:"msg",required:!0,schemaName:"Message",qualifierMessage:void 0,schema:{type:"string",title:"Message"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"type",required:!0,schemaName:"Error Type",qualifierMessage:void 0,schema:{type:"string",title:"Error Type"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(f.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(c.Z,{responseExample:'{\n  "detail": [\n    {\n      "loc": [\n        "string",\n        0\n      ],\n      "msg": "string",\n      "type": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}E.isMDXComponent=!0}}]);
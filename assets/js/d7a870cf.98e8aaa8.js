(self.webpackChunkprem_docs=self.webpackChunkprem_docs||[]).push([[475],{75034:(e,t,o)=>{"use strict";o.r(t),o.d(t,{Collapsible:()=>l.z,ErrorBoundaryError:()=>L.aG,ErrorBoundaryTryAgainButton:()=>L.Cw,ErrorCauseBoundary:()=>L.QW,HtmlClassNameProvider:()=>p.FG,NavbarSecondaryMenuFiller:()=>m.Zo,PageMetadata:()=>p.d,ReactContextError:()=>d.i6,SkipToContentFallbackId:()=>P.u,SkipToContentLink:()=>P.l,ThemeClassNames:()=>u.k,composeProviders:()=>d.Qc,createStorageSlot:()=>r.WA,duplicates:()=>E.l,filterDocCardListItems:()=>i.MN,isMultiColumnFooterLinks:()=>k.a,isRegexpStringMatch:()=>T.F,listStorageKeys:()=>r._f,listTagsByLetters:()=>h.P,prefersReducedMotion:()=>c.n,processAdmonitionProps:()=>A,translateTagsPageTitle:()=>h.M,uniq:()=>E.j,useCollapsible:()=>l.u,useColorMode:()=>f.I,useContextualSearchFilters:()=>a._q,useCurrentSidebarCategory:()=>i.jA,useDocsPreferredVersion:()=>M.J,useEvent:()=>d.zX,useIsomorphicLayoutEffect:()=>d.LI,usePluralForm:()=>s.c,usePrevious:()=>d.D9,usePrismTheme:()=>C.p,useSearchLinkCreator:()=>_,useSearchQueryString:()=>y,useStorageSlot:()=>r.Nk,useThemeConfig:()=>n.L,useWindowSize:()=>g.i});var n=o(20107),r=o(92560),a=o(60246),i=o(78259),s=o(23777),l=o(54639),u=o(23702),c=o(58986),d=o(43768),p=o(79488),f=o(9200),m=o(53086),g=o(13488),h=o(45565),v=o(67294),b=o(39962),x=o(75238);const w="q";function y(){return(0,x.Nc)(w)}function _(){const{siteConfig:{baseUrl:e,themeConfig:t}}=(0,b.default)(),{algolia:{searchPagePath:o}}=t;return(0,v.useCallback)((t=>`${e}${o}?${w}=${encodeURIComponent(t)}`),[e,o])}var k=o(42605),T=o(61500),E=o(33609),C=o(4779),M=o(86409);function A(e){const{mdxAdmonitionTitle:t,rest:o}=function(e){const t=v.Children.toArray(e),o=t.find((e=>v.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),n=v.createElement(v.Fragment,null,t.filter((e=>e!==o)));return{mdxAdmonitionTitle:o?.props.children,rest:n}}(e.children),n=e.title??t;return{...e,...n&&{title:n},children:o}}var P=o(51515),L=o(12303)},45565:(e,t,o)=>{"use strict";o.d(t,{M:()=>r,P:()=>a});var n=o(97325);const r=()=>(0,n.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function a(e){const t={};return Object.values(e).forEach((e=>{const o=function(e){return e[0].toUpperCase()}(e.label);t[o]??=[],t[o].push(e)})),Object.entries(t).sort(((e,t)=>{let[o]=e,[n]=t;return o.localeCompare(n)})).map((e=>{let[t,o]=e;return{letter:t,tags:o.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}},23777:(e,t,o)=>{"use strict";o.d(t,{c:()=>c});var n=o(67294),r=o(39962),a=o(25108);const i=["zero","one","two","few","many","other"];function s(e){return i.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,r.default)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return a.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function c(){const e=u();return{selectMessage:(t,o)=>function(e,t,o){const n=e.split("|");if(1===n.length)return n[0];n.length>o.pluralForms.length&&a.error(`For locale=${o.locale}, a maximum of ${o.pluralForms.length} plural forms are expected (${o.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const r=o.select(t),i=o.pluralForms.indexOf(r);return n[Math.min(i,n.length-1)]}(o,t,e)}}},73071:function(e,t,o){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(o(67294)),a=n(o(93162));t.default=function(e){let{url:t,proxy:o}=e;return r.default.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},r.default.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),r.default.createElement("ul",{className:"export-dropdown dropdown__menu"},r.default.createElement("li",null,r.default.createElement("a",{onClick:e=>{e.preventDefault(),(e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),a.default.saveAs(e,t||"openapi.txt")})(`${t}`)},className:"dropdown__link",href:`${t}`},"OpenAPI Spec"))))}},79518:function(e,t,o){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(o(67294)),a=o(75034),i=n(o(79524)),s=n(o(7909));t.default=function(e){const{colorMode:t}=(0,a.useColorMode)(),{logo:o,darkLogo:n}=e,l=()=>"dark"===t?n?.altText??o?.altText:o?.altText,u=(0,i.default)(o?.url),c=(0,i.default)(n?.url);return o&&n?r.default.createElement(s.default,{alt:l(),sources:{light:u,dark:c},className:"openapi__logo"}):o||n?r.default.createElement(s.default,{alt:l(),sources:{light:u??c,dark:u??c},className:"openapi__logo"}):void 0}},23597:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=o(87462),r=(o(67294),o(3905));o(79518),o(65254),o(18679),o(73071);const a={id:"prem-text-to-audio",title:"Prem Text to Audio",description:"",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},i=void 0,s={unversionedId:"prem-app/usage/text-to-audio/api/prem-text-to-audio",id:"prem-app/usage/text-to-audio/api/prem-text-to-audio",title:"Prem Text to Audio",description:"",source:"@site/docs/prem-app/usage/text-to-audio/api/prem-text-to-audio.info.mdx",sourceDirName:"prem-app/usage/text-to-audio/api",slug:"/prem-app/usage/text-to-audio/api/prem-text-to-audio",permalink:"/docs/prem-app/usage/text-to-audio/api/prem-text-to-audio",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"prem-text-to-audio",title:"Prem Text to Audio",description:"",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"APIs",permalink:"/docs/category/apis-3"},next:{title:"Audio Generation",permalink:"/docs/prem-app/usage/text-to-audio/api/audio-generation-v-1-audio-generation-post"}},l={},u=[],c={toc:u},d="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: 0.0.1"),(0,r.kt)("h1",{className:"openapi__heading"},"Prem Text to Audio"))}p.isMDXComponent=!0},93162:function(e,t,o){var n,r,a,i=o(25108);r=[],void 0===(a="function"==typeof(n=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(i.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function n(e,t,o){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){u(n.response,t,o)},n.onerror=function(){i.error("could not download file")},n.send()}function r(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof o.g&&o.g.global===o.g?o.g:void 0,l=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(e,t,o){var i=s.URL||s.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?a(l):r(l.href)?n(e,t,o):a(l,l.target="_blank")):(l.href=i.createObjectURL(e),setTimeout((function(){i.revokeObjectURL(l.href)}),4e4),setTimeout((function(){a(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,o,i){if(o=o||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,i),o);else if(r(e))n(e,o,i);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){a(s)}))}}:function(e,t,o,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return n(e,t,o);var a="application/octet-stream"===e.type,i=/constructor/i.test(s.HTMLElement)||s.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||a&&i||l)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var e=c.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},c.readAsDataURL(e)}else{var d=s.URL||s.webkitURL,p=d.createObjectURL(e);r?r.location=p:location.href=p,r=null,setTimeout((function(){d.revokeObjectURL(p)}),4e4)}});s.saveAs=u.saveAs=u,e.exports=u})?n.apply(t,r):n)||(e.exports=a)}}]);
"use strict";(self.webpackChunkprem_docs=self.webpackChunkprem_docs||[]).push([[5643],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>h});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),l=p(t),d=o,h=l["".concat(c,".").concat(d)]||l[d]||u[d]||a;return t?n.createElement(h,i(i({ref:r},m),{},{components:t})):n.createElement(h,i({ref:r},m))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[l]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},94106:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=t(87462),o=(t(67294),t(3905));const a={sidebar_position:1},i="Overview",s={unversionedId:"prem-daemon/intro",id:"prem-daemon/intro",title:"Overview",description:"Prem Daemon represents the component that handle the orchestraction of the Prem Services. It is responsible to launch the requested service and to return the response to Prem App. You can check the repository here.",source:"@site/docs/prem-daemon/intro.md",sourceDirName:"prem-daemon",slug:"/prem-daemon/intro",permalink:"/docs/prem-daemon/intro",draft:!1,editUrl:"https://github.com/premAI-io/dev-portal/blob/main/docs/prem-daemon/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Prem Daemon",permalink:"/docs/category/prem-daemon"},next:{title:"APIs",permalink:"/docs/category/apis-4"}},c={},p=[{value:"Registry",id:"registry",level:3}],m={toc:p},l="wrapper";function u(e){let{components:r,...t}=e;return(0,o.kt)(l,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Prem Daemon represents the component that handle the orchestraction of the Prem Services. It is responsible to launch the requested service and to return the response to Prem App. You can check the repository ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/premAI-io/prem-daemon"},"here"),"."),(0,o.kt)("p",null,"The information flow works as following:"),(0,o.kt)("p",null,"Prem App sends HTTP requests to Prem Daemon. Prem Daemon is responsible to launch the requested service and to return the response to Prem App. Prem Daemon using Docker SDK starts the requested service as a Docker container. Based on the interface exposed by the service, Prem App can directly interact with the service or it can use Prem Daemon as a proxy."),(0,o.kt)("h3",{id:"registry"},"Registry"),(0,o.kt)("p",null,"When running Prem Daemon, you can specify an environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"PREM_REGISTRY_URL"),". This variable is the URL of the registry to use. The registry contains all the metadata information in order to run a service in the Prem Ecosystem. Each Prem Service can be published on the public list of AI services. By default, Prem Daemon uses the latest stable version of Prem Registry: ",(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/premAI-io/prem-registry/main/manifests.json"},"https://raw.githubusercontent.com/premAI-io/prem-registry/main/manifests.json"),"."),(0,o.kt)("p",null,"More information about Prem Registry and how to publish your service can be found ",(0,o.kt)("a",{parentName:"p",href:"/docs/registry/"},"here"),"."))}u.isMDXComponent=!0}}]);
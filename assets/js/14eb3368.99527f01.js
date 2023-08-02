"use strict";(self.webpackChunkprem_docs=self.webpackChunkprem_docs||[]).push([[9817],{23899:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var n=a(87462),r=a(67294),i=a(86010),l=a(23702),s=a(78259),c=a(69003),o=a(83699),d=a(97325),m=a(79524);function u(e){return r.createElement("svg",(0,n.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const h={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function b(){const e=(0,m.default)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(o.default,{"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},r.createElement(u,{className:h.breadcrumbHomeIcon})))}const f={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function v(e){let{children:t,href:a,isLast:n}=e;const i="breadcrumbs__link";return n?r.createElement("span",{className:i,itemProp:"name"},t):a?r.createElement(o.default,{className:i,href:a,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:i},t)}function p(e){let{children:t,active:a,index:l,addMicrodata:s}=e;return r.createElement("li",(0,n.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,i.default)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,r.createElement("meta",{itemProp:"position",content:String(l+1)}))}function g(){const e=(0,s.s1)(),t=(0,c.Ns)();return e?r.createElement("nav",{className:(0,i.default)(l.k.docs.docBreadcrumbs,f.breadcrumbsContainer),"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(b,null),e.map(((t,a)=>{const n=a===e.length-1;return r.createElement(p,{key:a,active:n,index:a,addMicrodata:!!t.href},r.createElement(v,{href:t.href,isLast:n},t.label))})))):null}},80853:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Z});var n=a(67294),r=a(79488),i=a(78259),l=a(79524),s=a(86010),c=a(83699),o=a(2735),d=a(97325);const m={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:a}=e;return n.createElement(c.default,{href:t,className:(0,s.default)("card padding--lg",m.cardContainer)},a)}function h(e){let{href:t,icon:a,title:r,description:i}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,s.default)("text--truncate",m.cardTitle),title:r},a," ",r),i&&n.createElement("p",{className:(0,s.default)("text--truncate",m.cardDescription),title:i},i))}function b(e){let{item:t}=e;const a=(0,i.Wl)(t);return a?n.createElement(h,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,d.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const a=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return n.createElement(h,{href:t.href,icon:a,title:t.label,description:t.description??r?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(f,{item:t});case"category":return n.createElement(b,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function p(e){let{className:t}=e;const a=(0,i.jA)();return n.createElement(g,{items:a.items,className:t})}function g(e){const{items:t,className:a}=e;if(!t)return n.createElement(p,e);const r=(0,i.MN)(t);return n.createElement("section",{className:(0,s.default)("row",a)},r.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(v,{item:e})))))}var E=a(91792),N=a(25350),k=a(44617),_=a(23899),L=a(13899);const T={generatedIndexPage:"generatedIndexPage_vN6x",list:"list_eTzJ",title:"title_kItE"};function x(e){let{categoryGeneratedIndex:t}=e;return n.createElement(r.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,l.default)(t.image)})}function y(e){let{categoryGeneratedIndex:t}=e;const a=(0,i.jA)();return n.createElement("div",{className:T.generatedIndexPage},n.createElement(N.default,null),n.createElement(_.default,null),n.createElement(k.default,null),n.createElement("header",null,n.createElement(L.Z,{as:"h1",className:T.title},t.title),t.description&&n.createElement("p",null,t.description)),n.createElement("article",{className:"margin-top--lg"},n.createElement(g,{items:a.items,className:T.list})),n.createElement("footer",{className:"margin-top--lg"},n.createElement(E.Z,{previous:t.navigation.previous,next:t.navigation.next})))}function Z(e){return n.createElement(n.Fragment,null,n.createElement(x,e),n.createElement(y,e))}},91792:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(87462),r=a(67294),i=a(97325),l=a(23672);function s(e){const{previous:t,next:a}=e;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&r.createElement(l.Z,(0,n.Z)({},t,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&r.createElement(l.Z,(0,n.Z)({},a,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},44617:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(67294),r=a(86010),i=a(97325),l=a(23702),s=a(58801);function c(e){let{className:t}=e;const a=(0,s.E)();return a.badge?n.createElement("span",{className:(0,r.default)(t,l.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},25350:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var n=a(67294),r=a(86010),i=a(39962),l=a(83699),s=a(97325),c=a(30868),o=a(23702),d=a(86409),m=a(58801);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function h(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function b(e){let{versionLabel:t,to:a,onClick:r}=e;return n.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(l.default,{to:a,onClick:r},n.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function f(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:l}}=(0,i.default)(),{pluginId:s}=(0,c.gA)({failfast:!0}),{savePreferredVersionName:m}=(0,d.J)(s),{latestDocSuggestion:u,latestVersionSuggestion:f}=(0,c.Jo)(s),v=u??(p=f).docs.find((e=>e.id===p.mainDocId));var p;return n.createElement("div",{className:(0,r.default)(t,o.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(h,{siteTitle:l,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(b,{versionLabel:f.label,to:v.path,onClick:()=>m(f.name)})))}function v(e){let{className:t}=e;const a=(0,m.E)();return a.banner?n.createElement(f,{className:t,versionMetadata:a}):null}},13899:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),r=a(67294),i=a(86010),l=a(97325),s=a(20107),c=a(83699);const o={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function d(e){let{as:t,id:a,...d}=e;const{navbar:{hideOnScroll:m}}=(0,s.L)();if("h1"===t||!a)return r.createElement(t,(0,n.Z)({},d,{id:void 0}));const u=(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof d.children?d.children:a});return r.createElement(t,(0,n.Z)({},d,{className:(0,i.default)("anchor",m?o.anchorWithHideOnScrollNavbar:o.anchorWithStickyNavbar,d.className),id:a}),d.children,r.createElement(c.default,{className:"hash-link",to:`#${a}`,"aria-label":u,title:u},"\u200b"))}},23672:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010),i=a(83699);function l(e){const{permalink:t,title:a,subLabel:l,isNext:s}=e;return n.createElement(i.default,{className:(0,r.default)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&n.createElement("div",{className:"pagination-nav__sublabel"},l),n.createElement("div",{className:"pagination-nav__label"},a))}}}]);
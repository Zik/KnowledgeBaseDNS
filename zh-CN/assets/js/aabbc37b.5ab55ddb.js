"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[369],{4137:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return v}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},d=Object.keys(e);for(n=0;n<d.length;n++)t=d[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)t=d[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,d=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(t),v=o,D=p["".concat(i,".").concat(v)]||p[v]||s[v]||d;return t?n.createElement(D,a(a({ref:r},c),{},{components:t})):n.createElement(D,a({ref:r},c))}));function v(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var d=t.length,a=new Array(d);a[0]=p;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<d;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3856:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return i},default:function(){return v},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s}});var n=t(3117),o=t(102),d=(t(7294),t(4137)),a=["components"],u={title:"\u6982\u89c8",sidebar_position:1},i=void 0,l={unversionedId:"public-dns/overview",id:"public-dns/overview",title:"\u6982\u89c8",description:"AdGuard DNS \u662f\u4ec0\u4e48",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/public-dns/overview.md",sourceDirName:"public-dns",slug:"/public-dns/overview",permalink:"/KnowledgeBaseDNS/zh-CN/public-dns/overview",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/public-dns/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u6982\u89c8",sidebar_position:1},sidebar:"sidebar",previous:{title:"How to flush DNS cache",permalink:"/KnowledgeBaseDNS/zh-CN/general/flush-dns-cache"},next:{title:"\u5982\u4f55\u5237\u65b0DNS\u7f13\u5b58",permalink:"/KnowledgeBaseDNS/zh-CN/public-dns/solving-problems/how-to-flush-dns-cache"}},c={},s=[{value:"AdGuard DNS \u662f\u4ec0\u4e48",id:"adguard-dns-\u662f\u4ec0\u4e48",level:2},{value:"\u514d\u8d39\u7684AdGuard DNS\u670d\u52a1\u5668",id:"\u514d\u8d39\u7684adguard-dns\u670d\u52a1\u5668",level:2},{value:"AdGuard DNS\u534f\u8bae",id:"adguard-dns\u534f\u8bae",level:2},{value:"DNSCrypt\uff08\u5f00\u6e90\u7684\u52a0\u5bc6\u534f\u8bae\uff09",id:"dnscrypt\u5f00\u6e90\u7684\u52a0\u5bc6\u534f\u8bae",level:3},{value:"DNS-over-HTTPS (DoH) \u548cDNS-over-TLS (DoT)",id:"dns-over-https-doh-\u548cdns-over-tls-dot",level:3},{value:"DNS-over-QUIC \u7aef\u53e3",id:"dns-over-quic-\u7aef\u53e3",level:3}],p={toc:s};function v(e){var r=e.components,t=(0,o.Z)(e,a);return(0,d.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,d.kt)("h2",{id:"adguard-dns-\u662f\u4ec0\u4e48"},"AdGuard DNS \u662f\u4ec0\u4e48"),(0,d.kt)("p",null,"AdGuard DNS \u662f\u6b3e\u4e2a\u514d\u8d39\u7684\u3001\u6ce8\u91cd\u9690\u79c1\u7684DNS\u89e3\u6790\u5668\uff0c\u4ed6\u53ef\u4ee5\u63d0\u4f9b\u5b89\u5168\u7684\u8fde\u63a5\uff0c\u8fd8\u53ef\u4ee5\u62e6\u622a\u8ffd\u8e2a\u5668\u3001\u5e7f\u544a\u548c\u7f51\u7edc\u9493\u9c7c(\u53ef\u9009)\u3002 AdGuard DNS\u4e0d\u9700\u8981\u5b89\u88c5\u4efb\u4f55\u5e94\u7528\u7a0b\u5e8f\u3002 \u4ed6\u53ef\u4ee5\u8f7b\u677e\u5730\u5b89\u88c5\u5728\u6240\u6709\u8bbe\u5907\uff08\u667a\u80fd\u624b\u673a\u3001\u53f0\u5f0f\u7535\u8111\u3001\u8def\u7531\u5668\u3001\u6e38\u620f\u673a\u7b49\uff09\u4e0a\u3002"),(0,d.kt)("h2",{id:"\u514d\u8d39\u7684adguard-dns\u670d\u52a1\u5668"},"\u514d\u8d39\u7684AdGuard DNS\u670d\u52a1\u5668"),(0,d.kt)("p",null,"AdGuard DNS\u6709\u4e09\u4e2a\u514d\u8d39\u670d\u52a1\u5668\u3002 \u201d\u9ed8\u8ba4\u201c\u670d\u52a1\u5668\u662f\u7528\u4e8e\u62e6\u622a\u5e7f\u544a\u3001\u8ffd\u8e2a\u5668\u3001\u6076\u610f\u8f6f\u4ef6\u548c\u9493\u9c7c\u7f51\u7ad9\u7684\u3002 \u201d\u5bb6\u5ead\u4fdd\u62a4\u201c\u4e5f\u6709\u540c\u6837\u7684\u529f\u80fd\u3002\u4ed6\u4f1a\u5c4f\u853d\u513f\u7ae5\u4e0d\u9002\u5408\u513f\u7ae5\u7684\u7f51\u7ad9\uff0c\u5e76\u5728\u63d0\u4f9b\u201d\u5b89\u5168\u641c\u7d22\u201c\u9009\u9879\u7684\u6d4f\u89c8\u5668\u4e2d\u5f3a\u5236\u6267\u884c\u3002 \u201d\u4e0d\u8fc7\u6ee4\u201c\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5b89\u5168\u53ef\u9760\u7684\u94fe\u63a5\uff0c\u4f46\u662f\u4e0d\u4f1a\u8fc7\u6ee4\u4efb\u4f55\u4e1c\u897f\u3002 \u60a8\u53ef\u4ee5\u5728",(0,d.kt)("a",{parentName:"p",href:"https://adguard-dns.io/en/public-dns.html"},"\u6211\u4eec\u7684\u7f51\u7ad9"),"\u4e0a\u627e\u5230\u5173\u4e8e\u5982\u4f55\u5728\u60a8\u7684\u6240\u6709\u8bbe\u5907\u4e0a\u8bbe\u7f6e AdGuard DNS \u7684\u8be6\u7ec6\u8bf4\u660e\u3002 \u6bcf\u4e2a\u670d\u52a1\u5668\u90fd\u652f\u6301\u4e0d\u540c\u7684\u5b89\u5168\u534f\u8bae\uff1a DNSCrypt\u3001DNS-over-HTTPS (DoH)\u3001DNS-over-TLS (DoT)\u3001\u548c DNS-over-QUIC (DoQ)\u3002"),(0,d.kt)("h2",{id:"adguard-dns\u534f\u8bae"},"AdGuard DNS\u534f\u8bae"),(0,d.kt)("p",null,"\u9664\u4e86\u65e0\u52a0\u5bc6\u7684DNS(IPv4\u548cIPv6)\uff0cAdGuard DNS\u652f\u6301\u5404\u79cd\u52a0\u5bc6\u534f\u8bae\uff0c\u6240\u4ee5\u4f60\u53ef\u4ee5\u9009\u62e9\u4e00\u4e2a\u6700\u9002\u5408\u4f60\u7684\u52a0\u5bc6\u534f\u8bae\u3002"),(0,d.kt)("h3",{id:"dnscrypt\u5f00\u6e90\u7684\u52a0\u5bc6\u534f\u8bae"},"DNSCrypt\uff08\u5f00\u6e90\u7684\u52a0\u5bc6\u534f\u8bae\uff09"),(0,d.kt)("p",null,"AdGuard DNS\u5141\u8bb8\u60a8\u4f7f\u7528\u7279\u5b9a\u7684\u52a0\u5bc6\u534f\u8bae\uff1aDNSCrypt \u7531\u4e8e\u4ed6\uff0c\u6240\u6709DNS\u8bf7\u6c42\u90fd\u88ab\u52a0\u5bc6\uff0c\u8fd9\u53ef\u4ee5\u4fdd\u62a4\u60a8\u514d\u53d7\u53ef\u80fd\u7684\u8bf7\u6c42\u62e6\u622a\u548c\u968f\u540e\u7684\u7a83\u542c\u548c\u66f4\u6539\u3002 \u4f46\u662f\u4e0e DoH\u3001 DoT \u548c DoQ \u534f\u8bae\u76f8\u6bd4\uff0cDNSCcrypt \u88ab\u5e7f\u6cdb\u8ba4\u4e3a\u662f\u8fc7\u65f6\u7684\uff0c\u5982\u679c\u53ef\u4ee5\u7684\u8bdd\uff0c\u6211\u4eec\u5efa\u8bae\u4f7f\u7528\u8fd9\u4e9b\u534f\u8bae\u3002"),(0,d.kt)("h3",{id:"dns-over-https-doh-\u548cdns-over-tls-dot"},"DNS-over-HTTPS (DoH) \u548cDNS-over-TLS (DoT)"),(0,d.kt)("p",null,"DoH \u548c DoT \u662f\u73b0\u4ee3\u5b89\u5168\u7684 DNS \u534f\u8bae\uff0c\u5b83\u4eec\u8d8a\u6765\u8d8a\u53d7\u6b22\u8fce\uff0c\u53ef\u9884\u89c1\u7684\uff0c\u5728\u672a\u6765\u5c06\u6210\u4e3a\u6700\u53d7\u6b22\u8fce\u7684\u5b89\u5168\u534f\u8bae\u3002 \u4e24\u8005\u90fd\u6bd4 DNSCcrypt \u66f4\u53ef\u9760\uff0c\u5e76\u4e14\u90fd\u5df2\u7ecf\u5f97\u5230\u4e86 AdGuard DNS \u7684\u652f\u6301\u3002"),(0,d.kt)("h3",{id:"dns-over-quic-\u7aef\u53e3"},"DNS-over-QUIC \u7aef\u53e3"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"https://adguard.com/en/blog/dns-over-quic.html"},"DNS-over-QUIC \u662f\u4e00\u4e2a\u65b0\u7684 DNS \u5b89\u5168\u534f\u8bae"),"\uff0cAdGuard DNS \u662f\u7b2c\u4e00\u4e2a\u652f\u6301\u5b83\u7684\u516c\u5171\u89e3\u6790\u5668\u3002 \u4e0e DoH \u548c DoT \u4e0d\u540c\u7684\u662f\uff0c\u5b83\u4f7f\u7528 QUIC \u4f5c\u4e3a\u4f20\u8f93\u534f\u8bae\uff0c\u5e76\u6700\u7ec8\u5c06 DNS \u5e26\u56de\u5230\u5b83\u7684\u6839\u2014\u2014\u901a\u8fc7 UDP \u5de5\u4f5c\u3002 \u5b83\u5e26\u6765\u4e86 QUIC \u6240\u80fd\u63d0\u4f9b\u7684\u6240\u6709\u597d\u4e1c\u897f\u30fc\u30fc\u5f00\u7bb1\u5373\u7528\u7684\u52a0\u5bc6\u3001\u51cf\u5c11\u8fde\u63a5\u65f6\u95f4\u3001\u5f53\u6570\u636e\u5305\u4e22\u5931\u65f6\u66f4\u597d\u7684\u6027\u80fd\u3002 \u6b64\u5916\uff0cQUIC \u5e94\u8be5\u662f\u4e00\u4e2a\u4f20\u8f93\u7ea7\u522b\u7684\u534f\u8bae\uff0c\u5e76\u4e14\u4e0d\u5b58\u5728 DoH \u53ef\u80fd\u53d1\u751f\u7684\u5143\u6570\u636e\u6cc4\u6f0f\u98ce\u9669\u3002"))}v.isMDXComponent=!0}}]);
!function(e){var i={};function n(t){if(i[t])return i[t].exports;var o=i[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=i,n.d=function(e,i,t){n.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,i){if(1&i&&(e=n(e)),8&i)return e;if(4&i&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var o in e)n.d(t,o,function(i){return e[i]}.bind(null,o));return t},n.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(i,"a",i),i},n.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},n.p="",n(n.s=0)}([function(e,i,n){e.exports=n(1)},function(e,i,n){"use strict";n.r(i);n(2),n(6)},function(e,i,n){var t=n(3),o=n(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};t(o,r);e.exports=o.locals||{}},function(e,i,n){"use strict";var t,o=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},r=function(){var e={};return function(i){if(void 0===e[i]){var n=document.querySelector(i);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[i]=n}return e[i]}}(),a=[];function c(e){for(var i=-1,n=0;n<a.length;n++)if(a[n].identifier===e){i=n;break}return i}function g(e,i){for(var n={},t=[],o=0;o<e.length;o++){var r=e[o],g=i.base?r[0]+i.base:r[0],s=n[g]||0,d="".concat(g," ").concat(s);n[g]=s+1;var p=c(d),l={css:r[1],media:r[2],sourceMap:r[3]};-1!==p?(a[p].references++,a[p].updater(l)):a.push({identifier:d,updater:u(l,i),references:1}),t.push(d)}return t}function s(e){var i=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var o=n.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(e){i.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(i);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(i)}return i}var d,p=(d=[],function(e,i){return d[e]=i,d.filter(Boolean).join("\n")});function l(e,i,n,t){var o=n?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=p(i,o);else{var r=document.createTextNode(o),a=e.childNodes;a[i]&&e.removeChild(a[i]),a.length?e.insertBefore(r,a[i]):e.appendChild(r)}}function m(e,i,n){var t=n.css,o=n.media,r=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var h=null,f=0;function u(e,i){var n,t,o;if(i.singleton){var r=f++;n=h||(h=s(i)),t=l.bind(null,n,r,!1),o=l.bind(null,n,r,!0)}else n=s(i),t=m.bind(null,n,i),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else o()}}e.exports=function(e,i){(i=i||{}).singleton||"boolean"==typeof i.singleton||(i.singleton=o());var n=g(e=e||[],i);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<n.length;t++){var o=c(n[t]);a[o].references--}for(var r=g(e,i),s=0;s<n.length;s++){var d=c(n[s]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=r}}}},function(e,i,n){(i=n(5)(!1)).push([e.i,'body:not([contenteditable="true"]) #siege-container{position:relative;transform:translate(-50%);width:100vw}#siege-container{color:#404040;font-family:"Inter";font-weight:400;left:50%;line-height:1.68}#siege-container a{all:unset;color:#404040;cursor:pointer}#siege-container h1,#siege-container h2,#siege-container h3,#siege-container h4,#siege-container h5,#siege-container h6{color:#000;font-family:"Inter";line-height:1.6;margin:0;padding:0}#siege-container h1{color:#000;font-size:42px;font-weight:300;line-height:1.3;max-width:none}@media (min-width: 768px){#siege-container h1{font-size:48px;margin-bottom:55px}}#siege-container h2{font-size:28px;font-weight:600;margin:80px 0 20px}@media (min-width: 768px){#siege-container h2{font-size:32px;font-weight:800;margin:120px 0 40px}}#siege-container h2:first-child{margin-top:0}#siege-container h3{font-size:22px;font-weight:800;margin:40px 0 20px}@media (min-width: 768px){#siege-container h3{font-size:24px}}#siege-container h5{font-size:24px;font-weight:800;margin-bottom:40px}#siege-container p,#siege-container li,#siege-container label{color:#404040;font-family:"Inter";font-size:18px;font-weight:300;line-height:2;margin-bottom:1.6em}@media (min-width: 768px){#siege-container p,#siege-container li,#siege-container label{font-size:21px;line-height:1.8}}#siege-container p a,#siege-container li a,#siege-container label a{border-bottom:2px solid #02de82}#siege-container p:last-of-type{margin-bottom:0}#siege-container .green-bg{background-color:#02de82}#siege-container .grey-bg{background-color:#F6F6F6}@media (max-width: 767px){#siege-container .no-mobile{display:none !important}}@media (min-width: 768px){#siege-container .mobile-only{display:none !important}}#siege-container .container{max-width:840px}#siege-container .container-wide{margin:0 auto;max-width:1144px;padding:0 20px}#siege-container section{float:none;margin:40px 0;padding:0;width:auto}@media (min-width: 768px){#siege-container section{margin:120px 0}}#siege-container section:first-child{margin-top:0}#siege-container .banner-with-img{height:auto;overflow:hidden;max-width:1360px;margin:0 auto}@media (min-width: 1024px){#siege-container .banner-with-img{height:530px}}@media (min-width: 1400px){#siege-container .banner-with-img{border-radius:0 0 5px 5px}}#siege-container .banner-with-img .v-middle-wrapper{position:relative}@media (min-width: 1024px){#siege-container .banner-with-img .v-middle-wrapper{position:absolute}}#siege-container .banner-with-img .v-middle-wrapper-content{margin:auto 0}#siege-container .banner-with-img .content-wrapper{display:flex;flex-direction:column;height:100%;margin:0}#siege-container .banner-with-img .bg-img{height:auto}@media (min-width: 1024px){#siege-container .banner-with-img .bg-img{height:100%}}#siege-container .banner-with-img .bg-img:after{display:none}#siege-container .banner-with-img img{display:block;width:100%;height:100%;object-fit:cover;object-position:bottom right}#siege-container .banner-with-img svg{height:100%;opacity:.2;position:absolute;right:10%;top:0}#siege-container .breadcrumbs{color:#404040;font-size:16px;margin:20px 0 20px}@media (min-width: 768px){#siege-container .breadcrumbs{color:#fff;margin:30px 0 0}}#siege-container .breadcrumbs a{color:#404040;font-size:16px;opacity:.7}@media (min-width: 768px){#siege-container .breadcrumbs a{color:#fff}}#siege-container .breadcrumbs span{font-size:12px;opacity:.7}#siege-container .breadcrumbs span:last-child{font-size:16px;opacity:1}#siege-container .greencta{background-color:#02de82;border-radius:50px;color:#fff;cursor:pointer;display:inline-block;font-family:"Inter";font-size:20px;font-weight:600;padding:13px 40px;transition:all .3s ease-in-out}@media (min-width: 768px){#siege-container .greencta{font-weight:900;padding:25px 75px}}#siege-container .greencta:hover{background-color:#21cc7e}#siege-container .banner-with-img .greencta{display:none}@media (min-width: 768px){#siege-container .banner-with-img .greencta{display:inline-block}}#siege-container .box{border:1px solid #fff;color:#000;font-size:18px;font-weight:600;line-height:1.8;margin:15px 0;padding:30px}@media (min-width: 768px){#siege-container .box{font-size:21px;margin:100px 0;padding:40px}}#siege-container .graph{background-color:#F6F6F6;margin:40px -20px 80px;padding:60px 20px}@media (min-width: 768px){#siege-container .graph{margin:80px 0 120px;padding:60px}}#siege-container .graph .item{margin-bottom:20px}#siege-container .graph .item:last-child{margin-bottom:0}#siege-container .graph label{display:block;font-size:18px;font-weight:600;margin-bottom:5px}@media (min-width: 768px){#siege-container .graph label{font-size:21px}}#siege-container .graph .status{background-color:#E6E6E6;font-weight:bold;line-height:1;overflow:hidden;padding:13px 20px;text-align:right}#siege-container .graph .item:last-of-type .status{background-color:#02de82;color:#fff;transition:all 1s}#siege-container .icon-zone{margin:120px 0}#siege-container .icon-zone h2{margin-bottom:60px}#siege-container .icons.h{display:grid;grid-template-areas:"g1 g2"\r "g3 g4"\r "g5 g6";gap:20px}@media (min-width: 768px){#siege-container .icons.h{grid-template-areas:"g1 g2 g3"\r "g4 g5 g6"}}@media (min-width: 1024px){#siege-container .icons.h{grid-template-areas:"g1 g2 g3 g4 g5"\r "g6 g7 g8 g9 g10"}}#siege-container .icons.h .icon{background:#fff;width:100%;position:relative}#siege-container .icons.h .icon:nth-child(1){grid-area:g1}#siege-container .icons.h .icon:nth-child(2){grid-area:g2}#siege-container .icons.h .icon:nth-child(3){grid-area:g3}#siege-container .icons.h .icon:nth-child(4){grid-area:g4}#siege-container .icons.h .icon:nth-child(5){grid-area:g5}#siege-container .icons.h .icon:nth-child(6){grid-area:g6}#siege-container .icons.h .icon:nth-child(7){grid-area:g7}#siege-container .icons.h .icon:nth-child(8){grid-area:g8}#siege-container .icons.h .icon:nth-child(9){grid-area:g9}#siege-container .icons.h .icon:nth-child(10){grid-area:g10}#siege-container .icons.h .icon:last-child{margin-right:0}#siege-container .icons.h .icon svg,#siege-container .icons.h .icon img{display:block;left:50%;margin:auto;max-width:30%;position:absolute;top:35%;transform:translate(-50%, -50%)}#siege-container .icons.h .icon span{display:block;font-family:"Inter";font-size:14px;font-weight:600;left:50%;line-height:1.3;position:absolute;text-align:center;top:60%;transform:translate(-50%, 0%);white-space:nowrap}#siege-container .icons.h .icon::after{content:\'\';display:block;padding-bottom:100%}#siege-container .icons.v{display:flex;flex-direction:column;margin-bottom:20px}@media (min-width: 768px){#siege-container .icons.v{float:right;margin-bottom:0;margin-left:50px}}#siege-container .icons.v .icon{align-content:center;background:#F6F6F6;display:flex;margin-bottom:30px;min-height:150px;min-width:150px}#siege-container .icons.v .icon:last-child{margin-bottom:0}#siege-container .icons.v .icon svg,#siege-container .icons.v .icon img{display:block;margin:40px auto;max-width:33%}@media (min-width: 768px){#siege-container .icons.v .icon svg,#siege-container .icons.v .icon img{margin:auto;max-width:50%}}@media (min-width: 768px){#siege-container .icons.l{float:left;margin-left:0;margin-right:40px}}#siege-container .icons.l .icon{min-height:190px;min-width:190px}#siege-container .icons.l+*{overflow:hidden}#siege-container .icon.type-full{align-content:center;background:#F6F6F6;display:flex;margin:20px 0;min-height:150px;min-width:150px}#siege-container .icon.type-full svg{display:block;margin:40px auto;max-width:33%}@media (min-width: 768px){#siege-container .icon.type-full svg{margin:auto;max-width:50%}}@media (min-width: 768px){#siege-container .related .content-wrap{display:flex;justify-content:space-between}#siege-container .related .content-wrap>*{float:none;margin:0 20px 0 0}#siege-container .related .content-wrap>*:last-child{margin-right:0}}#siege-container .related .content-wrap a.cta{border-bottom:1px solid #02de82;color:#000;font-family:"AkzidenzGroteskBE";font-weight:500}#siege-container .related .title h2{border-bottom:2px solid #ddd;color:#000;font-size:36px;margin-bottom:30px;padding-bottom:15px}#siege-container .related h2 svg{height:41px;padding-right:40px}#siege-container .related .card-title h4{line-height:1.4;margin:30px 0}#siege-container .related .img-box img{width:100%}#siege-container .intro-box{margin:0;padding:120px 0;text-align:center}#siege-container .intro-box h4{font-size:36px;font-weight:600;margin-bottom:60px}@media (min-width: 768px){#siege-container .intro-box h4{font-size:48px}}.siege-grid a{color:#000}.siege-grid .siege-grid-container{margin:0 auto;max-width:1144px;padding:0 20px}@media (min-width: 768px){.siege-grid .siege-grid-container{padding:0 20px}}@media (min-width: 1400px){.siege-grid .siege-grid-container{padding:0}}.siege-grid .siege-grid-container>h3{border-bottom:2px solid #D8D8D8;font-size:36px;margin-bottom:30px;padding-bottom:20px}.siege-grid .siege-grid-content-wrap{display:flex;flex-direction:column}@media (min-width: 768px){.siege-grid .siege-grid-content-wrap{flex-direction:row}}.siege-grid .siege-grid-content-wrap>*{flex-basis:0;flex-grow:1;margin-bottom:20px}@media (min-width: 768px){.siege-grid .siege-grid-content-wrap>*{margin-bottom:0;margin-right:30px}.siege-grid .siege-grid-content-wrap>*:last-of-type{margin-right:0}}.siege-grid .siege-grid-content-wrap>*:last-of-type{margin-bottom:0}.siege-grid .card .img{margin-bottom:30px}@media (min-width: 768px){.siege-grid .card .img{margin-bottom:35px}}.siege-grid .card .img img{display:block;width:100%}.siege-grid .card h4{border-bottom:1px solid #02de82;font-size:18px;line-height:1.6;padding-bottom:5px}@media (min-width: 768px){.siege-grid .card h4{font-size:20px}}@media (min-width: 1024px){.siege-grid .card h4{font-size:22px}}@media (max-width: 990px){#toolbar-administration{display:none}body.toolbar-tray-open.toolbar-vertical.toolbar-fixed{margin-left:0 !important}}#root{display:none}body[contenteditable="true"] #siege-container .banner-with-img svg{max-width:50px}\n',""]),e.exports=i},function(e,i,n){"use strict";e.exports=function(e){var i=[];return i.toString=function(){return this.map((function(i){var n=function(e,i){var n=e[1]||"",t=e[3];if(!t)return n;if(i&&"function"==typeof btoa){var o=(a=t,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),g="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(g," */")),r=t.sources.map((function(e){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(e," */")}));return[n].concat(r).concat([o]).join("\n")}var a,c,g;return[n].join("\n")}(i,e);return i[2]?"@media ".concat(i[2]," {").concat(n,"}"):n})).join("")},i.i=function(e,n,t){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(t)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var g=[].concat(e[c]);t&&o[g[0]]||(n&&(g[2]?g[2]="".concat(n," and ").concat(g[2]):g[2]=n),i.push(g))}},i}},function(e,i){function n(){var e=document.querySelector('[class^="styles__NavigationMenuMobileWrapper"]');if(e){var i=e.offsetHeight;document.querySelector(".siege-container").style.marginTop="".concat(i,"px")}}document.addEventListener("DOMContentLoaded",(function(){n()})),window.onresize=function(e){n()};var t=document.querySelector("[data-average]"),o=document.querySelector("[data-self]");function r(){var e=a(t.innerHTML),i=a(o.innerHTML);i>e?t.style.width=e/i*100+"%":o.style.width=i/e*100+"%"}function a(e){var i=parseFloat(e.toString().replace(/,/g,"").replace(/\$/g,""));return isNaN(i)?0:i}r(),o.addEventListener("DOMSubtreeModified",(function(){return r()}))}]);
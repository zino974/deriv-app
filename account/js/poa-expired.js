/*! For license information please see poa-expired.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/shared","@deriv/translations","react"],t):"object"==typeof exports?exports["@deriv/account"]=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):e["@deriv/account"]=t(e["@deriv/components"],e["@deriv/shared"],e["@deriv/translations"],e.react)}(window,(function(e,t,n,r){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s="./Components/poa-expired/index.js")}({"../../../node_modules/classnames/index.js":function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},"./Components/icon-message-content/index.js":function(e,t,n){"use strict";n.r(t);var r=n("react"),a=n.n(r),o=n("../../../node_modules/classnames/index.js"),i=n.n(o),c=n("@deriv/components"),s=n("@deriv/shared");function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(e){var t=e.className,n=e.children,r=e.icon,o=e.icon_row,l=e.message,d=e.text;return a.a.createElement(c.Div100vhContainer,{className:"account-management__message-wrapper",is_disabled:Object(s.isDesktop)(),height_offset:"110px"},a.a.createElement("div",{className:i()("account-management__message-content",u({},"".concat(t,"__message-content"),t))},r&&a.a.createElement("div",{className:i()("account-management__message-icon",u({},"".concat(t,"__message-icon"),t))},r),o&&a.a.createElement("div",null,o),a.a.createElement("div",{className:i()("account-management__message",u({},"".concat(t,"__message"),t))},l),d&&a.a.createElement("div",{className:"account-management__text-container"},a.a.createElement("p",{className:i()("account-management__text",u({},"".concat(t,"__text"),t))},d)),n))};t.default=l},"./Components/poa-expired/index.js":function(e,t,n){"use strict";n.r(t);var r=n("@deriv/components"),a=n("@deriv/translations"),o=n("react"),i=n.n(o),c=n("./Components/icon-message-content/index.js");t.default=function(e){var t=e.onClick;return i.a.createElement(c.default,{message:Object(a.localize)("New proof of address is needed"),text:Object(a.localize)("Your documents for proof of address is expired. Please submit again."),icon:i.a.createElement(r.Icon,{icon:"IcPoaUpload",size:128})},i.a.createElement(r.Button,{onClick:t,has_effect:!0,primary:!0},i.a.createElement("p",{className:"dc-btn__text"},Object(a.localize)("Resubmit"))))}},"@deriv/components":function(t,n){t.exports=e},"@deriv/shared":function(e,n){e.exports=t},"@deriv/translations":function(e,t){e.exports=n},react:function(e,t){e.exports=r}}).default}));
//# sourceMappingURL=poa-expired.js.map
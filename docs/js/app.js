!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(t){return e[t]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="./",t(t.s=0)}([function(e,t,n){"use strict";var o=n(1);n(2),n(3),n(4),window.onload=function(){console.log("Paste your code here!"),o.CustomDropdown.init()},document.addEventListener("DOMContentLoaded",(function(){o.CustomDropdown.init()}))},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CustomDropdown=void 0;var n=function(){var e=document.querySelector(".dropdown-container"),t=document.querySelector(".dropdown-input"),n=document.querySelector(".dropdown-list"),o=document.querySelectorAll(".dropdown-item"),r=e.querySelector(".fas"),c="Select an Item",i=function(e){e.preventDefault(),n.classList.toggle("show"),r.classList.toggle("fa-chevron-up"),r.classList.toggle("fa-chevron-down")},u=function(e){o.forEach((function(e){e.classList.remove("selected");var t=e.querySelector(".fa-check");t&&t.remove()})),e.classList.add("selected"),selectedOption=e;var t=document.createElement("i");t.classList.add("fas","fa-check"),e.prepend(t),d(e.innerText)},d=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:c;c=e,t.value=e};return{init:function(){r.classList.add("fa-chevron-down"),d(),t.addEventListener("click",i),o.forEach((function(e){e.addEventListener("click",(function(e){var t=e.target;t.classList.contains("dropdown-item")&&(u(t),n.classList.remove("show"))}))}))}}}();t.CustomDropdown=n},function(){},function(){},function(){}]);
//# sourceMappingURL=app.js.map
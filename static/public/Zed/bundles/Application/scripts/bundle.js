require=function e(t,n,i){function r(u,s){if(!n[u]){if(!t[u]){var d="function"==typeof require&&require;if(!s&&d)return d(u,!0);if(o)return o(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[u]={exports:{}};t[u][0].call(c.exports,function(e){var n=t[u][1][e];return r(n?n:e)},c,c.exports,e,t,n,i)}return n[u].exports}for(var o="function"==typeof require&&require,u=0;u<i.length;u++)r(i[u]);return r}({1:[function(e,t){"use strict";function n(e){if(!(e instanceof HTMLAnchorElement))throw new TypeError;var t=e.getAttribute("data-hotkey");if(null===t||1!==t.length)throw new Error;var n=(++i).toString();Object.defineProperty(this,"id",{value:n,configurable:!0,enumerable:!0}),Object.defineProperty(this,"key",{value:t,configurable:!0,enumerable:!0}),Object.defineProperty(this,"node",{value:e,configurable:!0,enumerable:!0}),r[n]=this}var i=0,r={};n.prototype.define=function(e){return void 0!==this.id&&this.undefine(),n.call(this,e),this},n.prototype.undefine=function(){if(void 0!==this.id){var e=this.id;Object.defineProperty(this,"id",{value:void 0}),Object.defineProperty(this,"key",{value:""}),Object.defineProperty(this,"node",{value:null}),delete r[e]}},n.prototype.activate=function(){this.node.click()},n.prototype.toString=function(){return n.toString()+this.id},n.fromSelector=function(e){if(!(e instanceof NodeList))throw new TypeError;return Array.prototype.slice.call(e,0).map(function(e){return new n(e)})},n.activateByKey=function(e){if("string"!=typeof e||1!==e.length)throw new TypeError;for(var t in r)return r[t].key===e&&r[t].activate(),!0;return!1},n.toString=function(){return"[HotkeyLink]"},t.exports=n},{}],2:[function(e,t){"use strict";function n(e){var t=e.keyCode,n=String.fromCharCode(e.charCode);27===t?this.open=!this.open:(e.metaKey||e.ctrlKey)&&e.altKey&&-1!==n.search(/^[A-Z0-9a-z]$/)&&u.activateByKey(n)&&e.preventDefault()}function i(){}function r(e){if(!(e instanceof HTMLElement))throw new TypeError;var t=(++s).toString();Object.defineProperty(this,"id",{value:t,configurable:!0,enumerable:!0}),Object.defineProperty(this,"node",{value:e,configurable:!0,enumerable:!0}),d[t]=this,a[t]=1,c[t]=o.fromSelector(e.querySelectorAll("li.group")),l[t]=u.fromSelector(e.querySelectorAll("a[data-hotkey]")),f[t]=n.bind(this),p[t]=i.bind(this),window.addEventListener("keypress",f[t],!1),e.addEventListener("keypress",p[t],!1)}var o=e("./MenuGroup.js"),u=e("./HotkeyLink.js"),s=0,d={},a={},c={},l={},f={},p={};r.prototype.define=function(e){return void 0!==this.id&&this.undefine(),r.call(this,e),this},r.prototype.undefine=function(){if(void 0!==this.id){var e=this.id,t=this.node;Object.defineProperty(this,"id",{value:void 0}),Object.defineProperty(this,"node",{value:null}),delete d[e],delete a[e],c[e].forEach(function(e){e.undefine()}),l[e].forEach(function(e){e.undefine()}),delete c[e],delete l[e],window.removeEventListener("keypress",f[e],!1),t.removeEventListener("keypress",p[e],!1),delete f[e],delete p[e]}},Object.defineProperty(r.prototype,"groups",{get:function(){return void 0!==this.id?c[this.id].slice(0):[]},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"open",{get:function(){return void 0!==this.id&&Boolean(2&a[this.id])},set:function(e){if("boolean"!=typeof e)throw new TypeError;if(void 0===this.id||e===Boolean(2&a[this.id]))return this;var t=this.id;return e?(a[t]|=2,this.node.classList.add("open")):(a[t]&=-3,this.node.classList.remove("open")),this},enumerable:!0,configurable:!0}),r.prototype.hasGroup=function(){},r.prototype.getGroup=function(){},r.prototype.openGroup=function(){},r.prototype.closeGroup=function(){},r.prototype.toString=function(){return r.toString()+" "+this.id},r.toString=function(){return"[Menu]"},t.exports=r},{"./HotkeyLink.js":1,"./MenuGroup.js":3}],3:[function(e,t){"use strict";function n(){this.open=!this.open}function i(e){var t=function(n){n.target===e&&"height"===n.propertyName&&(e.removeEventListener("transitionend",t,!1),e.style.height="auto")}.bind(this);e.addEventListener("transitionend",t,!1),e.style.height=e.scrollHeight+"px"}function r(e){e.style.height=e.clientHeight+"px",window.setTimeout(function(){e.style.height=""},20)}function o(e){var t=(++u).toString();if(!(e instanceof HTMLElement))throw new TypeError;var i=e.querySelector("span"),r=e.querySelector("ul");if(null===i||null===r)throw new TypeError;Object.defineProperty(this,"id",{value:t,configurable:!0,enumerable:!0}),Object.defineProperty(this,"name",{value:null,configurable:!0,enumerable:!0}),Object.defineProperty(this,"node",{value:e,configurable:!0,enumerable:!0}),s[t]=this,d[t]=1,a[t]=i,c[t]=r,l[t]=n.bind(this),i.addEventListener("click",l[t],!1)}var u=0,s={},d={},a={},c={},l={};o.prototype.define=function(e){return void 0!==this.id&&this.undefine(),o.call(this,e),this},o.prototype.undefine=function(){if(void 0!==this.id){var e=this.id;Object.defineProperty(this,"id",{value:void 0}),Object.defineProperty(this,"name",{value:""}),Object.defineProperty(this,"node",{value:null}),a[e].removeEventListener("click",l[e],!1),delete s[e],delete d[e],delete a[e],delete c[e],delete l[e]}},Object.defineProperty(o.prototype,"open",{get:function(){return void 0!==this.id&&Boolean(2&d[this.id])},set:function(e){if("boolean"!=typeof e)throw new TypeError;if(void 0===this.id||e===Boolean(2&d[this.id]))return this;var t=this.id;return e?(d[t]|=2,this.node.classList.add("open"),i(c[t])):(d[t]&=-3,this.node.classList.remove("open"),r(c[t])),this},configurable:!0,enumerable:!0}),o.prototype.toString=function(){return o.toString()+" "+this.id},o.fromSelector=function(e){if(!(e instanceof NodeList))throw new TypeError;return Array.prototype.slice.call(e,0).map(function(e){return new o(e)})},o.toString=function(){return"[MenuGroup]"},t.exports=o},{}],Application:[function(e,t,n){"use strict";var i=e("./Menu.js");window.addEventListener("DOMContentLoaded",function r(){window.removeEventListener("DOMContentLoaded",r,!1);var e=document.querySelector("body.spy-page>nav.spy-page-nav");null!==e&&(n.mainMenu=new i(e),e=document.querySelector("body.spy-page>header.spy-page-header nav.menu"),null!==e&&e.addEventListener("click",function(){n.mainMenu.open=!n.mainMenu.open}))},!1),n.mainMenu=null},{"./Menu.js":2}]},{},["Application"]);
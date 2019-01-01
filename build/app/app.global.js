/*! Built with http://stenciljs.com */
(function(namespace,resourcesUrl){"use strict";
(function(resourcesUrl){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function n(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),r.forEach(function(n){e(t,n,o[n])})}return t}var o={},r={};try{"undefined"!=typeof window&&(o=window),"undefined"!=typeof document&&(r=document),"undefined"!=typeof performance&&performance}catch(t){}var i=(o.navigator||{}).userAgent,c=void 0===i?"":i,s=o,a=r,l=!!a.documentElement&&!!a.head&&"function"==typeof a.addEventListener&&"function"==typeof a.createElement,u=(~c.indexOf("MSIE")||c.indexOf("Trident/"),s.FontAwesomeConfig||{});a&&"function"==typeof a.querySelector&&[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(function(t){var e,n,o=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=[],o=!0,r=!1,i=void 0;try{for(var c,s=t[Symbol.iterator]();!(o=(c=s.next()).done)&&(n.push(c.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{o||null==s.return||s.return()}finally{if(r)throw i}}return n}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()),r=o[1],i=function(t){return""===t||"false"!==t&&("true"===t||t)}(function(t){var e=a.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}(o[0]));null!=i&&(u[r]=i)});var h=n({familyPrefix:"fa",replacementClass:"svg-inline--fa",autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},u);h.autoReplaceSvg||(h.observeMutations=!1);var f=n({},h);s.FontAwesomeConfig=f;var d=s||{};d.___FONT_AWESOME___||(d.___FONT_AWESOME___={}),d.___FONT_AWESOME___.styles||(d.___FONT_AWESOME___.styles={}),d.___FONT_AWESOME___.hooks||(d.___FONT_AWESOME___.hooks={}),d.___FONT_AWESOME___.shims||(d.___FONT_AWESOME___.shims=[]);var p=d.___FONT_AWESOME___,m=[];l&&((a.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(a.readyState)||a.addEventListener("DOMContentLoaded",function t(){a.removeEventListener("DOMContentLoaded",t),m.map(function(t){return t()})}));var v=function(t,e,n,o){var r,i,c,s=Object.keys(t),a=s.length,l=void 0!==o?function(t,e){return function(n,o,r,i){return t.call(e,n,o,r,i)}}(e,o):e;for(void 0===n?(r=1,c=t[s[0]]):(r=0,c=n);r<a;r++)c=l(c,t[i=s[r]],i,t);return c},_=p.styles,g=p.shims,y=function(){var t=function(t){return v(_,function(e,n,o){return e[o]=v(n,t,{}),e},{})};t(function(t,e,n){return t[e[3]]=n,t}),t(function(t,e,n){var o=e[2];return t[n]=n,o.forEach(function(e){t[e]=n}),t});var e="far"in _;v(g,function(t,n){var o=n[1];return"far"!==o||e||(o="fas"),t[n[0]]={prefix:o,iconName:n[2]},t},{})};function b(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=(new Error).stack}y(),(b.prototype=Object.create(Error.prototype)).constructor=b;var E={fill:"currentColor"},O={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},I=(n({},E,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}),n({},O,{attributeName:"opacity"}));n({},E,{cx:"256",cy:"364",r:"28"}),n({},O,{attributeName:"r",values:"28;14;28;28;14;28;"}),n({},I,{values:"1;0;1;1;0;1;"}),n({},E,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),n({},I,{values:"1;0;0;0;0;1;"}),n({},E,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),n({},I,{values:"0;0;1;1;0;0;"});var M=new(function(){function e(){!function(t,n){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),this.definitions={}}var o,r;return o=e,(r=[{key:"add",value:function(){for(var t=this,e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];var i=o.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(e){t.definitions[e]=n({},t.definitions[e]||{},i[e]),function t(e,o){var r=Object.keys(o).reduce(function(t,e){var n=o[e];return n.icon?t[n.iconName]=n.icon:t[e]=n,t},{});"function"==typeof p.hooks.addPack?p.hooks.addPack(e,r):p.styles[e]=n({},p.styles[e]||{},r),"fas"===e&&t("fa",o)}(e,i[e]),y()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,e){var n=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(n).map(function(e){var o=n[e],r=o.prefix,i=o.iconName,c=o.icon;t[r]||(t[r]={}),t[r][i]=c}),t}}])&&t(o.prototype,r),e}());!function(t,e){function n(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0},this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,o=this.intersectionRect;this.intersectionRatio=n?Number((o.width*o.height/n).toFixed(4)):this.isIntersecting?1:0}function o(t,e){var n,o,r,i=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(i.root&&1!=i.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(n=this._checkForIntersections.bind(this),o=this.THROTTLE_TIMEOUT,r=null,function(){r||(r=setTimeout(function(){n(),r=null},o))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(i.rootMargin),this.thresholds=this._initThresholds(i.threshold),this.root=i.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" ")}function r(t,e,n,o){"function"==typeof t.addEventListener?t.addEventListener(e,n,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function i(t,e,n,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,o||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function c(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function s(t,e){for(var n=e;n;){if(n==t)return!0;n=a(n)}return!1}function a(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e}"IntersectionObserver"in t&&"IntersectionObserverEntry"in t&&"intersectionRatio"in t.IntersectionObserverEntry.prototype?"isIntersecting"in t.IntersectionObserverEntry.prototype||Object.defineProperty(t.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}}):(o.prototype.THROTTLE_TIMEOUT=100,o.prototype.POLL_INTERVAL=null,o.prototype.USE_MUTATION_OBSERVER=!0,o.prototype.observe=function(t){if(!this._observationTargets.some(function(e){return e.element==t})){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},o.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter(function(e){return e.element!=t}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},o.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},o.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},o.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter(function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]})},o.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map(function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}});return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},o.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(r(t,"resize",this._checkForIntersections,!0),r(e,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in t&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},o.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,i(t,"resize",this._checkForIntersections,!0),i(e,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},o.prototype._checkForIntersections=function(){var e=this._rootIsInDom(),o=e?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach(function(r){var i=r.element,s=c(i),a=this._rootContainsTarget(i),l=r.entry,u=e&&a&&this._computeTargetAndRootIntersection(i,o),h=r.entry=new n({time:t.performance&&performance.now&&performance.now(),target:i,boundingClientRect:s,rootBounds:o,intersectionRect:u});l?e&&a?this._hasCrossedThreshold(l,h)&&this._queuedEntries.push(h):l&&l.isIntersecting&&this._queuedEntries.push(h):this._queuedEntries.push(h)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},o.prototype._computeTargetAndRootIntersection=function(n,o){if("none"!=t.getComputedStyle(n).display){for(var r,i,s,l,u,h,f,d,p=c(n),m=a(n),v=!1;!v;){var _=null,g=1==m.nodeType?t.getComputedStyle(m):{};if("none"==g.display)return;if(m==this.root||m==e?(v=!0,_=o):m!=e.body&&m!=e.documentElement&&"visible"!=g.overflow&&(_=c(m)),_&&(r=_,i=p,s=Math.max(r.top,i.top),l=Math.min(r.bottom,i.bottom),u=Math.max(r.left,i.left),d=l-s,!(p=(f=(h=Math.min(r.right,i.right))-u)>=0&&d>=0&&{top:s,bottom:l,left:u,right:h,width:f,height:d})))break;m=a(m)}return p}},o.prototype._getRootRect=function(){var t;if(this.root)t=c(this.root);else{var n=e.documentElement,o=e.body;t={top:0,left:0,right:n.clientWidth||o.clientWidth,width:n.clientWidth||o.clientWidth,bottom:n.clientHeight||o.clientHeight,height:n.clientHeight||o.clientHeight}}return this._expandRectByRootMargin(t)},o.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map(function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100}),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},o.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==o)for(var r=0;r<this.thresholds.length;r++){var i=this.thresholds[r];if(i==n||i==o||i<n!=i<o)return!0}},o.prototype._rootIsInDom=function(){return!this.root||s(e,this.root)},o.prototype._rootContainsTarget=function(t){return s(this.root||e,t)},o.prototype._registerInstance=function(){},o.prototype._unregisterInstance=function(){},t.IntersectionObserver=o,t.IntersectionObserverEntry=n)}(window,document),M.add({prefix:"fal",iconName:"window",icon:[512,512,[],"f40e","M96 160c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-32c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zm96 0c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zm192-48v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h416c26.5 0 48 21.5 48 48zm-32 144H32v208c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16V224zm0-32V80c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v112h448z"]},{prefix:"fal",iconName:"server",icon:[512,512,[],"f233","M376 256c0-13.255 10.745-24 24-24s24 10.745 24 24-10.745 24-24 24-24-10.745-24-24zm-40 24c13.255 0 24-10.745 24-24s-10.745-24-24-24-24 10.745-24 24 10.745 24 24 24zm176-128c0 12.296-4.629 23.507-12.232 32 7.603 8.493 12.232 19.704 12.232 32v80c0 12.296-4.629 23.507-12.232 32 7.603 8.493 12.232 19.704 12.232 32v80c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-80c0-12.296 4.629-23.507 12.232-32C4.629 319.507 0 308.296 0 296v-80c0-12.296 4.629-23.507 12.232-32C4.629 175.507 0 164.296 0 152V72c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v80zm-480 0c0 8.822 7.178 16 16 16h416c8.822 0 16-7.178 16-16V72c0-8.822-7.178-16-16-16H48c-8.822 0-16 7.178-16 16v80zm432 48H48c-8.822 0-16 7.178-16 16v80c0 8.822 7.178 16 16 16h416c8.822 0 16-7.178 16-16v-80c0-8.822-7.178-16-16-16zm16 160c0-8.822-7.178-16-16-16H48c-8.822 0-16 7.178-16 16v80c0 8.822 7.178 16 16 16h416c8.822 0 16-7.178 16-16v-80zm-80-224c13.255 0 24-10.745 24-24s-10.745-24-24-24-24 10.745-24 24 10.745 24 24 24zm-64 0c13.255 0 24-10.745 24-24s-10.745-24-24-24-24 10.745-24 24 10.745 24 24 24zm64 240c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z"]},{prefix:"fal",iconName:"cogs",icon:[640,512,[],"f085","M538.6 196.4l-2.5-3.9c-4.1.3-8.1.3-12.2 0l-2.5 4c-5.8 9.2-17.1 13.4-27.5 10.1-13.8-4.3-23-8.8-34.3-18.1-9-7.4-11.2-20.3-5.4-30.4l2.5-4.3c-2.3-3.4-4.3-6.9-6.1-10.6h-9.1c-11.6 0-21.4-8.2-23.6-19.6-2.6-13.7-2.7-24.2.1-38.5 2.1-11.3 12.1-19.5 23.6-19.5h9c1.8-3.7 3.8-7.2 6.1-10.6l-2.6-4.5c-5.8-10-3.6-22.7 5.2-30.3 10.6-9.1 19.7-14.3 33.5-19 10.8-3.7 22.7.7 28.5 10.6l2.6 4.4c4.1-.3 8.1-.3 12.2 0l2.6-4.4c5.8-9.9 17.7-14.3 28.6-10.5 13.3 4.5 22.3 9.6 33.5 19.1 8.8 7.5 10.9 20.2 5.1 30.2l-2.6 4.4c2.3 3.4 4.3 6.9 6.1 10.6h5.1c11.6 0 21.4 8.2 23.6 19.6 2.6 13.7 2.7 24.2-.1 38.5-2.1 11.3-12.1 19.5-23.6 19.5h-5c-1.8 3.7-3.8 7.2-6.1 10.6l2.5 4.3c5.9 10.2 3.5 23.1-5.5 30.5-10.7 8.8-19.9 13.4-34 17.9-10.5 3.3-21.9-.8-27.7-10.1zm12.2-34.5l10.6 18.3c6.7-2.8 12.9-6.4 18.7-10.8l-10.6-18.3 6.4-7.5c4.8-5.7 8.6-12.1 11-19.1l3.3-9.3h21.1c.9-7.1.9-14.4 0-21.5h-21.1l-3.3-9.3c-2.5-7-6.2-13.4-11-19.1l-6.4-7.5L580 39.4c-5.7-4.4-12-8-18.7-10.8l-10.6 18.3-9.7-1.8c-7.3-1.4-14.8-1.4-22.1 0l-9.7 1.8-10.6-18.3C492 31.3 485.7 35 480 39.4l10.6 18.3-6.4 7.5c-4.8 5.7-8.6 12.1-11 19.1l-3.3 9.3h-21.1c-.9 7.1-.9 14.4 0 21.5h21.1l3.3 9.3c2.5 7 6.2 13.4 11 19.1l6.4 7.5-10.6 18.4c5.7 4.4 12 8 18.7 10.8l10.6-18.3 9.7 1.8c7.3 1.4 14.8 1.4 22.1 0l9.7-1.8zM145.3 454.4v-31.6c-12.9-5.5-25.1-12.6-36.4-21.1l-27.5 15.9c-9.8 5.6-22.1 3.7-29.7-4.6-24.2-26.3-38.5-49.5-50.6-88.1-3.4-10.7 1.1-22.3 10.8-28L39.2 281c-1.7-14-1.7-28.1 0-42.1l-27.3-15.8c-9.7-5.6-14.2-17.3-10.8-28 12.1-38.4 26.2-61.6 50.6-88.1 7.6-8.3 20-10.2 29.7-4.6l27.4 15.9c11.3-8.5 23.5-15.5 36.4-21.1V65.6c0-11.3 7.8-21 18.8-23.4 34.7-7.8 62-8.7 101.7 0 11 2.4 18.9 12.2 18.9 23.4v31.6c12.9 5.5 25.1 12.6 36.4 21l27.4-15.8c9.8-5.6 22.2-3.7 29.8 4.6 26.9 29.6 41.5 55.9 52.1 88.5 3.4 10.5-.8 21.9-10.2 27.7l-25 15.8c1.7 14 1.7 28.1 0 42.1l28.1 17.5c8.6 5.4 13 15.6 10.8 25.5-6.9 31.3-33 64.6-55.9 89.2-7.6 8.2-19.9 10-29.6 4.4L321 401.8c-11.3 8.5-23.5 15.5-36.4 21.1v31.6c0 11.2-7.8 21-18.8 23.4-37.5 8.3-64.9 8.2-101.9 0-10.8-2.5-18.6-12.3-18.6-23.5zm32-6.2c24.8 5 50.5 5 75.3 0v-47.7l10.7-3.8c16.8-5.9 32.3-14.9 45.9-26.5l8.6-7.4 41.4 23.9c16.8-19.1 34-41.3 42.1-65.2l-41.4-23.9 2.1-11.1c3.2-17.6 3.2-35.5 0-53.1l-2.1-11.1 41.4-23.9c-8.1-23.9-25.3-46.2-42.1-65.2l-41.4 23.9-8.6-7.4c-13.6-11.7-29-20.6-45.9-26.5l-10.7-3.8V71.8c-24.8-5-50.5-5-75.3 0v47.7l-10.7 3.8c-16.8 5.9-32.3 14.9-45.9 26.5l-8.6 7.4-41.4-23.9A192.19 192.19 0 0 0 33 198.5l41.4 23.9-2.1 11.1c-3.2 17.6-3.2 35.5 0 53.1l2.1 11.1L33 321.6c8.1 23.9 20.9 46.2 37.7 65.2l41.4-23.9 8.6 7.4c13.6 11.7 29 20.6 45.9 26.5l10.7 3.8v47.6zm38.4-105.3c-45.7 0-82.9-37.2-82.9-82.9s37.2-82.9 82.9-82.9 82.9 37.2 82.9 82.9-37.2 82.9-82.9 82.9zm0-133.8c-28 0-50.9 22.8-50.9 50.9s22.8 50.9 50.9 50.9c28 0 50.9-22.8 50.9-50.9s-22.8-50.9-50.9-50.9zm322.9 291.7l-2.5-3.9c-4.1.3-8.1.3-12.2 0l-2.5 4c-5.8 9.2-17.1 13.4-27.5 10.1-13.8-4.3-23-8.8-34.3-18.1-9-7.4-11.2-20.3-5.4-30.4l2.5-4.3c-2.3-3.4-4.3-6.9-6.1-10.6h-9.1c-11.6 0-21.4-8.2-23.6-19.6-2.6-13.7-2.7-24.2.1-38.5 2.1-11.3 12.1-19.5 23.6-19.5h9c1.8-3.7 3.8-7.2 6.1-10.6l-2.6-4.5c-5.8-10-3.6-22.7 5.2-30.3 10.6-9.1 19.7-14.3 33.5-19 10.8-3.7 22.7.7 28.5 10.6l2.6 4.4c4.1-.3 8.1-.3 12.2 0l2.6-4.4c5.8-9.9 17.7-14.3 28.6-10.5 13.3 4.5 22.3 9.6 33.5 19.1 8.8 7.5 10.9 20.2 5.1 30.2l-2.6 4.4c2.3 3.4 4.3 6.9 6.1 10.6h5.1c11.6 0 21.4 8.2 23.6 19.6 2.6 13.7 2.7 24.2-.1 38.5-2.1 11.3-12.1 19.5-23.6 19.5h-5c-1.8 3.7-3.8 7.2-6.1 10.6l2.5 4.3c5.9 10.2 3.5 23.1-5.5 30.5-10.7 8.8-19.9 13.4-34 17.9-10.5 3.2-21.9-.9-27.7-10.1zm12.2-34.6l10.6 18.3c6.7-2.8 12.9-6.4 18.7-10.8l-10.6-18.3 6.4-7.5c4.8-5.7 8.6-12.1 11-19.1l3.3-9.3h21.1c.9-7.1.9-14.4 0-21.5h-21.1l-3.3-9.3c-2.5-7-6.2-13.4-11-19.1l-6.4-7.5 10.6-18.3c-5.7-4.4-12-8-18.7-10.8l-10.6 18.3-9.7-1.8c-7.3-1.4-14.8-1.4-22.1 0l-9.7 1.8-10.6-18.3c-6.7 2.8-12.9 6.4-18.7 10.8l10.6 18.3-6.4 7.5c-4.8 5.7-8.6 12.1-11 19.1l-3.3 9.3h-21.1c-.9 7.1-.9 14.4 0 21.5h21.1l3.3 9.3c2.5 7 6.2 13.4 11 19.1l6.4 7.5-10.6 18.3c5.7 4.4 12 8 18.7 10.8l10.6-18.3 9.7 1.8c7.3 1.4 14.8 1.4 22.1 0l9.7-1.8zM560 408c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zm0-304.3c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.4 32-32z"]});
})(resourcesUrl);
})("App");
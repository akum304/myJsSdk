(()=>{var e={757:(e,t,n)=>{e.exports=n(666)},666:e=>{var t=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof y?t:y,a=Object.create(o.prototype),i=new O(r||[]);return a._invoke=function(e,t,n){var r=p;return function(o,a){if(r===f)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw a;return L()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=T(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var u=l(e,t,n);if("normal"===u.type){if(r=n.done?d:h,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}(e,n,i),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var p="suspendedStart",h="suspendedYield",f="executing",d="completed",m={};function y(){}function g(){}function v(){}var b={};u(b,a,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(j([])));x&&x!==n&&r.call(x,a)&&(b=x);var k=v.prototype=y.prototype=Object.create(b);function I(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(o,a,i,c){var u=l(e[o],e,a);if("throw"!==u.type){var s=u.arg,p=s.value;return p&&"object"==typeof p&&r.call(p,"__await")?t.resolve(p.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(p).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,c)}))}c(u.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function T(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,T(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function B(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function j(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:L}}function L(){return{value:t,done:!0}}return g.prototype=v,u(k,"constructor",v),u(v,"constructor",g),g.displayName=u(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},I(E.prototype),u(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new E(s(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},I(k),u(k,c,"Generator"),u(k,a,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(B),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),B(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;B(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:j(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function r(e){return function(){var n=this,r=arguments;return new Promise((function(o,a){var i=e.apply(n,r);function c(e){t(i,o,a,c,u,"next",e)}function u(e){t(i,o,a,c,u,"throw",e)}c(void 0)}))}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function c(e,t){var n=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}(e,t);return function(e,t){return t.get?t.get.call(e):t.value}(e,n)}var u=n(757),s=n.n(u),l="http://localhost:5000";function p(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function h(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){p(a,r,o,i,c,"next",e)}function c(e){p(a,r,o,i,c,"throw",e)}i(void 0)}))}}var f=function(){var e=h(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(l,"/auth/fetchProfile?keyId=").concat(t,"&profileName=").concat(n));case 2:return r=e.sent,e.next=5,r;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=h(regeneratorRuntime.mark((function e(t,n,r){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.post("".concat(l,"/auth/renewTokens"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",keyId:n},body:JSON.stringify({publicKey:localStorage.getItem("pKey"),refreshToken:t,userSubId:r,renewRefreshToken:!0})});case 3:return o=e.sent,e.abrupt("return",o);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",void 0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,r){return e.apply(this,arguments)}}(),m=function(){var e=h(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(l,"/auth/logout"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({userId:t,publicKey:n})});case 3:return localStorage.removeItem("refreshToken"),localStorage.removeItem("privateKey"),localStorage.removeItem("publicKey"),e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}();function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function g(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function v(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){g(a,r,o,i,c,"next",e)}function c(e){g(a,r,o,i,c,"throw",e)}i(void 0)}))}}var b=function(){var e=v(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("publicKey"),(n=localStorage.getItem("privateKey"))&&t){e.next=12;break}return e.next=5,crypto.subtle.generateKey({name:"RSA-OAEP",modulusLength:4096,publicExponent:new Uint8Array([1,0,1]),hash:"SHA-256"},!0,["encrypt","decrypt"]);case 5:return r=e.sent,e.next=8,crypto.subtle.exportKey("jwk",r.publicKey);case 8:return t=e.sent,e.next=11,crypto.subtle.exportKey("jwk",r.privateKey);case 11:n=e.sent;case 12:return localStorage.setItem("publicKey",t),localStorage.setItem("privateKey",n),e.abrupt("return",{publicKey:t,privateKey:n});case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(e){return new Promise((function(t){return setTimeout(t,e)}))},x=function(){var e=v(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(32);case 2:return t=e.sent,n=k(t),e.abrupt("return",{codeVerifier:t,hash:n});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=v(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,crypto.subtle.digest("SHA-256",(new TextEncoder).encode(t));case 2:return n=e.sent,r=btoa(String.fromCharCode.apply(String,(o=new Uint8Array(n),function(e){if(Array.isArray(e))return y(e)}(o)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(o)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()))).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_"),e.abrupt("return",r);case 5:case"end":return e.stop()}var o}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=v(regeneratorRuntime.mark((function e(t){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=0;o<t;o++)n+=r.charAt(Math.floor(Math.random()*r.length));return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function E(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function T(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){E(a,r,o,i,c,"next",e)}function c(e){E(a,r,o,i,c,"throw",e)}i(void 0)}))}}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var B=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.profileName=n,this.keyId=t}var t,n,r,o,a,i;return t=e,n=[{key:"getTokens",value:(i=T(regeneratorRuntime.mark((function e(t,n,r,o){var a,i,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.signInMode,i={userId:t.userId,keyId:this.keyId,authCode:n,signInMode:a||0,additionalInfo:"AdditionalInfo",codeVerifier:o},c=null,e.next=5,fetch("".concat(l,"/auth/tokens"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(i)});case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e,this)}))),function(e,t,n,r){return i.apply(this,arguments)})},{key:"verifyAuth",value:(a=T(regeneratorRuntime.mark((function e(t){var n,r,o,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.userId,r=t.challengeId,o={userId:n,challengeId:r},a=null,e.next=5,fetch("".concat(l,"/auth/verify"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(o)});case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)}))),function(e){return a.apply(this,arguments)})},{key:"initiateAuth",value:(o=T(regeneratorRuntime.mark((function e(t,n,r,o){var a,i,c,u,s,p,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:if((a=e.sent).publicKey,a.privateKey,i=localStorage.getItem("pKey")){e.next=11;break}return e.next=9,I(32);case 9:i=e.sent,localStorage.setItem("pKey",i);case 11:return e.next=13,I(32);case 13:return c=e.sent,u=n.profileId,n.signInMode,s=n.idType,p={profileId:u,userPublicId:t,keyId:this.keyId,publicKey:i,deviceType:navigator.platform,deviceName:navigator.userAgent,codeChallenge:r,state:c,signInMode:o||0,idType:s||0},e.prev=16,e.next=19,fetch("".concat(l,"/auth/initiate"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(p)});case 19:return h=e.sent,e.abrupt("return",h);case 23:throw e.prev=23,e.t0=e.catch(16),console.log("Error from /auth/initiate : "+e.t0),e.t0;case 27:case"end":return e.stop()}}),e,this,[[16,23]])}))),function(e,t,n,r){return o.apply(this,arguments)})},{key:"submitChallenge",value:(r=T(regeneratorRuntime.mark((function e(t,n,r,o,a){var i,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={userId:n,challengeType:o,challenge:r,challengeId:t,profileId:a},e.prev=1,e.next=4,fetch("".concat(l,"/auth/submitChallenge"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(i)});case 4:return c=e.sent,e.abrupt("return",c);case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),function(e,t,n,o,a){return r.apply(this,arguments)})}],n&&S(t.prototype,n),e}(),O=function(){function e(t,n){o(this,e),this.metaData=t,this.containerId=n}return i(e,[{key:"embed",value:function(){var e=document.getElementsByTagName("head")[0];e.innerHTML+='<link rel="stylesheet" href="'.concat("https://dev.secuuth.io/CSS/prod/secuuth.css",'" />');var t=document.createElement("script");t.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9/core.js");var n=document.createElement("script");n.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9/sha256.js"),e.insertBefore(t,e.childNodes[0]),e.insertBefore(n,e.childNodes[0])}},{key:"injectCss",value:function(){var e=this.metaData,t=e.advancedStyling,n=e.cssStyle,r=t.modalTitleColor,o=t.modalBackgroundColor,a=t.btnTextColor,i=t.btnBgColor;console.log("cssStyle "+JSON.stringify(n));var c=n.logo,u="\n    <style>\n    #".concat(this.containerId," {\n      padding: 50px 20px;\n      border-radius: 12px;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      background-color: rgba(").concat(o.color.r,",").concat(o.color.g,",").concat(o.color.b,",").concat(o.color.a,");\n      position: relative;\n    }\n    \n    .su-btn {\n      background-color: rgba(").concat(i.color.r,",").concat(i.color.g,",").concat(i.color.b,",").concat(i.color.a,");\n      color: ").concat(a.hex||"white",";\n    }\n    .su-title {\n      color: ").concat(r.hex||"black","\n    }\n    .logo {\n      ").concat(c,"\n    }\n    </style>\n    ");document.getElementsByTagName("head")[0].innerHTML+=u}}]),e}(),j=function(){function e(t){o(this,e),this.fields=t}var t;return i(e,[{key:"formHTMLControls",value:(t=r(s().mark((function e(t){var n,r,o,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n='<div class="form-group">',e.t0=t.type,e.next="text"===e.t0?4:9;break;case 4:return r=t.label,o=t.name,a=t.placeholder,n+='\n                  <label for="'.concat(o,'">').concat(r,':</label>\n                  <input type="text" class="secuuth-db" id="').concat(o,'" name="').concat(o,'" placeholder="').concat(a,'"/>\n                '),e.abrupt("break",9);case 9:return n+="</div>",e.abrupt("return",n);case 11:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})}],[{key:"getJSX",value:function(e,t,n){var r,o=e.profileMetaData,a=o.basicStyling,i=o.advancedStyling,c=(a.isSms,a.countryCode,a.termsAndService),u=a.privacyPolicy,s=i.modalTitle,l=i.logo,p=i.btnText,h=e.signInMode;return r="0"==h?"Enter Your Email Id":"1"==h?"Enter 10 digit Mobile Number":"Enter Your Email/Mobile",'\n    \n        <img\n          id="imgLogo"\n          src="'.concat(l,'"\n          alt="logo"\n          class="logo"\n          onerror=\'this.style.display = "none"\'\n        />\n        \n        \n        <div id="su-title" class="su-title">').concat(s,"</div>\n        <input ").concat(1==h?'type="number"':'type="email"','\n         class="su-ip-text" id="suipemailp" name="email" autoComplete="on"   placeholder="').concat(r,'" required  />\n        <button class="su-btn" id="su-submit-btn" >').concat(p,'</button>\n        \n        <p id="su-term">').concat(c||u?'By clicking the button above, you agree to our <a href="'.concat(c,'" target="_blank">termsAndService</a> and <a href="').concat(u,'" target="_blank">privacyPolicy</a>'):"",'  </p>\n        <div id="heading-msg"></div>\n\n        <div id="magicLogo"></div>\n\n\n        <div id="subHeading-msg"></div>\n        \n        <p id="su-msg"></p>\n        \n        \n        \n      \n    ')}},{key:"getJSXOtp",value:function(e,t,n){var r=e.profileMetaData,o=(r.basicStyling,r.advancedStyling),a=o.modalTitle,i=o.logo,c=o.btnText;return'\n    \n        <img\n          src="'.concat(i,'"\n          alt="logo"\n          class="logo"\n          onerror=\'this.style.display = "none"\'\n        />\n        \n        <div class="su-title">').concat(a,'</div>\n        <p id="su-msg"></p>\n        <input type="number"  class="su-ip-text" id="otp" name="otp"  pattern="[0-9]{6}" maxlength="6" placeholder="Enter The OTP" required  />\n        <button class="su-btn" id="su-submits-btn"   >').concat(c,'</button>\n        <div  id="times"></div>\n        <div  id="otp-msg"></div>\n        ')}}]),e}();function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?L(Object(r),!0).forEach((function(n){e(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function P(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}var A,R,C,N=1,H="OOPS! Something went wrong, please try again later",K=new WeakMap,_=new WeakMap,D=new WeakMap,J=function(){function e(t){var n,a,i,u=this,l=t.keyId,p=t.profileName,h=t.containerId,d=t.onSubmit;o(this,e),P(this,K,{writable:!0,value:(n=r(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.checkResponse();case 2:case"end":return e.stop()}}),e)}))),function(){return n.apply(this,arguments)})}),P(this,_,{writable:!0,value:(a=r(s().mark((function e(){var t,n,r,o,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(u.keyId,u.profileName);case 2:return 200!=(t=e.sent).status&&(document.getElementById(u.containerId).innerHTML="\n      <p>oops something went wrong!!! </p>\n      "),e.next=6,t.json();case 6:n=e.sent,r=n.profileMetaData,o=JSON.parse(r),a=M(M({},n),{},{profileMetaData:M({},o)}),u.profile=a,u.csx=new O(u.profile.profileMetaData,u.containerId),u.csx.embed(),c(u,D).call(u,"");case 14:case"end":return e.stop()}}),e)}))),function(){return a.apply(this,arguments)})}),P(this,D,{writable:!0,value:(i=r(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u.idTypes=u.profile.idType,u.signInMode=u.profile.signInMode,u.csx.injectCss(),n=j.getJSX(u.profile),document.getElementById(u.containerId).innerHTML=n,document.getElementById("su-msg").innerHTML=t,document.getElementById("su-submit-btn").onclick=r(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.submit().then(function(){var e=r(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.clientSubmit(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),e.abrupt("return");case 8:case"end":return e.stop()}}),e)}))),function(e){return i.apply(this,arguments)})}),this.profile,this.hash,this.codeVerifier,this.email,this.idType,this.signInMode,this.logo,this.subHeading,this.heading,this.mountPoint,this.challenge,this.challengeId,this.userId,this.initAuthResponseBody,this.keyId=l,this.profileName=p,this.containerId=h,this.clientSubmit=d,this.auth=new B(this.keyId,this.profileName),c(this,K).call(this)}var t,n,a,u,l,p,h,y,g,v;return i(e,[{key:"checkResponse",value:(v=r(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(this,_).call(this,"");case 1:case"end":return e.stop()}}),e,this)}))),function(){return v.apply(this,arguments)})},{key:"otpForm",value:(g=r(s().mark((function e(t){var n,o=this;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=j.getJSXOtp(this.profile),document.getElementById(this.containerId).innerHTML=n,document.getElementById("su-msg").innerHTML=t,document.getElementById("otp-msg").innerHTML="Did not receive otp <a href="+location.origin+location.pathname+">start again</a>",document.getElementById("su-submits-btn").onclick=r(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.submit().then(function(){var e=r(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.clientSubmit(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),document.getElementById("su-submits-btn").hidden=!0,e.abrupt("return");case 7:case"end":return e.stop()}}),e,this)}))),function(e){return g.apply(this,arguments)})},{key:"validatePhoneNumber",value:(y=r(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,e.abrupt("return",n.test(t));case 2:case"end":return e.stop()}}),e)}))),function(e){return y.apply(this,arguments)})},{key:"submit",value:(h=r(s().mark((function e(){var t,n,r,o,a,i,c,u,l,p,h,f,d,m,y;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===document.getElementById("suipemailp")||null==document.getElementById("suipemailp")){e.next=30;break}if(this.email=document.getElementById("suipemailp").value,2!=this.signInMode){e.next=20;break}if(t=/^\+?[0-9]+$/,this.email.match(t)){e.next=13;break}if(this.signInMode=0,n=/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/,0!=document.getElementById("suipemailp").value.length&&document.getElementById("suipemailp").value.match(n)){e.next=11;break}return document.getElementById("su-msg").innerHTML="Enter correct email id",this.signInMode=2,e.abrupt("return");case 11:e.next=19;break;case 13:if(this.signInMode=1,10==document.getElementById("suipemailp").value.length&&document.getElementById("suipemailp").value.match("[1-9]{1}[0-9]{9}")){e.next=19;break}return this.signInMode=2,document.getElementById("su-msg").innerHTML="Enter 10 digit mobile number",e.abrupt("return");case 19:this.idTypes=1;case 20:if(0!=this.signInMode){e.next=25;break}if(r=/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/,0!=document.getElementById("suipemailp").value.length&&document.getElementById("suipemailp").value.match(r)){e.next=25;break}return document.getElementById("su-msg").innerHTML="Enter correct email id",e.abrupt("return");case 25:if(1!=this.signInMode){e.next=30;break}if(10==document.getElementById("suipemailp").value.length&&document.getElementById("suipemailp").value.match("[1-9]{1}[0-9]{9}")){e.next=30;break}return document.getElementById("su-msg").innerHTML="Enter 10 digit mobile number",e.abrupt("return");case 30:return e.next=32,this.InitAuthResponseBody(this.signInMode);case 32:if(o=e.sent,this.initAuthResponseBody=o,this.mountPoint=document.getElementById(this.containerId),"No"!=o.challengeSent){e.next=39;break}A=this.initAuthResponseBody.authCode,e.next=103;break;case 39:if("Yes"!=o.challengeSent||0!=this.idTypes){e.next=73;break}a=this.profile.profileMetaData.magicLinkPromptConfig,i=a.logo,c=a.subHeading,u=a.heading,this.logo=i,this.subHeading=c,this.heading=u,this.mountPoint=document.getElementById(this.containerId),document.getElementById("suipemailp").remove(),document.getElementById("su-submit-btn").remove(),document.getElementById("su-term").remove(),document.getElementById("su-title").remove(),document.getElementById("imgLogo").remove(),document.getElementById("su-msg").innerHTML="Did not receive mail <a href="+location.origin+location.pathname+">try again</a>",document.getElementById("subHeading-msg").innerHTML="".concat(this.subHeading," <b>").concat(this.email,"</b>"),document.getElementById("heading-msg").innerHTML="Link has been sent to ".concat(this.heading," "),document.getElementById("magicLogo").innerHTML='\n      <img\n      src="'.concat(this.logo,'"\n      alt="logo"\n      class="logo"\n      onerror=\'this.style.display = "none"\'\n    />\n      '),l=0;case 56:if(!(l<100)){e.next=69;break}return e.next=59,this.verifyChallenge(this.initAuthResponseBody);case 59:if("Pending"!=(R=e.sent).approved){e.next=65;break}return e.next=63,w(3e3);case 63:e.next=66;break;case 65:return e.abrupt("break",69);case 66:l++,e.next=56;break;case 69:"No"==R.approved&&(N=0,document.getElementById("su-msg").innerHTML="\n              Email link is expired, please try again"),A=R.authCode,e.next=103;break;case 73:h=o.challengeId,f=o.userId,this.otpForm("OTP sent to: "+this.email),m=60;case 77:if(!(m>=0)){e.next=103;break}if(6!=document.getElementById("otp").value.length){e.next=97;break}if((y=document.getElementById("otp").value)!=d){e.next=86;break}return d=y,e.next=84,w(1e3);case 84:return this.countdown(m),e.abrupt("continue",100);case 86:return e.next=88,this.auth.submitChallenge(h,f,y,this.signInMode,this.profile.profileId);case 88:if(p=e.sent,d=y,200!=p.status&&(N=0,document.getElementById("su-msg").innerHTML="\n              Wrong OTP Please Enter Correct"),200!=p.status){e.next=97;break}return e.next=94,this.verifyChallenge(this.initAuthResponseBody);case 94:return"No"==(R=e.sent).approved?(N=0,document.getElementById("su-msg").innerHTML="\n              Wrong OTP Please Enter Correct"):(A=R.authCode,N=1),e.abrupt("break",103);case 97:return e.next=99,w(1e3);case 99:this.countdown(m);case 100:m--,e.next=77;break;case 103:if(1!=N){e.next=108;break}return e.next=106,this.fetchToken(this.initAuthResponseBody,A);case 106:return C=e.sent,e.abrupt("return",C);case 108:case"end":return e.stop()}}),e,this)}))),function(){return h.apply(this,arguments)})},{key:"InitAuthResponseBody",value:(p=r(s().mark((function e(t){var n,r,o,a,i,u;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:return n=e.sent,r=n.hash,o=n.codeVerifier,this.hash=r,this.codeVerifier=o,e.next=9,this.auth.initiateAuth(this.email,this.profile,o,t);case 9:if(200==(a=e.sent).status){e.next=18;break}if(403!=a.status){e.next=16;break}return e.next=14,a.json();case 14:i=e.sent,H=i.message;case 16:return c(this,D).call(this,H),e.abrupt("return");case 18:return e.next=20,a.json();case 20:if(!("retStatus"in(u=e.sent))){e.next=24;break}return c(this,D).call(this,H),e.abrupt("return");case 24:return e.abrupt("return",u);case 25:case"end":return e.stop()}}),e,this)}))),function(e){return p.apply(this,arguments)})},{key:"verifyChallenge",value:(l=r(s().mark((function e(t){var n,r,o,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.challengeId,r=t.userId,o=null,a=null,e.next=5,this.auth.verifyAuth({userId:r,challengeId:n});case 5:if(200==(o=e.sent).status){e.next=10;break}return document.getElementById("su-overlay").remove(),c(this,D).call(this,H),e.abrupt("return");case 10:return e.next=12,o.json();case 12:return a=e.sent,e.abrupt("return",a);case 14:case"end":return e.stop()}}),e,this)}))),function(e){return l.apply(this,arguments)})},{key:"fetchToken",value:(u=r(s().mark((function e(t,n){var r,o,a,i,u,l,p;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.auth.getTokens(t,n,this.profile,this.codeVerifier);case 2:if(200==(r=e.sent).status){e.next=7;break}return document.getElementById("su-overlay").remove(),c(this,D).call(this,H),e.abrupt("return");case 7:return e.next=9,r.json();case 9:return o=e.sent,a=o.tokens,o.user,i=a.accessToken,u=a.idToken,l=a.refreshToken,i&&u&&l&&(localStorage.setItem("refreshToken",l),(p=document.getElementById("su-overlay"))&&p.remove(),0==this.idTypes&&(this.mountPoint.innerHTML+='<div id="su-overlay" class="su-overlay"><svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark_circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark_check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>\n        </div>')),e.abrupt("return",o);case 14:case"end":return e.stop()}}),e,this)}))),function(e,t){return u.apply(this,arguments)})},{key:"countdown",value:(a=r(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=t){e.next=9;break}return document.getElementById("su-submits-btn").hidden=!1,document.getElementById("otp").remove(),document.getElementById("times").remove(),document.getElementById("su-msg").innerHTML="\n             OTP Expire",document.getElementById("su-submits-btn").innerText="Regenerate OTP",e.abrupt("return");case 9:document.getElementById("times").innerHTML="\n      Expires in ".concat(t," ");case 10:return e.abrupt("return");case 11:case"end":return e.stop()}}),e)}))),function(e){return a.apply(this,arguments)})}],[{key:"renewToken",value:(n=r(s().mark((function e(t,n,r){var o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t,n,r).then((function(e){if(e.refreshToken)return localStorage.setItem("refreshToken",e.refreshToken),e})).catch((function(e){}));case 2:return o=e.sent,e.abrupt("return",o);case 4:case"end":return e.stop()}}),e)}))),function(e,t,r){return n.apply(this,arguments)})},{key:"logoutPartial",value:function(){localStorage.removeItem("refreshToken"),localStorage.removeItem("privateKey"),localStorage.removeItem("publicKey")}},{key:"logout",value:(t=r(s().mark((function e(t,n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t,n).then((function(e){if(e)return e})).catch((function(){}));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),function(e,n){return t.apply(this,arguments)})}]),e}();window.Secuuth=J})()})();

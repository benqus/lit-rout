!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t){return n(t)}function s(t,e,i){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,i){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=r(t)););return t}(t,e);if(n){var s=Object.getOwnPropertyDescriptor(n,e);return s.get?s.get.call(i||t):s.value}})(t,e,i)}function o(t,e,i){return s(t,e,i)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function h(t,e){return!e||"object"!=((i=e)&&i.constructor===Symbol?"symbol":typeof i)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e;var i}function u(t,e){void 0===e&&(e={});for(var i=function(t){for(var e=[],i=0;i<t.length;){var n=t[i];if("*"!==n&&"+"!==n&&"?"!==n)if("\\"!==n)if("{"!==n)if("}"!==n)if(":"!==n)if("("!==n)e.push({type:"CHAR",index:i,value:t[i++]});else{var r=1,s="";if("?"===t[l=i+1])throw new TypeError('Pattern cannot start with "?" at '+l);for(;l<t.length;)if("\\"!==t[l]){if(")"===t[l]){if(0==--r){l++;break}}else if("("===t[l]&&(r++,"?"!==t[l+1]))throw new TypeError("Capturing groups are not allowed at "+l);s+=t[l++]}else s+=t[l++]+t[l++];if(r)throw new TypeError("Unbalanced pattern at "+i);if(!s)throw new TypeError("Missing pattern at "+i);e.push({type:"PATTERN",index:i,value:s}),i=l}else{for(var o="",l=i+1;l<t.length;){var a=t.charCodeAt(l);if(!(a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122||95===a))break;o+=t[l++]}if(!o)throw new TypeError("Missing parameter name at "+i);e.push({type:"NAME",index:i,value:o}),i=l}else e.push({type:"CLOSE",index:i,value:t[i++]});else e.push({type:"OPEN",index:i,value:t[i++]});else e.push({type:"ESCAPED_CHAR",index:i++,value:t[i++]});else e.push({type:"MODIFIER",index:i,value:t[i++]})}return e.push({type:"END",index:i,value:""}),e}(t),n=e.prefixes,r=void 0===n?"./":n,s="[^"+d(e.delimiter||"/#?")+"]+?",o=[],l=0,a=0,h="",u=function(t){if(a<i.length&&i[a].type===t)return i[a++].value},c=function(t){var e=u(t);if(void 0!==e)return e;var n=i[a],r=n.type,s=n.index;throw new TypeError("Unexpected "+r+" at "+s+", expected "+t)},p=function(){for(var t,e="";t=u("CHAR")||u("ESCAPED_CHAR");)e+=t;return e};a<i.length;){var f=u("CHAR"),v=u("NAME"),_=u("PATTERN");if(v||_){var $=f||"";-1===r.indexOf($)&&(h+=$,$=""),h&&(o.push(h),h=""),o.push({name:v||l++,prefix:$,suffix:"",pattern:_||s,modifier:u("MODIFIER")||""})}else{var y=f||u("ESCAPED_CHAR");if(y)h+=y;else if(h&&(o.push(h),h=""),u("OPEN")){$=p();var g=u("NAME")||"",m=u("PATTERN")||"",A=p();c("CLOSE"),o.push({name:g||(m?l++:""),pattern:g&&!m?s:m,prefix:$,suffix:A,modifier:u("MODIFIER")||""})}else c("END")}}return o}function c(t,e){var i=[];return function(t,e,i){void 0===i&&(i={});var n=i.decode,r=void 0===n?function(t){return t}:n;return function(i){var n=t.exec(i);if(!n)return!1;for(var s=n[0],o=n.index,l=Object.create(null),a=function(t){if(void 0===n[t])return"continue";var i=e[t-1];"*"===i.modifier||"+"===i.modifier?l[i.name]=n[t].split(i.prefix+i.suffix).map((function(t){return r(t,i)})):l[i.name]=r(n[t],i)},h=1;h<n.length;h++)a(h);return{path:s,index:o,params:l}}}(v(t,i,e),i,e)}function d(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function p(t){return t&&t.sensitive?"":"i"}function f(t,e,i){return function(t,e,i){void 0===i&&(i={});for(var n=i.strict,r=void 0!==n&&n,s=i.start,o=void 0===s||s,l=i.end,a=void 0===l||l,h=i.encode,u=void 0===h?function(t){return t}:h,c="["+d(i.endsWith||"")+"]|$",f="["+d(i.delimiter||"/#?")+"]",v=o?"^":"",_=0,$=t;_<$.length;_++){var y=$[_];if("string"==typeof y)v+=d(u(y));else{var g=d(u(y.prefix)),m=d(u(y.suffix));if(y.pattern)if(e&&e.push(y),g||m)if("+"===y.modifier||"*"===y.modifier){var A="*"===y.modifier?"?":"";v+="(?:"+g+"((?:"+y.pattern+")(?:"+m+g+"(?:"+y.pattern+"))*)"+m+")"+A}else v+="(?:"+g+"("+y.pattern+")"+m+")"+y.modifier;else v+="("+y.pattern+")"+y.modifier;else v+="(?:"+g+m+")"+y.modifier}}if(a)r||(v+=f+"?"),v+=i.endsWith?"(?="+c+")":"$";else{var E=t[t.length-1],b="string"==typeof E?f.indexOf(E[E.length-1])>-1:void 0===E;r||(v+="(?:"+f+"(?="+c+"))?"),b||(v+="(?="+f+"|"+c+")")}return new RegExp(v,p(i))}(u(t,i),e,i)}function v(t,e,i){return t instanceof RegExp?function(t,e){if(!e)return t;for(var i=/\((?:\?<(.*?)>)?(?!\?)/g,n=0,r=i.exec(t.source);r;)e.push({name:r[1]||n++,prefix:"",suffix:"",modifier:"",pattern:""}),r=i.exec(t.source);return t}(t,e):Array.isArray(t)?function(t,e,i){var n=t.map((function(t){return v(t,e,i).source}));return new RegExp("(?:"+n.join("|")+")",p(i))}(t,e,i):f(t,e,i)}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$=Symbol(),y=new Map;class g{constructor(t,e){if(this._$cssResult$=!0,e!==$)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=y.get(this.cssText);return _&&void 0===t&&(y.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const m=_?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new g("string"==typeof t?t:t+"",$))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var A;const E=window.trustedTypes,b=E?E.emptyScript:"",w=window.reactiveElementPolyfillSupport,S={toAttribute(t,e){switch(e){case Boolean:t=t?b:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},C=(t,e)=>e!==t&&(e==e||t==t),x={attribute:!0,type:String,converter:S,reflect:!1,hasChanged:C};class P extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const n=this._$Eh(i,e);void 0!==n&&(this._$Eu.set(n,i),t.push(n))})),t}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const r=this[t];this[e]=n,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||x}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(m(t))}else void 0!==t&&e.push(m(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i=e,n=this.constructor.elementStyles,_?i.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const e=document.createElement("style"),n=window.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=t.cssText,i.appendChild(e)})),e;var i,n}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=x){var n,r;const s=this.constructor._$Eh(t,i);if(void 0!==s&&!0===i.reflect){const o=(null!==(r=null===(n=i.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==r?r:S.toAttribute)(e,i.type);this._$Ei=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Ei=null}}_$AK(t,e){var i,n,r;const s=this.constructor,o=s._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=s.getPropertyOptions(o),l=t.converter,a=null!==(r=null!==(n=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==n?n:"function"==typeof l?l:null)&&void 0!==r?r:S.fromAttribute;this._$Ei=o,this[o]=a(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||C)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var O;P.finalized=!0,P.elementProperties=new Map,P.elementStyles=[],P.shadowRootOptions={mode:"open"},null==w||w({ReactiveElement:P}),(null!==(A=globalThis.reactiveElementVersions)&&void 0!==A?A:globalThis.reactiveElementVersions=[]).push("1.0.2");const R=globalThis.trustedTypes,T=R?R.createPolicy("lit-html",{createHTML:t=>t}):void 0,U=`lit$${(Math.random()+"").slice(9)}$`,k="?"+U,H=`<${k}>`,N=document,M=(t="")=>N.createComment(t),L=t=>null===t||"object"!=typeof t&&"function"!=typeof t,j=Array.isArray,D=t=>{var e;return j(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,B=/>/g,W=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,V=/'/g,q=/"/g,F=/^(?:script|style|textarea)$/i,K=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),J=(K(1),K(2),Symbol.for("lit-noChange")),Z=Symbol.for("lit-nothing"),G=new WeakMap,Q=N.createTreeWalker(N,129,null,!1),X=(t,e)=>{const i=t.length-1,n=[];let r,s=2===e?"<svg>":"",o=I;for(let e=0;e<i;e++){const i=t[e];let l,a,h=-1,u=0;for(;u<i.length&&(o.lastIndex=u,a=o.exec(i),null!==a);)u=o.lastIndex,o===I?"!--"===a[1]?o=z:void 0!==a[1]?o=B:void 0!==a[2]?(F.test(a[2])&&(r=RegExp("</"+a[2],"g")),o=W):void 0!==a[3]&&(o=W):o===W?">"===a[0]?(o=null!=r?r:I,h=-1):void 0===a[1]?h=-2:(h=o.lastIndex-a[2].length,l=a[1],o=void 0===a[3]?W:'"'===a[3]?q:V):o===q||o===V?o=W:o===z||o===B?o=I:(o=W,r=void 0);const c=o===W&&t[e+1].startsWith("/>")?" ":"";s+=o===I?i+H:h>=0?(n.push(l),i.slice(0,h)+"$lit$"+i.slice(h)+U+c):i+U+(-2===h?(n.push(void 0),e):c)}const l=s+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==T?T.createHTML(l):l,n]};class Y{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let r=0,s=0;const o=t.length-1,l=this.parts,[a,h]=X(t,e);if(this.el=Y.createElement(a,i),Q.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=Q.nextNode())&&l.length<o;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(U)){const i=h[s++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+"$lit$").split(U),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?rt:"?"===e[1]?ot:"@"===e[1]?lt:nt})}else l.push({type:6,index:r})}for(const e of t)n.removeAttribute(e)}if(F.test(n.tagName)){const t=n.textContent.split(U),e=t.length-1;if(e>0){n.textContent=R?R.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],M()),Q.nextNode(),l.push({type:2,index:++r});n.append(t[e],M())}}}else if(8===n.nodeType)if(n.data===k)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=n.data.indexOf(U,t+1));)l.push({type:7,index:r}),t+=U.length-1}r++}}static createElement(t,e){const i=N.createElement("template");return i.innerHTML=t,i}}function tt(t,e,i=t,n){var r,s,o,l;if(e===J)return e;let a=void 0!==n?null===(r=i._$Cl)||void 0===r?void 0:r[n]:i._$Cu;const h=L(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(s=null==a?void 0:a._$AO)||void 0===s||s.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,i,n)),void 0!==n?(null!==(o=(l=i)._$Cl)&&void 0!==o?o:l._$Cl=[])[n]=a:i._$Cu=a),void 0!==a&&(e=tt(t,a._$AS(t,e.values),a,n)),e}class et{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:n}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:N).importNode(i,!0);Q.currentNode=r;let s=Q.nextNode(),o=0,l=0,a=n[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new it(s,s.nextSibling,this,t):1===a.type?e=new a.ctor(s,a.name,a.strings,this,t):6===a.type&&(e=new at(s,this,t)),this.v.push(e),a=n[++l]}o!==(null==a?void 0:a.index)&&(s=Q.nextNode(),o++)}return r}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class it{constructor(t,e,i,n){var r;this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cg=null===(r=null==n?void 0:n.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=tt(this,t,e),L(t)?t===Z||null==t||""===t?(this._$AH!==Z&&this._$AR(),this._$AH=Z):t!==this._$AH&&t!==J&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):D(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==Z&&L(this._$AH)?this._$AA.nextSibling.data=t:this.S(N.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:n}=t,r="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=Y.createElement(n.h,this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.m(i);else{const t=new et(r,this),e=t.p(this.options);t.m(i),this.S(e),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new Y(t)),e}M(t){j(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const r of t)n===e.length?e.push(i=new it(this.A(M()),this.A(M()),this,this.options)):i=e[n],i._$AI(r),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class nt{constructor(t,e,i,n,r){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const r=this.strings;let s=!1;if(void 0===r)t=tt(this,t,e,0),s=!L(t)||t!==this._$AH&&t!==J,s&&(this._$AH=t);else{const n=t;let o,l;for(t=r[0],o=0;o<r.length-1;o++)l=tt(this,n[i+o],e,o),l===J&&(l=this._$AH[o]),s||(s=!L(l)||l!==this._$AH[o]),l===Z?t=Z:t!==Z&&(t+=(null!=l?l:"")+r[o+1]),this._$AH[o]=l}s&&!n&&this.k(t)}k(t){t===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class rt extends nt{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===Z?void 0:t}}const st=R?R.emptyScript:"";class ot extends nt{constructor(){super(...arguments),this.type=4}k(t){t&&t!==Z?this.element.setAttribute(this.name,st):this.element.removeAttribute(this.name)}}class lt extends nt{constructor(t,e,i,n,r){super(t,e,i,n,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=tt(this,t,e,0))&&void 0!==i?i:Z)===J)return;const n=this._$AH,r=t===Z&&n!==Z||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==Z&&(n===Z||r);r&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class at{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){tt(this,t)}}const ht=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ut,ct;null==ht||ht(Y,it),(null!==(O=globalThis.litHtmlVersions)&&void 0!==O?O:globalThis.litHtmlVersions=[]).push("2.0.2");class dt extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var n,r;const s=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let o=s._$litPart$;if(void 0===o){const t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;s._$litPart$=o=new it(e.insertBefore(M(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return J}}dt.finalized=!0,dt._$litElement$=!0,null===(ut=globalThis.litElementHydrateSupport)||void 0===ut||ut.call(globalThis,{LitElement:dt});const pt=globalThis.litElementPolyfillSupport;null==pt||pt({LitElement:dt});(null!==(ct=globalThis.litElementVersions)&&void 0!==ct?ct:globalThis.litElementVersions=[]).push("3.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ft=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function vt(t){return(e,i)=>{return void 0!==i?(n=t,r=i,void e.constructor.createProperty(r,n)):ft(t,e);var n,r}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _t=function(e){"use strict";function n(){return t(this,n),h(this,r(n).apply(this,arguments))}return a(n,e),i(n,[{key:"params",get:function(){var t;return null===(t=this.parentElement.result)||void 0===t?void 0:t.params}},{key:"render",value:function(){return this.parentElement.visible?this.renderTemplate():null}},{key:"renderTemplate",value:function(){return null}}]),n}(dt);var $t,yt=function(t,e,i,n){var r,s=arguments.length,o=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,n);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(o=(s<3?r(o):s>3?r(e,i,o):r(e,i))||o);return s>3&&o&&Object.defineProperty(e,i,o),o},gt=new Set,mt=function(e){"use strict";function n(){var e;return t(this,n),(e=h(this,r(n).apply(this,arguments)))._onPopstateChange=function(){return e.requestUpdate()},e}return a(n,e),i(n,[{key:"result",get:function(){return this._result},set:function(t){this._result=t||null,gt[this._result?"add":"delete"](this)}},{key:"visible",get:function(){return gt.has(this)&&!!this.result}},{key:"routeAsParent",get:function(){var t,e;return(null!==(e=null===(t=this._parentLitRoutElement)||void 0===t?void 0:t.routeAsParent)&&void 0!==e?e:"")+this.route.replace("(.*)","")||""}},{key:"_updateMatcher",value:function(){var t,e;this._match=c((null!==(e=null===(t=this._parentLitRoutElement)||void 0===t?void 0:t.routeAsParent)&&void 0!==e?e:"")+this.route)}},{key:"createRenderRoot",value:function(){return this}},{key:"connectedCallback",value:function(){o(r(n.prototype),"connectedCallback",this).call(this),this._parentLitRoutElement=function(t){for(var e=t.parentElement;e&&e!==document.body;){if("lit-rout"===e.tagName.toLowerCase())return e;e=e.parentElement}return null}(this),this._updateMatcher(),window.addEventListener("popstate",this._onPopstateChange)}},{key:"attributeChangedCallback",value:function(t,e,i){o(r(n.prototype),"attributeChangedCallback",this).call(this,t,e,i),"route"===t&&this.isConnected&&this._updateMatcher()}},{key:"disconnectedCallback",value:function(){var t=this;o(r(n.prototype),"connectedCallback",this).call(this),window.removeEventListener("popstate",(function(){t.result=!1,t._onPopstateChange()}))}},{key:"shouldUpdate",value:function(){return!!this.route&&this.isConnected}},{key:"willUpdate",value:function(){this.result=this._match(location.pathname)}},{key:"updated",value:function(){for(var t=0;t<this.children.length;t++){var e=this.children[t];e instanceof _t&&e.requestUpdate()}}}]),n}(dt);yt([vt({type:String})],mt.prototype,"route",void 0),mt=yt([($t="lit-rout",t=>{return"function"==typeof t?(e=$t,i=t,window.customElements.define(e,i),i):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){window.customElements.define(t,e)}}})($t,t);var e,i})],mt)}();
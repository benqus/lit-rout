var $6XtLq$swchelpers = require("@swc/helpers");
var $6XtLq$pathtoregexp = require("path-to-regexp");
var $6XtLq$lit = require("lit");
var $6XtLq$litdecorators = require("lit/decorators");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}

$parcel$export(module.exports, "LitRoutElement", () => $e8b057911b7e1cb4$export$55adbf57677534be);
$parcel$export(module.exports, "RoutedLitElement", () => $5f3ae126e0b38295$export$677fad44b501687e);





class $5f3ae126e0b38295$export$677fad44b501687e extends $6XtLq$lit.LitElement {
    get params() {
        return this.parentElement.result?.params;
    }
    /**
   * Don't override this
   */ render() {
        return this.parentElement.visible ? this.renderTemplate() : null;
    }
    /**
   * Override this function to render template when route is visible
   */ renderTemplate() {
        return null;
    }
}


var _class, _descriptor, _dec;
const $e8b057911b7e1cb4$var$_visibleLitRoutElements = new Set();
var _dec1 = $6XtLq$litdecorators.customElement('lit-rout');
let $e8b057911b7e1cb4$export$55adbf57677534be = _class = _dec1((_class = class LitRoutElement extends $6XtLq$lit.LitElement {
    get result() {
        return this._matchResult;
    }
    set result(matchResult) {
        this._matchResult = matchResult || null;
        $e8b057911b7e1cb4$var$_visibleLitRoutElements[this._matchResult ? 'add' : 'delete'](this);
    }
    get visible() {
        return $e8b057911b7e1cb4$var$_visibleLitRoutElements.has(this);
    }
    _updateMatcher() {
        this._match = $6XtLq$pathtoregexp.match(this.route);
    }
    createRenderRoot() {
        return this;
    }
    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('popstate', this._onPopstateChange);
    }
    attributeChangedCallback(name, _old, _new) {
        super.attributeChangedCallback(name, _old, _new);
        name === 'route' && this._updateMatcher();
    }
    disconnectedCallback() {
        super.connectedCallback();
        window.removeEventListener('popstate', ()=>{
            this.result = false;
            this._onPopstateChange();
        });
    }
    shouldUpdate() {
        return !!this.route && this.isConnected;
    }
    willUpdate() {
        this.result = this._match(location.pathname);
    }
    updated() {
        for(let i = 0; i < this.children.length; i++){
            const routedLitElement = this.children[i];
            if (routedLitElement instanceof $5f3ae126e0b38295$export$677fad44b501687e) routedLitElement.requestUpdate();
        }
    }
    constructor(...args){
        super(...args);
        this._onPopstateChange = ()=>this.requestUpdate()
        ;
        $6XtLq$swchelpers.initializerDefineProperty(this, "route", _descriptor, this);
    }
}, _dec = $6XtLq$litdecorators.property({
    type: String
}), _descriptor = $6XtLq$swchelpers.applyDecoratedDescriptor(_class.prototype, "route", [
    _dec
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: void 0
}), _class)) || _class;



var $61fa6e94e3dac45b$exports = {};


$parcel$exportWildcard(module.exports, $61fa6e94e3dac45b$exports);



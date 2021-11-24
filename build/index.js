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

$parcel$export(module.exports, "getRoute", () => $b5491a78640485e3$export$da6d2f7032b7150b);
$parcel$export(module.exports, "getRouteParams", () => $b5491a78640485e3$export$b9a4691d132f3891);
$parcel$export(module.exports, "LitRoutElement", () => $b5491a78640485e3$export$55adbf57677534be);




var $5f3ae126e0b38295$exports = {};

$parcel$export($5f3ae126e0b38295$exports, "RoutedLitElement", () => $5f3ae126e0b38295$export$677fad44b501687e);

class $5f3ae126e0b38295$export$677fad44b501687e extends $6XtLq$lit.LitElement {
    /**
   * Don't override this
   */ render() {
        return this.visible ? this.renderTemplate() : null;
    }
    /**
   * Override this function to render template when route is visible
   */ renderTemplate() {
        return null;
    }
    constructor(...args){
        super(...args);
        this.visible = false;
    }
}



var _class, _descriptor, _dec;
let $b5491a78640485e3$var$_currentRoute = null;
function $b5491a78640485e3$export$da6d2f7032b7150b() {
    return $b5491a78640485e3$var$_currentRoute;
}
function $b5491a78640485e3$export$b9a4691d132f3891() {
    return $b5491a78640485e3$export$da6d2f7032b7150b().result.params;
}
var _dec1 = $6XtLq$litdecorators.customElement('lit-rout');
let $b5491a78640485e3$export$55adbf57677534be = _class = _dec1((_class = class LitRoutElement extends $6XtLq$lit.LitElement {
    get result() {
        return this._matchResult || null;
    }
    get visible() {
        return $b5491a78640485e3$export$da6d2f7032b7150b() === this;
    }
    createRenderRoot() {
        return this;
    }
    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('popstate', this._onPopstateChange);
    }
    disconnectedCallback() {
        super.connectedCallback();
        window.removeEventListener('popstate', ()=>{
            this._matchResult = false;
            this._onPopstateChange();
            $b5491a78640485e3$var$_currentRoute = this.visible ? null : $b5491a78640485e3$var$_currentRoute;
        });
    }
    shouldUpdate() {
        return !!this.route && this.isConnected;
    }
    willUpdate() {
        const matcher = $6XtLq$pathtoregexp.match(this.route);
        this._matchResult = matcher(location.pathname);
        $b5491a78640485e3$var$_currentRoute = this.result ? this : $b5491a78640485e3$var$_currentRoute;
    }
    updated() {
        for(let i = 0; i < this.children.length; i++){
            const routedLitElement = this.children[i];
            if (routedLitElement instanceof $5f3ae126e0b38295$export$677fad44b501687e) {
                routedLitElement.visible = this.visible;
                routedLitElement.requestUpdate();
            }
        }
    }
    constructor(...args){
        super(...args);
        this._onPopstateChange = ()=>{
            $b5491a78640485e3$var$_currentRoute = null;
            this.requestUpdate();
        };
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
$parcel$exportWildcard(module.exports, $5f3ae126e0b38295$exports);



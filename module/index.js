import {initializerDefineProperty as $21Pif$initializerDefineProperty, applyDecoratedDescriptor as $21Pif$applyDecoratedDescriptor} from "@swc/helpers";
import {match as $21Pif$match} from "path-to-regexp";
import {LitElement as $21Pif$LitElement} from "lit";
import {customElement as $21Pif$customElement, property as $21Pif$property} from "lit/decorators";






class $b9283377b48b63e8$export$677fad44b501687e extends $21Pif$LitElement {
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
let $eb7a7ac02431551a$var$_currentRoute = null;
function $eb7a7ac02431551a$export$da6d2f7032b7150b() {
    return $eb7a7ac02431551a$var$_currentRoute;
}
function $eb7a7ac02431551a$export$b9a4691d132f3891() {
    return $eb7a7ac02431551a$export$da6d2f7032b7150b().result.params;
}
var _dec1 = $21Pif$customElement('lit-rout');
let $eb7a7ac02431551a$export$55adbf57677534be = _class = _dec1((_class = class LitRoutElement extends $21Pif$LitElement {
    get result() {
        return this._matchResult || null;
    }
    get visible() {
        return $eb7a7ac02431551a$export$da6d2f7032b7150b() === this;
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
            $eb7a7ac02431551a$var$_currentRoute = this.visible ? null : $eb7a7ac02431551a$var$_currentRoute;
        });
    }
    shouldUpdate() {
        return !!this.route && this.isConnected;
    }
    willUpdate() {
        const matcher = $21Pif$match(this.route);
        this._matchResult = matcher(location.pathname);
        $eb7a7ac02431551a$var$_currentRoute = this.result ? this : $eb7a7ac02431551a$var$_currentRoute;
    }
    updated() {
        for(let i = 0; i < this.children.length; i++){
            const routedLitElement = this.children[i];
            if (routedLitElement instanceof $b9283377b48b63e8$export$677fad44b501687e) {
                routedLitElement.visible = this.visible;
                routedLitElement.requestUpdate();
            }
        }
    }
    constructor(...args){
        super(...args);
        this._onPopstateChange = ()=>{
            $eb7a7ac02431551a$var$_currentRoute = null;
            this.requestUpdate();
        };
        $21Pif$initializerDefineProperty(this, "route", _descriptor, this);
    }
}, _dec = $21Pif$property({
    type: String
}), _descriptor = $21Pif$applyDecoratedDescriptor(_class.prototype, "route", [
    _dec
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: void 0
}), _class)) || _class;


export {$eb7a7ac02431551a$export$da6d2f7032b7150b as getRoute, $eb7a7ac02431551a$export$b9a4691d132f3891 as getRouteParams, $eb7a7ac02431551a$export$55adbf57677534be as LitRoutElement, $b9283377b48b63e8$export$677fad44b501687e as RoutedLitElement};

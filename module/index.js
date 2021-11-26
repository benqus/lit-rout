import {initializerDefineProperty as $21Pif$initializerDefineProperty, applyDecoratedDescriptor as $21Pif$applyDecoratedDescriptor} from "@swc/helpers";
import {match as $21Pif$match} from "path-to-regexp";
import {LitElement as $21Pif$LitElement} from "lit";
import {customElement as $21Pif$customElement, property as $21Pif$property} from "lit/decorators";






class $b9283377b48b63e8$export$677fad44b501687e extends $21Pif$LitElement {
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


function $58efdc2e8d1fdf2e$export$94c03db31f0f850f(lre) {
    let parent = lre.parentElement;
    while(parent && parent !== document.body){
        if (parent.tagName.toLowerCase() === 'lit-rout') return parent;
        parent = parent.parentElement;
    }
    return null;
}


var _class, _descriptor, _dec;
const $1f39a55ce7d31fcf$var$_visibleLitRoutElements = new Set();
var _dec1 = $21Pif$customElement('lit-rout');
let $1f39a55ce7d31fcf$export$55adbf57677534be = _class = _dec1((_class = class LitRoutElement extends $21Pif$LitElement {
    get result() {
        return this._result;
    }
    set result(matchResult) {
        this._result = matchResult || null;
        $1f39a55ce7d31fcf$var$_visibleLitRoutElements[this._result ? 'add' : 'delete'](this);
    }
    get visible() {
        return $1f39a55ce7d31fcf$var$_visibleLitRoutElements.has(this) && !!this.result;
    }
    get routeAsParent() {
        return (this._parentLitRoutElement?.routeAsParent ?? '') + this.route.replace('(.*)', '') || '';
    }
    _updateMatcher() {
        this._match = $21Pif$match((this._parentLitRoutElement?.routeAsParent ?? '') + this.route);
    }
    createRenderRoot() {
        return this;
    }
    connectedCallback() {
        super.connectedCallback();
        this._parentLitRoutElement = $58efdc2e8d1fdf2e$export$94c03db31f0f850f(this);
        this._updateMatcher();
        window.addEventListener('popstate', this._onPopstateChange);
    }
    attributeChangedCallback(name, _old, _new) {
        super.attributeChangedCallback(name, _old, _new);
        name === 'route' && this.isConnected && this._updateMatcher();
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
            if (routedLitElement instanceof $b9283377b48b63e8$export$677fad44b501687e) routedLitElement.requestUpdate();
        }
    }
    constructor(...args){
        super(...args);
        this._onPopstateChange = ()=>this.requestUpdate()
        ;
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





export {$1f39a55ce7d31fcf$export$55adbf57677534be as LitRoutElement, $b9283377b48b63e8$export$677fad44b501687e as RoutedLitElement};

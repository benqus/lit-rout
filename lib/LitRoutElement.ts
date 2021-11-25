import { match, MatchFunction, MatchResult } from 'path-to-regexp';
import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators';

import { RoutedLitElement } from './RoutedLitElement';
import { ILitRoutElement } from './types';

const _visibleLitRoutElements = new Set<LitRoutElement>();

@customElement('lit-rout')
export class LitRoutElement extends LitElement implements ILitRoutElement {
  private _match: MatchFunction;
  private _matchResult: MatchResult;
  private _onPopstateChange = () => this.requestUpdate();

  public get result(): MatchResult | null {
    return this._matchResult;
  }
  private set result(matchResult: MatchResult | false) {
    this._matchResult = matchResult || null;
    _visibleLitRoutElements[this._matchResult ? 'add' : 'delete'](this);
  }

  public get visible(): boolean {
    return _visibleLitRoutElements.has(this);
  }

  @property({ type: String })
  public route: string;

  private _updateMatcher() {
    this._match = match(this.route);
  }

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('popstate', this._onPopstateChange);
  }

  attributeChangedCallback(name: string, _old: string, _new: string) {
    super.attributeChangedCallback(name, _old, _new);
    name === 'route' && this._updateMatcher();
  }

  disconnectedCallback() {
    super.connectedCallback();
    window.removeEventListener('popstate', () => {
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
    for (let i = 0; i < this.children.length; i++) {
      const routedLitElement = this.children[i];
      if (routedLitElement instanceof RoutedLitElement) {
        routedLitElement.requestUpdate();
      }
    }
  }
}

import { match, MatchResult } from 'path-to-regexp';
import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators';

import { RoutedLitElement } from './RoutedLitElement';

let _currentRoute: LitRoutElement = null;

export * from './RoutedLitElement';

export function getRoute(): LitRoutElement {
  return _currentRoute;
}

export function getRouteParams(): MatchResult['params'] {
  return getRoute().result.params;
}

@customElement('lit-rout')
export class LitRoutElement extends LitElement {
  private _matchResult: MatchResult | false;
  private _onPopstateChange = () => {
    _currentRoute = null;
    this.requestUpdate();
  };

  @property({ type: String })
  public route: string;

  public get result(): MatchResult | null {
    return this._matchResult || null;
  }

  public get visible(): boolean {
    return getRoute() === this;
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
    window.removeEventListener('popstate', () => {
      this._matchResult = false;
      this._onPopstateChange();
      _currentRoute = this.visible ? null : _currentRoute;
    });
  }

  shouldUpdate() {
    return !!this.route && this.isConnected;
  }

  willUpdate() {
    const matcher = match(this.route);
    this._matchResult = matcher(location.pathname);
    _currentRoute = this.result ? this : _currentRoute;
  }

  updated() {
    for (let i = 0; i < this.children.length; i++) {
      const routedLitElement = this.children[i];
      if (routedLitElement instanceof RoutedLitElement) {
        routedLitElement.visible = this.visible;
        routedLitElement.requestUpdate();
      }
    }
  }
}

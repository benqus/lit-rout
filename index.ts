import { match, MatchResult } from "path-to-regexp";
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators";

@customElement("lit-rout")
export class LitRout extends LitElement {
  @property({ type: String })
  public route: string;

  private _matchResult: MatchResult | false;

  private _onPopstateChange = () => {
    this.requestUpdate();
  };

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("popstate", this._onPopstateChange);
  }

  disconnectedCallback() {
    super.connectedCallback();
    window.removeEventListener("popstate", this._onPopstateChange);
  }

  willUpdate() {
    if (!this.route) return;
    const matcher = match(this.route);
    this._matchResult = matcher(location.pathname);
  }

  render() {
    if (!this._matchResult) return null;
    return html`<slot></slot>`;
  }
}

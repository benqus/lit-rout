import { LitElement, TemplateResult } from 'lit';

export class RoutedLitElement extends LitElement {
  public visible = false;

  /**
   * Don't override this
   */
  render(): TemplateResult {
    return this.visible ? this.renderTemplate() : null;
  }

  /**
   * Override this function to render template when route is visible
   */
  renderTemplate(): TemplateResult {
    return null;
  }
}

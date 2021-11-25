import { LitElement, TemplateResult } from 'lit';
import { MatchResult } from 'path-to-regexp';

import { IRoutedLitElement, ILitRoutElement } from './types';

export class RoutedLitElement extends LitElement implements IRoutedLitElement {
  public get params(): MatchResult['params'] | null {
    return (this.parentElement as ILitRoutElement).result?.params;
  }

  /**
   * Don't override this
   */
  render(): TemplateResult {
    return (this.parentElement as ILitRoutElement).visible
      ? this.renderTemplate()
      : null;
  }

  /**
   * Override this function to render template when route is visible
   */
  renderTemplate(): TemplateResult {
    return null;
  }
}

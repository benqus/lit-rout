import { LitElement, TemplateResult } from 'lit';

import { IRoutedLitElement, ILitRoutElement } from './types';

export class RoutedLitElement<T extends object> extends LitElement implements IRoutedLitElement<T> {
  public get params(): T | null {
    return (this.parentElement as ILitRoutElement).result?.params as T;
  }

  /**
   * Don't override this
   */
  render(): TemplateResult {
    return (this.parentElement as ILitRoutElement).visible ? this.renderTemplate() : null;
  }

  /**
   * Override this function to render template when route is visible
   */
  renderTemplate(): TemplateResult {
    return null;
  }
}
